import {
  ArrowRight,
  Calendar,
  Check,
  CheckSquare,
  Code2,
  DollarSign,
  HeartHandshake,
  Leaf,
  LifeBuoy,
  Lock,
  Mail,
  Megaphone,
  Package,
  Phone,
  PlayCircle,
  Scale,
  Search,
  Settings,
  ShieldCheck,
  TrendingUp,
  User,
  UserCheck,
  Users,
} from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";
import { updateMetaTags, SITE_METADATA } from "../lib/seo";

const LOGOS: Record<string, string> = {
  ChatGPT: "/images/logos/chatgpt.svg",
  Claude: "/images/logos/claude.svg",
  Salesforce: "/images/logos/salesforce.svg",
  HubSpot: "/images/logos/hubspot.svg",
  Slack: "/images/logos/slack.svg",
  Notion: "/images/logos/notion.svg",
  "Google Drive": "/images/logos/googledrive.svg",
  GitHub: "/images/logos/github.svg",
  Jira: "/images/logos/jira.svg",
  Teams: "/images/logos/microsoft.svg",
};

function AppTile({ name }: { name: string }) {
  const logo = LOGOS[name];
  return (
    <div className="flex flex-col items-center gap-1.5 bg-paper border border-border rounded-lg px-2 py-3 min-w-[4.5rem]">
      {logo ? (
        <img src={logo} alt={name} className="w-6 h-6" loading="lazy" />
      ) : (
        <span className="w-6 h-6 rounded bg-forest/10 text-forest text-xs font-bold flex items-center justify-center">
          {name === "200+ more" ? "+" : name.charAt(0)}
        </span>
      )}
      <span className="text-[10px] font-medium text-foreground/80 text-center leading-tight">{name}</span>
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    updateMetaTags(SITE_METADATA.home);
  }, []);

  return (
    <div className="bg-background text-foreground">

      {/* ─── NAVIGATION ─────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/92 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between py-3 px-6 max-w-7xl mx-auto">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 hover:opacity-75 transition-opacity">
            <div className="w-8 h-8 rounded bg-forest flex items-center justify-center">
              <span className="text-paper font-bold text-sm">IW</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-semibold text-forest block leading-tight">IntegrateWise</span>
              <span className="text-[10px] text-muted-foreground tracking-wide">Operational Continuity. Governed Intelligence.</span>
            </div>
          </a>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="/platform" className="hover:text-foreground transition-colors">Platform</Link>
            <Link href="/solutions" className="hover:text-foreground transition-colors">Workbenches</Link>
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
      <section className="pt-28 pb-16 px-4 bg-gradient-to-b from-paper to-paper-warm">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

          {/* Left column */}
          <div className="pt-8">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-forest/20 bg-paper text-[11px] font-mono tracking-widest uppercase text-forest mb-8">
              <Leaf className="w-3.5 h-3.5" />
              AI-Native. Operational. Governed.
            </span>

            {/* H1 */}
            <h1 className="text-5xl md:text-6xl text-ink mb-6 leading-[1.08]">
              Your <span className="text-forest italic">Last Auth</span><br />
              to Complete<br />
              Your Ecosystem.
            </h1>

            {/* Sub-headline */}
            <p className="text-lg font-semibold text-forest mb-5">
              One authentication. Every capability. Everywhere you work.
            </p>

            {/* Body */}
            <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-md">
              IntegrateWise connects your AI, business applications, and teams into a single operational capability fabric.
              Stay in ChatGPT, Claude, Hermes, or your Workbench while IntegrateWise securely executes work across your connected ecosystem.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 items-start mb-8">
              <a
                href="mailto:hello@integratewise.ai"
                className="px-7 py-3 rounded-lg bg-forest text-paper font-semibold hover:bg-forest-deep transition-colors inline-flex items-center gap-2"
              >
                Start Free
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@integratewise.ai?subject=Demo%20Request"
                className="px-7 py-3 rounded-lg font-semibold border border-forest/30 text-forest hover:bg-forest hover:text-paper transition-colors inline-flex items-center gap-2"
              >
                Watch Demo
                <PlayCircle className="w-4 h-4" />
              </a>
            </div>

            {/* Trust line */}
            <p className="flex items-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="w-4 h-4 text-forest" />
              Enterprise grade security · SOC 2 · GDPR · HIPAA · ISO 27001
            </p>
          </div>

          {/* Right column — capability fabric diagram */}
          <div className="flex flex-col items-center gap-0">
            {/* AI Surfaces */}
            <p className="text-[11px] font-mono tracking-widest uppercase text-forest mb-3">AI Surfaces</p>
            <div className="flex flex-wrap justify-center gap-2 mb-3">
              {["ChatGPT", "Claude", "Perplexity", "Hermes", "More"].map((name) => (
                <AppTile key={name} name={name} />
              ))}
            </div>

            <span className="text-forest/50 text-xl leading-none py-1">↓</span>

            {/* Fabric */}
            <div className="w-full max-w-md bg-paper border border-forest/20 rounded-xl px-6 py-4 text-center shadow-sm my-2">
              <p className="font-bold text-forest tracking-wide text-sm uppercase">Universal Capability Fabric</p>
              <p className="text-xs text-muted-foreground mt-1">Human intent → Governed execution</p>
            </div>

            <span className="text-forest/50 text-xl leading-none py-1">↓</span>

            {/* Connected ecosystem */}
            <p className="text-[11px] font-mono tracking-widest uppercase text-forest my-3">Your Connected Ecosystem</p>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 mb-3">
              {[
                "Salesforce", "HubSpot", "Slack", "Teams", "Gmail", "Outlook", "Notion", "Google Drive",
                "GitHub", "Jira", "Linear", "Confluence", "Zoom", "Twilio", "Aircall", "200+ more",
              ].map((name) => (
                <AppTile key={name} name={name} />
              ))}
            </div>

            <span className="text-forest/50 text-xl leading-none py-1">↓</span>

            {/* Adaptive Spine */}
            <div className="w-full max-w-lg bg-paper border border-border rounded-xl px-6 py-4 text-center mt-2">
              <p className="font-bold text-forest tracking-wide text-sm uppercase mb-1">Adaptive Spine</p>
              <p className="text-xs text-muted-foreground">
                Memory · Context · Intelligence · Governance · Continuity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2 · TRUST BAR ──────────────────────────────────────── */}
      <section className="py-8 px-4 border-y border-border bg-paper">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[11px] font-mono tracking-widest uppercase text-muted-foreground mb-5">Trusted by innovative teams</p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
            {["GrowthX", "Rocketlane", "Razorpay", "Chargebee", "redBus", "Postman", "Zeta", "Whatfix"].map((name) => (
              <span key={name} className="text-lg font-bold text-ink/40 tracking-tight">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 3 · HUMAN INTENT → EXECUTION ──────────────────────── */}
      <section className="py-20 px-4 bg-background" id="execution">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[11px] font-mono tracking-widest uppercase text-forest mb-3">Human Intent → Execution</p>
          <h2 className="text-3xl md:text-4xl text-ink mb-12">You think in work. We handle the rest.</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {[
              { icon: Phone, title: "Call Sarah", sub: "Best available calling provider" },
              { icon: Mail, title: "Email the customer", sub: "Gmail, Outlook, or CRM Email" },
              { icon: CheckSquare, title: "Create a task", sub: "Jira, GitHub, Linear, or Notion" },
              { icon: Search, title: "Find the roadmap", sub: "Notion, Confluence, Google Docs" },
              { icon: Calendar, title: "Schedule follow-up", sub: "Google Calendar or Outlook" },
              { icon: ShieldCheck, title: "Approve renewal", sub: "CRM + Governance workflow" },
            ].map((item) => (
              <div key={item.title} className="bg-paper border border-border rounded-xl p-5 flex flex-col items-center gap-3 hover:border-forest/40 transition-colors">
                <item.icon className="w-6 h-6 text-forest" />
                <div>
                  <p className="font-semibold text-ink text-sm mb-1">{item.title}</p>
                  <p className="text-xs text-muted-foreground leading-snug">{item.sub}</p>
                </div>
                <span className="mt-auto px-2.5 py-1 rounded bg-forest/10 text-forest text-[10px] font-bold tracking-widest uppercase">
                  Executed
                </span>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">
            IntegrateWise securely resolves the intent, selects the right provider, executes the action, and maintains operational continuity.
          </p>
        </div>
      </section>

      {/* ─── SECTION 4 · WORKBENCHES ────────────────────────────────────── */}
      <section className="py-20 px-4 bg-paper-warm border-y border-border" id="workbenches">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[11px] font-mono tracking-widest uppercase text-forest mb-3">Built for Every Workbench</p>
          <h2 className="text-3xl md:text-4xl text-ink mb-12">One platform. Twelve operational workbenches.</h2>

          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 mb-10">
            {[
              { icon: User, name: "Founder" },
              { icon: TrendingUp, name: "Sales" },
              { icon: Megaphone, name: "Marketing" },
              { icon: HeartHandshake, name: "Customer Success" },
              { icon: UserCheck, name: "Account Success" },
              { icon: Package, name: "Product" },
              { icon: Code2, name: "Engineering" },
              { icon: Settings, name: "Operations" },
              { icon: LifeBuoy, name: "Support" },
              { icon: DollarSign, name: "Finance" },
              { icon: Users, name: "HR" },
              { icon: Scale, name: "Governance" },
            ].map((item) => (
              <div key={item.name} className="bg-paper border border-border rounded-xl p-5 flex flex-col items-center gap-3 hover:border-forest/40 transition-colors">
                <item.icon className="w-6 h-6 text-forest" />
                <p className="font-medium text-ink text-xs">{item.name}</p>
              </div>
            ))}
          </div>

          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-forest/30 text-forest font-semibold hover:bg-forest hover:text-paper transition-colors"
          >
            Explore All Workbenches
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ─── SECTION 5 · WHY INTEGRATEWISE ─────────────────────────────── */}
      <section className="py-20 px-4 bg-background" id="why">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] font-mono tracking-widest uppercase text-forest mb-10 text-center">Why IntegrateWise</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Leaf,
                name: "Adaptive Spine",
                desc: "A continuously evolving operational memory across your organization.",
              },
              {
                icon: Settings,
                name: "Universal Capability Fabric",
                desc: "Translate human intent into governed execution across any system.",
              },
              {
                icon: Check,
                name: "AI-Native",
                desc: "Works where users already work—inside their AI assistants.",
              },
              {
                icon: ShieldCheck,
                name: "Enterprise Governance",
                desc: "Policies, approvals, audit trails, and operational trust built in.",
              },
            ].map((item) => (
              <div key={item.name} className="bg-paper border border-border rounded-xl p-6 hover:border-forest/40 transition-colors">
                <item.icon className="w-6 h-6 text-forest mb-4" />
                <p className="font-semibold text-ink mb-2">{item.name}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}

            {/* Data control panel */}
            <div className="md:col-span-2 bg-forest text-paper rounded-xl p-6 flex items-start justify-between gap-6">
              <div>
                <p className="font-semibold text-lg mb-4">Your data. Your control.</p>
                <ul className="space-y-2.5">
                  {["Zero data training", "Tenant isolation", "Role-based access", "Full audit history"].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-paper/85">
                      <Check className="w-4 h-4 text-gold shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Lock className="w-12 h-12 text-paper/25 shrink-0 mt-2" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6 · CLOSING ────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-forest-deep text-paper">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-center">
          <div>
            <p className="text-sm text-paper/60 mb-2">Your AI already knows language.</p>
            <h2 className="text-3xl md:text-4xl text-paper leading-tight">Now let it know your business.</h2>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded bg-gold/20 flex items-center justify-center">
                <span className="text-gold font-bold text-sm">IW</span>
              </div>
              <span className="font-bold text-paper text-xl">IntegrateWise</span>
            </div>
            <p className="text-sm text-paper/70">Your Last Auth to Complete Your Ecosystem.</p>
            <p className="text-sm text-paper/70">Connect once. Work everywhere.</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            <a
              href="mailto:hello@integratewise.ai"
              className="px-7 py-3 rounded-lg bg-gold text-forest-deep font-semibold hover:bg-gold-light transition-colors inline-flex items-center gap-2"
            >
              Start Your Free Trial
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="flex items-center gap-1.5 text-xs text-paper/60">
              <Check className="w-3.5 h-3.5 text-gold" />
              No credit card required
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 7 · FOOTER ─────────────────────────────────────────── */}
      <footer className="bg-forest-deep text-paper border-t border-paper/10 py-14 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Footer columns */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h4 className="font-bold mb-4 text-paper">Workbenches</h4>
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
