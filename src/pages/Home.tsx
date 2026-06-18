import { useState, useEffect, useRef } from 'react';
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

const logos = ['salesforce', 'hubspot', 'slack', 'microsoft', 'chatgpt', 'notion', 'claude', 'jira', 'googledrive', 'gmail'];

export default function Home() {
  useSeo("IntegrateWise", "AI that doesn't forget what you told it, finishes what you started, and doesn't make things up. You tell it once. It remembers. It follows through.");
  const [activeSurface, setActiveSurface] = useState<'data' | 'twin' | 'governance'>('data');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-headline', { y: 40, opacity: 0, duration: 1, ease: 'power3.out' });
      gsap.from('.hero-sub', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 });
      gsap.from('.hero-body', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out', delay: 0.4 });
      gsap.from('.hero-buttons', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out', delay: 0.5 });
      gsap.from('.hero-mockup', { x: 40, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.3 });
      gsap.from('.logo-item', { y: 16, opacity: 0, duration: 0.4, stagger: 0.05, ease: 'power2.out', scrollTrigger: { trigger: '.logos-section', start: 'top 85%' } });
      gsap.from('.problem-item', { y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.problem-section', start: 'top 80%' } });
      gsap.from('.pillar-item', { y: 30, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: '.pillars-section', start: 'top 80%' } });
      gsap.from('.twin-item', { y: 30, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: '.twin-section', start: 'top 80%' } });
      gsap.from('.price-card', { y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.pricing-section', start: 'top 80%' } });
      gsap.from('.step-item', { y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.steps-section', start: 'top 80%' } });
      gsap.from('.insight-card', { y: 30, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: '.insights-section', start: 'top 80%' } });
      gsap.from('.cta-final', { y: 40, opacity: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '.cta-final', start: 'top 80%' } });
    });
    return () => ctx.revert();
  }, []);

  const surfaceImages = {
    data: '/images/portfolio-overview.png',
    twin: '/images/morning-brief.png',
    governance: '/images/governance-view.png',
  };
  const surfaceLabels: Record<string, string> = { data: 'Your Data', twin: 'Digital Twin', governance: 'Governance' };

  return (
    <div ref={ref}>
      {/* ===== HERO ===== */}
      <section className="min-h-screen bg-iw-forest flex items-center">
        <div className="section-padding w-full py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="max-w-lg">
              <h1 className="hero-headline editorial-heading text-3xl md:text-4xl text-iw-paper leading-[1.1]">AI THAT DOESN'T FORGET WHAT YOU TOLD IT</h1>
              <p className="hero-sub editorial-serif text-lg text-iw-paper/70 mt-5 max-w-md leading-relaxed italic">You tell it once. It remembers. It follows through. It finishes the work.</p>
              <p className="hero-body font-iw-sans text-sm text-iw-paper/60 mt-5 max-w-md leading-relaxed">Six months ago you believed AI would change how you work. Today you only trust it to write emails — because every time you handed it something real, it forgot what you told it, stopped halfway, or made things up. IntegrateWise closes that gap.</p>
              <div className="hero-buttons flex flex-wrap gap-4 mt-8">
                <a href="https://calendar.app.google/EcRkSqxwtchuF4Qf6" className="inline-flex items-center justify-center px-6 py-3 bg-iw-gold text-iw-forest font-iw-sans font-semibold text-sm rounded-full whitespace-nowrap transition-all duration-300 hover:bg-iw-gold-pale">Book a Demo</a>
                <Link to="/workbench" className="inline-flex items-center justify-center px-6 py-3 border-2 border-iw-paper/30 text-iw-paper font-iw-sans font-semibold text-sm rounded-full whitespace-nowrap transition-all duration-300 hover:border-iw-paper/60">See How It Works</Link>
              </div>
            </div>
            <div className="hero-mockup hidden lg:block">
              <BrowserFrame><img src="/images/hero-banner.png" alt="IntegrateWise dashboard" className="w-full object-contain" /></BrowserFrame>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROOF VIDEO ===== */}
      <section className="proof-section section-padding-y bg-iw-ink">
        <div className="section-padding max-w-5xl mx-auto text-center">
          <SectionLabel label="Proof" />
          <h2 className="editorial-heading text-3xl sm:text-4xl text-iw-paper mb-4">DON'T TAKE OUR WORD. WATCH IT WORK.</h2>
          <p className="font-iw-sans text-base text-iw-paper/70 leading-relaxed mb-8 max-w-2xl mx-auto">A real session, recorded end to end — no actor, no edits. Sign in, and the workspace already knows the account. This is the actual product, not a mockup.</p>
          <BrowserFrame className="max-w-4xl mx-auto">
            <video controls playsInline preload="metadata" poster="/images/portfolio-overview.png" className="w-full block bg-black">
              <source src="/proof/onboarding-flow-customer-success.mp4" type="video/mp4" />
              <source src="/proof/onboarding-flow-customer-success.webm" type="video/webm" />
            </video>
          </BrowserFrame>
        </div>
      </section>

      {/* ===== LOGO WALL ===== */}
      <section className="logos-section section-padding-y bg-iw-paper border-b border-iw-rule">
        <div className="section-padding text-center">
          <p className="font-iw-sans text-base text-iw-slate leading-relaxed max-w-2xl mx-auto mb-10">You already pay for all of this. None of it talks to each other — and the AI you bought remembers none of it.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 max-w-4xl mx-auto opacity-80">
            {logos.map((name) => (
              <img key={name} src={`/images/logos/${name}.svg`} alt={name} loading="lazy" className="logo-item h-7 w-auto grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all" />
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROBLEM — the demotion ===== */}
      <section className="problem-section section-padding-y bg-iw-paper">
        <div className="section-padding">
          <SectionLabel label="The Problem" />
          <h2 className="editorial-heading text-3xl sm:text-4xl text-iw-ink mb-6">YOU TOLD IT ONCE. IT FORGOT.</h2>
          <p className="font-iw-sans text-base text-iw-slate leading-relaxed mb-10 max-w-2xl">You didn't stop believing in AI. You stopped trusting it. It forgot what you told it. It stopped halfway through. It gave you a confident answer that was wrong. So you quietly demoted it — to writing emails. These are the four reasons why.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl">
            {['I told it once. It forgot.', 'It stops halfway. I keep nudging it.', "It sounds confident — and it's wrong.", "I'm the one copy-pasting between tools."].map((item, i) => (
              <div key={i} className="problem-item font-iw-mono text-xs text-iw-forest uppercase tracking-widest border-l-2 border-iw-gold pl-3">{item}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== APPROACH ===== */}
      <section className="section-padding-y bg-iw-forest text-iw-paper">
        <div className="section-padding max-w-3xl">
          <SectionLabel label="The IntegrateWise Approach" />
          <h2 className="editorial-heading text-3xl sm:text-4xl text-iw-paper mb-5">TELL IT ONCE. NEVER AGAIN.</h2>
          <p className="font-iw-sans text-base text-iw-paper/70 leading-relaxed">You don't need another tool to manage. You need the AI you already have to stop forgetting. Connect your tools once and the Spine holds the truth underneath — your data, your decisions, your context. You brief it once. It remembers across every session, every tool, every AI. You stop being the one who repeats yourself.</p>
        </div>
      </section>

      {/* ===== FIVE PILLARS ===== */}
      <section className="pillars-section section-padding-y bg-iw-paper-warm">
        <div className="section-padding">
          <div className="text-center mb-12">
            <SectionLabel label="The Five Pillars" />
            <h2 className="editorial-heading text-3xl sm:text-4xl text-iw-ink">FIVE REASONS TO TRUST IT AGAIN</h2>
            <p className="font-iw-sans text-sm text-iw-slate mt-4 max-w-xl mx-auto">Each one closes a gap that made you demote AI. <Link to="/architecture" className="text-iw-forest underline underline-offset-2 hover:text-iw-gold transition-colors">See how they fit together</Link>.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-heavy border-iw-rule">
            {[
              { num: '01', title: 'One Surface', desc: 'Stop being the glue. Everything in one place, instead of fifteen open tabs.' },
              { num: '02', title: 'Memory', desc: 'Tell it once. It holds. You never repeat yourself in a new thread again.' },
              { num: '03', title: 'Follow-Through', desc: 'It finishes what it starts. No more nudging half-done work to the finish line.' },
              { num: '04', title: 'Governance', desc: 'It asks before it acts. Nothing happens without your approval.' },
              { num: '05', title: 'Continuity', desc: 'It comes back tomorrow and still knows your business.' },
            ].map((pillar, i) => (
              <div key={i} className="pillar-item p-6 sm:p-8 border-b border-iw-rule"><span className="font-iw-mono text-xs text-iw-gold uppercase tracking-widest block mb-3">{pillar.num}</span><h3 className="font-iw-display text-xl tracking-wide text-iw-ink mb-3">{pillar.title}</h3><p className="font-iw-sans text-sm text-iw-slate leading-relaxed">{pillar.desc}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TWIN ===== */}
      <section className="twin-section section-padding-y bg-iw-forest text-iw-paper">
        <div className="section-padding max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="twin-item">
              <SectionLabel label="Meet Your Digital Twin" />
              <h2 className="editorial-heading text-3xl sm:text-4xl text-iw-paper mb-4">YOUR DIGITAL TWIN IS NOT A CHATBOT</h2>
              <p className="font-iw-sans text-base text-iw-paper/70 leading-relaxed mb-8">A chatbot forgets you the moment you close the tab. Your Twin remembers what you told it, grounds every answer in your real data, and follows the work through to the end — then comes back tomorrow still knowing your accounts, your signals, and what needs your attention.</p>
              <Link to="/twin" className="inline-flex items-center justify-center px-6 py-3 bg-iw-gold text-iw-forest font-iw-sans font-semibold text-sm rounded-full hover:bg-iw-gold-pale">Explore the Digital Twin <ArrowRight size={16} className="ml-2" /></Link>
            </div>
            <div className="twin-item"><BrowserFrame className="h-96"><img src="/images/twin-workbench.png" alt="Twin Workbench" className="w-full object-contain" /></BrowserFrame></div>
          </div>
        </div>
      </section>

      {/* ===== THREE SURFACES ===== */}
      <section className="surfaces-section section-padding-y bg-iw-paper">
        <div className="section-padding text-center">
          <SectionLabel label="Product" />
          <h2 className="editorial-heading text-3xl sm:text-4xl text-iw-ink mb-4">THREE SURFACES. ONE MEMORY.</h2>
          <p className="font-iw-sans text-sm text-iw-slate max-w-xl mx-auto mb-8">You don't switch between tools anymore. You switch between views — and every view draws from the same context it never forgets.</p>
          <div className="inline-flex gap-1 p-1 bg-iw-paper-warm border border-iw-rule rounded-full mb-8">
            {(['data', 'twin', 'governance'] as const).map((tab) => (
              <button key={tab} onClick={() => setActiveSurface(tab)} className={`px-5 py-2 font-iw-sans text-sm font-semibold rounded-full transition-colors ${activeSurface === tab ? 'bg-iw-forest text-iw-paper' : 'text-iw-slate'}`}>{surfaceLabels[tab]}</button>
            ))}
          </div>
          <BrowserFrame className="h-96 max-w-4xl mx-auto"><img src={surfaceImages[activeSurface]} alt={surfaceLabels[activeSurface]} className="w-full h-96 object-cover object-top" /></BrowserFrame>
        </div>
      </section>

      {/* ===== DEPARTMENT PRICING ===== */}
      <section className="pricing-section section-padding-y bg-iw-paper-warm">
        <div className="section-padding">
          <div className="text-center mb-12">
            <SectionLabel label="Solutions" />
            <h2 className="editorial-heading text-3xl sm:text-4xl text-iw-ink">TRUST RESTORED, FOR YOUR DESK</h2>
            <p className="font-iw-sans text-sm text-iw-slate mt-4 max-w-xl mx-auto">Founder, sales lead, ops head — same demotion, different desk. Pay for the scope you use.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-iw-rule max-w-6xl mx-auto">
            {[
              { tag: 'CS & TAM', title: 'Account & Technical Success', desc: 'A unified timeline of billing issues, Zendesk tickets, and CRM records. Proactive alerts and call briefs from a Twin that remembers every account.', price: 'From $39/mo' },
              { tag: 'BI & Command Center', title: 'Business Intelligence', desc: 'Full 12-department visibility. Track KPIs in real time and run decision simulations with a Twin that grounds every number in your real data.', price: 'From $79/mo' },
              { tag: 'Private Command Center', title: 'Internal Operations', desc: 'Internal ops board for ticket triage, team knowledge that compounds, and strict write governance — it asks before it acts.', price: 'Internal Use Only' },
            ].map((t, i) => (
              <div key={i} className={`price-card p-6 sm:p-8 flex flex-col ${i < 2 ? 'lg:border-r border-b lg:border-b-0 border-iw-rule' : ''}`}>
                <span className="font-iw-mono text-xs text-iw-gold uppercase tracking-widest block mb-3">{t.tag}</span>
                <h3 className="font-iw-display text-xl tracking-wide text-iw-ink mb-3">{t.title}</h3>
                <p className="font-iw-sans text-sm text-iw-slate leading-relaxed mb-6 flex-1">{t.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-iw-display text-lg text-iw-forest">{t.price}</span>
                  <Link to="/pricing" className="inline-flex items-center font-iw-mono text-xs text-iw-forest uppercase tracking-widest hover:text-iw-gold transition-colors">Learn &amp; Price <ArrowRight size={14} className="ml-1" /></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SIX STEPS ===== */}
      <section className="steps-section section-padding-y bg-iw-forest text-iw-paper">
        <div className="section-padding">
          <div className="mb-12">
            <SectionLabel label="How It Works" />
            <h2 className="editorial-heading text-3xl sm:text-4xl text-iw-paper">FROM DEMOTED AI TO TRUSTED AI</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-iw-forest-mid">
            {[
              { num: '01', title: 'Connect', desc: 'Link your tools once — Salesforce, Slack, Notion, Gmail, Jira and more. It reads from each and writes back only when you approve.' },
              { num: '02', title: 'Unify', desc: 'Every record is matched and merged. The same person in Salesforce, HubSpot and Slack becomes one — no more fragments.' },
              { num: '03', title: 'Remember', desc: 'You brief it once. The Spine holds it — so it never asks you to repeat yourself in a new thread again.' },
              { num: '04', title: 'Ground', desc: 'Every answer is built from your real data, with its evidence attached. No more confident, made-up answers.' },
              { num: '05', title: 'Approve', desc: 'It proposes; you decide. Every action waits for your yes, and the decision is recorded for your team.' },
              { num: '06', title: 'Follow Through', desc: 'It finishes what it started and comes back tomorrow still knowing. The trust compounds instead of resetting.' },
            ].map((s, i) => (
              <div key={i} className="step-item p-6 sm:p-8 border border-iw-forest-mid">
                <span className="font-iw-mono text-xs text-iw-gold uppercase tracking-widest block mb-3">Step {s.num}</span>
                <h3 className="font-iw-display text-lg tracking-wide text-iw-paper mb-2">{s.title}</h3>
                <p className="font-iw-sans text-sm text-iw-paper/70 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SPINE INSIGHTS ===== */}
      <section className="insights-section section-padding-y bg-iw-paper">
        <div className="section-padding">
          <div className="mb-12">
            <SectionLabel label="Spine Insights" />
            <h2 className="editorial-heading text-3xl sm:text-4xl text-iw-ink">WHAT IT REMEMBERS THAT YOU CAN'T</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl">
            {[
              { img: '/images/morning-brief.png', title: 'It knows what needs attention', desc: 'It connects the dots you would have missed — the silent champion in Salesforce, the unpaid invoice, the renewal next week. One story, not ten disconnected alerts.' },
              { img: '/images/governance-view.png', title: 'Every answer comes with proof', desc: 'No black-box, no making things up. It shows its work — the data, the sources, the reasoning. You review, approve, or reject. Always your call.' },
              { img: '/images/memory-view.png', title: 'It remembers when people move on', desc: 'Conversations become memory. Decisions become precedent. When someone joins they start informed; when someone leaves, their insight stays.' },
            ].map((c, i) => (
              <div key={i} className="insight-card border border-iw-rule rounded-xl overflow-hidden bg-iw-paper-warm">
                <img src={c.img} alt={c.title} loading="lazy" className="w-full h-44 object-cover object-top border-b border-iw-rule" />
                <div className="p-6">
                  <h3 className="font-iw-display text-lg tracking-wide text-iw-ink mb-2">{c.title}</h3>
                  <p className="font-iw-sans text-sm text-iw-slate leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOUNDER STORY ===== */}
      <section className="section-padding-y bg-iw-forest text-iw-paper">
        <div className="section-padding max-w-3xl">
          <SectionLabel label="Why This Exists" />
          <h2 className="editorial-heading text-3xl sm:text-4xl text-iw-paper mb-8">BORN FROM AN $8M ACCOUNT AND A CONVICTION</h2>
          <blockquote className="border-l-4 border-iw-gold pl-6 py-2">
            <p className="editorial-serif text-xl text-iw-paper italic leading-relaxed">"I saved an $8 million account by connecting twelve disconnected tools into one unified view. That is why I resigned — and that is why I built IntegrateWise."</p>
            <cite className="font-iw-mono text-xs text-iw-paper/60 uppercase tracking-widest not-italic mt-4 block">— Founder, IntegrateWise</cite>
          </blockquote>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="cta-final section-padding-y bg-iw-paper">
        <div className="section-padding text-center max-w-2xl mx-auto">
          <h2 className="editorial-heading text-3xl sm:text-4xl text-iw-ink mb-4">THIS IS WHAT YOU WANTED. HOW YOU WANTED IT TO WORK.</h2>
          <p className="font-iw-sans text-base text-iw-slate leading-relaxed mb-8">You tell it once. It remembers. It follows through. It finishes the work.</p>
          <a href="https://calendar.app.google/EcRkSqxwtchuF4Qf6" className="inline-flex items-center justify-center px-7 py-3 bg-iw-gold text-iw-forest font-iw-sans font-semibold text-sm rounded-full hover:bg-iw-gold-pale">Book a Demo</a>
        </div>
      </section>
    </div>
  );
}
