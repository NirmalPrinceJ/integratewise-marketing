// ─── Screen 1: Twin Home / Overview (§5.1) ───────────────────────────────────
import { ArrowRight, Clock, Home } from "lucide-react";
import { MOCK_EVENTS, MOCK_TWIN } from "../data";
import { ContinuityGauge, EventBadge, MetricCard, SectionHeader, StatusChip } from "../components";

interface Props { onNavigate: (screen: string) => void; }

export default function TwinHomeScreen({ onNavigate }: Props) {
  const recentEvents = MOCK_EVENTS.slice(0, 5);

  return (
    <div className="p-6 space-y-8 max-w-5xl">

      {/* ── Twin header ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-2xl font-bold text-forest">{MOCK_TWIN.name}</h1>
            <StatusChip trust="governed" size="md" />
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-sm text-muted-foreground font-medium">{MOCK_TWIN.type} Twin</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="inline-flex items-center gap-1 text-xs font-mono text-muted-foreground">
              <Clock className="w-3 h-3" />
              Synced {MOCK_TWIN.lastSynced}
            </span>
          </div>
        </div>
        <ContinuityGauge score={MOCK_TWIN.continuityScore} band={MOCK_TWIN.continuityBand} compact />
      </div>

      {/* ── At a glance row ── */}
      <div>
        <p className="text-[10px] font-mono text-gold tracking-widest uppercase mb-3">At a glance</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <MetricCard label="Memory Coverage" value={`${MOCK_TWIN.memoryCoverage}%`} sub="of known attributes governed" accent />
          <MetricCard label="Open Consultations" value={MOCK_TWIN.openConsultations} sub="awaiting resolution" />
          <MetricCard label="Continuity Score" value={`${MOCK_TWIN.continuityScore}/100`} sub="High band" accent />
          <MetricCard label="Pending Approvals" value={MOCK_TWIN.pendingApprovals} sub="requires your decision" urgent />
        </div>
      </div>

      {/* ── Ask box ── */}
      <div>
        <p className="text-[10px] font-mono text-gold tracking-widest uppercase mb-3">Ask</p>
        <button
          onClick={() => onNavigate("ask")}
          className="w-full text-left flex items-center justify-between gap-4 px-4 py-3 rounded-xl border border-border bg-paper hover:border-gold hover:bg-gold/5 transition-colors group"
        >
          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
            Ask this Twin — e.g. "What is the renewal risk for Acme Corp?"
          </span>
          <ArrowRight className="w-4 h-4 text-gold shrink-0" />
        </button>
      </div>

      {/* ── Recent evolution ── */}
      <div>
        <SectionHeader
          eyebrow="Memory"
          title="Recent evolution"
          description="The last 5 memory events for this Twin."
          action={
            <button
              onClick={() => onNavigate("memory")}
              className="text-xs font-medium text-gold hover:underline flex items-center gap-1"
            >
              View all <ArrowRight className="w-3 h-3" />
            </button>
          }
        />
        <div className="space-y-2">
          {recentEvents.map((evt) => (
            <div key={evt.id} className="flex items-start gap-3 px-4 py-3 rounded-lg border border-border bg-paper hover:border-gold/40 transition-colors">
              <EventBadge type={evt.type} />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{evt.summary}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{evt.source} · {evt.timestamp}</p>
              </div>
              <span className="text-[10px] font-mono text-muted-foreground/60 shrink-0">{evt.correlationId}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Needs you ── */}
      <div>
        <SectionHeader
          eyebrow="Governance"
          title="Needs you"
          description="Pending approvals and unresolved conflicts."
          action={
            <button
              onClick={() => onNavigate("governance")}
              className="text-xs font-medium text-gold hover:underline flex items-center gap-1"
            >
              Open queue <ArrowRight className="w-3 h-3" />
            </button>
          }
        />
        <div className="rounded-xl border border-[#F54476]/20 bg-[#F54476]/5 px-4 py-3 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-foreground">{MOCK_TWIN.pendingApprovals} items waiting for your decision</p>
            <p className="text-xs text-muted-foreground mt-0.5">Including 1 conflict and {MOCK_TWIN.pendingApprovals - 1} proposed memory updates</p>
          </div>
          <button
            onClick={() => onNavigate("governance")}
            className="shrink-0 px-3 py-1.5 rounded-lg bg-forest text-paper text-xs font-semibold hover:bg-forest-deep transition-colors"
          >
            Review
          </button>
        </div>
      </div>

    </div>
  );
}
