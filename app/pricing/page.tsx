"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly")

  const prices = {
    starter: 0,
    team: billingCycle === "yearly" ? 24 : 29,
    business: billingCycle === "yearly" ? 65 : 79,
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="px-6 pt-32 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-balance mb-6">Pricing that scales with you</h1>
          <p className="text-xl text-gray-600 text-balance mb-10">
            Start simple. Connect your tools. Upgrade when you want deeper integrations and team context.
          </p>

          <div className="flex items-center justify-center gap-4 mb-10">
            <span
              className={`text-sm font-medium ${billingCycle === "monthly" ? "text-foreground" : "text-muted-foreground"}`}
            >
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
              className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                billingCycle === "yearly" ? "bg-indigo-600" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                  billingCycle === "yearly" ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`text-sm font-medium ${billingCycle === "yearly" ? "text-foreground" : "text-muted-foreground"}`}
            >
              Yearly <span className="text-indigo-600 text-xs font-bold ml-1">(Save 20%)</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Starter */}
            <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-gray-500 text-sm"> / month</span>
              </div>
              <p className="text-sm text-gray-600 mb-6">For individuals getting effortless work in one place</p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Connect up to 3 tools",
                  "AI Loader (basic)",
                  "Second Brain (basic)",
                  "Tasks + Insights",
                  "Render outputs (docs)",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Start Free</Button>
            </div>

            {/* Team */}
            <div className="border-2 border-indigo-600 rounded-xl p-8 relative hover:shadow-xl transition-all duration-300 flex flex-col shadow-md">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Team</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">${prices.team}</span>
                <span className="text-gray-500 text-sm"> / user / month</span>
              </div>
              <p className="text-sm text-gray-600 mb-6">For teams that want shared context + automation</p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Connect up to 10 tools",
                  "Shared Workspaces",
                  "Team Agents (planning)",
                  "Two-way sync",
                  "Webhooks (standard)",
                  "Integrations via Spine",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Start Team Plan</Button>
            </div>

            {/* Business */}
            <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col">
              <h3 className="text-2xl font-bold mb-2">Business</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">${prices.business}</span>
                <span className="text-gray-500 text-sm"> / user / month</span>
              </div>
              <p className="text-sm text-gray-600 mb-6">For operations that run on unified data</p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Unlimited tools & workspaces",
                  "Advanced Spine rules",
                  "Full webhooks + routing",
                  "Governance controls",
                  "Agent orchestration",
                  "DataSentinel controls",
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
            <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col bg-gray-50/50">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">Custom</span>
              </div>
              <p className="text-sm text-gray-600 mb-6">For regulated orgs & complex stacks</p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Private deployment options",
                  "Dedicated VPC support",
                  "Enterprise IAM + SSO",
                  "Advanced DataSentinel",
                  "Managed Ops packages",
                  "Dedicated Success Manager",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-transparent" variant="outline">
                Book Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl p-10 text-center border border-gray-100">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold mb-4">
            New
          </div>
          <h2 className="text-2xl font-bold mb-4">Render Only Mode</h2>
          <p className="text-gray-600 mb-6">
            Safe, read-only analytics and output with <strong>zero risk</strong> to source data. Great for
            compliance-first organizations. Available on all plans.
          </p>
          <Button variant="outline" className="border-teal-600 text-teal-700 hover:bg-teal-50 bg-transparent">
            Compare Modes
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
