import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ImplementationsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-background to-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">
              Implementation: connect your tools, build your OS
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              We configure integrations, Spine normalization, webhooks, agents, templates, and render outputs tailored
              to your workflows.
            </p>
            <div className="mt-10">
              <Button size="lg" asChild>
                <Link href="#">
                  Book Implementation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">What We Build</h2>
            <div className="mt-12 space-y-4">
              {[
                "Integrations setup (OAuth/API keys)",
                "Webhook ingestion layer",
                "Spine mappings + normalization rules",
                "Hub routing + governance",
                "Agent setup (task, insights, render, ops)",
                "Templates installation + customization",
                "Views/Lenses activation (including CS lens if needed)",
                "Render outputs (docs, decks, reports, dashboards)",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Tracks */}
      <section className="border-y border-border bg-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Typical Implementation Tracks
            </h2>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            <Card>
              <CardContent className="p-8">
                <div className="text-sm font-semibold text-primary">1–2 weeks</div>
                <h3 className="mt-4 text-2xl font-bold">Quick Start</h3>
                <p className="mt-4 text-muted-foreground">Connect core tools + install templates + launch OS.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <div className="text-sm font-semibold text-secondary">2–6 weeks</div>
                <h3 className="mt-4 text-2xl font-bold">Workflow Build</h3>
                <p className="mt-4 text-muted-foreground">Integrations + workflows + automation + insights.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <div className="text-sm font-semibold text-accent">6–12 weeks</div>
                <h3 className="mt-4 text-2xl font-bold">Enterprise Build</h3>
                <p className="mt-4 text-muted-foreground">
                  Governance, complex mappings, DataSentinel policies, approvals, long-term rollout.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Ship real workflows fast.</h2>
            <div className="mt-10">
              <Button size="lg" asChild>
                <Link href="#">
                  Talk to Implementation <ArrowRight className="ml-2 h-4 w-4" />
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
