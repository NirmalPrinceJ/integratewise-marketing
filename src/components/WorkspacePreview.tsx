import { motion } from "motion/react";
import {
  Layers,
  Brain,
  MessageSquare,
  Activity,
  Monitor,
} from "lucide-react";

export function WorkspacePreview() {
  return (
    <section className="py-20 lg:py-28 bg-neutral-50 border-y border-neutral-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-14">
          <motion.p
            className="text-sm text-neutral-600 mb-3 tracking-wide uppercase"
            style={{ fontWeight: 500 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How Your Workspace Works
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A Workspace that{" "}
            <span className="text-black underline decoration-4 decoration-neutral-200 underline-offset-4">
              Thinks in Context
            </span>
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A clean workspace that shows what matters — plus a smart assistant
            that surfaces insights and waits for your approval before acting.
          </motion.p>
        </div>

        {/* Two Layer Visual */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Workspace */}
          <motion.div
            className="relative bg-white border border-neutral-200 rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Window chrome */}
            <div className="h-10 bg-neutral-100 border-b border-neutral-200 flex items-center px-4 gap-2">
              <div className="h-3 w-3 rounded-full bg-neutral-300" />
              <div className="h-3 w-3 rounded-full bg-neutral-300" />
              <div className="h-3 w-3 rounded-full bg-neutral-300" />
              <div className="ml-4 flex-1 h-5 bg-neutral-200 rounded max-w-xs" />
            </div>

            <div className="flex min-h-[400px]">
              {/* Sidebar */}
              <div className="w-48 bg-neutral-50 border-r border-neutral-200 p-4 hidden md:block">
                <div className="space-y-2">
                  {["Home", "Accounts", "Tasks", "Pipeline", "Docs"].map(
                    (item, i) => (
                      <motion.div
                        key={item}
                        className={`px-3 py-2 rounded-lg text-xs ${
                          i === 0
                            ? "bg-white border border-neutral-200 text-black"
                            : "text-neutral-400"
                        }`}
                        style={{ fontWeight: i === 0 ? 600 : 400 }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                      >
                        {item}
                      </motion.div>
                    )
                  )}
                </div>
              </div>

              {/* Main content */}
              <div className="flex-1 p-6">
                {/* Metrics Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {[
                    { label: "Tasks", val: "12", color: "" },
                    { label: "Meetings", val: "3", color: "" },
                    {
                      label: "Approvals",
                      val: "Waiting",
                      color: "text-amber-600",
                    },
                    { label: "Signals", val: "5", color: "" },
                  ].map((m, i) => (
                    <motion.div
                      key={m.label}
                      className="bg-neutral-50 border border-neutral-100 rounded-xl p-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                    >
                      <div
                        className="text-[10px] text-neutral-400 uppercase tracking-wider mb-1"
                        style={{ fontWeight: 700 }}
                      >
                        {m.label}
                      </div>
                      <div
                        className={`text-xl ${m.color || "text-neutral-900"}`}
                        style={{ fontWeight: 700 }}
                      >
                        {m.val}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Alert */}
                <motion.div
                  className="bg-white border border-red-200 rounded-lg p-3 flex items-start gap-3 mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <div className="h-4 w-4 bg-red-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <div className="h-2 w-2 bg-red-600 rounded-full animate-pulse" />
                  </div>
                  <div>
                    <div
                      className="text-xs text-red-700"
                      style={{ fontWeight: 700 }}
                    >
                      Renewal Risk — FinanceFlow Solutions
                    </div>
                    <div className="text-[10px] text-neutral-500 mt-0.5">
                      3 critical issues, key contact silent for 12 days
                    </div>
                  </div>
                </motion.div>

                {/* Content lines */}
                <div className="space-y-3">
                  {[80, 65, 45, 30].map((w, i) => (
                    <motion.div
                      key={i}
                      className="h-3 bg-neutral-100 rounded"
                      style={{ width: `${w}%` }}
                      initial={{ opacity: 0, scaleX: 0 }}
                      whileInView={{ opacity: 1, scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Main workspace label */}
            <motion.div
              className="absolute top-14 right-4 bg-white border border-neutral-300 rounded-full px-3 py-1 text-xs shadow-sm z-20"
              style={{ fontWeight: 700 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.9 }}
            >
              Your Workspace
            </motion.div>
          </motion.div>

          {/* Brain Overlay (floating) */}
          <motion.div
            className="absolute -right-4 md:-right-8 top-20 w-64 bg-black text-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-800 z-30"
            initial={{ opacity: 0, x: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {/* Header */}
            <div className="px-4 py-3 border-b border-neutral-800 flex items-center gap-2">
              <Brain className="h-4 w-4 text-neutral-400" />
              <span className="text-xs" style={{ fontWeight: 700 }}>
                Proactive Suggestions
              </span>
              <span className="ml-auto px-1.5 py-0.5 bg-neutral-800 text-neutral-400 text-[9px] rounded font-mono">
                AI
              </span>
            </div>

            <div className="p-4 space-y-3">
              {[
                {
                  text: "Expansion signal: TechServe usage up 34%",
                  type: "green",
                },
                { text: "FinanceFlow key contact went silent", type: "red" },
                { text: "Payment system issue auto-fixed", type: "neutral" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.1 + i * 0.15 }}
                >
                  <div
                    className={`h-1.5 w-1.5 rounded-full mt-1.5 shrink-0 ${
                      item.type === "green"
                        ? "bg-green-500"
                        : item.type === "red"
                        ? "bg-red-500"
                        : "bg-neutral-500"
                    }`}
                  />
                  <span className="text-[11px] text-neutral-300 leading-snug">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Approval gate */}
            <div className="px-4 pb-4">
              <motion.div
                className="bg-neutral-900 border border-neutral-700 rounded-lg p-3 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.5 }}
              >
                <div
                  className="text-[10px] text-amber-400 uppercase tracking-wider mb-1"
                  style={{ fontWeight: 700 }}
                >
                  Awaiting Your Approval
                </div>
                <div className="text-[10px] text-neutral-500">
                  You stay in control of every action
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}