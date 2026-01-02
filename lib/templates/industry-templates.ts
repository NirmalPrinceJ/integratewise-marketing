export type IndustryTemplateCategory = "customer-success" | "freelance" | "startup" | "operations" | "productivity" | "pm"

export type IndustryTemplate = {
  id: string
  name: string
  category: IndustryTemplateCategory
  description: string
  pipelineStages: string[]
  products: string[]
  chartOfAccounts: string[]
  kpis: string[]
  automations: string[]
}

export const industryTemplates: IndustryTemplate[] = [
  {
    id: "tpl_cs_operating_system_v1",
    name: "Customer Success Operating System",
    category: "customer-success",
    description: "Pipeline, renewals, health signals, and playbooks—ready for Full Integration or Render‑Only.",
    pipelineStages: ["Onboarding", "Adoption", "Value", "Renewal", "Expansion", "At risk"],
    products: ["Implementation", "Training", "Managed Ops"],
    chartOfAccounts: ["Revenue", "COGS", "Services revenue", "Support", "Tooling"],
    kpis: ["Health score", "Time-to-value", "Adoption rate", "Renewal forecast", "Churn risk"],
    automations: ["Health pulse report", "At-risk alert", "QBR outline generator", "Follow-up task creation"],
  },
  {
    id: "tpl_ops_founder_weekly_v1",
    name: "Founder Weekly Ops",
    category: "operations",
    description: "A weekly operating rhythm: priorities, decisions, and execution tracking.",
    pipelineStages: ["Backlog", "This week", "In progress", "Blocked", "Done"],
    products: ["Goals", "Initiatives", "Projects"],
    chartOfAccounts: ["Runway", "Subscriptions", "Services", "Infra", "Payroll"],
    kpis: ["Weekly throughput", "Decision latency", "Burn multiple", "Pipeline velocity"],
    automations: ["Weekly plan generator", "Decision log to tasks", "Status update draft"],
  },
  {
    id: "tpl_freelance_delivery_v1",
    name: "Freelance Delivery",
    category: "freelance",
    description: "Client pipeline, SOW tracking, invoices, and delivery checklists.",
    pipelineStages: ["Lead", "Proposal", "SOW", "In delivery", "Review", "Invoice", "Complete"],
    products: ["Discovery", "Delivery", "Retainer"],
    chartOfAccounts: ["Client revenue", "Expenses", "Software", "Contractors", "Taxes"],
    kpis: ["Utilization", "Proposal win rate", "Invoice cycle time", "Client satisfaction"],
    automations: ["Proposal draft", "Invoice follow-up", "Weekly client update"],
  },
  {
    id: "tpl_startup_go_to_market_v1",
    name: "Startup Go-to-Market",
    category: "startup",
    description: "CRM-lite pipeline, experiments, and feedback loops that stay structured.",
    pipelineStages: ["Target", "Contacted", "Discovery", "Trial", "Negotiation", "Won", "Lost"],
    products: ["ICP", "Messaging", "Experiments"],
    chartOfAccounts: ["MRR", "CAC", "Sales tooling", "Marketing", "Founder time"],
    kpis: ["Pipeline coverage", "Activation rate", "Conversion rate", "Sales cycle length"],
    automations: ["Account brief", "Follow-up drafts", "Weekly pipeline report"],
  },
]

