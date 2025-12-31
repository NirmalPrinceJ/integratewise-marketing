# Agents API Reference

> Complete specification for agent invocation, approval flows, and execution.

## Overview

Agents are autonomous workflows that execute actions based on triggers, context, and business rules. They can create tasks, generate documents, send notifications, and update systems.

## Agent Types

| Type | Trigger | Use Case |
|------|---------|----------|
| **Event-driven** | Webhook events | React to Slack messages, emails, deal updates |
| **Scheduled** | Cron schedule | Daily reports, weekly planning, health checks |
| **Manual** | API invocation | On-demand execution, testing |
| **Chained** | Agent completion | Multi-step workflows |

---

## Agent Configuration

### Schema

```typescript
interface AgentConfig {
  /** Unique agent identifier */
  id: string;
  
  /** Display name */
  name: string;
  
  /** Description */
  description: string;
  
  /** Agent version */
  version: string;
  
  /** Trigger configuration */
  triggers: AgentTrigger[];
  
  /** Input schema */
  input_schema: JSONSchema;
  
  /** Output types this agent produces */
  output_types: ('task' | 'note' | 'email' | 'render' | 'api_call')[];
  
  /** Context resolution rules */
  context_policy: ContextPolicy;
  
  /** Execution constraints */
  constraints: ExecutionConstraints;
  
  /** Approval configuration */
  approval: ApprovalConfig;
  
  /** Active status */
  enabled: boolean;
}
```

### Trigger Types

```typescript
type AgentTrigger = 
  | EventTrigger
  | ScheduleTrigger
  | ManualTrigger
  | ChainTrigger;

interface EventTrigger {
  type: 'event';
  /** Event types to match */
  events: string[];
  /** Additional filter conditions */
  filter?: Record<string, unknown>;
}

interface ScheduleTrigger {
  type: 'schedule';
  /** Cron expression */
  cron: string;
  /** Timezone */
  timezone: string;
}

interface ManualTrigger {
  type: 'manual';
  /** Allowed invoker roles */
  allowed_roles: string[];
}

interface ChainTrigger {
  type: 'chain';
  /** Parent agent ID */
  after_agent: string;
  /** Condition for chaining */
  condition?: string;
}
```

---

## Invocation

### Endpoint

```http
POST /v1/agents/{agent_id}/invoke
```

### Request

```typescript
interface InvokeRequest {
  /** Input parameters */
  input: Record<string, unknown>;
  
  /** Context overrides */
  context?: {
    entity_ids?: string[];
    time_range?: { start: string; end: string };
    memory_query?: string;
    max_memories?: number;
  };
  
  /** Execution options */
  options?: {
    timeout_ms?: number;      // Max: 60000
    sync?: boolean;           // Wait for result
    skip_approval?: boolean;  // Requires elevated permission
    dry_run?: boolean;        // Plan only
  };
  
  /** Idempotency key */
  idempotency_key?: string;
}
```

### Response

```typescript
interface InvokeResponse {
  run_id: string;
  agent_id: string;
  status: RunStatus;
  outputs?: AgentOutput[];
  approval?: ApprovalRequest;
  error?: AgentError;
  timing: {
    created_at: string;
    started_at?: string;
    completed_at?: string;
    duration_ms?: number;
  };
}

type RunStatus = 
  | 'queued'           // Waiting to start
  | 'running'          // Currently executing
  | 'pending_approval' // Waiting for approval
  | 'completed'        // Finished successfully
  | 'failed'           // Error occurred
  | 'cancelled'        // Manually cancelled
  | 'timeout';         // Exceeded timeout
```

---

## Context Resolution

### Policy Configuration

```typescript
interface ContextPolicy {
  /** Memory retrieval */
  memories: {
    enabled: boolean;
    max_count: number;
    time_window: string;  // e.g., "30d"
    relevance_threshold: number;  // 0-1
  };
  
  /** Entity retrieval */
  entities: {
    enabled: boolean;
    max_count: number;
    types: string[];
    filter_pii: boolean;
    redact_sensitive: boolean;
  };
  
  /** Relationship traversal */
  relationships: {
    enabled: boolean;
    max_depth: number;
    types: string[];
  };
}
```

### Resolution Process

1. **Parse input**: Extract entity references, keywords
2. **Memory search**: Query Brain for relevant memories
3. **Entity lookup**: Fetch referenced Spine entities
4. **Relationship expansion**: Traverse linked entities
5. **PII filtering**: Apply DataSentinel rules
6. **Context assembly**: Build execution context

### Context Object

```typescript
interface ExecutionContext {
  /** Workspace metadata */
  workspace: {
    id: string;
    name: string;
    timezone: string;
  };
  
  /** Actor (invoker or trigger source) */
  actor: {
    id: string;
    type: 'user' | 'system' | 'agent';
    email?: string;
  };
  
  /** Retrieved memories */
  memories: Array<{
    id: string;
    type: string;
    content: unknown;
    relevance: number;
    timestamp: string;
  }>;
  
  /** Retrieved entities */
  entities: SpineEntity[];
  
  /** Resolved variables */
  variables: Record<string, unknown>;
  
  /** Temporal context */
  time: {
    now: string;
    timezone: string;
    locale: string;
  };
}
```

---

## Execution Constraints

### Sandboxing

```typescript
interface ExecutionConstraints {
  /** Compute limits */
  compute: {
    max_execution_ms: number;   // Default: 60000
    max_memory_mb: number;      // Default: 512
    max_cpu_percent: number;    // Default: 50
  };
  
  /** API call limits */
  api: {
    max_total_calls: number;    // Default: 50
    max_per_tool: number;       // Default: 20
    rate_limit_per_sec: number; // Default: 10
  };
  
  /** Token limits */
  tokens: {
    max_input: number;          // Default: 100000
    max_output: number;         // Default: 10000
  };
  
  /** Network restrictions */
  network: {
    allowed_domains: string[];
    blocked_ports: number[];
  };
  
  /** Tool allowlist */
  allowed_tools: string[];
}
```

### Default Constraints by Tier

| Constraint | Free | Pro | Business | Enterprise |
|------------|------|-----|----------|------------|
| Max execution | 30s | 60s | 60s | 120s |
| Max API calls | 20 | 50 | 100 | 200 |
| Max memory | 256MB | 512MB | 1GB | 2GB |
| Max tokens | 50K | 100K | 200K | 500K |

---

## Approval Flows

### Configuration

```typescript
interface ApprovalConfig {
  /** Enable approval workflow */
  enabled: boolean;
  
  /** Actions requiring approval */
  require_for: ApprovalAction[];
  
  /** Approver selection */
  approvers: ApproverRule[];
  
  /** Timeout before auto-rejection */
  timeout_hours: number;
  
  /** Auto-approve conditions */
  auto_approve?: AutoApproveRule[];
}

type ApprovalAction = 
  | 'create_external'    // Create record in external tool
  | 'update_external'    // Update external record
  | 'delete_external'    // Delete external record
  | 'send_email'         // Send email
  | 'bulk_operation'     // Operations on >10 items
  | 'high_value_deal'    // Deal amount > threshold
  | 'sensitive_data'     // Operations involving PII

interface ApproverRule {
  /** Approver type */
  type: 'role' | 'user' | 'owner' | 'manager';
  /** Role names or user IDs */
  values: string[];
  /** Approval count required */
  required: number;
}
```

### Approval Request

```typescript
interface ApprovalRequest {
  request_id: string;
  run_id: string;
  agent_id: string;
  action: string;
  preview: unknown;
  approvers: Array<{
    id: string;
    email: string;
    status: 'pending' | 'approved' | 'rejected';
  }>;
  created_at: string;
  expires_at: string;
}
```

### Approval API

```http
# Approve
POST /v1/approvals/{request_id}/approve

# Reject
POST /v1/approvals/{request_id}/reject
{
  "reason": "string"
}

# List pending
GET /v1/approvals?status=pending
```

---

## Output Types

### Task Output

```typescript
interface TaskOutput {
  type: 'task';
  data: {
    title: string;
    description?: string;
    status: string;
    priority: string;
    due_date?: string;
    assignee_id?: string;
    tags?: string[];
  };
  destination?: {
    tool: 'notion' | 'asana' | 'jira';
    external_id: string;
    url: string;
  };
}
```

### Note Output

```typescript
interface NoteOutput {
  type: 'note';
  data: {
    title: string;
    body_md: string;
    tags?: string[];
  };
  destination?: {
    tool: 'notion' | 'coda' | 'confluence';
    external_id: string;
    url: string;
  };
}
```

### Email Output

```typescript
interface EmailOutput {
  type: 'email';
  data: {
    to: string[];
    cc?: string[];
    subject: string;
    body_html: string;
    body_text?: string;
  };
  destination?: {
    tool: 'gmail';
    external_id: string;  // Draft ID or sent message ID
    status: 'draft' | 'sent';
  };
}
```

### Render Output

```typescript
interface RenderOutput {
  type: 'render';
  data: {
    template_id: string;
    parameters: Record<string, unknown>;
    result: unknown;
  };
  destination?: {
    tool: string;
    external_id: string;
    url: string;
  };
}
```

---

## Error Handling

### Error Types

```typescript
interface AgentError {
  code: AgentErrorCode;
  message: string;
  details?: Record<string, unknown>;
  retryable: boolean;
  occurred_at: string;
}

type AgentErrorCode =
  | 'input_validation_failed'
  | 'context_unavailable'
  | 'tool_not_allowed'
  | 'tool_execution_failed'
  | 'approval_denied'
  | 'approval_timeout'
  | 'execution_timeout'
  | 'sandbox_violation'
  | 'quota_exceeded'
  | 'internal_error';
```

### Retry Behavior

| Error | Retryable | Strategy |
|-------|-----------|----------|
| `context_unavailable` | Yes | Exponential backoff |
| `tool_execution_failed` | Yes | 3 attempts, 1s backoff |
| `execution_timeout` | Yes | Increase timeout |
| `approval_denied` | No | Review and resubmit |
| `sandbox_violation` | No | Fix agent config |
| `quota_exceeded` | No | Upgrade plan |

### Failed Runs DLQ

Failed runs are stored for inspection:

```http
GET /v1/agents/{agent_id}/runs?status=failed
GET /v1/agents/{agent_id}/runs/{run_id}/error
POST /v1/agents/{agent_id}/runs/{run_id}/retry
```

---

## Examples

### Weekly Planning Agent

```typescript
// Configuration
const weeklyPlanningAgent: AgentConfig = {
  id: 'agent_weekly_planning',
  name: 'Weekly Planning OS',
  description: 'Creates weekly plan from notes, calendar, and carryover tasks',
  version: '1.0.0',
  triggers: [
    {
      type: 'schedule',
      cron: '0 8 * * 1', // Monday 8am
      timezone: 'America/New_York',
    },
    {
      type: 'manual',
      allowed_roles: ['admin', 'operator', 'contributor'],
    },
  ],
  input_schema: {
    type: 'object',
    properties: {
      week_start: { type: 'string', format: 'date' },
      include_carryover: { type: 'boolean', default: true },
      focus_areas: { type: 'array', items: { type: 'string' } },
    },
    required: ['week_start'],
  },
  output_types: ['note', 'task'],
  context_policy: {
    memories: { enabled: true, max_count: 50, time_window: '7d', relevance_threshold: 0.7 },
    entities: { enabled: true, max_count: 100, types: ['task', 'note'], filter_pii: false },
    relationships: { enabled: true, max_depth: 1, types: ['relates_to'] },
  },
  constraints: {
    compute: { max_execution_ms: 45000, max_memory_mb: 512, max_cpu_percent: 50 },
    api: { max_total_calls: 30, max_per_tool: 15, rate_limit_per_sec: 5 },
    tokens: { max_input: 50000, max_output: 5000 },
    network: { allowed_domains: ['api.integratewise.com'], blocked_ports: [] },
    allowed_tools: ['spine.read', 'brain.recall', 'render.execute', 'notion.create'],
  },
  approval: {
    enabled: true,
    require_for: ['create_external'],
    approvers: [{ type: 'owner', values: [], required: 1 }],
    timeout_hours: 24,
  },
  enabled: true,
};

// Invocation
const response = await fetch('/v1/agents/agent_weekly_planning/invoke', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    input: {
      week_start: '2025-01-20',
      include_carryover: true,
      focus_areas: ['product', 'hiring'],
    },
    options: {
      sync: true,
      timeout_ms: 45000,
    },
  }),
});
```

---

## Cross-References

- [API Reference](/docs/api/index.md)
- [Templates](/docs/templates/index.md)
- [Security & RBAC](/docs/security/rbac-abac.md)
- [Spine Schemas](/docs/spine/schemas.md)
