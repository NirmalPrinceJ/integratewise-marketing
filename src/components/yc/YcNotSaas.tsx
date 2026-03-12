import { FadeIn } from "../motion/AnimateIn";
import { motion } from "motion/react";
import { X, ArrowRight } from "lucide-react";

const notItems = [
  {
    label: "Data Migration Tool",
    what: "Moving data from one silo to another",
    spine: "Orchestrating data while it remains in place — context flows, not files",
    icon: "📦",
  },
  {
    label: "Integration Tool",
    what: "Rigidly connecting Tool A to Tool B with if-then rules",
    spine: "Adaptive workflows that interpret goals and adjust when conditions change",
    icon: "🔌",
  },
  {
    label: "SaaS Platform",
    what: "Solving a specific niche problem with a specific interface",
    spine: "Providing the unified infrastructure for all problems across all quadrants",
    icon: "☁️",
  },
  {
    label: "AI Chat Company",
    what: "Answering prompts in a vacuum without context or governance",
    spine: "AI that acts in context, waits for approval, provides evidence, and learns from every decision",
    icon: "💬",
  },
];

export function YcNotSaas() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-400 font-semibold mb-3">Market Position</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0f1a15] tracking-tight mb-6 ag-text-balance">
            We are not what you think we are.
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Most software is sold as a destination — a place you go to do work. The Unified Intelligence Layer is
            <em className="text-[#0f1a15] not-italic font-semibold"> intelligent plumbing</em> that connects all your systems into one living nervous system — so work happens across every destination. It's the difference between buying a new faucet and fixing the entire water system.
          </p>
        </FadeIn>

        <div className="max-w-4xl mx-auto space-y-4">
          {notItems.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.08}>
              <div className="rounded-2xl border border-gray-100 bg-[#fafbfc] overflow-hidden hover:border-gray-200 transition-all duration-300 hover:shadow-lg hover:shadow-gray-100/50">
                <div className="p-6 lg:p-8">
                  {/* "NOT" row */}
                  <div className="flex items-start gap-4 mb-5">
                    <span className="text-2xl shrink-0">{item.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <X className="h-4 w-4 text-red-400 shrink-0" />
                        <h3 className="font-bold text-[#0f1a15]">Not a {item.label}</h3>
                      </div>
                      <p className="text-sm text-gray-400 ml-7">{item.what}</p>
                    </div>
                  </div>

                  {/* "INSTEAD" row */}
                  <div className="ml-10 pl-5 border-l-2 border-emerald-200">
                    <p className="text-sm font-semibold text-emerald-600 mb-0.5">The Unified Intelligence Layer instead:</p>
                    <p className="text-[15px] text-gray-600 leading-relaxed">{item.spine}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4} className="text-center mt-12">
          <p className="text-gray-400 text-lg font-medium max-w-2xl mx-auto">
            We are <span className="text-[#0f1a15] font-bold">infrastructure</span>, not interface.
            We are <span className="text-[#0f1a15] font-bold">intelligent plumbing</span> — one Unified Intelligence Layer, one living nervous system — not another dashboard.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
