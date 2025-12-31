# Webhooks Documentation

> Secure, reliable webhook ingestion with signatures, idempotency, retries, and dead letter queue operations.

## Overview

IntegrateWise webhooks enable real-time event ingestion from external tools and AI chat sessions. All webhooks are secured with HMAC-SHA256 signatures and support idempotent processing.

## Endpoint

```
POST https://api.integratewise.com/webhooks/v1/{workspace_id}/{source}
```

| Parameter | Description | Example |
|-----------|-------------|---------|
| `workspace_id` | Your workspace identifier | `ws_abc123` |
| `source` | Source tool identifier | `slack`, `chatgpt`, `hubspot` |

## Header Conventions

All webhook requests must include these headers:

| Header | Description | Required |
|--------|-------------|----------|
| `X-IW-Signature` | HMAC-SHA256 signature | ✅ Yes |
| `X-IW-Timestamp` | Unix timestamp (seconds) | ✅ Yes |
| `X-IW-Idempotency-Key` | Unique event identifier | ✅ Yes |
| `X-IW-Signature-Version` | Signature version (default: `v1`) | Optional |
| `Content-Type` | Must be `application/json` | ✅ Yes |

### Example Headers

```http
POST /webhooks/v1/ws_123/slack HTTP/1.1
Host: api.integratewise.com
Content-Type: application/json
X-IW-Signature: sha256=5d41402abc4b2a76b9719d911017c592
X-IW-Timestamp: 1705312200
X-IW-Idempotency-Key: evt_slack_msg_1705312200_C01ABC123
X-IW-Signature-Version: v1
```

---

## Signature Verification

### Algorithm

- **Method**: HMAC-SHA256
- **Secret**: Workspace webhook secret (Settings → Webhooks → Secret)
- **Message**: `{timestamp}.{raw_body}`
- **Encoding**: Hex-encoded digest with `sha256=` prefix

### Signature Construction

```
signature = HMAC-SHA256(
  secret: workspace_webhook_secret,
  message: "{X-IW-Timestamp}.{raw_request_body}"
)

header_value = "sha256=" + hex(signature)
```

### Verification Steps

1. Extract `X-IW-Signature` and `X-IW-Timestamp` headers
2. Check timestamp is within tolerance window (±5 minutes)
3. Construct message: `{timestamp}.{body}`
4. Compute HMAC-SHA256 with workspace secret
5. Compare computed signature to received signature (timing-safe)
6. Check idempotency key for duplicates

### Clock Skew Tolerance

- **Window**: ±5 minutes (300 seconds)
- **Rejection**: Requests outside window return `401 invalid_timestamp`

### Replay Protection

- **Replay window**: 5 minutes
- **Mechanism**: Idempotency key + timestamp validation
- **Storage**: Keys stored for 7 days

---

## Idempotency

### Header

```
X-IW-Idempotency-Key: {unique_key}
```

### Key Strategy

Recommended format:
```
{event_type}_{source_id}_{timestamp_ms}
```

Examples:
- `message_created_C01ABC123_1705312200000`
- `deal_updated_12345678_1705312200000`
- `brain_ingest_session001_1705312200000`

### Key Requirements

| Property | Requirement |
|----------|-------------|
| Length | 10-256 characters |
| Characters | Alphanumeric, underscore, hyphen |
| Uniqueness | Unique per workspace within TTL |
| TTL | 7 days |

### Duplicate Handling

When a duplicate key is received:
1. Return `200 OK` with original response
2. Log duplicate detection
3. Do not reprocess

Response for duplicate:
```json
{
  "status": "duplicate",
  "event_id": "evt_original_123",
  "processed_at": "2025-01-15T10:30:00Z"
}
```

---

## Retry Policy

When IntegrateWise sends webhooks to external systems (outbound):

### Retry Schedule

| Attempt | Delay | Cumulative |
|---------|-------|------------|
| 1 | Immediate | 0s |
| 2 | 1 second | 1s |
| 3 | 30 seconds | 31s |
| 4 | 5 minutes | 5m 31s |
| 5 | 30 minutes | 35m 31s |
| 6 | 2 hours | 2h 35m 31s |

After 6 failed attempts, the event is moved to the Dead Letter Queue.

### Backoff Policy

- **Type**: Exponential with jitter
- **Base**: 1 second
- **Max delay**: 2 hours
- **Jitter**: ±10%

### Success Criteria

A delivery is successful if:
- Response status code: 2xx
- Response received within 30 seconds
- Response body parseable (for acknowledgment)

### Failure Handling

| Status Code | Action |
|-------------|--------|
| 2xx | Success, no retry |
| 4xx (except 429) | Fail, no retry (client error) |
| 429 | Retry with Retry-After header |
| 5xx | Retry with backoff |
| Timeout | Retry with backoff |
| Connection error | Retry with backoff |

---

## Dead Letter Queue (DLQ)

Failed events are stored in the DLQ for manual review and reprocessing.

### DLQ Entry Structure

```json
{
  "dlq_id": "dlq_abc123",
  "event_id": "evt_original_456",
  "workspace_id": "ws_123",
  "source": "slack",
  "payload": { ... },
  "error": {
    "code": "delivery_failed",
    "message": "Connection timeout after 30s",
    "last_attempt": "2025-01-15T12:30:00Z",
    "attempt_count": 6
  },
  "status": "pending",
  "created_at": "2025-01-15T10:30:00Z",
  "expires_at": "2025-01-18T10:30:00Z"
}
```

### DLQ Persistence

| Parameter | Value |
|-----------|-------|
| Retention window | 72 hours |
| Max entries per workspace | 10,000 |
| Auto-purge | After expiration |

### DLQ Operator Runbook

#### 1. View DLQ Entries

```bash
# List pending entries
curl -X GET "https://api.integratewise.com/webhooks/v1/dlq?status=pending&limit=50" \
  -H "Authorization: Bearer {api_key}"
```

Response:
```json
{
  "entries": [
    {
      "dlq_id": "dlq_abc123",
      "event_id": "evt_456",
      "source": "slack",
      "error_code": "delivery_failed",
      "created_at": "2025-01-15T10:30:00Z",
      "status": "pending"
    }
  ],
  "pagination": {
    "cursor": "cursor_xyz",
    "has_more": true
  }
}
```

#### 2. View Entry Details

```bash
curl -X GET "https://api.integratewise.com/webhooks/v1/dlq/{dlq_id}" \
  -H "Authorization: Bearer {api_key}"
```

#### 3. Reprocess Entry

```bash
# Reprocess single entry
curl -X POST "https://api.integratewise.com/webhooks/v1/dlq/{dlq_id}/reprocess" \
  -H "Authorization: Bearer {api_key}"
```

Response:
```json
{
  "status": "reprocessing",
  "dlq_id": "dlq_abc123",
  "new_event_id": "evt_789"
}
```

#### 4. Bulk Reprocess

```bash
# Reprocess by source
curl -X POST "https://api.integratewise.com/webhooks/v1/dlq/reprocess" \
  -H "Authorization: Bearer {api_key}" \
  -H "Content-Type: application/json" \
  -d '{
    "filter": {
      "source": "slack",
      "created_after": "2025-01-15T00:00:00Z"
    },
    "limit": 100
  }'
```

#### 5. Quarantine Entry

Mark an entry as quarantined (will not auto-reprocess):

```bash
curl -X POST "https://api.integratewise.com/webhooks/v1/dlq/{dlq_id}/quarantine" \
  -H "Authorization: Bearer {api_key}" \
  -H "Content-Type: application/json" \
  -d '{
    "reason": "Malformed payload, requires manual fix"
  }'
```

#### 6. Purge Entry

Permanently delete an entry:

```bash
curl -X DELETE "https://api.integratewise.com/webhooks/v1/dlq/{dlq_id}" \
  -H "Authorization: Bearer {api_key}"
```

#### 7. Bulk Purge

```bash
curl -X DELETE "https://api.integratewise.com/webhooks/v1/dlq" \
  -H "Authorization: Bearer {api_key}" \
  -H "Content-Type: application/json" \
  -d '{
    "filter": {
      "status": "quarantined",
      "created_before": "2025-01-10T00:00:00Z"
    }
  }'
```

### DLQ Alerts

Configure alerts in Settings → Webhooks → Alerts:

| Alert Type | Trigger | Action |
|------------|---------|--------|
| DLQ threshold | > 100 pending entries | Email, Slack |
| Repeated failures | Same event fails 3+ times | Email |
| Source down | All events from source failing | Email, PagerDuty |

---

## Failure Modes

### Rejection Responses

| Code | Error | Description | Retry? |
|------|-------|-------------|--------|
| 400 | `invalid_payload` | Malformed JSON or missing fields | No |
| 401 | `invalid_signature` | HMAC verification failed | No |
| 401 | `invalid_timestamp` | Timestamp outside tolerance | No |
| 401 | `missing_headers` | Required headers not present | No |
| 403 | `workspace_disabled` | Workspace suspended | No |
| 404 | `workspace_not_found` | Invalid workspace ID | No |
| 429 | `rate_limited` | Too many requests | Yes (backoff) |
| 500 | `internal_error` | Server error | Yes (backoff) |
| 503 | `service_unavailable` | Temporary outage | Yes (backoff) |

### Error Response Format

```json
{
  "error": {
    "code": "invalid_signature",
    "message": "HMAC signature verification failed",
    "request_id": "req_abc123",
    "timestamp": "2025-01-15T10:30:00Z"
  }
}
```

---

## Ordering Guarantees

### Per-Connector Guarantees

| Connector | Ordering | Notes |
|-----------|----------|-------|
| Slack | Per-channel | Events within a channel are ordered |
| Gmail | Per-thread | Thread events are ordered |
| HubSpot | Per-object | Events for same object are ordered |
| Stripe | Per-customer | Subscription events ordered |
| ChatGPT | Per-session | Chat session events ordered |

### Global Ordering

- **Not guaranteed** across different sources
- **Not guaranteed** across different entities
- Use `timestamp` field for global ordering when needed

### Out-of-Order Handling

1. Events may arrive out of order during retries
2. Use `updated_at` comparison for conflict resolution
3. Spine uses "last-write-wins" by default
4. Configure custom conflict resolution per connector

---

## Code Examples

### Node.js / TypeScript

See [/examples/js/webhook-verification.ts](/examples/js/webhook-verification.ts)

### Python

See [/examples/python/webhook_verification.py](/examples/python/webhook_verification.py)

### cURL

```bash
# Test webhook endpoint
curl -X POST "https://api.integratewise.com/webhooks/v1/ws_123/test" \
  -H "Content-Type: application/json" \
  -H "X-IW-Signature: sha256=$(echo -n '1705312200.{"test":true}' | openssl dgst -sha256 -hmac 'your_secret' | cut -d' ' -f2)" \
  -H "X-IW-Timestamp: 1705312200" \
  -H "X-IW-Idempotency-Key: test_$(date +%s)" \
  -d '{"test":true}'
```

---

## Testing

### Test Endpoint

```
POST /webhooks/v1/test
```

Validates signature and headers without processing.

### Webhook Logs

View in Settings → Webhooks → Logs:

- Recent deliveries (last 7 days)
- Request/response details
- Retry history
- DLQ entries

### Webhook Simulator

Test payloads in Settings → Webhooks → Simulator:

1. Select source
2. Choose event type
3. Customize payload
4. Send test event

---

## Cross-References

- [Integration Matrix](/docs/integrations/matrix.md)
- [Security & Governance](/docs/security/index.md)
- [API Reference](/docs/api/index.md)
- [DLQ Runbook](/docs/webhooks/dlq-runbook.md)
