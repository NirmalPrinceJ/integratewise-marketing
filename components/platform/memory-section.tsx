"use client"

import { motion } from "framer-motion"

export function MemorySection() {
  const memoryLayers = [
    {
      title: "Truth",
      icon: "✓",
      description: "The objective facts of your business. Verified records, transaction histories, and definitive entity states pulled directly from your source systems.",
      features: ["Verified Records", "Transaction History", "Entity States"],
      color: "blue"
    },
    {
      title: "Context",
      icon: "🔗",
      description: "The 'why' behind the truth. Communications, relationships, sentiment, and the nuanced history of how entities interact over time.",
      features: ["Communication Flow", "Relationship Mapping", "Historical Nuance"],
      color: "purple"
    },
    {
      title: "Knowledge",
      icon: "💡",
      description: "The synthesis. Patterns identified by the Twin, decisions approved by humans, and predictive models that guide future actions.",
      features: ["AI Synthesis", "Approved Decisions", "Predictive Patterns"],
      color: "gold"
    },
  ]

  return (
    <section id="memory-section" className="py-32 px-6 bg-bg-secondary/30 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Where Accumulated Knowledge<br />
            <span className="text-blue-400">Lives Permanently.</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            This is where your memory accumulates and compounds. Truth, Context, and Knowledge synthesized and stored. Growing smarter with every decision you approve.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {memoryLayers.map((layer, index) => {
            const colorClass = layer.color === "blue" ? "blue" : layer.color === "purple" ? "purple" : "gold"
            const borderColor = layer.color === "blue" ? "hover:border-blue-500/40" : layer.color === "purple" ? "hover:border-purple-500/40" : "hover:border-gold/40"
            const bgColor = layer.color === "blue" ? "bg-blue-500/10" : layer.color === "purple" ? "bg-purple-500/10" : "bg-gold/10"
            const borderColorInner = layer.color === "blue" ? "border-blue-500/20" : layer.color === "purple" ? "border-purple-500/20" : "border-gold/20"

            return (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`glass-card rounded-3xl p-10 relative overflow-hidden group ${borderColor} transition-all hover-glow`}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${bgColor} rounded-full blur-3xl group-hover:opacity-100 opacity-50 transition-all`} />
                <div className={`w-16 h-16 ${bgColor} rounded-2xl flex items-center justify-center mb-8 border ${borderColorInner} text-3xl`}>
                  {layer.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{layer.title}</h3>
                <p className="text-text-secondary leading-relaxed mb-6">
                  {layer.description}
                </p>
                <ul className="space-y-3 text-sm text-text-dim">
                  {layer.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${layer.color === "blue" ? "bg-blue-400" : layer.color === "purple" ? "bg-purple-400" : "bg-gold"}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
