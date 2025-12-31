# API Reference

> Complete API documentation for IntegrateWise OS.

## Base URL

```
https://api.integratewise.com/v1
```

## Authentication

All API requests require authentication via Bearer token or API key.

### Bearer Token (OAuth2)

```http
Authorization: Bearer {access_token}
```

### API Key

```http
X-API-Key: {api_key}
```

---

## Common Query Parameters

All list endpoints support these query parameters:

| Parameter | Type | Description | Default | Example |
|-----------|------|-------------|---------|---------|
| `limit` | integer | Max results per page | 50 | `limit=100` |
| `cursor` | string | Pagination cursor | — | `cursor=abc123` |
| `order` | string | Sort order | `desc` | `order=asc` |
| `order_by` | string | Sort field | `created_at` | `order_by=updated_at` |

### Filtering

Use `filter[field][op]=value` syntax:

| Operator | Description | Example |
|----------|-------------|---------|
| `eq` | Equals | `filter[status][eq]=active` |
| `ne` | Not equals | `filter[status][ne]=cancelled` |
| `gt` | Greater than | `filter[created_at][gt]=2025-01-01` |
| `gte` | Greater than or equal | `filter[priority][gte]=high` |
| `lt` | Less than | `filter[due_date][lt]=2025-02-01` |
| `lte` | Less than or equal | `filter[score][lte]=50` |
| `in` | In list | `filter[source][in]=slack,gmail` |
| `contains` | Contains substring | `filter[title][contains]=planning` |
| `starts_with` | Starts with | `filter[name][starts_with]=Project` |

**Example:**
```
GET /v1/tasks?filter[status][eq]=in_progress&filter[priority][in]=high,critical&limit=25
```

---

## Error Model

All errors follow this structure:

```typescript
interface APIError {
  error: {
    /** Error code (machine-readable) */
    code: string;
    
    /** Human-readable message */
    message: string;
    
    /** Additional error details */
    details?: Record<string, unknown>;
    
    /** Request ID for support */
    request_id: string;
  };
}
```

### Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| `bad_request` | 400 | Invalid request syntax |
| `validation_error` | 400 | Request validation failed |
| `unauthorized` | 401 | Missing or invalid auth |
| `forbidden` | 403 | Insufficient permissions |
| `not_found` | 404 | Resource not found |
| `conflict` | 409 | Resource conflict |
| `rate_limited` | 429 | Too many requests |
| `internal_error` | 500 | Server error |
| `service_unavailable` | 503 | Temporary unavailability |

### Validation Error Details

```json
{
  "error": {
    "code": "validation_error",
    "message": "Request validation failed",
    "details": {
      "fields": [
        {
          "field": "title",
          "code": "required",
          "message": "Title is required"
        },
        {
          "field": "due_date",
          "code": "invalid_format",
          "message": "Due date must be ISO 8601 format"
        }
      ]
    },
    "request_id": "req_abc123"
  }
}
```

---

## Rate Limiting

| Tier | Requests/min | Burst |
|------|--------------|-------|
| Free | 60 | 10 |
| Pro | 300 | 50 |
| Business | 1000 | 100 |
| Enterprise | Custom | Custom |

Rate limit headers:

```http
X-RateLimit-Limit: 300
X-RateLimit-Remaining: 287
X-RateLimit-Reset: 1705312260
```

---

## Spine Entities API

### List Entities

```http
GET /v1/spine/{entity_type}
```

**Entity types:** `tasks`, `notes`, `conversations`, `plans`, `health-metrics`

**Example:**
```bash
curl -X GET "https://api.integratewise.com/v1/spine/tasks?filter[status][eq]=in_progress&limit=25" \
  -H "Authorization: Bearer {token}"
```

### Get Entity

```http
GET /v1/spine/{entity_type}/{id}
```

### Create Entity

```http
POST /v1/spine/{entity_type}
```

### Update Entity

```http
PATCH /v1/spine/{entity_type}/{id}
```

### Delete Entity

```http
DELETE /v1/spine/{entity_type}/{id}
```

---

## Spine Traversal

### Relationships

```http
GET /v1/spine/{entity_type}/{id}/relationships
```

**Example: Get all tasks linked to an account**
```bash
curl -X GET "https://api.integratewise.com/v1/spine/health-metrics/hm_123/relationships?type=relates_to" \
  -H "Authorization: Bearer {token}"
```

### Traversal Queries

Complex traversals for connected data:

```http
POST /v1/spine/traverse
```

**Body:**
```json
{
  "start": {
    "entity_type": "health-metrics",
    "filter": {
      "account_id": "acct_123"
    }
  },
  "traverse": [
    {
      "relationship": "relates_to",
      "target_type": "conversations",
      "depth": 1
    },
    {
      "relationship": "created_from",
      "target_type": "tasks",
      "depth": 1
    }
  ],
  "include": ["entity", "relationships"]
}
```

**Example: Accounts → Subscriptions → Invoices**
```json
{
  "start": {
    "entity_type": "health-metrics",
    "filter": {
      "metric_type": "contract_value"
    }
  },
  "traverse": [
    {
      "relationship": "relates_to",
      "target_type": "health-metrics",
      "filter": {
        "metric_type": "renewal_proximity"
      }
    }
  ]
}
```

---

## Agents API

### List Agents

```http
GET /v1/agents
```

### Get Agent

```http
GET /v1/agents/{agent_id}
```

### Invoke Agent

```http
POST /v1/agents/{agent_id}/invoke
```

See [Agent Invocation](#agent-invocation) for full specification.

### Get Agent Runs

```http
GET /v1/agents/{agent_id}/runs
```

### Get Run Details

```http
GET /v1/agents/{agent_id}/runs/{run_id}
```

### Cancel Run

```http
POST /v1/agents/{agent_id}/runs/{run_id}/cancel
```

---

## Agent Invocation

### Request Schema

```typescript
interface AgentInvokeRequest {
  /** Input parameters for the agent */
  input: Record<string, unknown>;
  
  /** Override context resolution */
  context?: {
    /** Entity IDs to include */
    entity_ids?: string[];
    
    /** Time range for context */
    time_range?: {
      start: string;
      end: string;
    };
    
    /** Memory search query */
    memory_query?: string;
    
    /** Max memories to retrieve */
    max_memories?: number;
  };
  
  /** Execution options */
  options?: {
    /** Timeout in milliseconds (max: 60000) */
    timeout_ms?: number;
    
    /** Run synchronously (wait for result) */
    sync?: boolean;
    
    /** Skip approval even if configured */
    skip_approval?: boolean;
    
    /** Dry run (plan but don't execute) */
    dry_run?: boolean;
  };
  
  /** Idempotency key */
  idempotency_key?: string;
}
```

### Response Schema

```typescript
interface AgentInvokeResponse {
  /** Run ID */
  run_id: string;
  
  /** Agent ID */
  agent_id: string;
  
  /** Execution status */
  status: 'queued' | 'running' | 'pending_approval' | 'completed' | 'failed' | 'cancelled';
  
  /** Outputs (if sync and completed) */
  outputs?: AgentOutput[];
  
  /** Approval request (if pending) */
  approval?: {
    request_id: string;
    approver_ids: string[];
    expires_at: string;
    preview: unknown;
  };
  
  /** Error (if failed) */
  error?: {
    code: string;
    message: string;
    retryable: boolean;
  };
  
  /** Timing */
  created_at: string;
  started_at?: string;
  completed_at?: string;
}

interface AgentOutput {
  /** Output type */
  type: 'task' | 'note' | 'email' | 'render' | 'api_call';
  
  /** Output data */
  data: unknown;
  
  /** Destination (if exported) */
  destination?: {
    tool: string;
    external_id: string;
    url: string;
  };
}
```

### Context Resolution

Agents automatically retrieve relevant context:

1. **Entity context**: Recent entities matching agent's scope
2. **Memory context**: Brain memories matching input
3. **Relationship context**: Linked entities

Override with `context` parameter:

```json
{
  "input": { "account_id": "acct_123" },
  "context": {
    "entity_ids": ["hm_456", "conv_789"],
    "time_range": {
      "start": "2025-01-01T00:00:00Z",
      "end": "2025-01-31T23:59:59Z"
    },
    "max_memories": 50
  }
}
```

### Timeout & Retry

| Parameter | Default | Max |
|-----------|---------|-----|
| `timeout_ms` | 30000 | 60000 |
| Automatic retries | 3 | — |
| Retry backoff | 1s, 5s, 30s | — |

Failed runs are saved to DLQ for inspection.

### Dry Run

Preview agent plan without execution:

```json
{
  "input": { "message": "Create a task from this" },
  "options": { "dry_run": true }
}
```

Response includes planned actions without executing them.

---

## SDK Examples

### JavaScript/TypeScript

```typescript
import { IntegrateWiseClient } from '@integratewise/sdk';

const client = new IntegrateWiseClient({
  apiKey: process.env.IW_API_KEY,
});

// List tasks
const tasks = await client.spine.tasks.list({
  filter: {
    status: { eq: 'in_progress' },
    priority: { in: ['high', 'critical'] },
  },
  limit: 25,
  orderBy: 'due_date',
  order: 'asc',
});

// Invoke agent
const run = await client.agents.invoke('agent_weekly_planning', {
  input: {
    week_start: '2025-01-20',
    include_carryover: true,
  },
  options: {
    sync: true,
    timeout_ms: 45000,
  },
});

if (run.status === 'completed') {
  console.log('Outputs:', run.outputs);
}

// Traverse relationships
const accountData = await client.spine.traverse({
  start: {
    entityType: 'health-metrics',
    filter: { account_id: 'acct_123' },
  },
  traverse: [
    { relationship: 'relates_to', targetType: 'conversations' },
  ],
});
```

### Python

```python
from integratewise import IntegrateWiseClient

client = IntegrateWiseClient(api_key=os.environ['IW_API_KEY'])

# List tasks
tasks = client.spine.tasks.list(
    filter={
        'status': {'eq': 'in_progress'},
        'priority': {'in': ['high', 'critical']},
    },
    limit=25,
    order_by='due_date',
    order='asc',
)

# Invoke agent
run = client.agents.invoke(
    agent_id='agent_weekly_planning',
    input={
        'week_start': '2025-01-20',
        'include_carryover': True,
    },
    options={
        'sync': True,
        'timeout_ms': 45000,
    },
)

if run.status == 'completed':
    print('Outputs:', run.outputs)

# Traverse relationships
account_data = client.spine.traverse(
    start={
        'entity_type': 'health-metrics',
        'filter': {'account_id': 'acct_123'},
    },
    traverse=[
        {'relationship': 'relates_to', 'target_type': 'conversations'},
    ],
)
```

### cURL

```bash
# List tasks
curl -X GET "https://api.integratewise.com/v1/spine/tasks?filter[status][eq]=in_progress&limit=25" \
  -H "Authorization: Bearer {token}"

# Invoke agent
curl -X POST "https://api.integratewise.com/v1/agents/agent_weekly_planning/invoke" \
  -H "Authorization: Bearer {token}" \
  -H "Content-Type: application/json" \
  -d '{
    "input": {
      "week_start": "2025-01-20",
      "include_carryover": true
    },
    "options": {
      "sync": true
    }
  }'

# Get run status
curl -X GET "https://api.integratewise.com/v1/agents/agent_weekly_planning/runs/run_abc123" \
  -H "Authorization: Bearer {token}"
```

---

## Webhooks API

See [Webhooks Documentation](/docs/webhooks/index.md).

---

## Render API

### Execute Template

```http
POST /v1/render/templates/{template_id}/execute
```

### Preview Template

```http
POST /v1/render/templates/{template_id}/preview
```

### List Outputs

```http
GET /v1/render/outputs
```

---

## Cross-References

- [Spine Schemas](/docs/spine/schemas.md)
- [Agent Documentation](/docs/api/agents.md)
- [Webhooks](/docs/webhooks/index.md)
- [Security](/docs/security/index.md)
