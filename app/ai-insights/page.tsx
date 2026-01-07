import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check, Sparkles, Brain, Users, Briefcase, Target, Zap, Heart, Search, Award, Globe, Star, Play } from "lucide-react"
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
  { icon: Target, title: "Leader", desc: "Decisive, visionary, action-oriented", color: "from-rose-500 to-orange-500" },
  { icon: Users, title: "Diplomat", desc: "Harmonizing, empathetic, bridge-builder", color: "from-sky-500 to-blue-500" },
  { icon: Zap, title: "Communicator", desc: "Expressive, influential, connector", color: "from-amber-500 to-yellow-500" },
  { icon: Briefcase, title: "Builder", desc: "Practical, reliable, systematic", color: "from-emerald-500 to-green-500" },
  { icon: Search, title: "Explorer", desc: "Curious, adaptable, versatile", color: "from-violet-500 to-purple-500" },
  { icon: Heart, title: "Nurturer", desc: "Supportive, caring, community-focused", color: "from-pink-500 to-rose-500" },
  { icon: Brain, title: "Thinker", desc: "Analytical, introspective, deep", color: "from-indigo-500 to-blue-500" },
  { icon: Award, title: "Achiever", desc: "Ambitious, disciplined, results-driven", color: "from-primary to-emerald-400" },
  { icon: Globe, title: "Humanitarian", desc: "Idealistic, progressive, service-oriented", color: "from-teal-500 to-cyan-500" },
]

export default function AIInsightsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - MailerLite Style with Dark Theme */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-8 bg-primary/20 text-primary border-primary/30 px-4 py-2">
              <Sparkles className="mr-2 h-4 w-4" />
              AI-Powered • Free Forever
            </Badge>

            <h1 className="text-balance text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Discover your working style in{" "}
              <span className="bg-gradient-to-r from-primary via-emerald-400 to-primary bg-clip-text text-transparent">
                10 seconds
              </span>
            </h1>

            <p className="mt-8 text-pretty text-xl leading-relaxed text-slate-300">
              AI Insights uses language pattern recognition to generate a{" "}
              <strong className="text-white">profile pattern</strong> and suggestions that evolve over time. 
              Not astrology. Not guessing. Just AI-powered analysis.
            </p>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <Button size="xl" className="bg-white text-slate-900 hover:bg-slate-100 shadow-xl shadow-white/20" asChild>
                <Link href="#demo">
                  Reveal My Profile <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white/20 text-white hover:bg-white/10 bg-transparent" asChild>
                <Link href="#how-it-works">
                  <Play className="mr-2 h-4 w-4" />
                  See How It Works
                </Link>
              </Button>
            </div>

            <div className="mt-12 flex items-center justify-center gap-2 text-slate-400">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-8 w-8 rounded-full bg-slate-600 border-2 border-slate-800 flex items-center justify-center text-xs text-white">
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <span className="ml-3 text-sm">
                <strong className="text-white">10,000+</strong> professionals discovered their style
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Demo - MailerLite Style */}
      <section id="demo" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-6">
                <Sparkles className="h-4 w-4" />
                Try It Now
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Your profile pattern is waiting
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Enter your name and discover insights about your natural working style, communication preferences, 
                and collaboration patterns. Get personalized suggestions that help you work smarter.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Your default decision-making style",
                  "Your strongest communication mode",
                  "Your best environment for focus",
                  "Team collaboration preferences",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/20 via-secondary/10 to-primary/20 blur-2xl" />
              <Card className="relative border-2 border-primary/20 shadow-2xl rounded-3xl overflow-hidden">
                <CardContent className="p-8 sm:p-10">
                  <div className="text-center mb-8">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-emerald-400 shadow-lg shadow-primary/30">
                      <Sparkles className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="mt-6 text-2xl font-bold">Reveal Your Profile</h3>
                    <p className="mt-2 text-muted-foreground">Enter your name to discover your working style</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium">
                        Your name
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        className="mt-2 input-mailerlite"
                      />
                    </div>
                    <Button className="w-full shadow-lg shadow-primary/25" size="lg">
                      Reveal My Profile <Sparkles className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  <div className="mt-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 p-6">
                    <p className="text-center text-sm font-medium text-muted-foreground mb-4">
                      Result Preview
                    </p>
                    <div className="text-center">
                      <p className="text-2xl font-bold gradient-text">Profile Pattern: [X]</p>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="rounded-xl bg-background p-3">
                        <p className="font-semibold text-primary">Decision</p>
                        <p className="text-muted-foreground mt-1">Analytical</p>
                      </div>
                      <div className="rounded-xl bg-background p-3">
                        <p className="font-semibold text-secondary">Comms</p>
                        <p className="text-muted-foreground mt-1">Direct</p>
                      </div>
                      <div className="rounded-xl bg-background p-3">
                        <p className="font-semibold text-accent">Focus</p>
                        <p className="text-muted-foreground mt-1">Deep Work</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Type Gallery - MailerLite Style */}
      <section className="py-24 sm:py-32 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6">
              <Brain className="h-4 w-4" />
              9 Archetypes
            </Badge>
            <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              Working Style Archetypes
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover which archetype best matches your natural working patterns
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {archetypes.map((archetype) => (
              <Card key={archetype.title} className="group border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl overflow-hidden">
                <CardContent className="p-8">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${archetype.color} shadow-lg`}>
                    <archetype.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold">{archetype.title}</h3>
                  <p className="mt-2 text-muted-foreground">{archetype.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - MailerLite Style */}
      <section id="how-it-works" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6">
              <Zap className="h-4 w-4" />
              Process
            </Badge>
            <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">How It Works</h2>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="relative">
              {/* Connection line */}
              <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden sm:block" />
              
              <div className="space-y-12">
                {[
                  { 
                    step: 1, 
                    title: "Language Pattern Analysis", 
                    desc: "We analyze the patterns in your name input using advanced AI models",
                    icon: Search,
                    color: "from-primary to-emerald-400"
                  },
                  { 
                    step: 2, 
                    title: "AI Profile Matching", 
                    desc: "Our AI matches patterns to working style archetypes across 9 dimensions",
                    icon: Brain,
                    color: "from-secondary to-blue-400"
                  },
                  { 
                    step: 3, 
                    title: "Personalized Insights", 
                    desc: "Get suggestions that improve and evolve as you use the platform",
                    icon: Sparkles,
                    color: "from-accent to-rose-400"
                  },
                ].map((item) => (
                  <div key={item.step} className="relative flex gap-8 items-start">
                    <div className={`relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} shadow-lg`}>
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="pt-2">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-bold text-primary">Step {item.step}</span>
                      </div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="mt-2 text-muted-foreground max-w-md">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 rounded-2xl border border-border/50 bg-muted/30 p-6 text-center">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Important:</strong> AI Insights is a productivity model. 
                It does not use astrology or pseudoscience—just pattern recognition and AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases - MailerLite Style */}
      <section className="py-24 sm:py-32 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6">
              <Target className="h-4 w-4" />
              Use Cases
            </Badge>
            <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              Perfect for every team
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { 
                icon: Users, 
                title: "Team Formation", 
                desc: "Build balanced teams based on complementary working styles",
                color: "from-sky-500 to-blue-500"
              },
              {
                icon: Zap,
                title: "Communication", 
                desc: "Understand how team members prefer to communicate and collaborate",
                color: "from-amber-500 to-orange-500"
              },
              { 
                icon: Briefcase, 
                title: "Hiring & Onboarding", 
                desc: "Match candidates to roles and help new hires integrate faster",
                color: "from-emerald-500 to-green-500"
              },
              { 
                icon: Target, 
                title: "Personal Productivity", 
                desc: "Discover your optimal work rhythms and environments",
                color: "from-violet-500 to-purple-500"
              },
            ].map((useCase) => (
              <Card key={useCase.title} className="border-border/50 hover:border-primary/30 transition-all hover:shadow-xl">
                <CardContent className="p-8">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${useCase.color}`}>
                    <useCase.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="mt-6 font-bold text-lg">{useCase.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{useCase.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - MailerLite Style */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6">
              <Star className="h-4 w-4 text-amber-500" />
              Testimonials
            </Badge>
            <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              What people are saying
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {[
              {
                quote: "We used AI Insights to align how we communicate. It reduced misunderstandings immediately and helped us work better as a team.",
                author: "People Manager",
                company: "Tech Company",
              },
              {
                quote: "It's the fastest way to understand working styles without long assessments. My team loves it!",
                author: "Founder",
                company: "Startup",
              },
            ].map((testimonial, idx) => (
              <Card key={idx} className="border-border/50 hover:border-primary/20 transition-all hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="mt-6 pt-6 border-t border-border/50">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - MailerLite Style */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-emerald-500 p-12 sm:p-16 shadow-2xl shadow-primary/30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_50%)]" />
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
            
            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white/20 mb-8">
                <Sparkles className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Ready to discover your working style?
              </h2>
              <p className="mt-6 text-xl text-white/80">
                Join 10,000+ professionals who&apos;ve already found their profile pattern.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button size="xl" className="bg-white text-primary hover:bg-white/90 shadow-xl" asChild>
                  <Link href="#demo">
                    Reveal My Profile <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 bg-transparent" asChild>
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
