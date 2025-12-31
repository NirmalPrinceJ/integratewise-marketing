import Link from "next/link"
import { ArrowRight, Check, Database, Sparkles, Brain, Shield, Zap, Layout, GitBranch, Lock, Star, Users, TrendingUp, Clock, ChevronRight, Play, Workflow, Layers, Globe, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { PartnerLogos } from "@/components/PartnerLogos"

// Design System Colors
const colors = {
  primary: "#3F51B5",
  primaryLight: "#5C6BC0",
  light: "#F3F4F6",
  dark: "#1E2A4A",
  accent: "#F54476",
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section - Enhanced with animations and visual elements */}
      <section className="relative overflow-hidden border-b border-border hero-gradient">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full animate-float blur-3xl" style={{ backgroundColor: `${colors.primary}08` }} />
          <div className="absolute top-20 -left-20 w-60 h-60 rounded-full animate-float-delayed blur-3xl" style={{ backgroundColor: `${colors.primaryLight}08` }} />
          <div className="absolute bottom-20 right-1/4 w-40 h-40 rounded-full animate-pulse-glow blur-2xl" style={{ backgroundColor: `${colors.accent}06` }} />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid-pattern opacity-50" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:py-40 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="animate-fade-in mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium" style={{ borderColor: `${colors.primary}30`, backgroundColor: `${colors.primary}08`, color: colors.primary }}>
              <Sparkles className="h-4 w-4" />
              <span>AI-Powered Productivity Platform</span>
              <ChevronRight className="h-4 w-4" />
            </div>

            <h1 className="animate-slide-up text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl" style={{ color: colors.dark }}>
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

            {/* Primary CTAs - Watch Demo & Book Demo */}
            <div className="animate-slide-up animation-delay-400 mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button 
                size="lg" 
                variant="outline" 
                className="h-12 px-8 text-base group" 
                asChild
              >
                <Link href="/demo">
                  <Play className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
                  Watch Demo
                </Link>
              </Button>
              <Button 
                size="lg" 
                className="h-12 px-8 text-base shadow-lg transition-shadow" 
                style={{ backgroundColor: colors.primary, boxShadow: `0 4px 14px ${colors.primary}40` }}
                asChild
              >
                <Link href="/demo#book">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Demo
                </Link>
              </Button>
            </div>

            <p className="animate-fade-in animation-delay-500 mt-8 text-sm text-muted-foreground">
              Works with modern teams and individuals • Full integration or read-only mode • BYOM supported
            </p>
          </div>

          {/* Floating tool icons */}
          <div className="hidden lg:block absolute left-10 top-1/3 animate-float opacity-60">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-lg border border-border">
              <Database className="h-7 w-7" style={{ color: colors.primary }} />
            </div>
          </div>
          <div className="hidden lg:block absolute right-10 top-1/4 animate-float-delayed opacity-60">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-lg border border-border">
              <Brain className="h-7 w-7" style={{ color: colors.primaryLight }} />
            </div>
          </div>
          <div className="hidden lg:block absolute left-20 bottom-20 animate-pulse-glow opacity-60">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-lg border border-border">
              <Zap className="h-6 w-6" style={{ color: colors.accent }} />
            </div>
          </div>
          <div className="hidden lg:block absolute right-20 bottom-32 animate-float opacity-60">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-lg border border-border">
              <Sparkles className="h-6 w-6" style={{ color: colors.primary }} />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Stats Section */}
      <section className="border-b border-border py-16" style={{ backgroundColor: `${colors.light}80` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "10K+", label: "Active Users", icon: Users },
              { value: "50M+", label: "Tasks Automated", icon: Workflow },
              { value: "99.9%", label: "Uptime SLA", icon: TrendingUp },
              { value: "4.9/5", label: "Customer Rating", icon: Star },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: `${colors.primary}15` }}>
                    <stat.icon className="h-6 w-6" style={{ color: colors.primary }} />
                  </div>
                </div>
                <div className="text-3xl font-bold tracking-tight sm:text-4xl gradient-text">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section - Partner Logos */}
      <section className="border-b border-border py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-muted-foreground mb-8">
            TRUSTED BY INNOVATIVE TEAMS WORLDWIDE
          </p>
          <PartnerLogos variant="compact" />
        </div>
      </section>

      {/* Problem Section - Enhanced */}
      <section className="border-b border-border py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-destructive/20 bg-destructive/5 px-3 py-1 text-sm font-medium text-destructive mb-6">
              <span className="flex h-2 w-2 rounded-full bg-destructive animate-pulse" />
              The Challenge
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl" style={{ color: colors.dark }}>The Problem We All Face</h2>
            <p className="mt-6 text-pretty text-xl leading-relaxed text-muted-foreground">
              Modern work isn&apos;t hard because people aren&apos;t capable.
              <br />
              <strong style={{ color: colors.dark }}>It&apos;s hard because we&apos;re constantly fighting our tools.</strong>
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
                  <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-destructive/70" />
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-pretty leading-relaxed text-muted-foreground">
              So we copy. Paste. Export. Import. Again and again.
            </p>
            <p className="mt-4 text-pretty text-lg font-medium" style={{ color: colors.dark }}>
              It&apos;s exhausting. It kills momentum. And it quietly slows down even the best teams.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section - Enhanced */}
      <section className="border-b border-border py-24 sm:py-32 relative" style={{ background: `linear-gradient(to bottom, ${colors.primary}08, transparent)` }}>
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium mb-6" style={{ borderColor: `${colors.accent}30`, backgroundColor: `${colors.accent}08`, color: colors.accent }}>
              <Sparkles className="h-4 w-4" />
              The Solution
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl" style={{ color: colors.dark }}>What IntegrateWise Is</h2>
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
                <div key={item} className="flex items-start gap-3 p-3 rounded-lg border hover:bg-opacity-80 transition-colors" style={{ backgroundColor: `${colors.accent}08`, borderColor: `${colors.accent}15` }}>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold" style={{ backgroundColor: colors.accent, color: "white" }}>
                    {index + 1}
                  </div>
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-pretty leading-relaxed text-muted-foreground">
              Think of IntegrateWise as the <strong style={{ color: colors.dark }}>connective tissue and brain</strong> for
              your digital work.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works - Visual Steps Enhanced */}
      <section className="border-b border-border py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium mb-6" style={{ borderColor: `${colors.primary}30`, backgroundColor: `${colors.primary}08`, color: colors.primary }}>
              <Workflow className="h-4 w-4" />
              How It Works
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl" style={{ color: colors.dark }}>
              Connect once. Everything flows.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              A seamless architecture that brings all your tools together
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: GitBranch, title: "Connect Tools", desc: "Plug in the tools you already use.", colorVar: colors.primary },
              { icon: Database, title: "Spine (Structure)", desc: "Normalize and preserve meaning across systems.", colorVar: colors.primaryLight },
              { icon: Shield, title: "Hub (Control)", desc: "Secure routing + permissions + boundaries.", colorVar: colors.accent },
              { icon: Zap, title: "AI Loader", desc: "One-click import that preserves context and logic.", colorVar: colors.primary },
              { icon: Brain, title: "Brain + Brainstorm", desc: "Your thinking becomes searchable memory.", colorVar: colors.primaryLight },
              { icon: Sparkles, title: "Agents", desc: "Automate, plan, and act—without chaos.", colorVar: colors.accent },
              { icon: Layout, title: "Render", desc: "Universal output: docs, decks, emails, SOPs, plans.", colorVar: colors.primary },
              { icon: Globe, title: "Views (Lenses)", desc: "Personal, Work, Business, and CS views.", colorVar: colors.primaryLight },
            ].map((step, index) => (
              <Card key={step.title} className="border-border card-hover group relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(to bottom right, ${step.colorVar}08, transparent)` }} />
                <CardContent className="relative p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl transition-colors" style={{ backgroundColor: `${step.colorVar}15` }}>
                      <step.icon className="h-6 w-6" style={{ color: step.colorVar }} />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">0{index + 1}</span>
                  </div>
                  <h3 className="font-semibold text-lg" style={{ color: colors.dark }}>{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section - Enhanced with animation */}
      <section className="border-b border-border py-24 sm:py-32 relative overflow-hidden" style={{ backgroundColor: `${colors.light}40` }}>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium mb-6" style={{ borderColor: `${colors.primaryLight}30`, backgroundColor: `${colors.primaryLight}08`, color: colors.primaryLight }}>
              <GitBranch className="h-4 w-4" />
              Integrations
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl" style={{ color: colors.dark }}>Connect what you already use</h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              No migrations. No rebuilding. You plug in the tools you rely on—once, securely.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              IntegrateWise handles the complexity in the background, so you don&apos;t have to restart your system every
              time your tool stack changes.
            </p>
          </div>
          
          {/* Animated Integration Grid */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { name: "Notion", category: "Productivity" },
              { name: "Coda", category: "Docs" },
              { name: "Slack", category: "Communication" },
              { name: "Google Workspace", category: "Suite" },
              { name: "Salesforce", category: "CRM" },
              { name: "HubSpot", category: "Marketing" },
              { name: "Stripe", category: "Payments" },
              { name: "ChatGPT", category: "AI" },
              { name: "Claude", category: "AI" },
              { name: "Gemini", category: "AI" },
              { name: "Jira", category: "Project" },
              { name: "Linear", category: "Project" },
            ].map((tool) => (
              <div
                key={tool.name}
                className="group flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 hover:shadow-lg transition-all duration-300 card-hover"
                style={{ borderColor: colors.light }}
              >
                <div className="h-10 w-10 rounded-lg flex items-center justify-center mb-3 transition-colors" style={{ backgroundColor: `${colors.primary}15` }}>
                  <span className="text-lg font-bold" style={{ color: colors.primary }}>{tool.name.charAt(0)}</span>
                </div>
                <span className="text-sm font-medium" style={{ color: colors.dark }}>{tool.name}</span>
                <span className="text-xs text-muted-foreground mt-1">{tool.category}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" className="group" asChild>
              <Link href="/integrations">
                Explore All Integrations 
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Second Brain Section - Enhanced */}
      <section className="border-b border-border py-24 sm:py-32 relative">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium mb-6" style={{ borderColor: `${colors.primaryLight}30`, backgroundColor: `${colors.primaryLight}08`, color: colors.primaryLight }}>
                <Brain className="h-4 w-4" />
                Second Brain
              </div>
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl" style={{ color: colors.dark }}>
                Your AI Conversations, Preserved
              </h2>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                Your ideas don&apos;t only live in docs. They live in conversations—especially AI conversations.
              </p>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                IntegrateWise lets you stream AI chats from ChatGPT, Claude, Gemini, Grok, and Perplexity into
                one place using secure webhooks.
              </p>
              <div className="mt-8">
                <Button asChild style={{ backgroundColor: colors.primary }}>
                  <Link href="/demo#brain">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <Card className="border-2" style={{ borderColor: `${colors.primaryLight}30`, background: `linear-gradient(to bottom right, ${colors.primaryLight}08, transparent)` }}>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ backgroundColor: `${colors.primaryLight}25` }}>
                      <Brain className="h-5 w-5" style={{ color: colors.primaryLight }} />
                    </div>
                    <h3 className="font-semibold text-lg" style={{ color: colors.dark }}>
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
                        <div className="flex h-6 w-6 items-center justify-center rounded-full" style={{ backgroundColor: `${colors.accent}25` }}>
                          <Check className="h-4 w-4" style={{ color: colors.accent }} />
                        </div>
                        <p className="text-sm text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="font-medium" style={{ color: colors.dark }}>Your ideas stop disappearing—and start compounding.</p>
                  </div>
                </CardContent>
              </Card>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full blur-2xl" style={{ backgroundColor: `${colors.primaryLight}15` }} />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full blur-2xl" style={{ backgroundColor: `${colors.accent}15` }} />
            </div>
          </div>
        </div>
      </section>

      {/* Modes Section - Enhanced */}
      <section className="border-b border-border py-24 sm:py-32" style={{ background: `linear-gradient(to bottom, transparent, ${colors.light}50)` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium mb-6" style={{ borderColor: `${colors.primary}30`, backgroundColor: `${colors.primary}08`, color: colors.primary }}>
              <Shield className="h-4 w-4" />
              Flexible Modes
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl" style={{ color: colors.dark }}>
              Full integration or Render Only
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Choose the level of access that fits your security and workflow needs
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-2">
            <Card className="border-2 relative overflow-hidden card-hover" style={{ borderColor: colors.primary }}>
              <div className="absolute top-0 right-0 text-xs font-medium px-3 py-1 rounded-bl-lg" style={{ backgroundColor: colors.primary, color: "white" }}>
                RECOMMENDED
              </div>
              <CardContent className="p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl mb-6" style={{ backgroundColor: `${colors.primary}15` }}>
                  <Zap className="h-7 w-7" style={{ color: colors.primary }} />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: colors.dark }}>Full Integration</h3>
                <p className="mt-2 text-muted-foreground">Complete automation and sync capabilities</p>
                <div className="mt-6 space-y-4">
                  {[
                    "Two-way sync and automation",
                    "Agents can create, update, and orchestrate work across tools",
                    "Best for teams that want real workflow automation",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0" style={{ color: colors.primary }} />
                      <p className="text-sm text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 card-hover" style={{ borderColor: colors.accent }}>
              <CardContent className="p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl mb-6" style={{ backgroundColor: `${colors.accent}15` }}>
                  <Shield className="h-7 w-7" style={{ color: colors.accent }} />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: colors.dark }}>Render Only</h3>
                <p className="mt-2 text-muted-foreground">Safe, read-only access for sensitive environments</p>
                <div className="mt-6 space-y-4">
                  {[
                    "Read-only dashboards + analytics",
                    "Zero risk to source systems",
                    "Best for compliance-first orgs or safe executive reporting",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0" style={{ color: colors.accent }} />
                      <p className="text-sm text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <p className="mt-8 text-center text-muted-foreground">
            Switch modes based on your role, team, or compliance needs.
          </p>
        </div>
      </section>

      {/* Security & BYOM Section - Enhanced */}
      <section className="border-b border-border py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium mb-6" style={{ borderColor: `${colors.accent}30`, backgroundColor: `${colors.accent}08`, color: colors.accent }}>
                <Lock className="h-4 w-4" />
                Security First
              </div>
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl" style={{ color: colors.dark }}>
                Secure, seamless, and in your control
              </h2>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                IntegrateWise runs on secure global cloud infrastructure with modern authentication and strict boundaries.
              </p>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                In many cases, IntegrateWise acts as a secure router and normaliser—not a permanent data owner—so you stay
                in control of what&apos;s stored, synced, or read-only.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                {["SOC 2", "GDPR", "HIPAA Ready", "SSO"].map((badge) => (
                  <div key={badge} className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2">
                    <Shield className="h-4 w-4" style={{ color: colors.accent }} />
                    <span className="text-sm font-medium" style={{ color: colors.dark }}>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="border-2" style={{ borderColor: colors.primaryLight, background: `linear-gradient(to bottom right, ${colors.primaryLight}08, transparent)` }}>
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl" style={{ backgroundColor: `${colors.primaryLight}25` }}>
                    <Lock className="h-8 w-8" style={{ color: colors.primaryLight }} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold" style={{ color: colors.dark }}>Bring Your Own AI Model</h3>
                <p className="text-sm text-muted-foreground mt-1">BYOM Support</p>
                <p className="mt-6 leading-relaxed text-muted-foreground">
                  Start with built-in models for a smooth experience. When you&apos;re ready, connect your own
                  model—commercial or self-hosted—using your API key.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {["OpenAI", "Anthropic", "Google AI", "Custom"].map((model) => (
                    <span key={model} className="rounded-full px-3 py-1 text-xs font-medium" style={{ backgroundColor: `${colors.primaryLight}15`, color: colors.primaryLight }}>
                      {model}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions Section - Enhanced */}
      <section className="border-b border-border py-24 sm:py-32" style={{ backgroundColor: `${colors.light}40` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium mb-6" style={{ borderColor: `${colors.primary}30`, backgroundColor: `${colors.primary}08`, color: colors.primary }}>
              <Users className="h-4 w-4" />
              Solutions
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl" style={{ color: colors.dark }}>
              Built for anyone. Specialized when you need it.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Whether you work solo or lead a team, IntegrateWise adapts to your needs
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "For Individuals", desc: "Personal productivity OS. Organize your life, work, and ideas in one place.", icon: Users, colorVar: colors.primary },
              { title: "For Teams", desc: "Shared tasks, shared context. Collaborate seamlessly across tools and time zones.", icon: Workflow, colorVar: colors.primaryLight },
              { title: "For Business Ops", desc: "Workflows, analytics, automation. Scale operations without scaling complexity.", icon: TrendingUp, colorVar: colors.accent },
              { title: "For Customer Success", desc: "CS Intelligence lens with Health, ARR, Churn, and Technical Health insights.", icon: Star, colorVar: colors.primary },
            ].map((solution) => (
              <Card key={solution.title} className="border-border card-hover group">
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl transition-colors mb-4" style={{ backgroundColor: `${solution.colorVar}15` }}>
                    <solution.icon className="h-6 w-6" style={{ color: solution.colorVar }} />
                  </div>
                  <h3 className="font-semibold text-lg" style={{ color: colors.dark }}>{solution.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{solution.desc}</p>
                  <Link href="/solutions" className="inline-flex items-center text-sm font-medium mt-4 group-hover:underline" style={{ color: colors.primary }}>
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="border-b border-border py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium mb-6" style={{ borderColor: `${colors.accent}30`, backgroundColor: `${colors.accent}08`, color: colors.accent }}>
              <Star className="h-4 w-4" />
              Testimonials
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl" style={{ color: colors.dark }}>
              Loved by teams everywhere
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              See what our customers have to say about IntegrateWise
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                quote: "IntegrateWise transformed how our team collaborates. We finally have a single source of truth across all our tools.",
                author: "Sarah Chen",
                role: "Head of Operations",
                company: "TechFlow Inc",
                rating: 5,
              },
              {
                quote: "The AI agents are game-changing. Tasks that used to take hours now happen automatically. Our productivity has doubled.",
                author: "Marcus Johnson",
                role: "CTO",
                company: "ScaleUp Labs",
                rating: 5,
              },
              {
                quote: "The Second Brain feature means I never lose a great idea from my AI conversations. It's like having perfect memory.",
                author: "Emily Rodriguez",
                role: "Product Manager",
                company: "InnovateCo",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-border card-hover">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {Array(testimonial.rating).fill(null).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: `${colors.primary}15` }}>
                      <span className="text-sm font-semibold" style={{ color: colors.primary }}>{testimonial.author.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: colors.dark }}>{testimonial.author}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome Section - Enhanced */}
      <section className="border-b border-border py-24 sm:py-32" style={{ background: `linear-gradient(to bottom, transparent, ${colors.primary}08)` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium mb-6" style={{ borderColor: `${colors.accent}30`, backgroundColor: `${colors.accent}08`, color: colors.accent }}>
              <Sparkles className="h-4 w-4" />
              The Outcome
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl" style={{ color: colors.dark }}>
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
                <div key={item.text} className="flex items-start gap-4 p-4 rounded-xl border text-left" style={{ backgroundColor: `${colors.accent}08`, borderColor: `${colors.accent}15` }}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg shrink-0" style={{ backgroundColor: `${colors.accent}20` }}>
                    <item.icon className="h-5 w-5" style={{ color: colors.accent }} />
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Watch Demo & Book Demo */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent, ${colors.primary}08, ${colors.primary}12)` }} />
        <div className="absolute inset-0 dot-pattern opacity-30" />
        
        {/* Floating elements */}
        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl animate-pulse-glow" style={{ backgroundColor: `${colors.primary}15` }} />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full blur-3xl animate-float" style={{ backgroundColor: `${colors.accent}12` }} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium mb-8" style={{ borderColor: `${colors.primary}30`, backgroundColor: `${colors.primary}15`, color: colors.primary }}>
              <Sparkles className="h-4 w-4" />
              Start Your Journey
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl" style={{ color: colors.dark }}>
              Ready to experience <span className="gradient-text">Effortless Work</span>?
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Start with IntegrateWise. Work smarter from day one—and let your tools finally work together.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button 
                size="lg" 
                variant="outline"
                className="h-14 px-10 text-base" 
                asChild
              >
                <Link href="/demo">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Link>
              </Button>
              <Button 
                size="lg" 
                className="h-14 px-10 text-base shadow-lg transition-all" 
                style={{ backgroundColor: colors.primary, boxShadow: `0 4px 14px ${colors.primary}40` }}
                asChild
              >
                <Link href="/demo#book">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Demo
                </Link>
              </Button>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              See IntegrateWise in action • Personalized walkthrough • No commitment required
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
