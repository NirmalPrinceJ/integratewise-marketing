interface KPITileProps {
  label: string
  current: number
  target: number
  unit: string
  trend: number[]
}

export function KPITile({ label, current, target, unit, trend }: KPITileProps) {
  const pct = Math.min(100, Math.round((current / target) * 100))
  const w = 160
  const h = 40
  const maxVal = Math.max(...trend)
  const points = trend.map((v, i) => `${(i / (trend.length - 1)) * w},${h - (v / maxVal) * h}`).join(" ")

  const displayValue = unit === "%" ? `${current}%` : unit === "min" ? `${current}m` : current

  return (
    <div className="rounded-lg p-4" style={{ background: "#F3F4F6", border: "1px solid #C5CAE9" }}>
      <div className="flex items-baseline justify-between">
        <span className="text-sm" style={{ color: "#1E2A4A" }}>
          {label}
        </span>
        <span className="text-lg font-semibold" style={{ color: "#3F51B5" }}>
          {displayValue}
        </span>
      </div>
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} aria-hidden="true" className="mt-2">
        <polyline
          points={points}
          fill="none"
          stroke="#3F51B5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="mt-2 h-2 w-full rounded" style={{ background: "#E8EAF6" }}>
        <div className="h-2 rounded transition-all duration-500" style={{ width: `${pct}%`, background: "#3F51B5" }} />
      </div>
      <div className="mt-1 text-xs" style={{ color: "#5C6BC0" }}>
        Target: {target}
        {unit === "%" ? "%" : unit}
      </div>
    </div>
  )
}
