import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionLabel from '../components/SectionLabel';
import ControlPlaneArch from '../components/svgs/ControlPlaneArch';
import { useSeo } from '../hooks/useSeo';

export default function Platform() {
  useSeo("How It Works | IntegrateWise", "You tell it once. It remembers. It follows through. Here is how IntegrateWise makes AI behave the way you expected it to the first time.");

  return (
    <div>
      <section className="pt-32 pb-16 section-padding">
        <div className="max-w-4xl">
          <SectionLabel label="How It Works" />
          <h1 className="editorial-heading text-4xl sm:text-5xl md:text-6xl text-iw-ink mt-6">THE PART THAT FINALLY REMEMBERS</h1>
          <p className="font-iw-sans text-base sm:text-lg text-iw-slate mt-6 leading-relaxed max-w-2xl">You didn't want another tool to manage. You wanted the AI you already have to stop forgetting, stop stopping halfway, and stop making things up. IntegrateWise is the layer underneath that makes that happen — it holds what you told it, grounds every answer in your real data, and follows the work through to the end.</p>
        </div>
      </section>
      <section className="section-padding pb-16"><ControlPlaneArch /></section>
      <section className="section-padding-y bg-iw-forest text-iw-paper">
        <div className="section-padding">
          <SectionLabel label="How It Works" dark />
          <h2 className="editorial-heading text-2xl sm:text-3xl text-iw-paper mt-4 mb-10">CONNECT &rarr; UNDERSTAND &rarr; COORDINATE &rarr; WORK</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-iw-forest-mid">
            {[
              { step: '01', title: 'Connect', desc: 'Link your tools once. IntegrateWise reads from each and keeps everything in sync.' },
              { step: '02', title: 'Understand', desc: 'Data from every tool is matched and merged. The same contact in Salesforce is the same person in HubSpot.' },
              { step: '03', title: 'Coordinate', desc: 'The Spine connects everything — your data, your AI, your approvals. One layer that makes your tools work as a team.' },
              { step: '04', title: 'Work', desc: 'You see one view. Your Twin sees the same view. When you approve an action, it writes back to the right tool automatically.' },
            ].map((s, i) => (
              <div key={i} className="p-6 sm:p-8 border border-iw-forest-mid">
                <span className="font-iw-mono text-xs text-iw-gold uppercase tracking-widest block mb-3">Step {s.step}</span>
                <h3 className="font-iw-display text-lg tracking-wide text-iw-paper mb-2">{s.title}</h3>
                <p className="font-iw-sans text-sm text-iw-paper/70 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding-y border-t border-iw-paper-deep">
        <div className="section-padding">
          <SectionLabel label="What Makes It Different" />
          <h2 className="editorial-heading text-2xl sm:text-3xl text-iw-ink mt-4 mb-10">NOT ANOTHER TOOL TO BABYSIT.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-iw-rule max-w-4xl">
            {[
              { title: 'It remembers what you told it', desc: 'Brief it once. It holds — so you never repeat yourself in a new thread again.' },
              { title: 'It does not make things up', desc: 'Every answer is grounded in your real data, with the evidence to back it.' },
              { title: 'It finishes what it starts', desc: 'No more nudging it to the finish line. It follows the work through — and asks before it acts.' },
              { title: 'It comes back tomorrow still knowing', desc: 'Every decision becomes memory. The trust you rebuild today compounds.' },
            ].map((item, i) => (
              <div key={i} className="p-6 sm:p-8 border border-iw-rule"><h3 className="font-iw-display text-lg tracking-wide text-iw-ink mb-3">{item.title}</h3><p className="font-iw-sans text-sm text-iw-slate leading-relaxed">{item.desc}</p></div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding-y">
        <div className="section-padding text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="editorial-heading text-2xl sm:text-3xl text-iw-ink mb-6">STOP REPEATING YOURSELF. WATCH IT REMEMBER.</h2>
            <a href="https://calendar.app.google/EcRkSqxwtchuF4Qf6" className="btn-primary mr-4">Book a Demo <ArrowRight size={16} className="ml-2" /></a>
            <Link to="/" className="btn-outline">Back to Home</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
