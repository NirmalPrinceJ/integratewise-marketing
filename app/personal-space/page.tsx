import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import {
  ArrowRight,
  User,
  Heart,
  Sparkles,
  Eye,
  CheckCircle,
  Lock,
  Shield,
  Database,
  Briefcase,
  Rocket,
} from "lucide-react"

export const metadata = {
  title: "Personal Space — IntegrateWise",
  description: "Your entire life. One unified memory. Coming after public launch.",
  // No nav entry; no marketing CTAs; private-beta-only surface.
  robots: { index: false, follow: false },
}

const fragmentedMindPoints = [
  {
    title: "Scattered Context",
    description:
      "Your notes are in one app, your calendar in another, your bookmarks in a third, your conversations in a fourth. The story of your life lives nowhere whole.",
    icon: User,
  },
  {
    title: "Heavy Cognitive Load",
    description:
      "You don't forget because you're forgetful. You forget because you're carrying every system in your head and the system doesn't help.",
    icon: Heart,
  },
  {
    title: "Amnesic AI",
    description:
      "Every chatbot starts from zero. Every assistant forgets last week. Every tool needs context you've already given it.",
    icon: Sparkles,
  },
]

const personalCapabilities = [
  {
    name: "Unified Life View",
    description:
      "Email, calendar, notes, files, conversations, browsing — assembled into one Spine that's yours and only yours.",
    icon: Eye,
  },
  {
    name: "Proactive Intelligence",
    description:
      "Your Twin watches for patterns you'd miss: deadlines drifting, commitments stacking, ideas that recur. Surfaces them before they slip.",
    icon: Sparkles,
  },
  {
    name: "You Stay in Control",
    description:
      "Same Approval gate as the Workspace. Twin proposes; you decide. Nothing happens to your memory without you.",
    icon: CheckCircle,
  },
]

const audienceFits = [
  {
    name: "The Individual Professional",
    description:
      "Carry less in your head. Let the Spine remember your projects, your contacts, your commitments — and the Twin keep them moving.",
    icon: Briefcase,
  },
  {
    name: "The Freelancer or Solopreneur",
    description:
      "You are sales, ops, delivery, and finance. Personal Space gives each of those seats their own view over the same Spine.",
    icon: User,
  },
  {
    name: "The Founder",
    description:
      "Investor updates, hiring loops, board prep, customer threads — held in one memory, with a Twin that drafts the next move.",
    icon: Rocket,
  },
]

const privacyPillars = [
  {
    name: "Private by Default",
    description:
      "Personal Space lives in User Memory. Nothing crosses into Work or Org Memory unless you choose to share it.",
    icon: Lock,
  },
  {
    name: "Granular Control",
    description:
      "Approve every Twin action. Audit every Spine write. Revoke any source. Memory you can manage, not just hope is private.",
    icon: Shield,
  },
  {
    name: "You Own Your Data",
    description:
      "Same architectural promise as the enterprise product. Your data is yours. AI is rented. Approval in between.",
    icon: Database,
  },
]

export default function PersonalSpacePage() {
  return (
    <div className="min-h-screen bg-bg-main">
      <Header />
      <main className="pt-24">
        {/* Hero — waitlist banner */}
        <section className="py-24 hero-glow">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                <span className="text-gold text-xs font-medium tracking-wider uppercase">
                  Waitlist · Available after public launch
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
                Your entire life.
                <br />
                <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                  One unified memory.
                </span>
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Personal Space brings the Spine, Twin, and Approval gate to your personal life.
                Same architecture, different scope: everything in User Memory, private by default,
                yours alone.
              </p>
              <p className="text-text-dim text-sm">
                Personal Space ships after we&apos;ve served our first cohort of business
                customers. Want to be on the early list? Tell us at the demo.
              </p>
            </div>
          </div>
        </section>

        {/* The Fragmented Mind Problem */}
        <section className="py-24 bg-bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                The Fragmented Mind Problem
              </h2>
              <p className="text-text-secondary text-lg">
                The same fragmentation that breaks operators at work breaks people in their lives.
                Twenty apps, no memory.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {fragmentedMindPoints.map((point) => (
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

        {/* How It Works */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                How it works with Personal Space
              </h2>
              <p className="text-text-secondary text-lg">
                Same Spine. Same Twin. Same Approval gate. Different scope: everything is User
                Memory.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {personalCapabilities.map((cap) => (
                <div key={cap.name} className="glass-card rounded-xl p-6">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                    <cap.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">{cap.name}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{cap.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How the experience adapts to you */}
        <section className="py-24 bg-bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                How the experience adapts to you
              </h2>
              <p className="text-text-secondary text-lg">
                The architecture is the same. The Workspace adapts to who you are and what you do.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {audienceFits.map((fit) => (
                <div key={fit.name} className="glass-card rounded-xl p-6">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                    <fit.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">{fit.name}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{fit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy & Control */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                Your privacy. Your control.
              </h2>
              <p className="text-text-secondary text-lg">
                Personal Space is the highest-trust surface in the product. The same boundaries
                that govern enterprise data govern your personal memory.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {privacyPillars.map((pillar) => (
                <div key={pillar.name} className="glass-card rounded-xl p-6">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                    <pillar.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">{pillar.name}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Soft CTA — demo route, no waitlist form yet */}
        <section className="py-24 bg-bg-secondary/30">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Curious about Personal Space?
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              We&apos;re focused on shipping the business product first. If Personal Space is what
              you actually need, mention it at the demo and we&apos;ll add you to the early list.
            </p>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-bg-main px-8 py-4 rounded-lg text-lg font-semibold transition-all gold-glow"
            >
              Talk to us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
