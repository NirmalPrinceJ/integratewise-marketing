import Link from "next/link"
import {
  ArrowRight,
  Check,
  Database,
  Sparkles,
  Brain,
  Shield,
  Zap,
  Layout,
  Lock,
  FileOutput,
  Webhook,
  User,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section - SSOT v2 */}
      <section
        id="top"
        className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background to-muted/20"
      >
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
              <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                <Badge variant="secondary" className="rounded-full px-3 py-1">
                  <Webhook className="h-3.5 w-3.5" />
                  BYOM + BYOT supported
                </Badge>
                <Badge variant="outline" className="rounded-full px-3 py-1">
                  Render Only mode
                </Badge>
                <Badge variant="outline" className="rounded-full px-3 py-1">
                  Built for individuals and teams
                </Badge>
              </div>

              <h1 className="mt-6 text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                The Automation Infrastructure for{" "}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Modern Work
                </span>
              </h1>

              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Your tools don't talk to each other. IntegrateWise connects them through one{" "}
                <strong className="text-foreground">Spine</strong> and powers persona-aware views, AI Loader, Templates,
                AI Agents, and universal Render—so work becomes effortless.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <Button size="lg" asChild>
                  <Link href="/ai-insights">
                    Try AI Insights Free <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/platform">View Platform</Link>
                </Button>
              </div>

              <p className="mt-6 text-sm text-muted-foreground">
                BYOM + BYOT supported • Render Only mode available • Built for individuals and teams
              </p>
            </div>

            <div className="mx-auto w-full max-w-xl">
              <Card className="border-border bg-gradient-to-b from-background to-muted/30">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-semibold">One Spine. Infinite Possibilities.</p>
                    <Badge variant="outline" className="rounded-full">
                      Preview
                    </Badge>
                  </div>

                  <div className="mt-6 space-y-4">
                    {[
                      { label: "Your Tools", sub: "Notion • Slack • Gmail • Sheets • Calendar • CRM • AI tools" },
                      { label: "Spine", sub: "Normalize meaning + preserve relationships", highlight: true },
                      { label: "AI Loader", sub: "Turn chaos into structured data (BYOM + BYOT)" },
                      { label: "Agents", sub: "Monitor, suggest, and act—safely governed" },
                      { label: "Render", sub: "Clean outputs: Tasks • Docs • Decks • Emails • SOPs • Plans" },
                    ].map((row, idx) => (
                      <div key={row.label} className="flex items-start gap-4">
                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${row.highlight ? "bg-chart-3/20 text-chart-3" : "bg-primary/10 text-primary"}`}
                        >
                          <span className="text-sm font-semibold">{idx + 1}</span>
                        </div>
                        <div className="min-w-0">
                          <p className={`truncate font-medium ${row.highlight ? "text-chart-3" : ""}`}>{row.label}</p>
                          <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{row.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-2">
                    <Badge variant="secondary" className="rounded-full">
                      <Lock className="h-3.5 w-3.5" /> Encrypted transport
                    </Badge>
                    <Badge variant="secondary" className="rounded-full">
                      <Shield className="h-3.5 w-3.5" /> Least privilege
                    </Badge>
                    <Badge variant="secondary" className="rounded-full">
                      <Sparkles className="h-3.5 w-3.5" /> BYOM supported
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground lg:justify-start">
                <span className="font-medium text-foreground">Works with:</span>
                {["Notion", "Slack", "Google Workspace", "HubSpot", "Salesforce", "Todoist", "Linear", "Jira"].map(
                  (tool) => (
                    <span key={tool} className="rounded-full border border-border bg-background/60 px-3 py-1">
                      {tool}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - SSOT v2 */}
      <section id="problem" className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Your Tools Don't Talk to Each Other
            </h2>
            <p className="mt-6 text-pretty text-xl leading-relaxed text-muted-foreground">
              Modern work breaks down when context gets trapped in apps. You jump between tabs just to move one piece of
              work forward.
            </p>
            <div className="mt-8 space-y-3">
              {[
                "Information lives in different apps and chat histories",
                "Tasks fall between tools and never become a clear plan",
                "AI brainstorming disappears after the chat ends",
                "Moving data breaks relationships and logic",
                "Copy-paste becomes the workflow",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-pretty font-medium text-foreground">
              The result is friction, lost momentum, and slower execution.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section - Spine Diagram - SSOT v2 */}
      <section id="solution" className="border-b border-border bg-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              One Spine. Infinite Possibilities.
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              IntegrateWise connects your tools through a shared structural layer—the{" "}
              <strong className="text-foreground">Spine</strong>. The Spine preserves meaning and normalizes data so
              everything becomes usable across views, workflows, and outputs.
            </p>
          </div>

          {/* Spine Diagram */}
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid items-center gap-4 lg:grid-cols-5">
              <div className="rounded-lg border border-border bg-card p-4 text-center lg:col-span-2">
                <p className="text-sm font-medium text-muted-foreground">Your Tools</p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Notion • Slack • Gmail • Sheets • Calendar • CRM • AI tools
                </p>
              </div>
              <div className="flex justify-center">
                <div className="rounded-lg border-2 border-chart-3 bg-chart-3/10 px-6 py-4 text-center">
                  <Database className="mx-auto h-8 w-8 text-chart-3" />
                  <p className="mt-2 font-bold text-chart-3">Spine</p>
                </div>
              </div>
              <div className="rounded-lg border border-border bg-card p-4 text-center lg:col-span-2">
                <p className="text-sm font-medium text-muted-foreground">Clean Outputs</p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Tasks • Dashboards • Docs • Decks • Emails • SOPs • Plans
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <Link href="/docs/architecture/how-it-works">Explore How It Works</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features - 4 Cards - SSOT v2 */}
      <section id="features" className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="border-2 border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                  <Zap className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="mt-4 font-bold">AI Loader (BYOM + BYOT)</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Turn chaos into structured data. Normalize into the Spine and push anywhere.
                </p>
                <Button variant="link" className="mt-4 h-auto p-0" asChild>
                  <Link href="/products/ai-loader">Learn AI Loader →</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <User className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 font-bold">AI Insights (pattern recognition)</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Discover your working style and get suggestions that evolve over time.
                </p>
                <Button variant="link" className="mt-4 h-auto p-0" asChild>
                  <Link href="/ai-insights">Try AI Insights →</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Layout className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-bold">Templates (One-Click)</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Install workflows instantly across tools. Deploy structured outputs in seconds.
                </p>
                <Button variant="link" className="mt-4 h-auto p-0" asChild>
                  <Link href="/templates">Browse Templates →</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-bold">AI Agents (Always On)</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Agents that monitor, suggest, and act—safely governed by policies and logs.
                </p>
                <Button variant="link" className="mt-4 h-auto p-0" asChild>
                  <Link href="/products/agents">Explore Agents →</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Insights Hook - Demo Card - SSOT v2 */}
      <section id="ai-insights" className="border-b border-border bg-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Discover Your Profile Pattern</h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              AI Insights uses language pattern analysis to reveal your working style and generate suggestions
              personalized to you.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-md">
            <Card className="border-2 border-primary">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Enter your name</label>
                    <div className="mt-2 rounded-lg border border-border bg-background px-4 py-3 text-muted-foreground">
                      Your name...
                    </div>
                  </div>
                  <Button className="w-full" size="lg" asChild>
                    <Link href="/ai-insights">Reveal My Profile</Link>
                  </Button>
                </div>

                <div className="mt-8 rounded-lg border border-border bg-muted/50 p-4">
                  <p className="text-xs font-medium text-muted-foreground">Preview insights:</p>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-accent" /> Your default decision style
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-accent" /> Your strongest communication mode
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-accent" /> Your best environment for focus
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Button size="lg" asChild>
              <Link href="/ai-insights">
                Discover Your Profile <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Integrations Logos - SSOT v2 */}
      <section id="integrations" className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Works with the tools you already use
            </h2>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
              {["Notion", "Slack", "Google Workspace", "HubSpot", "Salesforce", "Todoist", "Linear", "Jira", "Sheets"].map(
                (tool) => (
                  <div
                    key={tool}
                    className="flex h-16 w-32 items-center justify-center rounded-lg border border-border bg-card px-4"
                  >
                    <span className="text-sm font-medium text-muted-foreground">{tool}</span>
                  </div>
                ),
              )}
            </div>
            <p className="mt-8 text-muted-foreground">Connect in minutes. Full Integration or Render Only.</p>
            <div className="mt-8">
              <Button variant="outline" asChild>
                <Link href="/integrations">Explore Integrations</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - SSOT v2 */}
      <section id="testimonials" className="border-b border-border bg-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-border">
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed">
                  "IntegrateWise gave us structure across tools without forcing migration. It's the first platform that
                  feels like infrastructure, not another app."
                </p>
                <div className="mt-6">
                  <p className="font-semibold">Ops/Founder</p>
                  <p className="text-sm text-muted-foreground">Startup</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed">
                  "AI Insights helped us understand communication patterns across the team. The OS views made our work
                  feel calmer and more consistent."
                </p>
                <div className="mt-6">
                  <p className="font-semibold">CS Lead</p>
                  <p className="text-sm text-muted-foreground">SaaS Company</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed">
                  "We stopped rebuilding reports every week. Render Only mode gave us safe dashboards and outputs with
                  zero risk to our source tools."
                </p>
                <div className="mt-6">
                  <p className="font-semibold">Ops Manager</p>
                  <p className="text-sm text-muted-foreground">Enterprise</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Preview - SSOT v2 */}
      <section id="pricing" className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Simple pricing that scales with you
            </h2>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="border-border">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold">Free</h3>
                <p className="mt-2 text-sm text-muted-foreground">AI Insights, 1 connection, 5-page shell</p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold">Starter ₹999/mo</h3>
                <p className="mt-2 text-sm text-muted-foreground">Loader + Templates + more connections</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold">Pro ₹4,999/mo</h3>
                <p className="mt-2 text-sm text-muted-foreground">Unlimited templates, advanced render, governance</p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold">Enterprise</h3>
                <p className="mt-2 text-sm text-muted-foreground">Custom, agents, compliance, SLAs</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA - SSOT v2 */}
      <section id="get-started" className="bg-gradient-to-b from-background to-primary/5 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Start Free Today</h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Discover your working style with AI Insights and build your OS from there.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/ai-insights">
                  Try AI Insights Free <ArrowRight className="ml-2 h-4 w-4" />
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
