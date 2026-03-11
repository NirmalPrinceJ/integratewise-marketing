import { motion } from "motion/react";
import {
  TrendingUp,
  Megaphone,
  Calculator,
  HeartHandshake,
  Factory,
  Stethoscope,
  GraduationCap,
  Store,
  Car,
  Building2,
  Briefcase,
  Scale,
} from "lucide-react";

const verticals = [
  { icon: TrendingUp, label: "Sales", color: "#3b82f6" },
  { icon: Megaphone, label: "Marketing", color: "#8b5cf6" },
  { icon: Calculator, label: "Finance", color: "#06b6d4" },
  { icon: HeartHandshake, label: "Customer Success", color: "#22c55e" },
  { icon: Factory, label: "Manufacturing", color: "#f59e0b" },
  { icon: Stethoscope, label: "Healthcare", color: "#ec4899" },
  { icon: GraduationCap, label: "Education", color: "#6366f1" },
  { icon: Store, label: "Retail", color: "#14b8a6" },
  { icon: Car, label: "Auto Dealership", color: "#f97316" },
  { icon: Building2, label: "Real Estate", color: "#64748b" },
  { icon: Briefcase, label: "Professional Services", color: "#a855f7" },
  { icon: Scale, label: "Legal & CA", color: "#0ea5e9" },
];

const comparison = [
  {
    context: "Data Source",
    traditional: "Guesswork & assumptions",
    integratewise: "Based on your real business data",
  },
  {
    context: "Actions",
    traditional: "Silent / Automated",
    integratewise: "You approve every action",
  },
  {
    context: "Proof",
    traditional: "Black Box",
    integratewise: "Complete audit trail for every step",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function RoleBasedIntelligence() {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-neutral-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Verticals */}
          <div>
            <motion.p
              className="text-sm text-neutral-600 mb-3 tracking-wide uppercase"
              style={{ fontWeight: 500 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Built for Every Business
            </motion.p>
            <motion.h2
              className="text-3xl md:text-4xl tracking-tight mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Smart Views for{" "}
              <span className="text-black underline decoration-4 decoration-neutral-200 underline-offset-4">
                12 Industries
              </span>
            </motion.h2>
            <motion.p
              className="text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              One unified view of your business, with specialized dashboards for
              Sales, Marketing, Finance, Customer Success, and every other function.
            </motion.p>

            {/* Grid of verticals */}
            <motion.div
              className="grid grid-cols-3 md:grid-cols-4 gap-3"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {verticals.map((v) => {
                const Icon = v.icon;
                return (
                  <motion.div
                    key={v.label}
                    variants={item}
                    className="group flex flex-col items-center gap-2 p-4 bg-neutral-50 border border-neutral-100 rounded-xl hover:border-black hover:shadow-lg transition-all cursor-pointer"
                  >
                    <div
                      className="h-10 w-10 rounded-xl flex items-center justify-center transition-colors group-hover:text-white"
                      style={{
                        backgroundColor: `${v.color}15`,
                        color: v.color,
                      }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span
                      className="text-[11px] text-neutral-600 text-center leading-tight"
                      style={{ fontWeight: 600 }}
                    >
                      {v.label}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right: Comparison Table */}
          <div>
            <motion.p
              className="text-sm text-neutral-600 mb-3 tracking-wide uppercase"
              style={{ fontWeight: 500 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Why We're Different
            </motion.p>
            <motion.h3
              className="text-xl md:text-2xl tracking-tight mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              How IntegrateWise Is{" "}
              <span className="text-black italic">
                Different
              </span>
            </motion.h3>
            <motion.div
              className="border border-neutral-200 rounded-xl overflow-hidden shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Header */}
              <div className="grid grid-cols-3 bg-black text-white">
                <div
                  className="px-4 py-3 text-xs uppercase tracking-wider"
                  style={{ fontWeight: 700 }}
                >
                  Context
                </div>
                <div
                  className="px-4 py-3 text-xs uppercase tracking-wider border-l border-neutral-700"
                  style={{ fontWeight: 700 }}
                >
                  Traditional AI
                </div>
                <div
                  className="px-4 py-3 text-xs uppercase tracking-wider border-l border-neutral-700"
                  style={{ fontWeight: 700 }}
                >
                  IntegrateWise
                </div>
              </div>

              {/* Rows */}
              {comparison.map((row, i) => (
                <motion.div
                  key={row.context}
                  className={`grid grid-cols-3 ${
                    i % 2 === 0 ? "bg-white" : "bg-neutral-50"
                  }`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                >
                  <div
                    className="px-4 py-3 text-sm text-neutral-800"
                    style={{ fontWeight: 600 }}
                  >
                    {row.context}
                  </div>
                  <div className="px-4 py-3 text-sm text-neutral-500 border-l border-neutral-200">
                    {row.traditional}
                  </div>
                  <div
                    className="px-4 py-3 text-sm text-black border-l border-neutral-200"
                    style={{ fontWeight: 600 }}
                  >
                    {row.integratewise}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Additional comparison points */}
            <div className="mt-6 space-y-3">
              {[
                {
                  label: "Governance",
                  trad: "None",
                  iw: "You approve every action",
                },
                {
                  label: "Evidence",
                  trad: "AI makes it up",
                  iw: "Full proof behind every action",
                },
                {
                  label: "Learning",
                  trad: "Static, never improves",
                  iw: "Gets smarter with your business daily",
                },
              ].map((point, i) => (
                <motion.div
                  key={point.label}
                  className="flex items-center gap-4 p-3 bg-neutral-50 border border-neutral-100 rounded-lg"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                >
                  <span
                    className="text-xs text-neutral-800 w-24 shrink-0"
                    style={{ fontWeight: 700 }}
                  >
                    {point.label}
                  </span>
                  <span className="text-xs text-red-500 line-through flex-1">
                    {point.trad}
                  </span>
                  <span
                    className="text-xs text-green-700 flex-1"
                    style={{ fontWeight: 600 }}
                  >
                    {point.iw}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}