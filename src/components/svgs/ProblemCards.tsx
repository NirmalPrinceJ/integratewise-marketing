export default function ProblemCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-heavy border-iw-rule">
      {/* Card A: Fragmented Apps */}
      <svg viewBox="0 0 260 200" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
        <style>{`
          .frag-icon { animation: fragFloat 3s ease-in-out infinite; }
          .frag-icon:nth-child(2) { animation-delay: 0.4s; }
          .frag-icon:nth-child(3) { animation-delay: 0.8s; }
          .frag-icon:nth-child(4) { animation-delay: 1.2s; }
          .frag-icon:nth-child(5) { animation-delay: 1.6s; }
          .frag-icon:nth-child(6) { animation-delay: 2.0s; }
          @keyframes fragFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
          }
          .frag-x { animation: fragPulse 2s ease-in-out infinite; }
          @keyframes fragPulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.8; }
          }
        `}</style>
        <rect width="260" height="200" fill="#F5F0E8" />
        <text x="130" y="22" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="8" letterSpacing="0.12em" opacity="0.5">FRAGMENTED APPS</text>
        {/* Scattered app icons - no connections */}
        <g className="frag-icon">
          <rect x="30" y="45" width="28" height="22" rx="3" fill="none" stroke="#8B2020" strokeWidth="1.5" opacity="0.7" />
          <text x="44" y="60" textAnchor="middle" fill="#8B2020" fontFamily="'IBM Plex Mono', monospace" fontSize="6">CRM</text>
        </g>
        <g className="frag-icon">
          <rect x="90" y="55" width="28" height="22" rx="3" fill="none" stroke="#1A3A2A" strokeWidth="1.5" opacity="0.5" />
          <text x="104" y="70" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="6">Slack</text>
        </g>
        <g className="frag-icon">
          <rect x="150" y="42" width="28" height="22" rx="3" fill="none" stroke="#1A3A2A" strokeWidth="1.5" opacity="0.4" />
          <text x="164" y="57" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="6">Docs</text>
        </g>
        <g className="frag-icon">
          <rect x="60" y="95" width="28" height="22" rx="3" fill="none" stroke="#1A3A2A" strokeWidth="1.5" opacity="0.6" />
          <text x="74" y="110" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="6">Email</text>
        </g>
        <g className="frag-icon">
          <rect x="120" y="105" width="28" height="22" rx="3" fill="none" stroke="#8B2020" strokeWidth="1.5" opacity="0.5" />
          <text x="134" y="120" textAnchor="middle" fill="#8B2020" fontFamily="'IBM Plex Mono', monospace" fontSize="6">Tasks</text>
        </g>
        <g className="frag-icon">
          <rect x="180" y="88" width="28" height="22" rx="3" fill="none" stroke="#1A3A2A" strokeWidth="1.5" opacity="0.3" />
          <text x="194" y="103" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="6">Chat</text>
        </g>
        {/* X marks between them - no connections */}
        <g className="frag-x">
          <line x1="70" y1="72" x2="85" y2="87" stroke="#8B2020" strokeWidth="1.2" />
          <line x1="85" y1="72" x2="70" y2="87" stroke="#8B2020" strokeWidth="1.2" />
        </g>
        <g className="frag-x">
          <line x1="130" y1="68" x2="145" y2="83" stroke="#8B2020" strokeWidth="1.2" />
          <line x1="145" y1="68" x2="130" y2="83" stroke="#8B2020" strokeWidth="1.2" />
        </g>
        <g className="frag-x">
          <line x1="95" y1="122" x2="110" y2="137" stroke="#8B2020" strokeWidth="1.2" />
          <line x1="110" y1="122" x2="95" y2="137" stroke="#8B2020" strokeWidth="1.2" />
        </g>
        <text x="130" y="175" textAnchor="middle" fill="#8B2020" fontFamily="'IBM Plex Mono', monospace" fontSize="8" letterSpacing="0.1em" opacity="0.7">NO SHARED DATA</text>
      </svg>

      {/* Card B: 12 Tab Context Switching */}
      <svg viewBox="0 0 260 200" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
        <style>{`
          .tab { animation: tabFlicker 2.5s ease-in-out infinite; }
          .tab:nth-child(2) { animation-delay: 0.3s; }
          .tab:nth-child(3) { animation-delay: 0.6s; }
          .tab:nth-child(4) { animation-delay: 0.9s; }
          .tab:nth-child(5) { animation-delay: 1.2s; }
          @keyframes tabFlicker {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
          }
          .cursor { animation: cursorJump 2s ease-in-out infinite; }
          @keyframes cursorJump {
            0% { transform: translate(0, 0); }
            25% { transform: translate(40px, -10px); }
            50% { transform: translate(80px, 5px); }
            75% { transform: translate(120px, -15px); }
            100% { transform: translate(0, 0); }
          }
        `}</style>
        <rect width="260" height="200" fill="#F5F0E8" />
        <text x="130" y="22" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="8" letterSpacing="0.12em" opacity="0.5">CONTEXT SWITCHING</text>
        {/* Browser tabs */}
        <g className="tab"><rect x="20" y="38" width="42" height="16" rx="2" fill="none" stroke="#1A3A2A" strokeWidth="1.2" /><text x="41" y="49" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="5">CRM</text></g>
        <g className="tab"><rect x="68" y="38" width="42" height="16" rx="2" fill="none" stroke="#1A3A2A" strokeWidth="1.2" /><text x="89" y="49" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="5">Slack</text></g>
        <g className="tab"><rect x="116" y="38" width="42" height="16" rx="2" fill="none" stroke="#1A3A2A" strokeWidth="1.2" /><text x="137" y="49" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="5">Docs</text></g>
        <g className="tab"><rect x="164" y="38" width="42" height="16" rx="2" fill="none" stroke="#1A3A2A" strokeWidth="1.2" /><text x="185" y="49" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="5">Email</text></g>
        <g className="tab"><rect x="20" y="60" width="42" height="16" rx="2" fill="none" stroke="#8B2020" strokeWidth="1.2" /><text x="41" y="71" textAnchor="middle" fill="#8B2020" fontFamily="'IBM Plex Mono', monospace" fontSize="5">Tasks</text></g>
        <g className="tab"><rect x="68" y="60" width="42" height="16" rx="2" fill="none" stroke="#1A3A2A" strokeWidth="1.2" /><text x="89" y="71" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="5">Chat</text></g>
        <g className="tab"><rect x="116" y="60" width="42" height="16" rx="2" fill="none" stroke="#1A3A2A" strokeWidth="1.2" /><text x="137" y="71" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="5">Drive</text></g>
        <g className="tab"><rect x="164" y="60" width="42" height="16" rx="2" fill="none" stroke="#1A3A2A" strokeWidth="1.2" /><text x="185" y="71" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="5">Cal</text></g>
        {/* Jumping cursor */}
        <g className="cursor">
          <polygon points="35,95 35,108 38,103 43,103" fill="#8B2020" opacity="0.6" />
        </g>
        {/* Disconnected content blocks */}
        <rect x="30" y="120" width="70" height="30" rx="2" fill="none" stroke="#1A3A2A" strokeWidth="1" opacity="0.3" />
        <line x1="40" y1="130" x2="90" y2="130" stroke="#1A3A2A" strokeWidth="1" opacity="0.2" />
        <line x1="40" y1="138" x2="80" y2="138" stroke="#1A3A2A" strokeWidth="1" opacity="0.2" />
        <rect x="110" y="115" width="60" height="25" rx="2" fill="none" stroke="#1A3A2A" strokeWidth="1" opacity="0.2" />
        <rect x="180" y="125" width="50" height="20" rx="2" fill="none" stroke="#1A3A2A" strokeWidth="1" opacity="0.15" />
        <text x="130" y="175" textAnchor="middle" fill="#8B2020" fontFamily="'IBM Plex Mono', monospace" fontSize="8" letterSpacing="0.1em" opacity="0.7">12 TABS. NO CONNECTION.</text>
      </svg>

      {/* Card C: Broken Continuity */}
      <svg viewBox="0 0 260 200" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
        <style>{`
          .dot { animation: dotFlow 2s linear infinite; }
          @keyframes dotFlow {
            0% { transform: translateX(0); opacity: 1; }
            45% { transform: translateX(90px); opacity: 1; }
            50% { transform: translateX(95px); opacity: 0; }
            100% { transform: translateX(0); opacity: 0; }
          }
          .broken-line { animation: lineBreak 2s ease-in-out infinite; }
          @keyframes lineBreak {
            0%, 40% { stroke-dasharray: 120; stroke-dashoffset: 0; }
            50%, 100% { stroke-dasharray: 50 70; stroke-dashoffset: 0; }
          }
          .spark { animation: sparkFlash 2s ease-in-out infinite; }
          @keyframes sparkFlash {
            0%, 45% { opacity: 0; }
            50% { opacity: 1; }
            55%, 100% { opacity: 0; }
          }
        `}</style>
        <rect width="260" height="200" fill="#F5F0E8" />
        <text x="130" y="22" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="8" letterSpacing="0.12em" opacity="0.5">BROKEN CONTINUITY</text>
        {/* Data flow that breaks */}
        <rect x="30" y="70" width="50" height="30" rx="3" fill="none" stroke="#1A3A2A" strokeWidth="1.5" />
        <text x="55" y="89" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="7">Start</text>
        {/* Flowing line */}
        <line x1="80" y1="85" x2="170" y2="85" stroke="#1A3A2A" strokeWidth="2" className="broken-line" />
        {/* Break point */}
        <g className="spark">
          <line x1="165" y1="78" x2="175" y2="92" stroke="#8B2020" strokeWidth="2" />
          <line x1="175" y1="78" x2="165" y2="92" stroke="#8B2020" strokeWidth="2" />
        </g>
        {/* Lost data dots */}
        <circle cx="100" cy="82" r="2.5" fill="#B8943F" className="dot" />
        <circle cx="100" cy="88" r="2" fill="#B8943F" className="dot" style={{ animationDelay: '0.3s' }} />
        <circle cx="100" cy="85" r="1.5" fill="#B8943F" className="dot" style={{ animationDelay: '0.6s' }} />
        {/* End point - never reached */}
        <rect x="180" y="70" width="50" height="30" rx="3" fill="none" stroke="#1A3A2A" strokeWidth="1.5" opacity="0.3" />
        <text x="205" y="89" textAnchor="middle" fill="#1A3A2A" fontFamily="'IBM Plex Mono', monospace" fontSize="7" opacity="0.4">End</text>
        {/* Arrow attempt */}
        <polygon points="160,82 168,85 160,88" fill="#8B2020" opacity="0.5" />
        {/* Timeline below showing discontinuity */}
        <line x1="40" y1="140" x2="120" y2="140" stroke="#1A3A2A" strokeWidth="2" />
        <line x1="140" y1="140" x2="220" y2="140" stroke="#1A3A2A" strokeWidth="2" opacity="0.3" />
        <circle cx="40" cy="140" r="4" fill="#1A3A2A" />
        <circle cx="80" cy="140" r="4" fill="#1A3A2A" />
        <circle cx="120" cy="140" r="4" fill="#1A3A2A" />
        <circle cx="140" cy="140" r="4" fill="#1A3A2A" opacity="0.3" />
        <circle cx="180" cy="140" r="4" fill="#1A3A2A" opacity="0.3" />
        <circle cx="220" cy="140" r="4" fill="#1A3A2A" opacity="0.3" />
        {/* Gap */}
        <line x1="124" y1="134" x2="136" y2="146" stroke="#8B2020" strokeWidth="1.5" />
        <line x1="136" y1="134" x2="124" y2="146" stroke="#8B2020" strokeWidth="1.5" />
        <text x="130" y="175" textAnchor="middle" fill="#8B2020" fontFamily="'IBM Plex Mono', monospace" fontSize="8" letterSpacing="0.1em" opacity="0.7">DATA LOST IN TRANSIT</text>
      </svg>
    </div>
  );
}
