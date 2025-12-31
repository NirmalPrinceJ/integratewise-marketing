# Full Integration vs Render Only

> Choose the right integration mode for your security posture, compliance requirements, and workflow needs.

## Mode Comparison

| Capability | Full Integration | Render Only |
|------------|------------------|-------------|
| **Write Access** | ✅ Yes - create, update, delete | ❌ No - read only |
| **Approval Workflows** | ✅ Supported with guardrails | N/A |
| **RBAC Scope** | Admin, Operator, Contributor, Viewer | Viewer only |
| **Audit Trails** | Full CRUD logging | Read access only |
| **Failure Rollback** | ✅ Transaction support | N/A |
| **Data Residency** | Configurable per workspace | Cache-only, no persistence |
| **Caching** | Write-through cache | Read-through cache only |
| **SLA Coverage** | 99.9% uptime, <500ms p99 | 99.9% uptime, <200ms p99 |
| **Two-way Sync** | ✅ Bi-directional | ❌ One-way read |
| **Agent Automation** | ✅ Full capabilities | ❌ Read context only |
| **Webhook Write Events** | ✅ Sends outbound webhooks | ❌ Receives only |
| **Template Execution** | ✅ Full execution | ⚠️ Preview/draft only |
| **Compliance Mode** | Standard | Enhanced |

## When to Use Each Mode

### Full Integration

**Use when:**
- You need two-way sync between tools
- Agents should create/update records
- Templates must execute actions (send emails, create docs)
- Workflows require automated responses
- You have appropriate approval guardrails

**Example use cases:**
- Auto-create Notion tasks from Slack messages
- Sync HubSpot deals to Sheets dashboard
- Send Gmail follow-ups from agent recommendations
- Create calendar events from task due dates

### Render Only

**Use when:**
- Compliance requires read-only access
- You're in a regulated environment (SOC 2, HIPAA)
- You want analytics without modification risk
- Initial evaluation before enabling write access
- Data aggregation from multiple sources

**Example use cases:**
- CS health dashboards from HubSpot + Stripe
- Cross-tool search and reporting
- AI-powered insights without automation
- Audit and compliance reporting

---

## Render Only Enforcement

Render Only mode enforces strict read-only access through multiple layers:

### Enforcement Points

| Layer | Enforcement | Mechanism |
|-------|-------------|-----------|
| **API Gateway** | Deny write methods | Block POST/PUT/PATCH/DELETE to write endpoints |
| **Policy Engine** | Action deny list | `render_only_actions: deny` rule |
| **Connector SDK** | Write API disabled | Connector methods throw `ReadOnlyModeError` |
| **Audit Validation** | Anomaly detection | Alert on unexpected write attempts |
| **Compliance Export** | Periodic verification | Weekly compliance report |

### Deny List

The following actions are blocked in Render Only mode:

```yaml
render_only_deny_list:
  notion:
    - pages.create
    - pages.update
    - pages.delete
    - databases.create
    - databases.update
    - blocks.append
    - blocks.update
    - blocks.delete
  slack:
    - chat.postMessage
    - chat.update
    - chat.delete
    - reactions.add
    - reactions.remove
  gmail:
    - messages.send
    - drafts.create
    - drafts.send
    - labels.create
    - messages.trash
  hubspot:
    - contacts.create
    - contacts.update
    - deals.create
    - deals.update
    - tickets.create
  calendar:
    - events.create
    - events.update
    - events.delete
```

### Policy Configuration

```yaml
# Workspace policy configuration
policies:
  integration_mode: render_only
  
  enforcement:
    api_gateway: strict
    connector_sdk: disabled_writes
    audit_level: enhanced
    
  exceptions:
    - action: "spine.write"
      reason: "Internal Spine writes allowed for aggregation"
      requires_approval: false
    
  compliance:
    export_schedule: "0 0 * * 0"  # Weekly Sunday midnight
    retention_days: 90
    notify_on_violation: true
```

### Verification Checklist

Use this checklist to verify Render Only enforcement:

- [ ] **Gateway verification**: Confirm 405 response on write endpoints
- [ ] **Policy check**: Validate `integration_mode: render_only` in workspace settings
- [ ] **Connector test**: Attempt write operation, confirm `ReadOnlyModeError`
- [ ] **Audit log review**: Check for any write attempts in last 7 days
- [ ] **Compliance report**: Generate and review weekly compliance export
- [ ] **Permission audit**: Verify all users have Viewer role for integrations

### Audit Validation

Render Only mode includes enhanced audit logging:

```json
{
  "workspace_id": "ws_123",
  "actor_id": "user_456",
  "action_type": "integration.write_attempt",
  "resource_type": "notion.page",
  "resource_id": "page_789",
  "timestamp": "2025-01-15T10:30:00Z",
  "request_id": "req_abc123",
  "policy_id": "pol_render_only",
  "outcome": "denied",
  "reason": "Render Only mode active",
  "severity": "warning"
}
```

### Compliance Export

Weekly compliance exports include:

| Field | Description |
|-------|-------------|
| `workspace_id` | Workspace identifier |
| `period_start` | Export period start |
| `period_end` | Export period end |
| `integration_mode` | Current mode setting |
| `write_attempts` | Count of blocked write attempts |
| `read_operations` | Count of read operations |
| `violations` | List of policy violations |
| `users_accessed` | Users who accessed integrations |
| `data_accessed` | Summary of data categories accessed |

---

## Mode Transitions

### Upgrading from Render Only to Full

1. **Pre-requisites**:
   - Admin approval required
   - RBAC roles configured
   - Approval workflows defined
   - Audit sink configured

2. **Steps**:
   ```
   Settings → Integrations → [Connector] → Mode → Full Integration
   ```

3. **Verification**:
   - Test write operation with approval flow
   - Confirm audit log captures action
   - Validate rollback capability

### Downgrading from Full to Render Only

1. **Impact assessment**:
   - Active automations will be paused
   - Pending syncs will complete (read-only)
   - Scheduled writes will be cancelled

2. **Steps**:
   ```
   Settings → Integrations → [Connector] → Mode → Render Only
   ```

3. **Immediate effects**:
   - All write APIs return 403
   - Agent write actions queued to DLQ
   - Templates switch to preview mode

---

## SLA Differences

| Metric | Full Integration | Render Only |
|--------|------------------|-------------|
| Uptime | 99.9% | 99.9% |
| API Latency (p50) | <200ms | <100ms |
| API Latency (p99) | <500ms | <200ms |
| Sync Delay | <5 minutes | <2 minutes |
| Error Rate | <0.1% | <0.05% |

Render Only has lower latency due to:
- No write transaction overhead
- Aggressive read caching
- Simplified connection pooling

---

## Cross-References

- [Integration Matrix](/docs/integrations/matrix.md)
- [RBAC Configuration](/docs/security/rbac-abac.md)
- [Audit Logging](/docs/security/index.md#audit)
- [Agent Sandboxing](/docs/api/agents.md)
