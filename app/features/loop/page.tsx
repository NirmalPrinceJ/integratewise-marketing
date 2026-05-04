'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function LoopPage() {
  return (
    <div className="min-h-screen bg-bg-main">
      <Header />
      <main>
        {/* Hero Section */}
        <section id="loop-overview" className="relative pt-40 pb-24 px-6 overflow-hidden min-h-[700px] flex items-center">
          <div className="absolute inset-0 hero-glow pointer-events-none"></div>
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] blob-bg blur-3xl pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
              <i className="fa-solid fa-rotate text-gold"></i>
              <span className="text-gold text-sm">The Continuous Loop</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance">
              Memory That<br/>
              <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                Never Stops Learning
              </span>
            </h1>
            
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
              Every approved action feeds back into your Digital Memory. Context never disappears. Change logs preserve history. Your business gets smarter with every decision.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#capture" className="bg-gold hover:bg-gold-light text-bg-main px-10 py-4 rounded-lg font-semibold transition-all gold-glow transform hover:scale-105">
                See How It Works
              </a>
              <Link href="/demo" className="glass-card px-10 py-4 rounded-lg font-semibold hover:border-gold/30 transition-all">
                Book a Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Continuous Loop Promise Section */}
        <section id="loop-promise" className="py-24 px-6 bg-bg-secondary/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-balance">The Continuous Loop Promise</h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Unlike traditional systems where data gets stale, IntegrateWise creates a self-reinforcing cycle where every interaction makes your memory smarter.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card rounded-2xl p-8 hover:border-gold/30 transition-all group">
                <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-all">
                  <i className="fa-solid fa-infinity text-blue-400 text-2xl"></i>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Compounding Context</h3>
                <p className="text-text-dim leading-relaxed">
                  Every approved action becomes part of your memory. Decisions made today inform insights tomorrow. Context accumulates like compound interest.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-8 hover:border-gold/30 transition-all group">
                <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-all">
                  <i className="fa-solid fa-code-branch text-purple-400 text-2xl"></i>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Version Control</h3>
                <p className="text-text-dim leading-relaxed">
                  Change logs track every modification. See what changed, when, why, and by whom. Roll back decisions. Understand evolution over time.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-8 hover:border-gold/30 transition-all group">
                <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-all">
                  <i className="fa-solid fa-users text-green-400 text-2xl"></i>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Team Continuity</h3>
                <p className="text-text-dim leading-relaxed">
                  When team members change, memory stays. New hires inherit complete context. No more tribal knowledge loss or onboarding gaps.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Capture Section */}
        <section id="capture" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 text-xs font-bold">1</div>
                  <span className="text-blue-300 text-sm">Capture</span>
                </div>
                <h2 className="text-5xl font-bold mb-6 leading-tight">
                  Every Action<br/>
                  <span className="text-text-secondary">Becomes Memory</span>
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-8">
                  When you approve an Twin suggestion—whether it&apos;s sending an email, updating a record, or scheduling a meeting—that action is immediately captured and indexed into your Digital Memory.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-1">
                      <i className="fa-solid fa-check text-blue-400"></i>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Action Metadata</h5>
                      <p className="text-text-dim text-sm">Who approved it, when, what evidence was used, and the outcome expected.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-1">
                      <i className="fa-solid fa-check text-blue-400"></i>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Contextual Links</h5>
                      <p className="text-text-dim text-sm">Automatically linked to related entities, accounts, projects, and conversations.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-1">
                      <i className="fa-solid fa-check text-blue-400"></i>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Timestamp Precision</h5>
                      <p className="text-text-dim text-sm">Exact time of approval, execution, and any subsequent updates or changes.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-8 relative overflow-hidden h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent"></div>
                <div className="relative h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-6">Actions Captured (24h)</h3>
                  <div className="space-y-4">
                    {[
                      { time: "00:00", value: 120 },
                      { time: "04:00", value: 80 },
                      { time: "08:00", value: 450 },
                      { time: "12:00", value: 890 },
                      { time: "16:00", value: 720 },
                      { time: "20:00", value: 340 }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <span className="text-text-dim text-sm w-12">{item.time}</span>
                        <div className="flex-1 h-8 bg-bg-elevated rounded-lg overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-gold/60 to-gold rounded-lg transition-all"
                            style={{ width: `${(item.value / 890) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-text-secondary text-sm w-12 text-right">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Normalize Section */}
        <section id="normalize" className="py-24 px-6 bg-bg-secondary/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 glass-card rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent"></div>
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-8">Normalization Pipeline</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center shrink-0">
                        <i className="fa-solid fa-broom text-purple-400 text-xl"></i>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium mb-1">Data Cleaning</div>
                        <div className="h-2 bg-bg-elevated rounded-full overflow-hidden">
                          <div className="h-full bg-purple-500 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center shrink-0">
                        <i className="fa-solid fa-copy text-purple-400 text-xl"></i>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium mb-1">Deduplication</div>
                        <div className="h-2 bg-bg-elevated rounded-full overflow-hidden">
                          <div className="h-full bg-purple-500 rounded-full" style={{ width: '87%' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center shrink-0">
                        <i className="fa-solid fa-sitemap text-purple-400 text-xl"></i>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium mb-1">Schema Mapping</div>
                        <div className="h-2 bg-bg-elevated rounded-full overflow-hidden">
                          <div className="h-full bg-purple-500 rounded-full" style={{ width: '92%' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center shrink-0">
                        <i className="fa-solid fa-link text-purple-400 text-xl"></i>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium mb-1">Entity Linking</div>
                        <div className="h-2 bg-bg-elevated rounded-full overflow-hidden">
                          <div className="h-full bg-purple-500 rounded-full" style={{ width: '89%' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center shrink-0">
                        <i className="fa-solid fa-cube text-purple-400 text-xl"></i>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium mb-1">Vectorization</div>
                        <div className="h-2 bg-bg-elevated rounded-full overflow-hidden">
                          <div className="h-full bg-purple-500 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
                  <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 text-xs font-bold">2</div>
                  <span className="text-purple-300 text-sm">Normalize</span>
                </div>
                <h2 className="text-5xl font-bold mb-6 leading-tight">
                  Structure Creates<br/>
                  <span className="text-text-secondary">Understanding</span>
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-8">
                  Raw actions flow through a normalization pipeline. Data gets cleaned, deduplicated, and structured into a unified schema—making it searchable, comparable, and ready for reasoning.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0 mt-1">
                      <i className="fa-solid fa-check text-purple-400"></i>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Unified Schema</h5>
                      <p className="text-text-dim text-sm">Disparate data formats become consistent, queryable records.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0 mt-1">
                      <i className="fa-solid fa-check text-purple-400"></i>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Entity Resolution</h5>
                      <p className="text-text-dim text-sm">Same person, company, or project? We link them automatically.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0 mt-1">
                      <i className="fa-solid fa-check text-purple-400"></i>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Semantic Embedding</h5>
                      <p className="text-text-dim text-sm">Text becomes vectors, enabling meaning-based search and comparison.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reason Section */}
        <section id="reason" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
                  <div className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center text-gold text-xs font-bold">3</div>
                  <span className="text-gold text-sm">Reason</span>
                </div>
                <h2 className="text-5xl font-bold mb-6 leading-tight">
                  The Twin Connects<br/>
                  <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                    The Dots
                  </span>
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-8">
                  Your Twin observes patterns across normalized memory. It sees what humans miss: correlations between usage drops and support tickets, timing patterns in renewals, sentiment shifts in conversations.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-1">
                      <i className="fa-solid fa-check text-gold"></i>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Pattern Recognition</h5>
                      <p className="text-text-dim text-sm">Find correlations across thousands of signals that humans would never notice.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-1">
                      <i className="fa-solid fa-check text-gold"></i>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Evidence-Backed</h5>
                      <p className="text-text-dim text-sm">Every insight links to source data. No black boxes or hallucinations.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-1">
                      <i className="fa-solid fa-check text-gold"></i>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Proactive Alerts</h5>
                      <p className="text-text-dim text-sm">Surface risks and opportunities before they become problems or pass you by.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent"></div>
                <div className="relative">
                  <h4 className="font-semibold mb-6">Real-Time Twin Activity</h4>
                  
                  <div className="space-y-4">
                    <div className="relative">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center shrink-0 border-2 border-blue-500">
                          <i className="fa-solid fa-cloud-arrow-down text-blue-400"></i>
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold mb-2">Twin Observes</h5>
                          <p className="text-text-dim text-sm">&quot;Schedule renewal call with Acme Corp&quot;</p>
                        </div>
                      </div>
                      <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 h-8"></div>
                    </div>

                    <div className="relative pt-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center shrink-0 border-2 border-purple-500">
                          <i className="fa-solid fa-user-check text-purple-400"></i>
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold mb-2">Human Approves</h5>
                          <p className="text-text-dim text-sm">You review evidence and approve</p>
                        </div>
                      </div>
                      <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-gold h-8"></div>
                    </div>

                    <div className="relative pt-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center shrink-0 border-2 border-gold">
                          <i className="fa-solid fa-rocket text-gold"></i>
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold mb-2">Action Executes</h5>
                          <p className="text-text-dim text-sm">Call scheduled, memory updated</p>
                        </div>
                      </div>
                      <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-gold to-green-500 h-8"></div>
                    </div>

                    <div className="pt-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center shrink-0 border-2 border-green-500">
                          <i className="fa-solid fa-chart-line text-green-400"></i>
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold mb-2">Twin Learns</h5>
                          <p className="text-text-dim text-sm">Outcome tracked: Account renewed</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-green-500/5 border border-green-500/20 rounded-xl flex items-center gap-3">
                    <i className="fa-solid fa-rotate text-green-400 text-xl"></i>
                    <div>
                      <div className="text-sm font-semibold text-green-400">Loop Complete</div>
                      <div className="text-xs text-text-dim">Pattern reinforced for future suggestions</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Approve Section */}
        <section id="approve" className="py-24 px-6 bg-bg-secondary/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 glass-card rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent"></div>
                <div className="relative">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                          <i className="fa-solid fa-brain text-bg-main"></i>
                        </div>
                        <div>
                          <div className="font-semibold">Twin Suggestion</div>
                          <div className="text-xs text-text-dim">Requires Approval</div>
                        </div>
                      </div>
                      <div className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs font-semibold rounded-full animate-pulse">
                        PENDING
                      </div>
                    </div>

                    <div className="mb-6">
                      <h5 className="font-semibold mb-3">Suggested Action</h5>
                      <p className="text-sm text-text-secondary mb-4">
                        Based on Q3 usage decline and 3 recent support tickets, I recommend scheduling a check-in call with Acme Corp before their renewal in 14 days.
                      </p>
                      <div className="bg-bg-main/50 rounded-lg p-4 space-y-3 text-xs">
                        <div className="flex items-center gap-2 text-text-dim">
                          <i className="fa-solid fa-chart-line text-red-400"></i>
                          <span>Usage: 60% to 20% (Q2 to Q3)</span>
                        </div>
                        <div className="flex items-center gap-2 text-text-dim">
                          <i className="fa-solid fa-ticket text-orange-400"></i>
                          <span>Support: 3 tickets (last 14 days)</span>
                        </div>
                        <div className="flex items-center gap-2 text-text-dim">
                          <i className="fa-solid fa-calendar text-gold"></i>
                          <span>Renewal: Nov 15, 2026 (14 days)</span>
                        </div>
                        <div className="flex items-center gap-2 text-text-dim">
                          <i className="fa-solid fa-check-circle text-green-400"></i>
                          <span>Similar scenarios: 47 (89% success rate)</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button className="flex-1 bg-bg-main border border-white/10 py-3 rounded-lg text-sm font-medium hover:bg-bg-muted transition-all">
                        Edit Suggestion
                      </button>
                      <button className="flex-1 bg-gold hover:bg-gold-light text-bg-main py-3 rounded-lg text-sm font-semibold transition-all gold-glow">
                        Approve & Execute
                      </button>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-green-500/5 border border-green-500/20 rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <i className="fa-solid fa-shield-halved text-green-400"></i>
                      <span className="text-sm font-semibold">Human-in-the-Loop Control</span>
                    </div>
                    <p className="text-xs text-text-dim">Nothing executes without your explicit approval. You can edit, reject, or approve every suggestion.</p>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
                  <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 text-xs font-bold">4</div>
                  <span className="text-green-300 text-sm">Approve</span>
                </div>
                <h2 className="text-5xl font-bold mb-6 leading-tight">
                  You Stay in Control.<br/>
                  <span className="text-text-secondary">Always.</span>
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-8">
                  Before any action executes or any memory is written, you review and approve. The Twin can suggest—only you can decide. This approval boundary is sacred and unchangeable.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-1">
                      <i className="fa-solid fa-eye text-green-400"></i>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Full Transparency</h5>
                      <p className="text-text-dim text-sm">See exactly what evidence the Twin used, what pattern it matched, and the expected outcome.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-1">
                      <i className="fa-solid fa-pen text-green-400"></i>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Edit Before Approval</h5>
                      <p className="text-text-dim text-sm">Modify the suggested action, change the timing, or adjust the message before approving.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-1">
                      <i className="fa-solid fa-ban text-green-400"></i>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Reject with Feedback</h5>
                      <p className="text-text-dim text-sm">Decline suggestions and tell the Twin why—it learns from rejections too.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learn Section */}
        <section id="learn" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
                  <div className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center text-gold text-xs font-bold">5</div>
                  <span className="text-gold text-sm">Learn</span>
                </div>
                <h2 className="text-5xl font-bold mb-6 leading-tight">
                  Memory Compounds<br/>
                  <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                    Over Time
                  </span>
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-8">
                  Every approved action enriches your Digital Memory. Change logs preserve history. Versioning tracks evolution. Context never disappears. Your business gets smarter with every decision.
                </p>

                <div className="glass-card rounded-xl p-6 mb-6">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <i className="fa-solid fa-infinity text-gold"></i>
                    The Compounding Effect
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between p-3 bg-bg-elevated rounded-lg">
                      <span className="text-text-dim">Month 1</span>
                      <span className="font-semibold">1,200 entities</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-bg-elevated rounded-lg">
                      <span className="text-text-dim">Month 3</span>
                      <span className="font-semibold">3,800 entities</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-bg-elevated rounded-lg">
                      <span className="text-text-dim">Month 6</span>
                      <span className="font-semibold">8,900 entities</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gold/10 border border-gold/20 rounded-lg">
                      <span className="text-gold">Month 12</span>
                      <span className="font-bold text-gold">18,500 entities</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-1">
                      <i className="fa-solid fa-code-branch text-gold"></i>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Change Logs & Versioning</h5>
                      <p className="text-text-dim text-sm">Every modification is tracked. See what changed, when, why, and by whom. Roll back if needed.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-1">
                      <i className="fa-solid fa-users text-gold"></i>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Team Continuity</h5>
                      <p className="text-text-dim text-sm">When people leave, memory stays. New hires inherit complete context from day one.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent"></div>
                <div className="relative h-full">
                  <h3 className="text-xl font-bold mb-6">Memory Growth Over Time</h3>
                  <div className="flex items-end gap-4 h-64">
                    {[
                      { label: "M1", value: 1200, height: 7 },
                      { label: "M3", value: 3800, height: 21 },
                      { label: "M6", value: 8900, height: 48 },
                      { label: "M9", value: 14200, height: 77 },
                      { label: "M12", value: 18500, height: 100 }
                    ].map((item, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                        <div 
                          className="w-full bg-gradient-to-t from-gold/60 to-gold rounded-t-lg transition-all"
                          style={{ height: `${item.height}%` }}
                        ></div>
                        <span className="text-xs text-text-dim">{item.label}</span>
                        <span className="text-xs text-text-secondary">{(item.value / 1000).toFixed(1)}k</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Complete Lifecycle Visualization */}
        <section id="lifecycle-viz" className="py-24 px-6 bg-bg-secondary/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6">The Complete Lifecycle</h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                See how data flows through the Continuous Loop—from initial capture to compounding memory.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent"></div>
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex-1 text-center">
                    <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-blue-500">
                      <i className="fa-solid fa-cloud-arrow-down text-blue-400 text-3xl"></i>
                    </div>
                    <h4 className="font-semibold mb-2">1. Capture</h4>
                    <p className="text-text-dim text-sm">Action approved & indexed</p>
                  </div>

                  <i className="fa-solid fa-arrow-right text-gold text-2xl hidden md:block"></i>

                  <div className="flex-1 text-center">
                    <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-purple-500">
                      <i className="fa-solid fa-gears text-purple-400 text-3xl"></i>
                    </div>
                    <h4 className="font-semibold mb-2">2. Normalize</h4>
                    <p className="text-text-dim text-sm">Clean, structure, enrich</p>
                  </div>

                  <i className="fa-solid fa-arrow-right text-gold text-2xl hidden md:block"></i>

                  <div className="flex-1 text-center">
                    <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-gold">
                      <i className="fa-solid fa-brain text-gold text-3xl"></i>
                    </div>
                    <h4 className="font-semibold mb-2">3. Reason</h4>
                    <p className="text-text-dim text-sm">AI learns patterns</p>
                  </div>

                  <i className="fa-solid fa-arrow-right text-gold text-2xl hidden md:block"></i>

                  <div className="flex-1 text-center">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-green-500">
                      <i className="fa-solid fa-user-check text-green-400 text-3xl"></i>
                    </div>
                    <h4 className="font-semibold mb-2">4. Approve</h4>
                    <p className="text-text-dim text-sm">Human reviews & decides</p>
                  </div>

                  <i className="fa-solid fa-arrow-right text-gold text-2xl hidden md:block"></i>

                  <div className="flex-1 text-center">
                    <div className="w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-orange-500">
                      <i className="fa-solid fa-infinity text-orange-400 text-3xl"></i>
                    </div>
                    <h4 className="font-semibold mb-2">5. Learn</h4>
                    <p className="text-text-dim text-sm">Memory compounds</p>
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <div className="inline-flex items-center gap-3 bg-gold/10 border border-gold/20 rounded-full px-6 py-3">
                    <i className="fa-solid fa-rotate text-gold"></i>
                    <span className="text-gold font-semibold">Loop repeats with every decision</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <i className="fa-solid fa-rotate text-gold text-2xl"></i>
                </div>
                <h2 className="text-4xl font-bold mb-4 text-balance">See the Loop in Action</h2>
                <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
                  Watch how a single customer interaction transforms into governed memory that compounds over time.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/demo" className="bg-gold hover:bg-gold-light text-bg-main px-8 py-4 rounded-lg font-semibold text-lg transition-all gold-glow">
                    Book a Demo
                  </Link>
                  <Link href="/product" className="glass-card px-8 py-4 rounded-lg font-semibold hover:border-gold/30 transition-all">
                    Explore Workspace
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
