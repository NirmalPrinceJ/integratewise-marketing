import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Pricing — Simple Pricing That Scales With Your OS",
  description:
    "Start free with AI Insights. Unlock Loader, Templates, Render, and Agents as you scale. Free, Starter, Pro, and Enterprise plans.",
}

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero - SSOT v2 */}
      <section className="border-b border-border bg-gradient-to-b from-background to-muted/20 px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-balance mb-6">Pricing that scales with your OS</h1>
          <p className="text-xl text-muted-foreground text-balance mb-8">
            Start free with AI Insights. Unlock Loader, Templates, Render, and Agents as you scale.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <Button size="lg" asChild>
              <Link href="/ai-insights">Try AI Insights Free</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/demo">Book Demo</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">No migrations. No lock-in. Full Integration or Render Only.</p>
        </div>
      </section>

      {/* Pricing Cards - SSOT v2 */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Free */}
            <Card className="border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2">Free</h3>
                <p className="text-3xl font-bold mb-2">
                  ₹0<span className="text-base font-normal text-muted-foreground">/mo</span>
                </p>
                <p className="text-sm text-muted-foreground mb-6">For individuals exploring their working style</p>
                <ul className="space-y-3 mb-8">
                  {[
                    "AI Insights (profile pattern)",
                    "1 tool connection",
                    "5-page OS shell",
                    "Basic Render outputs",
                    "Community support",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/ai-insights">Start Free</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Starter */}
            <Card className="border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <p className="text-3xl font-bold mb-2">
                  ₹999<span className="text-base font-normal text-muted-foreground">/mo</span>
                </p>
                <p className="text-sm text-muted-foreground mb-6">For individuals who want structured workflows</p>
                <p className="text-xs text-muted-foreground mb-4">Everything in Free, plus:</p>
                <ul className="space-y-3 mb-8">
                  {[
                    "AI Loader (BYOM + BYOT)",
                    "Up to 5 tool connections",
                    "Starter Template library",
                    "Render outputs (docs, emails, tasks)",
                    "Webhook ingestion",
                    "Email support",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/ai-insights">Start Starter</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Pro */}
            <Card className="border-2 border-primary relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                Popular
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2">Pro</h3>
                <p className="text-3xl font-bold mb-2">
                  ₹4,999<span className="text-base font-normal text-muted-foreground">/mo</span>
                </p>
                <p className="text-sm text-muted-foreground mb-6">For teams and power users</p>
                <p className="text-xs text-muted-foreground mb-4">Everything in Starter, plus:</p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Unlimited tool connections",
                    "Unlimited templates",
                    "Advanced Render (decks, SOPs, plans)",
                    "Two-way sync (selected connectors)",
                    "Governance controls",
                    "Priority support",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/ai-insights">Start Pro</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise */}
            <Card className="border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <p className="text-3xl font-bold mb-2">Custom</p>
                <p className="text-sm text-muted-foreground mb-6">For regulated orgs & complex stacks</p>
                <p className="text-xs text-muted-foreground mb-4">Everything in Pro, plus:</p>
                <ul className="space-y-3 mb-8">
                  {[
                    "AI Agents (full suite)",
                    "DataSentinel governance",
                    "Custom compliance controls",
                    "SSO / SCIM / Enterprise IAM",
                    "Private deployment options",
                    "Dedicated support + SLAs",
                    "Managed Ops packages",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/demo">Book Enterprise Demo</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Add-ons - SSOT v2 */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Add-Ons & Specialized Lenses</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-2">Customer Success Lens</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Specialized view with Health Scores, ARR, Churn Risk, and Technical Health
                </p>
                <p className="text-sm text-muted-foreground mb-6">Includes SuccessPilot / ChurnShield modules</p>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/solutions/customer-success">Add CS Lens</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-2">Services</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Assessments, Implementations, Managed Ops, MuleSoft, Training
                </p>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/services">View Services</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Render Only Mode - SSOT v2 */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <Card className="border-2 border-accent bg-accent/5">
            <CardContent className="p-10 text-center">
              <Shield className="mx-auto h-12 w-12 text-accent" />
              <h2 className="mt-4 text-2xl font-bold">Render Only Mode</h2>
              <p className="mt-4 text-muted-foreground">
                Safe, read-only analytics and output with zero risk to source data. Read-only connectors, dashboards,
                insights, and reporting. Great for compliance-first orgs.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">Available on all plans. Upgrade to Full Integration anytime.</p>
              <Button className="mt-6" asChild>
                <Link href="/ai-insights">Start Render Only</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ - SSOT v2 */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing FAQ</h2>
          <div className="space-y-6">
            {[
              { q: "Can I switch modes?", a: "Yes — switch between Full Integration and Render Only anytime." },
              { q: "Do you replace my tools?", a: "No. IntegrateWise sits on top of your existing tools." },
              { q: "Is BYOM supported?", a: "Yes — connect your own AI model on Starter and above." },
              { q: "Do you store data?", a: "Only what you choose. Often IntegrateWise is a router + normalizer." },
              {
                q: "What's the difference between Loader and Agents?",
                a: "Loader is on-demand ingestion (Starter+). Agents are always-on automation (Enterprise).",
              },
              {
                q: "Can I try before I buy?",
                a: "Yes — AI Insights is free forever. Start there and upgrade when ready.",
              },
            ].map((faq) => (
              <div key={faq.q} className="border-b border-border pb-6">
                <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
