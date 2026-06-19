import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function Platform() {
  const [expandedLayer, setExpandedLayer] = useState<string | null>("l1");

  const layers = [
    {
      id: "l1",
      label: "L1 · Workbench",
      name: "Everything you need to know. One place to act.",
      description: "Everything you work across — accounts, pipeline, sprints, tasks, documents — unified from all your tools into one surface. No tab-switching. No reconciling. No copy-pasting. Just the full picture, ready to act on.",
      kills: "→ Kills Human API",
      details: [
        "Connects your CRM, project management, email, Slack, and data sources",
        "Shows account/deal/sprint context at a glance",
        "Search across all tools and documents",
        "One source of truth for your workspace"
      ]
    },
    {
      id: "l2",
      label: "L2 · Twin",
      name: "An AI that knows your business as well as you do.",
      description: "Your Twin is briefed once and stays briefed. It reasons over your actual data, surfaces what matters, proposes what to do next — with the evidence to back it up. You review. You decide. It learns. It doesn't forget by morning.",
      kills: "→ Kills Amnesia & Hallucination",
      details: [
        "Persistent memory of your business context",
        "Reasons over real data from your Workbench",
        "Learns from every decision you make",
        "Proposes actions with evidence and reasoning"
      ]
    },
    {
      id: "l3",
      label: "L3 · Memory",
      name: "Every instruction. Every decision. Every outcome. Remembered.",
      description: "IntegrateWise remembers what your team knows — the brief you gave, the rule you set, the decision you made, the outcome that came back. Every approved action compounds the memory. Search it. Build on it. Stop starting over.",
      kills: "→ Kills Amnesia",
      details: [
        "Searchable institutional knowledge base",
        "Tracks all decisions and their reasoning",
        "Records outcomes and learnings",
        "Survives team changes and personnel transitions"
      ]
    },
    {
      id: "l4",
      label: "L4 · Approval Center",
      name: "AI proposes. You approve. Nothing moves without you.",
      description: "Every proposed action sits here before anything happens. Review the reasoning. See the evidence. Approve or reject. Complete audit trail. Nothing automatic. You are always in control — and you always know what actually ran.",
      kills: "→ Kills Babysitting",
      details: [
        "Every AI proposal reviewed before execution",
        "Full audit trail of approvals and rejections",
        "Evidence-based decision making",
        "Compliance and governance built-in"
      ]
    },
    {
      id: "l5",
      label: "Handoff",
      name: "IntegrateWise prepares. Your systems execute.",
      description: "Approved actions become precise, vendor-neutral packages ready for your existing systems. IntegrateWise doesn't execute on your behalf. It prepares execution perfectly — then hands off to whatever you already run.",
      kills: "→ Kills Human API",
      details: [
        "Prepares execution packages for your systems",
        "Integrates with Zapier, n8n, Make, webhooks",
        "Updates your CRM, email, Slack automatically",
        "You stay in control of all execution"
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
            Five surfaces. One connected workspace.
          </h1>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
            Every layer is built to remove one of the four failures. Together they close the full loop — from raw data to approved decision to organisational memory.
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
                    <p className="text-sm text-paper/70">All your tools feed into Workbench</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-bold text-lg">2</span>
                  </div>
                  <div>
                    <p className="font-semibold">Build Context</p>
                    <p className="text-sm text-paper/70">Your Twin learns your business</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-bold text-lg">3</span>
                  </div>
                  <div>
                    <p className="font-semibold">Propose</p>
                    <p className="text-sm text-paper/70">Twin suggests what to do next</p>
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
                    <p className="text-sm text-paper/70">You review and approve in Approval Center</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-bold text-lg">5</span>
                  </div>
                  <div>
                    <p className="font-semibold">Execute</p>
                    <p className="text-sm text-paper/70">Handoff prepares and your systems run it</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-bold text-lg">6</span>
                  </div>
                  <div>
                    <p className="font-semibold">Learn</p>
                    <p className="text-sm text-paper/70">Outcome feeds back to Memory</p>
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
            <h3 className="font-semibold text-paper mb-6">Data flows through the system:</h3>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs text-gold font-semibold">IN</span>
                </div>
                <div>
                  <p className="font-semibold mb-2">Data ingestion</p>
                  <p className="text-paper/70">All your tools continuously sync with Workbench. Salesforce, email, Slack, spreadsheets, APIs — everything stays current.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs text-gold font-semibold">UP</span>
                </div>
                <div>
                  <p className="font-semibold mb-2">Twin reasoning</p>
                  <p className="text-paper/70">Your Twin analyzes the Workbench data and Memory. It surfaces opportunities, flags risks, proposes actions with evidence.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs text-gold font-semibold">DECIDE</span>
                </div>
                <div>
                  <p className="font-semibold mb-2">Approval</p>
                  <p className="text-paper/70">Every proposal sits in Approval Center. You see reasoning, evidence, and risk. You approve or reject. Nothing moves without you.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs text-gold font-semibold">OUT</span>
                </div>
                <div>
                  <p className="font-semibold mb-2">Execution</p>
                  <p className="text-paper/70">Handoff prepares the action for your systems. Updates Salesforce. Sends emails. Triggers workflows. Your systems stay in control.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs text-gold font-semibold">LEARN</span>
                </div>
                <div>
                  <p className="font-semibold mb-2">Memory update</p>
                  <p className="text-paper/70">Outcomes feed back into Memory. What happened? What was learned? This compounds your institutional knowledge forever.</p>
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
              Digital Memory + Reasoning + Governance + Handoff.
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
