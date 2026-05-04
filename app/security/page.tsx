import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function SecurityPage() {
  const certifications = [
    { icon: "fa-shield", label: "SOC 2 Type II", description: "Enterprise-grade security certified" },
    { icon: "fa-lock", label: "ISO 27001", description: "Information security management" },
    { icon: "fa-server", label: "GDPR Compliant", description: "EU data protection standards" },
    { icon: "fa-shield-halved", label: "HIPAA Ready", description: "Healthcare data protection" },
  ]

  const securityFeatures = [
    {
      title: "End-to-End Encryption",
      description: "All data encrypted in transit (TLS 1.3) and at rest (AES-256)"
    },
    {
      title: "Role-Based Access Control",
      description: "Granular permissions and multi-level authorization"
    },
    {
      title: "Regular Security Audits",
      description: "Third-party penetration testing and vulnerability assessments"
    },
    {
      title: "Secure Authentication",
      description: "Multi-factor authentication (MFA) and SSO support"
    },
    {
      title: "Data Residency Options",
      description: "EU, US, and Asia Pacific region hosting available"
    },
    {
      title: "Audit Logging",
      description: "Complete activity logs for compliance and forensics"
    }
  ]

  return (
    <div className="min-h-screen bg-bg-main">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="relative pt-40 pb-24 px-6 overflow-hidden min-h-[600px] flex items-center">
          <div className="absolute inset-0 hero-glow pointer-events-none"></div>
          <div className="absolute top-20 right-1/4 w-[600px] h-[600px] blob-bg blur-3xl pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto relative z-10 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
              <i className="fa-solid fa-shield-halved text-green-400"></i>
              <span className="text-green-300 text-sm">Security & Compliance</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Enterprise-Grade<br/>
              <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                Security Built In
              </span>
            </h1>
            
            <p className="text-xl text-text-secondary mb-12 leading-relaxed">
              Your data security is our top priority. IntegrateWise is built on industry-leading security practices with full compliance certifications.
            </p>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-24 px-6 bg-bg-secondary/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Trusted Certifications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {certifications.map((cert) => (
                <div key={cert.label} className="glass-card rounded-xl p-6 text-center backdrop-blur-xl border border-white/5">
                  <div className="w-16 h-16 bg-green-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-green-500/20">
                    <i className={`fa-solid ${cert.icon} text-green-400 text-3xl`}></i>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{cert.label}</h3>
                  <p className="text-text-dim text-sm">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-16">Security Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityFeatures.map((feature) => (
                <div key={feature.title} className="glass-card rounded-xl p-6 backdrop-blur-xl border border-white/5 hover:border-gold/20 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                      <i className="fa-solid fa-check text-gold"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                      <p className="text-text-secondary">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Contacts */}
        <section className="py-24 px-6 bg-bg-secondary/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Security Questions?</h2>
            <p className="text-xl text-text-secondary mb-12">
              Our security team is available to discuss your compliance requirements and answer any questions.
            </p>
            
            <div className="glass-card rounded-xl p-8 backdrop-blur-xl border border-white/5 text-left">
              <h3 className="font-bold text-lg mb-4">Contact Our Security Team</h3>
              <div className="space-y-3">
                <p className="text-text-secondary">
                  <span className="font-semibold text-text-primary">Email:</span> security@integratewise.com
                </p>
                <p className="text-text-secondary">
                  <span className="font-semibold text-text-primary">Responsible Disclosure:</span> security@integratewise.com
                </p>
                <p className="text-text-secondary">
                  <span className="font-semibold text-text-primary">ISO/IEC 27001:</span> Annually certified
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
