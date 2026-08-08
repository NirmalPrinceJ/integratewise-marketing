// ─── Screen 4: Entity 360 (§5.4) ─────────────────────────────────────────────
import { useState } from "react";
import { ChevronRight, ExternalLink } from "lucide-react";
import { MOCK_ENTITIES, type Entity, type Attribute } from "../data";
import { ConfidenceMeter, ProvenanceRow, SectionHeader, StatusChip } from "../components";

export default function Entity360Screen() {
  const [selectedEntityId, setSelectedEntityId] = useState(MOCK_ENTITIES[0].id);
  const [drawerAttr, setDrawerAttr] = useState<Attribute | null>(null);

  const entity = MOCK_ENTITIES.find((e) => e.id === selectedEntityId) ?? MOCK_ENTITIES[0];

  return (
    <div className="flex h-full">

      {/* ── Entity selector sidebar ── */}
      <div className="w-44 shrink-0 border-r border-border bg-paper-warm flex flex-col">
        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider px-4 py-3 border-b border-border">Entities</p>
        <div className="flex-1 overflow-y-auto py-2">
          {MOCK_ENTITIES.map((e) => (
            <button
              key={e.id}
              onClick={() => { setSelectedEntityId(e.id); setDrawerAttr(null); }}
              className={`w-full text-left px-4 py-2.5 transition-colors ${selectedEntityId === e.id ? "bg-forest text-paper" : "hover:bg-border/50 text-foreground"}`}
            >
              <p className={`text-xs font-medium truncate ${selectedEntityId === e.id ? "text-paper" : "text-foreground"}`}>{e.name}</p>
              <p className={`text-[10px] mt-0.5 truncate ${selectedEntityId === e.id ? "text-paper/60" : "text-muted-foreground"}`}>{e.type}</p>
            </button>
          ))}
        </div>
      </div>

      {/* ── Entity detail ── */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">

        {/* Entity header */}
        <div className="pb-4 border-b border-border">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-xl font-bold text-forest">{entity.name}</h2>
                <StatusChip trust={entity.trust} size="md" />
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="font-mono">{entity.type}</span>
                <span>·</span>
                <span>Owner: {entity.owner}</span>
              </div>
            </div>
            <span className="text-[10px] font-mono text-muted-foreground bg-paper-warm border border-border rounded px-2 py-1">{entity.id}</span>
          </div>
        </div>

        {/* Attribute table */}
        <div>
          <SectionHeader eyebrow="Attributes" title="Known attributes" />
          <div className="rounded-xl border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-paper-warm border-b border-border">
                <tr>
                  <th className="text-left px-4 py-2.5 text-[10px] font-mono text-muted-foreground uppercase tracking-wider w-40">Attribute</th>
                  <th className="text-left px-4 py-2.5 text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Value</th>
                  <th className="text-left px-4 py-2.5 text-[10px] font-mono text-muted-foreground uppercase tracking-wider w-28">Trust</th>
                  <th className="text-left px-4 py-2.5 text-[10px] font-mono text-muted-foreground uppercase tracking-wider w-32">Confidence</th>
                  <th className="text-left px-4 py-2.5 text-[10px] font-mono text-muted-foreground uppercase tracking-wider w-36">Source</th>
                  <th className="text-left px-4 py-2.5 text-[10px] font-mono text-muted-foreground uppercase tracking-wider w-28">Changed</th>
                  <th className="w-10" />
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {entity.attributes.map((attr) => (
                  <tr
                    key={attr.key}
                    onClick={() => setDrawerAttr(drawerAttr?.key === attr.key ? null : attr)}
                    className={`hover:bg-paper-warm cursor-pointer transition-colors ${drawerAttr?.key === attr.key ? "bg-gold/5" : "bg-paper"}`}
                  >
                    <td className="px-4 py-3 font-medium text-forest">{attr.key}</td>
                    <td className="px-4 py-3 text-foreground">{attr.value}</td>
                    <td className="px-4 py-3"><StatusChip trust={attr.trust} /></td>
                    <td className="px-4 py-3"><ConfidenceMeter value={attr.confidence} /></td>
                    <td className="px-4 py-3 text-muted-foreground text-xs">{attr.source}</td>
                    <td className="px-4 py-3 text-muted-foreground text-xs">{attr.lastChanged}</td>
                    <td className="px-4 py-3">
                      <ChevronRight className={`w-3.5 h-3.5 text-muted-foreground transition-transform ${drawerAttr?.key === attr.key ? "rotate-90" : ""}`} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Inline provenance drawer */}
          {drawerAttr && (
            <div className="mt-3 rounded-xl border border-gold/30 bg-gold/5 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-forest">Provenance — {drawerAttr.key}</p>
                <button onClick={() => setDrawerAttr(null)} className="text-xs text-muted-foreground hover:text-foreground">Close</button>
              </div>
              <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Connector → Loader → Normalizer</p>
              <ProvenanceRow
                source={drawerAttr.source}
                lastChanged={drawerAttr.lastChanged}
                correlationId={`corr-via-${drawerAttr.eventId}`}
              />
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-muted-foreground">Event:</span>
                <span className="text-[10px] font-mono text-gold">{drawerAttr.eventId}</span>
              </div>
            </div>
          )}
        </div>

        {/* Relationships */}
        <div>
          <SectionHeader eyebrow="Relationships" title="Linked entities" />
          <div className="space-y-2">
            {entity.relationships.map((rel) => (
              <div key={rel.targetId} className="flex items-center justify-between px-4 py-3 rounded-lg border border-border bg-paper hover:border-gold transition-colors group">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-muted-foreground bg-paper-warm border border-border rounded px-2 py-0.5">{rel.label}</span>
                  <span className="text-sm font-medium text-foreground">{rel.targetName}</span>
                  <span className="text-xs text-muted-foreground">{rel.targetType}</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
