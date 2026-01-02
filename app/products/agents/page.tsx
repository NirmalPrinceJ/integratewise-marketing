import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "AI Agents",
  description:
    "Enterprise-grade agents with logs and governance—TaskPilot, ChurnShield, DataSentinel, InboxZero, FollowUp.",
}

export default function AgentsProductPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="border-b border-border bg-gradient-to-b from-background to-muted/20 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">AI Agents, built for governance</h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Always-on agents that act on structured context—with logs, controls, and policy boundaries.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button asChild data-cta="agents_pricing" data-cta-location="products_agents_hero">
                <Link href="/pricing?required=enterprise">See Enterprise</Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent" data-cta="book_enterprise_demo" data-cta-location="products_agents_hero">
                <Link href="/company/contact">Book a demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Agent lineup</h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "TaskPilot", desc: "Turns plans into tasks and follow-through across tools." },
              { name: "ChurnShield", desc: "Detects churn signals and recommends interventions." },
              { name: "DataSentinel", desc: "Policy-aware guardrails for sensitive data and workflows." },
              { name: "InboxZero", desc: "Triage, summarize, and draft responses with governed outputs." },
              { name: "FollowUp", desc: "Meeting-to-action loops: owners, dates, reminders." },
            ].map((a) => (
              <Card key={a.name} className="card-hover">
                <CardContent className="p-6">
                  <p className="text-sm font-semibold">{a.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/20 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Logs & governance</h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Agents run through policy boundaries, produce audit trails, and support approvals.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
            <Card className="card-hover border-2 border-primary">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold">Operational visibility</h3>
                <p className="mt-3 text-sm text-muted-foreground">Execution logs, retries, and clear provenance for outputs.</p>
              </CardContent>
            </Card>
            <Card className="card-hover border-2 border-accent">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold">Controlled automation</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Guardrails for tool writes, user approvals, and enterprise policy enforcement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Want Agents early?</h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">Agents are targeted for Q1. Join the list.</p>
            <div className="mt-8">
              <Button asChild data-cta="agents_waitlist" data-cta-location="products_agents_final">
                <Link href="/ai-insights#stay-tuned">Get updates</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

