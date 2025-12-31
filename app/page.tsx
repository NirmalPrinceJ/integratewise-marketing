import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Terminal } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="px-6 pt-24 md:pt-32 pb-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-balance mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            The Operating System for Your Tools
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 text-balance mb-10 max-w-3xl mx-auto">
            Turn your fragmented SaaS stack into a unified, intelligent nervous system. Connect, normalize, and automate
            everything with a developer-first platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 h-12 px-8 text-base">
              Start Building <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-transparent">
              Book a Demo
            </Button>
          </div>
          <div className="relative w-full max-w-5xl mx-auto">
            <Image
              src="/placeholder.svg?height=675&width=1200"
              alt="IntegrateWise OS Core Overview"
              width={1200}
              height={675}
              className="rounded-2xl shadow-2xl border border-gray-200"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent rounded-2xl pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How IntegrateWise OS Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A modular platform built on four core pillars to unify your data and automate your workflows.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "The Spine",
                desc: "Normalize data from any source into a single, unified model.",
                img: "/placeholder.svg?height=337&width=600",
              },
              {
                title: "Webhooks & Events",
                desc: "Trigger instant actions across your entire stack in real-time.",
                img: "/placeholder.svg?height=337&width=600",
              },
              {
                title: "AI Agents",
                desc: "Deploy autonomous agents to analyze data and execute complex tasks.",
                img: "/placeholder.svg?height=337&width=600",
              },
              {
                title: "DataSentinel",
                desc: "Ensure governance, security, and compliance for all your data.",
                img: "/placeholder.svg?height=337&width=600",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.desc}</p>
                  <Image
                    src={feature.img || "/placeholder.svg"}
                    alt={feature.title}
                    width={600}
                    height={337}
                    className="rounded-xl border border-gray-100 w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto bg-indigo-600 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to unify your operations?</h2>
            <p className="text-lg md:text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
              Stop managing tools and start managing your business. Get a unified view and automate the rest.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="h-12 px-8 text-base text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Get Started for Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 text-base text-white border-white hover:bg-white/10 bg-transparent"
              >
                Talk to an Expert
              </Button>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <Terminal className="w-96 h-96 -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
