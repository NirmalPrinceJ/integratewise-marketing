# Lenses

> Opinionated views over Spine data for specific use cases and personas.

## Overview

Lenses provide filtered, computed views of Spine entities tailored for different roles and workflows. Each lens defines what data to display, how to filter it, and what computed fields to derive.

## Available Lenses

| Lens | Purpose | Primary Users | Key Fields |
|------|---------|---------------|------------|
| [Personal](#personal-lens) | Individual productivity | All users | title, due_date, priority, context_link |
| [Work](#work-lens) | Team collaboration | Contributors, Operators | owner, sla_due, dependency_id |
| [Business Ops](#business-ops-lens) | Revenue operations | Operators, Admins | arr, churn_risk, cohort_id |
| [Customer Success](#customer-success-lens) | Health and intervention | CS team | health_score, risk_flag, playbook_id |

## Lens Architecture

```
Spine Entities → Filter → Compute → Present
     ↓              ↓         ↓         ↓
  Raw data      Scoping   Derived   View model
                          fields
```

## Personal Lens

Individual task and context management.

**Default Filters:**
- `assignee_id = current_user`
- `status NOT IN (done, cancelled)`

**Fields:**

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Task/item title |
| `due_date` | date | Due date |
| `priority` | enum | critical, high, medium, low, none |
| `context_link` | url | Link to source conversation/note |
| `status` | string | Current status |
| `time_remaining` | computed | Time until due |
| `related_count` | computed | Number of linked entities |

## Work Lens

Team collaboration and project tracking.

**Default Filters:**
- `workspace_id = current_workspace`
- `status IN (todo, in_progress, blocked, in_review)`

**Fields:**

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Task/item title |
| `owner` | object | Assignee with name, avatar |
| `sla_due` | datetime | SLA deadline |
| `sla_at_risk` | computed | Whether SLA is at risk |
| `dependency_ids` | array | Blocking dependencies |
| `project` | string | Project/epic |
| `progress` | number | Completion percentage |

## Business Ops Lens

Revenue metrics and operational health.

**Default Filters:**
- `arr > 0`
- `status = active`

**Fields:**

| Field | Type | Description |
|-------|------|-------------|
| `account_name` | string | Customer name |
| `arr` | number | Annual recurring revenue |
| `churn_risk` | number | Churn risk score (0-100) |
| `risk_level` | enum | low, medium, high, critical |
| `cohort_id` | string | Customer cohort |
| `days_to_renewal` | computed | Days until contract end |
| `nrr` | number | Net revenue retention |

## Customer Success Lens

Health scoring and playbook assignment.

See [CS Health Documentation](/docs/lenses/cs-health.md) for full specification including:
- Health score formula
- Component weights
- Threshold configuration
- Playbook mappings

**Key Fields:**

| Field | Type | Description |
|-------|------|-------------|
| `health_score` | number | Composite score (0-100) |
| `status` | enum | green, amber, red |
| `risk_flags` | array | Active risk indicators |
| `playbook_id` | string | Assigned intervention playbook |
| `last_touch` | date | Last customer interaction |
| `csm` | object | Assigned CSM |

## Configuring Lenses

Lenses are configured per workspace:

```typescript
interface LensConfig {
  lens_type: 'personal' | 'work' | 'business_ops' | 'customer_success';
  filters: FilterExpression[];
  visible_fields: string[];
  computed_fields: ComputedField[];
  sort: { field: string; order: 'asc' | 'desc' };
  refresh_interval_ms: number;
}
```

## Cross-References

- [CS Health Scoring](/docs/lenses/cs-health.md)
- [Spine Schemas](/docs/spine/schemas.md)
- [API Reference](/docs/api/index.md)
