"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export function SolutionSection() {
  const steps = [
    {
      title: "Connect Your Tools",
      description: "Plug in the apps you already use in minutes with 100+ pre-built connectors.",
      icon: "🔌"
    },
    {
      title: "AI Indexes Continuously",
      description: "Our AI cleans, normalizes, and vectorizes your data into a unified memory layer.",
      icon: "🧠"
    },
    {
      title: "Access Digital Memory",
      description: "View everything through the Workspace with complete context and control.",
      icon: "💾"
    },
  ]

  return (
    <section className="py-24 px-6 bg-bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
            <span className="text-gold">✓</span>
            <span className="text-gold text-sm font-medium">The Solution</span>
          </div>
          <h2 className="text-5xl font-bold mb-6">
            The Adaptive Spine<br />
            <span className="text-text-secondary">Bridges the Gap</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            We don&apos;t just move data; we build memory. IntegrateWise creates a private, persistent knowledge layer that unifies your entire stack into a single, intelligent source of truth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Proof Section */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-12 opacity-5 text-9xl">🛡️</div>
            <div className="relative">
              <div className="text-gold font-semibold uppercase tracking-wider text-sm mb-3">
                The Proof
              </div>
              <h3 className="text-5xl font-bold mb-4">$8M+ Revenue Protected</h3>
              <p className="text-text-secondary leading-relaxed mb-8">
                As a Customer Success Manager, our founder watched an $8M account turn red because critical context was hidden across CRM, support, and billing systems. By manually building what the Spine does today—connecting the hidden signals across those silos—early intervention was possible, and the $8M relationship was saved.
              </p>
              <div className="flex items-center gap-6 text-sm flex-wrap">
                <div className="flex items-center gap-2 text-green-400">
                  <span>📈</span>
                  <span>12% Uplift in NRR</span>
                </div>
                <div className="w-1 h-1 bg-white/20 rounded-full" />
                <div className="flex items-center gap-2 text-gold">
                  <span>🕐</span>
                  <span>14hrs Saved/Week</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* How It Works */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-2xl font-semibold mb-8">How It Works</h4>

            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-1 text-xl">
                  {step.icon}
                </div>
                <div>
                  <h5 className="font-semibold mb-1">{step.title}</h5>
                  <p className="text-text-dim text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}

            {/* Loop Visualization */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-6 mt-8"
            >
              <div className="text-center">
                <div className="text-xs text-text-dim uppercase tracking-wider mb-4">
                  The IntegrateWise Loop
                </div>
                <div className="flex flex-col gap-3">
                  {[
                    { label: "Ingestion", desc: "Bi-directional sync", icon: "📥", color: "blue" },
                    { label: "Vectorization", desc: "Semantic memory", icon: "⚡", color: "purple" },
                    { label: "TruthLayer", desc: "Governed knowledge", icon: "🧠", color: "gold" }
                  ].map((item, idx) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.6 + idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg bg-${item.color}-500/10 border border-${item.color}-500/20 flex items-center justify-center shrink-0 text-lg`}>
                          {item.icon}
                        </div>
                        <div className="flex-1 bg-bg-elevated/50 p-3 rounded-lg text-left">
                          <div className="text-sm font-medium">{item.label}</div>
                          <div className="text-xs text-text-dim">{item.desc}</div>
                        </div>
                        {idx < 2 && <ArrowDown className="w-4 h-4 text-white/20" />}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
