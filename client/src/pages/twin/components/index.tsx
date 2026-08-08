// ─── Twin Component Library (§6 of spec) ─────────────────────────────────────
import { cn } from "@/lib/utils";
import { type TrustLevel, type ConfidenceLevel, type EventType, type ContinuityBand } from "../data";

// ─── Status Chip ─────────────────────────────────────────────────────────────
interface StatusChipProps {
  trust: TrustLevel;
  size?: "sm" | "md";
}
export function StatusChip({ trust, size = "sm" }: StatusChipProps) {
  const variants: Record<TrustLevel, { label: string; icon: string; cls: string }> = {
    "governed":    { label: "Governed",   icon: "●", cls: "bg-[#1A3A2A]/10 text-[#1A3A2A] border-[#1A3A2A]/20" },
    "pending":     { label: "Pending",    icon: "◐", cls: "bg-gold/10 text-gold border-gold/30" },
    "local-only":  { label: "Local-only", icon: "○", cls: "bg-muted/10 text-muted-foreground border-border" },
  };
  const v = variants[trust];
  return (
    <span className={cn(
      "inline-flex items-center gap-1 rounded-full border font-mono font-medium",
      size === "sm" ? "text-[10px] px-2 py-0.5" : "text-xs px-2.5 py-1",
      v.cls
    )}>
      <span>{v.icon}</span>
      {v.label}
    </span>
  );
}

// ─── Confidence Meter ─────────────────────────────────────────────────────────
interface ConfidenceMeterProps {
  value: number; // 0–100
  showLabel?: boolean;
}
export function ConfidenceMeter({ value, showLabel = true }: ConfidenceMeterProps) {
  const level: ConfidenceLevel = value >= 80 ? "high" : value >= 50 ? "medium" : "low";
  const colors: Record<ConfidenceLevel, string> = {
    high:   "bg-[#3D7A50]",
    medium: "bg-gold",
    low:    "bg-[#F54476]",
  };
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden min-w-[48px]">
        <div className={cn("h-full rounded-full transition-all", colors[level])} style={{ width: `${value}%` }} />
      </div>
      {showLabel && (
        <span className="text-[10px] font-mono text-muted-foreground w-8">{value}%</span>
      )}
    </div>
  );
}

// ─── Event Type Badge ─────────────────────────────────────────────────────────
interface EventBadgeProps { type: EventType }
export function EventBadge({ type }: EventBadgeProps) {
  const variants: Record<EventType, { label: string; cls: string }> = {
    new:      { label: "New",      cls: "bg-[#1A3A2A]/10 text-[#1A3A2A] border-[#1A3A2A]/20" },
    changed:  { label: "Changed",  cls: "bg-gold/10 text-gold border-gold/30" },
    conflict: { label: "Conflict", cls: "bg-[#F54476]/10 text-[#F54476] border-[#F54476]/20" },
  };
  const v = variants[type];
  return (
    <span className={cn(
      "inline-flex items-center gap-1 rounded border text-[10px] font-mono font-semibold px-2 py-0.5 uppercase tracking-wide",
      v.cls
    )}>
      {v.label}
    </span>
  );
}

// ─── Diff Block ───────────────────────────────────────────────────────────────
interface DiffBlockProps {
  oldValue: string;
  newValue: string;
  rationale?: string;
  expanded?: boolean;
}
export function DiffBlock({ oldValue, newValue, rationale, expanded = false }: DiffBlockProps) {
  return (
    <div className="rounded-lg border border-border bg-paper-warm text-sm overflow-hidden">
      <div className="grid grid-cols-2 divide-x divide-border">
        <div className="p-3">
          <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-1">Before</p>
          <p className="text-foreground line-through decoration-[#F54476]/50">{oldValue}</p>
        </div>
        <div className="p-3">
          <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-1">After</p>
          <p className="text-[#1A3A2A] font-medium">{newValue}</p>
        </div>
      </div>
      {rationale && expanded && (
        <div className="border-t border-border px-3 py-2 bg-background">
          <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-1">Rationale</p>
          <p className="text-xs text-muted-foreground leading-relaxed">{rationale}</p>
        </div>
      )}
    </div>
  );
}

// ─── Citation Pill ────────────────────────────────────────────────────────────
import type { Citation } from "../data";
interface CitationPillProps {
  citation: Citation;
  onClick?: (citation: Citation) => void;
}
export function CitationPill({ citation, onClick }: CitationPillProps) {
  const icons: Record<Citation["type"], string> = {
    entity: "⬡",
    event: "◎",
    provider: "⊞",
  };
  return (
    <button
      onClick={() => onClick?.(citation)}
      className="inline-flex items-center gap-1 rounded border border-border bg-paper-warm hover:border-gold hover:bg-gold/5 transition-colors text-[10px] font-mono text-muted-foreground hover:text-foreground px-2 py-0.5"
    >
      <span className="text-gold">{icons[citation.type]}</span>
      {citation.label}
    </button>
  );
}

// ─── Continuity Gauge ─────────────────────────────────────────────────────────
interface ContinuityGaugeProps {
  score: number;
  band: ContinuityBand;
  compact?: boolean;
}
export function ContinuityGauge({ score, band, compact = false }: ContinuityGaugeProps) {
  const bands: Record<ContinuityBand, { label: string; color: string; bg: string }> = {
    critical: { label: "Critical Need", color: "text-[#F54476]", bg: "bg-[#F54476]" },
    low:      { label: "Low",           color: "text-gold",       bg: "bg-gold" },
    medium:   { label: "Medium",        color: "text-[#3D7A50]",  bg: "bg-[#3D7A50]" },
    high:     { label: "High",          color: "text-[#1A3A2A]",  bg: "bg-[#1A3A2A]" },
  };
  const b = bands[band];
  if (compact) {
    return (
      <div className="flex items-center gap-2">
        <div className="relative w-10 h-10">
          <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
            <circle cx="18" cy="18" r="15.9" fill="none" stroke="currentColor" strokeWidth="2" className="text-border" />
            <circle cx="18" cy="18" r="15.9" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray={`${score} ${100 - score}`} className={b.color} />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-forest">{score}</span>
        </div>
        <div>
          <p className="text-xs font-semibold text-forest">{score}/100</p>
          <p className={cn("text-[10px] font-mono font-semibold", b.color)}>{b.label}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-24 h-24">
        <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
          <circle cx="18" cy="18" r="15.9" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-border" />
          <circle cx="18" cy="18" r="15.9" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray={`${score} ${100 - score}`} strokeLinecap="round" className={b.color} />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-forest">{score}</span>
      </div>
      <p className={cn("text-sm font-mono font-bold", b.color)}>{b.label}</p>
    </div>
  );
}

// ─── Provenance Row (inside drawer) ──────────────────────────────────────────
interface ProvenanceRowProps {
  source: string;
  lastChanged: string;
  correlationId: string;
}
export function ProvenanceRow({ source, lastChanged, correlationId }: ProvenanceRowProps) {
  return (
    <div className="border border-border rounded-lg p-3 bg-paper-warm text-sm space-y-1">
      <div className="flex justify-between items-center">
        <span className="font-medium text-foreground">{source}</span>
        <span className="text-xs text-muted-foreground">{lastChanged}</span>
      </div>
      <p className="text-[10px] font-mono text-muted-foreground">corr: {correlationId}</p>
    </div>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────
interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
}
export function SectionHeader({ eyebrow, title, description, action }: SectionHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-4 mb-6">
      <div>
        {eyebrow && <p className="text-[10px] font-mono text-gold tracking-widest uppercase mb-1">{eyebrow}</p>}
        <h2 className="text-xl font-bold text-forest leading-tight">{title}</h2>
        {description && <p className="text-sm text-muted-foreground mt-1 max-w-xl">{description}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

// ─── Metric Card ─────────────────────────────────────────────────────────────
interface MetricCardProps {
  label: string;
  value: string | number;
  sub?: string;
  accent?: boolean;
  urgent?: boolean;
}
export function MetricCard({ label, value, sub, accent, urgent }: MetricCardProps) {
  return (
    <div className={cn(
      "rounded-xl border p-4 bg-paper",
      accent ? "border-gold/30 bg-gold/5" : "border-border",
      urgent ? "border-[#F54476]/30 bg-[#F54476]/5" : ""
    )}>
      <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-1">{label}</p>
      <p className={cn(
        "text-2xl font-bold",
        accent ? "text-gold" : urgent ? "text-[#F54476]" : "text-forest"
      )}>{value}</p>
      {sub && <p className="text-xs text-muted-foreground mt-1">{sub}</p>}
    </div>
  );
}

// ─── Provider Health Dot ──────────────────────────────────────────────────────
import type { ProviderHealth } from "../data";
interface HealthDotProps { health: ProviderHealth }
export function HealthDot({ health }: HealthDotProps) {
  const map: Record<ProviderHealth, { cls: string; label: string }> = {
    healthy: { cls: "bg-[#3D7A50]", label: "Healthy" },
    stale:   { cls: "bg-gold",      label: "Stale" },
    error:   { cls: "bg-[#F54476]", label: "Error" },
  };
  const m = map[health];
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={cn("w-2 h-2 rounded-full", m.cls)} />
      <span className="text-xs text-muted-foreground">{m.label}</span>
    </span>
  );
}
