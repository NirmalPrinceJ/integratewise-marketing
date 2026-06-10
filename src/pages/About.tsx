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
  useSeo("About | IntegrateWise", "We are building the connected workspace for humans and their Digital Twin. Our mission: eliminate fragmented tools and give every team the context they need to make better decisions.");

  return (
    <div>
      <section className="pt-32 pb-16 section-padding">
        <div className="max-w-4xl">
          <SectionLabel label="About" />
          <h1 className="editorial-heading text-4xl sm:text-5xl md:text-6xl text-iw-ink mt-6">WE BUILD THE LAYER BETWEEN YOUR TOOLS.</h1>
          <p className="font-iw-sans text-base sm:text-lg text-iw-slate mt-6 leading-relaxed max-w-2xl">IntegrateWise was founded on a simple observation: the more tools teams use, the less connected they become. We are fixing that with one connected workspace — powered by a Digital Twin that knows your business.</p>
        </div>
      </section>

      <section className="section-padding-y border-t border-iw-paper-deep">
        <div className="section-padding max-w-4xl">
          <SectionLabel label="Our Story" />
          <h2 className="editorial-heading text-2xl sm:text-3xl text-iw-ink mt-4 mb-6">FROM FRAGMENTATION TO FOCUS.</h2>
          <div className="space-y-4 font-iw-sans text-base text-iw-slate leading-relaxed">
            <p>We have seen it at every company: the CRM has one version of the customer, the support tool has another, and billing has a third. Teams waste hours reconciling data that should already be connected.</p>
            <p>We built IntegrateWise to solve this. Not by replacing the tools you rely on — but by connecting them into one layer where your data stays in sync, your AI understands your business, and you stay in control.</p>
            <p>The result: less time switching tabs, more time making decisions. Less guessing, more knowing. Less chaos, more clarity.</p>
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
