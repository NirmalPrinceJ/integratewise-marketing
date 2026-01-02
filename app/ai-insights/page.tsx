import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check, Sparkles, Brain, Users, Briefcase, Target, Zap, Heart, Search, Award, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "AI Insights — Discover Your Working Style in 10 Seconds",
  description:
    "AI-powered personality analysis using language pattern recognition. Reveal your profile pattern and get evolving insights for communication, teamwork, and productivity.",
  openGraph: {
    title: "AI Insights — Discover Your Working Style",
    description: "Reveal your profile pattern with AI-powered pattern recognition. Not astrology. Not guessing. Just AI-powered analysis.",
  },
}

const archetypes = [
  { icon: Target, title: "Leader", desc: "Decisive, visionary, action-oriented" },
  { icon: Users, title: "Diplomat", desc: "Harmonizing, empathetic, bridge-builder" },
  { icon: Zap, title: "Communicator", desc: "Expressive, influential, connector" },
  { icon: Briefcase, title: "Builder", desc: "Practical, reliable, systematic" },
  { icon: Search, title: "Explorer", desc: "Curious, adaptable, versatile" },
  { icon: Heart, title: "Nurturer", desc: "Supportive, caring, community-focused" },
  { icon: Brain, title: "Thinker", desc: "Analytical, introspective, deep" },
  { icon: Award, title: "Achiever", desc: "Ambitious, disciplined, results-driven" },
  { icon: Globe, title: "Humanitarian", desc: "Idealistic, progressive, service-oriented" },
]

export default function AIInsightsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Dark Hero - SSOT v2 */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-slate-900 to-slate-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6 rounded-full px-4 py-1">
              <Sparkles className="mr-2 h-4 w-4" />
              AI-Powered Pattern Recognition
            </Badge>

            <h1 className="text-balance text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Discover Your Working Style in{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                10 Seconds
              </span>
            </h1>

            <p className="mt-6 text-pretty text-lg leading-relaxed text-slate-300 sm:text-xl">
              AI Insights uses language pattern recognition to generate a{" "}
              <strong className="text-white">profile pattern</strong> and suggestions that evolve over time. Not
              astrology. Not guessing. Just AI-powered analysis.
            </p>

            <div className="mt-10">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
                <Link href="#demo">
                  Reveal My Profile <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Demo - SSOT v2 */}
      <section id="demo" className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md">
            <Card className="border-2 border-primary shadow-lg">
              <CardContent className="p-8">
                <div className="text-center">
                  <Sparkles className="mx-auto h-12 w-12 text-primary" />
                  <h2 className="mt-4 text-2xl font-bold">Reveal Your Profile</h2>
                  <p className="mt-2 text-muted-foreground">Enter your name to discover your working style</p>
                </div>

                <div className="mt-8 space-y-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium">
                      Your name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <Button className="w-full" size="lg">
                    Reveal My Profile
                  </Button>
                </div>

                <div className="mt-8 rounded-lg border border-border bg-muted/50 p-4">
                  <p className="text-center text-sm font-medium text-muted-foreground">
                    Generating your profile pattern...
                  </p>
                  <div className="mt-4 space-y-3">
                    <div className="h-4 w-full animate-pulse rounded bg-muted" />
                    <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
                    <div className="h-4 w-5/6 animate-pulse rounded bg-muted" />
                  </div>
                </div>

                <div className="mt-6 rounded-lg border-2 border-primary/20 bg-primary/5 p-4">
                  <p className="text-center text-sm font-semibold">Result Preview</p>
                  <p className="mt-2 text-center text-lg font-bold text-primary">Profile Pattern: [X]</p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-accent" /> Your decision-making style
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-accent" /> Your communication defaults
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-accent" /> Your focus + collaboration balance
                    </li>
                  </ul>
                </div>

                <Button variant="outline" className="mt-6 w-full">
                  Save My Profile
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Type Gallery - 9 Archetypes - SSOT v2 */}
      <section className="border-b border-border bg-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">9 Working Style Archetypes</h2>
            <p className="mt-4 text-muted-foreground">
              Discover which archetype best matches your natural working patterns
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {archetypes.map((archetype) => (
              <Card key={archetype.title} className="border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <archetype.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 font-bold">{archetype.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{archetype.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - SSOT v2 */}
      <section className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-balance text-center text-3xl font-bold tracking-tight sm:text-4xl">How It Works</h2>

            <div className="mt-12 space-y-8">
              {[
                { step: 1, title: "Language Pattern Analysis", desc: "We analyze the patterns in your name input" },
                { step: 2, title: "AI Profile Matching", desc: "Our AI matches patterns to working style archetypes" },
                {
                  step: 3,
                  title: "Personalized Insights (that evolve)",
                  desc: "Get suggestions that improve as you use the platform",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <span className="font-bold">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="mt-1 text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-lg border border-border bg-muted/50 p-6 text-center">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Note:</strong> AI Insights is a productivity model. It does not use
                astrology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases - SSOT v2 */}
      <section className="border-b border-border bg-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Use Cases</h2>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2">
            {[
              { title: "Team Formation", desc: "Build balanced teams based on complementary working styles" },
              {
                title: "Communication & Collaboration",
                desc: "Understand how team members prefer to communicate and work together",
              },
              { title: "Hiring & Onboarding", desc: "Match candidates to roles and help new hires integrate faster" },
              { title: "Personal Productivity Patterns", desc: "Discover your optimal work rhythms and environments" },
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

      {/* Testimonials - SSOT v2 */}
      <section className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-border">
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed">
                  "We used AI Insights to align how we communicate. It reduced misunderstandings immediately."
                </p>
                <div className="mt-6">
                  <p className="font-semibold">People Manager</p>
                  <p className="text-sm text-muted-foreground">Tech Company</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed">
                  "It's the fastest way to understand working styles without long assessments."
                </p>
                <div className="mt-6">
                  <p className="font-semibold">Founder</p>
                  <p className="text-sm text-muted-foreground">Startup</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stay Tuned Teaser - SSOT v2 */}
      <section className="border-b border-border bg-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">More coming soon</h2>

            <div className="mt-8 space-y-4 text-left">
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-medium">January 2026</p>
                <p className="text-sm text-muted-foreground">Loader / OS / Templates expansion</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-medium">Q1 2026</p>
                <p className="text-sm text-muted-foreground">AI Agents rollout</p>
              </div>
            </div>

            <div className="mt-8">
              <div className="mx-auto max-w-md">
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  />
                  <Button>Get updates</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - SSOT v2 */}
      <section className="bg-gradient-to-b from-background to-primary/5 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Join 10,000+ professionals discovering their working style
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Start with AI Insights for free. Build your OS from there.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="#demo">
                  Reveal My Profile <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
