import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-bg-main">
      <Header />
      <main className="pt-24">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <h1 className="text-5xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              Last updated: May 4, 2026
            </p>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                <p className="text-text-secondary leading-relaxed">
                  IntegrateWise, Inc. ("we", "us", "our", or "Company") operates the IntegrateWise platform. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Information Collection and Use</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  We collect several different types of information for various purposes to provide and improve our Service to you.
                </p>
                <h3 className="text-xl font-semibold mb-3">Types of Data Collected:</h3>
                <ul className="list-disc list-inside space-y-2 text-text-secondary">
                  <li>Personal identification information (name, email address, phone number, etc.)</li>
                  <li>Usage data and analytics</li>
                  <li>Device information (browser, IP address, device type)</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Data you voluntarily provide through forms and submissions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Use of Data</h2>
                <p className="text-text-secondary leading-relaxed">
                  IntegrateWise uses the collected data for various purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-secondary mt-4">
                  <li>To provide and maintain our Service</li>
                  <li>To notify you about changes to our Service</li>
                  <li>To allow you to participate in interactive features of our Service</li>
                  <li>To gather analysis or valuable information so we can improve our Service</li>
                  <li>To monitor the usage of our Service</li>
                  <li>To detect, prevent and address technical issues</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Security of Data</h2>
                <p className="text-text-secondary leading-relaxed">
                  The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Contact Us</h2>
                <p className="text-text-secondary leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="mt-4 p-6 bg-bg-secondary/30 rounded-lg">
                  <p className="text-text-primary font-semibold">IntegrateWise, Inc.</p>
                  <p className="text-text-secondary">privacy@integratewise.com</p>
                  <p className="text-text-secondary">San Francisco, CA</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
