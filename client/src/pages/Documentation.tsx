import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function Documentation() {
  const [expandedSection, setExpandedSection] = useState<string | null>("getting-started");

  const sections = [
    {
      id: "getting-started",
      title: "Getting Started",
      items: [
        { title: "Create Your Workspace", desc: "Set up your IntegrateWise workspace and connect your first tools." },
        { title: "Connect Your Tools", desc: "Integrate Salesforce, email, Slack, GitHub, and other systems." },
        { title: "Brief Your Twin", desc: "Teach your Twin about your business, context, and rules." },
        { title: "Your First Decision", desc: "Walk through making your first approved decision." }
      ]
    },
    {
      id: "concepts",
      title: "Core Concepts",
      items: [
        { title: "Workbench", desc: "Your unified workspace connecting all your tools and data." },
        { title: "Twin", desc: "Your AI layer that reasons over context and proposes decisions." },
        { title: "Memory", desc: "Your searchable knowledge base of decisions and learnings." },
        { title: "Approval Center", desc: "Where every proposal is reviewed before execution." },
        { title: "Handoff", desc: "How decisions get executed in your existing systems." }
      ]
    },
    {
      id: "integrations",
      title: "Integrations",
      items: [
        { title: "CRM Integrations", desc: "Connect Salesforce, HubSpot, Pipedrive, and others." },
        { title: "Communication", desc: "Integrate Slack, email, Microsoft Teams." },
        { title: "Project Management", desc: "Connect Linear, Jira, Asana, Monday.com." },
        { title: "Developer Tools", desc: "GitHub, GitLab, and other development platforms." },
        { title: "Data Platforms", desc: "Connect databases, data warehouses, and BI tools." }
      ]
    },
    {
      id: "best-practices",
      title: "Best Practices",
      items: [
        { title: "Memory Organization", desc: "How to structure your institutional knowledge for maximum value." },
        { title: "Decision Templates", desc: "Creating reusable templates for common decisions." },
        { title: "Approval Workflows", desc: "Setting up governance that scales without blocking." },
        { title: "Team Onboarding", desc: "Bringing new team members into the Twin's context." },
        { title: "Continuity Patterns", desc: "Establishing patterns that compound learning over time." }
      ]
    },
    {
      id: "api",
      title: "API Reference",
      items: [
        { title: "Authentication", desc: "How to authenticate with the IntegrateWise API." },
        { title: "Workbench Queries", desc: "Query unified data across your connected tools." },
        { title: "Twin Proposals", desc: "Request proposals from your Twin programmatically." },
        { title: "Approval Workflows", desc: "Approve or reject proposals via API." },
        { title: "Memory Search", desc: "Search your institutional knowledge base." }
      ]
    },
    {
      id: "troubleshooting",
      title: "Troubleshooting",
      items: [
        { title: "Integration Issues", desc: "Debugging tool connection problems." },
        { title: "Twin Not Learning", desc: "Why your Twin might not be improving as expected." },
        { title: "Approval Bottlenecks", desc: "Fixing approval workflows that are too slow." },
        { title: "Memory Queries", desc: "Getting better results from your knowledge base." },
        { title: "Performance Optimization", desc: "Speeding up your workspace." }
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
            <Link href="/platform" className="hover:text-foreground transition-colors">Platform</Link>
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
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-4">Documentation</p>
          <h1 className="text-5xl md:text-6xl font-bold text-forest mb-8 leading-tight">
            Get the most from IntegrateWise.
          </h1>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
            Complete guides, API reference, best practices, and troubleshooting to help you build your operating layer.
          </p>
        </div>
      </section>

      {/* ─── SEARCH BAR ────────────────────────────────────────────────── */}
      <section className="py-8 px-4 bg-paper-warm border-b border-border">
        <div className="max-w-4xl mx-auto">
          <input
            type="text"
            placeholder="Search documentation..."
            className="w-full px-4 py-3 rounded bg-paper border border-border focus:outline-none focus:border-gold"
          />
        </div>
      </section>

      {/* ─── DOCUMENTATION SECTIONS ────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {sections.map((section) => (
              <div key={section.id} className="border border-border rounded-xl overflow-hidden">
                {/* Section header */}
                <button
                  onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                  className="w-full px-8 py-6 bg-paper-warm hover:bg-paper transition-colors text-left flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <BookOpen className="w-6 h-6 text-gold flex-shrink-0" />
                    <p className="font-semibold text-forest text-lg">{section.title}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{section.items.length} items</p>
                </button>

                {/* Section items */}
                {expandedSection === section.id && (
                  <div className="bg-background border-t border-border divide-y divide-border">
                    {section.items.map((item, idx) => (
                      <div key={idx} className="px-8 py-6 hover:bg-paper-warm/50 transition-colors">
                        <p className="font-semibold text-forest mb-2">{item.title}</p>
                        <p className="text-muted-foreground text-sm mb-3">{item.desc}</p>
                        <a href="#" className="text-xs text-gold font-medium hover:text-gold/80 transition-colors">
                          View documentation →
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ───────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-forest text-paper text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Still have questions?
          </h2>
          <p className="text-lg text-paper/75 mb-10 leading-relaxed">
            Our team is here to help. Reach out to us for any questions or setup assistance.
          </p>

          <a
            href="mailto:hello@integratewise.ai"
            className="px-8 py-3 rounded bg-gold text-forest font-semibold text-base hover:bg-gold/90 transition-colors inline-flex items-center justify-center gap-2"
          >
            Get Help
            <ArrowRight className="w-5 h-5" />
          </a>

          <p className="text-sm text-paper/40 mt-6">
            hello@integratewise.ai · Available for pilots and design partners
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
              <h4 className="font-bold mb-4 text-paper">Product</h4>
              <ul className="space-y-2 text-sm text-paper/60">
                <li><Link href="/solutions" className="hover:text-paper transition-colors">Solutions</Link></li>
                <li><Link href="/platform" className="hover:text-paper transition-colors">Platform</Link></li>
                <li><Link href="/pricing" className="hover:text-paper transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-paper">Company</h4>
              <ul className="space-y-2 text-sm text-paper/60">
                <li><Link href="/" className="hover:text-paper transition-colors">Home</Link></li>
                <li><Link href="/company" className="hover:text-paper transition-colors">About</Link></li>
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
