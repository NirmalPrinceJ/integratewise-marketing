import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { 
  ArrowRight, 
  Layers, 
  BrainCircuit, 
  CheckCircle2, 
  Menu,
  X,
  PlayCircle,
  ShieldCheck,
  Zap,
  Building2,
  Users,
  Briefcase,
  Search,
  AlertTriangle,
  MessageSquare
} from 'lucide-react';
import { IntegrateWiseLogo } from '../IntegrateWiseLogo';
import { AnimatedSpineFlow } from '../visuals/AnimatedSpineFlow';
import { AnimatedApprovalUI } from '../visuals/AnimatedApprovalUI';
import { WorkspaceDashboard } from '../visuals/WorkspaceDashboard';
import { IntelligenceOverlay } from '../visuals/IntelligenceOverlay';
import { AccountsDashboard } from '../visuals/AccountsDashboard';

/* ── MOCKUP COMPONENTS ── */
// A glassmorphic card to show a preview of the "Spine"
function SpineVisualizer() {
  return (
    <div className="relative w-full max-w-5xl mx-auto mt-16 lg:mt-24">
      {/* Background glow behind the mockup */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-page-primary/20 blur-[120px] rounded-full z-0 pointer-events-none" />
      
      {/* Main Glass Mockup Box */}
      <div className="relative z-10 w-full" style={{ borderRadius: '20px' }}>
        <WorkspaceDashboard />
      </div>
    </div>
  );
}

export function MarketingLandingPage() {
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
            <a href="#product" className="text-sm font-medium text-page-slate hover:text-page-primary transition-colors">Product</a>
            <a href="#solutions" className="text-sm font-medium text-page-slate hover:text-page-primary transition-colors">Solutions</a>
            <a href="#stories" className="text-sm font-medium text-page-slate hover:text-page-primary transition-colors">Stories</a>
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
            <a href="#product" className="text-base font-medium text-page-navy-dark" onClick={() => setMobileMenuOpen(false)}>Product</a>
            <a href="#solutions" className="text-base font-medium text-page-navy-dark" onClick={() => setMobileMenuOpen(false)}>Solutions</a>
            <a href="#stories" className="text-base font-medium text-page-navy-dark" onClick={() => setMobileMenuOpen(false)}>Stories</a>
            <hr className="border-page-border-light my-2" />
            <Link to="/" className="text-base font-medium text-page-navy-dark" onClick={() => setMobileMenuOpen(false)}>Book a Demo</Link>
            <Link to="https://app.integratewise.ai" target="_blank" rel="noreferrer" className="py-3 rounded-lg text-center font-medium text-white shadow-md" style={{ background: 'var(--color-page-primary)' }} onClick={() => setMobileMenuOpen(false)}>
              Open App
            </Link>
          </div>
        )}
      </header>

      {/* ── 1. HERO SECTION ── */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden bg-dot-pattern">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-page-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-page-primary/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-page-primary/20 bg-page-primary/5 mb-8 text-sm font-semibold text-page-primary animate-fade-in-up">
            <SparklesIcon className="w-4 h-4" /> Announcing the Adaptive Spine
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-page-navy-dark tracking-tight leading-[1.1] mb-6 animate-fade-in-up [animation-delay:100ms]">
            Turn messy tools, <br className="hidden md:block" /> emails, and chats into <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-page-primary to-page-accent">
              one intelligent workspace.
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-page-slate-dark max-w-3xl mx-auto leading-relaxed mb-10 animate-fade-in-up [animation-delay:200ms]">
            IntegrateWise is a thinking workspace for the modern era — built on one intelligence layer (the Spine) that connects all your tools, and governed AI that proposes actions you approve.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up [animation-delay:300ms]">
            <Link 
              to="https://app.integratewise.ai" target="_blank" rel="noreferrer" 
              className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-white shadow-xl shadow-page-primary/20 hover:shadow-page-primary/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group"
              style={{ background: 'linear-gradient(135deg, var(--color-page-primary), var(--color-page-accent))' }}
            >
              Open App
            </Link>
            <Link 
              to="/demo" 
              className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-page-navy-dark bg-white border border-page-border-primary hover:bg-page-surface-hover transition-colors flex items-center justify-center gap-2"
            >
              <PlayCircle className="w-5 h-5" /> See live demo
            </Link>
          </div>
        </div>

        <div className="animate-fade-in-up [animation-delay:400ms]">
          <SpineVisualizer />
        </div>
      </section>

      {/* ── LOGO CLOUD ── */}
      <section className="py-10 border-y border-page-border-light bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm font-semibold text-page-slate-light uppercase tracking-wider mb-8">
            Powering context for modern enterprise tools
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-all duration-500">
             <div className="flex items-center gap-2.5 font-bold text-lg text-page-navy-dark">
               <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none"><path d="M15.94 3.57c-.82-.55-1.79-.84-2.81-.84-1.22 0-2.37.42-3.28 1.19A5.46 5.46 0 0 0 8.05 7.2l-3.7 6.45a5.48 5.48 0 0 0 .64 6.17c.83.98 1.97 1.63 3.23 1.85.47.08.94.12 1.4.12 1.76 0 3.42-.82 4.47-2.24l.54-.73a.5.5 0 0 0-.81-.58l-.54.73a4.48 4.48 0 0 1-5.5 1.43 4.48 4.48 0 0 1-2.2-2.63 4.47 4.47 0 0 1 .35-3.45l3.7-6.45a4.47 4.47 0 0 1 3.84-2.35c.83 0 1.62.22 2.3.64a4.47 4.47 0 0 1 1.71 6.15l-3.34 5.83a2.57 2.57 0 0 1-2.2 1.35 2.52 2.52 0 0 1-2.2-1.2 2.54 2.54 0 0 1-.02-2.56l2.97-5.19a.83.83 0 0 1 1.48.77l-2.97 5.18a.88.88 0 0 0 .01.88.86.86 0 0 0 .73.42.9.9 0 0 0 .76-.46l3.34-5.83A5.47 5.47 0 0 0 15.94 3.57z" fill="#00A1E0"/></svg>
               Salesforce
             </div>
             <div className="flex items-center gap-2.5 font-bold text-lg text-page-navy-dark">
               <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none"><path d="M22.28 5.37a6.27 6.27 0 0 0-3.72-3.72A6.22 6.22 0 0 0 16.23 1h-.01a6.2 6.2 0 0 0-4.37 1.78 6.21 6.21 0 0 0-4.38-1.78 6.22 6.22 0 0 0-6.2 6.22 6.2 6.2 0 0 0 .78 3.02h-.02l5.81 9.09a.76.76 0 0 0 .64.36.75.75 0 0 0 .64-.36l1.84-2.88h.04L12 15.2l3.87-6.05a2.78 2.78 0 0 1 2.35-1.32 2.81 2.81 0 0 1 2.42 1.39 2.79 2.79 0 0 1-.35 3.3l-6.14 7.03a.5.5 0 0 0 .75.66l6.15-7.03a3.8 3.8 0 0 0 .48-4.5 3.81 3.81 0 0 0-3.3-1.85 3.78 3.78 0 0 0-3.2 1.8l-3.04 4.75-3.94-6.16a3.85 3.85 0 0 0 .03-3.86 3.81 3.81 0 0 0-3.31-1.87A3.82 3.82 0 0 0 2.4 4.6a3.82 3.82 0 0 0 .5 4.55" fill="#03363D"/></svg>
               Zendesk
             </div>
             <div className="flex items-center gap-2.5 font-bold text-lg text-page-navy-dark">
               <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none"><path d="M12.005 2C6.488 2 2 6.485 2 12c0 5.514 4.488 10 10.005 10C17.52 22 22 17.514 22 12c0-5.515-4.48-10-9.995-10z" fill="#2684FF"/><path d="M11.07 15.88a.54.54 0 0 1-.07-.26c0-.09.02-.18.07-.26l3.2-4.65a.3.3 0 0 0-.24-.47H8.58a.16.16 0 0 0-.13.25l3.71 5.39a.68.68 0 0 0 .55.29.67.67 0 0 0 .55-.29l1.62-2.35-1.83-2.65-1.96 2.85a.54.54 0 0 1-.43.25.54.54 0 0 1-.44-.25l.01.15z" fill="white"/></svg>
               Jira
             </div>
             <div className="flex items-center gap-2.5 font-bold text-lg text-page-navy-dark">
               <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none"><path d="M5.04 15.02a2.4 2.4 0 0 1-2.39 2.39A2.4 2.4 0 0 1 .26 15.02a2.4 2.4 0 0 1 2.39-2.39h2.39v2.39zm1.2 0a2.4 2.4 0 0 1 2.39-2.39 2.4 2.4 0 0 1 2.39 2.39v5.97a2.4 2.4 0 0 1-2.39 2.39 2.4 2.4 0 0 1-2.39-2.39v-5.97z" fill="#E01E5A"/><path d="M8.63 5.04a2.4 2.4 0 0 1-2.39-2.39A2.4 2.4 0 0 1 8.63.26a2.4 2.4 0 0 1 2.39 2.39v2.39H8.63zm0 1.21a2.4 2.4 0 0 1 2.39 2.39 2.4 2.4 0 0 1-2.39 2.39H2.65a2.4 2.4 0 0 1-2.39-2.39 2.4 2.4 0 0 1 2.39-2.39h5.98z" fill="#36C5F0"/><path d="M18.59 8.64a2.4 2.4 0 0 1 2.39-2.39 2.4 2.4 0 0 1 2.39 2.39 2.4 2.4 0 0 1-2.39 2.39h-2.39V8.64zm-1.2 0a2.4 2.4 0 0 1-2.39 2.39 2.4 2.4 0 0 1-2.39-2.39V2.65a2.4 2.4 0 0 1 2.39-2.39 2.4 2.4 0 0 1 2.39 2.39v5.99z" fill="#2EB67D"/><path d="M15 18.6a2.4 2.4 0 0 1 2.39 2.39 2.4 2.4 0 0 1-2.39 2.39 2.4 2.4 0 0 1-2.39-2.39V18.6H15zm0-1.2a2.4 2.4 0 0 1-2.39-2.39A2.4 2.4 0 0 1 15 12.62h5.98a2.4 2.4 0 0 1 2.39 2.39 2.4 2.4 0 0 1-2.39 2.39H15z" fill="#ECB22E"/></svg>
               Slack
             </div>
             <div className="flex items-center gap-2.5 font-bold text-lg text-page-navy-dark">
               <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none"><path d="M18.16 3.68a4.33 4.33 0 0 0-3.87 2.4 4.07 4.07 0 0 0-3.39-1.82 4.12 4.12 0 0 0-4.09 4.12c0 .24.02.47.06.7A6.1 6.1 0 0 0 2.5 15c0 3.4 2.76 6.15 6.16 6.15.9 0 1.77-.2 2.56-.57a4.53 4.53 0 0 0 3.48 1.56 4.56 4.56 0 0 0 4.52-4.01 4.98 4.98 0 0 0 2.36-4.22c0-2.62-2.04-5.06-3.42-5.06v-.01a4.37 4.37 0 0 0 .01-5.16z" fill="#FF7A59"/></svg>
               HubSpot
             </div>
          </div>
        </div>
      </section>

      {/* ── 2. PROBLEM (Daily Plumbing) ── */}
      <section id="problem" className="py-24 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-page-navy-dark tracking-tight mb-6">
            Your tools, emails, and chats are a mess. <br className="hidden sm:block" />
            <span className="text-page-slate-light">And you have no idea what's really going on.</span>
          </h2>
          <p className="text-lg lg:text-xl text-page-slate-dark leading-relaxed mb-16 max-w-2xl mx-auto">
            Right now, your team acts as the human integration layer—jumping between tabs just to piece together what happened with an account.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-8 text-left">
            <div className="p-6 rounded-2xl bg-white border border-page-border-light shadow-sm">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-4">
                 <Search className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-page-navy-dark mb-2">Jumping Between Silos</h3>
              <p className="text-page-slate text-sm leading-relaxed">Constantly context-switching between Slack, email, your CRM, and support tickets just to resolve a simple issue.</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-white border border-page-border-light shadow-sm">
              <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center mb-4">
                 <AlertTriangle className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-lg font-bold text-page-navy-dark mb-2">Lost Context & Missed Signals</h3>
              <p className="text-page-slate text-sm leading-relaxed">Crucial churn signals or upsell opportunities slip through the cracks because the data is disconnected.</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-white border border-page-border-light shadow-sm">
              <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center mb-4">
                 <BrainCircuit className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-lg font-bold text-page-navy-dark mb-2">Amnesic AI Tools</h3>
              <p className="text-page-slate text-sm leading-relaxed">Generic AI generators forget your business history and force you to rewrite prompts everywhere.</p>
            </div>
          </div>

          {/* Visual: Intelligent Plumbing */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-page-border-light shadow-xl">
              <img 
                src="/images/intelligent-plumbing.png" 
                alt="Intelligent plumbing connecting scattered tools into unified data" 
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-center text-sm text-page-slate-light mt-4 italic">Your team shouldn't be the integration layer.</p>
          </div>
        </div>
      </section>

      {/* ── 3. SPINE DEFINITION (Mandatory) ── */}
      <section className="py-24 px-6 bg-page-navy-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-page-primary/30 via-page-navy-dark to-page-navy-dark" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-white/10 mx-auto flex items-center justify-center mb-8 border border-white/20">
              <Layers className="w-8 h-8 text-page-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">What is the Spine?</h2>
            <p className="text-xl md:text-2xl text-page-gray-blue leading-relaxed font-medium max-w-3xl mx-auto">
              The Spine / SSOT is intelligent plumbing that connects all your business systems—CRM, Tally, WhatsApp, machines, emails, bots, product usage, and historical data—into one living nervous system.
            </p>
            <p className="text-xl md:text-2xl text-page-primary leading-relaxed font-bold mt-6">
              It is adaptive in nature to dynamically fit the needs of any user, growing stronger over time.
            </p>
          </div>

          {/* Spine Network Visual */}
          <div className="mt-16 relative w-full max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-t from-page-navy-dark via-transparent to-transparent z-10 pointer-events-none" />
            <IntelligenceOverlay />
          </div>
        </div>
      </section>

      {/* ── 4. OUTCOMES SECTION ── */}
      <section className="py-24 px-6 bg-white border-b border-page-border-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-page-navy-dark tracking-tight mb-4">
              Real outcomes for your entire organization
            </h2>
            <p className="text-lg text-page-slate-dark">
              Stop treating your company like separate departments. Connect the context so everyone wins.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-page-surface-sidebar border border-page-border-light">
              <MessageSquare className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-page-navy-dark mb-4">Customer Success</h3>
              <div className="mb-4">
                <p className="text-[10px] font-bold tracking-widest text-page-slate-light uppercase mb-1">What you get</p>
                <p className="text-sm text-page-slate-dark font-medium">One unified account memory & risk radar.</p>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest text-page-slate-light uppercase mb-1">Why it matters</p>
                <p className="text-sm text-page-slate">Proactive churn prevention and zero surprises on renewals.</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-page-surface-sidebar border border-page-border-light">
              <Zap className="w-8 h-8 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold text-page-navy-dark mb-4">Sales & RevOps</h3>
              <div className="mb-4">
                <p className="text-[10px] font-bold tracking-widest text-page-slate-light uppercase mb-1">What you get</p>
                <p className="text-sm text-page-slate-dark font-medium">Better QBRs & instant pipeline context.</p>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest text-page-slate-light uppercase mb-1">Why it matters</p>
                <p className="text-sm text-page-slate">Clean forecasting and zero time wasted digging for deal history.</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-page-surface-sidebar border border-page-border-light">
              <ShieldCheck className="w-8 h-8 text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold text-page-navy-dark mb-4">Support Teams</h3>
              <div className="mb-4">
                <p className="text-[10px] font-bold tracking-widest text-page-slate-light uppercase mb-1">What you get</p>
                <p className="text-sm text-page-slate-dark font-medium">Full historical context synced magically.</p>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest text-page-slate-light uppercase mb-1">Why it matters</p>
                <p className="text-sm text-page-slate">Faster resolutions and fewer escalations to engineering.</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-page-surface-sidebar border border-page-border-light">
              <Building2 className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold text-page-navy-dark mb-4">Founders</h3>
              <div className="mb-4">
                <p className="text-[10px] font-bold tracking-widest text-page-slate-light uppercase mb-1">What you get</p>
                <p className="text-sm text-page-slate-dark font-medium">A single cockpit for truth and execution.</p>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest text-page-slate-light uppercase mb-1">Why it matters</p>
                <p className="text-sm text-page-slate">Unmatched visibility into what's actually happening in your business.</p>
              </div>
            </div>
          </div>

          {/* Workspace Visual */}
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="w-full overflow-hidden rounded-2xl shadow-xl">
              <AccountsDashboard />
            </div>
            <p className="text-center text-sm text-page-slate-light mt-4 font-medium">Account 360 — Every signal, every tool, one unified view</p>
          </div>
        </div>
      </section>

      {/* ── 5. HOW IT WORKS ── */}
      <section id="product" className="py-24 px-6 bg-page-surface-sidebar">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-page-navy-dark tracking-tight mb-16 text-center">
            How it works
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-12">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-14 h-14 shrink-0 rounded-full bg-page-primary text-white flex items-center justify-center text-xl font-bold shadow-xl">1</div>
                <div>
                  <h3 className="text-xl font-bold text-page-navy-dark mb-2">Connect tools (no migration)</h3>
                  <p className="text-base text-page-slate">Stop rebuilding your stack. Plug in your existing tools via secure connectors, and keep working exactly how you like.</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-14 h-14 shrink-0 rounded-full bg-page-primary text-white flex items-center justify-center text-xl font-bold shadow-xl">2</div>
                <div>
                  <h3 className="text-xl font-bold text-page-navy-dark mb-2">Spine builds unified truth & context</h3>
                  <p className="text-base text-page-slate">The platform continuously runs in the background, stitching tickets, emails, and CRM records into a single knowledge graph.</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-14 h-14 shrink-0 rounded-full bg-page-primary text-white flex items-center justify-center text-xl font-bold shadow-xl">3</div>
                <div>
                  <h3 className="text-xl font-bold text-page-navy-dark mb-2">AI surfaces, prepares, and routes</h3>
                  <p className="text-base text-page-slate">AI spots signals, prepares action briefs, and routes them to you. <span className="font-semibold text-page-primary">No auto-pilot.</span> Everything waits for your explicit approval.</p>
                </div>
              </div>
            </div>

            {/* Approval UI Visual */}
            <div className="relative">
              <div className="absolute -inset-4 bg-page-primary/5 blur-2xl rounded-3xl pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden border border-page-border-light shadow-2xl">
                <img 
                  src="/images/approval-ui.png" 
                  alt="AI-proposed actions await your explicit approval" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-center text-sm text-page-slate-light mt-4 font-medium">Every AI action waits for your approval before executing</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. PROOF / STORY ── */}
      <section id="stories" className="py-24 px-6 bg-white border-y border-page-border-light">
        <div className="max-w-5xl mx-auto rounded-3xl bg-page-navy-dark text-white p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-page-primary/20 blur-[80px] rounded-full" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Proven in Real Operations</h2>
              <p className="text-lg text-page-gray-blue leading-relaxed text-balance">
                "In a real-world enterprise scenario, the Spine helped identify and surface early signals that a major customer account was at risk. The system connected signals across multiple tools—support tickets, Slack sentiment, and Salesforce—allowing teams to see the unfolding problem. We protected an $8M account that had turned red because we combined operational truth with contextual signals."
              </p>
            </div>
            <div className="img-container-elevated">
              <AnimatedApprovalUI />
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. WHO IT'S FOR ── */}
      <section className="py-24 px-6 bg-page-surface-sidebar">
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-3xl sm:text-4xl font-bold text-page-navy-dark tracking-tight mb-12">
            Who IntegrateWise is built for
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-white border border-page-border-light shadow-sm text-center">
              <Building2 className="w-10 h-10 mx-auto text-page-primary mb-4" />
              <h3 className="text-lg font-bold text-page-navy-dark mb-2">B2B SaaS</h3>
              <p className="text-page-slate text-sm">Scaling teams from 2M–50M ARR needing to align sales, support, and success.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white border border-page-border-light shadow-sm text-center">
              <Users className="w-10 h-10 mx-auto text-page-accent mb-4" />
              <h3 className="text-lg font-bold text-page-navy-dark mb-2">Agencies & Services</h3>
              <p className="text-page-slate text-sm">Teams managing dozens of clients across decentralized comms and tools.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white border border-page-border-light shadow-sm text-center">
              <Briefcase className="w-10 h-10 mx-auto text-emerald-500 mb-4" />
              <h3 className="text-lg font-bold text-page-navy-dark mb-2">Business Owners</h3>
              <p className="text-page-slate text-sm">Leaders who want a single workspace to run their business—without rebuilding the stack.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. FINAL CTA STRIP ── */}
      <section className="py-24 px-6 relative overflow-hidden bg-page-navy-dark text-white border-t-4 border-page-primary">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-page-primary/40 via-page-navy-dark to-page-navy-dark" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8">
            Tell me what's really happening in my business.
          </h2>
          <p className="text-xl text-page-gray-blue mb-12 max-w-2xl mx-auto">
            See your Spine in action next week. Turn messy tools, emails, and chats into one intelligent workspace.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="https://app.integratewise.ai" target="_blank" rel="noreferrer" 
              className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold text-page-navy-dark bg-white shadow-xl hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/20 transition-all duration-300"
            >
              Create workspace in 2 minutes
            </Link>
            <Link 
              to="/product" 
              className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
               See product tour
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-white border-t border-page-border-light py-12 px-6">
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

// Icon wrapper for Hero
function SparklesIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a4.4 4.4 0 0 1 0-8.962L8.5 1.936A2 2 0 0 0 9.937.5l1.582-6.135a4.4 4.4 0 0 1 8.962 0L22.063.5A2 2 0 0 0 23.5 1.937l6.135 1.581a4.4 4.4 0 0 1 0 8.964L23.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a4.4 4.4 0 0 1-8.964 0z" />
    </svg>
  );
}
