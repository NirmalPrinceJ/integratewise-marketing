import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { 
  Menu,
  X,
  Workflow,
  Search,
  MessageSquare,
  Database,
  FileText,
  Activity
} from 'lucide-react';
import { IntegrateWiseLogo } from '../IntegrateWiseLogo';

export function IntegrationsPage() {
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
            <Link to="/how-it-works" className="text-sm font-medium text-page-slate hover:text-page-primary transition-colors">How It Works</Link>
            <Link to="/use-cases" className="text-sm font-medium text-page-slate hover:text-page-primary transition-colors">Use Cases</Link>
            <Link to="/integrations" className="text-sm font-medium text-page-primary transition-colors">Integrations</Link>
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
            <Link to="/how-it-works" className="text-base font-medium text-page-navy-dark" onClick={() => setMobileMenuOpen(false)}>How It Works</Link>
            <Link to="/use-cases" className="text-base font-medium text-page-navy-dark" onClick={() => setMobileMenuOpen(false)}>Use Cases</Link>
            <Link to="/integrations" className="text-base font-medium text-page-primary" onClick={() => setMobileMenuOpen(false)}>Integrations</Link>
            <hr className="border-page-border-light my-2" />
            <Link to="/" className="text-base font-medium text-page-navy-dark" onClick={() => setMobileMenuOpen(false)}>Book a Demo</Link>
            <Link to="https://app.integratewise.com" target="_blank" rel="noreferrer" className="py-3 rounded-lg text-center font-medium text-white shadow-md" style={{ background: 'var(--color-page-primary)' }} onClick={() => setMobileMenuOpen(false)}>
              Open App
            </Link>
          </div>
        )}
      </header>

      {/* ── 1. HERO SECTION ── */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 text-center border-b border-page-border-light bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-page-accent/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-page-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-white border border-page-border-primary shadow-[0_10px_40px_rgba(65,84,163,0.15)] mx-auto flex items-center justify-center mb-8">
            <Workflow className="w-8 h-8 text-page-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-page-navy-dark mb-6">
            Connect the tools <br />
            you already use.
          </h1>
          <p className="text-xl sm:text-2xl text-page-slate-dark leading-relaxed max-w-2xl mx-auto mb-10">
            IntegrateWise is built to connect across the systems where work, communication, knowledge, and operations already live. We don't replace your stack; we make it vastly more intelligent.
          </p>
          
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-page-slate-light" />
            <input 
              type="text" 
              placeholder="Search for integrations (e.g., Salesforce, Slack)..." 
              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-page-border-primary bg-white focus:border-page-primary focus:outline-none focus:ring-4 focus:ring-page-primary/10 transition-all text-page-navy-dark shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* ── 2. INTEGRATION CATEGORIES ── */}
      <section className="py-24 px-6 bg-page-surface-sidebar">
        <div className="max-w-7xl mx-auto space-y-24">
          
          {/* Category 1: Business Systems */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                <Database className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-page-navy-dark tracking-tight">Business Systems</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {['Salesforce', 'HubSpot', 'Zendesk', 'Jira', 'Linear', 'Tally', 'NetSuite', 'Stripe', 'Intercom', 'Asana'].map(tool => (
                <div key={tool} className="p-6 bg-white border border-page-border-light rounded-2xl shadow-sm hover:shadow-md hover:border-page-primary/40 transition-all text-center group cursor-pointer">
                  <div className="w-12 h-12 bg-page-surface-sidebar rounded-xl border border-page-border-light mx-auto mb-4 group-hover:bg-blue-50 transition-colors" />
                  <span className="font-semibold text-page-navy-dark">{tool}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Category 2: Communication Systems */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-page-navy-dark tracking-tight">Communication Systems</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {['Slack', 'Microsoft Teams', 'WhatsApp Business', 'Gmail', 'Outlook', 'Discord', 'Zoom', 'Google Meet'].map(tool => (
                <div key={tool} className="p-6 bg-white border border-page-border-light rounded-2xl shadow-sm hover:shadow-md hover:border-emerald-500/40 transition-all text-center group cursor-pointer">
                  <div className="w-12 h-12 bg-page-surface-sidebar rounded-xl border border-page-border-light mx-auto mb-4 group-hover:bg-emerald-50 transition-colors" />
                  <span className="font-semibold text-page-navy-dark">{tool}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Category 3: Knowledge Systems */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-page-navy-dark tracking-tight">Knowledge Systems</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {['Notion', 'Confluence', 'Google Drive', 'SharePoint', 'Coda', 'Dropbox', 'Box'].map(tool => (
                <div key={tool} className="p-6 bg-white border border-page-border-light rounded-2xl shadow-sm hover:shadow-md hover:border-amber-500/40 transition-all text-center group cursor-pointer">
                  <div className="w-12 h-12 bg-page-surface-sidebar rounded-xl border border-page-border-light mx-auto mb-4 group-hover:bg-amber-50 transition-colors" />
                  <span className="font-semibold text-page-navy-dark">{tool}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Category 4: Operational Signals */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                <Activity className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-page-navy-dark tracking-tight">Operational Signals</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {['Datadog', 'Sentry', 'Mixpanel', 'Amplitude', 'Segment', 'PagerDuty'].map(tool => (
                <div key={tool} className="p-6 bg-white border border-page-border-light rounded-2xl shadow-sm hover:shadow-md hover:border-purple-500/40 transition-all text-center group cursor-pointer">
                  <div className="w-12 h-12 bg-page-surface-sidebar rounded-xl border border-page-border-light mx-auto mb-4 group-hover:bg-purple-50 transition-colors" />
                  <span className="font-semibold text-page-navy-dark">{tool}</span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </section>

      {/* ── 3. OUTCOME STATEMENT ── */}
      <section className="py-24 px-6 bg-page-navy-dark text-white border-y-[6px] border-page-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_var(--tw-gradient-stops))] from-page-primary/30 via-page-navy-dark to-page-navy-dark" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-2xl sm:text-4xl font-semibold leading-relaxed text-page-gray-blue">
            "The goal is <span className="text-white">not just to sync data</span>. It is to preserve meaning, relationships, and context through the Spine."
          </p>
        </div>
      </section>

      {/* ── 4. FINAL CTA ── */}
      <section className="py-24 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold tracking-tight mb-8 text-page-navy-dark">
          Don't see your tool here?
        </h2>
        <p className="text-xl text-page-slate-dark mb-10 max-w-2xl mx-auto">
          We add new native SDK integrations every week. If it has a modern API, the Spine can consume it.
        </p>
        <Link 
          to="/contact" 
          className="inline-flex px-8 py-4 rounded-full text-base font-bold text-page-navy-dark bg-white border-2 border-page-border-primary hover:border-page-primary hover:bg-page-surface-sidebar transition-all duration-300"
        >
          Request an Integration
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
