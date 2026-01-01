import Link from "next/link"
import { ArrowRight, FileText, Calendar, Brain, BarChart3, Zap, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function DocsTemplatesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Templates Documentation
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Install and create reusable workflow templates with explicit variables, triggers, and outputs.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold">What are Templates?</h2>
            <p className="text-muted-foreground">
              Templates are pre-configured workflows that automate common tasks across IntegrateWise. 
              Each template specifies variables, inputs, outputs, triggers, and error handling.
            </p>

            <h2 className="mt-12 text-2xl font-bold">Featured Templates</h2>

            <div className="not-prose my-8 space-y-6">
              {[
                {
                  icon: Calendar,
                  title: "Weekly Planning OS",
                  description: "Automate weekly planning with tasks, priorities, and calendar integration.",
                  inputs: ["Notion", "Google Calendar", "Slack"],
                  outputs: ["Notion Database Row", "Calendar Event"],
                  trigger: "Schedule (Monday 9 AM)",
                },
                {
                  icon: Brain,
                  title: "AI Brainstream → Action",
                  description: "Convert AI conversation streams into actionable tasks and notes.",
                  inputs: ["ChatGPT", "Claude", "Gemini"],
                  outputs: ["Task", "Note", "Notion Page"],
                  trigger: "Webhook Event",
                },
                {
                  icon: BarChart3,
                  title: "CS Health Pulse",
                  description: "Generate customer success health reports with playbook recommendations.",
                  inputs: ["HubSpot", "Stripe", "Zendesk"],
                  outputs: ["PDF Report", "Email Draft", "Notion Dashboard"],
                  trigger: "Schedule (Weekly)",
                  badge: "Requires CS Lens",
                },
                {
                  icon: FileText,
                  title: "Project Kickoff OS",
                  description: "Create structured project plans from unstructured inputs.",
                  inputs: ["Notion", "Slack", "Email"],
                  outputs: ["Plan", "Task List", "Timeline"],
                  trigger: "Manual",
                },
                {
                  icon: Zap,
                  title: "Business Ops Summary",
                  description: "Generate executive summaries from operational data.",
                  inputs: ["CRM", "Billing", "Analytics"],
                  outputs: ["Executive Report", "Slide Deck"],
                  trigger: "Schedule (Daily)",
                },
              ].map((template) => (
                <Card key={template.title} className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <template.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{template.title}</h3>
                          {template.badge && (
                            <Badge variant="secondary" className="mt-1 text-xs">
                              {template.badge}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">{template.description}</p>
                    <div className="mt-4 grid gap-4 sm:grid-cols-3">
                      <div>
                        <p className="text-xs font-semibold uppercase text-muted-foreground">Inputs</p>
                        <p className="text-sm">{template.inputs.join(", ")}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase text-muted-foreground">Outputs</p>
                        <p className="text-sm">{template.outputs.join(", ")}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase text-muted-foreground">Trigger</p>
                        <p className="text-sm">{template.trigger}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="mt-12 text-2xl font-bold">Template Structure</h2>
            <p className="text-muted-foreground">
              Every template follows a consistent structure:
            </p>

            <div className="not-prose my-6">
              <Card className="border-border bg-muted/30">
                <CardContent className="p-6">
                  <pre className="text-sm overflow-x-auto">
{`template:
  id: string
  name: string
  description: string
  version: string
  
  variables:
    - name: string
      type: string | number | boolean | array
      default: any
      required: boolean
  
  inputs:
    tools: string[]
    entities: string[]
    scopes: string[]
  
  outputs:
    type: notion | gmail | render | api
    target: string
    schema: object
  
  triggers:
    type: schedule | event | manual
    config: object
  
  error_handling:
    retry: boolean
    rollback: boolean
    dlq: boolean`}
                  </pre>
                </CardContent>
              </Card>
            </div>

            <h2 className="mt-12 text-2xl font-bold">Installation Process</h2>
            <div className="not-prose my-6">
              <Card className="border-border">
                <CardContent className="p-6">
                  <ol className="space-y-4">
                    {[
                      { step: "Select Template", desc: "Choose a template from the catalog" },
                      { step: "Configure Variables", desc: "Set required and optional variables" },
                      { step: "Connect Tools", desc: "Authorize required integrations" },
                      { step: "Set Triggers", desc: "Configure schedule or event triggers" },
                      { step: "Verify", desc: "Run a test execution" },
                      { step: "Activate", desc: "Enable the template" },
                    ].map((item, idx) => (
                      <li key={item.step} className="flex items-start gap-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                          {idx + 1}
                        </div>
                        <div>
                          <p className="font-semibold">{item.step}</p>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </div>

            <h2 className="mt-12 text-2xl font-bold">Error Handling</h2>
            <p className="text-muted-foreground">
              Templates include built-in error handling:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong>Retry</strong>: Exponential backoff (1s, 2s, 4s, 8s, 16s), max 3 attempts
              </li>
              <li>
                <strong>Rollback</strong>: Delete created entities on failure
              </li>
              <li>
                <strong>DLQ</strong>: Send failed executions to Dead Letter Queue
              </li>
            </ul>

            <h2 className="mt-12 text-2xl font-bold">Related Documentation</h2>
            <div className="not-prose my-6 flex flex-wrap gap-4">
              <Button variant="outline" asChild>
                <Link href="/docs/integrations">Integrations</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/docs/webhooks">Webhooks</Link>
              </Button>
              <Button asChild>
                <Link href="/templates">
                  Browse Templates <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
