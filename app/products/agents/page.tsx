import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check, Brain, Shield, FileText, Mail, Bell, TrendingDown, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "AI Agents — Enterprise-Grade Automation with Governance",
  description:
    "Agents that work continuously across your tools—safely governed through policies, approvals, and audit logs.",
}

const agents = [
  {
    icon: Brain,
    name: "TaskPilot",
    desc: "Automatically creates, prioritizes, and follows up on tasks across your connected tools",
  },
  {
    icon: TrendingDown,
    name: "ChurnShield",
    desc: "Monitors customer health signals and triggers intervention workflows before churn",
  },
  {
    icon: Database,
    name: "DataSentinel",
    desc: "Governs data flow, enforces policies, and maintains audit trails across integrations",
  },
  {
    icon: Mail,
    name: "InboxZero",
    desc: "Triages, categorizes, and drafts responses to keep your inbox under control",
  },
  {
    icon: Bell,
    name: "FollowUp",
    desc: "Never miss a follow-up—automatically tracks commitments and sends reminders",
  },
]

export default function AgentsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero - SSOT v2 */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background to-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6 rounded-full px-4 py-1">
              <Shield className="mr-2 h-4 w-4" />
              Enterprise-Grade Governance
            </Badge>

            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              AI Agents with{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Logs and Governance
              </span>
            </h1>

            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Agents that work continuously across your tools—safely governed through policies, approvals, and audit
              logs.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/demo">
                  Explore Agents <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/docs">View Documentation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Agents Grid - SSOT v2 */}
      <section className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Available Agents</h2>
            <p className="mt-4 text-muted-foreground">
              Each agent is purpose-built for specific workflows and fully governed
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {agents.map((agent) => (
              <Card key={agent.name} className="border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <agent.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 font-bold">{agent.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{agent.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Governance - SSOT v2 */}
      <section className="border-b border-border bg-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Enterprise-Grade Governance
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Every agent action is logged, governed by policies, and respects permission boundaries. Full visibility
                and control for your security and compliance teams.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Logs & audit trails for every action",
                  "Permissions-bound execution",
                  "Route policies through Hub",
                  "Approval workflows for sensitive operations",
                  "Real-time monitoring dashboards",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="border-2 border-primary">
              <CardContent className="p-8">
                <Shield className="h-12 w-12 text-primary" />
                <h3 className="mt-6 text-xl font-bold">Hub Policy Engine</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  All agent actions route through the Hub policy engine. Define what agents can do, when they can do it,
                  and who needs to approve.
                </p>

                <div className="mt-6 rounded-lg border border-border bg-muted/50 p-4">
                  <p className="text-sm font-medium">Example Policy:</p>
                  <pre className="mt-2 text-xs text-muted-foreground">
                    {`agent: ChurnShield
action: create_intervention
requires_approval: manager
log_level: full`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Agent Capabilities - SSOT v2 */}
      <section className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">What Agents Can Do</h2>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2">
            {[
              { icon: FileText, title: "Create & Update", desc: "Generate documents, tasks, and records across tools" },
              { icon: Bell, title: "Monitor & Alert", desc: "Watch for signals and trigger notifications" },
              { icon: Mail, title: "Draft & Respond", desc: "Compose emails, messages, and responses" },
              { icon: Brain, title: "Analyze & Suggest", desc: "Surface insights and recommend actions" },
            ].map((capability) => (
              <Card key={capability.title} className="border-border">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <capability.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">{capability.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{capability.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="mt-12 text-center text-muted-foreground">
            Agents run through Hub boundaries, permissions, and policies—so automation stays controlled.
          </p>
        </div>
      </section>

      {/* CTA - SSOT v2 */}
      <section className="bg-gradient-to-b from-background to-primary/5 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Book a Demo</h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              See how AI Agents can automate your workflows with enterprise-grade governance.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/demo">
                  Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Agents are available on Enterprise plans. Contact us for custom requirements.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
