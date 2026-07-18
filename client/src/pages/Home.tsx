import { ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";
import { updateMetaTags, SITE_METADATA } from "../lib/seo";

export default function Home() {
  useEffect(() => {
    updateMetaTags(SITE_METADATA.home);
  }, []);

  return (
    <div className="bg-background text-foreground">

      {/* ─── NAVIGATION ─────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/92 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between py-4 px-6 max-w-7xl mx-auto">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 hover:opacity-75 transition-opacity">
            <div className="w-8 h-8 rounded bg-forest flex items-center justify-center">
              <span className="text-paper font-bold text-sm">IW</span>
            </div>
            <span className="font-semibold text-forest hidden sm:inline">IntegrateWise</span>
          </a>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="/solutions" className="hover:text-foreground transition-colors">Solutions</Link>
            <Link href="/platform" className="hover:text-foreground transition-colors">Platform</Link>
            <Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link>
            <Link href="/company" className="hover:text-foreground transition-colors">Company</Link>
          </div>

          {/* CTA */}
          <a
            href="mailto:hello@integratewise.ai"
            className="px-4 py-2 rounded bg-forest text-paper font-medium text-sm hover:bg-forest-deep transition-colors"
          >
            Start Free
          </a>
        </div>
      </nav>

      {/* ─── SECTION 1 · HERO ───────────────────────────────────────────── */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">

          {/* Tag line */}
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-8">
            One Auth · Every Capability · Everywhere You Work
          </p>

          {/* H1 */}
          <h1 className="text-5xl md:text-6xl font-bold text-forest mb-6 leading-tight max-w-3xl">
            Your Last Auth to Complete Your <span className="text-gold">Ecosystem.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-2xl text-forest font-medium mb-6 max-w-2xl">
            One authentication. Every capability. Everywhere you work.
          </p>

          {/* Sub */}
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
            Connect your AI, business applications, and teams into a single operational capability fabric. Stay in ChatGPT, Claude, Hermes, or your Workbench while IntegrateWise securely executes work across your connected ecosystem.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a
              href="mailto:hello@integratewise.ai"
              className="px-8 py-3 rounded bg-forest text-paper font-semibold hover:bg-forest-deep transition-colors inline-flex items-center gap-2"
            >
              Start Free
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="mailto:hello@integratewise.ai?subject=Demo%20Request"
              className="px-8 py-3 rounded font-semibold border-2 border-forest text-forest hover:bg-forest hover:text-paper transition-colors"
            >
              Watch Demo
            </a>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2 · WHAT INTEGRATEWISE DOES ───────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-forest text-paper" id="what-it-does">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-6">What IntegrateWise Does</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            You ask. It executes.
          </h2>
          <p className="text-lg text-paper/75 leading-relaxed mb-12">
            Instead of moving between dozens of applications, your AI gains governed access to the capabilities you already own.
          </p>

          {/* Terminal-style intent block */}
          <div className="bg-forest-deep border border-white/10 rounded-xl p-8 font-mono text-sm">
            <p className="text-paper/50 mb-4">You ask.</p>
            <div className="space-y-2 mb-8">
              {[
                '"Email Sarah."',
                '"Create a GitHub issue."',
                '"Find the Q4 roadmap."',
                '"Schedule a follow-up."',
              ].map((line, idx) => (
                <p key={idx} className="text-gold">{line}</p>
              ))}
            </div>
            <div className="border-t border-white/10 pt-6 space-y-2">
              {[
                "IntegrateWise securely resolves the intent,",
                "selects the right provider,",
                "executes the action,",
                "and maintains operational continuity.",
              ].map((line, idx) => (
                <p key={idx} className="text-paper/70">{line}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3 · THE OPERATIONAL CAPABILITY PLATFORM ───────────── */}
      <section className="py-20 md:py-32 px-4 bg-background" id="platform">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-2">Platform</p>
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-12 leading-tight">
            The Operational Capability Platform.
          </h2>

          <div className="flex flex-col items-center gap-0">
            {/* AI Surfaces */}
            <div className="w-full bg-paper-warm border border-border rounded-xl p-6 text-center">
              <p className="text-xs font-mono text-gold tracking-wider uppercase mb-4">AI Surfaces</p>
              <div className="flex flex-wrap justify-center gap-3">
                {["ChatGPT", "Claude", "Perplexity", "Hermes"].map((item) => (
                  <span key={item} className="px-4 py-2 rounded-full bg-paper border border-border text-sm font-medium text-forest">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <span className="text-gold text-2xl py-3">↓</span>

            {/* Universal Capability Fabric */}
            <div className="w-full bg-forest text-paper rounded-xl p-6 text-center">
              <p className="text-lg font-bold">Universal Capability Fabric</p>
              <p className="text-sm text-paper/60 mt-1">Human intent → governed execution</p>
            </div>

            <span className="text-gold text-2xl py-3">↓</span>

            {/* Connected Ecosystem */}
            <div className="w-full bg-paper-warm border border-border rounded-xl p-6 text-center">
              <p className="text-xs font-mono text-gold tracking-wider uppercase mb-4">Your Connected Ecosystem</p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Salesforce", "HubSpot", "Slack", "Teams", "GitHub", "Notion", "Jira", "Google Workspace", "Microsoft 365", "…"].map((item) => (
                  <span key={item} className="px-4 py-2 rounded-full bg-paper border border-border text-sm font-medium text-forest">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <span className="text-gold text-2xl py-3">↓</span>

            {/* Adaptive Spine */}
            <div className="w-full bg-forest-deep text-paper rounded-xl p-6 text-center">
              <p className="text-xs font-mono text-gold tracking-wider uppercase mb-4">Adaptive Spine</p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Memory", "Context", "Governance", "Continuity"].map((item) => (
                  <span key={item} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-paper">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4 · YOUR LAST AUTHENTICATION ──────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-forest text-paper">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-6">Your Last Authentication</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Every company already has everything.
          </h2>

          <div className="flex flex-wrap gap-3 mb-10">
            {["AI", "SaaS", "Documents", "CRM", "Communication", "Engineering", "Knowledge"].map((item) => (
              <span key={item} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-paper/80">
                {item}
              </span>
            ))}
          </div>

          <p className="text-lg text-paper/75 leading-relaxed mb-4">
            What&apos;s missing isn&apos;t another application.
          </p>
          <p className="text-lg text-paper/75 leading-relaxed mb-10">
            It&apos;s one trusted operational identity that can securely act across them.
          </p>

          <p className="text-2xl font-bold text-gold mb-10">
            IntegrateWise becomes your final authorization layer.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {["One login.", "One identity.", "One capability fabric.", "One operational memory."].map((item) => (
              <div key={item} className="bg-white/5 border border-white/10 rounded-xl p-5">
                <p className="text-lg font-semibold text-paper">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 5 · HUMAN INTENT → EXECUTION ──────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-paper-warm border-y border-border">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-2">Human Intent → Execution</p>
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-4 leading-tight">
            Users don&apos;t think in APIs.
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            They think in work. IntegrateWise translates what you say into governed action across the right provider.
          </p>

          <div className="bg-paper border border-border rounded-xl overflow-hidden">
            <div className="grid grid-cols-2 bg-forest text-paper px-6 py-4 text-sm font-semibold uppercase tracking-wider">
              <span>You Say</span>
              <span>IntegrateWise Executes</span>
            </div>
            {[
              { say: "Call Sarah", exec: "Best available calling provider" },
              { say: "Email the customer", exec: "Gmail, Outlook, CRM Email" },
              { say: "Create a task", exec: "Jira, GitHub, Linear, Notion" },
              { say: "Find the roadmap", exec: "Notion, Confluence, Google Docs" },
              { say: "Schedule follow-up", exec: "Google Calendar or Outlook" },
              { say: "Approve renewal", exec: "CRM + Governance" },
            ].map((row, idx) => (
              <div key={idx} className="grid grid-cols-2 px-6 py-4 border-t border-border text-sm hover:bg-paper-warm transition-colors">
                <span className="font-semibold text-forest">&quot;{row.say}&quot;</span>
                <span className="text-muted-foreground">{row.exec}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 6 · YOUR AI GETS OPERATIONAL ──────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-2">Your AI Gets Operational</p>
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-12 leading-tight">
            From answering questions to executing work.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Without */}
            <div className="bg-paper-warm border border-border rounded-xl p-8">
              <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-6">Without IntegrateWise</p>
              <p className="text-lg text-muted-foreground">AI answers questions.</p>
            </div>

            {/* With */}
            <div className="bg-forest text-paper rounded-xl p-8">
              <p className="text-xs font-mono text-gold tracking-wider uppercase mb-6">With IntegrateWise</p>
              <ul className="space-y-3">
                {["AI reads", "AI writes", "AI searches", "AI schedules", "AI collaborates", "AI governs", "AI executes"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-lg">
                    <Check className="w-4 h-4 text-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gold font-medium mt-6">Across your entire ecosystem.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 7 · BUILT FOR EVERY WORKBENCH ─────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-paper-warm border-y border-border" id="solutions">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-2">Built for Every Workbench</p>
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-4 leading-tight">
            One platform. Twelve operational workbenches.
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            Every function in your company works from the same capability fabric — each with its own operational surface.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Founder",
              "Sales",
              "Marketing",
              "Customer Success",
              "Account Success",
              "Product",
              "Engineering",
              "Operations",
              "Support",
              "Finance",
              "HR",
              "Governance",
            ].map((item) => (
              <div key={item} className="bg-paper border border-border rounded-xl p-5 text-center hover:border-gold transition-colors">
                <p className="font-semibold text-forest text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 8 · INVISIBLE INFRASTRUCTURE ──────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-forest-deep text-paper">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-6">Invisible Infrastructure</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Your users never see the plumbing.
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["OAuth", "Tokens", "APIs", "MCP", "Connectors", "Capability routing"].map((item) => (
              <span key={item} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-mono text-paper/40 line-through">
                {item}
              </span>
            ))}
          </div>

          <p className="text-xl text-paper leading-relaxed">
            They simply work.<br />
            <span className="text-gold font-semibold">IntegrateWise handles the rest.</span>
          </p>
        </div>
      </section>

      {/* ─── SECTION 9 · WHY INTEGRATEWISE ─────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-2">Why IntegrateWise</p>
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-12 leading-tight">
            Built for operational reach.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Adaptive Spine",
                desc: "A continuously evolving operational memory across your organization.",
              },
              {
                name: "Universal Capability Fabric",
                desc: "Translate human intent into governed execution.",
              },
              {
                name: "AI-Native",
                desc: "Works where users already work—inside their AI assistants.",
              },
              {
                name: "Enterprise Governance",
                desc: "Policies, approvals, audit trails, and operational trust built in.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-paper-warm border border-border rounded-xl p-8 hover:border-gold transition-colors relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gold"
              >
                <p className="font-semibold text-forest mb-3 text-xl">{item.name}</p>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 10 · CLOSING CTA ──────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-forest text-paper text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Your AI already knows language.<br />
            Now let it know <span className="text-gold">your business.</span>
          </h2>
          <p className="text-xl font-semibold text-paper mb-2">
            Your Last Auth to Complete Your Ecosystem.
          </p>
          <p className="text-lg text-paper/75 mb-10">
            Connect once. Work everywhere.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@integratewise.ai"
              className="px-8 py-3 rounded bg-gold text-forest font-semibold text-base hover:bg-gold-light transition-colors inline-flex items-center justify-center gap-2"
            >
              Start Free
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="mailto:hello@integratewise.ai?subject=Demo%20Request"
              className="px-8 py-3 rounded border-2 border-paper/30 text-paper font-semibold text-base hover:border-paper/60 transition-colors inline-flex items-center justify-center gap-2"
            >
              Watch Demo
            </a>
          </div>
        </div>
      </section>

      {/* ─── SECTION 11 · FOOTER ───────────────────────────────────────── */}
      <footer className="bg-forest-deep text-paper border-t border-paper/10 py-16 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Brand + description */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded bg-gold/20 flex items-center justify-center">
                <span className="text-gold font-bold text-sm">IW</span>
              </div>
              <span className="font-bold text-paper text-lg">IntegrateWise</span>
            </div>
            <p className="text-sm text-paper/50 max-w-md leading-relaxed">
              Your Last Auth to Complete Your Ecosystem. One authentication. Every capability. Everywhere you work.
            </p>
          </div>

          {/* Footer columns */}
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
                <li><Link href="/company" className="hover:text-paper transition-colors">About</Link></li>
                <li><a href="#" className="hover:text-paper transition-colors">Careers</a></li>
                <li><a href="mailto:invest@integratewise.ai" className="hover:text-paper transition-colors">Investors</a></li>
                <li><a href="mailto:hello@integratewise.ai" className="hover:text-paper transition-colors">Contact</a></li>
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

          {/* Bottom bar */}
          <div className="border-t border-paper/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-paper/40">
              © 2026 IntegrateWise LLP. All rights reserved.
            </p>
            <p className="text-sm text-paper/40">
              integratewise.ai
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
