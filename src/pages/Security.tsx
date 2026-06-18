import { ArrowRight, ShieldCheck, Lock, Eye, FileCheck, Server } from 'lucide-react';
import SectionLabel from '../components/SectionLabel';
import { useSeo } from '../hooks/useSeo';

const pillars = [
  { icon: Lock, title: 'End-to-End Encryption', desc: 'All data in transit uses TLS 1.3. Data at rest is encrypted with AES-256. Your connections are secured from end to end.' },
  { icon: Eye, title: 'Full Visibility', desc: 'See every action your Twin takes, every data source it reads, and every recommendation it makes. Complete transparency, always.' },
  { icon: FileCheck, title: 'Audit Trails', desc: 'Every decision, approval, and action is logged with context. Who, what, when, and why — all recorded and searchable.' },
  { icon: Server, title: 'Data Stays Yours', desc: 'IntegrateWise connects to your tools; it does not replace them. Your data remains in your systems under your control.' },
];

const compliances = [
  { name: 'SOC 2 Type II', status: 'Certified', desc: 'Independently audited security controls for availability, confidentiality, and processing integrity.' },
  { name: 'GDPR', status: 'Compliant', desc: 'Full compliance with EU data protection regulations. Right to erasure, data portability, and processing records.' },
  { name: 'Data Residency', status: 'Available', desc: 'Choose where your data is processed. US, EU, or custom regions for enterprise customers.' },
  { name: 'SSO', status: 'Enterprise', desc: 'SAML 2.0 and OIDC single sign-on. Integrate with your identity provider.' },
];

export default function Security() {
  useSeo("Security | IntegrateWise", "End-to-end encryption, SOC 2 Type II certified, GDPR compliant, full audit trails, and human-in-the-loop governance. Your data stays yours.");

  return (
    <div>
      <section className="pt-32 pb-16 section-padding">
        <div className="max-w-4xl">
          <SectionLabel label="Security" />
          <h1 className="editorial-heading text-4xl sm:text-5xl md:text-6xl text-iw-ink mt-6">SECURITY BUILT IN. NOT BOLTED ON.</h1>
          <p className="font-iw-sans text-base sm:text-lg text-iw-slate mt-6 leading-relaxed max-w-2xl">Encryption, audit trails, compliance certifications, and human-in-the-loop governance. Your data stays in your systems. We just connect them.</p>
        </div>
      </section>

      <section className="section-padding-y border-t border-iw-paper-deep">
        <div className="section-padding">
          <SectionLabel label="Security Pillars" />
          <h2 className="editorial-heading text-2xl sm:text-3xl text-iw-ink mt-4 mb-10">FOUR PILLARS OF PROTECTION.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-iw-rule max-w-4xl">
            {pillars.map((p, i) => (
              <div key={i} className="p-6 sm:p-8 border border-iw-rule">
                <div className="w-10 h-10 rounded-full bg-iw-forest/10 flex items-center justify-center mb-4"><p.icon size={20} className="text-iw-forest" /></div>
                <h3 className="font-iw-display text-lg tracking-wide text-iw-ink mb-2">{p.title}</h3>
                <p className="font-iw-sans text-sm text-iw-slate leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-y bg-iw-forest text-iw-paper">
        <div className="section-padding">
          <SectionLabel label="Compliance" dark />
          <h2 className="editorial-heading text-2xl sm:text-3xl text-iw-paper mt-4 mb-10">CERTIFIED. COMPLIANT. TRUSTED.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-iw-forest-mid max-w-4xl">
            {compliances.map((c, i) => (
              <div key={i} className="p-6 sm:p-8 border border-iw-forest-mid">
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck size={20} className="text-iw-gold" />
                  <span className="font-iw-mono text-xs text-iw-gold uppercase tracking-widest">{c.status}</span>
                </div>
                <h3 className="font-iw-display text-lg tracking-wide text-iw-paper mb-2">{c.name}</h3>
                <p className="font-iw-sans text-sm text-iw-paper/70 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-y">
        <div className="section-padding text-center max-w-2xl mx-auto">
          <h2 className="editorial-heading text-2xl sm:text-3xl text-iw-ink mb-4">NEED A SECURITY REVIEW?</h2>
          <p className="font-iw-sans text-base text-iw-slate leading-relaxed mb-8">We provide security questionnaires, penetration test summaries, and compliance documentation for enterprise customers.</p>
          <a href="https://calendar.app.google/EcRkSqxwtchuF4Qf6" className="inline-flex items-center justify-center px-6 py-3 bg-iw-ink text-iw-paper font-iw-sans font-semibold text-sm rounded-full hover:bg-iw-forest transition-all">Contact Security Team <ArrowRight size={16} className="ml-2" /></a>
        </div>
      </section>
    </div>
  );
}
