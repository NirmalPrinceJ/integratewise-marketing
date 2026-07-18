import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function AccountSuccess() {
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
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-4">Account Success Solution</p>
          <h1 className="text-5xl md:text-6xl font-bold text-forest mb-8 leading-tight">
            Know everything about every customer without opening five tools.
          </h1>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
            CSMs spend 30% of their time searching for customer context across disconnected tools. IntegrateWise unifies account history, renewal risks, communication threads, and outcome data into one surface. Your Twin knows the account better than anyone.
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
            Context lives in at least five places.
          </h2>
          <p className="text-lg text-paper/75 leading-relaxed mb-12">
            Your CSM knows the customer. But that knowledge is fragmented: Salesforce has the renewal date and contract terms. Slack has the relationship history. Email has promises made. Support tickets have the truth about what&apos;s actually broken. Spreadsheets have the usage data.
          </p>

          <div className="space-y-6">
            {[
              { name: "Salesforce", problem: "Renewal dates and contract terms — but outdated notes" },
              { name: "Slack", problem: "Relationship texture and recent conversations" },
              { name: "Email", problem: "Promises made, commitments, context, urgency" },
              { name: "Support system", problem: "The real problems customers face" },
              { name: "Spreadsheets", problem: "Usage, adoption, and feature engagement" },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start pb-6 border-b border-paper/20 last:border-0">
                <div className="w-16 h-16 rounded bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs text-gold font-semibold text-center">{item.name}</span>
                </div>
                <p className="text-paper/80">{item.problem}</p>
              </div>
            ))}
          </div>

          <p className="text-lg text-paper/75 leading-relaxed mt-12">
            Your CSM is the integration layer. They spend 45 minutes before every call stitching this together. That time is gone. And the picture is still incomplete.
          </p>
        </div>
      </section>

      {/* ─── THE FRUSTRATIONS ──────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-6">What This Creates</p>
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-8 leading-tight">
            Three failures that hurt renewal rates.
          </h2>

          <div className="space-y-6">
            {[
              {
                title: "Missed renewal risk signals",
                description: "The customer's support tickets show they're struggling. The Slack conversation shows frustration. Salesforce shows usage is down. But nobody sees all three at once. The renewal surprise comes in week 50."
              },
              {
                title: "Generic renewal conversations",
                description: "The renewal call happens without specific context. No awareness of the exact problems they faced. No personalized ROI calculation. No reference to specific outcomes they achieved. It's a checkbox, not a conversation."
              },
              {
                title: "Wasted time repeating yourself",
                description: "The CSM knows the story. The manager knows the story. The customer success team knows the story. But the AI doesn't. Every time they ask for help drafting a renewal notice or success plan, they re-explain the account from scratch."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-paper-warm border border-border rounded-xl p-8">
                <p className="font-semibold text-forest mb-3 text-xl">{item.title}</p>
                <p className="text-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW INTEGRATEWISE FIXES IT ────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-paper-warm">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-6">How IntegrateWise Fixes It</p>
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-8 leading-tight">
            One workspace. Every tool. The full picture.
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            IntegrateWise connects Salesforce, email, Slack, support systems, and usage data into one surface. Your Account Twin knows:
          </p>

          <div className="space-y-6">
            {[
              { label: "The contract", desc: "What was promised, when it expires, what success looks like" },
              { label: "The relationship", desc: "Every conversation, every concern, every win — in order" },
              { label: "The problems", desc: "What they're struggling with, what's working, what needs attention" },
              { label: "The outcomes", desc: "What they've achieved, adoption rate, feature usage" },
              { label: "The risk", desc: "Renewal risk signals. Sentiment changes. Churn indicators." },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="w-12 h-12 rounded bg-gold flex items-center justify-center flex-shrink-0">
                  <span className="text-forest font-bold">{idx + 1}</span>
                </div>
                <div>
                  <p className="font-semibold text-forest mb-1">{item.label}</p>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-forest rounded-xl p-8 text-paper">
            <p className="mb-4 font-semibold text-lg">Your workflow becomes:</p>
            <ol className="space-y-3 text-sm">
              <li className="flex gap-3"><span className="text-gold font-semibold">1.</span> <span>Open IntegrateWise Workbench. See the complete account picture — history, risk, sentiment.</span></li>
              <li className="flex gap-3"><span className="text-gold font-semibold">2.</span> <span>Tell your Twin what you need: renewal notice, success plan, customer check-in email.</span></li>
              <li className="flex gap-3"><span className="text-gold font-semibold">3.</span> <span>Review the proposal. Personalized. Evidence-backed. References specific outcomes.</span></li>
              <li className="flex gap-3"><span className="text-gold font-semibold">4.</span> <span>Approve. IntegrateWise generates the email, updates Salesforce, flags renewal risks.</span></li>
            </ol>
          </div>
        </div>
      </section>

      {/* ─── OUTCOMES ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-forest text-paper">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-6">Expected Outcomes</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            What your CSM team will gain.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                stat: "90%",
                desc: "reduction in pre-call preparation time"
              },
              {
                stat: "4 weeks",
                desc: "earlier risk identification before renewal surprise"
              },
              {
                stat: "3x",
                desc: "more renewal conversations with data support"
              },
              {
                stat: "30%",
                desc: "time saved on account management work"
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 border border-white/20 rounded-xl p-8">
                <p className="text-5xl font-bold text-gold mb-2">{item.stat}</p>
                <p className="text-paper/80">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-lg text-paper/80 leading-relaxed mt-12">
            Your CSM team stops being integration layers and starts being strategists. They have time to build relationships, not assemble information.
          </p>
        </div>
      </section>

      {/* ─── CTA SECTION ───────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-background text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-8 leading-tight">
            Your CSM team is ready for this.
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Let&apos;s show you how Account Success works with IntegrateWise. Book a demo with one of our product partners.
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
