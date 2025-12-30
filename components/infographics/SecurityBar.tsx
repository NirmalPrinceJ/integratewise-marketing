interface SecurityBarProps {
  metrics: { name: string; score: number; details: string }[]
}

export function SecurityBar({ metrics }: SecurityBarProps) {
  return (
    <div className="space-y-4">
      {metrics.map((metric) => (
        <div key={metric.name} className="rounded-lg p-4" style={{ background: "#F3F4F6" }}>
          <div className="flex items-center justify-between">
            <span className="font-medium" style={{ color: "#1E2A4A" }}>
              {metric.name}
            </span>
            <span className="text-sm font-semibold" style={{ color: "#3F51B5" }}>
              {metric.score}%
            </span>
          </div>
          <div className="mt-2 h-2 w-full rounded" style={{ background: "#E8EAF6" }}>
            <div
              className="h-2 rounded transition-all duration-500"
              style={{ width: `${metric.score}%`, background: metric.score >= 95 ? "#3F51B5" : "#5C6BC0" }}
            />
          </div>
          <p className="mt-2 text-xs" style={{ color: "#5C6BC0" }}>
            {metric.details}
          </p>
        </div>
      ))}
    </div>
  )
}
