import { FadeIn, StaggerChildren, StaggerItem } from "../motion/AnimateIn";
import { motion } from "motion/react";
import { Brain, Zap, Shield, RefreshCcw, RotateCcw, Repeat, ArrowRight, ArrowDown } from "lucide-react";

const phases = [
  {
    icon: Brain,
    step: "THINK",
    title: "Reasoning in Context",
    desc: "AI interprets your objective against the backdrop of defined goals and metrics stored in the Unified Intelligence Layer. Chain-of-thought processing evaluates multiple options before suggesting an action. The AI understands not just what to do, but why — in relation to organizational milestones.",
    color: "text-violet-400",
    bg: "bg-violet-500/8",
    border: "border-violet-500/20",
  },
  {
    icon: Zap,
    step: "ACT",
    title: "Execution with Evidence",
    desc: "The system pursues objectives across connected systems — updating CRMs, drafting memos, flagging priorities. Unlike black-box AI, every action comes with evidence: 'I am taking this action because these three data points in Sales align with the current goal in Tech.'",
    color: "text-emerald-400",
    bg: "bg-emerald-500/8",
    border: "border-emerald-500/20",
  },
  {
    icon: Shield,
    step: "GOVERN",
    title: "Hardgating & Approval",
    desc: "Workflows never run without human approval at critical decision points. The Unified Intelligence Layer blocks results until a human has verified them. No approval token = no execution. Full audit trail, full traceability, full accountability.",
    color: "text-amber-400",
    bg: "bg-amber-500/8",
    border: "border-amber-500/20",
  },
  {
    icon: RefreshCcw,
    step: "ADJUST",
    title: "Learn from Every Decision",
    desc: "When you approve, deny, or modify an AI suggestion, that feedback reshapes the system. Rejections become learning signals. Adjustments refine the model. The Unified Intelligence Layer learns your preferences and sharpens over time.",
    color: "text-blue-400",
    bg: "bg-blue-500/8",
    border: "border-blue-500/20",
  },
  {
    icon: RotateCcw,
    step: "REDO",
    title: "Correct Course, Keep Context",
    desc: "Made a wrong turn? Redo any action without losing the decision trail. The Unified Intelligence Layer preserves the full history — what was attempted, what was corrected, and what was learned — so re-work is informed, not blind.",
    color: "text-rose-400",
    bg: "bg-rose-500/8",
    border: "border-rose-500/20",
  },
  {
    icon: Repeat,
    step: "REPEAT → L00P",
    title: "System Gets Healthier Over Time",
    desc: "Every action re-ingests into the Unified Intelligence Layer. Signals from updated data trigger new cycles of Think. The L00p runs during initial loading and daily — continuously sharpening, compounding value, making the system more intelligent with every pass.",
    color: "text-teal-400",
    bg: "bg-teal-500/8",
    border: "border-teal-500/20",
  },
];

export function YcLoop() {
  return (
    <section id="loop" className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-violet-500/5 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-emerald-400 font-semibold mb-3">The Cognitive Loop</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 ag-text-balance">
            Think. Act. Govern.
            <br />
            <span className="text-white/40">Adjust. Redo. Repeat.</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            This isn't automation. It's a rigorous operational cycle that prioritizes human agency
            and system health. AI remains a tool for augmentation — never a source of confusion or risk.
          </p>
        </FadeIn>

        {/* Loop phases — vertical timeline */}
        <div className="max-w-3xl mx-auto">
          <StaggerChildren className="space-y-0" stagger={0.08}>
            {phases.map((p, i) => (
              <StaggerItem key={p.step}>
                <div className="flex gap-5">
                  {/* Timeline connector */}
                  <div className="flex flex-col items-center shrink-0">
                    <div className={`h-14 w-14 rounded-2xl ${p.bg} border ${p.border} flex items-center justify-center`}>
                      <p.icon className={`h-6 w-6 ${p.color}`} />
                    </div>
                    {i < phases.length - 1 && (
                      <div className="flex flex-col items-center my-2">
                        <div className="w-px h-8 bg-white/10" />
                        <ArrowDown className="h-3 w-3 text-white/20" />
                        <div className="w-px h-4 bg-white/10" />
                      </div>
                    )}
                    {i === phases.length - 1 && (
                      <div className="flex flex-col items-center my-2">
                        <div className="w-px h-4 bg-white/10" />
                        <div className="text-xs text-emerald-400/60 font-mono mt-1">↻</div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-6 flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-xs font-mono font-bold ${p.color} uppercase tracking-wider`}>{p.step}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                    <p className="text-[15px] text-white/40 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>

        {/* Key differentiator callout */}
        <FadeIn delay={0.4} className="mt-16 max-w-3xl mx-auto">
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center">
            <p className="text-emerald-400 font-bold text-lg mb-2">AI that waits for permission</p>
            <p className="text-white/50 max-w-xl mx-auto">
              Here, AI thinks in context, waits for approvals, and provides evidence for
              every action. No black boxes. No surprises. Full transparency, full accountability.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
