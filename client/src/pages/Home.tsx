import { ArrowRight, Menu, X } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import { updateMetaTags, SITE_METADATA } from "../lib/seo";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

          {/* Nav links - Desktop */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <div className="group relative">
              <button className="hover:text-foreground transition-colors flex items-center gap-1">
                Platform <ArrowRight className="w-3 h-3" />
              </button>
            </div>
            <div className="group relative">
              <button className="hover:text-foreground transition-colors flex items-center gap-1">
                Workbenches <ArrowRight className="w-3 h-3" />
              </button>
            </div>
            <Link href="/platform" className="hover:text-foreground transition-colors">Capabilities</Link>
            <Link href="/solutions" className="hover:text-foreground transition-colors">Ecosystem</Link>
            <Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link>
            <Link href="/company" className="hover:text-foreground transition-colors">Developers</Link>
            <div className="group relative">
              <button className="hover:text-foreground transition-colors flex items-center gap-1">
                Resources <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* CTA - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="mailto:hello@integratewise.ai" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Sign in
            </a>
            <a
              href="mailto:hello@integratewise.ai"
              className="px-4 py-2 rounded bg-forest text-paper font-medium text-sm hover:bg-forest-deep transition-colors"
            >
              Start Free
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className="container px-6 py-4 space-y-4">
              <Link href="/solutions" className="block text-sm font-medium hover:text-forest transition-colors">Ecosystem</Link>
              <Link href="/platform" className="block text-sm font-medium hover:text-forest transition-colors">Capabilities</Link>
              <Link href="/pricing" className="block text-sm font-medium hover:text-forest transition-colors">Pricing</Link>
              <Link href="/company" className="block text-sm font-medium hover:text-forest transition-colors">Developers</Link>
              <a href="mailto:hello@integratewise.ai" className="block px-4 py-2 rounded bg-forest text-paper font-medium text-sm hover:bg-forest-deep transition-colors text-center">
                Start Free
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ─── SECTION 1 · HERO ───────────────────────────────────────────── */}
      <section className="pt-32 pb-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">

          {/* Tag line */}
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-6">
            AI-NATIVE. OPERATIONAL. GOVERNED.
          </p>

          {/* H1 */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-forest mb-8 leading-tight max-w-4xl">
            Your Last Auth to Complete Your Ecosystem.
          </h1>

          {/* Sub */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl">
            One authentication. Every capability. Everywhere you work.
          </p>

          <p className="text-base text-muted-foreground mb-12 leading-relaxed max-w-3xl">
            IntegrateWise connects your AI, business applications, and teams into a single operational capability fabric. Stay in ChatGPT, Claude, Hermes, or your Workbench while IntegrateWise securely executes work across your connected ecosystem.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 items-start mb-16">
            <a
              href="mailto:hello@integratewise.ai"
              className="px-8 py-3 rounded bg-forest text-paper font-semibold hover:bg-forest-deep transition-colors inline-flex items-center gap-2"
            >
              Start Free
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#workbenches"
              className="px-8 py-3 rounded font-semibold border-2 border-forest text-forest hover:bg-forest hover:text-paper transition-colors"
            >
              Watch Demo
            </a>
          </div>

          {/* Security badges */}
          <div className="pt-8 border-t border-border flex flex-wrap gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-gold">✓</span> Enterprise grade security
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold">✓</span> SOC 2 • GDPR • HIPAA • ISO 27001
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2 · AI SURFACES ─────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-paper-warm border-y border-border">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-6 text-center">AI SURFACES</p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
            {[
              { name: "ChatGPT", icon: "🤖" },
              { name: "Claude", icon: "🧠" },
              { name: "Perplexity", icon: "🔍" },
              { name: "Hermes", icon: "🌿" },
              { name: "More", icon: "•••" },
            ].map((surface, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center p-6 rounded-lg bg-paper border border-border hover:border-gold transition-colors">
                <div className="text-3xl mb-2">{surface.icon}</div>
                <p className="text-sm font-medium text-forest">{surface.name}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">
              Universal Capability Fabric
            </h2>
            <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
              Human intent → Governed execution
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3 · CONNECTED ECOSYSTEM ────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4 text-center">
            Your Connected Ecosystem
          </h2>
          <p className="text-base text-muted-foreground mb-12 max-w-2xl mx-auto text-center">
            IntegrateWise connects 200+ tools and applications into one unified operational fabric.
          </p>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
              "Salesforce", "HubSpot", "Slack", "Teams", "Gmail",
              "Outlook", "Google Drive", "GitHub", "Jira", "Linear",
              "Confluence", "Zoom", "Twilio", "Aircall", "Notion",
            ].map((tool, idx) => (
              <div key={idx} className="flex items-center justify-center p-4 rounded-lg bg-paper-warm border border-border hover:border-gold transition-colors text-sm font-medium text-forest">
                {tool}
              </div>
            ))}
            <div className="flex items-center justify-center p-4 rounded-lg bg-paper-warm border border-border hover:border-gold transition-colors text-sm font-medium text-forest">
              200+ more
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4 · ADAPTIVE SPINE ─────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-forest text-paper">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Adaptive Spine
            </h2>
            <p className="text-base text-paper/75 max-w-2xl mx-auto">
              Memory • Context • Intelligence • Governance • Continuity
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { title: "Memory", desc: "Continuous operational memory across your organization" },
              { title: "Context", desc: "Live human context from conversations and decisions" },
              { title: "Intelligence", desc: "AI reasoning over your actual data" },
              { title: "Governance", desc: "Every action requires approval" },
              { title: "Continuity", desc: "Knowledge compounds daily" },
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-paper/10 border border-paper/20 hover:border-gold transition-colors">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-paper/75">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 5 · HUMAN INTENT → EXECUTION ──────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">
              Human Intent → Execution
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              You think in work. We handle the rest.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: "📞", title: "Call Sarah", desc: "Best available calling provider", executed: true },
              { icon: "📧", title: "Email the customer", desc: "Gmail, Outlook, or CRM Email", executed: true },
              { icon: "✓", title: "Create a task", desc: "Jira, GitHub, Linear, or Notion", executed: true },
              { icon: "🔍", title: "Find the roadmap", desc: "Notion, Confluence, Google Docs", executed: true },
              { icon: "📅", title: "Schedule follow-up", desc: "Google Calendar or Outlook", executed: true },
              { icon: "🛡️", title: "Approve renewal", desc: "CRM + Governance workflow", executed: true },
            ].map((action, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-paper-warm border border-border hover:border-gold transition-colors text-center">
                <div className="text-3xl mb-3">{action.icon}</div>
                <h3 className="font-semibold text-forest mb-1">{action.title}</h3>
                <p className="text-xs text-muted-foreground mb-3">{action.desc}</p>
                <span className="inline-block px-2 py-1 bg-forest text-paper text-xs font-medium rounded">
                  EXECUTED
                </span>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-12 max-w-2xl mx-auto">
            IntegrateWise securely resolves the intent, selects the right provider, executes the action, and maintains operational continuity.
          </p>
        </div>
      </section>

      {/* ─── SECTION 6 · WORKBENCHES ───────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-paper-warm border-y border-border" id="workbenches">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-gold tracking-widest uppercase mb-4">BUILT FOR EVERY WORKBENCH</p>
            <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">
              One platform. Twelve operational workbenches.
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              IntegrateWise adapts to your role and workflow.
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            {[
              { icon: "👤", name: "Founder" },
              { icon: "💼", name: "Sales" },
              { icon: "🚀", name: "Marketing" },
              { icon: "👥", name: "Account Success" },
              { icon: "😊", name: "Customer Success" },
              { icon: "📦", name: "Product" },
              { icon: "⚙️", name: "Engineering" },
              { icon: "🔧", name: "Operations" },
              { icon: "💬", name: "Support" },
              { icon: "💰", name: "Finance" },
              { icon: "👨‍💼", name: "HR" },
              { icon: "🛡️", name: "Governance" },
            ].map((workbench, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center p-6 rounded-lg bg-paper border border-border hover:border-gold transition-colors">
                <div className="text-3xl mb-2">{workbench.icon}</div>
                <p className="text-sm font-medium text-forest text-center">{workbench.name}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="#" className="inline-flex items-center gap-2 px-6 py-2 rounded border-2 border-forest text-forest hover:bg-forest hover:text-paper transition-colors font-medium">
              Explore All Workbenches <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── SECTION 7 · WHY INTEGRATEWISE ─────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-4 text-center">WHY INTEGRATEWISE</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "🌿",
                title: "Adaptive Spine",
                desc: "A continuously evolving operational memory across your organization",
              },
              {
                icon: "🔗",
                title: "Universal Capability Fabric",
                desc: "Translate human intent into governed execution across any system",
              },
              {
                icon: "🤖",
                title: "AI-Native",
                desc: "Works where you are—inside their AI assistants already",
              },
              {
                icon: "🛡️",
                title: "Enterprise Governance",
                desc: "Policies, approvals, audit, and operational trust built in",
              },
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-lg bg-paper-warm border border-border hover:border-gold transition-colors">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-forest mb-3">{feature.title}</h3>
                <p className="text-base text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 8 · DATA & CONTROL ─────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-forest text-paper">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your data. Your control.
              </h2>
              <ul className="space-y-4">
                {[
                  "Zero data training",
                  "Tenant isolation",
                  "Role-based access",
                  "Full audit history",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="text-gold font-bold">✓</span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-paper/10 border border-paper/20 rounded-lg p-8">
              <p className="text-paper/75 mb-6">
                IntegrateWise operates under your control. Your data stays yours. Every action is logged. Every decision is auditable.
              </p>
              <div className="space-y-3 text-sm text-paper/75">
                <p>🔐 Enterprise-grade encryption</p>
                <p>📋 SOC 2 Type II certified</p>
                <p>🌍 GDPR, HIPAA, ISO 27001 compliant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 9 · TRUSTED BY ────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-12 text-center">TRUSTED BY INNOVATIVE TEAMS</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center justify-center">
            {[
              "GrowthX",
              "Rocketlane",
              "Razorpay",
              "Chargebee",
              "Postman",
              "Zeta",
              "WhatFix",
              "Redbus",
            ].map((company, idx) => (
              <div key={idx} className="flex items-center justify-center h-16 p-4 rounded-lg bg-paper-warm border border-border hover:border-gold transition-colors">
                <p className="font-semibold text-forest text-sm text-center">{company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 10 · CTA FOOTER ───────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-forest text-paper">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Now let it know your business.
          </h2>
          <p className="text-lg text-paper/75 mb-12">
            Your Last Auth to Complete Your Ecosystem.<br />
            Connect once. Work everywhere.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-8">
            <a
              href="mailto:hello@integratewise.ai"
              className="px-8 py-3 rounded bg-paper text-forest font-semibold hover:bg-paper/90 transition-colors inline-flex items-center gap-2"
            >
              Start Your Free Trial <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <p className="text-sm text-paper/60">
            ✓ No credit card required
          </p>
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────────────────────────────── */}
      <footer className="py-12 px-4 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-forest mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/platform" className="hover:text-forest transition-colors">Platform</Link></li>
                <li><Link href="/solutions" className="hover:text-forest transition-colors">Solutions</Link></li>
                <li><Link href="/pricing" className="hover:text-forest transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-forest mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/company" className="hover:text-forest transition-colors">About</Link></li>
                <li><a href="mailto:hello@integratewise.ai" className="hover:text-forest transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-forest mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/blog" className="hover:text-forest transition-colors">Blog</Link></li>
                <li><Link href="/documentation" className="hover:text-forest transition-colors">Docs</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-forest mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-forest transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-forest transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2024 IntegrateWise. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-forest transition-colors">Twitter</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-forest transition-colors">LinkedIn</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-forest transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
