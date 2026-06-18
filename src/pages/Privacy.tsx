import SectionLabel from '../components/SectionLabel';
import { useSeo } from '../hooks/useSeo';

export default function Privacy() {
  useSeo("Privacy Policy | IntegrateWise", "IntegrateWise privacy policy: how we handle your data, what we collect, GDPR compliance, and your rights. Your data stays in your systems.");

  return (
    <div>
      <section className="pt-32 pb-16 section-padding">
        <div className="max-w-4xl">
          <SectionLabel label="Legal" />
          <h1 className="editorial-heading text-4xl sm:text-5xl md:text-6xl text-iw-ink mt-6">PRIVACY POLICY.</h1>
          <p className="font-iw-sans text-base sm:text-lg text-iw-slate mt-6 leading-relaxed max-w-2xl">Last updated: June 2025</p>
        </div>
      </section>

      <section className="section-padding-y border-t border-iw-paper-deep">
        <div className="section-padding max-w-3xl space-y-10">
          <div>
            <h2 className="font-iw-display text-xl tracking-wide text-iw-ink mb-3">1. Our Approach to Privacy</h2>
            <p className="font-iw-sans text-sm text-iw-slate leading-relaxed">IntegrateWise is designed with privacy at its core. We connect to your tools — we do not replace them. Your business data stays in your systems. We only process what is necessary to provide the service and maintain the connected layer.</p>
          </div>
          <div>
            <h2 className="font-iw-display text-xl tracking-wide text-iw-ink mb-3">2. What We Collect</h2>
            <p className="font-iw-sans text-sm text-iw-slate leading-relaxed">We collect account information (name, email, company) for authentication and billing. We process metadata about your connected tools to maintain sync. We do not store the content of your business records — contacts, deals, tickets, and documents remain in their original systems.</p>
          </div>
          <div>
            <h2 className="font-iw-display text-xl tracking-wide text-iw-ink mb-3">3. How We Use Data</h2>
            <p className="font-iw-sans text-sm text-iw-slate leading-relaxed">We use your data to provide and improve the IntegrateWise service, maintain secure connections to your tools, power your Digital Twin with contextual awareness, and communicate with you about the service. We do not sell your data to third parties. We do not use your data to train generic AI models.</p>
          </div>
          <div>
            <h2 className="font-iw-display text-xl tracking-wide text-iw-ink mb-3">4. Data Retention</h2>
            <p className="font-iw-sans text-sm text-iw-slate leading-relaxed">We retain account information for as long as your account is active. Connection metadata is retained to maintain sync. Upon account deletion, we remove your data within 30 days except where required by law to retain records.</p>
          </div>
          <div>
            <h2 className="font-iw-display text-xl tracking-wide text-iw-ink mb-3">5. Your Rights (GDPR)</h2>
            <p className="font-iw-sans text-sm text-iw-slate leading-relaxed">If you are in the EU, you have the right to access, correct, or delete your personal data. You have the right to data portability and to object to processing. You have the right to lodge a complaint with a supervisory authority. Contact us at privacy@integratewise.com to exercise these rights.</p>
          </div>
          <div>
            <h2 className="font-iw-display text-xl tracking-wide text-iw-ink mb-3">6. Security</h2>
            <p className="font-iw-sans text-sm text-iw-slate leading-relaxed">We use industry-standard security measures including TLS 1.3 encryption in transit, AES-256 encryption at rest, and SOC 2 Type II certified controls. All connections to your tools use OAuth and API keys that you control and can revoke at any time.</p>
          </div>
          <div>
            <h2 className="font-iw-display text-xl tracking-wide text-iw-ink mb-3">7. Third-Party Services</h2>
            <p className="font-iw-sans text-sm text-iw-slate leading-relaxed">We integrate with third-party tools you choose to connect. Your use of those tools is governed by their respective privacy policies. We recommend reviewing those policies before connecting a tool to IntegrateWise.</p>
          </div>
          <div>
            <h2 className="font-iw-display text-xl tracking-wide text-iw-ink mb-3">8. Cookies</h2>
            <p className="font-iw-sans text-sm text-iw-slate leading-relaxed">We use essential cookies for authentication and session management. We do not use tracking cookies for advertising purposes. You can control cookie preferences through your browser settings.</p>
          </div>
          <div>
            <h2 className="font-iw-display text-xl tracking-wide text-iw-ink mb-3">9. Changes to This Policy</h2>
            <p className="font-iw-sans text-sm text-iw-slate leading-relaxed">We may update this privacy policy from time to time. We will notify you of significant changes via email or through the service. Continued use after changes constitutes acceptance.</p>
          </div>
          <div>
            <h2 className="font-iw-display text-xl tracking-wide text-iw-ink mb-3">10. Contact</h2>
            <p className="font-iw-sans text-sm text-iw-slate leading-relaxed">Questions about this privacy policy? Contact us at privacy@integratewise.com.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
