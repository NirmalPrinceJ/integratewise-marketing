import { Database, ArrowRight, Layout } from "lucide-react"

const connectorLogos = [
  "Salesforce", "HubSpot", "Slack", "Jira", "Zendesk", "Intercom",
  "Notion", "Asana", "Linear", "GitHub", "Stripe", "Segment"
]

export function SpineSection() {
  return (
    <section className="py-24 bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            The Spine
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto text-balance">
            Your data is yours. AI is rented. {"That's"} the only promise that matters.
          </p>
        </div>

        {/* Spine Diagram */}
        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-8 md:gap-16">
            {/* Connectors flowing in */}
            <div className="flex flex-col gap-3">
              {connectorLogos.slice(0, 6).map((name) => (
                <div
                  key={name}
                  className="glass-card px-4 py-2 rounded-lg text-sm text-text-secondary flex items-center gap-2"
                >
                  <div className="w-2 h-2 rounded-full bg-gold/50" />
                  {name}
                </div>
              ))}
            </div>

            {/* Arrows in */}
            <div className="flex flex-col items-center gap-2">
              <ArrowRight className="w-8 h-8 text-gold/50" />
              <span className="text-xs text-text-dim">Ingest</span>
            </div>

            {/* The Spine */}
            <div className="relative">
              <div className="w-32 h-48 bg-gradient-to-b from-gold/20 to-gold/5 border-2 border-gold/30 rounded-2xl flex flex-col items-center justify-center gap-2">
                <Database className="w-10 h-10 text-gold" />
                <span className="text-text-primary font-semibold">Spine</span>
                <span className="text-xs text-text-dim">Truth Boundary</span>
              </div>
              <div className="absolute -inset-4 bg-gold/5 rounded-3xl -z-10 blur-xl" />
            </div>

            {/* Arrows out */}
            <div className="flex flex-col items-center gap-2">
              <ArrowRight className="w-8 h-8 text-gold/50" />
              <span className="text-xs text-text-dim">Project</span>
            </div>

            {/* Workspace */}
            <div className="glass-card p-6 rounded-xl flex flex-col items-center gap-2">
              <Layout className="w-8 h-8 text-gold" />
              <span className="text-text-primary font-medium">Workspace</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
