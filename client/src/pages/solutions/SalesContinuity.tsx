import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function SalesContinuity() {
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
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-4">Sales Solution</p>
          <h1 className="text-5xl md:text-6xl font-bold text-forest mb-8 leading-tight">
            Never re-brief AI on a customer again.
          </h1>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
            Reps spend 45 minutes re-explaining customer context to AI before getting a usable proposal draft. With IntegrateWise, your Twin knows every deal, every objection pattern, every customer preference. Brief it once. It remembers forever.
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
            AI made proposals 10% faster. But reps still spend 45 minutes briefing it.
          </h2>
          <p className="text-lg text-paper/75 leading-relaxed mb-12">
            Here&apos;s what actually happens: Rep writes detailed context about the customer. Industry. Use case. Budget constraints. Objections they raised last call. Competitive threat. Then — AI generates a generic proposal. Rep rewrites it. The context was lost the moment they submitted it.
          </p>

          <div className="bg-white/5 border border-white/20 rounded-xl p-8 mb-12">
            <p className="font-semibold text-paper mb-4">The real cost:</p>
            <ul className="space-y-3 text-paper/80">
              <li className="flex gap-3"><span className="text-gold">•</span> <span>45 minutes of prep before AI can help</span></li>
              <li className="flex gap-3"><span className="text-gold">•</span> <span>Generic proposals that don&apos;t reference specifics</span></li>
              <li className="flex gap-3"><span className="text-gold">•</span> <span>Missing upsell opportunities because context is siloed</span></li>
              <li className="flex gap-3"><span className="text-gold">•</span> <span>When the rep leaves, all that context vanishes</span></li>
              <li className="flex gap-3"><span className="text-gold">•</span> <span>When deals transfer, the new rep starts from zero</span></li>
            </ul>
          </div>

          <p className="text-lg text-paper/75 leading-relaxed">
            The rep isn&apos;t using AI faster. They&apos;re wasting time on the same work, just differently.
          </p>
        </div>
      </section>

      {/* ─── HOW INTEGRATEWISE FIXES IT ────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-6">How IntegrateWise Fixes It</p>
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-8 leading-tight">
            Brief your Twin once. It remembers forever.
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            IntegrateWise connects your CRM, email, Slack, and deal docs into one memory. Your Sales Twin knows:
          </p>

          <div className="space-y-6 mb-12">
            {[
              { label: "Customer DNA", desc: "Industry, company size, use case, pain points" },
              { label: "Deal history", desc: "Every conversation, objection, commitment" },
              { label: "Competitive context", desc: "Who they&apos;re comparing you to, what they said about competitors" },
              { label: "Budget reality", desc: "What they said they could spend. Approval process. Timeline." },
              { label: "Relationship texture", desc: "Who&apos;s excited. Who&apos;s skeptical. Who&apos;s the actual decision maker." },
              { label: "Upsell patterns", desc: "What similar customers bought. What this one might need next." },
            ].map((item, idx) => (
              <div key={idx} className="bg-paper-warm border border-border rounded-xl p-6">
                <p className="font-semibold text-forest mb-2">{item.label}</p>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-forest-deep rounded-xl p-8 text-paper mb-12">
            <p className="mb-4 font-semibold text-lg">New workflow:</p>
            <ol className="space-y-3 text-sm">
              <li className="flex gap-3"><span className="text-gold font-semibold">1.</span> <span>First call: Give your Twin the customer context. Once. In full.</span></li>
              <li className="flex gap-3"><span className="text-gold font-semibold">2.</span> <span>Next call: Say "draft the proposal." It references their exact objections, budget constraints, and use case.</span></li>
              <li className="flex gap-3"><span className="text-gold font-semibold">3.</span> <span>Follow-up: "Generate a personalized objection response." Your Twin references what they actually said, not generic rebuttals.</span></li>
              <li className="flex gap-3"><span className="text-gold font-semibold">4.</span> <span>Context persists: When the deal transfers, the new rep inherits the full context. No restart.</span></li>
            </ol>
          </div>

          <div className="bg-gold/10 border border-gold/30 rounded-xl p-8">
            <p className="font-semibold text-forest mb-4">Real example:</p>
            <p className="text-foreground mb-4">
              <span className="font-semibold">Old way:</span> "Help me draft a proposal for Acme Corp" → AI asks for context → Rep spends 20 minutes explaining → Generic template
            </p>
            <p className="text-foreground">
              <span className="font-semibold">With IntegrateWise:</span> "Draft proposal" → Twin generates proposal mentioning: Acme&apos;s specific pain point (data silos), their budget (500k), their timeline (EOQ), their CEO&apos;s concerns (governance), even a reference to the exact objection they raised → Done in 30 seconds
            </p>
          </div>
        </div>
      </section>

      {/* ─── OUTCOMES ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-paper-warm">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-6">Expected Outcomes</p>
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-8 leading-tight">
            What your sales team will gain.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                stat: "10x",
                desc: "faster proposal generation with context"
              },
              {
                stat: "3x",
                desc: "higher proposal acceptance rates"
              },
              {
                stat: "25%",
                desc: "increase in win rate through better positioning"
              },
              {
                stat: "4 weeks",
                desc: "faster ramp for new sales reps"
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-paper border border-border rounded-xl p-8">
                <p className="text-5xl font-bold text-gold mb-2">{item.stat}</p>
                <p className="text-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed mt-12">
            Your reps stop being AI trainers and start being deal closers. Deals inherit context even when reps leave. Upsells surface automatically. Every proposal is custom, not templated.
          </p>
        </div>
      </section>

      {/* ─── CTA SECTION ───────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-forest text-paper text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Your sales team is ready for this.
          </h2>
          <p className="text-lg text-paper/75 mb-10 leading-relaxed">
            Let&apos;s show you how Sales Continuity works with IntegrateWise. See how your reps gain 10 hours per week.
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
