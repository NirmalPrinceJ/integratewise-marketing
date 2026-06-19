import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function EngineeringProduct() {
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
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-4">Engineering & Product Solution</p>
          <h1 className="text-5xl md:text-6xl font-bold text-forest mb-8 leading-tight">
            Keep decisions, incidents, and roadmap context connected.
          </h1>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
            Engineering teams lose context with every sprint, incident, or team change. Decisions made last quarter get re-debated. Incident lessons disappear. IntegrateWise maintains the institutional memory that survives personnel and tool changes.
          </p>

          <a
            href="mailto:hello@integratewise.ai"
            className="px-8 py-3 rounded bg-forest text-paper font-semibold hover:bg-forest-deep transition-colors inline-flex items-center gap-2"
          >
            Book a Demo
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* ─── THE PROBLEM ───────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-forest text-paper">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-6">The Reality</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Your team learns the same lesson three times.
          </h2>
          <p className="text-lg text-paper/75 leading-relaxed mb-12">
            Decision made in Q2 about architecture. Incident in Q3 that could have been prevented by that decision. Three people leave. Q1 next year, someone re-opens the same architectural question — not knowing the history. The same decision is debated again.
          </p>

          <div className="bg-white/5 border border-white/20 rounded-xl p-8 mb-12">
            <p className="font-semibold text-paper mb-4">The real cost:</p>
            <ul className="space-y-3 text-paper/80">
              <li className="flex gap-3"><span className="text-gold">•</span> <span>Decisions are re-debated because their context was lost</span></li>
              <li className="flex gap-3"><span className="text-gold">•</span> <span>Incident postmortems don&apos;t prevent future issues</span></li>
              <li className="flex gap-3"><span className="text-gold">•</span> <span>New engineers take weeks to onboard because knowledge isn&apos;t documented</span></li>
              <li className="flex gap-3"><span className="text-gold">•</span> <span>Team turnover means knowledge disappears</span></li>
              <li className="flex gap-3"><span className="text-gold">•</span> <span>Architectural decisions lack the historical reasoning</span></li>
            </ul>
          </div>

          <p className="text-lg text-paper/75 leading-relaxed">
            Your institutional memory is stored in the heads of people who are eventually leaving.
          </p>
        </div>
      </section>

      {/* ─── HOW INTEGRATEWISE FIXES IT ────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-6">How IntegrateWise Fixes It</p>
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-8 leading-tight">
            Your Engineering Twin remembers everything. Even when people leave.
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            IntegrateWise connects Linear, GitHub, Jira, Slack, incident reports, and deployment logs. Your Twin knows:
          </p>

          <div className="space-y-6 mb-12">
            {[
              { label: "Architecture decisions", desc: "Why each decision was made, trade-offs considered, outcomes" },
              { label: "Incident history", desc: "What failed, why it failed, what was learned, what changed" },
              { label: "Sprint context", desc: "Dependencies, blockers, commitments, priority reasoning" },
              { label: "Technical debt", desc: "Where it exists, why it exists, what the cost is" },
              { label: "Roadmap context", desc: "What was planned, why priorities changed, what was learned" },
              { label: "Engineering culture", desc: "Practices, standards, conventions, reasoning behind each one" },
            ].map((item, idx) => (
              <div key={idx} className="bg-paper-warm border border-border rounded-xl p-6">
                <p className="font-semibold text-forest mb-2">{item.label}</p>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-forest-deep rounded-xl p-8 text-paper mb-12">
            <p className="mb-4 font-semibold text-lg">Your new engineering workflow:</p>
            <ol className="space-y-3 text-sm">
              <li className="flex gap-3"><span className="text-gold font-semibold">1.</span> <span>Sprint planning: "What are the blockers?" Your Twin knows what was blocked last sprint and why.</span></li>
              <li className="flex gap-3"><span className="text-gold font-semibold">2.</span> <span>Incident happens: "Why did this fail?" Your Twin references previous related incidents and lessons.</span></li>
              <li className="flex gap-3"><span className="text-gold font-semibold">3.</span> <span>New engineer joins: "What&apos;s the architecture story?" Full context, decisions, trade-offs, outcomes.</span></li>
              <li className="flex gap-3"><span className="text-gold font-semibold">4.</span> <span>Architectural decision: "What did we learn about this before?" History informs new decisions.</span></li>
            </ol>
          </div>

          <div className="bg-gold/10 border border-gold/30 rounded-xl p-8">
            <p className="font-semibold text-forest mb-4">Real example:</p>
            <p className="text-foreground">
              <span className="font-semibold">Without IntegrateWise:</span> Team debated microservices vs monolith. Decision made 18 months ago. Three people who were part of that decision are gone. Someone proposes using microservices for the new feature. Three days of debate. Nobody remembers why they chose monolith the first time.
            </p>
            <p className="text-foreground mt-4">
              <span className="font-semibold">With IntegrateWise:</span> Same proposal. Your Engineering Twin pulls up: "You chose monolith because microservices added complexity without solving the problem you had in Q1 2023. The scalability issue you faced was due to database joins, not service architecture. That's now fixed." Time saved. Better decision. History preserved.
            </p>
          </div>
        </div>
      </section>

      {/* ─── OUTCOMES ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-paper-warm">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-6">Expected Outcomes</p>
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-8 leading-tight">
            What your engineering team will gain.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                stat: "50%",
                desc: "faster onboarding for new engineers"
              },
              {
                stat: "3x",
                desc: "better architectural decisions informed by history"
              },
              {
                stat: "40%",
                desc: "reduction in repeated incidents"
              },
              {
                stat: "100%",
                desc: "incident learnings captured and applied"
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-paper border border-border rounded-xl p-8">
                <p className="text-5xl font-bold text-gold mb-2">{item.stat}</p>
                <p className="text-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed mt-12">
            Your team makes better decisions because they&apos;re informed by complete history. New engineers ramp faster. Incidents become learnings that compound across the organization.
          </p>
        </div>
      </section>

      {/* ─── CTA SECTION ───────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-forest text-paper text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Your team deserves to learn once and remember forever.
          </h2>
          <p className="text-lg text-paper/75 mb-10 leading-relaxed">
            Let&apos;s show you how your Engineering Twin works with IntegrateWise. See how decisions compound instead of repeat.
          </p>

          <a
            href="mailto:hello@integratewise.ai"
            className="px-8 py-3 rounded bg-gold text-forest font-semibold text-base hover:bg-gold/90 transition-colors inline-flex items-center justify-center gap-2"
          >
            Book a Demo
            <ArrowRight className="w-5 h-5" />
          </a>

          <p className="text-sm text-paper/40 mt-6">
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
                <li><Link href="/solutions/engineering-product" className="hover:text-paper transition-colors">Engineering & Product</Link></li>
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
