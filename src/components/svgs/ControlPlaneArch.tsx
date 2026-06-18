export default function ControlPlaneArch() {
  return (
    <svg viewBox="0 0 800 340" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        .flow-dot-up { animation: flowUp 2.5s linear infinite; }
        @keyframes flowUp {
          0% { transform: translateY(60px); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translateY(-10px); opacity: 0; }
        }
        .flow-dot-down { animation: flowDown 2.5s linear infinite; }
        @keyframes flowDown {
          0% { transform: translateY(-10px); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translateY(60px); opacity: 0; }
        }
        .cp-pulse { animation: cpGlow 2s ease-in-out infinite; }
        @keyframes cpGlow {
          0%, 100% { opacity: 0.12; }
          50% { opacity: 0.25; }
        }
        .layer-line { animation: lineFlow 3s linear infinite; }
        @keyframes lineFlow {
          0% { stroke-dashoffset: 30; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>
      <rect width="800" height="340" fill="#F5F0E8" />

      {/* === LAYER 1: Apps + Agents (Top) === */}
      <text x="400" y="22" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="8" letterSpacing="0.18em" opacity="0.5">APPS + AGENTS</text>

      {[
        { x: 60, label: 'CRM', w: 50 },
        { x: 140, label: 'Support', w: 60 },
        { x: 230, label: 'Billing', w: 55 },
        { x: 320, label: 'Email', w: 50 },
        { x: 400, label: 'AI Agent', w: 60 },
        { x: 490, label: 'Copilot', w: 58 },
        { x: 580, label: 'Workflow', w: 65 },
        { x: 680, label: 'Analytics', w: 65 },
      ].map((app, i) => (
        <g key={i}>
          <rect x={app.x - app.w/2} y="32" width={app.w} height="24" rx="3" fill="none" stroke="#1A3A2A" strokeWidth="1.3" opacity="0.7" />
          <text x={app.x} y="48" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="7.5">{app.label}</text>
        </g>
      ))}

      {/* Flow arrows down */}
      {[60, 170, 320, 430, 570, 710].map((x, i) => (
        <circle key={i} cx={x} cy="65" r="2" fill="#B8943F" className="flow-dot-down" style={{ animationDelay: `${i * 0.4}s` }} />
      ))}

      {/* === LAYER 2: IntegrateWise Control Plane (Middle — The Product) === */}
      <rect x="30" y="78" width="740" height="70" rx="4" fill="#1A3A2A" className="cp-pulse" />
      <rect x="30" y="78" width="740" height="70" rx="4" fill="none" stroke="#1A3A2A" strokeWidth="2.5" />
      <text x="400" y="100" textAnchor="middle" fill="#F4F0E8" fontFamily="'Bebas Neue', sans-serif" fontSize="16" letterSpacing="0.08em">INTEGRATEWISE CONTROL PLANE</text>

      {/* Control plane functions */}
      {[
        { x: 100, label: 'Orchestrate' },
        { x: 230, label: 'Route' },
        { x: 340, label: 'Policy' },
        { x: 450, label: 'Monitor' },
        { x: 560, label: 'Approve' },
        { x: 680, label: 'Continuity' },
      ].map((fn, i) => (
        <g key={i}>
          <rect x={fn.x - 42} y="108" width={84} height="18" rx="9" fill="#F4F0E8" opacity="0.08" />
          <rect x={fn.x - 42} y="108" width={84} height="18" rx="9" fill="none" stroke="#F4F0E8" strokeWidth="0.8" opacity="0.4" />
          <text x={fn.x} y="120" textAnchor="middle" fill="#F4F0E8" fontFamily="'IBM Plex Mono', monospace" fontSize="7" letterSpacing="0.06em" opacity="0.8">{fn.label}</text>
        </g>
      ))}

      {/* Flow between layers */}
      <line x1="400" y1="148" x2="400" y2="162" stroke="#1A3A2A" strokeWidth="1.5" className="layer-line" strokeDasharray="4 4" />
      <circle cx="400" cy="158" r="2.5" fill="#B8943F" className="flow-dot-down" style={{ animationDelay: '1s' }} />

      {/* === LAYER 3: Data Plane (Loader, Normalizer, Spine) === */}
      <rect x="60" y="168" width="680" height="44" rx="4" fill="none" stroke="#1A3A2A" strokeWidth="2" />
      <text x="400" y="185" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="8" letterSpacing="0.12em" opacity="0.6">DATA PLANE</text>

      {[
        { x: 180, label: 'Loader' },
        { x: 360, label: 'Normalizer' },
        { x: 580, label: 'Spine (SSOT)' },
      ].map((dp, i) => (
        <g key={i}>
          <rect x={dp.x - 55} y="192" width={110} height="14" rx="7" fill="#1A3A2A" opacity="0.06" />
          <rect x={dp.x - 55} y="192" width={110} height="14" rx="7" fill="none" stroke="#1A3A2A" strokeWidth="1" opacity="0.3" />
          <text x={dp.x} y="202" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="7.5" opacity="0.7">{dp.label}</text>
        </g>
      ))}

      {/* Flow down to external systems */}
      <line x1="400" y1="212" x2="400" y2="228" stroke="#1A3A2A" strokeWidth="1.5" className="layer-line" strokeDasharray="4 4" />
      <circle cx="400" cy="222" r="2.5" fill="#B8943F" className="flow-dot-up" style={{ animationDelay: '0.5s' }} />

      {/* === LAYER 4: External Systems (Bottom) === */}
      <text x="400" y="238" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="8" letterSpacing="0.18em" opacity="0.5">EXTERNAL SYSTEMS</text>

      {[
        { x: 70, label: 'Salesforce' },
        { x: 170, label: 'HubSpot' },
        { x: 270, label: 'Zendesk' },
        { x: 370, label: 'Slack' },
        { x: 470, label: 'Stripe' },
        { x: 570, label: 'Notion' },
        { x: 660, label: 'Database' },
        { x: 750, label: 'APIs' },
      ].map((sys, i) => (
        <g key={i}>
          <rect x={sys.x - 36} y="248" width={72} height="20" rx="3" fill="none" stroke="#1A3A2A" strokeWidth="1.2" opacity="0.5" />
          <text x={sys.x} y="261" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="7">{sys.label}</text>
        </g>
      ))}

      {/* Bidirectional arrows */}
      {[120, 220, 320, 420, 520, 620, 720].map((x, i) => (
        <g key={i} opacity="0.25">
          <line x1={x} y1="232" x2={x} y2="246" stroke="#1A3A2A" strokeWidth="1" strokeDasharray="2 2" />
          <polygon points={`${x-2},240 ${x+2},240 ${x},246`} fill="#1A3A2A" />
          <polygon points={`${x-2},238 ${x+2},238 ${x},232`} fill="#1A3A2A" />
        </g>
      ))}

      {/* Side labels */}
      <text x="12" y="120" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="6.5" letterSpacing="0.1em" opacity="0.4" transform="rotate(-90 12 120)">COORDINATION</text>
      <text x="12" y="195" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="6.5" letterSpacing="0.1em" opacity="0.4" transform="rotate(-90 12 195)">DATA</text>

      {/* Bottom tag */}
      <rect x="200" y="285" width="400" height="18" rx="9" fill="#1A3A2A" opacity="0.04" />
      <rect x="200" y="285" width="400" height="18" rx="9" fill="none" stroke="#1A3A2A" strokeWidth="0.8" opacity="0.2" />
      <text x="400" y="297" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="7" letterSpacing="0.12em" opacity="0.4">SYSTEMS OF RECORD STAY WHERE THEY ARE · INTEGRATEWISE COORDINATES</text>
    </svg>
  );
}
