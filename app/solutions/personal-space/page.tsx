'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"

export default function PersonalSpacePage() {
  const painPoints = [
    { title: "Scattered Context", description: "Tasks in one app, notes in another, calendar events elsewhere, budget in spreadsheets, health habits in yet another tool.", icon: "fa-puzzle-piece", color: "red" },
    { title: "Heavy Cognitive Load", description: "You manually connect the dots between your goals, daily tasks, and habits. The mental overhead is exhausting and unsustainable.", icon: "fa-brain", color: "orange" },
    { title: "Amnesic AI", description: "Every AI interaction starts from scratch. It forgets who you are and what you care about the moment the session ends.", icon: "fa-robot", color: "yellow" },
  ]

  const solutions = [
    { title: "Unified Life View", description: "Connect your personal apps and see your complete profile of goals, tasks, and relationships at a glance.", icon: "fa-circle-nodes", color: "gold" },
    { title: "Proactive Intelligence", description: "Your Twin continuously watches your Digital Memory to surface evidence-backed insights across your life.", icon: "fa-brain", color: "purple" },
    { title: "Guided Actions", description: "The Twin proposes next steps—calendar blocks, task reminders, goal adjustments—but you approve every action.", icon: "fa-check-circle", color: "green" },
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
              <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
                <i className="fa-solid fa-user-circle text-purple-400 text-sm"></i>
                <span className="text-purple-300 text-sm">Universal Personal Operating System</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-white">Your Entire Life.</span><br/>
                <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                  One Unified Memory.
                </span>
              </h1>
              
              <p className="text-xl text-text-secondary mb-10 leading-relaxed max-w-3xl">
                Personal Space is IntegrateWise&apos;s person-first memory system. Connect your tasks, calendar, notes, goals, and habits into one governed Digital Memory that never forgets who you are.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
                <a href="#" className="bg-gold hover:bg-gold-light text-bg-main px-8 py-4 rounded-lg font-semibold text-lg transition-all gold-glow transform hover:scale-105">
                  See Your Unified Life View
                </a>
                <a href="#" className="glass-card px-8 py-4 rounded-lg font-semibold text-lg hover:border-gold/30 transition-all">
                  Book a Demo
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="glass-card rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-gold mb-1">100%</div>
                  <div className="text-xs text-text-dim">Your context captured</div>
                </div>
                <div className="glass-card rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-1">AI</div>
                  <div className="text-xs text-text-dim">That remembers you</div>
                </div>
                <div className="glass-card rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-1">You</div>
                  <div className="text-xs text-text-dim">Always in control</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section id="problem-section" className="py-24 px-6 bg-bg-secondary/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
                <i className="fa-solid fa-exclamation-triangle text-red-400"></i>
                <span className="text-red-300 text-sm">Without IntegrateWise</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">The Fragmented Mind</span><br/>
                <span className="text-text-secondary">Problem</span>
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Your personal context is entirely fragmented. You carry the heavy cognitive load of constantly connecting the dots yourself across disconnected apps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {painPoints.map((point) => (
                <div key={point.title} className={`glass-card rounded-2xl p-8 border-l-4 border-${point.color}-500/50`}>
                  <div className={`w-16 h-16 bg-${point.color}-500/10 rounded-xl flex items-center justify-center mb-6`}>
                    <i className={`fa-solid ${point.icon} text-${point.color}-400 text-3xl`}></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{point.title}</h3>
                  <p className="text-text-secondary mb-4 leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solution-section" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
                <i className="fa-solid fa-check-circle text-gold"></i>
                <span className="text-gold text-sm">The Solution</span>
              </div>
              <h2 className="text-5xl font-bold mb-6">
                How It Works With<br/>
                <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                  IntegrateWise Personal Space
                </span>
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                When you connect your personal apps, IntegrateWise turns your scattered tasks, calendar events, personal notes, and goals into a governed Digital Memory.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {solutions.map((solution) => (
                <div key={solution.title} className="glass-card rounded-2xl p-8 hover:border-gold/30 transition-all">
                  <div className={`w-14 h-14 bg-${solution.color}-500/10 rounded-xl flex items-center justify-center mb-6`}>
                    <i className={`fa-solid ${solution.icon} text-${solution.color}-400 text-2xl`}></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-text-secondary mb-4 leading-relaxed">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits-section" className="py-24 px-6 bg-bg-secondary/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6">
                <span className="text-white">Your Life Gets</span><br/>
                <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                  Smarter Every Day
                </span>
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                The more you use Personal Space, the better it understands you—your priorities, your patterns, your potential.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card rounded-2xl p-10">
                <h3 className="text-2xl font-bold mb-6">Health Pattern Alert</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center mt-1 shrink-0">
                      <i className="fa-solid fa-exclamation-circle text-red-400 text-sm"></i>
                    </div>
                    <div>
                      <div className="font-semibold text-red-300 mb-1">Burnout Risk Detected</div>
                      <div className="text-sm text-text-secondary">Your sleep quality dropped 30% the exact same week your work hours increased 40%</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-10">
                <h3 className="text-2xl font-bold mb-6">Learning Opportunity</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center mt-1 shrink-0">
                      <i className="fa-solid fa-lightbulb text-yellow-400 text-sm"></i>
                    </div>
                    <div>
                      <div className="font-semibold text-yellow-300 mb-1">Reminder to Practice</div>
                      <div className="text-sm text-text-secondary">You completed 3 courses on data science but haven&apos;t practiced in 2 weeks—momentum at risk</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-text-primary mb-6">
              Stop Fragmenting Yourself.
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Get a unified memory system that truly knows you and helps you become who you want to be.
            </p>
            <a href="#" className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-bg-main px-8 py-4 rounded-lg font-semibold text-lg transition-all gold-glow">
              Request Demo <i className="fa-solid fa-arrow-right text-sm"></i>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
