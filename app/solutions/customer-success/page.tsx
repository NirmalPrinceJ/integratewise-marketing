import { Button } from "@/components/ui/button"
import { Activity, AlertTriangle, Shield, DollarSign } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function CustomerSuccessPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-balance mb-6">
            Customer Success Lens: intelligence, playbooks, and proactive action
          </h1>
          <p className="text-xl text-gray-600 text-balance mb-12">
            A specialized view for CS teams—powered by the same IntegrateWise OS core.
          </p>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">CS Views</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Activity, title: "Health Scores", color: "indigo" },
                { icon: DollarSign, title: "ARR + Renewals", color: "blue" },
                { icon: AlertTriangle, title: "Churn Risk", color: "red" },
                { icon: Shield, title: "Technical Health", color: "teal" },
              ].map((view) => (
                <div key={view.title} className="border border-gray-200 rounded-xl p-6">
                  <view.icon className={`w-8 h-8 text-${view.color}-600 mb-3`} />
                  <h3 className="font-semibold">{view.title}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Modules</h2>
            <ul className="space-y-3">
              {["SuccessPilot", "ChurnShield", "DataSentinel", "DealDesk"].map((module) => (
                <li key={module} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 shrink-0" />
                  <span className="text-gray-700">{module}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Outputs</h2>
            <div className="flex flex-wrap gap-3">
              {["Renewal decks", "Exec customer updates", "Playbooks", "Intervention plans", "Customer comms"].map(
                (output) => (
                  <span key={output} className="px-4 py-2 bg-gray-100 rounded-full text-sm">
                    {output}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="flex gap-4">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              Add CS Lens
            </Button>
            <Button size="lg" variant="outline">
              Book Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
