import { FadeIn, StaggerChildren, StaggerItem } from "../motion/AnimateIn";
import { motion } from "motion/react";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router";

const quadrants = [
  { name: "Sales", desc: "CRM, pipeline, contracts, proposals", color: "text-blue-400", bg: "bg-blue-500/5", border: "border-blue-500/20" },
  { name: "Tech", desc: "IDE, repos, logs, deployments, monitoring", color: "text-violet-400", bg: "bg-violet-500/5", border: "border-violet-500/20" },
  { name: "Operations", desc: "ERP, invoicing, procurement, inventory", color: "text-emerald-400", bg: "bg-emerald-500/5", border: "border-emerald-500/20" },
  { name: "Management", desc: "Dashboards, KPIs, goals, reporting", color: "text-amber-400", bg: "bg-amber-500/5", border: "border-amber-500/20" },
];

const capabilities = [
  "Absorbs new tools without re-plumbing your workflow",
  "AI thinks with awareness of your entire ecosystem",
  "Context flows across every quadrant — nothing is lost",
  "Modal shifts between domains without losing state",
  "One gesture away from any task, any context, any domain",
  "Hard-gated governance — no action without evidence and approval",
];

export function YcSolution() {
  return (
    <section id="spine" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-emerald-50/50 to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-200 bg-emerald-50/80 text-emerald-700 text-sm font-medium mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            The Solution
          </div>
          <h2 className="text-4xl lg:text-[3.5rem] font-extrabold text-[#0f1a15] tracking-tight mb-6 ag-text-balance leading-tight">
            The Unified Intelligence Layer
            <br />
            <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
              Intelligent plumbing. One living nervous system.
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            The Unified Intelligence Layer is the <em className="text-[#0f1a15] not-italic font-semibold">single source of truth</em> — intelligent plumbing that connects CRM, Tally, WhatsApp, machines, emails, bots, product usage, and historical data into one living nervous system. It is <em className="text-[#0f1a15] not-italic font-semibold">adaptive</em>: it fits any user, whether Student, Working Professional, or Business Person. Industry-agnostic and department-agnostic. And the Unified Intelligence Layer doesn't just adapt to you — it <em className="text-[#0f1a15] not-italic font-semibold">grows with you</em> and becomes stronger over time.
          </p>
        </FadeIn>

        {/* Quadrant Living metaphor */}
        <FadeIn delay={0.15} className="max-w-5xl mx-auto mb-16">
          <div className="rounded-2xl bg-[#0a0a0a] p-8 lg:p-12 overflow-hidden relative">
            <div className="absolute inset-0 opacity-30 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-emerald-500/10 blur-[80px]" />
            </div>

            <div className="relative z-10">
              <p className="text-emerald-400 text-xs uppercase tracking-widest font-bold text-center mb-2">The Quadrant Model</p>
              <h3 className="text-2xl lg:text-3xl font-bold text-white text-center mb-3">
                Four quadrants. One Unified Intelligence Layer.
              </h3>
              <p className="text-white/50 text-center max-w-xl mx-auto mb-10">
                Like a building where every room connects through a central walkway, the Unified Intelligence Layer links
                every domain of your work — without locking you into one industry or department. Switch quadrants without losing context. The path is never congested — always one gesture away.
              </p>

              {/* 4 quadrants grid */}
              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
                {quadrants.map((q) => (
                  <div key={q.name} className={`rounded-xl border ${q.border} ${q.bg} p-5`}>
                    <h4 className={`font-bold ${q.color} text-sm uppercase tracking-wider mb-1`}>{q.name} Quadrant</h4>
                    <p className="text-white/40 text-sm">{q.desc}</p>
                  </div>
                ))}
              </div>

              {/* Center label */}
              <div className="text-center">
                <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 px-5 py-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-center sm:text-left">
                    <span className="text-emerald-400 font-bold text-sm">Unified Intelligence Layer</span>
                    <span className="text-white/60 text-xs sm:text-sm font-medium">Context · Governance · Intelligence — adapts & grows with you.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Capabilities */}
        <FadeIn delay={0.25} className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-[#0f1a15] text-center mb-8">More than integration</h3>
          <StaggerChildren className="grid md:grid-cols-2 gap-3" stagger={0.06}>
            {capabilities.map((cap) => (
              <StaggerItem key={cap}>
                <div className="flex items-start gap-3 py-3 px-4 rounded-xl bg-[#fafbfc] border border-gray-100">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-[15px] text-gray-600">{cap}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </FadeIn>

        <FadeIn delay={0.35} className="text-center mt-10">
          <a
            href="#loop"
            className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors group text-lg"
          >
            See the cognitive loop in action
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
