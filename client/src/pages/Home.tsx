import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/92 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <a href="/" className="flex items-center gap-2 hover:opacity-75 transition-opacity">
            <div className="w-8 h-8 rounded bg-forest flex items-center justify-center">
              <span className="text-paper font-bold text-sm">IW</span>
            </div>
            <span className="font-semibold text-forest hidden sm:inline">IntegrateWise</span>
          </a>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Product
            </a>
            <a href="/pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <button className="px-4 py-2 rounded bg-forest text-paper font-medium text-sm hover:bg-forest-deep transition-colors">
              Get Early Access
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-wider uppercase mb-6">The Missing Layer in Enterprise AI</p>
          <h1 className="text-5xl md:text-6xl font-bold text-forest mb-8 leading-tight">
            Brief it once. It <span className="text-gold">remembers</span>. It finishes.
          </h1>
          <p className="text-xl text-muted mb-8 leading-relaxed max-w-2xl">
            IntegrateWise connects your tools, builds a memory of your business, and hands off approved decisions to your execution environment. AI that doesn't forget what you told it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <button className="cta-button">
              Request Demo
              <ArrowRight className="inline ml-2 w-4 h-4" />
            </button>
            <button className="secondary-button">
              See Architecture
            </button>
          </div>
          <div className="mt-12 pt-12 border-t border-border">
            <div className="flex flex-col sm:flex-row gap-8">
              <div>
                <p className="text-2xl font-bold text-forest">60%+</p>
                <p className="text-sm text-muted">Pilot conversion rate with paid pilots in India</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-forest">₹9L–13L</p>
                <p className="text-sm text-muted">Monthly problem cost IntegrateWise replaces</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thesis */}
      <section className="py-20 md:py-32 px-4 bg-forest text-paper">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-mono text-gold tracking-wider uppercase mb-6">Our Thesis</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Organizations are adopting AI without <span className="text-gold">continuity infrastructure.</span>
          </h2>
          <p className="text-lg text-paper/75 leading-relaxed mb-12">
            ChatGPT, Claude, Gemini, Copilot, internal agents, and dozens of AI applications. But every interaction resets. Every conversation loses context. Every AI maintains its own memory.
          </p>
          <div className="inline-flex flex-col gap-4">
            <div className="bg-forest-deep border border-gold/20 rounded-xl px-8 py-6">
              <p className="text-3xl font-bold text-gold mb-2">Organizations now have</p>
              <p className="text-2xl font-semibold text-paper">intelligence everywhere, but continuity nowhere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Frustrations */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-wider uppercase mb-2">Frustrations</p>
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-4 leading-tight">
            What this looks like in practice.
          </h2>
          <p className="text-lg text-muted mb-12 max-w-2xl">
            Teams rebuilding context. AI systems operating from different truths. Critical context lost between conversations and tools.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "The Sales Lead",
                quote: "\"I spend 30 minutes every meeting explaining the same deal context to ChatGPT.\"",
                desc: "Client backstory. Deal milestones. Approval history. Every conversation asks the same questions. Memory gets lost when switching to Claude or Copilot."
              },
              {
                name: "The Operations Head",
                quote: "\"Our five AIs don't talk to each other. Each one has its own version of truth.\"",
                desc: "Salesforce says one thing. Internal agents think another. Team members manually sync between systems. No single source of context."
              },
              {
                name: "The Engineering Lead",
                quote: "\"We've built 7 custom integrations. We're maintaining 7 different memories.\"",
                desc: "n8n pipelines. Zapier automations. Custom scripts. Each one duplicates context. Adding a new tool means rebuilding everything again."
              }
            ].map((frustration, idx) => (
              <div key={idx} className="bg-paper-warm border border-border rounded-xl p-6 hover:border-gold transition-colors">
                <p className="font-semibold text-forest mb-3">{frustration.name}</p>
                <p className="italic text-ink mb-4">{frustration.quote}</p>
                <p className="text-sm text-muted">{frustration.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wanted/Got/Gives */}
      <section className="py-20 md:py-32 px-4 bg-paper-warm border-y border-border">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-wider uppercase mb-2">Solution</p>
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-4 leading-tight">
            What IntegrateWise changes.
          </h2>
          <p className="text-lg text-muted mb-12">Teams now have one continuity layer. One memory. One context. One truth.</p>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-forest">
                  <th className="text-left py-4 px-4 font-mono text-xs text-gold uppercase tracking-wider">They Wanted</th>
                  <th className="text-left py-4 px-4 font-mono text-xs text-gold uppercase tracking-wider">They Had Before</th>
                  <th className="text-left py-4 px-4 font-mono text-xs text-gold uppercase tracking-wider">IntegrateWise Gives Them</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 font-semibold text-forest">Shared organizational memory</td>
                  <td className="py-4 px-4 text-muted italic">Each AI maintains its own memory in its own format</td>
                  <td className="py-4 px-4 text-ink">One canonical memory that every AI, app, and human can access</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 font-semibold text-forest">Context that persists across tools</td>
                  <td className="py-4 px-4 text-muted italic">Switching to Claude means explaining everything again</td>
                  <td className="py-4 px-4 text-ink">Work continues seamlessly across tools because context is external</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 font-semibold text-forest">Governed, auditable AI decisions</td>
                  <td className="py-4 px-4 text-muted italic">No visibility into what the AI decided or why</td>
                  <td className="py-4 px-4 text-ink">Every decision routes through approval layers with full audit trails</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-forest">One source of truth for decisions</td>
                  <td className="py-4 px-4 text-muted italic">7 integrations = 7 different data truths</td>
                  <td className="py-4 px-4 text-ink">One governed continuity layer that systems pull from</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-20 md:py-32 px-4 bg-forest text-paper">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-wider uppercase mb-2">Product</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            How it works.
          </h2>
          <p className="text-lg text-paper/75 mb-12 max-w-2xl">
            A continuity layer that sits between humans, AI systems, and enterprise applications. Every interaction strengthens the same memory foundation.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                name: "Workbench",
                desc: "Chat with your organizational memory. Start a conversation, pull context, build on what's already known.",
                emoji: "💼"
              },
              {
                name: "Twin",
                desc: "Your operational AI agent. Knows your business rules, your approval patterns, your way of working.",
                emoji: "👥"
              },
              {
                name: "Memory",
                desc: "Persistent organizational intelligence. Not embeddings. Real semantic memory of decisions, patterns, and context.",
                emoji: "🧠"
              },
              {
                name: "Approval",
                desc: "Governance layer. Every decision gets routed through your approval workflows before execution.",
                emoji: "✓"
              },
              {
                name: "Handoff",
                desc: "Execute into your systems. JSON, webhooks, MCP, or custom adapters. Decisions become actions.",
                emoji: "🚀"
              },
              {
                name: "Integrations",
                desc: "Connect your tools once. Salesforce, Jira, Slack, Notion, GitHub, custom APIs. The memory grows from every interaction.",
                emoji: "🔗"
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-forest-deep border border-paper/10 rounded-xl p-6 hover:border-gold hover:bg-forest-deep/60 transition-all">
                <p className="text-2xl mb-3">{feature.emoji}</p>
                <p className="font-semibold text-paper mb-3">{feature.name}</p>
                <p className="text-sm text-paper/75">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personas */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-wider uppercase mb-2">Personas</p>
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-12 leading-tight">
            Built for the India market.
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Aisha",
                role: "VP Sales at mid-market SaaS",
                story: "Manages 5-10 large deals simultaneously. Works across Salesforce, Slack, email, and custom tools. Needs organizational context to carry deals forward when team members change or deals stall."
              },
              {
                name: "Rajesh",
                role: "Operations Director, Indian services firm",
                story: "Coordinates between sales, delivery, finance, and compliance. Decisions need audit trails for regulations. Currently maintains 3 separate systems with manual reconciliation."
              },
              {
                name: "Priya",
                role: "Founder, AI-first startup",
                story: "Building internal agents, chatbots, and automation. Drowning in custom integrations. Each agent has its own memory layer. Needs one unified memory the whole organization can build on."
              }
            ].map((persona, idx) => (
              <div key={idx} className="border border-border rounded-xl p-6 bg-paper hover:bg-paper-warm transition-colors">
                <div className="h-1 w-8 bg-gold rounded mb-4"></div>
                <p className="text-xs font-mono text-muted uppercase tracking-wider mb-2">Persona</p>
                <p className="text-xl font-bold text-forest mb-1">{persona.name}</p>
                <p className="text-sm text-muted mb-4">{persona.role}</p>
                <p className="text-sm text-ink leading-relaxed">{persona.story}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-mono text-gold tracking-wider uppercase mb-6">Why Now</p>
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-8 leading-tight">
            The moment for continuity infrastructure.
          </h2>
          <p className="text-lg text-muted leading-relaxed mb-8">
            Twenty years ago, enterprises solved application fragmentation with integration platforms. Today, AI is recreating the same problem. Organizations need continuity infrastructure the same way they needed API gateways for the application era.
          </p>
          <div className="bg-gold/10 border border-gold/30 rounded-xl p-8">
            <p className="text-forest font-semibold text-lg">
              API gateways solved fragmentation between systems.
            </p>
            <p className="text-lg font-bold text-gold mt-4">
              Continuity infrastructure solves fragmentation between AIs, systems, and conversations.
            </p>
          </div>
        </div>
      </section>

      {/* Audience Hooks */}
      <section className="py-20 md:py-32 px-4 bg-paper-warm">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-wider uppercase mb-2">For Your Team</p>
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-12 leading-tight">
            Different entry points, same platform.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                role: "Sales Leader",
                hook: "Never start from scratch. Every deal has its context."
              },
              {
                role: "Operations Head",
                hook: "One system. One source of truth. Full audit trail."
              },
              {
                role: "AI Engineer",
                hook: "Build once. Deploy everywhere. Let your memory compound."
              },
              {
                role: "CFO/Procurement",
                hook: "Replaces ₹9L of friction. ROI in quarter one."
              },
              {
                role: "Compliance Officer",
                hook: "Governed AI decisions. Full audit trail. Regulatory ready."
              },
              {
                role: "CISO",
                hook: "On-premise option. VPC deployment. No data leaves your network."
              }
            ].map((item, idx) => (
              <div key={idx} className="border border-border rounded-xl p-6 bg-paper hover:border-gold transition-colors">
                <p className="text-xs font-mono text-gold uppercase tracking-wider mb-2">{item.role}</p>
                <p className="text-lg italic text-ink">{item.hook}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 px-4 bg-forest text-paper text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            The AI era needs continuity.
          </h2>
          <p className="text-lg text-paper/75 mb-10">
            Start with one team. Prove value in 30 days. Scale when it's proven.
          </p>
          <button className="px-8 py-3 rounded bg-gold text-forest font-semibold text-base hover:bg-gold-light transition-colors inline-flex items-center gap-2">
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-sm text-paper/50 mt-8">
            Pilot pricing: ₹25,000/month. Includes your first team, all features, 90-day engagement.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest-deep text-paper border-t border-paper/10 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-paper/70">
                <li><a href="#" className="hover:text-paper transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-paper transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-paper transition-colors">Architecture</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-paper/70">
                <li><a href="#" className="hover:text-paper transition-colors">About</a></li>
                <li><a href="#" className="hover:text-paper transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-paper transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-paper/70">
                <li><a href="#" className="hover:text-paper transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-paper transition-colors">API Docs</a></li>
                <li><a href="#" className="hover:text-paper transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-paper/70">
                <li><a href="#" className="hover:text-paper transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-paper transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-paper transition-colors">Security</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-paper/10 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-paper/50 mb-4 md:mb-0">
              © 2026 IntegrateWise. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-paper/70 hover:text-paper transition-colors">Twitter</a>
              <a href="#" className="text-paper/70 hover:text-paper transition-colors">LinkedIn</a>
              <a href="#" className="text-paper/70 hover:text-paper transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
