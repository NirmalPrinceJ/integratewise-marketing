import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function AIGovernance() {
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
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-4">AI Governance Solution</p>
          <h1 className="text-5xl md:text-6xl font-bold text-forest mb-8 leading-tight">
            AI proposes. Humans approve. Every decision auditable.
          </h1>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
            AI is powerful, but teams can&apos;t deploy it at scale without governance. IntegrateWise&apos;s Governance Gates ensure every proposed action is reviewed, evidence is shown, and outcomes are tracked. No black boxes. No surprises. Complete audit trail.
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
            You cannot deploy AI at scale without governance.
          </h2>
          <p className="text-lg text-paper/75 leading-relaxed mb-12">
            AI can make proposals, but every proposal touches real business outcomes. Revenue impact. Customer communications. Financial decisions. Compliance risk. Yet most AI deployments are black boxes: you don&apos;t know what ran, why it ran, or what the evidence was.
          </p>

          <div className="bg-white/5 border border-white/20 rounded-xl p-8 mb-12">
            <p className="font-semibold text-paper mb-4">The real risks:</p>
            <ul className="space-y-3 text-paper/80">
              <li className="flex gap-3"><span className="text-gold">•</span> <span>High-stakes AI decisions made without human review</span></li>
              <li className="flex gap-3"><span className="text-gold">•</span> <span>No audit trail for regulatory or compliance review</span></li>
              <li className="flex gap-3"><span className="text-gold">•</span> <span>No way to learn from failed or wrong proposals</span></li>
              <li className="flex gap-3"><span className="text-gold">•</span> <span>No visibility into what AI is actually proposing</span></li>
              <li className="flex gap-3"><span className="text-gold">•</span> <span>Black box decision-making is trust-destroying</span></li>
            </ul>
          </div>

          <p className="text-lg text-paper/75 leading-relaxed">
            You either scale AI and lose control, or maintain control and don&apos;t scale AI. There shouldn&apos;t be that trade-off.
          </p>
        </div>
      </section>

      {/* ─── HOW INTEGRATEWISE FIXES IT ────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-6">How IntegrateWise Fixes It</p>
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-8 leading-tight">
            Governance Gates. Every proposal. Full visibility. Complete control.
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            IntegrateWise doesn&apos;t execute decisions. It prepares proposals. Every proposal sits behind Governance Gates where humans review, approve, or reject before anything moves.
          </p>

          <div className="space-y-6 mb-12">
            {[
              { label: "The proposal", desc: "What is IntegrateWise suggesting? What data informed it? What are the risks?" },
              { label: "The reasoning", desc: "Why this proposal? What evidence supports it? What were the alternatives?" },
              { label: "The audit trail", desc: "Who approved? When? What changed? What actually executed?" },
              { label: "The outcome", desc: "Did it work? What happened after approval? What was learned?" },
              { label: "The rejection history", desc: "What proposals failed? Why were they rejected? What&apos;s the pattern?" },
            ].map((item, idx) => (
              <div key={idx} className="bg-paper-warm border border-border rounded-xl p-6">
                <p className="font-semibold text-forest mb-2">{item.label}</p>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-forest-deep rounded-xl p-8 text-paper mb-12">
            <p className="mb-4 font-semibold text-lg">How it works in practice:</p>
            <ol className="space-y-3 text-sm">
              <li className="flex gap-3"><span className="text-gold font-semibold">1.</span> <span>Your Silent Twin proposes an action. Send customer an upsell. Update a deal status. Flag a renewal risk.</span></li>
              <li className="flex gap-3"><span className="text-gold font-semibold">2.</span> <span>Proposal sits behind Governance Gates. You see: what&apos;s proposed, the evidence, the reasoning.</span></li>
              <li className="flex gap-3"><span className="text-gold font-semibold">3.</span> <span>You approve or reject. You decide. Nothing is automatic.</span></li>
              <li className="flex gap-3"><span className="text-gold font-semibold">4.</span> <span>If approved: action executes in your system. If rejected: you learn from it.</span></li>
              <li className="flex gap-3"><span className="text-gold font-semibold">5.</span> <span>Complete audit trail. Every decision. Every outcome. Forever.</span></li>
            </ol>
          </div>

          <div className="bg-gold/10 border border-gold/30 rounded-xl p-8">
            <p className="font-semibold text-forest mb-4">Real example:</p>
            <p className="text-foreground">
              <span className="font-semibold">Without IntegrateWise:</span> You deploy AI to send upsell offers. You don&apos;t review each one. Some go out to customers mid-contract. Some are tone-deaf. Some are profitable. Weeks later, you realize the system has been sending thousands of offers but you have no visibility into which are working or why.
            </p>
            <p className="text-foreground mt-4">
              <span className="font-semibold">With IntegrateWise:</span> Your Silent Twin proposes an upsell. You see: "Recommended Acme Corp for Feature X upgrade. They&apos;re 40% through current contract. Usage shows they need it. Similar customers had 60% acceptance at this point. Estimated MRR impact: +$5k." You approve or reject. Every proposal tracked. You scale confidently.
            </p>
          </div>
        </div>
      </section>

      {/* ─── OUTCOMES ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-paper-warm">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-6">Expected Outcomes</p>
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-8 leading-tight">
            What your organization will gain.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                stat: "100%",
                desc: "visibility into AI-proposed decisions"
              },
              {
                stat: "Complete",
                desc: "audit trail for compliance and learning"
              },
              {
                stat: "Scale AI",
                desc: "while maintaining human control"
              },
              {
                stat: "Continuous",
                desc: "improvement through proposal analysis"
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-paper border border-border rounded-xl p-8">
                <p className="text-4xl font-bold text-gold mb-2">{item.stat}</p>
                <p className="text-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed mt-12">
            You deploy AI with confidence. Every decision is reviewed. Every action is tracked. You scale AI without losing trust. Compliance becomes automatic. Learning compounds.
          </p>
        </div>
      </section>

      {/* ─── THE ADVANTAGE ──────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-6">Why It Matters</p>
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-8 leading-tight">
            Governance is competitive advantage.
          </h2>

          <div className="space-y-6">
            {[
              {
                title: "Compliance by design",
                description: "Audit trail is built in. Regulatory review becomes easier. Compliance becomes a feature, not a burden."
              },
              {
                title: "Trust scales with velocity",
                description: "Your team trusts AI because they see the evidence. That trust compounds as proposals get better. You can scale AI confidently."
              },
              {
                title: "Learning is continuous",
                description: "Every proposal — approved or rejected — teaches the system. Proposal quality improves over time. Your competitive advantage compounds."
              },
              {
                title: "Risk stays manageable",
                description: "High-stakes decisions are reviewed. Low-stakes proposals are approved automatically based on your rules. You choose the governance level."
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-paper-warm border border-border rounded-xl p-8">
                <p className="font-semibold text-forest mb-2 text-lg">{item.title}</p>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ───────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-forest text-paper text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Scale AI without losing control.
          </h2>
          <p className="text-lg text-paper/75 mb-10 leading-relaxed">
            Let&apos;s show you how AI Governance works with IntegrateWise. See how you can scale AI confidently, compliantly, and continuously.
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
                <li><Link href="/solutions/ai-governance" className="hover:text-paper transition-colors">AI Governance</Link></li>
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
