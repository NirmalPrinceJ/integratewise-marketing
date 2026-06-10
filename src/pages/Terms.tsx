import SectionLabel from '../components/SectionLabel';
import { useSeo } from '../hooks/useSeo';

export default function Terms() {
  useSeo("Terms of Service | IntegrateWise", "Terms of service for using IntegrateWise. Read about account terms, acceptable use, data ownership, and liability.");

  return (
    <div>
      <section className="pt-32 pb-16 section-padding">
        <div className="max-w-4xl">
          <SectionLabel label="Legal" />
          <h1 className="editorial-heading text-4xl sm:text-5xl md:text-6xl text-iw-ink mt-6">TERMS OF SERVICE.</h1>
          <p className="font-iw-sans text-base sm:text-lg text-iw-slate mt-6 leading-relaxed max-w-2xl">Last updated: June 2025</p>
        </div>
      </section>

      <section className="section-padding-y border-t border-iw-paper-deep">
        <div className="section-padding max-w-3xl space-y-10">
          <div>
            <h2 className="font-iw-display text-xl tracking-wide text-iw-ink mb-3">1. Acceptance of Terms</h2>
            <p className="font-iw-sans text-sm text-iw-slate leading-relaxed">By accessing or using IntegrateWise, you agree to be bound by these Terms of Service. If you do not agree, you may not use our services. These terms apply to all visitors, users, and others who access or use the service.</p>
          </div>
          <div>
            <h2 className="font-iw-display text-xl tracking-wide text-iw-ink mb-3">2. Account Terms</h2>
            <p className="font-iw-sans text-sm text-iw-slate leading-relaxed">You are responsible for maintaining the security of your account and password. IntegrateWise cannot and will not be liable for any loss or damage from your failure to comply with this security obligation. You are responsible for all content posted and activity that occurs under your account.</p>
          </div>
          <div>
            <h2 className="font-iw-display text-xl tracking-wide text-iw-ink mb-3">3. Acceptable Use</h2>
            <p className="font-iw-sans text-sm text-iw-slate leading-relaxed">You agree not to use the service for any unlawful purpose or to transmit any material that violates any laws or regulations. You may not attempt to gain unauthorized access to any portion of the service or any other systems or networks connected to the service.</p>
          </div>
          <div>
            <h2 className="font-iw-display text-xl tracking-wide text-iw-ink mb-3">4. Data Ownership</h2>
            <p className="font-iw-sans text-sm text-iw-slate leading-relaxed">You retain all rights to your data. IntegrateWise claims no ownership over any data you submit to the service. We only use your data to provide and improve the service. Your data remains in your connected systems — we do not store copies of your business data.</p>
          </div>
          <div>
            <h2 className="font-iw-display text-xl tracking-wide text-iw-ink mb-3">5. Payment Terms</h2>
            <p className="font-iw-sans text-sm text-iw-slate leading-relaxed">Fees are charged in advance on a monthly or annual basis depending on your subscription. All fees are non-refundable except where required by law. We reserve the right to change our fees upon 30 days notice.</p>
          </div>
          <div>
            <h2 className="font-iw-display text-xl tracking-wide text-iw-ink mb-3">6. Termination</h2>
            <p className="font-iw-sans text-sm text-iw-slate leading-relaxed">You may terminate your account at any time. We may suspend or terminate your access to the service at our sole discretion if you violate these terms. Upon termination, your right to use the service will immediately cease.</p>
          </div>
          <div>
            <h2 className="font-iw-display text-xl tracking-wide text-iw-ink mb-3">7. Limitation of Liability</h2>
            <p className="font-iw-sans text-sm text-iw-slate leading-relaxed">IntegrateWise shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service. Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim.</p>
          </div>
          <div>
            <h2 className="font-iw-display text-xl tracking-wide text-iw-ink mb-3">8. Changes to Terms</h2>
            <p className="font-iw-sans text-sm text-iw-slate leading-relaxed">We reserve the right to modify these terms at any time. We will provide notice of significant changes via email or through the service. Your continued use of the service after changes constitutes acceptance of the new terms.</p>
          </div>
          <div>
            <h2 className="font-iw-display text-xl tracking-wide text-iw-ink mb-3">9. Governing Law</h2>
            <p className="font-iw-sans text-sm text-iw-slate leading-relaxed">These terms shall be governed by the laws of the State of Delaware, United States, without regard to its conflict of law provisions.</p>
          </div>
          <div>
            <h2 className="font-iw-display text-xl tracking-wide text-iw-ink mb-3">10. Contact</h2>
            <p className="font-iw-sans text-sm text-iw-slate leading-relaxed">Questions about these terms? Contact us at legal@integratewise.com.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
