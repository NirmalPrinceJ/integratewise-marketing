/**
 * IntegrateWise Spine - Connector Mapping Specifications
 * 
 * Defines how data from each source tool maps to Spine canonical entities.
 * These mappings are used by the AI Loader for normalization.
 * 
 * @version 1.0.0
 */

import type { Task, Note, Conversation, SourceTool } from './types';

// =============================================================================
// MAPPING INTERFACES
// =============================================================================

export interface FieldMapping {
  /** Source field path (dot notation) */
  source_field: string;
  /** Target Spine field */
  target_field: string;
  /** Transform function name */
  transform?: string;
  /** Default value if source is null/undefined */
  default_value?: unknown;
  /** Is this field required? */
  required?: boolean;
}

export interface ConnectorMapping {
  /** Source tool */
  source: SourceTool;
  /** Target entity type */
  target_entity: 'task' | 'note' | 'conversation' | 'plan' | 'health_metric';
  /** Source object type */
  source_object: string;
  /** Field mappings */
  fields: FieldMapping[];
  /** Status value mappings */
  status_map?: Record<string, string>;
  /** Priority value mappings */
  priority_map?: Record<string, string>;
}

// =============================================================================
// HUBSPOT MAPPINGS
// =============================================================================

/**
 * HubSpot Deal → Task
 * 
 * Maps CRM deals to actionable tasks for follow-up and pipeline management.
 */
export const hubspotDealToTask: ConnectorMapping = {
  source: 'hubspot',
  target_entity: 'task',
  source_object: 'deal',
  fields: [
    { source_field: 'id', target_field: 'external_ref.external_id', required: true },
    { source_field: 'properties.dealname', target_field: 'title', required: true },
    { source_field: 'properties.description', target_field: 'description' },
    { source_field: 'properties.dealstage', target_field: 'status', transform: 'mapDealStage' },
    { source_field: 'properties.hs_priority', target_field: 'priority', transform: 'mapPriority' },
    { source_field: 'properties.closedate', target_field: 'due_date', transform: 'toISODate' },
    { source_field: 'properties.hubspot_owner_id', target_field: 'assignee_id', transform: 'prefixHubspot' },
    { source_field: 'properties.amount', target_field: 'custom_fields.deal_amount' },
    { source_field: 'properties.pipeline', target_field: 'custom_fields.pipeline' },
    { source_field: 'createdAt', target_field: 'created_at', transform: 'toISODateTime' },
    { source_field: 'updatedAt', target_field: 'updated_at', transform: 'toISODateTime' },
  ],
  status_map: {
    'appointmentscheduled': 'todo',
    'qualifiedtobuy': 'in_progress',
    'presentationscheduled': 'in_progress',
    'decisionmakerboughtin': 'in_review',
    'contractsent': 'in_review',
    'closedwon': 'done',
    'closedlost': 'cancelled',
  },
  priority_map: {
    'high': 'high',
    'medium': 'medium',
    'low': 'low',
  },
};

/**
 * HubSpot Deal Spine Output Example:
 * {
 *   deal_id: "12345678",
 *   stage: "in_progress",
 *   amount: 50000,
 *   close_date: "2025-03-15",
 *   owner_id: "hubspot_987654"
 * }
 */

// =============================================================================
// GMAIL MAPPINGS
// =============================================================================

/**
 * Gmail Message → Conversation
 * 
 * Maps email threads to conversations for unified communication view.
 */
export const gmailMessageToConversation: ConnectorMapping = {
  source: 'gmail',
  target_entity: 'conversation',
  source_object: 'message',
  fields: [
    { source_field: 'id', target_field: 'external_ref.external_id', required: true },
    { source_field: 'threadId', target_field: 'thread_ref.thread_id', required: true },
    { source_field: 'payload.headers[subject]', target_field: 'topic', transform: 'extractHeader' },
    { source_field: 'payload.headers[from]', target_field: 'participants[0]', transform: 'parseEmailParticipant' },
    { source_field: 'payload.headers[to]', target_field: 'participants[1:]', transform: 'parseEmailRecipients' },
    { source_field: 'internalDate', target_field: 'started_at', transform: 'epochMsToISO' },
    { source_field: 'internalDate', target_field: 'last_message_at', transform: 'epochMsToISO' },
  ],
};

/**
 * Gmail Message Spine Output Example:
 * {
 *   message_id: "msg_18abc123def",
 *   thread_id: "thread_18abc123",
 *   from: "sender@example.com",
 *   to: ["recipient1@example.com", "recipient2@example.com"],
 *   subject: "Q1 Planning Discussion",
 *   received_at: "2025-01-15T10:30:00Z"
 * }
 */

// =============================================================================
// SLACK MAPPINGS
// =============================================================================

/**
 * Slack Message → Conversation
 * 
 * Maps Slack threads to conversations.
 */
export const slackMessageToConversation: ConnectorMapping = {
  source: 'slack',
  target_entity: 'conversation',
  source_object: 'message',
  fields: [
    { source_field: 'ts', target_field: 'external_ref.external_id', required: true },
    { source_field: 'thread_ts', target_field: 'thread_ref.thread_id' },
    { source_field: 'channel', target_field: 'thread_ref.channel_id', required: true },
    { source_field: 'user', target_field: 'participants[0].id', transform: 'prefixSlack' },
    { source_field: 'text', target_field: 'topic', transform: 'extractFirstLine' },
    { source_field: 'ts', target_field: 'started_at', transform: 'slackTsToISO' },
    { source_field: 'latest_reply', target_field: 'last_message_at', transform: 'slackTsToISO' },
    { source_field: 'reply_count', target_field: 'message_count', default_value: 1 },
  ],
};

/**
 * Slack Message Spine Output Example:
 * {
 *   message_id: "1234567890.123456",
 *   channel_id: "C01ABC123",
 *   thread_ts: "1234567890.123456",
 *   author_id: "slack_U01XYZ789",
 *   text_preview: "Let's discuss the roadmap...",
 *   reply_count: 5,
 *   timestamp: "2025-01-15T14:22:00Z"
 * }
 */

// =============================================================================
// NOTION MAPPINGS
// =============================================================================

/**
 * Notion Page → Note
 * 
 * Maps Notion pages/databases to notes.
 */
export const notionPageToNote: ConnectorMapping = {
  source: 'notion',
  target_entity: 'note',
  source_object: 'page',
  fields: [
    { source_field: 'id', target_field: 'external_ref.external_id', required: true },
    { source_field: 'properties.title[0].plain_text', target_field: 'title', required: true },
    { source_field: 'properties.Tags.multi_select', target_field: 'tags', transform: 'extractMultiSelectValues' },
    { source_field: 'created_by.id', target_field: 'author_id', transform: 'prefixNotion' },
    { source_field: 'last_edited_by.id', target_field: 'last_editor_id', transform: 'prefixNotion' },
    { source_field: 'created_time', target_field: 'created_at' },
    { source_field: 'last_edited_time', target_field: 'updated_at' },
    { source_field: 'url', target_field: 'external_ref.url' },
  ],
};

/**
 * Notion Database Item → Task
 * 
 * Maps Notion database items (tasks/projects) to tasks.
 */
export const notionDatabaseItemToTask: ConnectorMapping = {
  source: 'notion',
  target_entity: 'task',
  source_object: 'database_item',
  fields: [
    { source_field: 'id', target_field: 'external_ref.external_id', required: true },
    { source_field: 'properties.Name.title[0].plain_text', target_field: 'title', required: true },
    { source_field: 'properties.Status.select.name', target_field: 'status', transform: 'mapNotionStatus' },
    { source_field: 'properties.Priority.select.name', target_field: 'priority', transform: 'mapNotionPriority' },
    { source_field: 'properties.Due.date.start', target_field: 'due_date' },
    { source_field: 'properties.Assignee.people[0].id', target_field: 'assignee_id', transform: 'prefixNotion' },
    { source_field: 'properties.Tags.multi_select', target_field: 'tags', transform: 'extractMultiSelectValues' },
    { source_field: 'created_time', target_field: 'created_at' },
    { source_field: 'last_edited_time', target_field: 'updated_at' },
  ],
  status_map: {
    'Not Started': 'todo',
    'In Progress': 'in_progress',
    'Blocked': 'blocked',
    'In Review': 'in_review',
    'Done': 'done',
    'Archived': 'cancelled',
  },
  priority_map: {
    'P0': 'critical',
    'P1': 'high',
    'P2': 'medium',
    'P3': 'low',
    'None': 'none',
  },
};

// =============================================================================
// STRIPE MAPPINGS
// =============================================================================

/**
 * Stripe Subscription → HealthMetric
 * 
 * Maps subscription data to health metrics for CS.
 */
export const stripeSubscriptionToHealthMetric: ConnectorMapping = {
  source: 'stripe',
  target_entity: 'health_metric',
  source_object: 'subscription',
  fields: [
    { source_field: 'id', target_field: 'external_ref.external_id', required: true },
    { source_field: 'customer', target_field: 'account_id', required: true },
    { source_field: 'current_period_end', target_field: 'custom_fields.renewal_date', transform: 'epochToISODate' },
    { source_field: 'plan.amount', target_field: 'raw_value' },
    { source_field: 'status', target_field: 'custom_fields.subscription_status' },
    { source_field: 'created', target_field: 'created_at', transform: 'epochToISODateTime' },
  ],
};

/**
 * Stripe Invoice Spine Output Example:
 * {
 *   invoice_id: "in_1ABC123",
 *   customer_id: "cus_XYZ789",
 *   amount_due: 9900,
 *   currency: "usd",
 *   status: "paid",
 *   due_date: "2025-02-01"
 * }
 */

// =============================================================================
// GOOGLE CALENDAR MAPPINGS
// =============================================================================

/**
 * Google Calendar Event → Task (for action items)
 */
export const calendarEventToTask: ConnectorMapping = {
  source: 'google_calendar',
  target_entity: 'task',
  source_object: 'event',
  fields: [
    { source_field: 'id', target_field: 'external_ref.external_id', required: true },
    { source_field: 'summary', target_field: 'title', required: true },
    { source_field: 'description', target_field: 'description' },
    { source_field: 'start.dateTime', target_field: 'due_datetime', transform: 'toISODateTime' },
    { source_field: 'start.date', target_field: 'due_date' },
    { source_field: 'organizer.email', target_field: 'assignee_id', transform: 'prefixGoogle' },
    { source_field: 'created', target_field: 'created_at' },
    { source_field: 'updated', target_field: 'updated_at' },
    { source_field: 'htmlLink', target_field: 'external_ref.url' },
  ],
};

// =============================================================================
// JIRA MAPPINGS
// =============================================================================

/**
 * Jira Issue → Task
 */
export const jiraIssueToTask: ConnectorMapping = {
  source: 'jira',
  target_entity: 'task',
  source_object: 'issue',
  fields: [
    { source_field: 'id', target_field: 'external_ref.external_id', required: true },
    { source_field: 'key', target_field: 'custom_fields.jira_key' },
    { source_field: 'fields.summary', target_field: 'title', required: true },
    { source_field: 'fields.description', target_field: 'description' },
    { source_field: 'fields.status.name', target_field: 'status', transform: 'mapJiraStatus' },
    { source_field: 'fields.priority.name', target_field: 'priority', transform: 'mapJiraPriority' },
    { source_field: 'fields.duedate', target_field: 'due_date' },
    { source_field: 'fields.assignee.accountId', target_field: 'assignee_id', transform: 'prefixJira' },
    { source_field: 'fields.reporter.accountId', target_field: 'reporter_id', transform: 'prefixJira' },
    { source_field: 'fields.parent.id', target_field: 'parent_task_id', transform: 'prefixTaskId' },
    { source_field: 'fields.project.id', target_field: 'project_id' },
    { source_field: 'fields.labels', target_field: 'tags', transform: 'lowercaseArray' },
    { source_field: 'fields.timeoriginalestimate', target_field: 'estimated_hours', transform: 'secondsToHours' },
    { source_field: 'fields.timespent', target_field: 'logged_hours', transform: 'secondsToHours' },
    { source_field: 'fields.created', target_field: 'created_at' },
    { source_field: 'fields.updated', target_field: 'updated_at' },
  ],
  status_map: {
    'Backlog': 'backlog',
    'To Do': 'todo',
    'In Progress': 'in_progress',
    'Blocked': 'blocked',
    'In Review': 'in_review',
    'Done': 'done',
    'Closed': 'done',
    'Cancelled': 'cancelled',
  },
  priority_map: {
    'Highest': 'critical',
    'High': 'high',
    'Medium': 'medium',
    'Low': 'low',
    'Lowest': 'none',
  },
};

// =============================================================================
// AI CHAT MAPPINGS (ChatGPT, Claude, etc.)
// =============================================================================

/**
 * AI Chat Session → Conversation
 */
export const aiChatToConversation: ConnectorMapping = {
  source: 'chatgpt', // Also applies to claude, gemini, grok, perplexity
  target_entity: 'conversation',
  source_object: 'chat_session',
  fields: [
    { source_field: 'session_id', target_field: 'external_ref.external_id', required: true },
    { source_field: 'title', target_field: 'topic' },
    { source_field: 'messages', target_field: 'message_count', transform: 'arrayLength' },
    { source_field: 'created_at', target_field: 'started_at' },
    { source_field: 'updated_at', target_field: 'last_message_at' },
    { source_field: 'labels', target_field: 'topic_labels' },
    { source_field: 'model', target_field: 'custom_fields.ai_model' },
  ],
};

// =============================================================================
// TRANSFORM FUNCTIONS
// =============================================================================

export const transforms = {
  toISODate: (value: string | number): string => {
    const date = new Date(value);
    return date.toISOString().split('T')[0];
  },
  
  toISODateTime: (value: string | number): string => {
    return new Date(value).toISOString();
  },
  
  epochToISODate: (epoch: number): string => {
    return new Date(epoch * 1000).toISOString().split('T')[0];
  },
  
  epochToISODateTime: (epoch: number): string => {
    return new Date(epoch * 1000).toISOString();
  },
  
  epochMsToISO: (epochMs: string): string => {
    return new Date(parseInt(epochMs)).toISOString();
  },
  
  slackTsToISO: (ts: string): string => {
    const [seconds] = ts.split('.');
    return new Date(parseInt(seconds) * 1000).toISOString();
  },
  
  prefixHubspot: (id: string): string => `hubspot_${id}`,
  prefixSlack: (id: string): string => `slack_${id}`,
  prefixNotion: (id: string): string => `notion_${id}`,
  prefixGoogle: (email: string): string => `google_${email}`,
  prefixJira: (id: string): string => `jira_${id}`,
  prefixTaskId: (id: string): string => `task_${id}`,
  
  extractFirstLine: (text: string): string => {
    return text.split('\n')[0].substring(0, 200);
  },
  
  extractMultiSelectValues: (items: Array<{ name: string }>): string[] => {
    return items.map(item => item.name.toLowerCase().replace(/\s+/g, '_'));
  },
  
  arrayLength: (arr: unknown[]): number => arr?.length ?? 0,
  
  secondsToHours: (seconds: number): number => {
    return Math.round((seconds / 3600) * 100) / 100;
  },
  
  lowercaseArray: (arr: string[]): string[] => {
    return arr.map(s => s.toLowerCase().replace(/\s+/g, '_'));
  },
};

// =============================================================================
// MAPPING REGISTRY
// =============================================================================

export const mappingRegistry: ConnectorMapping[] = [
  hubspotDealToTask,
  gmailMessageToConversation,
  slackMessageToConversation,
  notionPageToNote,
  notionDatabaseItemToTask,
  stripeSubscriptionToHealthMetric,
  calendarEventToTask,
  jiraIssueToTask,
  aiChatToConversation,
];

/**
 * Get mapping for a source tool and object type
 */
export function getMapping(source: SourceTool, sourceObject: string): ConnectorMapping | undefined {
  return mappingRegistry.find(m => m.source === source && m.source_object === sourceObject);
}
