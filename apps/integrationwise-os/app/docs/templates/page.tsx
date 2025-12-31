import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function TemplatesDocsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">Templates</h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Installation-ready templates ship next (variables/contracts, triggers, preconditions, rollback semantics).
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="border-border">
            <CardContent className="p-6">
              <p className="font-semibold">Featured deep-dives (up next)</p>
              <ul className="mt-3 list-disc pl-6 text-sm text-muted-foreground">
                <li>Weekly Planning OS (Notion DB + calendar logic)</li>
                <li>AI Brainstream → Action (webhook contract + dedup keys + safety rails)</li>
                <li>CS Health Pulse (requires CS Lens + explicit sources/contracts)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}

