/**
 * IntegrateWise Spine - Canonical Entity Schemas
 * 
 * The Spine is the semantic backbone of IntegrateWise OS.
 * These schemas define the canonical entities that normalize data across all connected tools.
 * 
 * @version 1.0.0
 * @see https://docs.integratewise.co/spine/schemas
 */

// =============================================================================
// CORE TYPES
// =============================================================================

/** ISO 8601 date-time string */
export type ISODateTime = string;

/** ISO 8601 date string (YYYY-MM-DD) */
export type ISODate = string;

/** Unique identifier with optional prefix */
export type EntityId = string;

/** Source tool identifier */
export type SourceTool = 
  | 'notion'
  | 'slack'
  | 'gmail'
  | 'google_calendar'
  | 'hubspot'
  | 'stripe'
  | 'salesforce'
  | 'jira'
  | 'asana'
  | 'todoist'
  | 'coda'
  | 'confluence'
  | 'chatgpt'
  | 'claude'
  | 'gemini'
  | 'grok'
  | 'perplexity'
  | 'custom';

/** External reference to source system */
export interface ExternalRef {
  /** Source tool identifier */
  source: SourceTool;
  /** External ID in the source system */
  external_id: string;
  /** URL to the entity in the source system */
  url?: string;
  /** Last sync timestamp */
  synced_at: ISODateTime;
  /** Sync status */
  sync_status: 'synced' | 'pending' | 'failed' | 'stale';
}

/** Base entity with common fields */
export interface BaseEntity {
  /** Unique entity identifier (prefixed: task_, note_, conv_, plan_, hm_) */
  id: EntityId;
  /** Creation timestamp */
  created_at: ISODateTime;
  /** Last update timestamp */
  updated_at: ISODateTime;
  /** Source tool where entity originated */
  source_tool: SourceTool;
  /** External reference to source system */
  external_ref: ExternalRef;
  /** Workspace this entity belongs to */
  workspace_id: string;
}

// =============================================================================
// TASK ENTITY
// =============================================================================

/** Task priority levels */
export type TaskPriority = 'critical' | 'high' | 'medium' | 'low' | 'none';

/** Task status values */
export type TaskStatus = 
  | 'backlog'
  | 'todo'
  | 'in_progress'
  | 'blocked'
  | 'in_review'
  | 'done'
  | 'cancelled';

/**
 * Task Entity - Canonical representation of actionable work items
 * 
 * Maps from: Notion tasks, Asana tasks, Jira issues, Todoist items,
 * Gmail follow-ups, Slack reminders, Calendar action items
 */
export interface Task extends BaseEntity {
  /** Entity type discriminator */
  _type: 'task';
  
  /** Task title/summary */
  title: string;
  
  /** Detailed description (markdown supported) */
  description?: string;
  
  /** Current status */
  status: TaskStatus;
  
  /** Priority level */
  priority: TaskPriority;
  
  /** Due date (date only, no time) */
  due_date?: ISODate;
  
  /** Due datetime (with time) */
  due_datetime?: ISODateTime;
  
  /** Assigned user ID */
  assignee_id?: string;
  
  /** Reporter/creator user ID */
  reporter_id?: string;
  
  /** Parent task ID (for subtasks) */
  parent_task_id?: EntityId;
  
  /** Project or container ID */
  project_id?: string;
  
  /** Tags/labels */
  tags?: string[];
  
  /** Estimated effort (hours) */
  estimated_hours?: number;
  
  /** Actual effort logged (hours) */
  logged_hours?: number;
  
  /** Completion percentage (0-100) */
  completion_percent?: number;
  
  /** Linked entity IDs (notes, conversations, etc.) */
  linked_entity_ids?: EntityId[];
  
  /** Custom fields from source tool */
  custom_fields?: Record<string, unknown>;
}

// =============================================================================
// NOTE ENTITY
// =============================================================================

/**
 * Note Entity - Canonical representation of knowledge/documentation
 * 
 * Maps from: Notion pages, Coda docs, Confluence pages, 
 * Google Docs, email threads (summarized), AI conversation summaries
 */
export interface Note extends BaseEntity {
  /** Entity type discriminator */
  _type: 'note';
  
  /** Note title */
  title: string;
  
  /** Note body content (markdown) */
  body_md: string;
  
  /** Plain text excerpt for search */
  excerpt?: string;
  
  /** Tags/labels */
  tags: string[];
  
  /** Parent note ID (for nested docs) */
  parent_note_id?: EntityId;
  
  /** Linked entity IDs */
  linked_entity_ids: EntityId[];
  
  /** Author user ID */
  author_id?: string;
  
  /** Last editor user ID */
  last_editor_id?: string;
  
  /** Word count */
  word_count?: number;
  
  /** Is this a template? */
  is_template?: boolean;
  
  /** Visibility scope */
  visibility?: 'private' | 'workspace' | 'public';
  
  /** Custom properties from source */
  properties?: Record<string, unknown>;
}

// =============================================================================
// CONVERSATION ENTITY
// =============================================================================

/** Conversation participant */
export interface Participant {
  /** User/actor ID */
  id: string;
  /** Display name */
  name?: string;
  /** Email address */
  email?: string;
  /** Role in conversation */
  role?: 'sender' | 'recipient' | 'cc' | 'bcc' | 'participant' | 'ai_assistant';
}

/**
 * Conversation Entity - Canonical representation of threaded communications
 * 
 * Maps from: Slack threads, Gmail threads, HubSpot conversations,
 * AI chat sessions (ChatGPT, Claude, etc.), Teams chats
 */
export interface Conversation extends BaseEntity {
  /** Entity type discriminator */
  _type: 'conversation';
  
  /** Conversation source channel type */
  source: 'email' | 'slack' | 'teams' | 'chat' | 'ai_session' | 'support_ticket' | 'other';
  
  /** Total message count */
  message_count: number;
  
  /** Topic/subject */
  topic?: string;
  
  /** Participants in the conversation */
  participants: Participant[];
  
  /** AI-generated topic labels */
  topic_labels?: string[];
  
  /** Linkage score (0-1) - confidence of entity linking */
  linkage_score?: number;
  
  /** First message timestamp */
  started_at: ISODateTime;
  
  /** Last message timestamp */
  last_message_at: ISODateTime;
  
  /** Is conversation closed/resolved? */
  is_closed?: boolean;
  
  /** Sentiment score (-1 to 1) */
  sentiment_score?: number;
  
  /** Linked entity IDs (tasks created from this, notes, etc.) */
  linked_entity_ids?: EntityId[];
  
  /** Thread/channel reference */
  thread_ref?: {
    channel_id?: string;
    thread_id?: string;
    channel_name?: string;
  };
  
  /** Summary (AI-generated or manual) */
  summary?: string;
}

// =============================================================================
// PLAN ENTITY
// =============================================================================

/** Milestone within a plan */
export interface Milestone {
  /** Milestone ID */
  id: string;
  /** Milestone title */
  title: string;
  /** Description */
  description?: string;
  /** Target date */
  target_date?: ISODate;
  /** Completion status */
  status: 'pending' | 'in_progress' | 'completed' | 'missed';
  /** Completion date */
  completed_at?: ISODateTime;
  /** Linked task IDs */
  task_ids?: EntityId[];
}

/** Plan status */
export type PlanStatus = 
  | 'draft'
  | 'active'
  | 'on_track'
  | 'at_risk'
  | 'delayed'
  | 'completed'
  | 'cancelled';

/**
 * Plan Entity - Canonical representation of objectives and roadmaps
 * 
 * Maps from: OKRs, project plans, sprints, quarterly goals,
 * personal goals, team objectives
 */
export interface Plan extends BaseEntity {
  /** Entity type discriminator */
  _type: 'plan';
  
  /** Plan objective/title */
  objective: string;
  
  /** Detailed description */
  description?: string;
  
  /** Milestones */
  milestones: Milestone[];
  
  /** Plan owner user ID */
  owner_id: string;
  
  /** Team/department owning this plan */
  team_id?: string;
  
  /** Plan start date */
  start_date: ISODate;
  
  /** Plan end date */
  end_date: ISODate;
  
  /** Current status */
  status: PlanStatus;
  
  /** Progress percentage (0-100) */
  progress_percent?: number;
  
  /** Key results / success metrics */
  key_results?: Array<{
    id: string;
    title: string;
    target_value: number;
    current_value: number;
    unit?: string;
  }>;
  
  /** Parent plan ID (for nested plans) */
  parent_plan_id?: EntityId;
  
  /** Linked task IDs */
  task_ids?: EntityId[];
  
  /** Linked note IDs */
  note_ids?: EntityId[];
  
  /** Review cadence */
  review_cadence?: 'daily' | 'weekly' | 'biweekly' | 'monthly' | 'quarterly';
  
  /** Next review date */
  next_review_date?: ISODate;
}

// =============================================================================
// HEALTH METRIC ENTITY (Customer Success)
// =============================================================================

/** Metric types for health scoring */
export type HealthMetricType = 
  | 'usage_score'
  | 'nps_score'
  | 'ticket_severity'
  | 'renewal_proximity'
  | 'engagement_score'
  | 'adoption_rate'
  | 'feature_utilization'
  | 'support_sentiment'
  | 'contract_value'
  | 'expansion_potential'
  | 'churn_risk'
  | 'custom';

/** Time period for metric */
export type MetricPeriod = 
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'quarterly'
  | 'yearly'
  | 'trailing_30d'
  | 'trailing_90d';

/**
 * Health Metric Entity - Customer Success health indicators
 * 
 * Maps from: Product analytics, NPS surveys, support tickets,
 * billing/subscription data, engagement tracking
 */
export interface HealthMetric extends BaseEntity {
  /** Entity type discriminator */
  _type: 'health_metric';
  
  /** Account/customer ID this metric belongs to */
  account_id: string;
  
  /** Metric type */
  metric_type: HealthMetricType;
  
  /** Metric value (normalized 0-100 where applicable) */
  value: number;
  
  /** Raw value before normalization */
  raw_value?: number;
  
  /** Unit of measurement */
  unit?: string;
  
  /** Weight in composite score (0-1) */
  weight: number;
  
  /** Time period this metric covers */
  period: MetricPeriod;
  
  /** Period start date */
  period_start?: ISODate;
  
  /** Period end date */
  period_end?: ISODate;
  
  /** When this metric was computed */
  computed_at: ISODateTime;
  
  /** Data sources used for computation */
  data_sources?: string[];
  
  /** Trend direction */
  trend?: 'improving' | 'stable' | 'declining';
  
  /** Trend percentage change */
  trend_percent?: number;
  
  /** Threshold breaches */
  thresholds?: {
    warning?: number;
    critical?: number;
    current_state?: 'normal' | 'warning' | 'critical';
  };
  
  /** Computation notes/methodology */
  computation_notes?: string;
}

// =============================================================================
// COMPOSITE HEALTH SCORE
// =============================================================================

/** Health score thresholds */
export interface HealthThresholds {
  green_min: number;  // >= this is green (default: 70)
  amber_min: number;  // >= this is amber (default: 40)
  // < amber_min is red
}

/** Playbook assignment based on health */
export interface PlaybookAssignment {
  playbook_id: string;
  playbook_name: string;
  trigger_reason: string;
  assigned_at: ISODateTime;
  priority: 'low' | 'medium' | 'high' | 'critical';
}

/**
 * Composite Health Score - Aggregated customer health
 * 
 * Formula: health_score = weighted_sum(
 *   normalize(usage),
 *   normalize(nps),
 *   normalize(ticket_severity_inverse),
 *   normalize(renewal_proximity_inverse),
 *   normalize(engagement)
 * )
 */
export interface CompositeHealthScore {
  /** Account ID */
  account_id: string;
  
  /** Workspace ID */
  workspace_id: string;
  
  /** Overall health score (0-100) */
  health_score: number;
  
  /** Health status based on thresholds */
  status: 'green' | 'amber' | 'red';
  
  /** Risk flags */
  risk_flags: string[];
  
  /** Component scores */
  components: {
    usage: { value: number; weight: number; normalized: number };
    nps: { value: number; weight: number; normalized: number };
    ticket_severity: { value: number; weight: number; normalized: number };
    renewal_proximity: { value: number; weight: number; normalized: number };
    engagement: { value: number; weight: number; normalized: number };
  };
  
  /** Applied thresholds */
  thresholds: HealthThresholds;
  
  /** Assigned playbooks based on score */
  playbooks: PlaybookAssignment[];
  
  /** Last computation timestamp */
  computed_at: ISODateTime;
  
  /** Next scheduled computation */
  next_computation_at?: ISODateTime;
  
  /** Trend over last 30 days */
  trend_30d?: {
    direction: 'improving' | 'stable' | 'declining';
    change_points: number;
  };
}

// =============================================================================
// RELATIONSHIP TYPES
// =============================================================================

/** Relationship between entities */
export interface EntityRelationship {
  /** Relationship ID */
  id: string;
  
  /** Source entity ID */
  from_entity_id: EntityId;
  
  /** Source entity type */
  from_entity_type: 'task' | 'note' | 'conversation' | 'plan' | 'health_metric';
  
  /** Target entity ID */
  to_entity_id: EntityId;
  
  /** Target entity type */
  to_entity_type: 'task' | 'note' | 'conversation' | 'plan' | 'health_metric';
  
  /** Relationship type */
  relationship_type: 
    | 'parent_of'
    | 'child_of'
    | 'blocks'
    | 'blocked_by'
    | 'relates_to'
    | 'duplicates'
    | 'created_from'
    | 'references'
    | 'mentions'
    | 'derived_from';
  
  /** Confidence score (0-1) for AI-derived relationships */
  confidence?: number;
  
  /** Created timestamp */
  created_at: ISODateTime;
  
  /** Created by (user or 'system') */
  created_by: string;
}

// =============================================================================
// RESERVED FIELDS (for future use)
// =============================================================================

/**
 * Reserved field prefixes - do not use in custom_fields:
 * - _iw_* : IntegrateWise internal fields
 * - _sys_* : System metadata
 * - _ai_* : AI-generated fields
 * - _audit_* : Audit trail fields
 */
export const RESERVED_FIELD_PREFIXES = ['_iw_', '_sys_', '_ai_', '_audit_'] as const;

// =============================================================================
// NORMALIZATION RULES
// =============================================================================

/**
 * Normalization rules for consistent data across sources:
 * 
 * 1. IDs: Always prefixed with entity type (task_, note_, conv_, plan_, hm_)
 * 2. Timestamps: Always ISO 8601 in UTC
 * 3. Markdown: CommonMark spec for body_md fields
 * 4. Status values: Mapped to canonical values, source-specific stored in custom_fields
 * 5. Priority: Normalized to 5-level scale (critical, high, medium, low, none)
 * 6. Scores: Normalized to 0-100 scale unless otherwise specified
 * 7. User IDs: Prefixed with source (slack_U123, gmail_user@example.com)
 * 8. Tags: Lowercase, alphanumeric with underscores, max 50 chars
 */

// =============================================================================
// TYPE GUARDS
// =============================================================================

export function isTask(entity: BaseEntity): entity is Task {
  return (entity as Task)._type === 'task';
}

export function isNote(entity: BaseEntity): entity is Note {
  return (entity as Note)._type === 'note';
}

export function isConversation(entity: BaseEntity): entity is Conversation {
  return (entity as Conversation)._type === 'conversation';
}

export function isPlan(entity: BaseEntity): entity is Plan {
  return (entity as Plan)._type === 'plan';
}

export function isHealthMetric(entity: BaseEntity): entity is HealthMetric {
  return (entity as HealthMetric)._type === 'health_metric';
}

// =============================================================================
// ENTITY UNION TYPE
// =============================================================================

export type SpineEntity = Task | Note | Conversation | Plan | HealthMetric;
