import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-balance mb-6">Pricing That Scales With You</h1>
          <p className="text-xl text-gray-600 text-balance mb-8">
            Start simple. Connect your tools. Upgrade when you need deeper integrations, advanced agents, and multi-team
            views.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              Start 14-Day Pro Trial
            </Button>
            <Button size="lg" variant="outline">
              Request Demo
            </Button>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Free */}
            <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <p className="text-3xl font-bold mb-2">
                $0<span className="text-base font-normal text-gray-500">/mo</span>
              </p>
              <p className="text-sm text-gray-600 mb-6">Get started with the basics</p>
              <ul className="space-y-3 mb-8">
                {["3 hubs", "3 integrations", "10K tokens/mo", "Basic AI assistant", "Community support"].map(
                  (feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ),
                )}
              </ul>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Start Free</Button>
            </div>

            {/* Starter */}
            <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <p className="text-3xl font-bold mb-2">
                $12<span className="text-base font-normal text-gray-500">/mo</span>
              </p>
              <p className="text-xs text-gray-500 mb-1">or Rs 999/mo</p>
              <p className="text-sm text-gray-600 mb-6">For individuals and small teams</p>
              <ul className="space-y-3 mb-8">
                {["21 hubs", "10 integrations", "3 agents", "100K tokens/mo", "BYOM (optional)", "Email support"].map(
                  (feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ),
                )}
              </ul>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Start Starter</Button>
            </div>

            {/* Pro - Popular */}
            <div className="border-2 border-indigo-600 rounded-xl p-8 relative hover:shadow-lg transition-shadow">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <p className="text-3xl font-bold mb-2">
                $59<span className="text-base font-normal text-gray-500">/mo</span>
              </p>
              <p className="text-xs text-gray-500 mb-1">or Rs 4,999/mo</p>
              <p className="text-sm text-gray-600 mb-6">For growing teams</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Unlimited integrations",
                  "10 agents",
                  "BYOM included",
                  "BYOT included",
                  "1M tokens/mo",
                  "Priority support",
                  "Advanced governance",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Start Pro Trial</Button>
            </div>

            {/* Enterprise */}
            <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <p className="text-3xl font-bold mb-2">Custom</p>
              <p className="text-sm text-gray-600 mb-6">For regulated orgs and complex stacks</p>
              <ul className="space-y-3 mb-8">
                {[
                  "White-label options",
                  "Unlimited agents",
                  "Custom Spine",
                  "SSO / SCIM",
                  "BAA available",
                  "Dedicated support",
                  "Custom compliance",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-transparent" variant="outline">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Rendering Modes */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Three Rendering Modes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Workspace Mode</h3>
              <p className="text-sm text-gray-600">
                Full dashboard for individuals/small teams—hubs, assistant, tasks, knowledge.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Business Dashboard</h3>
              <p className="text-sm text-gray-600">
                Multi-team view with real-time KPIs, predictive insights, and automated reporting.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Render-Only</h3>
              <p className="text-sm text-gray-600">
                Headless pipeline to Notion, ClickUp, Airtable, Sheets, Linear, Todoist via API/webhooks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing FAQ</h2>
          <div className="space-y-6">
            {[
              {
                q: "Can I switch modes?",
                a: "Yes—anytime. Move between Workspace, Business Dashboard, and Render-Only as your needs change.",
              },
              {
                q: "Do you replace my tools?",
                a: "No. IntegrateWise sits on top of your existing tools. Connect without replacing them.",
              },
              {
                q: "Is BYOM supported?",
                a: "Yes—connect your own AI model (commercial or self-hosted) when you're ready.",
              },
              {
                q: "Do you store data?",
                a: "Only what you choose. Often IntegrateWise acts as a router and normalizer—not a permanent data owner.",
              },
              {
                q: "What about compliance?",
                a: "Enterprise tier includes SOC 2, GDPR, HIPAA readiness, BAA, and custom compliance controls.",
              },
            ].map((faq) => (
              <div key={faq.q} className="border-b border-gray-200 pb-6">
                <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to start?</h2>
          <p className="text-gray-600 mb-6">One workspace. All your tools. AI-powered.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-indigo-600 hover:bg-indigo-700" asChild>
              <Link href="/demo">Start 14-Day Pro Trial</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/demo">Request Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
