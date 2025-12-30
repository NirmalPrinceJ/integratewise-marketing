import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ChangelogPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-background to-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">Changelog</h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              New releases, improvements, and updates to IntegrateWise.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="#">Subscribe to Updates</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/docs">View Docs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Changelog Entries */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Version 0.9.0 - Template Entry */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">v0.9.0</h2>
                    <p className="mt-1 text-sm text-muted-foreground">2025-01-15</p>
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                    Latest
                  </span>
                </div>

                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="font-semibold text-primary">Highlights</h3>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      <li>
                        <strong>Added:</strong> CS Intelligence Suite with 4 integrated dashboards (Health Scores, ARR &
                        Revenue, Churn Risk, Technical Health)
                      </li>
                      <li>
                        <strong>Improved:</strong> DataSentinel now detects and masks PII in real-time across all data
                        flows
                      </li>
                      <li>
                        <strong>Fixed:</strong> Webhook signature validation edge cases for high-volume ingestion
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-secondary">Integrations</h3>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      <li>
                        <strong>Added:</strong> Coda, Airtable, Monday.com native connectors
                      </li>
                      <li>
                        <strong>Improved:</strong> Salesforce sync performance (2x faster for large datasets)
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-accent">Templates</h3>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      <li>
                        <strong>Added:</strong> "CS Health Pulse" template with pre-configured health scoring logic
                      </li>
                      <li>
                        <strong>Improved:</strong> Template versioning and rollback support
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold">Brain + Agents</h3>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      <li>
                        <strong>Added:</strong> Brain Agent can now auto-tag and categorize ingested conversations
                      </li>
                      <li>
                        <strong>Improved:</strong> Agent orchestration with better retry logic and DLQ handling
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold">Security</h3>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      <li>
                        <strong>Added:</strong> Audit logs for all Render actions
                      </li>
                      <li>
                        <strong>Improved:</strong> RBAC with granular permission controls for workspaces
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Version 0.8.0 */}
            <Card>
              <CardContent className="p-8">
                <div>
                  <h2 className="text-2xl font-bold">v0.8.0</h2>
                  <p className="mt-1 text-sm text-muted-foreground">2024-12-01</p>
                </div>

                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="font-semibold text-primary">Highlights</h3>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      <li>
                        <strong>Added:</strong> Render Only mode for compliance-first organizations
                      </li>
                      <li>
                        <strong>Added:</strong> BYOM (Bring Your Own Model) support for custom AI models
                      </li>
                      <li>
                        <strong>Improved:</strong> Second Brain ingestion now supports batch imports
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-secondary">Integrations</h3>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      <li>
                        <strong>Added:</strong> Claude, Gemini, Grok webhook support for AI chat ingestion
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Coming Next */}
            <Card className="border-2 border-dashed border-primary/50">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold">Coming Next</h2>
                <p className="mt-4 text-muted-foreground">
                  We're working on exciting new features. Here's what's on the roadmap:
                </p>
                <ul className="mt-6 space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>Multi-workspace support for enterprise teams</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>Advanced workflow automation builder with visual editor</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>Mobile companion apps for iOS and Android</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>Enhanced analytics dashboard with custom metrics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>Self-hosted deployment options for enterprise</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
