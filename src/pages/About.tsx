import { ArrowRight, Target, Users, Lightbulb, Globe } from 'lucide-react';
import SectionLabel from '../components/SectionLabel';
import { useSeo } from '../hooks/useSeo';

const values = [
  { icon: Target, title: 'Clarity Over Noise', desc: 'We cut through complexity. Every feature, every message, every interaction is designed to make things clearer — not louder.' },
  { icon: Users, title: 'Humans First', desc: 'AI should amplify human judgment, not replace it. We build tools that give people more control, not less.' },
  { icon: Lightbulb, title: 'Context is Everything', desc: 'Decisions without context are guesses. We connect data so people can make informed choices with confidence.' },
  { icon: Globe, title: 'Built for Reality', desc: 'We do not sell futures. We solve the problems teams face today — fragmented tools, lost context, and wasted time.' },
];

export default function About() {
  useSeo("About | IntegrateWise", "We are restoring trust in AI. Our mission: give every team back the AI they were promised — one that remembers, follows through, and never makes things up.");

  return (
    <div>
      <section className="pt-32 pb-16 section-padding">
        <div className="max-w-4xl">
          <SectionLabel label="About" />
          <h1 className="editorial-heading text-4xl sm:text-5xl md:text-6xl text-iw-ink mt-6">WE ARE RESTORING TRUST IN AI.</h1>
          <p className="font-iw-sans text-base sm:text-lg text-iw-slate mt-6 leading-relaxed max-w-2xl">IntegrateWise was founded on a simple observation: most people did not stop using AI — they quietly demoted it. They tried it, believed in it, and got burned when it forgot, drifted, or made things up. We exist to give them back the AI they were promised.</p>
        </div>
      </section>

      <section className="section-padding-y border-t border-iw-paper-deep">
        <div className="section-padding max-w-4xl">
          <SectionLabel label="Our Story" />
          <h2 className="editorial-heading text-2xl sm:text-3xl text-iw-ink mt-4 mb-6">FROM DEMOTED AI TO TRUSTED AI.</h2>
          <div className="space-y-4 font-iw-sans text-base text-iw-slate leading-relaxed">
            <p>We have seen the same moment at every company: someone adopted AI six months ago, believed in it, told the team about it — and today only trusts it to write emails. Not because they stopped believing, but because every time they handed it something real, it let them down.</p>
            <p>We built IntegrateWise to close that gap. Not by selling a new tool to manage — but by giving the AI you already use a memory that holds, answers grounded in your real data, follow-through to the end, and your approval before it acts.</p>
            <p>The result is the sentence we are building everything toward: this is what you wanted, and how you wanted it to work.</p>
          </div>
        </div>
      </section>

      <section className="section-padding-y bg-iw-forest text-iw-paper">
        <div className="section-padding">
          <SectionLabel label="Values" dark />
          <h2 className="editorial-heading text-2xl sm:text-3xl text-iw-paper mt-4 mb-10">HOW WE BUILD.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-iw-forest-mid max-w-4xl">
            {values.map((v, i) => (
              <div key={i} className="p-6 sm:p-8 border border-iw-forest-mid">
                <div className="w-10 h-10 rounded-full bg-iw-paper/10 flex items-center justify-center mb-4"><v.icon size={20} className="text-iw-gold" /></div>
                <h3 className="font-iw-display text-lg tracking-wide text-iw-paper mb-2">{v.title}</h3>
                <p className="font-iw-sans text-sm text-iw-paper/70 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-y">
        <div className="section-padding text-center max-w-2xl mx-auto">
          <h2 className="editorial-heading text-2xl sm:text-3xl text-iw-ink mb-4">JOIN THE TEAM</h2>
          <p className="font-iw-sans text-base text-iw-slate leading-relaxed mb-8">We are hiring across engineering, design, and customer success. If you care about building tools that give people more control, we would love to talk.</p>
          <a href="https://calendar.app.google/EcRkSqxwtchuF4Qf6" className="inline-flex items-center justify-center px-6 py-3 bg-iw-ink text-iw-paper font-iw-sans font-semibold text-sm rounded-full hover:bg-iw-forest transition-all">Get in Touch <ArrowRight size={16} className="ml-2" /></a>
        </div>
      </section>
    </div>
  );
}
