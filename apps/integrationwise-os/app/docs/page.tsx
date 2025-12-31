import Link from "next/link"
import { ArrowRight, Book, Zap, Shield, Code, Workflow, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function DocsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="border-b border-border py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-5xl font-bold tracking-tight">Documentation</h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Everything you need to get started with IntegrateWise, from quick setup to advanced workflows.
            </p>
            <div className="mt-10">
              <Button size="lg" asChild>
                <Link href="/docs/quickstart">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "Quickstart",
                desc: "Get up and running in minutes with your first workflow",
                href: "/docs/quickstart",
              },
              {
                icon: Book,
                title: "Concepts",
                desc: "Understand the Spine, Hub, Agents, Render, and Views",
                href: "/docs/concepts",
              },
              {
                icon: Workflow,
                title: "Integrations",
                desc: "Connect Notion, Slack, CRMs, and 20+ tools",
                href: "/docs/integrations",
              },
              {
                icon: Shield,
                title: "Webhooks",
                desc: "Secure real-time events and AI chat ingestion",
                href: "/docs/webhooks",
              },
              {
                icon: FileText,
                title: "Templates",
                desc: "Install and create reusable workflow templates",
                href: "/docs/templates",
              },
              {
                icon: Code,
                title: "API Reference",
                desc: "Complete API documentation for developers",
                href: "/docs/api",
              },
            ].map((item) => (
              <Link key={item.title} href={item.href}>
                <Card className="h-full border-border transition-colors hover:border-primary">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mt-4 font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
