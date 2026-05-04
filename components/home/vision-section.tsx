"use client"

import { motion } from "framer-motion"

export function VisionSection() {
  const visions = [
    {
      icon: "👁️",
      title: "Omniscient Visibility",
      description:
        "Every interaction is indexed. You see not just the email, but the ticket history, the Slack context, and the usage data—all in one glance.",
      gradient: "from-amber-500/10 to-transparent",
      border: "hover:border-gold/20",
      bgLight: "bg-gold/10",
      iconBg: "group-hover:bg-gold/20"
    },
    {
      icon: "⚡",
      title: "Predictive Performance",
      description:
        "Tools that anticipate needs. \"This customer usually emails on Tuesdays about their report\" becomes an automated reminder, not a lucky guess.",
      gradient: "from-amber-500/10 to-transparent",
      border: "hover:border-gold/20",
      bgLight: "bg-gold/10",
      iconBg: "group-hover:bg-gold/20"
    },
    {
      icon: "🚀",
      title: "Zero-Friction Execution",
      description:
        "Actions flow from context. Approve the budget, schedule the call, and update the record without ever leaving the narrative thread.",
      gradient: "from-amber-500/10 to-transparent",
      border: "hover:border-gold/20",
      bgLight: "bg-gold/10",
      iconBg: "group-hover:bg-gold/20"
    },
  ]

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gold/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
            <span className="text-gold text-lg">💡</span>
            <span className="text-gold text-sm font-medium">The Vision</span>
          </div>
          <h2 className="text-5xl font-bold mb-6">
            Imagine a World Where<br />
            <span className="gradient-text">
              Your Tools Actually Talk
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            What if your email client knew what was discussed in the support ticket? What if your project board updated itself based on your calendar?
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visions.map((vision, index) => (
            <motion.div
              key={vision.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`glass-card rounded-2xl p-8 ${vision.border} transition-all group relative overflow-hidden hover-glow`}
            >
              <div className={`absolute -inset-1 bg-gradient-to-br ${vision.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="relative">
                <div className={`w-14 h-14 ${vision.bgLight} rounded-xl flex items-center justify-center mb-6 ${vision.iconBg} transition-all text-3xl`}>
                  {vision.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{vision.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {vision.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
