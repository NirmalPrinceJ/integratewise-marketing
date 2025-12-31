import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function BusinessOpsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-balance mb-6">
            For Business Ops: automation + analytics, without the chaos
          </h1>
          <p className="text-xl text-gray-600 text-balance mb-8">
            IntegrateWise helps ops teams unify data across systems, trigger workflows, and generate executive outputs.
          </p>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Core features</h2>
            <ul className="space-y-3">
              {[
                "Spine normalization across tools",
                "Webhooks + event routing",
                "Dashboards and insights (Render Only optional)",
                "Agents for operational automation",
                "Render: exec reports, ops plans, SOPs, audit summaries",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button size="lg" variant="outline">
            Talk to Sales
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
