import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Users, Briefcase, TrendingUp, Zap, Code, ArrowRight, Layout, Star, Check, Sparkles } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Templates — Deploy Workflows in Seconds",
  description:
    "Install workflows that include structure, tasks, outputs, and automation-ready patterns—built to work across your connected tools.",
}

const categories = [
  { icon: User, title: "Productivity", desc: "Personal workflows and daily routines", color: "from-primary to-emerald-400" },
  { icon: TrendingUp, title: "Customer Success", desc: "Health scores, churn alerts, renewals", color: "from-secondary to-blue-400" },
  { icon: Briefcase, title: "Product Management", desc: "Roadmaps, sprints, feature tracking", color: "from-violet-500 to-purple-500" },
  { icon: Zap, title: "Freelance", desc: "Client management, invoicing, projects", color: "from-amber-500 to-orange-500" },
  { icon: Users, title: "Startup", desc: "Lean operations, investor updates", color: "from-rose-500 to-pink-500" },
  { icon: Code, title: "Operations", desc: "SOPs, runbooks, team workflows", color: "from-cyan-500 to-teal-500" },
]

const templates = [
  {
    title: "Weekly Planning OS",
    description: "Turns notes + calendars into a plan",
    output: "Weekly plan + tasks + reminders",
    category: "Productivity",
    color: "from-primary to-emerald-400",
  },
  {
    title: "Brainstorm → Action",
    description: "Pull ideas → structure → tasks → render docs",
    output: "Tasks + docs from AI conversations",
    category: "Productivity",
    featured: true,
    color: "from-primary to-emerald-400",
  },
  {
    title: "CS Health Pulse",
    description: "Health score summary + churn flags + playbook suggestions",
    output: "Health dashboards + intervention plans",
    badge: "CS Lens",
    category: "Customer Success",
    color: "from-secondary to-blue-400",
  },
  {
    title: "Meeting Notes → Tasks",
    description: "Transform meeting notes into structured action items",
    output: "Tasks assigned to owners with due dates",
    category: "Productivity",
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Sprint Planning",
    description: "Organize backlog into sprint-ready tasks",
    output: "Sprint board + capacity planning",
    category: "Product Management",
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "Client Onboarding",
    description: "Structured onboarding checklist for new clients",
    output: "Onboarding timeline + task checklist",
    category: "Freelance",
    color: "from-rose-500 to-pink-500",
  },
]

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero - MailerLite Style */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient-green" />
        <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-10 left-20 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6">
              <Layout className="h-4 w-4" />
              One-Click Workflows
            </Badge>
            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">
              Deploy workflows in <span className="gradient-text">seconds</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground text-balance">
              Install workflows that include structure, tasks, outputs, and automation-ready patterns—built to work across
              your connected tools.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild className="shadow-xl shadow-primary/25">
                <Link href="#templates">
                  Browse Templates <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/ai-insights">Start Free</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories - MailerLite Style */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6">Categories</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Template Categories</h2>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Card key={category.title} className="group border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl cursor-pointer">
                <CardContent className="p-8">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${category.color} shadow-lg`}>
                    <category.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold">{category.title}</h3>
                  <p className="mt-2 text-muted-foreground">{category.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Template - MailerLite Style */}
      <section className="py-24 sm:py-32 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="default" className="mb-6">
              <Star className="h-4 w-4 text-amber-400" />
              Featured
            </Badge>
            <h2 className="text-3xl font-bold">Brainstorm → Action</h2>
            <p className="mt-4 text-muted-foreground">Our most popular template</p>
          </div>

          <Card className="max-w-4xl mx-auto border-2 border-primary/30 shadow-xl overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-primary via-emerald-400 to-primary" />
            <CardContent className="p-8 sm:p-10">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-xl font-bold mb-6">How it works</h3>
                  <div className="space-y-6">
                    {[
                      { step: 1, title: "Pull ideas", desc: "Capture AI conversations and brainstorming sessions" },
                      { step: 2, title: "Structure", desc: "AI Loader normalizes into Spine format" },
                      { step: 3, title: "Tasks", desc: "Actionable items are created with owners" },
                      { step: 4, title: "Render docs", desc: "Output summaries, plans, or reports" },
                    ].map((item) => (
                      <div key={item.step} className="flex gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-emerald-400 shadow-lg">
                          <span className="text-sm font-bold text-white">{item.step}</span>
                        </div>
                        <div>
                          <p className="font-semibold">{item.title}</p>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-muted/30 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-6">What you get</h3>
                  <ul className="space-y-4">
                    {[
                      "Structured task list from raw ideas",
                      "Summary documents ready to share",
                      "Linked context from conversations",
                      "Recurring workflow automation",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                          <Check className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-8 shadow-lg shadow-primary/20" size="lg" asChild>
                    <Link href="/pricing">
                      Deploy Template <Sparkles className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* All Templates - MailerLite Style */}
      <section id="templates" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6">Browse</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">All Templates</h2>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {templates.map((template) => (
              <Card 
                key={template.title}
                className={`group border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl overflow-hidden ${template.featured ? "ring-2 ring-primary/20" : ""}`}
              >
                {template.featured && (
                  <div className="bg-gradient-to-r from-primary to-emerald-400 text-white text-xs font-medium text-center py-1.5">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-8">
                  {template.badge && (
                    <Badge variant="secondary" className="mb-4">
                      {template.badge}
                    </Badge>
                  )}
                  <p className="text-xs text-muted-foreground mb-2">{template.category}</p>
                  <h3 className="text-xl font-bold mb-3">{template.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{template.description}</p>
                  <div className="rounded-xl bg-muted/50 p-4 mb-6">
                    <p className="text-xs text-muted-foreground mb-1">Output:</p>
                    <p className="text-sm font-medium">{template.output}</p>
                  </div>
                  <Button className="w-full" variant="outline" asChild>
                    <Link href="/pricing">Deploy Template</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">Need a custom template?</p>
            <Button variant="outline" size="lg" asChild>
              <Link href="/demo">Request Custom Template</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How Templates Work - MailerLite Style */}
      <section className="py-24 sm:py-32 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-6">Process</Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How templates work</h2>
            </div>
            
            <div className="space-y-8">
              {[
                { step: 1, title: "Choose your template", desc: "Browse by category or search for specific workflows", color: "from-primary to-emerald-400" },
                { step: 2, title: "Preview the workflow", desc: "See pipeline stages, KPIs, automations, and outputs", color: "from-secondary to-blue-400" },
                { step: 3, title: "Deploy in seconds", desc: "Template integrates with your connected tools instantly", color: "from-violet-500 to-purple-500" },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} shadow-lg`}>
                    <span className="text-lg font-bold text-white">{item.step}</span>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Card className="mt-12 border-border/50">
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Template Limits:</strong> Starter: up to 5 templates • Pro: unlimited
                </p>
              </CardContent>
            </Card>
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
                Ready to deploy your first template?
              </h2>
              <p className="mt-4 text-lg text-white/80">
                Start with AI Insights for free and unlock templates as you grow.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button size="xl" className="bg-white text-primary hover:bg-white/90 shadow-xl" asChild>
                  <Link href="/ai-insights">
                    Start Free <ArrowRight className="ml-2 h-4 w-4" />
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
