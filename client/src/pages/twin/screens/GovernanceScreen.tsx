// ─── Screen 6: Governance & Approvals (§5.6) ─────────────────────────────────
import { useState } from "react";
import { Check, X, MessageSquare } from "lucide-react";
import { MOCK_APPROVALS, type ApprovalCard, type ApprovalStatus } from "../data";
import { DiffBlock, SectionHeader, StatusChip } from "../components";

const STATUS_STYLES: Record<ApprovalStatus, { label: string; cls: string }> = {
  pending:      { label: "Pending",      cls: "bg-gold/10 text-gold border-gold/30" },
  approved:     { label: "Approved",     cls: "bg-[#1A3A2A]/10 text-[#1A3A2A] border-[#1A3A2A]/20" },
  rejected:     { label: "Rejected",     cls: "bg-[#F54476]/10 text-[#F54476] border-[#F54476]/20" },
  consultation: { label: "Consultation", cls: "bg-border/60 text-muted-foreground border-border" },
};

function ApprovalStatusChip({ status }: { status: ApprovalStatus }) {
  const s = STATUS_STYLES[status];
  return (
    <span className={`inline-flex items-center rounded border text-[10px] font-mono font-semibold px-2 py-0.5 uppercase tracking-wide ${s.cls}`}>
      {s.label}
    </span>
  );
}

export default function GovernanceScreen() {
  const [items, setItems] = useState(MOCK_APPROVALS);
  const [activeTab, setActiveTab] = useState<"queue" | "audit">("queue");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const pending = items.filter((i) => i.status === "pending");
  const decided = items.filter((i) => i.status !== "pending");

  const decide = (id: string, decision: ApprovalStatus) => {
    setItems((prev) => prev.map((item) => item.id === id ? { ...item, status: decision } : item));
    if (expandedId === id) setExpandedId(null);
  };

  const renderCard = (card: ApprovalCard, interactive: boolean) => {
    const isExpanded = expandedId === card.id;
    return (
      <div key={card.id} className={`rounded-xl border overflow-hidden transition-colors ${
        card.status === "pending" ? "border-gold/30 bg-paper" :
        card.status === "approved" ? "border-[#1A3A2A]/20 bg-paper" :
        card.status === "rejected" ? "border-[#F54476]/20 bg-paper" :
        "border-border bg-paper"
      }`}>
        {/* Card header */}
        <button
          onClick={() => setExpandedId(isExpanded ? null : card.id)}
          className="w-full text-left px-5 py-4 hover:bg-paper-warm transition-colors"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <ApprovalStatusChip status={card.status} />
                <span className="text-xs text-muted-foreground font-mono">{card.entity}</span>
              </div>
              <p className="text-sm font-semibold text-foreground">{card.proposedChange}</p>
              <p className="text-xs text-muted-foreground mt-1">{card.requester} · {card.timestamp}</p>
            </div>
            <span className="text-[10px] font-mono text-muted-foreground/60 shrink-0">{card.correlationId}</span>
          </div>
        </button>

        {/* Expanded */}
        {isExpanded && (
          <div className="border-t border-border px-5 py-4 space-y-4 bg-paper">
            {/* Diff */}
            <div>
              <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-2">Proposed change</p>
              <DiffBlock oldValue={card.diff.old} newValue={card.diff.new} expanded />
            </div>

            {/* Context */}
            <div>
              <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-1">Decision context</p>
              <p className="text-sm text-foreground leading-relaxed bg-paper-warm border border-border rounded-lg px-4 py-3">{card.context}</p>
            </div>

            {/* Source / Requester */}
            <div className="flex gap-4 text-xs text-muted-foreground">
              <span><span className="font-mono uppercase text-[10px] tracking-wider block mb-0.5">Source</span>{card.source}</span>
              <span><span className="font-mono uppercase text-[10px] tracking-wider block mb-0.5">Requester</span>{card.requester}</span>
            </div>

            {/* Actions */}
            {interactive && card.status === "pending" && (
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <button
                  onClick={() => decide(card.id, "approved")}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1A3A2A] text-paper text-sm font-semibold hover:bg-[#2D5A3D] transition-colors"
                >
                  <Check className="w-4 h-4" /> Approve
                </button>
                <button
                  onClick={() => decide(card.id, "rejected")}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#F54476]/30 text-[#F54476] text-sm font-semibold hover:bg-[#F54476]/10 transition-colors"
                >
                  <X className="w-4 h-4" /> Reject
                </button>
                <button
                  onClick={() => decide(card.id, "consultation")}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-muted-foreground text-sm font-semibold hover:border-gold hover:text-foreground transition-colors"
                >
                  <MessageSquare className="w-4 h-4" /> Request consultation
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="p-6 space-y-6 max-w-3xl">

      {/* Status legend */}
      <div className="flex items-center gap-4 flex-wrap">
        {(["governed", "pending", "local-only"] as const).map((t) => (
          <StatusChip key={t} trust={t} size="md" />
        ))}
        <span className="text-xs text-muted-foreground ml-2">Trust levels in memory</span>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 border-b border-border">
        {[
          { key: "queue", label: `Approval Queue (${pending.length})` },
          { key: "audit", label: `Audit Log (${decided.length})` },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as "queue" | "audit")}
            className={`px-4 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px ${
              activeTab === tab.key
                ? "border-forest text-forest"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Queue */}
      {activeTab === "queue" && (
        <div className="space-y-3">
          {pending.length === 0 && (
            <div className="rounded-xl border border-border bg-paper-warm px-6 py-10 text-center">
              <p className="text-sm font-medium text-forest mb-1">Queue is clear</p>
              <p className="text-xs text-muted-foreground">All proposed memory changes have been decided.</p>
            </div>
          )}
          {pending.map((card) => renderCard(card, true))}
        </div>
      )}

      {/* Audit log */}
      {activeTab === "audit" && (
        <div className="space-y-3">
          <SectionHeader
            eyebrow="Audit"
            title="Decision log"
            description="Every decision, who, when, correlation_id — replayable."
          />
          {decided.map((card) => renderCard(card, false))}
        </div>
      )}
    </div>
  );
}
