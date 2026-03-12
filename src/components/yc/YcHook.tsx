import { FadeIn } from "../motion/AnimateIn";
import { ArrowRight } from "lucide-react";

const traps = [
  {
    title: "The Verification Trap",
    desc: "AI generates answers at high speed — but without context, you must check everything. The checking is more draining than the original task.",
    stat: "34% question their own judgment after AI use",
  },
  {
    title: "The Multi-Tool Juggle",
    desc: "CRM says one thing. Ticketing system says another. Your spreadsheet says a third. You spend your day reconciling, not deciding.",
    stat: "14% report extreme fatigue from tool-switching",
  },
  {
    title: "The Plumbing Is Broken",
    desc: "Every new tool promises productivity. But it creates another silo. Another login. Another data island that never talks to the rest.",
    stat: "130+ SaaS tools per average organization",
  },
  {
    title: "Decision Detachment",
    desc: "When AI makes suggestions without evidence, you stop trusting yourself. Agency shifts from human to algorithm, and accountability evaporates.",
    stat: "39% feel less connected to their own decisions",
  },
];

export function YcHook() {
  return (
    <section id="hook" className="py-24 lg:py-32 bg-[#fafbfc]">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-6 max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-amber-600 font-semibold mb-3">The Real Cause</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0f1a15] tracking-tight mb-6 ag-text-balance">
            It's not you.
            <br />
            <span className="text-gray-400">It's the architecture.</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Your tools were never designed to talk to each other. AI made it worse — more
            tools, more speed, more outputs with <em className="text-[#0f1a15] not-italic font-semibold">zero shared context</em>.
            You've become the human bridge between a dozen technologies that should have
            been integrated at the architectural level.
          </p>
        </FadeIn>

        <FadeIn delay={0.15} className="max-w-4xl mx-auto mt-14">
          <div className="grid md:grid-cols-2 gap-5">
            {traps.map((t, i) => (
              <FadeIn key={t.title} delay={0.1 + i * 0.08}>
                <div className="rounded-2xl border border-gray-100 bg-white p-7 h-full hover:border-amber-200 transition-all duration-300 hover:shadow-lg hover:shadow-amber-50/50">
                  <h3 className="text-lg font-bold text-[#0f1a15] mb-2">{t.title}</h3>
                  <p className="text-[15px] text-gray-500 leading-relaxed mb-4">{t.desc}</p>
                  <div className="pt-3 border-t border-gray-50">
                    <span className="text-xs font-semibold text-amber-600">{t.stat}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>

        {/* Bridge quote */}
        <FadeIn delay={0.4} className="mt-16 max-w-3xl mx-auto text-center">
          <div className="rounded-2xl bg-[#0a0a0a] p-8 lg:p-10 relative overflow-hidden">
            <div className="absolute inset-0 opacity-30 pointer-events-none">
              <div className="absolute top-0 right-1/3 w-64 h-64 rounded-full bg-amber-500/10 blur-[80px]" />
            </div>
            <div className="relative z-10">
              <p className="text-white/80 text-xl lg:text-2xl font-medium leading-relaxed mb-6 ag-text-balance">
                "The failure of modern tools to communicate means the plumbing of your digital life is fundamentally broken."
              </p>
              <p className="text-white/40 text-sm">
                The solution isn't another app. It's fixing the architecture itself.
              </p>
              <a
                href="#spine"
                className="inline-flex items-center gap-2 text-emerald-400 font-semibold mt-6 hover:text-emerald-300 transition-colors group"
              >
                Meet the Unified Intelligence Layer
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
