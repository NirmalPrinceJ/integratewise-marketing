"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function PlatformHero() {
  return (
    <section id="hero-section" className="relative pt-32 pb-20 px-6 overflow-hidden flex items-center min-h-[800px]">
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 blob-bg blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
            <span>🌐</span>
            <span className="text-blue-300 text-sm font-medium">The Universal Data Layer</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            The Adaptive Spine.<br />
            <span className="gradient-text">
              Your Living Memory.
            </span>
          </h1>

          <p className="text-xl text-text-secondary mb-10 leading-relaxed">
            Evolving from day-zero into a living memory. The Adaptive Spine ingests data from 16 live, 40+ in beta sources, normalizes the chaos, and creates a unified foundation for your entire business.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
            <Link
              href="#demo"
              className="bg-gold hover:bg-gold-light text-bg-main px-10 py-4 rounded-xl font-bold text-lg transition-all gold-glow flex items-center gap-2"
            >
              Start Building Memory <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#how-it-works"
              className="text-text-secondary hover:text-text-primary font-medium flex items-center gap-2 transition-colors"
            >
              See how it works <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex items-center gap-4 text-sm text-text-dim">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-bg-elevated border-2 border-bg-main flex items-center justify-center text-blue-400">
                💼
              </div>
              <div className="w-10 h-10 rounded-full bg-bg-elevated border-2 border-bg-main flex items-center justify-center text-purple-400">
                💬
              </div>
              <div className="w-10 h-10 rounded-full bg-bg-elevated border-2 border-bg-main flex items-center justify-center text-green-400">
                🎫
              </div>
            </div>
            <span>Ingests from 16 live, 40+ in beta sources</span>
          </div>
        </motion.div>

        {/* Right Visualization */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-96 lg:h-[600px] flex items-center justify-center"
        >
          {/* Vertical gradient spine */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-transparent via-blue-500 to-purple-500 shadow-[0_0_30px_rgba(59,130,246,0.8)]" />

          {/* Floating data nodes */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/4 left-10 glass-card p-4 rounded-2xl border border-blue-500/30 flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-lg">
              💾
            </div>
            <div>
              <div className="text-sm font-semibold">Structured Data</div>
              <div className="text-xs text-text-dim">CRM, ERP, Billing</div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
            className="absolute top-1/2 right-10 glass-card p-4 rounded-2xl border border-purple-500/30 flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center text-lg">
              💬
            </div>
            <div>
              <div className="text-sm font-semibold">Unstructured</div>
              <div className="text-xs text-text-dim">Slack, Email, Docs</div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
            className="absolute bottom-1/4 left-20 glass-card p-4 rounded-2xl border border-gold/30 flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center text-lg">
              🧠
            </div>
            <div>
              <div className="text-sm font-semibold">AI Session</div>
              <div className="text-xs text-text-dim">Decisions, Context</div>
            </div>
          </motion.div>

          {/* Central core */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="relative z-10 w-40 h-40 rounded-full glass-card border border-blue-500/50 flex items-center justify-center shadow-xl backdrop-blur-2xl"
          >
            <div className="text-center">
              <div className="text-4xl mb-2">📚</div>
              <div className="font-bold text-sm">Unified Foundation</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
