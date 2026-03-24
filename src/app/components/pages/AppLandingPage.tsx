import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { 
  ArrowRight, 
  Database, 
  Server, 
  ShieldCheck, 
  Lock, 
  Key,
  Terminal,
  Cpu,
  Workflow,
  CheckCircle2,
  Code2
} from 'lucide-react';
import { IntegrateWiseLogo } from '../IntegrateWiseLogo';

export function AppLandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-page-navy-dark font-sans text-page-slate-light selection:bg-page-primary/30 selection:text-white overflow-x-hidden">
      
      {/* ── NAVIGATION ── */}
      <header 
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-page-navy-dark/90 backdrop-blur-lg border-b border-page-border-primary/20 py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <IntegrateWiseLogo 
              variant="icon-only"
              colorVariant="white"
              className={`transition-all duration-500 ${scrolled ? 'scale-75' : 'scale-90'} group-hover:scale-100 origin-left`} 
            />
            <span className={`font-bold tracking-tight text-white transition-all duration-300 ${scrolled ? 'text-lg' : 'text-xl'}`}>
              IntegrateWise App
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#architecture" className="text-sm font-medium text-page-slate hover:text-white transition-colors">Architecture</a>
            <a href="#pipeline" className="text-sm font-medium text-page-slate hover:text-white transition-colors">Data Pipeline</a>
            <a href="#security" className="text-sm font-medium text-page-slate hover:text-white transition-colors">Security</a>
            <Link to="/brand/documentation" className="text-sm font-medium text-page-slate hover:text-white transition-colors">Documentation</Link>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://app.integratewise.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block text-sm font-semibold text-page-slate hover:text-white transition-colors"
            >
              Sign In
            </a>
            <Link 
              to="https://app.integratewise.ai" target="_blank" rel="noopener noreferrer" 
              className="px-5 py-2.5 rounded-lg text-sm font-bold text-white shadow-lg hover:-translate-y-0.5 transition-all duration-300 border border-page-primary/50"
              style={{ background: 'linear-gradient(180deg, var(--color-page-primary) 0%, rgba(67, 86, 169, 0.8) 100%)' }}
            >
              Sign Up for Beta
            </Link>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-page-primary/20 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
        
        <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-8 text-xs font-semibold text-emerald-400">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Platform Status: Operational
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            The Universal Cognitive OS. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-page-primary via-page-accent to-pink-500">
              Your Infrastructure for Truth.
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-page-slate max-w-3xl mx-auto leading-relaxed mb-10">
            IntegrateWise App is the central nervous system connecting your tools, data, and AI. Built on Edge-computing and governed by hard-coded approval pipelines. Connect Supabase, Cloudflare, and custom APIs in one living graph.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link 
              to="https://app.integratewise.ai" target="_blank" rel="noopener noreferrer" 
              className="w-full sm:w-auto px-8 py-4 rounded-lg text-base font-bold text-white flex items-center justify-center gap-2 group hover:shadow-xl hover:shadow-page-primary/20 hover:-translate-y-1 transition-all"
              style={{ background: 'var(--color-page-primary)' }}
            >
              Start Building Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="#technical-docs" 
              className="w-full sm:w-auto px-8 py-4 rounded-lg text-base font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <Terminal className="w-5 h-5" /> Read the Documentation
            </a>
          </div>
        </div>

        {/* Dashboard / CLI Mockup */}
        <div className="mt-16 w-full max-w-5xl mx-auto rounded-xl border border-white/10 bg-[#0f111a] shadow-2xl overflow-hidden shadow-page-primary/10">
          <div className="flex flex-col">
            <div className="h-10 bg-[#1a1d27] border-b border-white/5 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <div className="ml-4 flex gap-1">
                <div className="px-3 py-1 bg-[#252a36] rounded text-[11px] text-white/70 font-mono">edge-worker.ts</div>
                <div className="px-3 py-1 text-[11px] text-white/40 font-mono">pipeline.ts</div>
              </div>
            </div>
            <div className="p-6 font-mono text-sm text-green-400 overflow-x-auto whitespace-pre">
              <span className="text-blue-400">INFO</span> [IntegrateWise] Initializing Cognitive Engine...<br/>
              <span className="text-blue-400">INFO</span> [Spine] Connecting to Supabase (pgVector) pool... <span className="text-white">OK</span><br/>
              <span className="text-blue-400">INFO</span> [Workers] Cloudflare distributed queue ready.<br/>
              <span className="text-yellow-400">WARN</span> [Governance] Execution token required for Flow C.<br/>
              <span className="text-emerald-400">SUCCESS</span> Environment synchronized. Edge compute live.
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNICAL ARCHITECTURE ── */}
      <section id="architecture" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">Technical Architecture</h2>
            <p className="text-page-slate text-lg max-w-2xl">A micro-orchestration engine built for scale. Fully decentralized compute on Cloudflare Workers backed by Supabase.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4 hover:bg-white/10 transition-colors">
              <Server className="w-8 h-8 text-page-primary" />
              <h3 className="text-xl font-bold text-white">Cloudflare Edge Compute</h3>
              <p className="text-sm text-page-slate leading-relaxed">
                Global deployment via Cloudflare Workers. We utilize D1 for serverless SQL, R2 for unstructured object storage, and Queues for high-throughput pipeline ingestion.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4 hover:bg-white/10 transition-colors">
              <Database className="w-8 h-8 text-emerald-400" />
              <h3 className="text-xl font-bold text-white">Supabase Core</h3>
              <p className="text-sm text-page-slate leading-relaxed">
                PostgreSQL is our single source of truth. Robust user authentication, realtime listeners, and pgVector for all semantic semantic/knowledge graph lookups.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4 hover:bg-white/10 transition-colors">
              <Workflow className="w-8 h-8 text-page-accent" />
              <h3 className="text-xl font-bold text-white">Three ingestion flows</h3>
              <p className="text-sm text-page-slate leading-relaxed">
                Flow A aggregates structured REST tools. Flow B processes unstructured documents. Flow C handles AI chat and LLM context extraction via the MCP gateway.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8 STAGE PIPELINE ── */}
      <section id="pipeline" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-white/5 border-y border-white/10" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">The 8-Stage Pipeline</h2>
            <p className="text-page-slate text-lg">Every piece of knowledge passes through our deterministic engine before entering the Spine.</p>
          </div>

          <div className="hidden lg:flex items-center justify-between gap-2 max-w-5xl mx-auto mb-16 relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -z-10 -translate-y-1/2" />
            {[
              { n: '1', l: 'Analyzer' },
              { n: '2', l: 'Classifier' },
              { n: '3', l: 'Filter' },
              { n: '4', l: 'Refiner' },
              { n: '5', l: 'Extractor' },
              { n: '6', l: 'Validator' },
              { n: '7', l: 'Scanner' },
              { n: '8', l: 'Sectorizer' },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-page-navy-dark border-2 border-page-primary text-white flex items-center justify-center font-bold text-sm z-10">
                  {step.n}
                </div>
                <span className="text-xs font-mono text-page-slate-light">{step.l}</span>
              </div>
            ))}
          </div>

          {/* Code block showing what happens */}
          <div className="max-w-3xl mx-auto rounded-xl bg-[#0f111a] border border-white/10 p-6 overflow-hidden">
            <div className="flex gap-2 mb-4 text-xs font-mono text-white/40">
              <span>// Pseudo-code representation of the engine loop</span>
            </div>
            <pre className="text-sm font-mono text-page-slate-light leading-relaxed whitespace-pre-wrap">
              <span className="text-purple-400">async function</span> <span className="text-blue-400">engineLoop</span>(payload) {'{\n'}
              {'  '}await <span className="text-emerald-400">load</span>(payload);{'\n'}
              {'  '}await <span className="text-emerald-400">normalize</span>();{'\n'}
              {'  '}await <span className="text-emerald-400">store_temp</span>();{'\n'}
              {'  '}const proposal = await <span className="text-emerald-400">think_ai</span>();{'\n'}
              {'\n'}
              {'  '}<span className="text-white/40">// HARD GATE: No execution without approval</span>{'\n'}
              {'  '}const token = await <span className="text-yellow-400">requestApproval</span>(proposal);{'\n'}
              {'  '}<span className="text-purple-400">if</span> (!token) <span className="text-purple-400">throw new</span> <span className="text-amber-400">GovernanceError</span>();{'\n'}
              {'\n'}
              {'  '}await <span className="text-emerald-400">act</span>(proposal, token);{'\n'}
              {'  '}await <span className="text-emerald-400">commitToSpine</span>();{'\n'}
              {'}'}
            </pre>
          </div>
        </div>
      </section>

      {/* ── GOVERNANCE & SIGNUP ── */}
      <section id="security" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-10 rounded-3xl relative overflow-hidden text-center">
            
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-page-primary/20 border border-page-primary/30 flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-page-primary" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Hard-gated Governance</h2>
            <p className="text-page-slate text-lg mb-10 max-w-2xl mx-auto">
              Our AI never executes blindly. "Govern" is a hard gate in the core engine loop. Without human cryptographic approval, no execution occurs. Secure by design.
            </p>

            <Link 
              to="https://app.integratewise.ai" target="_blank" rel="noopener noreferrer" 
              className="inline-flex px-8 py-4 rounded-lg text-lg font-bold text-white shadow-xl hover:-translate-y-1 transition-all"
              style={{ background: 'linear-gradient(135deg, var(--color-page-primary), var(--color-page-accent))' }}
            >
              Start Using IntegrateWise App
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <IntegrateWiseLogo variant="icon-only" colorVariant="white" className="scale-75 origin-left opacity-80" />
            <span className="font-bold text-white tracking-tight">IntegrateWise <span className="text-page-slate font-medium text-sm ml-1">LLP</span></span>
          </div>
          
          <div className="flex gap-8 text-sm font-medium text-page-slate-light">
            <a href="#" className="hover:text-white transition-colors">API Docs</a>
            <a href="#" className="hover:text-white transition-colors">Architecture</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
          
          <p className="text-sm text-page-slate-dark">
            © {new Date().getFullYear()} IntegrateWise.
          </p>
        </div>
      </footer>
    </div>
  );
}
