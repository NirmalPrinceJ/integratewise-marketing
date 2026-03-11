import { motion } from "motion/react";
import { 
  BarChart3, 
  Users, 
  Wallet, 
  Settings, 
  Megaphone, 
  Gavel, 
  UserCircle, 
  Truck, 
  LifeBuoy, 
  Briefcase, 
  HeartPulse, 
  GraduationCap 
} from "lucide-react";

const domains = [
  { name: "Sales", icon: BarChart3, color: "text-blue-500", bg: "bg-blue-50" },
  { name: "Finance", icon: Wallet, color: "text-teal-500", bg: "bg-teal-50" },
  { name: "CSM", icon: Users, color: "text-emerald-500", bg: "bg-emerald-50" },
  { name: "Engineering", icon: Settings, color: "text-slate-500", bg: "bg-slate-50" },
  { name: "Marketing", icon: Megaphone, color: "text-pink-500", bg: "bg-pink-50" },
  { name: "Legal", icon: Gavel, color: "text-indigo-500", bg: "bg-indigo-50" },
  { name: "HR", icon: UserCircle, color: "text-orange-500", bg: "bg-orange-50" },
  { name: "Supply Chain", icon: Truck, color: "text-amber-500", bg: "bg-amber-50" },
  { name: "Support", icon: LifeBuoy, color: "text-red-500", bg: "bg-red-50" },
  { name: "Freelancers", icon: Briefcase, color: "text-cyan-500", bg: "bg-cyan-50" },
  { name: "Healthcare", icon: HeartPulse, color: "text-rose-500", bg: "bg-rose-50" },
  { name: "Education", icon: GraduationCap, color: "text-purple-500", bg: "bg-purple-50" },
];

export function DomainDepthSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 ag-text-balance">
            12 Domains. <span className="text-emerald-500">Infinite Depth.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto ag-text-balance">
            IntegrateWise isn't just a CRM or an ERP. It's the infrastructure for your entire business, with depth tailored for every department.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-20">
          {domains.map((domain, i) => (
            <motion.div
              key={domain.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:border-emerald-100 transition-all text-center ag-card-hover"
            >
              <div className={`w-12 h-12 ${domain.bg} ${domain.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <domain.icon className="w-6 h-6" />
              </div>
              <p className="font-bold text-foreground">{domain.name}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-500/5 blur-[100px]" />
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Deep Integrations. Instant Value.</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Most tools give you a shallow dashboard. We pull the raw underlying data so you can actually trust the numbers you see.
              </p>
              
              <div className="space-y-6">
                {[
                  { level: "Connect", title: "Instant Connections", desc: "Link your favorite tools in seconds, no developer required." },
                  { level: "Normalize", title: "Standardized Metrics", desc: "We automatically clean up messy data so ARR actually means ARR." },
                  { level: "Analyze", title: "Cross-Tool Insights", desc: "Finally answer questions like: 'How do support tickets affect renewal rates?'" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-emerald-400 font-bold shrink-0 border border-white/10">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-white font-bold">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative aspect-square bg-white/5 rounded-3xl border border-white/10 p-8 flex items-center justify-center group overflow-hidden">
              <div className="absolute inset-0 ag-shimmer opacity-20" />
              <div className="text-center">
                <div className="text-6xl font-black text-emerald-500 mb-2">200+</div>
                <div className="text-xl text-white font-bold mb-4">Supported Tools</div>
                <p className="text-slate-500 text-sm">And growing every day.</p>
              </div>
              {/* Decorative nodes */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-emerald-500/30"
                  animate={{
                    x: [Math.random() * 200 - 100, Math.random() * 200 - 100],
                    y: [Math.random() * 200 - 100, Math.random() * 200 - 100],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{ duration: 5 + i, repeat: Infinity, ease: "linear" }}
                  style={{
                    left: `${Math.random() * 80 + 10}%`,
                    top: `${Math.random() * 80 + 10}%`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
