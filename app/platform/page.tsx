import Link from "next/link"
import { ArrowRight, Shield, Database, Zap, Brain, Sparkles, Layout, Lock, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Pipeline } from "@/components/infographics/Pipeline"
import { KPITile } from "@/components/infographics/KPITile"

export default function PlatformPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background to-muted/20">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">How IntegrateWise Works</h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              IntegrateWise connects your tool stack through a shared structure (Spine), routes it securely (Hub), and
              activates your work through AI agents and universal Render outputs.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/platform#onboarding">
                  Start Free <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/integrations">View Integrations</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              One platform. Many tools. One intelligent workflow.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">Connect → Normalize → Automate → Render</p>
          </div>

          <div className="mx-auto mt-12 flex justify-center">
            <Pipeline />
          </div>

          {/* Throughput sparkline */}
          <div className="mx-auto mt-12 max-w-md">
            <KPITile
              label="Throughput (events/sec)"
              current={2450}
              target={3000}
              unit="count"
              trend={[2100, 2200, 2350, 2450]}
            />
          </div>
        </div>
      </section>

      {/* Event Flow Diagram */}
      <section className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Complete Event Flow</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Every event passes through authorization, policy evaluation, and audit logging
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium">
              <div className="rounded-lg border-2 border-primary bg-primary/10 px-4 py-3 text-primary">
                1. Ingest
                <div className="text-xs text-muted-foreground">Connectors/Webhooks</div>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground" />
              <div className="rounded-lg border-2 border-accent bg-accent/10 px-4 py-3 text-accent">
                2. Normalize
                <div className="text-xs text-muted-foreground">Spine</div>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground" />
              <div className="rounded-lg border-2 border-primary bg-primary/10 px-4 py-3 text-primary">
                3. Authorize
                <div className="text-xs text-muted-foreground">Hub + Policy</div>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground" />
              <div className="rounded-lg border-2 border-secondary bg-secondary/10 px-4 py-3 text-secondary">
                4. Transform
                <div className="text-xs text-muted-foreground">Mapping + PII</div>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground" />
              <div className="rounded-lg border-2 border-accent bg-accent/10 px-4 py-3 text-accent">
                5. Dispatch
                <div className="text-xs text-muted-foreground">Target tools</div>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground" />
              <div className="rounded-lg border-2 border-secondary bg-secondary/10 px-4 py-3 text-secondary">
                6. Render
                <div className="text-xs text-muted-foreground">Docs/Decks/Emails</div>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground" />
              <div className="rounded-lg border-2 border-primary bg-primary/10 px-4 py-3 text-primary">
                7. Audit
                <div className="text-xs text-muted-foreground">Immutable log</div>
              </div>
            </div>
            <p className="mt-8 text-center text-sm text-muted-foreground">
              This flow ensures every mutation or render operation is authorized, traceable, and compliant
            </p>
          </div>
        </div>
      </section>

      {/* The Hub Section */}
      <section className="border-b border-border bg-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight">
                The Hub: secure routing + boundaries + permissions
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">The Hub is the control plane that handles:</p>
              <div className="mt-6 space-y-3">
                {[
                  "Authentication and access control",
                  "Permissions and boundaries across tools",
                  "Routing events, webhooks, and workflows",
                  "Subscription, billing, and usage policies",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                It's where IntegrateWise makes sure automation stays safe and controlled.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="aspect-square w-full max-w-md rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/20 p-12">
                <div className="flex h-full items-center justify-center">
                  <Shield className="h-32 w-32 text-primary/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Hub Section - Enhanced with tables */}
      <section className="border-b border-border bg-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight">The Hub: Control Plane</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Every event passes through authorization, policy evaluation, and audit logging before it can mutate or
                render data
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Routing Table</h3>
                  <div className="space-y-2 text-sm">
                    <div className="rounded bg-muted/50 p-2 font-mono text-xs">
                      Route(
                      <div className="ml-4">
                        id,
                        <br />
                        source_app,
                        <br />
                        target_app,
                        <br />
                        resource_type,
                        <br />
                        transform_id,
                        <br />
                        policy_id,
                        <br />
                        mode, // full | render-only
                        <br />
                        status
                      </div>
                      )
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Policy Table</h3>
                  <div className="space-y-2 text-sm">
                    <div className="rounded bg-muted/50 p-2 font-mono text-xs">
                      Policy(
                      <div className="ml-4">
                        id,
                        <br />
                        scope,
                        <br />
                        rbac_role,
                        <br />
                        boundary,
                        <br />
                        retention_ttl,
                        <br />
                        redaction_rules,
                        <br />
                        audit_required
                      </div>
                      )
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Audit Log</h3>
                  <div className="space-y-2 text-sm">
                    <div className="rounded bg-muted/50 p-2 font-mono text-xs">
                      AuditLog(
                      <div className="ml-4">
                        actor_id,
                        <br />
                        action,
                        <br />
                        resource,
                        <br />
                        before,
                        <br />
                        after,
                        <br />
                        correlation_id,
                        <br />
                        timestamp
                      </div>
                      )
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Spine Section */}
      <section className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex items-center justify-center lg:order-1">
              <div className="aspect-square w-full max-w-md rounded-2xl border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-accent/20 p-12">
                <div className="flex h-full items-center justify-center">
                  <Database className="h-32 w-32 text-accent/40" />
                </div>
              </div>
            </div>
            <div className="lg:order-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
                <Database className="h-8 w-8 text-accent" />
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight">The Spine: shared structure across your tools</h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                The Spine normalizes data from tools like Notion, Slack, CRMs, Sheets, and calendars into a consistent
                structure—without breaking meaning.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">It helps preserve:</p>
              <div className="mt-6 space-y-3">
                {["Relationships", "Formulas", "Logic", "Context"].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                So your work stays coherent even when it moves across systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Spine Section - Enhanced with schema */}
      <section className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
                <Database className="h-8 w-8 text-accent" />
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight">The Spine: Canonical Schema</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The Spine preserves meaning by separating identity from source systems. Every object has one
                CanonicalID, regardless of how many tools it appears in.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-2 border-accent">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Canonical Entities</h3>
                  <ul className="space-y-2 text-sm">
                    {[
                      "Workspace",
                      "User",
                      "Account",
                      "Contact",
                      "Opportunity / Deal",
                      "Task",
                      "Document",
                      "Interaction",
                    ].map((entity) => (
                      <li key={entity} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-accent" />
                        <span>{entity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Required Fields</h3>
                  <div className="rounded bg-muted/50 p-4 font-mono text-xs">
                    CanonicalID
                    <br />
                    ExternalID
                    <br />
                    SourceApp
                    <br />
                    SchemaVersion
                    <br />
                    Labels[]
                    <br />
                    CreatedAt
                    <br />
                    UpdatedAt
                    <br />
                    PIIClass
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 rounded-lg border border-accent/20 bg-accent/5 p-6">
              <p className="text-sm leading-relaxed text-muted-foreground">
                <strong className="text-foreground">Why this matters:</strong> The Spine preserves meaning by separating
                identity from source systems. Every object has one CanonicalID, regardless of how many tools it appears
                in. This allows IntegrateWise to maintain relationships, track lineage, and apply policies
                consistently—even as your tool stack evolves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Hub Section */}
      <section className="border-b border-border bg-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight">
                The Hub: secure routing + boundaries + permissions
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">The Hub is the control plane that handles:</p>
              <div className="mt-6 space-y-3">
                {[
                  "Authentication and access control",
                  "Permissions and boundaries across tools",
                  "Routing events, webhooks, and workflows",
                  "Subscription, billing, and usage policies",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                It's where IntegrateWise makes sure automation stays safe and controlled.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="aspect-square w-full max-w-md rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/20 p-12">
                <div className="flex h-full items-center justify-center">
                  <Shield className="h-32 w-32 text-primary/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Loader Section */}
      <section className="border-b border-border bg-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10">
              <Zap className="h-8 w-8 text-secondary" />
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight">
              AI Loader: one-click ingestion that preserves context
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              AI Loader lets you import data into a shared structure with a single click.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">Instead of copy-paste, AI Loader:</p>
            <div className="mt-6 space-y-3">
              {[
                "Maps your data into structured schemas",
                "Preserves meaning, relationships, and formulas where possible",
                "Makes the data instantly usable by agents and insights",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brain Agent Section */}
      <section className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <Brain className="h-8 w-8 text-primary" />
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight">Second Brain built from your AI conversations</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              IntegrateWise captures your thinking through secure webhook streaming from AI tools like:
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["ChatGPT", "Claude", "Gemini", "Grok", "Perplexity"].map((tool) => (
                <span key={tool} className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  {tool}
                </span>
              ))}
            </div>
            <p className="mt-6 leading-relaxed text-muted-foreground">Then:</p>
            <div className="mt-6 space-y-3">
              {[
                "The Brainstorming Layer organizes it into memory",
                "The Brain Agent turns it into action: tasks, plans, and documents",
                "The system links ideas across tools and time",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 font-medium">Your thinking compounds instead of disappearing.</p>
          </div>
        </div>
      </section>

      {/* Agents Section */}
      <section className="border-b border-border bg-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
              <Sparkles className="h-8 w-8 text-accent" />
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight">Agents that do real work — safely</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">Agents can:</p>
            <div className="mt-6 space-y-3">
              {[
                "Generate plans and tasks",
                "Trigger workflows",
                "Create drafts, updates, and responses",
                "Retrieve relevant context when you need it",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Agents operate through the Hub + Spine so the system remains consistent and secure.
            </p>
          </div>
        </div>
      </section>

      {/* Render Section */}
      <section className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10">
              <Layout className="h-8 w-8 text-secondary" />
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight">Render: output for anyone, in any format</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Render is the universal output layer of IntegrateWise.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">It turns agent work into:</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {["Docs", "Decks", "Emails", "SOPs", "Implementation plans", "Executive updates", "Dashboards"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                    <div className="h-2 w-2 rounded-full bg-secondary" />
                    <p className="text-sm font-medium">{item}</p>
                  </div>
                ),
              )}
            </div>
            <p className="mt-6 font-medium">Render works for everyone — not just teams like CS.</p>
          </div>
        </div>
      </section>

      {/* Modes Section */}
      <section className="border-b border-border bg-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Choose your mode</h2>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-2">
            <Card className="border-2 border-primary">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold">Full Integration</h3>
                <p className="mt-4 text-sm text-muted-foreground">
                  Two-way sync + automation. Best for teams that want execution.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold">Render Only</h3>
                <p className="mt-4 text-sm text-muted-foreground">
                  Read-only dashboards + analytics. Best for compliance-first environments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Render Only - Enhanced */}
      <section className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl mb-12">
              Render Only: Compliance-First Mode
            </h2>

            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-xl font-bold mb-4">Guarantees</h3>
                <div className="space-y-3">
                  {[
                    "Read-only connectors (no write scopes)",
                    "Zero mutation of source systems",
                    "Cached analytics with TTL",
                    "Deterministic render inputs",
                    "Audit correlation IDs per output",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Mode Switching</h3>
                <div className="space-y-3">
                  {["Org default: Render Only", "Per-route overrides for Ops", "Per-role permissions (RBAC)"].map(
                    (item) => (
                      <div key={item} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <p className="text-muted-foreground">{item}</p>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg font-medium">"Write when needed. Read when required."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Views Section */}
      <section className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">One OS, many lenses</h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              IntegrateWise is universal by default. Views are specialized lenses:
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {["Personal", "Work", "Business Ops", "Customer Success"].map((view) => (
              <Card key={view} className="border-border">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold">{view}</h3>
                  {view === "Customer Success" && (
                    <p className="mt-2 text-xs text-muted-foreground">(specialized CS Intelligence suite)</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security & BYOM Section */}
      <section className="border-b border-border bg-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <Lock className="h-8 w-8 text-primary" />
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight">Secure by design</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Modern authentication, strict boundaries, and a system built to act as a secure router—not a permanent
              data owner unless you choose.
            </p>

            <Card className="mt-12 border-2 border-secondary">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold">BYOM</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Connect your model with your API key and still benefit from shared context and agent intelligence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* BYOM - Enhanced */}
      <section className="border-b border-border bg-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <Lock className="h-8 w-8 text-primary" />
            </div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">Bring Your Own AI Model (BYOM)</h2>
            <p className="mt-6 text-center leading-relaxed text-muted-foreground">
              Model keys are stored in a managed secrets vault, scoped per workspace. Each workflow selects a model
              explicitly, with:
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {[
                { title: "Rate caps", desc: "Prevent runaway costs" },
                { title: "Spend guards", desc: "Budget enforcement per workspace" },
                { title: "Fallback models", desc: "Automatic failover on errors" },
                { title: "Per-agent overrides", desc: "Different models for different tasks" },
              ].map((item) => (
                <Card key={item.title}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="mt-8 text-center text-muted-foreground">
              Shared context, policies, and auditability remain consistent regardless of model choice.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-gradient-to-b from-background to-primary/5 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Start with one workflow. Scale into an operating system.
            </h2>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/platform#onboarding">
                  Start Free <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/company/contact?type=demo">Book Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
