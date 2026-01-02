import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Strategic Advisory, Expert Delivery, Managed Ops, MuleSoft/Integration, and Training—when you need more than software.",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-background to-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">
              When You Need More Than Software
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Strategic advisory and expert delivery to help you adopt the Universal AI OS with clean architecture,
              secure boundaries, and measurable outcomes.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild data-cta="book_discovery_call" data-cta-location="services_hero">
                <Link href="/company/contact">
                  Book a Discovery Call <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent" asChild data-cta="view_packages" data-cta-location="services_hero">
                <Link href="#packages">View Service Packages</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="border-b border-border py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">12+ years in integration delivery</h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              We’ve implemented integration programs across teams, tool stacks, and compliance constraints—so your rollout
              is clean from day one.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="packages" className="border-b border-border bg-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Service Packages</h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="card-hover border-2 border-primary">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold">Strategic Advisory</h3>
                <p className="mt-4 text-muted-foreground">
                  Map your workflows and stack. Decide Full Integration vs Render‑Only. Produce a rollout plan.
                </p>
                <div className="mt-8">
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="/services/assessments">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover border-2 border-secondary">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold">Expert Delivery</h3>
                <p className="mt-4 text-muted-foreground">
                  Build your integrations, Spine mappings, policies, and templates—fast and clean.
                </p>
                <div className="mt-8">
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="/services/implementations">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover border-2 border-accent">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold">Managed Ops</h3>
                <p className="mt-4 text-muted-foreground">Monitoring, upgrades, performance, and support.</p>
                <div className="mt-8">
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="/services/managed-ops">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold">MuleSoft / Integration</h3>
                <p className="mt-4 text-muted-foreground">Enterprise-grade integration architecture and delivery.</p>
                <div className="mt-8">
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="/services/mulesoft">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold">Training & Adoption</h3>
                <p className="mt-4 text-muted-foreground">Role-based training for individuals, teams, and admins.</p>
                <div className="mt-8">
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="/services/training">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Our process</h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">A simple delivery path, end to end.</p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {["Discovery", "Design", "Build", "Deploy", "Support"].map((step, i) => (
              <Card key={step} className="card-hover">
                <CardContent className="p-6 text-center">
                  <p className="text-sm font-semibold text-muted-foreground">{i + 1}</p>
                  <p className="mt-2 font-semibold">{step}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
            <Card className="card-hover">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold">What we optimize for</h3>
                <div className="mt-6 space-y-3">
                  {["Clear boundaries", "Secure policies", "Repeatable templates", "Measurable outcomes"].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-sm text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold">What you get</h3>
                <div className="mt-6 space-y-3">
                  {["Architecture notes", "Working integrations", "Deployed templates", "Operational runbook"].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-sm text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-gradient-to-b from-muted/20 to-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to deploy the Universal AI OS the right way?
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Book a discovery call and we’ll map the rollout.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild data-cta="book_discovery_call" data-cta-location="services_final_cta">
                <Link href="/company/contact">
                  Book a Discovery Call <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent" asChild data-cta="try_ai_insights" data-cta-location="services_final_cta">
                <Link href="/ai-insights">Try AI Insights</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
