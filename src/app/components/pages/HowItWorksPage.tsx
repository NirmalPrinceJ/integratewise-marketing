import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { 
  ArrowRight,
  Menu,
  X,
  Link as LinkIcon,
  Database,
  BrainCircuit,
  MessageSquare,
  ShieldCheck,
  Zap,
  LineChart
} from 'lucide-react';
import { IntegrateWiseLogo } from '../IntegrateWiseLogo';

export function HowItWorksPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-page-slate selection:bg-page-primary/20 selection:text-page-primary overflow-x-hidden">
      
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
            <Link to="/product" className="text-sm font-medium text-page-slate hover:text-page-primary transition-colors">Platform</Link>
            <Link to="/spine" className="text-sm font-medium text-page-slate hover:text-page-primary transition-colors">The Spine</Link>
            <Link to="/how-it-works" className="text-sm font-medium text-page-primary transition-colors">How It Works</Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/contact" className="text-sm font-semibold text-page-navy-dark hover:text-page-primary transition-colors">
              Book a Demo
            </Link>
            <Link 
              to="https://app.integratewise.com" target="_blank" rel="noreferrer" 
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
            <Link to="/product" className="text-base font-medium text-page-navy-dark" onClick={() => setMobileMenuOpen(false)}>Platform</Link>
            <Link to="/spine" className="text-base font-medium text-page-navy-dark" onClick={() => setMobileMenuOpen(false)}>The Spine</Link>
            <Link to="/how-it-works" className="text-base font-medium text-page-primary" onClick={() => setMobileMenuOpen(false)}>How It Works</Link>
            <hr className="border-page-border-light my-2" />
            <Link to="/" className="text-base font-medium text-page-navy-dark" onClick={() => setMobileMenuOpen(false)}>Book a Demo</Link>
            <Link to="https://app.integratewise.com" target="_blank" rel="noreferrer" className="py-3 rounded-lg text-center font-medium text-white shadow-md" style={{ background: 'var(--color-page-primary)' }} onClick={() => setMobileMenuOpen(false)}>
              Open App
            </Link>
          </div>
        )}
      </header>

      {/* ── 1. HERO SECTION ── */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-24 px-6 text-center border-b border-page-border-light bg-page-surface-sidebar">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-page-navy-dark mb-6">
            How IntegrateWise Works
          </h1>
          <p className="text-xl sm:text-2xl text-page-slate-dark leading-relaxed">
            IntegrateWise is built around a connected loop where truth, context, intelligence, approval, and action remain linked at every stage.
          </p>
        </div>
      </section>

      {/* ── 2. PROCESS LOOP ── */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[50px] bottom-[50px] left-[39px] w-[2px] bg-gradient-to-b from-page-border-light via-page-primary/30 to-page-accent/30" />

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="relative flex flex-col md:flex-row gap-8 items-start group">
              <div className="w-20 h-20 shrink-0 rounded-2xl bg-white border-2 border-page-border-light flex items-center justify-center shadow-sm group-hover:border-page-primary transition-colors relative z-10">
                <LinkIcon className="w-8 h-8 text-page-primary" />
              </div>
              <div className="pt-2">
                <span className="text-xs font-bold tracking-widest uppercase text-page-slate-light mb-2 block">Step 01</span>
                <h3 className="text-2xl font-bold text-page-navy-dark mb-4">Connect</h3>
                <p className="text-lg text-page-slate leading-relaxed">Bring tools, systems, data, conversations, and knowledge into one connected environment. We connect to CRM, Support, and Comm stacks via secure OAuth tokens without needing data migrations.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col md:flex-row gap-8 items-start group">
              <div className="w-20 h-20 shrink-0 rounded-2xl bg-white border-2 border-page-border-light flex items-center justify-center shadow-sm group-hover:border-page-primary transition-colors relative z-10">
                <Database className="w-8 h-8 text-blue-500" />
              </div>
              <div className="pt-2">
                <span className="text-xs font-bold tracking-widest uppercase text-page-slate-light mb-2 block">Step 02</span>
                <h3 className="text-2xl font-bold text-page-navy-dark mb-4">Normalize</h3>
                <p className="text-lg text-page-slate leading-relaxed">Structure what matters into the Spine. By normalizing messy schemas across tools into unified Business Entities, the system flawlessly preserves relationships and semantic meaning.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col md:flex-row gap-8 items-start group">
              <div className="w-20 h-20 shrink-0 rounded-2xl bg-white border-2 border-page-border-light flex items-center justify-center shadow-sm group-hover:border-purple-500 transition-colors relative z-10">
                <BrainCircuit className="w-8 h-8 text-purple-500" />
              </div>
              <div className="pt-2">
                <span className="text-xs font-bold tracking-widest uppercase text-page-slate-light mb-2 block">Step 03</span>
                <h3 className="text-2xl font-bold text-page-navy-dark mb-4">Understand</h3>
                <p className="text-lg text-page-slate leading-relaxed">Allow AI to reason in context. Instead of just "reading a prompt", the AI queries operational truth, supporting references, and live signals from across the stack.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative flex flex-col md:flex-row gap-8 items-start group">
              <div className="w-20 h-20 shrink-0 rounded-2xl bg-white border-2 border-page-border-light flex items-center justify-center shadow-sm group-hover:border-amber-500 transition-colors relative z-10">
                <MessageSquare className="w-8 h-8 text-amber-500" />
              </div>
              <div className="pt-2">
                <span className="text-xs font-bold tracking-widest uppercase text-page-slate-light mb-2 block">Step 04</span>
                <h3 className="text-2xl font-bold text-page-navy-dark mb-4">Propose</h3>
                <p className="text-lg text-page-slate leading-relaxed">Generate next steps, actionable insights, deal recommendations, and email responses completely based on business reality, not generic LLM knowledge.</p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative flex flex-col md:flex-row gap-8 items-start group">
              <div className="w-20 h-20 shrink-0 rounded-2xl bg-page-navy-dark border-2 border-page-navy-dark flex items-center justify-center shadow-lg relative z-10">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <div className="pt-2">
                <span className="text-xs font-bold tracking-widest uppercase text-page-primary mb-2 block">Step 05 — The Critical Gate</span>
                <h3 className="text-2xl font-bold text-page-navy-dark mb-4">Wait for Approval</h3>
                <p className="text-lg text-page-slate leading-relaxed font-medium">Require human review before important actions move forward. The system drafts the execution, cites the source evidence, and pauses until an authorized team member clicks approve.</p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="relative flex flex-col md:flex-row gap-8 items-start group">
              <div className="w-20 h-20 shrink-0 rounded-2xl bg-white border-2 border-page-border-light flex items-center justify-center shadow-sm group-hover:border-emerald-500 transition-colors relative z-10">
                <Zap className="w-8 h-8 text-emerald-500" />
              </div>
              <div className="pt-2">
                <span className="text-xs font-bold tracking-widest uppercase text-page-slate-light mb-2 block">Step 06</span>
                <h3 className="text-2xl font-bold text-page-navy-dark mb-4">Execute</h3>
                <p className="text-lg text-page-slate leading-relaxed">Send approved actions securely through connected workflows, updating external systems naturally.</p>
              </div>
            </div>

            {/* Step 7 */}
            <div className="relative flex flex-col md:flex-row gap-8 items-start group">
              <div className="w-20 h-20 shrink-0 rounded-2xl bg-white border-2 border-page-border-light flex items-center justify-center shadow-sm group-hover:border-page-accent transition-colors relative z-10">
                <LineChart className="w-8 h-8 text-page-accent" />
              </div>
              <div className="pt-2">
                <span className="text-xs font-bold tracking-widest uppercase text-page-slate-light mb-2 block">Step 07</span>
                <h3 className="text-2xl font-bold text-page-navy-dark mb-4">Learn</h3>
                <p className="text-lg text-page-slate leading-relaxed">Capture outcomes and execution decisions so the system becomes more valuable, compounding its intelligence over time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. FINAL CTA STRIP ── */}
      <section className="py-24 px-6 relative overflow-hidden bg-page-surface-sidebar border-t border-page-border-light">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold tracking-tight mb-6 text-page-navy-dark">
            Ready to experience the loop?
          </h2>
          <p className="text-xl text-page-slate-dark mb-10 max-w-2xl mx-auto">
            Book a demo to see the full 7-step process in action on real B2B data.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="https://app.integratewise.com" target="_blank" rel="noreferrer" 
              className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold text-white shadow-xl hover:-translate-y-1 hover:shadow-2xl hover:shadow-page-primary/30 transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, var(--color-page-primary), var(--color-page-accent))' }}
            >
              Open App
            </Link>
            <Link 
              to="/demo" 
              className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold text-page-navy-dark bg-white border border-page-border-primary hover:bg-page-surface-sidebar shadow-sm transition-all duration-300"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-white py-12 px-6 border-t border-page-border-light">
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
