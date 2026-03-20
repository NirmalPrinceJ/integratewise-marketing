import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { 
  Menu,
  X,
  ShieldCheck,
  Lock,
  FileCheck,
  Scale,
  Eye,
  CheckCircle2
} from 'lucide-react';
import { IntegrateWiseLogo } from '../IntegrateWiseLogo';

export function TrustPage() {
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
          scrolled ? 'bg-page-navy-dark/90 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <IntegrateWiseLogo 
              variant="icon-only"
              className={`transition-all duration-500 ${scrolled ? 'scale-75' : 'scale-90'} group-hover:scale-100 origin-left`} 
            />
            <span className={`font-bold tracking-tight text-white transition-all duration-300 ${scrolled ? 'text-lg' : 'text-xl'}`}>
              IntegrateWise
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-page-gray-blue hover:text-white transition-colors">Home</Link>
            <Link to="/product" className="text-sm font-medium text-page-gray-blue hover:text-white transition-colors">Platform</Link>
            <Link to="/use-cases" className="text-sm font-medium text-page-gray-blue hover:text-white transition-colors">Use Cases</Link>
            <Link to="/trust" className="text-sm font-medium text-page-primary transition-colors">Trust</Link>
            <Link to="/about" className="text-sm font-medium text-page-gray-blue hover:text-white transition-colors">About</Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/contact" className="text-sm font-semibold text-white hover:text-page-accent transition-colors">
              Book a Demo
            </Link>
            <Link 
              to="https://app.integratewise.com" target="_blank" rel="noreferrer" 
              className="px-5 py-2.5 rounded-full text-sm font-medium text-white shadow-lg shadow-page-accent/20 hover:shadow-page-accent/40 hover:-translate-y-0.5 transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, var(--color-page-accent), var(--color-page-primary))' }}
            >
              Open App
            </Link>
          </div>

          <button 
            className="md:hidden p-2 -mr-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-page-navy-dark border-b border-white/10 p-6 flex flex-col gap-4">
            <Link to="/" className="text-base font-medium text-white" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/product" className="text-base font-medium text-white" onClick={() => setMobileMenuOpen(false)}>Platform</Link>
            <Link to="/use-cases" className="text-base font-medium text-white" onClick={() => setMobileMenuOpen(false)}>Use Cases</Link>
            <Link to="/trust" className="text-base font-medium text-page-primary" onClick={() => setMobileMenuOpen(false)}>Trust</Link>
            <Link to="/about" className="text-base font-medium text-white" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <hr className="border-white/10 my-2" />
            <Link to="/" className="text-base font-medium text-white" onClick={() => setMobileMenuOpen(false)}>Book a Demo</Link>
            <Link to="https://app.integratewise.com" target="_blank" rel="noreferrer" className="py-3 rounded-lg text-center font-medium text-white shadow-md" style={{ background: 'var(--color-page-accent)' }} onClick={() => setMobileMenuOpen(false)}>
              Open App
            </Link>
          </div>
        )}
      </header>

      {/* ── 1. HERO SECTION (Dark Navy) ── */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden bg-page-navy-dark text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-page-primary/30 via-page-navy-dark to-page-navy-dark" />
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none mix-blend-screen" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="w-20 h-20 rounded-2xl bg-white/5 mx-auto flex items-center justify-center mb-8 border border-white/20 shadow-[0_0_40px_rgba(16,185,129,0.2)]">
            <ShieldCheck className="w-10 h-10 text-emerald-400" />
          </div>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-6 text-sm font-semibold tracking-widest uppercase text-emerald-400">
            Trust & Governance
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            AI that waits for approval <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-page-primary">is AI you can trust.</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-page-gray-blue leading-relaxed max-w-3xl mx-auto mb-16">
            IntegrateWise is built so intelligence can move fast without removing human control. We don't believe in "auto-pilot" that executes blind actions on your behalf without your say.
          </p>

          <div className="relative w-full max-w-5xl mx-auto rounded-2xl border border-white/10 shadow-[0_0_80px_rgba(16,185,129,0.15)] overflow-hidden">
            <img 
              src="/images/approval-ui.png" 
              alt="Approval Governance UI" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── 2. TRUST PRINCIPLES GRID ── */}
      <section className="py-24 px-6 bg-page-surface-sidebar border-b border-page-border-light relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-page-navy-dark tracking-tight mb-4">
              The 4 Trust Principles
            </h2>
            <p className="text-lg text-page-slate-dark leading-relaxed">
              We engineered the platform to put context, evidence, and human governance ahead of raw execution speed. 
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Principle 1 */}
            <div className="p-8 rounded-3xl bg-white border border-page-border-light shadow-sm flex flex-col items-start hover:shadow-lg hover:border-page-primary/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-page-navy-dark mb-3">Context Before Recommendation</h3>
              <p className="text-lg text-page-slate leading-relaxed">
                Our AI should not recommend paths or draft actions without understanding the real business context entirely. The Spine injects that reality into every single AI generation.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="p-8 rounded-3xl bg-white border border-page-border-light shadow-sm flex flex-col items-start hover:shadow-lg hover:border-emerald-500/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                <FileCheck className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-page-navy-dark mb-3">Evidence Before Confidence</h3>
              <p className="text-lg text-page-slate leading-relaxed">
                LLM "hallucinations" happen when there is no grounding. All recommendations inside IntegrateWise are firmly linked to live signals, CRM references, or source truth.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="p-8 rounded-3xl bg-white border border-page-border-light shadow-sm flex flex-col items-start hover:shadow-lg hover:border-amber-500/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
                <Lock className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-page-navy-dark mb-3">Approval Before Execution</h3>
              <p className="text-lg text-page-slate leading-relaxed">
                Meaningful and important actions should always wait for human approval. We prepare the execution fully, but never run the final step without an explicit confirmation click.
              </p>
            </div>

            {/* Principle 4 */}
            <div className="p-8 rounded-3xl bg-white border border-page-border-light shadow-sm flex flex-col items-start hover:shadow-lg hover:border-purple-500/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
                <Scale className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-page-navy-dark mb-3">Governance Before Scale</h3>
              <p className="text-lg text-page-slate leading-relaxed">
                Organizations should be able to scale their AI adoption without sacrificing control, oversight, or accountability. We enforce immutable audit trails on every AI-driven action.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. DATA SECURITY COMPLIANCE ── */}
      <section className="py-24 px-6 bg-white border-b border-page-border-light text-center">
         <div className="max-w-4xl mx-auto">
           <h2 className="text-3xl font-bold tracking-tight mb-12 text-page-navy-dark">Enterprise-grade Security</h2>
           <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-70 grayscale">
              <div className="flex items-center gap-2 font-bold text-xl text-page-navy-dark"><span className="w-8 h-8 rounded border-2 border-slate-800 flex items-center justify-center text-sm">✓</span> SOC 2 Type II</div>
              <div className="flex items-center gap-2 font-bold text-xl text-page-navy-dark"><span className="w-8 h-8 rounded border-2 border-slate-800 flex items-center justify-center text-sm">✓</span> GDPR Compliant</div>
              <div className="flex items-center gap-2 font-bold text-xl text-page-navy-dark"><span className="w-8 h-8 rounded border-2 border-slate-800 flex items-center justify-center text-sm">✓</span> End-to-End Encryption</div>
           </div>
         </div>
      </section>

      {/* ── 4. CLOSING LINE ── */}
      <section className="py-24 px-6 bg-page-navy-dark text-white text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
          <div className="w-24 h-24 mb-8">
            <svg viewBox="0 0 100 100" className="w-full h-full text-page-primary" fill="currentColor">
              <path d="M50 0L61.2257 38.7743L100 50L61.2257 61.2257L50 100L38.7743 61.2257L0 50L38.7743 38.7743L50 0Z" />
            </svg>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-10 text-white">
            <span className="text-page-primary">AI Thinks in Context</span> <br /> — and Waits for Approval.
          </h2>
          <Link 
            to="/product" 
            className="inline-flex px-8 py-4 rounded-full text-base font-bold text-page-navy-dark bg-white shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
          >
            Review the Platform Architecture
          </Link>
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
