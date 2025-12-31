# How It Works: Component I/O Contracts

This document defines the input/output contracts for each IntegrateWise OS component and the canonical sequence flows.

## Component Overview

IntegrateWise OS consists of seven core components:

1. **Hub**: Authentication, policy engine, routing, audit, usage metering
2. **Spine**: Canonical entities, relationships, constraints
3. **AI Loader**: Sources, transforms, validation, conflict resolution
4. **Brain**: Memory model (short/long-term), deduplication, linking
5. **Agents**: Triggers, approval flows, sandboxing, context retrieval
6. **Render**: Output types, versioned templates, parameters, export targets
7. **Lenses**: Opinionated views over Spine (Personal, Work, Business Ops, CS)

## Component I/O Contracts

### Hub

**Purpose**: Authentication, authorization, policy enforcement, routing, audit logging, usage metering.

**Inputs:**
- Authentication credentials (OAuth2 tokens, API keys, service accounts)
- Incoming requests (webhooks, API calls, agent actions)
- Policy rules (RBAC, ABAC, workspace isolation)
- Routing configuration (connector mappings, workspace assignments)

**Outputs:**
- Authenticated requests with user/workspace context
- Policy decisions (allow/deny with reason)
- Routing directives (target connector, mode, scopes)
- Audit log entries: `{workspace_id, actor_id, action_type, resource_type, resource_id, timestamp, request_id, policy_id, outcome}`
- Usage metrics: `{workspace_id, resource_type, operation_type, count, timestamp}`

**Error States:**
- `401 Unauthorized`: Invalid or expired credentials
- `403 Forbidden`: Policy denies access
- `429 Too Many Requests`: Rate limit exceeded
- `500 Internal Server Error`: Policy engine failure

**Interfaces:**
```typescript
interface HubAuthAdapter {
  authenticate(credentials: Credentials): Promise<AuthResult>;
  refresh(token: string): Promise<AuthResult>;
}

interface HubPolicyEngine {
  evaluate(request: PolicyRequest): Promise<PolicyDecision>;
  checkRBAC(userId: string, resource: string, action: string): Promise<boolean>;
}

interface HubRouter {
  route(request: RoutedRequest): Promise<RoutingDirective>;
}

interface HubAuditSink {
  log(event: AuditEvent): Promise<void>;
  query(filters: AuditFilters): Promise<AuditEvent[]>;
}

interface HubUsageMeter {
  record(usage: UsageEvent): Promise<void>;
  getUsage(workspaceId: string, period: string): Promise<UsageStats>;
}
```

### Spine

**Purpose**: Canonical data layer with normalized entities, relationships, and constraints.

**Inputs:**
- Entity create/update/delete operations
- Query requests (filters, joins, relationships)
- Relationship links/unlinks
- Constraint validations

**Outputs:**
- Normalized entities (Task, Note, Conversation, Plan, HealthMetric)
- Query results with relationships resolved
- Constraint validation results
- Change events (for downstream components)

**Error States:**
- `400 Bad Request`: Invalid entity schema or constraint violation
- `404 Not Found`: Entity not found
- `409 Conflict`: Constraint violation (e.g., duplicate external_ref)
- `422 Unprocessable Entity`: Relationship reference invalid

**Constraints:**
- Entity IDs must be UUID v4
- `source_tool` + `external_ref` must be unique
- Relationship references must point to existing entities
- Timestamps must be valid ISO 8601

**Interfaces:**
```typescript
interface SpineEntityStore {
  create<T extends SpineEntity>(entity: T): Promise<T>;
  update<T extends SpineEntity>(id: string, updates: Partial<T>): Promise<T>;
  delete(id: string): Promise<void>;
  get<T extends SpineEntity>(id: string): Promise<T | null>;
  query<T extends SpineEntity>(filters: QueryFilters): Promise<T[]>;
}

interface SpineRelationshipManager {
  link(sourceId: string, targetId: string, relationshipType: string): Promise<void>;
  unlink(sourceId: string, targetId: string): Promise<void>;
  getRelationships(entityId: string): Promise<Relationship[]>;
}

interface SpineConstraintValidator {
  validate(entity: SpineEntity): Promise<ValidationResult>;
  checkUniqueness(entity: SpineEntity): Promise<boolean>;
}
```

### AI Loader

**Purpose**: Transform source tool data into Spine entities with validation and conflict resolution.

**Inputs:**
- Source tool data (webhook payloads, API responses)
- Mapping configurations (connector-specific)
- Conflict resolution rules
- Validation schemas

**Outputs:**
- Normalized Spine entities
- Conflict resolution decisions
- Validation errors/warnings
- Transformation metadata

**Error States:**
- `400 Bad Request`: Invalid source data format
- `422 Unprocessable Entity`: Mapping validation failed
- `409 Conflict`: Conflict resolution required
- `500 Internal Server Error`: Transformation failure

**Transformation Pipeline:**
1. **Parse**: Extract data from source format
2. **Validate**: Check against source schema
3. **Map**: Transform to Spine entity structure
4. **Resolve Conflicts**: Handle duplicates, updates, merges
5. **Validate**: Check Spine constraints
6. **Output**: Emit normalized entity

**Interfaces:**
```typescript
interface AILoaderSource {
  parse(payload: unknown): Promise<SourceData>;
  validate(data: SourceData): Promise<ValidationResult>;
}

interface AILoaderTransform {
  map(sourceData: SourceData, mapping: MappingConfig): Promise<SpineEntity>;
  normalize(entity: Partial<SpineEntity>): Promise<SpineEntity>;
}

interface AILoaderConflictResolver {
  detect(existing: SpineEntity, incoming: SpineEntity): Promise<Conflict>;
  resolve(conflict: Conflict, strategy: ConflictStrategy): Promise<SpineEntity>;
}
```

### Brain

**Purpose**: Memory model for short-term and long-term storage, deduplication, and cross-tool linking.

**Inputs:**
- Entities to index (Tasks, Notes, Conversations, Plans)
- Search queries
- Linking requests
- Deduplication keys

**Outputs:**
- Search results with relevance scores
- Linked entity graphs
- Deduplication matches
- Memory embeddings (for semantic search)

**Error States:**
- `400 Bad Request`: Invalid query format
- `500 Internal Server Error`: Indexing failure

**Memory Model:**
- **Short-term**: Recent entities (last 30 days), fast access
- **Long-term**: All entities, compressed and indexed
- **Deduplication**: Key-based (`source_tool` + `external_ref`) and semantic (embeddings)
- **Linking**: Cross-entity relationships via embeddings and metadata

**Interfaces:**
```typescript
interface BrainMemoryStore {
  index(entity: SpineEntity): Promise<void>;
  search(query: SearchQuery): Promise<SearchResult[]>;
  getLinkedEntities(entityId: string): Promise<SpineEntity[]>;
  deduplicate(entity: SpineEntity): Promise<DeduplicationResult>;
}

interface BrainLinker {
  computeLinkageScore(entity1: SpineEntity, entity2: SpineEntity): Promise<number>;
  linkEntities(entityIds: string[], threshold: number): Promise<void>;
}
```

### Agents

**Purpose**: Automated workflows with triggers, approvals, sandboxing, and context retrieval.

**Inputs:**
- Trigger events (webhooks, schedules, manual)
- Context queries (Spine entities, Brain memory)
- Approval requests
- Sandbox constraints

**Outputs:**
- Agent actions (create/update entities, render outputs)
- Approval requests
- Execution logs
- Error reports

**Error States:**
- `400 Bad Request`: Invalid agent configuration
- `403 Forbidden`: Approval required or denied
- `429 Too Many Requests`: Rate limit exceeded
- `500 Internal Server Error`: Agent execution failure

**Agent Types:**
- **Brain Agent**: Ingests conversations, links ideas, generates notes
- **Planning Agent**: Creates plans from tasks, schedules milestones
- **Action Agent**: Executes actions across tools (with approvals)
- **Render Agent**: Generates outputs (docs, emails, dashboards)

**Interfaces:**
```typescript
interface AgentTrigger {
  evaluate(event: TriggerEvent): Promise<boolean>;
  execute(agent: Agent, context: AgentContext): Promise<AgentResult>;
}

interface AgentApprovalFlow {
  request(approval: ApprovalRequest): Promise<ApprovalResult>;
  check(approvalId: string): Promise<ApprovalStatus>;
}

interface AgentSandbox {
  enforce(limits: SandboxLimits): Promise<void>;
  check(operation: AgentOperation): Promise<boolean>;
}

interface AgentContextRetriever {
  retrieve(query: ContextQuery): Promise<AgentContext>;
  getRelevantEntities(query: string): Promise<SpineEntity[]>;
}
```

### Render

**Purpose**: Universal output generation (docs, emails, dashboards, reports) from Spine data.

**Inputs:**
- Template identifier and version
- Template parameters (entity IDs, variables)
- Output target (Notion, Gmail, PDF, HTML)
- Rendering options

**Outputs:**
- Rendered content (markdown, HTML, JSON, PDF)
- Export artifacts (files, API responses)
- Rendering metadata (version, timestamp, errors)

**Error States:**
- `400 Bad Request`: Invalid template or parameters
- `404 Not Found`: Template not found
- `422 Unprocessable Entity`: Template validation failed
- `500 Internal Server Error`: Rendering failure

**Output Types:**
- **Documents**: Markdown, HTML, PDF
- **Emails**: HTML email with attachments
- **Dashboards**: HTML/JSON for embedding
- **Reports**: PDF, CSV, Excel

**Interfaces:**
```typescript
interface RenderTemplateEngine {
  render(templateId: string, version: string, params: RenderParams): Promise<RenderedContent>;
  validate(templateId: string, params: RenderParams): Promise<ValidationResult>;
}

interface RenderOutputTarget {
  export(content: RenderedContent, target: OutputTarget): Promise<ExportResult>;
  getSupportedTargets(): Promise<OutputTarget[]>;
}
```

### Lenses

**Purpose**: Opinionated views over Spine data (Personal, Work, Business Ops, CS Intelligence).

**Inputs:**
- Lens type (personal, work, business_ops, customer_success)
- Filter parameters
- User/workspace context

**Outputs:**
- Filtered and transformed entity views
- Computed fields (health scores, SLAs, dependencies)
- Aggregations and summaries

**Lens Types:**

**Personal Lens:**
- Fields: `title`, `due_date`, `priority`, `context_link`
- Filters: Assigned to user, personal tags

**Work Lens:**
- Fields: `owner`, `SLA_due`, `dependency_id`
- Filters: Team workspace, active status

**Business Ops Lens:**
- Fields: `arr`, `churn_risk`, `cohort_id`
- Aggregations: Revenue, growth, retention

**CS Intelligence Lens:**
- Fields: `health_score` (0-100), `risk_flag`, `playbook_id`, `last_touch`
- Computed: Health score formula, risk thresholds

**Interfaces:**
```typescript
interface LensView {
  getEntities(lensType: LensType, filters: LensFilters): Promise<LensEntity[]>;
  computeFields(entity: SpineEntity, lensType: LensType): Promise<ComputedFields>;
  aggregate(filters: LensFilters, aggregations: Aggregation[]): Promise<AggregationResult>;
}
```

## Canonical Sequence Flow

### Sequence: Slack Message → Webhook → Hub → Loader → Spine → Brain → Agent → Approval → Notion Write → Render → Audit

```
┌─────────┐
│  Slack  │
└────┬────┘
     │ 1. Webhook event (message.created)
     ▼
┌─────────┐
│   Hub   │
│─────────│
│ Auth    │ 2. Authenticate webhook (HMAC-SHA256)
│ Policy  │ 3. Evaluate policy (allow/deny)
│ Router  │ 4. Route to Slack connector
└────┬────┘
     │ 5. Authenticated request
     ▼
┌─────────────┐
│  AI Loader  │
│─────────────│
│ Parse       │ 6. Parse Slack payload
│ Map         │ 7. Map to Conversation entity
│ Validate    │ 8. Validate Spine constraints
└────┬─────┘
     │ 9. Normalized Conversation entity
     ▼
┌─────────┐
│  Spine  │
│─────────│
│ Create  │ 10. Create Conversation entity
│ Link    │ 11. Link to related entities (if any)
└────┬────┘
     │ 12. Entity created event
     ▼
┌─────────┐
│  Brain  │
│─────────│
│ Index   │ 13. Index Conversation
│ Link    │ 14. Compute linkage scores
│ Dedup   │ 15. Check for duplicates
└────┬────┘
     │ 16. Memory updated
     ▼
┌─────────┐
│ Agents  │
│─────────│
│ Trigger │ 17. Evaluate triggers (Brain Agent)
│ Context │ 18. Retrieve relevant context
│ Plan    │ 19. Generate action plan
└────┬────┘
     │ 20. Action: Create Notion page
     ▼
┌─────────┐
│ Approval│
│─────────│
│ Request │ 21. Request approval (if required)
│ Check   │ 22. Approval granted
└────┬────┘
     │ 23. Approved action
     ▼
┌─────────┐
│  Hub    │
│─────────│
│ Router  │ 24. Route to Notion connector (write)
│ Policy  │ 25. Check write permissions
└────┬────┘
     │ 26. Write request
     ▼
┌─────────┐
│ Notion  │
│  API    │ 27. Create Notion page
└────┬────┘
     │ 28. Success response
     ▼
┌─────────┐
│ Render  │
│─────────│
│ Template│ 29. Render dashboard update (optional)
│ Export  │ 30. Export to target (if needed)
└────┬────┘
     │ 31. Render complete
     ▼
┌─────────┐
│  Hub    │
│─────────│
│ Audit   │ 32. Log audit event
│ Usage   │ 33. Record usage metrics
└─────────┘
```

## Error Handling

### Retry Strategy

- **Transient Errors** (5xx, network): Exponential backoff (1s, 2s, 4s, 8s, 16s), max 5 attempts
- **Rate Limits** (429): Exponential backoff with rate limit headers, max 3 attempts
- **Permanent Errors** (4xx): No retry, log and send to DLQ

### Dead Letter Queue (DLQ)

- **DLQ Persistence**: 7 days (configurable)
- **DLQ Operations**: Reprocess, quarantine, purge
- **DLQ Monitoring**: Alerts on DLQ size, age, error types

## See Also

- [Spine Schemas](../spine/schemas.md) - Entity definitions
- [Webhooks Documentation](../webhooks/index.md) - Webhook security
- [API Reference](../api/index.md) - API contracts
- [Sequence Diagram](./how-it-works.puml) - PlantUML diagram
