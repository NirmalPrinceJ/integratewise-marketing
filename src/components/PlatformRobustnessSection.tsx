import { motion } from "motion/react";
import { ShieldCheck, Server, Lock, Activity, BadgeCheck, Scale } from "lucide-react";

export function PlatformRobustnessSection() {
  const robustnessFeatures = [
    {
      icon: ShieldCheck,
      title: "SOC 2 Type II Certified",
      description: "Tested and audited. Your data is protected by industry-leading security protocols from end to end.",
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      icon: Server,
      title: "99.99% Guaranteed SLA",
      description: "Enterprise-grade reliability. Our horizontally scaled infrastructure never sleeps so your business never stops.",
      color: "text-emerald-500",
      bg: "bg-emerald-50",
    },
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "Data in transit is secured via TLS 1.3, and data at rest is encrypted using AES-256.",
      color: "text-indigo-500",
      bg: "bg-indigo-50",
    },
    {
      icon: Activity,
      title: "Zero Data-Loss Architecture",
      description: "Every change is tracked in an immutable append-only log. Roll back any mistake instantly.",
      color: "text-amber-500",
      bg: "bg-amber-50",
    },
    {
      icon: Scale,
      title: "Granular RBAC",
      description: "Control exactly who sees what. Sales sees Salesforce data; Finance sees the ERP data. Perfect isolation.",
      color: "text-rose-500",
      bg: "bg-rose-50",
    },
    {
      icon: BadgeCheck,
      title: "The Governance Gate",
      description: "The AI suggests actions, but human managers approve them. Full audit trails for 100% compliance.",
      color: "text-violet-500",
      bg: "bg-violet-50",
    },
  ];

  return (
    <section className="py-24 bg-slate-900 border-y border-slate-800 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-96 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <BadgeCheck className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Enterprise Grade <span className="text-emerald-400">By Default.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            You don't just need a fast workspace. You need a secure one. IntegrateWise is built to meet the rigorous demands of global IT teams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {robustnessFeatures.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:bg-slate-800 hover:border-slate-600 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-slate-800 border border-slate-700`}>
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
