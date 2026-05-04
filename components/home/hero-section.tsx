"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const stats = [
  { value: "$8M+", label: "Revenue Protected" },
  { value: "70+", label: "Tool Connectors" },
  { value: "14hrs", label: "Saved per Week" },
  { value: "12%", label: "NRR Uplift" },
]

export function HeroSection() {
  return (
    <section
      id="pain-hero"
      className="relative pt-32 pb-24 px-6 overflow-hidden min-h-[700px] flex items-center"
    >
      {/* Background layers */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />

      {/* Color orbs for depth */}
      <div className="orb w-[640px] h-[640px] bg-gold/[0.07] top-[-200px] right-[-120px]" />
      <div className="orb w-[480px] h-[480px] bg-purple-500/[0.05] bottom-[-80px] left-[-180px]" />
      <div className="orb w-[360px] h-[360px] bg-blue-500/[0.04] top-[80px] left-[10%]" />

      <div className="max-w-7xl mx-auto relative z-10 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-8 backdrop-blur-sm"
        >
          <span className="inline-block"><i className="fa-solid fa-triangle-exclamation text-red-400"></i></span>
          <span className="text-red-300 text-sm font-medium">The Hidden Cost of Modern Work</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          className="text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          Stop being the{" "}
          <span className="bg-gradient-to-r from-red-400 via-orange-400 to-gold bg-clip-text text-transparent">
            human API
          </span>
          <br />between your tools.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="text-2xl font-semibold max-w-3xl mx-auto mb-8 leading-relaxed gradient-text-animated"
        >
          Give your work a Digital Memory.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-lg text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          The Spine turns scattered data into Digital Memory. Your Twin reasons in the Workspace and waits for your Approval before anything ships.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
          className="flex items-center justify-center gap-4 text-xs text-text-dim mb-8 flex-wrap max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/8">
            <i className="fa-solid fa-check text-green-400"></i>
            <span>Unified Data</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/8">
            <i className="fa-solid fa-wand-magic-sparkles text-purple-400"></i>
            <span>AI Reasoning</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/8">
            <i className="fa-solid fa-lock text-gold"></i>
            <span>Your Approval</span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.28 }}
          className="flex items-center justify-center gap-4"
        >
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-bg-main px-8 py-4 rounded-lg text-lg font-semibold transition-all gold-glow hover:scale-105 transform"
          >
            Book a Demo <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="#fragmentation-visual"
            className="inline-flex items-center gap-2 glass-card px-8 py-4 rounded-lg text-lg font-semibold hover:border-gold/30 transition-all text-text-secondary hover:text-text-primary"
          >
            See the Problem
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm text-text-dim mt-6"
        >
          Private beta · Truth you own. AI you rent. Approval in between.
        </motion.p>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
          className="mt-16 pt-10 border-t border-white/[0.06]"
        >
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.55 + i * 0.08 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-gold stat-glow">{stat.value}</div>
                <div className="text-xs text-text-dim mt-1 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
