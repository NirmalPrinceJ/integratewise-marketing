# Integrations Capability Matrix

Comprehensive matrix of IntegrateWise OS connector capabilities, authentication methods, sync modes, webhook events, and operational parameters.

## Matrix Columns

- **Source**: Connector name
- **Mode**: Full Integration / Render Only / Webhook-only
- **Auth**: OAuth2 / API Key / Service Account
- **Entities**: Supported Spine entity types
- **Sync**: one-way / two-way / event / batch
- **Rate Limits**: Requests per minute/hour
- **Backoff**: Exponential backoff strategy
- **Webhook Events**: Event types and payload schemas
- **Signature**: HMAC-SHA256 version and digest
- **Timestamp Tolerance**: Clock skew tolerance (default: 5m)
- **Idempotency**: Header name and key strategy
- **DLQ & Retries**: Schedule, max attempts, persistence window

## Connectors

### Notion

| Property | Value |
|----------|-------|
| **Source** | Notion |
| **Mode** | Full Integration |
| **Auth** | OAuth2 |
| **Entities** | Task, Note, Plan |
| **Sync** | Two-way |
| **Rate Limits** | 3 req/s (180/min) |
| **Backoff** | Exponential: 1s, 2s, 4s, 8s, 16s |
| **Webhook Events** | `page.created`, `page.updated`, `page.deleted` |
| **Signature** | HMAC-SHA256, header: `X-Notion-Signature` |
| **Timestamp Tolerance** | 5 minutes |
| **Idempotency** | Header: `X-IW-Idempotency-Key`, strategy: `notion-page-id-timestamp` |
| **DLQ & Retries** | Schedule: exponential backoff, max attempts: 5, persistence: 7 days |

**Webhook Payload Schema:**
```json
{
  "object": "event",
  "entry": [{
    "id": "page-id",
    "object": "page",
    "created_time": "2024-11-01T10:00:00Z",
    "last_edited_time": "2024-11-01T11:00:00Z"
  }]
}
```

**Spine Mapping:**
- Notion Page → Note: `title`, `body_md`, `tags`, `created_at`, `updated_at`
- Notion Database Row → Task: `title`, `status`, `priority`, `due_date`, `assignee_id`

### Slack

| Property | Value |
|----------|-------|
| **Source** | Slack |
| **Mode** | Full Integration |
| **Auth** | OAuth2 |
| **Entities** | Conversation, Note |
| **Sync** | Event-driven |
| **Rate Limits** | Tier 2: 20 req/min, Tier 3: 50 req/min |
| **Backoff** | Exponential: 1s, 2s, 4s, 8s, 16s, 32s |
| **Webhook Events** | `message`, `message.channels`, `message.groups`, `message.im`, `message.mpim` |
| **Signature** | HMAC-SHA256, header: `X-Slack-Signature`, timestamp: `X-Slack-Request-Timestamp` |
| **Timestamp Tolerance** | 5 minutes |
| **Idempotency** | Header: `X-IW-Idempotency-Key`, strategy: `slack-ts-channel` |
| **DLQ & Retries** | Schedule: exponential backoff, max attempts: 3, persistence: 3 days |

**Webhook Payload Schema:**
```json
{
  "type": "event_callback",
  "event": {
    "type": "message",
    "channel": "C01234ABCD",
    "user": "U01234ABCD",
    "text": "Message text",
    "ts": "1698840000.123456",
    "thread_ts": "1698840000.123456"
  }
}
```

**Spine Mapping:**
- Slack Thread → Conversation: `topic`, `participants`, `message_count`, `metadata.channel_id`, `metadata.thread_ts`

### Gmail

| Property | Value |
|----------|-------|
| **Source** | Gmail |
| **Mode** | Full Integration |
| **Auth** | OAuth2 |
| **Entities** | Conversation, Note |
| **Sync** | Event-driven (Push notifications) |
| **Rate Limits** | 250 quota units/user/second |
| **Backoff** | Exponential: 1s, 2s, 4s, 8s, 16s |
| **Webhook Events** | `message.created`, `message.updated` |
| **Signature** | HMAC-SHA256, header: `X-IW-Signature`, timestamp: `X-IW-Timestamp` |
| **Timestamp Tolerance** | 5 minutes |
| **Idempotency** | Header: `X-IW-Idempotency-Key`, strategy: `gmail-message-id` |
| **DLQ & Retries** | Schedule: exponential backoff, max attempts: 5, persistence: 7 days |

**Webhook Payload Schema:**
```json
{
  "message": {
    "id": "msg-123",
    "threadId": "thread-abc",
    "labelIds": ["INBOX"],
    "snippet": "Email snippet",
    "payload": {
      "headers": [
        {"name": "From", "value": "sender@example.com"},
        {"name": "To", "value": "recipient@example.com"},
        {"name": "Subject", "value": "Subject line"},
        {"name": "Date", "value": "Mon, 1 Nov 2024 10:00:00 +0000"}
      ]
    }
  }
}
```

**Spine Mapping:**
- Gmail Message → Conversation: `topic` (Subject), `participants` (From/To), `metadata.message_id`, `metadata.thread_id`

### HubSpot

| Property | Value |
|----------|-------|
| **Source** | HubSpot |
| **Mode** | Full Integration |
| **Auth** | OAuth2 / API Key |
| **Entities** | Task (Deals), Note, HealthMetric (Accounts) |
| **Sync** | Two-way |
| **Rate Limits** | 100 req/10s (600/min) |
| **Backoff** | Exponential: 1s, 2s, 4s, 8s, 16s |
| **Webhook Events** | `deal.creation`, `deal.propertyChange`, `contact.creation`, `contact.propertyChange` |
| **Signature** | HMAC-SHA256, header: `X-HubSpot-Signature-v3` |
| **Timestamp Tolerance** | 5 minutes |
| **Idempotency** | Header: `X-IW-Idempotency-Key`, strategy: `hubspot-object-id-timestamp` |
| **DLQ & Retries** | Schedule: exponential backoff, max attempts: 5, persistence: 7 days |

**Webhook Payload Schema:**
```json
{
  "eventId": 123456,
  "subscriptionId": 789,
  "portalId": 12345,
  "occurredAt": 1698840000000,
  "subscriptionType": "deal.propertyChange",
  "attemptNumber": 1,
  "objectId": 12345678,
  "propertyName": "dealstage",
  "propertyValue": "closedwon"
}
```

**Spine Mapping:**
- HubSpot Deal → Task: `title` (dealname), `status` (dealstage), `due_date` (closedate), `metadata.amount`, `metadata.owner_id`
- HubSpot Account → HealthMetric: `account_id`, `metric_type`, `value` (usage/NPS)

### Stripe

| Property | Value |
|----------|-------|
| **Source** | Stripe |
| **Mode** | Full Integration |
| **Auth** | API Key (Secret key) |
| **Entities** | HealthMetric (Subscriptions), Note |
| **Sync** | Event-driven |
| **Rate Limits** | 100 req/s (per API key) |
| **Backoff** | Exponential: 1s, 2s, 4s, 8s, 16s |
| **Webhook Events** | `customer.subscription.created`, `customer.subscription.updated`, `customer.subscription.deleted`, `invoice.paid`, `invoice.payment_failed` |
| **Signature** | HMAC-SHA256, header: `Stripe-Signature`, timestamp in signature |
| **Timestamp Tolerance** | 5 minutes |
| **Idempotency** | Header: `X-IW-Idempotency-Key`, strategy: `stripe-event-id` |
| **DLQ & Retries** | Schedule: exponential backoff, max attempts: 5, persistence: 7 days |

**Webhook Payload Schema:**
```json
{
  "id": "evt_1234567890",
  "object": "event",
  "type": "customer.subscription.updated",
  "data": {
    "object": {
      "id": "sub_abc123",
      "customer": "cus_xyz789",
      "status": "active",
      "current_period_end": 1733011200
    }
  },
  "created": 1698840000
}
```

**Spine Mapping:**
- Stripe Subscription → HealthMetric: `account_id` (customer), `metric_type` (usage), `value` (MRR), `metadata.subscription_id`, `metadata.renewal_date`

### Google Calendar

| Property | Value |
|----------|-------|
| **Source** | Google Calendar |
| **Mode** | Full Integration |
| **Auth** | OAuth2 |
| **Entities** | Task (Events), Plan |
| **Sync** | Two-way |
| **Rate Limits** | 1,000,000 quota units/day |
| **Backoff** | Exponential: 1s, 2s, 4s, 8s, 16s |
| **Webhook Events** | `event.created`, `event.updated`, `event.deleted` |
| **Signature** | HMAC-SHA256, header: `X-IW-Signature`, timestamp: `X-IW-Timestamp` |
| **Timestamp Tolerance** | 5 minutes |
| **Idempotency** | Header: `X-IW-Idempotency-Key`, strategy: `calendar-event-id-timestamp` |
| **DLQ & Retries** | Schedule: exponential backoff, max attempts: 5, persistence: 7 days |

**Webhook Payload Schema:**
```json
{
  "id": "event-123",
  "summary": "Team Meeting",
  "start": {
    "dateTime": "2024-11-05T14:00:00Z"
  },
  "end": {
    "dateTime": "2024-11-05T15:00:00Z"
  },
  "attendees": [
    {"email": "user1@example.com"},
    {"email": "user2@example.com"}
  ]
}
```

**Spine Mapping:**
- Calendar Event → Task: `title` (summary), `due_date` (start.dateTime), `metadata.attendees`, `metadata.end_time`

### ChatGPT (AI Brain Ingestion)

| Property | Value |
|----------|-------|
| **Source** | ChatGPT |
| **Mode** | Webhook-only |
| **Auth** | API Key |
| **Entities** | Conversation |
| **Sync** | Event (one-way ingestion) |
| **Rate Limits** | 3,500 req/min (tier dependent) |
| **Backoff** | Exponential: 1s, 2s, 4s, 8s, 16s |
| **Webhook Events** | `conversation.created`, `conversation.updated`, `message.created` |
| **Signature** | HMAC-SHA256, header: `X-IW-Signature`, timestamp: `X-IW-Timestamp` |
| **Timestamp Tolerance** | 5 minutes |
| **Idempotency** | Header: `X-IW-Idempotency-Key`, strategy: `chatgpt-conversation-id-message-id` |
| **DLQ & Retries** | Schedule: exponential backoff, max attempts: 3, persistence: 3 days |

**Webhook Payload Schema:**
```json
{
  "conversation_id": "conv-123",
  "message_id": "msg-456",
  "model": "gpt-4",
  "role": "assistant",
  "content": "Message content",
  "timestamp": "2024-11-01T14:00:00Z",
  "user_id": "user-123"
}
```

**Spine Mapping:**
- ChatGPT Conversation → Conversation: `source` (chatgpt), `topic` (first message), `participants` (user_id), `metadata.conversation_id`, `metadata.model`

### Claude (AI Brain Ingestion)

| Property | Value |
|----------|-------|
| **Source** | Claude |
| **Mode** | Webhook-only |
| **Auth** | API Key |
| **Entities** | Conversation |
| **Sync** | Event (one-way ingestion) |
| **Rate Limits** | 50 req/min (tier dependent) |
| **Backoff** | Exponential: 1s, 2s, 4s, 8s, 16s |
| **Webhook Events** | `conversation.created`, `conversation.updated`, `message.created` |
| **Signature** | HMAC-SHA256, header: `X-IW-Signature`, timestamp: `X-IW-Timestamp` |
| **Timestamp Tolerance** | 5 minutes |
| **Idempotency** | Header: `X-IW-Idempotency-Key`, strategy: `claude-conversation-id-message-id` |
| **DLQ & Retries** | Schedule: exponential backoff, max attempts: 3, persistence: 3 days |

**Webhook Payload Schema:**
```json
{
  "conversation_id": "conv-789",
  "message_id": "msg-012",
  "model": "claude-3-opus",
  "role": "assistant",
  "content": "Message content",
  "timestamp": "2024-11-01T15:00:00Z",
  "user_id": "user-123"
}
```

**Spine Mapping:**
- Claude Conversation → Conversation: `source` (claude), `topic` (first message), `participants` (user_id), `metadata.conversation_id`, `metadata.model`

### Coda

| Property | Value |
|----------|-------|
| **Source** | Coda |
| **Mode** | Full Integration |
| **Auth** | OAuth2 |
| **Entities** | Note, Task |
| **Sync** | Two-way |
| **Rate Limits** | 600 req/min |
| **Backoff** | Exponential: 1s, 2s, 4s, 8s, 16s |
| **Webhook Events** | `doc.updated`, `table.row.created`, `table.row.updated` |
| **Signature** | HMAC-SHA256, header: `X-IW-Signature`, timestamp: `X-IW-Timestamp` |
| **Timestamp Tolerance** | 5 minutes |
| **Idempotency** | Header: `X-IW-Idempotency-Key`, strategy: `coda-doc-id-row-id` |
| **DLQ & Retries** | Schedule: exponential backoff, max attempts: 5, persistence: 7 days |

**Spine Mapping:**
- Coda Doc → Note: `title`, `body_md`, `tags`, `metadata.doc_id`
- Coda Table Row → Task: `title`, `status`, `priority`, `due_date`

### Salesforce

| Property | Value |
|----------|-------|
| **Source** | Salesforce |
| **Mode** | Full Integration |
| **Auth** | OAuth2 / Service Account |
| **Entities** | Task (Opportunities), Note, HealthMetric (Accounts) |
| **Sync** | Two-way |
| **Rate Limits** | 5,000 req/hour (API version dependent) |
| **Backoff** | Exponential: 1s, 2s, 4s, 8s, 16s |
| **Webhook Events** | `opportunity.created`, `opportunity.updated`, `account.updated` |
| **Signature** | HMAC-SHA256, header: `X-IW-Signature`, timestamp: `X-IW-Timestamp` |
| **Timestamp Tolerance** | 5 minutes |
| **Idempotency** | Header: `X-IW-Idempotency-Key`, strategy: `salesforce-object-id-timestamp` |
| **DLQ & Retries** | Schedule: exponential backoff, max attempts: 5, persistence: 7 days |

**Spine Mapping:**
- Salesforce Opportunity → Task: `title` (Name), `status` (StageName), `due_date` (CloseDate), `metadata.amount`, `metadata.owner_id`
- Salesforce Account → HealthMetric: `account_id`, `metric_type`, `value`

## Filters

### By Category
- **Docs & Knowledge**: Notion, Coda
- **Communication**: Slack, Gmail
- **CRM / Revenue**: HubSpot, Salesforce, Stripe
- **Productivity**: Google Calendar
- **AI Tools**: ChatGPT, Claude, Gemini, Grok, Perplexity

### By Mode
- **Full Integration**: Notion, Slack, Gmail, HubSpot, Stripe, Google Calendar, Coda, Salesforce
- **Render Only**: (Configurable per connector)
- **Webhook-only**: ChatGPT, Claude, Gemini, Grok, Perplexity

### By Scopes Required
- **OAuth2**: Notion, Slack, Gmail, HubSpot, Google Calendar, Coda, Salesforce
- **API Key**: Stripe, ChatGPT, Claude, Gemini, Grok, Perplexity

### PII-Safe Tag
- **PII-Safe**: Stripe (subscription metadata only), ChatGPT/Claude (conversation content only, no user PII)
- **PII-Containing**: Gmail, Slack, HubSpot, Salesforce (email addresses, names, contact info)

## See Also

- [Compare Modes](./compare-modes.md) - Full Integration vs Render Only
- [Webhooks Documentation](../webhooks/index.md) - Webhook security and operations
- [Spine Mapping Guides](../spine/mapping-guides.md) - Connector-to-Spine mappings
