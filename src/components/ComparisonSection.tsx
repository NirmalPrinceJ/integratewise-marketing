/**
 * Pain-led: scattered data, scattered teams → One Unified Intelligence Layer, one product for everyone.
 * 4-column comparison: Automation Tools, CRMs, AI-Native Apps vs IntegrateWise
 */
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Check, X } from "lucide-react";
import { Link } from "react-router";
import { FadeIn } from "./motion/AnimateIn";

const columns = [
  {
    title: "Automation Tools",
    examples: "ZAPIER, MAKE, N8N",
    features: [
      { text: "Move data A→B", has: true },
      { text: "Intelligence", has: false },
      { text: "Workspace", has: false },
      { text: "AI Memory", has: false },
    ],
    cta: "Learn more",
    ctaTo: "/platform",
    variant: "default" as const,
  },
  {
    title: "CRMs",
    examples: "SALESFORCE, HUBSPOT",
    features: [
      { text: "Store records", has: true },
      { text: "Real-time context", has: false },
      { text: "Cross-tool view", has: false },
      { text: "Document intelligence", has: false },
    ],
    cta: "Learn more",
    ctaTo: "/platform",
    variant: "default" as const,
  },
  {
    title: "AI-Native Apps",
    examples: "NEWER AGENTS",
    features: [
      { text: "Task completion", has: true },
      { text: "Human control", has: false },
      { text: "Persistent memory", has: false },
      { text: "Work preservation", has: false },
    ],
    cta: "Learn more",
    ctaTo: "/platform",
    variant: "default" as const,
  },
  {
    title: "IntegrateWise",
    examples: "THE DIFFERENCE",
    features: [
      { text: "Preserved work layer", has: true },
      { text: "Background intelligence", has: true },
      { text: "Human approvals", has: true },
      { text: "Continuous learning", has: true },
    ],
    cta: "Get started",
    ctaTo: "/book-demo",
    variant: "highlight" as const,
  },
];

export function ComparisonSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="comparison" ref={ref} className="py-24 lg:py-32 bg-gray-50/80">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="text-[#111827]">Scattered data. Scattered teams.</span>
            <br />
            <span className="text-[#EC4899]">One Unified Intelligence Layer. One product. Everyone aligned.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-500">
            The same Unified Intelligence Layer solves the Chennai divide, the CS paradox, and tool sprawl—for every team, in one place.
          </p>
        </FadeIn>

        <motion.div
          className="max-w-6xl mx-auto rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {columns.map((col, i) => (
              <div
                key={col.title}
                className={`p-6 lg:p-8 border-b md:border-b-0 md:border-r last:border-r-0 ${
                  col.variant === "highlight"
                    ? "bg-[#1e3a5f] text-white border-gray-200/50"
                    : "bg-white text-gray-900 border-gray-100"
                }`}
              >
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-1">
                  {col.examples}
                </h3>
                <h4 className={`text-xl font-bold mb-6 ${col.variant === "highlight" ? "text-white" : "text-[#111827]"}`}>
                  {col.title}
                </h4>
                <ul className="space-y-4 mb-8">
                  {col.features.map((f) => (
                    <li key={f.text} className="flex items-start gap-3">
                      {f.has ? (
                        <Check className="w-5 h-5 shrink-0 text-[#EC4899]" strokeWidth={2.5} />
                      ) : (
                        <X className="w-5 h-5 shrink-0 text-gray-300" strokeWidth={2.5} />
                      )}
                      <span className={col.variant === "highlight" ? "text-white/90" : "text-gray-600"}>
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link to={col.ctaTo}>
                  <span
                    className={`inline-flex items-center justify-center w-full py-3 px-4 rounded-lg font-semibold text-sm transition-all ${
                      col.variant === "highlight"
                        ? "bg-[#EC4899] hover:bg-[#EC4899]/90 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                    }`}
                  >
                    {col.cta}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
