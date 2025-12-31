/**
 * IntegrateWise Webhook Verification - Node.js / TypeScript
 *
 * This module provides webhook signature verification, timestamp validation,
 * and idempotency handling for IntegrateWise webhooks.
 *
 * @example
 * ```typescript
 * import { verifyWebhook, WebhookVerificationError } from './webhook-verification';
 *
 * app.post('/webhooks/integratewise', async (req, res) => {
 *   try {
 *     const event = verifyWebhook(req.body, req.headers, process.env.IW_WEBHOOK_SECRET);
 *     // Process event
 *     res.json({ status: 'accepted', event_id: event.event_id });
 *   } catch (error) {
 *     if (error instanceof WebhookVerificationError) {
 *       res.status(error.statusCode).json({ error: error.code });
 *     } else {
 *       res.status(500).json({ error: 'internal_error' });
 *     }
 *   }
 * });
 * ```
 */

import crypto from 'crypto';

// =============================================================================
// Types
// =============================================================================

export interface WebhookHeaders {
  'x-iw-signature'?: string;
  'x-iw-timestamp'?: string;
  'x-iw-idempotency-key'?: string;
  'x-iw-signature-version'?: string;
  [key: string]: string | undefined;
}

export interface WebhookEvent {
  event_id: string;
  source: string;
  type: string;
  workspace_id: string;
  timestamp: string;
  actor?: {
    id: string;
    email?: string;
  };
  data: Record<string, unknown>;
}

export interface VerificationOptions {
  /**
   * Clock skew tolerance in seconds (default: 300 = 5 minutes)
   */
  toleranceSeconds?: number;

  /**
   * Skip timestamp validation (not recommended for production)
   */
  skipTimestampValidation?: boolean;

  /**
   * Custom idempotency store for duplicate detection
   */
  idempotencyStore?: IdempotencyStore;
}

export interface IdempotencyStore {
  has(key: string): Promise<boolean>;
  set(key: string, value: unknown, ttlSeconds: number): Promise<void>;
  get(key: string): Promise<unknown | null>;
}

// =============================================================================
// Errors
// =============================================================================

export class WebhookVerificationError extends Error {
  constructor(
    public code: string,
    message: string,
    public statusCode: number = 401
  ) {
    super(message);
    this.name = 'WebhookVerificationError';
  }
}

export class SignatureInvalidError extends WebhookVerificationError {
  constructor(message = 'HMAC signature verification failed') {
    super('invalid_signature', message, 401);
  }
}

export class TimestampInvalidError extends WebhookVerificationError {
  constructor(message = 'Timestamp outside tolerance window') {
    super('invalid_timestamp', message, 401);
  }
}

export class MissingHeadersError extends WebhookVerificationError {
  constructor(missing: string[]) {
    super('missing_headers', `Missing required headers: ${missing.join(', ')}`, 401);
  }
}

export class DuplicateEventError extends WebhookVerificationError {
  constructor(public idempotencyKey: string) {
    super('duplicate_event', 'Event already processed', 200);
  }
}

// =============================================================================
// Constants
// =============================================================================

const SIGNATURE_PREFIX = 'sha256=';
const DEFAULT_TOLERANCE_SECONDS = 300; // 5 minutes
const IDEMPOTENCY_TTL_SECONDS = 7 * 24 * 60 * 60; // 7 days

// =============================================================================
// Verification Functions
// =============================================================================

/**
 * Verify an IntegrateWise webhook request.
 *
 * @param rawBody - Raw request body as string or Buffer
 * @param headers - Request headers (case-insensitive)
 * @param secret - Workspace webhook secret
 * @param options - Verification options
 * @returns Parsed webhook event
 * @throws WebhookVerificationError if verification fails
 */
export function verifyWebhook(
  rawBody: string | Buffer,
  headers: WebhookHeaders | Record<string, string | string[] | undefined>,
  secret: string,
  options: VerificationOptions = {}
): WebhookEvent {
  const normalizedHeaders = normalizeHeaders(headers);

  // 1. Check required headers
  const requiredHeaders = ['x-iw-signature', 'x-iw-timestamp', 'x-iw-idempotency-key'];
  const missingHeaders = requiredHeaders.filter((h) => !normalizedHeaders[h]);
  if (missingHeaders.length > 0) {
    throw new MissingHeadersError(missingHeaders);
  }

  const signature = normalizedHeaders['x-iw-signature']!;
  const timestamp = normalizedHeaders['x-iw-timestamp']!;
  const idempotencyKey = normalizedHeaders['x-iw-idempotency-key']!;

  // 2. Validate timestamp
  if (!options.skipTimestampValidation) {
    validateTimestamp(timestamp, options.toleranceSeconds ?? DEFAULT_TOLERANCE_SECONDS);
  }

  // 3. Verify signature
  const bodyString = typeof rawBody === 'string' ? rawBody : rawBody.toString('utf-8');
  verifySignature(signature, timestamp, bodyString, secret);

  // 4. Parse payload
  let event: WebhookEvent;
  try {
    event = JSON.parse(bodyString);
  } catch {
    throw new WebhookVerificationError('invalid_payload', 'Malformed JSON payload', 400);
  }

  // 5. Attach idempotency key for tracking
  (event as WebhookEvent & { _idempotencyKey: string })._idempotencyKey = idempotencyKey;

  return event;
}

/**
 * Verify webhook signature using HMAC-SHA256.
 *
 * @param signature - Received signature header value
 * @param timestamp - Received timestamp header value
 * @param body - Raw request body
 * @param secret - Webhook secret
 * @throws SignatureInvalidError if verification fails
 */
export function verifySignature(
  signature: string,
  timestamp: string,
  body: string,
  secret: string
): void {
  if (!signature.startsWith(SIGNATURE_PREFIX)) {
    throw new SignatureInvalidError('Signature must start with sha256=');
  }

  const receivedSig = signature.slice(SIGNATURE_PREFIX.length);
  const message = `${timestamp}.${body}`;

  const expectedSig = crypto
    .createHmac('sha256', secret)
    .update(message, 'utf-8')
    .digest('hex');

  // Timing-safe comparison
  if (!timingSafeEqual(receivedSig, expectedSig)) {
    throw new SignatureInvalidError();
  }
}

/**
 * Validate timestamp is within tolerance window.
 *
 * @param timestamp - Unix timestamp as string
 * @param toleranceSeconds - Tolerance in seconds
 * @throws TimestampInvalidError if outside window
 */
export function validateTimestamp(timestamp: string, toleranceSeconds: number): void {
  const ts = parseInt(timestamp, 10);
  if (isNaN(ts)) {
    throw new TimestampInvalidError('Invalid timestamp format');
  }

  const now = Math.floor(Date.now() / 1000);
  const diff = Math.abs(now - ts);

  if (diff > toleranceSeconds) {
    throw new TimestampInvalidError(
      `Timestamp ${ts} is ${diff}s from current time (tolerance: ${toleranceSeconds}s)`
    );
  }
}

/**
 * Generate a webhook signature for testing or outbound webhooks.
 *
 * @param body - Request body
 * @param secret - Webhook secret
 * @param timestamp - Optional timestamp (defaults to now)
 * @returns Object with signature and timestamp headers
 */
export function generateSignature(
  body: string | object,
  secret: string,
  timestamp?: number
): { signature: string; timestamp: string } {
  const ts = timestamp ?? Math.floor(Date.now() / 1000);
  const bodyString = typeof body === 'string' ? body : JSON.stringify(body);
  const message = `${ts}.${bodyString}`;

  const sig = crypto.createHmac('sha256', secret).update(message, 'utf-8').digest('hex');

  return {
    signature: `${SIGNATURE_PREFIX}${sig}`,
    timestamp: String(ts),
  };
}

/**
 * Create idempotency key from event data.
 *
 * @param eventType - Event type
 * @param sourceId - Source-specific ID
 * @param timestamp - Event timestamp (ms)
 * @returns Idempotency key
 */
export function createIdempotencyKey(
  eventType: string,
  sourceId: string,
  timestamp: number = Date.now()
): string {
  return `${eventType}_${sourceId}_${timestamp}`;
}

// =============================================================================
// In-Memory Idempotency Store (for development/testing)
// =============================================================================

/**
 * Simple in-memory idempotency store.
 * For production, use Redis or similar.
 */
export class InMemoryIdempotencyStore implements IdempotencyStore {
  private store = new Map<string, { value: unknown; expiresAt: number }>();

  async has(key: string): Promise<boolean> {
    this.cleanup();
    return this.store.has(key);
  }

  async set(key: string, value: unknown, ttlSeconds: number): Promise<void> {
    this.store.set(key, {
      value,
      expiresAt: Date.now() + ttlSeconds * 1000,
    });
  }

  async get(key: string): Promise<unknown | null> {
    this.cleanup();
    const entry = this.store.get(key);
    return entry?.value ?? null;
  }

  private cleanup(): void {
    const now = Date.now();
    for (const [key, entry] of this.store) {
      if (entry.expiresAt < now) {
        this.store.delete(key);
      }
    }
  }
}

// =============================================================================
// Express Middleware
// =============================================================================

/**
 * Express middleware for webhook verification.
 *
 * @example
 * ```typescript
 * import express from 'express';
 * import { webhookMiddleware } from './webhook-verification';
 *
 * const app = express();
 *
 * app.post('/webhooks/integratewise',
 *   express.raw({ type: 'application/json' }),
 *   webhookMiddleware(process.env.IW_WEBHOOK_SECRET!),
 *   (req, res) => {
 *     const event = req.webhookEvent;
 *     res.json({ status: 'accepted', event_id: event.event_id });
 *   }
 * );
 * ```
 */
export function webhookMiddleware(secret: string, options: VerificationOptions = {}) {
  return (
    req: { body: Buffer | string; headers: Record<string, string | string[] | undefined>; webhookEvent?: WebhookEvent },
    res: { status: (code: number) => { json: (data: unknown) => void } },
    next: (error?: Error) => void
  ): void => {
    try {
      const event = verifyWebhook(req.body, req.headers, secret, options);
      req.webhookEvent = event;
      next();
    } catch (error) {
      if (error instanceof WebhookVerificationError) {
        res.status(error.statusCode).json({
          error: {
            code: error.code,
            message: error.message,
          },
        });
      } else {
        next(error as Error);
      }
    }
  };
}

// =============================================================================
// Helpers
// =============================================================================

function normalizeHeaders(
  headers: Record<string, string | string[] | undefined>
): Record<string, string | undefined> {
  const normalized: Record<string, string | undefined> = {};
  for (const [key, value] of Object.entries(headers)) {
    const normalizedKey = key.toLowerCase();
    normalized[normalizedKey] = Array.isArray(value) ? value[0] : value;
  }
  return normalized;
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) {
    // Still do comparison to prevent timing attacks on length
    crypto.timingSafeEqual(Buffer.from(a), Buffer.from(a));
    return false;
  }
  return crypto.timingSafeEqual(Buffer.from(a), Buffer.from(b));
}

// =============================================================================
// Exports for Testing
// =============================================================================

export const __testing = {
  SIGNATURE_PREFIX,
  DEFAULT_TOLERANCE_SECONDS,
  IDEMPOTENCY_TTL_SECONDS,
  normalizeHeaders,
  timingSafeEqual,
};
