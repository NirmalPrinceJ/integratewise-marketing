export default function SolutionArch() {
  return (
    <svg viewBox="0 0 700 280" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        .flow-dot { animation: flowMove 3s linear infinite; }
        @keyframes flowMove {
          0% { transform: translate(0, 0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(60px, 0); opacity: 0; }
        }
        .spine-pulse { animation: spineGlow 2s ease-in-out infinite; }
        @keyframes spineGlow {
          0%, 100% { opacity: 0.08; }
          50% { opacity: 0.2; }
        }
        .tool-line { animation: toolFlow 2.5s ease-in-out infinite; }
        @keyframes toolFlow {
          0%, 100% { stroke-dashoffset: 0; }
          50% { stroke-dashoffset: 10; }
        }
      `}</style>
      <rect width="700" height="280" fill="#F5F0E8" />

      {/* TOP: Connected Tools feeding data */}
      <text x="350" y="18" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="8" letterSpacing="0.15em" opacity="0.5">YOUR TOOLS — DATA EXTRACTED</text>

      {[
        { x: 45, label: 'CRM' },
        { x: 125, label: 'Slack' },
        { x: 205, label: 'Docs' },
        { x: 285, label: 'Email' },
        { x: 365, label: 'Tasks' },
        { x: 445, label: 'Drive' },
        { x: 525, label: 'Chat' },
        { x: 605, label: 'API' },
      ].map((tool, i) => (
        <g key={i}>
          <rect x={tool.x - 25} y="28" width="50" height="28" rx="3" fill="none" stroke="#1A3A2A" strokeWidth="1.5" />
          <text x={tool.x} y="46" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="8">{tool.label}</text>
          <line x1={tool.x} y1="56" x2={tool.x} y2="78" stroke="#1A3A2A" strokeWidth="1" className="tool-line" strokeDasharray="4 2" />
          <circle cx={tool.x} cy="82" r="3" fill="#1A3A2A" />
        </g>
      ))}

      {/* Flowing dots from tools to SPINE */}
      {[
        { x: 45, delay: '0s' },
        { x: 125, delay: '0.4s' },
        { x: 205, delay: '0.8s' },
        { x: 285, delay: '1.2s' },
        { x: 365, delay: '1.6s' },
        { x: 445, delay: '2.0s' },
        { x: 525, delay: '2.4s' },
        { x: 605, delay: '2.8s' },
      ].map((d, i) => (
        <circle key={i} cx={d.x} cy="70" r="2.5" fill="#B8943F" className="flow-dot" style={{ animationDelay: d.delay }} />
      ))}

      {/* Collecting rail */}
      <line x1="45" y1="82" x2="605" y2="82" stroke="#1A3A2A" strokeWidth="1.5" />

      {/* SPINE: Unified Intelligence Layer */}
      <rect x="25" y="92" width="650" height="50" rx="4" fill="#1A3A2A" className="spine-pulse" />
      <rect x="25" y="92" width="650" height="50" rx="4" fill="none" stroke="#1A3A2A" strokeWidth="2.5" />
      <text x="350" y="113" textAnchor="middle" fill="#F4F0E8" fontFamily="'Bebas Neue', sans-serif" fontSize="18" letterSpacing="0.08em">SPINE — UNIFIED INTELLIGENCE LAYER</text>
      <text x="350" y="130" textAnchor="middle" fill="#F4F0E8" fontFamily="'IBM Plex Mono', monospace" fontSize="7.5" opacity="0.6">Data stored, normalized, and ready for LLM reasoning</text>

      {/* Data flowing from SPINE to LLM */}
      <line x1="350" y1="142" x2="350" y2="158" stroke="#1A3A2A" strokeWidth="1.5" />
      <circle cx="350" cy="155" r="2.5" fill="#B8943F" className="flow-dot" />

      {/* LLM Reasoning Box */}
      <rect x="260" y="162" width="180" height="36" rx="4" fill="none" stroke="#1A3A2A" strokeWidth="2" />
      <text x="350" y="178" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="9" fontWeight="500">LLM REASONING</text>
      <text x="350" y="190" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="7" opacity="0.5">Insights, Proposals, Predictions</text>

      {/* Flowing dots from LLM to Surfaces */}
      <line x1="200" y1="180" x2="120" y2="180" stroke="#1A3A2A" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="500" y1="180" x2="580" y2="180" stroke="#1A3A2A" strokeWidth="1" strokeDasharray="3 3" />
      <circle cx="160" cy="180" r="2" fill="#B8943F" className="flow-dot" />
      <circle cx="540" cy="180" r="2" fill="#B8943F" className="flow-dot" style={{ animationDelay: '1s' }} />

      {/* Outputs: User Surface + Twin Surface */}
      <rect x="30" y="210" width="140" height="32" rx="3" fill="none" stroke="#1A3A2A" strokeWidth="1.5" />
      <text x="100" y="225" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="8">YOUR DATA SURFACE</text>
      <text x="100" y="235" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="6.5" opacity="0.5">See & edit everything</text>

      <rect x="530" y="210" width="140" height="32" rx="3" fill="none" stroke="#1A3A2A" strokeWidth="1.5" />
      <text x="600" y="225" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="8">TWIN SURFACE</text>
      <text x="600" y="235" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="6.5" opacity="0.5">AI chat & reasoning</text>

      {/* Connecting lines */}
      <line x1="100" y1="210" x2="100" y2="198" stroke="#1A3A2A" strokeWidth="1" />
      <line x1="600" y1="210" x2="600" y2="198" stroke="#1A3A2A" strokeWidth="1" />

      {/* Governance gate in middle */}
      <rect x="280" y="248" width="140" height="22" rx="11" fill="#1A3A2A" opacity="0.1" />
      <rect x="280" y="248" width="140" height="22" rx="11" fill="none" stroke="#1A3A2A" strokeWidth="1.5" />
      <text x="350" y="262" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="8" letterSpacing="0.08em">HUMAN APPROVAL GATE</text>
    </svg>
  );
}
