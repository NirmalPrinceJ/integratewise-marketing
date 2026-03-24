import React, { useEffect, useState } from 'react';
import { CheckCircle2, AlertTriangle, ShieldCheck, Zap } from 'lucide-react';

export function AnimatedApprovalUI() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        setStep(0); // Analyzing
        await new Promise(r => setTimeout(r, 2000));
        setStep(1); // Brief Ready
        await new Promise(r => setTimeout(r, 1500));
        setStep(2); // Human Approval
        await new Promise(r => setTimeout(r, 800));
        setStep(3); // Approved & Executing
        await new Promise(r => setTimeout(r, 3000));
      }
    };
    sequence();
  }, []);

  return (
    <div className="relative w-full aspect-video bg-[#0B1120] rounded-2xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col p-6 font-sans">
      
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
        <div className="flex gap-2 items-center text-slate-400 text-sm font-medium">
          <ShieldCheck className="w-5 h-5 text-page-primary" />
          <span>Governance Gateway</span>
        </div>
        <div className="flex items-center gap-2">
           <div className={`w-2 h-2 rounded-full ${step === 0 ? 'bg-amber-500 animate-pulse' : 'bg-emerald-500'}`} />
           <span className="text-xs text-slate-500 font-mono tracking-widest uppercase">
             {step === 0 ? 'Detecting Signals...' : 'System Active'}
           </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex gap-6">
        
        {/* Signal Panel */}
        <div className="w-1/3 border-r border-slate-800/50 pr-6 flex flex-col gap-4">
          <div className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">Live Signals</div>
          
          <div className={`p-3 rounded-lg border transition-all duration-500 ${step >= 1 ? 'bg-amber-500/10 border-amber-500/30' : 'bg-slate-800/30 border-slate-800/50 opacity-40'}`}>
            <div className="flex gap-2 mb-2">
              <AlertTriangle className={`w-4 h-4 ${step >= 1 ? 'text-amber-500' : 'text-slate-500'}`} />
              <span className={`text-xs font-bold ${step >= 1 ? 'text-amber-400' : 'text-slate-400'}`}>Churn Risk</span>
            </div>
            <div className="font-mono text-[10px] text-slate-400 space-y-1">
              <p>Zendesk: 3 severity-1 tickets</p>
              <p>Slack: Mentions of "renewal"</p>
            </div>
          </div>
        </div>

        {/* AI Brief & Action Panel */}
        <div className="flex-1 flex flex-col">
          <div className="text-[10px] font-bold tracking-widest text-page-primary uppercase mb-4">AI Execution Brief</div>
          
          <div className="flex-1 bg-[#0F172A] rounded-xl border border-slate-700/50 p-5 relative overflow-hidden flex flex-col">
            {step === 0 ? (
              <div className="m-auto flex flex-col items-center gap-4 opacity-50">
                <div className="w-8 h-8 rounded-full border-2 border-page-primary border-t-transparent animate-spin" />
                <span className="text-sm font-medium text-slate-400">Synthesizing context...</span>
              </div>
            ) : (
              <div className="flex flex-col h-full animate-fade-in-up">
                <h3 className="text-lg font-bold text-white mb-2">Automated Risk Mitigation: Acme Corp</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  Detected systemic login failures leading to renewal friction. AI proposes halting automated dunning emails and instantly notifying the assigned Enterprise CSM via high-priority Slack alert.
                </p>
                
                <div className="mt-auto pt-6 border-t border-slate-700/50 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Confidence</span>
                    <span className="text-emerald-400 font-mono font-bold">94.2%</span>
                  </div>
                  
                  <div className="flex gap-3 relative">
                    {/* Approve Action */}
                    <div className="relative group">
                      {step === 2 && (
                        <div className="absolute -inset-1 bg-emerald-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse" />
                      )}
                      
                      {step === 3 ? (
                        <div className="relative flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/50">
                          <CheckCircle2 className="w-4 h-4" />
                          <span className="text-sm font-bold">Approved & Executed</span>
                        </div>
                      ) : (
                        <button className="relative px-6 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold transition-colors shadow-lg shadow-emerald-900/40">
                          Approve Action
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Scanning Laser Line */}
            {step === 0 && (
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-page-primary to-transparent animate-[scan_2s_ease-in-out_infinite]" />
            )}
          </div>
        </div>

      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { transform: translateY(-10px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(200px); opacity: 0; }
        }
      `}} />
    </div>
  );
}
