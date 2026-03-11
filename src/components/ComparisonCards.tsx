import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { X, Check } from "lucide-react";
import { FadeIn } from "./motion/AnimateIn";

interface ComparisonCardsProps {
  withoutTitle: string;
  withTitle: string;
  withoutItems: string[];
  withItems: string[];
}

export function ComparisonCards({
  withoutTitle,
  withTitle,
  withoutItems,
  withItems,
}: ComparisonCardsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 bg-gray-50 border-t border-b border-gray-100" ref={ref}>
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            The Reality Check
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Why adding more point solutions isn't solving your problem.
          </p>
        </FadeIn>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Without Section (The Duct-Tape Era) */}
          <motion.div
            className="bg-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-sm relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -mr-16 -mt-16" />
            <h3 className="text-2xl font-bold text-gray-400 mb-8 pb-6 border-b border-gray-100 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <X className="w-4 h-4 text-gray-400" strokeWidth={3} />
              </span>
              {withoutTitle}
            </h3>
            
            <ul className="space-y-6 relative z-10">
              {withoutItems.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 shrink-0">
                    <X className="w-5 h-5 text-gray-300" strokeWidth={2.5} />
                  </div>
                  <span className="text-lg text-gray-500 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* With Section (The Connected Era) */}
          <motion.div
            className="bg-slate-900 rounded-3xl p-8 md:p-10 border border-emerald-900/30 shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-bl-full -mr-16 -mt-16 blur-2xl" />
            <h3 className="text-2xl font-bold text-white mb-8 pb-6 border-b border-white/10 flex items-center gap-3 relative z-10">
              <span className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                <Check className="w-5 h-5 text-slate-900" strokeWidth={3} />
              </span>
              {withTitle}
            </h3>
            
            <ul className="space-y-6 relative z-10">
              {withItems.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 shrink-0">
                    <Check className="w-5 h-5 text-emerald-400" strokeWidth={2.5} />
                  </div>
                  <span className="text-lg text-emerald-50 leading-snug font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
