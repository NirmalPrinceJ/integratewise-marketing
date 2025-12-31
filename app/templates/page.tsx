import Link from "next/link"
import { Button } from "@/components/ui/button"
import { User, Users, Briefcase, TrendingUp, Zap, Brain } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function TemplatesPage() {
  const categories = [
    { icon: User, title: "Personal Productivity" },
    { icon: Users, title: "Work & Team Execution" },
    { icon: Briefcase, title: "Business Ops" },
    { icon: TrendingUp, title: "Customer Success" },
    { icon: Zap, title: "Consulting Delivery" },
    { icon: Brain, title: "Engineering Ops" },
  ]

  const templates = [
    {
      title: "Weekly Planning OS",
      description: "Turns notes + calendars into a plan",
      output: "Weekly plan + tasks + reminders",
    },
    {
      title: "AI Brainstream → Action",
      description: "Pull AI chats via webhook, turn into tasks + docs",
      output: "Tasks + docs from AI conversations",
    },
    {
      title: "CS Health Pulse",
      description: "Health score summary + churn flags + playbook suggestions",
      output: "Health dashboards + intervention plans",
      badge: "CS Lens required",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-balance mb-6">
            Templates that make the OS useful from day one
          </h1>
          <p className="text-xl text-gray-600 text-balance mb-8">
            Install a template and your workflows instantly become structured, searchable, and actionable—across your
            tools.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/demo">Watch Demo</Link>
            </Button>
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700" asChild>
              <Link href="/demo#book">Book Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Template Categories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div
                key={category.title}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-indigo-300 transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors">
                  <category.icon className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold">{category.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Template Cards */}
      <section className="px-6 pb-20 bg-gray-50">
        <div className="max-w-5xl mx-auto py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Templates</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {templates.map((template) => (
              <div
                key={template.title}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                {template.badge && (
                  <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-600 text-xs rounded-full mb-4">
                    {template.badge}
                  </span>
                )}
                <h3 className="text-xl font-bold mb-2">{template.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{template.description}</p>
                <div className="mb-6">
                  <p className="text-xs text-gray-500 mb-1">Output:</p>
                  <p className="text-sm font-medium">{template.output}</p>
                </div>
                <Button className="w-full bg-transparent" variant="outline">
                  Install Template
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Templates Work */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How templates work</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center shrink-0 font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold mb-1">Choose your template</h3>
                <p className="text-gray-600">Browse by category or search for specific workflows</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center shrink-0 font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold mb-1">Customize variables</h3>
                <p className="text-gray-600">Set your preferences and connect relevant tools</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center shrink-0 font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold mb-1">Start using immediately</h3>
                <p className="text-gray-600">Templates integrate with your existing data and tools instantly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
