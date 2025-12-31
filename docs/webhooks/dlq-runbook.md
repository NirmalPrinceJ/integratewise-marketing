# Dead Letter Queue (DLQ) Operator Runbook

> Procedures for managing failed webhook events in the IntegrateWise DLQ.

## Overview

The Dead Letter Queue stores webhook events that failed to process after all retry attempts. This runbook provides operational procedures for DLQ management.

## Access Requirements

- **Role**: Admin or Operator
- **Scope**: Workspace-level access
- **Endpoint**: `https://api.integratewise.com/webhooks/v1/dlq`

---

## Common Scenarios

### Scenario 1: Transient Failures (Network/Timeout)

**Symptoms:**
- Error code: `delivery_failed`, `connection_timeout`, `5xx_response`
- Multiple events from same source affected
- Recent entries (within hours)

**Resolution:**
1. Check source system health
2. Verify network connectivity
3. Bulk reprocess affected entries

```bash
# Check DLQ for transient errors
curl -X GET "https://api.integratewise.com/webhooks/v1/dlq?error_code=delivery_failed&limit=100" \
  -H "Authorization: Bearer {api_key}"

# Bulk reprocess (after confirming source is healthy)
curl -X POST "https://api.integratewise.com/webhooks/v1/dlq/reprocess" \
  -H "Authorization: Bearer {api_key}" \
  -H "Content-Type: application/json" \
  -d '{
    "filter": {
      "error_code": "delivery_failed",
      "created_after": "2025-01-15T00:00:00Z"
    },
    "limit": 100
  }'
```

### Scenario 2: Malformed Payloads

**Symptoms:**
- Error code: `invalid_payload`, `validation_failed`
- Specific source or event type affected
- Requires payload inspection

**Resolution:**
1. Inspect payload structure
2. Identify schema mismatch
3. Fix mapping or quarantine

```bash
# Get entry details
curl -X GET "https://api.integratewise.com/webhooks/v1/dlq/{dlq_id}" \
  -H "Authorization: Bearer {api_key}"

# If fixable, reprocess after mapping update
# If not fixable, quarantine
curl -X POST "https://api.integratewise.com/webhooks/v1/dlq/{dlq_id}/quarantine" \
  -H "Authorization: Bearer {api_key}" \
  -H "Content-Type: application/json" \
  -d '{
    "reason": "Malformed payload: missing required field 'event_id'"
  }'
```

### Scenario 3: Authentication Failures

**Symptoms:**
- Error code: `auth_failed`, `token_expired`, `permission_denied`
- All events from one connector failing

**Resolution:**
1. Refresh connector credentials
2. Verify permissions/scopes
3. Reprocess after re-auth

```bash
# After refreshing credentials in Settings
curl -X POST "https://api.integratewise.com/webhooks/v1/dlq/reprocess" \
  -H "Authorization: Bearer {api_key}" \
  -H "Content-Type: application/json" \
  -d '{
    "filter": {
      "source": "hubspot",
      "error_code": "auth_failed"
    }
  }'
```

### Scenario 4: Rate Limiting

**Symptoms:**
- Error code: `rate_limited`
- High volume events in short period
- 429 responses in logs

**Resolution:**
1. Wait for rate limit window to reset
2. Reprocess in smaller batches
3. Consider adjusting sync frequency

```bash
# Reprocess in batches with delay
for i in {1..10}; do
  curl -X POST "https://api.integratewise.com/webhooks/v1/dlq/reprocess" \
    -H "Authorization: Bearer {api_key}" \
    -H "Content-Type: application/json" \
    -d '{
      "filter": {
        "error_code": "rate_limited"
      },
      "limit": 10
    }'
  sleep 60
done
```

---

## Operational Procedures

### Daily Review

1. **Check DLQ count**
   ```bash
   curl -X GET "https://api.integratewise.com/webhooks/v1/dlq/stats" \
     -H "Authorization: Bearer {api_key}"
   ```

   Response:
   ```json
   {
     "total": 47,
     "by_status": {
       "pending": 35,
       "quarantined": 12
     },
     "by_source": {
       "slack": 20,
       "hubspot": 15,
       "stripe": 12
     },
     "oldest_entry": "2025-01-14T08:30:00Z"
   }
   ```

2. **Review new entries** (last 24h)
   ```bash
   curl -X GET "https://api.integratewise.com/webhooks/v1/dlq?created_after=$(date -d '1 day ago' -Iseconds)&limit=50" \
     -H "Authorization: Bearer {api_key}"
   ```

3. **Triage by error type**
   - Transient → Reprocess
   - Auth → Fix credentials, reprocess
   - Payload → Inspect, fix or quarantine

### Weekly Cleanup

1. **Purge expired entries** (auto-handled, but verify)
   ```bash
   curl -X GET "https://api.integratewise.com/webhooks/v1/dlq?status=expired" \
     -H "Authorization: Bearer {api_key}"
   ```

2. **Review quarantined entries**
   - Decide: fix and reprocess, or purge
   - Document decisions

3. **Export for analysis** (optional)
   ```bash
   curl -X GET "https://api.integratewise.com/webhooks/v1/dlq/export?format=csv" \
     -H "Authorization: Bearer {api_key}" \
     -o dlq_export_$(date +%Y%m%d).csv
   ```

---

## API Reference

### List DLQ Entries

```http
GET /webhooks/v1/dlq
```

**Query Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `status` | string | Filter: `pending`, `quarantined`, `reprocessing` |
| `source` | string | Filter by source (e.g., `slack`) |
| `error_code` | string | Filter by error code |
| `created_after` | datetime | Entries created after |
| `created_before` | datetime | Entries created before |
| `limit` | integer | Max results (default: 50, max: 500) |
| `cursor` | string | Pagination cursor |

### Get Entry Details

```http
GET /webhooks/v1/dlq/{dlq_id}
```

### Reprocess Entry

```http
POST /webhooks/v1/dlq/{dlq_id}/reprocess
```

### Bulk Reprocess

```http
POST /webhooks/v1/dlq/reprocess
```

**Body:**
```json
{
  "filter": {
    "source": "string",
    "error_code": "string",
    "created_after": "datetime",
    "created_before": "datetime"
  },
  "limit": 100,
  "delay_ms": 0
}
```

### Quarantine Entry

```http
POST /webhooks/v1/dlq/{dlq_id}/quarantine
```

**Body:**
```json
{
  "reason": "string"
}
```

### Purge Entry

```http
DELETE /webhooks/v1/dlq/{dlq_id}
```

### Bulk Purge

```http
DELETE /webhooks/v1/dlq
```

**Body:**
```json
{
  "filter": {
    "status": "quarantined",
    "created_before": "datetime"
  }
}
```

### Get Statistics

```http
GET /webhooks/v1/dlq/stats
```

### Export

```http
GET /webhooks/v1/dlq/export?format=csv|json
```

---

## Alerting

### Configure Alerts

In Settings → Webhooks → Alerts:

| Alert | Threshold | Channels |
|-------|-----------|----------|
| DLQ count high | > 100 pending | Slack, Email |
| Repeated failures | Same event 3+ times | Email |
| Source failing | > 50% fail rate | Slack, PagerDuty |
| DLQ near capacity | > 8000 entries | Email, PagerDuty |

### Alert Response

1. **DLQ count high**
   - Review by source
   - Identify root cause
   - Bulk reprocess or escalate

2. **Repeated failures**
   - Inspect specific event
   - Check for data issues
   - Quarantine if unfixable

3. **Source failing**
   - Check connector health
   - Verify credentials
   - Check source system status

---

## Troubleshooting

### Event Stuck in Reprocessing

```bash
# Check status
curl -X GET "https://api.integratewise.com/webhooks/v1/dlq/{dlq_id}" \
  -H "Authorization: Bearer {api_key}"

# Force reset to pending
curl -X PATCH "https://api.integratewise.com/webhooks/v1/dlq/{dlq_id}" \
  -H "Authorization: Bearer {api_key}" \
  -H "Content-Type: application/json" \
  -d '{"status": "pending"}'
```

### Cannot Reprocess (Validation Error)

1. Export entry payload
2. Fix payload externally
3. Re-submit as new event

```bash
# Get original payload
curl -X GET "https://api.integratewise.com/webhooks/v1/dlq/{dlq_id}" \
  -H "Authorization: Bearer {api_key}" | jq '.payload' > payload.json

# Edit payload.json to fix issues

# Re-submit (generates new idempotency key)
curl -X POST "https://api.integratewise.com/webhooks/v1/ws_123/slack" \
  -H "Authorization: Bearer {api_key}" \
  -H "Content-Type: application/json" \
  -H "X-IW-Idempotency-Key: manual_fix_$(date +%s)" \
  -d @payload.json
```

### DLQ Entry Missing

- Check if auto-purged (>72h)
- Check if manually deleted
- Review audit logs for delete actions

---

## Best Practices

1. **Review DLQ daily** — Catch issues early
2. **Don't let entries expire** — Process before 72h window
3. **Document quarantine decisions** — Include reason for audit
4. **Test after credential refresh** — Send test event before bulk reprocess
5. **Monitor alert channels** — Respond to alerts within SLA
6. **Export before purge** — Keep records for compliance

---

## Cross-References

- [Webhooks Documentation](/docs/webhooks/index.md)
- [Integration Matrix](/docs/integrations/matrix.md)
- [Security & Audit](/docs/security/index.md)
