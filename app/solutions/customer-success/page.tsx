"use client"

import { Button } from "@/components/ui/button"
import { Activity, AlertTriangle, Shield, DollarSign } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Mon", health: 65, churn: 20 },
  { name: "Tue", health: 68, churn: 18 },
  { name: "Wed", health: 75, churn: 15 },
  { name: "Thu", health: 72, churn: 17 },
  { name: "Fri", health: 82, churn: 10 },
  { name: "Sat", health: 85, churn: 8 },
  { name: "Sun", health: 88, churn: 5 },
]

export default function CustomerSuccessPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700 mb-6">
            CS Intelligence Suite
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-balance mb-6">Customer Success Lens</h1>
          <p className="text-xl text-gray-600 text-balance mb-12">
            A specialized view for CS teams that unifies health signals, playbooks, and churn risks—powered by the same
            IntegrateWise OS core.
          </p>
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

      {/* Live Health Intelligence */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Live Health Intelligence</h2>
            {/* Chart Component */}
            <div className="w-full h-[400px] bg-white border rounded-xl p-6 shadow-sm mb-8">
              <h3 className="text-sm font-semibold text-gray-500 mb-4">Aggregate Customer Health vs Churn Risk</h3>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorHealth" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1} />
                      <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#9ca3af" }} />
                  <YAxis hide />
                  <Tooltip
                    contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
                  />
                  <Area
                    type="monotone"
                    dataKey="health"
                    stroke="#4f46e5"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorHealth)"
                    name="Health Score"
                  />
                  <Area
                    type="monotone"
                    dataKey="churn"
                    stroke="#ef4444"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    fill="none"
                    name="Churn Risk"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  icon: Activity,
                  title: "Health Scores",
                  color: "indigo",
                  desc: "Normalized across support, product, and CRM usage.",
                },
                {
                  icon: DollarSign,
                  title: "ARR + Renewals",
                  color: "blue",
                  desc: "Revenue signals synced from Stripe and Salesforce.",
                },
                {
                  icon: AlertTriangle,
                  title: "Churn Risk",
                  color: "red",
                  desc: "AI detection of risky patterns in communication.",
                },
                {
                  icon: Shield,
                  title: "Technical Health",
                  color: "teal",
                  desc: "Integration status and API usage limits.",
                },
              ].map((view) => (
                <div
                  key={view.title}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:border-indigo-200 transition-colors shadow-sm"
                >
                  <view.icon className={`w-8 h-8 text-${view.color}-600 mb-3`} />
                  <h3 className="font-semibold text-lg">{view.title}</h3>
                  <p className="text-sm text-gray-500 mt-2">{view.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Powered by IntegrateWise OS Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto space-y-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Powered by the Core OS</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The CS Lens is built on the same powerful infrastructure that runs your entire operation.
            </p>
          </div>

          {/* AI Agents Feature */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-medium">
                AI Agents
              </div>
              <h3 className="text-3xl font-bold">Automate Support Workflows</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Intelligent agents analyze incoming tickets, suggest solutions from your knowledge base, and even draft
                responses, freeing up your team for high-value interactions.
              </p>
            </div>
            <div className="flex-1">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white p-4">
                <Image
                  src="/placeholder.svg?height=450&width=800"
                  alt="AI Agents Support Automation Workflow"
                  width={800}
                  height={450}
                  className="rounded-xl w-full"
                />
              </div>
            </div>
          </div>

          {/* Webhooks Feature */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                Webhooks
              </div>
              <h3 className="text-3xl font-bold">Real-time Churn Prevention</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Set up triggers on critical events like a failed payment in Stripe or a low-usage alert. Instantly
                notify your CSM team in Slack and create a high-priority task in your project management tool.
              </p>
            </div>
            <div className="flex-1">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white p-4">
                <Image
                  src="/placeholder.svg?height=450&width=800"
                  alt="Webhooks Real-time Automation"
                  width={800}
                  height={450}
                  className="rounded-xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
