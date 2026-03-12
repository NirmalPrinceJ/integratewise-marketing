import { motion } from "motion/react";
import { Zap, Clock, TrendingUp, ShieldCheck } from "lucide-react";

export function SpeedToValueSection() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-100 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold mb-6">
              <Zap className="w-3 h-3 fill-emerald-700" />
              RAPID DEPLOYMENT
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 ag-text-balance">
              Value in <span className="text-emerald-500">60 Seconds.</span> Not 6 months.
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-emerald-100 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Phase 1: The Creamy Layer (60s)</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We sync only the most critical data first. Within one minute, your workspace is loaded with real value, actionable insights, and a unified view. No massive migrations required.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-emerald-100 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Phase 2: Deep Context (~24h)</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    While you work, our system pulls the full historical depth in the background. Your Unified Intelligence Layer grows richer every hour, unlocking deeper intelligence automatically.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                <span className="font-bold text-foreground">Zero Downtime Migration</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Keep your existing tools. We don't replace them—we unify them. Zero friction, instant visibility, and a source of truth that actually stays true.
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10 bg-white rounded-[3rem] p-8 shadow-2xl border border-gray-100">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="px-3 py-1 bg-emerald-50 text-emerald-600 font-mono text-xs rounded-lg">
                  syncing_progress: 100%
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="h-4 w-3/4 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-emerald-500"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {[...Array(4)].map((_, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1 + (i * 0.1) }}
                      className="h-20 bg-gray-50 rounded-2xl border border-gray-100 p-4"
                    >
                      <div className="w-8 h-2 bg-gray-200 rounded-full mb-2" />
                      <div className="w-full h-2 bg-gray-100 rounded-full" />
                    </motion.div>
                  ))}
                </div>
                
                <div className="p-4 bg-emerald-500 rounded-2xl text-white text-center font-bold shadow-lg shadow-emerald-200">
                  Workspace Ready
                </div>
              </div>
            </div>
            
            {/* Decorative background elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-emerald-200/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-200/20 blur-3xl rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
