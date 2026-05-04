"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { 
  Check, 
  ArrowRight,
  Calculator,
  HelpCircle,
  X
} from "lucide-react"

const plans = [
  {
    name: "Pilot",
    description: "For solo founders, individuals, and small teams getting started with IntegrateWise",
    price: { monthly: 99, yearly: 79 },
    features: [
      "Up to 5 users",
      "3 connectors",
      "Basic Spine",
      "Workspace access",
      "Twin (Claude)",
      "Email support",
    ],
    cta: "Book a Demo",
    highlighted: false,
  },
  {
    name: "Standard",
    description: "For growing teams with more complex needs",
    price: { monthly: 199, yearly: 159 },
    features: [
      "Up to 25 users",
      "10 connectors",
      "Full Spine with Memory",
      "Workspace + Approval",
      "Twin (Claude) + Loop",
      "Priority support",
      "Custom integrations",
    ],
    cta: "Book a Demo",
    highlighted: true,
  },
  {
    name: "Growth",
    description: "For established teams scaling operations",
    price: { monthly: 399, yearly: 319 },
    features: [
      "Up to 100 users",
      "25 connectors",
      "Full Spine with all Memory scopes",
      "Full product suite",
      "Advanced Twin capabilities",
      "Dedicated support",
      "Custom workflows",
      "API access",
    ],
    cta: "Book a Demo",
    highlighted: false,
  },
]

const faqs = [
  {
    question: "How does pricing work?",
    answer: "Pricing scales with value, not seats. You pay based on the number of users and connectors you need. As you grow, your plan grows with you.",
  },
  {
    question: "What's included in every plan?",
    answer: "Every plan includes access to the Spine, Workspace, Twin, and Approval features. Higher tiers unlock more connectors, users, and advanced capabilities.",
  },
  {
    question: "Can I switch plans?",
    answer: "Yes. You can upgrade or downgrade at any time. Changes take effect on your next billing cycle.",
  },
  {
    question: "What's the ROI I can expect?",
    answer: "Our customers typically see 5-8 hours saved per user per week, with a 30-day average payback period and 8×+ ROI multiple.",
  },
  {
    question: "Is there a free trial?",
    answer: "We offer guided pilots during the private beta. Book a demo to discuss your specific needs and timeline.",
  },
  {
    question: "What about enterprise?",
    answer: "For teams over 100 users or with specific security/compliance needs, contact us for custom Enterprise pricing.",
  },
]

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(true)
  const [seats, setSeats] = useState(10)
  const [hours, setHours] = useState(6)
  const [hourlyRate, setHourlyRate] = useState(50)
  const [showCalculator, setShowCalculator] = useState(false)

  const weeklySavings = seats * hours * hourlyRate
  const monthlySavings = weeklySavings * 4
  const yearlySavings = monthlySavings * 12

  return (
    <div className="min-h-screen bg-bg-main">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-24 hero-glow">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
                Pricing scales with value, not seats
              </h1>
              <p className="text-xl text-text-secondary">
                Simple, transparent pricing that grows with your team. Solo founders and individual operators start on Pilot; Personal Space (private beta, free during pilot) covers purely personal use.
              </p>
            </div>
          </div>
        </section>

        {/* Toggle */}
        <section className="pb-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-center gap-4">
              <span className={`text-sm ${!isYearly ? 'text-text-primary' : 'text-text-dim'}`}>Monthly</span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`relative w-14 h-7 rounded-full transition-colors ${isYearly ? 'bg-gold' : 'bg-bg-muted'}`}
              >
                <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${isYearly ? 'left-8' : 'left-1'}`} />
              </button>
              <span className={`text-sm ${isYearly ? 'text-text-primary' : 'text-text-dim'}`}>
                Yearly <span className="text-gold">(Save 20%)</span>
              </span>
            </div>
          </div>
        </section>

        {/* Plans */}
        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`glass-card rounded-xl p-8 relative ${plan.highlighted ? 'border-gold/30 ring-1 ring-gold/20' : ''}`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-bg-main text-xs font-bold px-3 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-text-primary mb-2">{plan.name}</h3>
                  <p className="text-text-secondary text-sm mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-text-primary">
                      ${isYearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className="text-text-dim">/user/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                        <span className="text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/demo"
                    className={`block w-full text-center py-3 rounded-lg font-medium transition-colors ${
                      plan.highlighted
                        ? 'bg-gold hover:bg-gold-light text-bg-main'
                        : 'bg-bg-muted hover:bg-bg-elevated text-text-primary'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
            
            {/* Enterprise */}
            <div className="mt-8 glass-card rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-text-primary mb-2">Enterprise</h3>
              <p className="text-text-secondary mb-4">
                For large teams with custom requirements, security needs, and dedicated support.
              </p>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-medium transition-colors"
              >
                Talk to sales <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="py-24 bg-bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-text-primary">ROI Calculator</h2>
                <button
                  onClick={() => setShowCalculator(!showCalculator)}
                  className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
                >
                  <Calculator className="w-5 h-5" />
                  {showCalculator ? 'Hide' : 'Show'} calculator
                </button>
              </div>
              
              {showCalculator && (
                <div className="glass-card rounded-xl p-8 mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div>
                      <label className="block text-text-secondary text-sm mb-2">Number of seats</label>
                      <input
                        type="number"
                        value={seats}
                        onChange={(e) => setSeats(Number(e.target.value))}
                        className="w-full bg-bg-elevated border border-white/10 rounded-lg px-4 py-2 text-text-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-text-secondary text-sm mb-2">Hours saved/week/user</label>
                      <input
                        type="number"
                        value={hours}
                        onChange={(e) => setHours(Number(e.target.value))}
                        className="w-full bg-bg-elevated border border-white/10 rounded-lg px-4 py-2 text-text-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-text-secondary text-sm mb-2">Hourly cost ($)</label>
                      <input
                        type="number"
                        value={hourlyRate}
                        onChange={(e) => setHourlyRate(Number(e.target.value))}
                        className="w-full bg-bg-elevated border border-white/10 rounded-lg px-4 py-2 text-text-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-text-primary">${weeklySavings.toLocaleString()}</div>
                      <div className="text-text-dim text-sm">Weekly savings</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-text-primary">${monthlySavings.toLocaleString()}</div>
                      <div className="text-text-dim text-sm">Monthly savings</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gold">${yearlySavings.toLocaleString()}</div>
                      <div className="text-text-dim text-sm">Yearly savings</div>
                    </div>
                  </div>
                </div>
              )}

              <p className="text-text-dim text-sm text-center">
                Based on average customer data: 5-8 hours saved per user per week. <button className="text-gold hover:text-gold-light">See how we calculate →</button>
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-text-primary mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="glass-card rounded-xl p-6">
                  <h3 className="text-text-primary font-semibold mb-2">{faq.question}</h3>
                  <p className="text-text-secondary text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-text-primary mb-6">
              Ready to see IntegrateWise in action?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-bg-main px-8 py-4 rounded-lg text-lg font-semibold transition-all gold-glow"
              >
                Book a Demo <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/demo"
                className="text-gold hover:text-gold-light font-medium transition-colors"
              >
                Talk to sales
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
