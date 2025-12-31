import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Play, Check, Download } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#E5E7EB]">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-5xl font-bold tracking-tight text-[#1E2A4A] sm:text-6xl">
              One workflow. Start to finish.
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-[#4B5563] sm:text-xl">
              See Brain → Plan → Execute → Render with guardrails (Hub) and meaning-preserving normalization (Spine).
              <br />
              Target: 4–5 minutes. Enterprise buyers, architects, senior operators.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild className="bg-[#3F51B5] hover:bg-[#303F9F] text-white">
                <Link href="/platform#onboarding">
                  Start Free <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-[#3F51B5] text-[#3F51B5] hover:bg-[#F3F4F6] bg-transparent"
              >
                <Link href="/company/contact?type=demo">Book Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="border-b border-[#E5E7EB] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-[#1E2A4A] sm:text-4xl">
                Video Outline (4–5 minutes)
              </h2>
              <p className="mt-4 text-lg text-[#4B5563]">
                Modern work isn't hard because teams lack capability—it's hard because tools don't cooperate.
                IntegrateWise fixes that.
              </p>
            </div>

            <Card className="border-2 border-[#3F51B5]">
              <CardContent className="p-8">
                <div className="aspect-video rounded-lg bg-[#F3F4F6] flex items-center justify-center">
                  <div className="text-center">
                    <Play className="mx-auto h-20 w-20 text-[#9CA3AF] mb-4" />
                    <p className="text-sm text-[#4B5563]">Full Demo Video (Coming Soon)</p>
                    <p className="text-xs text-[#9CA3AF] mt-2">Connect once. Everything flows.</p>
                  </div>
                </div>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="font-semibold text-[#1E2A4A] mb-3">Video Chapters</h3>
                    <ul className="space-y-2 text-sm text-[#4B5563]">
                      <li>
                        <strong>0:15</strong> – Hook: scattered tools, lost AI ideas, brittle integrations
                      </li>
                      <li>
                        <strong>0:30</strong> – Stack Connection: Notion, Slack, Google, HubSpot, Stripe
                      </li>
                      <li>
                        <strong>0:45</strong> – Brainstream Ingest: AI chats become memory
                      </li>
                      <li>
                        <strong>0:45</strong> – Spine Normalization: canonical entities, preserved meaning
                      </li>
                      <li>
                        <strong>0:45</strong> – Hub Guardrails: policy-evaluated, audited routes
                      </li>
                      <li>
                        <strong>0:45</strong> – Agents in Action: plan → tasks → calendar sync
                      </li>
                      <li>
                        <strong>0:30</strong> – Render Outputs: docs, decks, emails with correlation IDs
                      </li>
                      <li>
                        <strong>0:20</strong> – Compliance Mode: Render Only, zero-write, TTL cache
                      </li>
                      <li>
                        <strong>0:20</strong> – BYOM: model picker, cost guards, fallbacks
                      </li>
                      <li>
                        <strong>0:10</strong> – Close + CTA
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#1E2A4A] mb-3">Tight Narration Script</h3>
                    <ul className="space-y-3">
                      {[
                        "Connect once. Everything flows. No migrations.",
                        "AI conversations are your thinking—streamed into searchable memory.",
                        "Meaning matters. Canonical entities preserve relationships and context.",
                        "Safety is a control plane. Hub authorizes, applies policies, writes audit trails.",
                        "Agents act with context: compose plans, create tasks, sync timelines, draft updates.",
                        "Outputs everyone can use: deterministic inputs, versioned outputs, correlation IDs.",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-[#4B5563]">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#3F51B5]" />
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
      <section className="border-b border-[#E5E7EB] bg-[#F3F4F6] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#1E2A4A] sm:text-4xl">Architecture Diagrams</h2>
            <p className="mt-4 text-lg text-[#4B5563]">Spine + Hub + Agents + Render with guardrails-first design</p>
          </div>

          <div className="space-y-12">
            {/* End-to-End Flow */}
            <Card>
              <CardContent className="p-8">
                <h3 className="font-bold text-xl mb-6 text-[#1E2A4A]">End-to-End Flow</h3>
                <div className="rounded-lg border border-[#E5E7EB] overflow-hidden bg-white p-4">
                  <svg viewBox="0 0 1200 420" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <defs>
                      <style>{`
                        .box{fill:#FFFFFF;stroke:#3F51B5;stroke-width:2;rx:8;ry:8}
                        .label{font-family:Inter, sans-serif;font-size:14px;fill:#1E2A4A}
                        .title{font-family:Inter, sans-serif;font-size:16px;font-weight:bold;fill:#1E2A4A}
                        .arrow{stroke:#1E2A4A;stroke-width:2;marker-end:url(#arrowHead)}
                      `}</style>
                      <marker id="arrowHead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#1E2A4A" />
                      </marker>
                    </defs>

                    <rect className="box" x="40" y="40" width="220" height="80" />
                    <text className="title" x="50" y="65">
                      Source Tools
                    </text>
                    <text className="label" x="50" y="90">
                      Notion · Slack · Google · CRM · Stripe
                    </text>

                    <rect className="box" x="300" y="40" width="160" height="80" />
                    <text className="title" x="310" y="65">
                      Ingest
                    </text>
                    <text className="label" x="310" y="90">
                      Webhooks · Connectors
                    </text>

                    <rect className="box" x="500" y="40" width="200" height="120" />
                    <text className="title" x="510" y="65">
                      Spine (Canonical)
                    </text>
                    <text className="label" x="510" y="90">
                      Task · Document · Interaction
                    </text>
                    <text className="label" x="510" y="110">
                      Preserve relationships & formulas
                    </text>

                    <rect className="box" x="740" y="40" width="200" height="160" />
                    <text className="title" x="750" y="65">
                      Hub (Control Plane)
                    </text>
                    <text className="label" x="750" y="90">
                      AuthN/Z · Policies · Audit
                    </text>
                    <text className="label" x="750" y="110">
                      Routes: full | render-only
                    </text>
                    <text className="label" x="750" y="130">
                      Rate caps · Spend guards
                    </text>

                    <rect className="box" x="980" y="40" width="180" height="120" />
                    <text className="title" x="990" y="65">
                      Agents
                    </text>
                    <text className="label" x="990" y="90">
                      Plan · Orchestrate · Draft
                    </text>
                    <text className="label" x="990" y="110">
                      Retrieve context
                    </text>

                    <rect className="box" x="980" y="200" width="180" height="120" />
                    <text className="title" x="990" y="225">
                      Render
                    </text>
                    <text className="label" x="990" y="250">
                      Docs · Decks · Emails
                    </text>
                    <text className="label" x="990" y="270">
                      Correlation IDs
                    </text>

                    <line className="arrow" x1="260" y1="80" x2="300" y2="80" />
                    <line className="arrow" x1="460" y1="80" x2="500" y2="80" />
                    <line className="arrow" x1="700" y1="80" x2="740" y2="80" />
                    <line className="arrow" x1="940" y1="80" x2="980" y2="80" />
                    <line className="arrow" x1="1070" y1="160" x2="1070" y2="200" />

                    <rect x="760" y="170" width="160" height="30" fill="#F3F4F6" stroke="#3F51B5" rx="6" />
                    <text className="label" x="770" y="190">
                      Mode: Render Only / Full
                    </text>
                  </svg>
                </div>
              </CardContent>
            </Card>

            {/* Hub Tables + Policy */}
            <Card>
              <CardContent className="p-8">
                <h3 className="font-bold text-xl mb-6 text-[#1E2A4A]">Hub Tables + Policy Evaluation</h3>
                <div className="rounded-lg border border-[#E5E7EB] overflow-hidden bg-white p-4">
                  <svg viewBox="0 0 1200 520" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <defs>
                      <style>{`
                        .box{fill:#FFFFFF;stroke:#3F51B5;stroke-width:2;rx:8;ry:8}
                        .label{font-family:Inter, sans-serif;font-size:13px;fill:#1E2A4A}
                        .title{font-family:Inter, sans-serif;font-size:16px;font-weight:bold;fill:#1E2A4A}
                      `}</style>
                    </defs>

                    <rect className="box" x="40" y="40" width="340" height="160" />
                    <text className="title" x="50" y="65">
                      Route
                    </text>
                    <text className="label" x="50" y="90">
                      id, source_app, target_app, resource_type
                    </text>
                    <text className="label" x="50" y="110">
                      transform_id, policy_id, mode, status
                    </text>

                    <rect className="box" x="420" y="40" width="340" height="160" />
                    <text className="title" x="430" y="65">
                      Policy
                    </text>
                    <text className="label" x="430" y="90">
                      id, scope, rbac_role, boundary
                    </text>
                    <text className="label" x="430" y="110">
                      retention_ttl, redaction_rules
                    </text>
                    <text className="label" x="430" y="130">
                      audit_required
                    </text>

                    <rect className="box" x="800" y="40" width="360" height="160" />
                    <text className="title" x="810" y="65">
                      AuditLog
                    </text>
                    <text className="label" x="810" y="90">
                      actor_id, action, resource
                    </text>
                    <text className="label" x="810" y="110">
                      before, after, correlation_id
                    </text>
                    <text className="label" x="810" y="130">
                      timestamp
                    </text>

                    <rect className="box" x="40" y="240" width="500" height="220" />
                    <text className="title" x="50" y="265">
                      Evaluation Flow
                    </text>
                    <text className="label" x="50" y="290">
                      1. Authorize (RBAC + scopes)
                    </text>
                    <text className="label" x="50" y="310">
                      2. Evaluate policy (boundary, retention, redaction)
                    </text>
                    <text className="label" x="50" y="330">
                      3. Transform (mapping + PII handling)
                    </text>
                    <text className="label" x="50" y="350">
                      4. Dispatch (target app route)
                    </text>
                    <text className="label" x="50" y="370">
                      5. Audit (immutable log)
                    </text>

                    <rect className="box" x="580" y="240" width="580" height="220" />
                    <text className="title" x="590" y="265">
                      Guarantees
                    </text>
                    <text className="label" x="590" y="290">
                      Render Only: read-only connectors, zero mutations
                    </text>
                    <text className="label" x="590" y="310">
                      Full Integration: two-way sync under policy
                    </text>
                    <text className="label" x="590" y="330">
                      Per-route overrides; per-role permissions
                    </text>
                    <text className="label" x="590" y="350">
                      Rate caps · spend guards · anomaly alerts
                    </text>
                  </svg>
                </div>
              </CardContent>
            </Card>

            {/* Spine Canonical Entities */}
            <Card>
              <CardContent className="p-8">
                <h3 className="font-bold text-xl mb-6 text-[#1E2A4A]">Spine Canonical Entities</h3>
                <div className="rounded-lg border border-[#E5E7EB] overflow-hidden bg-white p-4">
                  <svg viewBox="0 0 1200 520" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <defs>
                      <style>{`
                        .box{fill:#FFFFFF;stroke:#3F51B5;stroke-width:2;rx:8;ry:8}
                        .label{font-family:Inter, sans-serif;font-size:13px;fill:#1E2A4A}
                        .title{font-family:Inter, sans-serif;font-size:16px;font-weight:bold;fill:#1E2A4A}
                        .edge{stroke:#1E2A4A;stroke-width:2;marker-end:url(#arrowHead2)}
                      `}</style>
                      <marker id="arrowHead2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#1E2A4A" />
                      </marker>
                    </defs>

                    <rect className="box" x="60" y="60" width="220" height="120" />
                    <text className="title" x="70" y="85">
                      Account
                    </text>
                    <text className="label" x="70" y="110">
                      CanonicalID · ExternalID
                    </text>
                    <text className="label" x="70" y="130">
                      Labels · PIIClass
                    </text>

                    <rect className="box" x="340" y="60" width="220" height="120" />
                    <text className="title" x="350" y="85">
                      Contact
                    </text>
                    <text className="label" x="350" y="110">
                      CanonicalID · ExternalID
                    </text>
                    <text className="label" x="350" y="130">
                      Labels · PIIClass
                    </text>

                    <rect className="box" x="620" y="60" width="220" height="120" />
                    <text className="title" x="630" y="85">
                      Opportunity / Deal
                    </text>
                    <text className="label" x="630" y="110">
                      SourceApp · SchemaVersion
                    </text>
                    <text className="label" x="630" y="130">
                      CreatedAt · UpdatedAt
                    </text>

                    <rect className="box" x="200" y="240" width="220" height="120" />
                    <text className="title" x="210" y="265">
                      Task
                    </text>
                    <text className="label" x="210" y="290">
                      Assignee · DueDate
                    </text>
                    <text className="label" x="210" y="310">
                      Status · Labels
                    </text>

                    <rect className="box" x="480" y="240" width="220" height="120" />
                    <text className="title" x="490" y="265">
                      Document
                    </text>
                    <text className="label" x="490" y="290">
                      Type · Version
                    </text>
                    <text className="label" x="490" y="310">
                      CorrelationID
                    </text>

                    <rect className="box" x="760" y="240" width="220" height="120" />
                    <text className="title" x="770" y="265">
                      Interaction
                    </text>
                    <text className="label" x="770" y="290">
                      Channel · Timestamp
                    </text>
                    <text className="label" x="770" y="310">
                      LinkedEntity
                    </text>

                    <line className="edge" x1="280" y1="120" x2="340" y2="120" />
                    <line className="edge" x1="560" y1="120" x2="620" y2="120" />
                    <line className="edge" x1="270" y1="180" x2="270" y2="240" />
                    <line className="edge" x1="450" y1="180" x2="450" y2="240" />
                    <line className="edge" x1="730" y1="180" x2="730" y2="240" />
                  </svg>
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

      {/* CTA Bar */}
      <section className="border-t border-[#E5E7EB] bg-[#3F51B5] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Connect your stack. Keep meaning. Add guardrails.
            </h2>
            <p className="mt-4 text-lg text-white/90">Start with one workflow and scale to an operating system.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild className="bg-white text-[#3F51B5] hover:bg-[#F3F4F6]">
                <Link href="/platform#onboarding">
                  Start Free <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white text-white hover:bg-white/10 bg-transparent"
              >
                <Link href="/company/contact?type=demo">Book Demo</Link>
              </Button>
              <Button size="lg" variant="ghost" asChild className="text-white hover:bg-white/10">
                <Link href="/docs">View Docs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
