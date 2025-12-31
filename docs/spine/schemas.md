# Spine Canonical Schemas

> The Spine is the semantic backbone of IntegrateWise OS. It normalizes data from all connected tools into canonical entities, preserving meaning and relationships across systems.

## Overview

The Spine defines five canonical entity types:

| Entity | Purpose | Primary Sources |
|--------|---------|-----------------|
| **Task** | Actionable work items | Notion, Jira, Asana, Todoist, Gmail, Calendar |
| **Note** | Knowledge and documentation | Notion, Coda, Confluence, Google Docs, AI summaries |
| **Conversation** | Threaded communications | Slack, Gmail, Teams, AI chat sessions |
| **Plan** | Objectives and roadmaps | OKRs, project plans, sprints, goals |
| **HealthMetric** | Customer success indicators | Product analytics, NPS, support, billing |

## Entity Schemas

### Task

Canonical representation of actionable work items.

```typescript
interface Task {
  _type: 'task';
  id: string;                    // Prefixed: task_abc123
  title: string;                 // Required, max 500 chars
  description?: string;          // Markdown, max 50,000 chars
  status: TaskStatus;            // backlog|todo|in_progress|blocked|in_review|done|cancelled
  priority: TaskPriority;        // critical|high|medium|low|none
  due_date?: string;             // ISO date (YYYY-MM-DD)
  due_datetime?: string;         // ISO datetime with time
  assignee_id?: string;          // User ID (prefixed by source)
  reporter_id?: string;          // Creator user ID
  parent_task_id?: string;       // For subtasks
  project_id?: string;           // Container/project
  tags?: string[];               // Lowercase, alphanumeric
  estimated_hours?: number;      // Effort estimate
  logged_hours?: number;         // Actual effort
  completion_percent?: number;   // 0-100
  linked_entity_ids?: string[];  // Related entities
  
  // Base fields
  source_tool: SourceTool;
  external_ref: ExternalRef;
  workspace_id: string;
  created_at: string;            // ISO datetime
  updated_at: string;            // ISO datetime
}
```

**Status Normalization:**

| Source Status | Canonical Status |
|--------------|------------------|
| Notion: "Not Started" | `todo` |
| Jira: "In Progress" | `in_progress` |
| Jira: "Blocked" | `blocked` |
| Asana: "Completed" | `done` |
| HubSpot: "Closed Won" | `done` |
| HubSpot: "Closed Lost" | `cancelled` |

### Note

Canonical representation of knowledge and documentation.

```typescript
interface Note {
  _type: 'note';
  id: string;                    // Prefixed: note_abc123
  title: string;                 // Required
  body_md: string;               // Markdown content
  excerpt?: string;              // Plain text preview (max 1000 chars)
  tags: string[];                // Required array
  parent_note_id?: string;       // Nested docs
  linked_entity_ids: string[];   // Required array
  author_id?: string;
  last_editor_id?: string;
  word_count?: number;
  is_template?: boolean;
  visibility?: 'private' | 'workspace' | 'public';
  properties?: Record<string, unknown>;
  
  // Base fields (same as Task)
}
```

### Conversation

Canonical representation of threaded communications.

```typescript
interface Conversation {
  _type: 'conversation';
  id: string;                    // Prefixed: conv_abc123
  source: 'email' | 'slack' | 'teams' | 'chat' | 'ai_session' | 'support_ticket' | 'other';
  message_count: number;
  topic?: string;                // Subject line or first message
  participants: Participant[];   // Min 1 required
  topic_labels?: string[];       // AI-generated labels
  linkage_score?: number;        // 0-1 confidence
  started_at: string;            // First message
  last_message_at: string;       // Last message
  is_closed?: boolean;
  sentiment_score?: number;      // -1 to 1
  thread_ref?: {
    channel_id?: string;
    thread_id?: string;
    channel_name?: string;
  };
  summary?: string;              // AI-generated or manual
  
  // Base fields (same as Task)
}

interface Participant {
  id: string;
  name?: string;
  email?: string;
  role?: 'sender' | 'recipient' | 'cc' | 'bcc' | 'participant' | 'ai_assistant';
}
```

### Plan

Canonical representation of objectives and roadmaps.

```typescript
interface Plan {
  _type: 'plan';
  id: string;                    // Prefixed: plan_abc123
  objective: string;             // Title/goal
  description?: string;
  milestones: Milestone[];       // Required array
  owner_id: string;              // Required
  team_id?: string;
  start_date: string;            // ISO date
  end_date: string;              // ISO date
  status: PlanStatus;            // draft|active|on_track|at_risk|delayed|completed|cancelled
  progress_percent?: number;     // 0-100
  key_results?: KeyResult[];
  parent_plan_id?: string;       // Nested plans
  task_ids?: string[];           // Linked tasks
  note_ids?: string[];           // Linked notes
  review_cadence?: 'daily' | 'weekly' | 'biweekly' | 'monthly' | 'quarterly';
  next_review_date?: string;
  
  // Base fields (same as Task)
}

interface Milestone {
  id: string;
  title: string;
  description?: string;
  target_date?: string;
  status: 'pending' | 'in_progress' | 'completed' | 'missed';
  completed_at?: string;
  task_ids?: string[];
}
```

### HealthMetric (Customer Success)

Customer success health indicators for the CS Lens.

```typescript
interface HealthMetric {
  _type: 'health_metric';
  id: string;                    // Prefixed: hm_abc123
  account_id: string;            // Customer/account ID
  metric_type: HealthMetricType;
  value: number;                 // Normalized 0-100
  raw_value?: number;            // Before normalization
  unit?: string;
  weight: number;                // 0-1 for composite scoring
  period: MetricPeriod;
  period_start?: string;
  period_end?: string;
  computed_at: string;           // When calculated
  data_sources?: string[];       // Source systems
  trend?: 'improving' | 'stable' | 'declining';
  trend_percent?: number;
  thresholds?: {
    warning?: number;
    critical?: number;
    current_state?: 'normal' | 'warning' | 'critical';
  };
  
  // Base fields (same as Task)
}

type HealthMetricType = 
  | 'usage_score'
  | 'nps_score'
  | 'ticket_severity'
  | 'renewal_proximity'
  | 'engagement_score'
  | 'adoption_rate'
  | 'feature_utilization'
  | 'support_sentiment'
  | 'contract_value'
  | 'expansion_potential'
  | 'churn_risk'
  | 'custom';
```

## Relationships

Entities can be linked via the `EntityRelationship` type:

```typescript
interface EntityRelationship {
  id: string;
  from_entity_id: string;
  from_entity_type: EntityType;
  to_entity_id: string;
  to_entity_type: EntityType;
  relationship_type: RelationshipType;
  confidence?: number;           // 0-1 for AI-derived
  created_at: string;
  created_by: string;
}

type RelationshipType = 
  | 'parent_of' | 'child_of'
  | 'blocks' | 'blocked_by'
  | 'relates_to' | 'duplicates'
  | 'created_from' | 'references'
  | 'mentions' | 'derived_from';
```

## Normalization Rules

1. **IDs**: Always prefixed with entity type (`task_`, `note_`, `conv_`, `plan_`, `hm_`)
2. **Timestamps**: ISO 8601 in UTC
3. **Markdown**: CommonMark specification for `body_md` fields
4. **Status values**: Mapped to canonical values; source-specific stored in `custom_fields`
5. **Priority**: Normalized to 5-level scale
6. **Scores**: Normalized to 0-100 scale
7. **User IDs**: Prefixed with source (`slack_U123`, `gmail_user@example.com`)
8. **Tags**: Lowercase, alphanumeric with underscores, max 50 characters

## Reserved Fields

Do not use these prefixes in `custom_fields`:

- `_iw_*` - IntegrateWise internal
- `_sys_*` - System metadata
- `_ai_*` - AI-generated fields
- `_audit_*` - Audit trail fields

## External Reference

Every entity tracks its origin:

```typescript
interface ExternalRef {
  source: SourceTool;            // notion, slack, gmail, etc.
  external_id: string;           // ID in source system
  url?: string;                  // Link to source
  synced_at: string;             // Last sync time
  sync_status: 'synced' | 'pending' | 'failed' | 'stale';
}
```

## Validation

Schemas are validated using JSON Schema. See:
- TypeScript types: `/lib/spine/types.ts`
- JSON Schema: `/lib/spine/schemas.json`

CI validates all Spine entities on every push.

## Mapping Guides

See [Connector Mappings](/docs/spine/mappings.md) for per-connector field mapping specifications.
