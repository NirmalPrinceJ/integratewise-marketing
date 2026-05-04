import { Database, Layout, User, CheckCircle, RotateCcw } from "lucide-react"

const architectureParts = [
  {
    name: "Spine",
    description: "Your single source of canonical truth across all tools.",
    icon: Database,
  },
  {
    name: "Workspace",
    description: "Your daily operating surface powered by the Spine.",
    icon: Layout,
  },
  {
    name: "Twin",
    description: "AI that reads your Spine and proposes with evidence.",
    icon: User,
  },
  {
    name: "Approval",
    description: "Every action reviewed by you before it executes.",
    icon: CheckCircle,
  },
  {
    name: "Loop",
    description: "Execution becomes knowledge that compounds over time.",
    icon: RotateCcw,
  },
]

export function ArchitectureSection() {
  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            The 5-Part Architecture
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A complete system designed to end fragmented work forever.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {architectureParts.map((part, index) => (
            <div key={part.name} className="relative">
              <div className="glass-card rounded-xl p-6 h-full flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                  <part.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{part.name}</h3>
                <p className="text-text-secondary text-sm">{part.description}</p>
              </div>
              {index < architectureParts.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gold/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
