import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { FadeIn } from "./motion/AnimateIn";
import { Badge } from "@/components/ui/badge";

/* ═══════════════════════════════════════════════════════════════════════
   Float — gentle anti-gravity drift on any element
   ═══════════════════════════════════════════════════════════════════════ */
export function Float({ children, delay = 0, duration = 6, y = 10, className = "" }: {
  children: React.ReactNode; delay?: number; duration?: number; y?: number; className?: string;
}) {
  return (
    <motion.div className={className}
      animate={{ y: [-y / 2, y / 2, -y / 2] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >{children}</motion.div>
  );
}

export function MarketingHero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative pt-24 pb-20 lg:pt-32 lg:pb-40 overflow-hidden bg-[#F0FDF6] ag-mesh-gradient">
      {/* Decorative background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-radial from-[#E6FBF1] to-transparent opacity-70" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Small floating badge */}
          <Float delay={0} duration={5} y={6}>
            <FadeIn className="mb-8 flex justify-center">
              <Badge variant="outline" className="text-[#0E9F6E] bg-white hover:bg-emerald-50 border-emerald-200 px-4 py-1.5 text-sm font-medium rounded-full shadow-sm">
                <span className="text-[#0E9F6E] mr-2 text-base leading-none">✨</span>
                Stop jumping between 10 different apps.
              </Badge>
            </FadeIn>
          </Float>

          {/* Clear, concrete headline */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-[6rem] font-extrabold tracking-tight mb-8 leading-[1.05] ag-text-balance"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[#0f1a15]">One Workspace for</span>
            <br />
            <span className="text-[#0EA775] ag-gradient-text">All Your Tools.</span>
          </motion.h1>

          <FadeIn delay={0.3} className="max-w-3xl mx-auto mb-12">
            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-medium ag-text-balance">
              IntegrateWise connects Salesforce, Zendesk, Jira, and every other tool you use into one unified dashboard. Stop copy-pasting. Start acting on a complete picture.
            </p>
          </FadeIn>

          {/* CTA Buttons */}
          <FadeIn delay={0.5} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/book-demo" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#111827] hover:bg-black text-white font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5">
              Book Demo <span className="ml-2 font-normal">→</span>
            </a>
            <a href="#comparison" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-white border border-gray-200 hover:border-[#0EA775]/30 hover:bg-[#0EA775]/5 text-[#111827] font-bold text-lg transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5">
              See How It Works
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
