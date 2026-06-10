import { ArrowRight, Users, Building2, ArrowLeftRight, FileText, Bot } from 'lucide-react';
import SectionLabel from '../components/SectionLabel';
import { useSeo } from '../hooks/useSeo';

const useCases = [
  {
    icon: Users,
    title: 'Account Success',
    tag: 'Account Management',
    problem: 'Account managers juggle CRM data, support tickets, billing issues, and project updates across disconnected tools. They miss churn signals and renewal opportunities.',
    solution: 'One connected portfolio view. Your Twin surfaces at-risk accounts, renewal opportunities, and recommended actions — all with evidence from your actual tools.',
    outcomes: ['Portfolio health at a glance', 'Churn signals weeks earlier', 'Renewal pipeline visibility', 'Every action has an audit trail'],
  },
  {
    icon: Building2,
    title: 'Business Operations',
    tag: 'Operations',
    problem: 'Operations teams manage workflows across CRM, ERP, support, billing, and HR tools. Nothing talks to each other. Data is duplicated. Approvals are scattered.',
    solution: 'All 12 departmental views connected through the Spine. Approval workflows, cross-functional handovers, and real-time sync across every tool.',
    outcomes: ['Cross-tool visibility', 'Approval-first governance', 'Smooth department handoffs', 'Real-time operational sync'],
  },
  {
    icon: ArrowLeftRight,
    title: 'Team Handovers',
    tag: 'Collaboration',
    problem: 'When someone leaves, their knowledge walks out the door. New hires spend weeks figuring out what their predecessor knew.',
    solution: 'Your Twin remembers every decision, every pattern, and every outcome. Context survives people changes. New team members get up to speed in days, not weeks.',
    outcomes: ['Context survives people changes', 'Decision history preserved', 'Faster onboarding'],
  },
  {
    icon: FileText,
    title: 'Documentation',
    tag: 'Knowledge',
    problem: 'Documentation is always out of date. Teams maintain wikis that nobody reads, and the real information lives in people\'s heads.',
    solution: 'Living documentation connected to your actual tools. Your Twin reads from live systems and surfaces what is really happening. AI-synthesised updates keep docs current.',
    outcomes: ['Living documentation', 'Connected to real data', 'AI-synthesised updates'],
  },
  {
    icon: Bot,
    title: 'AI-Assisted Workflows',
    tag: 'Automation',
    problem: 'AI tools execute without context or approval. Teams do not trust automated actions because they cannot trace the reasoning.',
    solution: 'Your Twin proposes, does not assume. Every workflow starts with a recommendation carrying evidence. Humans review and approve every step.',
    outcomes: ['Proposes, does not assume', 'Evidence-backed recommendations', 'Human approval at every step'],
  },
];

export default function UseCases() {
  useSeo("Use Cases | IntegrateWise", "See how IntegrateWise solves real problems: Account Success, Business Operations, Team Handovers, Documentation, and AI-Assisted Workflows.");

  return (
    <div>
      <section className="pt-32 pb-16 section-padding">
        <div className="max-w-4xl">
          <SectionLabel label="Use Cases" />
          <h1 className="editorial-heading text-4xl sm:text-5xl md:text-6xl text-iw-ink mt-6">REAL PROBLEMS. REAL SOLUTIONS.</h1>
          <p className="font-iw-sans text-base sm:text-lg text-iw-slate mt-6 leading-relaxed max-w-2xl">Five challenges every growing team faces. See how IntegrateWise solves each one with connected tools, a Digital Twin, and governance built in.</p>
        </div>
      </section>

      <section className="section-padding-y border-t border-iw-paper-deep">
        <div className="section-padding">
          <div className="space-y-0 border border-iw-rule max-w-5xl">
            {useCases.map((uc, i) => (
              <div key={i} className={`p-6 sm:p-8 ${i < useCases.length - 1 ? 'border-b border-iw-rule' : ''}`}>
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                  <div className="lg:w-1/3">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-iw-forest/10 flex items-center justify-center"><uc.icon size={20} className="text-iw-forest" /></div>
                      <span className="font-iw-mono text-xs text-iw-gold uppercase tracking-widest">{uc.tag}</span>
                    </div>
                    <h3 className="font-iw-display text-xl tracking-wide text-iw-ink mb-2">{uc.title}</h3>
                  </div>
                  <div className="lg:w-2/3 space-y-4">
                    <div>
                      <span className="font-iw-mono text-xs text-iw-red uppercase tracking-widest block mb-1">The Problem</span>
                      <p className="font-iw-sans text-sm text-iw-slate leading-relaxed">{uc.problem}</p>
                    </div>
                    <div>
                      <span className="font-iw-mono text-xs text-iw-forest uppercase tracking-widest block mb-1">The Solution</span>
                      <p className="font-iw-sans text-sm text-iw-slate leading-relaxed">{uc.solution}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {uc.outcomes.map((out, j) => (
                        <span key={j} className="font-iw-mono text-xs text-iw-forest/70 bg-iw-forest/5 px-2 py-1 rounded">{out}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-y bg-iw-forest text-iw-paper">
        <div className="section-padding text-center max-w-2xl mx-auto">
          <h2 className="editorial-heading text-2xl sm:text-3xl text-iw-paper mb-4">WHICH USE CASE FITS YOUR TEAM?</h2>
          <p className="font-iw-sans text-base text-iw-paper/70 leading-relaxed mb-8">Talk to us about your specific situation. We will show you exactly how IntegrateWise fits.</p>
          <a href="https://calendar.app.google/EcRkSqxwtchuF4Qf6" className="inline-flex items-center justify-center px-6 py-3 bg-iw-paper text-iw-forest font-iw-sans font-semibold text-sm rounded-full hover:bg-iw-gold-pale transition-all">Book a Demo <ArrowRight size={16} className="ml-2" /></a>
        </div>
      </section>
    </div>
  );
}
