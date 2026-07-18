import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function FounderOps() {
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
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-4">Founder & Ops Solution</p>
          <h1 className="text-5xl md:text-6xl font-bold text-forest mb-8 leading-tight">
            One place to understand what is happening.
          </h1>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
            Founders wear five hats and lack cross-functional visibility. Engineering done? Runway left? Sales pipeline health? Customer issues? IntegrateWise creates an Executive Twin that synthesizes data from every department into one coherent picture.
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
            You are managing ten dashboards. None of them talk to each other.
          </h2>
          <p className="text-lg text-paper/75 leading-relaxed mb-12">
            Stripe for runway. Amplitude for product metrics. Linear for engineering progress. Slack for team sentiment. Gmail for investor updates. Notion for strategy. Salesforce for pipeline. Support tickets for customer health. Spreadsheets for metrics that don&apos;t fit anywhere else.
          </p>

          <div className="bg-white/5 border border-white/20 rounded-xl p-8 mb-12">
            <p className="font-semibold text-paper mb-4">The real cost:</p>
            <ul className="space-y-3 text-paper/80">
              <li className="flex gap-3"><span className="text-gold">•</span> <span>2 hours every Monday reconciling conflicting data</span></li>
              <li className="flex gap-3"><span className="text-gold">•</span> <span>Missing warning signals because you&apos;re not watching all dashboards</span></li>
              <li className="flex gap-3"><span className="text-gold">•</span> <span>Making decisions with incomplete information</span></li>
              <li className="flex gap-3"><span className="text-gold">•</span> <span>Repeating context in every board meeting</span></li>
              <li className="flex gap-3"><span className="text-gold">•</span> <span>Your mental load is the single point of failure</span></li>
            </ul>
          </div>

          <p className="text-lg text-paper/75 leading-relaxed">
            You are the integration layer between your own company&apos;s systems.
          </p>
        </div>
      </section>

      {/* ─── HOW INTEGRATEWISE FIXES IT ────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-6">How IntegrateWise Fixes It</p>
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-8 leading-tight">
            Your Executive Twin sees it all. And explains what it means.
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            IntegrateWise connects Stripe, Salesforce, Amplitude, Linear, Slack, email, and every metric source into one workspace. Your Twin synthesizes across all of it:
          </p>

          <div className="space-y-6 mb-12">
            {[
              { label: "Business health", desc: "Runway, burn rate, unit economics, growth rate — one view" },
              { label: "Product progress", desc: "Features shipped, key metrics, adoption, churn signals" },
              { label: "Sales pipeline", desc: "ARR, deal stage, velocity, win rates by segment" },
              { label: "Customer health", desc: "NPS, churn risk, support escalations, upsell opportunities" },
              { label: "Team sentiment", desc: "Turnover risk signals, blocked progress, morale indicators" },
              { label: "Capital efficiency", desc: "Burn, MRR, CAC, LTV — and how they connect" },
            ].map((item, idx) => (
              <div key={idx} className="bg-paper-warm border border-border rounded-xl p-6">
                <p className="font-semibold text-forest mb-2">{item.label}</p>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-forest-deep rounded-xl p-8 text-paper mb-12">
            <p className="mb-4 font-semibold text-lg">Your new CEO workflow:</p>
            <ol className="space-y-3 text-sm">
              <li className="flex gap-3"><span className="text-gold font-semibold">1.</span> <span>Monday morning: "What&apos;s the business status?" Your Twin gives the coherent picture — health, risks, opportunities.</span></li>
              <li className="flex gap-3"><span className="text-gold font-semibold">2.</span> <span>Before board meeting: "Prepare my board deck." It synthesizes data from every department with context.</span></li>
              <li className="flex gap-3"><span className="text-gold font-semibold">3.</span> <span>Mid-week: "What changed since Monday?" It highlights signals and flags issues early.</span></li>
              <li className="flex gap-3"><span className="text-gold font-semibold">4.</span> <span>When making decisions: Every choice is informed by complete, synthesized data — not mental model.</span></li>
            </ol>
          </div>

          <div className="bg-gold/10 border border-gold/30 rounded-xl p-8">
            <p className="font-semibold text-forest mb-4">Real example:</p>
            <p className="text-foreground">
              <span className="font-semibold">Without IntegrateWise:</span> You check Stripe (oh, burn rate is up), Linear (team is blocked on infrastructure), Salesforce (pipeline is weak), and Slack (three key people are interviewing elsewhere). You spend an hour connecting these dots. Then you realize the blocked infrastructure is why sales pipeline is weak — and the team is leaving because they&apos;re frustrated.
            </p>
            <p className="text-foreground mt-4">
              <span className="font-semibold">With IntegrateWise:</span> Your Executive Twin flags immediately: "Infrastructure blocker is impacting sales velocity and team morale is at risk. Runway impact in 4 months if not fixed." You see the connection instantly and make the right call.
            </p>
          </div>
        </div>
      </section>

      {/* ─── OUTCOMES ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-paper-warm">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-6">Expected Outcomes</p>
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-8 leading-tight">
            What your leadership will gain.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                stat: "10 hours",
                desc: "per week regained from dashboard reconciliation"
              },
              {
                stat: "80%",
                desc: "faster board preparation with complete context"
              },
              {
                stat: "30 days",
                desc: "earlier warning on key business risks"
              },
              {
                stat: "100%",
                desc: "coherent business narrative every meeting"
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-paper border border-border rounded-xl p-8">
                <p className="text-5xl font-bold text-gold mb-2">{item.stat}</p>
                <p className="text-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed mt-12">
            You stop reconciling dashboards and start making better decisions. Your team sees coherent business narrative instead of fragmented data. Your board gets comprehensive context instead of guesses.
          </p>
        </div>
      </section>

      {/* ─── CTA SECTION ───────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-forest text-paper text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            This is how you scale without losing control.
          </h2>
          <p className="text-lg text-paper/75 mb-10 leading-relaxed">
            Let&apos;s show you how your Executive Twin works with IntegrateWise. See the coherent picture of your business.
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
