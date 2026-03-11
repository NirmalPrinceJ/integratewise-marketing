import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Link2, Brain, Sparkles } from "lucide-react";
import { HowItWorksCanvas } from "./canvas/HowItWorksCanvas";

export function HowItWorksSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f1a15] mb-6">
            How your tools become one system
          </h2>
        </div>

        {/* Animated canvas flow */}
        <div className="mb-14">
          <HowItWorksCanvas className="max-w-4xl mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "Step 1",
              title: "Connect",
              desc: "Link your tools like Tally, WhatsApp, Salesforce, Jira, Slack, or Shopify.",
              icon: Link2,
              delay: 0.1,
            },
            {
              step: "Step 2",
              title: "Understand",
              desc: "IntegrateWise builds a complete picture of your business by combining structured data, conversations, and past decisions.",
              icon: Brain,
              delay: 0.3,
            },
            {
              step: "Step 3",
              title: "Assist",
              desc: "The system surfaces insights and suggests actions. Nothing executes without your approval.",
              icon: Sparkles,
              delay: 0.5,
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              className="bg-[#F4FCF8] rounded-2xl p-8 border border-emerald-100 text-center relative shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: item.delay, duration: 0.6 }}
            >
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8" />
              </div>
              <div className="text-sm font-bold text-emerald-600 mb-2 uppercase tracking-wide">
                {item.step} — {item.title}
              </div>
              <p className="text-gray-600 font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
