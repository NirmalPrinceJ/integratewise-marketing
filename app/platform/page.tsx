'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { AppLogo, logoColors } from "@/components/icons/app-logos"
const pipelineStages = [
  "Ingest", "Parse", "Extract", "Normalize", "Deduplicate", "Link", "Score", "Write"
]

const memoryCards = [
  {
    title: "Truth",
    description: "The objective facts of your business. Verified records, transaction histories, and definitive entity states pulled directly from your source systems—so every team works from the same numbers.",
    icon: "fa-check-double",
    color: "blue",
    items: ["Verified Records", "Transaction History", "Entity States"]
  },
  {
    title: "Context",
    description: "The 'why' behind the truth. Communications, relationships, sentiment, and the nuanced history of how entities interact over time—so a renewal risk surfaces with the email thread that caused it.",
    icon: "fa-diagram-project",
    color: "purple",
    items: ["Communication Flow", "Relationship Mapping", "Historical Nuance"]
  },
  {
    title: "Knowledge",
    description: "The synthesis. Patterns identified by the Twin, decisions approved by humans, and predictive models that guide future actions—so every approval makes the next decision faster and smarter.",
    icon: "fa-lightbulb",
    color: "gold",
    items: ["AI Synthesis", "Approved Decisions", "Predictive Patterns"]
  }
]

const connectors = [
  "Salesforce", "HubSpot", "Slack", "Jira", "Zendesk", "Intercom",
  "Notion", "Asana", "Linear", "GitHub", "Stripe", "Segment",
  "Google Workspace", "Microsoft 365", "Zoom", "Gong",
  "Snowflake", "BigQuery", "PostgreSQL", "MySQL"
]

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-bg-main">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section id="hero-section" className="relative pt-32 pb-24 px-6 overflow-hidden">
          <div className="absolute inset-0 hero-glow pointer-events-none"></div>
          <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
                <i className="fa-solid fa-network-wired text-blue-400 text-sm"></i>
                <span className="text-blue-300 text-sm font-medium">The Universal Data Layer</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                The Spine.
                <br />
                <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                  Your Source of Truth.
                </span>
              </h1>
              
              <p className="text-xl text-text-secondary mb-10 leading-relaxed">
                The Spine ingests from 70+ first-party connectors—reaching 1,000+ underlying sources—normalizes the chaos into canonical truth, and writes approved changes back to systems like Salesforce, HubSpot, Jira, and Stripe.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
                <a href="/demo" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] transform hover:scale-105">
                  Book a Demo
                </a>
                <a href="#memory-section" className="text-text-secondary hover:text-text-primary font-medium flex items-center gap-2 transition-colors">
                  See how it works <i className="fa-solid fa-arrow-right text-sm"></i>
                </a>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-text-dim">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-bg-elevated border-2 border-bg-main flex items-center justify-center"><AppLogo name="Salesforce" className="w-5 h-5" style={{ color: logoColors.Salesforce }} /></div>
                  <div className="w-10 h-10 rounded-full bg-bg-elevated border-2 border-bg-main flex items-center justify-center"><AppLogo name="Slack" className="w-5 h-5" style={{ color: logoColors.Slack }} /></div>
                  <div className="w-10 h-10 rounded-full bg-bg-elevated border-2 border-bg-main flex items-center justify-center"><AppLogo name="Zendesk" className="w-5 h-5" style={{ color: logoColors.Zendesk }} /></div>
                </div>
                <span>Ingests from 70+ trusted sources</span>
              </div>
            </div>
            
            <div className="relative h-[600px] flex items-center justify-center">
              {/* Central gradient line */}
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-transparent via-blue-500 to-purple-500 shadow-[0_0_30px_rgba(59,130,246,0.8)]"></div>
              
              {/* Floating data nodes */}
              <div className="absolute top-1/4 left-10 glass-card p-4 rounded-2xl border-blue-500/30 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center"><i className="fa-solid fa-database text-blue-400"></i></div>
                <div>
                  <div className="text-sm font-semibold text-text-primary">Structured Data</div>
                  <div className="text-xs text-text-dim">CRM, ERP, Billing</div>
                </div>
              </div>
              
              <div className="absolute top-1/2 right-10 glass-card p-4 rounded-2xl border-purple-500/30 flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center"><i className="fa-regular fa-comments text-purple-400"></i></div>
                <div>
                  <div className="text-sm font-semibold text-text-primary">Unstructured</div>
                  <div className="text-xs text-text-dim">Slack, Email, Docs</div>
                </div>
              </div>
              
              <div className="absolute bottom-1/4 left-20 glass-card p-4 rounded-2xl border-gold/30 flex items-center gap-3">
                <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center"><i className="fa-solid fa-brain text-gold"></i></div>
                <div>
                  <div className="text-sm font-semibold text-text-primary">AI Session</div>
                  <div className="text-xs text-text-dim">Decisions, Context</div>
                </div>
              </div>
              
              {/* Central core */}
              <div className="relative z-10 w-40 h-40 rounded-full glass-card border-blue-500/50 flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.2)]">
                <div className="text-center">
                  <i className="fa-solid fa-layer-group text-4xl text-blue-400 mb-2 block"></i>
                  <div className="font-bold text-sm text-text-primary">Unified<br />Foundation</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Memory Section */}
        <section id="memory-section" className="py-32 px-6 bg-bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-text-primary">
                Where Accumulated Knowledge
                <br />
                <span className="text-blue-400">Lives Permanently.</span>
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                This is where your memory accumulates and compounds. Truth, Context, and Knowledge synthesized and stored. Growing smarter with every decision you approve.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {memoryCards.map((card) => (
                <div key={card.title} className={`glass-card rounded-3xl p-10 relative overflow-hidden group hover:border-${card.color}-500/40 transition-all`}>
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-${card.color}-500/10 rounded-full blur-3xl group-hover:bg-${card.color}-500/20 transition-all`}></div>
                  <div className={`w-16 h-16 bg-${card.color}-500/10 rounded-2xl flex items-center justify-center mb-8 border border-${card.color}-500/20`}>
                    <i className={`fa-solid ${card.icon} text-${card.color}-400 text-2xl`}></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-text-primary">{card.title}</h3>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {card.description}
                  </p>
                  <ul className="space-y-3 text-sm text-text-dim">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <i className={`fa-solid fa-circle text-[8px] text-${card.color}-400`}></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Memory Scopes Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-2 mb-6">
                <i className="fa-solid fa-shield-halved text-teal-400 text-sm"></i>
                <span className="text-teal-300 text-sm font-medium">Privacy & Control</span>
              </div>
              <h2 className="text-5xl font-bold mb-6 text-text-primary">
                Three Memory Scopes
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Your memory, your rules. Control who sees what at every level.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="glass-card rounded-2xl p-8 hover:border-teal-500/30 transition-all">
                <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center mb-6">
                  <i className="fa-solid fa-user text-teal-400 text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-text-primary">User Memory</h3>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Private to you. Your personal context, preferences, and individual insights stay with you alone.
                </p>
                <ul className="space-y-3 text-sm text-text-dim">
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-check text-teal-400 mt-0.5 text-xs"></i>
                    <span>Private by default</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-check text-teal-400 mt-0.5 text-xs"></i>
                    <span>Personal insights only</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-check text-teal-400 mt-0.5 text-xs"></i>
                    <span>Zero org visibility</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card rounded-2xl p-8 border-gold/30 hover:border-gold/50 transition-all">
                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6">
                  <i className="fa-solid fa-people-group text-gold text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-text-primary">Work Memory</h3>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Shared by invitation. Team context, project insights, and collaborative data available only to invited members.
                </p>
                <ul className="space-y-3 text-sm text-text-dim">
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-check text-gold mt-0.5 text-xs"></i>
                    <span>Private until shared</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-check text-gold mt-0.5 text-xs"></i>
                    <span>Team collaboration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-check text-gold mt-0.5 text-xs"></i>
                    <span>Invite-based access</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card rounded-2xl p-8 hover:border-purple-500/30 transition-all">
                <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                  <i className="fa-solid fa-building text-purple-400 text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-text-primary">Org Memory</h3>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Shared by policy. Company-wide insights, governance records, and institutional knowledge available to authorized roles.
                </p>
                <ul className="space-y-3 text-sm text-text-dim">
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-check text-purple-400 mt-0.5 text-xs"></i>
                    <span>Policy-driven sharing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-check text-purple-400 mt-0.5 text-xs"></i>
                    <span>Role-based access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-check text-purple-400 mt-0.5 text-xs"></i>
                    <span>Governance enforced</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pipeline */}
        <section className="py-24 bg-bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-text-primary mb-4">8-Stage Pipeline</h2>
            <p className="text-text-secondary mb-12 max-w-2xl">
              Every piece of data passes through a rigorous pipeline before becoming truth in the Spine.
            </p>
            <div className="flex flex-wrap gap-4">
              {pipelineStages.map((stage, index) => (
                <div key={stage} className="flex items-center gap-3">
                  <div className="glass-card px-6 py-4 rounded-xl">
                    <div className="text-xs text-gold mb-1">Stage {index + 1}</div>
                    <div className="text-text-primary font-medium">{stage}</div>
                  </div>
                  {index < pipelineStages.length - 1 && (
                    <i className="fa-solid fa-arrow-right text-gold/50 hidden md:block text-sm"></i>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Connectors */}
        <section className="py-24 bg-bg-secondary/30" id="integrations-section">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-text-primary mb-4">16 live, 40+ in beta connectors, 1,000+ Sources</h2>
            <p className="text-text-secondary mb-12 max-w-2xl">
              Selective ingest, not ETL. We pull what matters, normalize it, and—on approval—write changes back to systems of record like Salesforce, HubSpot, Jira, Zendesk, and Stripe.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {connectors.map((connector) => (
                <div key={connector} className="glass-card px-4 py-3 rounded-lg text-sm text-text-secondary flex items-center gap-2">
                  <AppLogo name={connector} className="w-4 h-4" style={{ color: logoColors[connector] || "#D4AF37" }} />
                  {connector}
                </div>
              ))}
            </div>
            <p className="text-text-dim text-sm mt-8">
              + 50 more connectors available. Custom connectors on Enterprise plans. Approved write-back supported for Salesforce, HubSpot, Jira, Zendesk, and Stripe today.
            </p>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works-section" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
                <i className="fa-solid fa-lightbulb text-purple-400 text-sm"></i>
                <span className="text-purple-300 text-sm font-medium">The Solution</span>
              </div>
              <h2 className="text-6xl lg:text-7xl font-bold mb-10 leading-tight">
                The Spine:
                <br />
                <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                  Your Single Source of Truth
                </span>
              </h2>
              <p className="text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
                The Spine ingests scattered records, unstructured communications, and approved decisions—normalizing them into one source of truth that adapts as your business evolves.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <div className="glass-card rounded-3xl p-12">
                  <h3 className="text-3xl font-bold mb-4 text-text-primary">What is the Spine?</h3>
                  <p className="text-lg text-text-secondary leading-relaxed mb-6">
                    The Spine is your canonical source of truth. It ingests all your business data, normalizes it into canonical records, and creates a living map of relationships between people, accounts, projects, and events.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-1">
                        <i className="fa-solid fa-check text-gold"></i>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1 text-text-primary">Data Ingestion</h5>
                        <p className="text-text-dim text-sm">Connects to your existing tools and pulls data in real-time.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-1">
                        <i className="fa-solid fa-check text-gold"></i>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1 text-text-primary">Entity Graph</h5>
                        <p className="text-text-dim text-sm">Creates a unified knowledge base of all your business relationships.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-1">
                        <i className="fa-solid fa-check text-gold"></i>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1 text-text-primary">Adaptive Memory</h5>
                        <p className="text-text-dim text-sm">Learns from your business patterns and improves over time.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-card rounded-3xl p-12">
                  <h3 className="text-3xl font-bold mb-4 text-text-primary">The Human-in-the-Loop</h3>
                  <p className="text-lg text-text-secondary leading-relaxed">
                    Every action, every insight, every decision requires your explicit approval. The Adaptive Spine never takes action without your consent.
                  </p>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-8 h-fit">
                <h4 className="text-2xl font-bold text-text-primary mb-6">Ingest. Normalize. Learn. Repeat.</h4>
                <div className="space-y-4">
                  <div className="glass-card rounded-xl p-4 border-l-4 border-blue-500">
                    <h5 className="font-semibold text-text-primary text-sm mb-2">Stage 1: Ingest</h5>
                    <p className="text-text-secondary text-xs">Data flows in from 16 live, 40+ in beta connectors, 24/7.</p>
                  </div>
                  <div className="glass-card rounded-xl p-4 border-l-4 border-purple-500">
                    <h5 className="font-semibold text-text-primary text-sm mb-2">Stage 2: Parse & Extract</h5>
                    <p className="text-text-secondary text-xs">Unstructured content is analyzed and converted to structured records.</p>
                  </div>
                  <div className="glass-card rounded-xl p-4 border-l-4 border-green-500">
                    <h5 className="font-semibold text-text-primary text-sm mb-2">Stage 3: Normalize</h5>
                    <p className="text-text-secondary text-xs">Records are deduplicated and aligned to your entity schema.</p>
                  </div>
                  <div className="glass-card rounded-xl p-4 border-l-4 border-gold">
                    <h5 className="font-semibold text-text-primary text-sm mb-2">Stage 4: Propose & Approve</h5>
                    <p className="text-text-secondary text-xs">Twin suggests actions—update an opportunity stage, log a renewal risk note, draft a follow-up email, schedule a check-in—and you approve before anything ships.</p>
                  </div>
                  <div className="glass-card rounded-xl p-4 border-l-4 border-pink-500">
                    <h5 className="font-semibold text-text-primary text-sm mb-2">Stage 5: Learn</h5>
                    <p className="text-text-secondary text-xs">Approved decisions compound back into the Twin's knowledge.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security */}
        <section className="py-24 bg-bg-secondary/30" id="security-section">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-text-primary mb-12">Security & Compliance</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card rounded-xl p-6">
                <i className="fa-solid fa-shield text-gold text-2xl mb-4 block"></i>
                <h3 className="text-lg font-semibold text-text-primary mb-2">SOC 2 Type II</h3>
                <p className="text-text-secondary text-sm">On the compliance path with SOC 2 Type II certification in progress.</p>
              </div>
              <div className="glass-card rounded-xl p-6">
                <i className="fa-solid fa-lock text-gold text-2xl mb-4 block"></i>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Encryption</h3>
                <p className="text-text-secondary text-sm">AES-256 encryption at rest, TLS 1.3 in transit. Your data is always protected.</p>
              </div>
              <div className="glass-card rounded-xl p-6">
                <i className="fa-solid fa-server text-gold text-2xl mb-4 block"></i>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Data Residency</h3>
                <p className="text-text-secondary text-sm">Choose your data location. US, EU, and APAC regions available.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-xl text-gold mb-4 font-semibold italic">
              Your data is yours. AI is rented.
            </p>
            <h2 className="text-3xl font-bold text-text-primary mb-6">
              See the Spine in action
            </h2>
            <a
              href="/demo"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-bg-main px-8 py-4 rounded-lg text-lg font-semibold transition-all gold-glow"
            >
              Book a Demo <i className="fa-solid fa-arrow-right text-sm"></i>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
