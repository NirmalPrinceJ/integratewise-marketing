# Spine Connector Mappings

> Field-level mapping specifications for each connector to Spine canonical entities.

## Overview

The AI Loader uses these mappings to transform source data into Spine entities. Each mapping defines:

- **Source fields**: Path to data in the source API response
- **Target fields**: Corresponding Spine entity field
- **Transforms**: Data transformations applied during mapping
- **Status/Priority maps**: Value normalization for enums

## HubSpot

### Deal → Task

Maps CRM deals to actionable tasks for pipeline management.

| Source Field | Target Field | Transform |
|-------------|--------------|-----------|
| `id` | `external_ref.external_id` | — |
| `properties.dealname` | `title` | — |
| `properties.description` | `description` | — |
| `properties.dealstage` | `status` | `mapDealStage` |
| `properties.hs_priority` | `priority` | `mapPriority` |
| `properties.closedate` | `due_date` | `toISODate` |
| `properties.hubspot_owner_id` | `assignee_id` | `prefixHubspot` |
| `properties.amount` | `custom_fields.deal_amount` | — |

**Output Example:**
```json
{
  "deal_id": "12345678",
  "stage": "in_progress",
  "amount": 50000,
  "close_date": "2025-03-15",
  "owner_id": "hubspot_987654"
}
```

**Stage Mapping:**
| HubSpot Stage | Spine Status |
|--------------|--------------|
| appointmentscheduled | `todo` |
| qualifiedtobuy | `in_progress` |
| presentationscheduled | `in_progress` |
| decisionmakerboughtin | `in_review` |
| contractsent | `in_review` |
| closedwon | `done` |
| closedlost | `cancelled` |

---

## Gmail

### Message → Conversation

Maps email threads to unified conversations.

| Source Field | Target Field | Transform |
|-------------|--------------|-----------|
| `id` | `external_ref.external_id` | — |
| `threadId` | `thread_ref.thread_id` | — |
| `payload.headers[subject]` | `topic` | `extractHeader` |
| `payload.headers[from]` | `participants[0]` | `parseEmailParticipant` |
| `payload.headers[to]` | `participants[1:]` | `parseEmailRecipients` |
| `internalDate` | `started_at` | `epochMsToISO` |

**Output Example:**
```json
{
  "message_id": "msg_18abc123def",
  "thread_id": "thread_18abc123",
  "from": "sender@example.com",
  "to": ["recipient1@example.com", "recipient2@example.com"],
  "subject": "Q1 Planning Discussion",
  "received_at": "2025-01-15T10:30:00Z"
}
```

---

## Slack

### Message → Conversation

Maps Slack threads to conversations.

| Source Field | Target Field | Transform |
|-------------|--------------|-----------|
| `ts` | `external_ref.external_id` | — |
| `thread_ts` | `thread_ref.thread_id` | — |
| `channel` | `thread_ref.channel_id` | — |
| `user` | `participants[0].id` | `prefixSlack` |
| `text` | `topic` | `extractFirstLine` |
| `ts` | `started_at` | `slackTsToISO` |
| `reply_count` | `message_count` | default: 1 |

**Output Example:**
```json
{
  "message_id": "1234567890.123456",
  "channel_id": "C01ABC123",
  "thread_ts": "1234567890.123456",
  "author_id": "slack_U01XYZ789",
  "text_preview": "Let's discuss the roadmap...",
  "reply_count": 5,
  "timestamp": "2025-01-15T14:22:00Z"
}
```

---

## Notion

### Page → Note

Maps Notion pages to notes.

| Source Field | Target Field | Transform |
|-------------|--------------|-----------|
| `id` | `external_ref.external_id` | — |
| `properties.title[0].plain_text` | `title` | — |
| `properties.Tags.multi_select` | `tags` | `extractMultiSelectValues` |
| `created_by.id` | `author_id` | `prefixNotion` |
| `last_edited_by.id` | `last_editor_id` | `prefixNotion` |
| `url` | `external_ref.url` | — |

### Database Item → Task

Maps Notion database items to tasks.

| Source Field | Target Field | Transform |
|-------------|--------------|-----------|
| `id` | `external_ref.external_id` | — |
| `properties.Name.title[0].plain_text` | `title` | — |
| `properties.Status.select.name` | `status` | `mapNotionStatus` |
| `properties.Priority.select.name` | `priority` | `mapNotionPriority` |
| `properties.Due.date.start` | `due_date` | — |
| `properties.Assignee.people[0].id` | `assignee_id` | `prefixNotion` |

**Status Mapping:**
| Notion Status | Spine Status |
|--------------|--------------|
| Not Started | `todo` |
| In Progress | `in_progress` |
| Blocked | `blocked` |
| In Review | `in_review` |
| Done | `done` |
| Archived | `cancelled` |

**Priority Mapping:**
| Notion Priority | Spine Priority |
|----------------|----------------|
| P0 | `critical` |
| P1 | `high` |
| P2 | `medium` |
| P3 | `low` |
| None | `none` |

---

## Stripe

### Subscription → HealthMetric

Maps subscription data to CS health metrics.

| Source Field | Target Field | Transform |
|-------------|--------------|-----------|
| `id` | `external_ref.external_id` | — |
| `customer` | `account_id` | — |
| `current_period_end` | `custom_fields.renewal_date` | `epochToISODate` |
| `plan.amount` | `raw_value` | — |
| `status` | `custom_fields.subscription_status` | — |

**Output Example:**
```json
{
  "invoice_id": "in_1ABC123",
  "customer_id": "cus_XYZ789",
  "amount_due": 9900,
  "currency": "usd",
  "status": "paid",
  "due_date": "2025-02-01"
}
```

---

## Google Calendar

### Event → Task

Maps calendar events to tasks (for action items).

| Source Field | Target Field | Transform |
|-------------|--------------|-----------|
| `id` | `external_ref.external_id` | — |
| `summary` | `title` | — |
| `description` | `description` | — |
| `start.dateTime` | `due_datetime` | `toISODateTime` |
| `start.date` | `due_date` | — |
| `organizer.email` | `assignee_id` | `prefixGoogle` |
| `htmlLink` | `external_ref.url` | — |

---

## Jira

### Issue → Task

Maps Jira issues to tasks.

| Source Field | Target Field | Transform |
|-------------|--------------|-----------|
| `id` | `external_ref.external_id` | — |
| `key` | `custom_fields.jira_key` | — |
| `fields.summary` | `title` | — |
| `fields.description` | `description` | — |
| `fields.status.name` | `status` | `mapJiraStatus` |
| `fields.priority.name` | `priority` | `mapJiraPriority` |
| `fields.duedate` | `due_date` | — |
| `fields.assignee.accountId` | `assignee_id` | `prefixJira` |
| `fields.reporter.accountId` | `reporter_id` | `prefixJira` |
| `fields.parent.id` | `parent_task_id` | `prefixTaskId` |
| `fields.labels` | `tags` | `lowercaseArray` |
| `fields.timeoriginalestimate` | `estimated_hours` | `secondsToHours` |
| `fields.timespent` | `logged_hours` | `secondsToHours` |

**Status Mapping:**
| Jira Status | Spine Status |
|------------|--------------|
| Backlog | `backlog` |
| To Do | `todo` |
| In Progress | `in_progress` |
| Blocked | `blocked` |
| In Review | `in_review` |
| Done | `done` |
| Closed | `done` |
| Cancelled | `cancelled` |

---

## AI Chat (ChatGPT, Claude, Gemini, Grok, Perplexity)

### Chat Session → Conversation

Maps AI chat sessions to conversations for Brain ingestion.

| Source Field | Target Field | Transform |
|-------------|--------------|-----------|
| `session_id` | `external_ref.external_id` | — |
| `title` | `topic` | — |
| `messages` | `message_count` | `arrayLength` |
| `created_at` | `started_at` | — |
| `updated_at` | `last_message_at` | — |
| `labels` | `topic_labels` | — |
| `model` | `custom_fields.ai_model` | — |

---

## Transform Functions

| Function | Description | Example |
|----------|-------------|---------|
| `toISODate` | Converts to ISO date | `"2025-01-15"` |
| `toISODateTime` | Converts to ISO datetime | `"2025-01-15T10:30:00Z"` |
| `epochToISODate` | Unix seconds to date | `1705312200 → "2025-01-15"` |
| `epochMsToISO` | Unix ms to datetime | `"1705312200000" → "2025-01-15T10:30:00Z"` |
| `slackTsToISO` | Slack timestamp to ISO | `"1705312200.123456" → "2025-01-15T10:30:00Z"` |
| `prefixHubspot` | Add hubspot_ prefix | `"123" → "hubspot_123"` |
| `prefixSlack` | Add slack_ prefix | `"U123" → "slack_U123"` |
| `extractFirstLine` | First 200 chars of first line | — |
| `extractMultiSelectValues` | Extract names, lowercase | `[{name:"Tag"}] → ["tag"]` |
| `secondsToHours` | Convert seconds to hours | `3600 → 1.0` |

---

## Adding New Mappings

1. Define the `ConnectorMapping` in `/lib/spine/mappings.ts`
2. Add to `mappingRegistry` array
3. Document in this file
4. Add status/priority maps if applicable
5. Write validation tests

See [TypeScript Mappings](/lib/spine/mappings.ts) for implementation.
