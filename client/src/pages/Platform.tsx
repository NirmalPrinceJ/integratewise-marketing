import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function Platform() {
  const [expandedLayer, setExpandedLayer] = useState<string | null>("workbench");

  const layers = [
    {
      id: "workbench",
      label: "User Workbench",
      name: "The role-specific projection of work and context.",
      description: "Everything you work across — accounts, pipeline, sprints, tasks, documents — projected into a single unified surface. No tab-switching, no context fragmentation. Just the full picture, ready to act on.",
      kills: "→ Kills Context Loss",
      details: [
        "Unifies CRM, project management, email, Slack, and docs into one view",
        "Presents a role-specific layout customized to active objectives",
        "Includes unified search across all connected tools and systems",
        "Operates as the human-facing control surface of the platform"
      ]
    },
    {
      id: "twin",
      label: "Silent Twin",
      name: "A non-authoritative cognitive participant.",
      description: "Quiet by default. It observes the pipeline, gathers context, and surfaces inline only when there is material value, or when engaged via the Four Buttons (Orient, Decide, Act). It does not clutter your workspace with low-value commentary.",
      kills: "→ Kills AI Hallucination & Noise",
      details: [
        "Monitors background data pipeline and entities silently",
        "Assembles context automatically without human prompt engineering",
        "Prepares drafts, plans, and actions for human review",
        "Surfaces contextually to provide grounded recommendations"
      ]
    },
    {
      id: "spine",
      label: "Adaptive Spine",
      name: "The canonical operational model of truth.",
      description: "The Single Source of Truth (SSOT) of the platform. A continuously evolving schema that stores normalized operational entity states, timelines, and relationships, ensuring all systems and participants are perfectly aligned.",
      kills: "→ Kills Data Amnesia",
      details: [
        "Stores canonical entity types: Connections, SyncJobs, Webhooks, Schemas, Timelines",
        "Resolves entity relationships across your entire connected ecosystem",
        "Tracks history, state mutations, and telemetry events reliably",
        "Maintains structural data consistency across all applications"
      ]
    },
    {
      id: "governance",
      label: "Governance Gates",
      name: "AI proposes. You approve. Governance is a hard gate.",
      description: "Every proposed action sits in the Governance Center before execution. Review reasoning, audit lines, see evidence, and authorize actions. No execution token is granted, and no system is updated, without human approval.",
      kills: "→ Kills Rogue Execution",
      details: [
        "Enforces strict role-based controls and policy checks",
        "Maintains a complete, tamper-proof audit trail of all approved changes",
        "Provides clear lineage and attribution for every AI recommendation",
        "Guarantees that human authority remains the final barrier"
      ]
    },
    {
      id: "sync",
      label: "Hermes & Sync",
      name: "Platform prepares. Your systems execute.",
      description: "Approved actions are coordinated via Hermes and synced downstream to your existing systems. IntegrateWise doesn't bypass or duplicate your tools; it prepares execution packages and reconciles states automatically.",
      kills: "→ Kills Brittle Integrations",
      details: [
        "Triggers secure, governed sync jobs downstream to connected apps",
        "Communicates via pre-built connectors and the Capability Fabric",
        "Ensures eventual consistency without blocking client operations",
        "Uses the Transactional Outbox pattern to survive network drops"
      ]
    }
  ];

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* ─── NAVIGATION ─────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/92 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between py-4 px-6 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2 hover:opacity-75 transition-opacity">
            <div className="w-8 h-8 rounded bg-forest flex items-center justify-center">
              <span className="text-paper font-bold text-sm">IW</span>
            </div>
            <span className="font-semibold text-forest hidden sm:inline">IntegrateWise</span>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="/solutions" className="hover:text-foreground transition-colors">Solutions</Link>
            <a href="#platform" className="hover:text-foreground transition-colors">Platform</a>
            <Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link>
          </div>

          <a
            href="mailto:hello@integratewise.ai"
            className="px-4 py-2 rounded bg-forest text-paper font-medium text-sm hover:bg-forest-deep transition-colors"
          >
            Apply for Pilot
          </a>
        </div>
      </nav>

      {/* ─── HERO ──────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-4">Platform</p>
          <h1 className="text-5xl md:text-6xl font-bold text-forest mb-8 leading-tight">
            Five layers. One unified workspace.
          </h1>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
            Every layer is built to resolve context fragmentation. Together they close the full loop—from raw data in the Adaptive Spine to approved actions gated by Governance.
          </p>
        </div>
      </section>

      {/* ─── THE LOOP VISUALIZATION ────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-paper-warm">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-6">How It Works Together</p>
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-12 leading-tight">
            The closed loop that compounds.
          </h2>

          {/* Loop diagram */}
          <div className="bg-forest rounded-xl p-8 md:p-12 text-paper mb-12 relative">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-bold text-lg">1</span>
                  </div>
                  <div>
                    <p className="font-semibold">Connect</p>
                    <p className="text-sm text-paper/70">All your tools feed into User Workbench</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-bold text-lg">2</span>
                  </div>
                  <div>
                    <p className="font-semibold">Build Context</p>
                    <p className="text-sm text-paper/70">Silent Twin resolves entity context</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-bold text-lg">3</span>
                  </div>
                  <div>
                    <p className="font-semibold">Propose</p>
                    <p className="text-sm text-paper/70">Silent Twin proposes plans and actions</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-bold text-lg">4</span>
                  </div>
                  <div>
                    <p className="font-semibold">Approve</p>
                    <p className="text-sm text-paper/70">You review and authorize in Governance Gates</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-bold text-lg">5</span>
                  </div>
                  <div>
                    <p className="font-semibold">Execute</p>
                    <p className="text-sm text-paper/70">Hermes coordinates sync downstream</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-bold text-lg">6</span>
                  </div>
                  <div>
                    <p className="font-semibold">Learn</p>
                    <p className="text-sm text-paper/70">Outcome feeds back to Adaptive Spine</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm text-paper/60 italic text-center">
              Every cycle compounds. Your Twin gets smarter. Your memory gets richer. Your decisions get better.
            </p>
          </div>
        </div>
      </section>

      {/* ─── DETAILED LAYERS ───────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-6">Five Layers</p>
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-12 leading-tight">
            Each layer solves one problem.
          </h2>

          <div className="space-y-4">
            {layers.map((layer) => (
              <div key={layer.id} className="border border-border rounded-xl overflow-hidden hover:border-gold transition-colors">
                {/* Layer header */}
                <button
                  onClick={() => setExpandedLayer(expandedLayer === layer.id ? null : layer.id)}
                  className="w-full px-8 py-6 bg-paper-warm hover:bg-paper transition-colors text-left flex items-start justify-between gap-4"
                >
                  <div className="flex-1">
                    <p className="text-xs font-mono text-gold tracking-widest uppercase mb-2">{layer.label}</p>
                    <p className="font-semibold text-forest text-lg mb-2">{layer.name}</p>
                    <p className="text-sm text-muted-foreground">{layer.description}</p>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-gold flex-shrink-0 transition-transform ${expandedLayer === layer.id ? 'rotate-180' : ''}`} />
                </button>

                {/* Layer details */}
                {expandedLayer === layer.id && (
                  <div className="px-8 py-6 bg-background border-t border-border">
                    <div className="space-y-4 mb-6">
                      {layer.details.map((detail, idx) => (
                        <div key={idx} className="flex gap-3">
                          <span className="text-gold flex-shrink-0 mt-1">•</span>
                          <p className="text-foreground">{detail}</p>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gold/10 border border-gold/20 rounded-lg px-4 py-3">
                      <p className="text-sm text-forest font-medium">{layer.kills}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW THEY CONNECT ──────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-forest text-paper">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-6">Architecture</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
            One unified workspace. No silos. No gaps.
          </h2>

          <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-8">
            <h3 className="font-semibold text-paper mb-6">Governed flow of execution (OODA runtime):</h3>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs text-gold font-semibold">OBS</span>
                </div>
                <div>
                  <p className="font-semibold mb-2">Observe · Store in Spine</p>
                  <p className="text-paper/70">Raw data is ingested, normalized, and stored securely as the Single Source of Truth (SSOT) in the Adaptive Spine.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs text-gold font-semibold">ORI</span>
                </div>
                <div>
                  <p className="font-semibold mb-2">Orient · Ask Your Twin</p>
                  <p className="text-paper/70">The Silent Twin interprets active context, resolves entity relationships, and structures a grounded overview of the work.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs text-gold font-semibold">DEC</span>
                </div>
                <div>
                  <p className="font-semibold mb-2">Decide · Assign Your Twin</p>
                  <p className="text-paper/70">You delegate intent; the Twin plans the execution path and packages it into a standard proposed execution contract.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs text-gold font-semibold">ACT</span>
                </div>
                <div>
                  <p className="font-semibold mb-2">Act · Approve Twin's Action</p>
                  <p className="text-paper/70">Proposals sit behind Governance Gates. Review evidence, see the trace, and authorize sync. Hermes coordinates downstream runtimes.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs text-gold font-semibold">OUT</span>
                </div>
                <div>
                  <p className="font-semibold mb-2">Sync & Outcome</p>
                  <p className="text-paper/70">Downstream mutations are synchronized, and the observed outcome feeds back to compound institutional memory.</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-lg text-paper/80 leading-relaxed">
            This is not a database or dashboard. This is an operating layer. It sits between your data, your AI, and your decisions. It keeps everything connected and learning.
          </p>
        </div>
      </section>

      {/* ─── CTA SECTION ───────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-background text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-8 leading-tight">
            See it in action.
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Let&apos;s show you how these layers work together to create the closed loop that your business needs.
          </p>

          <a
            href="mailto:hello@integratewise.ai"
            className="px-8 py-3 rounded bg-forest text-paper font-semibold text-base hover:bg-forest-deep transition-colors inline-flex items-center justify-center gap-2"
          >
            Book a Demo
            <ArrowRight className="w-5 h-5" />
          </a>

          <p className="text-sm text-muted-foreground mt-6">
            Apply for Pilot → hello@integratewise.ai
          </p>
        </div>
      </section>

      {/* ─── FOOTER ────────────────────────────────────────────────────── */}
      <footer className="bg-forest-deep text-paper border-t border-paper/10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded bg-gold/20 flex items-center justify-center">
                <span className="text-gold font-bold text-sm">IW</span>
              </div>
              <span className="font-bold text-paper text-lg">IntegrateWise</span>
            </div>
            <p className="text-sm text-paper/50 max-w-md leading-relaxed">
              Continuity + Silent Twin + Governance + Sync.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h4 className="font-bold mb-4 text-paper">Solutions</h4>
              <ul className="space-y-2 text-sm text-paper/60">
                <li><Link href="/solutions/account-success" className="hover:text-paper transition-colors">Account Success</Link></li>
                <li><Link href="/solutions/sales-continuity" className="hover:text-paper transition-colors">Sales Continuity</Link></li>
                <li><Link href="/solutions/founder-ops" className="hover:text-paper transition-colors">Founder Ops</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-paper">Company</h4>
              <ul className="space-y-2 text-sm text-paper/60">
                <li><Link href="/" className="hover:text-paper transition-colors">Home</Link></li>
                <li><a href="#" className="hover:text-paper transition-colors">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-paper">Legal</h4>
              <ul className="space-y-2 text-sm text-paper/60">
                <li><a href="#" className="hover:text-paper transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-paper transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-paper/10 pt-8">
            <p className="text-sm text-paper/40">© 2026 IntegrateWise LLP. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
