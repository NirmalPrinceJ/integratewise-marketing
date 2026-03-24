import React, { useEffect, useState } from 'react';
import { Database, MessageSquare, Mail, CreditCard, LayoutDashboard, BrainCircuit } from 'lucide-react';

const tools = [
  { id: 'salesforce', icon: Database, color: 'text-blue-500', bg: 'bg-blue-500/10', label: 'Salesforce' },
  { id: 'slack', icon: MessageSquare, color: 'text-rose-500', bg: 'bg-rose-500/10', label: 'Slack' },
  { id: 'gmail', icon: Mail, color: 'text-amber-500', bg: 'bg-amber-500/10', label: 'Gmail' },
  { id: 'stripe', icon: CreditCard, color: 'text-indigo-500', bg: 'bg-indigo-500/10', label: 'Stripe' },
  { id: 'jira', icon: LayoutDashboard, color: 'text-cyan-500', bg: 'bg-cyan-500/10', label: 'Jira' },
];

export function AnimatedSpineFlow() {
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % tools.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full aspect-video bg-[#0F172A] rounded-2xl border border-page-border-dark overflow-hidden flex items-center justify-center p-8">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1B2544_1px,transparent_1px),linear-gradient(to_bottom,#1B2544_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      {/* Central Spine Node */}
      <div className="relative z-20 flex flex-col items-center justify-center">
        <div className="relative flex items-center justify-center w-24 h-24 bg-page-navy-dark rounded-2xl border border-page-primary/30 shadow-[0_0_40px_rgba(65,84,163,0.3)] z-10">
          <BrainCircuit className="w-12 h-12 text-page-primary animate-pulse" />
          
          {/* Pulsing ring around center */}
          <div className="absolute inset-0 rounded-2xl border-2 border-page-primary/40 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
        </div>
        <div className="absolute -bottom-8 font-bold text-white tracking-widest uppercase text-sm">Spine SSOT</div>
      </div>

      {/* Orbiting Tool Nodes */}
      {tools.map((tool, index) => {
        const radius = 160; // Distance from center
        const angle = (index * 2 * Math.PI) / tools.length - Math.PI / 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        const isActive = activeNode === index;

        return (
          <div key={tool.id} className="absolute z-10" style={{ transform: `translate(${x}px, ${y}px)` }}>
            {/* Connection Line to Center */}
            <svg className="absolute top-1/2 left-1/2 w-0 h-0 overflow-visible pointer-events-none -z-10">
              <line 
                x1="0" y1="0" 
                x2={-x} y2={-y} 
                stroke="rgba(255,255,255,0.1)" 
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              {/* Traveling Data Particle */}
              {isActive && (
                <circle r="4" fill="#10B981" className="shadow-[0_0_10px_#10B981]">
                  <animateMotion 
                    path={`M 0 0 L ${-x} ${-y}`} 
                    dur="1.5s" 
                    fill="freeze"
                    calcMode="spline"
                    keySplines="0.25 0.1 0.25 1.0"
                  />
                </circle>
              )}
            </svg>

            {/* Node UI */}
            <div className={`
              relative flex items-center justify-center w-14 h-14 rounded-xl 
              bg-[#1E293B] border 
              ${isActive ? `border-${tool.color.split('-')[1]}-500 shadow-[0_0_20px_var(--tw-shadow-color)] shadow-${tool.color.split('-')[1]}-500/40 scale-110` : 'border-slate-700/50 scale-100'}
              transition-all duration-500 ease-out
            `}>
              <div className={`p-2 rounded-lg ${tool.bg}`}>
                <tool.icon className={`w-6 h-6 ${tool.color}`} />
              </div>
              <div className="absolute -bottom-6 text-xs font-semibold text-slate-300 whitespace-nowrap opacity-80">
                {tool.label}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
