import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  ArrowRight,
  Unplug,
  BrainCircuit,
  AlertTriangle,
  FileWarning,
  Layers,
  Puzzle,
} from "lucide-react";

export function ContextCrisisHero() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <Badge
            variant="secondary"
            className="bg-neutral-100 text-neutral-800 border-neutral-200"
          >
            The Smart Workspace for Indian Enterprise
          </Badge>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="mx-auto max-w-4xl text-center text-4xl md:text-6xl lg:text-7xl tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          From{" "}
          <span className="text-black underline decoration-4 decoration-neutral-200 underline-offset-4">
            Scattered Data
          </span>{" "}
          to{" "}
          <span className="text-black italic">Clear, Confident Decisions</span>
        </motion.h1>

        <motion.p
          className="mx-auto max-w-2xl text-center text-lg text-muted-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          A workspace that connects every tool, every team, and every piece of
          information — so nothing falls through the cracks.
        </motion.p>

        {/* Two-column crisis cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {/* Tool Sprawl */}
          <motion.div
            className="bg-white border border-neutral-200 rounded-2xl p-8 text-center group hover:border-black transition-colors shadow-sm"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <div className="mx-auto h-16 w-16 bg-neutral-50 border border-neutral-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors">
              <Puzzle className="h-8 w-8" />
            </div>
            <h3 className="text-xl mb-2" style={{ fontWeight: 700 }}>
              Tool Sprawl
            </h3>
            <p className="text-sm text-neutral-500 italic">
              "Too many tools. Too little clarity."
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              Your business runs on 8–12 disconnected apps. Information is
              scattered. Nobody has the full picture.
            </p>
          </motion.div>

          {/* AI Without Accountability */}
          <motion.div
            className="bg-white border border-neutral-200 rounded-2xl p-8 text-center group hover:border-black transition-colors shadow-sm"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <div className="mx-auto h-16 w-16 bg-neutral-50 border border-neutral-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors">
              <BrainCircuit className="h-8 w-8" />
            </div>
            <h3 className="text-xl mb-2" style={{ fontWeight: 700 }}>
              AI Without Accountability
            </h3>
            <p className="text-sm text-neutral-500 italic">
              "Today's AI gives answers without proof or oversight"
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              AI that acts on its own is a risk. It generates answers without
              evidence, context, or your approval.
            </p>
          </motion.div>
        </div>

        {/* $4M Red Account Story */}
        <motion.div
          className="max-w-4xl mx-auto bg-black text-white rounded-2xl p-8 lg:p-12 relative overflow-hidden mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          {/* Grid bg */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />
          <div className="relative z-10 flex items-start gap-6">
            <div className="shrink-0 h-14 w-14 bg-amber-500/20 rounded-xl flex items-center justify-center">
              <AlertTriangle className="h-7 w-7 text-amber-400" />
            </div>
            <div>
              <h3
                className="text-2xl md:text-3xl mb-3"
                style={{ fontWeight: 700 }}
              >
                The $4M Red Account Story
              </h3>
              <p className="text-neutral-300 mb-4">
                IntegrateWise saved a ₹3.3 Cr renewal by connecting scattered
                information into one unified view. Three critical support issues,
                a key contact going silent, and a payment failure — all detected
                and surfaced 29 days before renewal.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs rounded-full border border-red-500/30">
                  3 Critical Issues
                </span>
                <span className="px-3 py-1 bg-amber-500/20 text-amber-400 text-xs rounded-full border border-amber-500/30">
                  Key Contact Silent 12 Days
                </span>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">
                  Renewal Saved
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
        >
          <Button
            size="lg"
            className="w-full sm:w-auto bg-black text-white hover:bg-neutral-800 border-0 h-12 px-8 text-base"
          >
            Start Free — 60 Second Setup
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto h-12 px-8 text-base"
          >
            Book a Demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
}