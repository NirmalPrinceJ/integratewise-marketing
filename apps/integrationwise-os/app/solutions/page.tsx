import Link from "next/link"
import { Button } from "@/components/ui/button"
import { User, Users, Briefcase, TrendingUp } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function SolutionsPage() {
  const solutions = [
    {
      icon: User,
      title: "For Individuals",
      description: "Your productivity OS - tasks, notes, AI thinking, and outputs in one place",
      href: "/solutions/individuals",
    },
    {
      icon: Users,
      title: "For Teams",
      description: "Shared context, fewer meetings - get aligned faster with shared tasks and memory",
      href: "/solutions/teams",
    },
    {
      icon: Briefcase,
      title: "For Business Ops",
      description: "Automation + analytics without the chaos - unify data and generate executive outputs",
      href: "/solutions/business-ops",
    },
    {
      icon: TrendingUp,
      title: "For Customer Success",
      description: "Intelligence, playbooks, and proactive action - specialized CS lens with health scores",
      href: "/solutions/customer-success",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-balance mb-6">One OS. Many lenses.</h1>
          <p className="text-xl text-gray-600 text-balance mb-8">
            IntegrateWise is universal by default—built for anyone. Lenses are optional views designed for different
            roles and workflows.
          </p>
          <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
            Start Free
          </Button>
        </div>
      </section>

      {/* Solution Cards */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <Link
                key={solution.title}
                href={solution.href}
                className="border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:border-indigo-300 transition-all group"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                  <solution.icon className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
