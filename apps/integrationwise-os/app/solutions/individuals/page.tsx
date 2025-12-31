import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function IndividualsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-balance mb-6">For Individuals: your productivity OS</h1>
          <p className="text-xl text-gray-600 text-balance mb-8">
            Tasks, notes, AI thinking, and outputs in one place—without changing the tools you already use.
          </p>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Key outcomes</h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "Less organizing, more doing",
                "Ideas that compound",
                "One view of your work and thinking",
                "Effortless planning and execution",
              ].map((outcome) => (
                <li key={outcome} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-teal-600 shrink-0 mt-1" />
                  <span className="text-gray-700">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Core features</h2>
            <ul className="space-y-3">
              {[
                "AI Loader → structured workflows from your existing data",
                "Brainstorming + Brain Agent → Second Brain from AI chats",
                "Templates for daily productivity",
                "Render outputs: plans, docs, emails, checklists",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
            Start Free
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
