import { motion } from "motion/react";
import { Link, Eye, Zap, ArrowRight, Layers, Bot, Database } from "lucide-react";

export function ProductCapabilities() {
  const capabilities = [
    {
      id: "unify",
      icon: Database,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      title: "1. Unify Your Scattered Data",
      description: "Stop manually exporting CSVs. IntegrateWise connects to Salesforce, Zendesk, Jira, and 200+ other tools in 60 seconds. We pull everything into one clean, reliable database automatically.",
      features: ["Native connectors for 200+ apps", "Zero-downtime integration", "Automatic data cleaning"]
    },
    {
      id: "visualize",
      icon: Eye,
      color: "text-emerald-500",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      title: "2. See the Complete Picture",
      description: "When Sales looks at an account, they see open support tickets. When CS looks at health, they see recent billing failures. Everyone gets a dashboard perfectly tailored to their role.",
      features: ["Role-based personalized views", "Cross-department metrics", "Real-time updates"]
    },
    {
      id: "act",
      icon: Zap,
      color: "text-amber-500",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      title: "3. Act on AI Intelligence",
      description: "Don't just look at data—let it work for you. IntegrateWise identifies churn risks, upsell opportunities, and compliance issues before they happen, and suggests your next move.",
      features: ["Predictive churn alerts", "Smart action suggestions", "Governance Gate approvals"]
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-y border-gray-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 ag-text-balance">
            Everything You Need. <span className="text-emerald-500">Nothing You Don't.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto ag-text-balance">
            We built IntegrateWise to do exactly three things exceptionally well, giving you complete control over your business operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div 
                key={cap.id}
                className={`bg-white rounded-3xl p-8 border ${cap.borderColor} shadow-sm hover:shadow-xl transition-all group`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <div className={`w-14 h-14 rounded-2xl ${cap.bgColor} ${cap.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{cap.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed min-h-[100px]">
                  {cap.description}
                </p>
                
                <ul className="space-y-3">
                  {cap.features.map(feature => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                      <div className={`w-1.5 h-1.5 rounded-full ${cap.bgColor.replace('50', '400')}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <a href="/book-demo" className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition-colors">
            See these features in action <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
