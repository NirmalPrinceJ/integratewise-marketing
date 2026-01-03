import Link from "next/link"
import { ArrowRight, Check, Shield, Zap, BarChart3, Users, FileText, Globe, Target, Gauge } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background to-muted/20">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Stop Working In Your Tools.{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Start Working On Top Of Them.
              </span>
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              IntegrateWise is a shared AI workspace that connects your tools, keeps work organized in one place, and
              helps teams act on what matters with AI insights and governed outputs.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/demo">
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/demo">Request Demo</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm font-medium text-muted-foreground">One workspace. All your tools. AI-powered.</p>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Connect. Organize. Understand. Act.
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              One AI workspace at the center. Many hubs as views on the same reality. AI reads across Slack, CRM,
              projects, analytics; organizes signals; drafts outputs you approve.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Connect your tools without replacing them",
                desc: "Major platforms across communication, CRM, projects, finance, analytics, storage, DevOps, HR, marketing, support",
              },
              {
                title: "Meaning survives movement",
                desc: "AI organizes messages, tickets, notes, analytics, and events into shared items that stay connected",
              },
              {
                title: "AI-drafted next steps",
                desc: "Use templates (BYOT) to render governed outputs—decks, emails, reports, SOPs, proposals, and plans",
              },
            ].map((item) => (
              <Card key={item.title} className="border-border">
                <CardContent className="p-6">
                  <Check className="h-8 w-8 text-primary" />
                  <h3 className="mt-4 font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Visual Steps */}
      <section className="border-b border-border bg-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">How It Works</h2>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "1",
                title: "Connect",
                desc: "Link Slack, HubSpot, Salesforce, Asana, Jira, Razorpay, Google Analytics, and more via prebuilt integrations.",
              },
              {
                step: "2",
                title: "Organize",
                desc: "AI reads messages, tickets, notes, analytics, and events. It structures them into shared items (accounts, conversations, tasks, deals).",
              },
              {
                step: "3",
                title: "Understand",
                desc: "AI surfaces insights like 'Aging deals worth $47K' or 'Campaign X drives 60% of new leads' with context and actions.",
              },
              {
                step: "4",
                title: "Act",
                desc: "Use templates (BYOT) to render governed outputs—decks, emails, reports, SOPs—with approvals and audit trails.",
              },
            ].map((item) => (
              <Card key={item.step} className="border-border relative">
                <CardContent className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold">
                    {item.step}
                  </div>
                  <h3 className="mt-4 font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Hubs - Sales First Order */}
      <section className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Specialized Hubs for Every Team
            </h2>
            <p className="mt-4 text-muted-foreground">
              Sales, Marketing, Operations, Technology, Customer Success, Content, Website—all in one workspace.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[
              {
                icon: BarChart3,
                title: "Sales Hub",
                desc: "Pipeline, stages, forecasts, win rate. See stuck deals, next actions, and close likelihood.",
                color: "text-blue-600",
              },
              {
                icon: Target,
                title: "Marketing Hub",
                desc: "Campaigns, content performance, funnel metrics. See what drives traffic, leads, and revenue.",
                color: "text-pink-600",
              },
              {
                icon: Zap,
                title: "Operations Hub",
                desc: "Tasks, projects, processes, incidents. Track risks, runbooks, and SLA health.",
                color: "text-orange-600",
              },
              {
                icon: Shield,
                title: "Technology Hub",
                desc: "Integration health, projects, code and monitoring signals. Spot technical risk and workload trends.",
                color: "text-purple-600",
              },
              {
                icon: Users,
                title: "Customer Success Hub",
                desc: "Accounts, renewals, health signals, milestones. Stay ahead of churn with proactive outreach.",
                color: "text-green-600",
              },
              {
                icon: FileText,
                title: "Content Hub",
                desc: "Articles, case studies, guides, tools, impact. Plan, publish, and track performance.",
                color: "text-cyan-600",
              },
              {
                icon: Globe,
                title: "Website Hub",
                desc: "Pages, visitors, conversions, forms, SEO. See what works and where to optimize.",
                color: "text-indigo-600",
              },
              {
                icon: Gauge,
                title: "Strategic Hub",
                desc: "Goals, KPIs, and focus aligned across teams. OKRs, KPI board, weekly focus insights.",
                color: "text-amber-600",
              },
            ].map((hub) => (
              <Card key={hub.title} className="border-border hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <hub.icon className={`h-8 w-8 ${hub.color}`} />
                  <h3 className="mt-4 font-semibold">{hub.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{hub.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Guarantees */}
      <section className="border-b border-border bg-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Platform Guarantees</h2>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Your tools, connected",
                desc: "Major platforms across communication, CRM, projects, finance, analytics, storage, DevOps, HR, marketing, support",
              },
              { title: "Your models, your templates", desc: "BYOM and BYOT without lock-in" },
              {
                title: "Fast and reliable",
                desc: "~1 second AI classification and structuring (typical), clear error handling and fallbacks",
              },
              { title: "Audited and governed", desc: "Approvals, helper attribution, output tracking" },
            ].map((item) => (
              <Card key={item.title} className="border-border">
                <CardContent className="p-6">
                  <Check className="h-6 w-6 text-accent" />
                  <h3 className="mt-4 font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rendering Modes */}
      <section className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Three Rendering Modes</h2>
            <p className="mt-4 text-muted-foreground">
              Choose how you work—from full dashboards to headless pipelines.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-3">
            <Card className="border-2 border-primary">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold">Workspace Mode</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Full-featured dashboard for individuals and small teams—hubs, assistant, tasks, knowledge.
                </p>
                <Button className="mt-6 w-full" asChild>
                  <Link href="/product">Explore Workspace</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold">Business Dashboard</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Multi-team view (Sales, Marketing, Operations, Technology, Customer Success, Finance, Content) with
                  real-time KPIs and automated reporting.
                </p>
                <Button className="mt-6 w-full bg-transparent" variant="outline" asChild>
                  <Link href="/product">Explore Dashboard</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold">Render-Only</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Headless pipeline to Notion, ClickUp, Airtable, Sheets, Linear, Todoist via API/webhooks. Zero risk to
                  source systems.
                </p>
                <Button className="mt-6 w-full bg-transparent" variant="outline" asChild>
                  <Link href="/product">Explore Render-Only</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-b from-background to-primary/5 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to stop working in your tools?
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Start working on top of them. One workspace. All your tools. AI-powered.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/demo">
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/demo">Request Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
