# Integration Capability Matrix

> Complete capability reference for all IntegrateWise connectors.

## Connector Matrix

| Source | Mode | Auth | Entities | Sync | Rate Limits | Webhook Events | Idempotency | DLQ |
|--------|------|------|----------|------|-------------|----------------|-------------|-----|
| **Notion** | Full | OAuth2 | Pages, Databases, Blocks | Two-way | 3 req/s, exponential backoff | page.created, page.updated, database.updated | X-IW-Idempotency-Key | 5 retries, 72h window |
| **Slack** | Full | OAuth2 | Messages, Channels, Users, Reactions | Event-driven | Tier 2 (20 req/min) | message.created, reaction.added, channel.joined | X-IW-Idempotency-Key | 5 retries, 72h window |
| **Gmail** | Full | OAuth2 | Messages, Threads, Labels | One-way (read) + Event | 250 quota units/s | message.received, thread.updated | X-IW-Idempotency-Key | 5 retries, 72h window |
| **Google Calendar** | Full | OAuth2 | Events, Calendars | Two-way | 100 req/100s | event.created, event.updated, event.deleted | X-IW-Idempotency-Key | 5 retries, 72h window |
| **HubSpot** | Full | OAuth2 / API Key | Contacts, Deals, Companies, Tickets | Two-way | 100 req/10s | deal.created, contact.updated, ticket.created | X-IW-Idempotency-Key | 5 retries, 72h window |
| **Stripe** | Full | API Key | Subscriptions, Invoices, Customers | Event-driven | 100 req/s | invoice.paid, subscription.updated, charge.succeeded | X-IW-Idempotency-Key | 5 retries, 72h window |
| **Jira** | Full | OAuth2 / API Token | Issues, Projects, Sprints | Two-way | 100 req/min | issue.created, issue.updated, sprint.started | X-IW-Idempotency-Key | 5 retries, 72h window |
| **Asana** | Full | OAuth2 | Tasks, Projects, Sections | Two-way | 1500 req/min | task.created, task.completed, project.updated | X-IW-Idempotency-Key | 5 retries, 72h window |
| **Salesforce** | Full | OAuth2 | Accounts, Opportunities, Cases | Two-way | Varies by edition | opportunity.closed, case.created, account.updated | X-IW-Idempotency-Key | 5 retries, 72h window |
| **ChatGPT** | Webhook-only | API Key | Conversations, Messages | Inbound webhook | N/A | brain.ingest, conversation.message | X-IW-Idempotency-Key | 5 retries, 72h window |
| **Claude** | Webhook-only | API Key | Conversations, Messages | Inbound webhook | N/A | brain.ingest, conversation.message | X-IW-Idempotency-Key | 5 retries, 72h window |
| **Todoist** | Full | OAuth2 | Tasks, Projects, Labels | Two-way | 450 req/15min | task.created, task.completed, task.updated | X-IW-Idempotency-Key | 5 retries, 72h window |
| **Coda** | Full | API Token | Docs, Tables, Rows | Two-way | 100 req/min | row.created, row.updated, doc.updated | X-IW-Idempotency-Key | 5 retries, 72h window |
| **Confluence** | Render Only | OAuth2 / API Token | Pages, Spaces | One-way (read) | 100 req/min | — | — | — |
| **BigQuery** | Render Only | Service Account | Tables, Views | Batch (scheduled) | 100 concurrent | — | — | — |

## Mode Definitions

| Mode | Description | Write Access |
|------|-------------|--------------|
| **Full** | Two-way sync with full CRUD | ✅ Yes |
| **Render Only** | Read-only, safe for compliance | ❌ No |
| **Webhook-only** | Inbound events only | ❌ No |

## Filters

### By Category

- **Docs & Knowledge**: Notion, Coda, Confluence, Google Drive
- **Communication**: Slack, Gmail, Outlook, Teams
- **Productivity**: Google Calendar, Todoist, Asana, Jira
- **CRM / Revenue**: HubSpot, Salesforce, Stripe, Chargebee
- **AI Tools (Brain ingestion)**: ChatGPT, Claude, Gemini, Grok, Perplexity
- **Data / Analytics**: BigQuery, Snowflake, Postgres, Sheets

### By Mode

- **Full Integration**: Notion, Slack, Gmail, Calendar, HubSpot, Stripe, Jira, Asana, Salesforce, Todoist, Coda
- **Render Only**: Confluence, BigQuery, Snowflake
- **Webhook-only**: ChatGPT, Claude, Gemini, Grok, Perplexity

### By Scopes Required

| Connector | Minimum Scopes |
|-----------|----------------|
| Notion | `read_content`, `update_content`, `insert_content` |
| Slack | `channels:read`, `chat:write`, `users:read` |
| Gmail | `gmail.readonly`, `gmail.send` (optional) |
| HubSpot | `crm.objects.contacts.read`, `crm.objects.deals.read` |
| Stripe | `read_only` or `read_write` |
| Jira | `read:jira-work`, `write:jira-work` |

### PII-Safe Tag

Connectors marked **PII-Safe** have:
- Automatic PII detection via DataSentinel
- Redaction rules applied before Spine write
- Audit logging of PII access

**PII-Safe connectors**: Slack, Gmail, HubSpot, Salesforce (with DataSentinel enabled)

---

## Detailed Connector Specifications

### Notion

**Authentication**: OAuth2 with PKCE
**Entities**: Pages, Databases, Blocks, Users, Comments
**Sync Mode**: Two-way with conflict resolution

| Capability | Supported |
|------------|-----------|
| Create pages | ✅ |
| Update pages | ✅ |
| Delete pages | ✅ |
| Query databases | ✅ |
| Create database items | ✅ |
| Block-level editing | ✅ |
| Comments | ✅ |
| Permissions sync | ❌ |

**Rate Limits**:
- 3 requests per second
- Exponential backoff on 429
- Retry-After header respected

**Webhook Events**:

| Event Type | Payload Fields | Signature |
|------------|----------------|-----------|
| `page.created` | page_id, title, created_by, created_at | HMAC-SHA256 |
| `page.updated` | page_id, updated_fields, updated_by, updated_at | HMAC-SHA256 |
| `database.updated` | database_id, row_count, updated_at | HMAC-SHA256 |

---

### Slack

**Authentication**: OAuth2 with Bot Token
**Entities**: Messages, Channels, Users, Reactions, Files
**Sync Mode**: Event-driven via Events API

| Capability | Supported |
|------------|-----------|
| Read messages | ✅ |
| Post messages | ✅ |
| Update messages | ✅ |
| Delete messages | ✅ |
| Reactions | ✅ |
| Thread replies | ✅ |
| File uploads | ✅ |
| Private channels | ✅ (with scope) |

**Rate Limits**:
- Tier 2: 20+ requests per minute
- Tier 3: 50+ requests per minute (Web API)
- Burst handling with exponential backoff

**Webhook Events**:

| Event Type | Payload Fields | Signature |
|------------|----------------|-----------|
| `message.created` | channel, user, text, ts, thread_ts | HMAC-SHA256 |
| `reaction.added` | user, reaction, item.channel, item.ts | HMAC-SHA256 |
| `channel.joined` | channel, user | HMAC-SHA256 |

**Payload Example**:
```json
{
  "event_id": "evt_slack_001",
  "type": "message.created",
  "timestamp": "2025-01-15T10:30:00Z",
  "data": {
    "channel": "C01ABC123",
    "user": "U01XYZ789",
    "text": "Let's sync on the roadmap",
    "ts": "1705312200.123456",
    "thread_ts": null
  }
}
```

---

### Gmail

**Authentication**: OAuth2 with offline access
**Entities**: Messages, Threads, Labels, Drafts
**Sync Mode**: One-way read + push notifications

| Capability | Supported |
|------------|-----------|
| Read messages | ✅ |
| Read threads | ✅ |
| Send emails | ✅ (optional scope) |
| Create drafts | ✅ |
| Apply labels | ✅ |
| Delete messages | ❌ (safety) |
| Attachment access | ✅ |

**Rate Limits**:
- 250 quota units per user per second
- Batch requests recommended

**Webhook Events** (via Pub/Sub):

| Event Type | Payload Fields | Signature |
|------------|----------------|-----------|
| `message.received` | message_id, thread_id, from, to, subject, received_at | HMAC-SHA256 |
| `thread.updated` | thread_id, message_count, last_message_at | HMAC-SHA256 |

**Payload Example**:
```json
{
  "event_id": "evt_gmail_001",
  "type": "message.received",
  "timestamp": "2025-01-15T10:30:00Z",
  "data": {
    "message_id": "18abc123def",
    "thread_id": "18abc123",
    "from": "sender@example.com",
    "to": ["recipient@example.com"],
    "subject": "Q1 Planning",
    "received_at": "2025-01-15T10:30:00Z"
  }
}
```

---

### HubSpot

**Authentication**: OAuth2 or Private App API Key
**Entities**: Contacts, Companies, Deals, Tickets, Engagements
**Sync Mode**: Two-way with association sync

| Capability | Supported |
|------------|-----------|
| Read CRM objects | ✅ |
| Create CRM objects | ✅ |
| Update CRM objects | ✅ |
| Delete CRM objects | ✅ |
| Associations | ✅ |
| Custom properties | ✅ |
| Pipelines | ✅ |
| Lists | ✅ |

**Rate Limits**:
- 100 requests per 10 seconds (OAuth)
- 500,000 requests per day

**Webhook Events**:

| Event Type | Payload Fields | Signature |
|------------|----------------|-----------|
| `deal.created` | deal_id, dealname, amount, stage, owner_id | HMAC-SHA256 |
| `deal.updated` | deal_id, changed_properties, updated_at | HMAC-SHA256 |
| `contact.created` | contact_id, email, firstname, lastname | HMAC-SHA256 |
| `contact.updated` | contact_id, changed_properties, updated_at | HMAC-SHA256 |

**Payload Example**:
```json
{
  "event_id": "evt_hubspot_001",
  "type": "deal.created",
  "timestamp": "2025-01-15T10:30:00Z",
  "data": {
    "deal_id": "12345678",
    "dealname": "Enterprise Contract - Acme Corp",
    "amount": 50000,
    "stage": "qualifiedtobuy",
    "owner_id": "987654",
    "pipeline": "default",
    "close_date": "2025-03-15"
  }
}
```

---

### Stripe

**Authentication**: API Key (Restricted or Secret)
**Entities**: Customers, Subscriptions, Invoices, Charges, Products
**Sync Mode**: Event-driven via webhooks

| Capability | Supported |
|------------|-----------|
| Read customers | ✅ |
| Read subscriptions | ✅ |
| Read invoices | ✅ |
| Create customers | ✅ |
| Update subscriptions | ✅ |
| Refunds | ✅ |
| Metered billing | ✅ |

**Rate Limits**:
- 100 requests per second (read)
- 25 requests per second (write)

**Webhook Events**:

| Event Type | Payload Fields | Signature |
|------------|----------------|-----------|
| `invoice.paid` | invoice_id, customer_id, amount_paid, currency | HMAC-SHA256 |
| `subscription.updated` | subscription_id, status, current_period_end | HMAC-SHA256 |
| `subscription.deleted` | subscription_id, customer_id, ended_at | HMAC-SHA256 |
| `charge.succeeded` | charge_id, amount, customer_id | HMAC-SHA256 |

**Payload Example**:
```json
{
  "event_id": "evt_stripe_001",
  "type": "invoice.paid",
  "timestamp": "2025-01-15T10:30:00Z",
  "data": {
    "invoice_id": "in_1ABC123",
    "customer_id": "cus_XYZ789",
    "amount_paid": 9900,
    "currency": "usd",
    "subscription_id": "sub_DEF456",
    "period_start": "2025-01-01",
    "period_end": "2025-02-01"
  }
}
```

---

### Google Calendar

**Authentication**: OAuth2
**Entities**: Events, Calendars, ACLs
**Sync Mode**: Two-way with push notifications

| Capability | Supported |
|------------|-----------|
| Read events | ✅ |
| Create events | ✅ |
| Update events | ✅ |
| Delete events | ✅ |
| Recurring events | ✅ |
| Attendees | ✅ |
| Reminders | ✅ |

**Webhook Events**:

| Event Type | Payload Fields | Signature |
|------------|----------------|-----------|
| `event.created` | event_id, summary, start, end, attendees | HMAC-SHA256 |
| `event.updated` | event_id, changed_fields, updated_at | HMAC-SHA256 |
| `event.deleted` | event_id, deleted_at | HMAC-SHA256 |

**Payload Example**:
```json
{
  "event_id": "evt_gcal_001",
  "type": "event.created",
  "timestamp": "2025-01-15T10:30:00Z",
  "data": {
    "event_id": "abc123xyz",
    "summary": "Weekly Planning",
    "start": "2025-01-20T09:00:00Z",
    "end": "2025-01-20T10:00:00Z",
    "attendees": ["user1@example.com", "user2@example.com"],
    "organizer": "user1@example.com"
  }
}
```

---

## Webhook Security Specifications

### Common Headers

All webhooks include:

| Header | Description | Example |
|--------|-------------|---------|
| `X-IW-Signature` | HMAC-SHA256 signature | `sha256=abc123...` |
| `X-IW-Timestamp` | Unix timestamp (seconds) | `1705312200` |
| `X-IW-Idempotency-Key` | Unique event key | `evt_001_1705312200` |
| `X-IW-Signature-Version` | Signature algorithm version | `v1` |

### Signature Verification

- **Algorithm**: HMAC-SHA256
- **Digest**: `sha256=` prefix + hex-encoded signature
- **Payload**: Raw request body + timestamp
- **Clock skew tolerance**: 5 minutes
- **Replay window**: 5 minutes

### Idempotency

- **Header**: `X-IW-Idempotency-Key`
- **Key strategy**: `{event_type}_{source_id}_{timestamp}`
- **TTL**: 7 days
- **Duplicate handling**: Return cached response

### DLQ & Retries

| Parameter | Value |
|-----------|-------|
| Max attempts | 5 |
| Retry schedule | 1s, 30s, 5m, 30m, 2h |
| DLQ persistence window | 72 hours |
| Reprocess API | `POST /webhooks/dlq/{event_id}/reprocess` |
| Quarantine API | `POST /webhooks/dlq/{event_id}/quarantine` |
| Purge API | `DELETE /webhooks/dlq/{event_id}` |

---

## Cross-References

- [Compare Modes: Full vs Render Only](/docs/integrations/compare-modes.md)
- [Webhook Documentation](/docs/webhooks/index.md)
- [Spine Mappings](/docs/spine/mappings.md)
- [Security & Governance](/docs/security/index.md)
