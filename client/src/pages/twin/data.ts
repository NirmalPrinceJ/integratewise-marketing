// ─── Twin mock data & types ───────────────────────────────────────────────────
// All data is static/mock; real bindings point to the Spine (§8 of spec).

export type TrustLevel = "governed" | "pending" | "local-only";
export type ConfidenceLevel = "low" | "medium" | "high";
export type EventType = "new" | "changed" | "conflict";
export type ContinuityBand = "low" | "medium" | "high" | "critical";
export type ApprovalStatus = "pending" | "approved" | "rejected" | "consultation";
export type ProviderHealth = "healthy" | "stale" | "error";

// ─── Entity ──────────────────────────────────────────────────────────────────
export interface Entity {
  id: string;
  name: string;
  type: "Account" | "Contact" | "Opportunity" | "Issue" | "Sprint";
  trust: TrustLevel;
  owner: string;
  attributes: Attribute[];
  relationships: Relationship[];
}

export interface Attribute {
  key: string;
  value: string;
  trust: TrustLevel;
  confidence: number; // 0–100
  source: string;
  lastChanged: string;
  eventId: string;
}

export interface Relationship {
  label: string;
  targetName: string;
  targetType: string;
  targetId: string;
}

// ─── Memory Timeline ─────────────────────────────────────────────────────────
export interface MemoryEvent {
  id: string;
  type: EventType;
  entity: string;
  entityId: string;
  summary: string;
  source: string;
  correlationId: string;
  actor: string;
  timestamp: string;
  oldValue?: string;
  newValue?: string;
  rationale?: string;
}

// ─── Approvals ───────────────────────────────────────────────────────────────
export interface ApprovalCard {
  id: string;
  proposedChange: string;
  entity: string;
  diff: { old: string; new: string };
  source: string;
  requester: string;
  context: string;
  status: ApprovalStatus;
  timestamp: string;
  correlationId: string;
}

// ─── Connections ─────────────────────────────────────────────────────────────
export interface Connector {
  id: string;
  name: string;
  type: string;
  health: ProviderHealth;
  lastSync: string;
  scope: string[];
}

export interface Agent {
  agentId: string;
  capabilities: string[];
  endpoint: string;
  status: "active" | "inactive";
}

export interface CommLog {
  id: string;
  sender: string;
  receiver: string;
  message: string;
  correlationId: string;
  timestamp: string;
}

// ─── Conversation ─────────────────────────────────────────────────────────────
export interface Message {
  id: string;
  role: "user" | "twin";
  text: string;
  citations?: Citation[];
  confidence?: number;
  sources?: string[];
  timestamp: string;
}

export interface Citation {
  id: string;
  label: string;
  type: "entity" | "event" | "provider";
  targetId: string;
}

// ═══════════════════════════════════════════════════════════════════════════════
// MOCK DATA
// ═══════════════════════════════════════════════════════════════════════════════

export const MOCK_TWIN = {
  id: "twin-acme-corp",
  name: "Acme Corp",
  type: "Account" as const,
  continuityBand: "high" as ContinuityBand,
  continuityScore: 82,
  lastSynced: "2 min ago",
  memoryCoverage: 94,
  openConsultations: 3,
  pendingApprovals: 5,
};

export const MOCK_ENTITIES: Entity[] = [
  {
    id: "ent-001",
    name: "Acme Corp",
    type: "Account",
    trust: "governed",
    owner: "Priya Sharma",
    attributes: [
      { key: "ARR", value: "₹48,00,000", trust: "governed", confidence: 97, source: "HubSpot CRM", lastChanged: "3 days ago", eventId: "evt-011" },
      { key: "Renewal Date", value: "15 Sep 2026", trust: "governed", confidence: 99, source: "Billing System", lastChanged: "1 week ago", eventId: "evt-008" },
      { key: "Health Score", value: "72 / 100", trust: "pending", confidence: 68, source: "Mixpanel Analytics", lastChanged: "1 hour ago", eventId: "evt-021" },
      { key: "Primary Contact", value: "Rohan Mehta", trust: "governed", confidence: 100, source: "HubSpot CRM", lastChanged: "2 weeks ago", eventId: "evt-004" },
      { key: "Open Issues", value: "4 critical", trust: "local-only", confidence: 45, source: "Jira", lastChanged: "35 min ago", eventId: "evt-027" },
      { key: "Last Call", value: "Jun 14, 2026 — Renewal discussion", trust: "governed", confidence: 88, source: "Gong", lastChanged: "5 days ago", eventId: "evt-015" },
    ],
    relationships: [
      { label: "Primary Contact", targetName: "Rohan Mehta", targetType: "Contact", targetId: "ent-002" },
      { label: "Open Opportunity", targetName: "Enterprise Expansion Q3", targetType: "Opportunity", targetId: "ent-003" },
      { label: "Critical Issue", targetName: "API Latency Spike", targetType: "Issue", targetId: "ent-004" },
    ],
  },
  {
    id: "ent-002",
    name: "Rohan Mehta",
    type: "Contact",
    trust: "governed",
    owner: "Priya Sharma",
    attributes: [
      { key: "Title", value: "VP of Engineering", trust: "governed", confidence: 98, source: "HubSpot CRM", lastChanged: "3 weeks ago", eventId: "evt-003" },
      { key: "Email", value: "rohan@acmecorp.in", trust: "governed", confidence: 100, source: "HubSpot CRM", lastChanged: "3 weeks ago", eventId: "evt-003" },
      { key: "Sentiment", value: "Cautiously positive", trust: "pending", confidence: 61, source: "Gong NLP", lastChanged: "5 days ago", eventId: "evt-016" },
    ],
    relationships: [
      { label: "Account", targetName: "Acme Corp", targetType: "Account", targetId: "ent-001" },
    ],
  },
];

export const MOCK_EVENTS: MemoryEvent[] = [
  {
    id: "evt-027",
    type: "new",
    entity: "Acme Corp",
    entityId: "ent-001",
    summary: "4 critical Jira issues ingested from connector",
    source: "Jira Connector",
    correlationId: "corr-8821",
    actor: "Loader Phase-1",
    timestamp: "35 min ago",
  },
  {
    id: "evt-021",
    type: "changed",
    entity: "Acme Corp",
    entityId: "ent-001",
    summary: "Health score updated by analytics sync",
    source: "Mixpanel Analytics",
    correlationId: "corr-8802",
    actor: "Normalizer v2",
    timestamp: "1 hour ago",
    oldValue: "81 / 100",
    newValue: "72 / 100",
    rationale: "DAU dropped 18% over 7 days following the API latency incident. Score recalculated against engagement dimension.",
  },
  {
    id: "evt-019",
    type: "conflict",
    entity: "Acme Corp",
    entityId: "ent-001",
    summary: "ARR value conflict between CRM and billing",
    source: "HubSpot CRM vs Billing System",
    correlationId: "corr-8790",
    actor: "Spine Conflict Resolver",
    timestamp: "3 hours ago",
    oldValue: "₹46,00,000 (Billing)",
    newValue: "₹48,00,000 (CRM)",
    rationale: "Two sources disagree. Pending consultation before promotion to canonical.",
  },
  {
    id: "evt-015",
    type: "new",
    entity: "Acme Corp",
    entityId: "ent-001",
    summary: "Call transcript ingested — renewal discussion recorded",
    source: "Gong",
    correlationId: "corr-8755",
    actor: "Loader Phase-1",
    timestamp: "5 days ago",
  },
  {
    id: "evt-011",
    type: "changed",
    entity: "Acme Corp",
    entityId: "ent-001",
    summary: "ARR updated post contract amendment",
    source: "Billing System",
    correlationId: "corr-8711",
    actor: "Normalizer v2",
    timestamp: "3 days ago",
    oldValue: "₹42,00,000",
    newValue: "₹48,00,000",
    rationale: "Contract amendment signed Jun 17 2026 — MRR uplift from 3.5L to 4L applied to ARR calculation.",
  },
  {
    id: "evt-008",
    type: "new",
    entity: "Acme Corp",
    entityId: "ent-001",
    summary: "Renewal date confirmed from billing record",
    source: "Billing System",
    correlationId: "corr-8699",
    actor: "Loader Phase-1",
    timestamp: "1 week ago",
  },
];

export const MOCK_APPROVALS: ApprovalCard[] = [
  {
    id: "apr-001",
    proposedChange: "Promote ARR to canonical — resolve CRM vs Billing conflict",
    entity: "Acme Corp",
    diff: { old: "₹46,00,000 (Billing System)", new: "₹48,00,000 (HubSpot CRM)" },
    source: "Spine Conflict Resolver",
    requester: "Normalizer v2",
    context: "CRM value reflects the Jun 17 amendment. Billing system lags by one billing cycle. CRM is the system of record per governance policy §3.",
    status: "pending",
    timestamp: "3 hours ago",
    correlationId: "corr-8790",
  },
  {
    id: "apr-002",
    proposedChange: "Update Health Score from 81 → 72 based on Mixpanel analytics",
    entity: "Acme Corp",
    diff: { old: "81 / 100", new: "72 / 100" },
    source: "Mixpanel Analytics",
    requester: "Normalizer v2",
    context: "DAU dropped 18% over 7 days following the API latency incident. Engagement dimension recalculated.",
    status: "pending",
    timestamp: "1 hour ago",
    correlationId: "corr-8802",
  },
  {
    id: "apr-003",
    proposedChange: "Promote Rohan Mehta sentiment tag — cautiously positive",
    entity: "Rohan Mehta",
    diff: { old: "Neutral (last call Jun 7)", new: "Cautiously positive (last call Jun 14)" },
    source: "Gong NLP",
    requester: "Twin Ask Engine",
    context: "Positive language cluster detected around renewal terms. Negative cluster around API reliability.",
    status: "pending",
    timestamp: "5 days ago",
    correlationId: "corr-8755",
  },
  {
    id: "apr-004",
    proposedChange: "Archive stale opportunity — SMB Pilot Q1",
    entity: "SMB Pilot Q1",
    diff: { old: "Active — Negotiation", new: "Archived — Closed Lost" },
    source: "HubSpot CRM",
    requester: "Loader Phase-1",
    context: "Deal marked Closed Lost in CRM on Jun 10. No activity in 60 days prior. Archiving removes it from active pipeline context.",
    status: "approved",
    timestamp: "2 days ago",
    correlationId: "corr-8744",
  },
  {
    id: "apr-005",
    proposedChange: "Flag critical issue — API Latency Spike — to account context",
    entity: "API Latency Spike",
    diff: { old: "Not in account context", new: "Linked to Acme Corp · Priority: Critical" },
    source: "Jira Connector",
    requester: "Normalizer v2",
    context: "Issue IW-2201 raised Jun 18. P0 severity. Two related tickets also opened. Customer confirmed impact in last call.",
    status: "pending",
    timestamp: "35 min ago",
    correlationId: "corr-8821",
  },
];

export const MOCK_CONNECTORS: Connector[] = [
  { id: "conn-001", name: "HubSpot CRM", type: "CRM", health: "healthy", lastSync: "2 min ago", scope: ["accounts", "contacts", "opportunities", "activities"] },
  { id: "conn-002", name: "Jira", type: "Task Tracker", health: "healthy", lastSync: "8 min ago", scope: ["issues", "sprints", "projects"] },
  { id: "conn-003", name: "Gong", type: "Conversation Intelligence", health: "healthy", lastSync: "5 days ago", scope: ["calls", "transcripts", "sentiment"] },
  { id: "conn-004", name: "Mixpanel Analytics", type: "Product Analytics", health: "stale", lastSync: "1 hour ago", scope: ["events", "funnels", "engagement"] },
  { id: "conn-005", name: "Billing System", type: "Billing", health: "healthy", lastSync: "6 hours ago", scope: ["contracts", "invoices", "MRR"] },
  { id: "conn-006", name: "Slack", type: "Comms", health: "healthy", lastSync: "4 min ago", scope: ["channels", "mentions", "threads"] },
];

export const MOCK_AGENTS: Agent[] = [
  { agentId: "adk-renewal-001", capabilities: ["renewal-risk-score", "churn-prediction"], endpoint: "/adk/renewal", status: "active" },
  { agentId: "adk-summarise-002", capabilities: ["call-summarise", "sentiment-tag"], endpoint: "/adk/summarise", status: "active" },
  { agentId: "adk-draft-003", capabilities: ["email-draft", "proposal-draft"], endpoint: "/adk/draft", status: "inactive" },
];

export const MOCK_COMM_LOGS: CommLog[] = [
  { id: "cl-001", sender: "Twin Ask Engine", receiver: "L4 Memory Hub", message: "retrieve_governed_context {entity: acme-corp}", correlationId: "corr-8821", timestamp: "35 min ago" },
  { id: "cl-002", sender: "Loader Phase-1", receiver: "Normalizer v2", message: "raw_payload {source: jira, records: 4}", correlationId: "corr-8821", timestamp: "36 min ago" },
  { id: "cl-003", sender: "Normalizer v2", receiver: "L7 Governance", message: "propose_write {attr: open_issues, value: 4 critical}", correlationId: "corr-8821", timestamp: "36 min ago" },
  { id: "cl-004", sender: "Normalizer v2", receiver: "L7 Governance", message: "propose_write {attr: health_score, value: 72}", correlationId: "corr-8802", timestamp: "1 hour ago" },
  { id: "cl-005", sender: "Spine Conflict Resolver", receiver: "L7 Governance", message: "conflict_detected {attr: ARR, sources: [hubspot, billing]}", correlationId: "corr-8790", timestamp: "3 hours ago" },
];

export const MOCK_CONVERSATION: Message[] = [
  {
    id: "msg-001",
    role: "user",
    text: "What's the renewal risk for Acme Corp?",
    timestamp: "10:14 AM",
  },
  {
    id: "msg-002",
    role: "twin",
    text: "Acme Corp renews on 15 Sep 2026. Current continuity score is 82/100 — band: High. Key risk signals: health score dropped from 81 to 72 following the API latency incident (IW-2201, P0), and there are 4 critical open Jira issues linked to this account. Rohan Mehta's last call sentiment was cautiously positive on renewal terms but negative on reliability. I would recommend escalating IW-2201 resolution as the primary pre-renewal action.",
    citations: [
      { id: "cit-001", label: "Health Score · Acme Corp", type: "entity", targetId: "ent-001" },
      { id: "cit-002", label: "Health Score change event", type: "event", targetId: "evt-021" },
      { id: "cit-003", label: "Gong — call Jun 14", type: "provider", targetId: "conn-003" },
    ],
    confidence: 84,
    sources: ["HubSpot CRM", "Mixpanel Analytics", "Gong", "Jira"],
    timestamp: "10:14 AM",
  },
  {
    id: "msg-003",
    role: "user",
    text: "What was the ARR before the latest amendment?",
    timestamp: "10:16 AM",
  },
  {
    id: "msg-004",
    role: "twin",
    text: "Before the Jun 17 contract amendment, ARR was ₹42,00,000. The amendment increased MRR from ₹3,50,000 to ₹4,00,000, updating ARR to ₹48,00,000. Note: there is a pending conflict between the CRM value (₹48,00,000) and the billing system (₹46,00,000) — the billing system lags by one billing cycle. This is in the approval queue awaiting your decision.",
    citations: [
      { id: "cit-004", label: "ARR change event", type: "event", targetId: "evt-011" },
      { id: "cit-005", label: "ARR conflict — approval pending", type: "event", targetId: "evt-019" },
    ],
    confidence: 91,
    sources: ["Billing System", "HubSpot CRM"],
    timestamp: "10:16 AM",
  },
];

export const MOCK_SUGGESTED_QUESTIONS = [
  "What is the renewal risk for Acme Corp?",
  "Which issues are blocking this account?",
  "What changed in the last 7 days?",
  "Who owns this account and when did we last speak?",
  "Are there any unresolved conflicts in memory?",
];
