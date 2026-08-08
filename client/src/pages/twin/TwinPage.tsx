// ─── Twin Shell — full app frame (§3, §4 of spec) ────────────────────────────
// Left-rail nav + main canvas + persistent top bar.
// Seven screens mapped to the seven IA nodes.
import { useState } from "react";
import { Link } from "wouter";
import {
  Home,
  MessageSquare,
  GitBranch,
  Box,
  Shield,
  CheckSquare,
  Plug,
  ChevronLeft,
  ChevronRight,
  RefreshCw,
  Search,
  Bell,
} from "lucide-react";
import { MOCK_TWIN } from "./data";
import { ContinuityGauge, StatusChip } from "./components";

// Screen imports
import TwinHomeScreen     from "./screens/TwinHomeScreen";
import AskScreen          from "./screens/AskScreen";
import MemoryTimelineScreen from "./screens/MemoryTimelineScreen";
import Entity360Screen    from "./screens/Entity360Screen";
import ContinuityRiskScreen from "./screens/ContinuityRiskScreen";
import GovernanceScreen   from "./screens/GovernanceScreen";
import ConnectionsScreen  from "./screens/ConnectionsScreen";

// ─── Nav definition ───────────────────────────────────────────────────────────
type ScreenId = "home" | "ask" | "memory" | "entity" | "continuity" | "governance" | "connections";

const NAV_ITEMS: { id: ScreenId; label: string; icon: typeof Home; badge?: number }[] = [
  { id: "home",        label: "Home",              icon: Home },
  { id: "ask",         label: "Ask",               icon: MessageSquare },
  { id: "memory",      label: "Memory Timeline",   icon: GitBranch },
  { id: "entity",      label: "Entity 360",        icon: Box },
  { id: "continuity",  label: "Continuity & Risk", icon: Shield },
  { id: "governance",  label: "Governance",        icon: CheckSquare, badge: MOCK_TWIN.pendingApprovals },
  { id: "connections", label: "Connections",       icon: Plug },
];

const NAV_EMOJIS: Record<ScreenId, string> = {
  home:        "🏠",
  ask:         "💬",
  memory:      "🧵",
  entity:      "🧩",
  continuity:  "🛡️",
  governance:  "✅",
  connections: "🔌",
};

export default function TwinPage() {
  const [activeScreen, setActiveScreen] = useState<ScreenId>("home");
  const [railCollapsed, setRailCollapsed] = useState(false);

  const renderScreen = () => {
    switch (activeScreen) {
      case "home":        return <TwinHomeScreen onNavigate={(s) => setActiveScreen(s as ScreenId)} />;
      case "ask":         return <AskScreen />;
      case "memory":      return <MemoryTimelineScreen />;
      case "entity":      return <Entity360Screen />;
      case "continuity":  return <ContinuityRiskScreen />;
      case "governance":  return <GovernanceScreen />;
      case "connections": return <ConnectionsScreen />;
    }
  };

  const activeNav = NAV_ITEMS.find((n) => n.id === activeScreen)!;

  return (
    <div className="flex flex-col h-screen bg-background overflow-hidden">

      {/* ════ PERSISTENT TOP BAR ════════════════════════════════════════════════ */}
      <header className="flex items-center justify-between px-4 h-12 border-b border-border bg-forest text-paper shrink-0 z-30">
        {/* Left: Twin switcher + name */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-1.5 hover:opacity-75 transition-opacity mr-2">
            <div className="w-6 h-6 rounded bg-gold/20 flex items-center justify-center">
              <span className="text-gold text-[10px] font-bold">IW</span>
            </div>
            <span className="text-xs font-semibold text-paper/70 hidden sm:inline">IntegrateWise</span>
          </Link>
          <div className="w-px h-5 bg-paper/20" />
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center">
              <span className="text-gold text-[8px] font-bold">T</span>
            </div>
            <span className="text-sm font-semibold text-paper">{MOCK_TWIN.name}</span>
            <StatusChip trust="governed" size="sm" />
          </div>
        </div>

        {/* Centre: global search/ask */}
        <button className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-paper/10 bg-paper/5 hover:bg-paper/10 transition-colors text-xs text-paper/50 min-w-[220px]">
          <Search className="w-3.5 h-3.5" />
          Search or ask the Twin…
          <span className="ml-auto text-[10px] font-mono bg-paper/10 rounded px-1.5 py-0.5">⌘K</span>
        </button>

        {/* Right: sync status + notifications */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1.5 text-xs text-paper/50 hover:text-paper transition-colors">
            <RefreshCw className="w-3 h-3" />
            <span className="hidden sm:inline font-mono">Synced {MOCK_TWIN.lastSynced}</span>
          </button>
          <button className="relative p-1.5 hover:text-gold transition-colors text-paper/50">
            <Bell className="w-4 h-4" />
            {MOCK_TWIN.pendingApprovals > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#F54476] text-paper text-[8px] font-bold flex items-center justify-center">
                {MOCK_TWIN.pendingApprovals}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* ════ BODY: LEFT RAIL + CANVAS ═════════════════════════════════════════ */}
      <div className="flex flex-1 overflow-hidden">

        {/* ── Left rail nav ── */}
        <nav className={`
          flex flex-col shrink-0 bg-paper-warm border-r border-border transition-all duration-200 z-20
          ${railCollapsed ? "w-14" : "w-52"}
        `}>
          {/* Twin type + score */}
          {!railCollapsed && (
            <div className="px-4 py-3 border-b border-border">
              <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-2">{MOCK_TWIN.type} Twin</p>
              <ContinuityGauge score={MOCK_TWIN.continuityScore} band={MOCK_TWIN.continuityBand} compact />
            </div>
          )}

          {/* Nav items */}
          <div className="flex-1 overflow-y-auto py-2">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeScreen === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveScreen(item.id)}
                  title={railCollapsed ? item.label : undefined}
                  className={`
                    w-full flex items-center gap-3 px-3 py-2.5 relative transition-colors
                    ${isActive
                      ? "bg-forest text-paper"
                      : "text-muted-foreground hover:bg-border/60 hover:text-foreground"
                    }
                    ${railCollapsed ? "justify-center" : ""}
                  `}
                >
                  <span className={`text-base shrink-0 ${railCollapsed ? "text-xl" : "text-sm"}`}>
                    {NAV_EMOJIS[item.id]}
                  </span>
                  {!railCollapsed && (
                    <span className="text-sm font-medium truncate">{item.label}</span>
                  )}
                  {item.badge !== undefined && item.badge > 0 && (
                    <span className={`
                      ml-auto min-w-[18px] h-[18px] rounded-full bg-[#F54476] text-paper text-[10px] font-bold flex items-center justify-center px-1
                      ${railCollapsed ? "absolute -top-0.5 -right-0.5 scale-75" : ""}
                    `}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Collapse toggle */}
          <button
            onClick={() => setRailCollapsed(!railCollapsed)}
            className="flex items-center justify-center gap-2 px-4 py-3 border-t border-border text-muted-foreground hover:text-foreground transition-colors text-xs"
          >
            {railCollapsed
              ? <ChevronRight className="w-4 h-4" />
              : <><ChevronLeft className="w-4 h-4" /><span>Collapse</span></>
            }
          </button>
        </nav>

        {/* ── Main canvas ── */}
        <main className="flex-1 overflow-y-auto bg-background">
          {/* Screen breadcrumb */}
          <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-2.5 border-b border-border bg-background/95 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <span className="text-sm">{NAV_EMOJIS[activeScreen]}</span>
              <h1 className="text-sm font-semibold text-forest">{activeNav.label}</h1>
            </div>
            <p className="text-[10px] font-mono text-muted-foreground hidden sm:block">
              {MOCK_TWIN.name} · {MOCK_TWIN.type} Twin
            </p>
          </div>

          {/* Screen content */}
          {renderScreen()}
        </main>

      </div>
    </div>
  );
}
