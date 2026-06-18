import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Code, Plug, Shield, Zap, HelpCircle, Terminal } from 'lucide-react';
import SectionLabel from '../components/SectionLabel';
import { useSeo } from '../hooks/useSeo';

const sections = [
  {
    icon: BookOpen,
    title: 'Getting Started',
    desc: 'Set up your workspace, connect your first tools, and meet your Digital Twin.',
    links: ['Quick Start Guide', 'Connecting Your Tools', 'Setting Up Your Twin', 'Inviting Your Team'],
  },
  {
    icon: Plug,
    title: 'Integrations',
    desc: 'Connect CRM, support, billing, project management, and more.',
    links: ['Available Connectors', 'Adding a Custom Connector', 'Sync Settings', 'Troubleshooting'],
  },
  {
    icon: Code,
    title: 'API Reference',
    desc: 'RESTful API for reading and writing data, managing connectors, and querying your Twin.',
    links: ['Authentication', 'Endpoints Overview', 'Rate Limits', 'Webhooks'],
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    desc: 'Encryption, access controls, audit logs, and compliance certifications.',
    links: ['Security Overview', 'SOC 2 Compliance', 'Data Residency', 'Access Controls'],
  },
  {
    icon: Zap,
    title: 'Advanced',
    desc: 'Custom workflows, AI model configuration, and enterprise features.',
    links: ['Custom Workflows', 'AI Model Settings', 'Enterprise SSO', 'On-Premise Deployment'],
  },
  {
    icon: HelpCircle,
    title: 'Troubleshooting',
    desc: 'Common issues, error codes, and how to get help.',
    links: ['Common Errors', 'Connector Issues', 'Sync Failures', 'Contact Support'],
  },
];

export default function Docs() {
  useSeo("Documentation | IntegrateWise", "Getting started guides, API reference, integration docs, security documentation, and troubleshooting. Everything you need to integrate and operate IntegrateWise.");

  return (
    <div>
      <section className="pt-32 pb-16 section-padding">
        <div className="max-w-4xl">
          <SectionLabel label="Documentation" />
          <h1 className="editorial-heading text-4xl sm:text-5xl md:text-6xl text-iw-ink mt-6">EVERYTHING YOU NEED TO INTEGRATE.</h1>
          <p className="font-iw-sans text-base sm:text-lg text-iw-slate mt-6 leading-relaxed max-w-2xl">Getting started guides, API references, security docs, and troubleshooting. Search or browse by topic.</p>
        </div>
      </section>

      <section className="section-padding-y border-t border-iw-paper-deep">
        <div className="section-padding">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-iw-rule max-w-5xl">
            {sections.map((sec, i) => (
              <div key={i} className="p-6 sm:p-8 border border-iw-rule">
                <div className="w-10 h-10 rounded-full bg-iw-forest/10 flex items-center justify-center mb-4"><sec.icon size={20} className="text-iw-forest" /></div>
                <h3 className="font-iw-display text-lg tracking-wide text-iw-ink mb-2">{sec.title}</h3>
                <p className="font-iw-sans text-sm text-iw-slate leading-relaxed mb-4">{sec.desc}</p>
                <ul className="space-y-2">
                  {sec.links.map((link, j) => (
                    <li key={j}>
                      <Link to="/docs" onClick={(e) => { e.preventDefault(); alert('Full documentation coming soon. Contact us for early access.'); }} className="inline-flex items-center font-iw-mono text-xs text-iw-forest hover:text-iw-gold transition-colors">
                        <ArrowRight size={12} className="mr-1" />{link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-y bg-iw-forest text-iw-paper">
        <div className="section-padding max-w-2xl mx-auto text-center">
          <Terminal size={32} className="text-iw-gold mx-auto mb-4" />
          <h2 className="editorial-heading text-2xl sm:text-3xl text-iw-paper mb-4">NEED EARLY ACCESS TO DOCS?</h2>
          <p className="font-iw-sans text-base text-iw-paper/70 leading-relaxed mb-8">Our full documentation portal is being finalised. Get in touch for early access or a guided walkthrough.</p>
          <a href="https://calendar.app.google/EcRkSqxwtchuF4Qf6" className="inline-flex items-center justify-center px-6 py-3 bg-iw-paper text-iw-forest font-iw-sans font-semibold text-sm rounded-full hover:bg-iw-gold-pale transition-all">Book a Demo <ArrowRight size={16} className="ml-2" /></a>
        </div>
      </section>
    </div>
  );
}
