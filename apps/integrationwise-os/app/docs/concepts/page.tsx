import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function ConceptsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">Concepts</h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Architecture primitives and contracts. These pages intentionally link to implementation-ready specs in the
            repo (schemas, policies, and runbooks).
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: "Spine (canonical data model)", href: "/docs/spine" },
              { title: "Integrations (modes + matrices)", href: "/docs/integrations" },
              { title: "Webhooks (signing + idempotency)", href: "/docs/webhooks" },
              { title: "API reference", href: "/docs/api" },
            ].map((item) => (
              <Card key={item.title} className="border-border">
                <CardContent className="p-6">
                  <Link href={item.href} className="font-semibold hover:underline">
                    {item.title}
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

