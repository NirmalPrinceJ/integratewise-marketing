import { motion } from "motion/react";
import { FadeIn } from "../motion/AnimateIn";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function YcCta() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="relative rounded-3xl bg-[#0a0a0a] p-10 lg:p-20 text-center overflow-hidden">
            {/* Background orbs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <motion.div
                className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-[100px]"
                animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-violet-500/5 blur-[80px]"
                animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 ag-text-balance">
                Stop being the bridge.
                <br />
                <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                  Start being the architect.
                </span>
              </h2>
              <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
                The tools should finally talk. The AI should finally think in context.
                The workflows should finally wait for your permission. Book a demo and
                see your data come alive through the Unified Intelligence Layer.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/book-demo"
                  className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-lg transition-all shadow-xl shadow-emerald-500/20 hover:shadow-emerald-400/30 hover:-translate-y-0.5"
                >
                  Book a Demo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/10 hover:border-white/20 text-white/80 hover:text-white font-bold text-lg transition-all hover:-translate-y-0.5"
                >
                  Talk to Founders
                </Link>
              </div>

              {/* Trust strip */}
              <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8">
                {[
                  "Hard-Gated Governance",
                  "Evidence for Every Action",
                  "Zero Black Boxes",
                  "SOC 2 · GDPR · ISO 27001",
                ].map((b) => (
                  <span key={b} className="text-sm text-white/30">
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
