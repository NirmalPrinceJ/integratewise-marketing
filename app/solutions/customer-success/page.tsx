import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import {
  Users,
  ArrowRight,
  Heart,
  AlertCircle,
  TrendingDown,
  Eye,
  CheckCircle,
  GitBranch,
  Activity,
  Sparkles,
  Bell,
  ClipboardList,
} from "lucide-react"

const csGap = [
  {
    title: "Scattered Health Signals",
    description:
      "Health score in one tool, NPS in another, support tickets in a third, product usage in a fourth. The full picture lives nowhere.",
    icon: GitBranch,
  },
  {
    title: "Reactive Saves",
    description:
      "Churn risk surfaces in the QBR — three months too late. The signals were there 90 days earlier; nobody had time to assemble them.",
    icon: AlertCircle,
  },
  {
    title: "Hidden Adoption Risk",
    description:
      "A power user goes quiet. A core feature drops off. A champion leaves. Each signal is small. Together they predict churn.",
    icon: TrendingDown,
  },
]

const csCapabilities = [
  {
    name: "Unified Health View",
    description:
      "Every health signal across product, support, billing, and sentiment — assembled from the Spine, scored continuously.",
    icon: Heart,
  },
  {
    name: "Proactive Risk Detection",
    description:
      "The Twin watches for the early-warning patterns CSMs only notice in hindsight. Churn risk surfaces 60–90 days earlier.",
    icon: Eye,
  },
  {
    name: "Renewal Intelligence",
    description:
      "Renewal date, expansion potential, stakeholder map, recent friction — surfaced together when the renewal window opens.",
    icon: ClipboardList,
  },
  {
    name: "Adoption Signals",
    description:
      "Feature usage, login cadence, integration depth — tracked per account so coverage gaps surface before they become churn.",
    icon: Activity,
  },
  {
    name: "Approval Workflows",
    description:
      "Send the renewal email? Trigger the executive escalation? Twin drafts the action; you approve before it ships.",
    icon: CheckCircle,
  },
  {
    name: "Outcome Memory",
    description:
      "Every save, every loss, every renewal feeds back. The Twin learns what worked for accounts like this one.",
    icon: Sparkles,
  },
  {
    name: "Smart Alerts",
    description:
      "Severity-ranked, evidence-backed alerts routed to the right CSM. No firehose, no noise, no missed signals.",
    icon: Bell,
  },
  {
    name: "Stakeholder Continuity",
    description:
      "Champion changes, sponsor leaves, decision-maker rotates — context survives. The Spine remembers the relationship.",
    icon: Users,
  },
]

const provenImpact = [
  { value: "60–90", unit: "days", label: "Earlier churn detection" },
  { value: "12%", unit: "", label: "NRR uplift" },
  { value: "14", unit: "hrs/wk", label: "Saved per CSM" },
]

export default function CustomerSuccessPage() {
  return (
    <div className="min-h-screen bg-bg-main">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-24 hero-glow">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-8">
                <Users className="w-4 h-4 text-gold" />
                <span className="text-gold text-xs font-medium tracking-wider uppercase">
                  Customer Success
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
                Every customer.
                <br />
                <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                  One health view. Real-time.
                </span>
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Customer Success over the Spine. Health signals, adoption data, renewal context,
                and stakeholder graphs unified into a single view — with the Twin proposing the
                next action and you approving it.
              </p>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-bg-main px-8 py-4 rounded-lg text-lg font-semibold transition-all gold-glow"
              >
                Book a Demo <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* The CS Context Gap */}
        <section className="py-24 bg-bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                The CS Context Gap
              </h2>
              <p className="text-text-secondary text-lg">
                CSMs are forced to manually assemble customer context from five tools. By the time
                the picture is complete, the moment to act has passed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {csGap.map((point) => (
                <div key={point.title} className="glass-card rounded-xl p-6">
                  <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                    <point.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">{point.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Unified CS Intelligence */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                Unified Customer Intelligence
              </h2>
              <p className="text-text-secondary text-lg">
                Eight capabilities, one Spine. Every health signal lands here, every action passes
                through Approval, every outcome compounds into Outcome Memory.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {csCapabilities.map((cap) => (
                <div key={cap.name} className="glass-card rounded-xl p-6">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                    <cap.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-base font-semibold text-text-primary mb-2">{cap.name}</h3>
                  <p className="text-text-secondary text-xs leading-relaxed">{cap.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proven Impact */}
        <section className="py-24 bg-bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                Proven Impact
              </h2>
              <p className="text-text-secondary text-lg">
                What CS teams report after rolling IntegrateWise into their stack.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {provenImpact.map((metric) => (
                <div key={metric.label} className="glass-card rounded-xl p-8 text-center">
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-5xl font-bold text-gold">{metric.value}</span>
                    {metric.unit && (
                      <span className="text-xl text-text-secondary">{metric.unit}</span>
                    )}
                  </div>
                  <div className="text-text-secondary">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Stop reacting. Start renewing.
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              See Customer Success over the Spine on your real accounts in a 30-minute demo.
            </p>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-bg-main px-8 py-4 rounded-lg text-lg font-semibold transition-all gold-glow"
            >
              Book a Demo <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
