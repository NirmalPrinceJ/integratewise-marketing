import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-balance mb-6">
            Pricing that scales from personal productivity to enterprise operations
          </h1>
          <p className="text-xl text-gray-600 text-balance mb-8">
            Start simple. Connect your tools. Upgrade when you want deeper integrations, advanced agents, and
            specialized lenses like Customer Success.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <Button size="lg" variant="outline" asChild>
              <Link href="/demo">Watch Demo</Link>
            </Button>
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700" asChild>
              <Link href="/demo#book">Book Demo</Link>
            </Button>
          </div>
          <p className="text-sm text-gray-500">No migrations. No lock-in. Full Integration or Render Only.</p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Starter */}
            <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <p className="text-sm text-gray-600 mb-6">For individuals getting effortless work in one place</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Connect up to 3 tools",
                  "AI Loader (basic)",
                  "Brainstorming + Second Brain (basic)",
                  "Tasks + Insights",
                  "Templates (Starter library)",
                  "Render outputs (docs, emails, checklists)",
                  "BYOM (optional)",
                  "Standard support",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700" asChild>
                <Link href="/demo#book">Book Demo</Link>
              </Button>
            </div>

            {/* Team */}
            <div className="border-2 border-indigo-600 rounded-xl p-8 relative hover:shadow-lg transition-shadow">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
                Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Team</h3>
              <p className="text-sm text-gray-600 mb-6">For teams that want shared context + automation</p>
              <p className="text-xs text-gray-500 mb-4">Everything in Starter, plus:</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Connect up to 10 tools",
                  "Shared Workspaces",
                  "Team Agents (task + follow-up + planning)",
                  "Two-way sync (selected connectors)",
                  "Webhooks (standard)",
                  "Templates (Team library)",
                  "Advanced Render outputs (decks, SOPs, plans)",
                  "Integrations via Spine (n8n support)",
                  "Priority support",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700" asChild>
                <Link href="/demo#book">Book Demo</Link>
              </Button>
            </div>

            {/* Business */}
            <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-2">Business</h3>
              <p className="text-sm text-gray-600 mb-6">For operations that run on unified data</p>
              <p className="text-xs text-gray-500 mb-4">Everything in Team, plus:</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Unlimited tools & workspaces",
                  "Advanced Spine normalization + conflict rules",
                  "Full webhooks + event routing",
                  "Governance controls + audit logs",
                  "Advanced agent orchestration (quotas, approvals)",
                  "Custom templates + template versioning",
                  "DataSentinel controls (baseline)",
                  "SLA support",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-transparent" variant="outline">
                Talk to Sales
              </Button>
            </div>

            {/* Enterprise */}
            <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <p className="text-sm text-gray-600 mb-6">For regulated orgs & complex stacks</p>
              <p className="text-xs text-gray-500 mb-4">Everything in Business, plus:</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Private deployment options",
                  "Dedicated VPC / private networking support",
                  "Enterprise IAM + SSO / SCIM",
                  "Custom compliance controls",
                  "Advanced DataSentinel (PII, lineage, policy engine)",
                  "Dedicated onboarding + architecture support",
                  "Managed Ops packages available",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-transparent" variant="outline">
                Book Enterprise Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Add-Ons & Specialized Lenses</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-2">Customer Success Lens</h3>
              <p className="text-sm text-gray-600 mb-4">
                Specialized view with Health Scores, ARR, Churn Risk, and Technical Health
              </p>
              <p className="text-sm text-gray-600 mb-6">Includes SuccessPilot / ChurnShield modules</p>
              <Button className="w-full bg-transparent" variant="outline">
                Add CS Lens
              </Button>
            </div>

            <div className="border border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-2">Services</h3>
              <p className="text-sm text-gray-600 mb-6">
                Assessments, Implementations, Managed Ops, MuleSoft, Training
              </p>
              <Button className="w-full bg-transparent" variant="outline">
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Render Only Mode */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold mb-4">Render Only Mode</h2>
          <p className="text-gray-600 mb-6">
            Safe, read-only analytics and output with zero risk to source data. Read-only connectors, dashboards,
            insights, and reporting. Great for compliance-first orgs.
          </p>
          <p className="text-sm text-gray-500 mb-6">Upgrade to Full Integration anytime</p>
          <Button className="bg-indigo-600 hover:bg-indigo-700">Start Render Only</Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing FAQ</h2>
          <div className="space-y-6">
            {[
              { q: "Can I switch modes?", a: "Yes — anytime." },
              { q: "Do you replace my tools?", a: "No. IntegrateWise sits on top." },
              { q: "Is BYOM supported?", a: "Yes — connect your model when you're ready." },
              { q: "Do you store data?", a: "Only what you choose. Often IntegrateWise is a router + normaliser." },
            ].map((faq) => (
              <div key={faq.q} className="border-b border-gray-200 pb-6">
                <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
