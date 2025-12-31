import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AssessmentsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-background to-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">
              Assessment: your roadmap to Effortless Work
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              A structured review of your tools, workflows, and pain points — resulting in a clear IntegrateWise
              deployment plan.
            </p>
            <div className="mt-10">
              <Button size="lg" asChild>
                <Link href="#">
                  Book an Assessment <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">What You Get</h2>
            <div className="mt-12 space-y-4">
              {[
                "Tool stack + workflow audit",
                "Spine structure design (schemas, mapping logic)",
                "Hub boundaries + permissions model",
                "Integration plan (Full Integration vs Render Only)",
                "Agent opportunities (automation + insights)",
                "Template activation plan",
                "Implementation timeline + effort estimate",
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

      {/* Who It's For */}
      <section className="border-y border-border bg-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Who It's For</h2>
            <div className="mt-12 space-y-4">
              {[
                "Teams unsure where to start",
                "Orgs with complex workflows & multiple tools",
                "Teams that want compliance and safety from day one",
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

      {/* Assessment Format */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Assessment Format</h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {[
                { title: "Discovery session", desc: "60–90 mins" },
                { title: "Workflow mapping", desc: "Document current state" },
                { title: "Recommendations + architecture doc", desc: "Detailed technical plan" },
                { title: "Implementation plan + next steps", desc: "Timeline and resources" },
              ].map((item) => (
                <Card key={item.title}>
                  <CardContent className="p-6">
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-gradient-to-b from-muted/20 to-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Start with clarity. Deploy with confidence.
            </h2>
            <div className="mt-10">
              <Button size="lg" asChild>
                <Link href="#">
                  Book an Assessment <ArrowRight className="ml-2 h-4 w-4" />
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
