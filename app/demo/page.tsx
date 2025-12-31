import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Play, Check, Download, Calendar, Clock, Users, Video } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Design System Colors
const colors = {
  primary: "#3F51B5",
  primaryDark: "#303F9F",
  light: "#F3F4F6",
  dark: "#1E2A4A",
  accent: "#F54476",
  muted: "#4B5563",
  border: "#E5E7EB",
}

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b" style={{ borderColor: colors.border }}>
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl" style={{ color: colors.dark }}>
              See IntegrateWise in Action
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed sm:text-xl" style={{ color: colors.muted }}>
              Watch our product demo or book a personalized walkthrough with our team.
              <br />
              Experience Brain → Plan → Execute → Render with guardrails (Hub) and meaning-preserving normalization (Spine).
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="#watch">
                  <Play className="h-4 w-4" />
                  Watch Demo
                </a>
              </Button>
              <Button 
                size="lg" 
                className="gap-2" 
                style={{ backgroundColor: colors.primary }}
                asChild
              >
                <a href="#book">
                  <Calendar className="h-4 w-4" />
                  Book Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Watch Demo Section */}
      <section id="watch" className="border-b py-24 sm:py-32" style={{ borderColor: colors.border }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: colors.dark }}>
                Watch the Demo Video
              </h2>
              <p className="mt-4 text-lg" style={{ color: colors.muted }}>
                A 5-minute overview of IntegrateWise for enterprise buyers, architects, and operators.
              </p>
            </div>

            <Card className="border-2" style={{ borderColor: colors.primary }}>
              <CardContent className="p-8">
                <div className="aspect-video rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.light }}>
                  <div className="text-center">
                    <div 
                      className="mx-auto h-20 w-20 rounded-full flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${colors.primary}15` }}
                    >
                      <Play className="h-10 w-10" style={{ color: colors.primary }} />
                    </div>
                    <p className="text-sm" style={{ color: colors.muted }}>Full Demo Video</p>
                    <p className="text-xs mt-2" style={{ color: "#9CA3AF" }}>Connect once. Everything flows.</p>
                  </div>
                </div>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="font-semibold mb-3" style={{ color: colors.dark }}>Video Chapters</h3>
                    <ul className="space-y-2 text-sm" style={{ color: colors.muted }}>
                      <li><strong>0:00</strong> – Introduction & the modern work problem</li>
                      <li><strong>0:30</strong> – Connect your stack: Notion, Slack, Google, CRM, Stripe</li>
                      <li><strong>1:00</strong> – Brainstream: AI conversations become memory</li>
                      <li><strong>1:45</strong> – Spine: Canonical entities, preserved meaning</li>
                      <li><strong>2:30</strong> – Hub: Policy-evaluated, audited routes</li>
                      <li><strong>3:15</strong> – Agents: Plan → tasks → calendar sync</li>
                      <li><strong>4:00</strong> – Render: Docs, decks, emails with correlation IDs</li>
                      <li><strong>4:30</strong> – Modes: Render Only vs Full Integration</li>
                      <li><strong>4:45</strong> – BYOM: Bring your own AI model</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3" style={{ color: colors.dark }}>Key Takeaways</h3>
                    <ul className="space-y-3">
                      {[
                        "Connect once. Everything flows. No migrations.",
                        "AI conversations become searchable memory.",
                        "Canonical entities preserve relationships and context.",
                        "Hub authorizes, applies policies, writes audit trails.",
                        "Agents act with context: compose plans, create tasks, sync timelines.",
                        "Deterministic inputs, versioned outputs, correlation IDs.",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm" style={{ color: colors.muted }}>
                          <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: colors.primary }} />
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

      {/* Book Demo Section */}
      <section id="book" className="border-b py-24 sm:py-32" style={{ backgroundColor: colors.light, borderColor: colors.border }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: colors.dark }}>
                Book a Personalized Demo
              </h2>
              <p className="mt-4 text-lg" style={{ color: colors.muted }}>
                Get a tailored walkthrough based on your specific use case and requirements.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Demo Options */}
              <div className="space-y-6">
                <Card className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div 
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                        style={{ backgroundColor: `${colors.primary}15` }}
                      >
                        <Video className="h-6 w-6" style={{ color: colors.primary }} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg" style={{ color: colors.dark }}>Product Walkthrough</h3>
                        <p className="mt-1 text-sm" style={{ color: colors.muted }}>
                          30-minute guided tour of IntegrateWise features and capabilities
                        </p>
                        <div className="mt-3 flex items-center gap-4 text-sm" style={{ color: colors.muted }}>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" /> 30 min
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="h-4 w-4" /> 1-3 attendees
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div 
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                        style={{ backgroundColor: `${colors.accent}15` }}
                      >
                        <Users className="h-6 w-6" style={{ color: colors.accent }} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg" style={{ color: colors.dark }}>Enterprise Deep Dive</h3>
                        <p className="mt-1 text-sm" style={{ color: colors.muted }}>
                          60-minute technical session with architecture review and security discussion
                        </p>
                        <div className="mt-3 flex items-center gap-4 text-sm" style={{ color: colors.muted }}>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" /> 60 min
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="h-4 w-4" /> Teams welcome
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div 
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                        style={{ backgroundColor: `${colors.primary}15` }}
                      >
                        <Calendar className="h-6 w-6" style={{ color: colors.primary }} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg" style={{ color: colors.dark }}>Custom Use Case Review</h3>
                        <p className="mt-1 text-sm" style={{ color: colors.muted }}>
                          45-minute session focused on your specific workflows and integration needs
                        </p>
                        <div className="mt-3 flex items-center gap-4 text-sm" style={{ color: colors.muted }}>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" /> 45 min
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="h-4 w-4" /> 1-5 attendees
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form Card */}
              <Card className="border-2" style={{ borderColor: colors.primary }}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-6" style={{ color: colors.dark }}>
                    Request a Demo
                  </h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: colors.dark }}>
                        Full Name *
                      </label>
                      <input 
                        type="text" 
                        required
                        className="w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2"
                        style={{ borderColor: colors.border }}
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: colors.dark }}>
                        Work Email *
                      </label>
                      <input 
                        type="email" 
                        required
                        className="w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2"
                        style={{ borderColor: colors.border }}
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: colors.dark }}>
                        Company *
                      </label>
                      <input 
                        type="text" 
                        required
                        className="w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2"
                        style={{ borderColor: colors.border }}
                        placeholder="Acme Inc"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: colors.dark }}>
                        Role
                      </label>
                      <select 
                        className="w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2"
                        style={{ borderColor: colors.border }}
                      >
                        <option value="">Select your role</option>
                        <option value="executive">Executive</option>
                        <option value="engineering">Engineering/Technical</option>
                        <option value="operations">Operations</option>
                        <option value="product">Product</option>
                        <option value="customer-success">Customer Success</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: colors.dark }}>
                        What are you looking to solve?
                      </label>
                      <textarea 
                        rows={3}
                        className="w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2"
                        style={{ borderColor: colors.border }}
                        placeholder="Tell us about your use case..."
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full gap-2"
                      style={{ backgroundColor: colors.primary }}
                    >
                      <Calendar className="h-4 w-4" />
                      Request Demo
                    </Button>
                    <p className="text-xs text-center" style={{ color: colors.muted }}>
                      We&apos;ll respond within 24 hours to schedule your demo.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow 1: Brain → Plan → Execute */}
      <section className="border-b py-24 sm:py-32" style={{ borderColor: colors.border, backgroundColor: `${colors.light}60` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: colors.dark }}>
                Example Workflow: Brain → Plan → Execute
              </h2>
              <p className="mt-4 text-lg" style={{ color: colors.muted }}>
                From AI chat to structured execution across tools
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-xl font-bold mb-6" style={{ color: colors.dark }}>The Flow</h3>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Webhook Ingest", desc: "AI chat streams via webhook to Brain", tech: "slack_webhook / ai_chat_webhook" },
                    { step: "2", title: "Brain Agent Plans", desc: "Creates structured plan with milestones, tasks, owners", tech: "brain.agent.plan" },
                    { step: "3", title: "Spine Normalize", desc: "Tasks converted to canonical Task schema", tech: "spine.normalize" },
                    { step: "4", title: "Hub Authorize", desc: "Policy checks: write or render-only?", tech: "hub.authorize" },
                    { step: "5", title: "Dispatch Tasks", desc: "Tasks created in Notion", tech: "dispatch.create_tasks → notion" },
                    { step: "6", title: "Update Calendar", desc: "Timeline synced to Google Calendar", tech: "dispatch.update_calendar → google_calendar" },
                    { step: "7", title: "Render Doc", desc: "Weekly status document generated", tech: "render.generate" },
                    { step: "8", title: "Audit Log", desc: "Correlation ID recorded", tech: "audit.log" },
                  ].map((item) => (
                    <Card key={item.step}>
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <div 
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg font-bold"
                            style={{ backgroundColor: `${colors.primary}15`, color: colors.primary }}
                          >
                            {item.step}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold" style={{ color: colors.dark }}>{item.title}</h4>
                            <p className="text-sm mt-1" style={{ color: colors.muted }}>{item.desc}</p>
                            <code className="text-xs mt-2 block" style={{ color: colors.accent }}>{item.tech}</code>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <Card className="border-2" style={{ borderColor: colors.accent }}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4" style={{ color: colors.dark }}>Proof Elements</h3>
                    <ul className="space-y-3">
                      {[
                        { label: "event_id", value: "evt_abc123def456" },
                        { label: "X-IW-Idempotency-Key", value: "idem_xyz789..." },
                        { label: "correlation_id", value: "corr_w1_20250115" },
                      ].map((item) => (
                        <li 
                          key={item.label} 
                          className="rounded p-3 font-mono text-xs"
                          style={{ backgroundColor: `${colors.light}` }}
                        >
                          <span className="font-semibold" style={{ color: colors.primary }}>{item.label}:</span> {item.value}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4" style={{ color: colors.dark }}>Artifacts Generated</h3>
                    <ul className="space-y-2">
                      {[
                        "Weekly Status Doc (rendered)",
                        "Tasks in Notion workspace",
                        "Calendar events in Google Calendar",
                        "Audit log entry with correlation ID",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm">
                          <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: colors.accent }} />
                          <span style={{ color: colors.muted }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2" style={{ borderColor: colors.primary }}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold" style={{ color: colors.dark }}>Download Template</h3>
                      <Download className="h-5 w-5" style={{ color: colors.primary }} />
                    </div>
                    <p className="text-sm mb-4" style={{ color: colors.muted }}>
                      Get the JSON workflow template to import into your IntegrateWise workspace
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Download workflow_1_brain_plan_execute.json
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modes Explanation */}
      <section className="border-b py-24 sm:py-32" style={{ borderColor: colors.border }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: colors.dark }}>
                Modes: Full Integration vs Render Only
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <Card className="border-2" style={{ borderColor: colors.primary }}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4" style={{ color: colors.dark }}>Full Integration</h3>
                  <p className="mb-6" style={{ color: colors.muted }}>Two-way sync + automation</p>
                  <ul className="space-y-3">
                    {[
                      "Agents can create and update workflows",
                      "Execute actions across tools",
                      "Best for teams that want execution",
                      "Governed by Hub policies and boundaries",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 shrink-0" style={{ color: colors.primary }} />
                        <span className="text-sm" style={{ color: colors.muted }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2" style={{ borderColor: colors.accent }}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4" style={{ color: colors.dark }}>Render Only</h3>
                  <p className="mb-6" style={{ color: colors.muted }}>Read-only analytics + outputs (zero write)</p>
                  <ul className="space-y-3">
                    {[
                      "Read-only connectors with no write scopes",
                      "Zero mutation of source systems",
                      "Best for compliance-first orgs",
                      "Perfect for executive reporting and dashboards",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 shrink-0" style={{ color: colors.accent }} />
                        <span className="text-sm" style={{ color: colors.muted }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg font-medium" style={{ color: colors.dark }}>
                &ldquo;If you&apos;re enterprise/compliance-first, start Render Only.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bar */}
      <section className="py-16" style={{ backgroundColor: colors.primary }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to see IntegrateWise work for you?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Book a demo to see how IntegrateWise can transform your workflows.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="gap-2"
                style={{ backgroundColor: "white", color: colors.primary }}
                asChild
              >
                <a href="#book">
                  <Calendar className="h-4 w-4" />
                  Book Demo
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="gap-2 border-white text-white hover:bg-white/10"
                style={{ backgroundColor: "transparent" }}
                asChild
              >
                <Link href="/company/contact">
                  Talk to Sales <ArrowRight className="h-4 w-4" />
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
