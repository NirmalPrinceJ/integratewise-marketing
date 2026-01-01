import Link from "next/link"
import { ArrowRight, Database, Shield, Bot, FileText, Brain, Workflow } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function DocsConceptsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Core Concepts
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Understand the Spine, Hub, Agents, Brain, and Render—the building blocks of IntegrateWise.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold">Architecture Overview</h2>
            <p className="text-muted-foreground">
              IntegrateWise is built on a modular architecture where each component has a specific responsibility.
              Data flows through these components in a canonical sequence from ingestion to output.
            </p>

            <div className="not-prose my-12 grid gap-6 sm:grid-cols-2">
              {[
                {
                  icon: Shield,
                  title: "Hub",
                  subtitle: "The Gateway",
                  description:
                    "Entry point for all external signals. Handles authentication, rate limiting, routing, and policy enforcement.",
                  details: [
                    "OAuth2 and API Key authentication",
                    "Rate limiting and usage metering",
                    "Policy-based routing",
                    "Audit logging",
                  ],
                },
                {
                  icon: Workflow,
                  title: "AI Loader",
                  subtitle: "The Ingest Engine",
                  description:
                    "Transforms raw data from connectors into Spine-compatible formats with normalization and validation.",
                  details: [
                    "Data mapping and normalization",
                    "Conflict resolution",
                    "Schema validation",
                    "Entity mutation generation",
                  ],
                },
                {
                  icon: Database,
                  title: "Spine",
                  subtitle: "The State Store",
                  description:
                    "The canonical database that preserves structure, relationships, and referential integrity.",
                  details: [
                    "Postgres for structured data",
                    "Vector DB for embeddings",
                    "Referential integrity",
                    "Query optimization",
                  ],
                },
                {
                  icon: Brain,
                  title: "Brain",
                  subtitle: "The Intelligence",
                  description:
                    "Semantic layer for memory and reasoning. Provides context retrieval, deduplication, and entity linking.",
                  details: [
                    "Vector embeddings",
                    "Context retrieval",
                    "Deduplication",
                    "Short-term and long-term memory",
                  ],
                },
                {
                  icon: Bot,
                  title: "Agents",
                  subtitle: "The Workers",
                  description:
                    "Autonomous units that perform specific missions—planning, execution, and approval flows.",
                  details: [
                    "Event and schedule triggers",
                    "Plan generation",
                    "Sandboxed execution",
                    "Human approval flows",
                  ],
                },
                {
                  icon: FileText,
                  title: "Render",
                  subtitle: "The View Layer",
                  description:
                    "Generates consumption-ready artifacts like dashboards, emails, PDFs, and Notion pages.",
                  details: [
                    "Templated outputs",
                    "Multiple formats (PDF, HTML, Markdown)",
                    "Email digests",
                    "Dashboard generation",
                  ],
                },
              ].map((component) => (
                <Card key={component.title} className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <component.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{component.title}</h3>
                        <p className="text-sm text-muted-foreground">{component.subtitle}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">{component.description}</p>
                    <ul className="mt-4 space-y-1">
                      {component.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="h-1 w-1 rounded-full bg-primary" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="mt-12 text-2xl font-bold">Canonical Data Flow</h2>
            <p className="text-muted-foreground">
              Here's how data flows through IntegrateWise when processing an event (e.g., a Slack message):
            </p>

            <div className="not-prose my-8">
              <Card className="border-border">
                <CardContent className="p-6">
                  <ol className="space-y-4">
                    {[
                      { step: "Ingest", desc: "Slack sends a webhook to the Hub" },
                      { step: "Auth", desc: "Hub validates signature and routes to AI Loader" },
                      { step: "Map", desc: "Loader maps Slack payload to Spine Task entity" },
                      { step: "Write", desc: "Loader writes Task to Spine database" },
                      { step: "Memory", desc: "Brain updates vector index and links to related entities" },
                      { step: "Plan", desc: "Agent wakes up, sees new Task, drafts a plan" },
                      { step: "Approval", desc: "Agent requests human approval (if configured)" },
                      { step: "Execute", desc: "Agent updates Spine state" },
                      { step: "Render", desc: "Render engine creates output (email, dashboard, etc.)" },
                      { step: "Audit", desc: "All steps logged to Audit Log" },
                    ].map((item, idx) => (
                      <li key={item.step} className="flex items-start gap-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                          {idx + 1}
                        </div>
                        <div>
                          <p className="font-semibold">{item.step}</p>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </div>

            <h2 className="mt-12 text-2xl font-bold">Spine Entities</h2>
            <p className="text-muted-foreground">
              The Spine stores normalized entities that represent your work:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong>Task</strong>: Actionable work items with status, priority, and assignee
              </li>
              <li>
                <strong>Note</strong>: Unstructured content with tags and linked entities
              </li>
              <li>
                <strong>Conversation</strong>: Communication threads from email, chat, or AI tools
              </li>
              <li>
                <strong>Plan</strong>: Objectives with milestones and linked tasks
              </li>
              <li>
                <strong>HealthMetric</strong>: Quantitative signals (usage, NPS, churn risk)
              </li>
            </ul>

            <h2 className="mt-12 text-2xl font-bold">Related Documentation</h2>
            <div className="not-prose my-6 flex flex-wrap gap-4">
              <Button variant="outline" asChild>
                <Link href="/docs/quickstart">Quickstart</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/docs/integrations">Integrations</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/docs/api">API Reference</Link>
              </Button>
              <Button asChild>
                <Link href="/platform">
                  Explore Platform <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
