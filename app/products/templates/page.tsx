import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Templates",
  description:
    "One-click workflow templates for productivity, customer success, product, freelance, and startup operations—deploy in seconds and adapt to your persona-aware views.",
}

export default function TemplatesProductPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="border-b border-border bg-gradient-to-b from-background to-muted/20 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">Templates that deploy in seconds</h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              One‑click structure + workflows that plug into the Spine. Start universal, then adapt to persona‑aware views.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button asChild data-cta="open_template_forge" data-cta-location="products_templates_hero">
                <Link href="/templates">Open Template Forge</Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent" data-cta="request_custom_template" data-cta-location="products_templates_hero">
                <Link href="/company/contact">Request a custom template</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Categories</h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {["Productivity", "Customer Success", "PM", "Freelance", "Startup", "Operations"].map((c) => (
              <Card key={c} className="card-hover">
                <CardContent className="p-6">
                  <p className="text-sm font-semibold">{c}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Deploy structure (pipelines, KPIs, automations) and keep it consistent across tools.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/20 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Featured deep dive</h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Templates don’t just create pages—they create operating structure: pipelines, products, charts of accounts,
              KPIs, and automations.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
            <Card className="card-hover">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold">Customer Success Operating System</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Pipeline stages, health KPIs, renewals tracking, and feedback loops—ready for Full Integration or Render‑Only.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Onboarding", "Adoption", "Renewals", "Churn risk", "QBRs"].map((t) => (
                    <span key={t} className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="card-hover border-2 border-secondary">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold">Deploy in seconds</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Choose a template, preview structure, then deploy idempotently. Starter: up to 5 templates. Pro: unlimited.
                </p>
                <div className="mt-6">
                  <Button asChild data-cta="deploy_templates_pricing" data-cta-location="products_templates_deploy">
                    <Link href="/pricing?required=starter">Unlock Template Forge</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Need something specific?</h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Tell us your tools and workflow goal. We’ll build a BYOT template that fits your operating style.
            </p>
            <div className="mt-8">
              <Button asChild data-cta="request_template" data-cta-location="products_templates_final">
                <Link href="/company/contact">Request a template</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

