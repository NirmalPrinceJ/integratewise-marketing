import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Layers,
  Database,
  Brain,
  UserCircle,
  ShieldCheck,
  Zap,
  Network,
  Target,
  ArrowDown,
  CheckCircle2,
  Briefcase,
  Cpu,
  Eye,
  GitBranch,
  Settings,
  Users,
  FileText,
  BarChart3,
  MessageSquare,
  Bot,
} from "lucide-react";
// Mock spine client functions since they are missing in the marketing site
const fetchSpineMetadata = async (tenantId: string) => ({ entityCounts: { test: 100 } });
const initializeSpine = async (data: any) => {};
const fetchReadiness = async (tenantId: string) => ({});
const fetchHITLQueue = async (tenantId: string) => ([]);
const useApiFetch = () => ({ data: null, error: null, isLoading: false });

const fetchIntelligenceRun = (tenantId: string) => 
  fetch(`https://hrrbciljsqxnmuwwnrnt.supabase.co/functions/v1/make-server-e3b03387/intelligence/run-cycle`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ tenantId })
  }).then(r => r.json());

export function ArchitectureVisualization() {
  const [stats, setStats] = useState({
    eventsPerMin: "1,247",
    spineEntities: "2,847",
    corrections: "847",
    pendingTasks: "23",
    schemaMatch: "99.4%",
    connectorCount: "12",
  });

  const [isRunning, setIsRunning] = useState(false);
  const [lastResult, setLastResult] = useState<any>(null);

  const runIntelligence = async () => {
    setIsRunning(true);
    try {
      const res = await fetchIntelligenceRun("demo-visualizer");
      setLastResult(res);
      setStats(prev => ({
         ...prev,
         pendingTasks: (parseInt(prev.pendingTasks) + (res.riskCount || 0) + (res.expansionCount || 0)).toString(),
         corrections: (parseInt(prev.corrections) + Math.floor(Math.random() * 5) + 1).toString()
      }));
    } catch (e) {
      console.error(e);
    } finally {
      setIsRunning(false);
    }
  };

  useEffect(() => {
    // Call the Intelligence API to get real stats (mock/seed data from Supabase)
    const loadIntelligence = async () => {
      try {
        const tenantId = "demo-visualizer";
        // Ensure data is seeded
        await initializeSpine({
          connectedApps: ["salesforce", "hubspot", "jira", "slack", "stripe"],
          userName: "Demo User",
          role: "visualizer",
          tenantId
        });

        const [metadata, readiness, hitlQueue] = await Promise.all([
          fetchSpineMetadata(tenantId),
          fetchReadiness(tenantId),
          fetchHITLQueue(tenantId)
        ]);

        if (metadata?.entityCounts) {
           const totalEntities = Object.values(metadata.entityCounts).reduce((a: any, b: any) => a + b, 0);
           const pendingCount = hitlQueue ? hitlQueue.filter((p: any) => p.status === "PENDING").length : 0;
           
           setStats({
             eventsPerMin: "1,247", // Hardcoded for now as we don't simulate real-time event stream yet
             spineEntities: totalEntities.toLocaleString(),
             corrections: Math.floor(totalEntities * 0.15).toLocaleString(), // Simulated intelligence ratio
             pendingTasks: pendingCount.toString(),
             schemaMatch: "99.4%",
             connectorCount: "5", // Based on the seeded apps
           });
        }
      } catch (err) {
        console.error("Failed to load intelligence stats:", err);
      }
    };
    
    loadIntelligence();
  }, []);

  return (
    <div className="w-full h-full bg-[#0B0C10] p-6 md:p-10 flex flex-col items-center justify-start font-sans overflow-auto selection:bg-[#4ADE80]/30">
      <div className="w-full max-w-5xl">
        {/* Title */}
        <div className="text-center mb-10 relative">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4ADE80] mb-3">
            IntegrateWise OS — System Architecture
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
            What if everything you use... <br className="hidden md:block" />
            <span className="text-[#4ADE80]">actually knew each other?</span>
          </h2>
          <p className="text-xs text-slate-400 mt-2 max-w-lg mx-auto mb-6 leading-relaxed">
            From raw connector events to governed human action — every layer has a strict boundary and clear responsibility.
          </p>
          
          <div className="flex flex-col items-center gap-4">
            <button 
               onClick={runIntelligence}
               disabled={isRunning}
               className="group relative bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold px-6 py-3 rounded-full disabled:opacity-50 transition-all shadow-xl backdrop-blur-sm flex items-center gap-2"
            >
               <div className={`absolute inset-0 rounded-full border border-[#4ADE80]/30 opacity-0 group-hover:opacity-100 transition-opacity ${isRunning ? "animate-pulse" : ""}`} />
               {isRunning ? <span className="animate-spin text-[#4ADE80]">⟳</span> : <Zap className="w-3.5 h-3.5 text-[#4ADE80]" />}
               <span className="relative z-10">{isRunning ? "Scanning Spine..." : "Run Intelligence Cycle"}</span>
            </button>
            
            {lastResult && (
               <motion.div 
                 initial={{ opacity: 0, y: -10 }} 
                 animate={{ opacity: 1, y: 0 }}
                 className="flex items-center gap-3 bg-[#111] border border-[#333] px-4 py-2 rounded-lg"
               >
                  <div className="w-2 h-2 rounded-full bg-[#EF4444] animate-pulse" />
                  <span className="text-[10px] text-slate-300 font-mono">
                    Found <span className="text-[#EF4444] font-bold">{lastResult.riskCount} risks</span>, <span className="text-[#F59E0B] font-bold">{lastResult.expansionCount} expansion opps</span>. Tasks generated.
                  </span>
               </motion.div>
            )}
          </div>
        </div>

        {/* Architecture Stack */}
        <div className="relative flex flex-col gap-1">
          {/* ═══════════════════ LAYER 5: WORK LAYER ═══════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0 }}
            className="relative z-50"
          >
            <div className="bg-[#151515] rounded-t-2xl p-6 text-white border border-[#333] border-b-0 shadow-2xl relative overflow-hidden group hover:bg-[#1A1A1A] transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#F59E0B] to-[#EF4444]" />
              
              <div className="flex items-start gap-5">
                {/* Layer badge */}
                <div className="flex flex-col items-center gap-1.5 shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-[#222] border border-[#333] flex items-center justify-center shadow-inner">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[9px] font-black text-[#555] px-2">L5</span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1.5">
                    <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-[#F59E0B] transition-colors">Work Layer</h3>
                    <span className="text-[9px] font-bold uppercase tracking-wider bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20 rounded-full px-2.5 py-0.5">
                      Human Execution
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mb-4 max-w-2xl">
                    Where insights become work. Prioritized actions, task queues, and governed execution — nothing runs without human approval.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { icon: CheckCircle2, label: "Task Queue", detail: `${stats.pendingTasks} pending`, color: "text-[#EF4444]" },
                      { icon: ShieldCheck, label: "Approval Gate", detail: "HITL required", color: "text-[#F59E0B]" },
                      { icon: Users, label: "Team Actions", detail: "156 /month", color: "text-slate-400" },
                      { icon: BarChart3, label: "Execution Log", detail: "Auditable", color: "text-slate-400" },
                    ].map((item, i) => (
                      <div key={i} className="bg-black/40 border border-[#333] rounded-lg p-3 flex items-center gap-3 hover:border-[#555] transition-colors">
                        <item.icon className={`w-4 h-4 shrink-0 ${item.color}`} />
                        <div>
                          <div className="text-[10px] font-bold text-slate-300">{item.label}</div>
                          <div className="text-[8px] text-slate-600 font-mono">{item.detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Flow arrow */}
          <FlowArrow label="Governed actions flow up" />

          {/* ═══════════════════ LAYER 4: COGNITIVE LAYER ═══════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative z-40"
          >
            <div className="bg-[#151515] p-6 text-white border-x border-[#333] shadow-2xl relative overflow-hidden group hover:bg-[#1A1A1A] transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#4ADE80]" />
              
              <div className="flex items-start gap-5">
                <div className="flex flex-col items-center gap-1.5 shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-[#222] border border-[#333] flex items-center justify-center shadow-inner">
                    <Cpu className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[9px] font-black text-[#555] px-2">L4</span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1.5">
                    <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-[#4ADE80] transition-colors">Cognitive Layer</h3>
                    <span className="text-[9px] font-bold uppercase tracking-wider bg-[#4ADE80]/10 text-[#4ADE80] border border-[#4ADE80]/20 rounded-full px-2.5 py-0.5">
                      UI & Operational Loops
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mb-4 max-w-2xl">
                    Context-aware dashboards, AI chat loops, and interactive decision surfaces. Where humans interact with intelligence.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { icon: Eye, label: "Dashboards", detail: "Context-aware", color: "text-[#4ADE80]" },
                      { icon: Bot, label: "AI Chat / Think", detail: "Session memory", color: "text-[#4ADE80]" },
                      { icon: MessageSquare, label: "Decision UI", detail: "Interactive", color: "text-slate-400" },
                      { icon: GitBranch, label: "Workflow Canvas", detail: "Visual builder", color: "text-slate-400" },
                    ].map((item, i) => (
                      <div key={i} className="bg-black/40 border border-[#333] rounded-lg p-3 flex items-center gap-3 hover:border-[#555] transition-colors">
                        <item.icon className={`w-4 h-4 shrink-0 ${item.color}`} />
                        <div>
                          <div className="text-[10px] font-bold text-slate-300">{item.label}</div>
                          <div className="text-[8px] text-slate-600 font-mono">{item.detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Flow arrow */}
          <FlowArrow label="Situations rendered as decisions" />

          {/* ═══════════════════ LAYER 3: INTELLIGENCE LAYER ═══════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative z-30"
          >
            <div className="bg-[#151515] p-6 text-white border-x border-[#333] shadow-2xl relative overflow-hidden group hover:bg-[#1A1A1A] transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#A855F7]" />
              
              <div className="flex items-start gap-5">
                <div className="flex flex-col items-center gap-1.5 shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-[#222] border border-[#333] flex items-center justify-center shadow-inner">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[9px] font-black text-[#555] px-2">L3</span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1.5">
                    <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-[#A855F7] transition-colors">Intelligence Layer</h3>
                    <span className="text-[9px] font-bold uppercase tracking-wider bg-[#A855F7]/10 text-[#A855F7] border border-[#A855F7]/20 rounded-full px-2.5 py-0.5">
                      Think Engine
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mb-4 max-w-2xl">
                    AI reasoning on Spine data. Edge corrections, dual-context analysis, situation convergence, and goal alignment.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { icon: Brain, label: "Think Engine", detail: `${stats.corrections} corrections`, color: "text-[#A855F7]" },
                      { icon: Target, label: "Goal Alignment", detail: "Dual-context", color: "text-slate-400" },
                      { icon: Zap, label: "Situation Engine", detail: "Convergence", color: "text-slate-400" },
                      { icon: Settings, label: "Edge Correction", detail: "Self-learning", color: "text-[#A855F7]" },
                    ].map((item, i) => (
                      <div key={i} className="bg-black/40 border border-[#333] rounded-lg p-3 flex items-center gap-3 hover:border-[#555] transition-colors">
                        <item.icon className={`w-4 h-4 shrink-0 ${item.color}`} />
                        <div>
                          <div className="text-[10px] font-bold text-slate-300">{item.label}</div>
                          <div className="text-[8px] text-slate-600 font-mono">{item.detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Flow arrow */}
          <FlowArrow label="Structured truth feeds reasoning" />

          {/* ═══════════════════ LAYER 2: TRUTH LAYER ═══════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative z-20"
          >
            <div className="bg-[#151515] p-6 text-white border-x border-[#333] shadow-2xl relative overflow-hidden group hover:bg-[#1A1A1A] transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#3B82F6]" />
              
              <div className="flex items-start gap-5">
                <div className="flex flex-col items-center gap-1.5 shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-[#222] border border-[#333] flex items-center justify-center shadow-inner">
                    <Database className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[9px] font-black text-[#555] px-2">L2</span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1.5">
                    <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-[#3B82F6] transition-colors">Truth Layer</h3>
                    <span className="text-[9px] font-bold uppercase tracking-wider bg-[#3B82F6]/10 text-[#3B82F6] border border-[#3B82F6]/20 rounded-full px-2.5 py-0.5">
                      The Spine (SSOT)
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mb-4 max-w-2xl">
                    Canonical Spine — single source of truth. Cross-tool entity matching, provenance tracking, schema enforcement, and digital twin.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { icon: Database, label: "Canonical Spine", detail: `${stats.spineEntities} entities`, color: "text-[#3B82F6]" },
                      { icon: Layers, label: "Digital Twin", detail: "Multi-source", color: "text-slate-400" },
                      { icon: FileText, label: "Evidence Drawer", detail: "Provenance", color: "text-slate-400" },
                      { icon: GitBranch, label: "Schema Health", detail: stats.schemaMatch, color: "text-[#4ADE80]" },
                    ].map((item, i) => (
                      <div key={i} className="bg-black/40 border border-[#333] rounded-lg p-3 flex items-center gap-3 hover:border-[#555] transition-colors">
                        <item.icon className={`w-4 h-4 shrink-0 ${item.color}`} />
                        <div>
                          <div className="text-[10px] font-bold text-slate-300">{item.label}</div>
                          <div className="text-[8px] text-slate-600 font-mono">{item.detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Flow arrow */}
          <FlowArrow label="Normalized events become entities" />

          {/* ═══════════════════ LAYER 1: PLATFORM LAYER ═══════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative z-10"
          >
            <div className="bg-[#151515] rounded-b-2xl p-6 text-white border border-[#333] border-t-0 shadow-2xl relative overflow-hidden group hover:bg-[#1A1A1A] transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#94A3B8]" />
              
              <div className="flex items-start gap-5">
                <div className="flex flex-col items-center gap-1.5 shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-[#222] border border-[#333] flex items-center justify-center shadow-inner">
                    <Network className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[9px] font-black text-[#555] px-2">L1</span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1.5">
                    <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-white transition-colors">Platform Layer</h3>
                    <span className="text-[9px] font-bold uppercase tracking-wider bg-[#333] text-slate-400 border border-[#444] rounded-full px-2.5 py-0.5">
                      Infrastructure & Connectors
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mb-4 max-w-2xl">
                    Raw event ingestion from all connected tools. Webhook validation, deduplication, auth, and governance infrastructure.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { icon: Network, label: "Connector Hub", detail: `${stats.connectorCount} tools`, color: "text-slate-300" },
                      { icon: ShieldCheck, label: "Auth & RBAC", detail: "Multi-tenant", color: "text-slate-300" },
                      { icon: Settings, label: "Governance", detail: "Audit trail", color: "text-slate-500" },
                      { icon: Zap, label: "Event Stream", detail: `${stats.eventsPerMin}/min`, color: "text-[#F59E0B]" },
                    ].map((item, i) => (
                      <div key={i} className="bg-black/40 border border-[#333] rounded-lg p-3 flex items-center gap-3 hover:border-[#555] transition-colors">
                        <item.icon className={`w-4 h-4 shrink-0 ${item.color}`} />
                        <div>
                          <div className="text-[10px] font-bold text-slate-300">{item.label}</div>
                          <div className="text-[8px] text-slate-600 font-mono">{item.detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right-side flow spine */}
          <div className="absolute right-8 top-6 bottom-6 w-[1px] bg-gradient-to-b from-[#EF4444] via-[#4ADE80] to-[#3B82F6] opacity-20 hidden md:block dashed-line" />
        </div>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-between w-full text-[9px] font-mono text-[#444] uppercase tracking-[0.15em] border-t border-[#222] pt-4">
          <span>Normalize Once. Render Anywhere.</span>
          <span>IntegrateWise OS v4.2.0</span>
        </div>
      </div>
    </div>
  );
}

function FlowArrow({ label, color }: { label?: string; color?: string }) {
  return (
    <div className="flex items-center justify-center py-0 relative z-0 -my-1">
      <div className="flex items-center gap-2 bg-[#000] px-3 py-1 rounded-full border border-[#222] shadow-sm z-10">
        <ArrowDown className="w-2.5 h-2.5 text-[#444]" />
        {label && <span className="text-[7px] font-bold text-[#444] uppercase tracking-wider">{label}</span>}
        <ArrowDown className="w-2.5 h-2.5 text-[#444] rotate-180" />
      </div>
      <div className="absolute inset-0 flex justify-center items-center -z-10">
        <div className="h-full w-[1px] bg-[#222]"></div>
      </div>
    </div>
  );
}
