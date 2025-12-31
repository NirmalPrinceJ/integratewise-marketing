/**
 * IntegrateWise Spine - Core Entity Types
 * 
 * @module @integratewise/types/spine/entities
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
  source: SourceTool;
  external_id: string;
  url?: string;
  synced_at: ISODateTime;
  sync_status: 'synced' | 'pending' | 'failed' | 'stale';
}

/** Base entity with common fields */
export interface BaseEntity {
  id: EntityId;
  created_at: ISODateTime;
  updated_at: ISODateTime;
  source_tool: SourceTool;
  external_ref: ExternalRef;
  workspace_id: string;
}

// =============================================================================
// TASK ENTITY
// =============================================================================

export type TaskPriority = 'critical' | 'high' | 'medium' | 'low' | 'none';

export type TaskStatus = 
  | 'backlog'
  | 'todo'
  | 'in_progress'
  | 'blocked'
  | 'in_review'
  | 'done'
  | 'cancelled';

export interface Task extends BaseEntity {
  _type: 'task';
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  due_date?: ISODate;
  due_datetime?: ISODateTime;
  assignee_id?: string;
  reporter_id?: string;
  parent_task_id?: EntityId;
  project_id?: string;
  tags?: string[];
  estimated_hours?: number;
  logged_hours?: number;
  completion_percent?: number;
  linked_entity_ids?: EntityId[];
  custom_fields?: Record<string, unknown>;
}

// =============================================================================
// NOTE ENTITY
// =============================================================================

export interface Note extends BaseEntity {
  _type: 'note';
  title: string;
  body_md: string;
  excerpt?: string;
  tags: string[];
  parent_note_id?: EntityId;
  linked_entity_ids: EntityId[];
  author_id?: string;
  last_editor_id?: string;
  word_count?: number;
  is_template?: boolean;
  visibility?: 'private' | 'workspace' | 'public';
  properties?: Record<string, unknown>;
}

// =============================================================================
// CONVERSATION ENTITY
// =============================================================================

export interface Participant {
  id: string;
  name?: string;
  email?: string;
  role?: 'sender' | 'recipient' | 'cc' | 'bcc' | 'participant' | 'ai_assistant';
}

export interface Conversation extends BaseEntity {
  _type: 'conversation';
  source: 'email' | 'slack' | 'teams' | 'chat' | 'ai_session' | 'support_ticket' | 'other';
  message_count: number;
  topic?: string;
  participants: Participant[];
  topic_labels?: string[];
  linkage_score?: number;
  started_at: ISODateTime;
  last_message_at: ISODateTime;
  is_closed?: boolean;
  sentiment_score?: number;
  linked_entity_ids?: EntityId[];
  thread_ref?: {
    channel_id?: string;
    thread_id?: string;
    channel_name?: string;
  };
  summary?: string;
}

// =============================================================================
// PLAN ENTITY
// =============================================================================

export interface Milestone {
  id: string;
  title: string;
  description?: string;
  target_date?: ISODate;
  status: 'pending' | 'in_progress' | 'completed' | 'missed';
  completed_at?: ISODateTime;
  task_ids?: EntityId[];
}

export type PlanStatus = 
  | 'draft'
  | 'active'
  | 'on_track'
  | 'at_risk'
  | 'delayed'
  | 'completed'
  | 'cancelled';

export interface Plan extends BaseEntity {
  _type: 'plan';
  objective: string;
  description?: string;
  milestones: Milestone[];
  owner_id: string;
  team_id?: string;
  start_date: ISODate;
  end_date: ISODate;
  status: PlanStatus;
  progress_percent?: number;
  key_results?: Array<{
    id: string;
    title: string;
    target_value: number;
    current_value: number;
    unit?: string;
  }>;
  parent_plan_id?: EntityId;
  task_ids?: EntityId[];
  note_ids?: EntityId[];
  review_cadence?: 'daily' | 'weekly' | 'biweekly' | 'monthly' | 'quarterly';
  next_review_date?: ISODate;
}

// =============================================================================
// UNION TYPE
// =============================================================================

export type SpineEntity = Task | Note | Conversation | Plan;

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
