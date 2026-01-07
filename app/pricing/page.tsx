import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Shield, ArrowRight, Sparkles, Zap, Star, HelpCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Pricing — Simple Pricing That Scales With Your OS",
  description:
    "Start free with AI Insights. Unlock Loader, Templates, Render, and Agents as you scale. Free, Starter, Pro, and Enterprise plans.",
}

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "/mo",
    description: "For individuals exploring their working style",
    highlight: false,
    cta: "Start Free",
    ctaHref: "/ai-insights",
    features: [
      "AI Insights (profile pattern)",
      "1 tool connection",
      "5-page OS shell",
      "Basic Render outputs",
      "Community support",
    ],
  },
  {
    name: "Starter",
    price: "₹999",
    period: "/mo",
    description: "For individuals who want structured workflows",
    highlight: false,
    cta: "Start Starter",
    ctaHref: "/ai-insights",
    features: [
      "Everything in Free, plus:",
      "AI Loader (BYOM + BYOT)",
      "Up to 5 tool connections",
      "Starter Template library",
      "Render outputs (docs, emails, tasks)",
      "Webhook ingestion",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: "₹4,999",
    period: "/mo",
    description: "For teams and power users",
    highlight: true,
    badge: "Most Popular",
    cta: "Start Pro",
    ctaHref: "/ai-insights",
    features: [
      "Everything in Starter, plus:",
      "Unlimited tool connections",
      "Unlimited templates",
      "Advanced Render (decks, SOPs, plans)",
      "Two-way sync (selected connectors)",
      "Governance controls",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For regulated orgs & complex stacks",
    highlight: false,
    cta: "Book Demo",
    ctaHref: "/demo",
    ctaVariant: "outline" as const,
    features: [
      "Everything in Pro, plus:",
      "AI Agents (full suite)",
      "DataSentinel governance",
      "Custom compliance controls",
      "SSO / SCIM / Enterprise IAM",
      "Private deployment options",
      "Dedicated support + SLAs",
      "Managed Ops packages",
    ],
  },
]

const faqs = [
  { q: "Can I switch modes?", a: "Yes — switch between Full Integration and Render Only anytime." },
  { q: "Do you replace my tools?", a: "No. IntegrateWise sits on top of your existing tools." },
  { q: "Is BYOM supported?", a: "Yes — connect your own AI model on Starter and above." },
  { q: "Do you store data?", a: "Only what you choose. Often IntegrateWise is a router + normalizer." },
  { q: "What's the difference between Loader and Agents?", a: "Loader is on-demand ingestion (Starter+). Agents are always-on automation (Enterprise)." },
  { q: "Can I try before I buy?", a: "Yes — AI Insights is free forever. Start there and upgrade when ready." },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero - MailerLite Style */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient-green" />
        <div className="absolute top-20 right-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-20 left-20 h-48 w-48 rounded-full bg-secondary/10 blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6">
              <Sparkles className="h-4 w-4" />
              Simple Pricing
            </Badge>
            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Pricing that <span className="gradient-text">scales with you</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground text-balance">
              Start free with AI Insights. Unlock Loader, Templates, Render, and Agents as you scale.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild className="shadow-xl shadow-primary/25">
                <Link href="/ai-insights">
                  Start Free <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/demo">Book Demo</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              No migrations. No lock-in. Full Integration or Render Only.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards - MailerLite Style */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-4">
            {plans.map((plan) => (
              <Card 
                key={plan.name} 
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                  plan.highlight 
                    ? "border-2 border-primary shadow-xl shadow-primary/10 scale-105 lg:scale-110 z-10" 
                    : "border-border/50 hover:border-primary/30"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-primary via-emerald-400 to-primary" />
                )}
                <CardContent className="p-8">
                  {plan.badge && (
                    <Badge variant="default" className="mb-4 shadow-lg">
                      <Star className="h-3 w-3 mr-1" />
                      {plan.badge}
                    </Badge>
                  )}
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                  
                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          feature.startsWith("Everything") ? "bg-muted" : "bg-primary/10"
                        }`}>
                          {feature.startsWith("Everything") ? (
                            <Zap className="h-3 w-3 text-muted-foreground" />
                          ) : (
                            <Check className="h-3 w-3 text-primary" />
                          )}
                        </div>
                        <span className={`text-sm ${feature.startsWith("Everything") ? "font-medium text-muted-foreground" : ""}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`mt-8 w-full ${plan.highlight ? "shadow-lg shadow-primary/25" : ""}`} 
                    variant={plan.ctaVariant || "default"}
                    size="lg"
                    asChild
                  >
                    <Link href={plan.ctaHref}>
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons - MailerLite Style */}
      <section className="py-20 bg-muted/20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Add-ons</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Specialized Lenses & Services</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-border/50 hover:border-primary/30 transition-all hover:shadow-lg">
              <CardContent className="p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 mb-4">
                  <Zap className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Customer Success Lens</h3>
                <p className="text-muted-foreground mb-4">
                  Specialized view with Health Scores, ARR, Churn Risk, and Technical Health
                </p>
                <p className="text-sm text-muted-foreground mb-6">Includes SuccessPilot / ChurnShield modules</p>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/solutions/customer-success">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-primary/30 transition-all hover:shadow-lg">
              <CardContent className="p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 mb-4">
                  <Sparkles className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Professional Services</h3>
                <p className="text-muted-foreground mb-6">
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

      {/* Render Only Mode - MailerLite Style */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-secondary/10 via-background to-primary/5 border border-border/50 p-10 shadow-xl">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
            <div className="relative text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 mb-6">
                <Shield className="h-8 w-8 text-secondary" />
              </div>
              <Badge variant="info" className="mb-4">Safe Mode</Badge>
              <h2 className="text-3xl font-bold mb-4">Render Only Mode</h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                Safe, read-only analytics and output with zero risk to source data. Read-only connectors, dashboards,
                insights, and reporting. Great for compliance-first orgs.
              </p>
              <p className="text-sm text-muted-foreground mb-8">Available on all plans. Upgrade to Full Integration anytime.</p>
              <Button size="lg" asChild className="shadow-lg shadow-secondary/20">
                <Link href="/ai-insights">
                  Start Render Only <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - MailerLite Style */}
      <section className="py-20 bg-muted/20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <HelpCircle className="h-4 w-4" />
              FAQ
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <Card key={idx} className="border-border/50 hover:border-primary/20 transition-all">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">
                      {idx + 1}
                    </div>
                    {faq.q}
                  </h3>
                  <p className="mt-3 text-muted-foreground pl-10">{faq.a}</p>
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
            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to simplify your workflows?
              </h2>
              <p className="mt-4 text-lg text-white/80">
                Start with AI Insights for free. Build your OS from there.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button size="xl" className="bg-white text-primary hover:bg-white/90 shadow-xl" asChild>
                  <Link href="/ai-insights">
                    Start Free Today <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="xl" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 bg-transparent" asChild>
                  <Link href="/demo">Talk to Sales</Link>
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
