import Link from "next/link"
import { ArrowRight, Shield, Database, Zap, Brain, Sparkles, Layout, Lock, Check, FileOutput, Users, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - MailerLite Style */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient-green" />
        <div className="absolute top-20 right-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-10 left-10 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6">
              <Layout className="h-4 w-4" />
              Platform Overview
            </Badge>
            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">
              How <span className="gradient-text">IntegrateWise</span> Works
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
              IntegrateWise connects your tool stack through a shared structure (Spine), routes it securely (Hub), 
              and activates your work through AI agents and universal Render outputs.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild className="shadow-xl shadow-primary/25">
                <Link href="/ai-insights">
                  Start Free <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/integrations">
                  <Play className="mr-2 h-4 w-4" />
                  View Integrations
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Visual - MailerLite Style */}
      <section className="py-24 sm:py-32 border-b border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6">Architecture</Badge>
            <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              One platform. Many tools. One intelligent workflow.
            </h2>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium">
              {[
                { label: "Tools", color: "bg-muted" },
                { label: "→", isArrow: true },
                { label: "Webhooks/API", color: "bg-muted" },
                { label: "→", isArrow: true },
                { label: "Hub", color: "bg-secondary/10 border-2 border-secondary text-secondary", highlight: true },
                { label: "→", isArrow: true },
                { label: "Spine", color: "bg-primary/10 border-2 border-primary text-primary", highlight: true },
                { label: "→", isArrow: true },
                { label: "AI Loader", color: "bg-muted" },
                { label: "→", isArrow: true },
                { label: "Agents", color: "bg-muted" },
                { label: "→", isArrow: true },
                { label: "Render", color: "bg-muted" },
              ].map((item, idx) => (
                item.isArrow ? (
                  <ArrowRight key={idx} className="h-4 w-4 text-muted-foreground/50 hidden sm:block" />
                ) : (
                  <div key={idx} className={`rounded-xl px-4 py-2 ${item.color}`}>
                    {item.label}
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Hub - MailerLite Style */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary to-blue-500 shadow-lg shadow-secondary/30 mb-8">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <Badge variant="info" className="mb-4">Security Layer</Badge>
              <h2 className="text-4xl font-bold tracking-tight">
                The Hub: Secure routing & permissions
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground text-lg">
                The Hub is the control plane that handles authentication, permissions, event routing, and billing. 
                It&apos;s where IntegrateWise makes sure automation stays safe and controlled.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Authentication and access control",
                  "Permissions and boundaries across tools",
                  "Routing events, webhooks, and workflows",
                  "Subscription, billing, and usage policies",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary/10">
                      <Check className="h-4 w-4 text-secondary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-secondary/20 to-blue-500/10 blur-2xl" />
              <div className="relative rounded-3xl border border-border/50 bg-card p-10 shadow-xl">
                <Shield className="h-24 w-24 text-secondary/30 mx-auto" />
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {["Auth", "Routing", "Billing", "Logs"].map((item) => (
                    <div key={item} className="rounded-xl bg-secondary/5 p-4 text-center">
                      <p className="font-medium text-secondary">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Spine - MailerLite Style */}
      <section className="py-24 sm:py-32 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div className="lg:order-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-emerald-400 shadow-lg shadow-primary/30 mb-8">
                <Database className="h-8 w-8 text-white" />
              </div>
              <Badge variant="default" className="mb-4">Core Layer</Badge>
              <h2 className="text-4xl font-bold tracking-tight">
                The Spine: Shared structure across tools
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground text-lg">
                The Spine normalizes data from tools like Notion, Slack, CRMs, Sheets, and calendars into a consistent 
                structure—without breaking meaning.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {["Relationships", "Formulas", "Logic", "Context"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl bg-card border border-border/50 p-4">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-muted-foreground">
                So your work stays coherent even when it moves across systems.
              </p>
            </div>
            
            <div className="relative lg:order-1">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-emerald-400/10 blur-2xl" />
              <div className="relative rounded-3xl border-2 border-primary/20 bg-card p-10 shadow-xl">
                <Database className="h-24 w-24 text-primary/30 mx-auto" />
                <p className="text-center mt-6 text-xl font-bold gradient-text">Unified Data Layer</p>
                <p className="text-center mt-2 text-muted-foreground">Normalize once, render anywhere</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - MailerLite Style */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6">Features</Badge>
            <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              Powerful capabilities, simple to use
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* AI Loader */}
            <Card className="border-border/50 hover:border-amber-500/30 transition-all hover:shadow-xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 shadow-lg mb-6">
                  <Zap className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold">AI Loader</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  One-click ingestion that preserves context. Instead of copy-paste, AI Loader maps your data 
                  into structured schemas, preserves meaning and relationships, and makes it instantly usable by agents.
                </p>
                <Button variant="link" className="mt-4 p-0 h-auto" asChild>
                  <Link href="/products/ai-loader">Learn more →</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Brain Agent */}
            <Card className="border-border/50 hover:border-violet-500/30 transition-all hover:shadow-xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 shadow-lg mb-6">
                  <Brain className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Second Brain</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Captures your thinking through secure webhook streaming from AI tools like ChatGPT, Claude, Gemini, 
                  and more. The Brain Agent turns it into action: tasks, plans, and documents.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["ChatGPT", "Claude", "Gemini", "Grok"].map((tool) => (
                    <Badge key={tool} variant="secondary">{tool}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Agents */}
            <Card className="border-border/50 hover:border-primary/30 transition-all hover:shadow-xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-emerald-400 shadow-lg mb-6">
                  <Sparkles className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold">AI Agents</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Agents that do real work—safely. They generate plans and tasks, trigger workflows, 
                  create drafts, and retrieve relevant context when you need it.
                </p>
                <div className="mt-6 space-y-3">
                  {["Generate plans and tasks", "Trigger workflows", "Create drafts and responses", "Retrieve context"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Render */}
            <Card className="border-border/50 hover:border-rose-500/30 transition-all hover:shadow-xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 shadow-lg mb-6">
                  <FileOutput className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Render</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  The universal output layer. Render turns agent work into docs, decks, emails, SOPs, 
                  implementation plans, executive updates, and dashboards.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Docs", "Decks", "Emails", "SOPs", "Plans", "Dashboards"].map((type) => (
                    <Badge key={type} variant="outline">{type}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration Modes - MailerLite Style */}
      <section className="py-24 sm:py-32 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6">
              <Users className="h-4 w-4" />
              Choose Your Mode
            </Badge>
            <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              Full control over how you integrate
            </h2>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
            <Card className="border-2 border-primary/30 hover:border-primary transition-all hover:shadow-xl">
              <CardContent className="p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6">
                  <Zap className="h-7 w-7 text-primary" />
                </div>
                <Badge variant="default" className="mb-4">Full Power</Badge>
                <h3 className="text-2xl font-bold">Full Integration</h3>
                <p className="mt-4 text-muted-foreground">
                  Two-way sync + automation. Best for teams that want execution.
                </p>
                <div className="mt-6 space-y-3">
                  {["Two-way sync", "Full automation", "Agents can update systems", "Approvals & guardrails"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/30 hover:border-secondary transition-all hover:shadow-xl">
              <CardContent className="p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 mb-6">
                  <Lock className="h-7 w-7 text-secondary" />
                </div>
                <Badge variant="info" className="mb-4">Safe Mode</Badge>
                <h3 className="text-2xl font-bold">Render Only</h3>
                <p className="mt-4 text-muted-foreground">
                  Read-only dashboards + analytics. Best for compliance-first environments.
                </p>
                <div className="mt-6 space-y-3">
                  {["Read-only connectors", "Safe dashboards", "Zero source modification", "Compliance-first"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-secondary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security - MailerLite Style */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-emerald-400 shadow-xl shadow-primary/30 mb-8">
              <Lock className="h-10 w-10 text-white" />
            </div>
            <Badge variant="default" className="mb-6">Enterprise Ready</Badge>
            <h2 className="text-4xl font-bold tracking-tight">Secure by design</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground text-lg">
              Modern authentication, strict boundaries, and a system built to act as a secure router—not a 
              permanent data owner unless you choose.
            </p>

            <Card className="mt-12 border-2 border-secondary/30 hover:border-secondary transition-all">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">BYOM (Bring Your Own Model)</h3>
                <p className="text-muted-foreground">
                  Connect your model with your API key and still benefit from shared context and agent intelligence. 
                  Your data, your model, your control.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA - MailerLite Style */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-emerald-500 p-12 sm:p-16 shadow-2xl shadow-primary/30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_50%)]" />
            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Start with one workflow. Scale into an operating system.
              </h2>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button size="xl" className="bg-white text-primary hover:bg-white/90 shadow-xl" asChild>
                  <Link href="/ai-insights">
                    Start Free <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 bg-transparent" asChild>
                  <Link href="/demo">Book Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
