// Auto-generated from HTML. Edit as needed.
export default function PricingPage() {
  return (
    <>
      &#123;/* Global Header */&#125;
          &#123;/* Main Content Area */&#125;
          <main className="flex-1 pt-20 relative z-10 flex flex-col w-full">
              
              &#123;/* Pricing Hero Section */&#125;
              <section id="pricing-hero" className="pt-24 pb-16 px-6 md:px-12 relative overflow-hidden flex flex-col items-center justify-center text-center">
                  <div className="absolute inset-0 bg-hero-glow opacity-30 pointer-events-none"></div>
                  <div className="max-w-4xl mx-auto relative z-10 w-full">
                      <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6 tracking-tight">
                          Plans & Pricing
                      </h1>
                      <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-12">
                          Governed entity memory that scales with your business. Choose the level of control and continuity you need.
                      </p>
                      
                      &#123;/* Toggle Controls (Monthly/Annual & Users) */&#125;
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16">
                          &#123;/* User Slider */&#125;
                          <div className="flex items-center gap-4 bg-background-elevated/50 border border-ui-border rounded-xl p-2 px-4 backdrop-blur-sm">
                              <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Users</span>
                              <div className="flex items-center gap-3">
                                  <button className="w-6 h-6 rounded bg-background-main border border-ui-border flex items-center justify-center text-text-secondary hover:text-text-primary"><i className="fa-solid fa-minus text-[10px]"></i></button>
                                  <span className="text-sm font-medium w-8 text-center text-text-primary">20</span>
                                  <button className="w-6 h-6 rounded bg-background-main border border-ui-border flex items-center justify-center text-text-secondary hover:text-text-primary"><i className="fa-solid fa-plus text-[10px]"></i></button>
                              </div>
                          </div>
                          
                          &#123;/* Billing Toggle */&#125;
                          <div className="flex items-center gap-2 bg-background-elevated/50 border border-ui-border rounded-xl p-1 backdrop-blur-sm">
                              <button className="px-4 py-2 rounded-lg text-xs font-semibold text-text-secondary hover:text-text-primary transition-colors">Monthly</button>
                              <button className="px-4 py-2 rounded-lg bg-background-main border border-ui-border text-xs font-semibold text-text-primary shadow-sm transition-colors relative">
                                  Annual <span className="absolute -top-2 -right-2 bg-brand-gold text-background-main text-[9px] px-1.5 py-0.5 rounded font-bold">SAVE 20%</span>
                              </button>
                          </div>
                      </div>
                  </div>
              </section>
      
              &#123;/* Pricing Tiers Grid */&#125;
              <section id="pricing-tiers" className="px-6 md:px-12 pb-24 relative z-10 max-w-[1440px] mx-auto w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      
                      &#123;/* Starter Tier */&#125;
                      <div className="glass-panel rounded-[14px] border border-ui-border p-8 flex flex-col relative overflow-hidden group hover:border-brand-gold/30 transition-all duration-300 shadow-card">
                          <div className="mb-6">
                              <h3 className="text-xl font-semibold text-text-primary mb-2">Starter</h3>
                              <p className="text-xs text-text-secondary h-10">Essential context capture for small teams.</p>
                          </div>
                          
                          <div className="mb-8">
                              <div className="flex items-baseline gap-1">
                                  <span className="text-4xl font-bold text-text-primary">$49</span>
                                  <span className="text-sm text-text-secondary">/mo</span>
                              </div>
                              <p className="text-[10px] text-text-secondary mt-1">per user, billed annually</p>
                          </div>
                          
                          <button className="w-full py-3 rounded-lg bg-background-elevated border border-ui-border text-sm font-medium text-text-primary hover:bg-background-elevated/80 transition-colors mb-8">
                              Get Started
                          </button>
                          
                          <div className="space-y-4 flex-1">
                              <p className="text-xs font-semibold text-text-primary mb-4">Includes:</p>
                              <ul className="space-y-3">
                                  <li className="flex items-start gap-3 text-sm text-text-secondary">
                                      <i className="fa-solid fa-check text-brand-gold text-xs mt-1"></i>
                                      <span>Up to 5 Connectors</span>
                                  </li>
                                  <li className="flex items-start gap-3 text-sm text-text-secondary">
                                      <i className="fa-solid fa-check text-brand-gold text-xs mt-1"></i>
                                      <span>Basic Entity 360 View</span>
                                  </li>
                                  <li className="flex items-start gap-3 text-sm text-text-secondary">
                                      <i className="fa-solid fa-check text-brand-gold text-xs mt-1"></i>
                                      <span>Standard Twin Insights</span>
                                  </li>
                                  <li className="flex items-start gap-3 text-sm text-text-secondary">
                                      <i className="fa-solid fa-check text-brand-gold text-xs mt-1"></i>
                                      <span>1 Workspace</span>
                                  </li>
                              </ul>
                          </div>
                      </div>
      
                      &#123;/* Team Tier */&#125;
                      <div className="glass-panel rounded-[14px] border border-ui-border p-8 flex flex-col relative overflow-hidden group hover:border-brand-gold/30 transition-all duration-300 shadow-card">
                          <div className="mb-6">
                              <h3 className="text-xl font-semibold text-text-primary mb-2">Team</h3>
                              <p className="text-xs text-text-secondary h-10">Automated workflows and shared memory.</p>
                          </div>
                          
                          <div className="mb-8">
                              <div className="flex items-baseline gap-1">
                                  <span className="text-4xl font-bold text-text-primary">$99</span>
                                  <span className="text-sm text-text-secondary">/mo</span>
                              </div>
                              <p className="text-[10px] text-text-secondary mt-1">per user, billed annually</p>
                          </div>
                          
                          <button className="w-full py-3 rounded-lg bg-background-elevated border border-ui-border text-sm font-medium text-text-primary hover:bg-background-elevated/80 transition-colors mb-8">
                              Start Free Trial
                          </button>
                          
                          <div className="space-y-4 flex-1">
                              <p className="text-xs font-semibold text-text-primary mb-4">Everything in Starter, plus:</p>
                              <ul className="space-y-3">
                                  <li className="flex items-start gap-3 text-sm text-text-secondary">
                                      <i className="fa-solid fa-check text-brand-gold text-xs mt-1"></i>
                                      <span>Up to 20 Connectors</span>
                                  </li>
                                  <li className="flex items-start gap-3 text-sm text-text-secondary">
                                      <i className="fa-solid fa-check text-brand-gold text-xs mt-1"></i>
                                      <span>Automated Flows</span>
                                  </li>
                                  <li className="flex items-start gap-3 text-sm text-text-secondary">
                                      <i className="fa-solid fa-check text-brand-gold text-xs mt-1"></i>
                                      <span>Basic Approval Governance</span>
                                  </li>
                                  <li className="flex items-start gap-3 text-sm text-text-secondary">
                                      <i className="fa-solid fa-check text-brand-gold text-xs mt-1"></i>
                                      <span>3 Workspaces</span>
                                  </li>
                              </ul>
                          </div>
                      </div>
      
                      &#123;/* Business Tier (Recommended) */&#125;
                      <div className="bg-background-elevated rounded-[14px] border border-brand-gold/50 p-8 flex flex-col relative overflow-hidden group shadow-[0_0_30px_rgba(212,175,55,0.15)] transform md:-translate-y-4 z-20">
                          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-goldLight to-brand-gold"></div>
                          <div className="absolute top-4 right-4 bg-brand-gold/10 text-brand-gold text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider border border-brand-gold/20">Recommended</div>
                          
                          <div className="mb-6 mt-2">
                              <h3 className="text-xl font-semibold text-text-primary mb-2">Business</h3>
                              <p className="text-xs text-text-secondary h-10">Advanced reasoning and full governance.</p>
                          </div>
                          
                          <div className="mb-8">
                              <div className="flex items-baseline gap-1">
                                  <span className="text-4xl font-bold text-text-primary">$199</span>
                                  <span className="text-sm text-text-secondary">/mo</span>
                              </div>
                              <p className="text-[10px] text-text-secondary mt-1">per user, billed annually</p>
                          </div>
                          
                          <button className="w-full py-3 rounded-lg bg-brand-gold text-background-main text-sm font-semibold hover:bg-brand-goldLight transition-colors mb-8 shadow-hover-glow">
                              Get Started
                          </button>
                          
                          <div className="space-y-4 flex-1">
                              <p className="text-xs font-semibold text-text-primary mb-4">Everything in Team, plus:</p>
                              <ul className="space-y-3">
                                  <li className="flex items-start gap-3 text-sm text-text-secondary">
                                      <i className="fa-solid fa-check text-brand-gold text-xs mt-1"></i>
                                      <span>Unlimited Connectors</span>
                                  </li>
                                  <li className="flex items-start gap-3 text-sm text-text-secondary">
                                      <i className="fa-solid fa-check text-brand-gold text-xs mt-1"></i>
                                      <span>Custom Twin Training</span>
                                  </li>
                                  <li className="flex items-start gap-3 text-sm text-text-secondary">
                                      <i className="fa-solid fa-check text-brand-gold text-xs mt-1"></i>
                                      <span>Advanced Audit Logs</span>
                                  </li>
                                  <li className="flex items-start gap-3 text-sm text-text-secondary">
                                      <i className="fa-solid fa-check text-brand-gold text-xs mt-1"></i>
                                      <span>Unlimited Workspaces</span>
                                  </li>
                                  <li className="flex items-start gap-3 text-sm text-text-secondary">
                                      <i className="fa-solid fa-check text-brand-gold text-xs mt-1"></i>
                                      <span>SSO Integration</span>
                                  </li>
                              </ul>
                          </div>
                      </div>
      
                      &#123;/* Enterprise Tier */&#125;
                      <div className="bg-background-main rounded-[14px] border border-ui-border p-8 flex flex-col relative overflow-hidden group shadow-card">
                          <div className="mb-6">
                              <h3 className="text-xl font-semibold text-text-primary mb-2">Enterprise</h3>
                              <p className="text-xs text-text-secondary h-10">Dedicated infrastructure and custom intelligence.</p>
                          </div>
                          
                          <div className="mb-8">
                              <div className="flex items-baseline gap-1">
                                  <span className="text-4xl font-bold text-text-primary">Custom</span>
                              </div>
                              <p className="text-[10px] text-text-secondary mt-1">Tailored to your organization</p>
                          </div>
                          
                          <button className="w-full py-3 rounded-lg bg-background-elevated border border-ui-border text-sm font-medium text-text-primary hover:bg-background-elevated/80 transition-colors mb-8">
                              Book a Demo
                          </button>
                          
                          <div className="space-y-4 flex-1">
                              <p className="text-xs font-semibold text-text-primary mb-4">Everything in Business, plus:</p>
                              <ul className="space-y-3">
                                  <li className="flex items-start gap-3 text-sm text-text-secondary">
                                      <i className="fa-solid fa-check text-brand-gold text-xs mt-1"></i>
                                      <span>Private Data Instance</span>
                                  </li>
                                  <li className="flex items-start gap-3 text-sm text-text-secondary">
                                      <i className="fa-solid fa-check text-brand-gold text-xs mt-1"></i>
                                      <span>Swappable LLM Models</span>
                                  </li>
                                  <li className="flex items-start gap-3 text-sm text-text-secondary">
                                      <i className="fa-solid fa-check text-brand-gold text-xs mt-1"></i>
                                      <span>Custom API Integrations</span>
                                  </li>
                                  <li className="flex items-start gap-3 text-sm text-text-secondary">
                                      <i className="fa-solid fa-check text-brand-gold text-xs mt-1"></i>
                                      <span>Dedicated Success Manager</span>
                                  </li>
                                  <li className="flex items-start gap-3 text-sm text-text-secondary">
                                      <i className="fa-solid fa-check text-brand-gold text-xs mt-1"></i>
                                      <span>SLA Guarantees</span>
                                  </li>
                              </ul>
                          </div>
                      </div>
                      
                  </div>
              </section>
      
              &#123;/* Feature Comparison Table */&#125;
              <section id="compare-plans" className="px-6 md:px-12 py-24 relative z-10 max-w-[1200px] mx-auto w-full">
                  <div className="mb-12 text-center">
                      <h2 className="text-3xl font-bold text-text-primary mb-4">Compare Plans in Detail</h2>
                      <p className="text-sm text-text-secondary max-w-2xl mx-auto">See exactly what is included in each tier to find the right fit for your knowledge architecture.</p>
                  </div>
                  
                  <div className="glass-panel rounded-2xl border border-ui-border overflow-hidden shadow-card">
                      <div className="overflow-x-auto">
                          <table className="w-full text-left border-collapse min-w-[800px]">
                              <thead>
                                  <tr className="border-b border-ui-border bg-background-secondary/50 sticky top-0 z-10">
                                      <th className="p-6 text-xs font-semibold text-text-secondary uppercase tracking-wider w-1/3">Features</th>
                                      <th className="p-6 text-sm font-semibold text-text-primary text-center w-1/6">Starter</th>
                                      <th className="p-6 text-sm font-semibold text-text-primary text-center w-1/6">Team</th>
                                      <th className="p-6 text-sm font-semibold text-brand-gold text-center w-1/6 bg-brand-gold/5">Business</th>
                                      <th className="p-6 text-sm font-semibold text-text-primary text-center w-1/6">Enterprise</th>
                                  </tr>
                              </thead>
                              <tbody className="text-sm">
                                  
                                  &#123;/* Category: Core Platform */&#125;
                                  <tr className="bg-background-elevated/30 border-b border-ui-border/50">
                                      <td colSpan={5} className="px-6 py-3 text-xs font-semibold text-text-primary uppercase tracking-wider">Core Platform</td>
                                  </tr>
                                  <tr className="border-b border-ui-border/30 hover:bg-background-elevated/20 transition-colors">
                                      <td className="px-6 py-4 text-text-secondary">Data Connectors</td>
                                      <td className="px-6 py-4 text-center text-text-primary">Up to 5</td>
                                      <td className="px-6 py-4 text-center text-text-primary">Up to 20</td>
                                      <td className="px-6 py-4 text-center text-text-primary bg-brand-gold/5">Unlimited</td>
                                      <td className="px-6 py-4 text-center text-text-primary">Unlimited</td>
                                  </tr>
                                  <tr className="border-b border-ui-border/30 hover:bg-background-elevated/20 transition-colors">
                                      <td className="px-6 py-4 text-text-secondary">Workspaces</td>
                                      <td className="px-6 py-4 text-center text-text-primary">1</td>
                                      <td className="px-6 py-4 text-center text-text-primary">3</td>
                                      <td className="px-6 py-4 text-center text-text-primary bg-brand-gold/5">Unlimited</td>
                                      <td className="px-6 py-4 text-center text-text-primary">Unlimited</td>
                                  </tr>
                                  <tr className="border-b border-ui-border/30 hover:bg-background-elevated/20 transition-colors">
                                      <td className="px-6 py-4 text-text-secondary">Entity 360 View</td>
                                      <td className="px-6 py-4 text-center"><i className="fa-solid fa-circle-check text-brand-gold"></i></td>
                                      <td className="px-6 py-4 text-center"><i className="fa-solid fa-circle-check text-brand-gold"></i></td>
                                      <td className="px-6 py-4 text-center bg-brand-gold/5"><i className="fa-solid fa-circle-check text-brand-gold"></i></td>
                                      <td className="px-6 py-4 text-center"><i className="fa-solid fa-circle-check text-brand-gold"></i></td>
                                  </tr>
      
                                  &#123;/* Category: Intelligence */&#125;
                                  <tr className="bg-background-elevated/30 border-b border-ui-border/50">
                                      <td colSpan={5} className="px-6 py-3 text-xs font-semibold text-text-primary uppercase tracking-wider">Twin</td>
                                  </tr>
                                  <tr className="border-b border-ui-border/30 hover:bg-background-elevated/20 transition-colors">
                                      <td className="px-6 py-4 text-text-secondary">Twin Insights</td>
                                      <td className="px-6 py-4 text-center text-text-primary">Standard</td>
                                      <td className="px-6 py-4 text-center text-text-primary">Advanced</td>
                                      <td className="px-6 py-4 text-center text-text-primary bg-brand-gold/5">Custom Trained</td>
                                      <td className="px-6 py-4 text-center text-text-primary">Custom Trained</td>
                                  </tr>
                                  <tr className="border-b border-ui-border/30 hover:bg-background-elevated/20 transition-colors">
                                      <td className="px-6 py-4 text-text-secondary">Automated Flows</td>
                                      <td className="px-6 py-4 text-center text-ui-border"><i className="fa-solid fa-minus"></i></td>
                                      <td className="px-6 py-4 text-center"><i className="fa-solid fa-circle-check text-brand-gold"></i></td>
                                      <td className="px-6 py-4 text-center bg-brand-gold/5"><i className="fa-solid fa-circle-check text-brand-gold"></i></td>
                                      <td className="px-6 py-4 text-center"><i className="fa-solid fa-circle-check text-brand-gold"></i></td>
                                  </tr>
                                  <tr className="border-b border-ui-border/30 hover:bg-background-elevated/20 transition-colors">
                                      <td className="px-6 py-4 text-text-secondary">Swappable Models</td>
                                      <td className="px-6 py-4 text-center text-ui-border"><i className="fa-solid fa-minus"></i></td>
                                      <td className="px-6 py-4 text-center text-ui-border"><i className="fa-solid fa-minus"></i></td>
                                      <td className="px-6 py-4 text-center text-ui-border bg-brand-gold/5"><i className="fa-solid fa-minus"></i></td>
                                      <td className="px-6 py-4 text-center"><i className="fa-solid fa-circle-check text-brand-gold"></i></td>
                                  </tr>
      
                                  &#123;/* Category: Governance & Trust */&#125;
                                  <tr className="bg-background-elevated/30 border-b border-ui-border/50">
                                      <td colSpan={5} className="px-6 py-3 text-xs font-semibold text-text-primary uppercase tracking-wider">Governance & Trust</td>
                                  </tr>
                                  <tr className="border-b border-ui-border/30 hover:bg-background-elevated/20 transition-colors">
                                      <td className="px-6 py-4 text-text-secondary">Approval Boundaries</td>
                                      <td className="px-6 py-4 text-center text-text-primary">Basic</td>
                                      <td className="px-6 py-4 text-center text-text-primary">Standard</td>
                                      <td className="px-6 py-4 text-center text-text-primary bg-brand-gold/5">Advanced Rules</td>
                                      <td className="px-6 py-4 text-center text-text-primary">Custom Logic</td>
                                  </tr>
                                  <tr className="border-b border-ui-border/30 hover:bg-background-elevated/20 transition-colors">
                                      <td className="px-6 py-4 text-text-secondary">Audit Logs</td>
                                      <td className="px-6 py-4 text-center text-text-primary">30 Days</td>
                                      <td className="px-6 py-4 text-center text-text-primary">90 Days</td>
                                      <td className="px-6 py-4 text-center text-text-primary bg-brand-gold/5">1 Year</td>
                                      <td className="px-6 py-4 text-center text-text-primary">Unlimited</td>
                                  </tr>
                                  <tr className="border-b border-ui-border/30 hover:bg-background-elevated/20 transition-colors">
                                      <td className="px-6 py-4 text-text-secondary">SSO Integration</td>
                                      <td className="px-6 py-4 text-center text-ui-border"><i className="fa-solid fa-minus"></i></td>
                                      <td className="px-6 py-4 text-center text-ui-border"><i className="fa-solid fa-minus"></i></td>
                                      <td className="px-6 py-4 text-center bg-brand-gold/5"><i className="fa-solid fa-circle-check text-brand-gold"></i></td>
                                      <td className="px-6 py-4 text-center"><i className="fa-solid fa-circle-check text-brand-gold"></i></td>
                                  </tr>
                                  <tr className="hover:bg-background-elevated/20 transition-colors">
                                      <td className="px-6 py-4 text-text-secondary">Private Data Instance</td>
                                      <td className="px-6 py-4 text-center text-ui-border"><i className="fa-solid fa-minus"></i></td>
                                      <td className="px-6 py-4 text-center text-ui-border"><i className="fa-solid fa-minus"></i></td>
                                      <td className="px-6 py-4 text-center text-ui-border bg-brand-gold/5"><i className="fa-solid fa-minus"></i></td>
                                      <td className="px-6 py-4 text-center"><i className="fa-solid fa-circle-check text-brand-gold"></i></td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
              </section>
      
              &#123;/* Enterprise Trust Section */&#125;
              <section id="enterprise-trust" className="py-24 px-6 md:px-12 relative z-10 bg-background-secondary/30 border-t border-b border-ui-border">
                  <div className="max-w-[1200px] mx-auto w-full">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                          <div>
                              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Built for Enterprise Control</h2>
                              <p className="text-sm text-text-secondary leading-relaxed mb-8">
                                  We believe that AI should assist, not override. Our architecture ensures that your canonical truth remains untouched until explicitly approved by human operators.
                              </p>
                              
                              <div className="space-y-6">
                                  <div className="flex gap-4">
                                      <div className="w-10 h-10 rounded-lg bg-background-elevated border border-ui-border flex items-center justify-center shrink-0">
                                          <i className="fa-solid fa-shield-halved text-brand-gold"></i>
                                      </div>
                                      <div>
                                          <h4 className="text-sm font-semibold text-text-primary mb-1">SOC2 & GDPR Compliant</h4>
                                          <p className="text-xs text-text-secondary">Enterprise-grade security standards applied across all memory layers.</p>
                                      </div>
                                  </div>
                                  <div className="flex gap-4">
                                      <div className="w-10 h-10 rounded-lg bg-background-elevated border border-ui-border flex items-center justify-center shrink-0">
                                          <i className="fa-solid fa-lock text-brand-gold"></i>
                                      </div>
                                      <div>
                                          <h4 className="text-sm font-semibold text-text-primary mb-1">Data Ownership</h4>
                                          <p className="text-xs text-text-secondary">Your data remains yours. We never train public models on your proprietary memory.</p>
                                      </div>
                                  </div>
                                  <div className="flex gap-4">
                                      <div className="w-10 h-10 rounded-lg bg-background-elevated border border-ui-border flex items-center justify-center shrink-0">
                                          <i className="fa-solid fa-server text-brand-gold"></i>
                                      </div>
                                      <div>
                                          <h4 className="text-sm font-semibold text-text-primary mb-1">Deployment Flexibility</h4>
                                          <p className="text-xs text-text-secondary">Available via multi-tenant cloud or private dedicated instances for strict compliance.</p>
                                      </div>
                                  </div>
                              </div>
                              
                              <div className="mt-10">
                                  <button className="px-6 py-3 rounded-lg bg-background-elevated border border-brand-gold/50 text-brand-gold text-sm font-medium hover:bg-brand-gold/10 transition-colors flex items-center gap-2">
                                      Read Security Whitepaper <i className="fa-solid fa-arrow-right text-xs"></i>
                                  </button>
                              </div>
                          </div>
                          
                          <div className="relative">
                              <div className="absolute inset-0 bg-brand-gold/5 blur-[100px] rounded-full"></div>
                              <div className="glass-panel rounded-2xl border border-ui-border p-8 relative z-10 shadow-card">
                                  <h3 className="text-lg font-semibold text-text-primary mb-6 border-b border-ui-border pb-4">Enterprise Customization</h3>
                                  
                                  <form className="space-y-4">
                                      <div className="grid grid-cols-2 gap-4">
                                          <div>
                                              <label className="block text-xs text-text-secondary mb-1">First Name</label>
                                              <input type="text" className="w-full bg-background-main border border-ui-border rounded-lg px-4 py-2 text-sm text-text-primary focus:outline-none focus:border-brand-gold/50 transition-colors" placeholder="Jane" />
                                          </div>
                                          <div>
                                              <label className="block text-xs text-text-secondary mb-1">Last Name</label>
                                              <input type="text" className="w-full bg-background-main border border-ui-border rounded-lg px-4 py-2 text-sm text-text-primary focus:outline-none focus:border-brand-gold/50 transition-colors" placeholder="Doe" />
                                          </div>
                                      </div>
                                      <div>
                                          <label className="block text-xs text-text-secondary mb-1">Work Email</label>
                                          <input type="email" className="w-full bg-background-main border border-ui-border rounded-lg px-4 py-2 text-sm text-text-primary focus:outline-none focus:border-brand-gold/50 transition-colors" placeholder="jane@company.com" />
                                      </div>
                                      <div>
                                          <label className="block text-xs text-text-secondary mb-1">Company Size</label>
                                          <select className="w-full bg-background-main border border-ui-border rounded-lg px-4 py-2 text-sm text-text-primary focus:outline-none focus:border-brand-gold/50 transition-colors appearance-none">
                                              <option>1000+ Employees</option>
                                              <option>500-999 Employees</option>
                                              <option>100-499 Employees</option>
                                              <option>Under 100 Employees</option>
                                          </select>
                                      </div>
                                      <button type="button" className="w-full py-3 mt-4 rounded-lg bg-brand-gold text-background-main text-sm font-semibold hover:bg-brand-goldLight transition-colors shadow-hover-glow">
                                          Request Enterprise Demo
                                      </button>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
      
          </main>
      
          &#123;/* Global Footer */&#125;
    </>
  )
}
