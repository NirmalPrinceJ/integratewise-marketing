// ─── Screen 3: Memory Timeline (§5.3) ────────────────────────────────────────
import { useState } from "react";
import { MOCK_EVENTS, type MemoryEvent, type EventType } from "../data";
import { DiffBlock, EventBadge, SectionHeader } from "../components";
import { ChevronDown, ChevronRight, Filter } from "lucide-react";

export default function MemoryTimelineScreen() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<EventType | "all">("all");

  const filtered = filterType === "all"
    ? MOCK_EVENTS
    : MOCK_EVENTS.filter((e) => e.type === filterType);

  const toggle = (id: string) => setExpanded((prev) => (prev === id ? null : id));

  return (
    <div className="p-6 max-w-3xl">
      <SectionHeader
        eyebrow="Memory"
        title="Memory Timeline"
        description="Evolving memory as a sequence of events — not a snapshot. Every write, change, and conflict, in order."
        action={
          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-muted-foreground" />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value as EventType | "all")}
              className="text-xs border border-border rounded-lg px-2 py-1.5 bg-paper text-foreground outline-none focus:border-gold"
            >
              <option value="all">All events</option>
              <option value="new">New</option>
              <option value="changed">Changed</option>
              <option value="conflict">Conflict</option>
            </select>
          </div>
        }
      />

      {/* ── Replay strip ── */}
      <div className="mb-6 rounded-xl border border-border bg-paper-warm px-4 py-3 flex items-center gap-4">
        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider shrink-0">Replay</span>
        <input type="range" min={0} max={MOCK_EVENTS.length - 1} defaultValue={MOCK_EVENTS.length - 1}
          className="flex-1 accent-[#1A3A2A] h-1"
        />
        <span className="text-[10px] font-mono text-muted-foreground shrink-0">Now</span>
      </div>

      {/* ── Timeline ── */}
      <div className="relative">
        {/* Vertical spine */}
        <div className="absolute left-[18px] top-3 bottom-3 w-px bg-border" />

        <div className="space-y-0">
          {filtered.map((evt, idx) => {
            const isExpanded = expanded === evt.id;
            const isLast = idx === filtered.length - 1;
            return (
              <div key={evt.id} className="relative flex gap-4">
                {/* Node */}
                <div className={`
                  relative z-10 w-9 h-9 rounded-full border-2 flex items-center justify-center shrink-0 mt-1
                  ${evt.type === "conflict" ? "border-[#F54476] bg-[#F54476]/10" :
                    evt.type === "changed"  ? "border-gold bg-gold/10" :
                                              "border-[#1A3A2A] bg-[#1A3A2A]/10"}
                `}>
                  <span className={`text-xs font-bold ${
                    evt.type === "conflict" ? "text-[#F54476]" :
                    evt.type === "changed"  ? "text-gold" : "text-[#1A3A2A]"
                  }`}>
                    {evt.type === "new" ? "+" : evt.type === "changed" ? "~" : "!"}
                  </span>
                </div>

                {/* Card */}
                <div className={`flex-1 mb-3 rounded-xl border bg-paper overflow-hidden ${
                  evt.type === "conflict" ? "border-[#F54476]/30" :
                  evt.type === "changed"  ? "border-gold/30" : "border-border"
                }`}>
                  {/* Card header — always visible */}
                  <button
                    onClick={() => toggle(evt.id)}
                    className="w-full text-left px-4 py-3 flex items-start justify-between gap-4 hover:bg-paper-warm transition-colors"
                  >
                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <EventBadge type={evt.type} />
                        <span className="text-xs font-mono text-muted-foreground">{evt.entity}</span>
                      </div>
                      <p className="text-sm font-medium text-foreground">{evt.summary}</p>
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="text-xs text-muted-foreground">{evt.source}</span>
                        <span className="text-[10px] font-mono text-muted-foreground/60">{evt.correlationId}</span>
                        <span className="text-xs text-muted-foreground">{evt.actor}</span>
                        <span className="text-xs text-muted-foreground">{evt.timestamp}</span>
                      </div>
                    </div>
                    {(evt.oldValue || evt.newValue) ? (
                      isExpanded
                        ? <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                        : <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                    ) : null}
                  </button>

                  {/* Expanded: diff */}
                  {isExpanded && evt.oldValue && evt.newValue && (
                    <div className="px-4 pb-4 pt-0 border-t border-border">
                      <DiffBlock
                        oldValue={evt.oldValue}
                        newValue={evt.newValue}
                        rationale={evt.rationale}
                        expanded
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
