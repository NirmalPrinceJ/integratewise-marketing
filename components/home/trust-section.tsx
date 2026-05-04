import { User, Briefcase, Building2, CheckCircle, Clock, AlertCircle } from "lucide-react"

const approvalQueue = [
  {
    action: "Update account health score",
    scope: "Work Memory",
    icon: Briefcase,
    status: "pending",
    time: "2 min ago",
  },
  {
    action: "Add renewal risk tag",
    scope: "Org Memory",
    icon: Building2,
    status: "approved",
    time: "5 min ago",
  },
  {
    action: "Log meeting summary",
    scope: "User Memory",
    icon: User,
    status: "pending",
    time: "8 min ago",
  },
]

const memoryScopes = [
  { name: "User Memory", description: "Private to you. Your notes, preferences, patterns.", icon: User },
  { name: "Work Memory", description: "Shared with your team. Context on accounts, projects, deals.", icon: Briefcase },
  { name: "Org Memory", description: "Company-wide truth. Canonical data, playbooks, standards.", icon: Building2 },
]

export function TrustSection() {
  return (
    <section className="py-24 bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Trust & Governance
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto text-balance">
            Truth you own. AI you rent. Approval in between.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Approval Queue Mockup */}
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-6">Approval Queue</h3>
            <div className="space-y-4">
              {approvalQueue.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-bg-elevated/30 rounded-lg"
                >
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div className="flex-1">
                    <div className="text-text-primary text-sm font-medium">{item.action}</div>
                    <div className="text-text-dim text-xs">{item.scope} &bull; {item.time}</div>
                  </div>
                  {item.status === "approved" ? (
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  ) : (
                    <div className="flex items-center gap-2">
                      <button className="px-3 py-1 bg-gold hover:bg-gold-light text-bg-main text-xs font-medium rounded-md transition-colors">
                        Approve
                      </button>
                      <button className="px-3 py-1 bg-bg-muted hover:bg-bg-elevated text-text-secondary text-xs font-medium rounded-md transition-colors">
                        Review
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Memory Scopes */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-6">Three Memory Scopes</h3>
            <div className="space-y-4">
              {memoryScopes.map((scope) => (
                <div key={scope.name} className="glass-card rounded-xl p-5 flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                    <scope.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-text-primary font-medium mb-1">{scope.name}</h4>
                    <p className="text-text-secondary text-sm">{scope.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-text-dim text-sm mt-6 italic">
              Private until shared, shared by choice.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
