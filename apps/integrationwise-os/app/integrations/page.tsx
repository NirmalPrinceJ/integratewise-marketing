import Link from "next/link"
import { ArrowRight, Check, Search, Shield, Lock, Database, Zap, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background to-muted/20">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Integrations that make{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                everything work together
              </span>
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Connect Notion, Coda, Slack, email, calendars, CRMs, billing tools—and stream AI conversations from
              ChatGPT, Claude, Gemini, Grok, and Perplexity using secure webhooks.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              IntegrateWise keeps context intact through the Spine, and routes workflows safely through the Hub.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/demo">
                  Connect Your Tools <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#request">Request an Integration</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">Supports Full Integration or Render Only mode.</p>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="border-b border-border py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Find your tools</h2>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search integrations..." className="pl-10" />
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm">
                All Categories
              </Button>
              <Button variant="outline" size="sm">
                Full Integration
              </Button>
              <Button variant="outline" size="sm">
                Render Only
              </Button>
              <Button variant="outline" size="sm">
                Webhook-ready
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Integrations */}
      <section className="border-b border-border bg-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Most used integrations</h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Notion",
                desc: "Docs + databases. Spine normalizes structure and preserves context.",
                badge: "Full Integration",
              },
              {
                name: "Slack",
                desc: "Events, notifications, workflows. Great for Brainstorming + agent triggers.",
                badge: "Webhook-ready",
              },
              {
                name: "Google Sheets",
                desc: "Structured data + analytics. Great for reporting + dashboards.",
                badge: "Two-way sync",
              },
              {
                name: "Google Calendar",
                desc: "Schedules and reminders. Ideal for follow-ups and planning agents.",
                badge: "Full Integration",
              },
              {
                name: "HubSpot",
                desc: "Customer context, pipeline, renewals. Powers insights and specialized lenses.",
                badge: "Full Integration",
              },
              {
                name: "Gmail",
                desc: "Capture conversations, summaries, follow-ups.",
                badge: "Full Integration",
              },
              {
                name: "Stripe",
                desc: "Revenue signals, ARR patterns, subscription lifecycle.",
                badge: "Full Integration",
              },
              {
                name: "ChatGPT",
                desc: "Stream AI conversations for Second Brain ingestion.",
                badge: "Webhook-ready",
              },
            ].map((integration) => (
              <Card key={integration.name} className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-background">
                      <span className="text-sm font-semibold text-muted-foreground">
                        {integration.name.slice(0, 2)}
                      </span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {integration.badge}
                    </Badge>
                  </div>
                  <h3 className="mt-4 font-semibold">{integration.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{integration.desc}</p>
                  <Button className="mt-4 w-full bg-transparent" variant="outline" size="sm">
                    Connect
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories (Marketplace Blocks) */}
      <section className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Browse by category</h2>

          <div className="mt-16 space-y-12">
            {[
              {
                title: "Docs & Knowledge",
                tools: ["Notion", "Coda", "Confluence", "Google Drive"],
              },
              {
                title: "Communication",
                tools: ["Slack", "Gmail", "Outlook", "Teams"],
              },
              {
                title: "Productivity",
                tools: ["Calendar", "Todoist", "Asana", "Jira"],
              },
              {
                title: "CRM / Revenue",
                tools: ["HubSpot", "Salesforce", "Stripe", "Chargebee"],
              },
              {
                title: "AI Tools (Brain ingestion)",
                tools: ["ChatGPT", "Claude", "Gemini", "Grok", "Perplexity"],
              },
              {
                title: "Data / Analytics",
                tools: ["BigQuery", "Snowflake", "Postgres", "Sheets"],
              },
            ].map((category) => (
              <div key={category.title}>
                <h3 className="text-xl font-semibold">{category.title}</h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {category.tools.map((tool) => (
                    <Card key={tool} className="border-border">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{tool}</span>
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

      {/* Webhooks Section */}
      <section className="border-b border-border bg-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-accent/10">
                <Zap className="h-8 w-8 text-accent" />
              </div>
            </div>
            <h2 className="mt-6 text-balance text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Secure Webhooks for real-time work + AI conversation streaming
            </h2>
            <p className="mt-6 text-pretty text-center text-lg leading-relaxed text-muted-foreground">
              IntegrateWise supports webhook ingestion so your workflows are event-driven, not manual.
            </p>

            <Card className="mt-12 border-2 border-accent">
              <CardContent className="p-8">
                <h3 className="font-semibold">Use webhooks for:</h3>
                <div className="mt-4 space-y-3">
                  {[
                    "Brainstorming + Second Brain ingestion",
                    "Real-time triggers and updates",
                    "Sending events from internal systems",
                    "Safe read-only pipelines (Render Only mode)",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <h4 className="text-sm font-semibold">Security features:</h4>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {[
                      "Signed requests (HMAC)",
                      "Timestamp validation (anti-replay)",
                      "Idempotency keys",
                      "Retries + DLQ handling",
                      "Monitoring and alerts",
                    ].map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-accent" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <Button asChild>
                <Link href="/docs/webhooks">View Webhook Docs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Spine Sync */}
      <section className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                <Database className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="mt-6 text-balance text-center text-3xl font-bold tracking-tight sm:text-4xl">
              The Spine keeps meaning intact across tools
            </h2>
            <p className="mt-6 text-pretty text-center text-lg leading-relaxed text-muted-foreground">
              The Spine normalizes and preserves structure so your data doesn't lose meaning when it moves.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {["Relationships", "Formulas", "Schema consistency", "Context across systems"].map((item) => (
                <Card key={item} className="border-border">
                  <CardContent className="p-6 text-center">
                    <p className="font-medium">{item}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="mt-8 text-center text-muted-foreground">
              This is why IntegrateWise feels like an OS—not just a connector.
            </p>
          </div>
        </div>
      </section>

      {/* Modes by Integration */}
      <section className="border-b border-border bg-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Choose how deep you integrate
            </h2>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-2">
            <Card className="border-2 border-primary">
              <CardContent className="p-8">
                <div className="flex items-center gap-3">
                  <RefreshCw className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold">Full Integration</h3>
                </div>
                <div className="mt-6 space-y-4">
                  {[
                    "Two-way sync",
                    "Automation",
                    "Agents can update systems",
                    "Approvals and guardrails recommended",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-sm text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent">
              <CardContent className="p-8">
                <div className="flex items-center gap-3">
                  <Lock className="h-6 w-6 text-accent" />
                  <h3 className="text-xl font-bold">Render Only</h3>
                </div>
                <div className="mt-6 space-y-4">
                  {[
                    "Read-only connectors",
                    "Safe analytics and dashboards",
                    "Outputs without modifying source tools",
                    "Best for compliance-first workflows",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <p className="text-sm text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <Link href="/docs/integrations/compare-modes">Compare Modes</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Request an Integration */}
      <section id="request" className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Don't see your tool? Request it.</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Tell us what you use and what you want to accomplish. We prioritize integrations based on real
                workflows.
              </p>
            </div>

            <Card className="mt-12 border-2 border-secondary">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="tool-name" className="block text-sm font-medium">
                      Tool name
                    </label>
                    <Input id="tool-name" placeholder="e.g., Monday.com" className="mt-2" />
                  </div>

                  <div>
                    <label htmlFor="workflow-goal" className="block text-sm font-medium">
                      Workflow goal
                    </label>
                    <Input id="workflow-goal" placeholder="What do you want to accomplish?" className="mt-2" />
                  </div>

                  <div>
                    <label htmlFor="mode" className="block text-sm font-medium">
                      Mode
                    </label>
                    <select
                      id="mode"
                      className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option>Full Integration</option>
                      <option>Render Only</option>
                      <option>Not sure</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your@email.com" className="mt-2" />
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium">
                      Notes (optional)
                    </label>
                    <textarea
                      id="notes"
                      rows={4}
                      placeholder="Any additional context..."
                      className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Request Integration
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-b from-background to-primary/5 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Connect your tools and feel work get lighter
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Start with one integration. Install a template. Let the OS do the rest.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="#">
                  Start Free <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/templates">Browse Templates</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
