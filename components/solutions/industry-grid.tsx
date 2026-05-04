"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function IndustryGrid() {
  const industries = [
    {
      icon: "🏢",
      title: "Enterprise B2B SaaS",
      description: "Unify Salesforce, Zendesk, Jira, and usage data to give Account Managers perfect foresight on renewals and churn risk.",
      link: "#saas"
    },
    {
      icon: "🚛",
      title: "Supply Chain & Logistics",
      description: "Connect ERPs, tracking systems, and vendor comms to predict delays before they happen with governed AI interventions.",
      link: "#logistics"
    },
    {
      icon: "⚕️",
      title: "Healthcare Tech",
      description: "Maintain strict SOC2 compliance while unifying patient context across disparate EMRs and clinical trial management systems.",
      link: "#healthcare"
    },
    {
      icon: "💼",
      title: "Professional Services",
      description: "Track billable hours, resource allocation, and project profitability across multiple client engagements and teams.",
      link: "#ps"
    },
    {
      icon: "🏦",
      title: "Financial Services",
      description: "Unified KYC and compliance checks with real-time anomaly detection across accounts and transactions.",
      link: "#finance"
    },
    {
      icon: "🏭",
      title: "Manufacturing",
      description: "Connect production systems, supply orders, and quality metrics to optimize yield and reduce downtime.",
      link: "#manufacturing"
    },
  ]

  return (
    <section id="industry-grid" className="py-24 px-6 bg-bg-secondary/30 border-t border-white/5 relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Built For Complex Industries</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Context matters. Our Adaptive Spine connects the specific tools and data models unique to your sector.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group glass-card rounded-3xl p-10 hover:border-gold/40 transition-all duration-300 hover:-translate-y-2 hover-glow"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-bg-elevated to-bg-muted border border-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:border-gold/30 transition-all text-3xl shadow-lg">
                {industry.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{industry.title}</h3>
              <p className="text-text-secondary text-base leading-relaxed mb-8">
                {industry.description}
              </p>
              <Link
                href={industry.link}
                className="text-gold text-sm font-bold tracking-wide uppercase flex items-center gap-2 group-hover:gap-4 transition-all"
              >
                Explore {industry.title.split(" ")[0]} <span>→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
