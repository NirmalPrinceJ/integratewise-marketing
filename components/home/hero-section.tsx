"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section
      id="pain-hero"
      className="relative pt-32 pb-24 px-6 overflow-hidden min-h-[700px] flex items-center"
    >
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="absolute top-20 right-20 w-96 h-96 blob-bg blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-8 backdrop-blur-sm"
        >
          <span className="inline-block"><i className="fa-solid fa-triangle-exclamation"></i></span>
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
          className="text-2xl text-gold font-semibold max-w-3xl mx-auto mb-8 leading-relaxed"
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
          <span className="inline-block"><i className="fa-solid fa-check text-green-400 mr-1"></i> Unified Data</span>
          <span className="text-text-dim">•</span>
          <span className="inline-block"><i className="fa-solid fa-wand-magic-sparkles text-purple-400 mr-1"></i> AI Reasoning</span>
          <span className="text-text-dim">•</span>
          <span className="inline-block"><i className="fa-solid fa-lock text-gold mr-1"></i> Your Approval</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
          className="flex items-center justify-center"
        >
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-bg-main px-8 py-4 rounded-lg text-lg font-semibold transition-all gold-glow"
          >
            Book a Demo <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm text-text-dim mt-8"
        >
          Private beta · Truth you own. AI you rent. Approval in between.
        </motion.p>
      </div>
    </section>
  )
}
