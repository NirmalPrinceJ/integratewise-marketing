import { ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";

export default function Pricing() {
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
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-4">Pricing</p>
          <h1 className="text-5xl md:text-6xl font-bold text-forest mb-8 leading-tight">
            Not per-seat. Not per-message. Based on outcomes.
          </h1>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            IntegrateWise pricing reflects value created, not usage consumed. You pay for context, memory, and approved decisions — not for meetings with a chatbot.
          </p>
        </div>
      </section>

      {/* ─── PRICING MODEL ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-paper-warm">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-6">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-12 leading-tight">
            Pricing for teams that create value.
          </h2>

          <div className="space-y-6 mb-12">
            {[
              {
                title: "Base: Workspace Access",
                description: "Your connected workspace with all tools unified. Memory storage. Twin reasoning. Approval Center. Governance layer.",
                note: "Custom pricing based on team size and data volume"
              },
              {
                title: "Outcomes: Decisions Made",
                description: "Each approved decision executed through Handoff creates value. Pricing scales with your decision velocity.",
                note: "Tiered: 100 decisions/month → 1000+ decisions/month"
              },
              {
                title: "Memory: Institutional Knowledge",
                description: "Searchable memory that compounds over time. Each decision adds to your institutional knowledge base.",
                note: "Included in base pricing; grows with your usage"
              },
              {
                title: "Twin: Context Accuracy",
                description: "Your Twin's accuracy improves with usage. More context fed in = better proposals = higher approval rate.",
                note: "Performance-based: better outcomes, higher value"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-paper border border-border rounded-xl p-8">
                <p className="font-semibold text-forest mb-2 text-lg">{item.title}</p>
                <p className="text-muted-foreground mb-3">{item.description}</p>
                <p className="text-xs text-gold">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ENTERPRISE FOCUS ──────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-forest text-paper">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-6">Plan Details</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
            Built for teams. Priced for value.
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-8">Pilot Program</h3>
              <p className="text-paper/80 mb-8">We are currently accepting 5-10 design partners for the IntegrateWise pilot.</p>
              
              <ul className="space-y-3 mb-8">
                {[
                  "Full platform access",
                  "Unlimited decisions in pilot period",
                  "Direct product team support",
                  "Weekly optimization calls",
                  "6-month pilot engagement"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-gold" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="mailto:hello@integratewise.ai"
                className="w-full px-6 py-3 rounded bg-gold text-forest font-semibold text-center hover:bg-gold/90 transition-colors inline-flex items-center justify-center gap-2"
              >
                Apply for Pilot
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-8">Enterprise</h3>
              <p className="text-paper/80 mb-8">Custom deployment for organizations at scale.</p>
              
              <ul className="space-y-3 mb-8">
                {[
                  "Everything in Pilot +",
                  "Dedicated infrastructure",
                  "SSO & advanced security",
                  "Custom SLA & support",
                  "Compliance & audit features"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-gold" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="mailto:hello@integratewise.ai"
                className="w-full px-6 py-3 rounded border-2 border-paper text-paper font-semibold text-center hover:bg-paper/10 transition-colors"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-6">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-12 leading-tight">
            Common questions about pricing.
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "What if I don't approve all proposals?",
                a: "You pay for executed decisions, not proposals. Rejected proposals don't count toward your decision volume. You control governance."
              },
              {
                q: "Can I scale to enterprise later?",
                a: "Absolutely. Most of our pilots graduate to enterprise plans. We'll work with you on custom arrangements as you grow."
              },
              {
                q: "What's included in workspace access?",
                a: "Workbench (all-tools unified view), Twin reasoning, Memory storage, Approval Center, Handoff preparation, audit trails, and base integrations."
              },
              {
                q: "Are there setup or implementation fees?",
                a: "For pilots: no setup fees. We handle onboarding as part of the pilot engagement. Enterprise deployments include custom implementation."
              },
              {
                q: "Can I customize my tier?",
                a: "Yes. Pricing is flexible based on your needs, team size, decision volume, and data requirements. Contact sales for custom pricing."
              },
              {
                q: "What about compliance and security?",
                a: "Both are included. All tiers include audit trails, approval logs, and standard security. Enterprise includes advanced compliance, SSO, and custom SLAs."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-paper-warm border border-border rounded-xl p-6">
                <p className="font-semibold text-forest mb-2">{item.q}</p>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ───────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-forest text-paper text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Ready to explore pricing options?
          </h2>
          <p className="text-lg text-paper/75 mb-10 leading-relaxed">
            We&apos;ll work with you to find the right plan. Talk to our team about your specific needs and use case.
          </p>

          <a
            href="mailto:hello@integratewise.ai"
            className="px-8 py-3 rounded bg-gold text-forest font-semibold text-base hover:bg-gold/90 transition-colors inline-flex items-center justify-center gap-2"
          >
            Book a Call
            <ArrowRight className="w-5 h-5" />
          </a>

          <p className="text-sm text-paper/40 mt-6">
            hello@integratewise.ai · We respond within 24 hours
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
                <li><a href="#" className="hover:text-paper transition-colors">Contact</a></li>
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
