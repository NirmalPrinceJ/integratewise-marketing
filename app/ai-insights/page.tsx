import Link from "next/link"
import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AiInsightsDemo from "@/components/ai-insights/ai-insights-demo"
import { AI_INSIGHTS_ARCHETYPES } from "@/lib/aiInsights"

export const metadata: Metadata = {
  title: "AI Insights",
  description: "Discover your working style in 10 seconds with AI-powered pattern recognition and profile matching.",
}

export default function AiInsightsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-border bg-[linear-gradient(180deg,var(--iw-dark-blue),color-mix(in_srgb,var(--iw-dark-blue)_92%,#000))] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center text-white">
            <p className="text-sm font-semibold text-white/70">AI Insights</p>
            <h1 className="mt-4 text-balance text-5xl font-bold tracking-tight sm:text-6xl">
              Discover Your Working Style in 10 Seconds
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-white/75 sm:text-xl">
              AI-powered pattern recognition that maps language to a clear, practical <strong>profile pattern</strong>.
            </p>

            <div className="mt-10">
              <AiInsightsDemo variant="dark" ctaLocation="ai_insights_hero" />
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button asChild variant="secondary" data-cta="join_waitlist" data-cta-location="ai_insights_hero">
                <Link href="#stay-tuned">Get Updates</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10"
                data-cta="view_pricing"
                data-cta-location="ai_insights_hero"
              >
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
            <p className="mt-6 text-xs text-white/60">
              AI Insights uses language pattern analysis and profile matching. It is not a predictive practice.
            </p>
          </div>
        </div>
      </section>

      {/* Type Gallery */}
      <section className="border-b border-border py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">9 archetypes</h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              A simple gallery that teams can understand quickly—without personality jargon.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {AI_INSIGHTS_ARCHETYPES.map((a) => (
              <Card key={a} className="card-hover">
                <CardContent className="p-6">
                  <p className="text-sm font-semibold text-muted-foreground">Archetype</p>
                  <p className="mt-2 text-xl font-bold">{a}</p>
                  <p className="mt-2 text-sm text-muted-foreground">Profile Pattern match for common working styles.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-b border-border bg-muted/20 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">How it works</h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-3">
            {[
              {
                title: "Language Pattern Analysis",
                desc: "We look for signals in the words people choose and how they frame problems.",
              },
              {
                title: "AI Profile Matching",
                desc: "Patterns are matched to a compact library of working-style archetypes.",
              },
              {
                title: "Personalized Insights",
                desc: "You get actionable suggestions for collaboration, communication, and execution.",
              },
            ].map((s) => (
              <Card key={s.title} className="card-hover">
                <CardContent className="p-6">
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="border-b border-border py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Use cases</h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-3">
            {[
              { title: "Team Formation", desc: "Balance archetypes to reduce friction and increase velocity." },
              { title: "Communication", desc: "Meet people where they are: concise vs. narrative, fast vs. deep." },
              { title: "Hiring & Onboarding", desc: "Set expectations and working agreements early." },
            ].map((s) => (
              <Card key={s.title} className="card-hover">
                <CardContent className="p-6">
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-b border-border bg-muted/20 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">What teams say</h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-3">
            {[
              {
                quote: "We used AI Insights to agree on a working cadence in 15 minutes. Less friction, more shipping.",
                who: "Product Lead",
              },
              {
                quote: "The profile pattern language is simple. It makes feedback and collaboration easier.",
                who: "Customer Success Manager",
              },
              {
                quote: "It helped us pair people intentionally—builders with explorers, thinkers with achievers.",
                who: "Operations Lead",
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

      {/* Stay tuned */}
      <section id="stay-tuned" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Stay tuned</h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Coming January 2026: Loader / OS / Templates. Q1: Agents.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">Join 10,000+ professionals getting updates.</p>

            <div className="mx-auto mt-8 max-w-xl">
              <Card>
                <CardContent className="p-6">
                  <form className="flex flex-col gap-3 sm:flex-row" action="#">
                    <input
                      className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      required
                    />
                    <Button type="submit" data-cta="email_capture" data-cta-location="ai_insights_stay_tuned">
                      Notify me
                    </Button>
                  </form>
                  <p className="mt-3 text-xs text-muted-foreground">
                    We’ll only send product updates. Unsubscribe anytime.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-10">
              <AiInsightsDemo variant="light" ctaLocation="ai_insights_footer" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

