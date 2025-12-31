/**
 * Webhook Verification Example (Node.js)
 * 
 * Demonstrates HMAC-SHA256 signature verification, timestamp validation,
 * and idempotency checking for IntegrateWise OS webhooks.
 */

const crypto = require('crypto');
const express = require('express');

const app = express();
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET || 'your-webhook-secret';
const TIMESTAMP_TOLERANCE = 300; // 5 minutes in seconds
const REPLAY_WINDOW = 300; // 5 minutes in seconds

// In-memory idempotency store (use Redis/DB in production)
const idempotencyStore = new Map();

app.use(express.json({
  verify: (req, res, buf) => {
    req.rawBody = buf;
  }
}));

/**
 * Verify timestamp is within tolerance window
 */
function isTimestampValid(timestamp, toleranceSeconds = TIMESTAMP_TOLERANCE) {
  const now = Math.floor(Date.now() / 1000);
  const diff = Math.abs(now - timestamp);
  return diff <= toleranceSeconds;
}

/**
 * Calculate HMAC-SHA256 signature
 */
function calculateSignature(secret, timestamp, body) {
  const payload = `${timestamp}.${JSON.stringify(body)}`;
  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(payload);
  return `sha256=${hmac.digest('hex')}`;
}

/**
 * Verify signature using timing-safe comparison
 */
function verifySignature(secret, timestamp, body, signature) {
  const expected = calculateSignature(secret, timestamp, body);
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expected)
  );
}

/**
 * Check if idempotency key was already processed
 */
async function checkIdempotency(idempotencyKey) {
  const stored = idempotencyStore.get(idempotencyKey);
  if (!stored) {
    return null;
  }

  // Check if within replay window
  const now = Date.now();
  const age = now - stored.timestamp;
  if (age > REPLAY_WINDOW * 1000) {
    idempotencyStore.delete(idempotencyKey);
    return null;
  }

  return stored.response;
}

/**
 * Store idempotency key with response
 */
async function storeIdempotency(idempotencyKey, response) {
  idempotencyStore.set(idempotencyKey, {
    timestamp: Date.now(),
    response: response
  });

  // Cleanup old entries (in production, use TTL)
  setTimeout(() => {
    idempotencyStore.delete(idempotencyKey);
  }, REPLAY_WINDOW * 1000);
}

/**
 * Process webhook payload
 */
async function processWebhook(connector, payload) {
  // Simulate processing
  console.log(`Processing webhook from ${connector}:`, payload);
  
  // In real implementation:
  // 1. Parse payload
  // 2. Map to Spine entity
  // 3. Validate constraints
  // 4. Store in Spine
  // 5. Trigger downstream processing
  
  return { success: true, processedAt: new Date().toISOString() };
}

/**
 * Webhook endpoint handler
 */
app.post('/webhooks/:connector', async (req, res) => {
  const { connector } = req.params;
  const signature = req.headers['x-iw-signature'];
  const timestamp = req.headers['x-iw-timestamp'];
  const idempotencyKey = req.headers['x-iw-idempotency-key'];

  // Validate required headers
  if (!signature || !timestamp) {
    return res.status(400).json({
      error: 'Missing required headers',
      required: ['X-IW-Signature', 'X-IW-Timestamp']
    });
  }

  // Verify timestamp
  const timestampInt = parseInt(timestamp, 10);
  if (isNaN(timestampInt) || !isTimestampValid(timestampInt)) {
    return res.status(400).json({
      error: 'Invalid timestamp',
      message: 'Timestamp must be within 5 minutes of current time'
    });
  }

  // Verify signature
  if (!verifySignature(WEBHOOK_SECRET, timestamp, req.body, signature)) {
    return res.status(401).json({
      error: 'Invalid signature',
      message: 'HMAC-SHA256 signature verification failed'
    });
  }

  // Check idempotency
  if (idempotencyKey) {
    const processed = await checkIdempotency(idempotencyKey);
    if (processed) {
      return res.status(200).json({
        message: 'Already processed',
        cached: processed
      });
    }
  }

  // Process webhook
  try {
    const result = await processWebhook(connector, req.body);
    
    // Store idempotency key
    if (idempotencyKey) {
      await storeIdempotency(idempotencyKey, result);
    }

    res.status(200).json({
      success: true,
      result: result
    });
  } catch (error) {
    console.error('Webhook processing error:', error);
    res.status(500).json({
      error: 'Processing failed',
      message: error.message
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Webhook server listening on port ${PORT}`);
});

module.exports = {
  isTimestampValid,
  calculateSignature,
  verifySignature,
  checkIdempotency,
  storeIdempotency
};
