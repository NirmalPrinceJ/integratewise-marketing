import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Company() {
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
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-4">About</p>
          <h1 className="text-5xl md:text-6xl font-bold text-forest mb-8 leading-tight">
            Building the layer that remembers.
          </h1>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
            IntegrateWise is built by people who experienced AI adoption failure firsthand. We believe the problem isn't AI capability. It's continuity.
          </p>
        </div>
      </section>

      {/* ─── MISSION ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-forest text-paper">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-6">Our Mission</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Memory over models. Continuity over capability.
          </h2>
          <p className="text-lg text-paper/75 leading-relaxed">
            We believe AI adoption is failing not because AI isn't smart enough, but because teams are using it as a one-off tool instead of a continuous operating layer. IntegrateWise changes that. We build the layer that turns AI from a point solution into institutional knowledge.
          </p>
        </div>
      </section>

      {/* ─── VALUES ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-6">Our Values</p>
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-12 leading-tight">
            How we build.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Memory First",
                desc: "Every feature is designed to preserve and compound knowledge. Not just to solve today's problem — but to solve tomorrow's using what you learned today."
              },
              {
                title: "Governance by Default",
                desc: "Humans are in control. AI proposes. You decide. No black boxes. Audit trails on everything. Compliance is built-in, not bolted-on."
              },
              {
                title: "Context > Intelligence",
                desc: "A well-informed human beats an isolated AI every time. We focus on connecting context, not competing on model power."
              },
              {
                title: "Your Data, Your Rules",
                desc: "We don't extract value from your data. We organize it for you. Your business processes stay yours. Your data stays yours."
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-paper-warm border border-border rounded-xl p-8">
                <p className="font-semibold text-forest mb-3 text-lg">{value.title}</p>
                <p className="text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT WE DO ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-paper-warm">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-6">What We Build</p>
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-12 leading-tight">
            The operating layer between your data and your decisions.
          </h2>

          <div className="space-y-8">
            <div className="bg-paper border border-border rounded-xl p-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold font-bold text-lg">1</span>
                </div>
                <div>
                  <p className="font-semibold text-forest mb-2 text-lg">We connect everything</p>
                  <p className="text-muted-foreground">Salesforce, email, Slack, GitHub, Linear, spreadsheets, databases — all unified into one workspace that's actually usable.</p>
                </div>
              </div>
            </div>

            <div className="bg-paper border border-border rounded-xl p-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold font-bold text-lg">2</span>
                </div>
                <div>
                  <p className="font-semibold text-forest mb-2 text-lg">We remember everything</p>
                  <p className="text-muted-foreground">Every decision, every lesson, every outcome — stored and searchable. Your institutional knowledge survives team changes.</p>
                </div>
              </div>
            </div>

            <div className="bg-paper border border-border rounded-xl p-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold font-bold text-lg">3</span>
                </div>
                <div>
                  <p className="font-semibold text-forest mb-2 text-lg">We reason over context</p>
                  <p className="text-muted-foreground">Your Twin analyzes the unified data and learns from your decisions. It gets smarter with every cycle.</p>
                </div>
              </div>
            </div>

            <div className="bg-paper border border-border rounded-xl p-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold font-bold text-lg">4</span>
                </div>
                <div>
                  <p className="font-semibold text-forest mb-2 text-lg">We keep humans in control</p>
                  <p className="text-muted-foreground">AI proposes. You approve. Complete audit trail. Governance is not a feature — it's the foundation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ───────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-forest text-paper text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            We are building the future of work.
          </h2>
          <p className="text-lg text-paper/75 mb-10 leading-relaxed">
            We are currently accepting design partners for the IntegrateWise pilot program. Join us.
          </p>

          <a
            href="mailto:hello@integratewise.ai"
            className="px-8 py-3 rounded bg-gold text-forest font-semibold text-base hover:bg-gold/90 transition-colors inline-flex items-center justify-center gap-2"
          >
            Apply for Pilot
            <ArrowRight className="w-5 h-5" />
          </a>

          <p className="text-sm text-paper/40 mt-6">
            hello@integratewise.ai · invest@integratewise.ai
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
                <li><Link href="/company" className="hover:text-paper transition-colors">About</Link></li>
                <li><a href="mailto:invest@integratewise.ai" className="hover:text-paper transition-colors">Investors</a></li>
                <li><a href="mailto:hello@integratewise.ai" className="hover:text-paper transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-paper">Legal</h4>
              <ul className="space-y-2 text-sm text-paper/60">
                <li><a href="#" className="hover:text-paper transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-paper transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-paper transition-colors">Security</a></li>
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
