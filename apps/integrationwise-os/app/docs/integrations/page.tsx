import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function DocsIntegrationsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">Integrations</h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Connector capabilities, modes, and operational guarantees. For the marketing overview, see{" "}
            <Link href="/integrations" className="underline">
              /integrations
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="border-border">
              <CardContent className="p-6">
                <Link href="/docs/integrations/compare-modes" className="font-semibold hover:underline">
                  Full Integration vs Render Only (enforcement + checklist)
                </Link>
                <p className="mt-2 text-sm text-muted-foreground">
                  Linkable comparison table used across Integrations/Security/Compliance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <p className="font-semibold">Integration matrix + event catalogs</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Coming next: matrices, webhook event schemas, idempotency strategy, DLQ/retry guarantees per connector.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

