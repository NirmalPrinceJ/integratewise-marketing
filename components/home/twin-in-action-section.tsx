import { AlertTriangle, TrendingDown, Clock, ArrowRight, CheckCircle, RotateCcw } from "lucide-react"

const signalCards = [
  {
    title: "Account Success",
    signal: "Red Account Detected",
    signalIcon: AlertTriangle,
    signalColor: "text-red-400",
    pattern: "Support tickets +40% in 14 days, NPS dropped to 6, champion went silent",
    proposal: "Schedule executive check-in, prepare health report, draft renewal discussion points",
    evidence: "3 escalated tickets, 2 missed QBRs, contract renewal in 45 days",
  },
  {
    title: "BizOps",
    signal: "Revenue Leakage Alert",
    signalIcon: TrendingDown,
    signalColor: "text-orange-400",
    pattern: "Pipeline velocity slowed 23%, win rate down in Enterprise segment",
    proposal: "Generate segment analysis, identify stuck deals, prepare coaching notes",
    evidence: "12 deals stalled >30 days, 3 competitors mentioned in loss notes",
  },
  {
    title: "Customer Success",
    signal: "Adoption Risk",
    signalIcon: Clock,
    signalColor: "text-blue-400",
    pattern: "Feature adoption at 34%, weekly active users declining",
    proposal: "Trigger onboarding sequence, schedule training session, enable feature tips",
    evidence: "Core feature unused by 66% of users, last training 4 months ago",
  },
]

export function TwinInActionSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            The Twin in Action
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            See how the Loop connects signal to action and compounds knowledge back into the Spine.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {signalCards.map((card) => (
            <div key={card.title} className="glass-card rounded-xl p-6 relative">
              {/* Signal Pattern */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <card.signalIcon className={`w-5 h-5 ${card.signalColor}`} />
                  <span className={`text-sm font-medium ${card.signalColor}`}>{card.signal}</span>
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{card.title}</h3>
                <p className="text-text-secondary text-sm">{card.pattern}</p>
              </div>

              {/* Arrow down */}
              <div className="flex justify-center mb-4">
                <ArrowRight className="w-5 h-5 text-gold rotate-90" />
              </div>

              {/* Twin Proposal */}
              <div className="bg-bg-elevated/50 rounded-lg p-4 mb-4">
                <div className="text-xs text-gold mb-2 font-medium">Twin Proposal</div>
                <p className="text-text-primary text-sm">{card.proposal}</p>
              </div>

              {/* Evidence */}
              <div className="text-xs text-text-dim mb-4">
                <span className="text-text-secondary">Evidence:</span> {card.evidence}
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-3">
                <button className="flex-1 bg-gold hover:bg-gold-light text-bg-main px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Approve & Execute
                </button>
              </div>

              {/* Loop arrow back to Spine */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1 text-xs text-text-dim">
                <RotateCcw className="w-4 h-4 text-gold/50" />
                <span>Loop back to Spine</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
