import Link from "next/link"
import { ArrowRight, Check, Database, Sparkles, Brain, Shield, Zap, Layout, GitBranch, Lock } from "lucide-react"
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
              The Productivity OS for{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Effortless Work
              </span>
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              IntegrateWise sits on top of the tools you already use—Notion, Coda, Slack, email, calendars, CRMs,
              billing tools, and even AI apps like ChatGPT, Claude, Gemini, Grok, and Perplexity.
            </p>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              It connects everything through a shared structure (the Spine), routes it securely (the Hub), and uses AI
              agents to turn your work into action—without migrations or rebuilding your world.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="#">
                  Start Free <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#">Watch Demo</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Works with modern teams and individuals. Full integration or safe, read-only mode. BYOM supported.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">The Problem We All Face</h2>
            <p className="mt-6 text-pretty text-xl leading-relaxed text-muted-foreground">
              Modern work isn't hard because people aren't capable.
              <br />
              <strong className="text-foreground">It's hard because we're constantly fighting our tools.</strong>
            </p>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              Every day, we jump between Notion, Coda, Slack, email, CRMs, calendars, billing tools—and now a growing
              list of AI apps—just to move one piece of work forward.
            </p>
            <div className="mt-8 space-y-3">
              {[
                "Information lives in different apps, tabs, and chat histories",
                "Tasks fall between tools and never turn into a clear plan",
                "Great ideas from AI brainstorms disappear as soon as the chat ends",
                "Moving data breaks relationships, formulas, and logic",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-pretty leading-relaxed text-muted-foreground">
              So we copy. Paste. Export. Import. Again and again.
            </p>
            <p className="mt-4 text-pretty font-medium text-foreground">
              It's exhausting. It kills momentum. And it quietly slows down even the best teams.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="border-b border-border bg-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">What IntegrateWise Is</h2>
            <p className="mt-6 text-pretty text-xl leading-relaxed">
              <strong>IntegrateWise is the AI Agents Platform for Effortless Work.</strong>
            </p>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              IntegrateWise sits on top of your tools. It doesn't replace them.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">Instead, it:</p>
            <div className="mt-6 space-y-4">
              {[
                "Connects your existing tools securely",
                "Organizes data through a shared structural layer (the Spine)",
                "Routes and secures information through a control layer (the Hub)",
                "Adds AI agents for insights, automation, and brainstorming",
                "Lets you bring your own AI model (BYOM) when you're ready",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-pretty leading-relaxed text-muted-foreground">
              Think of IntegrateWise as the <strong className="text-foreground">connective tissue and brain</strong> for
              your digital work.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works - Visual Steps */}
      <section className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Connect once. Everything flows.
            </h2>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: GitBranch, title: "Connect Tools", desc: "Plug in the tools you already use." },
              {
                icon: Database,
                title: "Spine (Structure Layer)",
                desc: "Normalize and preserve meaning across systems.",
              },
              { icon: Shield, title: "Hub (Control Layer)", desc: "Secure routing + permissions + boundaries." },
              { icon: Zap, title: "AI Loader", desc: "One-click import that preserves context and logic." },
              { icon: Brain, title: "Brain + Brainstorming", desc: "Your thinking becomes searchable memory." },
              { icon: Sparkles, title: "Agents", desc: "Automate, plan, and act—without chaos." },
              { icon: Layout, title: "Render", desc: "Universal output: docs, decks, emails, SOPs, plans." },
              { icon: Layout, title: "Views (Lenses)", desc: "Personal, Work, Business, and CS views." },
            ].map((step) => (
              <Card key={step.title} className="border-border">
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="border-b border-border bg-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Connect what you already use</h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              No migrations. No rebuilding. You plug in the tools you rely on—once, securely.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              IntegrateWise handles the complexity in the background, so you don't have to restart your system every
              time your tool stack changes.
            </p>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
              {["Notion", "Coda", "Slack", "Google Workspace", "Salesforce", "HubSpot", "Stripe", "ChatGPT"].map(
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
            <div className="mt-12">
              <Button variant="outline" asChild>
                <Link href="#">Explore Integrations</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Second Brain Section */}
      <section className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Your Second Brain — Brainstorming Layer + Brain Agent
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Your ideas don't only live in docs. They live in conversations—especially AI conversations.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              IntegrateWise lets you stream AI chats from tools like ChatGPT, Claude, Gemini, Grok, and Perplexity into
              one place using secure webhooks.
            </p>
            <div className="mt-8 rounded-lg border border-border bg-card p-8">
              <h3 className="font-semibold">
                A Brainstorming Layer turns scattered chats into a searchable Second Brain.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">The Brain Agent helps you:</p>
              <div className="mt-4 space-y-3">
                {[
                  "Revisit and refine your thinking",
                  "Connect ideas across tools and time",
                  "Turn raw brainstorming into structured plans, tasks, and documents",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 font-medium">Your ideas stop disappearing—and start compounding.</p>
            </div>
            <div className="mt-8">
              <Button asChild>
                <Link href="#">Connect Brain</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Modes Section */}
      <section className="border-b border-border bg-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Full integration or Render Only — your choice
            </h2>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-2">
            <Card className="border-2 border-primary">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold">Full Integration</h3>
                <div className="mt-6 space-y-4">
                  {[
                    "Two-way sync and automation",
                    "Agents can create, update, and orchestrate work across tools",
                    "Best for teams that want real workflow automation",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-sm text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold">Render Only</h3>
                <div className="mt-6 space-y-4">
                  {[
                    "Read-only dashboards + analytics",
                    "Zero risk to source systems",
                    "Best for compliance-first orgs or safe executive reporting",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <p className="text-sm text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <p className="mt-8 text-center text-muted-foreground">
            Switch modes based on your role, team, or compliance needs.
          </p>
        </div>
      </section>

      {/* Security & BYOM Section */}
      <section className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Secure, seamless, and in your control
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              IntegrateWise runs on secure global cloud infrastructure with modern authentication and strict boundaries.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              In many cases, IntegrateWise acts as a secure router and normaliser—not a permanent data owner—so you stay
              in control of what's stored, synced, or read-only.
            </p>

            <Card className="mt-12 border-2 border-secondary">
              <CardContent className="p-8">
                <div className="flex items-center justify-center">
                  <Lock className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Bring Your Own AI Model (BYOM)</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Start with built-in models for a smooth experience. When you're ready, connect your own
                  model—commercial or self-hosted—using your API key.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="border-b border-border bg-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Built for anyone. Specialized when you need it.
            </h2>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "For Individuals", desc: "Personal productivity OS" },
              { title: "For Teams", desc: "Shared tasks, shared context" },
              { title: "For Business Ops", desc: "Workflows, analytics, automation" },
              {
                title: "For Customer Success",
                desc: "Specialized CS Intelligence lens (Health, ARR, Churn, Technical Health)",
              },
            ].map((solution) => (
              <Card key={solution.title} className="border-border">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold">{solution.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{solution.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <Link href="#">Explore Solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              This is what Effortless Work really looks like
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">With IntegrateWise:</p>
            <div className="mt-8 space-y-4">
              {[
                "You spend less time organizing and more time doing",
                "Your ideas don't vanish—they build on each other",
                "Your tools finally work together instead of against you",
                "Decisions get easier because context is always within reach",
              ].map((item) => (
                <div key={item} className="flex items-start justify-center gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <p className="text-left text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-b from-background to-primary/5 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to experience Effortless Work?
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Start with IntegrateWise. Work smarter from day one—and let your tools finally work together.
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
