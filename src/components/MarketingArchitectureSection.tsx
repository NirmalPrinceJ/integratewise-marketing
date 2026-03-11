import { motion } from "motion/react";
import { Database, Filter, BrainCircuit, LineChart, ShieldCheck } from "lucide-react";

export function MarketingArchitectureSection() {
  const steps = [
    {
      id: "connect",
      title: "1. Connect",
      desc: "Instant bi-directional sync with 200+ tools.",
      icon: Database,
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      id: "normalize",
      title: "2. Normalize",
      desc: "Standardizes messy formats into one clean ontology.",
      icon: Filter,
      color: "text-indigo-500",
      bg: "bg-indigo-50",
    },
    {
      id: "reason",
      title: "3. Reason",
      desc: "AI identifies risks and surfaces cross-domain insights.",
      icon: BrainCircuit,
      color: "text-violet-500",
      bg: "bg-violet-50",
    },
    {
      id: "act",
      title: "4. Act & Audit",
      desc: "Role-based views and approved actions logged permanently.",
      icon: ShieldCheck,
      color: "text-emerald-500",
      bg: "bg-emerald-50",
    },
  ];

  return (
    <section className="py-24 bg-white border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            How The Hub Works
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            A radical simplification of enterprise architecture. We handle the pipeline complexity so your teams just get answers.
          </p>
        </div>

        {/* Visual Architecture Flow */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-1 bg-gradient-to-r from-blue-100 via-violet-200 to-emerald-100 rounded-full" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div 
                  key={step.id}
                  className="relative text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.5 }}
                >
                  <div className={`mx-auto w-24 h-24 ${step.bg} ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-white group-hover:scale-110 transition-transform duration-300 relative bg-white`}>
                    <Icon className="w-10 h-10" />
                    
                    {/* Animated Pulse */}
                    <div className={`absolute inset-0 rounded-2xl border-2 ${step.color.replace('text', 'border')} opacity-0 group-hover:animate-ping`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed px-2">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Data Inputs / Outputs visualization */}
        <motion.div 
          className="mt-20 bg-gray-50 rounded-3xl p-8 border border-gray-100 grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <div>
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Input: Everything</h4>
            <div className="flex flex-wrap gap-2">
              {['Salesforce', 'Jira', 'Zendesk', 'Emails', 'PDF Contracts', 'Slack', 'Shopify', 'Stripe'].map(tag => (
                <span key={tag} className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-sm font-medium rounded-lg shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="md:border-l md:border-gray-200 md:pl-12">
            <h4 className="text-sm font-bold text-emerald-500 uppercase tracking-wider mb-4">Output: Role-Specific Clarity</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-blue-100 text-blue-600 flex items-center justify-center"><LineChart className="w-4 h-4" /></div>
                <div className="text-sm font-semibold text-gray-800">Sales Dashboard (Clean Pipeline)</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-amber-100 text-amber-600 flex items-center justify-center"><LineChart className="w-4 h-4" /></div>
                <div className="text-sm font-semibold text-gray-800">CS Board (Churn Alerts)</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
