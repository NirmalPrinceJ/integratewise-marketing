import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { 
  Menu,
  X,
  Building2,
  Users,
  Compass,
  ArrowRight
} from 'lucide-react';
import { IntegrateWiseLogo } from '../IntegrateWiseLogo';

export function AboutPage() {
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
            <Link to="/use-cases" className="text-sm font-medium text-page-slate hover:text-page-primary transition-colors">Use Cases</Link>
            <Link to="/trust" className="text-sm font-medium text-page-slate hover:text-page-primary transition-colors">Trust</Link>
            <Link to="/about" className="text-sm font-medium text-page-primary transition-colors">About</Link>
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
            <Link to="/use-cases" className="text-base font-medium text-page-navy-dark" onClick={() => setMobileMenuOpen(false)}>Use Cases</Link>
            <Link to="/trust" className="text-base font-medium text-page-navy-dark" onClick={() => setMobileMenuOpen(false)}>Trust</Link>
            <Link to="/about" className="text-base font-medium text-page-primary" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <hr className="border-page-border-light my-2" />
            <Link to="/" className="text-base font-medium text-page-navy-dark" onClick={() => setMobileMenuOpen(false)}>Book a Demo</Link>
            <Link to="https://app.integratewise.com" target="_blank" rel="noreferrer" className="py-3 rounded-lg text-center font-medium text-white shadow-md" style={{ background: 'var(--color-page-primary)' }} onClick={() => setMobileMenuOpen(false)}>
              Open App
            </Link>
          </div>
        )}
      </header>

      {/* ── 1. HERO SECTION ── */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 border-b border-page-border-light bg-page-surface-sidebar relative overflow-hidden text-center">
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-[600px] h-[600px] bg-page-primary/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-white border border-page-border-primary shadow-[0_10px_40px_rgba(65,84,163,0.15)] mx-auto flex items-center justify-center mb-8">
            <Building2 className="w-8 h-8 text-page-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-page-navy-dark mb-6">
            About IntegrateWise
          </h1>
          <p className="text-xl sm:text-2xl text-page-slate-dark leading-relaxed max-w-3xl mx-auto">
            IntegrateWise was created to solve a structural problem in modern work: organizations have more tools than ever, but less coherence across them.
          </p>
        </div>
      </section>

      {/* ── 2. THE STORY BLOCK ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-page-navy-dark mb-8">The fragmented truth problem.</h2>
          <div className="space-y-6 text-xl text-page-slate leading-relaxed">
            <p>
              We've reached a breaking point in SaaS. The average company uses over 100 applications, yet customer success doesn't know what sales promised, engineers don't have product context, and leaders have to stitch together five different dashboards to see a single account's health.
            </p>
            <p>
              When AI arrived, it was immediately injected into these isolated silos. You got "summarize this email" or "draft a reply to this ticket"—but the AI lacked the fundamental business context to actually be helpful.
            </p>
            <p className="font-semibold text-page-navy-dark text-2xl py-6 border-l-4 border-page-primary pl-6 my-8">
              "We are building a new category of enterprise software — a Knowledge Workspace empowered by AI and the Spine — where the underlying intelligence foundation connects tools, truth, context, and decisions into one governed system."
            </p>
            <p>
              We didn't set out to build another shiny UI integration tool. We set out to build the "Spine"—the missing connective tissue for B2B reality.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. COMPANY BELIEF ── */}
      <section className="py-24 px-6 bg-page-navy-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-page-primary/30 via-page-navy-dark to-page-navy-dark" />
        <div className="max-w-5xl mx-auto relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Compass className="w-12 h-12 text-page-accent mb-6" />
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-8">Our Belief</h2>
            <p className="text-xl text-page-gray-blue leading-relaxed font-medium">
              We believe the future of work needs more than disconnected applications and isolated AI outputs. It needs a unified system.
            </p>
          </div>

          <div className="space-y-6 text-lg font-medium">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-page-accent font-bold mt-1">01.</span>
              <p>Truth must be structured.</p>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-emerald-400 font-bold mt-1">02.</span>
              <p>Context must be preserved.</p>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-blue-400 font-bold mt-1">03.</span>
              <p>Intelligence must be grounded.</p>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-purple-400 font-bold mt-1">04.</span>
              <p>Actions must be governed.</p>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-page-primary font-bold mt-1">05.</span>
              <p className="text-white">Humans remain in control.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. FINAL CTA ── */}
      <section className="py-24 px-6 bg-page-surface-sidebar text-center">
        <h2 className="text-4xl font-bold tracking-tight mb-8 text-page-navy-dark">
          Are you ready to join us?
        </h2>
        <p className="text-xl text-page-slate-dark mb-10 max-w-2xl mx-auto">
          We are currently onboarding enterprise and mid-market teams. If our philosophy matches your operational problems, let's talk.
        </p>
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white shadow-xl hover:-translate-y-1 hover:shadow-2xl hover:shadow-page-primary/30 transition-all duration-300"
          style={{ background: 'linear-gradient(135deg, var(--color-page-primary), var(--color-page-accent))' }}
        >
          Contact the Team <ArrowRight className="w-5 h-5" />
        </Link>
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
