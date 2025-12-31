# Templates Documentation

> Installation-ready templates with explicit variables, contracts, triggers, and verification steps.

## Overview

Templates are pre-configured workflows that activate instantly upon installation. Each template defines:

- **Variables**: Configurable parameters
- **Inputs**: Required tool connections and entities
- **Outputs**: What gets created (Notion pages, emails, dashboards)
- **Triggers**: When the template executes
- **Preconditions**: What must be true before execution
- **Postconditions**: What is guaranteed after execution
- **Error handling**: How failures are managed

---

## Template Categories

| Category | Description | Examples |
|----------|-------------|----------|
| **Personal Productivity** | Individual task and time management | Weekly Planning OS, Daily Standup |
| **Work & Team Execution** | Team collaboration and project tracking | Sprint Planning, Meeting Notes |
| **Business Ops** | Revenue and operations workflows | Pipeline Review, ARR Dashboard |
| **Customer Success** | Health scoring and intervention | CS Health Pulse, Renewal Prep |
| **Consulting Delivery** | Client engagement workflows | Discovery Report, Status Update |
| **Engineering Ops** | Development and deployment | Release Notes, Incident Review |

---

## Template Specification

### Schema

```typescript
interface TemplateSpec {
  /** Template identifier */
  id: string;
  
  /** Display name */
  name: string;
  
  /** Category */
  category: TemplateCategory;
  
  /** Version */
  version: string;
  
  /** Description */
  description: string;
  
  /** Variables */
  variables: VariableSpec[];
  
  /** Required inputs */
  inputs: InputSpec[];
  
  /** Generated outputs */
  outputs: OutputSpec[];
  
  /** Execution triggers */
  triggers: TriggerSpec[];
  
  /** Preconditions */
  preconditions: ConditionSpec[];
  
  /** Postconditions */
  postconditions: ConditionSpec[];
  
  /** Error handling */
  error_handling: ErrorHandlingSpec;
  
  /** Dependencies */
  dependencies: DependencySpec[];
  
  /** Installation steps */
  installation: InstallationStep[];
  
  /** Test checklist */
  test_checklist: TestCheckItem[];
}
```

---

## Featured Templates

### 1. Weekly Planning OS

**ID**: `tpl_weekly_planning_os`  
**Category**: Personal Productivity  
**Version**: 2.1.0

#### Description

Transforms scattered notes, calendar events, and incomplete tasks into a structured weekly plan with prioritized actions, time blocks, and follow-up reminders.

#### Variables

| Name | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `week_start_day` | enum | `monday` | Yes | First day of planning week |
| `planning_time` | time | `08:00` | Yes | When to generate plan |
| `timezone` | string | `America/New_York` | Yes | User timezone |
| `priority_scale` | enum | `p0_p3` | No | Priority naming (p0-p3 or critical-low) |
| `include_carryover` | boolean | `true` | No | Include incomplete tasks from last week |
| `calendar_lookahead_days` | integer | `7` | No | Days to scan for calendar events |
| `max_daily_tasks` | integer | `5` | No | Max tasks per day |
| `focus_areas` | string[] | `[]` | No | Tags to prioritize |

#### Inputs

| Tool | Entity Type | Access | Description |
|------|-------------|--------|-------------|
| Notion | Tasks database | Read | Source tasks |
| Notion | Notes database | Read | Weekly notes and goals |
| Google Calendar | Events | Read | Calendar commitments |
| Slack | Messages | Read (optional) | Action items from conversations |

#### Outputs

| Output | Destination | Fields |
|--------|-------------|--------|
| Weekly Plan Note | Notion | title, week_dates, goals[], daily_blocks[], carryover[] |
| Daily Task Lists | Notion | date, tasks[], time_blocks[], buffer_slots |
| Calendar Blocks | Google Calendar | summary, start, end, description |
| Reminder Notifications | Slack (optional) | message, scheduled_time |

##### Weekly Plan Note Schema

```typescript
interface WeeklyPlanNote {
  title: string;           // "Week of Jan 20, 2025"
  week_dates: {
    start: string;         // "2025-01-20"
    end: string;           // "2025-01-26"
  };
  goals: Array<{
    goal: string;
    priority: string;
    linked_tasks: string[];
  }>;
  daily_blocks: Array<{
    date: string;
    focus_theme: string;
    tasks: Array<{
      id: string;
      title: string;
      priority: string;
      estimated_hours: number;
      time_block?: { start: string; end: string };
    }>;
    meetings: Array<{
      title: string;
      time: string;
      duration_min: number;
    }>;
  }>;
  carryover: Array<{
    id: string;
    title: string;
    original_due: string;
    reason: string;
  }>;
  computed_fields: {
    total_tasks: number;
    total_hours: number;
    meeting_hours: number;
    focus_hours: number;
    next_action_date: string;
  };
}
```

#### Triggers

| Type | Configuration | Description |
|------|---------------|-------------|
| Schedule | `0 8 * * 1` (Mon 8am) | Automatic weekly generation |
| Manual | Allowed roles: all | On-demand generation |
| Event | `note.updated` with tag `weekly-goal` | Regenerate when goals change |

#### Preconditions

| Condition | Check | Error |
|-----------|-------|-------|
| Notion connected | `integrations.notion.status === 'connected'` | "Connect Notion to use this template" |
| Calendar connected | `integrations.google_calendar.status === 'connected'` | "Connect Google Calendar" |
| Tasks database exists | `notion.databases.find(name === 'Tasks')` | "Create a Tasks database in Notion" |

#### Postconditions

| Guarantee | Verification |
|-----------|--------------|
| Weekly plan note created | `output.weekly_plan.id !== null` |
| All days have task lists | `output.daily_blocks.length === 7` |
| Carryover tasks marked | `carryover.forEach(t => t.status === 'carryover')` |
| Calendar blocks created (if enabled) | `output.calendar_blocks.length > 0` |

#### Error Handling

| Error | Behavior | Rollback |
|-------|----------|----------|
| Notion API failure | Retry 3x, then notify user | None (read-only) |
| Calendar API failure | Continue without calendar data | None |
| No tasks found | Create empty plan with notice | None |
| Duplicate plan exists | Update existing plan | Preserve original |

#### Calendar Link Logic

```typescript
// Determine calendar event creation
function shouldCreateCalendarBlock(task: Task, day: DailyBlock): boolean {
  // Only create blocks for high-priority tasks with estimates
  if (task.priority !== 'high' && task.priority !== 'critical') return false;
  if (!task.estimated_hours || task.estimated_hours < 0.5) return false;
  
  // Check available time slots
  const availableSlots = day.time_blocks.filter(b => b.type === 'available');
  const requiredMinutes = task.estimated_hours * 60;
  
  return availableSlots.some(slot => slot.duration_min >= requiredMinutes);
}

// Computed field: next_action_date
function computeNextActionDate(plan: WeeklyPlan): string {
  const uncompletedTasks = plan.daily_blocks
    .flatMap(d => d.tasks.filter(t => t.status !== 'done'));
  
  if (uncompletedTasks.length === 0) return plan.week_dates.end;
  
  const highestPriority = uncompletedTasks
    .sort((a, b) => priorityRank(a.priority) - priorityRank(b.priority))[0];
  
  return highestPriority.time_block?.start.split('T')[0] ?? plan.week_dates.start;
}
```

#### Installation Steps

1. **Connect Integrations**
   - [ ] Notion workspace connected
   - [ ] Google Calendar connected
   - [ ] (Optional) Slack workspace connected

2. **Configure Databases**
   - [ ] Tasks database identified/created
   - [ ] Notes database identified/created
   - [ ] Required properties exist (Status, Priority, Due Date)

3. **Set Variables**
   - [ ] Week start day configured
   - [ ] Timezone set
   - [ ] Planning time configured

4. **Verify Permissions**
   - [ ] Notion: read/write access to databases
   - [ ] Calendar: read access to events

5. **Test Execution**
   - [ ] Run with `dry_run: true`
   - [ ] Review generated plan preview
   - [ ] Execute actual run
   - [ ] Verify outputs in destinations

#### Verification Checklist

- [ ] Weekly plan note created in Notion
- [ ] All 7 days have task allocations
- [ ] Calendar events created for blocked tasks
- [ ] Carryover tasks correctly identified
- [ ] Computed fields accurate (hours, counts)
- [ ] No duplicate plans created

---

### 2. AI Brainstream → Action

**ID**: `tpl_ai_brainstream_action`  
**Category**: Personal Productivity  
**Version**: 1.5.0

#### Description

Ingests AI chat conversations via webhook, extracts actionable items, and creates structured tasks and documentation in your tools.

#### Variables

| Name | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `webhook_secret` | string | — | Yes | HMAC secret for webhook signing |
| `dedup_window_hours` | integer | `24` | No | Hours to check for duplicates |
| `auto_create_tasks` | boolean | `true` | No | Auto-create tasks or require approval |
| `min_confidence` | number | `0.7` | No | Min confidence for task extraction |
| `task_destination` | enum | `notion` | Yes | Where to create tasks |
| `note_destination` | enum | `notion` | Yes | Where to create notes |
| `default_priority` | enum | `medium` | No | Default task priority |

#### Inputs

| Source | Entity Type | Access | Description |
|--------|-------------|--------|-------------|
| Webhook | AI Chat Session | Inbound | ChatGPT, Claude, Gemini conversations |

#### Outputs

| Output | Destination | Fields |
|--------|-------------|--------|
| Extracted Tasks | Notion/Asana | title, description, source_chat_id, confidence |
| Conversation Summary | Notion | title, summary_md, key_points[], action_items[] |
| Brain Memory | IntegrateWise Brain | session, embeddings, labels |

#### Webhook Endpoint

```
POST https://api.integratewise.com/webhooks/v1/{workspace_id}/brainstream
```

#### Payload Contract

```typescript
interface BrainstreamPayload {
  event_id: string;
  type: 'brain.ingest';
  workspace_id: string;
  timestamp: string;
  data: {
    session_id: string;
    source: 'chatgpt' | 'claude' | 'gemini' | 'grok' | 'perplexity';
    conversation_title?: string;
    messages: Array<{
      role: 'user' | 'assistant' | 'system';
      content: string;
      timestamp?: string;
    }>;
    labels?: string[];
    links?: string[];
    attachments?: Array<{
      type: string;
      url: string;
      name: string;
    }>;
    metadata?: {
      model?: string;
      temperature?: number;
      tokens_used?: number;
    };
  };
}
```

#### Deduplication Keys

```typescript
// Primary dedup key
const dedupKey = `brainstream_${data.session_id}_${data.messages.length}`;

// Alternative for streaming updates
const streamDedupKey = `brainstream_${data.session_id}_${hash(lastMessage.content)}`;
```

#### Generation Rules

```typescript
// Task extraction rules
const taskExtractionRules = {
  patterns: [
    /TODO:?\s*(.+)/gi,
    /action item:?\s*(.+)/gi,
    /need to:?\s*(.+)/gi,
    /should:?\s*(.+)/gi,
    /reminder:?\s*(.+)/gi,
  ],
  context_signals: [
    'deadline', 'by friday', 'next week', 'urgent',
    'priority', 'important', 'follow up', 'schedule',
  ],
  min_confidence: 0.7,
  max_tasks_per_session: 10,
};

// Note generation rules
const noteGenerationRules = {
  min_messages: 3,
  min_content_length: 500,
  include_summary: true,
  include_key_points: true,
  max_key_points: 7,
  include_action_items: true,
};
```

#### Safety Rails

| Rail | Description | Action |
|------|-------------|--------|
| PII Detection | Scan for emails, phones, SSNs | Redact before storage |
| Content Length | Max 100KB per session | Truncate with notice |
| Rate Limiting | Max 100 ingests/hour | Queue excess |
| Duplicate Prevention | Dedup by session + message hash | Skip duplicates |
| Approval Gate | High-impact tasks require approval | Route to approval |

#### Triggers

| Type | Configuration | Description |
|------|---------------|-------------|
| Webhook | `brainstream` endpoint | Inbound AI chat data |

#### Error Handling

| Error | Behavior | Rollback |
|-------|----------|----------|
| Invalid payload | Reject with 400 | None |
| Task creation fails | Retry 3x, add to DLQ | None |
| Note creation fails | Retry 3x, store raw data | None |
| Dedup collision | Return success (idempotent) | None |

#### Installation Steps

1. **Generate Webhook Secret**
   - [ ] Navigate to Settings → Webhooks → Brainstream
   - [ ] Generate new secret
   - [ ] Store secret securely (e.g., Bitwarden)

2. **Configure AI Tool Integration**
   - [ ] Set up webhook in ChatGPT/Claude/etc.
   - [ ] Configure payload format
   - [ ] Test with sample message

3. **Set Destinations**
   - [ ] Select task destination (Notion/Asana)
   - [ ] Select note destination
   - [ ] Verify database schemas

4. **Configure Safety Rails**
   - [ ] Set PII redaction level
   - [ ] Configure approval thresholds
   - [ ] Set rate limits

5. **Test End-to-End**
   - [ ] Send test payload via curl
   - [ ] Verify task created
   - [ ] Verify note created
   - [ ] Check Brain memory

#### Verification Checklist

- [ ] Webhook endpoint responding
- [ ] Signature verification working
- [ ] Tasks created with correct fields
- [ ] Notes created with summary
- [ ] Brain memory updated
- [ ] Deduplication working
- [ ] PII redaction applied

---

### 3. CS Health Pulse

**ID**: `tpl_cs_health_pulse`  
**Category**: Customer Success  
**Version**: 2.0.0  
**Requirement**: **CS Lens required**

#### Description

Generates health score summaries, identifies at-risk accounts, and triggers playbook recommendations based on multi-signal health scoring.

#### Variables

| Name | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `health_weights` | object | See below | No | Metric weights for scoring |
| `green_threshold` | number | `70` | No | Score >= this is green |
| `amber_threshold` | number | `40` | No | Score >= this is amber |
| `refresh_frequency` | enum | `daily` | Yes | How often to recalculate |
| `alert_channels` | string[] | `[]` | No | Slack channels for alerts |
| `dashboard_destination` | enum | `notion` | Yes | Where to publish dashboard |

**Default Health Weights:**
```json
{
  "usage": 0.25,
  "nps": 0.20,
  "ticket_severity": 0.15,
  "renewal_proximity": 0.20,
  "engagement": 0.20
}
```

#### Inputs

| Tool | Entity Type | Access | Description |
|------|-------------|--------|-------------|
| HubSpot | Accounts, Deals | Read | Customer data |
| Stripe | Subscriptions | Read | Revenue signals |
| Intercom/Zendesk | Tickets | Read | Support data |
| Product Analytics | Usage events | Read | Usage signals |
| NPS Tool | Survey responses | Read | NPS scores |

#### Data Sources Contract

```typescript
interface CSDataSources {
  accounts: {
    tool: 'hubspot' | 'salesforce';
    entities: ['company', 'deal'];
    fields: ['name', 'arr', 'contract_end', 'owner'];
  };
  
  revenue: {
    tool: 'stripe';
    entities: ['subscription', 'invoice'];
    fields: ['status', 'amount', 'period_end'];
  };
  
  support: {
    tool: 'intercom' | 'zendesk';
    entities: ['ticket', 'conversation'];
    fields: ['priority', 'status', 'created_at', 'resolved_at'];
  };
  
  usage: {
    tool: 'segment' | 'amplitude' | 'mixpanel';
    entities: ['event'];
    metrics: ['dau', 'mau', 'feature_adoption', 'session_duration'];
  };
  
  nps: {
    tool: 'delighted' | 'typeform' | 'hubspot';
    entities: ['response'];
    fields: ['score', 'comment', 'submitted_at'];
  };
}
```

#### Outputs

| Output | Destination | Description |
|--------|-------------|-------------|
| Health Dashboard | Notion | Account grid with scores |
| At-Risk Alerts | Slack | Immediate notifications |
| Playbook Assignments | IntegrateWise | Intervention recommendations |
| Trend Report | Email (weekly) | Score changes and insights |

#### Health Scoring Formula

```typescript
/**
 * CS Health Score Calculation
 * 
 * Formula:
 * health_score = weighted_sum(
 *   normalize(usage),
 *   normalize(nps),
 *   normalize(ticket_severity_inverse),
 *   normalize(renewal_proximity_inverse),
 *   normalize(engagement)
 * )
 * 
 * Thresholds:
 * - Green: >= 70
 * - Amber: 40-69
 * - Red: < 40
 */

function calculateHealthScore(account: Account, metrics: MetricSet): CompositeScore {
  const normalized = {
    usage: normalizeUsage(metrics.usage), // 0-100
    nps: normalizeNPS(metrics.nps),       // -100 to 100 → 0-100
    ticket_severity: invertAndNormalize(metrics.ticket_severity), // Lower is better
    renewal_proximity: invertAndNormalize(metrics.renewal_days),  // More days = safer
    engagement: normalizeEngagement(metrics.engagement), // 0-100
  };
  
  const weights = account.weights ?? DEFAULT_WEIGHTS;
  
  const score = 
    normalized.usage * weights.usage +
    normalized.nps * weights.nps +
    normalized.ticket_severity * weights.ticket_severity +
    normalized.renewal_proximity * weights.renewal_proximity +
    normalized.engagement * weights.engagement;
  
  return {
    score: Math.round(score),
    status: score >= 70 ? 'green' : score >= 40 ? 'amber' : 'red',
    components: normalized,
    weights,
    computed_at: new Date().toISOString(),
  };
}

function normalizeNPS(nps: number): number {
  // NPS ranges from -100 to 100, normalize to 0-100
  return (nps + 100) / 2;
}

function invertAndNormalize(value: number, max: number = 100): number {
  // Invert so lower input = higher score
  return Math.max(0, 100 - (value / max * 100));
}
```

#### Playbook Mapping

| Status | Score Range | Playbook | Actions |
|--------|-------------|----------|---------|
| Green | 70-100 | `expansion_opportunity` | Upsell outreach, case study request |
| Amber | 40-69 | `health_check` | CSM check-in, usage review |
| Red (renewal) | <40 + <90 days | `renewal_rescue` | Exec escalation, discount offer |
| Red (other) | <40 | `intervention` | Success plan, training offer |

#### Playbook Outputs

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
    owner: string;
    due_date: string;
    template?: string;
  }>;
  
  artifacts: {
    renewal_deck?: string;      // Link to generated deck
    exec_update?: string;       // Link to exec summary
    intervention_plan?: string; // Link to success plan
  };
}
```

#### Installation Steps

1. **Enable CS Lens**
   - [ ] Navigate to Settings → Lenses → Enable CS Lens
   - [ ] Configure account entity source

2. **Connect Data Sources**
   - [ ] HubSpot or Salesforce (accounts)
   - [ ] Stripe (revenue)
   - [ ] Support tool (tickets)
   - [ ] Analytics tool (usage)
   - [ ] NPS tool (surveys)

3. **Configure Weights**
   - [ ] Review default weights
   - [ ] Adjust based on business priorities
   - [ ] Set thresholds

4. **Set Alert Channels**
   - [ ] Configure Slack channels
   - [ ] Set email recipients
   - [ ] Configure escalation rules

5. **Verify Data Flow**
   - [ ] Run initial sync
   - [ ] Review sample scores
   - [ ] Validate calculations

#### Verification Checklist

- [ ] All data sources connected
- [ ] Health scores calculating
- [ ] Dashboard publishing
- [ ] Alerts triggering correctly
- [ ] Playbooks assigning
- [ ] Trend tracking working

---

## Installation API

### Install Template

```http
POST /v1/templates/{template_id}/install
```

**Body:**
```json
{
  "variables": {
    "week_start_day": "monday",
    "timezone": "America/New_York"
  },
  "connections": {
    "notion": "conn_abc123",
    "google_calendar": "conn_def456"
  },
  "options": {
    "enable_immediately": true,
    "run_initial_sync": false
  }
}
```

### Validate Installation

```http
POST /v1/templates/{template_id}/validate
```

### Uninstall Template

```http
DELETE /v1/templates/{template_id}/installation
```

---

## Cross-References

- [API Reference](/docs/api/index.md)
- [Agents Documentation](/docs/api/agents.md)
- [Spine Schemas](/docs/spine/schemas.md)
- [Lenses & CS Intelligence](/docs/lenses/cs-health.md)
