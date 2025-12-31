export function Pipeline() {
  const nodes = [
    { x: 20, y: 60, label: "Connect" },
    { x: 160, y: 60, label: "Normalize" },
    { x: 300, y: 60, label: "Automate" },
    { x: 440, y: 60, label: "Render" },
  ]

  return (
    <svg
      width="100%"
      height="140"
      viewBox="0 0 520 140"
      role="img"
      aria-label="Integration pipeline: Connect, Normalize, Automate, Render"
      className="max-w-full"
    >
      <defs>
        <marker id="pipeline-arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <path d="M0,0 L10,3 L0,6 Z" fill="#3F51B5" />
        </marker>
      </defs>
      {nodes.map((n, i) => (
        <g key={n.label}>
          <rect
            x={n.x}
            y={n.y - 20}
            rx="8"
            ry="8"
            width="100"
            height="40"
            fill="#F3F4F6"
            stroke="#3F51B5"
            strokeWidth="2"
          />
          <text x={n.x + 50} y={n.y + 2} textAnchor="middle" fill="#1E2A4A" fontSize="12" fontWeight="500">
            {n.label}
          </text>
          {i < nodes.length - 1 && (
            <line
              x1={n.x + 100}
              y1={n.y}
              x2={nodes[i + 1].x}
              y2={nodes[i + 1].y}
              stroke="#3F51B5"
              strokeWidth="2"
              markerEnd="url(#pipeline-arrow)"
            />
          )}
        </g>
      ))}
    </svg>
  )
}
