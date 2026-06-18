import { useState } from 'react';
import { ArrowRight, Search, CheckCircle2, Clock } from 'lucide-react';
import SectionLabel from '../components/SectionLabel';
import { useSeo } from '../hooks/useSeo';

interface Integration {
  name: string;
  category: string;
  status: 'live' | 'soon';
  desc: string;
}

const integrations: Integration[] = [
  { name: 'Salesforce', category: 'CRM', status: 'live', desc: 'Sync accounts, opportunities, contacts, and activities.' },
  { name: 'HubSpot', category: 'CRM', status: 'live', desc: 'Connect deals, contacts, and marketing campaigns.' },
  { name: 'Zendesk', category: 'Support', status: 'live', desc: 'Link support tickets to accounts and projects.' },
  { name: 'Intercom', category: 'Support', status: 'live', desc: 'Sync conversations and customer communications.' },
  { name: 'Jira', category: 'Project', status: 'live', desc: 'Connect issues, epics, and sprint data.' },
  { name: 'Asana', category: 'Project', status: 'live', desc: 'Sync tasks, projects, and milestones.' },
  { name: 'Slack', category: 'Communication', status: 'live', desc: 'Get Twin alerts and approvals in Slack.' },
  { name: 'Stripe', category: 'Finance', status: 'live', desc: 'Link invoices, subscriptions, and payments.' },
  { name: 'QuickBooks', category: 'Finance', status: 'live', desc: 'Sync billing and financial records.' },
  { name: 'Notion', category: 'Knowledge', status: 'live', desc: 'Connect documentation and wikis.' },
  { name: 'GitHub', category: 'Engineering', status: 'live', desc: 'Link repos, PRs, and issues to projects.' },
  { name: 'Google Workspace', category: 'Communication', status: 'live', desc: 'Sync calendar, emails, and documents.' },
  { name: 'Monday.com', category: 'Project', status: 'soon', desc: 'Coming Q3 2025' },
  { name: 'Linear', category: 'Engineering', status: 'soon', desc: 'Coming Q3 2025' },
  { name: 'Microsoft Dynamics', category: 'CRM', status: 'soon', desc: 'Coming Q4 2025' },
  { name: 'NetSuite', category: 'Finance', status: 'soon', desc: 'Coming Q4 2025' },
];

const categories = ['All', 'CRM', 'Support', 'Project', 'Communication', 'Finance', 'Knowledge', 'Engineering'];

export default function Integrations() {
  useSeo("Integrations | IntegrateWise", "Connect Salesforce, HubSpot, Zendesk, Jira, Slack, Stripe, and more. 12 live integrations with more coming soon.");
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = integrations.filter((i) => {
    const matchCat = activeCategory === 'All' || i.category === activeCategory;
    const matchSearch = i.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const liveCount = integrations.filter((i) => i.status === 'live').length;

  return (
    <div>
      <section className="pt-32 pb-16 section-padding">
        <div className="max-w-4xl">
          <SectionLabel label="Integrations" />
          <h1 className="editorial-heading text-4xl sm:text-5xl md:text-6xl text-iw-ink mt-6">CONNECT ONCE. STOP BEING THE GLUE.</h1>
          <p className="font-iw-sans text-base sm:text-lg text-iw-slate mt-6 leading-relaxed max-w-2xl">{liveCount} live integrations. More on the way. You stop being the copy-paste between your own tools — connect once, and they share one memory.</p>
        </div>
      </section>

      <section className="section-padding-y border-t border-iw-paper-deep">
        <div className="section-padding">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-10 max-w-5xl">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-3 py-1.5 rounded-full font-iw-mono text-xs uppercase tracking-widest transition-colors ${activeCategory === cat ? 'bg-iw-forest text-iw-paper' : 'bg-iw-paper-warm text-iw-slate hover:bg-iw-forest/10'}`}>
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full sm:w-64">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-iw-slate/50" />
              <input type="text" placeholder="Search integrations..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-9 pr-4 py-2 rounded-full border border-iw-rule bg-iw-paper font-iw-sans text-sm focus:outline-none focus:border-iw-forest" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-iw-rule max-w-5xl">
            {filtered.map((int, i) => (
              <div key={i} className="p-6 sm:p-8 border border-iw-rule">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-iw-display text-lg tracking-wide text-iw-ink">{int.name}</h3>
                  {int.status === 'live' ? (
                    <span className="inline-flex items-center gap-1 font-iw-mono text-xs text-iw-forest"><CheckCircle2 size={12} /> Live</span>
                  ) : (
                    <span className="inline-flex items-center gap-1 font-iw-mono text-xs text-iw-gold"><Clock size={12} /> Soon</span>
                  )}
                </div>
                <span className="font-iw-mono text-xs text-iw-slate/60 uppercase tracking-widest block mb-2">{int.category}</span>
                <p className="font-iw-sans text-sm text-iw-slate leading-relaxed">{int.desc}</p>
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="col-span-full p-8 text-center">
                <p className="font-iw-sans text-sm text-iw-slate">No integrations match your search.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section-padding-y">
        <div className="section-padding text-center max-w-2xl mx-auto">
          <h2 className="editorial-heading text-2xl sm:text-3xl text-iw-ink mb-4">NEED A CONNECTOR WE DO NOT HAVE?</h2>
          <p className="font-iw-sans text-base text-iw-slate leading-relaxed mb-8">We add new integrations every month. Let us know what you need and we will prioritise it.</p>
          <a href="https://calendar.app.google/EcRkSqxwtchuF4Qf6" className="btn-primary">Request a Connector <ArrowRight size={16} className="ml-2" /></a>
        </div>
      </section>
    </div>
  );
}
