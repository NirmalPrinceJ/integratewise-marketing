// Auto-generated from HTML. Edit as needed.
export default function GuidesPage() {
  return (
    <>
      &#123;/* Header */&#125;
          <section id="resources-hero" className="relative pt-40 pb-24 px-6 overflow-hidden min-h-[650px] flex items-center">
              <div className="absolute inset-0 hero-glow pointer-events-none"></div>
              <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] blob-bg blur-3xl pointer-events-none"></div>
              
              <div className="max-w-7xl mx-auto relative z-10 text-center">
                  <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
                      <i className="fa-solid fa-book-open text-gold"></i>
                      <span className="text-gold text-sm">Resources & Insights</span>
                  </div>
                  
                  <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">Guides</h1>
                  
                  <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">Step-by-step walkthroughs to help you onboard, build, and scale.</p>
      
                  <div className="max-w-2xl mx-auto">
                      <div className="relative">
                          <i className="fa-solid fa-magnifying-glass absolute left-5 top-1/2 -translate-y-1/2 text-text-dim"></i>
                          <input 
                              type="text" 
                              id="search-input"
                              placeholder="Search resources, guides, case studies..." 
                              className="w-full bg-bg-elevated/80 backdrop-blur-sm border border-white/10 rounded-xl py-4 pl-14 pr-4 text-text-primary placeholder:text-text-dim focus:outline-none focus:border-gold/50 transition-all" />
                      </div>
                  </div>
              </div>
          </section>
      
          <section id="filter-section" className="py-6 px-6 bg-bg-secondary/50 border-b border-white/5 sticky top-[72px] z-40 backdrop-blur-md">
              <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 flex-wrap">
                  <div className="flex items-center gap-3 text-sm">
                      <a href="/resources" className="text-text-dim hover:text-gold transition-colors">All Resources</a>
                      <span className="text-text-dim">/</span>
                      <span className="text-text-primary font-medium">Guides</span>
                  </div>
                  <div className="flex items-center gap-3">
                      <select className="bg-bg-elevated border border-white/10 rounded-lg px-4 py-2 text-sm text-text-primary focus:outline-none focus:border-gold/50">
                          <option>Latest First</option>
                          <option>Oldest First</option>
                          <option>Most Popular</option>
                      </select>
                  </div>
              </div>
          </section>
      
          <section id="resource-grid" className="py-16 px-6 bg-bg-secondary/30">
              <div className="max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      
                      <div className="resource-card glass-card rounded-2xl p-8 cursor-pointer" data-category="product" data-type="guide">
                          <div className="flex items-start justify-between mb-4">
                              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                                  <i className="fa-solid fa-compass text-blue-400 text-xl"></i>
                              </div>
                              <span className="bg-blue-500/20 border border-blue-500/30 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold">The Workbench</span>
                          </div>
                          <span data-type-pill className="inline-block px-2.5 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wider bg-gold/10 text-gold border border-gold/20 mb-3">Guide</span>
                          <h3 className="text-xl font-bold mb-3">Getting Started with the Workbench</h3>
                          <p className="text-text-secondary text-sm leading-relaxed mb-4">
                              A step-by-step guide to navigating your governed knowledge workspace and building your first Entity 360 view.
                          </p>
                          <div className="flex items-center gap-3 text-xs text-text-dim">
                              <span>6 min read</span>
                              <span>•</span>
                              <span>Beginner</span>
                          </div>
                      </div>
      
                      <div className="resource-card glass-card rounded-2xl p-8 cursor-pointer" data-category="platform" data-type="guide">
                          <div className="flex items-start justify-between mb-4">
                              <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                                  <i className="fa-solid fa-plug text-gold text-xl"></i>
                              </div>
                              <span className="bg-gold/20 border border-gold/30 text-gold px-3 py-1 rounded-full text-xs font-semibold">Spine</span>
                          </div>
                          <span data-type-pill className="inline-block px-2.5 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wider bg-gold/10 text-gold border border-gold/20 mb-3">Guide</span>
                          <h3 className="text-xl font-bold mb-3">Connecting Your First 5 Tools</h3>
                          <p className="text-text-secondary text-sm leading-relaxed mb-4">
                              Learn how to quickly integrate Slack, Gmail, Salesforce, Jira, and Drive to start building your entity memory.
                          </p>
                          <div className="flex items-center gap-3 text-xs text-text-dim">
                              <span>10 min read</span>
                              <span>•</span>
                              <span>Setup Guide</span>
                          </div>
                      </div>
      
                      <div className="resource-card glass-card rounded-2xl p-8 cursor-pointer" data-category="trust" data-type="guide">
                          <div className="flex items-start justify-between mb-4">
                              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                                  <i className="fa-solid fa-shield-halved text-green-400 text-xl"></i>
                              </div>
                              <span className="bg-green-500/20 border border-green-500/30 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">Trust</span>
                          </div>
                          <span data-type-pill className="inline-block px-2.5 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wider bg-gold/10 text-gold border border-gold/20 mb-3">Guide</span>
                          <h3 className="text-xl font-bold mb-3">Understanding Approval Boundaries</h3>
                          <p className="text-text-secondary text-sm leading-relaxed mb-4">
                              How IntegrateWise ensures human control at every action point while maintaining intelligent automation.
                          </p>
                          <div className="flex items-center gap-3 text-xs text-text-dim">
                              <span>7 min read</span>
                              <span>•</span>
                              <span>Governance</span>
                          </div>
                      </div>
      
      <div className="resource-card glass-card rounded-2xl p-8 cursor-pointer" data-category="product" data-type="guide">
                          <div className="flex items-start justify-between mb-4">
                              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                                  <i className="fa-solid fa-inbox text-blue-400 text-xl"></i>
                              </div>
                              <span className="bg-blue-500/20 border border-blue-500/30 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold">The Workbench</span>
                          </div>
                          <span data-type-pill className="inline-block px-2.5 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wider bg-gold/10 text-gold border border-gold/20 mb-3">Guide</span>
                          <h3 className="text-xl font-bold mb-3">Mastering the Insights Inbox</h3>
                          <p className="text-text-secondary text-sm leading-relaxed mb-4">
                              Learn to prioritize AI-generated insights, set custom triggers, and automate responses with approval gates.
                          </p>
                          <div className="flex items-center gap-3 text-xs text-text-dim">
                              <span>9 min read</span>
                              <span>•</span>
                              <span>Advanced</span>
                          </div>
                      </div>
      
                      <div className="resource-card glass-card rounded-2xl p-8 cursor-pointer" data-category="trust" data-type="guide">
                          <div className="flex items-start justify-between mb-4">
                              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                                  <i className="fa-solid fa-users-gear text-green-400 text-xl"></i>
                              </div>
                              <span className="bg-green-500/20 border border-green-500/30 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">Trust</span>
                          </div>
                          <span data-type-pill className="inline-block px-2.5 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wider bg-gold/10 text-gold border border-gold/20 mb-3">Guide</span>
                          <h3 className="text-xl font-bold mb-3">Role-Based Access Control</h3>
                          <p className="text-text-secondary text-sm leading-relaxed mb-4">
                              Setting up workspace boundaries, entity permissions, and audit trails for enterprise compliance.
                          </p>
                          <div className="flex items-center gap-3 text-xs text-text-dim">
                              <span>14 min read</span>
                              <span>•</span>
                              <span>Enterprise</span>
                          </div>
                      </div>
      
      <div className="resource-card glass-card rounded-2xl p-8 cursor-pointer" data-category="cognitive" data-type="guide">
                          <div className="flex items-start justify-between mb-4">
                              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                                  <i className="fa-solid fa-wand-magic-sparkles text-purple-400 text-xl"></i>
                              </div>
                              <span className="bg-purple-500/20 border border-purple-500/30 text-purple-400 px-3 py-1 rounded-full text-xs font-semibold">The Twin</span>
                          </div>
                          <span data-type-pill className="inline-block px-2.5 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wider bg-gold/10 text-gold border border-gold/20 mb-3">Guide</span>
                          <h3 className="text-xl font-bold mb-3">Evidence-Based Reasoning</h3>
                          <p className="text-text-secondary text-sm leading-relaxed mb-4">
                              Why every Twin insight comes with traceable evidence and how to verify AI suggestions before approval.
                          </p>
                          <div className="flex items-center gap-3 text-xs text-text-dim">
                              <span>8 min read</span>
                              <span>•</span>
                              <span>Best Practices</span>
                          </div>
                      </div>
      
                  </div>
              </div>
          </section>
      
      
          &#123;/* Deep Architecture Section */&#125;
      
          &#123;/* Solutions Entry */&#125;
      
          &#123;/* Workflow Visualization Section (New) */&#125;
      
          &#123;/* Trust & Control */&#125;
      
          <section id="newsletter-section" className="py-24 px-6 bg-bg-secondary/50">
              <div className="max-w-4xl mx-auto">
                  <div className="glass-card rounded-3xl p-12 text-center relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl"></div>
                      <div className="relative z-10">
                          <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                              <i className="fa-solid fa-envelope text-gold text-2xl"></i>
                          </div>
                          <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
                          <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
                              Get the latest guides, case studies, and architecture insights delivered to your inbox. No spam, unsubscribe anytime.
                          </p>
                          
                          <form className="max-w-md mx-auto flex gap-3">
                              <input 
                                  type="email" 
                                  placeholder="Enter your email" 
                                  className="flex-1 bg-bg-elevated border border-white/10 rounded-lg px-4 py-3 text-text-primary placeholder:text-text-dim focus:outline-none focus:border-gold/50 transition-all" />
                              <button type="button" className="bg-gold hover:bg-gold-light text-bg-main px-8 py-3 rounded-lg font-semibold transition-all gold-glow whitespace-nowrap">
                                  Subscribe
                              </button>
                          </form>
                          
                          <div className="mt-6 flex items-center justify-center gap-6 text-sm text-text-dim">
                              <div className="flex items-center gap-2">
                                  <i className="fa-solid fa-check text-green-400"></i>
                                  <span>Weekly insights</span>
                              </div>
                              <div className="flex items-center gap-2">
                                  <i className="fa-solid fa-check text-green-400"></i>
                                  <span>No spam</span>
                              </div>
                              <div className="flex items-center gap-2">
                                  <i className="fa-solid fa-check text-green-400"></i>
                                  <span>Unsubscribe anytime</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      
          <div id="reader-view" className="reader-view">
              <div className="max-w-4xl mx-auto px-6 py-20">
                  <button className="fixed top-24 right-6 w-12 h-12 bg-bg-elevated border border-white/10 rounded-full flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-gold/30 transition-all z-50">
                      <i className="fa-solid fa-xmark text-xl"></i>
                  </button>
      
                  <div id="reader-content" className="glass-card rounded-2xl p-12">
                      <div className="mb-8">
                          <span id="reader-category" className="bg-gold/20 border border-gold/30 text-gold px-3 py-1 rounded-full text-xs font-semibold">Spine</span>
                      </div>
                      
                      <h1 id="reader-title" className="text-5xl font-bold mb-6 leading-tight">Understanding the Spine</h1>
                      
                      <div className="flex items-center gap-6 mb-8 pb-8 border-b border-white/5">
                          <div className="flex items-center gap-3">
                              <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" className="w-12 h-12 rounded-full" alt="Author" />
                              <div>
                                  <div className="font-semibold">Engineering Team</div>
                                  <div className="text-sm text-text-dim">Published 2 days ago</div>
                              </div>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-text-dim">
                              <span>12 min read</span>
                              <span>•</span>
                              <span>Architecture</span>
                          </div>
                      </div>
      
                      <div id="reader-body" className="prose prose-invert max-w-none">
                          <p className="text-lg text-text-secondary leading-relaxed mb-6">
                              The Spine is the foundational layer of IntegrateWise—a persistent, governed memory infrastructure that unifies scattered business data into a single, intelligent source of truth.
                          </p>
      
                          <h2 className="text-3xl font-bold mt-12 mb-4">The Problem: Fragmented Context</h2>
                          <p className="text-text-secondary leading-relaxed mb-6">
                              Modern organizations operate across dozens of disconnected tools. Customer interactions happen in Slack, support tickets live in Zendesk, deals progress in Salesforce, and tasks scatter across Jira, Notion, and email. Each system holds a piece of the truth, but none of them talk to each other.
                          </p>
                          <p className="text-text-secondary leading-relaxed mb-6">
                              This fragmentation creates a hidden tax on every decision. To understand what's happening with a single customer account, a team member must manually piece together:
                          </p>
                          <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
                              <li>Recent Slack conversations mentioning the account</li>
                              <li>Open support tickets and their resolution status</li>
                              <li>CRM notes from the last touchpoint</li>
                              <li>Usage analytics from the product dashboard</li>
                              <li>Billing history and upcoming renewals</li>
                          </ul>
      
                          <h2 className="text-3xl font-bold mt-12 mb-4">The Solution: Unified Memory</h2>
                          <p className="text-text-secondary leading-relaxed mb-6">
                              The Spine solves this by creating a living, breathing memory layer that continuously ingests, normalizes, and connects data from all your tools. It doesn't just store data—it understands relationships, builds entity graphs, and maintains context over time.
                          </p>
      
                          <div className="bg-bg-elevated border border-white/5 rounded-xl p-6 my-8">
                              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                  <i className="fa-solid fa-lightbulb text-gold"></i>
                                  Key Insight
                              </h3>
                              <p className="text-text-secondary leading-relaxed">
                                  The Spine is not a data warehouse. It's a semantic memory layer that understands meaning, not just records. It knows that "John from Acme Corp" in Slack is the same entity as "John Smith" in Salesforce and "j.smith@acmecorp.com" in Gmail.
                              </p>
                          </div>
      
                          <h2 className="text-3xl font-bold mt-12 mb-4">How It Works</h2>
                          <p className="text-text-secondary leading-relaxed mb-6">
                              The Spine operates in four continuous stages:
                          </p>
      
                          <div className="space-y-6 my-8">
                              <div className="flex gap-4">
                                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center shrink-0">
                                      <span className="text-blue-400 font-bold">1</span>
                                  </div>
                                  <div>
                                      <h4 className="font-semibold text-lg mb-2">Ingestion</h4>
                                      <p className="text-text-secondary leading-relaxed">
                                          Bi-directional connectors pull data from 100+ tools in real-time or on custom schedules. Every record, message, ticket, and transaction flows into the Spine.
                                      </p>
                                  </div>
                              </div>
      
                              <div className="flex gap-4">
                                  <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center shrink-0">
                                      <span className="text-purple-400 font-bold">2</span>
                                  </div>
                                  <div>
                                      <h4 className="font-semibold text-lg mb-2">Normalization</h4>
                                      <p className="text-text-secondary leading-relaxed">
                                          Raw data is cleaned, deduplicated, and transformed into a unified schema. Field mappings ensure consistency across disparate sources.
                                      </p>
                                  </div>
                              </div>
      
                              <div className="flex gap-4">
                                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
                                      <span className="text-gold font-bold">3</span>
                                  </div>
                                  <div>
                                      <h4 className="font-semibold text-lg mb-2">Vectorization</h4>
                                      <p className="text-text-secondary leading-relaxed">
                                          Data is embedded into semantic vectors, enabling instant retrieval based on meaning, not just keywords. This powers Entity 360 views and contextual search.
                                      </p>
                                  </div>
                              </div>
      
                              <div className="flex gap-4">
                                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center shrink-0">
                                      <span className="text-green-400 font-bold">4</span>
                                  </div>
                                  <div>
                                      <h4 className="font-semibold text-lg mb-2">Entity Mapping</h4>
                                      <p className="text-text-secondary leading-relaxed">
                                          The Spine builds and maintains a knowledge graph, connecting people, accounts, projects, tickets, and conversations into a unified web of relationships.
                                      </p>
                                  </div>
                              </div>
                          </div>
      
                          <h2 className="text-3xl font-bold mt-12 mb-4">Why This Matters</h2>
                          <p className="text-text-secondary leading-relaxed mb-6">
                              With the Spine in place, your team gains:
                          </p>
                          <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
                              <li><strong>Perfect Context:</strong> Every interaction is backed by complete history</li>
                              <li><strong>Instant Retrieval:</strong> Find anything in milliseconds, not minutes</li>
                              <li><strong>Compounding Memory:</strong> Knowledge grows stronger over time, not stale</li>
                              <li><strong>Governed Access:</strong> Role-based permissions ensure security and compliance</li>
                          </ul>
      
                          <div className="bg-gold/5 border border-gold/20 rounded-xl p-8 my-12 text-center">
                              <h3 className="text-2xl font-bold mb-4">Ready to Build Your Memory Layer?</h3>
                              <p className="text-text-secondary mb-6">Start your 14-day free trial and see the Spine in action.</p>
                              <button className="bg-gold hover:bg-gold-light text-bg-main px-8 py-3 rounded-lg font-semibold transition-all gold-glow">
                                  Start Free Trial
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </>
  )
}
