import { Link } from 'react-router-dom';
import { ArrowRight, Users, Building2, ArrowLeftRight, FileText, Bot } from 'lucide-react';
import SectionLabel from '../components/SectionLabel';
import { useSeo } from '../hooks/useSeo';

const solutions = [
  { icon: Users, title: 'Account Success', tag: 'Account Management', desc: 'See your entire customer portfolio in one view. Your Twin surfaces at-risk signals and renewal opportunities before they become crises.', outcomes: ['Portfolio health at a glance', 'Churn signals weeks earlier', 'Renewal pipeline visibility', 'Every action has an audit trail'], href: '/use-cases' },
  { icon: Building2, title: 'Business Operations', tag: 'Operations', desc: 'Connect every operational tool into one governed layer. Approval workflows, cross-functional handovers, and real-time sync.', outcomes: ['Cross-tool visibility', 'Approval-first governance', 'Smooth department handoffs', 'Real-time operational sync'], href: '/use-cases' },
  { icon: ArrowLeftRight, title: 'Team Handovers', tag: 'Collaboration', desc: 'When someone leaves, their context stays. Decisions, reasoning, and approved actions are captured.', outcomes: ['Context survives people changes', 'Decision history preserved', 'Faster onboarding'], href: '/use-cases' },
  { icon: FileText, title: 'Documentation', tag: 'Knowledge', desc: 'Documentation connected to live systems. Your Twin reads from your actual tools and surfaces what is really happening.', outcomes: ['Living documentation', 'Connected to real data', 'AI-synthesised updates'], href: '/use-cases' },
  { icon: Bot, title: 'AI-Assisted Workflows', tag: 'Automation', desc: 'AI that proposes, not executes. Every workflow starts with a recommendation carrying evidence.', outcomes: ['Proposes, does not assume', 'Evidence-backed recommendations', 'Human approval at every step'], href: '/use-cases' },
];

export default function Solutions() {
  useSeo("Solutions | IntegrateWise", "Account Success, Business Operations, Team Handovers, Documentation, and AI-Assisted Workflows. All powered by the Spine.");

  return (
    <div>
      <section className="pt-32 pb-16 section-padding">
        <div className="max-w-4xl">
          <SectionLabel label="Solutions" />
          <h1 className="editorial-heading text-4xl sm:text-5xl md:text-6xl text-iw-ink mt-6">FIVE PROBLEMS. ONE ANSWER.</h1>
          <p className="font-iw-sans text-base sm:text-lg text-iw-slate mt-6 leading-relaxed max-w-2xl">Every growing team faces these challenges. IntegrateWise solves them with one approach: connect your tools, power your AI with context, and keep humans in control.</p>
        </div>
      </section>
      <section className="section-padding-y border-t border-iw-paper-deep">
        <div className="section-padding">
          <div className="space-y-0 border border-iw-rule max-w-5xl">
            {solutions.map((sol, i) => (
              <div key={i} className={`p-6 sm:p-8 ${i < solutions.length - 1 ? 'border-b border-iw-rule' : ''}`}>
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                  <div className="lg:w-1/3">
                    <div className="flex items-center gap-3 mb-3"><div className="w-10 h-10 rounded-full bg-iw-forest/10 flex items-center justify-center"><sol.icon size={20} className="text-iw-forest" /></div><span className="font-iw-mono text-xs text-iw-gold uppercase tracking-widest">{sol.tag}</span></div>
                    <h3 className="font-iw-display text-xl tracking-wide text-iw-ink mb-2">{sol.title}</h3>
                    <Link to={sol.href} className="inline-flex items-center font-iw-mono text-xs text-iw-forest uppercase tracking-widest hover:text-iw-gold transition-colors">See details <ArrowRight size={14} className="ml-1" /></Link>
                  </div>
                  <div className="lg:w-2/3">
                    <p className="font-iw-sans text-sm text-iw-slate leading-relaxed mb-4">{sol.desc}</p>
                    <div className="flex flex-wrap gap-2">{sol.outcomes.map((out, j) => <span key={j} className="font-iw-mono text-xs text-iw-forest/70 bg-iw-forest/5 px-2 py-1 rounded">{out}</span>)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding-y bg-iw-forest text-iw-paper">
        <div className="section-padding text-center max-w-2xl mx-auto">
          <h2 className="editorial-heading text-2xl sm:text-3xl text-iw-paper mb-4">WHICH SOLUTION DO YOU NEED FIRST?</h2>
          <p className="font-iw-sans text-base text-iw-paper/70 leading-relaxed mb-8">Talk to us. No sales script. Just a conversation about your operational reality.</p>
          <a href="https://calendar.app.google/EcRkSqxwtchuF4Qf6" className="inline-flex items-center justify-center px-6 py-3 bg-iw-paper text-iw-forest font-iw-sans font-semibold text-sm rounded-full hover:bg-iw-gold-pale">Book a Demo <ArrowRight size={16} className="ml-2" /></a>
        </div>
      </section>
    </div>
  );
}
