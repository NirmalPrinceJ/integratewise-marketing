export default function MemoryTimeline() {
  return (
    <svg viewBox="0 0 700 220" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        .event-node { animation: nodePulse 2.5s ease-in-out infinite; }
        .event-node:nth-child(2) { animation-delay: 0.3s; }
        .event-node:nth-child(3) { animation-delay: 0.6s; }
        .event-node:nth-child(4) { animation-delay: 0.9s; }
        .event-node:nth-child(5) { animation-delay: 1.2s; }
        .event-node:nth-child(6) { animation-delay: 1.5s; }
        .event-node:nth-child(7) { animation-delay: 1.8s; }
        @keyframes nodePulse {
          0%, 100% { opacity: 0.6; r: 5; }
          50% { opacity: 1; r: 7; }
        }
        .spine-band { animation: bandGlow 2s ease-in-out infinite; }
        @keyframes bandGlow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        .drop-line { animation: dropFlow 2s ease-in-out infinite; }
        @keyframes dropFlow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }
        .mem-dot { animation: memFlow 3s linear infinite; }
        @keyframes memFlow {
          0% { transform: translateX(-100px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(500px); opacity: 0; }
        }
      `}</style>
      <rect width="700" height="220" fill="#F5F0E8" />

      {/* Top label */}
      <text x="350" y="18" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="8" letterSpacing="0.15em" opacity="0.5">OPERATIONAL EVENTS ACROSS TIME</text>

      {/* Timeline base */}
      <line x1="40" y1="75" x2="660" y2="75" stroke="#1A3A2A" strokeWidth="2" />

      {/* Animated event nodes */}
      {[
        { x: 70, label: 'CRM SYNC', y: 50 },
        { x: 160, label: 'DECISION', y: 40 },
        { x: 250, label: 'APPROVAL', y: 50 },
        { x: 350, label: 'HANDOVER', y: 38 },
        { x: 460, label: 'WORKFLOW', y: 48 },
        { x: 570, label: 'AI SIGNAL', y: 42 },
        { x: 640, label: 'UPDATE', y: 52 },
      ].map((node, i) => (
        <g key={i}>
          <line x1={node.x} y1="70" x2={node.x} y2={node.y + 12} stroke="#1A3A2A" strokeWidth="1" className="drop-line" style={{ animationDelay: `${i * 0.3}s` }} />
          <circle cx={node.x} cy="75" r="5" fill="#1A3A2A" className="event-node" />
          <rect x={node.x - 30} y={node.y - 14} width="60" height="14" rx="2" fill="none" stroke="#1A3A2A" strokeWidth="1.2" opacity="0.7" />
          <text x={node.x} y={node.y - 4} textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="7">{node.label}</text>
        </g>
      ))}

      {/* Divider */}
      <line x1="40" y1="100" x2="660" y2="100" stroke="#C4BAA8" strokeWidth="1" strokeDasharray="4 3" />

      {/* SPINE MEMORY BAND — animated */}
      <text x="350" y="118" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="8" letterSpacing="0.15em" opacity="0.5">SPINE MEMORY — UNBROKEN CONTINUITY</text>

      <rect x="40" y="128" width="620" height="40" rx="4" fill="#1A3A2A" className="spine-band" />
      <rect x="40" y="128" width="620" height="40" rx="4" fill="none" stroke="#1A3A2A" strokeWidth="2.5" />

      {/* Animated memory segments */}
      <text x="100" y="153" textAnchor="middle" fill="#F4F0E8" fontFamily="'IBM Plex Mono', monospace" fontSize="8" opacity="0.8">USER</text>
      <line x1="170" y1="148" x2="170" y2="140" stroke="#F4F0E8" strokeWidth="1" opacity="0.3" />
      <text x="250" y="153" textAnchor="middle" fill="#F4F0E8" fontFamily="'IBM Plex Mono', monospace" fontSize="8" opacity="0.8">WORK</text>
      <line x1="330" y1="148" x2="330" y2="140" stroke="#F4F0E8" strokeWidth="1" opacity="0.3" />
      <text x="410" y="153" textAnchor="middle" fill="#F4F0E8" fontFamily="'IBM Plex Mono', monospace" fontSize="8" opacity="0.8">ORG</text>
      <line x1="490" y1="148" x2="490" y2="140" stroke="#F4F0E8" strokeWidth="1" opacity="0.3" />
      <text x="580" y="153" textAnchor="middle" fill="#F4F0E8" fontFamily="'IBM Plex Mono', monospace" fontSize="8" opacity="0.8">CONVERSATIONAL</text>

      {/* Animated flowing dots in the band */}
      <circle cx="60" cy="148" r="2" fill="#B8943F" className="mem-dot" />
      <circle cx="60" cy="148" r="1.5" fill="#B8943F" className="mem-dot" style={{ animationDelay: '1s' }} />
      <circle cx="60" cy="148" r="1.5" fill="#B8943F" className="mem-dot" style={{ animationDelay: '2s' }} />

      {/* Vertical connectors from timeline to memory band — animated */}
      {[70, 160, 250, 350, 460, 570, 640].map((x, i) => (
        <line
          key={i}
          x1={x}
          y1="80"
          x2={x}
          y2="128"
          stroke="#1A3A2A"
          strokeWidth="1"
          strokeDasharray="3 2"
          className="drop-line"
          style={{ animationDelay: `${i * 0.2}s` }}
          opacity="0.3"
        />
      ))}

      {/* Bottom label */}
      <rect x="200" y="185" width="300" height="16" rx="8" fill="#1A3A2A" opacity="0.05" />
      <rect x="200" y="185" width="300" height="16" rx="8" fill="none" stroke="#1A3A2A" strokeWidth="1" opacity="0.3" />
      <text x="350" y="196" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="7" letterSpacing="0.1em" opacity="0.5">EVERY EVENT PERSISTS · EVERY SESSION CONNECTS</text>
    </svg>
  );
}
