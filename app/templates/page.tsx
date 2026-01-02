import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Users, Briefcase, TrendingUp, Zap, Code } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Templates — Deploy Workflows in Seconds",
  description:
    "Install workflows that include structure, tasks, outputs, and automation-ready patterns—built to work across your connected tools.",
}

const categories = [
  { icon: User, title: "Productivity", desc: "Personal workflows and daily routines" },
  { icon: TrendingUp, title: "Customer Success", desc: "Health scores, churn alerts, renewals" },
  { icon: Briefcase, title: "Product Management", desc: "Roadmaps, sprints, feature tracking" },
  { icon: Zap, title: "Freelance", desc: "Client management, invoicing, projects" },
  { icon: Users, title: "Startup", desc: "Lean operations, investor updates" },
  { icon: Code, title: "Operations", desc: "SOPs, runbooks, team workflows" },
]

const templates = [
  {
    title: "Weekly Planning OS",
    description: "Turns notes + calendars into a plan",
    output: "Weekly plan + tasks + reminders",
    category: "Productivity",
  },
  {
    title: "Brainstorm → Action",
    description: "Pull ideas → structure → tasks → render docs",
    output: "Tasks + docs from AI conversations",
    category: "Productivity",
    featured: true,
  },
  {
    title: "CS Health Pulse",
    description: "Health score summary + churn flags + playbook suggestions",
    output: "Health dashboards + intervention plans",
    badge: "CS Lens",
    category: "Customer Success",
  },
  {
    title: "Meeting Notes → Tasks",
    description: "Transform meeting notes into structured action items",
    output: "Tasks assigned to owners with due dates",
    category: "Productivity",
  },
  {
    title: "Sprint Planning",
    description: "Organize backlog into sprint-ready tasks",
    output: "Sprint board + capacity planning",
    category: "Product Management",
  },
  {
    title: "Client Onboarding",
    description: "Structured onboarding checklist for new clients",
    output: "Onboarding timeline + task checklist",
    category: "Freelance",
  },
]

export default function TemplatesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero - SSOT v2 */}
      <section className="border-b border-border bg-gradient-to-b from-background to-muted/20 px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-balance mb-6">
            Templates that deploy workflows in seconds
          </h1>
          <p className="text-xl text-muted-foreground text-balance mb-8">
            Install workflows that include structure, tasks, outputs, and automation-ready patterns—built to work across
            your connected tools.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="#templates">Browse Templates</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/ai-insights">Start Free</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories - SSOT v2 */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Template Categories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card
                key={category.title}
                className="border-border hover:border-primary/50 transition-colors cursor-pointer group"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold">{category.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{category.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Template Deep Dive - SSOT v2 */}
      <section className="px-6 py-20 bg-muted/20 border-y border-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Featured Template</Badge>
            <h2 className="text-3xl font-bold">Brainstorm → Action</h2>
          </div>

          <Card className="border-2 border-primary">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">How it works</h3>
                  <div className="space-y-4">
                    {[
                      { step: 1, title: "Pull ideas", desc: "Capture AI conversations and brainstorming sessions" },
                      { step: 2, title: "Structure", desc: "AI Loader normalizes into Spine format" },
                      { step: 3, title: "Tasks", desc: "Actionable items are created with owners" },
                      { step: 4, title: "Render docs", desc: "Output summaries, plans, or reports" },
                    ].map((item) => (
                      <div key={item.step} className="flex gap-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                          {item.step}
                        </div>
                        <div>
                          <p className="font-medium">{item.title}</p>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">What you get</h3>
                  <ul className="space-y-3">
                    {[
                      "Structured task list from raw ideas",
                      "Summary documents ready to share",
                      "Linked context from conversations",
                      "Recurring workflow automation",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" asChild>
                    <Link href="/pricing">Deploy in Seconds</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Template Cards - SSOT v2 */}
      <section id="templates" className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">All Templates</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {templates.map((template) => (
              <Card
                key={template.title}
                className={`border-border hover:border-primary/50 transition-colors ${template.featured ? "border-2 border-primary" : ""}`}
              >
                <CardContent className="p-6">
                  {template.badge && (
                    <Badge variant="secondary" className="mb-4">
                      {template.badge}
                    </Badge>
                  )}
                  <p className="text-xs text-muted-foreground mb-2">{template.category}</p>
                  <h3 className="text-xl font-bold mb-2">{template.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{template.description}</p>
                  <div className="mb-6">
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

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Need a custom template?</p>
            <Button variant="outline" asChild>
              <Link href="/demo">Request a Custom Template</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How Templates Work - SSOT v2 */}
      <section className="px-6 py-20 bg-muted/20 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How templates work</h2>
          <div className="space-y-6">
            {[
              { step: 1, title: "Choose your template", desc: "Browse by category or search for specific workflows" },
              { step: 2, title: "Preview the workflow", desc: "See pipeline stages, KPIs, automations, and outputs" },
              { step: 3, title: "Deploy in seconds", desc: "Template integrates with your connected tools instantly" },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center shrink-0 font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-lg border border-border bg-card p-6 text-center">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Template Limits:</strong> Starter: up to 5 templates • Pro: unlimited
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
