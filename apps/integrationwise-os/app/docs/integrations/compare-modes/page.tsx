import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function CompareModesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Full Integration vs Render Only
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            This page is the canonical link target for “Render Only” guarantees. (Implementation table + enforcement
            notes ship next in `docs/integrations/compare-modes.md`.)
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="border-border">
            <CardContent className="p-6">
              <p className="font-semibold">Next deliverable</p>
              <p className="mt-2 text-sm text-muted-foreground">
                We will publish the enforcement checklist and link it from:
              </p>
              <ul className="mt-3 list-disc pl-6 text-sm text-muted-foreground">
                <li>
                  <Link href="/integrations" className="underline">
                    /integrations
                  </Link>
                </li>
                <li>
                  <Link href="/security/compliance" className="underline">
                    /security/compliance
                  </Link>
                </li>
                <li>
                  <Link href="/security" className="underline">
                    /security
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}

