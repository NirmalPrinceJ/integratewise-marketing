'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ProductPage() {
  const timelineEvents = [
    {
      icon: "fa-handshake",
      color: "green",
      time: "Today, 9:23 AM",
      title: "Contract Sent",
      description: "Renewal contract sent to VP of Operations. Deal value: $2.4M ARR."
    },
    {
      icon: "fa-slack",
      color: "blue",
      time: "Yesterday, 2:15 PM",
      title: "Slack Message",
      description: '"Love the new dashboard! Quick question about API rate limits..."'
    },
    {
      icon: "fa-ticket",
      color: "orange",
      time: "2 days ago, 11:42 AM",
      title: "Support Ticket Escalated",
      description: "Zendesk #4021: API latency concerns in production environment."
    },
    {
      icon: "fa-chart-line",
      color: "purple",
      time: "5 days ago",
      title: "Usage Spike Detected",
      description: "API calls increased 34% week-over-week. Positive engagement signal."
    },
    {
      icon: "fa-video",
      color: "blue",
      time: "7 days ago",
      title: "QBR Completed",
      description: "Quarterly Business Review with CTO and VP Ops. Discussed roadmap priorities."
    }
  ]

  const entity360Features = [
    {
      icon: "fa-database",
      color: "blue",
      title: "Unified Data",
      description: "All CRM fields, billing history, product usage, support tickets, and communication threads in one view."
    },
    {
      icon: "fa-clock-rotate-left",
      color: "purple",
      title: "Complete History",
      description: "Temporal timeline showing how the entity evolved—from first contact to current state."
    },
    {
      icon: "fa-link",
      color: "gold",
      title: "Relationship Graph",
      description: "See how this entity connects to others—related accounts, shared contacts, linked projects."
    }
  ]

  const roleUseCases = [
    {
      icon: "fa-headset",
      color: "blue",
      role: "CSM",
      description: "Customer Success Managers open the Workspace to monitor account health, track engagement, and spot renewal risks weeks early—so they walk into every QBR already knowing what to address.",
      items: ["Health score tracking", "Usage trend analysis", "Proactive outreach triggers"]
    },
    {
      icon: "fa-chart-line",
      color: "purple",
      role: "Business Ops",
      description: "Operations teams use the Workspace to understand revenue drivers, forecast churn, and reallocate capacity—so weekly reviews start with answers, not data pulls.",
      items: ["Revenue cohort analysis", "Churn prediction models", "Capacity planning"]
    },
    {
      icon: "fa-rocket",
      color: "gold",
      role: "RevOps",
      description: "Revenue Operations teams align sales, marketing, and customer success on a single source of truth in the Workspace—so handoffs stop dropping context and pipeline stays trustworthy.",
      items: ["Pipeline visibility", "Cross-team handoffs", "Attribution tracking"]
    }
  ]

  return (
    <div className="min-h-screen bg-bg-main">
      <Header />
      <main>
        {/* Hero Section */}
        <section id="workspace" className="relative pt-32 pb-24 px-6 overflow-hidden min-h-[600px] flex items-center">
          <div className="absolute inset-0 hero-glow pointer-events-none"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-8">
                <i className="fa-solid fa-desktop text-gold text-sm"></i>
                <span className="text-gold text-sm font-medium">Adaptive Workspace</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Your Governed
                <br />
                <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                  Knowledge Workspace
                </span>
              </h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
                The Workspace transforms scattered data into unified entity views, evidence-backed insights, and approval-gated actions—so you work with complete context, not fragmented tools.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#entity-360" className="bg-gold hover:bg-gold-light text-bg-main px-10 py-4 rounded-lg font-semibold transition-all gold-glow transform hover:scale-105">
                  Explore Features
                </a>
                <a href="/demo" className="border border-white/10 bg-white/5 hover:bg-white/10 px-10 py-4 rounded-lg font-semibold text-text-primary transition-all">
                  See It In Action
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Workspace Overview */}
        <section className="py-24 px-6 bg-bg-secondary/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
                  <i className="fa-solid fa-layer-group text-purple-400"></i>
                  <span className="text-purple-300 text-sm font-medium">What is the Workspace?</span>
                </div>
                <h2 className="text-5xl font-bold mb-6 leading-tight">
                  One Space for
                  <br />
                  <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                    All Your Entities
                  </span>
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  The Workspace is your governed workspace—the single place where the Spine, your Twin, and your approvals meet. Entity 360 is its default view, giving you a unified picture of every account, client, or project, with all related data, conversations, and actions in one place.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed mb-8">
                  No more tab-switching. No more context loss. Everything you need to make informed decisions is right here.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-1">
                      <i className="fa-solid fa-check text-gold"></i>
                    </div>
                    <div>
                      <h5 className="font-semibold text-text-primary mb-1">Unified Entity Views</h5>
                      <p className="text-text-secondary text-sm">See accounts, clients, or projects with complete history and context.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-1">
                      <i className="fa-solid fa-check text-gold"></i>
                    </div>
                    <div>
                      <h5 className="font-semibold text-text-primary mb-1">Evidence-Backed Insights</h5>
                      <p className="text-text-secondary text-sm">Every insight is linked to source data—emails, tickets, meetings.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-1">
                      <i className="fa-solid fa-check text-gold"></i>
                    </div>
                    <div>
                      <h5 className="font-semibold text-text-primary mb-1">Approval-Gated Actions</h5>
                      <p className="text-text-secondary text-sm">Twin proposes; you Approve, Edit, or Reject. Nothing executes—and nothing is written to memory—without your explicit consent.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-8 bg-gradient-to-br from-gold/5 to-transparent">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-text-primary">Acme Corporation</h4>
                      <p className="text-text-dim text-sm">Enterprise Account • $2.4M ARR</p>
                    </div>
                    <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-green-300 text-xs font-medium">Healthy</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="glass-card rounded-xl p-4">
                    <div className="text-text-dim text-xs mb-1">Health Score</div>
                    <div className="text-2xl font-bold text-green-400">92/100</div>
                  </div>
                  <div className="glass-card rounded-xl p-4">
                    <div className="text-text-dim text-xs mb-1">Next Renewal</div>
                    <div className="text-2xl font-bold text-text-primary">14d</div>
                  </div>
                  <div className="glass-card rounded-xl p-4">
                    <div className="text-text-dim text-xs mb-1">Open Issues</div>
                    <div className="text-2xl font-bold text-orange-400">3</div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="glass-card rounded-xl p-4 border-l-4 border-blue-500">
                    <div className="flex items-center gap-3 mb-2">
                      <i className="fa-brands fa-slack text-blue-400 text-sm"></i>
                      <span className="text-xs text-text-dim">Slack #general • 2h ago</span>
                    </div>
                    <p className="text-sm text-text-secondary">&quot;The new dashboard is amazing! Quick question about API rate limits...&quot;</p>
                  </div>

                  <div className="glass-card rounded-xl p-4 border-l-4 border-purple-500">
                    <div className="flex items-center gap-3 mb-2">
                      <i className="fa-solid fa-ticket text-purple-400 text-sm"></i>
                      <span className="text-xs text-text-dim">Zendesk #4021 • 4h ago</span>
                    </div>
                    <p className="text-sm text-text-secondary">Support ticket escalated: API latency concerns in production.</p>
                  </div>

                  <div className="glass-card rounded-xl p-4 border-l-4 border-green-500">
                    <div className="flex items-center gap-3 mb-2">
                      <i className="fa-solid fa-handshake text-green-400 text-sm"></i>
                      <span className="text-xs text-text-dim">Salesforce • Updated today</span>
                    </div>
                    <p className="text-sm text-text-secondary">Deal stage: Renewal Negotiation → Contract Sent</p>
                  </div>
                </div>

                <div className="glass-card rounded-xl p-4 bg-gold/5 border-gold/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-brain text-gold text-sm"></i>
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-text-primary">Twin Insight</div>
                      <div className="text-xs text-text-dim">Generated 15 min ago</div>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary mb-3">
                    Client satisfaction is high, but API performance concerns need immediate attention before renewal.
                  </p>
                  <button className="w-full bg-gold hover:bg-gold-light text-bg-main py-2 rounded-lg text-xs font-semibold transition-all">
                    Review Suggested Action
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Entity 360 View */}
        <section id="entity-360" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <i className="fa-solid fa-circle-nodes text-blue-400"></i>
                <span className="text-blue-300 text-sm font-medium">Entity 360 View</span>
              </div>
              <h2 className="text-5xl font-bold mb-6">
                See Everything About
                <br />
                <span className="text-text-secondary">Any Entity</span>
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Whether it&apos;s an account, client, or project, the Entity 360 view aggregates all related data—CRM records, support tickets, Slack threads, meeting notes, and more—into a single, comprehensive dashboard.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {entity360Features.map((feature) => (
                <div key={feature.title} className="glass-card rounded-2xl p-8 hover:border-blue-500/30 transition-all group">
                  <div className={`w-14 h-14 bg-${feature.color}-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-${feature.color}-500/20 transition-all`}>
                    <i className={`fa-solid ${feature.icon} text-${feature.color}-400 text-2xl`}></i>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-text-primary">{feature.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="glass-card rounded-2xl p-10">
              <h3 className="text-3xl font-bold mb-8 text-text-primary">Role-Based Use Cases</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {roleUseCases.map((useCase) => (
                  <div key={useCase.role}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 bg-${useCase.color}-500/10 rounded-full flex items-center justify-center`}>
                        <i className={`fa-solid ${useCase.icon} text-${useCase.color}-400 text-xl`}></i>
                      </div>
                      <h4 className="font-semibold text-lg text-text-primary">{useCase.role}</h4>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {useCase.description}
                    </p>
                    <div className="space-y-2">
                      {useCase.items.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs text-text-secondary">
                          <i className={`fa-solid fa-check text-${useCase.color}-400`}></i>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Evidence & Timeline */}
        <section id="evidence-timeline" className="py-24 px-6 bg-bg-secondary/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
                <i className="fa-solid fa-file-invoice text-green-400"></i>
                <span className="text-green-300 text-sm font-medium">Evidence & Timeline</span>
              </div>
              <h2 className="text-5xl font-bold mb-6">
                Every Insight,
                <br />
                <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                  Backed by Evidence
                </span>
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                No black-box AI. Every suggestion, every insight, every alert is linked to the source data that triggered it—so you always know why.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <div className="glass-card rounded-2xl p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center shrink-0">
                      <i className="fa-solid fa-magnifying-glass-chart text-green-400 text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-2 text-text-primary">Evidence Panels</h3>
                      <p className="text-text-secondary">Click any insight to see the underlying data—emails, tickets, Slack messages, usage logs.</p>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3 text-text-secondary">
                      <i className="fa-solid fa-check text-green-400"></i>
                      <span>Source attribution for every claim</span>
                    </div>
                    <div className="flex items-center gap-3 text-text-secondary">
                      <i className="fa-solid fa-check text-green-400"></i>
                      <span>Jump directly to original context</span>
                    </div>
                    <div className="flex items-center gap-3 text-text-secondary">
                      <i className="fa-solid fa-check text-green-400"></i>
                      <span>Sentiment & trend analysis</span>
                    </div>
                  </div>
                </div>

                <div className="glass-card rounded-2xl p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center shrink-0">
                      <i className="fa-solid fa-timeline text-blue-400 text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-2 text-text-primary">Interactive Timeline</h3>
                      <p className="text-text-secondary">Scrub through time to see how the entity evolved—deals, tickets, conversations, all in chronological order.</p>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3 text-text-secondary">
                      <i className="fa-solid fa-check text-blue-400"></i>
                      <span>Multi-source event stream</span>
                    </div>
                    <div className="flex items-center gap-3 text-text-secondary">
                      <i className="fa-solid fa-check text-blue-400"></i>
                      <span>Filter by event type or source</span>
                    </div>
                    <div className="flex items-center gap-3 text-text-secondary">
                      <i className="fa-solid fa-check text-blue-400"></i>
                      <span>Zoom into critical moments</span>
                    </div>
                  </div>
                </div>

                <div className="glass-card rounded-2xl p-8 bg-gold/5 border-gold/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center shrink-0">
                      <i className="fa-solid fa-lightbulb text-gold text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-2 text-text-primary">Why This Matters</h3>
                      <p className="text-text-secondary">
                        Traditional dashboards show you <em>what</em> happened. The Workspace shows you <em>why</em> it happened—with full transparency and traceability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-8">
                <div className="mb-6">
                  <h4 className="font-semibold text-text-primary mb-2">Timeline: Acme Corp</h4>
                  <p className="text-text-secondary text-sm">Last 30 days of activity</p>
                </div>

                <div className="space-y-6 max-h-[600px] overflow-y-auto">
                  {timelineEvents.map((event, index) => (
                    <div key={index} className={`relative pl-8 pb-6 ${index !== timelineEvents.length - 1 ? 'border-l-2 border-white/10' : ''}`}>
                      <div className={`absolute -left-3 top-0 w-6 h-6 bg-${event.color}-500/20 rounded-full border-2 border-${event.color}-500 flex items-center justify-center`}>
                        <div className={`w-2 h-2 bg-${event.color}-400 rounded-full`}></div>
                      </div>
                      <div className="glass-card rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <i className={`fa-solid ${event.icon} text-${event.color}-400 text-sm`}></i>
                          <span className="text-xs text-text-dim">{event.time}</span>
                        </div>
                        <p className="text-sm font-medium text-text-primary mb-1">{event.title}</p>
                        <p className="text-xs text-text-secondary">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-6">
                <i className="fa-solid fa-gears text-gold"></i>
                <span className="text-gold text-sm font-medium">How It Works</span>
              </div>
              <h2 className="text-5xl font-bold mb-6">
                The Workspace Workflow
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                From data ingestion to action execution, every step is designed for transparency, control, and continuous learning.
              </p>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Horizontal connector line visible on md+ */}
              <div className="hidden md:block absolute top-8 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-px bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-green-500/30" />
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-blue-500 relative z-10">
                  <i className="fa-solid fa-plug text-blue-400 text-2xl"></i>
                </div>
                <h4 className="font-semibold mb-2">1. Connect</h4>
                <p className="text-text-dim text-sm">Link your tools and data sources via the Spine&apos;s connectors</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-purple-500 relative z-10">
                  <i className="fa-solid fa-database text-purple-400 text-2xl"></i>
                </div>
                <h4 className="font-semibold mb-2">2. Unify</h4>
                <p className="text-text-dim text-sm">Data normalizes into Entity Memory with full context</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-gold relative z-10">
                  <i className="fa-solid fa-brain text-gold text-2xl"></i>
                </div>
                <h4 className="font-semibold mb-2">3. Analyze</h4>
                <p className="text-text-dim text-sm">Your Twin reasons over memory and generates insights</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-green-500 relative z-10">
                  <i className="fa-solid fa-user-check text-green-400 text-2xl"></i>
                </div>
                <h4 className="font-semibold mb-2">4. Act</h4>
                <p className="text-text-dim text-sm">Review and approve suggested actions in the Workspace</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-bg-secondary/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-text-primary mb-6">
              Experience the Workspace Difference
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              See how unified entity views, evidence-backed insights, and approval-gated actions transform how your team works. The same Workspace powers Personal Space for individuals—your own private memory, scoped to a User Memory only you can see.
            </p>
            <a href="/demo" className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-bg-main px-8 py-4 rounded-lg font-semibold text-lg transition-all gold-glow">
              Request Demo <i className="fa-solid fa-arrow-right text-sm"></i>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
