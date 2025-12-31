---
title: Spine canonical schemas
---

## Goal

The **Spine** is IntegrateWise’s canonical data model. Connectors map tool-specific records into Spine entities so:

- **Meaning survives moves** (relationships, IDs, timestamps, ownership).
- **Policies can be enforced centrally** (Hub guardrails evaluate canonical fields).
- **Agents + Render can operate consistently** across tools and tenants.

This page is implementation-oriented: schemas, constraints, reserved fields, and mapping guides.

## Canonical entities (v0)

- **Task**
- **Note**
- **Conversation**
- **Plan**
- **HealthMetric (CS)**

Source-of-truth TypeScript/Zod: `packages/types/src/spine/*`.

## Cross-entity rules

- **Workspace isolation**: all entity IDs are unique *within* a workspace boundary. Never join across workspaces.
- **Idempotent upserts**: default dedupe key is `external_ref = {tool, id}`. If absent, connectors must provide a stable synthetic key.
- **Time**: all timestamps are **ISO-8601 UTC** (e.g. `2025-12-31T12:34:56Z`).
- **Normalization**:
  - Prefer canonical enums (e.g. `Task.status`).
  - Preserve raw tool fields only behind policy controls (recommended: store in tool system, not Spine).

## Reserved fields (platform-owned)

Entities may include `_reserved`:

- `workspace_id`: workspace boundary
- `created_by` / `updated_by`: actor IDs
- `request_id`: correlation ID (e.g. webhook request id)
- `policy_id`: Hub policy evaluation id

**Connector rule**: do not overwrite `_reserved.*` without an explicit allow-list policy.

## Relationship map (minimum)

- `Note.linked_entity_ids[]` may reference any Spine entity `id` (Task/Plan/Conversation/etc.).
- `Task.assignee_id` references a workspace actor/user entity (not yet modeled in v0; treat as opaque ID).
- `Plan.milestones[]` are embedded (v0). If you need global milestone references, promote to its own entity in v1.
- `HealthMetric.account_id` references an Account entity (not yet modeled in v0; treat as opaque ID).

## Entity: Task

Required fields:

- `id`, `title`, `status`, `source_tool`, `created_at`

Notes:

- `external_ref` should reference the tool task record (Notion page id, Jira issue key, etc.).
- `due_date` is an instant; if a tool only has a date, normalize to `T00:00:00Z` (or store timezone in tool system and keep Spine UTC).

## Entity: Note

Required fields:

- `id`, `title`, `body_md`, `source_tool`, `created_at`

Notes:

- `body_md` is Markdown. If a tool stores rich text, convert deterministically (keep links).
- `linked_entity_ids[]` is the primary “context glue” across tools.

## Entity: Conversation

Required fields:

- `id`, `source`, `message_count`, `participants[]`, `created_at`, `source_tool`

Notes:

- `linkage_score` is optional and bounded \([0, 1]\). Use it for cross-tool linking confidence (Brain).

## Entity: Plan

Required fields:

- `id`, `objective`, `status`, `source_tool`, `created_at`

Notes:

- Milestones are intentionally simple and embedded for v0.

## Entity: HealthMetric (CS)

Required fields:

- `id`, `account_id`, `metric_type`, `value`, `period`, `computed_at`, `source_tool`, `created_at`

Notes:

- `weight` is optional; if present it must be \([0, 1]\).

## Mapping guides (v0)

### Notion → Spine

Typical patterns:

- Notion database row (task DB) → `Task`
- Notion page (knowledge base) → `Note`

Mapping (recommended):

- `Task.external_ref = { tool: "notion", id: <page_id>, url: <page_url> }`
- `Task.title = Notion.title`
- `Task.status = map(Notion.status)` using a deterministic table per database
- `Task.due_date = Notion.date?.start`
- `Note.body_md = markdown(Notion.blocks)`

### Slack → Spine

Typical patterns:

- Slack thread/channel discussion → `Conversation`
- Important message summary → `Note`

Mapping (recommended):

- `Conversation.external_ref = { tool: "slack", id: <channel_id>:<thread_ts> }`
- `Conversation.participants = [user_ids or emails if available]`
- `Note.external_ref = { tool: "slack", id: <channel_id>:<message_ts> }`
- `Note.linked_entity_ids` populated by Hub routing rules (e.g. link to Account/Plan based on channel)

### HubSpot → Spine

Typical patterns:

- Deal follow-up tasks → `Task`
- Deal notes/call summaries → `Note`
- Activity timelines → `Conversation` (optional)

Mapping (recommended):

- `Task.external_ref = { tool: "hubspot", id: <task_id>, url: <record_url> }`
- `Note.external_ref = { tool: "hubspot", id: <engagement_id> }`
- `Note.linked_entity_ids` include synthetic IDs for Deal/Company until those entities are formalized

### Gmail → Spine

Typical patterns:

- Email thread → `Conversation`
- Email summary → `Note`
- Follow-up action → `Task`

Mapping (recommended):

- `Conversation.external_ref = { tool: "gmail", id: <thread_id> }`
- `Conversation.message_count = <messages_in_thread>`
- `Task.external_ref = { tool: "gmail", id: <message_id> }` when task is derived from an email

