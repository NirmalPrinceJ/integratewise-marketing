# Lenses & CS Intelligence

> Opinionated views over Spine data with the CS health scoring formula and playbook mappings.

## Lenses Overview

Lenses are pre-configured views that filter and present Spine data for specific use cases. Each lens defines:

- **Fields**: What data to display
- **Filters**: How to scope the data
- **Computed fields**: Derived metrics
- **Actions**: Available operations

## Available Lenses

| Lens | Purpose | Primary Users |
|------|---------|---------------|
| **Personal** | Individual productivity view | All users |
| **Work** | Team and project view | Contributors, Operators |
| **Business Ops** | Revenue and operations view | Operators, Admins |
| **Customer Success** | Health scoring and intervention | CS team |

---

## Lens Specifications

### Personal Lens

Individual task and context management.

```typescript
interface PersonalLensFields {
  /** Task title */
  title: string;
  
  /** Due date */
  due_date: string | null;
  
  /** Priority level */
  priority: 'critical' | 'high' | 'medium' | 'low' | 'none';
  
  /** Context link (to conversation, note, or source) */
  context_link: string | null;
  
  /** Status */
  status: string;
  
  /** Source tool icon */
  source_icon: string;
  
  /** Time until due (computed) */
  time_remaining: string | null;
  
  /** Related items count */
  related_count: number;
}
```

**Default Filters:**
- `assignee_id = current_user`
- `status != done`
- `status != cancelled`

**Sort:** `due_date ASC, priority DESC`

---

### Work Lens

Team collaboration and project tracking.

```typescript
interface WorkLensFields {
  /** Task/item title */
  title: string;
  
  /** Owner/assignee */
  owner: {
    id: string;
    name: string;
    avatar?: string;
  };
  
  /** SLA due date */
  sla_due: string | null;
  
  /** Is SLA at risk? (computed) */
  sla_at_risk: boolean;
  
  /** Dependency IDs */
  dependency_ids: string[];
  
  /** Blocking items count */
  blocked_by_count: number;
  
  /** Project/epic */
  project: string | null;
  
  /** Status */
  status: string;
  
  /** Progress percentage */
  progress: number;
}
```

**Default Filters:**
- `workspace_id = current_workspace`
- `status in [todo, in_progress, blocked, in_review]`

**Computed Fields:**
```typescript
sla_at_risk = sla_due != null && 
  (sla_due - now()) < (original_sla_duration * 0.2)
```

---

### Business Ops Lens

Revenue metrics and operational health.

```typescript
interface BusinessOpsLensFields {
  /** Account/customer name */
  account_name: string;
  
  /** Annual Recurring Revenue */
  arr: number;
  
  /** Currency */
  currency: string;
  
  /** Churn risk score (0-100) */
  churn_risk: number;
  
  /** Risk level */
  risk_level: 'low' | 'medium' | 'high' | 'critical';
  
  /** Cohort identifier */
  cohort_id: string;
  
  /** Contract end date */
  contract_end: string;
  
  /** Days until renewal */
  days_to_renewal: number;
  
  /** Net Revenue Retention */
  nrr: number;
  
  /** Expansion opportunity */
  expansion_potential: number;
}
```

**Default Filters:**
- `arr > 0`
- `status = active`

**Sort:** `arr DESC`

---

### Customer Success Lens

Health scoring, risk identification, and playbook assignment.

```typescript
interface CustomerSuccessLensFields {
  /** Account name */
  account_name: string;
  
  /** Health score (0-100) */
  health_score: number;
  
  /** Health status */
  status: 'green' | 'amber' | 'red';
  
  /** Risk flags */
  risk_flags: string[];
  
  /** Assigned playbook */
  playbook_id: string | null;
  
  /** Playbook name */
  playbook_name: string | null;
  
  /** Last touch date */
  last_touch: string;
  
  /** Days since last touch */
  days_since_touch: number;
  
  /** CSM owner */
  csm: {
    id: string;
    name: string;
  };
  
  /** Renewal date */
  renewal_date: string;
  
  /** ARR */
  arr: number;
  
  /** NPS score */
  nps: number | null;
  
  /** Usage trend */
  usage_trend: 'up' | 'stable' | 'down';
}
```

---

## CS Health Score Formula

### Calculation

```typescript
/**
 * Customer Success Health Score
 * 
 * Formula:
 * health_score = Σ(weight_i × normalize(metric_i))
 * 
 * Where metrics are:
 * - usage: Product usage intensity
 * - nps: Net Promoter Score
 * - ticket_severity: Support ticket severity (inverted)
 * - renewal_proximity: Days to renewal (inverted)
 * - engagement: Interaction frequency
 */

interface HealthScoreConfig {
  weights: {
    usage: number;           // Default: 0.25
    nps: number;             // Default: 0.20
    ticket_severity: number; // Default: 0.15
    renewal_proximity: number; // Default: 0.20
    engagement: number;      // Default: 0.20
  };
  thresholds: {
    green_min: number;       // Default: 70
    amber_min: number;       // Default: 40
  };
}

function calculateHealthScore(
  metrics: AccountMetrics,
  config: HealthScoreConfig
): CompositeHealthScore {
  
  // Normalize each metric to 0-100 scale
  const normalized = {
    usage: normalizeUsage(metrics.usage),
    nps: normalizeNPS(metrics.nps),
    ticket_severity: invertNormalize(metrics.avgTicketSeverity, 5),
    renewal_proximity: invertNormalize(metrics.daysToRenewal, 365),
    engagement: normalizeEngagement(metrics.engagement),
  };
  
  // Calculate weighted sum
  const score = 
    normalized.usage * config.weights.usage +
    normalized.nps * config.weights.nps +
    normalized.ticket_severity * config.weights.ticket_severity +
    normalized.renewal_proximity * config.weights.renewal_proximity +
    normalized.engagement * config.weights.engagement;
  
  // Determine status
  const status = 
    score >= config.thresholds.green_min ? 'green' :
    score >= config.thresholds.amber_min ? 'amber' : 'red';
  
  return {
    score: Math.round(score),
    status,
    components: normalized,
    weights: config.weights,
    computed_at: new Date().toISOString(),
  };
}
```

### Normalization Functions

```typescript
/**
 * Normalize usage score (0-100)
 * Based on DAU/MAU ratio and feature adoption
 */
function normalizeUsage(usage: UsageMetrics): number {
  const dauMauRatio = usage.dau / Math.max(usage.mau, 1);
  const adoptionScore = usage.featuresUsed / usage.totalFeatures * 100;
  
  return (dauMauRatio * 50) + (adoptionScore * 0.5);
}

/**
 * Normalize NPS (-100 to 100) → (0 to 100)
 */
function normalizeNPS(nps: number | null): number {
  if (nps === null) return 50; // Neutral if no data
  return (nps + 100) / 2;
}

/**
 * Invert and normalize (lower input = higher score)
 */
function invertNormalize(value: number, maxValue: number): number {
  const normalized = Math.min(value / maxValue, 1);
  return (1 - normalized) * 100;
}

/**
 * Normalize engagement based on interaction frequency
 */
function normalizeEngagement(engagement: EngagementMetrics): number {
  const recencyScore = Math.max(0, 100 - engagement.daysSinceLastLogin * 2);
  const frequencyScore = Math.min(engagement.loginsLast30d / 20 * 100, 100);
  const depthScore = engagement.avgSessionMinutes / 30 * 100;
  
  return (recencyScore * 0.4) + (frequencyScore * 0.3) + (depthScore * 0.3);
}
```

### Thresholds

| Score Range | Status | Interpretation |
|-------------|--------|----------------|
| 70-100 | 🟢 Green | Healthy, expansion candidate |
| 40-69 | 🟡 Amber | At risk, needs attention |
| 0-39 | 🔴 Red | Critical, intervention required |

---

## Playbook Mapping

### Playbook Assignment Rules

```typescript
interface PlaybookRule {
  id: string;
  name: string;
  conditions: PlaybookCondition[];
  priority: number;
  outputs: PlaybookOutput[];
}

const playbookRules: PlaybookRule[] = [
  {
    id: 'pb_renewal_rescue',
    name: 'Renewal Rescue',
    conditions: [
      { field: 'health_score', operator: 'lt', value: 40 },
      { field: 'days_to_renewal', operator: 'lt', value: 90 },
    ],
    priority: 1,
    outputs: ['exec_escalation', 'discount_offer', 'success_plan'],
  },
  {
    id: 'pb_intervention',
    name: 'Health Intervention',
    conditions: [
      { field: 'health_score', operator: 'lt', value: 40 },
      { field: 'days_to_renewal', operator: 'gte', value: 90 },
    ],
    priority: 2,
    outputs: ['csm_outreach', 'training_offer', 'success_plan'],
  },
  {
    id: 'pb_health_check',
    name: 'Proactive Health Check',
    conditions: [
      { field: 'health_score', operator: 'gte', value: 40 },
      { field: 'health_score', operator: 'lt', value: 70 },
    ],
    priority: 3,
    outputs: ['csm_checkin', 'usage_review'],
  },
  {
    id: 'pb_expansion',
    name: 'Expansion Opportunity',
    conditions: [
      { field: 'health_score', operator: 'gte', value: 70 },
      { field: 'usage_trend', operator: 'eq', value: 'up' },
    ],
    priority: 4,
    outputs: ['upsell_outreach', 'case_study_request'],
  },
];
```

### Playbook Outputs

| Output Type | Description | Auto-Generated Artifact |
|-------------|-------------|------------------------|
| `renewal_deck` | Executive renewal presentation | Slides with health data, value delivered |
| `exec_update` | Executive summary email | Email draft for exec sponsor |
| `intervention_plan` | 30-60-90 day success plan | Notion doc with milestones |
| `csm_outreach` | CSM check-in email | Personalized email draft |
| `training_offer` | Training session proposal | Calendar invite + agenda |
| `upsell_outreach` | Expansion discussion | Email + meeting request |
| `case_study_request` | Success story request | Email template |

### Playbook Output Schema

```typescript
interface PlaybookOutput {
  playbook_id: string;
  playbook_name: string;
  account_id: string;
  triggered_at: string;
  trigger_reason: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  
  recommended_actions: Array<{
    action: string;
    owner_role: string;
    due_date: string;
    template_id?: string;
    status: 'pending' | 'in_progress' | 'completed';
  }>;
  
  generated_artifacts: {
    renewal_deck?: {
      url: string;
      generated_at: string;
    };
    exec_update?: {
      draft_url: string;
      to: string[];
    };
    intervention_plan?: {
      url: string;
      milestones: Array<{
        title: string;
        target_date: string;
      }>;
    };
  };
  
  tracking: {
    opened_at?: string;
    actions_completed: number;
    actions_total: number;
    outcome?: 'renewed' | 'churned' | 'expanded' | 'pending';
  };
}
```

---

## CS Lens Inputs

Required data sources for CS Lens:

| Data Type | Source | Fields Used |
|-----------|--------|-------------|
| **Account data** | HubSpot/Salesforce | name, owner, arr, contract_dates |
| **Usage data** | Product analytics | dau, mau, features, sessions |
| **NPS data** | Survey tool | score, date, comments |
| **Support data** | Zendesk/Intercom | tickets, severity, resolution |
| **Engagement data** | Multiple | logins, meetings, emails |
| **Revenue data** | Stripe | mrr, invoices, payment status |

---

## CS Views

### Dashboard View

```typescript
interface CSDashboardView {
  summary: {
    total_accounts: number;
    green_count: number;
    amber_count: number;
    red_count: number;
    avg_health_score: number;
    at_risk_arr: number;
  };
  
  urgent_actions: Array<{
    account_name: string;
    action: string;
    due_date: string;
    priority: string;
  }>;
  
  renewals_next_90d: Array<{
    account_name: string;
    renewal_date: string;
    arr: number;
    health_score: number;
    status: string;
  }>;
  
  score_trends: Array<{
    date: string;
    avg_score: number;
    green_pct: number;
    amber_pct: number;
    red_pct: number;
  }>;
}
```

### Account Detail View

```typescript
interface CSAccountDetailView {
  account: {
    id: string;
    name: string;
    arr: number;
    contract_start: string;
    contract_end: string;
    csm: { id: string; name: string };
  };
  
  health: CompositeHealthScore;
  
  health_history: Array<{
    date: string;
    score: number;
    status: string;
  }>;
  
  component_details: {
    usage: UsageDetail;
    nps: NPSDetail;
    support: SupportDetail;
    engagement: EngagementDetail;
  };
  
  active_playbooks: PlaybookOutput[];
  
  recent_activity: Array<{
    date: string;
    type: string;
    description: string;
    actor: string;
  }>;
  
  contacts: Array<{
    name: string;
    role: string;
    email: string;
    last_contact: string;
  }>;
}
```

---

## Cross-References

- [Spine Schemas](/docs/spine/schemas.md)
- [Templates - CS Health Pulse](/docs/templates/index.md#3-cs-health-pulse)
- [API Reference](/docs/api/index.md)
