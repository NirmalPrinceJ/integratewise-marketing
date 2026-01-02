import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check, Target, Wrench, Settings, GraduationCap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Services — When You Need More Than Software",
  description:
    "Strategic Advisory, Expert Delivery, Managed Ops, MuleSoft/Integration, and Training. 12+ years experience in enterprise integrations.",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section - SSOT v2 */}
      <section className="border-b border-border bg-gradient-to-b from-background to-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6 rounded-full px-4 py-1">
              <Users className="mr-2 h-4 w-4" />
              12+ Years Experience
            </Badge>

            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">
              When You Need More Than Software
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Whether you're connecting a few tools or building an enterprise-grade operating system, our team helps you
              design, implement, and scale IntegrateWise with confidence.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/demo">
                  Book a Discovery Call <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Help With - SSOT v2 */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">What We Help With</h2>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-5">
            {[
              { icon: Target, title: "Strategic Advisory", color: "primary" },
              { icon: Wrench, title: "Expert Delivery", color: "secondary" },
              { icon: Settings, title: "Managed Ops", color: "accent" },
              { icon: Users, title: "MuleSoft/Integration", color: "primary" },
              { icon: GraduationCap, title: "Training", color: "secondary" },
            ].map((service) => (
              <Card key={service.title}>
                <CardContent className="p-6 text-center">
                  <service.icon className={`mx-auto h-10 w-10 text-${service.color}`} />
                  <h3 className="mt-4 font-bold">{service.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process - SSOT v2 */}
      <section className="border-y border-border bg-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Our Process</h2>
            <p className="mt-4 text-muted-foreground">From discovery to ongoing support</p>
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid gap-4 sm:grid-cols-5">
              {["Discovery", "Design", "Build", "Deploy", "Support"].map((step, idx) => (
                <div key={step} className="relative text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <span className="font-bold">{idx + 1}</span>
                  </div>
                  <p className="mt-4 font-medium">{step}</p>
                  {idx < 4 && (
                    <div className="absolute top-6 left-[calc(50%+24px)] hidden h-0.5 w-[calc(100%-48px)] bg-border sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - SSOT v2 */}
      <section id="services" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Service Packages</h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 border-primary">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-primary" />
                <h3 className="mt-6 text-2xl font-bold">Assessment</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Structured workflow and tool review with a clear deployment roadmap. Map your current state and
                  identify what to connect, automate, or keep Render Only.
                </p>
                <div className="mt-8">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/services/assessments">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary">
              <CardContent className="p-8">
                <Wrench className="h-12 w-12 text-secondary" />
                <h3 className="mt-6 text-2xl font-bold">Implementation</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Full configuration of integrations, Spine mappings, agents, and templates. We build your operating
                  system—fast and clean.
                </p>
                <div className="mt-8">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/services/implementations">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent">
              <CardContent className="p-8">
                <Settings className="h-12 w-12 text-accent" />
                <h3 className="mt-6 text-2xl font-bold">Managed Ops</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Ongoing monitoring, optimization, and operational support. We run it with you—changes, upgrades,
                  performance, and support.
                </p>
                <div className="mt-8">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/services/managed-ops">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-primary" />
                <h3 className="mt-6 text-2xl font-bold">MuleSoft Enablement</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Enterprise-grade integration architecture with MuleSoft. Connect complex systems with proven patterns.
                </p>
                <div className="mt-8">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/services/mulesoft">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <GraduationCap className="h-12 w-12 text-secondary" />
                <h3 className="mt-6 text-2xl font-bold">Training & Adoption</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Role-based training for individuals, teams, and admins. Build internal capability and drive adoption.
                </p>
                <div className="mt-8">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/services/training">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who Services Are For - SSOT v2 */}
      <section className="border-y border-border bg-muted/20 py-24 sm:py-32">
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

      {/* CTA Section - SSOT v2 */}
      <section className="bg-gradient-to-b from-background to-primary/5 py-24 sm:py-32">
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
                <Link href="/demo">
                  Book a Discovery Call <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/ai-insights">Try AI Insights Free</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
