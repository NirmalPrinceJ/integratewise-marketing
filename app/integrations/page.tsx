import Link from "next/link"
import { ArrowRight, Check, Search, Shield, Lock, Database, Zap, RefreshCw, Webhook, Star, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

import { IntegrationMatrix } from "@/components/integrations/integration-matrix"

const featuredIntegrations = [
  { name: "Notion", desc: "Docs + databases. Spine normalizes structure.", badge: "Full Integration", icon: "N" },
  { name: "Slack", desc: "Events, notifications, workflows.", badge: "Webhook-ready", icon: "S" },
  { name: "Google Sheets", desc: "Structured data + analytics.", badge: "Two-way sync", icon: "G" },
  { name: "Google Calendar", desc: "Schedules and reminders.", badge: "Full Integration", icon: "G" },
  { name: "HubSpot", desc: "Customer context, pipeline, renewals.", badge: "Full Integration", icon: "H" },
  { name: "Gmail", desc: "Capture conversations and summaries.", badge: "Full Integration", icon: "G" },
  { name: "Stripe", desc: "Revenue signals, ARR patterns.", badge: "Full Integration", icon: "S" },
  { name: "ChatGPT", desc: "Stream AI conversations.", badge: "Webhook-ready", icon: "C" },
]

const categories = [
  { title: "Docs & Knowledge", tools: ["Notion", "Coda", "Confluence", "Google Drive"] },
  { title: "Communication", tools: ["Slack", "Gmail", "Outlook", "Teams"] },
  { title: "Productivity", tools: ["Calendar", "Todoist", "Asana", "Jira"] },
  { title: "CRM / Revenue", tools: ["HubSpot", "Salesforce", "Stripe", "Chargebee"] },
  { title: "AI Tools", tools: ["ChatGPT", "Claude", "Gemini", "Grok", "Perplexity"] },
  { title: "Data / Analytics", tools: ["BigQuery", "Snowflake", "Postgres", "Sheets"] },
]

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - MailerLite Style */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient-green" />
        <div className="absolute top-10 left-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6">
              <Webhook className="h-4 w-4" />
              50+ Integrations
            </Badge>
            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">
              Connect <span className="gradient-text">everything</span> you use
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
              Connect Notion, Slack, email, calendars, CRMs, and stream AI conversations from ChatGPT, 
              Claude, Gemini—all through secure webhooks.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild className="shadow-xl shadow-primary/25">
                <Link href="/ai-insights">
                  Connect Your Tools <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#request">Request Integration</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Supports Full Integration or Render Only mode.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filters - MailerLite Style */}
      <section className="border-b border-border/50 py-8 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search integrations..." className="pl-12 h-12 rounded-xl border-border/50" />
            </div>
            <div className="flex flex-wrap gap-2">
              {["All", "Full Integration", "Render Only", "Webhook-ready"].map((filter) => (
                <Button key={filter} variant={filter === "All" ? "default" : "outline"} size="sm" className="rounded-full">
                  {filter}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Integrations - MailerLite Style */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <Badge variant="secondary" className="mb-4">
                <Star className="h-4 w-4 text-amber-500" />
                Popular
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight">Most used integrations</h2>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredIntegrations.map((integration) => (
              <Card key={integration.name} className="group border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10">
                      <span className="text-xl font-bold text-primary">{integration.icon}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">{integration.badge}</Badge>
                  </div>
                  <h3 className="font-bold text-lg">{integration.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{integration.desc}</p>
                  <Button className="mt-6 w-full" variant="outline" size="sm">
                    Connect
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capability Matrix - MailerLite Style */}
      <section className="py-24 sm:py-32 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <Badge variant="secondary" className="mb-6">Technical Specs</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Capability Matrix</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Detailed specifications for architects and security teams.
            </p>
          </div>
          <IntegrationMatrix />
        </div>
      </section>

      {/* Categories - MailerLite Style */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Badge variant="secondary" className="mb-4">Browse</Badge>
            <h2 className="text-3xl font-bold tracking-tight">By category</h2>
          </div>

          <div className="space-y-12">
            {categories.map((category) => (
              <div key={category.title}>
                <h3 className="text-xl font-semibold mb-6">{category.title}</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {category.tools.map((tool) => (
                    <Card key={tool} className="border-border/50 hover:border-primary/30 transition-all hover:shadow-md">
                      <CardContent className="p-5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-sm font-bold">
                              {tool.slice(0, 2)}
                            </div>
                            <span className="font-medium">{tool}</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            Connect
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Webhooks Section - MailerLite Style */}
      <section className="py-24 sm:py-32 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 shadow-lg shadow-amber-500/30 mb-8">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <Badge variant="warning" className="mb-4">Real-time</Badge>
              <h2 className="text-4xl font-bold tracking-tight">
                Secure Webhooks for real-time work
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                IntegrateWise supports webhook ingestion so your workflows are event-driven, not manual.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Brainstorming + Second Brain ingestion",
                  "Real-time triggers and updates",
                  "Safe read-only pipelines (Render Only)",
                  "Signed requests (HMAC)",
                  "Timestamp validation (anti-replay)",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100">
                      <Check className="h-4 w-4 text-amber-600" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 blur-2xl" />
              <Card className="relative border-2 border-amber-500/20 shadow-xl">
                <CardContent className="p-8">
                  <div className="rounded-xl bg-slate-900 p-6 font-mono text-sm text-slate-300">
                    <p className="text-slate-500"># Webhook endpoint</p>
                    <p className="text-primary">POST /webhooks/ingest</p>
                    <p className="mt-4 text-slate-500"># Headers</p>
                    <p><span className="text-amber-400">X-Signature:</span> HMAC-SHA256</p>
                    <p><span className="text-amber-400">X-Timestamp:</span> 1704067200</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Modes - MailerLite Style */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6">Choose Your Mode</Badge>
            <h2 className="text-4xl font-bold tracking-tight">
              How deep do you want to integrate?
            </h2>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
            <Card className="border-2 border-primary/30 hover:border-primary transition-all hover:shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <RefreshCw className="h-7 w-7 text-primary" />
                  </div>
                  <Badge variant="default">Full Power</Badge>
                </div>
                <h3 className="text-2xl font-bold">Full Integration</h3>
                <div className="mt-6 space-y-3">
                  {["Two-way sync", "Automation", "Agents can update systems", "Approvals and guardrails"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/30 hover:border-secondary transition-all hover:shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10">
                    <Lock className="h-7 w-7 text-secondary" />
                  </div>
                  <Badge variant="info">Safe Mode</Badge>
                </div>
                <h3 className="text-2xl font-bold">Render Only</h3>
                <div className="mt-6 space-y-3">
                  {["Read-only connectors", "Safe analytics & dashboards", "Zero source modification", "Compliance-first"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-secondary" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Request Integration - MailerLite Style */}
      <section id="request" className="py-24 sm:py-32 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-6">
                <Send className="h-4 w-4" />
                Request
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight">Don&apos;t see your tool?</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Tell us what you use. We prioritize integrations based on real workflows.
              </p>
            </div>

            <Card className="border-2 border-primary/20 shadow-xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="tool-name" className="block text-sm font-medium mb-2">
                      Tool name
                    </label>
                    <Input id="tool-name" placeholder="e.g., Monday.com" className="h-12 rounded-xl" />
                  </div>

                  <div>
                    <label htmlFor="workflow-goal" className="block text-sm font-medium mb-2">
                      Workflow goal
                    </label>
                    <Input id="workflow-goal" placeholder="What do you want to accomplish?" className="h-12 rounded-xl" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your@email.com" className="h-12 rounded-xl" />
                  </div>

                  <Button type="submit" className="w-full shadow-lg shadow-primary/20" size="lg">
                    Request Integration <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA - MailerLite Style */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-emerald-500 p-12 sm:p-16 shadow-2xl shadow-primary/30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_50%)]" />
            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Connect your tools and feel work get lighter
              </h2>
              <p className="mt-4 text-lg text-white/80">
                Start with one integration. Install a template. Let the OS do the rest.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button size="xl" className="bg-white text-primary hover:bg-white/90 shadow-xl" asChild>
                  <Link href="/ai-insights">
                    Start Free <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 bg-transparent" asChild>
                  <Link href="/templates">Browse Templates</Link>
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
