export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  tag: string;
  metric: string;
  metricLabel: string;
  challenge: string;
  approach: string[];
  result: string[];
  quote?: string;
  quoteAuthor?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'saving-8m-account',
    title: 'How the Spine Saved an $8 Million Account',
    subtitle: 'A customer success manager connected twelve disconnected tools into one view — and caught what everyone else had missed.',
    tag: 'Account Success',
    metric: '$8M',
    metricLabel: 'Account saved from churn',
    challenge: 'A strategic customer was showing early churn signals — engagement dropping, support tickets escalating, the champion going quiet. But the signals were scattered across Salesforce, Zendesk, Slack, and a spreadsheet no one checked. No one saw the full picture until it was almost too late.',
    approach: [
      'Connected Salesforce, Zendesk, Slack, and the billing system into one workspace',
      'The Twin surfaced the engagement drop, ticket pattern, and renewal risk in one alert',
      'The CSM reviewed the evidence, approved a proactive outreach, and engaged the customer',
      'The full context meant the conversation was informed — not another "just checking in" call',
    ],
    result: [
      'The $8M account renewed and expanded',
      'The pattern is now caught automatically — three similar cases identified since',
      'The CSM spends 60% less time stitching context across tools',
      'The team now has a shared memory of what worked and why',
    ],
    quote: 'I saved an $8 million account by connecting twelve disconnected tools into one unified view. That is why I resigned — and that is why I built IntegrateWise.',
    quoteAuthor: 'Founder, IntegrateWise',
  },
  {
    slug: 'csm-team-handoff',
    title: 'How a CSM Team Eliminated Two Weeks of Onboarding',
    subtitle: 'When the senior CSM left, the team did not lose her knowledge — because it lived in the Spine.',
    tag: 'Team Handovers',
    metric: '2 weeks',
    metricLabel: 'Onboarding time saved',
    challenge: 'A senior CSM who managed the company top 20 accounts left suddenly. She had five years of institutional knowledge — account nuances, relationship histories, unwritten rules — that lived in her head. The team was looking at months of recovery.',
    approach: [
      'Every account conversation, decision, and insight had been captured in the Spine',
      'The new CSM started with full context — every signal, every approved action, every pattern',
      'The Twin surfaced the key risks and opportunities for each account on day one',
      'No reconstruction. No "what did she know?" Just continuous, informed management.',
    ],
    result: [
      'New CSM was fully productive in 3 days instead of 3 weeks',
      'No accounts were lost during the transition',
      'The team now uses the captured knowledge as a playbook for all accounts',
      'Handovers are now a process, not a crisis',
    ],
  },
  {
    slug: 'operations-team-alignment',
    title: 'How Operations Got Every Department on the Same Page',
    subtitle: 'Revenue, support, product, and engineering — all seeing the same customer reality for the first time.',
    tag: 'Business Operations',
    metric: '12',
    metricLabel: 'Departments aligned',
    challenge: 'A fast-growing SaaS company had revenue ops, customer success, support, product, and engineering all using different tools. Each department had its own view of the customer. Revenue thought the account was healthy. Support knew it was not. No one connected the dots until a major churn event.',
    approach: [
      'Connected Salesforce, HubSpot, Zendesk, Jira, and the product analytics tool',
      'Built departmental workbenches so each team sees what matters to them — from the same data',
      'The Twin now surfaces cross-departmental signals: product issues affecting renewals, support load predicting churn',
      'Governance ensures every cross-functional action is approved with full context',
    ],
    result: [
      'Renewal rate increased 23% in the first quarter',
      'Support escalations that affect revenue are now caught within hours, not weeks',
      'Product decisions are informed by actual customer health data',
      'Weekly cross-functional meetings went from 90 minutes to 30 minutes — everyone starts informed',
    ],
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
