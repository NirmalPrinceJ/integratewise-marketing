import Link from "next/link"
import {
  ArrowRight,
  Check,
  Database,
  Sparkles,
  Brain,
  Shield,
  Zap,
  Layout,
  Lock,
  FileOutput,
  Webhook,
  User,
  Star,
  Play,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - MailerLite Style */}
      <section className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 hero-gradient-green" />
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
              <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                <Badge variant="secondary" className="px-4 py-1.5 text-sm">
                  <Sparkles className="h-4 w-4" />
                  AI-Powered Workspace
                </Badge>
              </div>

              <h1 className="mt-8 text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                Connect your tools.{" "}
                <span className="gradient-text">Work smarter.</span>
              </h1>

              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
                IntegrateWise connects your favorite tools through one <strong className="text-foreground">Spine</strong>, 
                discovers your working style with AI Insights, and powers seamless workflows—so you can focus on what matters.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <Button size="lg" asChild className="shadow-xl shadow-primary/25">
                  <Link href="/ai-insights">
                    Start Free <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="group">
                  <Link href="/demo">
                    <Play className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                    Watch Demo
                  </Link>
                </Button>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground lg:justify-start">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Free forever plan</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Set up in 5 minutes</span>
                </div>
              </div>
            </div>

            {/* Hero Card - MailerLite Style */}
            <div className="mx-auto w-full max-w-xl">
              <div className="relative">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-xl" />
                <Card className="relative border-0 bg-card/95 backdrop-blur shadow-2xl rounded-3xl overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                          <Database className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold">The Spine</p>
                          <p className="text-sm text-muted-foreground">Connected workflow</p>
                        </div>
                      </div>
                      <Badge variant="secondary">Live</Badge>
                    </div>

                    <div className="mt-8 space-y-4">
                      {[
                        { label: "Your Tools", sub: "Notion • Slack • Gmail • CRM • Calendar", icon: Layout, color: "bg-secondary/10 text-secondary" },
                        { label: "Spine", sub: "Unified data layer", icon: Database, color: "bg-primary/10 text-primary", highlight: true },
                        { label: "AI Loader", sub: "Structured ingestion", icon: Zap, color: "bg-amber-100 text-amber-600" },
                        { label: "AI Agents", sub: "Automated workflows", icon: Brain, color: "bg-violet-100 text-violet-600" },
                        { label: "Render", sub: "Tasks • Docs • Plans", icon: FileOutput, color: "bg-rose-100 text-rose-600" },
                      ].map((row, idx) => (
                        <div key={row.label} className={`flex items-center gap-4 rounded-2xl p-4 transition-all ${row.highlight ? "bg-primary/5 border-2 border-primary/20" : "bg-muted/30 hover:bg-muted/50"}`}>
                          <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${row.color}`}>
                            <row.icon className="h-5 w-5" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className={`font-medium ${row.highlight ? "text-primary" : ""}`}>{row.label}</p>
                            <p className="text-sm text-muted-foreground">{row.sub}</p>
                          </div>
                          {idx < 4 && <ChevronRight className="h-4 w-4 text-muted-foreground/50" />}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos Section - MailerLite Style */}
      <section className="border-y border-border/50 bg-muted/20 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-muted-foreground mb-8">
            Works seamlessly with your favorite tools
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {["Notion", "Slack", "Google", "HubSpot", "Salesforce", "Linear", "Jira", "Todoist"].map((tool) => (
              <div
                key={tool}
                className="flex h-12 items-center justify-center rounded-xl bg-background px-6 text-sm font-medium text-muted-foreground shadow-sm transition-all hover:shadow-md hover:text-foreground"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section - MailerLite Style */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6">
              The Problem
            </Badge>
            <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              Your tools don&apos;t talk to each other
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Modern work breaks down when context gets trapped in apps. You jump between tabs, copy-paste everywhere, 
              and lose track of what matters.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "😤", text: "Information scattered across 10+ apps" },
              { icon: "🔄", text: "Copy-paste becomes your workflow" },
              { icon: "💭", text: "AI brainstorms disappear after chat" },
              { icon: "📊", text: "Data loses context when moved" },
              { icon: "⏰", text: "Hours lost to context switching" },
              { icon: "😵", text: "No unified view of your work" },
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-4 rounded-2xl border border-border/50 bg-card p-5 transition-all hover:border-destructive/30 hover:bg-destructive/5"
              >
                <span className="text-2xl">{item.icon}</span>
                <p className="text-sm font-medium text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section - MailerLite Style */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="default" className="mb-6">
              The Solution
            </Badge>
            <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              One Spine. <span className="gradient-text">Infinite possibilities.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              IntegrateWise connects your tools through a shared structural layer—the <strong className="text-foreground">Spine</strong>. 
              It preserves meaning and normalizes data so everything becomes usable across views, workflows, and outputs.
            </p>
          </div>

          {/* Visual Spine Diagram */}
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <div className="flex-1 rounded-2xl border border-border/50 bg-card p-6 text-center shadow-lg max-w-xs">
                <Layout className="mx-auto h-10 w-10 text-secondary" />
                <p className="mt-3 font-semibold">Your Tools</p>
                <p className="mt-1 text-xs text-muted-foreground">All your apps connected</p>
              </div>

              <div className="hidden sm:flex items-center">
                <div className="h-0.5 w-8 bg-gradient-to-r from-border to-primary/50" />
                <ArrowRight className="h-5 w-5 text-primary" />
                <div className="h-0.5 w-8 bg-gradient-to-r from-primary/50 to-primary" />
              </div>

              <div className="relative rounded-2xl border-2 border-primary bg-primary/5 p-6 text-center shadow-xl max-w-xs">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="default" className="shadow-lg">Core</Badge>
                </div>
                <Database className="mx-auto h-12 w-12 text-primary" />
                <p className="mt-3 font-bold text-primary">The Spine</p>
                <p className="mt-1 text-xs text-muted-foreground">Unified data layer</p>
              </div>

              <div className="hidden sm:flex items-center">
                <div className="h-0.5 w-8 bg-gradient-to-r from-primary to-primary/50" />
                <ArrowRight className="h-5 w-5 text-primary" />
                <div className="h-0.5 w-8 bg-gradient-to-r from-primary/50 to-border" />
              </div>

              <div className="flex-1 rounded-2xl border border-border/50 bg-card p-6 text-center shadow-lg max-w-xs">
                <FileOutput className="mx-auto h-10 w-10 text-accent" />
                <p className="mt-3 font-semibold">Clean Outputs</p>
                <p className="mt-1 text-xs text-muted-foreground">Docs, tasks, plans, emails</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/platform">
                Learn How It Works <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid - MailerLite Style */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <Badge variant="secondary" className="mb-6">
              Features
            </Badge>
            <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              Everything you need to work smarter
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Zap,
                title: "AI Loader",
                desc: "Turn chaos into structured data. Normalize once, use everywhere.",
                color: "from-amber-500 to-orange-500",
                href: "/products/ai-loader",
              },
              {
                icon: Sparkles,
                title: "AI Insights",
                desc: "Discover your working style and get personalized suggestions.",
                color: "from-primary to-emerald-400",
                href: "/ai-insights",
              },
              {
                icon: Layout,
                title: "Templates",
                desc: "One-click workflows. Deploy structured outputs instantly.",
                color: "from-secondary to-blue-400",
                href: "/templates",
              },
              {
                icon: Brain,
                title: "AI Agents",
                desc: "Automated assistants that monitor, suggest, and execute safely.",
                color: "from-violet-500 to-purple-500",
                href: "/products/agents",
              },
            ].map((feature) => (
              <Card key={feature.title} className="group relative overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                <CardContent className="relative p-8">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color}`}>
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold">{feature.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{feature.desc}</p>
                  <Link 
                    href={feature.href} 
                    className="mt-6 inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Insights CTA - MailerLite Style */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 section-green" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Badge variant="default" className="mb-6">
                <Sparkles className="h-4 w-4" />
                Free Forever
              </Badge>
              <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
                Discover your working style in <span className="gradient-text">10 seconds</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                AI Insights uses pattern recognition to reveal your profile and generate personalized suggestions 
                that evolve over time. Not guessing—just AI-powered analysis.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Your default decision-making style",
                  "Your strongest communication mode",
                  "Your optimal environment for focus",
                  "Team collaboration preferences",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Button size="lg" asChild className="shadow-xl shadow-primary/25">
                  <Link href="/ai-insights">
                    Reveal My Profile <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Demo Card */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl" />
              <Card className="relative border-2 border-primary/20 shadow-2xl rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                      <Sparkles className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold">Reveal Your Profile</h3>
                    <p className="mt-2 text-sm text-muted-foreground">Enter your name to discover your working style</p>
                  </div>

                  <div className="mt-6 space-y-4">
                    <input
                      type="text"
                      placeholder="Your name"
                      className="input-mailerlite"
                    />
                    <Button className="w-full shadow-lg shadow-primary/20" size="lg" asChild>
                      <Link href="/ai-insights">Reveal My Profile</Link>
                    </Button>
                  </div>

                  <div className="mt-6 rounded-2xl bg-muted/50 p-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Star className="h-4 w-4 text-amber-500" />
                      <span>10,000+ professionals already discovered their style</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations - MailerLite Style */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6">
              <Webhook className="h-4 w-4" />
              Integrations
            </Badge>
            <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              Works with the tools you already love
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Connect in minutes. Full Integration or Render Only mode available.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Notion", category: "Docs" },
              { name: "Slack", category: "Communication" },
              { name: "Google Workspace", category: "Productivity" },
              { name: "HubSpot", category: "CRM" },
              { name: "Salesforce", category: "CRM" },
              { name: "ChatGPT", category: "AI" },
              { name: "Linear", category: "Project" },
              { name: "Jira", category: "Project" },
              { name: "Gmail", category: "Email" },
            ].map((tool) => (
              <div
                key={tool.name}
                className="flex items-center gap-4 rounded-2xl border border-border/50 bg-card p-5 transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted/50 text-lg font-bold text-muted-foreground">
                  {tool.name.slice(0, 2)}
                </div>
                <div>
                  <p className="font-semibold">{tool.name}</p>
                  <p className="text-xs text-muted-foreground">{tool.category}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/integrations">
                View All Integrations <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials - MailerLite Style */}
      <section className="py-24 sm:py-32 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <Badge variant="secondary" className="mb-6">
              <Star className="h-4 w-4 text-amber-500" />
              Testimonials
            </Badge>
            <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              Loved by teams everywhere
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                quote: "IntegrateWise gave us structure across tools without forcing migration. It's the first platform that feels like infrastructure, not another app.",
                author: "Ops Lead",
                company: "Tech Startup",
              },
              {
                quote: "AI Insights helped us understand communication patterns across the team. The OS views made our work feel calmer and more consistent.",
                author: "CS Manager",
                company: "SaaS Company",
              },
              {
                quote: "We stopped rebuilding reports every week. Render Only mode gave us safe dashboards and outputs with zero risk to our source tools.",
                author: "Operations Director",
                company: "Enterprise",
              },
            ].map((testimonial, idx) => (
              <Card key={idx} className="border-border/50 hover:border-primary/20 transition-all hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="mt-6 pt-6 border-t border-border/50">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview - MailerLite Style */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <Badge variant="secondary" className="mb-6">
              Pricing
            </Badge>
            <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              Simple pricing that scales with you
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Start free. Upgrade when you&apos;re ready.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-4">
            {[
              { name: "Free", price: "₹0", desc: "AI Insights, 1 connection", highlight: false },
              { name: "Starter", price: "₹999", desc: "Loader + Templates", highlight: false },
              { name: "Pro", price: "₹4,999", desc: "Unlimited + Governance", highlight: true },
              { name: "Enterprise", price: "Custom", desc: "Agents + Compliance", highlight: false },
            ].map((plan) => (
              <Card key={plan.name} className={`relative overflow-hidden transition-all hover:shadow-xl ${plan.highlight ? "border-2 border-primary shadow-lg shadow-primary/10" : "border-border/50"}`}>
                {plan.highlight && (
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-emerald-400" />
                )}
                <CardContent className="p-6 text-center">
                  {plan.highlight && <Badge variant="default" className="mb-4">Popular</Badge>}
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="mt-2 text-3xl font-bold">
                    {plan.price}
                    {plan.price !== "Custom" && <span className="text-base font-normal text-muted-foreground">/mo</span>}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{plan.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" asChild className="shadow-xl shadow-primary/25">
              <Link href="/pricing">
                View Full Pricing <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Security - MailerLite Style */}
      <section className="py-24 sm:py-32 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Badge variant="secondary" className="mb-6">
                <Shield className="h-4 w-4" />
                Security
              </Badge>
              <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
                Enterprise-grade security built in
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                IntegrateWise is designed to be a secure router—not a permanent data owner unless you choose. 
                Modern authentication, strict boundaries, and full governance controls.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Lock, label: "Encrypted transport" },
                  { icon: Shield, label: "Least privilege access" },
                  { icon: User, label: "SSO / SCIM support" },
                  { icon: FileOutput, label: "Audit logs" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 rounded-xl bg-card border border-border/50 p-4">
                    <item.icon className="h-5 w-5 text-primary" />
                    <span className="font-medium">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button variant="outline" asChild>
                  <Link href="/security">
                    Learn About Security <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 blur-3xl" />
              <div className="relative rounded-3xl border border-border/50 bg-card p-10 shadow-xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">DataSentinel</p>
                    <p className="text-muted-foreground">Enterprise governance</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {["GDPR Compliant", "SOC 2 Type II", "HIPAA Ready", "ISO 27001"].map((cert) => (
                    <div key={cert} className="flex items-center gap-3 rounded-xl bg-muted/50 p-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span className="font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
