import Link from "next/link"
import { ArrowRight, Check, Database, Sparkles, Brain, Shield, Zap, Layout, GitBranch, Lock, Users, TrendingUp, Clock, ChevronRight, Play, Workflow, Layers, Globe, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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
        {/* Hero Section - Enhanced with animations and visual elements */}
        <section 
          className="relative overflow-hidden border-b border-border hero-gradient"
          aria-labelledby="hero-heading"
        >
          {/* Animated background elements - decorative */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 animate-float blur-3xl" />
            <div className="absolute top-20 -left-20 w-60 h-60 rounded-full bg-secondary/5 animate-float-delayed blur-3xl" />
            <div className="absolute bottom-20 right-1/4 w-40 h-40 rounded-full bg-accent/5 animate-pulse-glow blur-2xl" />
          </div>

          {/* Grid pattern overlay - decorative */}
          <div className="absolute inset-0 grid-pattern opacity-50" aria-hidden="true" />

          <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:py-40 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              {/* Badge */}
              <div className="animate-fade-in mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                <span>AI-Powered Productivity Platform</span>
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </div>

              <h1 
                id="hero-heading"
                className="animate-slide-up text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
              >
                The Productivity OS for{" "}
                <span className="gradient-text">
                  Effortless Work
                </span>
              </h1>
              
              <p className="animate-slide-up animation-delay-200 mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl max-w-3xl mx-auto">
                IntegrateWise sits on top of the tools you already use—Notion, Coda, Slack, email, calendars, CRMs,
                billing tools, and AI apps like ChatGPT, Claude, Gemini, and more.
              </p>
              
              <p className="animate-slide-up animation-delay-300 mt-4 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl max-w-3xl mx-auto">
                Connect everything through a shared structure, route it securely, and use AI agents to turn your work into action.
              </p>

              <div className="animate-slide-up animation-delay-400 mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  className="h-12 px-8 text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow" 
                  asChild
                >
                  <Link href={routes.signup} aria-label="Start free trial">
                    Start Free <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 text-base group" asChild>
                  <Link href={routes.demo} aria-label="Watch product demo">
                    <Play className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" aria-hidden="true" />
                    Watch Demo
                  </Link>
                </Button>
              </div>

              <p className="animate-fade-in animation-delay-500 mt-8 text-sm text-muted-foreground">
                Works with modern teams and individuals • Full integration or read-only mode • BYOM supported
              </p>
            </div>

            {/* Floating tool icons - decorative */}
            <div className="hidden lg:block absolute left-10 top-1/3 animate-float opacity-60" aria-hidden="true">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-lg border border-border">
                <Database className="h-7 w-7 text-primary" />
              </div>
            </div>
            <div className="hidden lg:block absolute right-10 top-1/4 animate-float-delayed opacity-60" aria-hidden="true">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-lg border border-border">
                <Brain className="h-7 w-7 text-secondary" />
              </div>
            </div>
            <div className="hidden lg:block absolute left-20 bottom-20 animate-pulse-glow opacity-60" aria-hidden="true">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-lg border border-border">
                <Zap className="h-6 w-6 text-accent" />
              </div>
            </div>
            <div className="hidden lg:block absolute right-20 bottom-32 animate-float opacity-60" aria-hidden="true">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-lg border border-border">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section - Honest descriptors instead of unverifiable metrics */}
        <section className="border-b border-border bg-muted/30 py-16" aria-labelledby="capabilities-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="capabilities-heading" className="sr-only">Platform Capabilities</h2>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[
                { value: "Multi-AI", label: "Orchestration", desc: "Claude, ChatGPT, Gemini, Perplexity", icon: Brain },
                { value: "Zero", label: "Migration Required", desc: "Connect existing tools as-is", icon: Workflow },
                { value: "Enterprise", label: "Security Ready", desc: "SOC 2 controls, RBAC, audit logs", icon: Shield },
                { value: "BYOM", label: "Supported", desc: "Bring your own AI model", icon: Zap },
              ].map((capability) => (
                <div key={capability.label} className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <capability.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold tracking-tight sm:text-3xl gradient-text">{capability.value}</div>
                  <div className="mt-1 text-sm font-medium text-foreground">{capability.label}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{capability.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section - Clarified as supported tools */}
        <section className="border-b border-border py-12" aria-labelledby="integrations-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="integrations-heading" className="text-center text-sm font-medium text-muted-foreground mb-8">
              CONNECTS WITH YOUR EXISTING TOOLS
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {[
                { name: "Notion", type: "Docs" },
                { name: "Slack", type: "Comms" },
                { name: "Salesforce", type: "CRM" },
                { name: "HubSpot", type: "CRM" },
                { name: "Google Workspace", type: "Suite" },
                { name: "Stripe", type: "Payments" },
                { name: "Zendesk", type: "Support" },
                { name: "Jira", type: "Project" },
              ].map((tool) => (
                <div key={tool.name} className="text-center group">
                  <div className="text-lg font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                    {tool.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{tool.type}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link 
                href={pages.integrations} 
                className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
              >
                View all integrations <ArrowRight className="h-3 w-3" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="border-b border-border py-24 sm:py-32 relative overflow-hidden" aria-labelledby="problem-heading">
          <div className="absolute inset-0 mesh-gradient opacity-50" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-destructive/20 bg-destructive/5 px-3 py-1 text-sm font-medium text-destructive mb-6">
                <span className="flex h-2 w-2 rounded-full bg-destructive" aria-hidden="true" />
                The Challenge
              </div>
              <h2 id="problem-heading" className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                The Problem We All Face
              </h2>
              <p className="mt-6 text-pretty text-xl leading-relaxed text-muted-foreground">
                Modern work isn&apos;t hard because people aren&apos;t capable.
                <br />
                <strong className="text-foreground">It&apos;s hard because we&apos;re constantly fighting our tools.</strong>
              </p>
              <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
                Every day, we jump between Notion, Coda, Slack, email, CRMs, calendars, billing tools—and now a growing
                list of AI apps—just to move one piece of work forward.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { text: "Information lives in different apps, tabs, and chat histories", icon: Layers },
                  { text: "Tasks fall between tools and never turn into a clear plan", icon: Workflow },
                  { text: "Great ideas from AI brainstorms disappear when the chat ends", icon: Brain },
                  { text: "Moving data breaks relationships, formulas, and logic", icon: Database },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3 p-4 rounded-lg bg-destructive/5 border border-destructive/10">
                    <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-destructive/70" aria-hidden="true" />
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-pretty leading-relaxed text-muted-foreground">
                So we copy. Paste. Export. Import. Again and again.
              </p>
              <p className="mt-4 text-pretty text-lg font-medium text-foreground">
                It&apos;s exhausting. It kills momentum. And it quietly slows down even the best teams.
              </p>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background py-24 sm:py-32 relative" aria-labelledby="solution-heading">
          <div className="absolute inset-0 dot-pattern opacity-30" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-sm font-medium text-accent mb-6">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                The Solution
              </div>
              <h2 id="solution-heading" className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                What IntegrateWise Is
              </h2>
              <p className="mt-6 text-pretty text-xl leading-relaxed">
                <strong className="gradient-text">IntegrateWise is the AI Agents Platform for Effortless Work.</strong>
              </p>
              <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
                IntegrateWise sits on top of your tools. It doesn&apos;t replace them.
              </p>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">Instead, it:</p>
              <div className="mt-6 space-y-3">
                {[
                  "Connects your existing tools securely",
                  "Organizes data through a shared structural layer (the Spine)",
                  "Routes and secures information through a control layer (the Hub)",
                  "Adds AI agents for insights, automation, and brainstorming",
                  "Lets you bring your own AI model (BYOM) when you're ready",
                ].map((item, index) => (
                  <div key={item} className="flex items-start gap-3 p-3 rounded-lg bg-accent/5 border border-accent/10 hover:bg-accent/10 transition-colors">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold" aria-hidden="true">
                      {index + 1}
                    </div>
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-pretty leading-relaxed text-muted-foreground">
                Think of IntegrateWise as the <strong className="text-foreground">connective tissue and brain</strong> for
                your digital work.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works - Architecture */}
        <section className="border-b border-border py-24 sm:py-32 relative overflow-hidden" aria-labelledby="architecture-heading">
          <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6">
                <Workflow className="h-4 w-4" aria-hidden="true" />
                How It Works
              </div>
              <h2 id="architecture-heading" className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Connect once. Everything flows.
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                A seamless architecture that brings all your tools together
              </p>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: GitBranch, title: "Connect Tools", desc: "Plug in the tools you already use.", color: "primary" },
                { icon: Database, title: "Spine (Structure)", desc: "Normalize and preserve meaning across systems.", color: "secondary" },
                { icon: Shield, title: "Hub (Control)", desc: "Secure routing + permissions + boundaries.", color: "accent" },
                { icon: Zap, title: "AI Loader", desc: "One-click import that preserves context and logic.", color: "primary" },
                { icon: Brain, title: "Brain + Brainstorm", desc: "Your thinking becomes searchable memory.", color: "secondary" },
                { icon: Sparkles, title: "Agents", desc: "Automate, plan, and act—without chaos.", color: "accent" },
                { icon: Layout, title: "Render", desc: "Universal output: docs, decks, emails, SOPs, plans.", color: "primary" },
                { icon: Globe, title: "Views (Lenses)", desc: "Personal, Work, Business, and CS views.", color: "secondary" },
              ].map((step, index) => (
                <Card key={step.title} className="border-border card-hover group relative overflow-hidden">
                  <CardContent className="relative p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <step.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <span className="text-xs font-mono text-muted-foreground" aria-hidden="true">0{index + 1}</span>
                    </div>
                    <h3 className="font-semibold text-lg">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" asChild>
                <Link href={pages.platform}>
                  Learn about architecture <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Operating Modes */}
        <section className="border-b border-border bg-gradient-to-b from-background to-muted/30 py-24 sm:py-32" aria-labelledby="modes-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6">
                <Shield className="h-4 w-4" aria-hidden="true" />
                Operating Modes
              </div>
              <h2 id="modes-heading" className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Full Integration or Render Only
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Choose the level of access that fits your security and workflow needs
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-2">
              <Card className="border-2 border-primary relative overflow-hidden card-hover">
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-bl-lg">
                  FULL ACCESS
                </div>
                <CardContent className="p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 mb-6">
                    <Zap className="h-7 w-7 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold">Full Integration</h3>
                  <p className="mt-2 text-muted-foreground">Complete automation and sync capabilities</p>
                  <div className="mt-6 space-y-4">
                    {[
                      "Two-way sync and automation",
                      "Agents can create, update, and orchestrate work",
                      "Approvals and guardrails for safety",
                      "Best for teams ready for workflow automation",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                        <p className="text-sm text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent card-hover">
                <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-bl-lg">
                  COMPLIANCE-FRIENDLY
                </div>
                <CardContent className="p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 mb-6">
                    <Shield className="h-7 w-7 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold">Render Only</h3>
                  <p className="mt-2 text-muted-foreground">Safe, read-only access for sensitive environments</p>
                  <div className="mt-6 space-y-4">
                    {[
                      "Read-only dashboards and analytics",
                      "Zero risk to source systems",
                      "TTL cache with no permanent storage",
                      "Best for compliance-first organizations",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                        <p className="text-sm text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <p className="mt-8 text-center text-muted-foreground">
              Switch modes based on your role, team, or compliance requirements.
            </p>
          </div>
        </section>

        {/* Second Brain Section */}
        <section className="border-b border-border py-24 sm:py-32 relative" aria-labelledby="brain-heading">
          <div className="absolute inset-0 mesh-gradient opacity-30" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/5 px-3 py-1 text-sm font-medium text-secondary mb-6">
                  <Brain className="h-4 w-4" aria-hidden="true" />
                  Second Brain
                </div>
                <h2 id="brain-heading" className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  Your AI Conversations, Preserved
                </h2>
                <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                  Your ideas don&apos;t only live in docs. They live in conversations—especially AI conversations.
                </p>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  IntegrateWise lets you stream AI chats from ChatGPT, Claude, Gemini, Grok, and Perplexity into
                  one place using secure webhooks.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Claude", "ChatGPT", "Gemini", "Perplexity", "NotebookLM"].map((ai) => (
                    <span key={ai} className="rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary">
                      {ai}
                    </span>
                  ))}
                </div>
                <div className="mt-8">
                  <Button asChild>
                    <Link href={routes.connectBrain} aria-label="Connect your AI conversations to Brain">
                      Connect Brain <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <Card className="border-2 border-secondary/20 bg-gradient-to-br from-secondary/5 to-background">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/20">
                        <Brain className="h-5 w-5 text-secondary" aria-hidden="true" />
                      </div>
                      <h3 className="font-semibold text-lg">
                        Brainstorming Layer → Searchable Second Brain
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground mb-6">The Brain Agent helps you:</p>
                    <div className="space-y-4">
                      {[
                        "Revisit and refine your thinking",
                        "Connect ideas across tools and time",
                        "Turn raw brainstorming into structured plans, tasks, and documents",
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20">
                            <Check className="h-4 w-4 text-accent" aria-hidden="true" />
                          </div>
                          <p className="text-sm text-muted-foreground">{item}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-border">
                      <p className="font-medium text-foreground">Your ideas stop disappearing—and start compounding.</p>
                    </div>
                  </CardContent>
                </Card>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-secondary/10 blur-2xl" aria-hidden="true" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-accent/10 blur-2xl" aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="border-b border-border py-24 sm:py-32 relative overflow-hidden" aria-labelledby="security-heading">
          <div className="absolute inset-0 dot-pattern opacity-30" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-sm font-medium text-accent mb-6">
                  <Lock className="h-4 w-4" aria-hidden="true" />
                  Security First
                </div>
                <h2 id="security-heading" className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  Secure, seamless, and in your control
                </h2>
                <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                  IntegrateWise runs on secure global cloud infrastructure with modern authentication and strict boundaries.
                </p>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  In many cases, IntegrateWise acts as a secure router and normalizer—not a permanent data owner—so you stay
                  in control of what&apos;s stored, synced, or read-only.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  {[
                    { label: "SOC 2 Controls", desc: "Mapped & monitored" },
                    { label: "RBAC", desc: "Role-based access" },
                    { label: "Audit Logs", desc: "Full traceability" },
                    { label: "SSO Ready", desc: "Enterprise auth" },
                  ].map((badge) => (
                    <div key={badge.label} className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2">
                      <Shield className="h-4 w-4 text-accent" aria-hidden="true" />
                      <div>
                        <span className="text-sm font-medium">{badge.label}</span>
                        <span className="text-xs text-muted-foreground ml-1">({badge.desc})</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link 
                    href={pages.security} 
                    className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
                  >
                    Learn about security <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              <Card className="border-2 border-secondary bg-gradient-to-br from-secondary/5 to-background">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/20">
                      <Lock className="h-8 w-8 text-secondary" aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold">Bring Your Own AI Model</h3>
                  <p className="text-sm text-muted-foreground mt-1">BYOM Support</p>
                  <p className="mt-6 leading-relaxed text-muted-foreground">
                    Start with built-in models for a smooth experience. When you&apos;re ready, connect your own
                    model—commercial or self-hosted—using your API key. Context and logic are preserved.
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-2">
                    {["OpenAI", "Anthropic", "Google AI", "Azure OpenAI", "Self-hosted"].map((model) => (
                      <span key={model} className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
                        {model}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="border-b border-border bg-muted/20 py-24 sm:py-32" aria-labelledby="solutions-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6">
                <Users className="h-4 w-4" aria-hidden="true" />
                Solutions
              </div>
              <h2 id="solutions-heading" className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Built for anyone. Specialized when you need it.
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Whether you work solo or lead a team, IntegrateWise adapts to your needs
              </p>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "For Individuals", desc: "Personal productivity OS. Organize your life, work, and ideas in one place.", icon: Users, href: "/solutions/individuals" },
                { title: "For Teams", desc: "Shared tasks, shared context. Collaborate seamlessly across tools and time zones.", icon: Workflow, href: "/solutions/teams" },
                { title: "For Business Ops", desc: "Workflows, analytics, automation. Scale operations without scaling complexity.", icon: TrendingUp, href: "/solutions/business-ops" },
                { title: "For Customer Success", desc: "CS Intelligence lens with Health, ARR, Churn, and Technical Health insights.", icon: Shield, href: "/solutions/customer-success" },
              ].map((solution) => (
                <Card key={solution.title} className="border-border card-hover group">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
                      <solution.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-semibold text-lg">{solution.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{solution.desc}</p>
                    <Link 
                      href={solution.href} 
                      className="inline-flex items-center text-sm font-medium text-primary mt-4 group-hover:underline"
                      aria-label={`Learn more about ${solution.title}`}
                    >
                      Learn more <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Outcome Section */}
        <section className="border-b border-border bg-gradient-to-b from-background to-primary/5 py-24 sm:py-32" aria-labelledby="outcome-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-sm font-medium text-accent mb-6">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                The Outcome
              </div>
              <h2 id="outcome-heading" className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                This is what Effortless Work really looks like
              </h2>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">With IntegrateWise:</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 max-w-2xl mx-auto">
                {[
                  { text: "You spend less time organizing and more time doing", icon: Clock },
                  { text: "Your ideas don't vanish—they build on each other", icon: Brain },
                  { text: "Your tools finally work together instead of against you", icon: Workflow },
                  { text: "Decisions get easier because context is always within reach", icon: TrendingUp },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-4 p-4 rounded-xl bg-accent/5 border border-accent/10 text-left">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20 shrink-0">
                      <item.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-24 sm:py-32 overflow-hidden" aria-labelledby="cta-heading">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-primary/10" aria-hidden="true" />
          <div className="absolute inset-0 dot-pattern opacity-30" aria-hidden="true" />
          
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-8">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Start Your Journey
              </div>
              <h2 id="cta-heading" className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Ready to experience <span className="gradient-text">Effortless Work</span>?
              </h2>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                Start with IntegrateWise. Work smarter from day one—and let your tools finally work together.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button size="lg" className="h-14 px-10 text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all" asChild>
                  <Link href={routes.signup} aria-label="Start your free trial">
                    Start Free <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-10 text-base" asChild>
                  <Link href="/company/contact?type=demo" aria-label="Book a demo with our team">
                    Talk to Sales
                  </Link>
                </Button>
              </div>
              <p className="mt-8 text-sm text-muted-foreground">
                No credit card required • Free trial available • Enterprise plans with custom terms
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
