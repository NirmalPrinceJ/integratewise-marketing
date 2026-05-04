import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-bg-main">
      <Header />
      <main className="pt-24">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <h1 className="text-5xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              Last updated: May 4, 2026
            </p>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-text-secondary leading-relaxed">
                  By accessing and using IntegrateWise, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Permission is granted to temporarily download one copy of the materials (information or software) on IntegrateWise for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-secondary">
                  <li>Modifying or copying the materials</li>
                  <li>Using the materials for any commercial purpose or for any public display</li>
                  <li>Attempting to decompile, disassemble, or reverse engineer any software contained on IntegrateWise</li>
                  <li>Removing any copyright or other proprietary notations from the materials</li>
                  <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
                <p className="text-text-secondary leading-relaxed">
                  The materials on IntegrateWise are provided on an 'as is' basis. IntegrateWise makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Limitations of Liability</h2>
                <p className="text-text-secondary leading-relaxed">
                  In no event shall IntegrateWise or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on IntegrateWise.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Accuracy of Materials</h2>
                <p className="text-text-secondary leading-relaxed">
                  The materials appearing on IntegrateWise could include technical, typographical, or photographic errors. IntegrateWise does not warrant that any of the materials on its website are accurate, complete, or current.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
                <p className="text-text-secondary leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4 p-6 bg-bg-secondary/30 rounded-lg">
                  <p className="text-text-primary font-semibold">IntegrateWise, Inc.</p>
                  <p className="text-text-secondary">legal@integratewise.com</p>
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
