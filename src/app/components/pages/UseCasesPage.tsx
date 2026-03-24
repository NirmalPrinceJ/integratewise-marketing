import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { 
  Menu,
  X,
  Briefcase,
  HeartHandshake,
  Settings,
  PieChart,
  Laptop,
  Users,
  Building2,
  Stethoscope,
  GraduationCap,
  Hammer,
  ShoppingCart,
  DollarSign,
  Truck,
  Clapperboard,
  Landmark
} from 'lucide-react';
import { IntegrateWiseLogo } from '../IntegrateWiseLogo';
import { AccountsDashboard } from '../visuals/AccountsDashboard';

export function UseCasesPage() {
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
            <Link to="/how-it-works" className="text-sm font-medium text-page-slate hover:text-page-primary transition-colors">How It Works</Link>
            <Link to="/use-cases" className="text-sm font-medium text-page-primary transition-colors">Use Cases</Link>
            <Link to="/integrations" className="text-sm font-medium text-page-slate hover:text-page-primary transition-colors">Integrations</Link>
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
            <Link to="/product" className="text-base font-medium text-page-navy-dark" onClick={() => setMobileMenuOpen(false)}>Platform</Link>
            <Link to="/how-it-works" className="text-base font-medium text-page-navy-dark" onClick={() => setMobileMenuOpen(false)}>How It Works</Link>
            <Link to="/use-cases" className="text-base font-medium text-page-primary" onClick={() => setMobileMenuOpen(false)}>Use Cases</Link>
            <Link to="/integrations" className="text-base font-medium text-page-navy-dark" onClick={() => setMobileMenuOpen(false)}>Integrations</Link>
            <hr className="border-page-border-light my-2" />
            <Link to="/" className="text-base font-medium text-page-navy-dark" onClick={() => setMobileMenuOpen(false)}>Book a Demo</Link>
            <Link to="https://app.integratewise.ai" target="_blank" rel="noreferrer" className="py-3 rounded-lg text-center font-medium text-white shadow-md" style={{ background: 'var(--color-page-primary)' }} onClick={() => setMobileMenuOpen(false)}>
              Open App
            </Link>
          </div>
        )}
      </header>

      {/* ── 1. HERO SECTION ── */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 text-center border-b border-page-border-light bg-page-surface-sidebar bg-dot-pattern relative overflow-hidden">
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-[800px] h-[800px] bg-page-primary/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-page-primary/20 bg-page-primary/5 mb-8 text-sm font-semibold text-page-primary">
            Department & Industry Agnostic
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-page-navy-dark mb-6">
            One foundation. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-page-primary to-page-accent">Multiple functions.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-page-slate-dark leading-relaxed max-w-3xl mx-auto mb-12">
            IntegrateWise adapts to different departments and use cases while preserving one intelligence foundation underneath. Everyone sees what they need, but the truth remains unified.
          </p>

          {/* Departments Visual */}
          <div className="max-w-5xl mx-auto">
            <div className="w-full overflow-hidden rounded-2xl shadow-2xl border border-page-border-light text-left">
              <div className="-mt-0">
                <AccountsDashboard />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. DEPARTMENT USE CASES ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="p-8 rounded-2xl bg-white border border-page-border-light shadow-sm hover:shadow-xl hover:border-page-primary/30 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Briefcase className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-page-navy-dark mb-4">Sales</h3>
            <p className="text-page-slate leading-relaxed">
              Connect account context, stakeholders, deal signals, activity history, risks, and next-best actions without hunting through CRM notes or Slack threads.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-page-border-light shadow-sm hover:shadow-xl hover:border-page-accent/30 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-pink-50 text-page-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <HeartHandshake className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-page-navy-dark mb-4">Customer Success</h3>
            <p className="text-page-slate leading-relaxed">
              Combine health signals, support context, stakeholder changes, renewals, and proactive risk visibility to save accounts before they churn.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-page-border-light shadow-sm hover:shadow-xl hover:border-page-primary/30 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-indigo-50 text-page-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Settings className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-page-navy-dark mb-4">RevOps / Operations</h3>
            <p className="text-page-slate leading-relaxed">
              Create one connected view of systems, workflows, dependencies, handoffs, and execution gaps across the entire revenue engine.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-page-border-light shadow-sm hover:shadow-xl hover:border-emerald-500/30 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <PieChart className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-page-navy-dark mb-4">Finance</h3>
            <p className="text-page-slate leading-relaxed">
              Link commitments, invoices, payment context, approvals, and operational decision history directly to the relevant account and deal records.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-page-border-light shadow-sm hover:shadow-xl hover:border-purple-500/30 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Laptop className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-page-navy-dark mb-4">Product & Engineering</h3>
            <p className="text-page-slate leading-relaxed">
              Combine customer feedback, severe incidents, roadmap items, delivery context, and field intelligence into actionable product insights.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-page-navy-dark text-white border border-page-navy-dark shadow-xl hover:shadow-2xl hover:border-page-primary/50 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-page-primary/40 to-transparent opacity-50" />
            <div className="relative z-10 w-14 h-14 rounded-xl bg-white/10 text-white border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-7 h-7" />
            </div>
            <h3 className="relative z-10 text-2xl font-bold text-white mb-4">Leadership</h3>
            <p className="relative z-10 text-page-gray-blue leading-relaxed">
              Get one unified, god-mode view across business truth, signals, risk, cross-functional coordination, and next-level strategic decisions.
            </p>
          </div>

        </div>
      </section>

      {/* ── 3. INDUSTRY ADAPTATION BLOCK ── */}
      <section className="py-24 px-6 bg-page-surface-sidebar border-y border-page-border-light text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-page-navy-dark tracking-tight mb-6">
            Adapts to your industry.
          </h2>
          <p className="text-xl text-page-slate-dark max-w-2xl mx-auto mb-16">
            The Spine is industry-agnostic. Whether you're tracking pipelines, managing clinical trials, or coordinating supply chains, the truth remains connected.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="p-4 bg-white rounded-xl border border-page-border-light flex flex-col items-center justify-center gap-2 font-medium text-page-slate-dark hover:text-page-primary hover:border-page-primary/30 transition-colors">
              <Building2 className="w-6 h-6" /> SaaS & Tech
            </div>
            <div className="p-4 bg-white rounded-xl border border-page-border-light flex flex-col items-center justify-center gap-2 font-medium text-page-slate-dark hover:text-page-primary hover:border-page-primary/30 transition-colors">
              <Users className="w-6 h-6" /> Prof. Services
            </div>
            <div className="p-4 bg-white rounded-xl border border-page-border-light flex flex-col items-center justify-center gap-2 font-medium text-page-slate-dark hover:text-page-primary hover:border-page-primary/30 transition-colors">
              <Stethoscope className="w-6 h-6" /> Healthcare
            </div>
            <div className="p-4 bg-white rounded-xl border border-page-border-light flex flex-col items-center justify-center gap-2 font-medium text-page-slate-dark hover:text-page-primary hover:border-page-primary/30 transition-colors">
              <GraduationCap className="w-6 h-6" /> Education
            </div>
            <div className="p-4 bg-white rounded-xl border border-page-border-light flex flex-col items-center justify-center gap-2 font-medium text-page-slate-dark hover:text-page-primary hover:border-page-primary/30 transition-colors">
              <Hammer className="w-6 h-6" /> Manufacturing
            </div>
            <div className="p-4 bg-white rounded-xl border border-page-border-light flex flex-col items-center justify-center gap-2 font-medium text-page-slate-dark hover:text-page-primary hover:border-page-primary/30 transition-colors">
              <ShoppingCart className="w-6 h-6" /> Retail
            </div>
            <div className="p-4 bg-white rounded-xl border border-page-border-light flex flex-col items-center justify-center gap-2 font-medium text-page-slate-dark hover:text-page-primary hover:border-page-primary/30 transition-colors">
              <DollarSign className="w-6 h-6" /> Finance
            </div>
            <div className="p-4 bg-white rounded-xl border border-page-border-light flex flex-col items-center justify-center gap-2 font-medium text-page-slate-dark hover:text-page-primary hover:border-page-primary/30 transition-colors">
              <Truck className="w-6 h-6" /> Logistics
            </div>
            <div className="p-4 bg-white rounded-xl border border-page-border-light flex flex-col items-center justify-center gap-2 font-medium text-page-slate-dark hover:text-page-primary hover:border-page-primary/30 transition-colors">
              <Clapperboard className="w-6 h-6" /> Media
            </div>
            <div className="p-4 bg-white rounded-xl border border-page-border-light flex flex-col items-center justify-center gap-2 font-medium text-page-slate-dark hover:text-page-primary hover:border-page-primary/30 transition-colors">
              <Landmark className="w-6 h-6" /> Public Sector
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. FINAL CTA ── */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold tracking-tight mb-8 text-page-navy-dark">
          Ready to align your teams?
        </h2>
        <Link 
          to="https://app.integratewise.ai" target="_blank" rel="noreferrer" 
          className="inline-flex px-8 py-4 rounded-full text-base font-bold text-white shadow-xl hover:-translate-y-1 hover:shadow-2xl hover:shadow-page-primary/30 transition-all duration-300"
          style={{ background: 'linear-gradient(135deg, var(--color-page-primary), var(--color-page-accent))' }}
        >
          Build your custom workspace
        </Link>
      </section>

    </div>
  );
}
