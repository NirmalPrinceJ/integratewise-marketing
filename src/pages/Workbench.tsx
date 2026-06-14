import { ArrowRight, LayoutDashboard, Bell, Search, Kanban } from 'lucide-react';
import SectionLabel from '../components/SectionLabel';
import { useSeo } from '../hooks/useSeo';

const views = [
  { icon: LayoutDashboard, title: 'Unified Dashboard', desc: 'See everything that matters in one place. Accounts, tasks, alerts, and insights — all connected, all current.' },
  { icon: Kanban, title: 'Project View', desc: 'Track projects across tools without switching tabs. Your Jira, Asana, and Monday tasks in one connected board.' },
  { icon: Bell, title: 'Alert Centre', desc: 'Only the alerts that matter. Filtered by context, prioritised by impact, and linked to the data behind them.' },
  { icon: Search, title: 'Global Search', desc: 'Search across all your tools at once. One query finds contacts, deals, tickets, and documents — with context.' },
];

export default function Workbench() {
  useSeo("Workbench | IntegrateWise", "Stop being the integration between your own tools. One surface where everything — and your AI — already shares the same context.");

  return (
    <div>
      <section className="pt-32 pb-16 section-padding">
        <div className="max-w-4xl">
          <SectionLabel label="One Surface" />
          <h1 className="editorial-heading text-4xl sm:text-5xl md:text-6xl text-iw-ink mt-6">STOP BEING THE GLUE BETWEEN YOUR TOOLS.</h1>
          <p className="font-iw-sans text-base sm:text-lg text-iw-slate mt-6 leading-relaxed max-w-2xl">You became the integration. You copy-paste from Salesforce into Slack, summarise threads into the CRM, re-paste context into a fresh AI chat every morning. The workbench ends that — every tool, and your Twin, working from one shared context.</p>
        </div>
      </section>

      <section className="section-padding-y border-t border-iw-paper-deep">
        <div className="section-padding">
          <SectionLabel label="Views" />
          <h2 className="editorial-heading text-2xl sm:text-3xl text-iw-ink mt-4 mb-10">FOUR VIEWS. ONE SURFACE.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-iw-rule max-w-5xl">
            {views.map((v, i) => (
              <div key={i} className="p-6 sm:p-8 border border-iw-rule">
                <div className="w-10 h-10 rounded-full bg-iw-forest/10 flex items-center justify-center mb-4"><v.icon size={20} className="text-iw-forest" /></div>
                <h3 className="font-iw-display text-lg tracking-wide text-iw-ink mb-2">{v.title}</h3>
                <p className="font-iw-sans text-sm text-iw-slate leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-y bg-iw-forest text-iw-paper">
        <div className="section-padding max-w-3xl">
          <SectionLabel label="Why One Surface Matters" dark />
          <h2 className="editorial-heading text-2xl sm:text-3xl text-iw-paper mt-4 mb-10">CONTEXT, NOT TABS.</h2>
          <div className="space-y-6">
            {[
              { title: 'No More Tab Switching', desc: 'The average knowledge worker switches between 10 apps 32 times a day. One Surface ends that.' },
              { title: 'Context at a Glance', desc: 'When you view an account, you see the deal, the support tickets, the invoices, and the project status — all connected.' },
              { title: 'Your Twin Sees What You See', desc: 'Because everything is in one surface, your Twin has the same context you do. Its recommendations are grounded in your reality.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <span className="font-iw-mono text-xs text-iw-gold uppercase tracking-widest shrink-0 mt-1">0{i + 1}</span>
                <div>
                  <h3 className="font-iw-display text-lg tracking-wide text-iw-paper mb-1">{item.title}</h3>
                  <p className="font-iw-sans text-sm text-iw-paper/70 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-y">
        <div className="section-padding text-center max-w-2xl mx-auto">
          <h2 className="editorial-heading text-2xl sm:text-3xl text-iw-ink mb-4">WORK IN ONE PLACE</h2>
          <p className="font-iw-sans text-base text-iw-slate leading-relaxed mb-8">See how One Surface eliminates tab switching and brings everything together.</p>
          <a href="https://calendar.app.google/EcRkSqxwtchuF4Qf6" className="inline-flex items-center justify-center px-6 py-3 bg-iw-ink text-iw-paper font-iw-sans font-semibold text-sm rounded-full hover:bg-iw-forest transition-all">Book a Demo <ArrowRight size={16} className="ml-2" /></a>
        </div>
      </section>
    </div>
  );
}
