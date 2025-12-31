"""
IntegrateWise Webhook Verification - Python

This module provides webhook signature verification, timestamp validation,
and idempotency handling for IntegrateWise webhooks.

Example:
    from flask import Flask, request, jsonify
    from webhook_verification import verify_webhook, WebhookVerificationError

    app = Flask(__name__)

    @app.route('/webhooks/integratewise', methods=['POST'])
    def handle_webhook():
        try:
            event = verify_webhook(
                raw_body=request.get_data(),
                headers=dict(request.headers),
                secret=os.environ['IW_WEBHOOK_SECRET']
            )
            # Process event
            return jsonify({'status': 'accepted', 'event_id': event['event_id']})
        except WebhookVerificationError as e:
            return jsonify({'error': e.code}), e.status_code
"""

import hmac
import hashlib
import json
import time
from dataclasses import dataclass
from typing import Any, Dict, Optional, Protocol, Union
from abc import ABC, abstractmethod


# =============================================================================
# Constants
# =============================================================================

SIGNATURE_PREFIX = "sha256="
DEFAULT_TOLERANCE_SECONDS = 300  # 5 minutes
IDEMPOTENCY_TTL_SECONDS = 7 * 24 * 60 * 60  # 7 days


# =============================================================================
# Exceptions
# =============================================================================

class WebhookVerificationError(Exception):
    """Base exception for webhook verification errors."""

    def __init__(
        self,
        code: str,
        message: str,
        status_code: int = 401
    ):
        self.code = code
        self.message = message
        self.status_code = status_code
        super().__init__(message)


class SignatureInvalidError(WebhookVerificationError):
    """Raised when HMAC signature verification fails."""

    def __init__(self, message: str = "HMAC signature verification failed"):
        super().__init__("invalid_signature", message, 401)


class TimestampInvalidError(WebhookVerificationError):
    """Raised when timestamp is outside tolerance window."""

    def __init__(self, message: str = "Timestamp outside tolerance window"):
        super().__init__("invalid_timestamp", message, 401)


class MissingHeadersError(WebhookVerificationError):
    """Raised when required headers are missing."""

    def __init__(self, missing: list[str]):
        super().__init__(
            "missing_headers",
            f"Missing required headers: {', '.join(missing)}",
            401
        )


class DuplicateEventError(WebhookVerificationError):
    """Raised when a duplicate event is detected."""

    def __init__(self, idempotency_key: str):
        self.idempotency_key = idempotency_key
        super().__init__("duplicate_event", "Event already processed", 200)


class InvalidPayloadError(WebhookVerificationError):
    """Raised when the payload is malformed."""

    def __init__(self, message: str = "Malformed JSON payload"):
        super().__init__("invalid_payload", message, 400)


# =============================================================================
# Types
# =============================================================================

@dataclass
class WebhookEvent:
    """Parsed webhook event."""
    event_id: str
    source: str
    type: str
    workspace_id: str
    timestamp: str
    data: Dict[str, Any]
    actor: Optional[Dict[str, Any]] = None
    idempotency_key: Optional[str] = None


class IdempotencyStore(Protocol):
    """Protocol for idempotency stores."""

    def has(self, key: str) -> bool:
        """Check if key exists."""
        ...

    def set(self, key: str, value: Any, ttl_seconds: int) -> None:
        """Store key with TTL."""
        ...

    def get(self, key: str) -> Optional[Any]:
        """Get value for key."""
        ...


# =============================================================================
# In-Memory Idempotency Store
# =============================================================================

class InMemoryIdempotencyStore:
    """
    Simple in-memory idempotency store.
    For production, use Redis or similar.
    """

    def __init__(self):
        self._store: Dict[str, tuple[Any, float]] = {}

    def has(self, key: str) -> bool:
        self._cleanup()
        return key in self._store

    def set(self, key: str, value: Any, ttl_seconds: int) -> None:
        expires_at = time.time() + ttl_seconds
        self._store[key] = (value, expires_at)

    def get(self, key: str) -> Optional[Any]:
        self._cleanup()
        entry = self._store.get(key)
        return entry[0] if entry else None

    def _cleanup(self) -> None:
        now = time.time()
        expired = [k for k, (_, exp) in self._store.items() if exp < now]
        for k in expired:
            del self._store[k]


# =============================================================================
# Verification Functions
# =============================================================================

def verify_webhook(
    raw_body: Union[str, bytes],
    headers: Dict[str, str],
    secret: str,
    tolerance_seconds: int = DEFAULT_TOLERANCE_SECONDS,
    skip_timestamp_validation: bool = False,
    idempotency_store: Optional[IdempotencyStore] = None
) -> WebhookEvent:
    """
    Verify an IntegrateWise webhook request.

    Args:
        raw_body: Raw request body as string or bytes
        headers: Request headers (case-insensitive matching)
        secret: Workspace webhook secret
        tolerance_seconds: Clock skew tolerance (default: 300s)
        skip_timestamp_validation: Skip timestamp check (not recommended)
        idempotency_store: Optional store for duplicate detection

    Returns:
        Parsed webhook event

    Raises:
        WebhookVerificationError: If verification fails
    """
    normalized_headers = _normalize_headers(headers)

    # 1. Check required headers
    required_headers = ['x-iw-signature', 'x-iw-timestamp', 'x-iw-idempotency-key']
    missing = [h for h in required_headers if h not in normalized_headers]
    if missing:
        raise MissingHeadersError(missing)

    signature = normalized_headers['x-iw-signature']
    timestamp = normalized_headers['x-iw-timestamp']
    idempotency_key = normalized_headers['x-iw-idempotency-key']

    # 2. Validate timestamp
    if not skip_timestamp_validation:
        validate_timestamp(timestamp, tolerance_seconds)

    # 3. Verify signature
    body_str = raw_body.decode('utf-8') if isinstance(raw_body, bytes) else raw_body
    verify_signature(signature, timestamp, body_str, secret)

    # 4. Check idempotency
    if idempotency_store and idempotency_store.has(idempotency_key):
        raise DuplicateEventError(idempotency_key)

    # 5. Parse payload
    try:
        payload = json.loads(body_str)
    except json.JSONDecodeError as e:
        raise InvalidPayloadError(f"Invalid JSON: {e}")

    # 6. Create event object
    event = WebhookEvent(
        event_id=payload.get('event_id', ''),
        source=payload.get('source', ''),
        type=payload.get('type', ''),
        workspace_id=payload.get('workspace_id', ''),
        timestamp=payload.get('timestamp', ''),
        data=payload.get('data', {}),
        actor=payload.get('actor'),
        idempotency_key=idempotency_key
    )

    # 7. Store idempotency key
    if idempotency_store:
        idempotency_store.set(
            idempotency_key,
            {'event_id': event.event_id, 'processed_at': time.time()},
            IDEMPOTENCY_TTL_SECONDS
        )

    return event


def verify_signature(
    signature: str,
    timestamp: str,
    body: str,
    secret: str
) -> None:
    """
    Verify webhook signature using HMAC-SHA256.

    Args:
        signature: Received signature header value
        timestamp: Received timestamp header value
        body: Raw request body
        secret: Webhook secret

    Raises:
        SignatureInvalidError: If verification fails
    """
    if not signature.startswith(SIGNATURE_PREFIX):
        raise SignatureInvalidError("Signature must start with sha256=")

    received_sig = signature[len(SIGNATURE_PREFIX):]
    message = f"{timestamp}.{body}"

    expected_sig = hmac.new(
        secret.encode('utf-8'),
        message.encode('utf-8'),
        hashlib.sha256
    ).hexdigest()

    # Timing-safe comparison
    if not hmac.compare_digest(received_sig, expected_sig):
        raise SignatureInvalidError()


def validate_timestamp(
    timestamp: str,
    tolerance_seconds: int = DEFAULT_TOLERANCE_SECONDS
) -> None:
    """
    Validate timestamp is within tolerance window.

    Args:
        timestamp: Unix timestamp as string
        tolerance_seconds: Tolerance in seconds

    Raises:
        TimestampInvalidError: If outside window
    """
    try:
        ts = int(timestamp)
    except ValueError:
        raise TimestampInvalidError("Invalid timestamp format")

    now = int(time.time())
    diff = abs(now - ts)

    if diff > tolerance_seconds:
        raise TimestampInvalidError(
            f"Timestamp {ts} is {diff}s from current time "
            f"(tolerance: {tolerance_seconds}s)"
        )


def generate_signature(
    body: Union[str, dict],
    secret: str,
    timestamp: Optional[int] = None
) -> tuple[str, str]:
    """
    Generate a webhook signature for testing or outbound webhooks.

    Args:
        body: Request body (str or dict)
        secret: Webhook secret
        timestamp: Optional timestamp (defaults to now)

    Returns:
        Tuple of (signature, timestamp) as strings
    """
    ts = timestamp if timestamp is not None else int(time.time())
    body_str = json.dumps(body) if isinstance(body, dict) else body
    message = f"{ts}.{body_str}"

    sig = hmac.new(
        secret.encode('utf-8'),
        message.encode('utf-8'),
        hashlib.sha256
    ).hexdigest()

    return f"{SIGNATURE_PREFIX}{sig}", str(ts)


def create_idempotency_key(
    event_type: str,
    source_id: str,
    timestamp_ms: Optional[int] = None
) -> str:
    """
    Create idempotency key from event data.

    Args:
        event_type: Event type
        source_id: Source-specific ID
        timestamp_ms: Event timestamp in milliseconds

    Returns:
        Idempotency key string
    """
    ts = timestamp_ms if timestamp_ms is not None else int(time.time() * 1000)
    return f"{event_type}_{source_id}_{ts}"


# =============================================================================
# Helpers
# =============================================================================

def _normalize_headers(headers: Dict[str, str]) -> Dict[str, str]:
    """Normalize header names to lowercase."""
    return {k.lower(): v for k, v in headers.items()}


# =============================================================================
# Flask Integration
# =============================================================================

def flask_webhook_handler(secret: str, **options):
    """
    Flask decorator for webhook endpoints.

    Example:
        @app.route('/webhooks/integratewise', methods=['POST'])
        @flask_webhook_handler(secret=os.environ['IW_WEBHOOK_SECRET'])
        def handle_webhook(event: WebhookEvent):
            # Process event
            return {'status': 'accepted', 'event_id': event.event_id}
    """
    from functools import wraps

    def decorator(f):
        @wraps(f)
        def wrapper(*args, **kwargs):
            from flask import request, jsonify

            try:
                event = verify_webhook(
                    raw_body=request.get_data(),
                    headers=dict(request.headers),
                    secret=secret,
                    **options
                )
                return f(event, *args, **kwargs)
            except WebhookVerificationError as e:
                return jsonify({'error': {'code': e.code, 'message': e.message}}), e.status_code

        return wrapper
    return decorator


# =============================================================================
# FastAPI Integration
# =============================================================================

async def fastapi_verify_webhook(
    request,
    secret: str,
    **options
) -> WebhookEvent:
    """
    FastAPI dependency for webhook verification.

    Example:
        from fastapi import FastAPI, Request, Depends

        app = FastAPI()

        async def get_webhook_event(request: Request) -> WebhookEvent:
            return await fastapi_verify_webhook(
                request,
                secret=os.environ['IW_WEBHOOK_SECRET']
            )

        @app.post('/webhooks/integratewise')
        async def handle_webhook(event: WebhookEvent = Depends(get_webhook_event)):
            return {'status': 'accepted', 'event_id': event.event_id}
    """
    body = await request.body()
    headers = dict(request.headers)

    return verify_webhook(
        raw_body=body,
        headers=headers,
        secret=secret,
        **options
    )


# =============================================================================
# Main (for testing)
# =============================================================================

if __name__ == '__main__':
    # Example usage
    secret = "test_secret_123"

    # Generate test payload
    payload = {
        "event_id": "evt_test_001",
        "source": "slack",
        "type": "message.created",
        "workspace_id": "ws_123",
        "timestamp": "2025-01-15T10:30:00Z",
        "data": {
            "channel": "C01ABC123",
            "text": "Hello world"
        }
    }

    body = json.dumps(payload)
    signature, timestamp = generate_signature(body, secret)
    idempotency_key = create_idempotency_key("message_created", "C01ABC123")

    headers = {
        "X-IW-Signature": signature,
        "X-IW-Timestamp": timestamp,
        "X-IW-Idempotency-Key": idempotency_key,
        "Content-Type": "application/json"
    }

    print("Test Headers:")
    for k, v in headers.items():
        print(f"  {k}: {v}")

    print("\nTest Body:")
    print(f"  {body}")

    # Verify
    try:
        event = verify_webhook(body, headers, secret)
        print(f"\n✓ Verification successful: {event.event_id}")
    except WebhookVerificationError as e:
        print(f"\n✗ Verification failed: {e.code} - {e.message}")
