import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight, Play, Zap, Database, BrainCircuit, ShieldCheck,
  Activity, BarChart3, Users, Building2, CheckCircle2, TrendingUp
} from "lucide-react";
import { Logo } from "./logo";
import { DataFlowCanvas } from "../../canvas/DataFlowCanvas";

/* ─── Hero Section ────────────────────────────────────────────────────────── */

export function Hero() {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-[#059669]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-[#10b981]/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-[#059669]/10 text-[#059669] text-sm font-bold tracking-wide uppercase mb-6">
              Enterprise Integration
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-[#0f1a15] leading-tight mb-6 md:mb-8">
              The AI-Native{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#059669] to-[#10b981]">
                Integration Intelligence
              </span>{" "}
              Platform
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-slate-600 mb-8 md:mb-10 leading-relaxed">
              Don't just connect your tools. Turn your entire stack into an intelligent operating system that learns from your work — while humans stay in control.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => { window.location.hash = "app"; }}
                className="w-full sm:w-auto px-8 py-4 bg-[#10b981] hover:bg-[#047857] text-white rounded-full font-bold text-lg shadow-lg shadow-[#10b981]/30 transition-all flex items-center justify-center gap-2 group"
              >
                Start Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => { window.location.hash = "technical"; }}
                className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-slate-200 hover:border-[#059669] text-slate-700 hover:text-[#059669] rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5 fill-current" /> See architecture
              </button>
            </div>
          </motion.div>
        </div>

        {/* Architecture Visualization — "No Empty Dashboards" */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#0f1a15]/20 border border-slate-200/50 bg-white p-1.5">
            <DataFlowCanvas className="rounded-xl" />

            {/* Floating Element — Health Score */}
            <div className="absolute top-1/4 -left-4 sm:-left-10 hidden lg:block bg-white p-3 rounded-xl shadow-xl border border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
                <div>
                  <div className="text-[9px] text-slate-400 font-bold uppercase">Unified Intelligence Layer Health</div>
                  <div className="text-base font-black text-emerald-600">94.1%</div>
                </div>
              </div>
            </div>

            {/* Floating Element — AI Intelligence */}
            <div className="absolute bottom-1/4 -right-4 sm:-right-10 hidden lg:block bg-white p-3 rounded-xl shadow-xl border border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#10b981]/10 flex items-center justify-center text-[#10b981]">
                  <BrainCircuit className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[9px] text-slate-400 font-bold uppercase">AI Confidence</div>
                  <div className="text-base font-black text-[#0f1a15]">98.2%</div>
                </div>
              </div>
            </div>

            {/* Floating Element — Integration Count */}
            <div className="absolute -top-3 right-1/4 hidden lg:block bg-[#059669] text-white px-3 py-1.5 rounded-lg shadow-lg text-[10px] font-bold">
              12 tools connected
            </div>
          </div>
        </motion.div>

        {/* Social Proof Strip */}
        <div className="mt-16 md:mt-24 text-center">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Unifying data from world-class platforms</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16 opacity-40 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0">
            {["Salesforce", "HubSpot", "Zendesk", "Stripe", "Slack", "Jira"].map(name => (
              <div key={name} className="flex items-center gap-2 text-base md:text-xl font-bold text-[#0f1a15]">{name}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}