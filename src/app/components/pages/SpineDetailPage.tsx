import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { 
  Layers, 
  Menu,
  X,
  Database,
  MessageSquare,
  FileText,
  LineChart,
  BrainCircuit,
  Lock,
  Workflow
} from 'lucide-react';
import { IntegrateWiseLogo } from '../IntegrateWiseLogo';

export function SpineDetailPage() {
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
            <Link to="/spine" className="text-sm font-medium text-page-accent transition-colors">The Spine</Link>
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
            <Link to="/spine" className="text-base font-medium text-page-accent" onClick={() => setMobileMenuOpen(false)}>The Spine</Link>
            <hr className="border-white/10 my-2" />
            <Link to="/" className="text-base font-medium text-white" onClick={() => setMobileMenuOpen(false)}>Book a Demo</Link>
            <Link to="https://app.integratewise.com" target="_blank" rel="noreferrer" className="py-3 rounded-lg text-center font-medium text-white shadow-md" style={{ background: 'var(--color-page-accent)' }} onClick={() => setMobileMenuOpen(false)}>
              Open App
            </Link>
          </div>
        )}
      </header>

      {/* ── 1. HERO SECTION ── */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden bg-page-navy-dark text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-page-primary/40 via-page-navy-dark to-page-navy-dark" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-page-accent/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="w-20 h-20 rounded-2xl bg-white/10 mx-auto flex items-center justify-center mb-8 border border-white/20 shadow-[0_0_50px_rgba(235,67,121,0.3)] animate-pulse">
            <Layers className="w-10 h-10 text-page-accent" />
          </div>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 mb-6 text-sm font-semibold tracking-widest uppercase text-page-gray-blue animate-fade-in-up">
            SSOT + Universal Intelligence Layer
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8 animate-fade-in-up [animation-delay:100ms]">
            The Spine.
          </h1>
          
          <p className="text-xl sm:text-2xl text-page-gray-blue max-w-3xl mx-auto leading-relaxed mb-12 animate-fade-in-up [animation-delay:200ms]">
            The intelligent foundation of IntegrateWise. It is the single source of truth and the universal intelligence layer that connects all your tools, systems, records, conversations, and decisions into one living operational nervous system.
          </p>
          
          <div className="mt-16 relative w-full max-w-5xl mx-auto animate-fade-in-up [animation-delay:300ms]">
            <div className="absolute inset-0 bg-gradient-to-t from-page-navy-dark via-transparent to-transparent z-10" />
            <img 
              src="/images/spine-network.png" 
              alt="The Spine Network Graph" 
              className="w-full h-auto rounded-3xl border border-white/10 shadow-2xl object-cover relative z-0"
            />
          </div>
        </div>
      </section>

      {/* ── 2. WHAT THE SPINE ACTUALLY IS ── */}
      <section className="py-24 px-6 bg-white border-b border-page-border-light relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-page-primary/5 rounded-full blur-[80px]" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-page-navy-dark tracking-tight mb-8">
              What the Spine Actually Is
            </h2>
            <p className="text-xl text-page-slate-dark leading-relaxed font-medium">
              The Spine / SSOT is <span className="text-page-primary font-bold">intelligent plumbing</span> that connects all your business systems—CRM, Tally, WhatsApp, machines, emails, bots, product usage, and historical data—into one living nervous system.
            </p>
            <p className="text-xl text-page-slate-dark leading-relaxed font-medium mt-6">
              Instead of information being scattered across tools, the Spine preserves context and relationships between everything. This ensures that both people and AI systems work with complete knowledge rather than fragments.
            </p>
            <div className="mt-12 rounded-3xl overflow-hidden border border-page-border-light shadow-2xl relative">
               <img 
                 src="/images/intelligent-plumbing.png" 
                 alt="Intelligent Plumbing connecting systems" 
                 className="w-full h-auto object-cover"
               />
            </div>
        </div>
      </section>

      {/* ── 3. ADAPTIVE BY DESIGN ── */}
      <section className="py-24 px-6 bg-page-surface-sidebar border-b border-page-border-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-page-navy-dark tracking-tight mb-4">
              Adaptive by Design
            </h2>
            <p className="text-lg text-page-slate-dark leading-relaxed">
              The Spine is adaptive in nature to dynamically fit in and cater to the needs of any user—irrespective of whether they are a Student, Working Professional, or Business Person.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-page-border-light shadow-sm">
              <h3 className="text-2xl font-bold text-page-navy-dark mb-4">Industry & Department Agnostic</h3>
              <p className="text-lg text-page-slate leading-relaxed">
                Sales, customer success, finance, product, or operations can all operate through the same underlying intelligence layer. The system dynamically adjusts to the environment.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white border border-page-border-light shadow-sm">
              <h3 className="text-2xl font-bold text-page-navy-dark mb-4">A System That Grows With You</h3>
              <p className="text-lg text-page-slate leading-relaxed">
                The Spine is not only adaptive based on the user, but it grows along with the user and becomes stronger. As more signals, conversations, and decisions flow through the system, it becomes richer and more context-aware.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. PROVEN IN REAL OPERATIONS ── */}
      <section className="py-24 px-6 bg-white border-b border-page-border-light">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#0F172A] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-500/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-page-primary/10 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 mb-6 text-sm font-semibold text-red-400">
                Real-World Enterprise Scenario
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-8">
                Protecting an $8M Account
              </h2>
              <div className="text-xl text-page-gray-blue leading-relaxed space-y-6 max-w-3xl">
                <p>
                  The power of the Spine is not theoretical. In a real-world enterprise scenario, it helped identify and surface early signals that a major customer account was at risk.
                </p>
                <p>
                  The system connected signals across multiple tools and data sources, allowing teams to see the unfolding problem before it became irreversible. That visibility enabled intervention at the right moment and ultimately helped protect an $8M account that had turned red.
                </p>
                <p className="text-white font-medium border-l-4 border-page-primary pl-6">
                  This outcome was possible because the Spine allowed teams to combine <span className="text-page-accent">operational truth</span>, <span className="text-page-accent">contextual signals</span>, and <span className="text-page-accent">AI-driven proactive insights</span> into a single decision-making surface.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. THE CORE MOAT & PRINCIPLE ── */}
      <section className="py-24 px-6 bg-page-navy-dark text-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-page-accent/20 blur-[100px] rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-8">
            <Lock className="w-8 h-8 text-page-accent" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-8">
            The Core Moat
          </h2>
          <div className="text-xl md:text-2xl text-page-gray-blue leading-relaxed font-medium space-y-6 mb-16">
            <p>
              Most platforms focus on dashboards, automation, or isolated AI assistants. 
              <span className="text-white block mt-2">IntegrateWise focuses on building the intelligence layer underneath everything.</span>
            </p>
            <p>
              Over time, this becomes the primary moat of the platform, because the intelligence accumulated in the Spine cannot be easily replicated. It represents the living memory and operational understanding of an organization.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm text-left max-w-3xl mx-auto">
            <h3 className="text-page-primary font-bold tracking-widest uppercase mb-4 text-sm">System Principle</h3>
            <p className="text-xl md:text-2xl font-bold text-white leading-relaxed">
              Every step is driven by the Adaptive Spine (tenant Spine schema + Depth Matrix). If it's not in the Spine, it's not wired. Value is delivered only when the whole chain is Spine-based.
            </p>
          </div>
        </div>
      </section>

      {/* ── 6. FINAL CTA STRIP ── */}
      <section className="py-24 px-6 relative overflow-hidden bg-page-surface-sidebar border-t-4 border-page-accent">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-page-navy-dark">
            Connect your systems to the Spine.
          </h2>
          <p className="text-xl text-page-slate-dark mb-10 max-w-2xl mx-auto">
            Stop losing context. Give your AI and your team a single source of truth today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="https://app.integratewise.com" target="_blank" rel="noreferrer" 
              className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold text-white shadow-xl hover:-translate-y-1 hover:shadow-2xl hover:shadow-page-accent/30 transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, var(--color-page-accent), var(--color-page-primary))' }}
            >
              Open App
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
