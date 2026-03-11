import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/button";

// Mock data based on Figma nodes
const useCasesData = [
  {
    id: "revops",
    label: "Revenue Operations",
    title: "Revenue Operations",
    description: "Connect the entire revenue lifecycle from lead to cash. Eliminate data silos between marketing, sales, and billing to uncover hidden revenue leaks.",
    stats: [
      { value: "32%", label: "Faster time to close" },
      { value: "100%", label: "Pipeline visibility" },
      { value: "0", label: "Manual data entries" }
    ],
    bullets: [
      "End-to-end revenue tracking",
      "Automated forecast adjustments",
      "Cross-platform data sync",
      "Predictive revenue alerts"
    ],
    image: "/images/before-after-finance.png"
  },
  {
    id: "cs",
    label: "Customer Success",
    title: "Customer Success",
    description: "Know which accounts need attention before they tell you. Health scores built from real usage, sentiment, and engagement data — not just gut feeling.",
    stats: [
      { value: "47%", label: "Reduction in churn" },
      { value: "3x", label: "Upsell identification" },
      { value: "100%", label: "Account coverage" }
    ],
    bullets: [
      "Predictive health scoring",
      "Automated renewal alerts",
      "Usage drop-off detection",
      "Sentiment analysis from tickets"
    ],
    image: "/images/industries/industry-healthcare.png"
  },
  {
    id: "sales",
    label: "Sales",
    title: "Sales",
    description: "Every deal in context. See engagement signals, stakeholder maps, and competitive intelligence alongside your pipeline — with next-best-action recommendations.",
    stats: [
      { value: "28%", label: "Increase in win rate" },
      { value: "5hrs", label: "Saved per rep weekly" },
      { value: "1.5x", label: "Larger deal sizes" }
    ],
    bullets: [
      "AI-driven next best actions",
      "Multi-threaded stakeholder mapping",
      "Automated CRM updates",
      "Deal risk identification"
    ],
    image: "/images/industries/industry-auto-dealership.png"
  },
  {
    id: "marketing",
    label: "Marketing",
    title: "Marketing",
    description: "Track true ROI across the entire customer journey. Connect ad spend to closed-won revenue, not just MQLs, and automatically adjust campaigns based on performance.",
    stats: [
      { value: "41%", label: "Better ROAS" },
      { value: "Real-time", label: "Campaign adjustments" },
      { value: "100%", label: "Attribution accuracy" }
    ],
    bullets: [
      "Full-funnel attribution",
      "Cross-channel spend tracking",
      "Automated audience building",
      "Lead scoring adjustments"
    ],
    image: "/images/industries/industry-real-estate.png"
  },
  {
    id: "product",
    label: "Product",
    title: "Product",
    description: "See which features drive activation, expansion, and retention. Prioritize your roadmap based on real customer behavior, not assumptions.",
    stats: [
      { value: "89%", label: "Feature insight accuracy" },
      { value: "2.3x", label: "Faster adoption cycles" },
      { value: "56%", label: "Reduction in feature churn" }
    ],
    bullets: [
      "Feature adoption and usage analytics",
      "Activation funnel tracking by segment",
      "Usage-to-revenue correlation analysis",
      "Feedback loop from CS and support tickets"
    ],
    image: "/images/product-dashboard.png"
  },
  {
    id: "bizops",
    label: "Business Operations",
    title: "Business Operations",
    description: "The central nervous system of your company. Automate cross-functional workflows, ensure compliance, and maintain a single source of truth across all tools.",
    stats: [
      { value: "60%", label: "Process automation" },
      { value: "100%", label: "Audit readiness" },
      { value: "0", label: "Data discrepancy" }
    ],
    bullets: [
      "Cross-tool workflow automation",
      "Centralized access governance",
      "Real-time compliance monitoring",
      "Vendor and spend management"
    ],
    image: "/images/industries/industry-retail.png"
  }
];

export function UseCasesSection() {
  const [activeTab, setActiveTab] = useState(useCasesData[0].id);
  const currentData = useCasesData.find((d) => d.id === activeTab) || useCasesData[0];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-emerald-500 text-sm font-semibold tracking-wide uppercase mb-4">
            Use Cases
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            One platform.<br />
            <span className="text-emerald-500">Every department.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            IntegrateWise adapts to how each team works — same data spine, different views, tailored intelligence.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-16">
          {useCasesData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20"
                  : "bg-white border border-border text-muted-foreground hover:border-emerald-500/50 hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-emerald-50/50 rounded-3xl border border-emerald-100 p-8 md:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left Content */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <div className="h-5 w-5 rounded-full border-2 border-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{currentData.title}</h3>
                </div>

                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  {currentData.description}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  {currentData.stats.map((stat, i) => (
                    <div key={i} className="bg-white rounded-xl p-4 border border-emerald-100 shadow-sm">
                      <div className="text-2xl font-bold text-emerald-500 mb-1">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <ul className="space-y-3 mb-8">
                  {currentData.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl px-6 h-12">
                  Get started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* Right Image Placeholder */}
              <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-2xl overflow-hidden border border-emerald-100 shadow-2xl bg-white">
                <img 
                  src={currentData.image} 
                  alt={currentData.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Overlay gradient to match design feel */}
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
