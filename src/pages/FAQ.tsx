import { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import SectionLabel from '../components/SectionLabel';
import { useSeo } from '../hooks/useSeo';

const faqs = [
  {
    q: 'What does IntegrateWise actually do?',
    a: 'IntegrateWise connects your business tools into one workspace. Your CRM, support desk, billing system, and project management tools all sync through one connected layer. Then our Digital Twin reads that connected data to give you evidence-backed answers and recommendations.',
  },
  {
    q: 'Do I have to replace my existing tools?',
    a: 'No. IntegrateWise connects to the tools you already use — Salesforce, HubSpot, Zendesk, Jira, Slack, and more. Your data stays in your systems. We just connect them so everything stays in sync.',
  },
  {
    q: 'What is a Digital Twin?',
    a: 'Your Digital Twin is an AI companion that knows your business. It reads from your connected tools, remembers decisions over time, and gives you answers backed by evidence. It proposes actions but never executes without your approval.',
  },
  {
    q: 'How does pricing work?',
    a: 'Account Success is $49 per user per month and gives you 1 connected departmental view. Business Operations is $89 per user per month and includes all 12 departmental views. Enterprise is custom. See our pricing page for details.',
  },
  {
    q: 'Is my data secure?',
    a: 'Yes. Your data never leaves your systems — we connect to them, not replace them. All connections use end-to-end encryption. We maintain full audit trails, require human approval for all actions, and are SOC 2 compliant.',
  },
  {
    q: 'How long does setup take?',
    a: 'Most teams are up and running within a day. Connect your tools, invite your team, and start seeing connected data immediately. Your Twin gets smarter over time as it learns your business.',
  },
  {
    q: 'What integrations do you support?',
    a: 'We have 12 live integrations including Salesforce, HubSpot, Zendesk, Jira, Asana, Slack, Stripe, QuickBooks, Notion, GitHub, Google Workspace, and Intercom. We add new ones every month.',
  },
  {
    q: 'Can I try before I buy?',
    a: 'We offer guided demos instead of self-serve trials. In a 30-minute demo, we will connect your actual tools and show you real value. Book a demo to see it in action.',
  },
  {
    q: 'What happens when someone leaves the team?',
    a: 'Their context stays. Decisions, reasoning, and approved actions are all recorded in your Twin\'s memory. New team members can pick up where others left off.',
  },
  {
    q: 'Who approves the AI\'s actions?',
    a: 'You do. Always. Your Twin proposes actions with full evidence and context. Nothing executes without explicit human approval. This is governance built in, not bolted on.',
  },
];

export default function FAQ() {
  useSeo("FAQ | IntegrateWise", "Common questions about IntegrateWise: what it does, how pricing works, security, integrations, and how the Digital Twin works.");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      <section className="pt-32 pb-16 section-padding">
        <div className="max-w-4xl">
          <SectionLabel label="FAQ" />
          <h1 className="editorial-heading text-4xl sm:text-5xl md:text-6xl text-iw-ink mt-6">QUESTIONS? ANSWERED.</h1>
          <p className="font-iw-sans text-base sm:text-lg text-iw-slate mt-6 leading-relaxed max-w-2xl">Everything you need to know about IntegrateWise, how it works, and what it means for your team.</p>
        </div>
      </section>

      <section className="section-padding-y border-t border-iw-paper-deep">
        <div className="section-padding max-w-3xl">
          <div className="space-y-0 border border-iw-rule">
            {faqs.map((faq, i) => (
              <div key={i} className={`border-b border-iw-rule last:border-b-0`}>
                <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-start justify-between p-6 sm:p-8 text-left hover:bg-iw-paper-warm/50 transition-colors">
                  <span className="font-iw-display text-lg tracking-wide text-iw-ink pr-4">{faq.q}</span>
                  <ChevronDown size={20} className={`text-iw-forest shrink-0 mt-1 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
                </button>
                {openIndex === i && (
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                    <p className="font-iw-sans text-sm text-iw-slate leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-y">
        <div className="section-padding text-center max-w-2xl mx-auto">
          <h2 className="editorial-heading text-2xl sm:text-3xl text-iw-ink mb-4">STILL HAVE QUESTIONS?</h2>
          <p className="font-iw-sans text-base text-iw-slate leading-relaxed mb-8">Talk to us directly. No sales script — just answers.</p>
          <a href="https://calendar.app.google/EcRkSqxwtchuF4Qf6" className="btn-primary">Book a Demo <ArrowRight size={16} className="ml-2" /></a>
        </div>
      </section>
    </div>
  );
}
