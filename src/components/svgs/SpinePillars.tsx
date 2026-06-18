export default function SpinePillars() {
  return (
    <svg viewBox="0 0 900 520" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes pillarGlow {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        @keyframes spinePulse {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.3; }
        }
        @keyframes connectFlow {
          0% { stroke-dashoffset: 20; }
          100% { stroke-dashoffset: 0; }
        }
        .pillar { animation: pillarGlow 3s ease-in-out infinite; }
        .spine-center { animation: spinePulse 2.5s ease-in-out infinite; }
        .connect-line { animation: connectFlow 2s linear infinite; }
        .pillar-label { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.06em; }
        .body-text { font-family: 'IBM Plex Mono', monospace; }
      `}</style>

      {/* === BACKGROUND === */}
      <rect width="900" height="520" fill="#F5F0E8" />

      {/* === TITLE === */}
      <text x="450" y="28" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="9" letterSpacing="0.2em" opacity="0.5">SIX PILLARS · ONE SPINE</text>

      {/* === SPINE: Central Foundation === */}
      {/* Spine hexagon background */}
      <polygon points="450,140 540,185 540,255 450,300 360,255 360,185" fill="#1A3A2A" opacity="0.08" className="spine-center" />
      <polygon points="450,140 540,185 540,255 450,300 360,255 360,185" fill="none" stroke="#1A3A2A" strokeWidth="2.5" />

      {/* Spine label */}
      <text x="450" y="200" textAnchor="middle" fill="#1A3A2A" className="pillar-label" fontSize="20">SPINE</text>
      <text x="450" y="218" textAnchor="middle" fill="#1A3A2A" className="body-text" fontSize="7.5" opacity="0.7">CANONICAL CONTEXT LAYER</text>
      <text x="450" y="232" textAnchor="middle" fill="#1A3A2A" className="body-text" fontSize="6.5" opacity="0.5">Normalized · Governed · Persistent</text>
      <text x="450" y="244" textAnchor="middle" fill="#1A3A2A" className="body-text" fontSize="6.5" opacity="0.5">Powers the AI · Not the other way around</text>

      {/* === CONNECTING LINES from Spine to Pillars === */}
      {/* Top-left: One Surface */}
      <line x1="390" y1="175" x2="200" y2="95" stroke="#1A3A2A" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.35" className="connect-line" />
      {/* Top-right: Memory */}
      <line x1="510" y1="175" x2="700" y2="95" stroke="#1A3A2A" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.35" className="connect-line" />
      {/* Middle-left: Operating Environment */}
      <line x1="365" y1="220" x2="120" y2="220" stroke="#1A3A2A" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.35" className="connect-line" />
      {/* Middle-right: Governance */}
      <line x1="535" y1="220" x2="780" y2="220" stroke="#1A3A2A" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.35" className="connect-line" />
      {/* Bottom-left: Continuity */}
      <line x1="400" y1="265" x2="230" y2="380" stroke="#1A3A2A" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.35" className="connect-line" />
      {/* Bottom-right: Twin (Intelligence) */}
      <line x1="500" y1="265" x2="670" y2="380" stroke="#1A3A2A" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.35" className="connect-line" />

      {/* === PILLAR 1: ONE SURFACE (Top Left) === */}
      <g className="pillar">
        <rect x="55" y="52" width="290" height="72" rx="4" fill="none" stroke="#1A3A2A" strokeWidth="1.8" />
        <rect x="55" y="52" width="290" height="72" rx="4" fill="#1A3A2A" opacity="0.04" />
        {/* Label */}
        <rect x="65" y="44" width="110" height="16" rx="8" fill="#F5F0E8" />
        <text x="120" y="56" textAnchor="middle" fill="#1A3A2A" className="body-text" fontSize="7.5" letterSpacing="0.15em" opacity="0.6">PILLAR 01</text>
        <text x="200" y="78" textAnchor="middle" fill="#1A3A2A" className="pillar-label" fontSize="15">ONE SURFACE</text>
        <text x="200" y="95" textAnchor="middle" fill="#1A3A2A" className="body-text" fontSize="6.5" opacity="0.6">One operating surface. Live projection of operational context.</text>
        <text x="200" y="108" textAnchor="middle" fill="#1A3A2A" className="body-text" fontSize="6.5" opacity="0.6">Workbench + Twin + Governance views. Not a dashboard.</text>
      </g>

      {/* === PILLAR 2: MEMORY (Top Right) === */}
      <g className="pillar">
        <rect x="555" y="52" width="290" height="72" rx="4" fill="none" stroke="#1A3A2A" strokeWidth="1.8" />
        <rect x="555" y="52" width="290" height="72" rx="4" fill="#1A3A2A" opacity="0.04" />
        <rect x="565" y="44" width="110" height="16" rx="8" fill="#F5F0E8" />
        <text x="620" y="56" textAnchor="middle" fill="#1A3A2A" className="body-text" fontSize="7.5" letterSpacing="0.15em" opacity="0.6">PILLAR 03</text>
        <text x="700" y="78" textAnchor="middle" fill="#1A3A2A" className="pillar-label" fontSize="15">MEMORY</text>
        <text x="700" y="95" textAnchor="middle" fill="#1A3A2A" className="body-text" fontSize="6.5" opacity="0.6">Personal · Organisational · Conversational. Context survives.</text>
        <text x="700" y="108" textAnchor="middle" fill="#1A3A2A" className="body-text" fontSize="6.5" opacity="0.6">Memory makes the Twin adaptive, not stateless.</text>
      </g>

      {/* === PILLAR 3: OPERATING ENVIRONMENT (Middle Left) === */}
      <g className="pillar">
        <rect x="20" y="164" width="260" height="72" rx="4" fill="none" stroke="#1A3A2A" strokeWidth="1.8" />
        <rect x="20" y="164" width="260" height="72" rx="4" fill="#1A3A2A" opacity="0.04" />
        <rect x="30" y="156" width="140" height="16" rx="8" fill="#F5F0E8" />
        <text x="100" y="168" textAnchor="middle" fill="#1A3A2A" className="body-text" fontSize="7.5" letterSpacing="0.15em" opacity="0.6">PILLAR 04</text>
        <text x="150" y="190" textAnchor="middle" fill="#1A3A2A" className="pillar-label" fontSize="14">OPERATING ENVIRONMENT</text>
        <text x="150" y="207" textAnchor="middle" fill="#1A3A2A" className="body-text" fontSize="6.5" opacity="0.6">Model-agnostic. ADK · MCP · Loader · Normalizer · Spine.</text>
        <text x="150" y="220" textAnchor="middle" fill="#1A3A2A" className="body-text" fontSize="6.5" opacity="0.6">AI proposes. Never executes blindly.</text>
      </g>

      {/* === PILLAR 4: GOVERNANCE (Middle Right) === */}
      <g className="pillar">
        <rect x="620" y="164" width="260" height="72" rx="4" fill="none" stroke="#1A3A2A" strokeWidth="1.8" />
        <rect x="620" y="164" width="260" height="72" rx="4" fill="#1A3A2A" opacity="0.04" />
        <rect x="630" y="156" width="140" height="16" rx="8" fill="#F5F0E8" />
        <text x="700" y="168" textAnchor="middle" fill="#1A3A2A" className="body-text" fontSize="7.5" letterSpacing="0.15em" opacity="0.6">PILLAR 05</text>
        <text x="750" y="190" textAnchor="middle" fill="#1A3A2A" className="pillar-label" fontSize="15">GOVERNANCE</text>
        <text x="750" y="207" textAnchor="middle" fill="#1A3A2A" className="body-text" fontSize="6.5" opacity="0.6">System proposes. Human approves. Full audit trail.</text>
        <text x="750" y="220" textAnchor="middle" fill="#1A3A2A" className="body-text" fontSize="6.5" opacity="0.6">No writeback, schema change, or memory promotion without yes.</text>
      </g>

      {/* === PILLAR 5: CONTINUITY (Bottom Left) === */}
      <g className="pillar">
        <rect x="85" y="350" width="290" height="72" rx="4" fill="none" stroke="#1A3A2A" strokeWidth="1.8" />
        <rect x="85" y="350" width="290" height="72" rx="4" fill="#1A3A2A" opacity="0.04" />
        <rect x="95" y="342" width="110" height="16" rx="8" fill="#F5F0E8" />
        <text x="150" y="354" textAnchor="middle" fill="#1A3A2A" className="body-text" fontSize="7.5" letterSpacing="0.15em" opacity="0.6">PILLAR 06</text>
        <text x="230" y="376" textAnchor="middle" fill="#1A3A2A" className="pillar-label" fontSize="15">CONTINUITY</text>
        <text x="230" y="393" textAnchor="middle" fill="#1A3A2A" className="body-text" fontSize="6.5" opacity="0.6">Data flows: Tools → Spine → Workbench → Approval → Tools.</text>
        <text x="230" y="406" textAnchor="middle" fill="#1A3A2A" className="body-text" fontSize="6.5" opacity="0.6">Survives model changes, provider changes, team changes.</text>
      </g>

      {/* === PILLAR 6: TWIN / INTELLIGENCE (Bottom Right) === */}
      <g className="pillar">
        <rect x="525" y="350" width="290" height="72" rx="4" fill="none" stroke="#1A3A2A" strokeWidth="1.8" />
        <rect x="525" y="350" width="290" height="72" rx="4" fill="#1A3A2A" opacity="0.04" />
        <rect x="535" y="342" width="110" height="16" rx="8" fill="#F5F0E8" />
        <text x="590" y="354" textAnchor="middle" fill="#1A3A2A" className="body-text" fontSize="7.5" letterSpacing="0.15em" opacity="0.6">PILLAR 02</text>
        <text x="670" y="376" textAnchor="middle" fill="#1A3A2A" className="pillar-label" fontSize="15">DIGITAL TWIN</text>
        <text x="670" y="393" textAnchor="middle" fill="#1A3A2A" className="body-text" fontSize="6.5" opacity="0.6">Reasons across operational reality. Proposes with evidence.</text>
        <text x="670" y="406" textAnchor="middle" fill="#1A3A2A" className="body-text" fontSize="6.5" opacity="0.6">Governed handovers. Waits for approval. Never acts alone.</text>
      </g>

      {/* === FOUNDATION LABEL === */}
      <rect x="250" y="455" width="400" height="18" rx="9" fill="#1A3A2A" opacity="0.04" />
      <rect x="250" y="455" width="400" height="18" rx="9" fill="none" stroke="#1A3A2A" strokeWidth="0.8" opacity="0.2" />
      <text x="450" y="467" textAnchor="middle" fill="#1A3A2A" className="body-text" fontSize="7" letterSpacing="0.12em" opacity="0.45">THE SPINE IS THE FOUNDATION · EVERY PILLAR RESTS ON CANONICAL CONTEXT</text>

      {/* === STACK LABELS (Bottom) === */}
      <text x="450" y="498" textAnchor="middle" fill="#1A3A2A" className="body-text" fontSize="7" letterSpacing="0.1em" opacity="0.35">ADK  →  MCP  →  LOADER  →  NORMALIZER  →  SPINE</text>
      <text x="450" y="512" textAnchor="middle" fill="#1A3A2A" className="body-text" fontSize="6.5" letterSpacing="0.08em" opacity="0.3">Orchestration · Protocol · Fetch · Transform · Canonical Context</text>
    </svg>
  );
}
