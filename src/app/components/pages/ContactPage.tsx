import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { 
  Menu,
  X,
  Mail,
  Calendar,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import { IntegrateWiseLogo } from '../IntegrateWiseLogo';

export function ContactPage() {
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
            <Link to="/product" className="text-sm font-medium text-page-slate hover:text-page-primary transition-colors">Platform</Link>
            <Link to="/use-cases" className="text-sm font-medium text-page-slate hover:text-page-primary transition-colors">Use Cases</Link>
            <Link to="/trust" className="text-sm font-medium text-page-slate hover:text-page-primary transition-colors">Trust</Link>
            <Link to="/about" className="text-sm font-medium text-page-slate hover:text-page-primary transition-colors">About</Link>
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
            <Link to="/about" className="text-base font-medium text-page-navy-dark" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <hr className="border-page-border-light my-2" />
            <Link to="/" className="text-base font-medium text-page-navy-dark" onClick={() => setMobileMenuOpen(false)}>Book a Demo</Link>
            <Link to="https://app.integratewise.com" target="_blank" rel="noreferrer" className="py-3 rounded-lg text-center font-medium text-white shadow-md" style={{ background: 'var(--color-page-primary)' }} onClick={() => setMobileMenuOpen(false)}>
              Open App
            </Link>
          </div>
        )}
      </header>

      {/* ── 1. HERO SECTION ── */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 border-b border-page-border-light bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-page-navy-dark mb-6">
            See how IntegrateWise <br /> fits your workflow.
          </h1>
          <p className="text-xl sm:text-2xl text-page-slate-dark leading-relaxed max-w-3xl mx-auto">
            If your teams are working across fragmented systems, struggling with missing context, or looking for a more governed approach to AI-enabled execution, we built this for you.
          </p>
        </div>
      </section>

      {/* ── 2. CONTACT OPTIONS ── */}
      <section className="py-24 px-6 bg-page-surface-sidebar">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          
          <div className="p-10 rounded-3xl bg-white border border-page-border-light shadow-sm flex flex-col items-center text-center hover:shadow-xl hover:border-page-primary/30 transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8">
              <Calendar className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-page-navy-dark mb-4">Book a Demo</h3>
            <p className="text-lg text-page-slate leading-relaxed mb-8 flex-1">
              Want a walkthrough of the platform on real data? Schedule 30 minutes with our founders and sales engineering team.
            </p>
            <button 
              onClick={() => window.open('https://calendly.com/integratewise', '_blank')}
              className="w-full px-6 py-4 rounded-xl font-bold text-white shadow-lg bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Schedule via Calendly
            </button>
          </div>

          <div className="p-10 rounded-3xl bg-white border border-page-border-light shadow-sm flex flex-col items-center text-center hover:shadow-xl hover:border-page-accent/30 transition-all duration-300 relative overflow-hidden group">
            {/* Preferred gradient highlight */}
            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-page-primary to-page-accent" />
            
            <div className="w-16 h-16 rounded-2xl bg-page-primary/10 text-page-primary flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-page-navy-dark mb-4">Connect over Email</h3>
            <p className="text-lg text-page-slate leading-relaxed mb-8 flex-1">
              Not ready for a demo but have architecture questions? Send an email to our core team to discuss your setup.
            </p>
            <button 
              onClick={() => window.location.href = 'mailto:hello@integratewise.ai'}
              className="w-full px-6 py-4 rounded-xl font-bold text-white shadow-lg shadow-page-primary/20 hover:shadow-page-primary/40 transition-all duration-300 cursor-pointer" 
              style={{ background: 'linear-gradient(135deg, var(--color-page-primary), var(--color-page-accent))' }}
            >
              Send Email
            </button>
          </div>

          <div className="p-10 rounded-3xl bg-white border border-page-border-light shadow-sm flex flex-col items-center text-center hover:shadow-xl hover:border-emerald-500/30 transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-8">
              <ArrowRight className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-page-navy-dark mb-4">Open App</h3>
            <p className="text-lg text-page-slate leading-relaxed mb-8 flex-1">
              Already know what you're doing? Jump straight into the workspace and connect your first data sources now.
            </p>
            <button 
              onClick={() => window.open('https://app.integratewise.com', '_blank')}
              className="w-full px-6 py-4 rounded-xl font-bold text-emerald-600 border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 transition-colors cursor-pointer"
            >
              Go to Application
            </button>
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
