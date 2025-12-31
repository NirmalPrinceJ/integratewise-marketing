import Link from "next/link"
import { ArrowRight, Check, Target, Wrench, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-background to-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">
              Services that make IntegrateWise work from day one
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Whether you're connecting a few tools or building an enterprise-grade operating system, our team helps you
              design, implement, and scale IntegrateWise with confidence.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="#">
                  Book a Call <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Help With section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">What We Help With</h2>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            <Card>
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-primary" />
                <h3 className="mt-6 text-xl font-bold">Assessments</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Map your workflows and tool stack. Identify what to connect, what to automate, and what to keep Render
                  Only.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <Wrench className="h-12 w-12 text-secondary" />
                <h3 className="mt-6 text-xl font-bold">Implementations</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  We build your Spine mappings, integrations, and workflows—fast and clean.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <Settings className="h-12 w-12 text-accent" />
                <h3 className="mt-6 text-xl font-bold">Managed Ops</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  We run it with you: monitoring, upgrades, changes, performance, and support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="border-y border-border bg-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Service Packages</h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 border-primary">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold">Assessment</h3>
                <p className="mt-4 text-muted-foreground">
                  Structured workflow and tool review with a clear deployment roadmap.
                </p>
                <div className="mt-8">
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="/services/assessments">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold">Implementation</h3>
                <p className="mt-4 text-muted-foreground">
                  Full configuration of integrations, Spine, agents, and templates.
                </p>
                <div className="mt-8">
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="/services/implementations">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold">Managed Ops</h3>
                <p className="mt-4 text-muted-foreground">Ongoing monitoring, optimization, and operational support.</p>
                <div className="mt-8">
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="/services/managed-ops">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold">MuleSoft Enablement</h3>
                <p className="mt-4 text-muted-foreground">Enterprise-grade integration architecture with MuleSoft.</p>
                <div className="mt-8">
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="/services/mulesoft">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
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

      {/* Who Services Are For section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Who Services Are For</h2>
              <div className="mt-8 space-y-4">
                {[
                  "Teams adopting IntegrateWise for the first time",
                  "Businesses integrating multiple tools + workflows",
                  "Compliance-first orgs starting with Render Only",
                  "Teams needing MuleSoft-backed integration architecture",
                  "Organizations wanting 'done-with-you' adoption & rollout",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Outcomes</h2>
              <div className="mt-8 space-y-4">
                {[
                  "Faster time-to-value",
                  "Clean data structure and fewer sync issues",
                  "Safe, controlled automation",
                  "Higher adoption, lower tool friction",
                  "Stronger governance and reporting",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-gradient-to-b from-muted/20 to-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to deploy IntegrateWise the right way?
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Let's build your operating system together.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="#">
                  Book a Call <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#">Start Free</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
