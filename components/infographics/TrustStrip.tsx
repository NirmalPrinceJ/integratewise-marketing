import { Logo } from "@/components/Logo"

const trustLogos = ["Salesforce", "HubSpot", "Zendesk", "Stripe", "Notion", "Slack", "OpenAI", "Anthropic"]

export function TrustStrip() {
  return (
    <div className="rounded-lg p-6" style={{ background: "#F3F4F6", border: "1px solid #C5CAE9" }}>
      <p className="mb-4 text-center text-sm" style={{ color: "#5C6BC0" }}>
        Trusted by teams using
      </p>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {trustLogos.map((name) => (
          <Logo
            key={name}
            name={name}
            className="h-8 w-auto opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
          />
        ))}
      </div>
    </div>
  )
}
