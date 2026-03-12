import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FadeIn } from "../motion/AnimateIn";
import { Briefcase, Code2, TrendingUp, HeadphonesIcon, GraduationCap, Eye, Cable, BarChart3 } from "lucide-react";

type Persona = {
  id: string;
  icon: typeof Briefcase;
  label: string;
  title: string;
  color: string;
  bgColor: string;
  borderColor: string;
  sightlines: string;
  superpowers: string[];
  quote: string;
};

const personas: Persona[] = [
  {
    id: "leader",
    icon: Briefcase,
    label: "Business Leader",
    title: "Strategic Sightlines",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    sightlines: "Leaders suffer from lack of sightlines — they see high-level numbers but can't see the underlying 'clutter bursts' that lead to project delays or account failures. The Unified Intelligence Layer provides controlled visibility where public wide views stack hierarchically over private narrow ones.",
    superpowers: [
      "Every AI-suggested action is tied back to a KPI — org moves as a cohesive unit",
      "Review the evidence for any decision — accountability never lost to an algorithm",
      "Reduce 'brain fry' and retain high-performance talent prone to AI-mediated burnout",
      "See across all quadrants simultaneously — Sales, Tech, Ops, Management",
    ],
    quote: "I can finally see the full picture without assembling it from 6 different dashboards.",
  },
  {
    id: "tech",
    icon: Code2,
    label: "Tech Professional",
    title: "No More Re-Plumbing",
    color: "text-violet-600",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-200",
    sightlines: "For engineers and technical leads, the Unified Intelligence Layer is the 'balanced square' that absorbs new devices and routines without requiring a rewrite of the codebase. Focus on high-value development rather than manual synthesis of logs and data points.",
    superpowers: [
      "Modular architecture with 'modal tabs' — swap tools or agents as tech evolves",
      "Write-ahead logging buffers 'clutter bursts' before daily compile",
      "Plug into calendars, IDEs, databases — turn decisions into action instantly",
      "No re-plumbing when you add new services, connectors, or AI agents",
    ],
    quote: "Adding a new microservice used to mean 3 weeks of integration. Now the Unified Intelligence Layer absorbs it in a day.",
  },
  {
    id: "sales",
    icon: TrendingUp,
    label: "Sales & Operations",
    title: "Context is King",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    sightlines: "Sales and ops feel the 'scattered' nature of tools most acutely. They bridge customer needs and company delivery. The Unified Intelligence Layer gives them the missing piece — seeing the customer across all quadrants of the business.",
    superpowers: [
      "Autonomous monitoring acts as a 'longitudinal care companion' for accounts",
      "Seamless hand-offs — when a lead moves from Marketing to Sales to Success, no context is lost",
      "AI handles drafting memos, updating CRM fields — you handle strategy",
      "See the full customer journey: sales pipeline + support tickets + invoices + contracts",
    ],
    quote: "I stopped being the bridge between departments. The Unified Intelligence Layer handles the context; I handle the relationship.",
  },
  {
    id: "csm",
    icon: HeadphonesIcon,
    label: "Customer Success",
    title: "Predictive Care",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    sightlines: "CS teams react to churn signals after they've already happened. The Unified Intelligence Layer correlates product usage, support history, billing patterns, and NPS scores to predict risk weeks before the customer even thinks about leaving.",
    superpowers: [
      "87% churn prediction accuracy — focus on accounts that actually need attention",
      "Full account context in 2 minutes instead of 20 minutes of tab-switching",
      "AI drafts renewal playbooks based on the customer's complete journey",
      "Every health score is backed by evidence — not a black-box number",
    ],
    quote: "Our churn save rate went from 30% to 65%. The Unified Intelligence Layer sees what we used to miss.",
  },
  {
    id: "education",
    icon: GraduationCap,
    label: "Any Domain",
    title: "Same Unified Intelligence Layer, Your Schema",
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
    sightlines: "Whether you're a student, working professional, or business person — and whether you're in education, auto, manufacturing, or freelance — the Unified Intelligence Layer flexes to your domain. It's industry-agnostic and department-agnostic. The Unified Intelligence Layer learns your entities, relationships, and workflows, serves the exact intelligence you need, and grows with you.",
    superpowers: [
      "Education: unified parent portal, admission funnels, fee collection in one view",
      "Manufacturing: predictive maintenance, energy optimization, supply chain visibility",
      "Automotive: cross-location inventory, service upsells, customer lifetime value",
      "Freelance: client tracking, auto-invoicing, scope creep detection, proposal generation",
    ],
    quote: "We replaced 5 apps for parents. Admission conversion went from 50% to 70%. Satisfaction: 9.2/10.",
  },
];

export function YcValue() {
  const [active, setActive] = useState(0);
  const p = personas[active];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest text-emerald-600 font-semibold mb-3">Universal Value</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0f1a15] tracking-tight mb-4 ag-text-balance">
            Same Unified Intelligence Layer. Your walk of life.
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            The Unified Intelligence Layer is adaptive: it fits students, working professionals, and business people. Industry-agnostic and department-agnostic. Every feature is based on your goals, milestones, and metrics — and the Unified Intelligence Layer <em className="text-[#0f1a15] not-italic font-semibold">grows with you</em>, becoming stronger over time.
          </p>
        </FadeIn>

        {/* Persona pills */}
        <FadeIn delay={0.1} className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {personas.map((pr, i) => (
            <button
              key={pr.id}
              onClick={() => setActive(i)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                active === i
                  ? `${pr.bgColor} ${pr.color} ${pr.borderColor} border shadow-sm`
                  : "bg-white border border-gray-100 text-gray-500 hover:text-gray-700 hover:border-gray-200"
              }`}
            >
              <pr.icon className="h-4 w-4" />
              {pr.label}
            </button>
          ))}
        </FadeIn>

        {/* Active persona card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="max-w-4xl mx-auto"
          >
            <div className={`rounded-2xl border ${p.borderColor} bg-white overflow-hidden`}>
              <div className={`${p.bgColor} px-8 py-6 border-b ${p.borderColor}`}>
                <div className="flex items-center gap-3 mb-1">
                  <p.icon className={`h-6 w-6 ${p.color}`} />
                  <h3 className="text-xl font-bold text-[#0f1a15]">{p.title}</h3>
                </div>
              </div>

              <div className="p-8 lg:p-10">
                <p className="text-gray-600 leading-relaxed mb-6">{p.sightlines}</p>

                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Superpowers</p>
                <div className="space-y-3 mb-8">
                  {p.superpowers.map((sp, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Eye className={`h-4 w-4 ${p.color} shrink-0 mt-0.5`} />
                      <span className="text-[15px] text-gray-600 leading-relaxed">{sp}</span>
                    </div>
                  ))}
                </div>

                <div className={`rounded-xl ${p.bgColor} border ${p.borderColor} p-6`}>
                  <p className={`${p.color} text-[15px] leading-relaxed font-medium italic`}>
                    "{p.quote}"
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
