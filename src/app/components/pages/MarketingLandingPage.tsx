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

/* ── MOCKUP COMPONENTS ── */
// A glassmorphic card to show a preview of the "Spine"
function SpineVisualizer() {
  return (
    <div className="relative w-full max-w-5xl mx-auto mt-16 lg:mt-24">
      {/* Background glow behind the mockup */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-page-primary/20 blur-[120px] rounded-full z-0 pointer-events-none" />
      
      {/* Main Glass Mockup Box */}
      <div className="relative z-10 w-full rounded-2xl border border-white/40 bg-[#0F172A]/80 backdrop-blur-xl overflow-hidden flex flex-col justify-center items-center shadow-[0_20px_60px_rgba(235,67,121,0.2)]">
        <img 
          src="/images/hero-dashboard.png" 
          alt="B2B SaaS Dashboard Mockup" 
          className="w-full h-auto object-cover"
        />
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
            <a href="#product" className="text-base font-medium text-page-navy-dark" onClick={() => setMobileMenuOpen(false)}>Product</a>
            <a href="#solutions" className="text-base font-medium text-page-navy-dark" onClick={() => setMobileMenuOpen(false)}>Solutions</a>
            <a href="#stories" className="text-base font-medium text-page-navy-dark" onClick={() => setMobileMenuOpen(false)}>Stories</a>
            <hr className="border-page-border-light my-2" />
            <Link to="/" className="text-base font-medium text-page-navy-dark" onClick={() => setMobileMenuOpen(false)}>Book a Demo</Link>
            <Link to="https://app.integratewise.com" target="_blank" rel="noreferrer" className="py-3 rounded-lg text-center font-medium text-white shadow-md" style={{ background: 'var(--color-page-primary)' }} onClick={() => setMobileMenuOpen(false)}>
              Open App
            </Link>
          </div>
        )}
      </header>

      {/* ── 1. HERO SECTION ── */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
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
              to="https://app.integratewise.com" target="_blank" rel="noreferrer" 
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
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="flex items-center gap-2 font-bold text-xl text-page-navy-dark"><span className="w-8 h-8 rounded bg-blue-500" />Salesforce</div>
             <div className="flex items-center gap-2 font-bold text-xl text-page-navy-dark"><span className="w-8 h-8 rounded bg-green-500" />Zendesk</div>
             <div className="flex items-center gap-2 font-bold text-xl text-page-navy-dark"><span className="w-8 h-8 rounded bg-cyan-500" />Jira</div>
             <div className="flex items-center gap-2 font-bold text-xl text-page-navy-dark"><span className="w-8 h-8 rounded bg-purple-500" />Slack</div>
             <div className="flex items-center gap-2 font-bold text-xl text-page-navy-dark"><span className="w-8 h-8 rounded bg-orange-500" />HubSpot</div>
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
        </div>
      </section>

      {/* ── 3. SPINE DEFINITION (Mandatory) ── */}
      <section className="py-24 px-6 bg-page-navy-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-page-primary/30 via-page-navy-dark to-page-navy-dark" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="w-16 h-16 rounded-2xl bg-white/10 mx-auto flex items-center justify-center mb-8 border border-white/20">
            <Layers className="w-8 h-8 text-page-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">What is the Spine?</h2>
          <p className="text-xl md:text-2xl text-page-gray-blue leading-relaxed font-medium">
            The Spine / SSOT is intelligent plumbing that connects all your business systems—CRM, Tally, WhatsApp, machines, emails, bots, product usage, and historical data—into one living nervous system.
          </p>
          <p className="text-xl md:text-2xl text-page-primary leading-relaxed font-bold mt-6">
            It is adaptive in nature to dynamically fit the needs of any user, growing stronger over time.
          </p>
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
        </div>
      </section>

      {/* ── 5. HOW IT WORKS ── */}
      <section id="product" className="py-24 px-6 bg-page-surface-sidebar">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-page-navy-dark tracking-tight mb-16 text-center">
            How it works
          </h2>
          
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
              <div className="w-16 h-16 shrink-0 rounded-full bg-page-primary text-white flex items-center justify-center text-2xl font-bold shadow-xl">1</div>
              <div>
                <h3 className="text-2xl font-bold text-page-navy-dark mb-2">Connect tools (no migration)</h3>
                <p className="text-lg text-page-slate">Stop rebuilding your stack. Plug in your existing tools via secure connectors, and keep working exactly how you like.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
              <div className="w-16 h-16 shrink-0 rounded-full bg-page-primary text-white flex items-center justify-center text-2xl font-bold shadow-xl">2</div>
              <div>
                <h3 className="text-2xl font-bold text-page-navy-dark mb-2">Spine builds unified truth & context</h3>
                <p className="text-lg text-page-slate">The platform continuously runs in the background, stitching tickets, emails, and CRM records into a single knowledge graph.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
              <div className="w-16 h-16 shrink-0 rounded-full bg-page-primary text-white flex items-center justify-center text-2xl font-bold shadow-xl">3</div>
              <div>
                <h3 className="text-2xl font-bold text-page-navy-dark mb-2">AI surfaces, prepares, and routes</h3>
                <p className="text-lg text-page-slate">AI spots signals, prepares action briefs, and routes them to you. <span className="font-semibold text-page-primary">No auto-pilot.</span> Everything waits for your explicit approval.</p>
              </div>
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
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-xl">
               <div className="flex gap-3 items-center mb-4 pb-4 border-b border-white/10">
                 <AlertTriangle className="w-5 h-5 text-amber-400" />
                 <span className="font-semibold">Churn Risk Detected</span>
               </div>
               <div className="space-y-3 font-mono text-sm text-page-gray-blue">
                 <p>→ High volume API timeout tickets (Zendesk)</p>
                 <p>→ Negative sentiment in #acme-shared (Slack)</p>
                 <p>→ Renewal in 30 days (Salesforce)</p>
               </div>
               <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                 <span className="text-sm font-medium">Proposed Action: Notify Lead/CSM</span>
                 <button className="px-4 py-1.5 bg-emerald-500 rounded text-white font-bold text-sm">Approve</button>
               </div>
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
              to="https://app.integratewise.com" target="_blank" rel="noreferrer" 
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
