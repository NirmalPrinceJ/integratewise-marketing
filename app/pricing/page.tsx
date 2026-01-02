import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PricingPlans from "@/components/pricing/pricing-plans"
import type { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Pricing",
  description: "Free, Starter, Pro, and Enterprise plans for IntegrateWise Universal AI OS.",
}

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="border-b border-border bg-gradient-to-b from-background to-muted/20 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">Pricing</h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Start with AI Insights. Upgrade to unlock Loader, Template Forge, and more persona-aware views.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">INR billing. Secure checkout via Razorpay.</p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <Suspense
          fallback={
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="rounded-xl border border-border bg-muted/20 p-6">
                <p className="text-sm text-muted-foreground">Loading pricing…</p>
              </div>
            </div>
          }
        >
          <PricingPlans />
        </Suspense>
      </section>

      <section className="border-t border-border bg-muted/20 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">FAQ</h2>
          </div>
          <div className="mx-auto mt-10 max-w-3xl space-y-6">
            {[
              { q: "Do you replace my tools?", a: "No. IntegrateWise connects them through the Spine." },
              { q: "Is BYOM supported?", a: "Yes. You can bring your own model when you’re ready." },
              { q: "Can I start Render‑Only?", a: "Yes. Render‑Only focuses on output generation without tool writes." },
              { q: "What does Starter unlock?", a: "Loader, Templates, Pipeline, Meetings, and Metrics routes." },
            ].map((faq) => (
              <div key={faq.q} className="rounded-xl border border-border bg-card p-6">
                <p className="font-semibold">{faq.q}</p>
                <p className="mt-2 text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
