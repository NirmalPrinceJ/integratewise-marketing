'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"

export default function PersonalOpsPage() {
  const problems = [
    {
      title: "Scattered Context",
      description: "Tasks in one app, notes in another, calendar events elsewhere, budget in spreadsheets, health habits in yet another tool—none of them speak the same language.",
      icon: "fa-puzzle-piece",
      color: "red"
    },
    {
      title: "Heavy Cognitive Load",
      description: "You manually connect the dots between your goals, daily tasks, and habits. The mental overhead is exhausting and unsustainable.",
      icon: "fa-brain",
      color: "orange"
    },
    {
      title: "Amnesic AI",
      description: "Every AI interaction starts from scratch. It forgets who you are and what you care about the moment the session ends. You rebuild context every time.",
      icon: "fa-robot",
      color: "yellow"
    }
  ]

  const solutions = [
    {
      title: "Unified Life View",
      description: "IntegrateWise connects your personal apps—email, calendar, notes, health and finance trackers—and automatically builds a complete, unified profile of your goals, tasks, and relationships.",
      icon: "fa-circle-nodes",
      features: [
        "All your context in one place",
        "Automatic profile building",
        "Cross-app relationship mapping"
      ]
    },
    {
      title: "Proactive Twin Insights",
      description: "Your Twin continuously watches your Digital Memory to surface evidence-backed insights across your entire life—health patterns, learning gaps, goal drift.",
      icon: "fa-sparkles",
      features: [
        "Burnout risk detection",
        "Learning momentum tracking",
        "Goal progress alerts"
      ]
    },
    {
      title: "Guided Actions",
      description: "The Twin proposes next steps—calendar blocks, task reminders, goal adjustments—but you approve every action before it ships.",
      icon: "fa-check-circle",
      features: [
        "Human-in-the-loop approval",
        "Suggested calendar blocks",
        "Intelligent task prioritization"
      ]
    },
    {
      title: "Decision Memory",
      description: "Every decision you make is recorded. Why did you skip that workout? Why did you defer that goal? Your memory compounds over time.",
      icon: "fa-history",
      features: [
        "Full decision trail",
        "Pattern recognition over time",
        "Context never lost"
      ]
    }
  ]

  const alerts = [
    {
      type: "warning",
      title: "Burnout Risk Detected",
      description: "Your sleep quality dropped 30% the exact same week your work hours increased 40%. Consider blocking recovery time.",
      icon: "fa-exclamation-circle",
      color: "red"
    },
    {
      type: "insight",
      title: "Learning Momentum at Risk",
      description: "You completed 3 courses on data science but haven't practiced in 2 weeks. Momentum is fragile—schedule a practice session?",
      icon: "fa-lightbulb",
      color: "yellow"
    },
    {
      type: "success",
      title: "Goal Progress Update",
      description: "Your Q2 savings goal is 68% complete with 6 weeks remaining. Current pace will exceed target by $400.",
      icon: "fa-check-circle",
      color: "green"
    }
  ]

  const workflow = [
    {
      step: "Connect",
      description: "Link your personal apps—calendar, notes, health trackers, finance tools—into one governed Spine",
      icon: "fa-plug"
    },
    {
      step: "Index",
      description: "Your Twin builds a semantic map of your goals, tasks, habits, and relationships",
      icon: "fa-brain"
    },
    {
      step: "Watch",
      description: "Continuous monitoring surfaces patterns—burnout risk, goal drift, learning gaps—before you notice",
      icon: "fa-eye"
    },
    {
      step: "Suggest",
      description: "The Twin proposes actions with evidence—block recovery time, schedule practice, adjust goals",
      icon: "fa-message"
    },
    {
      step: "Approve",
      description: "You review, edit, or approve. Every decision gets recorded and learned from",
      icon: "fa-check"
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
              className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-8 backdrop-blur-sm"
            >
              <i className="fa-solid fa-user-circle text-cyan-400"></i>
              <span className="text-cyan-300 text-sm">Universal Personal Operating System</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Your Entire Life.<br/>
              <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                One Unified Memory.
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Personal Ops is IntegrateWise&apos;s person-first memory system. Connect your tasks, calendar, notes, goals, and habits into one governed Digital Memory that never forgets who you are.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <a href="#solution-section" className="bg-gold hover:bg-gold-light text-bg-main px-10 py-4 rounded-lg font-semibold transition-all gold-glow transform hover:scale-105">
                See Your Unified Life View
              </a>
              <a href="/demo" className="glass-card px-10 py-4 rounded-lg font-semibold hover:border-gold/30 transition-all">
                Book a Demo
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-6 justify-center items-center text-sm text-text-dim"
            >
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-check-circle text-green-400"></i>
                <span>No more fragmented mind</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-check-circle text-green-400"></i>
                <span>AI that remembers you</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-check-circle text-green-400"></i>
                <span>Human-approved actions</span>
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
                <span className="text-red-300 text-sm">Without IntegrateWise</span>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl font-bold mb-6"
              >
                The Fragmented Mind<br/>
                <span className="text-text-secondary">Problem</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-text-secondary max-w-3xl mx-auto"
              >
                Your personal context is entirely fragmented. You carry the heavy cognitive load of constantly connecting the dots yourself across disconnected apps.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {problems.map((problem, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`glass-card rounded-2xl p-8 border-l-4 border-${problem.color}-500/50 hover:border-${problem.color}-500/70 transition-all`}
                >
                  <div className={`w-14 h-14 bg-${problem.color}-500/10 rounded-xl flex items-center justify-center mb-6`}>
                    <i className={`fa-solid ${problem.icon} text-${problem.color}-400 text-2xl`}></i>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-text-primary">{problem.title}</h3>
                  <p className="text-text-dim leading-relaxed">{problem.description}</p>
                </motion.div>
              ))}
            </div>
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
                className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm"
              >
                <i className="fa-solid fa-check-circle text-gold"></i>
                <span className="text-gold text-sm">The Solution</span>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl font-bold mb-6"
              >
                How It Works With<br/>
                <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                  IntegrateWise Personal Ops
                </span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-text-secondary max-w-3xl mx-auto"
              >
                When you connect your personal apps, IntegrateWise turns your scattered tasks, calendar events, personal notes, and goals into a governed Digital Memory.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {solutions.map((solution, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card rounded-2xl p-8 hover:border-gold/30 transition-all"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
                      <i className={`fa-solid ${solution.icon} text-gold text-2xl`}></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                      <p className="text-text-dim">{solution.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 pl-4">
                    {solution.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-center gap-2 text-sm text-text-secondary">
                        <i className="fa-solid fa-check text-gold"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section - Alerts Preview */}
        <section id="features-section" className="py-24 px-6 bg-bg-secondary/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl font-bold mb-6"
              >
                <span className="text-white">Your Life Gets</span><br/>
                <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                  Smarter Every Day
                </span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-text-secondary max-w-3xl mx-auto"
              >
                The more you use Personal Ops, the better it understands you—your priorities, your patterns, your potential.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {alerts.map((alert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card rounded-2xl p-8"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`w-8 h-8 bg-${alert.color}-500/20 rounded-full flex items-center justify-center shrink-0`}>
                      <i className={`fa-solid ${alert.icon} text-${alert.color}-400 text-sm`}></i>
                    </div>
                    <div>
                      <div className={`font-semibold text-${alert.color}-300 mb-1`}>{alert.title}</div>
                      <div className="text-sm text-text-secondary">{alert.description}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section id="workflow-section" className="py-24 px-6">
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

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
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
                  <div className="glass-card rounded-2xl p-6 relative z-10 text-center">
                    <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className={`fa-solid ${item.icon} text-gold text-lg`}></i>
                    </div>
                    <h3 className="text-lg font-bold text-gold mb-2">{item.step}</h3>
                    <p className="text-sm text-text-secondary">{item.description}</p>
                  </div>
                </motion.div>
              ))}
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
              Stop Fragmenting<br/>
              <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">Yourself.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Get a unified memory system that truly knows you and helps you become who you want to be.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-4 flex-wrap"
            >
              <a href="/demo" className="bg-gold hover:bg-gold-light text-bg-main px-8 py-4 rounded-lg font-semibold transition-all gold-glow inline-flex items-center gap-2">
                Request Demo <i className="fa-solid fa-arrow-right"></i>
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
