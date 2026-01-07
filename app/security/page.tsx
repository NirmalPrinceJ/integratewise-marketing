import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Eye, ArrowRight, Check, Key, Database, FileCheck, Zap, RefreshCw } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero - MailerLite Style */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient-green" />
        <div className="absolute top-20 right-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-10 left-10 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6">
              <Shield className="h-4 w-4" />
              Enterprise Security
            </Badge>
            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">
              Secure, seamless, and <span className="gradient-text">always in your control</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground text-balance">
              IntegrateWise is designed to act as a secure router and normalizer—not a permanent data owner unless you
              choose. Modern authentication, strict boundaries, and a platform built for safe automation.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild className="shadow-xl shadow-primary/25">
                <Link href="#details">
                  View Security Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/demo">Book Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles - MailerLite Style */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Shield, title: "Control", desc: "You decide what connects, what syncs, and what stays read-only.", color: "from-primary to-emerald-400" },
              { icon: Lock, title: "Boundaries", desc: "Strict permissions and routing ensure automation stays safe and scoped.", color: "from-secondary to-blue-400" },
              { icon: Eye, title: "Transparency", desc: "Audit trails, event logs, and policy enforcement designed for real ops.", color: "from-violet-500 to-purple-500" },
            ].map((principle) => (
              <Card key={principle.title} className="border-border/50 hover:border-primary/30 transition-all hover:shadow-xl text-center">
                <CardContent className="p-8">
                  <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${principle.color} shadow-lg mb-6`}>
                    <principle.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
                  <p className="text-muted-foreground">{principle.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Handling - MailerLite Style */}
      <section id="details" className="py-24 sm:py-32 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div>
              <Badge variant="secondary" className="mb-6">
                <Database className="h-4 w-4" />
                Data Handling
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight mb-6">Your data stays yours</h2>
              <p className="text-lg text-muted-foreground mb-6">
                IntegrateWise connects to your tools using secure auth and scoped permissions. 
                Depending on your configuration:
              </p>
              <div className="space-y-4">
                {[
                  "Act as a secure router (moving signals + metadata)",
                  "Act as a normalizer (building structured views)",
                  "Act as a read-only analyzer (Render Only mode)",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-muted-foreground">
                You control the boundaries between &ldquo;stored&rdquo;, &ldquo;synced&rdquo;, and &ldquo;read-only&rdquo;.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/10 blur-2xl" />
              <Card className="relative border-2 border-primary/20 shadow-xl">
                <CardContent className="p-8">
                  <Database className="h-20 w-20 text-primary/30 mx-auto mb-6" />
                  <p className="text-center text-xl font-bold gradient-text">Secure by Design</p>
                  <p className="text-center text-muted-foreground mt-2">Router • Normalizer • Analyzer</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Authentication - MailerLite Style */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div className="lg:order-2">
              <Badge variant="secondary" className="mb-6">
                <Key className="h-4 w-4" />
                Authentication
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight mb-6">Modern access controls</h2>
              <div className="space-y-4">
                {[
                  "OAuth / API keys (per tool)",
                  "Optional SSO (Business/Enterprise)",
                  "Role-based permissions",
                  "Workspace-level separation",
                  "Principle of least privilege",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary/10">
                      <Check className="h-4 w-4 text-secondary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:order-1">
              <Card className="border-border/50 shadow-xl">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {["OAuth", "SSO", "RBAC", "MFA"].map((item) => (
                      <div key={item} className="rounded-xl bg-secondary/5 p-4 text-center">
                        <p className="font-semibold text-secondary">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Webhooks - MailerLite Style */}
      <section className="py-24 sm:py-32 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <Badge variant="warning" className="mb-6">
                <Zap className="h-4 w-4" />
                Webhooks
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight mb-4">
                Secure webhooks with verification
              </h2>
              <p className="text-lg text-muted-foreground">
                Built-in protection against replay attacks and unauthorized access
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Signed requests (HMAC)",
                "Timestamp validation",
                "Idempotency keys",
                "Retry policies + DLQ",
                "Rate limiting",
                "Monitoring & alerting",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl bg-card border border-border/50 p-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100">
                    <Check className="h-4 w-4 text-amber-600" />
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DataSentinel - MailerLite Style */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div>
              <Badge variant="default" className="mb-6">
                <FileCheck className="h-4 w-4" />
                Enterprise
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight mb-6">
                DataSentinel: Policy, privacy & lineage
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                DataSentinel helps you maintain compliance and control across all data flows:
              </p>
              <div className="space-y-4">
                {[
                  "Detect and redact PII",
                  "Enforce policy rules",
                  "Track lineage across workflows",
                  "Keep audit trails for outputs and decisions",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Especially powerful for Render outputs, agent automation, and cross-tool data unification.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-emerald-400/10 blur-2xl" />
              <Card className="relative border-2 border-primary/20 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-emerald-400 shadow-lg mx-auto mb-6">
                    <Shield className="h-10 w-10 text-white" />
                  </div>
                  <p className="text-center text-2xl font-bold">DataSentinel</p>
                  <p className="text-center text-muted-foreground mt-2">Enterprise governance built in</p>
                  <div className="mt-6 grid grid-cols-2 gap-2">
                    {["GDPR", "SOC 2", "HIPAA", "ISO 27001"].map((cert) => (
                      <Badge key={cert} variant="outline" className="justify-center">{cert}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Modes - MailerLite Style */}
      <section className="py-24 sm:py-32 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6">Choose Your Mode</Badge>
            <h2 className="text-4xl font-bold tracking-tight">Full Integration or Render Only</h2>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
            <Card className="border-2 border-primary/30 hover:border-primary transition-all hover:shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <RefreshCw className="h-7 w-7 text-primary" />
                  </div>
                  <Badge variant="default">Full Power</Badge>
                </div>
                <h3 className="text-2xl font-bold mb-4">Full Integration</h3>
                <div className="space-y-3">
                  {["Two-way sync", "Automation", "Approvals & guardrails"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/30 hover:border-secondary transition-all hover:shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10">
                    <Lock className="h-7 w-7 text-secondary" />
                  </div>
                  <Badge variant="info">Safe Mode</Badge>
                </div>
                <h3 className="text-2xl font-bold mb-4">Render Only</h3>
                <div className="space-y-3">
                  {["Read-only dashboards", "Zero write access", "Compliance-first"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-secondary" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
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
                Want to see IntegrateWise in a regulated setup?
              </h2>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button size="xl" className="bg-white text-primary hover:bg-white/90 shadow-xl" asChild>
                  <Link href="/demo">
                    Book Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 bg-transparent" asChild>
                  <Link href="/company/contact">Talk to Security</Link>
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
