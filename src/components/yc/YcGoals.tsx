import { FadeIn, StaggerChildren, StaggerItem } from "../motion/AnimateIn";
import { Target, Milestone, BarChart3, RefreshCcw, ArrowRight } from "lucide-react";

const principles = [
  {
    icon: Target,
    title: "Goals Drive Everything",
    desc: "Every feature, every AI suggestion, every workflow is anchored to the goals you set — personal, team, or org-wide. Nothing runs in a vacuum.",
    color: "text-violet-500",
    bg: "bg-violet-50",
  },
  {
    icon: Milestone,
    title: "Milestones Track Progress",
    desc: "The Unified Intelligence Layer doesn't just measure outcomes — it tracks milestones along the way. You see where you are, where you're heading, and what's blocking the path.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: BarChart3,
    title: "Metrics Prove Value",
    desc: "Every action the system takes is measured against the metrics you define. Not vanity metrics — the ones that actually matter to your business outcomes.",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    icon: RefreshCcw,
    title: "L00p Makes It Healthier",
    desc: "The L00p runs on initial loading and again daily. It collects feedback from every Approve, Adjust, and Redo — then uses Active Learning to sharpen the AI where it's most uncertain.",
    color: "text-teal-500",
    bg: "bg-teal-50",
  },
];

const timeline = [
  { time: "Day 1", event: "Initial Loading", desc: "Unified Intelligence Layer absorbs your tools, maps your domains, learns your goals" },
  { time: "Week 1", event: "First Signals", desc: "AI starts surfacing insights, suggesting actions, providing evidence" },
  { time: "Month 1", event: "Automations Activate", desc: "Governed workflows begin running with approval gates" },
  { time: "Month 3", event: "Predictions Emerge", desc: "The Unified Intelligence Layer correlates across domains — predicting, not just reporting" },
  { time: "Month 6+", event: "Compound Intelligence", desc: "L00p has refined the system. Value grows exponentially. The Unified Intelligence Layer knows your business." },
];

export function YcGoals() {
  return (
    <section className="py-24 lg:py-32 bg-[#fafbfc]">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-emerald-600 font-semibold mb-3">Goals-Driven Architecture</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0f1a15] tracking-tight mb-6 ag-text-balance">
            Every feature flows from <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">your goals.</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            The Unified Intelligence Layer doesn't guess. Every suggestion, every automation, every insight is tied to
            the goals, milestones, and metrics you and your team define. AI becomes a strategic partner — not a random suggestion engine.
          </p>
        </FadeIn>

        {/* Principles */}
        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mb-20" stagger={0.07}>
          {principles.map((p) => (
            <StaggerItem key={p.title}>
              <div className="rounded-2xl border border-gray-100 bg-white p-6 h-full hover:border-gray-200 transition-all duration-300 hover:shadow-lg hover:shadow-gray-100/50 hover:-translate-y-1">
                <div className={`h-11 w-11 rounded-xl ${p.bg} flex items-center justify-center mb-4`}>
                  <p.icon className={`h-5 w-5 ${p.color}`} />
                </div>
                <h3 className="text-base font-bold text-[#0f1a15] mb-2">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Value timeline */}
        <FadeIn delay={0.2} className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-[#0f1a15] text-center mb-8">
            Value compounds from Day 1
          </h3>
          <div className="space-y-0">
            {timeline.map((t, i) => (
              <FadeIn key={t.time} delay={0.1 + i * 0.06}>
                <div className="flex gap-5 group">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="h-10 w-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center group-hover:border-emerald-400 transition-colors shadow-sm">
                      <span className="text-xs font-bold text-emerald-600">{t.time.split(' ')[0]}</span>
                    </div>
                    {i < timeline.length - 1 && <div className="w-px h-full min-h-[30px] bg-gray-200 my-1.5" />}
                  </div>
                  <div className="pb-8">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-sm font-bold text-[#0f1a15]">{t.event}</span>
                      <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{t.time}</span>
                    </div>
                    <p className="text-sm text-gray-500">{t.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
