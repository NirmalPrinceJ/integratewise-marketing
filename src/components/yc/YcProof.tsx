import { FadeIn } from "../motion/AnimateIn";
import { motion } from "motion/react";
import { DollarSign, Search, Brain, Shield, ArrowRight } from "lucide-react";

export function YcProof() {
  return (
    <section className="py-24 lg:py-32 bg-[#fafbfc]">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-emerald-600 font-semibold mb-3">Proof</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0f1a15] tracking-tight mb-4 ag-text-balance">
            The $8M Red Account Recovery
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Not a marketing story. A real failure, a real fix, and the moment we knew the Unified Intelligence Layer works.
          </p>
        </FadeIn>

        {/* Recovery narrative */}
        <FadeIn delay={0.1} className="max-w-4xl mx-auto mb-16">
          <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
            {/* Timeline steps */}
            <div className="divide-y divide-gray-100">
              {/* The Invisible Failure */}
              <div className="p-8 lg:p-10">
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                    <Search className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0f1a15] mb-2">The Invisible Failure</h3>
                    <p className="text-[15px] text-gray-500 leading-relaxed">
                      An $8M account was systematically failing despite a plethora of monitoring tools.
                      The sales team used one CRM, technical support used a different ticketing system,
                      and leadership used a third dashboard. Because these tools <em className="text-[#0f1a15] not-italic font-semibold">never talked</em>,
                      the patterns of failure were invisible to each individual department.
                      The AI tools they were using provided fragmented insights that lacked the
                      cross-departmental context needed to see the looming disaster.
                    </p>
                  </div>
                </div>
              </div>

              {/* Creating the Unified Intelligence Layer */}
              <div className="p-8 lg:p-10">
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                    <Brain className="h-5 w-5 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0f1a15] mb-2">Creating the Unified Intelligence Layer</h3>
                    <p className="text-[15px] text-gray-500 leading-relaxed">
                      By building a Unified Intelligence Layer that linked these disparate tools, the organization
                      created a unified view of the account's history, current status, and future trajectory.
                      The Unified Intelligence Layer pulled context from the Tech Quadrant (where technical debt was accumulating)
                      and the Sales Quadrant (where contract renewals were pending). When the AI could finally
                      <em className="text-[#0f1a15] not-italic font-semibold"> think in context</em> of the
                      entire account lifecycle, it identified a critical missing piece that had been
                      overlooked for years.
                    </p>
                  </div>
                </div>
              </div>

              {/* The Recovery */}
              <div className="p-8 lg:p-10">
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                    <Shield className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0f1a15] mb-2">Evidence, Approval, Recovery</h3>
                    <p className="text-[15px] text-gray-500 leading-relaxed">
                      The system didn't just suggest a fix — it provided the <em className="text-[#0f1a15] not-italic font-semibold">evidence</em> and
                      waited for the leadership team to approve a multi-step recovery plan. This plan
                      was executed across all systems simultaneously, guided by the goals and metrics
                      established in the Unified Intelligence Layer. The result: complete recovery of the $8 million account
                      and a plumbing system that made such failures nearly impossible in the future.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Result bar */}
            <div className="bg-emerald-50 border-t border-emerald-200 px-8 py-6 flex flex-wrap items-center justify-center gap-8">
              <div className="text-center">
                <DollarSign className="h-5 w-5 text-emerald-600 mx-auto mb-1" />
                <span className="text-2xl font-extrabold text-emerald-700 block">$8M</span>
                <span className="text-xs text-emerald-600/70">Account Recovered</span>
              </div>
              <div className="text-center">
                <span className="text-2xl font-extrabold text-emerald-700 block">3</span>
                <span className="text-xs text-emerald-600/70">Systems Unified</span>
              </div>
              <div className="text-center">
                <span className="text-2xl font-extrabold text-emerald-700 block">1</span>
                <span className="text-xs text-emerald-600/70">Hidden Root Cause Found</span>
              </div>
              <div className="text-center">
                <span className="text-2xl font-extrabold text-emerald-700 block">0</span>
                <span className="text-xs text-emerald-600/70">Similar Failures Since</span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Founder story */}
        <FadeIn delay={0.25} className="max-w-3xl mx-auto">
          <div className="rounded-2xl bg-[#0a0a0a] p-8 lg:p-10 relative overflow-hidden">
            <div className="absolute inset-0 opacity-30 pointer-events-none">
              <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-emerald-500/10 blur-[80px]" />
            </div>
            <div className="relative z-10">
              <p className="text-sm uppercase tracking-widest text-emerald-400 font-semibold mb-4">The Founder's Origin</p>
              <h3 className="text-2xl font-bold text-white mb-4">From Forex frustration to architecture</h3>
              <div className="space-y-4 text-white/50 text-[15px] leading-relaxed">
                <p>
                  The genesis of the Unified Intelligence Layer is rooted in a personal experience with
                  "systems that promised the world but lacked a soul." Years spent purchasing
                  every course and tool in Forex trading — all claiming to be the "perfect system"
                  — revealed a painful truth: these were repositories of wisdom that didn't work
                  in the real, messy world.
                </p>
                <p>
                  The realization came from a mentor, Sofia, who taught that success was not about
                  the "number, mathematics, or news" but about the <span className="text-white font-medium">"way of living"</span> —
                  the context and infrastructure within which one makes decisions.
                </p>
                <p className="text-emerald-400/80 font-medium">
                  That philosophy became the Unified Intelligence Layer: software that doesn't just provide answers
                  but provides a way of working that is grounded, contextual, and human-centric.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
