'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  const values = [
    { title: "Memory Over Models", description: "AI models evolve. Your source of truth should remain stable, owned, and private.", icon: "fa-brain" },
    { title: "Human-in-the-loop Control", description: "AI assists. Humans approve. Every action requires explicit human consent.", icon: "fa-handshake" },
    { title: "Continuity Over Disruption", description: "Build knowledge that compounds, not systems that reset with every model update.", icon: "fa-circle-notch" },
  ]

  const stats = [
    { value: "$8M+", label: "Revenue Protected (cumulative across customers)", icon: "fa-shield" },
    { value: "14hrs", label: "Saved Per Week", icon: "fa-hourglass-end" },
    { value: "70+", label: "Tool Connectors", icon: "fa-plug" },
    { value: "99.9%", label: "Uptime SLA", icon: "fa-check" },
  ]

  return (
    <div className="min-h-screen bg-bg-main">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="relative pt-32 pb-24 px-6 overflow-hidden min-h-[700px] flex items-center">
          <div className="absolute inset-0 hero-glow pointer-events-none"></div>
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] blob-bg blur-3xl pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
                <i className="fa-solid fa-users text-gold"></i>
                <span className="text-gold text-sm">About IntegrateWise</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                We&apos;re Ending the<br/>
                <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                  Human API Era
                </span>
              </h1>
              
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                IntegrateWise was born from a crisis: watching an $8M account slip away because critical context was buried across disconnected tools. We built the Spine and Digital Memory we desperately needed that night—so no individual or team ever has to become the &ldquo;Human API&rdquo; again.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-24 px-6 bg-bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
                  <i className="fa-solid fa-bullseye text-gold"></i>
                  <span className="text-gold text-sm">Our Mission</span>
                </div>
                
                <h2 className="text-5xl font-bold mb-6 leading-tight">
                  End Human API Work
                </h2>
                
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  Your team shouldn&apos;t spend hours jumping between tabs, manually reconstructing context, and acting as the bridge between disconnected systems.
                </p>
                
                <p className="text-lg text-text-secondary leading-relaxed mb-8">
                  We believe every individual and organization deserves a <span className="text-gold font-semibold">Digital Memory</span>—a persistent, governed knowledge layer that unifies scattered data, preserves context, and compounds into actionable intelligence over time. Your data becomes memory. Your Twin connects the dots. You stay in control.
                </p>
                
                <div className="space-y-4">
                  {values.map((value) => (
                    <div key={value.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                        <i className={`fa-solid ${value.icon} text-gold`}></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">{value.title}</h4>
                        <p className="text-text-secondary text-sm">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 bg-gold/10 rounded-full blur-3xl"></div>
                <div className="relative glass-card rounded-2xl p-12">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-gold to-gold-light rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <i className="fa-solid fa-brain text-bg-main text-4xl"></i>
                    </div>
                    <h3 className="text-3xl font-bold mb-2">$8M+ Protected</h3>
                    <p className="text-text-secondary">Cumulative revenue saved across customers through early signal detection</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat) => (
                      <div key={stat.label} className="text-center p-4 bg-bg-elevated/50 rounded-xl">
                        <div className="text-3xl font-bold text-gold mb-1">{stat.value}</div>
                        <div className="text-sm text-text-dim">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Origin Story */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
                <i className="fa-solid fa-book-open text-gold"></i>
                <span className="text-gold text-sm">Origin Story</span>
              </div>
              <h2 className="text-5xl font-bold mb-4">The $8M Crisis That Started It All</h2>
              <p className="text-xl text-text-secondary">How a CSM&apos;s nightmare became the blueprint for IntegrateWise</p>
            </div>
            
            <div className="space-y-12">
              {[
                {
                  title: "The Silent Escalation",
                  description: "Our founder was a Customer Success Manager at a fast-growing SaaS company. One morning, an $8M enterprise account—their largest customer—sent a termination notice. The shocking part? All the warning signs were there.",
                  icon: "fa-triangle-exclamation",
                  color: "red",
                  label: "The Problem"
                },
                {
                  title: "Scattered Signals",
                  description: "Support tickets in Zendesk showed declining product usage. Slack conversations hinted at frustration. The CRM had outdated notes. Billing showed delayed payments. Each system held a piece of the story, but no one had connected the dots.",
                  icon: "fa-puzzle-piece",
                  color: "orange",
                  label: "The Discovery"
                },
                {
                  title: "The Manual Bridge",
                  description: "To save the account, our founder spent three days manually compiling data from six systems, stitching together a narrative of the customer&apos;s journey. That narrative—and the intervention it enabled—saved the $8M relationship. But it took 48 hours of human effort to do what should have been automatic.",
                  icon: "fa-person-hiking",
                  color: "yellow",
                  label: "The Realization"
                },
                {
                  title: "The Insight",
                  description: "No team should have to become a human router between disconnected systems. What was needed wasn&apos;t another dashboard—it was a unified memory layer that knew the full story, connected the dots, and surfaced insights before crises happened.",
                  icon: "fa-lightbulb",
                  color: "gold",
                  label: "The Vision"
                }
              ].map((story, index) => (
                <div key={story.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="glass-card rounded-2xl p-8">
                      <div className={`flex items-center gap-3 mb-4 text-${story.color}-400`}>
                        <div className={`w-12 h-12 bg-${story.color}-500/10 rounded-xl flex items-center justify-center`}>
                          <i className={`fa-solid ${story.icon} text-xl`}></i>
                        </div>
                        <span className="text-text-dim text-sm">{story.label}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{story.title}</h3>
                      <p className="text-text-secondary leading-relaxed">
                        {story.description}
                      </p>
                    </div>
                  </div>
                  <div className={`flex justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className={`w-6 h-6 bg-${story.color}-500 rounded-full border-4 border-bg-main shadow-lg`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-24 px-6 bg-bg-secondary/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-white">Our Vision for</span><br/>
              <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                The Future of Work
              </span>
            </h2>
            <p className="text-xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
              A world where every individual and every team—from solo founders building Personal Space to global organizations deploying enterprise Workspacees—has a unified, intelligent memory layer. Where context is never lost. Where people spend their time making decisions, not gathering data. Where AI amplifies human judgment instead of replacing it.
            </p>
            <a href="#" className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-bg-main px-8 py-4 rounded-lg font-semibold text-lg transition-all gold-glow">
              Join Us in Building It <i className="fa-solid fa-arrow-right text-sm"></i>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
