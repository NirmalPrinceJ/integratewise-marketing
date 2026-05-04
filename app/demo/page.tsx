// Auto-generated from HTML. Edit as needed.
export default function DemoPage() {
  return (
    <>
      &#123;/* Header */&#125;
          &#123;/* Header */&#125;
          &#123;/* Hero Section */&#125;
          <section id="demo-hero" className="relative pt-40 pb-16 px-6 overflow-hidden">
              <div className="absolute inset-0 hero-glow pointer-events-none"></div>
              <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] blob-bg blur-3xl pointer-events-none"></div>
              
              <div className="max-w-7xl mx-auto relative z-10">
                  <div className="max-w-3xl mx-auto text-center mb-12">
                      <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
                          <i className="fa-solid fa-calendar-check text-gold"></i>
                          <span className="text-gold text-sm">Book Your Demo</span>
                      </div>
                      
                      <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                          See Your Entity Memory<br />
                          <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                              In Action
                          </span>
                      </h1>
                      
                      <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
                          Join hundreds of teams who've stopped being the Human API. Get a personalized walkthrough of IntegrateWise tailored to your workflow.
                      </p>
                  </div>
      
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
                      <div className="glass-card rounded-xl p-6 text-center">
                          <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                              <i className="fa-solid fa-clock text-gold text-xl"></i>
                          </div>
                          <h3 className="font-semibold mb-2">30-Minute Session</h3>
                          <p className="text-sm text-text-dim">Focused walkthrough of your use case</p>
                      </div>
                      
                      <div className="glass-card rounded-xl p-6 text-center">
                          <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                              <i className="fa-solid fa-user-tie text-gold text-xl"></i>
                          </div>
                          <h3 className="font-semibold mb-2">Expert Guidance</h3>
                          <p className="text-sm text-text-dim">From former CSMs and operators</p>
                      </div>
                      
                      <div className="glass-card rounded-xl p-6 text-center">
                          <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                              <i className="fa-solid fa-gift text-gold text-xl"></i>
                          </div>
                          <h3 className="font-semibold mb-2">No Commitment</h3>
                          <p className="text-sm text-text-dim">14-day trial after demo, no card required</p>
                      </div>
                  </div>
              </div>
          </section>
      
          &#123;/* Contact Form Section */&#125;
          <section id="contact-form-section" className="py-16 px-6">
              <div className="max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                      <div id="form-container" className="form-container">
                          <div className="glass-card rounded-2xl p-10">
                              <h2 className="text-3xl font-bold mb-2">Tell Us About Your Needs</h2>
                              <p className="text-text-secondary mb-8">We'll customize the demo to your specific workflow and pain points.</p>
                              
                              <form id="demo-form" className="space-y-6">
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                      <div>
                                          <label className="text-sm font-medium text-text-secondary mb-2 block">Full Name *</label>
                                          <input type="text" required placeholder="Alex Rivera" className="w-full bg-bg-elevated border border-white/10 rounded-lg px-4 py-3 text-text-primary placeholder:text-text-dim transition-all focus:border-gold/50 focus:outline-none" />
                                      </div>
                                      
                                      <div>
                                          <label className="text-sm font-medium text-text-secondary mb-2 block">Work Email *</label>
                                          <input type="email" required placeholder="alex@company.com" className="w-full bg-bg-elevated border border-white/10 rounded-lg px-4 py-3 text-text-primary placeholder:text-text-dim transition-all focus:border-gold/50 focus:outline-none" />
                                      </div>
                                  </div>
                                  
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                      <div>
                                          <label className="text-sm font-medium text-text-secondary mb-2 block">Company Name *</label>
                                          <input type="text" required placeholder="Acme Corp" className="w-full bg-bg-elevated border border-white/10 rounded-lg px-4 py-3 text-text-primary placeholder:text-text-dim transition-all focus:border-gold/50 focus:outline-none" />
                                      </div>
                                      
                                      <div>
                                          <label className="text-sm font-medium text-text-secondary mb-2 block">Your Role *</label>
                                          <select required className="w-full bg-bg-elevated border border-white/10 rounded-lg px-4 py-3 text-text-primary transition-all focus:border-gold/50 focus:outline-none appearance-none">
                                              <option value="">Select your role</option>
                                              <option value="csm">Account Success Manager</option>
                                              <option value="ops">Business Ops</option>
                                              <option value="sales">Sales / Account Executive</option>
                                              <option value="support">Support Manager</option>
                                              <option value="founder">Founder / CEO</option>
                                              <option value="product">Product Manager</option>
                                              <option value="other">Other</option>
                                          </select>
                                      </div>
                                  </div>
                                  
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                      <div>
                                          <label className="text-sm font-medium text-text-secondary mb-2 block">Region *</label>
                                          <select required className="w-full bg-bg-elevated border border-white/10 rounded-lg px-4 py-3 text-text-primary transition-all focus:border-gold/50 focus:outline-none appearance-none">
                                              <option value="">Select region</option>
                                              <option value="india">India</option>
                                              <option value="gcc">GCC / Dubai</option>
                                              <option value="us">United States</option>
                                              <option value="europe">Europe</option>
                                              <option value="apac">Asia Pacific (Other)</option>
                                              <option value="other">Other</option>
                                          </select>
                                      </div>
                                      
                                      <div>
                                          <label className="text-sm font-medium text-text-secondary mb-2 block">Team Size</label>
                                          <select className="w-full bg-bg-elevated border border-white/10 rounded-lg px-4 py-3 text-text-primary transition-all focus:border-gold/50 focus:outline-none appearance-none">
                                              <option value="">Select team size</option>
                                              <option value="1-10">1-10</option>
                                              <option value="11-50">11-50</option>
                                              <option value="51-200">51-200</option>
                                              <option value="201-500">201-500</option>
                                              <option value="500+">500+</option>
                                          </select>
                                      </div>
                                  </div>
                                  
                                  <div>
                                      <label className="text-sm font-medium text-text-secondary mb-2 block">Primary Tools You Use</label>
                                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                          <label className="flex items-center gap-2 bg-bg-elevated border border-white/10 rounded-lg px-3 py-2 cursor-pointer hover:border-gold/30 transition-all">
                                              <input type="checkbox" className="rounded border-white/20 text-gold focus:ring-gold bg-transparent" />
                                              <span className="text-sm">Salesforce</span>
                                          </label>
                                          <label className="flex items-center gap-2 bg-bg-elevated border border-white/10 rounded-lg px-3 py-2 cursor-pointer hover:border-gold/30 transition-all">
                                              <input type="checkbox" className="rounded border-white/20 text-gold focus:ring-gold bg-transparent" />
                                              <span className="text-sm">HubSpot</span>
                                          </label>
                                          <label className="flex items-center gap-2 bg-bg-elevated border border-white/10 rounded-lg px-3 py-2 cursor-pointer hover:border-gold/30 transition-all">
                                              <input type="checkbox" className="rounded border-white/20 text-gold focus:ring-gold bg-transparent" />
                                              <span className="text-sm">Slack</span>
                                          </label>
                                          <label className="flex items-center gap-2 bg-bg-elevated border border-white/10 rounded-lg px-3 py-2 cursor-pointer hover:border-gold/30 transition-all">
                                              <input type="checkbox" className="rounded border-white/20 text-gold focus:ring-gold bg-transparent" />
                                              <span className="text-sm">Zendesk</span>
                                          </label>
                                          <label className="flex items-center gap-2 bg-bg-elevated border border-white/10 rounded-lg px-3 py-2 cursor-pointer hover:border-gold/30 transition-all">
                                              <input type="checkbox" className="rounded border-white/20 text-gold focus:ring-gold bg-transparent" />
                                              <span className="text-sm">Jira</span>
                                          </label>
                                          <label className="flex items-center gap-2 bg-bg-elevated border border-white/10 rounded-lg px-3 py-2 cursor-pointer hover:border-gold/30 transition-all">
                                              <input type="checkbox" className="rounded border-white/20 text-gold focus:ring-gold bg-transparent" />
                                              <span className="text-sm">Google Drive</span>
                                          </label>
                                      </div>
                                  </div>
                                  
                                  <div>
                                      <label className="text-sm font-medium text-text-secondary mb-2 block">What Solution Interests You? *</label>
                                      <select required className="w-full bg-bg-elevated border border-white/10 rounded-lg px-4 py-3 text-text-primary transition-all focus:border-gold/50 focus:outline-none appearance-none">
                                          <option value="">Select primary interest</option>
                                          <option value="account-success">Account Success & Retention</option>
                                          <option value="business-ops">Business Ops</option>
                                          <option value="sales-ops">Sales Operations</option>
                                          <option value="support-ops">Support Operations</option>
                                          <option value="personal">Personal Workspace</option>
                                          <option value="general">General Platform Overview</option>
                                      </select>
                                  </div>
                                  
                                  <div>
                                      <label className="text-sm font-medium text-text-secondary mb-2 block">Tell Us More (Optional)</label>
                                      <textarea rows={4} placeholder="What specific challenges are you facing? What made you interested in IntegrateWise?" className="w-full bg-bg-elevated border border-white/10 rounded-lg px-4 py-3 text-text-primary placeholder:text-text-dim transition-all resize-none focus:border-gold/50 focus:outline-none"></textarea>
                                  </div>
                                  
                                  <div className="bg-bg-elevated/50 border border-white/5 rounded-lg p-4">
                                      <label className="flex items-start gap-3 cursor-pointer">
                                          <input type="checkbox" required className="mt-1 rounded border-white/20 text-gold focus:ring-gold bg-transparent" />
                                          <span className="text-sm text-text-secondary leading-relaxed">
                                              I agree to IntegrateWise's <a href="#" className="text-gold hover:underline">Privacy Policy</a> and <a href="#" className="text-gold hover:underline">Terms of Service</a>. I consent to receiving product updates and relevant communications.
                                          </span>
                                      </label>
                                  </div>
                                  
                                  <button type="submit" className="w-full bg-gold hover:bg-gold-light text-bg-main px-8 py-4 rounded-lg text-lg font-semibold transition-all gold-glow flex items-center justify-center gap-2">
                                      <i className="fa-solid fa-paper-plane"></i>
                                      Submit & Book Demo
                                  </button>
                                  
                                  <p className="text-xs text-text-dim text-center">
                                      Your information is secure and will never be shared. We typically respond within 2 hours during business hours.
                                  </p>
                              </form>
                          </div>
                      </div>
      
                      <div id="success-message" className="hidden form-success">
                          <div className="glass-card rounded-2xl p-12 text-center h-full flex flex-col justify-center">
                              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                  <i className="fa-solid fa-circle-check text-green-400 text-5xl"></i>
                              </div>
                              
                              <h2 className="text-4xl font-bold mb-4">Request Received!</h2>
                              <p className="text-lg text-text-secondary mb-8 max-w-md mx-auto">
                                  Thank you for your interest in IntegrateWise. Our team will reach out within 2 hours to schedule your personalized demo.
                              </p>
                              
                              <div className="bg-bg-elevated/50 border border-white/5 rounded-xl p-6 mb-8">
                                  <h3 className="font-semibold mb-3 flex items-center justify-center gap-2">
                                      <i className="fa-solid fa-envelope text-gold"></i>
                                      Check Your Email
                                  </h3>
                                  <p className="text-sm text-text-dim">
                                      We've sent a confirmation to your inbox with next steps and a calendar link to schedule your demo at your convenience.
                                  </p>
                              </div>
                              
                              <div className="space-y-3">
                                  <a href="#" className="block bg-gold hover:bg-gold-light text-bg-main px-8 py-3 rounded-lg font-semibold transition-all gold-glow">
                                      Schedule Demo Now
                                  </a>
                                  <a href="#" className="block text-text-secondary hover:text-gold transition-colors">
                                      Return to Homepage
                                  </a>
                              </div>
                          </div>
                      </div>
      
                      <div className="space-y-6">
                          <div className="glass-card rounded-2xl p-8">
                              <h3 className="text-2xl font-bold mb-6">What to Expect</h3>
                              
                              <div className="space-y-6">
                                  <div className="flex items-start gap-4">
                                      <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                                          <span className="text-gold font-bold">1</span>
                                      </div>
                                      <div>
                                          <h4 className="font-semibold mb-1">Understand Your Workflow</h4>
                                          <p className="text-sm text-text-dim">We'll start by discussing your current tools, pain points, and what you're trying to achieve.</p>
                                      </div>
                                  </div>
                                  
                                  <div className="flex items-start gap-4">
                                      <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                                          <span className="text-gold font-bold">2</span>
                                      </div>
                                      <div>
                                          <h4 className="font-semibold mb-1">Live Platform Walkthrough</h4>
                                          <p className="text-sm text-text-dim">See IntegrateWise in action with real examples tailored to your use case and industry.</p>
                                      </div>
                                  </div>
                                  
                                  <div className="flex items-start gap-4">
                                      <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                                          <span className="text-gold font-bold">3</span>
                                      </div>
                                      <div>
                                          <h4 className="font-semibold mb-1">Custom Implementation Plan</h4>
                                          <p className="text-sm text-text-dim">We'll outline exactly how IntegrateWise would integrate with your existing stack.</p>
                                      </div>
                                  </div>
                                  
                                  <div className="flex items-start gap-4">
                                      <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                                          <span className="text-gold font-bold">4</span>
                                      </div>
                                      <div>
                                          <h4 className="font-semibold mb-1">Q&A & Next Steps</h4>
                                          <p className="text-sm text-text-dim">Ask anything. We'll discuss pricing, timeline, and how to get started with a trial.</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
      
                          <div className="glass-card rounded-2xl p-8">
                              <h3 className="text-xl font-bold mb-4">Trusted By Leading Teams</h3>
                              
                              <div className="space-y-4">
                                  <div className="flex items-start gap-3">
                                      <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg" className="w-10 h-10 rounded-full" alt="Customer" />
                                      <div>
                                          <p className="text-sm text-text-secondary italic mb-2">
                                              "The demo showed exactly how IntegrateWise would solve our context-switching nightmare. We signed up immediately."
                                          </p>
                                          <p className="text-xs text-text-dim">— Sarah Chen, VP Operations at TechFlow</p>
                                      </div>
                                  </div>
                                  
                                  <div className="flex items-start gap-3">
                                      <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg" className="w-10 h-10 rounded-full" alt="Customer" />
                                      <div>
                                          <p className="text-sm text-text-secondary italic mb-2">
                                              "Within 30 minutes, I understood how much time we were wasting. IntegrateWise paid for itself in week one."
                                          </p>
                                          <p className="text-xs text-text-dim">— Marcus Johnson, Head of CS at ScaleUp Inc</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
      
                          <div className="glass-card rounded-2xl p-8 bg-gradient-to-br from-gold/5 to-transparent border-gold/20">
                              <div className="flex items-center gap-3 mb-4">
                                  <i className="fa-solid fa-shield-halved text-gold text-2xl"></i>
                                  <h3 className="text-xl font-bold">Your Privacy Matters</h3>
                              </div>
                              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                                  Your data is encrypted, never shared, and you can request deletion at any time. We're SOC 2 Type II certified and GDPR compliant.
                              </p>
                              <a href="#" className="text-sm text-gold hover:underline flex items-center gap-2">
                                  Read our Privacy Policy <i className="fa-solid fa-arrow-right text-xs"></i>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      
          &#123;/* Calendar Option Section */&#125;
          <section id="calendar-option" className="py-16 px-6 bg-bg-secondary/30">
              <div className="max-w-5xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-4">Prefer to Schedule Directly?</h2>
                  <p className="text-lg text-text-secondary mb-12">
                      Pick a time that works for you on our calendar. No form required.
                  </p>
                  
                  <div className="glass-card rounded-2xl p-8 min-h-[600px] flex items-center justify-center border border-white/5">
                      <div className="text-center">
                          <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                              <i className="fa-solid fa-calendar-days text-gold text-3xl"></i>
                          </div>
                          <h3 className="text-xl font-semibold mb-3">Calendar Integration</h3>
                          <p className="text-text-dim mb-6 max-w-md mx-auto">
                              In a live environment, this would display an embedded Calendly or similar scheduling widget for instant booking.
                          </p>
                          <button className="bg-gold hover:bg-gold-light text-bg-main px-8 py-3 rounded-lg font-semibold transition-all gold-glow">
                              Open Calendar
                          </button>
                      </div>
                  </div>
              </div>
          </section>
      
          &#123;/* Alternative Contact Section */&#125;
          <section id="alternative-contact" className="py-16 px-6">
              <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-12">
                      <h2 className="text-3xl font-bold mb-4">Other Ways to Connect</h2>
                      <p className="text-lg text-text-secondary">Choose the method that works best for you</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="glass-card rounded-2xl p-8 text-center hover:border-gold/30 transition-all">
                          <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                              <i className="fa-solid fa-envelope text-gold text-3xl"></i>
                          </div>
                          <h3 className="text-xl font-bold mb-3">Email Us</h3>
                          <p className="text-sm text-text-dim mb-6">
                              Send us an email and we'll respond within 2 business hours
                          </p>
                          <a href="mailto:demo@integratewise.com" className="text-gold hover:underline font-medium">
                              demo@integratewise.com
                          </a>
                      </div>
                      
                      <div className="glass-card rounded-2xl p-8 text-center hover:border-gold/30 transition-all">
                          <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                              <i className="fa-solid fa-phone text-gold text-3xl"></i>
                          </div>
                          <h3 className="text-xl font-bold mb-3">Call Sales</h3>
                          <p className="text-sm text-text-dim mb-6">
                              Speak directly with our sales team during business hours
                          </p>
                          <a href="tel:+18885551234" className="text-gold hover:underline font-medium">
                              +1 (888) 555-1234
                          </a>
                      </div>
                      
                      <div className="glass-card rounded-2xl p-8 text-center hover:border-gold/30 transition-all">
                          <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                              <i className="fa-brands fa-slack text-gold text-3xl"></i>
                          </div>
                          <h3 className="text-xl font-bold mb-3">Join Our Community</h3>
                          <p className="text-sm text-text-dim mb-6">
                              Chat with our team and other users in our Slack workspace
                          </p>
                          <a href="#" className="inline-flex items-center gap-2 text-gold hover:underline font-medium">
                              Join Slack <i className="fa-solid fa-arrow-right text-xs"></i>
                          </a>
                      </div>
                  </div>
              </div>
          </section>
      
          &#123;/* FAQ Section */&#125;
          <section id="faq-section" className="py-16 px-6 bg-bg-secondary/30">
              <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-12">
                      <h2 className="text-3xl font-bold mb-4">Common Questions</h2>
                      <p className="text-lg text-text-secondary">Everything you need to know before your demo</p>
                  </div>
                  
                  <div className="space-y-4">
                      <div className="glass-card rounded-xl p-6">
                          <h3 className="font-semibold mb-2 flex items-center gap-2">
                              <i className="fa-solid fa-circle-question text-gold"></i>
                              How long is the demo?
                          </h3>
                          <p className="text-sm text-text-dim pl-7">
                              Typically 30 minutes, but we're flexible. If you need more time to explore specific features or discuss your use case in depth, we're happy to extend.
                          </p>
                      </div>
                      
                      <div className="glass-card rounded-xl p-6">
                          <h3 className="font-semibold mb-2 flex items-center gap-2">
                              <i className="fa-solid fa-circle-question text-gold"></i>
                              Do I need to prepare anything?
                          </h3>
                          <p className="text-sm text-text-dim pl-7">
                              No preparation needed! Just come with your questions and pain points. If you want to share specific workflows or tool configurations, that helps us customize the demo.
                          </p>
                      </div>
                      
                      <div className="glass-card rounded-xl p-6">
                          <h3 className="font-semibold mb-2 flex items-center gap-2">
                              <i className="fa-solid fa-circle-question text-gold"></i>
                              Can I try IntegrateWise before committing?
                          </h3>
                          <p className="text-sm text-text-dim pl-7">
                              Absolutely. After the demo, you can start a 14-day free trial with no credit card required. We'll help you connect your tools and see real value immediately.
                          </p>
                      </div>
                      
                      <div className="glass-card rounded-xl p-6">
                          <h3 className="font-semibold mb-2 flex items-center gap-2">
                              <i className="fa-solid fa-circle-question text-gold"></i>
                              Is my data safe during the demo?
                          </h3>
                          <p className="text-sm text-text-dim pl-7">
                              We use demo environments with sample data. Your actual business data is never touched until you're ready to start a trial on your terms.
                          </p>
                      </div>
                      
                      <div className="glass-card rounded-xl p-6">
                          <h3 className="font-semibold mb-2 flex items-center gap-2">
                              <i className="fa-solid fa-circle-question text-gold"></i>
                              What if I'm not technical?
                          </h3>
                          <p className="text-sm text-text-dim pl-7">
                              Perfect! IntegrateWise is built for operators, not engineers. Our demos are designed for CSMs, ops teams, and business leaders—no technical knowledge required.
                          </p>
                      </div>
                  </div>
              </div>
          </section>
      
          &#123;/* Footer */&#125;
    </>
  )
}
