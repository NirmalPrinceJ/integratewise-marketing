import Link from "next/link"
import {
  ArrowRight,
  Sparkles,
  Loader2,
  LayoutTemplate,
  Bot,
  Database,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AiInsightsDemo from "@/components/ai-insights/ai-insights-demo"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        id="top"
        className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background to-muted/20"
      >
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
              <h1 className="mt-6 text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                The Automation Infrastructure for{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Modern Work</span>
              </h1>

              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
                IntegrateWise is the Universal AI OS: a shared Spine + persona-aware views + BYOM/BYOT, so work can move
                across tools without losing meaning.
              </p>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Start with <strong className="text-foreground">AI Insights</strong>, then expand into Loader, Templates,
                and Agents.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <Button size="lg" asChild data-cta="try_ai_insights_free" data-cta-location="home_hero">
                  <Link href="/ai-insights">
                    Try AI Insights Free <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/company/contact">Book a Demo</Link>
                </Button>
              </div>

              <p className="mt-6 text-sm text-muted-foreground">
                Persona-aware views. BYOM + BYOT. Render universal. Built to scale from individuals to teams.
              </p>
            </div>

            <div className="mx-auto w-full max-w-xl">
              <AiInsightsDemo variant="light" ctaLocation="home_hero_demo" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Your Tools Don’t Talk to Each Other</h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Silos. Copy-paste. Lost context. Every workflow becomes a manual bridge between systems.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-3">
            {[
              { title: "Silos", desc: "Context lives in different apps, tabs, and chats." },
              { title: "Copy-Paste", desc: "Work moves by exporting, importing, and reformatting." },
              { title: "Lost Context", desc: "Meaning breaks when data crosses tools." },
            ].map((c) => (
              <Card key={c.title} className="card-hover">
                <CardContent className="p-6">
                  <p className="text-sm font-semibold">{c.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="border-b border-border bg-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">One Spine. Infinite Possibilities.</h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              A single structural layer turns scattered tools into clean outputs—without losing meaning.
            </p>
          </div>

          {/* Diagram */}
          <div className="mx-auto mt-12 grid max-w-6xl items-center gap-6 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
            <div className="grid gap-3">
              {["Notion", "Slack", "Google Workspace", "HubSpot"].map((t) => (
                <div key={t} className="rounded-lg border border-border bg-background/60 px-4 py-3 text-sm font-medium">
                  {t}
                </div>
              ))}
            </div>
            <div className="hidden lg:block text-muted-foreground">→</div>
            <div className="rounded-2xl border border-border bg-[color-mix(in_srgb,var(--iw-pastel-green)_25%,var(--iw-white))] p-8 text-center">
              <p className="text-sm font-semibold text-muted-foreground">Spine</p>
              <p className="mt-2 text-2xl font-bold">Structure</p>
              <p className="mt-2 text-sm text-muted-foreground">Normalize meaning + relationships</p>
            </div>
            <div className="hidden lg:block text-muted-foreground">→</div>
            <div className="grid gap-3">
              {["Reports", "Plans", "Emails", "SOPs"].map((t) => (
                <div key={t} className="rounded-lg border border-border bg-background/60 px-4 py-3 text-sm font-medium">
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Four building blocks</h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Start small. Add capability as you scale.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Loader2,
                title: "AI Loader",
                desc: "BYOM + BYOT ingestion and normalization into the Spine.",
                href: "/products/ai-loader",
              },
              {
                icon: Sparkles,
                title: "AI Insights",
                desc: "Pattern recognition that reveals working style profile patterns.",
                href: "/ai-insights",
              },
              {
                icon: LayoutTemplate,
                title: "Templates",
                desc: "One-click deployment for repeatable workflows and outputs.",
                href: "/products/templates",
              },
              {
                icon: Bot,
                title: "AI Agents",
                desc: "Always-on agents with logs, boundaries, and governance.",
                href: "/products/agents",
              },
            ].map((f) => (
              <Card key={f.title} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <f.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                  <div className="mt-4">
                    <Button asChild size="sm" variant="outline" className="bg-transparent" data-cta="feature_learn_more" data-cta-location={`home_features_${f.title}`}>
                      <Link href={f.href}>Learn more</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Insights Hook */}
      <section id="ai-insights-hook" className="border-b border-border bg-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">AI Insights (free)</h2>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                Type a name. Get a profile pattern. Use it to align teams, communication, and execution.
              </p>
              <div className="mt-8">
                <Button asChild data-cta="discover_profile" data-cta-location="home_ai_insights_hook">
                  <Link href="/ai-insights">
                    Discover Your Profile <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <AiInsightsDemo variant="light" ctaLocation="home_ai_insights_hook_demo" />
          </div>
        </div>
      </section>

      {/* Integrations Logos */}
      <section id="integrations" className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Works with your stack</h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Grayscale by default. Color on hover.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {["Notion", "Slack", "Google Workspace", "HubSpot", "Salesforce", "Todoist", "Linear", "Jira", "Sheets"].map(
              (tool) => (
                <div
                  key={tool}
                  className="group flex items-center justify-center rounded-lg border border-border bg-card px-4 py-6 text-sm font-semibold text-muted-foreground transition-all hover:-translate-y-1 hover:shadow-md hover:text-foreground"
                >
                  <span className="grayscale transition-all group-hover:grayscale-0">{tool}</span>
                </div>
              ),
            )}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="bg-transparent" data-cta="explore_integrations" data-cta-location="home_integrations">
              <Link href="/integrations">Explore Integrations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="border-b border-border bg-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Trusted by modern operators</h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-3">
            {[
              {
                quote:
                  "We stopped rebuilding workflows in every tool. The Spine concept finally made our stack feel coherent.",
                who: "Founder",
              },
              {
                quote: "AI Insights gave us a shared language for working styles—useful immediately.",
                who: "Customer Success Lead",
              },
              {
                quote: "Templates turned setup into minutes, not weeks. The system scales without chaos.",
                who: "Ops Manager",
              },
            ].map((t) => (
              <Card key={t.who} className="card-hover">
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground">“{t.quote}”</p>
                  <p className="mt-4 text-sm font-semibold">{t.who}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section id="pricing-preview" className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Pricing that scales
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Start free. Upgrade when you want Loader, Templates, and deeper automation.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { plan: "Free", price: "₹0", desc: "AI Insights + basics" },
              { plan: "Starter", price: "₹999/mo", desc: "Individuals and small teams" },
              { plan: "Pro", price: "₹4,999/mo", desc: "Advanced workflows" },
              { plan: "Enterprise", price: "Custom", desc: "Agents + governance" },
            ].map((p) => (
              <Card key={p.plan} className="card-hover">
                <CardContent className="p-6">
                  <p className="text-sm font-semibold">{p.plan}</p>
                  <p className="mt-2 text-2xl font-bold">{p.price}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild data-cta="view_full_pricing" data-cta-location="home_pricing_preview">
              <Link href="/pricing">
                View Pricing <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="get-started" className="bg-gradient-to-b from-background to-primary/5 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Start Free Today
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Try AI Insights in seconds, then expand into Loader, Templates, and Agents when you’re ready.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild data-cta="start_free_today" data-cta-location="home_final_cta">
                <Link href="/ai-insights">
                  Try AI Insights Free <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/company/contact">Book Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
