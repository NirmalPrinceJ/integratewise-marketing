import Link from "next/link"
import { ArrowRight, Heart, Shield, Sparkles, Target, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - MailerLite Style */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient-green" />
        <div className="absolute top-20 right-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-10 left-10 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6">
              <Heart className="h-4 w-4 text-rose-500" />
              Our Story
            </Badge>
            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">
              The Story of <span className="gradient-text">Effortless Work</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
              IntegrateWise was built from real tool pain: scattered context, broken workflows, 
              lost AI thinking, and constant copy-paste.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section - MailerLite Style */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-16">
            {[
              {
                title: "The problem we all face",
                content: "Modern teams use amazing tools—but they don't talk to each other. Context gets lost. AI conversations disappear. Data lives in silos. And every workflow requires manual copying, pasting, and reconciling.",
                icon: Target,
                color: "from-rose-500 to-orange-500"
              },
              {
                title: "The turning point",
                content: "A customer success manager was spending hours each day copying data between tools, manually updating health scores, and trying to remember which AI conversation had the key insight. That shouldn't be how work feels.",
                icon: Zap,
                color: "from-amber-500 to-yellow-500"
              },
              {
                title: "Why IntegrateWise exists",
                content: "We built IntegrateWise to be the missing layer—the productivity OS that connects your tools, preserves your thinking, and makes workflows feel effortless instead of exhausting.",
                icon: Sparkles,
                color: "from-primary to-emerald-400"
              },
              {
                title: "What we believe",
                content: "Tools should work together. AI thinking should compound. Work should feel calmer, clearer, and more connected—without forcing anyone to restart their system.",
                icon: Heart,
                color: "from-violet-500 to-purple-500"
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-8">
                <div className={`hidden sm:flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} shadow-lg`}>
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission - MailerLite Style */}
      <section className="py-24 sm:py-32 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="default" className="mb-6">
              <Target className="h-4 w-4" />
              Our Mission
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Make work feel <span className="gradient-text">calmer, clearer, and more connected</span>
            </h2>
            <p className="mt-6 text-xl text-muted-foreground">
              Without forcing anyone to restart their system.
            </p>
          </div>
        </div>
      </section>

      {/* Values - MailerLite Style */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6">Values</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What drives us</h2>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {[
              { title: "Effortless > Complex", desc: "Simplicity wins", icon: Sparkles, color: "from-primary to-emerald-400" },
              { title: "Control > Lock-in", desc: "You own your data and choices", icon: Shield, color: "from-secondary to-blue-400" },
              { title: "Structure > Chaos", desc: "Systems over scrambling", icon: Target, color: "from-violet-500 to-purple-500" },
              { title: "Trust > Hype", desc: "Honest, reliable, and secure", icon: Heart, color: "from-rose-500 to-pink-500" },
              { title: "Work that compounds", desc: "Every action builds value", icon: Zap, color: "from-amber-500 to-orange-500" },
              { title: "People first", desc: "Built for real humans", icon: Users, color: "from-cyan-500 to-teal-500" },
            ].map((item) => (
              <Card key={item.title} className="border-border/50 hover:border-primary/30 transition-all hover:shadow-xl">
                <CardContent className="p-8">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} shadow-lg mb-6`}>
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - MailerLite Style */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-emerald-500 p-12 sm:p-16 shadow-2xl shadow-primary/30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_50%)]" />
            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Join the movement toward Effortless Work
              </h2>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button size="xl" className="bg-white text-primary hover:bg-white/90 shadow-xl" asChild>
                  <Link href="/ai-insights">
                    Start Free <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 bg-transparent" asChild>
                  <Link href="/demo">Book Demo</Link>
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
