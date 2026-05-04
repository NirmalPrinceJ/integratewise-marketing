"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const stats = [
  { value: "$8M+", label: "Revenue Protected" },
  { value: "70+", label: "Tool Connectors" },
  { value: "14hrs", label: "Saved / Week" },
  { value: "12%", label: "NRR Uplift" },
]

export function HeroSection() {
  return (
    <section
      id="pain-hero"
      className="relative pt-32 pb-24 px-6 overflow-hidden min-h-[700px] flex items-center"
    >
      {/* Nexify: large tile/mosaic background */}
      <div className="absolute inset-0 bg-tiles pointer-events-none" />

      {/* Nexify: warm amber spotlight rising from bottom-center */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />

      {/* Warm amber orb for depth — upper right */}
      <div className="orb w-[600px] h-[600px] bg-amber-500/[0.06] top-[-180px] right-[-100px]" />
      {/* Subtle warm orb left */}
      <div className="orb w-[400px] h-[400px] bg-orange-400/[0.04] bottom-[-60px] left-[-160px]" />

      <div className="max-w-7xl mx-auto relative z-10 text-center w-full">

        {/* Nexify-style badge — minimal, cream-tinted */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="inline-flex items-center gap-2 bg-[#F0D8B5]/[0.08] border border-[#F0D8B5]/20 rounded-full px-4 py-2 mb-10 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#F0D8B5] dot-pulse inline-block"></span>
          <span className="text-[#F0D8B5] text-sm font-medium tracking-wide">Early Access Open</span>
        </motion.div>

        {/* Headline — large, warm-tinted, Nexify weight */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.06 }}
          className="text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-[1.05] tracking-tight text-[#F5ECDF]"
        >
          Stop being the{" "}
          <span className="bg-gradient-to-r from-orange-300 via-amber-300 to-[#F0D8B5] bg-clip-text text-transparent">
            human API
          </span>
          <br />between your tools.
        </motion.h1>

        {/* Sub-tagline — cream shimmer */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="text-2xl font-semibold max-w-3xl mx-auto mb-8 leading-relaxed gradient-text-animated"
        >
          Give your work a Digital Memory.
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-lg text-[#8A8070] max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          The Spine turns scattered data into Digital Memory. Your Twin reasons in the Workspace and waits for your Approval before anything ships.
        </motion.p>

        {/* Trust pills — minimal, Nexify style */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.24 }}
          className="flex items-center justify-center gap-3 text-xs text-[#5A5248] mb-10 flex-wrap"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06]">
            <i className="fa-solid fa-check text-green-500 text-[10px]"></i>
            <span>Unified Data</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06]">
            <i className="fa-solid fa-wand-magic-sparkles text-[#F0D8B5] text-[10px]"></i>
            <span>AI Reasoning</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06]">
            <i className="fa-solid fa-lock text-[#F0D8B5] text-[10px]"></i>
            <span>Your Approval</span>
          </span>
        </motion.div>

        {/* CTAs — Nexify flat cream primary button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.28 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <Link
            href="/demo"
            className="btn-cream inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg"
          >
            Book a Demo <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="#fragmentation-visual"
            className="btn-outline inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg"
          >
            See the Problem
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.42 }}
          className="text-sm text-[#5A5248] mt-6"
        >
          Private beta · Truth you own. AI you rent. Approval in between.
        </motion.p>

        {/* Stats bar — warm cream numbers */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
          className="mt-16 pt-10 border-t border-white/[0.05]"
        >
          <div className="flex flex-wrap justify-center gap-x-14 gap-y-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.55 + i * 0.08 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-[#F0D8B5] stat-glow">{stat.value}</div>
                <div className="text-xs text-[#5A5248] mt-1 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
