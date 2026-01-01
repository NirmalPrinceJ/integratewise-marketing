import Link from "next/link"
import { ArrowRight, Check, Lock, RefreshCw, Shield, Zap, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function DocsIntegrationsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Integrations Documentation
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Connect Notion, Slack, CRMs, billing tools, and stream AI conversations from ChatGPT, Claude, Gemini, and more.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold">Integration Modes</h2>
            <p className="text-muted-foreground">
              IntegrateWise offers two distinct modes of operation to satisfy different security and compliance postures.
            </p>

            <div className="not-prose my-8 grid gap-6 sm:grid-cols-2">
              <Card className="border-2 border-primary">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <RefreshCw className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold">Full Integration</h3>
                  </div>
                  <div className="mt-4 space-y-3">
                    {[
                      "Read & Write access",
                      "Two-way sync",
                      "Agents can update systems",
                      "Automation workflows",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <Lock className="h-6 w-6 text-accent" />
                    <h3 className="text-xl font-bold">Render Only</h3>
                  </div>
                  <div className="mt-4 space-y-3">
                    {[
                      "Read-only access",
                      "Safe analytics and dashboards",
                      "Zero write risk",
                      "Best for compliance-first workflows",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="not-prose my-6">
              <Button variant="outline" asChild>
                <Link href="/docs/integrations/compare-modes">
                  Compare Modes in Detail <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <h2 className="mt-12 text-2xl font-bold">Supported Integrations</h2>
            <p className="text-muted-foreground">
              IntegrateWise supports a growing catalog of integrations across multiple categories.
            </p>

            <div className="not-prose my-8 space-y-8">
              {[
                {
                  title: "Docs & Knowledge",
                  icon: Database,
                  tools: [
                    { name: "Notion", mode: "Full" },
                    { name: "Coda", mode: "Full" },
                    { name: "Confluence", mode: "Full" },
                    { name: "Google Drive", mode: "Full" },
                  ],
                },
                {
                  title: "Communication",
                  icon: Zap,
                  tools: [
                    { name: "Slack", mode: "Webhook" },
                    { name: "Gmail", mode: "Full" },
                    { name: "Outlook", mode: "Full" },
                    { name: "Teams", mode: "Full" },
                  ],
                },
                {
                  title: "CRM & Revenue",
                  icon: Shield,
                  tools: [
                    { name: "HubSpot", mode: "Full" },
                    { name: "Salesforce", mode: "Full" },
                    { name: "Stripe", mode: "Render Only" },
                    { name: "Chargebee", mode: "Full" },
                  ],
                },
                {
                  title: "AI Tools (Brain Ingestion)",
                  icon: Zap,
                  tools: [
                    { name: "ChatGPT", mode: "Webhook" },
                    { name: "Claude", mode: "Webhook" },
                    { name: "Gemini", mode: "Webhook" },
                    { name: "Perplexity", mode: "Webhook" },
                  ],
                },
              ].map((category) => (
                <div key={category.title}>
                  <div className="flex items-center gap-2 mb-4">
                    <category.icon className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {category.tools.map((tool) => (
                      <div
                        key={tool.name}
                        className="flex items-center justify-between rounded-lg border border-border bg-card p-3"
                      >
                        <span className="font-medium">{tool.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {tool.mode}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <h2 className="mt-12 text-2xl font-bold">Integration Technical Details</h2>
            
            <h3 className="mt-8 text-xl font-semibold">Authentication</h3>
            <p className="text-muted-foreground">
              Integrations use OAuth2 for secure authentication. Each connector specifies required scopes:
            </p>
            <ul className="space-y-1 text-muted-foreground">
              <li><strong>Slack</strong>: <code>channels:history</code>, <code>chat:write</code>, <code>users:read</code></li>
              <li><strong>Gmail</strong>: <code>gmail.readonly</code> or <code>gmail.modify</code></li>
              <li><strong>HubSpot</strong>: OAuth2 or Private App tokens</li>
              <li><strong>Stripe</strong>: Restricted API Keys (read-only)</li>
            </ul>

            <h3 className="mt-8 text-xl font-semibold">Sync Strategies</h3>
            <ul className="space-y-1 text-muted-foreground">
              <li><strong>Event-driven</strong>: Real-time webhooks (Slack, Stripe)</li>
              <li><strong>Polling</strong>: Periodic sync (Gmail History API, Notion)</li>
              <li><strong>Bulk</strong>: Initial load via Bulk API (Salesforce)</li>
            </ul>

            <h3 className="mt-8 text-xl font-semibold">Entity Mapping</h3>
            <p className="text-muted-foreground">
              External data is mapped to Spine entities:
            </p>
            <ul className="space-y-1 text-muted-foreground">
              <li>Slack Message → <code>Conversation</code> / <code>Task</code></li>
              <li>Gmail Message → <code>Conversation</code></li>
              <li>HubSpot Deal → <code>Task</code> / <code>Plan</code></li>
              <li>Stripe Subscription → <code>HealthMetric</code></li>
            </ul>

            <h2 className="mt-12 text-2xl font-bold">Related Documentation</h2>
            <div className="not-prose my-6 flex flex-wrap gap-4">
              <Button variant="outline" asChild>
                <Link href="/docs/webhooks">Webhooks</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/docs/api">API Reference</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/integrations">Browse All Integrations</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
