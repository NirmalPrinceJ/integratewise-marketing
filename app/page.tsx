'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { SlackLogo, SalesforceLogo, logoColors } from "@/components/icons/app-logos"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-bg-main">
      <Header />
      <main>
        {/* Section 1: Hero with New Tagline */}
        <HeroSection />

        {/* Section 2: Fragmentation Visual */}
        <section id="fragmentation-visual" className="py-24 px-6 bg-bg-secondary/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-[600px] glass-card rounded-2xl overflow-hidden p-8">
                <div className="absolute top-8 left-8 glass-card p-4 rounded-xl w-64 animate-pulse z-20" style={{animationDuration: '3s'}}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <span className="text-xs text-text-primary font-medium flex items-center gap-2"><SlackLogo className="w-3 h-3" style={{ color: logoColors.Slack }} />Slack #urgent</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-white/10 rounded w-full"></div>
                    <div className="h-2 bg-white/10 rounded w-4/5"></div>
                  </div>
                </div>

                <div className="absolute top-32 right-8 glass-card p-4 rounded-xl w-72 animate-pulse z-20" style={{animationDuration: '4.2s'}}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                    <span className="text-xs text-text-primary font-medium"><i className="fa-regular fa-envelope mr-2"></i>Gmail - Escalation</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-white/10 rounded w-full"></div>
                    <div className="h-2 bg-white/10 rounded w-5/6"></div>
                    <div className="h-2 bg-white/10 rounded w-3/4"></div>
                  </div>
                </div>

                <div className="absolute bottom-24 left-12 glass-card p-4 rounded-xl w-64 animate-pulse z-20" style={{animationDuration: '3.8s'}}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="text-xs text-text-primary font-medium flex items-center gap-2"><SalesforceLogo className="w-3 h-3" style={{ color: logoColors.Salesforce }} />Salesforce</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <div className="h-8 bg-white/5 rounded"></div>
                    <div className="h-8 bg-white/5 rounded"></div>
                  </div>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center shadow-2xl z-30">
                  <i className="fa-solid fa-user text-bg-main text-4xl relative">
                    <div className="absolute -top-1 -right-1 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </div>
                  </i>
                </div>

                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                  <style>{`
                    @keyframes dash { to { stroke-dashoffset: -20; } }
                    .connector-line { animation: dash 1.5s linear infinite; }
                  `}</style>
                  <line x1="120" y1="100" x2="50%" y2="50%" stroke="rgba(212,175,55,0.4)" strokeWidth="1" strokeDasharray="4,4" className="connector-line" />
                  <line x1="80%" y1="160" x2="50%" y2="50%" stroke="rgba(212,175,55,0.4)" strokeWidth="1" strokeDasharray="4,4" className="connector-line" style={{animationDelay: '-0.5s'}} />
                  <line x1="180" y1="450" x2="50%" y2="50%" stroke="rgba(212,175,55,0.4)" strokeWidth="1" strokeDasharray="4,4" className="connector-line" style={{animationDelay: '-1s'}} />
                </svg>
              </div>

              <div className="flex flex-col gap-8">
                <h2 className="text-4xl font-bold">The Tab-Switching Tax</h2>
                <p className="text-lg text-text-secondary leading-relaxed">
                  We toggle between apps 9-10 times per hour. That&apos;s not just a delay—it&apos;s a <span className="text-text-primary font-semibold">cognitive reset</span>. By the time you find the context you need in your CRM, the insight from that morning&apos;s Slack thread is gone.
                </p>

                <div className="space-y-6">
                  <div className="glass-card rounded-xl p-6 hover:border-red-500/30 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                        <i className="fa-solid fa-hourglass-half text-red-400 text-xl"></i>
                      </div>
                      <div>
                        <h5 className="text-text-primary font-semibold text-lg mb-2">23% of Day Lost</h5>
                        <p className="text-text-dim text-sm">The average professional loses nearly a quarter of their day just switching between applications.</p>
                      </div>
                    </div>
                  </div>

                  <div className="glass-card rounded-xl p-6 hover:border-orange-500/30 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0">
                        <i className="fa-solid fa-triangle-exclamation text-orange-400 text-xl"></i>
                      </div>
                      <div>
                        <h5 className="text-text-primary font-semibold text-lg mb-2">Critical Blind Spots</h5>
                        <p className="text-text-dim text-sm">Client escalations, renewal risks, and key decisions slip through the cracks because signals are isolated.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="section-divider" />

        {/* Section 3: What If Vision */}
        <section id="what-if-section" className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gold/3 blur-[100px] pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
                <i className="fa-solid fa-lightbulb text-gold"></i>
                <span className="text-gold text-sm">The Vision</span>
              </div>
              <h2 className="text-5xl font-bold mb-6">
                Imagine a World Where<br />
                <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                  Your Tools Actually Talk
                </span>
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                What if your email client knew what was discussed in the support ticket? What if your project board updated itself based on your calendar?
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card rounded-2xl p-8 hover:border-gold/30 transition-all group relative overflow-hidden">
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-all">
                    <i className="fa-solid fa-eye text-blue-400 text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Omniscient Visibility</h3>
                  <p className="text-text-secondary leading-relaxed">
                    Every interaction is indexed. You see not just the email, but the ticket history, the Slack context, and the usage data—all in one glance.
                  </p>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-8 hover:border-gold/30 transition-all group relative overflow-hidden">
                <div className="absolute -inset-1 bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-all">
                    <i className="fa-solid fa-bolt text-purple-400 text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Predictive Performance</h3>
                  <p className="text-text-secondary leading-relaxed">
                    Tools that anticipate needs. {"\"This customer usually emails on Tuesdays about their report\""} becomes an automated reminder, not a lucky guess.
                  </p>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-8 hover:border-gold/30 transition-all group relative overflow-hidden">
                <div className="absolute -inset-1 bg-gradient-to-br from-green-500/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-all">
                    <i className="fa-solid fa-rocket text-green-400 text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Zero-Friction Execution</h3>
                  <p className="text-text-secondary leading-relaxed">
                    Actions flow from context. Approve the budget, schedule the call, and update the record without ever leaving the narrative thread.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="section-divider" />

        {/* Section 4: Platform Solution */}
        <section id="platform-section" className="py-24 px-6 bg-bg-secondary/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
                <i className="fa-solid fa-check-circle text-gold"></i>
                <span className="text-gold text-sm">The Solution</span>
              </div>
              <h2 className="text-5xl font-bold mb-6">
                The Adaptive Spine<br />
                <span className="text-text-secondary">Bridges the Gap</span>
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                We don&apos;t just move data; we build memory. IntegrateWise creates a private, persistent knowledge layer that unifies your entire stack into a single, intelligent source of truth.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="glass-card rounded-2xl p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-5">
                  <i className="fa-solid fa-shield-halved text-9xl text-gold"></i>
                </div>
                <div className="relative">
                  <div className="text-gold font-semibold uppercase tracking-wider text-sm mb-3">The Proof</div>
                  <h3 className="text-5xl font-bold mb-4">$8M+ Revenue Protected</h3>
                  <p className="text-text-secondary leading-relaxed mb-8">
                    As a Customer Success Manager, our founder watched an $8M account turn red because critical context was hidden across CRM, support, and billing systems. By manually building what the <span className="text-text-primary font-semibold">Spine</span> does today—connecting the hidden signals across those silos into a single <span className="text-text-primary font-semibold">Digital Memory</span>—early intervention was possible, and the $8M relationship was saved. Every product decision since has worked backwards from that night.
                  </p>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2 text-green-400">
                      <i className="fa-solid fa-arrow-trend-up"></i>
                      <span>12% Uplift in NRR</span>
                    </div>
                    <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                    <div className="flex items-center gap-2 text-gold">
                      <i className="fa-solid fa-clock"></i>
                      <span>14hrs Saved/Week</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-2xl font-semibold mb-6">How It Works</h4>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-gold"></div>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Connect Your Tools</h5>
                    <p className="text-text-dim text-sm">Plug in the apps you already use in minutes with 70+ pre-built connectors reaching 1,000+ underlying sources.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-gold"></div>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">AI Indexes Continuously</h5>
                    <p className="text-text-dim text-sm">Our AI cleans, normalizes, and vectorizes your data into a unified memory layer—so every interaction is searchable and linked by context.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-gold"></div>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Access Digital Memory</h5>
                    <p className="text-text-dim text-sm">View everything through the Workspace with complete context and control.</p>
                  </div>
                </div>

                <div className="glass-card rounded-xl p-6 mt-8">
                  <div className="text-center">
                    <div className="text-xs text-text-dim uppercase tracking-wider mb-4">From Source to Digital Memory</div>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                          <i className="fa-solid fa-database text-blue-400"></i>
                        </div>
                        <div className="flex-1 bg-bg-elevated/50 p-3 rounded-lg text-left">
                          <div className="text-sm font-medium">Ingestion</div>
                          <div className="text-xs text-text-dim">Bi-directional sync</div>
                        </div>
                        <i className="fa-solid fa-arrow-down text-white/20"></i>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                          <i className="fa-solid fa-microchip text-purple-400"></i>
                        </div>
                        <div className="flex-1 bg-bg-elevated/50 p-3 rounded-lg text-left">
                          <div className="text-sm font-medium">Vectorization</div>
                          <div className="text-xs text-text-dim">Semantic memory</div>
                        </div>
                        <i className="fa-solid fa-arrow-down text-white/20"></i>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                          <i className="fa-solid fa-brain text-gold"></i>
                        </div>
                        <div className="flex-1 bg-gold/5 p-3 rounded-lg text-left border border-gold/20">
                          <div className="text-sm font-medium">Digital Memory</div>
                          <div className="text-xs text-text-dim">Your unified source of truth</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="section-divider" />

        {/* Section 5: Why Born */}
        <section id="why-born-section" className="py-24 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-8">
              Why IntegrateWise<br />
              <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                Was Born
              </span>
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed mb-12">
              IntegrateWise was built so nobody ever has to manually reconstruct context again. We realized that modern work didn&apos;t break because people weren&apos;t capable; <span className="text-text-primary font-semibold">it broke because we spent every day fighting our own tools</span>.
            </p>

            <div className="glass-card rounded-2xl p-12">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-brain text-bg-main text-2xl"></i>
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold">One Platform. Infinite Memory.</div>
                  <div className="text-text-dim">Built by operators, for operators</div>
                </div>
              </div>
              <p className="text-text-secondary text-lg leading-relaxed">
                The <span className="text-text-primary font-semibold">Spine</span> takes your scattered data and builds it into a <span className="text-text-primary font-semibold">Digital Memory</span>. Your <span className="text-text-primary font-semibold">Twin</span> reasons over that memory inside the <span className="text-text-primary font-semibold">Workspace</span>, then waits for your <span className="text-text-primary font-semibold">Approval</span> before any action ships. <span className="text-gold font-semibold">You regain hours of your day, catch risks weeks early, and operate with perfect context</span>.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Features */}
        <section id="features-section" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
                <i className="fa-solid fa-stars text-gold"></i>
                <span className="text-gold text-sm">Core Features</span>
              </div>
              <h2 className="text-5xl font-bold mb-6">The Features You Get</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="glass-card rounded-2xl p-8 hover:border-gold/30 transition-all group">
                <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-all">
                  <i className="fa-solid fa-plug text-blue-400 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">70+ Tool Connectors</h3>
                <p className="text-text-dim text-sm leading-relaxed">
                  Plug in the apps you already use in minutes—CRM, billing, support, chat—reaching 1,000+ underlying sources, so you can connect the tools you already run instead of rebuilding your stack.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-8 hover:border-gold/30 transition-all group">
                <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-all">
                  <i className="fa-solid fa-circle-nodes text-purple-400 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Workspace with Entity 360</h3>
                <p className="text-text-dim text-sm leading-relaxed">
                  Your governed workspace—Entity 360 is the default view, surfacing every account, client, or project with complete context in one click, so you see everything without tab-switching.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-8 hover:border-gold/30 transition-all group">
                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-all">
                  <i className="fa-solid fa-brain text-gold text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Proactive Twin Insights</h3>
                <p className="text-text-dim text-sm leading-relaxed">
                  AI that watches your business and tells you what needs attention, backed by evidence you can inspect and act on immediately—so &quot;why this alert?&quot; is always answerable.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-8 hover:border-gold/30 transition-all group">
                <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-all">
                  <i className="fa-solid fa-user-shield text-green-400 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Approval-Gated Action</h3>
                <p className="text-text-dim text-sm leading-relaxed">
                  Nothing executes without your explicit human approval, so AI can help close the loop while you stay in control of every change.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Solutions */}
        <section id="solutions-section" className="py-24 px-6 bg-bg-secondary/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
                <i className="fa-solid fa-puzzle-piece text-green-400"></i>
                <span className="text-green-300 text-sm">Applied Solutions</span>
              </div>
              <h2 className="text-5xl font-bold mb-6">One Platform. Infinite Possibilities.</h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                See how the memory layer transforms specific roles and industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card rounded-2xl p-8 hover:border-blue-500/50 transition-all group">
                <i className="fa-solid fa-handshake text-blue-400 text-4xl mb-6"></i>
                <h3 className="text-2xl font-semibold mb-4">Account Success</h3>
                <p className="text-text-dim leading-relaxed mb-6">
                  Never miss a renewal signal. Unify usage data, support tickets, and relationship notes into one customer 360—so QBR prep takes minutes, not hours. Get alerted when a renewal is at risk, see the evidence, and draft a proactive play instantly.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm">
                  See How It Works <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>

              <div className="glass-card rounded-2xl p-8 hover:border-purple-500/50 transition-all group">
                <i className="fa-solid fa-chart-line text-purple-400 text-4xl mb-6"></i>
                <h3 className="text-2xl font-semibold mb-4">Business Ops</h3>
                <p className="text-text-dim leading-relaxed mb-6">
                  See what changed in ARR, churn, burn, and cross-functional risks in one morning brief. Connect your ERP, CRM, and HRIS; get instant answers on runway and headcount; and let the Twin draft next steps—always tied back to live data in the Spine.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium text-sm">
                  See How It Works <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>

              <div className="glass-card rounded-2xl p-8 border-gold/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 blob-bg blur-2xl"></div>
                <div className="absolute top-4 right-4 bg-gold text-bg-main text-xs font-bold px-2 py-1 rounded uppercase">Beta</div>
                <i className="fa-solid fa-user-astronaut text-gold text-4xl mb-6 relative"></i>
                <h3 className="text-2xl font-semibold mb-4 relative">Personal Space</h3>
                <p className="text-text-dim leading-relaxed mb-6 relative">
                  Your private OS—same Spine, same Twin, scoped to a User Memory only you can see. Index your emails, notes, and documents to create a second brain that works for you.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-medium text-sm relative">
                  Join Waitlist <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Pricing */}
        <section id="pricing-section" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
                <i className="fa-solid fa-tag text-gold"></i>
                <span className="text-gold text-sm">Pricing</span>
              </div>
              <h2 className="text-5xl font-bold mb-6">Invest in Your Memory</h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
                From personal organization to enterprise-grade governance. Start building your digital memory today.
              </p>

              <div className="inline-flex bg-bg-elevated border border-white/10 rounded-xl p-1">
                <button className="bg-gold text-bg-main px-6 py-2 rounded-lg text-sm font-semibold">Monthly</button>
                <button className="text-text-secondary px-6 py-2 rounded-lg text-sm font-medium hover:text-text-primary">
                  Yearly <span className="text-gold ml-1 text-xs">-20%</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="glass-card rounded-2xl p-8 hover:border-white/20 transition-all">
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-2">Starter</h4>
                  <p className="text-sm text-text-dim">For individuals and founders building Personal Space and solo Digital Memory.</p>
                </div>
                <div className="mb-6">
                  <span className="text-5xl font-bold">$29</span>
                  <span className="text-text-dim">/mo</span>
                </div>
                <a href="/demo" className="block w-full bg-white hover:bg-white/90 text-bg-main text-center py-4 rounded-xl font-semibold mb-6 transition-all">
                  Book a Demo
                </a>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <i className="fa-solid fa-check text-gold"></i>
                    <span>Daily Sync Frequency</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <i className="fa-solid fa-check text-gold"></i>
                    <span>5 Connectors</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <i className="fa-solid fa-check text-gold"></i>
                    <span>Basic Digital Memory</span>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-8 border-gold/50 relative transform md:-translate-y-4 shadow-2xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-bg-main px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-2">Growth</h4>
                  <p className="text-sm text-text-dim">Team Workspaces with Twin alerts across your book of business.</p>
                </div>
                <div className="mb-6">
                  <span className="text-5xl font-bold">$99</span>
                  <span className="text-text-dim">/mo</span>
                </div>
                <a href="/demo" className="block w-full bg-gold hover:bg-gold-light text-bg-main text-center py-4 rounded-xl font-semibold mb-6 transition-all gold-glow">
                  Book a Demo
                </a>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <i className="fa-solid fa-check text-gold"></i>
                    <span>Hourly Sync Frequency</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <i className="fa-solid fa-check text-gold"></i>
                    <span>20 Connectors</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <i className="fa-solid fa-check text-gold"></i>
                    <span>Advanced Digital Memory</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <i className="fa-solid fa-check text-gold"></i>
                    <span>Team Workspaces</span>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-8 hover:border-white/20 transition-all">
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-2">Command</h4>
                  <p className="text-sm text-text-dim">Enterprise grade governance.</p>
                </div>
                <div className="mb-6">
                  <span className="text-5xl font-bold">Custom</span>
                </div>
                <a href="#" className="block w-full bg-bg-elevated border border-white/10 hover:bg-white/5 text-text-primary text-center py-4 rounded-xl font-semibold mb-6 transition-all">
                  Contact Sales
                </a>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <i className="fa-solid fa-check text-gold"></i>
                    <span>Real-time Sync</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <i className="fa-solid fa-check text-gold"></i>
                    <span>Unlimited Connectors</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <i className="fa-solid fa-check text-gold"></i>
                    <span>Custom TruthLayer Policies</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <i className="fa-solid fa-check text-gold"></i>
                    <span>Tenant Isolation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: Demo CTA */}
        <section id="demo-section" className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 hero-glow pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full blob-bg blur-3xl opacity-40 pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-5xl font-bold mb-6">
              Start Building Your<br />
              <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">Digital Memory Today</span>
            </h2>
            <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
              Join teams who&apos;ve stopped fighting their tools and started compounding their knowledge.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a href="/demo" className="bg-gold hover:bg-gold-light text-bg-main px-10 py-4 rounded-lg font-semibold text-lg transition-all gold-glow transform hover:scale-105">
                Request Demo
              </a>
              <a href="#platform-section" className="glass-card px-10 py-4 rounded-lg font-semibold text-lg hover:border-gold/30 transition-all">
                Explore Platform
              </a>
            </div>

            <div className="text-sm text-text-dim">
              No credit card required • 14-day free trial • Cancel anytime
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
