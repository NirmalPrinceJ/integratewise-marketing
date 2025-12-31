# How It Works — Architecture Reference

> Component I/O specifications, contracts, and canonical sequence flows for IntegrateWise OS.

## System Overview

IntegrateWise OS consists of six core components:

```
┌─────────────────────────────────────────────────────────────────────┐
│                        IntegrateWise OS                              │
│                                                                      │
│  ┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐   ┌────────┐ │
│  │   Hub   │──▶│  Spine  │◀──│ Loader  │──▶│  Brain  │──▶│ Agents │ │
│  └─────────┘   └─────────┘   └─────────┘   └─────────┘   └────────┘ │
│       │             │                            │             │     │
│       │             │                            │             ▼     │
│       │             └────────────────────────────┴──────▶┌────────┐ │
│       │                                                  │ Render │ │
│       └──────────────────────────────────────────────────┴────────┘ │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Component Specifications

### Hub

The Hub is the central routing and policy enforcement layer.

**Purpose**: Authentication, authorization, routing, usage metering, and audit.

#### Input Schema

```typescript
interface HubInput {
  /** Request metadata */
  request_id: string;
  timestamp: string;
  
  /** Authentication */
  auth: {
    type: 'oauth2' | 'api_key' | 'jwt' | 'mtls';
    token?: string;
    api_key?: string;
    client_cert?: string;
  };
  
  /** Routing context */
  routing: {
    workspace_id: string;
    source: SourceTool;
    target?: SourceTool;
    action: string;
  };
  
  /** Payload */
  payload: unknown;
}
```

#### Output Schema

```typescript
interface HubOutput {
  /** Routing decision */
  decision: 'allow' | 'deny' | 'require_approval';
  
  /** If denied */
  denial_reason?: string;
  policy_id?: string;
  
  /** If allowed */
  routed_to?: {
    component: 'loader' | 'spine' | 'agents' | 'render';
    endpoint: string;
  };
  
  /** Audit record */
  audit: AuditRecord;
  
  /** Usage meter */
  usage: {
    api_calls: number;
    data_bytes: number;
    compute_ms: number;
  };
}
```

#### Sub-components

| Component | Purpose | I/O |
|-----------|---------|-----|
| **Auth Adapters** | Validate credentials per provider | Token → Identity |
| **Policy Engine** | Evaluate RBAC/ABAC rules | (Identity, Action, Resource) → Decision |
| **Routing Rules** | Direct requests to handlers | Request → Handler mapping |
| **Audit Sinks** | Persist audit records | AuditRecord → Storage |
| **Usage Meter** | Track consumption | Request → UsageRecord |

#### Error States

| Error | Code | Recovery |
|-------|------|----------|
| `auth_invalid` | 401 | Re-authenticate |
| `auth_expired` | 401 | Refresh token |
| `permission_denied` | 403 | Request access |
| `rate_limited` | 429 | Exponential backoff |
| `policy_violation` | 403 | Review policy |
| `workspace_not_found` | 404 | Check workspace ID |

---

### Spine

The Spine is the semantic backbone—the canonical data layer.

**Purpose**: Normalize, store, and provide relationships between entities across tools.

#### Input Schema

```typescript
interface SpineInput {
  /** Operation type */
  operation: 'read' | 'write' | 'query' | 'link' | 'unlink';
  
  /** Workspace context */
  workspace_id: string;
  
  /** Entity data (for write) */
  entity?: SpineEntity;
  
  /** Query (for read/query) */
  query?: {
    entity_type: EntityType;
    filters?: FilterExpression[];
    includes?: string[];
    limit?: number;
    cursor?: string;
  };
  
  /** Relationship (for link/unlink) */
  relationship?: {
    from_id: string;
    to_id: string;
    type: RelationshipType;
  };
}
```

#### Output Schema

```typescript
interface SpineOutput {
  /** Operation result */
  success: boolean;
  
  /** Entity data */
  entity?: SpineEntity;
  entities?: SpineEntity[];
  
  /** Pagination */
  pagination?: {
    cursor?: string;
    has_more: boolean;
    total_count?: number;
  };
  
  /** Relationships */
  relationships?: EntityRelationship[];
  
  /** Validation errors */
  validation_errors?: ValidationError[];
}
```

#### Constraints

```yaml
spine_constraints:
  entities:
    task:
      max_title_length: 500
      max_description_length: 50000
      required_fields: [id, title, status, priority, source_tool, external_ref]
    note:
      max_title_length: 500
      max_body_length: 500000
      required_fields: [id, title, body_md, tags, source_tool, external_ref]
    conversation:
      max_participants: 100
      max_message_count_tracked: 10000
      required_fields: [id, source, message_count, participants, started_at]
    plan:
      max_milestones: 50
      max_key_results: 20
      required_fields: [id, objective, owner_id, start_date, end_date, status]
    health_metric:
      value_range: [0, 100]
      weight_range: [0, 1]
      required_fields: [id, account_id, metric_type, value, weight, period]
  
  relationships:
    max_per_entity: 100
    confidence_range: [0, 1]
```

#### Error States

| Error | Code | Recovery |
|-------|------|----------|
| `entity_not_found` | 404 | Check ID |
| `validation_failed` | 400 | Fix payload per errors |
| `conflict` | 409 | Resolve conflict, retry |
| `relationship_cycle` | 400 | Remove cyclic link |
| `quota_exceeded` | 429 | Upgrade plan |

---

### AI Loader

The Loader transforms source data into Spine entities.

**Purpose**: Source connection, data extraction, transformation, validation, and conflict resolution.

#### Input Schema

```typescript
interface LoaderInput {
  /** Source specification */
  source: {
    tool: SourceTool;
    credentials: EncryptedCredentials;
    object_type: string;
    filters?: SourceFilter[];
  };
  
  /** Sync configuration */
  sync: {
    mode: 'full' | 'incremental' | 'webhook';
    since?: string;  // ISO datetime for incremental
    batch_size?: number;
  };
  
  /** Transformation */
  mapping: ConnectorMapping;
  
  /** Conflict resolution */
  conflict_strategy: 'source_wins' | 'spine_wins' | 'merge' | 'manual';
}
```

#### Output Schema

```typescript
interface LoaderOutput {
  /** Sync results */
  results: {
    total_records: number;
    created: number;
    updated: number;
    unchanged: number;
    failed: number;
  };
  
  /** Failed records */
  failures: Array<{
    source_id: string;
    error: string;
    record: unknown;
  }>;
  
  /** Conflicts requiring manual resolution */
  conflicts: Array<{
    entity_id: string;
    source_value: unknown;
    spine_value: unknown;
    fields: string[];
  }>;
  
  /** Sync cursor for incremental */
  cursor?: string;
  
  /** Next sync time */
  next_sync_at?: string;
}
```

#### Processing Pipeline

```
Source API → Extract → Validate → Transform → Dedupe → Conflict Resolve → Spine Write
```

| Stage | Purpose | Error Handling |
|-------|---------|----------------|
| **Extract** | Fetch from source API | Retry with backoff |
| **Validate** | Check source data format | Skip invalid, log |
| **Transform** | Apply mapping rules | Use defaults on missing |
| **Dedupe** | Identify existing records | Hash-based matching |
| **Conflict Resolve** | Handle version conflicts | Per strategy |
| **Spine Write** | Persist to Spine | Transactional rollback |

#### Error States

| Error | Code | Recovery |
|-------|------|----------|
| `source_auth_failed` | 401 | Re-authorize connector |
| `source_rate_limited` | 429 | Exponential backoff |
| `transform_failed` | 400 | Check mapping config |
| `conflict_unresolved` | 409 | Manual resolution |
| `spine_write_failed` | 500 | Retry with backoff |

---

### Brain

The Brain maintains cross-tool context and memory.

**Purpose**: Short-term and long-term memory, entity linking, deduplication, and context resolution.

#### Input Schema

```typescript
interface BrainInput {
  /** Operation */
  operation: 'ingest' | 'recall' | 'link' | 'search';
  
  /** Workspace context */
  workspace_id: string;
  actor_id?: string;
  
  /** For ingest */
  memory?: {
    type: 'conversation' | 'task' | 'note' | 'event';
    content: unknown;
    source: SourceTool;
    timestamp: string;
    labels?: string[];
  };
  
  /** For recall/search */
  query?: {
    text?: string;
    entity_ids?: string[];
    time_range?: { start: string; end: string };
    labels?: string[];
    limit?: number;
  };
}
```

#### Output Schema

```typescript
interface BrainOutput {
  /** Retrieved memories */
  memories: Array<{
    id: string;
    type: string;
    content: unknown;
    relevance_score: number;
    timestamp: string;
    linked_entities: string[];
  }>;
  
  /** Entity links discovered */
  discovered_links: Array<{
    from_id: string;
    to_id: string;
    confidence: number;
    reason: string;
  }>;
  
  /** Context summary */
  context?: {
    summary: string;
    key_entities: string[];
    timeline: Array<{ timestamp: string; event: string }>;
  };
}
```

#### Memory Model

| Memory Type | Retention | Use Case |
|-------------|-----------|----------|
| **Short-term** | Session / 24 hours | Active context, recent interactions |
| **Long-term** | Configurable (30-365 days) | Historical context, patterns |
| **Indexed** | Permanent (until deleted) | Key entities, relationships |

#### Deduplication

- **Key strategy**: `{source}_{entity_type}_{source_id}`
- **Hash fields**: title, content, timestamp
- **Merge strategy**: Newer timestamp wins, preserve all links

#### Linking Rules

```yaml
brain_linking:
  auto_link:
    - pattern: "@mention in conversation"
      link_type: "mentions"
      confidence_threshold: 0.8
    - pattern: "Task created from message"
      link_type: "created_from"
      confidence_threshold: 0.95
    - pattern: "Same topic within time window"
      link_type: "relates_to"
      confidence_threshold: 0.7
      time_window: "24h"
  
  cross_tool_linking:
    enabled: true
    tools: [slack, gmail, notion, hubspot]
    match_on: [email, user_id, entity_reference]
```

#### Error States

| Error | Code | Recovery |
|-------|------|----------|
| `memory_quota_exceeded` | 429 | Archive old memories |
| `link_confidence_low` | 200 | Manual confirmation |
| `context_too_large` | 400 | Reduce query scope |
| `embedding_failed` | 500 | Retry, fallback to keyword |

---

### Agents

Agents execute workflows and automate actions.

**Purpose**: Trigger handling, planning, approval flows, sandboxed execution, and context retrieval.

#### Input Schema

```typescript
interface AgentInput {
  /** Agent identifier */
  agent_id: string;
  
  /** Trigger context */
  trigger: {
    type: 'event' | 'schedule' | 'manual' | 'api';
    event?: WebhookEvent;
    schedule?: ScheduleConfig;
    requester?: string;
  };
  
  /** Context for execution */
  context: {
    workspace_id: string;
    memories: BrainOutput['memories'];
    entities: SpineEntity[];
    variables: Record<string, unknown>;
  };
  
  /** Execution constraints */
  constraints: {
    timeout_ms: number;
    max_api_calls: number;
    max_tokens: number;
    allowed_tools: string[];
    require_approval: boolean;
  };
}
```

#### Output Schema

```typescript
interface AgentOutput {
  /** Execution status */
  status: 'completed' | 'pending_approval' | 'failed' | 'timeout';
  
  /** Generated outputs */
  outputs: Array<{
    type: 'task' | 'note' | 'email' | 'render' | 'api_call';
    data: unknown;
    requires_approval: boolean;
  }>;
  
  /** Actions taken */
  actions: Array<{
    tool: string;
    action: string;
    input: unknown;
    output: unknown;
    duration_ms: number;
  }>;
  
  /** If pending approval */
  approval_request?: {
    request_id: string;
    approver_ids: string[];
    expires_at: string;
    preview: unknown;
  };
  
  /** If failed */
  error?: {
    code: string;
    message: string;
    retryable: boolean;
  };
}
```

#### Sandboxing Limits

```yaml
agent_sandbox:
  compute:
    max_execution_time: 60000  # 60 seconds
    max_memory_mb: 512
    max_cpu_percent: 50
  
  api_calls:
    max_total: 50
    max_per_tool: 20
    rate_limit: 10  # per second
  
  tokens:
    max_input: 100000
    max_output: 10000
  
  network:
    allowed_domains: ["api.integratewise.com", "*.approved-integrations.com"]
    blocked_ports: [22, 23, 25]
  
  data_access:
    max_entities_read: 1000
    max_entities_write: 100
    require_workspace_scope: true
```

#### Approval Flows

| Trigger | Approval Required | Approvers |
|---------|-------------------|-----------|
| Create external record | Yes (configurable) | Admin, Operator |
| Send email | Yes | Admin, Owner |
| Delete record | Yes | Admin only |
| High-value deal update | Configurable | Deal owner, Manager |
| Bulk operations (>10 items) | Yes | Admin |

#### Context Policies

```yaml
agent_context_policies:
  retrieve:
    max_memories: 100
    max_entities: 500
    time_window: "30d"
    filter_pii: true
    redact_sensitive: true
  
  relevance:
    algorithm: "semantic_similarity"
    threshold: 0.7
    boost_recent: true
    boost_same_source: true
```

#### Error States

| Error | Code | Recovery |
|-------|------|----------|
| `approval_denied` | 403 | Review and resubmit |
| `approval_timeout` | 408 | Re-trigger with new approval |
| `sandbox_violation` | 403 | Check constraints |
| `context_unavailable` | 503 | Retry |
| `tool_not_allowed` | 403 | Request tool access |

---

### Render

Render generates outputs—documents, emails, dashboards.

**Purpose**: Template execution, output generation, versioning, and export.

#### Input Schema

```typescript
interface RenderInput {
  /** Template reference */
  template: {
    id: string;
    version?: string;
  };
  
  /** Parameters */
  parameters: Record<string, unknown>;
  
  /** Data context */
  data: {
    entities: SpineEntity[];
    computed_fields: Record<string, unknown>;
    time_context: {
      timezone: string;
      locale: string;
      as_of: string;
    };
  };
  
  /** Output configuration */
  output: {
    type: 'notion_page' | 'gmail_draft' | 'pdf' | 'markdown' | 'html' | 'dashboard';
    destination?: {
      tool: SourceTool;
      location: string;
    };
  };
}
```

#### Output Schema

```typescript
interface RenderOutput {
  /** Render result */
  render_id: string;
  status: 'success' | 'failed';
  
  /** Generated content */
  content: {
    type: string;
    data: unknown;
    preview_url?: string;
    download_url?: string;
  };
  
  /** If exported */
  export?: {
    tool: SourceTool;
    external_id: string;
    url: string;
  };
  
  /** Metadata */
  metadata: {
    template_version: string;
    rendered_at: string;
    parameters_hash: string;
    data_entities_count: number;
  };
}
```

#### Output Types

| Type | Format | Destinations |
|------|--------|--------------|
| `notion_page` | Notion blocks | Notion workspace |
| `gmail_draft` | HTML email | Gmail drafts |
| `pdf` | PDF document | Download, Drive |
| `markdown` | CommonMark | Any markdown consumer |
| `html` | HTML document | Web, email |
| `dashboard` | React components | IntegrateWise UI |

#### Template Parameters

```typescript
interface TemplateParameter {
  name: string;
  type: 'string' | 'number' | 'boolean' | 'date' | 'entity_id' | 'array';
  required: boolean;
  default?: unknown;
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    enum?: unknown[];
  };
}
```

#### Error States

| Error | Code | Recovery |
|-------|------|----------|
| `template_not_found` | 404 | Check template ID |
| `parameter_invalid` | 400 | Fix parameter per error |
| `data_missing` | 400 | Provide required entities |
| `export_failed` | 500 | Retry, check destination auth |
| `quota_exceeded` | 429 | Wait or upgrade |

---

## Canonical Sequence Diagram

### End-to-End Flow: Slack Message → Dashboard Update

```
Slack        Hub        Loader      Spine       Brain       Agents      Render
  │            │           │           │           │           │           │
  │──webhook──▶│           │           │           │           │           │
  │            │──verify───│           │           │           │           │
  │            │──policy──▶│           │           │           │           │
  │            │           │           │           │           │           │
  │            │──route───▶│           │           │           │           │
  │            │           │──extract──│           │           │           │
  │            │           │──transform│           │           │           │
  │            │           │──validate─│           │           │           │
  │            │           │           │           │           │           │
  │            │           │──write───▶│           │           │           │
  │            │           │           │──store────│           │           │
  │            │           │           │           │           │           │
  │            │           │           │──notify──▶│           │           │
  │            │           │           │           │──ingest───│           │
  │            │           │           │           │──link─────│           │
  │            │           │           │           │           │           │
  │            │           │           │           │──context─▶│           │
  │            │           │           │           │           │──plan─────│
  │            │           │           │           │           │           │
  │            │           │           │           │           │──approval?│
  │            │           │           │           │           │           │
  │            │           │           │           │           │──execute─▶│
  │            │           │           │           │           │           │──generate
  │            │           │           │           │           │           │──export
  │            │           │           │           │           │           │
  │            │           │           │           │           │           │──Notion
  │            │           │           │           │           │           │
  │            │◀──audit───│───────────│───────────│───────────│───────────│
  │            │           │           │           │           │           │
```

### Detailed Flow

1. **Slack → Hub (Webhook)**
   ```json
   {
     "event_id": "evt_001",
     "type": "message.created",
     "data": { "channel": "C01", "text": "New feature request: ...", "user": "U01" }
   }
   ```

2. **Hub (Auth/Route)**
   - Verify HMAC signature
   - Check workspace mapping
   - Evaluate policy (Full Integration mode)
   - Route to Loader

3. **Loader (Map)**
   - Extract message fields
   - Transform to Conversation entity
   - Validate against schema
   - Write to Spine

4. **Spine (Write)**
   - Store Conversation entity
   - Trigger Brain notification

5. **Brain (Memory Update)**
   - Ingest conversation to memory
   - Compute embeddings
   - Link to related entities (previous messages, mentioned users)
   - Identify potential task creation

6. **Agents (Plan)**
   - Receive trigger: new_feature_request pattern detected
   - Retrieve context from Brain
   - Plan: Create task in Notion, notify channel
   - Check approval requirements

7. **Agents (Approval)**
   - If required: Send approval request to owner
   - Wait for approval (or timeout)

8. **Agents → Render (Execute)**
   - On approval: Execute template
   - Create Notion task
   - Format response message

9. **Render (Output)**
   - Generate Notion page blocks
   - Export to Notion
   - Return confirmation

10. **Hub (Audit)**
    - Log complete flow
    - Record: actions, outcomes, actors, timestamps

### Audit Log Entry

```json
{
  "workspace_id": "ws_123",
  "actor_id": "agent_feature_request",
  "action_type": "template.execute",
  "resource_type": "notion.page",
  "resource_id": "page_789",
  "timestamp": "2025-01-15T10:30:15Z",
  "request_id": "req_abc123",
  "policy_id": "pol_auto_task",
  "outcome": "success",
  "context": {
    "trigger": "slack.message.created",
    "source_event_id": "evt_001",
    "approval_id": "apr_456",
    "approved_by": "user_admin"
  }
}
```

---

## Diagrams

See [PlantUML source](/diagrams/how-it-works.puml) for editable diagrams.

## Cross-References

- [Spine Schemas](/docs/spine/schemas.md)
- [Webhook Documentation](/docs/webhooks/index.md)
- [API Reference](/docs/api/index.md)
- [Security & Governance](/docs/security/index.md)
