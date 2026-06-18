export default function HeroSpine() {
  return (
    <svg viewBox="0 0 600 400" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect width="600" height="400" fill="#F5F0E8" />

      {/* Central Spine Column */}
      <rect x="280" y="30" width="40" height="340" rx="4" fill="#1A3A2A" opacity="0.08" />
      <rect x="282" y="30" width="36" height="340" rx="3" fill="none" stroke="#1A3A2A" strokeWidth="2.5" />
      <text x="300" y="215" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="10" fontWeight="500" letterSpacing="0.15em">SPINE</text>

      {/* Branching lines and nodes - LEFT SIDE */}
      {/* Conversations */}
      <line x1="140" y1="70" x2="280" y2="70" stroke="#1A3A2A" strokeWidth="1.5" />
      <circle cx="130" cy="70" r="5" fill="#1A3A2A" opacity="0.15" />
      <circle cx="130" cy="70" r="4" fill="none" stroke="#1A3A2A" strokeWidth="1.5" />
      <text x="120" y="68" textAnchor="end" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="9" letterSpacing="0.06em">Conversations</text>

      {/* Documents */}
      <line x1="155" y1="120" x2="280" y2="120" stroke="#1A3A2A" strokeWidth="1.5" />
      <rect x="124" y="114" width="10" height="12" rx="1" fill="none" stroke="#1A3A2A" strokeWidth="1.5" />
      <text x="118" y="118" textAnchor="end" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="9" letterSpacing="0.06em">Documents</text>

      {/* APIs */}
      <line x1="170" y1="170" x2="280" y2="170" stroke="#1A3A2A" strokeWidth="1.5" />
      <rect x="128" y="164" width="12" height="7" rx="1" fill="none" stroke="#1A3A2A" strokeWidth="1.5" />
      <line x1="131" y1="167.5" x2="137" y2="167.5" stroke="#1A3A2A" strokeWidth="1" />
      <text x="122" y="168" textAnchor="end" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="9" letterSpacing="0.06em">APIs</text>

      {/* Workflows */}
      <line x1="185" y1="220" x2="280" y2="220" stroke="#1A3A2A" strokeWidth="1.5" />
      <path d="M126 220 L132 216 L132 224 Z" fill="none" stroke="#1A3A2A" strokeWidth="1.5" />
      <text x="120" y="222" textAnchor="end" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="9" letterSpacing="0.06em">Workflows</text>

      {/* Dev Environments */}
      <line x1="200" y1="270" x2="280" y2="270" stroke="#1A3A2A" strokeWidth="1.5" />
      <rect x="124" y="264" width="12" height="12" rx="2" fill="none" stroke="#1A3A2A" strokeWidth="1.5" />
      <line x1="127" y1="268" x2="133" y2="272" stroke="#1A3A2A" strokeWidth="1" />
      <line x1="133" y1="268" x2="127" y2="272" stroke="#1A3A2A" strokeWidth="1" />
      <text x="118" y="272" textAnchor="end" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="9" letterSpacing="0.06em">Dev Environments</text>

      {/* Org Systems */}
      <line x1="215" y1="320" x2="280" y2="320" stroke="#1A3A2A" strokeWidth="1.5" />
      <circle cx="130" cy="320" r="6" fill="none" stroke="#1A3A2A" strokeWidth="1.5" />
      <circle cx="130" cy="320" r="2" fill="#1A3A2A" opacity="0.3" />
      <text x="118" y="322" textAnchor="end" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="9" letterSpacing="0.06em">Org Systems</text>

      {/* Branching lines and nodes - RIGHT SIDE */}
      {/* Twin */}
      <line x1="320" y1="100" x2="430" y2="100" stroke="#1A3A2A" strokeWidth="1.5" strokeDasharray="4 3" />
      <rect x="434" y="93" width="56" height="14" rx="3" fill="#1A3A2A" opacity="0.1" />
      <rect x="434" y="93" width="56" height="14" rx="3" fill="none" stroke="#1A3A2A" strokeWidth="1.5" />
      <text x="462" y="103" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="8" fontWeight="500">TWIN</text>

      {/* Memory */}
      <line x1="320" y1="170" x2="440" y2="170" stroke="#1A3A2A" strokeWidth="1.5" strokeDasharray="4 3" />
      <rect x="444" y="163" width="64" height="14" rx="3" fill="#1A3A2A" opacity="0.1" />
      <rect x="444" y="163" width="64" height="14" rx="3" fill="none" stroke="#1A3A2A" strokeWidth="1.5" />
      <text x="476" y="173" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="8" fontWeight="500">MEMORY</text>

      {/* Governance */}
      <line x1="320" y1="240" x2="450" y2="240" stroke="#1A3A2A" strokeWidth="1.5" strokeDasharray="4 3" />
      <rect x="454" y="233" width="82" height="14" rx="3" fill="#1A3A2A" opacity="0.1" />
      <rect x="454" y="233" width="82" height="14" rx="3" fill="none" stroke="#1A3A2A" strokeWidth="1.5" />
      <text x="495" y="243" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="8" fontWeight="500">GOVERNANCE</text>

      {/* Workbench */}
      <line x1="320" y1="310" x2="440" y2="310" stroke="#1A3A2A" strokeWidth="1.5" strokeDasharray="4 3" />
      <rect x="444" y="303" width="82" height="14" rx="3" fill="#1A3A2A" opacity="0.1" />
      <rect x="444" y="303" width="82" height="14" rx="3" fill="none" stroke="#1A3A2A" strokeWidth="1.5" />
      <text x="485" y="313" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="8" fontWeight="500">WORKBENCH</text>

      {/* Connection dots on spine */}
      <circle cx="280" cy="70" r="3" fill="#1A3A2A" />
      <circle cx="280" cy="120" r="3" fill="#1A3A2A" />
      <circle cx="280" cy="170" r="3" fill="#1A3A2A" />
      <circle cx="280" cy="220" r="3" fill="#1A3A2A" />
      <circle cx="280" cy="270" r="3" fill="#1A3A2A" />
      <circle cx="280" cy="320" r="3" fill="#1A3A2A" />
      <circle cx="320" cy="100" r="3" fill="#1A3A2A" />
      <circle cx="320" cy="170" r="3" fill="#1A3A2A" />
      <circle cx="320" cy="240" r="3" fill="#1A3A2A" />
      <circle cx="320" cy="310" r="3" fill="#1A3A2A" />

      {/* Normalize Once badge at bottom */}
      <rect x="220" y="368" width="160" height="18" rx="9" fill="#1A3A2A" opacity="0.06" />
      <rect x="220" y="368" width="160" height="18" rx="9" fill="none" stroke="#1A3A2A" strokeWidth="1" />
      <text x="300" y="380" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="7.5" letterSpacing="0.12em" opacity="0.7">NORMALIZE ONCE · RENDER ANYWHERE</text>
    </svg>
  );
}
