import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "AI Loader",
  description: "Turn chaos into structured data with BYOM/BYOT ingestion, normalization into the Spine, and push anywhere.",
}

export default function AiLoaderProductPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="border-b border-border bg-gradient-to-b from-background to-muted/20 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">
              Turn Chaos Into Structured Data
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              AI Loader brings BYOM + BYOT ingestion to your stack: normalize into the Spine, then push to destinations.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button asChild data-cta="try_loader" data-cta-location="products_ai_loader_hero">
                <Link href="/pricing">Upgrade for Loader</Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent" data-cta="compare_modes" data-cta-location="products_ai_loader_hero">
                <Link href="/docs/integrations/compare-modes">Compare Modes</Link>
              </Button>
            </div>
          </div>

          {/* Lightweight “animation” */}
          <div className="mx-auto mt-14 grid max-w-5xl items-center gap-4 rounded-2xl border border-border bg-card p-6 sm:p-10">
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-muted/20 p-5">
                <p className="text-xs font-semibold text-muted-foreground">Input</p>
                <p className="mt-2 font-semibold">Raw docs / chats / tables</p>
                <p className="mt-1 text-sm text-muted-foreground">BYOT templates interpret your content.</p>
              </div>
              <div className="rounded-xl border border-border bg-[color-mix(in_srgb,var(--iw-pastel-green)_25%,var(--iw-white))] p-5">
                <p className="text-xs font-semibold text-muted-foreground">Spine</p>
                <p className="mt-2 font-semibold">Normalized structure</p>
                <p className="mt-1 text-sm text-muted-foreground">Meaning + relationships preserved.</p>
              </div>
              <div className="rounded-xl border border-border bg-muted/20 p-5">
                <p className="text-xs font-semibold text-muted-foreground">Output</p>
                <p className="mt-2 font-semibold">Push anywhere</p>
                <p className="mt-1 text-sm text-muted-foreground">Docs, CRMs, Sheets, tasks, dashboards.</p>
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Designed for both <strong className="text-foreground">Full Integration</strong> and{" "}
              <strong className="text-foreground">Render‑Only</strong> mode.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">What you can do</h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-3">
            {[
              { title: "Normalize", desc: "Convert messy inputs into Spine entities with consistent schemas and ids." },
              { title: "Enrich", desc: "Attach context, links, and references so outputs remain traceable." },
              { title: "Push", desc: "Send structured data and outputs to the tools your team actually uses." },
            ].map((c) => (
              <Card key={c.title} className="card-hover">
                <CardContent className="p-6">
                  <h3 className="font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/20 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Integration modes</h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
            <Card className="card-hover border-2 border-primary">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold">Full Integration</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Bi‑directional send/receive. Write back tasks, records, and updates with governance.
                </p>
              </CardContent>
            </Card>
            <Card className="card-hover border-2 border-accent">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold">Render‑Only</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Output generation only (reports, decks, emails, SOPs) without modifying source systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Ready to use Loader?</h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">Upgrade to Starter+ to unlock Loader routes.</p>
            <div className="mt-8">
              <Button asChild data-cta="go_pricing" data-cta-location="products_ai_loader_final">
                <Link href="/pricing?required=starter">See plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

