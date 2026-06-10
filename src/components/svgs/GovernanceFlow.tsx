export default function GovernanceFlow() {
  return (
    <svg viewBox="0 0 500 340" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="340" fill="#F5F0E8" />

      {/* Title */}
      <text x="250" y="22" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="9" letterSpacing="0.15em" opacity="0.5">THE APPROVAL PATH</text>

      {/* AI Recommendation */}
      <rect x="150" y="38" width="200" height="50" rx="4" fill="none" stroke="#1A3A2A" strokeWidth="1.5" />
      <circle cx="170" cy="63" r="10" fill="none" stroke="#1A3A2A" strokeWidth="1.5" />
      <circle cx="170" cy="60" r="2" fill="#1A3A2A" opacity="0.4" />
      <path d="M166 66 Q170 70 174 66" fill="none" stroke="#1A3A2A" strokeWidth="1.2" />
      <text x="250" y="55" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="9" fontWeight="500">AI RECOMMENDATION</text>
      <text x="250" y="72" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="7.5" opacity="0.6">Evidence + Diff + Confidence Score</text>

      {/* Arrow down */}
      <line x1="250" y1="88" x2="250" y2="108" stroke="#1A3A2A" strokeWidth="1.5" />
      <polygon points="247,105 250,111 253,105" fill="#1A3A2A" />
      <text x="270" y="101" textAnchor="start" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="7" opacity="0.5">proposes</text>

      {/* HUMAN APPROVAL GATE */}
      <rect x="100" y="114" width="300" height="56" rx="4" fill="#1A3A2A" opacity="0.12" />
      <rect x="100" y="114" width="300" height="56" rx="4" fill="none" stroke="#1A3A2A" strokeWidth="2.5" />
      <text x="250" y="135" textAnchor="middle" fill="#1A3A2A" fontFamily="'Bebas Neue', sans-serif" fontSize="16" letterSpacing="0.06em">HUMAN APPROVAL GATE</text>
      <text x="250" y="155" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="7.5" opacity="0.6">The Constitutional Boundary — Inviolable</text>

      {/* Arrow down - Approved */}
      <line x1="200" y1="170" x2="200" y2="195" stroke="#3D7A50" strokeWidth="1.5" />
      <polygon points="197,192 200,198 203,192" fill="#3D7A50" />
      <text x="170" y="188" textAnchor="middle" fill="#3D7A50" fontFamily="'IBM Plex Mono', monospace" fontSize="7.5" fontWeight="500">APPROVED</text>

      {/* Arrow down - Rejected */}
      <line x1="300" y1="170" x2="300" y2="195" stroke="#8B2020" strokeWidth="1.5" />
      <polygon points="297,192 300,198 303,192" fill="#8B2020" />
      <text x="330" y="188" textAnchor="middle" fill="#8B2020" fontFamily="'IBM Plex Mono', monospace" fontSize="7.5" fontWeight="500">REJECTED</text>

      {/* EXECUTE box */}
      <rect x="130" y="200" width="140" height="44" rx="4" fill="none" stroke="#3D7A50" strokeWidth="2" />
      <text x="200" y="220" textAnchor="middle" fill="#3D7A50" fontFamily="'IBM Plex Mono', monospace" fontSize="9" fontWeight="500">EXECUTE</text>
      <text x="200" y="235" textAnchor="middle" fill="#3D7A50" fontFamily="'IBM Plex Mono', monospace" fontSize="7" opacity="0.6">Omnichannel Action</text>

      {/* DISCARD box */}
      <rect x="310" y="200" width="110" height="44" rx="4" fill="none" stroke="#8B2020" strokeWidth="1.5" strokeDasharray="4 2" />
      <text x="365" y="220" textAnchor="middle" fill="#8B2020" fontFamily="'IBM Plex Mono', monospace" fontSize="9" fontWeight="500">DISCARD</text>
      <text x="365" y="235" textAnchor="middle" fill="#8B2020" fontFamily="'IBM Plex Mono', monospace" fontSize="7" opacity="0.6">Logged + Archived</text>

      {/* Arrows to Audit Log */}
      <line x1="200" y1="244" x2="200" y2="265" stroke="#1A3A2A" strokeWidth="1" />
      <line x1="365" y1="244" x2="365" y2="260" stroke="#1A3A2A" strokeWidth="1" strokeDasharray="3 2" />
      <line x1="200" y1="265" x2="250" y2="265" stroke="#1A3A2A" strokeWidth="1" />
      <line x1="365" y1="260" x2="300" y2="260" stroke="#1A3A2A" strokeWidth="1" strokeDasharray="3 2" />
      <line x1="250" y1="265" x2="250" y2="275" stroke="#1A3A2A" strokeWidth="1" />
      <line x1="300" y1="260" x2="300" y2="275" stroke="#1A3A2A" strokeWidth="1" />

      {/* AUDIT LOG */}
      <rect x="120" y="278" width="260" height="44" rx="4" fill="#1A3A2A" opacity="0.08" />
      <rect x="120" y="278" width="260" height="44" rx="4" fill="none" stroke="#1A3A2A" strokeWidth="2" />
      <text x="250" y="297" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="9" fontWeight="500" letterSpacing="0.1em">AUDIT LOG</text>
      <text x="250" y="312" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="7" opacity="0.5">Proposal · Review · Evidence · Decision · Outcome</text>

      {/* Bottom tag */}
      <rect x="140" y="332" width="220" height="6" rx="3" fill="#1A3A2A" opacity="0.06" />
    </svg>
  );
}
