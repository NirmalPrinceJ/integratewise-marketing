export default function TriageBotFlow() {
  return (
    <svg viewBox="0 0 720 280" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        .data-packet { animation: packetMove 3s linear infinite; }
        @keyframes packetMove {
          0% { transform: translate(0, 0); opacity: 0; }
          8% { opacity: 1; }
          92% { opacity: 1; }
          100% { transform: translate(90px, 0); opacity: 0; }
        }
        .data-packet-d { animation: packetMoveD 3s linear infinite; }
        @keyframes packetMoveD {
          0% { transform: translate(0, 0); opacity: 0; }
          8% { opacity: 1; }
          92% { opacity: 1; }
          100% { transform: translate(0, 55px); opacity: 0; }
        }
        .data-packet-h { animation: packetMoveH 3s linear infinite; }
        @keyframes packetMoveH {
          0% { transform: translate(0, 0); opacity: 0; }
          8% { opacity: 1; }
          92% { opacity: 1; }
          100% { transform: translate(65px, 0); opacity: 0; }
        }
        .gate-pulse { animation: gatePulse 2s ease-in-out infinite; }
        @keyframes gatePulse {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.3; }
        }
        .spine-flow { animation: spineFlow 2.5s linear infinite; }
        @keyframes spineFlow {
          0% { stroke-dashoffset: 20; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>
      <rect width="720" height="280" fill="#F5F0E8" />

      {/* INPUTS */}
      <text x="80" y="20" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="8" letterSpacing="0.15em" opacity="0.5">TOOL DATA</text>

      {/* Chat */}
      <rect x="25" y="32" width="90" height="30" rx="3" fill="none" stroke="#1A3A2A" strokeWidth="1.5" />
      <text x="70" y="50" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="8">SLACK MSG</text>
      <circle cx="70" cy="80" r="2.5" fill="#B8943F" className="data-packet-d" />

      {/* File */}
      <rect x="25" y="90" width="90" height="30" rx="3" fill="none" stroke="#1A3A2A" strokeWidth="1.5" />
      <text x="70" y="108" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="8">SF DEAL</text>
      <circle cx="70" cy="120" r="2.5" fill="#B8943F" className="data-packet-d" style={{ animationDelay: '0.5s' }} />

      {/* Form */}
      <rect x="25" y="130" width="90" height="30" rx="3" fill="none" stroke="#1A3A2A" strokeWidth="1.5" />
      <text x="70" y="148" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="8">NOTION</text>
      <circle cx="70" cy="140" r="2.5" fill="#B8943F" className="data-packet-d" style={{ animationDelay: '1s' }} />

      {/* Merge to Intake */}
      <line x1="115" y1="65" x2="155" y2="120" stroke="#1A3A2A" strokeWidth="1.5" strokeDasharray="3 2" />
      <line x1="115" y1="120" x2="155" y2="120" stroke="#1A3A2A" strokeWidth="1.5" />
      <line x1="115" y1="155" x2="155" y2="120" stroke="#1A3A2A" strokeWidth="1.5" strokeDasharray="3 2" />
      <polygon points="150,117 158,120 150,123" fill="#1A3A2A" />

      {/* INTAKE AGENT */}
      <rect x="160" y="95" width="110" height="50" rx="4" fill="#1A3A2A" opacity="0.1" />
      <rect x="160" y="95" width="110" height="50" rx="4" fill="none" stroke="#1A3A2A" strokeWidth="2" />
      <text x="215" y="115" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="8" letterSpacing="0.1em" fontWeight="500">INTAKE AGENT</text>
      <text x="215" y="130" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="7" opacity="0.6">Classifies & Routes</text>

      {/* Animated data from Intake to Processing */}
      <line x1="270" y1="110" x2="310" y2="110" stroke="#1A3A2A" strokeWidth="1.5" strokeDasharray="3 2" />
      <circle cx="285" cy="110" r="2.5" fill="#B8943F" className="data-packet" />
      <line x1="270" y1="120" x2="310" y2="120" stroke="#1A3A2A" strokeWidth="1.5" strokeDasharray="3 2" />
      <circle cx="285" cy="120" r="2.5" fill="#B8943F" className="data-packet" style={{ animationDelay: '0.5s' }} />
      <line x1="270" y1="130" x2="310" y2="130" stroke="#1A3A2A" strokeWidth="1.5" strokeDasharray="3 2" />
      <circle cx="285" cy="130" r="2.5" fill="#B8943F" className="data-packet" style={{ animationDelay: '1s' }} />

      {/* PROCESSING */}
      <text x="390" y="20" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="8" letterSpacing="0.15em" opacity="0.5">PROCESSING</text>

      <rect x="318" y="100" width="82" height="26" rx="3" fill="none" stroke="#1A3A2A" strokeWidth="1.5" />
      <text x="359" y="117" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="8">VALIDATE</text>

      <rect x="318" y="132" width="82" height="26" rx="3" fill="none" stroke="#1A3A2A" strokeWidth="1.5" />
      <text x="359" y="149" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="8">NORMALIZE</text>

      {/* Flow to Approval Gate */}
      <line x1="400" y1="129" x2="455" y2="129" stroke="#1A3A2A" strokeWidth="1.5" strokeDasharray="3 2" />
      <circle cx="420" cy="129" r="2.5" fill="#B8943F" className="data-packet-h" />

      {/* HUMAN APPROVAL GATE */}
      <rect x="460" y="108" width="120" height="42" rx="4" fill="#1A3A2A" className="gate-pulse" />
      <rect x="460" y="108" width="120" height="42" rx="4" fill="none" stroke="#1A3A2A" strokeWidth="2.5" />
      <text x="520" y="125" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="8" letterSpacing="0.12em" fontWeight="500">HUMAN APPROVAL</text>
      <text x="520" y="140" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="7" opacity="0.6">You Decide</text>

      {/* To Spine */}
      <line x1="580" y1="129" x2="625" y2="129" stroke="#1A3A2A" strokeWidth="1.5" strokeDasharray="3 2" />
      <circle cx="600" cy="129" r="2.5" fill="#B8943F" className="data-packet-h" style={{ animationDelay: '0.5s' }} />

      {/* SPINE WRITE */}
      <rect x="632" y="108" width="78" height="42" rx="4" fill="#1A3A2A" opacity="0.08" />
      <rect x="632" y="108" width="78" height="42" rx="4" fill="none" stroke="#1A3A2A" strokeWidth="2" />
      <text x="671" y="125" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="7" letterSpacing="0.08em" fontWeight="500">SPINE WRITE</text>
      <text x="671" y="140" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="6.5" opacity="0.4">Unified Truth</text>

      {/* Animated flow line from Spine back to tools */}
      <path d="M671 155 L671 180 L70 180 L70 165" fill="none" stroke="#1A3A2A" strokeWidth="1" strokeDasharray="4 4" className="spine-flow" opacity="0.3" />

      {/* Bottom tag */}
      <rect x="200" y="218" width="320" height="18" rx="9" fill="#1A3A2A" opacity="0.05" />
      <rect x="200" y="218" width="320" height="18" rx="9" fill="none" stroke="#1A3A2A" strokeWidth="1" opacity="0.3" />
      <text x="360" y="230" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="7.5" letterSpacing="0.1em" opacity="0.5">ALL DATA FLOWS THROUGH INTAKE → APPROVAL → SPINE</text>
    </svg>
  );
}
