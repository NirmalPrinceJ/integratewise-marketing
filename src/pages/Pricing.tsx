import { ArrowRight, Check, HelpCircle } from 'lucide-react';
import SectionLabel from '../components/SectionLabel';
import { useSeo } from '../hooks/useSeo';

const tiers = [
  {
    name: 'Account Success',
    price: '$49',
    period: '/user/month',
    scope: '1 View',
    desc: 'Account + Technical Success',
    features: [
      '1 connected departmental view',
      'Account & Technical Success workspace',
      'Portfolio health dashboard',
      'Churn risk signals',
      'Renewal pipeline visibility',
      'Digital Twin with evidence-backed answers',
      'Approval-first governance',
      'Full audit trail',
      'Email support',
    ],
    cta: 'Book a Demo',
    href: 'https://calendar.app.google/EcRkSqxwtchuF4Qf6',
    highlighted: false,
  },
  {
    name: 'Business Operations',
    price: '$89',
    period: '/user/month',
    scope: 'All 12 Views',
    desc: 'Every department. One connected system.',
    features: [
      'All 12 departmental views',
      'Cross-functional handovers',
      'Approval workflows across teams',
      'Real-time operational sync',
      'Everything in Account Success, plus:',
      'Connected documentation',
      'AI-assisted cross-team workflows',
      'Team memory & knowledge base',
      'Priority support',
    ],
    cta: 'Book a Demo',
    href: 'https://calendar.app.google/EcRkSqxwtchuF4Qf6',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    scope: 'Unlimited',
    desc: 'For large teams with custom needs.',
    features: [
      'Everything in Business Operations',
      'Custom connectors',
      'Dedicated success manager',
      'SSO & advanced security',
      'Custom AI model training',
      'On-premise deployment option',
      'SLA guarantee',
      '24/7 phone support',
    ],
    cta: 'Talk to Sales',
    href: 'https://calendar.app.google/EcRkSqxwtchuF4Qf6',
    highlighted: false,
  },
];

const faqs = [
  { q: 'What is a "view"?', a: 'A view is a connected workspace for a specific business function — like Account Success, Sales, Support, or Finance. Account Success gives you 1 view (Account + Technical Success combined). Business Operations gives you all 12 departmental views.' },
  { q: 'Can I upgrade later?', a: 'Yes. Start with Account Success and upgrade to Business Operations anytime. Your data, connections, and Twin memory carry over seamlessly.' },
  { q: 'Is there a free trial?', a: 'We do free guided demos instead of self-serve trials. This lets us connect your actual tools and show you real value in the first session.' },
  { q: 'What counts as a user?', a: 'Anyone who logs into IntegrateWise and interacts with their Twin or the workbench. View-only dashboard access is free.' },
  { q: 'Do you offer annual billing?', a: 'Yes. Annual billing gives you 2 months free. Contact us for enterprise annual contracts.' },
];

export default function Pricing() {
  useSeo("Pricing | IntegrateWise", "Account Success from $49/user/month. Business Operations from $89/user/month. Enterprise custom. All with approval-first governance and a Digital Twin that knows your business.");

  return (
    <div>
      <section className="pt-32 pb-16 section-padding">
        <div className="max-w-4xl">
          <SectionLabel label="Pricing" />
          <h1 className="editorial-heading text-4xl sm:text-5xl md:text-6xl text-iw-ink mt-6">PAY FOR SCOPE. NOT COMPLEXITY.</h1>
          <p className="font-iw-sans text-base sm:text-lg text-iw-slate mt-6 leading-relaxed max-w-2xl">Account Success starts at $49 per user per month. Business Operations at $89. No hidden fees. No usage limits. Governance and your Digital Twin are included in every tier.</p>
        </div>
      </section>

      <section className="section-padding-y border-t border-iw-paper-deep">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-iw-rule max-w-6xl">
            {tiers.map((tier, i) => (
              <div key={i} className={`p-6 sm:p-8 flex flex-col ${i < tiers.length - 1 ? 'lg:border-r border-b lg:border-b-0 border-iw-rule' : ''} ${tier.highlighted ? 'bg-iw-forest text-iw-paper' : ''}`}>
                <div className="mb-6">
                  <span className={`inline-block font-iw-mono text-xs uppercase tracking-widest px-3 py-1.5 rounded border mb-4 ${tier.highlighted ? 'text-iw-gold-pale border-iw-gold/40' : 'text-iw-forest border-iw-rule'}`}>{tier.name}</span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-iw-display text-4xl tracking-wide">{tier.price}</span>
                    {tier.period && <span className={`font-iw-mono text-sm ${tier.highlighted ? 'text-iw-paper/60' : 'text-iw-slate'}`}>{tier.period}</span>}
                  </div>
                  <div className={`inline-flex items-center gap-1 mt-2 font-iw-mono text-xs ${tier.highlighted ? 'text-iw-gold-pale' : 'text-iw-forest'}`}>
                    <span className="px-2 py-0.5 rounded bg-current/10">{tier.scope}</span>
                  </div>
                  <p className={`font-iw-sans text-sm mt-2 ${tier.highlighted ? 'text-iw-paper/70' : 'text-iw-slate'}`}>{tier.desc}</p>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check size={16} className={`shrink-0 mt-0.5 ${tier.highlighted ? 'text-iw-gold' : 'text-iw-forest'}`} />
                      <span className={`font-iw-sans text-sm ${tier.highlighted ? 'text-iw-paper/80' : 'text-iw-slate'}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href={tier.href} className={`inline-flex items-center justify-center px-6 py-3 font-iw-sans font-semibold text-sm rounded-full transition-all ${tier.highlighted ? 'bg-iw-paper text-iw-forest hover:bg-iw-gold-pale' : 'bg-iw-ink text-iw-paper hover:bg-iw-forest'}`}>
                  {tier.cta} <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-y bg-iw-paper-warm">
        <div className="section-padding max-w-3xl">
          <SectionLabel label="FAQ" />
          <h2 className="editorial-heading text-2xl sm:text-3xl text-iw-ink mt-4 mb-10">COMMON QUESTIONS.</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-iw-rule pb-6">
                <div className="flex items-start gap-3">
                  <HelpCircle size={18} className="text-iw-forest shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-iw-display text-lg tracking-wide text-iw-ink mb-2">{faq.q}</h3>
                    <p className="font-iw-sans text-sm text-iw-slate leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-y">
        <div className="section-padding text-center max-w-2xl mx-auto">
          <h2 className="editorial-heading text-2xl sm:text-3xl text-iw-ink mb-4">NOT SURE WHICH TIER?</h2>
          <p className="font-iw-sans text-base text-iw-slate leading-relaxed mb-8">Talk to us. We will help you figure out the right scope for your team.</p>
          <a href="https://calendar.app.google/EcRkSqxwtchuF4Qf6" className="btn-primary">Book a Demo <ArrowRight size={16} className="ml-2" /></a>
        </div>
      </section>
    </div>
  );
}
