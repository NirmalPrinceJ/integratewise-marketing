import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { 
  Building2, 
  ArrowRight,
  Code,
  Briefcase,
  Landmark,
  HeartPulse,
  Factory,
  GraduationCap
} from "lucide-react"

const industries = [
  {
    name: "SaaS",
    description: "Subscription management, product-led growth signals, expansion revenue tracking, and churn prediction.",
    icon: Code,
    useCases: ["Health score composition", "Renewal automation", "Expansion signals", "Usage analytics"],
  },
  {
    name: "Professional Services",
    description: "Project health tracking, resource utilization, client satisfaction, and scope management.",
    icon: Briefcase,
    useCases: ["Project signals", "Utilization tracking", "Client health", "Scope alerts"],
  },
  {
    name: "Financial Services",
    description: "Client portfolio health, compliance tracking, relationship management, and risk signals.",
    icon: Landmark,
    useCases: ["Portfolio health", "Compliance signals", "Relationship depth", "Risk detection"],
  },
  {
    name: "Healthcare",
    description: "Patient engagement, care coordination, provider relationships, and outcome tracking.",
    icon: HeartPulse,
    useCases: ["Engagement signals", "Care coordination", "Provider health", "Outcome tracking"],
  },
  {
    name: "Manufacturing",
    description: "Customer relationship management, order patterns, supply chain signals, and account health.",
    icon: Factory,
    useCases: ["Order patterns", "Supply chain signals", "Account health", "Relationship tracking"],
  },
  {
    name: "Education",
    description: "Student engagement, institutional relationships, enrollment signals, and retention tracking.",
    icon: GraduationCap,
    useCases: ["Engagement tracking", "Enrollment signals", "Retention patterns", "Relationship health"],
  },
]

export default function ByIndustryPage() {
  return (
    <div className="min-h-screen bg-bg-main">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-24 hero-glow">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-6">
                <Building2 className="w-4 h-4 text-gold" />
                <span className="text-gold text-sm font-medium">Vertical Solutions</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
                By Industry
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed">
                Pre-configured solutions with industry-specific signals, workflows, and integrations. Same architecture, tailored to your vertical.
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry) => (
                <div key={industry.name} className="glass-card rounded-xl p-6">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                    <industry.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">{industry.name}</h3>
                  <p className="text-text-secondary text-sm mb-4">{industry.description}</p>
                  <div className="space-y-2">
                    {industry.useCases.map((useCase) => (
                      <div key={useCase} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                        <span className="text-text-dim">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Same Architecture */}
        <section className="py-24 bg-bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-text-primary mb-6">Same Architecture, Your Industry</h2>
              <p className="text-text-secondary text-lg mb-8">
                Every vertical solution is built on the same Spine + Workspace + Twin + Approval + Loop architecture. 
                The difference is in the pre-configured signals, connectors, and workflows tailored to your industry.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-text-dim">
                <span className="glass-card px-4 py-2 rounded-full">Spine</span>
                <span className="text-gold">→</span>
                <span className="glass-card px-4 py-2 rounded-full">Workspace</span>
                <span className="text-gold">→</span>
                <span className="glass-card px-4 py-2 rounded-full">Twin</span>
                <span className="text-gold">→</span>
                <span className="glass-card px-4 py-2 rounded-full">Approval</span>
                <span className="text-gold">→</span>
                <span className="glass-card px-4 py-2 rounded-full">Loop</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-text-primary mb-6">
              See how IntegrateWise works for your industry
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
