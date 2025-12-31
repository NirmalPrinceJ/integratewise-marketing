export type KPI = {
  key: "ingest_rate" | "health_minutes" | "uptime_pct" | "rotation_pct"
  label: string
  target: number
  unit: "%" | "min" | "count"
  current: number
  trend: number[]
  updated_at: string
}

export type IntegrationItem = {
  name: "Salesforce" | "HubSpot" | "Zendesk" | "Stripe" | "Notion" | "Slack" | "OpenAI" | "Anthropic"
  category: "CRM" | "Support" | "Payments" | "Docs" | "Comms" | "AI"
  status: "native" | "beta" | "planned"
}

export type SecurityMetric = {
  name: "SOC2" | "Token Rotation" | "Access Controls" | "CSP"
  score: number
  details: string
}
