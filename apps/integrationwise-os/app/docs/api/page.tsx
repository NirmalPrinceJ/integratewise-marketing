import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function ApiDocsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">API Reference</h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Implementation-ready HTTP contracts ship next (query grammar, error model, agent invocation contracts).
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="border-border">
            <CardContent className="p-6">
              <p className="font-semibold">Planned content</p>
              <ul className="mt-3 list-disc pl-6 text-sm text-muted-foreground">
                <li>Pagination/query grammar: limit, cursor, order, filter[field][op]</li>
                <li>Error model: {"{code, message, details, request_id}"}</li>
                <li>Agent invocation: input/context/timeout/retries/DLQ</li>
                <li>Spine traversal examples (joins/relationships)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}

