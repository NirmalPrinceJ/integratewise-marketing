'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
export default function IntelligencePage() {
  const capabilities = [
    { icon: "fa-chart-line", color: "purple", title: "Trend Detection", description: "Identifies upward/downward trends in usage, engagement, sentiment, or any quantifiable metric." },
    { icon: "fa-triangle-exclamation", color: "blue", title: "Anomaly Detection", description: "Flags unusual patterns—like sudden drops in engagement or spikes in support tickets." },
    { icon: "fa-link", color: "green", title: "Cross-Source Correlation", description: "Connects events across different systems—CRM, support, Slack, usage logs." },
    { icon: "fa-users", color: "orange", title: "Relationship Mapping", description: "Reveals how contacts, accounts, and projects are connected—finding influencers and decision-makers." },
    { icon: "fa-lightbulb", color: "gold", title: "Pattern Recognition", description: "Identifies recurring behaviors, buying signals, and churn indicators invisible to human review." },
    { icon: "fa-shield-halved", color: "red", title: "Risk Assessment", description: "Proactively flags accounts at risk of churn before problems escalate." }
  ]

  const twinLoop = [
    { num: 1, icon: "fa-eye", color: "blue", title: "Observe", description: "Twin continuously monitors all entities, events, and relationships in your Digital Memory." },
    { num: 2, icon: "fa-brain", color: "purple", title: "Reason", description: "Analyzes patterns, correlates data across sources, and identifies what needs attention." },
    { num: 3, icon: "fa-lightbulb", color: "gold", title: "Suggest", description: "Surfaces insights and proposes actions—always with evidence citations." },
    { num: 4, icon: "fa-user-check", color: "green", title: "Await Approval", description: "Waits for your explicit approval before taking any action or writing memory." },
    { num: 5, icon: "fa-rocket", color: "orange", title: "Act / Write", description: "On approval, Twin executes: update a CRM field, draft a follow-up email, schedule a meeting, or create a task. Every action writes back to Digital Memory—compounding what it knows." }
  ]

  const safetyFeatures = [
    { icon: "fa-lock", title: "Scope Boundaries", description: "Twin can only read memory it's allowed to access—respecting privacy scopes at every level." },
    { icon: "fa-shield", title: "Action Whitelisting", description: "Define what the Twin can and cannot do—write to specific memory scopes, propose specific actions." },
    { icon: "fa-user-check", title: "Human Approval Gate", description: "Every action requires explicit human approval. Twin never executes autonomously." },
    { icon: "fa-eye", title: "Full Auditability", description: "Every Twin decision is logged and traceable—who approved what, when, and why." }
  ]

  return (
    <div className="min-h-screen bg-bg-main">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section id="cognitive-hero" className="relative pt-32 pb-24 px-6 overflow-hidden">
          <div className="absolute inset-0 hero-glow pointer-events-none"></div>
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-8">
              <i className="fa-solid fa-brain text-purple-400 text-sm"></i>
              <span className="text-purple-300 text-sm font-medium">Your Twin</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Reasoning
              <br />
              <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                With Control
              </span>
            </h1>
            
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
              Powered by the Spine&apos;s Digital Memory and surfaced in the Workspace, your Twin observes, infers patterns, cites evidence, and suggests actions—but never acts without your approval.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a href="#reasoning" className="bg-gold hover:bg-gold-light text-bg-main px-10 py-4 rounded-lg font-semibold transition-all gold-glow transform hover:scale-105">
                How It Works
              </a>
              <a href="/demo" className="border border-white/10 bg-white/5 hover:bg-white/10 px-10 py-4 rounded-lg font-semibold text-text-primary transition-all">
                See Twin In Action
              </a>
            </div>
          </div>
        </section>

        {/* Twin Intro Section */}
        <section id="twin-intro" className="py-24 px-6 bg-bg-secondary/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                  <i className="fa-solid fa-wand-magic-sparkles text-blue-400 text-sm"></i>
                  <span className="text-blue-300 text-sm font-medium">What is the Twin?</span>
                </div>
                <h2 className="text-5xl font-bold mb-6 leading-tight text-text-primary">
                  Your Intelligent
                  <br />
                  <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                    Assistant
                  </span>
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  The Twin is a reasoning layer that sits on top of your Digital Memory. It continuously watches for patterns, anomalies, and opportunities—then surfaces insights when they matter most.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed mb-8">
                  Think of it as a tireless analyst who never sleeps, never forgets, and always cites their sources. But unlike autonomous AI agents, your Twin never acts without your explicit permission.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-1">
                      <i className="fa-solid fa-eye text-gold"></i>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1 text-text-primary">Continuous Observation</h5>
                      <p className="text-text-dim text-sm">Monitors all entities, relationships, and events in real-time.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-1">
                      <i className="fa-solid fa-lightbulb text-gold"></i>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1 text-text-primary">Pattern Recognition</h5>
                      <p className="text-text-dim text-sm">Identifies trends, risks, and opportunities across your data.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-1">
                      <i className="fa-solid fa-shield-halved text-gold"></i>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1 text-text-primary">Human Control</h5>
                      <p className="text-text-dim text-sm">Suggests actions, never executes them autonomously.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-[600px] glass-card rounded-2xl p-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent"></div>
                <div className="relative h-full flex flex-col">
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                        <i className="fa-solid fa-brain text-gold text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary">Twin Activity</h4>
                        <p className="text-text-dim text-xs">Monitoring 247 entities</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 flex-1 overflow-y-auto">
                    <div className="glass-card rounded-xl p-4 border-l-4 border-green-500">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-text-dim">Observing</span>
                      </div>
                      <p className="text-sm text-text-secondary mb-2">
                        Detected 34% increase in API usage for Acme Corp over last 7 days
                      </p>
                      <div className="flex items-center gap-2 text-xs text-text-dim">
                        <i className="fa-solid fa-database"></i>
                        <span>Source: Usage Analytics</span>
                      </div>
                    </div>

                    <div className="glass-card rounded-xl p-4 border-l-4 border-blue-500">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-text-dim">Reasoning</span>
                      </div>
                      <p className="text-sm text-text-secondary mb-2">
                        Cross-referencing usage spike with Slack sentiment and support tickets...
                      </p>
                      <div className="flex items-center gap-2 text-xs text-text-dim">
                        <i className="fa-solid fa-gears"></i>
                        <span>Processing 3 data sources</span>
                      </div>
                    </div>

                    <div className="glass-card rounded-xl p-4 border-l-4 border-gold bg-gold/5">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-gold rounded-full"></div>
                        <span className="text-xs text-gold">Insight Ready</span>
                      </div>
                      <p className="text-sm text-text-secondary mb-3">
                        <strong>Expansion Opportunity:</strong> Acme Corp shows strong engagement signals. Engineering team mentioned "scaling to new markets" in Slack.
                      </p>
                      <div className="space-y-2 mb-3">
                        <div className="flex items-center gap-2 text-xs text-text-dim">
                          <i className="fa-solid fa-quote-left text-gold"></i>
                          <span>Evidence: 3 Slack messages, 2 support tickets, usage data</span>
                        </div>
                      </div>
                      <button className="w-full bg-gold hover:bg-gold-light text-bg-main py-2 rounded-lg text-xs font-semibold transition-all">
                        Review Suggested Action
                      </button>
                    </div>

                    <div className="glass-card rounded-xl p-4 border-l-4 border-purple-500">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-text-dim">Awaiting Approval</span>
                      </div>
                      <p className="text-sm text-text-secondary mb-2">
                        Draft email ready for TechCorp renewal discussion. Awaiting your review.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-text-dim">
                        <i className="fa-solid fa-clock"></i>
                        <span>Pending 2h 14m</span>
                      </div>
                    </div>
                  </div>
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
                <i className="fa-solid fa-route text-gold text-sm"></i>
                <span className="text-gold text-sm font-medium">The Twin Loop</span>
              </div>
              <h2 className="text-5xl font-bold mb-6 text-text-primary">
                How Your Twin Works
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                A simple, five-step process that keeps you in control while maximizing AI assistance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16">
              {twinLoop.map((step) => (
                <div key={step.num} className={`glass-card rounded-2xl p-8 text-center hover:border-${step.color}-500/30 transition-all group`}>
                  <div className={`w-16 h-16 bg-${step.color}-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-${step.color}-500/20 transition-all`}>
                    <i className={`fa-solid ${step.icon} text-${step.color}-400 text-2xl`}></i>
                  </div>
                  <div className={`w-8 h-8 bg-${step.color}-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-${step.color}-400 font-bold text-sm`}>{step.num}</div>
                  <h3 className="text-xl font-semibold mb-3 text-text-primary">{step.title}</h3>
                  <p className="text-text-dim text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="glass-card rounded-2xl p-10 bg-gradient-to-br from-gold/5 to-transparent border-gold/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-rotate text-gold text-xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-text-primary">The Continuous Loop</h3>
                  <p className="text-text-secondary leading-relaxed">
                    Every approved action feeds back into your Digital Memory, making your Twin smarter over time. This creates a compounding effect—the more you use IntegrateWise, the more context-aware and valuable it becomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reasoning Engine Section */}
        <section id="reasoning" className="py-24 px-6 bg-bg-secondary/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
                <i className="fa-solid fa-brain text-purple-400 text-sm"></i>
                <span className="text-purple-300 text-sm font-medium">Reasoning Engine</span>
              </div>
              <h2 className="text-5xl font-bold mb-6 text-text-primary">
                What Your Twin Can Infer
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                The Twin reasons over your Digital Memory to surface what matters: trends, anomalies, cross-source correlations, and risks—each with cited evidence so you can decide quickly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((cap) => (
                <div key={cap.title} className={`glass-card rounded-2xl p-8 hover:border-${cap.color}-500/30 transition-all`}>
                  <div className={`w-14 h-14 bg-${cap.color}-500/10 rounded-xl flex items-center justify-center mb-6`}>
                    <i className={`fa-solid ${cap.icon} text-${cap.color}-400 text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-text-primary">{cap.title}</h3>
                  <p className="text-text-dim text-sm leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety & Control Section */}
        <section id="safety" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
                <i className="fa-solid fa-shield-check text-green-400 text-sm"></i>
                <span className="text-green-300 text-sm font-medium">Safety & Control</span>
              </div>
              <h2 className="text-5xl font-bold mb-6 text-text-primary">
                Safety Built In
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Your Twin is powerful, but never autonomous. Multiple layers of control ensure you stay in command—and in Personal Space, your Twin is scoped to your User Memory only, invisible to the rest of the org.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {safetyFeatures.map((feature) => (
                <div key={feature.title} className="glass-card rounded-2xl p-8 hover:border-green-500/30 transition-all">
                  <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mb-6">
                    <i className={`fa-solid ${feature.icon} text-green-400 text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-text-primary">{feature.title}</h3>
                  <p className="text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Model Options Section */}
        <section id="models" className="py-24 px-6 bg-bg-secondary/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <i className="fa-solid fa-code-branch text-blue-400 text-sm"></i>
                <span className="text-blue-300 text-sm font-medium">Flexible & Open</span>
              </div>
              <h2 className="text-5xl font-bold mb-6 text-text-primary">
                Your Twin Is Model-Agnostic
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Your Twin is not locked into a single LLM provider. Switch models whenever you want—your Digital Memory stays intact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card rounded-2xl p-8 hover:border-blue-500/30 transition-all">
                <h3 className="text-2xl font-semibold mb-4 text-text-primary">Claude 3.5</h3>
                <p className="text-text-secondary mb-6">Excellent reasoning and long-context understanding. Great for complex analysis.</p>
                <a href="#" className="text-gold hover:text-gold-light transition-colors font-medium text-sm">Learn more →</a>
              </div>
              <div className="glass-card rounded-2xl p-8 border-gold/30 hover:border-gold/50 transition-all">
                <h3 className="text-2xl font-semibold mb-4 text-text-primary">GPT-4</h3>
                <p className="text-text-secondary mb-6">OpenAI&apos;s most capable model. Strong at nuanced reasoning and creativity.</p>
                <a href="#" className="text-gold hover:text-gold-light transition-colors font-medium text-sm">Learn more →</a>
              </div>
              <div className="glass-card rounded-2xl p-8 hover:border-purple-500/30 transition-all">
                <h3 className="text-2xl font-semibold mb-4 text-text-primary">Gemini Pro</h3>
                <p className="text-text-secondary mb-6">Google&apos;s advanced model. Multimodal capabilities and fast inference.</p>
                <a href="#" className="text-gold hover:text-gold-light transition-colors font-medium text-sm">Learn more →</a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gold mb-4 font-semibold italic">
              Truth you own. AI you rent. Approval in between.
            </p>
            <h2 className="text-4xl font-bold text-text-primary mb-6">
              Ready to Meet Your Twin?
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              See how an Twin that respects your authority transforms how your team works.
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
