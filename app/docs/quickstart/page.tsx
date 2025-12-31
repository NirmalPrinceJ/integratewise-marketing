import Link from "next/link"
import { Check, Loader, FileText, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function QuickstartPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Quickstart — Your First Effortless Workflow
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Get up and running with IntegrateWise in under 10 minutes.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold">What is IntegrateWise?</h2>
            <p className="text-muted-foreground">
              IntegrateWise is a universal productivity OS that sits on top of the tools you already use. It connects
              them through:
            </p>
            <ul className="space-y-2">
              <li>
                <strong>Spine</strong> (structure/normalization layer)
              </li>
              <li>
                <strong>Hub</strong> (secure routing + control layer)
              </li>
              <li>
                <strong>Agents</strong> (insights + automation)
              </li>
              <li>
                <strong>Render</strong> (universal outputs: docs, decks, emails, SOPs)
              </li>
            </ul>
            <p className="text-muted-foreground">
              IntegrateWise works for individuals, teams, and business ops. Specialized views (like Customer Success)
              are optional lenses.
            </p>

            <h2 className="mt-12 text-2xl font-bold">Create Your Account</h2>
            <div className="not-prose">
              <Card className="my-6 border-border">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                        1
                      </div>
                      <div>
                        <p className="font-medium">Book a demo to get started</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                        2
                      </div>
                      <div>
                        <p className="font-medium">Enter your name and onboarding details</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                        3
                      </div>
                      <div>
                        <p className="font-medium">Choose your focus:</p>
                        <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                          <li>Work</li>
                          <li>Personal</li>
                          <li>Business</li>
                          <li>Not to say</li>
                        </ul>
                        <p className="mt-2 text-sm text-muted-foreground">
                          This helps IntegrateWise personalize your starting templates and default views.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="mt-12 text-2xl font-bold">Connect Your Tools (Integrations)</h2>
            <p className="text-muted-foreground">
              Go to <strong>Settings → Integrations</strong> and connect at least one tool:
            </p>
            <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
              {[
                "Notion / Coda",
                "Slack",
                "Google Sheets",
                "Google Calendar",
                "Email (Gmail/Outlook)",
                "CRM (HubSpot/Salesforce)",
                "Billing (Stripe/Chargebee)",
              ].map((tool) => (
                <div key={tool} className="flex items-center gap-2 rounded-lg border border-border bg-card p-3">
                  <Check className="h-4 w-4 text-accent" />
                  <span className="text-sm">{tool}</span>
                </div>
              ))}
            </div>
            <Card className="my-6 border-2 border-secondary">
              <CardContent className="p-6">
                <p className="font-medium">IntegrateWise supports two modes:</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm">
                      <strong>Full Integration</strong> (two-way sync + automation)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span className="text-sm">
                      <strong>Render Only</strong> (read-only analytics and outputs; zero write risk)
                    </span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-muted-foreground">
                  ✅ If you're compliance-first, start with Render Only.
                </p>
              </CardContent>
            </Card>

            <h2 className="mt-12 text-2xl font-bold">Run Your First AI Loader Import</h2>
            <p className="text-muted-foreground">
              Go to <strong>Loader</strong> and paste any unstructured content:
            </p>
            <ul className="space-y-1 text-muted-foreground">
              <li>meeting notes</li>
              <li>project plan</li>
              <li>customer context</li>
              <li>idea dump</li>
              <li>spreadsheet headers</li>
            </ul>
            <p className="text-muted-foreground">
              Click <strong>Load</strong>.
            </p>
            <Card className="my-6 border-border bg-muted/30">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Loader className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">The AI Loader:</p>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>converts content into structured schema</li>
                      <li>preserves relationships/formulas where possible</li>
                      <li>prepares it for tasks, insights, and rendering</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="mt-12 text-2xl font-bold">Install Your First Template</h2>
            <p className="text-muted-foreground">
              Go to <strong>Templates → Browse</strong>
            </p>
            <p className="text-muted-foreground">Pick one:</p>
            <div className="not-prose my-6 space-y-3">
              {[
                "Weekly Planning OS",
                "Brainstorm → Action",
                "Project Kickoff OS",
                "Business Ops Summary",
                "CS Health Pulse (requires CS lens)",
              ].map((template) => (
                <div key={template} className="rounded-lg border border-border bg-card p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-primary" />
                      <span className="font-medium">{template}</span>
                    </div>
                    <Button size="sm" variant="outline">
                      Install
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground">
              Click <strong>Install Template</strong>.
            </p>
            <p className="mt-4 text-muted-foreground">Templates give you:</p>
            <ul className="space-y-1 text-muted-foreground">
              <li>ready workflows</li>
              <li>structured outputs</li>
              <li>repeatable processes</li>
            </ul>

            <h2 className="mt-12 text-2xl font-bold">Enable Brainstorming + Second Brain (Optional but powerful)</h2>
            <p className="text-muted-foreground">If you use AI chat tools:</p>
            <ul className="space-y-1 text-muted-foreground">
              <li>ChatGPT</li>
              <li>Claude</li>
              <li>Gemini</li>
              <li>Grok</li>
              <li>Perplexity</li>
            </ul>
            <p className="text-muted-foreground">
              Go to <strong>Brainstorming → Connect</strong>
            </p>
            <p className="text-muted-foreground">Enable secure webhooks to stream AI chats into your Second Brain.</p>
            <Card className="my-6 border-2 border-accent">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Brain className="mt-1 h-6 w-6 text-accent" />
                  <div>
                    <p className="font-medium">Now:</p>
                    <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                      <li>your AI thinking becomes searchable memory</li>
                      <li>you can retrieve past context instantly</li>
                      <li>Brain Agent can turn ideas into tasks + plans + docs</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="mt-12 text-2xl font-bold">Generate Your First Render Output</h2>
            <p className="text-muted-foreground">
              Go to <strong>Render</strong>
            </p>
            <p className="text-muted-foreground">Choose an output:</p>
            <ul className="space-y-1 text-muted-foreground">
              <li>doc</li>
              <li>deck</li>
              <li>email</li>
              <li>SOP</li>
              <li>implementation plan</li>
              <li>executive update</li>
            </ul>
            <p className="mt-4 text-muted-foreground">Select:</p>
            <ul className="space-y-1 text-muted-foreground">
              <li>a template</li>
              <li>a source context (Loader / Brain / Tasks / Insights)</li>
            </ul>
            <p className="text-muted-foreground">
              Click <strong>Render</strong>.
            </p>
            <Card className="my-6 border-border bg-muted/30">
              <CardContent className="p-6">
                <p className="text-sm font-medium">✅ Render works in both modes:</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>Full Integration</li>
                  <li>Render Only</li>
                </ul>
              </CardContent>
            </Card>

            <h2 className="mt-12 text-2xl font-bold">Next Steps (5 minutes to power-user)</h2>
            <div className="not-prose my-6 space-y-3">
              {[
                "Connect one more tool (Slack or Calendar)",
                "Turn one insight into a task",
                "Install a second template",
                "Enable Brain ingestion via webhooks",
                'Try a "Render Only executive dashboard"',
              ].map((step, idx) => (
                <div key={step} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-secondary-foreground">
                    {idx + 1}
                  </div>
                  <p className="text-muted-foreground">{step}</p>
                </div>
              ))}
            </div>

            <h2 className="mt-12 text-2xl font-bold">Troubleshooting</h2>
            <Card className="my-6 border-border">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">I connected a tool but nothing shows.</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      → Check your permissions scope + allowlist. Then trigger a sync.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">AI Loader output looks wrong.</p>
                    <p className="mt-1 text-sm text-muted-foreground">→ Try smaller inputs or use a template schema.</p>
                  </div>
                  <div>
                    <p className="font-medium">Webhooks aren't arriving.</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      → Verify webhook secret + signature + timestamps. See Webhooks Docs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="mt-12 text-2xl font-bold">Need help?</h2>
            <div className="not-prose my-6 flex flex-wrap gap-4">
              <Button variant="outline" asChild>
                <Link href="/docs/webhooks">Visit Webhooks Docs</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/company/contact">Contact Support</Link>
              </Button>
              <Button asChild>
                <Link href="/pricing">Book a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
