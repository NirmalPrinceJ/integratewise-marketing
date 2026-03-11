import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Download,
  Layers,
  Brain,
  ShieldCheck,
  RefreshCw,
  ArrowRight,
  Zap,
  Filter,
  FileSearch,
  Tags,
  FileOutput,
  CheckCircle2,
  ScanEye,
  LayoutGrid,
  Activity,
} from "lucide-react";

const phases = [
  {
    id: "load",
    label: "LOAD",
    sublabel: "Connect Everything",
    icon: Download,
    color: "#3b82f6",
    description:
      "Everything enters here. Tally invoices, WhatsApp messages, machine logs, attendance records. Connects with 200+ business tools seamlessly.",
    detail:
      "Whether it's spreadsheets, messages, photos of handwritten ledgers, or data from any app — everything flows into one place.",
  },
  {
    id: "normalize",
    label: "ORGANIZE",
    sublabel: "Smart Cleanup",
    icon: Layers,
    color: "#8b5cf6",
    description:
      "Your data is automatically cleaned, organized, and checked for errors through 8 smart steps.",
    detail:
      "Duplicates removed. Dates standardized. Currencies converted. Tax numbers validated. Errors caught. Routed to the right team.",
    stages: [
      { name: "Identify", icon: FileSearch, hint: "What is this?" },
      { name: "Categorize", icon: Tags, hint: "Where does it go?" },
      { name: "Clean", icon: Filter, hint: "Remove duplicates" },
      { name: "Standardize", icon: FileOutput, hint: "Fix formats" },
      { name: "Extract", icon: FileSearch, hint: "Pull key info" },
      { name: "Verify", icon: CheckCircle2, hint: "Check accuracy" },
      { name: "Cross-Check", icon: ScanEye, hint: "Spot errors" },
      { name: "Route", icon: LayoutGrid, hint: "Send to team" },
    ],
  },
  {
    id: "think",
    label: "THINK",
    sublabel: "Connect the Dots",
    icon: Brain,
    color: "#06b6d4",
    description:
      "The system connects the dots. It recognizes the same person across tools, spots patterns, and predicts what's coming next.",
    detail:
      "Rahul in WhatsApp = Rahul Kumar in Tally = rahul@acme.com. Payment usually arrives by Day 3 but it's Day 5? You'll know immediately.",
  },
  {
    id: "govern",
    label: "APPROVE",
    sublabel: "You Stay in Control",
    icon: ShieldCheck,
    color: "#f59e0b",
    description:
      "Every suggestion waits for your approval. No action happens without you. Full proof behind every recommendation.",
    detail:
      "Unlike tools that act silently, IntegrateWise shows its reasoning and waits for your decision before doing anything.",
  },
  {
    id: "repeat",
    label: "LEARN",
    sublabel: "Gets Smarter Over Time",
    icon: RefreshCw,
    color: "#22c55e",
    description:
      "The system learns from every decision you make. Ignored alerts get tuned down. Acted-on warnings get priority. It gets smarter every day.",
    detail:
      "Like a heartbeat — Load → Organize → Think → Approve → Learn → Repeat. Your business data keeps flowing, never stagnant.",
  },
];

export function GovernedLoopSection() {
  const [activePhase, setActivePhase] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [normalizeStage, setNormalizeStage] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Autoplay through phases
  useEffect(() => {
    if (!autoPlay) return;
    timerRef.current = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % phases.length);
    }, 4000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoPlay]);

  // Animate normalize sub-stages
  useEffect(() => {
    if (phases[activePhase].id !== "normalize") {
      setNormalizeStage(0);
      return;
    }
    setNormalizeStage(0);
    const interval = setInterval(() => {
      setNormalizeStage((prev) => {
        if (prev >= 7) return 0;
        return prev + 1;
      });
    }, 450);
    return () => clearInterval(interval);
  }, [activePhase]);

  const handleClick = (idx: number) => {
    setAutoPlay(false);
    setActivePhase(idx);
    // Resume autoplay after 10s
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const current = phases[activePhase];

  return (
    <section
      id="how-it-works"
      className="py-20 lg:py-28 bg-black text-white overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            className="text-sm text-neutral-400 mb-3 tracking-wide uppercase"
            style={{ fontWeight: 500 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How IntegrateWise Works
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            The{" "}
            <span className="text-white underline decoration-2 decoration-neutral-700 underline-offset-4">
              Smart
            </span>{" "}
            Loop
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-neutral-400"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Your data flows through five simple steps. Load → Organize → Think →
            Approve → Learn. Every step transparent. Every action governed by you.
          </motion.p>
        </div>

        {/* Phase Selector - Horizontal */}
        <div className="flex items-center justify-center gap-2 md:gap-4 mb-12 flex-wrap">
          {phases.map((phase, idx) => {
            const isActive = idx === activePhase;
            const Icon = phase.icon;
            return (
              <div key={phase.id} className="flex items-center gap-2 md:gap-4">
                <motion.button
                  onClick={() => handleClick(idx)}
                  className={`relative flex flex-col items-center gap-2 px-4 py-3 md:px-6 md:py-4 rounded-xl transition-all cursor-pointer border ${
                    isActive
                      ? "bg-white text-black border-white shadow-lg shadow-white/10"
                      : "bg-neutral-900 text-neutral-400 border-neutral-800 hover:border-neutral-600"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon
                    className="h-5 w-5 md:h-6 md:w-6"
                    style={{ color: isActive ? "black" : phase.color }}
                  />
                  <span
                    className="text-[10px] md:text-xs uppercase tracking-wider"
                    style={{ fontWeight: 700 }}
                  >
                    {phase.label}
                  </span>
                  {/* Progress bar */}
                  {isActive && autoPlay && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 rounded-full"
                      style={{ backgroundColor: phase.color }}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 4, ease: "linear" }}
                      key={`progress-${idx}-${Date.now()}`}
                    />
                  )}
                </motion.button>
                {idx < phases.length - 1 && (
                  <ArrowRight className="h-4 w-4 text-neutral-700 hidden md:block" />
                )}
              </div>
            );
          })}
        </div>

        {/* Phase Content Display */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {/* Left: Visual */}
              <div className="flex items-center justify-center">
                <PhaseVisual
                  phase={current}
                  normalizeStage={normalizeStage}
                />
              </div>

              {/* Right: Info */}
              <div className="flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="h-12 w-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${current.color}20` }}
                    >
                      <current.icon
                        className="h-6 w-6"
                        style={{ color: current.color }}
                      />
                    </div>
                    <div>
                      <h3
                        className="text-2xl text-white"
                        style={{ fontWeight: 700 }}
                      >
                        {current.label}
                      </h3>
                      <p className="text-sm text-neutral-500">
                        {current.sublabel}
                      </p>
                    </div>
                  </div>

                  <p className="text-neutral-300 mb-4 leading-relaxed">
                    {current.description}
                  </p>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {current.detail}
                  </p>

                  {/* Normalize sub-stages list */}
                  {current.id === "normalize" && current.stages && (
                    <div className="mt-6 grid grid-cols-2 gap-2">
                      {current.stages.map((stage, si) => {
                        const StageIcon = stage.icon;
                        const isStageActive = si === normalizeStage;
                        return (
                          <motion.div
                            key={stage.name}
                            className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all text-xs ${
                              isStageActive
                                ? "bg-purple-500/20 border-purple-500/50 text-purple-300"
                                : si < normalizeStage
                                ? "bg-neutral-800 border-neutral-700 text-green-400"
                                : "bg-neutral-900 border-neutral-800 text-neutral-500"
                            }`}
                            animate={
                              isStageActive ? { scale: [1, 1.03, 1] } : {}
                            }
                            transition={{ duration: 0.3 }}
                          >
                            <StageIcon className="h-3 w-3 shrink-0" />
                            <span style={{ fontWeight: 600 }}>
                              {stage.name}
                            </span>
                            {si < normalizeStage && (
                              <CheckCircle2 className="h-3 w-3 ml-auto text-green-400" />
                            )}
                            {isStageActive && (
                              <Activity className="h-3 w-3 ml-auto animate-pulse" />
                            )}
                          </motion.div>
                        );
                      })}
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Note */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-full text-sm text-neutral-400">
            <Zap className="h-4 w-4 text-green-500" />
            Hosted on India's fastest edge network — instant response times
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* Phase Visual Component */
function PhaseVisual({
  phase,
  normalizeStage,
}: {
  phase: (typeof phases)[0];
  normalizeStage: number;
}) {
  const Icon = phase.icon;

  if (phase.id === "load") {
    return <LoadVisual color={phase.color} />;
  }
  if (phase.id === "normalize") {
    return (
      <NormalizeVisual
        color={phase.color}
        activeStage={normalizeStage}
        stages={phase.stages!}
      />
    );
  }
  if (phase.id === "think") {
    return <ThinkVisual color={phase.color} />;
  }
  if (phase.id === "govern") {
    return <GovernVisual color={phase.color} />;
  }
  if (phase.id === "repeat") {
    return <RepeatVisual color={phase.color} />;
  }

  return null;
}

/* --- LOAD VISUAL --- */
function LoadVisual({ color }: { color: string }) {
  const sources = [
    { label: "Tally", x: 30, y: 60 },
    { label: "WhatsApp", x: 30, y: 140 },
    { label: "Jira", x: 30, y: 220 },
    { label: "Biometric", x: 30, y: 300 },
  ];

  return (
    <div className="relative w-full max-w-md h-[360px]">
      {/* Central funnel */}
      <motion.div
        className="absolute right-8 top-1/2 -translate-y-1/2 w-24 h-24 rounded-2xl border-2 flex items-center justify-center"
        style={{ borderColor: color, backgroundColor: `${color}10` }}
        animate={{ boxShadow: [`0 0 20px ${color}30`, `0 0 40px ${color}10`, `0 0 20px ${color}30`] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Download className="h-8 w-8" style={{ color }} />
      </motion.div>

      {/* Sources */}
      {sources.map((s, i) => (
        <motion.div
          key={s.label}
          className="absolute flex items-center gap-2"
          style={{ left: s.x, top: s.y }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: i * 0.15 }}
        >
          <div className="px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-xs text-neutral-300" style={{ fontWeight: 600 }}>
            {s.label}
          </div>
          {/* Animated data particle */}
          <motion.div
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: color }}
            animate={{
              x: [0, 120, 160],
              opacity: [1, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

/* --- NORMALIZE VISUAL --- */
function NormalizeVisual({
  color,
  activeStage,
  stages,
}: {
  color: string;
  activeStage: number;
  stages: { name: string; icon: any; hint: string }[];
}) {
  return (
    <div className="w-full max-w-md">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-xl">
        {/* Pipeline header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
          <span className="text-[10px] text-neutral-500 uppercase tracking-wider" style={{ fontWeight: 700 }}>
            Smart Cleanup Steps
          </span>
          <span className="ml-auto text-[10px] text-neutral-600 font-mono">
            Stage {activeStage + 1}/8
          </span>
        </div>

        {/* Stages */}
        <div className="space-y-1.5">
          {stages.map((stage, i) => {
            const StageIcon = stage.icon;
            const isActive = i === activeStage;
            const isDone = i < activeStage;
            return (
              <motion.div
                key={stage.name}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                  isActive
                    ? "bg-purple-500/15 border border-purple-500/40"
                    : isDone
                    ? "bg-neutral-800/50 border border-transparent"
                    : "border border-transparent"
                }`}
                animate={isActive ? { x: [0, 4, 0] } : {}}
                transition={{ duration: 0.3 }}
              >
                <div
                  className={`h-6 w-6 rounded flex items-center justify-center shrink-0 ${
                    isActive
                      ? "bg-purple-500 text-white"
                      : isDone
                      ? "bg-green-500/20 text-green-400"
                      : "bg-neutral-800 text-neutral-600"
                  }`}
                >
                  {isDone ? (
                    <CheckCircle2 className="h-3 w-3" />
                  ) : (
                    <StageIcon className="h-3 w-3" />
                  )}
                </div>
                <span
                  className={`text-xs ${
                    isActive
                      ? "text-purple-300"
                      : isDone
                      ? "text-green-400/70"
                      : "text-neutral-600"
                  }`}
                  style={{ fontWeight: isActive ? 700 : 500 }}
                >
                  {stage.name}
                </span>
                <span
                  className={`ml-auto text-[10px] ${
                    isActive
                      ? "text-purple-400"
                      : isDone
                      ? "text-green-500/50"
                      : "text-neutral-700"
                  }`}
                >
                  {isDone ? "Done" : isActive ? stage.hint : "—"}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Processing bar */}
        <div className="mt-4 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: color }}
            animate={{ width: `${((activeStage + 1) / 8) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="mt-2 text-[10px] text-neutral-600 font-mono text-right">
          Happens instantly
        </div>
      </div>
    </div>
  );
}

/* --- THINK VISUAL --- */
function ThinkVisual({ color }: { color: string }) {
  return (
    <div className="w-full max-w-md flex items-center justify-center">
      <div className="relative" style={{ minWidth: 320, minHeight: 320 }}>
        {/* Central brain node */}
        <motion.div
          className="w-28 h-28 rounded-full border-2 flex items-center justify-center mx-auto"
          style={{ borderColor: color, backgroundColor: `${color}10` }}
          animate={{
            boxShadow: [
              `0 0 0px ${color}00`,
              `0 0 30px ${color}30`,
              `0 0 0px ${color}00`,
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Brain className="h-10 w-10" style={{ color }} />
        </motion.div>

        {/* Orbiting nodes */}
        {[
          { label: "Rahul (WhatsApp)", angle: -60, delay: 0 },
          { label: "Rahul Kumar (Tally)", angle: 0, delay: 0.5 },
          { label: "rahul@acme.com", angle: 60, delay: 1 },
        ].map((node, i) => {
          const radius = 140;
          const rad = (node.angle * Math.PI) / 180;
          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius;
          return (
            <motion.div
              key={node.label}
              className="absolute"
              style={{
                left: `calc(50% + ${x}px - 60px)`,
                top: `calc(50% + ${y}px - 14px)`,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: node.delay }}
            >
              <motion.div
                className="px-3 py-1.5 bg-neutral-800 border border-neutral-700 rounded-lg text-[10px] text-neutral-300 whitespace-nowrap"
                style={{ fontWeight: 600 }}
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: node.delay,
                }}
              >
                {node.label}
              </motion.div>
            </motion.div>
          );
        })}

        {/* Connecting lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: 320,
            height: 320,
          }}
        >
          {[-60, 0, 60].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const x = Math.cos(rad) * 70 + 160;
            const y = Math.sin(rad) * 70 + 160;
            const x2 = Math.cos(rad) * 130 + 160;
            const y2 = Math.sin(rad) * 130 + 160;
            return (
              <motion.line
                key={i}
                x1={x}
                y1={y}
                x2={x2}
                y2={y2}
                stroke={color}
                strokeWidth="1"
                strokeDasharray="4 4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 0.3 + i * 0.2 }}
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
}

/* --- GOVERN VISUAL --- */
function GovernVisual({ color }: { color: string }) {
  const [approved, setApproved] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setApproved(true), 2000);
    const reset = setTimeout(() => setApproved(false), 3500);
    const loop = setInterval(() => {
      setTimeout(() => setApproved(true), 0);
      setTimeout(() => setApproved(false), 1500);
    }, 3500);
    return () => {
      clearTimeout(t);
      clearTimeout(reset);
      clearInterval(loop);
    };
  }, []);

  return (
    <div className="w-full max-w-md">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center gap-2 mb-6">
          <ShieldCheck className="h-5 w-5" style={{ color }} />
          <span className="text-xs text-neutral-400 uppercase tracking-wider" style={{ fontWeight: 700 }}>
            Human Approval Gate
          </span>
        </div>

        {/* Pending action */}
        <div className="bg-neutral-800 rounded-xl p-4 mb-4 border border-neutral-700">
          <div className="flex items-start gap-3">
            <div className="h-8 w-8 bg-amber-500/20 rounded-lg flex items-center justify-center shrink-0">
              <Zap className="h-4 w-4 text-amber-400" />
            </div>
            <div>
              <div className="text-sm text-white" style={{ fontWeight: 600 }}>
                AI Suggestion: Send renewal reminder
              </div>
              <div className="text-[11px] text-neutral-500 mt-1">
                FinanceFlow Solutions — Renewal in 29 days
              </div>
              <div className="text-[10px] text-neutral-600 mt-2 font-mono">
                Why: 3 critical issues · Key contact silent 12d · Payment failed 2x
              </div>
            </div>
          </div>
        </div>

        {/* Approval state */}
        <AnimatePresence mode="wait">
          {!approved ? (
            <motion.div
              key="waiting"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center gap-4"
            >
              <div className="px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-lg text-amber-400 text-xs flex items-center gap-2" style={{ fontWeight: 700 }}>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <RefreshCw className="h-3 w-3" />
                </motion.div>
                Awaiting Human Approval...
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="approved"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center"
            >
              <div className="px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-xs flex items-center gap-2" style={{ fontWeight: 700 }}>
                <CheckCircle2 className="h-3 w-3" />
                Approved — Executing Action
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-4 text-center text-[10px] text-neutral-600">
          Nothing happens without your say-so. Full proof behind every action.
        </div>
      </div>
    </div>
  );
}

/* --- REPEAT VISUAL --- */
function RepeatVisual({ color }: { color: string }) {
  return (
    <div className="w-full max-w-md flex items-center justify-center">
      <div className="relative w-64 h-64">
        {/* Spinning outer ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-dashed"
          style={{ borderColor: `${color}40` }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Phase dots on the ring */}
        {phases.map((p, i) => {
          const angle = (i / phases.length) * 360 - 90;
          const rad = (angle * Math.PI) / 180;
          const x = Math.cos(rad) * 110 + 128;
          const y = Math.sin(rad) * 110 + 128;
          return (
            <motion.div
              key={p.id}
              className="absolute"
              style={{ left: x - 12, top: y - 12 }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            >
              <div
                className="h-6 w-6 rounded-full flex items-center justify-center text-[8px]"
                style={{
                  fontWeight: 700,
                  backgroundColor: `${p.color}30`,
                  color: p.color,
                  border: `1px solid ${p.color}50`,
                }}
              >
                {p.label[0]}
              </div>
            </motion.div>
          );
        })}

        {/* Center */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <div
            className="h-16 w-16 rounded-full flex items-center justify-center border-2"
            style={{
              borderColor: color,
              backgroundColor: `${color}10`,
            }}
          >
            <RefreshCw className="h-7 w-7" style={{ color }} />
          </div>
        </motion.div>

        {/* Pulse ring */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
          style={{ borderColor: color, width: 80, height: 80 }}
          animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </div>
  );
}