interface DonutProps {
  value: number
  label: string
  size?: number
}

export function Donut({ value, label, size = 140 }: DonutProps) {
  const viewBox = 120
  const r = 52
  const c = 2 * Math.PI * r
  const offset = c * (1 - value / 100)

  return (
    <svg width={size} height={size} viewBox={`0 0 ${viewBox} ${viewBox}`} role="img" aria-label={`${label} ${value}%`}>
      <circle cx="60" cy="60" r={r} stroke="#E8EAF6" strokeWidth="12" fill="none" />
      <circle
        cx="60"
        cy="60"
        r={r}
        stroke="#3F51B5"
        strokeWidth="12"
        fill="none"
        strokeDasharray={c}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 60 60)"
        className="transition-all duration-700"
      />
      <text x="60" y="55" textAnchor="middle" dominantBaseline="central" fill="#1E2A4A" fontSize="20" fontWeight="600">
        {value}%
      </text>
      <text x="60" y="75" textAnchor="middle" fill="#5C6BC0" fontSize="10">
        {label}
      </text>
    </svg>
  )
}
