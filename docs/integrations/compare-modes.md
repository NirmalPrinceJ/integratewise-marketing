# Full Integration vs Render Only

Comparison of integration modes available in IntegrateWise OS, with enforcement points and guarantees.

## Overview

IntegrateWise OS supports two primary integration modes:

1. **Full Integration**: Two-way sync, write access, automation capabilities
2. **Render Only**: Read-only access, safe analytics, zero write risk

## Comparison Table

| Feature | Full Integration | Render Only |
|---------|------------------|-------------|
| **Write Access** | ✅ Create, update, delete operations enabled | ❌ Read-only, writes disabled |
| **Approvals** | ✅ Required for write operations (configurable) | N/A (no writes) |
| **RBAC Scope** | Full scope: Agents, Render, Integrations, Templates | Limited scope: Render, Templates (read-only) |
| **Audit Trails** | ✅ Full audit: reads, writes, approvals, policy checks | ✅ Read-only audit: queries, exports |
| **Failure Rollback** | ✅ Transaction rollback on write failures | N/A (no writes) |
| **Data Residency** | Configurable per workspace | Configurable per workspace |
| **Caching** | ✅ Write-through cache with invalidation | ✅ Read-only cache (TTL-based) |
| **SLA Coverage** | ✅ 99.9% uptime, write operation SLAs | ✅ 99.9% uptime, read operation SLAs |
| **Connector Capabilities** | All capabilities enabled | Read APIs only, write APIs disabled |

## Full Integration

### Capabilities

- **Two-way sync**: Changes in source tools sync to Spine, changes in Spine sync back
- **Automation**: Agents can create, update, and orchestrate work across tools
- **Write operations**: Create tasks, update notes, modify deals, send messages
- **Real-time updates**: Webhook-driven bidirectional synchronization

### Use Cases

- Teams requiring workflow automation
- Cross-tool task management
- Automated reporting and updates
- Agent-driven actions (e.g., create Notion page from Slack message)

### Requirements

- OAuth2 or API key authentication with write scopes
- Approval workflows recommended for sensitive operations
- RBAC configuration for write permissions
- Audit logging enabled

### Example Workflow

```
Slack message → Hub webhook → AI Loader → Spine write → 
Agent trigger → Approval → Notion page created → Audit log
```

## Render Only

### Capabilities

- **Read-only access**: Query and retrieve data from source tools
- **Analytics**: Safe dashboards and reporting without modification risk
- **Export**: Generate documents, emails, reports without writing back
- **Compliance**: Zero risk to source systems

### Use Cases

- Executive reporting dashboards
- Compliance-first organizations
- Analytics and insights without modification
- Safe exploration of data before enabling writes

### Enforcement Points

1. **Deny Lists**: Write API endpoints explicitly disabled
2. **Policy Checks**: Runtime validation prevents write operations
3. **Connector Write APIs Disabled**: Source tool write methods not invoked
4. **Audit Validation**: All operations logged and validated as read-only
5. **Periodic Compliance Export**: Automated reports verify read-only status

### Guarantees

- ✅ **Zero Write Risk**: No write operations possible, even if attempted
- ✅ **Read-Only Audit**: All operations logged with read-only flag
- ✅ **Policy Enforcement**: Runtime checks prevent write attempts
- ✅ **Compliance Ready**: Meets requirements for read-only data access

### Example Workflow

```
Source tool → Hub read-only adapter → Spine read → 
Render dashboard → Export PDF → Audit log (read-only)
```

## Mode Selection

### When to Use Full Integration

- You need bidirectional synchronization
- Agents should automate work across tools
- Team workflows require write access
- You have approval workflows in place
- Compliance allows write operations

### When to Use Render Only

- Compliance requires read-only access
- Executive reporting without modification risk
- Exploring data before enabling writes
- Sensitive systems that cannot be modified
- Audit requirements for read-only access

## Switching Modes

Modes can be configured per connector and per workspace:

1. **Per Connector**: Each integration can be set to Full or Render Only
2. **Per Workspace**: Workspace-level defaults with connector overrides
3. **Per User Role**: Role-based mode restrictions (e.g., Viewers → Render Only)

### Migration Path

**Render Only → Full Integration:**
1. Enable write scopes in OAuth2 configuration
2. Configure approval workflows
3. Enable write APIs in connector settings
4. Test with non-production data
5. Enable for production

**Full Integration → Render Only:**
1. Disable write APIs in connector settings
2. Verify no pending write operations
3. Update RBAC to remove write permissions
4. Enable read-only enforcement policies
5. Monitor audit logs for compliance

## Verification Checklist

### Render Only Verification

- [ ] Write API endpoints return 403 Forbidden
- [ ] Policy engine logs write attempts as denied
- [ ] Audit logs show read-only operations only
- [ ] Connector write methods not invoked
- [ ] Compliance export confirms read-only status
- [ ] No write operations in last 30 days (per audit log)

### Full Integration Verification

- [ ] Write scopes enabled in OAuth2 configuration
- [ ] Approval workflows configured (if required)
- [ ] RBAC write permissions assigned
- [ ] Write operations succeed in test environment
- [ ] Audit logs capture write operations
- [ ] Rollback tested on write failures

## Security Considerations

### Full Integration

- **Write Operations**: Require authentication, authorization, and audit
- **Approval Workflows**: Recommended for sensitive operations
- **Rate Limiting**: Enforced on write operations
- **Idempotency**: Required for all write operations
- **Rollback**: Automatic on write failures

### Render Only

- **Read Operations**: Require authentication and audit
- **Data Access**: Limited to read-only scopes
- **Export Controls**: Governed by RBAC and data residency
- **Cache Security**: Read-only cache with TTL and invalidation
- **Compliance**: Periodic verification of read-only status

## See Also

- [Integrations Matrix](./matrix.md) - Connector capabilities by mode
- [Security Documentation](../security/index.md) - Security controls and policies
- [RBAC & ABAC](../security/rbac-abac.md) - Role-based access control
- [Audit Logging](../security/index.md#audit-logging) - Audit trail details
