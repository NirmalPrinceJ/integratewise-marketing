import {
  ArrowRight,
  BarChart3,
  Blocks,
  Brain,
  Check,
  Code2,
  Crown,
  Database,
  DollarSign,
  HeartHandshake,
  Infinity as InfinityIcon,
  Layers,
  Leaf,
  LifeBuoy,
  Megaphone,
  MessageCircle,
  MessageSquare,
  Package,
  Play,
  RefreshCw,
  Scale,
  Settings,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";
import { updateMetaTags, SITE_METADATA } from "../lib/seo";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";

export default function Capabilities() {
  useEffect(() => {
    updateMetaTags(SITE_METADATA.capabilities);
  }, []);

  return (
    <div className="bg-background text-foreground">
      <SiteNav />

      {/* ─── HERO ───────────────────────────────────────────────────────── */}
      <section className="pt-28 pb-16 px-4 bg-gradient-to-b from-paper to-paper-warm">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div className="pt-4">
            <p className="text-xs text-muted-foreground mb-6">Home &rsaquo; Capabilities</p>
            <h1 className="text-4xl md:text-5xl text-ink mb-6 leading-[1.12]">
              Built for Operational Continuity and <span className="text-forest italic">Governed Intelligence.</span>
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-md">
              IntegrateWise is the operational capability platform that unifies your AI, applications, and teams into one
              governed fabric—so work gets done seamlessly, securely, and at scale.
            </p>
            <a
              href="mailto:hello@integratewise.ai"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-forest text-paper font-semibold hover:bg-forest-deep transition-colors"
            >
              Start Free
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Six-node overview */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8">
            {[
              { icon: Sparkles, name: "AI Surfaces" },
              { icon: Users, name: "People" },
              { icon: ShieldCheck, name: "Governance" },
              { icon: Blocks, name: "Applications" },
              { icon: Database, name: "Data & Knowledge" },
              { icon: InfinityIcon, name: "Operational Continuity" },
            ].map((item) => (
              <div key={item.name} className="bg-paper border border-border rounded-xl p-5 text-center">
                <item.icon className="w-6 h-6 text-forest mx-auto mb-2" />
                <p className="font-semibold text-ink text-sm">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CORE CAPABILITIES ──────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[11px] font-mono tracking-widest uppercase text-forest mb-3">— Core Capabilities —</p>
          <h2 className="text-3xl md:text-4xl text-ink mb-12">Everything you need. Unified.</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: Brain, name: "Universal Capability Fabric", sub: "Translate human intent into governed execution across any application or system." },
              { icon: Layers, name: "Adaptive Spine", sub: "A continuously evolving operational memory that keeps your organization aligned and informed." },
              { icon: Leaf, name: "AI-Native", sub: "Works where users already work—inside their AI assistants and favorite tools." },
              { icon: ShieldCheck, name: "Enterprise Governance", sub: "Policies, approvals, audit trails, and role-based controls built into every action." },
              { icon: Blocks, name: "Connected Ecosystem", sub: "Pre-built connectors and MCP-powered extensibility to integrate anything, everywhere." },
              { icon: BarChart3, name: "Operational Continuity", sub: "Maintain context, memory, and execution continuity across people, tools, and processes." },
            ].map((item) => (
              <div key={item.name} className="bg-paper border border-border rounded-xl p-5 text-center hover:border-forest/40 transition-colors">
                <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-5 h-5 text-forest" />
                </div>
                <p className="font-semibold text-ink text-sm mb-2">{item.name}</p>
                <p className="text-xs text-muted-foreground leading-snug">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ───────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-paper-warm border-y border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[11px] font-mono tracking-widest uppercase text-forest mb-3">How It Works</p>
          <h2 className="text-3xl md:text-4xl text-ink mb-12">From intent to execution in one fabric.</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { icon: MessageSquare, step: "1. You express intent", sub: "In natural language—inside ChatGPT, Claude, Hermes, or your Workbench." },
              { icon: Sparkles, step: "2. We understand", sub: "The Universal Capability Fabric interprets your intent and determines the best action." },
              { icon: ShieldCheck, step: "3. We govern", sub: "Policies and approvals ensure every action is secure, compliant, and aligned." },
              { icon: Play, step: "4. We execute", sub: "The right provider is selected and the action is executed across your ecosystem." },
              { icon: RefreshCw, step: "5. We maintain continuity", sub: "Results, context, and outcomes are captured in the Adaptive Spine for long-term value." },
            ].map((item, idx) => (
              <div key={item.step} className="relative bg-paper border border-border rounded-xl p-5 text-center">
                <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-5 h-5 text-forest" />
                </div>
                <p className="font-semibold text-ink text-sm mb-2">{item.step}</p>
                <p className="text-xs text-muted-foreground leading-snug">{item.sub}</p>
                {idx < 4 && (
                  <span className="hidden lg:block absolute top-1/2 -right-4 text-forest/40 text-xl">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WORKBENCHES ────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[11px] font-mono tracking-widest uppercase text-forest mb-3">Built for Every Workbench</p>
          <h2 className="text-3xl md:text-4xl text-ink mb-12">One platform. Twelve operational workbenches.</h2>

          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-12 gap-3 mb-10">
            {[
              { icon: Crown, name: "Founder" },
              { icon: TrendingUp, name: "Sales" },
              { icon: Megaphone, name: "Marketing" },
              { icon: UserCheck, name: "Account Success" },
              { icon: HeartHandshake, name: "Customer Success" },
              { icon: Package, name: "Product" },
              { icon: Code2, name: "Engineering" },
              { icon: Settings, name: "Operations" },
              { icon: MessageCircle, name: "Support" },
              { icon: DollarSign, name: "Finance" },
              { icon: Users, name: "HR" },
              { icon: Scale, name: "Governance" },
            ].map((item) => (
              <div key={item.name} className="bg-paper border border-border rounded-xl p-4 flex flex-col items-center gap-2 hover:border-forest/40 transition-colors">
                <item.icon className="w-5 h-5 text-forest" />
                <p className="font-medium text-ink text-[11px] leading-tight">{item.name}</p>
              </div>
            ))}
          </div>

          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-forest/30 text-forest font-semibold hover:bg-forest hover:text-paper transition-colors"
          >
            Explore Workbenches
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ─── DEEP CAPABILITIES ──────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-paper-warm border-y border-border">
        <div className="max-w-7xl mx-auto bg-paper border border-border rounded-xl p-8 grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,4fr)] gap-8">
          <div>
            <p className="text-[11px] font-mono tracking-widest uppercase text-forest mb-4">Deep Capabilities</p>
            <h2 className="text-2xl md:text-3xl text-ink mb-4 leading-snug">Designed for scale.<br />Built for trust.</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Every layer of IntegrateWise is designed to ensure your organization can operate with speed, confidence, and control.
            </p>
            <Link href="/documentation" className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest hover:gap-2.5 transition-all">
              View Documentation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: ShieldCheck, name: "Security & Compliance", items: ["SOC 2 · GDPR · HIPAA", "ISO 27001 aligned", "Data encryption in transit & at rest", "Tenant isolation"] },
              { icon: Database, name: "Data & Knowledge", items: ["Unified data model", "Contextual memory", "Semantic understanding", "Knowledge graph"] },
              { icon: Code2, name: "APIs & Extensibility", items: ["REST APIs", "MCP servers", "Webhooks & events", "Custom capabilities"] },
              { icon: BarChart3, name: "Observability", items: ["Audit logs", "Real-time monitoring", "Action traces", "Performance insights"] },
              { icon: Check, name: "Reliability", items: ["99.9% uptime SLA", "Fault tolerant", "Auto recovery", "Always-on operations"] },
            ].map((col) => (
              <div key={col.name}>
                <col.icon className="w-5 h-5 text-forest mb-3" />
                <p className="font-semibold text-ink text-sm mb-3">{col.name}</p>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <Check className="w-3.5 h-3.5 text-forest shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CLOSING ────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-forest-deep text-paper">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-sm text-paper/60 mb-2">Your AI already knows language.</p>
            <h2 className="text-3xl md:text-4xl text-paper leading-tight mb-2">Now let it know your business.</h2>
            <p className="text-sm text-paper/70">Connect once. Work everywhere.</p>
          </div>
          <div className="shrink-0 text-center md:text-right">
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <a
                href="mailto:hello@integratewise.ai"
                className="px-6 py-3 rounded-lg bg-gold text-forest-deep font-semibold hover:bg-gold-light transition-colors inline-flex items-center justify-center gap-2"
              >
                Start Your Free Trial
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@integratewise.ai?subject=Sales%20Enquiry"
                className="px-6 py-3 rounded-lg border border-paper/40 text-paper font-semibold hover:border-paper transition-colors inline-flex items-center justify-center gap-2"
              >
                Talk to Sales
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <p className="flex items-center justify-center md:justify-end gap-4 text-xs text-paper/60">
              <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-gold" /> No credit card required</span>
              <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-gold" /> Free forever plan available</span>
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
