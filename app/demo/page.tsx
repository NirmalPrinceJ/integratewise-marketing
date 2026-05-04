"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { Calendar, Check, ArrowRight, Building2, Users, Briefcase } from "lucide-react"

export default function DemoPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    teamSize: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <>
      <Header />
      <main>
        <section className="relative pt-32 pb-24 px-6 min-h-screen">
          <div className="absolute inset-0 hero-glow pointer-events-none" />
          <div className="absolute top-40 right-20 w-96 h-96 blob-bg blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Info */}
              <div className="lg:sticky lg:top-32">
                <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
                  <Calendar className="w-4 h-4 text-gold" />
                  <span className="text-gold text-sm">Request a Demo</span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  See your Digital Memory
                  <br />
                  <span className="gradient-text">in action</span>
                </h1>

                <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                  A 30-minute walkthrough on your real systems. We&apos;ll show you the Spine
                  taking shape, the Twin proposing actions, and Approval keeping you in control —
                  using your data, your workflow, your accounts.
                </p>

                <div className="space-y-6 mb-12">
                  {[
                    { icon: Building2, text: "Customized for your industry" },
                    { icon: Users, text: "Focused on your team's challenges" },
                    { icon: Briefcase, text: "Real-world use cases" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-gold" />
                      </div>
                      <span className="text-text-secondary">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="glass-card rounded-xl p-6">
                  <h3 className="font-semibold mb-4">What to expect:</h3>
                  <ul className="space-y-3">
                    {[
                      "30-minute personalized walkthrough",
                      "Q&A with a product expert",
                      "Custom integration recommendations",
                      "No commitment required",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-gold mt-1" />
                        <span className="text-text-secondary text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="glass-card rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">Schedule Your Demo</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full bg-bg-elevated border border-white/10 rounded-lg px-4 py-3 text-text-primary placeholder:text-text-dim focus:outline-none focus:border-gold/50"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full bg-bg-elevated border border-white/10 rounded-lg px-4 py-3 text-text-primary placeholder:text-text-dim focus:outline-none focus:border-gold/50"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Work Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-bg-elevated border border-white/10 rounded-lg px-4 py-3 text-text-primary placeholder:text-text-dim focus:outline-none focus:border-gold/50"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Company *</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-bg-elevated border border-white/10 rounded-lg px-4 py-3 text-text-primary placeholder:text-text-dim focus:outline-none focus:border-gold/50"
                      placeholder="Acme Corp"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Your Role *</label>
                    <select
                      required
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full bg-bg-elevated border border-white/10 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-gold/50"
                    >
                      <option value="">Select your role</option>
                      <option value="cs">Customer Success</option>
                      <option value="sales">Sales</option>
                      <option value="support">Support</option>
                      <option value="ops">Operations</option>
                      <option value="exec">Executive</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Team Size</label>
                    <select
                      value={formData.teamSize}
                      onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                      className="w-full bg-bg-elevated border border-white/10 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-gold/50"
                    >
                      <option value="">Select team size</option>
                      <option value="1-10">1-10</option>
                      <option value="11-50">11-50</option>
                      <option value="51-200">51-200</option>
                      <option value="201-500">201-500</option>
                      <option value="500+">500+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      What challenges are you looking to solve?
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full bg-bg-elevated border border-white/10 rounded-lg px-4 py-3 text-text-primary placeholder:text-text-dim focus:outline-none focus:border-gold/50 resize-none"
                      placeholder="Tell us about your current workflow and pain points..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold hover:bg-gold-light text-bg-main py-4 rounded-lg font-semibold transition-all gold-glow flex items-center justify-center gap-2"
                  >
                    Request Demo <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-text-dim text-xs text-center">
                    By submitting, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
