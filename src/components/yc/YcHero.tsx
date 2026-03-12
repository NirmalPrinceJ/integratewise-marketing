import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const stats = [
  { num: "43%", label: "report focus drain from AI verification" },
  { num: "32%", label: "experience prompt fatigue daily" },
  { num: "130+", label: "SaaS tools per organization" },
  { num: "40%", label: "of work time lost to manual context-stitching" },
];

export function YcHero() {
  return (
    <section className="relative pt-28 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-white">
      {/* Warm stress-gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full bg-red-50/40 blur-[120px]" />
        <div className="absolute -bottom-40 right-1/3 w-[500px] h-[500px] rounded-full bg-amber-50/30 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Crisis badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-200 bg-red-50/80 text-red-600 text-sm font-medium mb-8"
          >
            <span className="h-2 w-2 rounded-full bg-red-400 animate-pulse" />
            The Hidden Tax on the Modern Knowledge Worker
          </motion.div>

          {/* Headline — the crisis */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-[5.5rem] font-extrabold tracking-tight leading-[1.05] mb-6 ag-text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="text-[#0f1a15]">You check 6 apps</span>
            <br />
            <span className="text-[#0f1a15]">before your </span>
            <span className="text-red-500">first coffee.</span>
          </motion.h1>

          {/* Pain narration */}
          <motion.p
            className="text-xl lg:text-2xl text-gray-500 leading-relaxed max-w-2xl mx-auto mb-5 ag-text-balance font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            Every day, you re-stitch context across disconnected tools. You copy-paste
            between CRMs, chat apps, and spreadsheets. You verify AI outputs that lack
            context. Your real labor isn't the work — it's the <em className="text-[#0f1a15] font-semibold not-italic">manual orchestration</em> between a dozen technologies that should have been connected.
          </motion.p>

          <motion.p
            className="text-lg text-gray-400 max-w-xl mx-auto mb-10 ag-text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            Researchers call it "AI brain fry." We call it the crisis of fragmentation.
          </motion.p>

          {/* Stats strip */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            {stats.map((s) => (
              <div key={s.num} className="rounded-xl bg-[#fafbfc] border border-gray-100 py-5 px-4 text-center">
                <span className="text-2xl font-extrabold text-red-500 block">{s.num}</span>
                <span className="text-xs text-gray-400 leading-tight block mt-1">{s.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            <a
              href="#hook"
              className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#111827] hover:bg-black text-white font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              It's not your fault
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
