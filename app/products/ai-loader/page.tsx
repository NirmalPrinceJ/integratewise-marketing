import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check, Database, Zap, Upload, FileText, Settings, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "AI Loader — Turn Chaos Into Structured Data",
  description:
    "AI Loader normalizes messy inputs into the Spine using BYOM + BYOT. Push clean data into your tools in seconds.",
}

export default function AILoaderPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero - SSOT v2 */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background to-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6 rounded-full px-4 py-1">
              <Zap className="mr-2 h-4 w-4" />
              BYOM + BYOT Supported
            </Badge>

            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Turn Chaos Into{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Structured Data
              </span>
            </h1>

            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              AI Loader normalizes messy inputs into the <strong className="text-foreground">Spine</strong> using BYOM +
              BYOT. Push clean data into your tools in seconds.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/pricing">
                  Try AI Loader <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/docs">View Documentation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What It Does - SSOT v2 */}
      <section className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">How AI Loader Works</h2>
            <p className="mt-4 text-muted-foreground">Three steps to structured data</p>
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-2 border-border text-center">
                <CardContent className="p-8">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                    <Upload className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold">1. Normalize</h3>
                  <p className="mt-4 text-muted-foreground">
                    Input messy data from any source—meeting notes, CRM exports, project plans
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#8BC4B8] text-center">
                <CardContent className="p-8">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-[#8BC4B8]/10">
                    <Database className="h-8 w-8 text-[#8BC4B8]" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold">2. Spine</h3>
                  <p className="mt-4 text-muted-foreground">
                    Data is normalized and stored in the Spine with preserved relationships
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-border text-center">
                <CardContent className="p-8">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-secondary/10">
                    <FileText className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold">3. Push Anywhere</h3>
                  <p className="mt-4 text-muted-foreground">
                    Send clean structured data to any connected tool or output
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* BYOM + BYOT - SSOT v2 */}
      <section className="border-b border-border bg-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <Card className="border-2 border-primary">
              <CardContent className="p-8">
                <Settings className="h-12 w-12 text-primary" />
                <h3 className="mt-6 text-2xl font-bold">BYOM — Bring Your Own Model</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Start with our built-in models or connect your own AI model—commercial or self-hosted—using your API
                  key. Full control over your AI processing.
                </p>
                <div className="mt-6 space-y-3">
                  {["OpenAI / GPT-4", "Anthropic / Claude", "Self-hosted models", "Custom fine-tuned models"].map(
                    (item) => (
                      <div key={item} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary">
              <CardContent className="p-8">
                <Database className="h-12 w-12 text-secondary" />
                <h3 className="mt-6 text-2xl font-bold">BYOT — Bring Your Own Tools</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Connect your existing tools and push structured data anywhere. No lock-in—your data goes where you
                  need it.
                </p>
                <div className="mt-6 space-y-3">
                  {["Notion, Slack, Google Workspace", "CRMs: Salesforce, HubSpot", "Project: Linear, Jira, Todoist", "Custom webhooks"].map(
                    (item) => (
                      <div key={item} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-secondary" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases - SSOT v2 */}
      <section className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Use Cases</h2>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-3">
            {[
              {
                title: "Meeting notes → tasks + doc",
                desc: "Transform raw meeting notes into structured tasks and documentation",
              },
              {
                title: "CRM exports → structured fields",
                desc: "Normalize CRM data exports into clean, usable structured fields",
              },
              {
                title: "Project plans → timelines + checklists",
                desc: "Convert project plans into actionable timelines and task checklists",
              },
            ].map((useCase) => (
              <Card key={useCase.title} className="border-border">
                <CardContent className="p-6">
                  <h3 className="font-bold">{useCase.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{useCase.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Modes - SSOT v2 */}
      <section className="border-b border-border bg-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Integration Modes</h2>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-8 lg:grid-cols-2">
            <Card className="border-2 border-primary">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold">Full Integration</h3>
                <p className="mt-4 text-muted-foreground">Two-way sync and automation across your connected tools</p>
                <div className="mt-6 space-y-3">
                  {["Two-way data sync", "Automated workflows", "Real-time updates"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent">
              <CardContent className="p-8">
                <div className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-accent" />
                  <h3 className="text-xl font-bold">Render Only</h3>
                </div>
                <p className="mt-4 text-muted-foreground">Safe outputs with zero risk to source data</p>
                <div className="mt-6 space-y-3">
                  {["Read-only access", "Zero source modification", "Compliance-friendly"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-accent" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA - SSOT v2 */}
      <section className="bg-gradient-to-b from-background to-primary/5 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Start Free</h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Try AI Loader with your first data import. See structured output in seconds.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/pricing">
                  Start Free <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/demo">Book a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
