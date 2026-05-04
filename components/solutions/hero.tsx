"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"

export function SolutionsHero() {
  return (
    <section id="solutions-hero" className="relative pt-32 pb-24 px-6 overflow-hidden min-h-[700px] flex flex-col items-center justify-center text-center">
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="absolute top-20 right-20 w-96 h-96 blob-bg blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-bg-elevated/50 border border-white/10 rounded-full px-5 py-2 mb-8 backdrop-blur-sm shadow-lg"
        >
          <span className="text-gold text-sm font-medium uppercase tracking-wider">Solutions for Every Context</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight"
        >
          Perfect Memory For<br />
          <span className="bg-gradient-to-r from-text-primary via-gold to-gold-light bg-clip-text text-transparent">
            Your Specific Work
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Whether you&apos;re managing enterprise accounts, overseeing clinical trials, or directing supply chains, IntegrateWise adapts its memory layer to your exact domain.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            href="#demo"
            className="bg-gold hover:bg-gold-light text-bg-main px-8 py-4 rounded-xl font-semibold text-lg transition-all gold-glow shadow-lg flex items-center gap-2"
          >
            Find Your Solution <ArrowRight className="w-5 h-5" />
          </Link>
          <button className="glass-card hover:bg-bg-elevated/80 px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center gap-3 hover-glow">
            <Play className="w-5 h-5 text-gold" /> Watch Demo
          </button>
        </motion.div>
      </div>
    </section>
  )
}
