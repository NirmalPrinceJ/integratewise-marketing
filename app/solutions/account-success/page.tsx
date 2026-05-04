'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { motion } from "framer-motion"

export default function AccountSuccessPage() {
  const [selectedRole, setSelectedRole] = useState<'operator' | 'manager' | 'executive'>('operator')
  const [selectedIndustry, setSelectedIndustry] = useState('saas')
  const operatorPainPoints = [
    { title: "45-90min Pre-Meeting Prep", description: "Opening 6+ tabs to piece together account history, status, and next steps before every call", icon: "fa-window-restore", color: "red" },
    { title: "Hidden Risk Signals", description: "Critical warnings buried in separate systems—you only see the problem when it's too late", icon: "fa-eye-slash", color: "orange" },
    { title: "Manual Context Stitching", description: "No single view of usage patterns, support history, and relationship notes—you're the bridge", icon: "fa-link", color: "yellow" }
  ]

  const managerPainPoints = [
    { title: "Portfolio Blind Spots", description: "Can't see health signals across your book of business in real-time", icon: "fa-eye-slash", color: "red" },
    { title: "Team Coordination Gap", description: "No unified intelligence—your team members discover problems independently", icon: "fa-people-arrows", color: "orange" },
    { title: "Forecast Misses", description: "Early warning system doesn't exist—churn surprises you at renewal time", icon: "fa-chart-line", color: "yellow" }
  ]

  const executivePainPoints = [
    { title: "Lost Revenue Visibility", description: "ARR, churn, and retention signals scattered across systems you don't directly access", icon: "fa-coins", color: "red" },
    { title: "Decision Lag", description: "By the time you get the report, the issue has already cost you", icon: "fa-hourglass-end", color: "orange" },
    { title: "No Organizational Memory", description: "Each executive restart loses context that was already known", icon: "fa-brain", color: "yellow" }
  ]

  const painPointsMap = {
    operator: operatorPainPoints,
    manager: managerPainPoints,
    executive: executivePainPoints
  }

  const solutionFeatures = [
    { 
      title: "Unified Account 360°", 
      description: "Every account in one place—usage, support tickets, relationship notes, timeline of every interaction", 
      icon: "fa-circle-nodes",
      details: [
        "Pull from CRM, billing, support, Slack, email—everything in one semantic layer",
        "Timeline view shows exactly what happened when",
        "Full relationship history from first touch to renewal"
      ]
    },
    { 
      title: "Proactive Churn Alerts", 
      description: "Your Twin watches patterns. When a renewal is at risk, you see evidence first", 
      icon: "fa-bell",
      details: [
        "API latency spike + feature usage drop = churn risk",
        "Support sentiment analysis + ticket volume correlation",
        "Each alert shows the 'why' with data citations"
      ]
    },
    { 
      title: "QBR Prep in Minutes", 
      description: "From scattered notes to decision-ready brief—everything you need for the call is ready", 
      icon: "fa-clock",
      details: [
        "Twin drafts talking points from account history",
        "Expansion opportunities identified automatically",
        "Risk mitigation playbooks suggested pre-call"
      ]
    },
    { 
      title: "Evidence Trail", 
      description: "Every alert shows the 'why'—support spike + product usage drop = churn risk", 
      icon: "fa-list-check",
      details: [
        "Every recommendation backed by live data",
        "Source tracking shows which systems data came from",
        "Historical context prevents re-deciding"
      ]
    },
  ]

  const benefits = [
    { metric: "45-90min", label: "Saved per review" },
    { metric: "100%", label: "Context visibility" },
    { metric: "60%", label: "Faster response" },
    { metric: "Zero", label: "Surprises" },
  ]

  return (
    <div className="min-h-screen bg-bg-main">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section id="hero-section" className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[700px] flex items-center">
          <div className="absolute inset-0 hero-glow pointer-events-none"></div>
          <div className="absolute top-40 right-20 w-96 h-96 blob-bg blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 blob-bg blur-3xl pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-4xl">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-bg-elevated/50 border border-white/10 rounded-full px-4 py-2 mb-8 backdrop-blur-sm"
              >
                <i className="fa-solid fa-layer-group text-gold text-sm"></i>
                <span className="text-text-secondary text-sm">Universal Account Success</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                <span className="text-white">Every Account.</span><br/>
                <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                  One Complete View.
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-text-secondary mb-10 leading-relaxed max-w-3xl"
              >
                Stop being a manual bridge between your apps. One 360° view of every client, customer, patient, or tenant—no matter your industry.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-start gap-4 mb-12"
              >
                <a href="#solution-section" className="bg-gold hover:bg-gold-light text-bg-main px-8 py-4 rounded-lg font-semibold text-lg transition-all gold-glow transform hover:scale-105">
                  See Your Account 360°
                </a>
                <a href="#benefits-section" className="glass-card px-8 py-4 rounded-lg font-semibold text-lg hover:border-gold/30 transition-all">
                  Learn How It Works
                </a>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
              >
                {benefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4 }}
                    className="glass-card rounded-xl p-4 text-center"
                  >
                    <div className="text-3xl font-bold text-gold mb-1">{benefit.metric}</div>
                    <div className="text-xs text-text-dim">{benefit.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Selector Section */}
        <section id="selector-section" className="py-12 px-6 bg-bg-secondary/50 sticky top-24 z-40">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
              <div className="text-center lg:text-left">
                <div className="text-sm text-text-dim mb-3">I am a...</div>
                <div className="flex gap-3">
                  {(['operator', 'manager', 'executive'] as const).map((role) => (
                    <motion.button
                      key={role}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedRole(role)}
                      className={`px-4 py-2 rounded-full font-semibold transition-all ${
                        selectedRole === role
                          ? 'bg-gradient-to-r from-gold to-gold-light text-bg-main'
                          : 'glass-card text-text-secondary hover:text-text-primary'
                      }`}
                    >
                      {role.charAt(0).toUpperCase() + role.slice(1)}
                    </motion.button>
                  ))}
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-sm text-text-dim mb-3">Working in...</div>
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {['SaaS', 'Accounting', 'Hospitality', 'Retail', 'Education', 'Freelance'].map((industry) => (
                    <motion.button
                      key={industry}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setSelectedIndustry(industry.toLowerCase())}
                      className={`px-4 py-2 rounded-full font-semibold transition-all whitespace-nowrap ${
                        selectedIndustry === industry.toLowerCase()
                          ? 'bg-gradient-to-r from-gold to-gold-light text-bg-main'
                          : 'glass-card text-text-secondary hover:text-text-primary'
                      }`}
                    >
                      {industry}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section id="pain-section" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                <span className="text-white">You Shouldn&apos;t Be a</span><br/>
                <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                  Human Router Between Apps
                </span>
              </motion.h2>
            </div>

            <motion.div 
              key={selectedRole}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {painPointsMap[selectedRole].map((point, idx) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`glass-card rounded-2xl p-8 border-l-4 border-${point.color}-500/50 hover:border-${point.color}-500/80 transition-all`}
                >
                  <div className={`w-16 h-16 bg-${point.color}-500/10 rounded-xl flex items-center justify-center mb-6`}>
                    <i className={`fa-solid ${point.icon} text-${point.color}-400 text-3xl`}></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-text-primary">{point.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{point.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution-section" className="py-24 px-6 bg-bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 glass-card rounded-full px-6 py-3 mb-8 backdrop-blur-xl border-gold/20"
              >
                <i className="fa-solid fa-sparkles text-gold text-sm"></i>
                <span className="text-gold text-sm font-semibold tracking-wide">The Solution</span>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl lg:text-6xl font-bold mb-6"
              >
                One 360° View,<br/>
                <span className="text-gold">Zero Tab-Switching</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-text-secondary max-w-3xl mx-auto"
              >
                IntegrateWise unifies all account context in one semantic memory layer, so your Twin can surface what matters before you need to ask.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutionFeatures.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card rounded-2xl p-8 border border-gold/20 hover:border-gold/40 transition-all group cursor-pointer"
                  whileHover={{ y: -4 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors"
                    whileHover={{ rotate: 5 }}
                  >
                    <i className={`fa-solid ${feature.icon} text-gold text-xl`}></i>
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3 text-text-primary">{feature.title}</h3>
                  <p className="text-text-secondary leading-relaxed mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIdx) => (
                      <motion.li
                        key={detailIdx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * (idx + 1) + detailIdx * 0.05 }}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <i className="fa-solid fa-check text-gold mt-1 flex-shrink-0"></i>
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits-section" className="py-24 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-6xl font-bold mb-16"
            >
              The Impact
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-10 text-left"
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <i className="fa-solid fa-clock text-gold text-3xl"></i>
                  Time Saved
                </h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  QBR prep that took 45-90 minutes of scattered research now takes minutes. All account context—usage, support history, timeline, relationship notes—compiled instantly.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-10 text-left"
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <i className="fa-solid fa-shield-check text-green-400 text-3xl"></i>
                  Churn Prevention
                </h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Your Twin proactively flags risks—usage drops, support spike, engagement cooling—with evidence so you can intervene before it costs you.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-gradient-to-b from-bg-main to-bg-secondary">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-6xl font-bold mb-8"
            >
              Ready to See Your<br/>
              <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">Complete Picture?</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Book a personalized demo and see how IntegrateWise transforms Account Success in your industry.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-4 flex-wrap"
            >
              <a href="/demo" className="bg-gold hover:bg-gold-light text-bg-main px-8 py-4 rounded-lg font-semibold transition-all gold-glow inline-flex items-center gap-2">
                Book a Demo <i className="fa-solid fa-arrow-right"></i>
              </a>
              <a href="/solutions" className="glass-card px-8 py-4 rounded-lg font-semibold hover:border-gold/30 transition-all">
                Explore Other Solutions <i className="fa-solid fa-arrow-right"></i>
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[700px] flex items-center">
          <div className="absolute inset-0 hero-glow pointer-events-none"></div>
          <div className="absolute top-40 right-20 w-96 h-96 blob-bg blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 blob-bg blur-3xl pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-bg-elevated/50 border border-white/10 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
                <i className="fa-solid fa-layer-group text-gold text-sm"></i>
                <span className="text-text-secondary text-sm">Universal Account Success</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-white">Every Account.</span><br/>
                <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                  One Complete View.
                </span>
              </h1>
              
              <p className="text-xl text-text-secondary mb-10 leading-relaxed max-w-3xl">
                Stop being a manual bridge between your apps. One 360° view of every client, customer, patient, or tenant—the same Workspace works for SaaS CSMs, accounting firms, hospitality groups, retail teams, education programs, and freelancers. Picture walking into Acme&apos;s QBR already knowing the API-latency ticket from Tuesday, the &ldquo;love the dashboard&rdquo; Slack note from Wednesday, and the renewal contract sent this morning—all surfaced by your Twin, all backed by evidence.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
                <a href="#" className="bg-gold hover:bg-gold-light text-bg-main px-8 py-4 rounded-lg font-semibold text-lg transition-all gold-glow transform hover:scale-105">
                  See Your Account 360°
                </a>
                <a href="#" className="glass-card px-8 py-4 rounded-lg font-semibold text-lg hover:border-gold/30 transition-all">
                  Book a Demo
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="glass-card rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-gold mb-1">45-90min</div>
                  <div className="text-xs text-text-dim">Saved per review—prep that took an hour now happens before you sit down.</div>
                </div>
                <div className="glass-card rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-1">100%</div>
                  <div className="text-xs text-text-dim">Context visibility—every signal across CRM, support, billing, and chat in one view.</div>
                </div>
                <div className="glass-card rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">60%</div>
                  <div className="text-xs text-text-dim">Faster response—Twin drafts the reply with the evidence already cited.</div>
                </div>
                <div className="glass-card rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-1">0</div>
                  <div className="text-xs text-text-dim">Surprises—churn signals surface weeks early, not at renewal.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

