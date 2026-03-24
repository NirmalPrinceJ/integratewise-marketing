import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { 
  Layers, 
  BrainCircuit, 
  Menu,
  X,
  PlayCircle,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Workflow,
  Network
} from 'lucide-react';
import { IntegrateWiseLogo } from '../IntegrateWiseLogo';

export function ProductDetailPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-page-surface-sidebar font-sans text-page-slate selection:bg-page-primary/20 selection:text-page-primary overflow-x-hidden">
      
      {/* ── NAVIGATION ── */}
      <header 
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/80 backdrop-blur-lg border-b border-page-border-light py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <IntegrateWiseLogo 
              variant="icon-only"
              className={`transition-all duration-500 ${scrolled ? 'scale-75' : 'scale-90'} group-hover:scale-100 origin-left`} 
            />
            <span className={`font-bold tracking-tight text-page-navy-dark transition-all duration-300 ${scrolled ? 'text-lg' : 'text-xl'}`}>
              IntegrateWise
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-page-slate hover:text-page-primary transition-colors">Home</Link>
            <Link to="/product" className="text-sm font-medium text-page-primary transition-colors">Platform</Link>
            <a href="#layers" className="text-sm font-medium text-page-slate hover:text-page-primary transition-colors">Architecture</a>
            <a href="#security" className="text-sm font-medium text-page-slate hover:text-page-primary transition-colors">Trust</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/contact" className="text-sm font-semibold text-page-navy-dark hover:text-page-primary transition-colors">
              Book a Demo
            </Link>
            <Link 
              to="https://app.integratewise.ai" target="_blank" rel="noreferrer" 
              className="px-5 py-2.5 rounded-full text-sm font-medium text-white shadow-lg shadow-page-primary/20 hover:shadow-page-primary/40 hover:-translate-y-0.5 transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, var(--color-page-primary), var(--color-page-accent))' }}
            >
              Open App
            </Link>
          </div>

          <button 
            className="md:hidden p-2 -mr-2 text-page-navy-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-page-border-light shadow-xl p-6 flex flex-col gap-4">
            <Link to="/" className="text-base font-medium text-page-navy-dark" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/product" className="text-base font-medium text-page-primary" onClick={() => setMobileMenuOpen(false)}>Platform</Link>
            <a href="#layers" className="text-base font-medium text-page-navy-dark" onClick={() => setMobileMenuOpen(false)}>Architecture</a>
            <a href="#security" className="text-base font-medium text-page-navy-dark" onClick={() => setMobileMenuOpen(false)}>Trust</a>
            <hr className="border-page-border-light my-2" />
            <Link to="/" className="text-base font-medium text-page-navy-dark" onClick={() => setMobileMenuOpen(false)}>Book a Demo</Link>
            <Link to="https://app.integratewise.ai" target="_blank" rel="noreferrer" className="py-3 rounded-lg text-center font-medium text-white shadow-md" style={{ background: 'var(--color-page-primary)' }} onClick={() => setMobileMenuOpen(false)}>
              Open App
            </Link>
          </div>
        )}
      </header>

      {/* ── 1. PRODUCT HERO ── */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden bg-white">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-page-primary/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-page-accent/5 rounded-full blur-[80px] translate-y-1/2 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-page-primary/20 bg-page-primary/5 mb-8 text-sm font-semibold text-page-primary animate-fade-in-up">
            <Network className="w-4 h-4" /> The Connected Backbone
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-page-navy-dark tracking-tight leading-[1.1] mb-6 animate-fade-in-up [animation-delay:100ms]">
            A governed operating <br className="hidden md:block" /> environment for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-page-primary to-page-accent"> AI-enabled work.</span>
          </h1>
          
          <p className="text-lg sm:text-2xl text-page-slate-dark max-w-3xl mx-auto leading-relaxed mb-10 animate-fade-in-up [animation-delay:200ms]">
            IntegrateWise combines workspace, truth, context, intelligence, and approval-driven execution into one platform. 
            Built to replace fragmented coordination with connected understanding.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up [animation-delay:300ms]">
            <Link 
              to="https://app.integratewise.ai" target="_blank" rel="noreferrer" 
              className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-white shadow-xl shadow-page-primary/20 hover:shadow-page-primary/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group"
              style={{ background: 'linear-gradient(135deg, var(--color-page-primary), var(--color-page-accent))' }}
            >
              Open App
            </Link>
          </div>
        </div>

        {/* Hero Visual Mockup */}
        <div className="mt-16 max-w-5xl mx-auto relative animate-fade-in-up [animation-delay:400ms]">
          <div className="relative z-10 w-full rounded-2xl border border-white/60 bg-white/40 backdrop-blur-xl shadow-2xl p-4 overflow-hidden flex flex-col justify-center items-center">
            <img 
              src="/images/platform-stack.png" 
              alt="The 5 Layer Platform Architecture" 
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── 2. PLATFORM LAYERS (The Architecture) ── */}
      <section id="layers" className="py-24 px-6 bg-page-surface-sidebar border-t border-page-border-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-page-navy-dark tracking-tight mb-6">
              The 5 Platform Layers
            </h2>
            <p className="text-lg lg:text-xl text-page-slate-dark leading-relaxed">
              IntegrateWise isn't just a UI wrapper over APIs. We built a deep, intelligent, five-layer framework designed for enterprise accountability.
            </p>
          </div>

          <div className="flex flex-col gap-4 max-w-4xl mx-auto">
            {/* Layer 5 */}
            <div className="relative group bg-white border border-page-border-light rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg hover:border-page-primary/30 transition-all duration-300 flex flex-col md:flex-row gap-6 items-center">
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-slate-100 flex items-center justify-center text-page-slate-dark group-hover:bg-page-primary group-hover:text-white transition-colors duration-300">
                <Menu className="w-8 h-8" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-page-slate-light tracking-widest uppercase">Layer 05</span>
                  <h3 className="text-2xl font-bold text-page-navy-dark">Workspace Layer</h3>
                </div>
                <p className="text-page-slate text-lg">The clean, glassmorphic environment where teams manage work, records, goals, relationships, and context on a daily basis.</p>
              </div>
            </div>

            {/* Layer 4 */}
            <div className="relative group bg-white border border-page-border-light rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg hover:border-page-primary/30 transition-all duration-300 flex flex-col md:flex-row gap-6 items-center">
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-page-slate-light tracking-widest uppercase">Layer 04</span>
                  <h3 className="text-2xl font-bold text-page-navy-dark">Approval Layer</h3>
                </div>
                <p className="text-page-slate text-lg">The governance layer where AI-proposed actions wait for human approval, policy rules, and audit requirements before pushing to reality.</p>
              </div>
            </div>

            {/* Layer 3 */}
            <div className="relative group bg-white border border-page-border-light rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg hover:border-page-primary/30 transition-all duration-300 flex flex-col md:flex-row gap-6 items-center">
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                <BrainCircuit className="w-8 h-8" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-page-slate-light tracking-widest uppercase">Layer 03</span>
                  <h3 className="text-2xl font-bold text-page-navy-dark">Intelligence Layer</h3>
                </div>
                <p className="text-page-slate text-lg">The context-aware AI engine that continually reasons over entity relationships, live signals, historical data, and evidentiary facts.</p>
              </div>
            </div>

            {/* Layer 2 */}
            <div className="relative group bg-page-navy-dark text-white border border-page-navy-dark rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl hover:border-page-primary/50 transition-all duration-300 flex flex-col md:flex-row gap-6 items-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-page-primary/30 to-transparent opacity-50" />
              <div className="relative z-10 w-16 h-16 shrink-0 rounded-2xl bg-white/10 flex items-center justify-center text-page-primary border border-white/20">
                <Layers className="w-8 h-8" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-page-gray-blue tracking-widest uppercase">Layer 02</span>
                  <h3 className="text-2xl font-bold text-white">Spine Layer</h3>
                </div>
                <p className="text-page-gray-blue text-lg">The single source of truth and universal intelligence layer that structures operational reality across all connected tools.</p>
              </div>
            </div>

            {/* Layer 1 */}
            <div className="relative group bg-white border border-page-border-light rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg hover:border-page-primary/30 transition-all duration-300 flex flex-col md:flex-row gap-6 items-center">
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                <Workflow className="w-8 h-8" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-page-slate-light tracking-widest uppercase">Layer 01</span>
                  <h3 className="text-2xl font-bold text-page-navy-dark">Action Layer</h3>
                </div>
                <p className="text-page-slate text-lg">The execution layer that connects tightly to APIs, pushing approved decisions firmly into connected systems and downstream workflows.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. PLATFORM CAPABILITIES ── */}
      <section className="py-24 px-6 bg-white border-t border-page-border-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-page-navy-dark tracking-tight mb-4">
              What the platform enables
            </h2>
            <p className="text-lg text-page-slate-dark">
              A compounding intelligence moat that gets smarter every time you use it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-page-primary shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-bold text-page-navy-dark mb-2">Connected Understanding Across Systems</h4>
                <p className="text-sm text-page-slate leading-relaxed">No more islands of data. Support tickets, sales emails, and product telemetry all combine to form complete entity records.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-page-primary shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-bold text-page-navy-dark mb-2">Evidence-Grounded Decision Support</h4>
                <p className="text-sm text-page-slate leading-relaxed">AI suggestions always link back to the exact source documents, Slack threads, or data points that informed them.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-page-primary shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-bold text-page-navy-dark mb-2">Contextual AI Recommendations</h4>
                <p className="text-sm text-page-slate leading-relaxed">Unlike generic chatbot prompts, the Spine injects deep, live business state into every action the AI contemplates.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-page-primary shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-bold text-page-navy-dark mb-2">Approval-Driven Workflows</h4>
                <p className="text-sm text-page-slate leading-relaxed">Draft emails, trigger CRM updates, or provision accounts automatically—but only after explicit human sign-off.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-page-primary shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-bold text-page-navy-dark mb-2">Organizational Memory That Compounds</h4>
                <p className="text-sm text-page-slate leading-relaxed">Every approval (or rejection) trains the Spine on your organization's unique operating principles over time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. TRUST / SECURITY BLOCK ── */}
      <section id="security" className="py-24 px-6 bg-page-navy-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-page-primary/30 via-page-navy-dark to-page-navy-dark" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="w-16 h-16 rounded-2xl bg-white/10 mx-auto flex items-center justify-center mb-8 border border-white/20">
            <Lock className="w-8 h-8 text-page-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">AI that waits for approval <br /> is AI you can trust.</h2>
          <p className="text-xl md:text-2xl text-page-gray-blue md:leading-relaxed font-medium mb-12">
            Automating business processes shouldn't mean losing control. IntegrateWise is architected with strict human-in-the-loop gates.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
             <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
               <span className="text-page-primary font-bold block mb-1">01. Context Before Recommendation</span>
               <span className="text-sm text-page-gray-blue">AI never guesses; it reads the Spine.</span>
             </div>
             <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
               <span className="text-page-accent font-bold block mb-1">02. Evidence Before Confidence</span>
               <span className="text-sm text-page-gray-blue">Recommendations show citing sources.</span>
             </div>
             <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
               <span className="text-emerald-400 font-bold block mb-1">03. Approval Before Execution</span>
               <span className="text-sm text-page-gray-blue">Crucial actions always wait for a click.</span>
             </div>
             <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
               <span className="text-blue-400 font-bold block mb-1">04. Governance Before Scale</span>
               <span className="text-sm text-page-gray-blue">Full audit trails on who approved what.</span>
             </div>
          </div>
        </div>
      </section>

      {/* ── 5. FINAL CTA STRIP ── */}
      <section className="py-24 px-6 relative overflow-hidden bg-page-surface-sidebar border-b-4 border-page-primary">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8 text-page-navy-dark">
            Ready to integrate wisely?
          </h2>
          <p className="text-xl text-page-slate-dark mb-12 max-w-2xl mx-auto">
            Build your intelligent workspace right now, or see the platform in action with a guided tour.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="https://app.integratewise.ai" target="_blank" rel="noreferrer" 
              className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold text-white shadow-xl hover:-translate-y-1 hover:shadow-2xl hover:shadow-page-primary/30 transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, var(--color-page-primary), var(--color-page-accent))' }}
            >
              Open App
            </Link>
            <Link 
              to="/demo" 
              className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold text-page-navy-dark bg-white shadow-sm border border-page-border-primary hover:bg-page-surface-hover transition-all duration-300 flex items-center justify-center gap-2"
            >
               Book a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <IntegrateWiseLogo variant="icon-only" className="scale-75 origin-left grayscale opacity-80" />
            <span className="font-bold text-page-navy-dark tracking-tight">IntegrateWise <span className="text-page-slate font-medium text-sm ml-1">LLP</span></span>
          </div>
          
          <div className="flex gap-8 text-sm font-medium text-page-slate-light">
            <a href="#" className="hover:text-page-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-page-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-page-primary transition-colors">Bengaluru, India</a>
          </div>
          
          <p className="text-sm text-page-gray-blue">
            © {new Date().getFullYear()} IntegrateWise. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
