import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Play, Check, Download } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"

export default function DemoPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background to-muted/20">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">
              Watch IntegrateWise turn scattered work into action
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Connect → Normalize → Authorize → Transform → Render → Audit.
              <br />
              See two real workflows: <em>Brain → Plan → Execute</em> and <em>CS Intelligence</em>.
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

      {/* Demo Video Section */}
      <section className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">3–5 Minute Demo</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                See concrete end-to-end proof with artifacts, timestamps, and audit IDs
              </p>
            </div>

            <Card className="border-2 border-primary">
              <CardContent className="p-8">
                <div className="aspect-video rounded-lg bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <Play className="mx-auto h-20 w-20 text-muted-foreground mb-4" />
                    <p className="text-sm text-muted-foreground">Full Demo Video (Coming Soon)</p>
                  </div>
                </div>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="font-semibold mb-3">Video Chapters</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>0:00 – Problem overview</li>
                      <li>0:20 – The OS Core</li>
                      <li>0:45 – Workflow 1: Brain → Plan → Execute</li>
                      <li>1:35 – Workflow 2: CS Intelligence</li>
                      <li>2:45 – Modes (Full vs Render Only)</li>
                      <li>3:25 – Architecture walkthrough</li>
                      <li>4:10 – Get started</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">What you'll see</h3>
                    <ul className="space-y-2">
                      {[
                        "Live event payloads with timestamps",
                        "Correlation IDs for every action",
                        "Tasks created in Notion automatically",
                        "Rendered docs with auditability",
                        "Health scores recomputed in real-time",
                        "Policy approval workflows",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Workflow 1: Brain → Plan → Execute */}
      <section className="border-b border-border bg-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Workflow 1: Brain → Plan → Execute (Universal)
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">From AI chat to structured execution across tools</p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-xl font-bold mb-6">The Flow</h3>
                <div className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Webhook Ingest",
                      desc: "AI chat streams via webhook to Brain",
                      tech: "slack_webhook / ai_chat_webhook",
                    },
                    {
                      step: "2",
                      title: "Brain Agent Plans",
                      desc: "Creates structured plan with milestones, tasks, owners",
                      tech: "brain.agent.plan",
                    },
                    {
                      step: "3",
                      title: "Spine Normalize",
                      desc: "Tasks converted to canonical Task schema",
                      tech: "spine.normalize",
                    },
                    {
                      step: "4",
                      title: "Hub Authorize",
                      desc: "Policy checks: write or render-only?",
                      tech: "hub.authorize",
                    },
                    {
                      step: "5",
                      title: "Dispatch Tasks",
                      desc: "Tasks created in Notion",
                      tech: "dispatch.create_tasks → notion",
                    },
                    {
                      step: "6",
                      title: "Update Calendar",
                      desc: "Timeline synced to Google Calendar",
                      tech: "dispatch.update_calendar → google_calendar",
                    },
                    {
                      step: "7",
                      title: "Render Doc",
                      desc: "Weekly status document generated",
                      tech: "render.generate",
                    },
                    {
                      step: "8",
                      title: "Audit Log",
                      desc: "Correlation ID recorded",
                      tech: "audit.log",
                    },
                  ].map((item) => (
                    <Card key={item.step}>
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 font-bold text-primary">
                            {item.step}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold">{item.title}</h4>
                            <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                            <code className="text-xs text-accent mt-2 block">{item.tech}</code>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <Card className="border-2 border-accent">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Proof Elements</h3>
                    <ul className="space-y-3">
                      {[
                        { label: "event_id", value: "evt_abc123def456" },
                        { label: "X-IW-Idempotency-Key", value: "idem_xyz789..." },
                        { label: "correlation_id", value: "corr_w1_20250115" },
                      ].map((item) => (
                        <li key={item.label} className="rounded bg-muted/50 p-3 font-mono text-xs">
                          <span className="text-primary font-semibold">{item.label}:</span> {item.value}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Artifacts Generated</h3>
                    <ul className="space-y-2">
                      {[
                        "Weekly Status Doc (rendered)",
                        "Tasks in Notion workspace",
                        "Calendar events in Google Calendar",
                        "Audit log entry with correlation ID",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold">Download Template</h3>
                      <Download className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get the JSON workflow template to import into your IntegrateWise workspace
                    </p>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Download workflow_1_brain_plan_execute.json
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow 2: CS Intelligence */}
      <section className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Workflow 2: CS Intelligence (Specialized Lens)
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                From multi-source signals to governed intervention with manager approval
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-xl font-bold mb-6">The Flow</h3>
                <div className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Ingest Signals",
                      desc: "Slack message, HubSpot deal, Stripe subscription",
                      tech: "webhook.ingest + connector.sync",
                    },
                    {
                      step: "2",
                      title: "Spine Normalize",
                      desc: "Account, Opportunity, Interaction schemas",
                      tech: "spine.normalize",
                    },
                    {
                      step: "3",
                      title: "Recompute Health",
                      desc: "Health score, ARR risk, technical health, churn risk",
                      tech: "cs.health.recompute",
                    },
                    {
                      step: "4",
                      title: "Generate Playbook",
                      desc: "Intervention steps, owners, timing, comms",
                      tech: "agent.generate_playbook",
                    },
                    {
                      step: "5",
                      title: "Render Email Draft",
                      desc: "Customer email template populated",
                      tech: "render.generate",
                    },
                    {
                      step: "6",
                      title: "Hub Authorize",
                      desc: "Policy requires manager approval",
                      tech: "hub.authorize + policy_manager_approval",
                    },
                    {
                      step: "7",
                      title: "Approval Request",
                      desc: "Manager reviews and approves",
                      tech: "approval.request",
                    },
                    {
                      step: "8",
                      title: "Send Email",
                      desc: "Dispatched via Google Workspace",
                      tech: "dispatch.send_email (full mode)",
                    },
                    {
                      step: "9",
                      title: "Audit Log",
                      desc: "Correlation ID + policy ID + approver ID",
                      tech: "audit.log",
                    },
                  ].map((item) => (
                    <Card key={item.step}>
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10 font-bold text-secondary">
                            {item.step}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold">{item.title}</h4>
                            <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                            <code className="text-xs text-accent mt-2 block">{item.tech}</code>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <Card className="border-2 border-secondary">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Measurable Outcomes</h3>
                    <ul className="space-y-3">
                      {[
                        { metric: "67%", desc: "faster time to intervention" },
                        { metric: "40%", desc: "reduction in handoffs between teams" },
                        { metric: "3x", desc: "faster executive updates" },
                        { metric: "100%", desc: "audit trail from signal → action" },
                      ].map((item) => (
                        <li key={item.metric} className="flex items-start gap-3">
                          <div className="rounded bg-secondary/10 px-3 py-1 font-bold text-secondary">
                            {item.metric}
                          </div>
                          <p className="text-sm text-muted-foreground pt-1">{item.desc}</p>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">CS Intelligence Views</h3>
                    <div className="space-y-2">
                      {["Health Scores", "ARR & Revenue", "Churn Risk", "Technical Health"].map((view) => (
                        <div key={view} className="rounded border border-border bg-muted/30 p-3 text-sm font-medium">
                          {view}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-secondary">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold">Download Template</h3>
                      <Download className="h-5 w-5 text-secondary" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get the JSON workflow template for CS Intelligence
                    </p>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Download workflow_2_cs_intelligence.json
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Diagrams */}
      <section className="border-b border-border bg-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Architecture: Why it's safe</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Every action flows through authorization, policy evaluation, and audit logging
            </p>
          </div>

          <div className="space-y-12">
            {/* Event Flow Diagram */}
            <Card>
              <CardContent className="p-8">
                <h3 className="font-bold text-xl mb-6">Event Flow</h3>
                <div className="rounded-lg border border-border overflow-hidden">
                  <Image
                    src="/images/architecture-event-flow.svg"
                    alt="IntegrateWise Event Flow Architecture"
                    width={1400}
                    height={560}
                    className="w-full h-auto"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Spine Schema */}
            <Card>
              <CardContent className="p-8">
                <h3 className="font-bold text-xl mb-6">Spine — Canonical Schema</h3>
                <div className="rounded-lg border border-border overflow-hidden">
                  <Image
                    src="/images/architecture-spine-schema.svg"
                    alt="IntegrateWise Spine Canonical Schema"
                    width={1400}
                    height={780}
                    className="w-full h-auto"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Hub Policy */}
            <Card>
              <CardContent className="p-8">
                <h3 className="font-bold text-xl mb-6">Hub — Routing & Policy Control Plane</h3>
                <div className="rounded-lg border border-border overflow-hidden">
                  <Image
                    src="/images/architecture-hub-policy.svg"
                    alt="IntegrateWise Hub Policy Architecture"
                    width={1400}
                    height={900}
                    className="w-full h-auto"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Modes Explanation */}
      <section className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Modes: Full Integration vs Render Only</h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <Card className="border-2 border-primary">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Full Integration</h3>
                  <p className="text-muted-foreground mb-6">Two-way sync + automation</p>
                  <ul className="space-y-3">
                    {[
                      "Agents can create and update workflows",
                      "Execute actions across tools",
                      "Best for teams that want execution",
                      "Governed by Hub policies and boundaries",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Render Only</h3>
                  <p className="text-muted-foreground mb-6">Read-only analytics + outputs (zero write)</p>
                  <ul className="space-y-3">
                    {[
                      "Read-only connectors with no write scopes",
                      "Zero mutation of source systems",
                      "Best for compliance-first orgs",
                      "Perfect for executive reporting and dashboards",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg font-medium">"If you're enterprise/compliance-first, start Render Only."</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-background to-primary/5 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Start free in minutes</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Connect once, keep context, and ship outputs you can trust
            </p>
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
