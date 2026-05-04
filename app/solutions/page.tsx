'use client'

import { useState, useEffect, useRef } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion, AnimatePresence } from "framer-motion"

export default function SolutionsPage() {
  // Slider state
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sliderRef = useRef<HTMLDivElement>(null)

  const solutions = [
    {
      id: "account-success",
      title: "Account Success",
      subtitle: "Never miss a renewal signal",
      description: "Unify usage data, support tickets, and relationship notes into one customer 360—so QBR prep takes minutes, not hours. Get alerted when a renewal is at risk, see the evidence, and draft a proactive play instantly.",
      icon: "fa-handshake",
      color: "blue",
      features: [
        "Entity 360 customer view",
        "Proactive churn alerts",
        "Evidence-backed insights",
        "QBR prep automation"
      ],
      href: "/solutions/account-success"
    },
    {
      id: "bizops",
      title: "Business Operations",
      subtitle: "Your morning brief, automated",
      description: "See what changed in ARR, churn, burn, and cross-functional risks in one morning brief. Connect your ERP, CRM, and HRIS; get instant answers on runway and headcount—always tied back to live data in the Spine.",
      icon: "fa-chart-line",
      color: "purple",
      features: [
        "Cross-system dashboards",
        "Morning briefings",
        "Runway & burn tracking",
        "Strategic decision support"
      ],
      href: "/solutions/bizops"
    },
    {
      id: "personal-space",
      title: "Personal Space",
      subtitle: "Your private Digital Memory",
      description: "Build your own knowledge layer. Connect notes, emails, and files into a personal Spine that only you control. Your Twin learns your patterns and surfaces what matters—with zero data leaving your space.",
      icon: "fa-user-shield",
      color: "gold",
      features: [
        "Private by default",
        "Personal knowledge graph",
        "AI-powered retrieval",
        "Cross-device sync"
      ],
      href: "/solutions/personal-space"
    },
    {
      id: "personal-ops",
      title: "Personal Ops",
      subtitle: "Your life, unified and managed",
      description: "Tasks, calendar, notes, goals, and habits in one governed Digital Memory. Your Twin watches your entire life and surfaces what matters—burnout risks, learning gaps, goal drift—before you notice.",
      icon: "fa-user-circle",
      color: "cyan",
      features: [
        "Unified life view",
        "Health pattern alerts",
        "Goal tracking & drift detection",
        "Learning momentum"
      ],
      href: "/solutions/personal-ops"
    },
    {
      id: "customer-success",
      title: "Customer Success",
      subtitle: "Scale your team's impact",
      description: "Manage portfolios with full context. See health scores, engagement trends, and risk signals across your book of business—then let your Twin draft the next outreach while you focus on relationships.",
      icon: "fa-users",
      color: "green",
      features: [
        "Portfolio health dashboard",
        "Engagement tracking",
        "Automated playbooks",
        "Team collaboration"
      ],
      href: "/solutions/customer-success"
    }
  ]

  // Auto-play slider
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % solutions.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, solutions.length])

  // Resume auto-play after 8s of user inactivity
  useEffect(() => {
    if (isAutoPlaying) return
    const timer = setTimeout(() => setIsAutoPlaying(true), 8000)
    return () => clearTimeout(timer)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev + 1) % solutions.length)
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev - 1 + solutions.length) % solutions.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentSlide(index)
  }

  const problemCards = [
    {
      title: "Disconnected Tools",
      description: "Every system holds a piece of the truth. None of them talk to each other. You're left stitching it together manually.",
      icon: "fa-arrows-split-up-and-left",
      color: "red",
      impacts: [
        "Hours wasted in tab-switching",
        "Data silos block collaboration",
      ]
    },
    {
      title: "Lost Context",
      description: "Critical signals hide across silos. By the time you notice, it's already too late to intervene.",
      icon: "fa-clock-rotate-left",
      color: "orange",
      impacts: [
        "Missed churn signals",
        "Reactive instead of proactive",
      ]
    },
    {
      title: "Constant Re-Explaining",
      description: "Teams keep re-deciding and re-explaining the same things because organizational memory doesn't exist.",
      icon: "fa-repeat",
      color: "purple",
      impacts: [
        "Friction in handoffs",
        "Knowledge leaves with employees",
      ]
    }
  ]

  const capabilities = [
    { name: "Unified Entity 360 View", description: "See everything about any account, client, or project in one place—so you stop tab-switching and start with full context.", icon: "fa-circle-nodes" },
    { name: "Proactive Twin Insights", description: "Your Twin watches patterns and surfaces what needs attention—backed by evidence—so risks and opportunities reach you before they cost you.", icon: "fa-sparkles" },
    { name: "Governed Execution", description: "The Twin proposes actions, you Approve, Edit, or Reject—so AI compounds your output without ever taking the wheel.", icon: "fa-shield-check" },
    { name: "Decision Memory", description: "Every approved action is recorded—so your org learns from every decision instead of re-deciding them.", icon: "fa-history" },
  ]

  return (
    <div className="min-h-screen bg-bg-main">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section id="hero" className="relative pt-40 pb-24 px-6 overflow-hidden min-h-[700px] flex items-center">
          <div className="absolute inset-0 hero-glow pointer-events-none"></div>
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] blob-bg blur-3xl pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
              <i className="fa-solid fa-puzzle-piece text-blue-400"></i>
              <span className="text-blue-300 text-sm">Solutions Hub</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              One Platform.<br/>
              <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                Infinite Applications.
              </span>
            </h1>
            
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
              IntegrateWise adapts to your role, industry, and market. Today we ship two focused tracks—Account Success and Business Ops—with Personal Space in private beta, deployed across SaaS, professional services, and B2B revenue teams worldwide.
            </p>

            <div className="flex items-center justify-center gap-4">
              <a href="#problem-section" className="bg-gold hover:bg-gold-light text-bg-main px-10 py-4 rounded-lg font-semibold transition-all gold-glow transform hover:scale-105">
                Explore Solutions
              </a>
              <a href="#demo-section" className="glass-card px-10 py-4 rounded-lg font-semibold hover:border-gold/30 transition-all">
                Request Demo
              </a>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="problem-section" className="py-32 px-6 bg-bg-secondary/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <div className="inline-flex items-center gap-3 glass-card rounded-full px-6 py-3 mb-8 backdrop-blur-xl border-red-500/20">
                <i className="fa-solid fa-exclamation-triangle text-red-400 text-sm"></i>
                <span className="text-red-300 text-sm font-semibold tracking-wide">The Problem</span>
              </div>
              <h2 className="text-6xl lg:text-7xl font-bold mb-10 leading-tight">
                Work Is Fragmented.<br/>
                <span className="text-text-secondary">Context Gets Lost.</span>
              </h2>
              <p className="text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
                Your daily context is scattered across CRMs, billing software, support desks, and chat apps. Because these systems don't speak the same language, you become the "Human API"—spending hours manually reconstructing what's happening.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              {problemCards.map((card) => (
                <div key={card.title} className="glass-card rounded-[24px] p-12 text-center hover:border-red-500/40 transition-all backdrop-blur-xl border border-white/5 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className={`w-20 h-20 bg-${card.color}-500/10 rounded-3xl flex items-center justify-center mx-auto mb-8 relative z-10 border border-${card.color}-500/20`}>
                    <i className={`fa-solid ${card.icon} text-${card.color}-400 text-4xl`}></i>
                  </div>
                  <h3 className="text-3xl font-bold mb-5 relative z-10">{card.title}</h3>
                  <p className="text-text-secondary leading-relaxed text-lg relative z-10">{card.description}</p>
                  <div className="mt-8 pt-8 border-t border-white/5 relative z-10 text-left">
                    <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">The Impact</h4>
                    <ul className="space-y-3">
                      {card.impacts.map((impact) => (
                        <li key={impact} className={`flex items-start gap-3 text-sm text-text-dim`}>
                          <i className={`fa-solid fa-xmark text-${card.color}-400 mt-1`}></i>
                          <span>{impact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Slider Section */}
        <section id="by-use-case" className="py-32 px-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] blob-bg blur-3xl opacity-20 pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 glass-card rounded-full px-6 py-3 mb-8 backdrop-blur-xl border-gold/20">
                <i className="fa-solid fa-layer-group text-gold text-sm"></i>
                <span className="text-gold text-sm font-semibold tracking-wide">Our Solutions</span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Built for How You<br/>
                <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">Actually Work</span>
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Four focused tracks, one unified platform. Each solution brings the full power of the Spine, Twin, and Workspace to your specific workflow.
              </p>
            </div>

            {/* Slider Container */}
            <div className="relative" ref={sliderRef}>
              {/* Navigation Arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 lg:-translate-x-12 z-20 w-12 h-12 rounded-full bg-bg-elevated/80 backdrop-blur-xl border border-white/10 flex items-center justify-center text-text-secondary hover:text-gold hover:border-gold/30 transition-all hidden lg:flex"
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 lg:translate-x-12 z-20 w-12 h-12 rounded-full bg-bg-elevated/80 backdrop-blur-xl border border-white/10 flex items-center justify-center text-text-secondary hover:text-gold hover:border-gold/30 transition-all hidden lg:flex"
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>

              {/* Slides */}
              <div className="overflow-hidden rounded-3xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="glass-card rounded-3xl p-8 lg:p-12 border border-white/10"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                      {/* Content */}
                      <div>
                        <div className={`w-16 h-16 bg-${solutions[currentSlide].color === 'gold' ? 'gold' : solutions[currentSlide].color + '-500'}/10 rounded-2xl flex items-center justify-center mb-6 border border-${solutions[currentSlide].color === 'gold' ? 'gold' : solutions[currentSlide].color + '-500'}/20`}>
                          <i className={`fa-solid ${solutions[currentSlide].icon} text-${solutions[currentSlide].color === 'gold' ? 'gold' : solutions[currentSlide].color + '-400'} text-3xl`}></i>
                        </div>
                        <div className="text-sm text-text-dim uppercase tracking-wider mb-2">{solutions[currentSlide].subtitle}</div>
                        <h3 className="text-4xl font-bold mb-4 text-text-primary">{solutions[currentSlide].title}</h3>
                        <p className="text-text-secondary text-lg leading-relaxed mb-8">{solutions[currentSlide].description}</p>
                        <a 
                          href={solutions[currentSlide].href}
                          className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-bg-main px-6 py-3 rounded-lg font-semibold transition-all gold-glow"
                        >
                          Learn More <i className="fa-solid fa-arrow-right text-sm"></i>
                        </a>
                      </div>

                      {/* Features Grid */}
                      <div className="grid grid-cols-2 gap-4">
                        {solutions[currentSlide].features.map((feature, idx) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card bg-white/5 rounded-xl p-5 border border-white/10"
                          >
                            <div className={`w-8 h-8 rounded-lg bg-${solutions[currentSlide].color === 'gold' ? 'gold' : solutions[currentSlide].color + '-500'}/20 flex items-center justify-center mb-3`}>
                              <i className={`fa-solid fa-check text-${solutions[currentSlide].color === 'gold' ? 'gold' : solutions[currentSlide].color + '-400'} text-sm`}></i>
                            </div>
                            <div className="text-text-primary font-medium text-sm">{feature}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Dots Navigation */}
              <div className="flex items-center justify-center gap-3 mt-8">
                {solutions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`relative h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "w-8 bg-gold" : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                  >
                    {index === currentSlide && isAutoPlaying && (
                      <motion.div
                        className="absolute inset-0 bg-gold/50 rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 5, ease: "linear" }}
                        style={{ transformOrigin: "left" }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Solution Cards Preview */}
              <div className="grid grid-cols-3 lg:grid-cols-5 gap-4 mt-12">
                {solutions.map((solution, index) => (
                  <button
                    key={solution.id}
                    onClick={() => goToSlide(index)}
                    className={`text-left p-4 rounded-xl transition-all ${
                      index === currentSlide 
                        ? "glass-card border-gold/30 bg-gold/5" 
                        : "glass-card hover:border-white/20"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg bg-${solution.color === 'gold' ? 'gold' : solution.color + '-500'}/10 flex items-center justify-center mb-3`}>
                      <i className={`fa-solid ${solution.icon} text-${solution.color === 'gold' ? 'gold' : solution.color + '-400'}`}></i>
                    </div>
                    <div className={`font-semibold text-sm ${index === currentSlide ? 'text-gold' : 'text-text-primary'}`}>
                      {solution.title}
                    </div>
                    <div className="text-xs text-text-dim mt-1">{solution.subtitle}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Unified Intelligence Section */}
        <section id="by-role" className="py-32 px-6 relative overflow-hidden">
          <div id="by-industry" className="absolute top-0 left-0 invisible" aria-hidden="true" />
          <div className="absolute top-0 right-0 w-[700px] h-[700px] blob-bg blur-3xl opacity-30 pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-24">
              <div className="inline-flex items-center gap-3 glass-card rounded-full px-6 py-3 mb-8 backdrop-blur-xl border-purple-500/20">
                <i className="fa-solid fa-desktop text-purple-400 text-sm"></i>
                <span className="text-purple-300 text-sm font-semibold tracking-wide">The Shift</span>
              </div>
              <h2 className="text-6xl lg:text-7xl font-bold mb-10 leading-tight">
                From Fragmented to<br/>
                <span className="text-text-secondary">Unified Intelligence</span>
              </h2>
              <p className="text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
                IntegrateWise builds a semantic memory layer that understands relationships, timelines, and intent—transforming scattered data into actionable intelligence.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="glass-card rounded-[32px] p-8 lg:p-14 max-w-7xl mx-auto backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/5">
                <h3 className="text-3xl font-bold mb-8 text-text-primary">Key Capabilities</h3>
                <div className="space-y-4">
                  {capabilities.map((cap) => (
                    <div key={cap.name} className="glass-card bg-white/5 border border-white/10 rounded-[20px] p-6 cursor-pointer hover:bg-white/10 transition-colors group">
                      <h4 className="text-lg font-bold mb-2 flex items-center gap-3 text-text-primary">
                        <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center border border-gold/30">
                          <i className={`fa-solid ${cap.icon} text-gold`}></i>
                        </div>
                        {cap.name}
                      </h4>
                      <p className="text-text-secondary leading-relaxed text-sm pl-11">{cap.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-[32px] p-8 lg:p-14 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/5">
                <h3 className="text-3xl font-bold mb-8 text-text-primary">Built for Every Role</h3>
                <div className="space-y-4">
                  <div className="glass-card bg-gold/10 border border-gold/30 rounded-[20px] p-6">
                    <h4 className="text-lg font-bold mb-2 text-gold">For Individual Contributors</h4>
                    <p className="text-text-secondary text-sm">Personal intelligence on your work patterns and priorities—so the next-best action is one click, not an hour of digging.</p>
                  </div>
                  <div className="glass-card bg-blue-500/10 border border-blue-500/30 rounded-[20px] p-6">
                    <h4 className="text-lg font-bold mb-2 text-blue-300">For Managers</h4>
                    <p className="text-text-secondary text-sm">Team-wide patterns surfaced with evidence—so 1:1s and pipeline reviews start from facts, not status updates.</p>
                  </div>
                  <div className="glass-card bg-purple-500/10 border border-purple-500/30 rounded-[20px] p-6">
                    <h4 className="text-lg font-bold mb-2 text-purple-300">For Executives</h4>
                    <p className="text-text-secondary text-sm">One-screen view of the entire business with proactive Twin briefings—so strategic calls happen with current context, not last week's deck.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta-section" className="py-24 px-6 bg-bg-secondary/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-text-primary mb-4">Ready to unify your context?</h2>
            <p className="text-text-secondary text-lg mb-8">See how IntegrateWise transforms work across your organization.</p>
            <a href="#" className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-bg-main px-8 py-4 rounded-lg font-semibold transition-all gold-glow">
              Request Demo <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
