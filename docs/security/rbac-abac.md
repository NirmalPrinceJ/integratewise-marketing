# RBAC/ABAC Reference

> Complete role and permission matrix for IntegrateWise OS.

## Roles

### Built-in Roles

| Role | Level | Description |
|------|-------|-------------|
| **Owner** | 100 | Workspace owner, billing control, cannot be removed |
| **Admin** | 90 | Full administrative access |
| **Operator** | 70 | Manage integrations, agents, templates |
| **Contributor** | 50 | Create content, execute workflows |
| **Viewer** | 20 | Read-only access |

### Custom Roles

Create custom roles with specific permission sets:

```yaml
custom_roles:
  - name: cs_manager
    display_name: "CS Manager"
    level: 60
    inherits_from: contributor
    additional_permissions:
      - health_metrics:read
      - health_metrics:write
      - playbooks:execute
    restrictions:
      - integrations:connect  # Cannot connect new integrations
```

---

## Permission Matrix

### Integrations

| Action | Owner | Admin | Operator | Contributor | Viewer |
|--------|-------|-------|----------|-------------|--------|
| List integrations | ✅ | ✅ | ✅ | ✅ | ✅ |
| View integration details | ✅ | ✅ | ✅ | ✅ | ✅ |
| Connect new integration | ✅ | ✅ | ✅ | ❌ | ❌ |
| Disconnect integration | ✅ | ✅ | ✅ | ❌ | ❌ |
| Configure sync settings | ✅ | ✅ | ✅ | ❌ | ❌ |
| View credentials | ✅ | ✅ | ❌ | ❌ | ❌ |
| Rotate credentials | ✅ | ✅ | ❌ | ❌ | ❌ |
| Set integration mode | ✅ | ✅ | ✅ | ❌ | ❌ |

### Agents

| Action | Owner | Admin | Operator | Contributor | Viewer |
|--------|-------|-------|----------|-------------|--------|
| List agents | ✅ | ✅ | ✅ | ✅ | ✅ |
| View agent config | ✅ | ✅ | ✅ | ✅ | ✅ |
| Create agent | ✅ | ✅ | ✅ | ❌ | ❌ |
| Edit agent | ✅ | ✅ | ✅ | ❌ | ❌ |
| Delete agent | ✅ | ✅ | ❌ | ❌ | ❌ |
| Execute agent | ✅ | ✅ | ✅ | ✅ | ❌ |
| View runs | ✅ | ✅ | ✅ | ✅ | ✅ |
| Cancel runs | ✅ | ✅ | ✅ | Own only | ❌ |
| Approve actions | ✅ | ✅ | ✅ | ❌ | ❌ |
| Manage DLQ | ✅ | ✅ | ✅ | ❌ | ❌ |

### Spine Entities

| Action | Owner | Admin | Operator | Contributor | Viewer |
|--------|-------|-------|----------|-------------|--------|
| List entities | ✅ | ✅ | ✅ | ✅ | ✅ |
| Read entity | ✅ | ✅ | ✅ | ✅ | ✅ |
| Create entity | ✅ | ✅ | ✅ | ✅ | ❌ |
| Update entity | ✅ | ✅ | ✅ | ✅ | ❌ |
| Delete entity | ✅ | ✅ | ✅ | Own only | ❌ |
| Bulk operations | ✅ | ✅ | ✅ | ❌ | ❌ |
| Export entities | ✅ | ✅ | ✅ | ✅ | ❌ |
| Manage relationships | ✅ | ✅ | ✅ | ✅ | ❌ |

### Render

| Action | Owner | Admin | Operator | Contributor | Viewer |
|--------|-------|-------|----------|-------------|--------|
| List outputs | ✅ | ✅ | ✅ | ✅ | ✅ |
| View output | ✅ | ✅ | ✅ | ✅ | ✅ |
| Create output | ✅ | ✅ | ✅ | ✅ | ❌ |
| Export output | ✅ | ✅ | ✅ | ✅ | ❌ |
| Delete output | ✅ | ✅ | ✅ | Own only | ❌ |
| Manage templates | ✅ | ✅ | ✅ | ❌ | ❌ |

### Templates

| Action | Owner | Admin | Operator | Contributor | Viewer |
|--------|-------|-------|----------|-------------|--------|
| Browse templates | ✅ | ✅ | ✅ | ✅ | ✅ |
| View template details | ✅ | ✅ | ✅ | ✅ | ✅ |
| Install template | ✅ | ✅ | ✅ | ❌ | ❌ |
| Configure template | ✅ | ✅ | ✅ | ❌ | ❌ |
| Uninstall template | ✅ | ✅ | ✅ | ❌ | ❌ |
| Create custom template | ✅ | ✅ | ✅ | ❌ | ❌ |
| Use installed template | ✅ | ✅ | ✅ | ✅ | ❌ |

### Workspace Settings

| Action | Owner | Admin | Operator | Contributor | Viewer |
|--------|-------|-------|----------|-------------|--------|
| View settings | ✅ | ✅ | Limited | ❌ | ❌ |
| Edit general settings | ✅ | ✅ | ❌ | ❌ | ❌ |
| Manage security settings | ✅ | ✅ | ❌ | ❌ | ❌ |
| Manage billing | ✅ | ❌ | ❌ | ❌ | ❌ |
| Invite users | ✅ | ✅ | ❌ | ❌ | ❌ |
| Remove users | ✅ | ✅ | ❌ | ❌ | ❌ |
| Assign roles | ✅ | ✅ | ❌ | ❌ | ❌ |
| View audit logs | ✅ | ✅ | ✅ | ❌ | ❌ |
| Export audit logs | ✅ | ✅ | ❌ | ❌ | ❌ |

### API Keys

| Action | Owner | Admin | Operator | Contributor | Viewer |
|--------|-------|-------|----------|-------------|--------|
| List all keys | ✅ | ✅ | ❌ | ❌ | ❌ |
| List own keys | ✅ | ✅ | ✅ | ✅ | ❌ |
| Create key | ✅ | ✅ | ✅ | ✅ | ❌ |
| Revoke any key | ✅ | ✅ | ❌ | ❌ | ❌ |
| Revoke own key | ✅ | ✅ | ✅ | ✅ | ❌ |
| View key scopes | ✅ | ✅ | Own only | Own only | ❌ |

---

## ABAC Policies

### Policy Structure

```typescript
interface ABACPolicy {
  id: string;
  name: string;
  description: string;
  effect: 'allow' | 'deny';
  priority: number;  // Lower = higher priority
  
  principals: {
    roles?: string[];
    users?: string[];
    departments?: string[];
    attributes?: Record<string, unknown>;
  };
  
  resources: {
    types?: string[];
    tags?: string[];
    attributes?: Record<string, unknown>;
  };
  
  actions: string[];
  
  conditions?: Condition[];
}

interface Condition {
  attribute: string;           // e.g., "resource.owner_id"
  operator: ConditionOperator;
  value: unknown;
}

type ConditionOperator = 
  | 'equals'
  | 'not_equals'
  | 'in'
  | 'not_in'
  | 'contains'
  | 'starts_with'
  | 'greater_than'
  | 'less_than';
```

### Example Policies

#### 1. CS Team Account Access

```yaml
- id: pol_cs_account_access
  name: "CS team restricted to assigned accounts"
  effect: allow
  priority: 10
  principals:
    departments: [customer_success]
  resources:
    types: [health_metric, conversation]
  actions: [read, write]
  conditions:
    - attribute: resource.account_owner_id
      operator: equals
      value: $principal.user_id
```

#### 2. PII Access Restriction

```yaml
- id: pol_pii_restriction
  name: "Restrict PII access to admins"
  effect: deny
  priority: 5
  principals:
    roles: [contributor, viewer, operator]
  resources:
    tags: [contains_pii, sensitive]
  actions: [read, export]
  conditions:
    - attribute: principal.has_pii_training
      operator: equals
      value: false
```

#### 3. Working Hours Only

```yaml
- id: pol_working_hours
  name: "Bulk operations during business hours only"
  effect: deny
  priority: 20
  principals:
    roles: [operator, contributor]
  resources:
    types: [task, note, health_metric]
  actions: [bulk_delete, bulk_update]
  conditions:
    - attribute: context.current_hour
      operator: not_in
      value: [9, 10, 11, 12, 13, 14, 15, 16, 17]
```

#### 4. High-Value Deal Approval

```yaml
- id: pol_high_value_deal
  name: "High-value deal changes require manager approval"
  effect: allow
  priority: 15
  principals:
    roles: [contributor]
  resources:
    types: [deal]
  actions: [update]
  conditions:
    - attribute: resource.amount
      operator: greater_than
      value: 100000
    - attribute: context.has_approval
      operator: equals
      value: true
```

---

## Scope Definitions

### Resource Scopes

```
{resource_type}:{action}
```

**Examples:**
- `spine:read` - Read any Spine entity
- `tasks:write` - Create/update tasks
- `agents:execute` - Run agents
- `integrations:connect` - Connect new integrations

### Hierarchical Scopes

```
{domain}:*         - All actions in domain
{domain}:{type}:*  - All actions on type
*:read             - Read across all domains
```

### Scope Inheritance

```
admin:* 
  └── inherits → operator:*
        └── inherits → contributor:*
              └── inherits → viewer:*
```

---

## API Usage

### Check Permission

```http
POST /v1/auth/check-permission
```

```json
{
  "principal": "user_abc123",
  "action": "agents:execute",
  "resource": {
    "type": "agent",
    "id": "agent_weekly_planning"
  },
  "context": {
    "ip_address": "192.168.1.1"
  }
}
```

**Response:**
```json
{
  "allowed": true,
  "policy_id": "pol_default_operator",
  "evaluated_at": "2025-01-15T10:30:00Z"
}
```

### List User Permissions

```http
GET /v1/users/{user_id}/permissions
```

### Assign Role

```http
POST /v1/users/{user_id}/roles
```

```json
{
  "role": "operator",
  "scope": "workspace",
  "expires_at": "2025-12-31T23:59:59Z"
}
```

---

## Best Practices

1. **Start restrictive** — Grant minimum permissions initially
2. **Use groups** — Assign permissions to roles, not individuals
3. **Audit regularly** — Review permission assignments quarterly
4. **Document exceptions** — Record why elevated access was granted
5. **Time-bound access** — Use expiring permissions for temporary needs
6. **Separate duties** — Require different roles for sensitive operations

---

## Cross-References

- [Security Overview](/docs/security/index.md)
- [Audit Logging](/docs/security/index.md#audit-logging)
- [API Authentication](/docs/api/index.md#authentication)
