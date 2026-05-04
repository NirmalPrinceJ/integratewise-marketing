'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior Full-Stack Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Help us build the platform that connects every business system together.",
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Lead the product vision for one of our core solutions.",
    },
    {
      title: "Sales Engineer",
      department: "Sales",
      location: "Remote",
      type: "Full-time",
      description: "Work with enterprise customers to implement IntegrateWise.",
    },
    {
      title: "Customer Success Manager",
      department: "Success",
      location: "Remote",
      type: "Full-time",
      description: "Ensure our customers achieve success with the platform.",
    },
    {
      title: "AI/ML Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Build the next generation of AI-powered features.",
    },
    {
      title: "Design Lead",
      department: "Design",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Shape the visual and interaction design of our platform.",
    },
  ]

  const values = [
    { title: "Ship Fast", description: "We move quickly and iterate constantly" },
    { title: "Users First", description: "Everything we build is for our users" },
    { title: "Be Honest", description: "We communicate clearly and directly" },
    { title: "Grow Together", description: "We invest in each other's growth" },
  ]

  return (
    <div className="min-h-screen bg-bg-main">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-40 px-6 overflow-hidden min-h-[600px] flex items-center">
          <div className="absolute inset-0 hero-glow pointer-events-none"></div>
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] blob-bg blur-3xl pointer-events-none"></div>

          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Join Our
                <br />
                <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                  Mission
                </span>
              </h1>

              <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
                Help us build the unified intelligence platform that transforms how organizations work. We&apos;re hiring talented people across engineering, product, design, and operations.
              </p>

              <div className="flex items-center justify-center gap-4">
                <a
                  href="#openings"
                  className="bg-gold hover:bg-gold-light text-bg-main px-10 py-4 rounded-lg font-semibold transition-all gold-glow transform hover:scale-105"
                >
                  View Open Roles
                </a>
                <a
                  href="/company/about"
                  className="glass-card px-10 py-4 rounded-lg font-semibold hover:border-gold/30 transition-all"
                >
                  Learn About Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 px-6 bg-bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4 text-text-primary">Our Values</h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                These values guide everything we do, from how we work to how we treat each other.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-8 backdrop-blur-xl border border-white/5 hover:border-gold/20 transition-all text-center"
                >
                  <h3 className="text-2xl font-bold mb-3 text-text-primary">{value.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="openings" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4 text-text-primary">We&apos;re Hiring</h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Check out our current open positions and join our growing team.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {openPositions.map((position, index) => (
                <motion.div
                  key={position.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="glass-card rounded-2xl p-8 backdrop-blur-xl border border-white/5 hover:border-gold/20 hover:bg-white/5 transition-all cursor-pointer group"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-gold transition-colors">
                        {position.title}
                      </h3>
                      <p className="text-text-secondary mb-4">{position.description}</p>
                      <div className="flex flex-wrap gap-3">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-300">
                          <i className="fa-solid fa-code text-xs"></i>
                          {position.department}
                        </span>
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm text-purple-300">
                          <i className="fa-solid fa-map-pin text-xs"></i>
                          {position.location}
                        </span>
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 border border-gold/20 rounded-full text-sm text-gold">
                          <i className="fa-solid fa-briefcase text-xs"></i>
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <div className="md:text-right">
                      <a
                        href={`mailto:careers@integratewise.com?subject=${encodeURIComponent(`Application: ${position.title}`)}`}
                        className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-semibold transition-colors"
                      >
                        Apply Now
                        <i className="fa-solid fa-arrow-right text-sm"></i>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-16">
              <p className="text-text-secondary mb-4">
                Don&apos;t see a position that fits? We&apos;re always interested in hearing from talented people.
              </p>
              <a
                href="mailto:careers@integratewise.com"
                className="text-gold hover:text-gold-light font-semibold"
              >
                Send us your resume
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-bg-secondary/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-text-primary mb-6">Ready to make an impact?</h2>
            <p className="text-text-secondary text-lg mb-8">
              Help us build the future of unified intelligence. Apply now or reach out if you have questions.
            </p>
            <a
              href="mailto:careers@integratewise.com"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-bg-main px-8 py-4 rounded-lg font-semibold transition-all gold-glow"
            >
              Get In Touch <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
