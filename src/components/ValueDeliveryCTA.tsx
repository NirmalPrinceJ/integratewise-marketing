import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "./ui/button";
import {
  ArrowRight,
  Timer,
  Wifi,
  Zap,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export function ValueDeliveryCTA() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Subtle bg */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: 60-Second Value Delivery */}
          <div>
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-600 text-xs mb-6"
              style={{ fontWeight: 600 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Timer className="h-3 w-3" />
              60-Second Setup
            </motion.div>

            <motion.h2
              className="text-3xl md:text-4xl tracking-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              One Unified Intelligence Layer. One product. Value in under a minute.
            </motion.h2>

            <motion.p
              className="text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              No migrations. Your tools stay where they are—we connect them into one shared reality so every team works from the same picture.
            </motion.p>

            {/* Steps */}
            <motion.div
              className="space-y-4 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {[
                {
                  step: "1",
                  text: "Connect your tools",
                  icon: Wifi,
                },
                {
                  step: "2",
                  text: "Your workspace fills with insights",
                  icon: Zap,
                },
                {
                  step: "3",
                  text: "Start making better decisions",
                  icon: CheckCircle2,
                },
              ].map((s, i) => (
                <motion.div
                  key={s.step}
                  className="flex items-center gap-4 p-3 bg-neutral-50 border border-neutral-100 rounded-xl"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.15 }}
                >
                  <div className="h-8 w-8 bg-black text-white rounded-lg flex items-center justify-center text-xs shrink-0" style={{ fontWeight: 700 }}>
                    {s.step}
                  </div>
                  <div className="flex-1">
                    <span className="text-sm text-neutral-800" style={{ fontWeight: 600 }}>
                      {s.text}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Link to="/book-demo">
                <Button
                  size="lg"
                  className="bg-emerald-600 text-white hover:bg-emerald-700 border-0 h-12 px-8 text-base rounded-full"
                >
                  Book Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-8 text-base rounded-full"
                >
                  Contact
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right: Timer Animation */}
          <div className="flex items-center justify-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Outer circle */}
              <div className="w-64 h-64 rounded-full border-4 border-neutral-200 flex items-center justify-center relative">
                {/* Progress ring */}
                <svg
                  className="absolute inset-0 w-full h-full -rotate-90"
                  viewBox="0 0 256 256"
                >
                  <motion.circle
                    cx="128"
                    cy="128"
                    r="124"
                    fill="none"
                    stroke="black"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 124}`}
                    initial={{ strokeDashoffset: 2 * Math.PI * 124 }}
                    whileInView={{ strokeDashoffset: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 3, delay: 0.6, ease: "easeInOut" }}
                  />
                </svg>

                {/* Inner content */}
                <div className="text-center z-10">
                  <motion.div
                    className="text-5xl text-black mb-1"
                    style={{ fontWeight: 700 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 }}
                  >
                    60s
                  </motion.div>
                  <div className="text-sm text-neutral-500" style={{ fontWeight: 500 }}>
                    to first value
                  </div>
                </div>

                {/* Floating badges */}
                {[
                  { label: "Tally", angle: -45 },
                  { label: "WhatsApp", angle: 45 },
                  { label: "Jira", angle: 135 },
                  { label: "Salesforce", angle: 225 },
                ].map((badge, i) => {
                  const rad = (badge.angle * Math.PI) / 180;
                  const x = Math.cos(rad) * 150;
                  const y = Math.sin(rad) * 150;
                  return (
                    <motion.div
                      key={badge.label}
                      className="absolute px-2 py-1 bg-white border border-neutral-200 rounded-lg text-[10px] text-neutral-600 shadow-sm"
                      style={{
                        fontWeight: 600,
                        left: `calc(50% + ${x}px - 30px)`,
                        top: `calc(50% + ${y}px - 12px)`,
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.8 + i * 0.15 }}
                      animate={{ y: [0, -4, 0] }}
                    >
                      {badge.label}
                    </motion.div>
                  );
                })}
              </div>

              {/* Sparkle */}
              <motion.div
                className="absolute -top-2 -right-2"
                animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Sparkles className="h-6 w-6 text-neutral-300" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}