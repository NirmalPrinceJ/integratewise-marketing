import { motion } from "motion/react";

export function SocialProofSection() {
  const stats = [
    { label: "Data Points Synced Daily", value: "2.4B+" },
    { label: "Platform Uptime SLA", value: "99.99%" },
    { label: "Connectors Available", value: "200+" },
    { label: "Hours Saved per User/Mo", value: "48h" },
  ];

  const logos = [
    { name: "Acme Corp", placeholder: "ACME" },
    { name: "Global Tech", placeholder: "GLOBAL" },
    { name: "First Finance", placeholder: "FIRST FIN" },
    { name: "Swift Logistics", placeholder: "SWIFT" },
    { name: "Peak Health", placeholder: "PEAK" },
  ];

  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">
            Trusted by teams at scaling enterprises
          </p>
          
          {/* Logos Strip */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {logos.map((logo, i) => (
              <motion.div
                key={logo.name}
                className="text-2xl font-black text-gray-400 font-serif italic"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {logo.placeholder}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scale Stats */}
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-black text-emerald-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonial Quote */}
        <motion.div 
          className="mt-20 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="text-4xl text-emerald-300 font-serif mb-4">"</div>
          <p className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed mb-8">
            IntegrateWise didn't just replace our iPaaS; it replaced the chaotic daily status meetings between Sales and Support. Finally, everyone is looking at the exact same numbers.
          </p>
          <div>
            <div className="font-bold text-gray-900">Sarah Jenkins</div>
            <div className="text-sm text-gray-500">VP of Revenue Operations, TechFlow</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
