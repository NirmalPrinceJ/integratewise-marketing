import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, Database, Sparkles, Brain, Shield, Zap, Layout, GitBranch, Lock, Users, TrendingUp, Clock, ChevronRight, Play, Workflow, Layers, Globe, ExternalLink, Code, Table, Key, Eye, Edit3, RefreshCw, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { appConfig } from "@/config/app"

export default function HomePage() {
  const { routes, pages } = appConfig

  return (
    <div className="min-h-screen">
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        {/* Hero Section - Outcome-led value prop */}
        <section 
          className="relative overflow-hidden border-b border-border hero-gradient"
          aria-labelledby="hero-heading"
        >
          {/* Animated background elements - decorative */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 animate-float blur-3xl" />
            <div className="absolute top-20 -left-20 w-60 h-60 rounded-full bg-secondary/5 animate-float-delayed blur-3xl" />
          </div>

          {/* Grid pattern overlay - decorative */}
          <div className="absolute inset-0 grid-pattern opacity-50" aria-hidden="true" />

          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              {/* ICP Badge */}
              <div className="animate-fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
                <Users className="h-4 w-4" aria-hidden="true" />
                <span>For mid-market SaaS teams (200–2,000 employees) on Salesforce, HubSpot, Notion & Slack</span>
              </div>

              <h1 
                id="hero-heading"
                className="animate-slide-up text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
              >
                Unify Notion, Slack, Salesforce, and AI—
                <span className="gradient-text block mt-2">
                  plan, automate, and ship with context intact
                </span>
              </h1>
              
              {/* Measurable outcomes */}
              <div className="animate-slide-up animation-delay-200 mt-8 flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2">
                  <TrendingUp className="h-4 w-4 text-accent" aria-hidden="true" />
                  <span><strong className="text-accent">35%</strong> less context-switching</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2">
                  <Clock className="h-4 w-4 text-accent" aria-hidden="true" />
                  <span><strong className="text-accent">60%</strong> less manual data prep</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2">
                  <Zap className="h-4 w-4 text-accent" aria-hidden="true" />
                  <span><strong className="text-accent">4hrs/week</strong> saved per team member</span>
                </div>
              </div>

              <p className="animate-slide-up animation-delay-300 mt-6 text-pretty text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
                IntegrateWise normalizes your tools through a shared structure (Spine), routes securely (Hub), 
                and executes via AI agents—without migrations or rebuilding your stack.
              </p>

              <div className="animate-slide-up animation-delay-400 mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  className="h-12 px-8 text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow" 
                  asChild
                >
                  <Link href={routes.signup} aria-label="Start free 14-day trial">
                    Start Free Trial <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 text-base group" asChild>
                  <Link href={routes.demo} aria-label="Watch 4-minute product demo">
                    <Play className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" aria-hidden="true" />
                    Watch Demo (4 min)
                  </Link>
                </Button>
              </div>

              <p className="animate-fade-in animation-delay-500 mt-6 text-sm text-muted-foreground">
                14-day trial • No credit card • Onboarding in 15 minutes
              </p>

              {/* Quick integrations preview */}
              <div className="animate-fade-in animation-delay-700 mt-8 flex flex-wrap items-center justify-center gap-4">
                <span className="text-xs text-muted-foreground">Connects with:</span>
                {["Notion", "Slack", "Salesforce", "HubSpot", "Stripe", "Jira"].map((tool) => (
                  <span key={tool} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    {tool}
                  </span>
                ))}
                <Link href={pages.integrations} className="text-sm font-medium text-primary hover:underline">
                  +40 more
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3-Step Onboarding Checklist */}
        <section className="border-b border-border bg-muted/30 py-16" aria-labelledby="onboarding-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="onboarding-heading" className="text-center text-2xl font-bold mb-12">
              Connect once. Everything flows.
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { 
                  step: "1", 
                  title: "Connect Your Tools", 
                  desc: "OAuth into Notion, Slack, Salesforce, HubSpot in under 5 minutes. No API keys required.",
                  time: "5 min",
                  icon: GitBranch,
                },
                { 
                  step: "2", 
                  title: "Spine Normalizes Data", 
                  desc: "Accounts, Contacts, Work Items auto-mapped to canonical schema. Relationships preserved.",
                  time: "Automatic",
                  icon: Database,
                },
                { 
                  step: "3", 
                  title: "Agents Execute Work", 
                  desc: "Brain captures AI conversations. Agents plan, validate, execute with Hub guardrails.",
                  time: "Instant",
                  icon: Sparkles,
                },
              ].map((item) => (
                <div key={item.step} className="relative flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border">
                  <div className="absolute -top-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    {item.step}
                  </div>
                  <div className="mt-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-semibold text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                  <span className="mt-4 text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies / Evidence */}
        <section className="border-b border-border py-16" aria-labelledby="evidence-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 id="evidence-heading" className="text-2xl font-bold">Proven Results</h2>
              <p className="mt-2 text-muted-foreground">Before/after metrics from production deployments</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  company: "Series B SaaS (450 employees)",
                  industry: "FinTech",
                  before: "8 hrs/week on manual CRM-to-Notion sync",
                  after: "Automated bi-directional sync, 92% time reduction",
                  timeline: "4 weeks to production",
                  link: "/resources/case-studies#fintech-b",
                },
                {
                  company: "Customer Success Team (28 CSMs)",
                  industry: "Enterprise Software",
                  before: "Health scores in 3 spreadsheets, 2-day lag",
                  after: "Real-time Health, ARR, Churn dashboards via Render Only",
                  timeline: "2 weeks to production",
                  link: "/resources/case-studies#cs-team",
                },
                {
                  company: "Product Team (60 engineers)",
                  industry: "Developer Tools",
                  before: "AI brainstorms lost in chat history",
                  after: "Second Brain captures 100% of Claude/ChatGPT sessions",
                  timeline: "1 week to production",
                  link: "/resources/case-studies#dev-tools",
                },
              ].map((study, idx) => (
                <Card key={idx} className="border-border">
                  <CardContent className="p-6">
                    <div className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded inline-block mb-3">
                      {study.industry}
                    </div>
                    <h3 className="font-semibold">{study.company}</h3>
                    <div className="mt-4 space-y-3 text-sm">
                      <div className="flex items-start gap-2">
                        <span className="text-destructive font-medium shrink-0">Before:</span>
                        <span className="text-muted-foreground">{study.before}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-accent font-medium shrink-0">After:</span>
                        <span className="text-muted-foreground">{study.after}</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{study.timeline}</span>
                      <Link href={study.link} className="text-xs font-medium text-primary hover:underline">
                        Read case study →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button variant="outline" asChild>
                <Link href="/resources/case-studies">
                  View All Case Studies <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Architecture: Spine Schema Transparency */}
        <section className="border-b border-border py-20 sm:py-24 relative" aria-labelledby="spine-heading">
          <div className="absolute inset-0 dot-pattern opacity-30" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-sm font-medium text-accent mb-6">
                  <Database className="h-4 w-4" aria-hidden="true" />
                  The Spine
                </div>
                <h2 id="spine-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Canonical Data Model
                </h2>
                <p className="mt-4 text-muted-foreground">
                  <strong className="text-foreground">Problem:</strong> Data scattered across tools loses meaning when moved. 
                  Relationships break, formulas fail, context disappears.
                </p>
                <p className="mt-4 text-muted-foreground">
                  <strong className="text-foreground">Solution:</strong> The Spine normalizes all connected tools into a 
                  rigorous canonical schema. Every record maintains provenance, relationships, and audit trail.
                </p>
                <div className="mt-6">
                  <Link href={pages.platform} className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
                    View full architecture <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </Link>
                </div>
              </div>
              
              {/* Schema Details */}
              <div className="space-y-4">
                <Card className="border-border bg-muted/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-mono flex items-center gap-2">
                      <Table className="h-4 w-4" aria-hidden="true" /> Accounts
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs font-mono text-muted-foreground space-y-1">
                    <div><span className="text-primary">id</span>: UUID, PK</div>
                    <div><span className="text-primary">external_id</span>: text, unique per source</div>
                    <div><span className="text-primary">source_system</span>: enum (salesforce|hubspot|notion|...)</div>
                    <div><span className="text-primary">name</span>: text, not null</div>
                    <div><span className="text-primary">created_at/updated_at</span>: timestamptz</div>
                    <div className="text-accent">UNIQUE (external_id, source_system)</div>
                  </CardContent>
                </Card>
                
                <Card className="border-border bg-muted/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-mono flex items-center gap-2">
                      <Table className="h-4 w-4" aria-hidden="true" /> Work Items
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs font-mono text-muted-foreground space-y-1">
                    <div><span className="text-primary">id</span>: UUID, PK</div>
                    <div><span className="text-primary">type</span>: enum (task|ticket|issue)</div>
                    <div><span className="text-primary">title</span>: text, status: enum, priority: enum</div>
                    <div><span className="text-primary">owner_id</span>: FK → Users.id</div>
                    <div><span className="text-primary">external_id, source_system</span>: provenance tracking</div>
                    <div className="text-accent">INDEX (entity_type, entity_id, occurred_at)</div>
                  </CardContent>
                </Card>
                
                <Card className="border-border bg-muted/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-mono flex items-center gap-2">
                      <Table className="h-4 w-4" aria-hidden="true" /> Events (Activity Log)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs font-mono text-muted-foreground space-y-1">
                    <div><span className="text-primary">entity_type</span>: enum, <span className="text-primary">entity_id</span>: UUID</div>
                    <div><span className="text-primary">action</span>: enum (create|update|delete|sync)</div>
                    <div><span className="text-primary">actor</span>: text, <span className="text-primary">payload</span>: jsonb</div>
                    <div><span className="text-primary">occurred_at</span>: timestamptz</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture: Hub Control Layer */}
        <section className="border-b border-border bg-muted/20 py-20 sm:py-24" aria-labelledby="hub-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* RBAC Details */}
              <div className="order-2 lg:order-1 space-y-4">
                <Card className="border-2 border-primary/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Key className="h-4 w-4 text-primary" aria-hidden="true" /> Role-Based Access Control
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-3">
                    <div className="flex items-center gap-3">
                      <code className="text-xs bg-muted px-2 py-1 rounded">Roles</code>
                      <span>admin | editor | viewer | agent</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <code className="text-xs bg-muted px-2 py-1 rounded">Scopes</code>
                      <span>org | workspace | project</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <code className="text-xs bg-muted px-2 py-1 rounded">Principals</code>
                      <span>user | team | service_account</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-accent/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Shield className="h-4 w-4 text-accent" aria-hidden="true" /> Data Boundaries
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent mt-0.5" aria-hidden="true" />
                      <span><strong>Org isolation:</strong> Tenant-level data segregation</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent mt-0.5" aria-hidden="true" />
                      <span><strong>Deny-write lists:</strong> Per-integration write restrictions</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent mt-0.5" aria-hidden="true" />
                      <span><strong>PII masking:</strong> Field-level transforms (email, phone)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent mt-0.5" aria-hidden="true" />
                      <span><strong>Reversible only in Full Integration mode</strong></span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-secondary/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-secondary" aria-hidden="true" /> Agent Execution Model
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded">Plan</span>
                      <ArrowRight className="h-3 w-3" aria-hidden="true" />
                      <span className="bg-accent/10 text-accent px-2 py-1 rounded">Validate Permissions</span>
                      <ArrowRight className="h-3 w-3" aria-hidden="true" />
                      <span className="bg-secondary/10 text-secondary px-2 py-1 rounded">Execute</span>
                      <ArrowRight className="h-3 w-3" aria-hidden="true" />
                      <span className="bg-muted px-2 py-1 rounded">Write Back</span>
                    </div>
                    <p className="mt-3 text-xs">
                      Retry: exponential backoff (1s, 2s, 4s, max 3). Idempotency via <code className="bg-muted px-1 rounded">external_id + source_system</code>.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6">
                  <Shield className="h-4 w-4" aria-hidden="true" />
                  The Hub
                </div>
                <h2 id="hub-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Control Layer & Guardrails
                </h2>
                <p className="mt-4 text-muted-foreground">
                  <strong className="text-foreground">Problem:</strong> Automation without boundaries creates chaos. 
                  Wrong writes, permission leaks, runaway agents.
                </p>
                <p className="mt-4 text-muted-foreground">
                  <strong className="text-foreground">Solution:</strong> The Hub enforces routing policies, RBAC, 
                  and boundaries. Every agent action is policy-evaluated and audit-logged.
                </p>
                <div className="mt-6">
                  <Link href="/security" className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
                    View security architecture <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Operating Modes Comparison Table */}
        <section className="border-b border-border py-20 sm:py-24" aria-labelledby="modes-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 id="modes-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
                Full Integration vs Render Only
              </h2>
              <p className="mt-4 text-muted-foreground">
                Choose the access level that fits your security and compliance requirements
              </p>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto">
              <table className="w-full max-w-4xl mx-auto text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-semibold">Capability</th>
                    <th className="text-center py-4 px-4 font-semibold bg-primary/5 border-x border-border">
                      <div className="flex items-center justify-center gap-2">
                        <Edit3 className="h-4 w-4 text-primary" aria-hidden="true" />
                        Full Integration
                      </div>
                    </th>
                    <th className="text-center py-4 px-4 font-semibold bg-accent/5">
                      <div className="flex items-center justify-center gap-2">
                        <Eye className="h-4 w-4 text-accent" aria-hidden="true" />
                        Render Only
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium text-foreground">Write Permissions</td>
                    <td className="text-center py-3 px-4 bg-primary/5 border-x border-border">
                      <Check className="h-4 w-4 text-primary mx-auto" aria-label="Yes" />
                    </td>
                    <td className="text-center py-3 px-4 bg-accent/5">
                      <span className="text-xs">None (read-only)</span>
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium text-foreground">Sync Behavior</td>
                    <td className="text-center py-3 px-4 bg-primary/5 border-x border-border">Bi-directional</td>
                    <td className="text-center py-3 px-4 bg-accent/5">Pull-only, TTL cache</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium text-foreground">Agent Actions</td>
                    <td className="text-center py-3 px-4 bg-primary/5 border-x border-border">Create, update, delete</td>
                    <td className="text-center py-3 px-4 bg-accent/5">Read, compute, render</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium text-foreground">PII Handling</td>
                    <td className="text-center py-3 px-4 bg-primary/5 border-x border-border">Reversible transforms</td>
                    <td className="text-center py-3 px-4 bg-accent/5">Masked, non-reversible</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium text-foreground">Best For</td>
                    <td className="text-center py-3 px-4 bg-primary/5 border-x border-border">Ops automation</td>
                    <td className="text-center py-3 px-4 bg-accent/5">Exec dashboards, compliance</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-foreground">Typical Roles</td>
                    <td className="text-center py-3 px-4 bg-primary/5 border-x border-border">RevOps, CS Ops, Engineers</td>
                    <td className="text-center py-3 px-4 bg-accent/5">Executives, Auditors, Legal</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Security & Compliance Specifics */}
        <section className="border-b border-border bg-muted/20 py-20 sm:py-24" aria-labelledby="security-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-sm font-medium text-accent mb-6">
                <Lock className="h-4 w-4" aria-hidden="true" />
                Security & Compliance
              </div>
              <h2 id="security-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
                Enterprise-Grade Security
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" aria-hidden="true" />
                    SOC 2 Type II
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    <li>• Audit year: 2024</li>
                    <li>• Scope: Spine, Hub, Agents</li>
                    <li>• Key controls: Change mgmt, secrets, vuln mgmt</li>
                    <li>• Report available under NDA</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Globe className="h-5 w-5 text-secondary" aria-hidden="true" />
                    GDPR Compliant
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    <li>• DPA available</li>
                    <li>• Subprocessor list published</li>
                    <li>• EU/US data residency options</li>
                    <li>• ROPA and DPIA templates</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-accent" aria-hidden="true" />
                    HIPAA Ready
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    <li>• BAA available for Enterprise</li>
                    <li>• Covered: Spine, Hub (Render Only)</li>
                    <li>• Excluded: Agent write-back to ePHI</li>
                    <li>• Contact sales for details</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Key className="h-5 w-5 text-primary" aria-hidden="true" />
                    SSO & Auth
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    <li>• Okta, Azure AD, Google IdP</li>
                    <li>• SCIM provisioning</li>
                    <li>• JIT user creation</li>
                    <li>• MFA required (TOTP, WebAuthn)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center text-sm text-muted-foreground">
              <p>
                Incident response: P1 &lt;15min, P2 &lt;1hr • RTO: 4hrs, RPO: 1hr • 
                <Link href="https://status.integratewise.co" className="text-primary hover:underline ml-1">
                  Status Page ↗
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* BYOM Configuration */}
        <section className="border-b border-border py-20 sm:py-24" aria-labelledby="byom-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/5 px-3 py-1 text-sm font-medium text-secondary mb-6">
                  <Code className="h-4 w-4" aria-hidden="true" />
                  BYOM
                </div>
                <h2 id="byom-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Bring Your Own Model
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Start with built-in models. When ready, connect your own model—commercial or self-hosted—using 
                  your API key. Context and logic are preserved through the Spine.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["OpenAI", "Anthropic Claude", "Google Gemini", "Azure OpenAI", "AWS Bedrock", "Self-hosted (Ollama, vLLM)"].map((provider) => (
                    <span key={provider} className="rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary">
                      {provider}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <Link href="/resources/api" className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
                    View API Reference & SDK <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </Link>
                </div>
              </div>
              
              <Card className="border-2 border-secondary/20 bg-muted/30">
                <CardHeader>
                  <CardTitle className="text-sm font-mono">BYOM Configuration</CardTitle>
                </CardHeader>
                <CardContent className="font-mono text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">provider:</span>
                    <span className="text-secondary">enum (openai|anthropic|google|azure|bedrock|custom)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">model_name:</span>
                    <span>text (e.g., &quot;gpt-4-turbo&quot;)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">endpoint_url:</span>
                    <span>URL (for custom/self-hosted)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">api_key:</span>
                    <span className="text-accent">secret_manager_ref</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">temperature:</span>
                    <span>float (0.0–2.0)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">max_tokens:</span>
                    <span>int</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">rate_limit:</span>
                    <span>QPS per org</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border text-muted-foreground">
                    <p>Per-org model keys • Token budgets • Per-Agent rate limits</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Integrations with Depth */}
        <section className="border-b border-border bg-muted/20 py-20 sm:py-24" aria-labelledby="integrations-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 id="integrations-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
                Deep Integrations
              </h2>
              <p className="mt-4 text-muted-foreground">
                Beyond logos: scopes, sync frequency, field maps, and conflict resolution
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Salesforce",
                  scopes: "read/write: Account, Contact, Opportunity, Task",
                  sync: "Real-time (Change Data Capture) + 15min full sync",
                  conflict: "Last-write-wins with reconciliation export",
                },
                {
                  name: "HubSpot",
                  scopes: "read/write: Company, Contact, Deal, Ticket",
                  sync: "Webhook-driven + 30min full sync",
                  conflict: "Merge-on-diff for Contacts",
                },
                {
                  name: "Notion",
                  scopes: "read/write: Databases, Pages, Blocks",
                  sync: "Polling (5min) + manual trigger",
                  conflict: "Block-level versioning",
                },
                {
                  name: "Slack",
                  scopes: "read: channels, messages | write: post, react",
                  sync: "Event-driven (Socket Mode)",
                  conflict: "N/A (append-only)",
                },
                {
                  name: "Jira",
                  scopes: "read/write: Issue, Project, Sprint, Comment",
                  sync: "Webhook + 15min full sync",
                  conflict: "Status field: last-write-wins",
                },
                {
                  name: "Stripe",
                  scopes: "read: Subscription, Invoice, Customer",
                  sync: "Webhook-driven (all billing events)",
                  conflict: "N/A (read-only default)",
                },
              ].map((integration) => (
                <Card key={integration.name} className="border-border">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg">{integration.name}</h3>
                    <div className="mt-4 space-y-3 text-sm">
                      <div>
                        <span className="text-xs font-medium text-muted-foreground uppercase">Scopes</span>
                        <p className="text-muted-foreground">{integration.scopes}</p>
                      </div>
                      <div>
                        <span className="text-xs font-medium text-muted-foreground uppercase">Sync Frequency</span>
                        <p className="text-muted-foreground">{integration.sync}</p>
                      </div>
                      <div>
                        <span className="text-xs font-medium text-muted-foreground uppercase">Conflict Resolution</span>
                        <p className="text-muted-foreground">{integration.conflict}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button asChild>
                <Link href={pages.integrations}>
                  Explore All 40+ Integrations <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Second Brain with specifics */}
        <section className="border-b border-border py-20 sm:py-24" aria-labelledby="brain-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6">
                  <Brain className="h-4 w-4" aria-hidden="true" />
                  Second Brain
                </div>
                <h2 id="brain-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Capture Every AI Conversation
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Stream AI chats into a searchable Second Brain via secure webhooks. 
                  Never lose a brainstorm again.
                </p>
                
                <div className="mt-6">
                  <h3 className="text-sm font-semibold mb-3">Supported AI Sources:</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: "ChatGPT", method: "Webhook" },
                      { name: "Claude", method: "Webhook" },
                      { name: "Gemini", method: "API" },
                      { name: "Perplexity", method: "Webhook" },
                      { name: "NotebookLM", method: "Manual import" },
                    ].map((ai) => (
                      <span key={ai.name} className="rounded-lg bg-primary/10 px-3 py-2 text-sm">
                        <span className="font-medium">{ai.name}</span>
                        <span className="text-xs text-muted-foreground ml-1">({ai.method})</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
                  <h4 className="text-sm font-semibold">Retention Policy:</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    90-day default • Configurable per org • Export to Notion/Google Drive • 
                    Delete on request (GDPR compliant)
                  </p>
                </div>
              </div>
              
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-sm">Example: Brainstorm → Project Plan</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 bg-muted/50 rounded-lg text-sm">
                    <p className="text-xs font-medium text-muted-foreground mb-1">Claude conversation captured:</p>
                    <p className="text-muted-foreground italic">&quot;Let&apos;s plan the Q1 customer health dashboard...&quot;</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowRight className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <div className="p-3 bg-accent/10 rounded-lg text-sm">
                    <p className="text-xs font-medium text-accent mb-1">Brain Agent output:</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>✓ Project created in Notion</li>
                      <li>✓ 5 tasks synced to Jira</li>
                      <li>✓ Kickoff meeting scheduled</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Solutions by Lens */}
        <section className="border-b border-border bg-muted/20 py-20 sm:py-24" aria-labelledby="solutions-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 id="solutions-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
                Specialized Lenses
              </h2>
              <p className="mt-4 text-muted-foreground">
                Same platform, tailored views with precise KPIs per role
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  title: "Personal", 
                  kpis: ["Tasks completed/day", "Focus time %", "AI sessions captured"],
                  href: "/solutions/individuals",
                },
                { 
                  title: "Work (Team)", 
                  kpis: ["Sprint velocity", "Blockers resolved", "Cross-tool handoffs"],
                  href: "/solutions/teams",
                },
                { 
                  title: "Business Ops", 
                  kpis: ["Pipeline accuracy", "Forecast variance", "Process cycle time"],
                  href: "/solutions/business-ops",
                },
                { 
                  title: "Customer Success", 
                  kpis: ["Health Score", "ARR at risk", "NRR %", "Technical debt index"],
                  href: "/solutions/customer-success",
                },
              ].map((lens) => (
                <Card key={lens.title} className="border-border card-hover">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg">{lens.title}</h3>
                    <ul className="mt-4 space-y-2">
                      {lens.kpis.map((kpi) => (
                        <li key={kpi} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                          {kpi}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href={lens.href} 
                      className="inline-flex items-center text-sm font-medium text-primary mt-4 hover:underline"
                    >
                      Learn more <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-20 sm:py-24 overflow-hidden" aria-labelledby="cta-heading">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-primary/10" aria-hidden="true" />
          <div className="absolute inset-0 dot-pattern opacity-30" aria-hidden="true" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 id="cta-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to unify your stack?
              </h2>
              <p className="mt-4 text-muted-foreground">
                14-day free trial. Onboard in 15 minutes. No credit card required.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button size="lg" className="h-12 px-8 shadow-lg shadow-primary/25" asChild>
                  <Link href={routes.signup}>
                    Start Free Trial <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8" asChild>
                  <Link href="/company/contact?type=demo">
                    Talk to Sales
                  </Link>
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <Link href={pages.pricing} className="hover:text-foreground">View Pricing</Link>
                <Link href="/resources/docs" className="hover:text-foreground">Documentation</Link>
                <Link href="/resources/api" className="hover:text-foreground">API Reference</Link>
                <Link href="/resources/changelog" className="hover:text-foreground">Changelog</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
