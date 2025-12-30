import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Play, Check } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function DemoPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background to-muted/20">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">See IntegrateWise in Action</h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Watch how IntegrateWise connects your tools, structures your work, and activates AI agents—all without
              migrations or rebuilding your world.
            </p>
            <div className="mt-10">
              <Button size="lg" asChild>
                <Link href="/platform#onboarding">
                  Start Free <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Demo 1: Brain → Plan → Execute */}
      <section className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Demo 1: AI Chat → Tasks → Timeline</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                From brainstorming to execution in one continuous flow
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-xl font-bold mb-4">The Flow</h3>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "AI Chat", desc: "You brainstorm with ChatGPT or Claude" },
                    { step: "2", title: "Webhook → Brain", desc: "Conversation streams securely to IntegrateWise" },
                    { step: "3", title: "Brain Agent Creates Plan", desc: "AI extracts action items and structure" },
                    {
                      step: "4",
                      title: "Tasks Created in Notion",
                      desc: "Tasks appear automatically in your workspace",
                    },
                    { step: "5", title: "Timeline Synced", desc: "Google Calendar updated with deadlines" },
                    { step: "6", title: "Weekly Status Doc", desc: "Automated progress report rendered" },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 font-bold text-primary">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <Card className="border-2 border-accent">
                  <CardContent className="p-8">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-accent/10">
                      <Play className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Watch the 3-minute demo</h3>
                    <div className="aspect-video rounded-lg bg-muted flex items-center justify-center">
                      <Play className="h-16 w-16 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-3">What you'll see:</h4>
                    <ul className="space-y-2">
                      {[
                        "Live chat screenshot",
                        "AuditLog entry with correlation ID",
                        "Task created in Notion",
                        "Rendered status doc with traceability",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo 2: CS Intelligence */}
      <section className="border-b border-border bg-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Demo 2: CS Intelligence in Action</h2>
              <p className="mt-4 text-lg text-muted-foreground">From signal to intervention with manager approval</p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-xl font-bold mb-4">The Flow</h3>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Multi-Source Signals", desc: "Slack + HubSpot + Stripe data flows in" },
                    { step: "2", title: "CS Lens Recalculates", desc: "Health score drops below threshold" },
                    { step: "3", title: "Playbook Generated", desc: "ChurnShield suggests intervention plan" },
                    { step: "4", title: "Email Drafted", desc: "Google Workspace draft created automatically" },
                    { step: "5", title: "Manager Approval", desc: "Policy gate requires human review" },
                    { step: "6", title: "Send & Track", desc: "Email sent, interaction logged, health monitored" },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10 font-bold text-secondary">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <Card className="border-2 border-secondary">
                  <CardContent className="p-8">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-secondary/10">
                      <Play className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Watch the 5-minute walkthrough</h3>
                    <div className="aspect-video rounded-lg bg-muted flex items-center justify-center">
                      <Play className="h-16 w-16 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-3">Measurable outcomes:</h4>
                    <ul className="space-y-2">
                      {[
                        "67% faster time to intervention",
                        "40% reduction in handoffs between teams",
                        "3x faster executive updates",
                        "Complete audit trail from signal → action",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-background to-primary/5 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to build your own workflows?
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
