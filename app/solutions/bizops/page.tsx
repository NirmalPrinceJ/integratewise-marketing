'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"

export default function BizOpsPage() {
  const problems = [
    {
      title: "Manual Data Compilation",
      description: "Checking Stripe for revenue, HubSpot for pipeline, Jira for engineering health, Slack for team updates—every single morning",
      icon: "fa-window-maximize",
      color: "red"
    },
    {
      title: "Cross-Functional Blind Spots",
      description: "Support ticket spike + hiring freeze might not connect until something breaks. Data silos hide critical patterns",
      icon: "fa-eye-slash",
      color: "orange"
    },
    {
      title: "Always Reacting",
      description: "By the time you manually compile metrics, you're reacting rather than acting. No proactive intelligence",
      icon: "fa-clock",
      color: "yellow"
    }
  ]

  const costs = [
    { metric: "8hrs", label: "Lost per week gathering context" },
    { metric: "20%", label: "Forecast misses on average" },
    { metric: "Zero", label: "Early warning system" }
  ]

  const solutionPillars = [
    {
      title: "Universal Operational Visibility",
      description: "Your entire business on one screen. Pull from ERP, CRM, HRIS, billing—everything unified in the Spine",
      icon: "fa-chart-network",
      features: [
        "Cross-functional dashboards that actually connect",
        "Real-time ARR, churn, burn, and headcount",
        "Every data point tied to a source system"
      ]
    },
    {
      title: "Morning Brief, Automated",
      description: "Your Twin wakes up before you do, analyzing overnight changes across all systems and preparing your daily brief",
      icon: "fa-coffee",
      features: [
        "What changed in revenue, runway, and risk",
        "Cross-functional correlations automatically detected",
        "Alerts surface only what actually matters"
      ]
    },
    {
      title: "Proactive Decision Support",
      description: "Before you ask a question, your Twin has the answer—backed by live data and evidence",
      icon: "fa-lightbulb",
      features: [
        "Runway at current burn rate and headcount",
        "Cohort retention trends with drill-down",
        "Sales pipeline health with forecast confidence"
      ]
    },
    {
      title: "Organizational Memory",
      description: "Every decision is recorded. Why did you pause hiring? Why did you pivot that product? The Spine remembers",
      icon: "fa-brain",
      features: [
        "Decision history tied to outcomes",
        "Context preserved for next quarter's review",
        "Institutional knowledge doesn't leave with people"
      ]
    }
  ]

  const workflow = [
    {
      step: "Observe",
      description: "Twin continuously watches Stripe, HubSpot, Jira, Slack, Notion—every system feeding the Spine",
      icon: "fa-eye"
    },
    {
      step: "Reason",
      description: "What changed? What's correlated? What's risky? Twin applies business logic to surface signals",
      icon: "fa-brain"
    },
    {
      step: "Suggest",
      description: "Here's your morning brief. Revenue down 3%. Burned 1.2M last month. Runway: 14 months at current pace",
      icon: "fa-message"
    },
    {
      step: "Approve",
      description: "You review, edit, or approve. Every decision gets stored and learned from",
      icon: "fa-check-circle"
    }
  ]

  return (
    <div className="min-h-screen bg-bg-main">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section id="hero-section" className="relative pt-40 pb-24 px-6 overflow-hidden min-h-[700px] flex items-center">
          <div className="absolute inset-0 hero-glow pointer-events-none"></div>
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] blob-bg blur-3xl pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 backdrop-blur-sm"
            >
              <i className="fa-solid fa-chart-network text-blue-400"></i>
              <span className="text-blue-300 text-sm">Universal Operational Visibility</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Your Entire Business.<br/>
              <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                One Screen. Real-Time.
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Built for founders, CEOs, COOs, and operators. Run your entire business from one screen without building another dashboard.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-center gap-4 mb-8"
            >
              <a href="#solution-section" className="bg-gold hover:bg-gold-light text-bg-main px-10 py-4 rounded-lg font-semibold transition-all gold-glow transform hover:scale-105">
                See Your Ops Cockpit
              </a>
              <a href="#problem-section" className="glass-card px-10 py-4 rounded-lg font-semibold hover:border-gold/30 transition-all">
                Learn More
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-6 text-sm text-text-dim"
            >
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-check-circle text-green-400"></i>
                <span>Built for founders & operators</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-check-circle text-green-400"></i>
                <span>Adapts to any business model</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-check-circle text-green-400"></i>
                <span>Real-time cross-functional insights</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="problem-section" className="py-24 px-6 bg-bg-secondary/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm"
              >
                <i className="fa-solid fa-exclamation-triangle text-red-400"></i>
                <span className="text-red-300 text-sm">The Pain</span>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl font-bold mb-6"
              >
                The 12-Tab<br/>
                <span className="bg-gradient-to-r from-red-400 via-orange-400 to-gold bg-clip-text text-transparent">
                  Morning Routine
                </span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-text-secondary max-w-3xl mx-auto"
              >
                Without a unified memory system, you're forced to act as the manual bridge between your apps
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            >
              {problems.map((problem, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`glass-card rounded-2xl p-8 border-l-4 border-${problem.color}-500/50 hover:border-${problem.color}-500/80 transition-all`}
                >
                  <div className={`w-14 h-14 bg-${problem.color}-500/10 rounded-xl flex items-center justify-center mb-6`}>
                    <i className={`fa-solid ${problem.icon} text-${problem.color}-400 text-2xl`}></i>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-text-primary">{problem.title}</h3>
                  <p className="text-text-dim leading-relaxed">{problem.description}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
              <div className="relative">
                <h3 className="text-3xl font-bold mb-8 text-center">What This Costs You</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {costs.map((cost, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                        {cost.metric}
                      </div>
                      <div className="text-text-dim">{cost.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution-section" className="py-24 px-6">
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
                Run Your Business<br/>
                <span className="text-gold">From One Screen</span>
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutionPillars.map((pillar, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card rounded-2xl p-8 border border-gold/20 hover:border-gold/40 transition-all"
                  whileHover={{ y: -4 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-6"
                    whileHover={{ rotate: 5 }}
                  >
                    <i className={`fa-solid ${pillar.icon} text-gold text-xl`}></i>
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3 text-text-primary">{pillar.title}</h3>
                  <p className="text-text-secondary leading-relaxed mb-6">{pillar.description}</p>
                  <ul className="space-y-3">
                    {pillar.features.map((feature, featureIdx) => (
                      <motion.li
                        key={featureIdx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * (idx + 1) + featureIdx * 0.05 }}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <i className="fa-solid fa-check text-gold mt-0.5 flex-shrink-0"></i>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section id="workflow-section" className="py-24 px-6 bg-bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl lg:text-6xl font-bold mb-6"
              >
                How It Works
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {workflow.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative"
                >
                  {idx < workflow.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-[60%] w-[calc(100%-60%)] h-px bg-gradient-to-r from-gold/30 to-transparent"></div>
                  )}
                  <div className="glass-card rounded-2xl p-8 relative z-10">
                    <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <i className={`fa-solid ${item.icon} text-gold text-lg`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-center mb-3 text-gold">{item.step}</h3>
                    <p className="text-sm text-text-secondary text-center">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits-section" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl lg:text-6xl font-bold mb-6"
              >
                The Impact
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-10"
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <i className="fa-solid fa-clock text-gold text-3xl"></i>
                  Time Reclaimed
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  No more 12-tab mornings. Your morning brief is ready when you wake up. Decisions that took hours now take minutes. Strategic thinking replaces data gathering.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-10"
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <i className="fa-solid fa-chart-line text-green-400 text-3xl"></i>
                  Better Decisions
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Real-time visibility across revenue, operations, and people. Correlations surface automatically. You spot risks and opportunities before they hit your board.
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
              Ready for Your<br/>
              <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">Ops Cockpit?</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Book a demo and see how IntegrateWise unifies your entire business in one real-time screen.
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
