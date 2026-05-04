"use client"

import { motion } from "framer-motion"

export function FragmentationSection() {
  return (
    <section className="py-24 px-6 bg-bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual Representation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[600px] glass-card rounded-2xl overflow-hidden p-8"
          >
            {/* Animated floating cards */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-8 left-8 glass-card p-4 rounded-xl w-64 z-20"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <span className="text-xs text-text-primary font-medium">Slack #urgent</span>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-white/10 rounded w-full" />
                <div className="h-2 bg-white/10 rounded w-4/5" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, delay: 0.3 }}
              className="absolute top-32 right-8 glass-card p-4 rounded-xl w-72 z-20"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-orange-400" />
                <span className="text-xs text-text-primary font-medium">Gmail - Escalation</span>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-white/10 rounded w-full" />
                <div className="h-2 bg-white/10 rounded w-5/6" />
                <div className="h-2 bg-white/10 rounded w-3/4" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, delay: 0.6 }}
              className="absolute bottom-24 left-12 glass-card p-4 rounded-xl w-64 z-20"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-xs text-text-primary font-medium">Salesforce</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="h-8 bg-white/5 rounded" />
                <div className="h-8 bg-white/5 rounded" />
              </div>
            </motion.div>

            {/* Central user icon with pulse */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center shadow-2xl z-30"
            >
              <div className="text-bg-main text-4xl">👤</div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
              />
            </motion.div>

            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
              <line x1="120" y1="100" x2="50%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="4,4" />
              <line x1="80%" y1="160" x2="50%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="4,4" />
              <line x1="180" y1="450" x2="50%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="4,4" />
            </svg>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <h2 className="text-4xl font-bold">The Tab-Switching Tax</h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              We toggle between apps 9-10 times per hour. That&apos;s not just a delay—it&apos;s a{" "}
              <span className="text-text-primary font-semibold">cognitive reset</span>. By the time you find the context you need in your CRM, the insight from that morning&apos;s Slack thread is gone.
            </p>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl p-6 hover:border-red-500/30 transition-all hover-glow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                    <span className="text-2xl">⏳</span>
                  </div>
                  <div>
                    <h5 className="text-text-primary font-semibold text-lg mb-2">23% of Day Lost</h5>
                    <p className="text-text-dim text-sm">The average professional loses nearly a quarter of their day just switching between applications.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl p-6 hover:border-orange-500/30 transition-all hover-glow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0">
                    <span className="text-2xl">⚠️</span>
                  </div>
                  <div>
                    <h5 className="text-text-primary font-semibold text-lg mb-2">Critical Blind Spots</h5>
                    <p className="text-text-dim text-sm">Client escalations, renewal risks, and key decisions slip through the cracks because signals are isolated.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
