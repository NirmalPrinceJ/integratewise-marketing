// ─── Screen 5: Continuity & Risk (§5.5) ──────────────────────────────────────
import { ArrowRight } from "lucide-react";
import { MOCK_TWIN } from "../data";
import { ContinuityGauge, SectionHeader } from "../components";

const DIMENSIONS = [
  { label: "Memory Coverage",     score: 94, weight: "30%", desc: "% of known attributes governed and sourced." },
  { label: "Ownership Clarity",   score: 88, weight: "20%", desc: "All key entities have identified owners." },
  { label: "Narrative Continuity",score: 79, weight: "20%", desc: "Recent calls, notes, and context are captured." },
  { label: "Conflict Resolution", score: 71, weight: "15%", desc: "Unresolved conflicts reduce this dimension." },
  { label: "Tool Integration",    score: 82, weight: "15%", desc: "Connected tools with healthy sync." },
];

const RISK_TILES = [
  {
    id: "risk-01",
    label: "Tool Fragmentation",
    severity: "medium" as const,
    desc: "1 connector (Mixpanel) is stale. Data from this source may not reflect current state.",
    action: "Review Connections",
  },
  {
    id: "risk-02",
    label: "Knowledge-Loss Risk",
    severity: "low" as const,
    desc: "Primary contact Rohan Mehta has no backup owner. If ownership changes, context may be lost.",
    action: "Assign Backup Owner",
  },
  {
    id: "risk-03",
    label: "Open Conflicts",
    severity: "high" as const,
    desc: "1 active ARR conflict between CRM and Billing. Canonical truth is blocked until resolved.",
    action: "Resolve in Governance",
  },
  {
    id: "risk-04",
    label: "Narrative Gap",
    severity: "low" as const,
    desc: "No meeting notes in the last 30 days other than the Jun 14 call. Sentiment data may be stale.",
    action: "Log Interaction",
  },
];

const SEVERITY_STYLES = {
  high:   { border: "border-[#F54476]/30 bg-[#F54476]/5",  dot: "bg-[#F54476]",  label: "High" },
  medium: { border: "border-gold/30 bg-gold/5",             dot: "bg-gold",        label: "Medium" },
  low:    { border: "border-border bg-paper",               dot: "bg-[#3D7A50]",   label: "Low" },
};

export default function ContinuityRiskScreen() {
  return (
    <div className="p-6 space-y-8 max-w-4xl">

      {/* ── Score ── */}
      <div>
        <SectionHeader
          eyebrow="Continuity"
          title="Continuity score"
          description="Composite health across five dimensions. Updated on every approved memory write."
        />
        <div className="flex flex-col md:flex-row items-start gap-8">
          <ContinuityGauge score={MOCK_TWIN.continuityScore} band={MOCK_TWIN.continuityBand} />

          {/* Dimension breakdown */}
          <div className="flex-1 space-y-3">
            {DIMENSIONS.map((dim) => {
              const level = dim.score >= 80 ? "high" : dim.score >= 60 ? "medium" : "low";
              const barColor = level === "high" ? "bg-[#1A3A2A]" : level === "medium" ? "bg-gold" : "bg-[#F54476]";
              return (
                <div key={dim.label}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-foreground">{dim.label}</span>
                      <span className="text-[10px] font-mono text-muted-foreground">({dim.weight})</span>
                    </div>
                    <span className="text-sm font-bold text-forest">{dim.score}</span>
                  </div>
                  <div className="h-2 rounded-full bg-border overflow-hidden">
                    <div className={`h-full rounded-full ${barColor}`} style={{ width: `${dim.score}%` }} />
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">{dim.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Risk tiles ── */}
      <div>
        <SectionHeader
          eyebrow="Risk"
          title="Risk signals"
          description="Flagged conditions that reduce continuity. Each has a recommended action — all proposals, gated by approval."
        />
        <div className="grid sm:grid-cols-2 gap-4">
          {RISK_TILES.map((tile) => {
            const s = SEVERITY_STYLES[tile.severity];
            return (
              <div key={tile.id} className={`rounded-xl border p-4 space-y-2 ${s.border}`}>
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full shrink-0 ${s.dot}`} />
                  <p className="text-sm font-semibold text-foreground">{tile.label}</p>
                  <span className={`ml-auto text-[10px] font-mono font-semibold ${
                    tile.severity === "high" ? "text-[#F54476]" :
                    tile.severity === "medium" ? "text-gold" : "text-[#3D7A50]"
                  }`}>{s.label}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{tile.desc}</p>
                <button className="flex items-center gap-1 text-xs font-medium text-gold hover:underline mt-1">
                  {tile.action} <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Recommendation ── */}
      <div className="rounded-xl border border-[#1A3A2A]/20 bg-[#1A3A2A]/5 p-5">
        <p className="text-[10px] font-mono text-gold tracking-widest uppercase mb-2">Next recommended action</p>
        <p className="text-sm font-semibold text-forest mb-1">Resolve the ARR conflict to unblock canonical truth</p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          The ARR conflict between CRM and Billing is the highest-impact pending decision. Resolving it will promote the value to governed, update the continuity score, and unblock downstream analytics.
        </p>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-forest text-paper text-xs font-semibold hover:bg-forest-deep transition-colors">
          Go to Governance <ArrowRight className="w-3 h-3" />
        </button>
      </div>

    </div>
  );
}
