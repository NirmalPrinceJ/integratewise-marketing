import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      company: "Acme Corp",
      industry: "SaaS",
      title: "How Acme Corp reduced tool sprawl by 60% and increased team productivity",
      challenge: "250-person team using 30+ disconnected tools, causing information silos and wasted time.",
      solution:
        "Implemented IntegrateWise Full Integration mode to connect CRM, support, billing, and productivity tools.",
      results: [
        "60% reduction in tool context switching",
        "3 hours saved per employee per week",
        "95% user adoption within 30 days",
      ],
    },
    {
      company: "TechStart Inc",
      industry: "Technology",
      title: "TechStart's Customer Success team cuts churn by 25% with CS Intelligence",
      challenge: "CS team couldn't predict churn or track health scores across fragmented systems.",
      solution: "Deployed IntegrateWise CS Intelligence Suite with ChurnShield and SuccessPilot agents.",
      results: [
        "25% reduction in customer churn",
        "Early warning on 90% of at-risk accounts",
        "Real-time health scoring across 500+ customers",
      ],
    },
    {
      company: "Global Services Ltd",
      industry: "Professional Services",
      title: "How Global Services scaled operations without adding headcount",
      challenge: "Rapid growth led to operational chaos and manual work across departments.",
      solution: "Used IntegrateWise Business Ops view with custom automations and templates.",
      results: [
        "40% increase in operational efficiency",
        "Scaled from 50 to 200 customers with same ops team",
        "Automated 70% of routine workflows",
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-background to-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">Customer Success Stories</h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              See how teams across industries use IntegrateWise to achieve effortless work.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <Card key={study.company} className="border-2 border-border">
                <CardContent className="p-8 lg:p-12">
                  <div className="grid gap-12 lg:grid-cols-2">
                    <div>
                      <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {study.industry}
                      </div>
                      <h2 className="mt-4 text-2xl font-bold lg:text-3xl">{study.title}</h2>
                      <div className="mt-8 space-y-6">
                        <div>
                          <h3 className="font-semibold text-muted-foreground">Challenge</h3>
                          <p className="mt-2 leading-relaxed">{study.challenge}</p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-muted-foreground">Solution</h3>
                          <p className="mt-2 leading-relaxed">{study.solution}</p>
                        </div>
                      </div>
                      <Button className="mt-8" asChild>
                        <Link href="#">
                          Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                    <div className="flex flex-col justify-center rounded-lg border-2 border-primary/20 bg-primary/5 p-8">
                      <h3 className="font-semibold">Results</h3>
                      <div className="mt-6 space-y-4">
                        {study.results.map((result) => (
                          <div key={result} className="flex items-start gap-3">
                            <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                            <p className="text-lg font-medium">{result}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to write your own success story?
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Join hundreds of teams using IntegrateWise to transform how they work.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="#">
                  Start Free <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#">Book Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
