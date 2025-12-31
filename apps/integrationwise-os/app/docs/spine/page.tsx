import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function SpineDocsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">Spine</h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Canonical entities and constraints used by Hub policies, Agents, and Render.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="border-border">
            <CardContent className="p-6">
              <p className="font-semibold">Repo-backed specifications</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Canonical schemas live under <code>packages/types/src/spine</code> and are exported to JSON/YAML under{" "}
                <code>docs/spine/schemas</code>.
              </p>
              <div className="mt-4 text-sm text-muted-foreground">
                Run locally: <code>pnpm schemas:validate</code>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}

