import {
  ArrowRight,
  Blocks,
  Boxes,
  Brain,
  Clock,
  Code2,
  Database,
  Eye,
  Fingerprint,
  Infinity as InfinityIcon,
  Layers,
  Leaf,
  Lock,
  PlayCircle,
  Puzzle,
  Scaling,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { useEffect } from "react";
import { updateMetaTags, SITE_METADATA } from "../lib/seo";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";

const LOGOS: Record<string, string> = {
  ChatGPT: "/images/logos/chatgpt.svg",
  Claude: "/images/logos/claude.svg",
  Salesforce: "/images/logos/salesforce.svg",
  HubSpot: "/images/logos/hubspot.svg",
  Slack: "/images/logos/slack.svg",
  Notion: "/images/logos/notion.svg",
  GitHub: "/images/logos/github.svg",
  Jira: "/images/logos/jira.svg",
  "Microsoft 365": "/images/logos/microsoft.svg",
  "Google Workspace": "/images/logos/googledrive.svg",
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

export default function Platform() {
  useEffect(() => {
    updateMetaTags(SITE_METADATA.platform);
  }, []);

  return (
    <div className="bg-background text-foreground">
      <SiteNav />

      {/* ─── HERO ───────────────────────────────────────────────────────── */}
      <section className="pt-28 pb-16 px-4 bg-gradient-to-b from-paper to-paper-warm">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div className="pt-4">
            <p className="text-xs text-muted-foreground mb-6">Home &rsaquo; Platform</p>
            <h1 className="text-5xl md:text-6xl text-ink mb-6 leading-[1.08]">
              The Operational Capability Platform for the <span className="text-forest italic">AI Era.</span>
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-md">
              IntegrateWise is the foundational layer that unifies your AI, applications, data, and teams into a single
              governed fabric—so work gets done seamlessly, securely, and at scale.
            </p>
            <a
              href="mailto:hello@integratewise.ai?subject=Platform%20Overview"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg font-semibold border border-forest/30 text-forest hover:bg-forest hover:text-paper transition-colors"
            >
              <PlayCircle className="w-4 h-4" />
              Watch Platform Overview
            </a>
          </div>

          {/* Six-node overview */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8">
            {[
              { icon: Sparkles, name: "AI Surfaces", sub: "ChatGPT, Claude, Perplexity, Hermes and more" },
              { icon: Users, name: "People", sub: "Employees, teams, partners, customers" },
              { icon: ShieldCheck, name: "Governance", sub: "Policies, approvals, audit and compliance" },
              { icon: Blocks, name: "Applications", sub: "Business apps, tools and systems" },
              { icon: Database, name: "Data & Knowledge", sub: "Structured, unstructured and experiential data" },
              { icon: InfinityIcon, name: "Operational Continuity", sub: "Context, memory and execution continuity" },
            ].map((item) => (
              <div key={item.name} className="bg-paper border border-border rounded-xl p-4 text-center">
                <item.icon className="w-6 h-6 text-forest mx-auto mb-2" />
                <p className="font-semibold text-ink text-sm mb-1">{item.name}</p>
                <p className="text-[11px] text-muted-foreground leading-snug">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AT A GLANCE + ARCHITECTURE ─────────────────────────────────── */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] gap-8 items-start">

          {/* At a glance */}
          <div className="bg-paper border border-border rounded-xl p-6">
            <p className="font-semibold text-ink mb-6">IntegrateWise Platform at a Glance</p>
            <div className="space-y-6">
              {[
                {
                  icon: Brain,
                  name: "One Fabric for Every Workflow",
                  sub: "A universal capability fabric that translates human intent into governed execution across any system.",
                },
                {
                  icon: Layers,
                  name: "Adaptive Spine",
                  sub: "A continuously evolving operational memory that maintains context, intelligence, and continuity across your organization.",
                },
                {
                  icon: ShieldCheck,
                  name: "Enterprise Governance Built In",
                  sub: "Policies, approvals, audit trails, and role-based controls ensure every action is trusted and traceable.",
                },
                {
                  icon: Puzzle,
                  name: "Extensible by Design",
                  sub: "Connect any application or data source with our connectors, MCP pool, and developer-first APIs.",
                },
              ].map((item) => (
                <div key={item.name} className="flex gap-4">
                  <item.icon className="w-6 h-6 text-forest shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-ink text-sm mb-1">{item.name}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture */}
          <div className="bg-paper border border-border rounded-xl p-6">
            <p className="font-semibold text-ink text-center mb-6">The IntegrateWise Architecture</p>

            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {["ChatGPT", "Claude", "Perplexity", "Hermes", "More"].map((name) => (
                <AppTile key={name} name={name} />
              ))}
            </div>

            <div className="bg-forest/10 border border-forest/20 rounded-lg px-5 py-3 text-center mb-4">
              <p className="font-bold text-forest text-sm uppercase tracking-wide">Universal Capability Fabric</p>
              <p className="text-xs text-muted-foreground mt-1">Human intent → Resolution → Policy → Routing → Execution</p>
            </div>

            <p className="text-[11px] font-mono tracking-widest uppercase text-forest text-center mb-3">— Connectors & MCP Pool —</p>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {["Salesforce", "HubSpot", "Slack", "Microsoft 365", "Google Workspace", "GitHub", "Jira", "Notion", "200+ more"].map((name) => (
                <AppTile key={name} name={name} />
              ))}
            </div>

            <div className="bg-forest/10 border border-forest/20 rounded-lg px-5 py-3 text-center mb-5">
              <p className="font-bold text-forest text-sm uppercase tracking-wide">Adaptive Spine</p>
              <p className="text-xs text-muted-foreground mt-1">Memory · Context · Intelligence · Governance · Continuity</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { icon: Database, name: "Data & Knowledge Layer", sub: "Structured, unstructured and vector data" },
                { icon: Fingerprint, name: "Identity & Access Layer", sub: "SSO, roles, permissions and tenant isolation" },
                { icon: ShieldCheck, name: "Governance Layer", sub: "Policies, approvals, audit and compliance" },
                { icon: Eye, name: "Observability Layer", sub: "Logs, metrics, traces and insights" },
              ].map((item) => (
                <div key={item.name} className="border border-border rounded-lg p-3 text-center">
                  <item.icon className="w-5 h-5 text-forest mx-auto mb-2" />
                  <p className="font-semibold text-ink text-xs mb-1">{item.name}</p>
                  <p className="text-[10px] text-muted-foreground leading-snug">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── BUILT FOR HOW YOU WORK ─────────────────────────────────────── */}
      <section className="py-16 px-4 bg-paper-warm border-y border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl text-ink text-center mb-10">— Built for how you work —</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: Leaf, name: "AI-Native", sub: "Works inside the AI tools your teams already use." },
              { icon: Lock, name: "Secure by Default", sub: "Zero trust architecture with enterprise-grade security." },
              { icon: Scaling, name: "Scalable & Reliable", sub: "Built on resilient infrastructure for global scale." },
              { icon: Clock, name: "Always in Context", sub: "Maintain operational memory across every conversation and action." },
              { icon: Code2, name: "Developer Friendly", sub: "APIs, SDKs, webhooks and MCP for endless extensibility." },
              { icon: Boxes, name: "Future Ready", sub: "Model-agnostic, cloud-agnostic, and built for continuous evolution." },
            ].map((item) => (
              <div key={item.name} className="bg-paper border border-border rounded-xl p-5 text-center hover:border-forest/40 transition-colors">
                <div className="w-11 h-11 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 text-forest" />
                </div>
                <p className="font-semibold text-ink text-sm mb-2">{item.name}</p>
                <p className="text-xs text-muted-foreground leading-snug">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ──────────────────────────────────────────────────── */}
      <section className="py-8 px-4 bg-paper">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[11px] font-mono tracking-widest uppercase text-muted-foreground mb-5">— Trusted by innovative teams —</p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
            {["GrowthX", "Rocketlane", "Razorpay", "Chargebee", "redBus", "Postman", "Zeta", "Whatfix"].map((name) => (
              <span key={name} className="text-lg font-bold text-ink/40 tracking-tight">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PILLARS ────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,2.4fr)_minmax(0,1fr)] gap-6 items-stretch">
          <div className="bg-paper border border-border rounded-xl p-6">
            <p className="font-semibold text-ink mb-6">The pillars of the IntegrateWise platform</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {[
                { icon: Brain, name: "Universal Capability Fabric", sub: "Translate human intent into governed execution across any application or system." },
                { icon: Leaf, name: "Adaptive Spine", sub: "A living operational memory that keeps your organization aligned and informed." },
                { icon: ShieldCheck, name: "Enterprise Governance", sub: "Built-in guardrails for policies, approvals, compliance and accountability." },
                { icon: InfinityIcon, name: "Operational Continuity", sub: "Ensure context, memory and execution continuity across people, tools and processes." },
                { icon: Puzzle, name: "Ecosystem Extensibility", sub: "Pre-built connectors, MCP pool, and APIs to integrate anything, everywhere." },
              ].map((item) => (
                <div key={item.name}>
                  <item.icon className="w-6 h-6 text-forest mb-3" />
                  <p className="font-semibold text-ink text-sm mb-2">{item.name}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-forest text-paper rounded-xl p-6 flex flex-col justify-center">
            <h3 className="text-2xl text-paper leading-snug mb-3">
              One platform.<br />Every capability.<br />Limitless outcomes.
            </h3>
            <p className="text-sm text-paper/70 mb-6">Connect once. Work everywhere.</p>
            <a
              href="mailto:hello@integratewise.ai"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gold text-forest-deep font-semibold hover:bg-gold-light transition-colors"
            >
              Start Your Free Trial
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── CLOSING ────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-forest-deep text-paper">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-10 items-center">
          <div>
            <p className="text-sm text-paper/60 mb-2">Your AI already knows language.</p>
            <h2 className="text-3xl md:text-4xl text-paper leading-tight mb-3">Now let it know your business.</h2>
            <p className="text-sm text-paper/70">Connect once. Work everywhere.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { name: "One Auth", sub: "One authentication to access your complete ecosystem." },
              { name: "One Fabric", sub: "One governed capability fabric for all your work." },
              { name: "One Continuity", sub: "One memory that maintains context across everything." },
            ].map((item) => (
              <div key={item.name} className="text-center">
                <p className="font-semibold text-gold mb-2">{item.name}</p>
                <p className="text-xs text-paper/70 leading-relaxed">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
