import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Solutions() {
  const solutions = [
    {
      id: "account-success",
      name: "Account Success",
      tagline: "Know everything about every customer without opening five tools.",
      description: "CSMs spend 30% of their time searching for customer context across disconnected tools. IntegrateWise unifies account history, renewal risks, communication threads, and outcome data into one surface. Your Twin knows the account better than anyone.",
      problems: [
        "Finding customer context across Salesforce, Slack, email, and spreadsheets",
        "Missing renewal risk signals buried in support tickets",
        "Re-briefing on customer history in every interaction",
        "Forgetting what was promised in previous calls"
      ],
      outcomes: [
        "90% reduction in pre-call preparation time",
        "Proactive identification of renewal risks",
        "Consistent customer narrative across the team",
        "Data-driven renewal conversations"
      ]
    },
    {
      id: "sales-continuity",
      name: "Sales Continuity",
      tagline: "Never re-brief AI on a customer again.",
      description: "Reps spend 45 minutes re-explaining customer context to AI before getting a usable proposal draft. With IntegrateWise, your Twin knows every deal, every objection pattern, every customer preference. Brief it once. It remembers forever.",
      problems: [
        "Re-briefing AI on the same customer across sessions",
        "Generic proposals that ignore customer history",
        "Missed upsell opportunities due to siloed data",
        "Lost context when reps or deals change hands"
      ],
      outcomes: [
        "10x faster proposal generation",
        "Personalized proposals that reference customer specifics",
        "Improved win rates through context-aware positioning",
        "Seamless handoffs when reps leave or deals transfer"
      ]
    },
    {
      id: "founder-ops",
      name: "Founder & Business Operations",
      tagline: "One place to understand what is happening.",
      description: "Founders wear five hats and lack cross-functional visibility. Engineering done? Runway left? Sales pipeline health? Customer issues? IntegrateWise creates an Executive Twin that synthesizes data from every department into one coherent picture.",
      problems: [
        "Information scattered across 10+ departmental tools",
        "No unified view of business health",
        "Missing early warning signals in customer sentiment or runway",
        "Time spent reconciling conflicting data sources"
      ],
      outcomes: [
        "Real-time visibility into business metrics across functions",
        "Early warning system for risks and opportunities",
        "Executive briefings prepared automatically",
        "Data-driven decision-making in minutes, not hours"
      ]
    },
    {
      id: "engineering-product",
      name: "Engineering & Product",
      tagline: "Keep decisions, incidents, and roadmap context connected.",
      description: "Engineering teams lose context with every sprint, incident, or team change. Decisions made last quarter get re-debated. Incident lessons disappear. IntegrateWise maintains the institutional memory that survives personnel and tool changes.",
      problems: [
        "Decisions made and then re-debated because context was lost",
        "Incident postmortems that don't prevent future issues",
        "Onboarding new engineers takes weeks because knowledge isn't documented",
        "Roadmap decisions lack historical context"
      ],
      outcomes: [
        "Institutional memory that survives team turnover",
        "Faster incident resolution through historical context",
        "Reduced onboarding time for new engineers",
        "Better architectural decisions informed by past learnings"
      ]
    },
    {
      id: "ai-governance",
      name: "AI Governance",
      tagline: "AI proposes. Humans approve. Every decision auditable.",
      description: "AI is powerful, but teams can't deploy it at scale without governance. IntegrateWise's Governance Gates ensure every proposed action is reviewed, evidence is shown, and outcomes are tracked. No black boxes. No surprises. Complete audit trail.",
      problems: [
        "Can't trust AI with high-stakes decisions without review",
        "No audit trail for decisions made or actions taken",
        "Regulatory and compliance risk from uncontrolled AI",
        "No way to learn from failed proposals"
      ],
      outcomes: [
        "Safe AI deployment with full human oversight",
        "Complete audit trail for compliance and learning",
        "Confidence in delegating high-stakes decisions",
        "Continuous improvement through proposal analysis"
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
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <a href="/#solutions" className="hover:text-foreground transition-colors">Solutions</a>
            <a href="/#platform" className="hover:text-foreground transition-colors">Platform</a>
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
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-8">Solutions</p>
          <h1 className="text-5xl md:text-6xl font-bold text-forest mb-8 leading-tight">
            Continuity by outcome.
          </h1>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
            IntegrateWise solves one cross-functional problem: context loss. Here is how it shows up in your work.
          </p>
        </div>
      </section>

      {/* ─── SOLUTIONS GRID ────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-paper-warm">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, idx) => (
              <Link key={idx} href={`/solutions/${solution.id}`}>
                <a className="block bg-paper border border-border rounded-xl p-6 hover:border-gold transition-all hover:shadow-lg relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gold cursor-pointer">
                  <p className="font-semibold text-forest mb-3 text-lg">{solution.name}</p>
                  <p className="text-sm text-foreground mb-4">{solution.tagline}</p>
                  <p className="text-xs text-gold font-medium inline-flex items-center gap-1">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </p>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ───────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-forest text-paper text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Every outcome starts with remembering.
          </h2>
          <p className="text-lg text-paper/75 mb-10 leading-relaxed">
            Pick the solution that matches your team. Let&apos;s show you how.
          </p>

          <a
            href="mailto:hello@integratewise.ai"
            className="px-8 py-3 rounded bg-gold text-forest font-semibold text-base hover:bg-gold/90 transition-colors inline-flex items-center justify-center gap-2"
          >
            Apply for Pilot
            <ArrowRight className="w-5 h-5" />
          </a>
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
                <li><Link href="/solutions/engineering-product" className="hover:text-paper transition-colors">Engineering & Product</Link></li>
                <li><Link href="/solutions/ai-governance" className="hover:text-paper transition-colors">AI Governance</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-paper">Company</h4>
              <ul className="space-y-2 text-sm text-paper/60">
                <li><Link href="/" className="hover:text-paper transition-colors">Home</Link></li>
                <li><a href="#" className="hover:text-paper transition-colors">About</a></li>
                <li><a href="mailto:invest@integratewise.ai" className="hover:text-paper transition-colors">Investors</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-paper">Legal</h4>
              <ul className="space-y-2 text-sm text-paper/60">
                <li><a href="#" className="hover:text-paper transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-paper transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-paper transition-colors">Security</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-paper/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-paper/40">© 2026 IntegrateWise LLP. All rights reserved.</p>
            <p className="text-sm text-paper/40">integratewise.ai</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
