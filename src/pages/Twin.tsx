import { ArrowRight, Brain, Sparkles, MessageSquare, Clock, ShieldCheck } from 'lucide-react';
import SectionLabel from '../components/SectionLabel';
import { useSeo } from '../hooks/useSeo';

const capabilities = [
  { icon: Brain, title: 'Knows Your Business', desc: 'Your Twin reads from the same connected data you do. It understands relationships, history, and context across every tool.' },
  { icon: Sparkles, title: 'Does Not Make Things Up', desc: 'Every answer is grounded in your verified data and carries its evidence. You can trace any insight back to its source.' },
  { icon: MessageSquare, title: 'Natural Conversations', desc: 'Ask questions in plain English. Your Twin translates your intent into queries across all your connected tools.' },
  { icon: Clock, title: 'Never Makes You Repeat Yourself', desc: 'Tell it once and it holds — decisions, patterns, and context persist across sessions, tools, and other AIs.' },
  { icon: ShieldCheck, title: 'Proposes, Never Assumes', desc: 'Your Twin recommends actions but never executes without your approval. You are always in control.' },
];

export default function Twin() {
  useSeo("Digital Twin | IntegrateWise", "A chatbot forgets you the moment you close the tab. Your Twin remembers what you told it, follows through on the work, and never makes things up.");

  return (
    <div>
      <section className="pt-32 pb-16 section-padding">
        <div className="max-w-4xl">
          <SectionLabel label="Digital Twin" />
          <h1 className="editorial-heading text-4xl sm:text-5xl md:text-6xl text-iw-ink mt-6">THE AI THAT REMEMBERS — AND FINISHES THE WORK</h1>
          <p className="font-iw-sans text-base sm:text-lg text-iw-slate mt-6 leading-relaxed max-w-2xl">A chatbot answers a question and forgets you the moment you close the tab. Your Twin is different: it remembers what you told it, grounds every answer in your real data, and follows the work through to the end — then comes back tomorrow still knowing your business.</p>
        </div>
      </section>

      <section className="section-padding-y border-t border-iw-paper-deep">
        <div className="section-padding">
          <SectionLabel label="What It Does" />
          <h2 className="editorial-heading text-2xl sm:text-3xl text-iw-ink mt-4 mb-10">FIVE CAPABILITIES. ONE COMPANION.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-iw-rule max-w-5xl">
            {capabilities.map((cap, i) => (
              <div key={i} className={`p-6 sm:p-8 border border-iw-rule ${i >= 3 ? 'lg:col-span-1 sm:col-span-1' : ''}`}>
                <div className="w-10 h-10 rounded-full bg-iw-forest/10 flex items-center justify-center mb-4"><cap.icon size={20} className="text-iw-forest" /></div>
                <h3 className="font-iw-display text-lg tracking-wide text-iw-ink mb-2">{cap.title}</h3>
                <p className="font-iw-sans text-sm text-iw-slate leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-y bg-iw-forest text-iw-paper">
        <div className="section-padding max-w-3xl">
          <SectionLabel label="How It Works" dark />
          <h2 className="editorial-heading text-2xl sm:text-3xl text-iw-paper mt-4 mb-10">ASK. UNDERSTAND. ACT.</h2>
          <div className="space-y-8">
            {[
              { step: '01', title: 'Ask a Question', desc: 'Ask anything about your business in plain English. "Which accounts are at risk this quarter?" "What happened with the Acme deal?"' },
              { step: '02', title: 'Get Evidence', desc: 'Your Twin searches across all your connected tools — CRM, support, billing, project management — and brings back answers with sources.' },
              { step: '03', title: 'Take Action', desc: 'Your Twin proposes next steps based on what it found. You review, approve, and it writes the updates back to the right tools.' },
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
          <h2 className="editorial-heading text-2xl sm:text-3xl text-iw-ink mb-4">MEET YOUR TWIN</h2>
          <p className="font-iw-sans text-base text-iw-slate leading-relaxed mb-8">See how a Digital Twin that knows your business changes the way you work.</p>
          <a href="https://calendar.app.google/EcRkSqxwtchuF4Qf6" className="inline-flex items-center justify-center px-6 py-3 bg-iw-ink text-iw-paper font-iw-sans font-semibold text-sm rounded-full hover:bg-iw-forest transition-all">Book a Demo <ArrowRight size={16} className="ml-2" /></a>
        </div>
      </section>
    </div>
  );
}
