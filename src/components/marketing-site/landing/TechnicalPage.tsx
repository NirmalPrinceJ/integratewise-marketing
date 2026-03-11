import React from "react";
import { motion } from "motion/react";
import { Repeat, ShieldCheck, Database, LayoutPanelTop, Search, BrainCircuit, Activity, Zap, Brain, FileText, CheckCircle, Briefcase, Cpu } from "lucide-react";
import { DifferentiatorsDetail } from "./DifferentiatorsDetail";
import { ArchitectureVisualization } from "../architecture-visualization";
import { Logo } from "./logo";

export function TechnicalPage() {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Above the fold */}
        <div className="text-center mb-16 md:mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl lg:text-6xl font-black text-[#0f1a15] mb-6 md:mb-8"
          >
            Under the hood: An OS for <br className="hidden md:block" />
            <span className="text-[#10b981]">AI-Native Integration Intelligence</span>
          </motion.h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            From raw events to growth-aligned insights — with humans in the loop at every step. Built on a strict four-layer architecture.
          </p>
          <button
            onClick={() => { window.location.hash = "app"; }}
            className="inline-flex items-center gap-2 bg-[#059669] text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all"
          >
            <Zap className="w-5 h-5" /> Launch the workspace
          </button>
        </div>

        {/* Brand & Architecture Spec Visualization */}
        <section className="mb-20 md:mb-32">
          <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white h-[600px] md:h-[800px] relative">
            <ArchitectureVisualization />
          </div>
          <p className="text-center text-xs text-slate-400 mt-4 font-medium">Beyond Integration: The IntegrateWise AI-Native Operating System — Architecture Specification</p>
        </section>

        {/* IntegrateWise OS Architecture */}
        <section className="mb-20 md:mb-32">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0f1a15] mb-4">The IntegrateWise OS</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">Normalize Once. Render Anywhere. A Cognitive Operating System for Governed Execution.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Database className="w-5 h-5" />, title: "Business Data", desc: "Data sources, raw records, and foundational records flow into the unified spine.", color: "bg-[#059669]" },
              { icon: <Brain className="w-5 h-5" />, title: "Think Engine", desc: "Converges structured truth, unstructured context, and AI reasoning into situations.", color: "bg-[#7B5EA7]" },
              { icon: <FileText className="w-5 h-5" />, title: "Documents Hub", desc: "Emails, docs, chats, meeting notes — mapped with knowledge links and relationship tracking.", color: "bg-[#3D8B6E]" },
              { icon: <ShieldCheck className="w-5 h-5" />, title: "Governance Gate", desc: "Nothing executes without approval. Policy compliance, risk assessment, and human sign-off.", color: "bg-[#D4883E]" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm hover:shadow-md transition-all">
                <div className={`w-10 h-10 rounded-lg ${item.color} text-white flex items-center justify-center mb-3`}>{item.icon}</div>
                <h4 className="font-bold text-sm text-[#0f1a15] mb-1">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Intelligence Loop */}
        <section className="mb-20 md:mb-32">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0f1a15] mb-4">Intelligence is not a dashboard. It's a loop.</h2>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto">Separate and preserve three planes → Converge into explainable situations → Gate with governance → Nothing executes without approval.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Truth (Structured SSOT)", desc: "Product catalog, customer data, order history, employee records, financial metrics — all unified with provenance.", color: "bg-[#7B5EA7]", items: ["Canonical entities", "Schema enforcement", "Cross-tool matching"] },
              { title: "Context (Evidence Artifacts)", desc: "Semantic documents, meeting notes, support threads — everything that gives context to the numbers.", color: "bg-[#059669]", items: ["Relationship mapping", "Situational awareness", "Evidence chains"] },
              { title: "IQ Hub (AI Session Memory)", desc: "What your team asks AI about work. Temporal context, model configurations, and human corrections feed the loop.", color: "bg-[#3D8B6E]", items: ["AI conversations", "Human corrections", "Model tuning history"] },
            ].map((plane, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-all">
                <div className={`w-full h-1.5 rounded-full ${plane.color} mb-4`} />
                <h4 className="font-bold text-[#0f1a15] mb-2">{plane.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{plane.desc}</p>
                <div className="space-y-2">
                  {plane.items.map((item, j) => (
                    <div key={j} className="flex items-center gap-2 text-xs text-slate-400">
                      <CheckCircle className="w-3 h-3 text-emerald-500" />{item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Five-Layer Architecture */}
        <section className="mb-20 md:mb-32">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0f1a15] text-center mb-4">The Five-Layer Architecture</h2>
          <p className="text-center text-slate-500 mb-10 md:mb-14 max-w-2xl mx-auto">Every piece of data flows through five strictly separated layers — from raw reality to governed human action.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                layer: "01", name: "Platform Layer", icon: <Activity className="w-6 h-6" />,
                color: "bg-[#D4883E]", borderColor: "border-[#D4883E]/20",
                desc: "Ingests raw events from all connected tools. Deduplication, webhook validation, and event normalization.",
                items: ["1,247 events/min", "99.7% dedup rate", "6 sources live"],
              },
              {
                layer: "02", name: "Truth Layer", icon: <Database className="w-6 h-6" />,
                color: "bg-[#059669]", borderColor: "border-[#059669]/20",
                desc: "The Canonical Spine — single source of truth. Cross-tool entity matching, provenance tracking, and schema enforcement.",
                items: ["2,847 spine entities", "99.4% match rate", "12 orphan records"],
              },
              {
                layer: "03", name: "Intelligence Layer", icon: <BrainCircuit className="w-6 h-6" />,
                color: "bg-[#7B5EA7]", borderColor: "border-[#7B5EA7]/20",
                desc: "AI reasoning on Spine data. Edge corrections, dual-context analysis, and goal alignment — governed by HITL.",
                items: ["847 corrections", "91.3% schema health", "Dual-context scoring"],
              },
              {
                layer: "04", name: "Cognitive Layer", icon: <Cpu className="w-6 h-6" />,
                color: "bg-[#3D8B6E]", borderColor: "border-[#3D8B6E]/20",
                desc: "Context-aware dashboards, AI chat loops, and interactive decision surfaces where humans interact with intelligence.",
                items: ["Decision surfaces", "AI Chat / Think", "Session memory"],
              },
              {
                layer: "05", name: "Work Layer", icon: <Briefcase className="w-6 h-6" />,
                color: "bg-[#0f1a15]", borderColor: "border-[#0f1a15]/20",
                desc: "Where insights become governed action. Prioritized task queues, human approval gates, and auditable execution logs.",
                items: ["23 pending review", "156 approved/month", "7 auto-blocked"],
              },
            ].map((l, i) => (
              <div key={i} className={`rounded-2xl border ${l.borderColor} bg-white p-6 shadow-sm hover:shadow-xl transition-all group`}>
                <div className={`w-12 h-12 ${l.color} rounded-xl text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {l.icon}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-black px-2 py-0.5 rounded text-white ${l.color}`}>{l.layer}</span>
                  <h3 className="text-base font-bold text-[#0f1a15]">{l.name}</h3>
                </div>
                <p className="text-sm text-slate-500 mb-4 leading-relaxed">{l.desc}</p>
                <div className="space-y-1">
                  {l.items.map((item, j) => (
                    <div key={j} className="text-[10px] font-bold text-slate-400 flex items-center gap-1.5">
                      <div className={`w-1 h-1 rounded-full ${l.color}`} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Universal Loop */}
        <section className="mb-20 md:mb-32">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-extrabold text-[#4152A1] mb-6">The Universal Loop: From reality to work</h2>
              <div className="space-y-6">
                <LoopStep step="1" title="Reality" desc="Events from your tools (CRM, CS, product usage, billing, support)." />
                <LoopStep step="2" title="Truth + Context + AI" desc="We unify structured Spine entities, unstructured semantic info, and AI reasoning." />
                <LoopStep step="3" title="Intelligence" desc="We map everything to Goals → Metrics → KPIs, aligned to growth." />
                <LoopStep step="4" title="Work & Approval" desc="Prioritized insights in existing tools + Human-in-the-loop approval loops." />
              </div>
            </div>
            <div className="lg:w-1/2 bg-slate-50 p-6 md:p-12 rounded-3xl md:rounded-[40px] border border-slate-100 flex items-center justify-center">
               <div className="relative w-full aspect-square max-w-sm mx-auto flex items-center justify-center">
                  <div className="absolute inset-0 border-[2px] border-dashed border-[#4256AB]/20 rounded-full animate-spin-slow" />
                  <div className="w-48 h-48 bg-white shadow-2xl rounded-3xl flex flex-col items-center justify-center text-center p-6 z-10">
                     <Repeat className="w-12 h-12 text-[#EE4B75] mb-4" />
                     <div className="text-sm font-bold text-slate-800">CONTINUOUS LEARNING</div>
                  </div>
                  {/* Outer icons */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#4256AB] text-white p-4 rounded-xl shadow-lg"><Database className="w-6 h-6" /></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#EE4B75] text-white p-4 rounded-xl shadow-lg"><ShieldCheck className="w-6 h-6" /></div>
                  <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-800 text-white p-4 rounded-xl shadow-lg"><LayoutPanelTop className="w-6 h-6" /></div>
                  <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white p-4 rounded-xl shadow-lg"><Search className="w-6 h-6" /></div>
               </div>
            </div>
          </div>
        </section>

        {/* Dual-Context */}
        <section className="mb-20 md:mb-32 py-12 md:py-20 bg-[#0f1a15] rounded-3xl md:rounded-[40px] text-white px-6 md:px-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#10b981]/10 to-transparent" />
          <div className="relative z-10 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-8">Dual-Context by Design: Every metric serves two masters</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
               <div>
                  <h3 className="text-[#10b981] font-black uppercase tracking-widest text-sm mb-4">Vendor Context</h3>
                  <p className="text-slate-300 text-lg leading-relaxed">Your growth targets: ARR, NRR, retention, expansion, CAC efficiency.</p>
               </div>
               <div>
                  <h3 className="text-[#7B9BFF] font-black uppercase tracking-widest text-sm mb-4">Client Context</h3>
                  <p className="text-slate-300 text-lg leading-relaxed">Your customers' goals: Outcomes, efficiency, ROI, goal attainment.</p>
               </div>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 italic text-slate-200">
               "Client used Feature X → achieved Outcome Y → improved their retention → they renewed → we hit our NRR target."
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-20 md:mb-32">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0f1a15] text-center mb-10 md:mb-16">Architecture Differentiation</h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[500px] text-left border-collapse">
               <thead>
                  <tr className="border-b-2 border-slate-100">
                     <th className="py-6 font-bold text-slate-400 uppercase text-xs tracking-widest">Feature</th>
                     <th className="py-6 font-bold text-slate-800">Legacy Automation</th>
                     <th className="py-6 font-bold text-[#059669]">IntegrateWise OS</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-slate-100">
                  <tr>
                     <td className="py-6 font-bold text-slate-700">Data Flow</td>
                     <td className="py-6 text-slate-500">Point-to-point (A→B)</td>
                     <td className="py-6 font-bold text-[#059669]">Universal Intelligence Spine</td>
                  </tr>
                  <tr>
                     <td className="py-6 font-bold text-slate-700">Intelligence</td>
                     <td className="py-6 text-slate-500">None (Hardcoded rules)</td>
                     <td className="py-6 font-bold text-[#059669]">Self-learning Edge Correction</td>
                  </tr>
                  <tr>
                     <td className="py-6 font-bold text-slate-700">Workflow</td>
                     <td className="py-6 text-slate-500">Context-less triggers</td>
                     <td className="py-6 font-bold text-[#059669]">Dual-context alignment</td>
                  </tr>
                  <tr>
                     <td className="py-6 font-bold text-slate-700">AI Trust</td>
                     <td className="py-6 text-slate-500">Black-box / Hallucination risk</td>
                     <td className="py-6 font-bold text-[#059669]">Human-approved Gating</td>
                  </tr>
               </tbody>
            </table>
          </div>
        </section>

        {/* Rollout */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0f1a15] text-center mb-10 md:mb-16">The Road to the Intelligent OS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="p-8 rounded-3xl bg-[#059669]/5 border border-[#059669]/10">
                <div className="text-[#059669] font-black text-4xl mb-6">01</div>
                <h3 className="text-xl font-bold text-[#0f1a15] mb-4">Phase 1: Land with CSMs</h3>
                <p className="text-slate-600">Solve dual‑context reporting and insight gaps. Focus on renewals and expansion signals.</p>
             </div>
             <div className="p-8 rounded-3xl bg-[#10b981]/5 border border-[#10b981]/10">
                <div className="text-[#10b981] font-black text-4xl mb-6">02</div>
                <h3 className="text-xl font-bold text-[#0f1a15] mb-4">Phase 2: Expand Sales</h3>
                <p className="text-slate-600">Add revenue intelligence and product usage insights across the whole funnel.</p>
             </div>
             <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 text-white">
                <div className="text-white font-black text-4xl mb-6">03</div>
                <h3 className="text-xl font-bold mb-4">Phase 3: Become the OS</h3>
                <p className="text-slate-300">Full‑company deployment with enterprise features and custom AI agents.</p>
             </div>
          </div>
        </section>

        <DifferentiatorsDetail />

        {/* Final CTA */}
        <div className="text-center bg-[#F3F4F6] p-8 md:p-16 rounded-3xl md:rounded-[40px] border border-slate-100 mt-16 md:mt-24">
           <h2 className="text-2xl md:text-3xl font-extrabold text-[#0f1a15] mb-6">Work with intelligence — without losing control</h2>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-[#059669] text-white px-8 py-4 rounded-full font-bold">Book a strategy call</button>
              <button className="bg-[#10b981] text-white px-8 py-4 rounded-full font-bold">Apply to join early access</button>
           </div>
        </div>
      </div>
    </div>
  );
}

function LoopStep({ step, title, desc }: { step: string; title: string; desc: string }) {
  return (
    <div className="flex gap-6 group">
      <div className="w-12 h-12 shrink-0 rounded-full bg-[#4256AB]/10 text-[#4256AB] flex items-center justify-center font-black text-xl group-hover:bg-[#4256AB] group-hover:text-white transition-all">
        {step}
      </div>
      <div>
        <h4 className="text-xl font-bold text-[#4152A1] mb-2">{title}</h4>
        <p className="text-slate-600 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}