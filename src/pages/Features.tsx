import { Link } from 'react-router-dom';
import { ArrowRight, Database, Cpu, Brain, ShieldCheck, Infinity, Layers } from 'lucide-react';
import SectionLabel from '../components/SectionLabel';
import { useSeo } from '../hooks/useSeo';

const features = [
  { num: '01', icon: Database, title: 'The Spine', desc: 'One verified memory across every tool — so it never forgets what you told it.', tags: ['Connected data', 'One source of context', 'Powers your Twin'], href: '/architecture' },
  { num: '02', icon: Layers, title: 'One Surface', desc: 'Stop being the glue. Everything in one place, instead of fifteen open tabs.', tags: ['Unified workspace', 'No tab switching'], href: '/workbench' },
  { num: '03', icon: Brain, title: 'Digital Twin', desc: 'AI that knows your business and follows through — not a chatbot that forgets you.', tags: ['Knows your business', 'Evidence-backed'], href: '/twin' },
  { num: '04', icon: Infinity, title: 'Memory', desc: 'Tell it once. It holds. You never repeat yourself again.', tags: ['Learns over time', 'Team knowledge'], href: '/architecture' },
  { num: '05', icon: ShieldCheck, title: 'Governance', desc: 'Nothing happens without your approval. Every action is recorded.', tags: ['You are in control', 'Full audit trail'], href: '/governance' },
  { num: '06', icon: Cpu, title: 'Follow-Through', desc: 'It finishes what it starts. No more nudging half-done work to the finish line.', tags: ['Connects any tool', 'Keeps data in sync'], href: '/architecture' },
];

export default function Features() {
  useSeo("Features | IntegrateWise", "Six reasons to trust AI again: it remembers what you told it, finishes what it starts, never makes things up, and asks before it acts.");

  return (
    <div>
      <section className="pt-32 pb-16 section-padding">
        <div className="max-w-4xl">
          <SectionLabel label="Features" />
          <h1 className="editorial-heading text-4xl sm:text-5xl md:text-6xl text-iw-ink mt-6">SIX REASONS TO TRUST IT AGAIN.</h1>
          <p className="font-iw-sans text-base sm:text-lg text-iw-slate mt-6 leading-relaxed max-w-2xl">Every feature here fixes one of the four reasons you quietly demoted AI: it forgot what you told it, it stopped halfway, it made things up, and it left you as the glue between your tools.</p>
        </div>
      </section>
      <section className="section-padding-y border-t border-iw-paper-deep">
        <div className="section-padding">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-iw-rule max-w-5xl">
            {features.map((f, i) => (
              <Link key={i} to={f.href} className={`block p-6 sm:p-8 hover:bg-iw-paper-warm transition-colors ${i % 2 === 0 ? 'sm:border-r border-iw-rule' : ''} ${i < 4 ? 'border-b border-iw-rule' : ''}`}>
                <div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-full bg-iw-forest/10 flex items-center justify-center"><f.icon size={20} className="text-iw-forest" /></div><span className="font-iw-mono text-xs text-iw-gold uppercase tracking-widest">{f.num}</span></div>
                <h3 className="font-iw-display text-xl tracking-wide text-iw-ink mb-2">{f.title}</h3>
                <p className="font-iw-sans text-sm text-iw-slate leading-relaxed mb-4">{f.desc}</p>
                <div className="flex flex-wrap gap-2">{f.tags.map((tag, j) => <span key={j} className="font-iw-mono text-xs text-iw-forest/70 bg-iw-forest/5 px-2 py-1 rounded">{tag}</span>)}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding-y"><div className="section-padding text-center"><div className="max-w-2xl mx-auto"><h2 className="editorial-heading text-2xl sm:text-3xl text-iw-ink mb-6">SEE WHAT THIS MEANS FOR YOUR BUSINESS</h2><Link to="/solutions" className="btn-outline mr-4">Explore Solutions</Link><a href="https://calendar.app.google/EcRkSqxwtchuF4Qf6" className="btn-primary">Book a Demo <ArrowRight size={16} className="ml-2" /></a></div></div></section>
    </div>
  );
}
