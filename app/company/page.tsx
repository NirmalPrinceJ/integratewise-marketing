import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import {
  ArrowRight,
  Database,
  CheckCircle,
  RotateCcw,
  Mail,
  Phone,
  MapPin,
  AlertTriangle,
  Search,
  User,
  ShieldCheck,
} from "lucide-react"

const principles = [
  {
    name: "Truth Boundary",
    description:
      "The Spine is the single source of truth. All data passes through the 8-stage pipeline before becoming canonical. No shortcuts, no exceptions.",
    icon: Database,
  },
  {
    name: "Approval Boundary",
    description:
      "Every action that modifies the Spine requires human approval. The Twin proposes, you decide. This is non-negotiable.",
    icon: CheckCircle,
  },
  {
    name: "Customer Zero",
    description:
      "We run IntegrateWise on ourselves first. Every feature ships through our own Workspace, our own Twin, and our own Approval gate before it reaches you.",
    icon: ShieldCheck,
  },
  {
    name: "Continuity",
    description:
      "Models change. Memory does not. The Spine outlives any single model, vendor, or org chart. That's the only durable promise.",
    icon: RotateCcw,
  },
]

const crisisChapters = [
  {
    title: "The Silent Escalation",
    description:
      "An $8M enterprise account, inherited with zero handover. Seven disconnected systems. The signals were already there — buried in CRM notes, support tickets, billing logs, and Slack threads no one had reconciled.",
    icon: AlertTriangle,
  },
  {
    title: "Scattered Signals",
    description:
      "An unsigned contract in DocuSign. A buried stakeholder conflict in email. A churn-risk pattern across three quarters of usage data. Each system held one piece. No system held the truth.",
    icon: Search,
  },
  {
    title: "The Human API",
    description:
      "Days spent manually cross-referencing data, reconstructing context the systems should have surfaced. Becoming the integration layer the tools refused to be.",
    icon: User,
  },
  {
    title: "The System Was Broken",
    description:
      "The renewal closed. The relationship was saved. But the lesson was bigger than one account: every CSM, every operator, every founder was being forced into the same role. IntegrateWise was born to end that.",
    icon: CheckCircle,
  },
]

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-bg-main">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-24 hero-glow" id="story">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-8">
                <span className="text-gold text-xs font-medium tracking-wider uppercase">
                  Our Story
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
                We&apos;re ending the{" "}
                <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                  human API
                </span>{" "}
                era.
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed">
                IntegrateWise was built so nobody ever has to manually reconstruct context again.
                Modern work didn&apos;t break because people weren&apos;t capable. It broke because
                we spent every day fighting our own tools.
              </p>
            </div>
          </div>
        </section>

        {/* The $8M Crisis */}
        <section className="py-24 bg-bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-gold text-sm font-semibold tracking-wider uppercase">
                  $8M+ Protected
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                The $8M Crisis That Started It All
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                IntegrateWise didn&apos;t come from a market study. It came from a single account
                that should have churned — and the systemic failure that almost let it.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {crisisChapters.map((chapter) => (
                <div key={chapter.title} className="glass-card rounded-xl p-8">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                    <chapter.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    {chapter.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">{chapter.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Stand For — Principles */}
        <section className="py-24" id="principles">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                What We Stand For
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                Four boundaries that don&apos;t move. Every product decision is tested against
                them.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {principles.map((principle) => (
                <div key={principle.name} className="glass-card rounded-xl p-8">
                  <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center mb-5">
                    <principle.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    {principle.name}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Built by Operators */}
        <section className="py-24 bg-bg-secondary/30">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Built by Operators, For Operators
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
              IntegrateWise is built by people who lived the problem. Thirteen years of integration
              architecture. Years inside the largest CSM org in the world. The team you&apos;d hire
              if you were going to fix this yourself — except you don&apos;t have to.
            </p>
            <p className="text-text-primary text-xl font-medium italic">
              Truth you own. AI you rent. Approval in between.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="py-24" id="contact">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                Get in Touch
              </h2>
              <p className="text-text-secondary text-lg">
                Private beta. Limited spots. The fastest way in is a demo — but if you want to talk
                first, we&apos;re here.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href="mailto:connect@integratewise.co"
                className="glass-card rounded-xl p-6 hover:border-gold/30 transition-all block"
              >
                <Mail className="w-6 h-6 text-gold mb-3" />
                <div className="text-text-primary font-semibold mb-1">Email</div>
                <div className="text-text-secondary text-sm">connect@integratewise.co</div>
              </a>
              <a
                href="tel:+917026317111"
                className="glass-card rounded-xl p-6 hover:border-gold/30 transition-all block"
              >
                <Phone className="w-6 h-6 text-gold mb-3" />
                <div className="text-text-primary font-semibold mb-1">Phone</div>
                <div className="text-text-secondary text-sm">+91 70263 17111</div>
              </a>
              <div className="glass-card rounded-xl p-6">
                <MapPin className="w-6 h-6 text-gold mb-3" />
                <div className="text-text-primary font-semibold mb-1">Headquarters</div>
                <div className="text-text-secondary text-sm">Bengaluru, India</div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-bg-secondary/30">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Ready to build your Digital Memory?
            </h2>
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
