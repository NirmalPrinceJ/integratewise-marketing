import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Eye, FileCheck, Lock, UserCheck } from 'lucide-react';
import SectionLabel from '../components/SectionLabel';
import { useSeo } from '../hooks/useSeo';

const principles = [
  { icon: Eye, title: 'Full Visibility', desc: 'See every action your Twin takes, every data source it reads, and every recommendation it makes.' },
  { icon: FileCheck, title: 'Audit Trail', desc: 'Every decision is recorded with context. Who approved what, when, and why. Complete accountability.' },
  { icon: Lock, title: 'Data Stays Yours', desc: 'Your data never leaves your systems. IntegrateWise connects to your tools — it does not replace them.' },
  { icon: UserCheck, title: 'Human Approval Required', desc: 'Your Twin proposes. You decide. Nothing executes without explicit human approval at every step.' },
];

export default function Governance() {
  useSeo("Governance | IntegrateWise", "Nothing happens without your approval. Full audit trails, human-in-the-loop approval, and complete visibility into every action.");

  return (
    <div>
      <section className="pt-32 pb-16 section-padding">
        <div className="max-w-4xl">
          <SectionLabel label="Governance" />
          <h1 className="editorial-heading text-4xl sm:text-5xl md:text-6xl text-iw-ink mt-6">YOU ARE IN CONTROL. ALWAYS.</h1>
          <p className="font-iw-sans text-base sm:text-lg text-iw-slate mt-6 leading-relaxed max-w-2xl">AI should assist, not replace, human judgment. Every action carries an audit trail. Every decision requires your approval. Every data source is visible.</p>
        </div>
      </section>

      <section className="section-padding-y border-t border-iw-paper-deep">
        <div className="section-padding">
          <SectionLabel label="Core Principles" />
          <h2 className="editorial-heading text-2xl sm:text-3xl text-iw-ink mt-4 mb-10">FOUR PILLARS OF TRUST.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-iw-rule max-w-4xl">
            {principles.map((p, i) => (
              <div key={i} className="p-6 sm:p-8 border border-iw-rule">
                <div className="w-10 h-10 rounded-full bg-iw-forest/10 flex items-center justify-center mb-4"><p.icon size={20} className="text-iw-forest" /></div>
                <h3 className="font-iw-display text-lg tracking-wide text-iw-ink mb-2">{p.title}</h3>
                <p className="font-iw-sans text-sm text-iw-slate leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-y bg-iw-forest text-iw-paper">
        <div className="section-padding max-w-3xl">
          <SectionLabel label="How Approval Works" dark />
          <h2 className="editorial-heading text-2xl sm:text-3xl text-iw-paper mt-4 mb-10">PROPOSE. REVIEW. APPROVE.</h2>
          <div className="space-y-8">
            {[
              { step: '01', title: 'Your Twin Proposes', desc: 'When your Twin identifies an action — updating a record, sending a notification, flagging a risk — it creates a proposal with full context and evidence.' },
              { step: '02', title: 'You Review', desc: 'You see exactly what your Twin wants to do, why it thinks this is the right action, and what data it used to reach that conclusion.' },
              { step: '03', title: 'You Decide', desc: 'Approve, modify, or reject. Your decision is recorded. If approved, your Twin executes and logs the outcome. If rejected, it learns why.' },
            ].map((s, i) => (
              <div key={i} className="flex gap-6">
                <span className="font-iw-mono text-xs text-iw-gold uppercase tracking-widest shrink-0 mt-1">{s.step}</span>
                <div>
                  <h3 className="font-iw-display text-lg tracking-wide text-iw-paper mb-2">{s.title}</h3>
                  <p className="font-iw-sans text-sm text-iw-paper/70 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-y">
        <div className="section-padding text-center max-w-2xl mx-auto">
          <ShieldCheck size={32} className="text-iw-forest mx-auto mb-4" />
          <h2 className="editorial-heading text-2xl sm:text-3xl text-iw-ink mb-4">TRUST BUILT INTO EVERY ACTION</h2>
          <p className="font-iw-sans text-base text-iw-slate leading-relaxed mb-8">Governance is not a feature. It is the foundation of how IntegrateWise works.</p>
          <a href="https://calendar.app.google/EcRkSqxwtchuF4Qf6" className="inline-flex items-center justify-center px-6 py-3 bg-iw-ink text-iw-paper font-iw-sans font-semibold text-sm rounded-full hover:bg-iw-forest transition-all mr-4">Book a Demo <ArrowRight size={16} className="ml-2" /></a>
          <Link to="/security" className="btn-outline">Security Details</Link>
        </div>
      </section>
    </div>
  );
}
