// ─── Screen 7: Connections & Registry (§5.7) ─────────────────────────────────
import { useState } from "react";
import { RefreshCw, Database, Bot, Terminal } from "lucide-react";
import { MOCK_AGENTS, MOCK_COMM_LOGS, MOCK_CONNECTORS } from "../data";
import { HealthDot, SectionHeader } from "../components";

export default function ConnectionsScreen() {
  const [activeTab, setActiveTab] = useState<"connectors" | "registry" | "log">("connectors");

  return (
    <div className="p-6 space-y-6 max-w-4xl">

      {/* Naming clarity callout */}
      <div className="rounded-xl border border-gold/30 bg-gold/5 px-4 py-3 flex items-start gap-3">
        <span className="text-gold text-lg shrink-0">⚠</span>
        <div>
          <p className="text-xs font-semibold text-foreground mb-0.5">Naming clarity</p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            <span className="font-medium text-foreground">Connectors</span> are data sources (HubSpot, Jira, Gong…).
            {" "}<span className="font-medium text-foreground">Model providers</span> are LLM backends that power Ask answers.
            These are distinct and never confused in this surface.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 border-b border-border">
        {[
          { key: "connectors", label: "Connectors", Icon: Database },
          { key: "registry",   label: "Agent Registry", Icon: Bot },
          { key: "log",        label: "Communication Log", Icon: Terminal },
        ].map(({ key, label, Icon }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key as typeof activeTab)}
            className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px ${
              activeTab === key
                ? "border-forest text-forest"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <Icon className="w-3.5 h-3.5" />
            {label}
          </button>
        ))}
      </div>

      {/* ── Connectors ── */}
      {activeTab === "connectors" && (
        <div className="space-y-3">
          <SectionHeader
            eyebrow="Providers"
            title="Connected data sources"
            description="All connectors — native, API, and 3rd-party — appear here as ordinary providers."
          />
          <div className="rounded-xl border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-paper-warm border-b border-border">
                <tr>
                  <th className="text-left px-4 py-2.5 text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Connector</th>
                  <th className="text-left px-4 py-2.5 text-[10px] font-mono text-muted-foreground uppercase tracking-wider w-32">Type</th>
                  <th className="text-left px-4 py-2.5 text-[10px] font-mono text-muted-foreground uppercase tracking-wider w-24">Health</th>
                  <th className="text-left px-4 py-2.5 text-[10px] font-mono text-muted-foreground uppercase tracking-wider w-28">Last Sync</th>
                  <th className="text-left px-4 py-2.5 text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Scope</th>
                  <th className="w-10" />
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {MOCK_CONNECTORS.map((conn) => (
                  <tr key={conn.id} className="bg-paper hover:bg-paper-warm transition-colors">
                    <td className="px-4 py-3 font-semibold text-forest">{conn.name}</td>
                    <td className="px-4 py-3 text-muted-foreground text-xs">{conn.type}</td>
                    <td className="px-4 py-3"><HealthDot health={conn.health} /></td>
                    <td className="px-4 py-3">
                      <span className={`text-xs font-mono ${conn.health === "stale" ? "text-gold" : "text-muted-foreground"}`}>
                        {conn.lastSync}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap gap-1">
                        {conn.scope.map((s) => (
                          <span key={s} className="text-[10px] font-mono bg-paper-warm border border-border rounded px-1.5 py-0.5 text-muted-foreground">{s}</span>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <button className="hover:text-gold transition-colors text-muted-foreground">
                        <RefreshCw className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ── Registry ── */}
      {activeTab === "registry" && (
        <div className="space-y-3">
          <SectionHeader
            eyebrow="Registry"
            title="Agent registry"
            description="Read-only mirror of the Spine routing table. agent_id → capabilities → endpoint → status."
          />
          <div className="space-y-3">
            {MOCK_AGENTS.map((agent) => (
              <div key={agent.agentId} className={`rounded-xl border p-4 bg-paper ${
                agent.status === "active" ? "border-[#1A3A2A]/20" : "border-border opacity-60"
              }`}>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-mono font-bold text-forest">{agent.agentId}</span>
                      <span className={`text-[10px] font-mono rounded border px-2 py-0.5 ${
                        agent.status === "active"
                          ? "text-[#1A3A2A] bg-[#1A3A2A]/10 border-[#1A3A2A]/20"
                          : "text-muted-foreground bg-muted/10 border-border"
                      }`}>
                        {agent.status}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {agent.capabilities.map((cap) => (
                        <span key={cap} className="text-[10px] font-mono bg-gold/10 text-gold border border-gold/20 rounded px-2 py-0.5">{cap}</span>
                      ))}
                    </div>
                    <p className="text-[10px] font-mono text-muted-foreground">{agent.endpoint}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Communication log ── */}
      {activeTab === "log" && (
        <div className="space-y-3">
          <SectionHeader
            eyebrow="Observability"
            title="Communication log"
            description="sender → receiver → message → correlation_id. Read-only."
          />
          <div className="rounded-xl border border-border overflow-hidden">
            <table className="w-full text-xs font-mono">
              <thead className="bg-paper-warm border-b border-border">
                <tr>
                  <th className="text-left px-4 py-2.5 text-[10px] text-muted-foreground uppercase tracking-wider">Sender</th>
                  <th className="text-left px-4 py-2.5 text-[10px] text-muted-foreground uppercase tracking-wider">Receiver</th>
                  <th className="text-left px-4 py-2.5 text-[10px] text-muted-foreground uppercase tracking-wider">Message</th>
                  <th className="text-left px-4 py-2.5 text-[10px] text-muted-foreground uppercase tracking-wider w-28">Corr ID</th>
                  <th className="text-left px-4 py-2.5 text-[10px] text-muted-foreground uppercase tracking-wider w-24">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {MOCK_COMM_LOGS.map((log) => (
                  <tr key={log.id} className="bg-paper hover:bg-paper-warm transition-colors">
                    <td className="px-4 py-2.5 text-[#1A3A2A]">{log.sender}</td>
                    <td className="px-4 py-2.5 text-muted-foreground">{log.receiver}</td>
                    <td className="px-4 py-2.5 text-foreground">{log.message}</td>
                    <td className="px-4 py-2.5 text-gold">{log.correlationId}</td>
                    <td className="px-4 py-2.5 text-muted-foreground">{log.timestamp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
