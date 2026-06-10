import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSeo } from '../hooks/useSeo';

gsap.registerPlugin(ScrollTrigger);

function BrowserFrame({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl overflow-hidden shadow-2xl border border-iw-rule bg-iw-paper ${className}`}>
      <div className="flex items-center gap-2 px-4 py-2.5 bg-iw-paper border-b border-iw-rule">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <span className="ml-3 font-iw-mono text-xs text-iw-slate/50 select-none">integratewise.ai</span>
      </div>
      <div className="overflow-hidden">{children}</div>
    </div>
  );
}

function SectionLabel({ label }: { label: string }) {
  return <span className="font-iw-mono text-xs uppercase tracking-widest text-iw-gold block mb-4">{label}</span>;
}


export default function Home() {
  useSeo("IntegrateWise", "Stop jumping between tools. IntegrateWise connects your entire stack into one workspace where your AI knows your business and nothing happens without your approval.");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-headline', { y: 40, opacity: 0, duration: 1, ease: 'power3.out' });
      gsap.from('.hero-sub', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 });
      gsap.from('.hero-body', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out', delay: 0.4 });
      gsap.from('.hero-buttons', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out', delay: 0.5 });
      gsap.from('.hero-mockup', { x: 40, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.3 });
      gsap.from('.problem-item', { y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.problem-section', start: 'top 80%' } });
      gsap.from('.pillar-item', { y: 30, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: '.pillars-section', start: 'top 80%' } });
      gsap.from('.twin-item', { y: 30, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: '.twin-section', start: 'top 80%' } });
      gsap.from('.step-item', { y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.steps-section', start: 'top 80%' } });
      gsap.from('.surface-card', { y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.surfaces-section', start: 'top 80%' } });
      gsap.from('.outcome-item', { y: 20, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.outcomes-section', start: 'top 85%' } });
      gsap.from('.cta-final', { y: 40, opacity: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '.cta-final', start: 'top 80%' } });
    });
    return () => ctx.revert();
  }, []);

  const surfaces: { img: string; title: string; desc: string; span: string }[] = [
    { img: './images/twin-workbench-full.png', title: 'Twin Workbench', desc: 'Your operational counterpart', span: 'lg:col-span-2 lg:row-span-2 min-h-[16rem]' },
    { img: './images/morning-brief.png', title: 'Morning Brief', desc: 'The org, summarized daily', span: 'lg:col-span-2' },
    { img: './images/signals-panel.png', title: 'Signals', desc: 'Change into action', span: '' },
    { img: './images/memory-view.png', title: 'Memory', desc: 'Owned by you', span: '' },
    { img: './images/governance-view.png', title: 'Governance', desc: 'AI proposes, you approve', span: 'lg:col-span-2' },
    { img: './images/unified-inbox.png', title: 'Unified Inbox', desc: 'Every channel, one place', span: '' },
    { img: './images/approval-queue.png', title: 'Approvals', desc: 'Human-in-the-loop', span: '' },
  ];

  return (
    <div ref={ref}>
      <section className="min-h-screen bg-iw-forest flex items-center">
        <div className="section-padding w-full py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="max-w-lg">
              <h1 className="hero-headline editorial-heading text-3xl md:text-4xl text-iw-paper leading-[1.1]">ONE CONNECTED WORKSPACE FOR HUMANS AND THEIR DIGITAL TWIN</h1>
              <p className="hero-sub editorial-serif text-lg text-iw-paper/70 mt-5 max-w-md leading-relaxed italic">One context. One memory. One place where you and your AI actually work together.</p>
              <p className="hero-body font-iw-sans text-sm text-iw-paper/60 mt-5 max-w-md leading-relaxed">Stop jumping between Salesforce, Slack, Notion, and AI chats that forget everything the moment you start a new thread. IntegrateWise connects every tool you use into one workspace.</p>
              <div className="hero-buttons flex flex-wrap gap-4 mt-8">
                <a href="https://calendar.app.google/EcRkSqxwtchuF4Qf6" className="inline-flex items-center justify-center px-6 py-3 bg-iw-gold text-iw-forest font-iw-sans font-semibold text-sm rounded-full whitespace-nowrap transition-all duration-300 hover:bg-iw-gold-pale">Book a Demo</a>
                <Link to="/workbench" className="inline-flex items-center justify-center px-6 py-3 border-2 border-iw-paper/30 text-iw-paper font-iw-sans font-semibold text-sm rounded-full whitespace-nowrap transition-all duration-300 hover:border-iw-paper/60">See How It Works</Link>
              </div>
            </div>
            <div className="hero-mockup hidden lg:block">
              <BrowserFrame><img src="./images/hero-banner.png" alt="IntegrateWise Account Success dashboard" className="w-full object-contain" /></BrowserFrame>
            </div>
          </div>
        </div>
      </section>

      <section className="problem-section section-padding-y bg-iw-paper">
        <div className="section-padding">
          <SectionLabel label="The Problem" />
          <h2 className="editorial-heading text-3xl sm:text-4xl text-iw-ink mb-6">YOUR WORK IS SCATTERED</h2>
          <p className="font-iw-sans text-base text-iw-slate leading-relaxed mb-10 max-w-2xl">Every tool you use holds a piece of the truth. Salesforce has the deal. Slack has the conversation. Notion has the notes. Your AI has none of it. So every morning, you stitch the story together yourself.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-4xl">
            {['Too many tools to check', 'Information scattered everywhere', 'AI that starts from zero every time', 'Your team wastes hours stitching context', 'No one sees the full picture'].map((item, i) => (
              <div key={i} className="problem-item font-iw-mono text-xs text-iw-forest uppercase tracking-widest border-l-2 border-iw-gold pl-3">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="pillars-section section-padding-y bg-iw-paper-warm">
        <div className="section-padding">
          <div className="text-center mb-12">
            <SectionLabel label="The Five Pillars" />
            <h2 className="editorial-heading text-3xl sm:text-4xl text-iw-ink">BUILT FOR HOW YOU ACTUALLY WORK</h2>
            <p className="font-iw-sans text-sm text-iw-slate mt-4 max-w-xl mx-auto">Five foundations make IntegrateWise work. <Link to="/architecture" className="text-iw-forest underline underline-offset-2 hover:text-iw-gold transition-colors">See how they fit together</Link>.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-heavy border-iw-rule">
            {[
              { num: '01', title: 'One Surface', desc: 'One workspace for everything.' },
              { num: '02', title: 'Memory', desc: 'Your AI remembers what matters.' },
              { num: '03', title: 'Operating Environment', desc: 'Your Twin understands your business.' },
              { num: '04', title: 'Governance', desc: 'Nothing happens without your approval.' },
              { num: '05', title: 'Continuity', desc: 'Knowledge compounds over time.' },
            ].map((pillar, i) => (
              <div key={i} className="pillar-item p-6 sm:p-8 border-b border-iw-rule"><span className="font-iw-mono text-xs text-iw-gold uppercase tracking-widest block mb-3">{pillar.num}</span><h3 className="font-iw-display text-xl tracking-wide text-iw-ink mb-3">{pillar.title}</h3><p className="font-iw-sans text-sm text-iw-slate leading-relaxed">{pillar.desc}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="twin-section section-padding-y bg-iw-forest text-iw-paper">
        <div className="section-padding max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel label="Meet Your Digital Twin" />
              <h2 className="editorial-heading text-3xl sm:text-4xl text-iw-paper mb-4">YOUR DIGITAL TWIN IS NOT A CHATBOT</h2>
              <p className="font-iw-sans text-base text-iw-paper/70 leading-relaxed mb-8">A chatbot answers questions. Your Twin knows your business. It watches your accounts, reads your signals, and tells you what needs attention.</p>
              <Link to="/twin" className="inline-flex items-center justify-center px-6 py-3 bg-iw-gold text-iw-forest font-iw-sans font-semibold text-sm rounded-full hover:bg-iw-gold-pale">Explore the Digital Twin <ArrowRight size={16} className="ml-2" /></Link>
            </div>
            <div><BrowserFrame className="h-96"><img src="./images/twin-workbench.png" alt="Twin Workbench" className="w-full object-contain" /></BrowserFrame></div>
          </div>
        </div>
      </section>

      <section className="surfaces-section section-padding-y bg-iw-paper">
        <div className="section-padding">
          <div className="text-center mb-12">
            <SectionLabel label="Product" />
            <h2 className="editorial-heading text-3xl sm:text-4xl text-iw-ink mb-4">EVERY SURFACE. ONE CONTEXT.</h2>
            <p className="font-iw-sans text-sm text-iw-slate max-w-xl mx-auto">Memory, signals, approvals, and execution — all in one governed workspace.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[13rem] gap-4 max-w-6xl mx-auto">
            {surfaces.map((s, i) => (
              <div key={i} className={`surface-card group relative overflow-hidden rounded-xl border border-iw-rule bg-iw-paper-warm min-h-[13rem] ${s.span}`}>
                <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-iw-ink/85 via-iw-ink/40 to-transparent">
                  <h3 className="font-iw-display text-lg tracking-wide text-iw-paper leading-none">{s.title}</h3>
                  <p className="font-iw-mono text-[0.62rem] uppercase tracking-widest text-iw-paper/75 mt-1">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-final section-padding-y bg-iw-paper">
        <div className="section-padding text-center max-w-2xl mx-auto">
          <h2 className="editorial-heading text-3xl sm:text-4xl text-iw-ink mb-4">ONE WORKSPACE. ONE AI. ONE TEAM.</h2>
          <a href="https://calendar.app.google/EcRkSqxwtchuF4Qf6" className="inline-flex items-center justify-center px-7 py-3 bg-iw-gold text-iw-forest font-iw-sans font-semibold text-sm rounded-full hover:bg-iw-gold-pale">Book a Demo</a>
        </div>
      </section>
    </div>
  );
}
