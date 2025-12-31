# Spine Canonical Schemas

The Spine is IntegrateWise OS's normalized data layer that preserves meaning and relationships across different source tools. This document defines the canonical entity schemas.

## Overview

The Spine normalizes data from various tools (Notion, Slack, Gmail, HubSpot, etc.) into a consistent structure while preserving:
- Entity relationships
- Context and metadata
- Cross-tool linkages
- Temporal information

## Core Entities

### Task

Represents a task or action item.

**Schema:**
```typescript
interface Task {
  id: string;                    // UUID v4
  title: string;
  description?: string;
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled' | 'blocked';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  due_date?: string;            // ISO 8601
  assignee_id?: string;         // References User.id
  source_tool: string;
  external_ref: string;
  created_at: string;           // ISO 8601
  updated_at: string;           // ISO 8601
  metadata?: Record<string, unknown>;
}
```

**Relationships:**
- `assignee_id` → `User.id` (optional)
- Can be linked via `Note.linked_entity_ids`
- Can be part of `Plan.milestones[].task_ids`

**Example:**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "title": "Review Q4 budget proposal",
  "description": "Check revenue projections and expense allocations",
  "status": "in_progress",
  "priority": "high",
  "due_date": "2024-12-15T00:00:00Z",
  "assignee_id": "user-123",
  "source_tool": "notion",
  "external_ref": "notion-page-abc123",
  "created_at": "2024-11-01T10:00:00Z",
  "updated_at": "2024-11-05T14:30:00Z"
}
```

### Note

Represents a note, document, or knowledge artifact.

**Schema:**
```typescript
interface Note {
  id: string;                    // UUID v4
  title: string;
  body_md: string;              // Markdown content
  tags: string[];
  source_tool: string;
  external_ref: string;
  linked_entity_ids: string[];  // Any Spine entity IDs
  created_at: string;           // ISO 8601
  updated_at: string;           // ISO 8601
  metadata?: Record<string, unknown>;
}
```

**Relationships:**
- `linked_entity_ids` → Any Spine entity ID (Task, Conversation, Plan, etc.)
- Supports cross-tool context preservation

**Example:**
```json
{
  "id": "660e8400-e29b-41d4-a716-446655440001",
  "title": "Product Strategy Q4 2024",
  "body_md": "# Product Strategy\n\n## Goals\n- Increase engagement...",
  "tags": ["strategy", "product", "q4"],
  "source_tool": "coda",
  "external_ref": "coda-doc-xyz789",
  "linked_entity_ids": [
    "550e8400-e29b-41d4-a716-446655440000",
    "770e8400-e29b-41d4-a716-446655440002"
  ],
  "created_at": "2024-10-15T09:00:00Z",
  "updated_at": "2024-11-01T16:20:00Z"
}
```

### Conversation

Represents a conversation thread (Slack, email, AI chat).

**Schema:**
```typescript
interface Conversation {
  id: string;                    // UUID v4
  source: string;               // slack | gmail | chatgpt | claude | etc.
  message_count: number;
  topic?: string;
  participants: string[];       // User IDs or emails
  created_at: string;           // ISO 8601
  updated_at: string;           // ISO 8601
  linkage_score?: number;       // 0-100 relevance score
  metadata?: Record<string, unknown>;
}
```

**Relationships:**
- `participants` → `User.email` or `User.id`
- Can be linked via `Note.linked_entity_ids`
- `linkage_score` computed by Brain agent

**Example:**
```json
{
  "id": "770e8400-e29b-41d4-a716-446655440002",
  "source": "slack",
  "message_count": 12,
  "topic": "Q4 Planning Discussion",
  "participants": ["user-123", "user-456", "user-789"],
  "created_at": "2024-11-01T08:00:00Z",
  "updated_at": "2024-11-01T10:30:00Z",
  "linkage_score": 85,
  "metadata": {
    "channel_id": "C01234ABCD",
    "thread_ts": "1698840000.123456"
  }
}
```

### Plan

Represents a plan, project, or initiative with milestones.

**Schema:**
```typescript
interface Plan {
  id: string;                    // UUID v4
  objective: string;
  milestones: Milestone[];
  owner_id: string;            // References User.id
  start_date?: string;          // ISO 8601
  end_date?: string;            // ISO 8601
  status: 'draft' | 'active' | 'completed' | 'cancelled';
  created_at: string;           // ISO 8601
  updated_at: string;           // ISO 8601
  metadata?: Record<string, unknown>;
}

interface Milestone {
  id: string;
  title: string;
  description?: string;
  target_date?: string;         // ISO 8601
  status: 'pending' | 'in_progress' | 'completed';
  task_ids?: string[];          // References Task.id[]
}
```

**Relationships:**
- `owner_id` → `User.id`
- `milestones[].task_ids` → `Task.id[]`
- Can be linked via `Note.linked_entity_ids`

**Example:**
```json
{
  "id": "880e8400-e29b-41d4-a716-446655440003",
  "objective": "Launch new product feature by Q1 2025",
  "milestones": [
    {
      "id": "milestone-1",
      "title": "Design phase complete",
      "target_date": "2024-12-01T00:00:00Z",
      "status": "completed",
      "task_ids": ["550e8400-e29b-41d4-a716-446655440000"]
    }
  ],
  "owner_id": "user-123",
  "start_date": "2024-11-01T00:00:00Z",
  "end_date": "2025-03-31T00:00:00Z",
  "status": "active",
  "created_at": "2024-10-20T09:00:00Z",
  "updated_at": "2024-11-05T15:00:00Z"
}
```

### HealthMetric

Represents a customer success health metric.

**Schema:**
```typescript
interface HealthMetric {
  id: string;                    // UUID v4
  account_id: string;           // References Account.id
  metric_type: 'usage' | 'nps' | 'ticket_severity' | 'renewal_proximity' | 'engagement';
  value: number;                // Raw metric value
  weight: number;               // 0-1 for composite score
  period: 'daily' | 'weekly' | 'monthly';
  computed_at: string;          // ISO 8601
  metadata?: Record<string, unknown>;
}
```

**Relationships:**
- `account_id` → `Account.id`
- Used by CS Lens to compute composite `health_score`

**Example:**
```json
{
  "id": "990e8400-e29b-41d4-a716-446655440004",
  "account_id": "account-abc123",
  "metric_type": "usage",
  "value": 75.5,
  "weight": 0.3,
  "period": "monthly",
  "computed_at": "2024-11-01T00:00:00Z"
}
```

## Reserved Fields

All Spine entities include these reserved fields:

- **id**: UUID v4 (required, immutable)
- **created_at**: ISO 8601 timestamp (required, immutable)
- **updated_at**: ISO 8601 timestamp (required, auto-updated)
- **source_tool**: string (required, identifies origin)
- **external_ref**: string (required, source tool's ID)
- **metadata**: Record<string, unknown> (optional, tool-specific fields)

## Normalization Rules

1. **Timestamps**: All timestamps normalized to ISO 8601 UTC
2. **IDs**: All IDs normalized to UUID v4 (Spine generates if missing)
3. **Relationships**: Use Spine entity IDs, not external refs
4. **Tool-specific fields**: Preserved in `metadata`
5. **Status enums**: Normalized to canonical values

## Constraints

- Entity IDs must be UUID v4 format
- `source_tool` must be a registered connector identifier
- `external_ref` must be unique per `source_tool`
- Relationship references must point to existing entities
- Timestamps must be valid ISO 8601 strings

## See Also

- [Spine Mapping Guides](./mapping-guides.md) - How to map from source tools
- [Architecture: How It Works](../architecture/how-it-works.md) - System flow
- [API Reference](../api/index.md) - Querying Spine entities
