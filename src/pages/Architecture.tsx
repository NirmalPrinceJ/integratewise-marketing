import { Link } from 'react-router-dom';
import { ArrowRight, Database, Layers, Infinity, Cpu } from 'lucide-react';
import SectionLabel from '../components/SectionLabel';
import { useSeo } from '../hooks/useSeo';

const layers = [
  { icon: Database, title: 'The Spine', desc: 'The connected context layer that links all your tools. It matches records across systems, keeps data in sync, and gives your Twin a complete picture of your business.' },
  { icon: Layers, title: 'One Surface', desc: 'One workspace where you see everything. Switch between views without switching tools. Your CRM, support, billing, and projects — all in one place.' },
  { icon: Infinity, title: 'Memory', desc: 'Every decision, every pattern, every outcome is remembered. Your Twin builds institutional knowledge that compounds over time.' },
  { icon: Cpu, title: 'Follow-Through', desc: 'The engine that connects your tools, runs your Twin, and carries the work through to the end. You do not manage it. It just works.' },
];

export default function Architecture() {
  useSeo("Architecture | IntegrateWise", "The mechanism beneath the promise: the Spine remembers, One Surface ends the glue work, Memory compounds, and Follow-Through finishes what you started.");

  return (
    <div>
      <section className="pt-32 pb-16 section-padding">
        <div className="max-w-4xl">
          <SectionLabel label="Architecture" />
          <h1 className="editorial-heading text-4xl sm:text-5xl md:text-6xl text-iw-ink mt-6">BUILT TO CONNECT. DESIGNED TO LAST.</h1>
          <p className="font-iw-sans text-base sm:text-lg text-iw-slate mt-6 leading-relaxed max-w-2xl">This is the mechanism beneath the promise. Not a monolithic platform — a connected system of four layers, each closing one of the gaps that made you stop trusting AI.</p>
        </div>
      </section>

      <section className="section-padding-y border-t border-iw-paper-deep">
        <div className="section-padding">
          <SectionLabel label="Four Layers" />
          <h2 className="editorial-heading text-2xl sm:text-3xl text-iw-ink mt-4 mb-10">THE STACK THAT POWERS YOUR WORK.</h2>
          <div className="space-y-0 border border-iw-rule max-w-5xl">
            {layers.map((layer, i) => (
              <div key={i} className={`p-6 sm:p-8 flex flex-col sm:flex-row gap-6 ${i < layers.length - 1 ? 'border-b border-iw-rule' : ''}`}>
                <div className="sm:w-16 shrink-0"><div className="w-12 h-12 rounded-full bg-iw-forest/10 flex items-center justify-center"><layer.icon size={22} className="text-iw-forest" /></div></div>
                <div>
                  <span className="font-iw-mono text-xs text-iw-gold uppercase tracking-widest block mb-2">Layer 0{i + 1}</span>
                  <h3 className="font-iw-display text-xl tracking-wide text-iw-ink mb-2">{layer.title}</h3>
                  <p className="font-iw-sans text-sm text-iw-slate leading-relaxed">{layer.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-y bg-iw-forest text-iw-paper">
        <div className="section-padding max-w-3xl">
          <SectionLabel label="Technical Stack" dark />
          <h2 className="editorial-heading text-2xl sm:text-3xl text-iw-paper mt-4 mb-10">MODERN. SCALABLE. SECURE.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-iw-forest-mid">
            {[
              { label: 'Runtime', value: 'Cloud-native, auto-scaling' },
              { label: 'Connectors', value: 'REST, GraphQL, WebSocket, gRPC' },
              { label: 'Data Sync', value: 'Real-time event streaming' },
              { label: 'Security', value: 'End-to-end encryption, SOC 2' },
              { label: 'AI Model', value: 'Context-aware, evidence-backed' },
              { label: 'Deployment', value: 'Multi-region, 99.9% uptime' },
            ].map((item, i) => (
              <div key={i} className="p-5 border border-iw-forest-mid">
                <span className="font-iw-mono text-xs text-iw-gold uppercase tracking-widest block mb-1">{item.label}</span>
                <span className="font-iw-sans text-sm text-iw-paper">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-y">
        <div className="section-padding text-center max-w-2xl mx-auto">
          <h2 className="editorial-heading text-2xl sm:text-3xl text-iw-ink mb-6">SEE THE ARCHITECTURE IN ACTION</h2>
          <a href="https://calendar.app.google/EcRkSqxwtchuF4Qf6" className="btn-primary mr-4">Book a Demo <ArrowRight size={16} className="ml-2" /></a>
          <Link to="/features" className="btn-outline">All Features</Link>
        </div>
      </section>
    </div>
  );
}
