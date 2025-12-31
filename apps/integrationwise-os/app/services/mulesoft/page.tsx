import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function MuleSoftPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-background to-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">
              MuleSoft Enablement: enterprise integrations done right
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Use MuleSoft to power the Spine and integrate IntegrateWise safely into your enterprise stack.
            </p>
            <div className="mt-10">
              <Button size="lg" asChild>
                <Link href="#">
                  Book MuleSoft Consult <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">What We Provide</h2>
            <div className="mt-12 space-y-4">
              {[
                "MuleSoft connector strategy",
                "API design + governance alignment",
                "Real-time sync architecture",
                "Error handling + retries + DLQ patterns",
                "Data mapping + transformation rules",
                "Secure auth boundaries + audit trails",
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

      {/* Use Cases */}
      <section className="border-y border-border bg-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Use Cases</h2>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {[
              "ERP/Finance integration",
              "CRM workflows and lifecycle triggers",
              "Enterprise event pipelines",
              "Governance-first automation",
            ].map((item) => (
              <Card key={item}>
                <CardContent className="p-6">
                  <Check className="h-6 w-6 text-primary" />
                  <p className="mt-4 font-semibold">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Bring IntegrateWise into enterprise architecture cleanly.
            </h2>
            <div className="mt-10">
              <Button size="lg" asChild>
                <Link href="#">
                  Talk to Integration Architects <ArrowRight className="ml-2 h-4 w-4" />
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
