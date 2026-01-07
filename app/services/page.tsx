import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check, Target, Wrench, Settings, GraduationCap, Users, Star, Sparkles } from "lucide-react"
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

const services = [
  {
    icon: Target,
    title: "Assessment",
    desc: "Structured workflow and tool review with a clear deployment roadmap. Map your current state and identify what to connect, automate, or keep Render Only.",
    color: "from-primary to-emerald-400",
    href: "/services/assessments",
  },
  {
    icon: Wrench,
    title: "Implementation",
    desc: "Full configuration of integrations, Spine mappings, agents, and templates. We build your operating system—fast and clean.",
    color: "from-secondary to-blue-400",
    href: "/services/implementations",
  },
  {
    icon: Settings,
    title: "Managed Ops",
    desc: "Ongoing monitoring, optimization, and operational support. We run it with you—changes, upgrades, performance, and support.",
    color: "from-violet-500 to-purple-500",
    href: "/services/managed-ops",
  },
  {
    icon: Users,
    title: "MuleSoft Enablement",
    desc: "Enterprise-grade integration architecture with MuleSoft. Connect complex systems with proven patterns.",
    color: "from-amber-500 to-orange-500",
    href: "/services/mulesoft",
  },
  {
    icon: GraduationCap,
    title: "Training & Adoption",
    desc: "Role-based training for individuals, teams, and admins. Build internal capability and drive adoption.",
    color: "from-rose-500 to-pink-500",
    href: "/services/training",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - MailerLite Style */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient-green" />
        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6">
              <Star className="h-4 w-4 text-amber-500" />
              12+ Years Experience
            </Badge>

            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">
              When you need <span className="gradient-text">more than software</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
              Whether you&apos;re connecting a few tools or building an enterprise-grade operating system, 
              our team helps you design, implement, and scale IntegrateWise with confidence.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild className="shadow-xl shadow-primary/25">
                <Link href="/demo">
                  Book Discovery Call <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Help With - MailerLite Style */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6">Expertise</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What We Help With</h2>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {[
              { icon: Target, title: "Strategic Advisory", color: "from-primary to-emerald-400" },
              { icon: Wrench, title: "Expert Delivery", color: "from-secondary to-blue-400" },
              { icon: Settings, title: "Managed Ops", color: "from-violet-500 to-purple-500" },
              { icon: Users, title: "MuleSoft", color: "from-amber-500 to-orange-500" },
              { icon: GraduationCap, title: "Training", color: "from-rose-500 to-pink-500" },
            ].map((service) => (
              <Card key={service.title} className="border-border/50 hover:border-primary/30 transition-all hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} shadow-lg mb-4`}>
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-bold">{service.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process - MailerLite Style */}
      <section className="py-24 sm:py-32 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6">Process</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Process</h2>
            <p className="mt-4 text-muted-foreground">From discovery to ongoing support</p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-4 sm:grid-cols-5">
              {["Discovery", "Design", "Build", "Deploy", "Support"].map((step, idx) => (
                <div key={step} className="relative text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-emerald-400 shadow-lg shadow-primary/25">
                    <span className="text-xl font-bold text-white">{idx + 1}</span>
                  </div>
                  <p className="mt-4 font-semibold">{step}</p>
                  {idx < 4 && (
                    <div className="absolute top-8 left-[calc(50%+32px)] hidden h-0.5 w-[calc(100%-64px)] bg-gradient-to-r from-primary/50 to-primary/20 sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - MailerLite Style */}
      <section id="services" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6">Packages</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Service Packages</h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="group border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl overflow-hidden">
                <div className={`h-1.5 bg-gradient-to-r ${service.color}`} />
                <CardContent className="p-8">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} shadow-lg mb-6`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-8">{service.desc}</p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={service.href}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who & Outcomes - MailerLite Style */}
      <section className="py-24 sm:py-32 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <Badge variant="secondary" className="mb-6">For You</Badge>
              <h2 className="text-3xl font-bold tracking-tight mb-8">Who Services Are For</h2>
              <div className="space-y-4">
                {[
                  "Teams adopting IntegrateWise for the first time",
                  "Businesses integrating multiple tools + workflows",
                  "Compliance-first orgs starting with Render Only",
                  "Teams needing MuleSoft-backed integration architecture",
                  "Organizations wanting 'done-with-you' adoption & rollout",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <Badge variant="default" className="mb-6">Results</Badge>
              <h2 className="text-3xl font-bold tracking-tight mb-8">Outcomes</h2>
              <div className="space-y-4">
                {[
                  "Faster time-to-value",
                  "Clean data structure and fewer sync issues",
                  "Safe, controlled automation",
                  "Higher adoption, lower tool friction",
                  "Stronger governance and reporting",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <Sparkles className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - MailerLite Style */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-emerald-500 p-12 sm:p-16 shadow-2xl shadow-primary/30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_50%)]" />
            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to deploy IntegrateWise the right way?
              </h2>
              <p className="mt-4 text-lg text-white/80">
                Let&apos;s build your operating system together.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button size="xl" className="bg-white text-primary hover:bg-white/90 shadow-xl" asChild>
                  <Link href="/demo">
                    Book Discovery Call <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 bg-transparent" asChild>
                  <Link href="/ai-insights">Try AI Insights Free</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
