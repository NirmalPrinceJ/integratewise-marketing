import Link from "next/link"
import { Clock, Calendar, TrendingUp, ArrowRight } from "lucide-react"

const roiMetrics = [
  {
    value: "5-8",
    unit: "hrs/wk",
    label: "Time saved per user",
    icon: Clock,
  },
  {
    value: "30",
    unit: "days",
    label: "Average payback period",
    icon: Calendar,
  },
  {
    value: "8×+",
    unit: "",
    label: "ROI multiple",
    icon: TrendingUp,
  },
]

export function RoiSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-card rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {roiMetrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-6 h-6 text-gold" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-text-primary mb-1">
                  {metric.value}
                  <span className="text-xl text-text-secondary ml-1">{metric.unit}</span>
                </div>
                <div className="text-text-secondary text-sm">{metric.label}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-medium transition-colors"
            >
              See ROI calculator <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
