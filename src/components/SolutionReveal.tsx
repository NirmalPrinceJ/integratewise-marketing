import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "./motion/AnimateIn";
import { Float } from "./MarketingHero";
import { ToolConnectionCanvas } from "./canvas/ToolConnectionCanvas";

export function SolutionReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-28 lg:py-36 relative overflow-hidden bg-gray-50 border-y border-gray-100" ref={ref}>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Floating icon */}
          <Float delay={0} duration={4} y={10}>
            <motion.div
              className="w-20 h-20 rounded-3xl bg-emerald-500 text-white flex items-center justify-center mx-auto mb-10 shadow-xl shadow-emerald-500/20"
              animate={{ rotate: [0, 3, -3, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              <Zap className="h-9 w-9 fill-current" />
            </motion.div>
          </Float>

          <FadeIn className="flex justify-center">
            <Badge variant="outline" className="mb-6 border-emerald-200 text-emerald-600 bg-emerald-50">
              One product for everyone
            </Badge>
          </FadeIn>

          <motion.h2
            className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight mb-6 leading-[1.15]"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.8 }}
          >
            One workspace. One Spine. Same reality for every team.
          </motion.h2>

          <motion.div
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <p className="mb-4">
              We don’t add another tool. We sit between the ones you have and turn them into one shared picture.
            </p>
            <p className="mb-4 font-medium text-[#0f1a15]">
              CRM. Finance. Conversations. Support. Wherever your team sits—Chennai or HQ.
            </p>
            <p>
              One universal Spine so the Chennai divide, the CS paradox, and tool sprawl stop being three separate problems. One product. Everyone connected.
            </p>
          </motion.div>

          {/* Interactive connection visualization */}
          <div className="mb-10">
            <ToolConnectionCanvas className="max-w-lg mx-auto" />
          </div>

          {/* Value pills — floating */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-14 max-w-3xl mx-auto">
            {["Salesforce", "Tally", "WhatsApp", "Slack", "Shopify", "Jira", "200+ more"].map((point, i) => (
              <Float key={point} delay={i * 0.3} duration={5 + i * 0.4} y={4}>
                <motion.span
                  className="text-sm px-5 py-2.5 rounded-full bg-white border border-gray-200 text-muted-foreground hover:text-emerald-600 hover:border-emerald-200 hover:bg-emerald-50 transition-colors shadow-sm cursor-default inline-block font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.08 }}
                >
                  {point}
                </motion.span>
              </Float>
            ))}
          </div>

          {/* CTA */}
          <FadeIn delay={0.6} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button size="lg" className="rounded-full px-8 shadow-lg bg-emerald-500 hover:bg-emerald-600 h-12 text-base">
                See It In Action — Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <Link to="/platform">
              <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base">
                How It Works
              </Button>
            </Link>
          </FadeIn>
        </motion.div>
      </div>
    </section>
  );
}
