"""
Webhook Verification Example (Python)

Demonstrates HMAC-SHA256 signature verification, timestamp validation,
and idempotency checking for IntegrateWise OS webhooks.
"""

import os
import hmac
import hashlib
import json
import time
from datetime import datetime, timedelta
from flask import Flask, request, jsonify
from typing import Optional, Dict, Any

app = Flask(__name__)
WEBHOOK_SECRET = os.environ.get('WEBHOOK_SECRET', 'your-webhook-secret')
TIMESTAMP_TOLERANCE = 300  # 5 minutes in seconds
REPLAY_WINDOW = 300  # 5 minutes in seconds

# In-memory idempotency store (use Redis/DB in production)
idempotency_store: Dict[str, Dict[str, Any]] = {}


def is_timestamp_valid(timestamp: int, tolerance_seconds: int = TIMESTAMP_TOLERANCE) -> bool:
    """Verify timestamp is within tolerance window."""
    now = int(time.time())
    diff = abs(now - timestamp)
    return diff <= tolerance_seconds


def calculate_signature(secret: str, timestamp: str, body: Dict[str, Any]) -> str:
    """Calculate HMAC-SHA256 signature."""
    payload = f"{timestamp}.{json.dumps(body, sort_keys=True)}"
    hmac_obj = hmac.new(
        secret.encode('utf-8'),
        payload.encode('utf-8'),
        hashlib.sha256
    )
    return f"sha256={hmac_obj.hexdigest()}"


def verify_signature(secret: str, timestamp: str, body: Dict[str, Any], signature: str) -> bool:
    """Verify signature using timing-safe comparison."""
    expected = calculate_signature(secret, timestamp, body)
    return hmac.compare_digest(signature, expected)


def check_idempotency(idempotency_key: str) -> Optional[Dict[str, Any]]:
    """Check if idempotency key was already processed."""
    stored = idempotency_store.get(idempotency_key)
    if not stored:
        return None

    # Check if within replay window
    now = time.time() * 1000  # milliseconds
    age = now - stored['timestamp']
    if age > REPLAY_WINDOW * 1000:
        del idempotency_store[idempotency_key]
        return None

    return stored['response']


def store_idempotency(idempotency_key: str, response: Dict[str, Any]) -> None:
    """Store idempotency key with response."""
    idempotency_store[idempotency_key] = {
        'timestamp': time.time() * 1000,  # milliseconds
        'response': response
    }


async def process_webhook(connector: str, payload: Dict[str, Any]) -> Dict[str, Any]:
    """Process webhook payload."""
    # Simulate processing
    print(f"Processing webhook from {connector}: {payload}")
    
    # In real implementation:
    # 1. Parse payload
    # 2. Map to Spine entity
    # 3. Validate constraints
    # 4. Store in Spine
    # 5. Trigger downstream processing
    
    return {
        'success': True,
        'processedAt': datetime.utcnow().isoformat() + 'Z'
    }


@app.route('/webhooks/<connector>', methods=['POST'])
async def webhook_handler(connector: str):
    """Webhook endpoint handler."""
    signature = request.headers.get('X-IW-Signature')
    timestamp = request.headers.get('X-IW-Timestamp')
    idempotency_key = request.headers.get('X-IW-Idempotency-Key')

    # Validate required headers
    if not signature or not timestamp:
        return jsonify({
            'error': 'Missing required headers',
            'required': ['X-IW-Signature', 'X-IW-Timestamp']
        }), 400

    # Verify timestamp
    try:
        timestamp_int = int(timestamp)
    except ValueError:
        return jsonify({
            'error': 'Invalid timestamp format'
        }), 400

    if not is_timestamp_valid(timestamp_int):
        return jsonify({
            'error': 'Invalid timestamp',
            'message': 'Timestamp must be within 5 minutes of current time'
        }), 400

    # Verify signature
    if not verify_signature(WEBHOOK_SECRET, timestamp, request.json, signature):
        return jsonify({
            'error': 'Invalid signature',
            'message': 'HMAC-SHA256 signature verification failed'
        }), 401

    # Check idempotency
    if idempotency_key:
        processed = check_idempotency(idempotency_key)
        if processed:
            return jsonify({
                'message': 'Already processed',
                'cached': processed
            }), 200

    # Process webhook
    try:
        result = await process_webhook(connector, request.json)
        
        # Store idempotency key
        if idempotency_key:
            store_idempotency(idempotency_key, result)

        return jsonify({
            'success': True,
            'result': result
        }), 200
    except Exception as error:
        print(f'Webhook processing error: {error}')
        return jsonify({
            'error': 'Processing failed',
            'message': str(error)
        }), 500


@app.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint."""
    return jsonify({'status': 'ok'}), 200


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 3000))
    app.run(host='0.0.0.0', port=port, debug=False)
