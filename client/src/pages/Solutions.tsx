import {
  ArrowRight,
  Brain,
  Clock,
  Code2,
  Compass,
  Crown,
  DollarSign,
  HeartHandshake,
  Infinity as InfinityIcon,
  Leaf,
  LifeBuoy,
  Megaphone,
  MessageCircle,
  Package,
  PlayCircle,
  Scale,
  Settings,
  Sparkles,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import { updateMetaTags, SITE_METADATA } from "../lib/seo";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";

const CATEGORIES = [
  "All Workbenches",
  "Go-to-Market",
  "Customer",
  "Product & Engineering",
  "Operations",
  "Organization",
  "Governance",
] as const;

type Category = (typeof CATEGORIES)[number];

const WORKBENCHES: {
  icon: typeof Crown;
  name: string;
  desc: string;
  category: Exclude<Category, "All Workbenches">;
  href?: string;
}[] = [
  { icon: Crown, name: "Founder", desc: "Executive overview, strategic insights, and business health at a glance.", category: "Organization", href: "/solutions/founder-ops" },
  { icon: TrendingUp, name: "Sales", desc: "Pipeline intelligence, deal execution, and revenue performance.", category: "Go-to-Market", href: "/solutions/sales-continuity" },
  { icon: Megaphone, name: "Marketing", desc: "Campaign performance, demand insights, and growth analytics.", category: "Go-to-Market" },
  { icon: UserCheck, name: "Account Success", desc: "Account health, renewal intelligence, and expansion opportunities.", category: "Customer", href: "/solutions/account-success" },
  { icon: HeartHandshake, name: "Customer Success", desc: "Customer health, support insights, and retention management.", category: "Customer" },
  { icon: Package, name: "Product", desc: "Roadmaps, feedback loops, usage insights, and product outcomes.", category: "Product & Engineering" },
  { icon: Code2, name: "Engineering", desc: "Engineering velocity, issues, deployments, and system observability.", category: "Product & Engineering", href: "/solutions/engineering-product" },
  { icon: Settings, name: "Operations", desc: "Process execution, automation, SLAs, and operational excellence.", category: "Operations" },
  { icon: MessageCircle, name: "Support", desc: "Ticket intelligence, resolution metrics, and customer satisfaction.", category: "Customer" },
  { icon: DollarSign, name: "Finance", desc: "Revenue, expenses, forecasts, and financial operational insights.", category: "Operations" },
  { icon: Users, name: "HR", desc: "People analytics, workforce insights, and talent operations.", category: "Organization" },
  { icon: Scale, name: "Governance", desc: "Policies, approvals, audit trails, risk, and compliance oversight.", category: "Governance", href: "/solutions/ai-governance" },
];

export default function Solutions() {
  const [category, setCategory] = useState<Category>("All Workbenches");

  useEffect(() => {
    updateMetaTags(SITE_METADATA.solutions);
  }, []);

  const visible = WORKBENCHES.filter(
    (w) => category === "All Workbenches" || w.category === category,
  );

  return (
    <div className="bg-background text-foreground">
      <SiteNav />

      {/* ─── HERO ───────────────────────────────────────────────────────── */}
      <section className="pt-28 pb-12 px-4 bg-gradient-to-b from-paper to-paper-warm">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-10 items-start">
          <div>
            <p className="text-xs text-muted-foreground mb-6">Home &rsaquo; Workbenches</p>
            <h1 className="text-4xl md:text-5xl text-ink mb-5 leading-[1.12]">
              Twelve Operational Workbenches.<br />
              One Unified <span className="text-forest italic">Capability Fabric.</span>
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Role-aware. Contextual. Governed. Every workbench is powered by the Adaptive Spine and connected to your complete ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href="#workbenches"
                className="px-7 py-3 rounded-lg bg-forest text-paper font-semibold hover:bg-forest-deep transition-colors inline-flex items-center gap-2"
              >
                <Compass className="w-4 h-4" />
                Explore Workbenches
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@integratewise.ai?subject=Workbench%20Overview"
                className="px-7 py-3 rounded-lg font-semibold border border-forest/30 text-forest hover:bg-forest hover:text-paper transition-colors inline-flex items-center gap-2"
              >
                Watch Overview
                <PlayCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="bg-paper border border-border rounded-xl p-6 lg:mt-10">
            <Leaf className="w-6 h-6 text-forest mb-3" />
            <p className="font-semibold text-ink mb-2">One Platform. Every Role.</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Give every team the right context, capabilities, and governance to execute with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* ─── WORKBENCH GRID ─────────────────────────────────────────────── */}
      <section className="py-12 px-4 bg-background" id="workbenches">
        <div className="max-w-7xl mx-auto">

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-border pb-4">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === c
                    ? "bg-forest text-paper"
                    : "text-muted-foreground hover:text-foreground hover:bg-paper-warm"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visible.map((w) => (
              <div key={w.name} className="bg-paper border border-border rounded-xl p-6 hover:border-forest/40 transition-colors flex flex-col">
                <w.icon className="w-6 h-6 text-forest mb-4" />
                <p className="font-semibold text-ink mb-2">{w.name}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{w.desc}</p>
                {w.href ? (
                  <Link href={w.href} className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-forest hover:gap-2.5 transition-all">
                    View Workbench <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <a
                    href={`mailto:hello@integratewise.ai?subject=${encodeURIComponent(`${w.name} Workbench`)}`}
                    className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-forest hover:gap-2.5 transition-all"
                  >
                    View Workbench <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ADAPTIVE SPINE BAND ────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-paper-warm border-y border-border">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)] gap-10 items-center">
          <div>
            <p className="text-[11px] font-mono tracking-widest uppercase text-forest mb-3">Powered by the Adaptive Spine</p>
            <h2 className="text-3xl text-ink mb-4">One memory. Infinite context.</h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Every workbench draws from the Adaptive Spine—your unified operational memory that keeps context, intelligence, and continuity aligned across the entire organization.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: Brain, name: "Memory", sub: "Unified operational memory across every team." },
              { icon: Clock, name: "Context", sub: "Right context, right time, right action." },
              { icon: Sparkles, name: "Intelligence", sub: "AI-enhanced insights that drive better decisions." },
              { icon: InfinityIcon, name: "Continuity", sub: "Seamless handoffs and operational resilience." },
            ].map((item) => (
              <div key={item.name} className="text-center">
                <div className="w-11 h-11 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 text-forest" />
                </div>
                <p className="font-semibold text-ink text-sm mb-1">{item.name}</p>
                <p className="text-xs text-muted-foreground leading-snug">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CLOSING CTA ────────────────────────────────────────────────── */}
      <section className="py-12 px-4 bg-background">
        <div className="max-w-7xl mx-auto bg-forest text-paper rounded-2xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl text-paper mb-2">One Platform. Twelve Workbenches. Unlimited Impact.</h2>
            <p className="text-sm text-paper/70">Connect once. Work everywhere.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href="mailto:hello@integratewise.ai"
              className="px-6 py-3 rounded-lg bg-paper text-forest font-semibold hover:bg-paper-warm transition-colors inline-flex items-center gap-2"
            >
              Start Your Free Trial
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="mailto:hello@integratewise.ai?subject=Sales%20Enquiry"
              className="px-6 py-3 rounded-lg border border-paper/40 text-paper font-semibold hover:border-paper transition-colors inline-flex items-center gap-2"
            >
              Talk to Sales
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
