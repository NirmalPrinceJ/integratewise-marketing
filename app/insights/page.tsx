import { cookies } from "next/headers"
import type { Metadata } from "next"
import OsNavbar from "@/components/os/os-navbar"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Insights",
  description: "Working style insights and evolving suggestions powered by AI Insights.",
}

export default async function InsightsPage() {
  const c = await cookies()
  const persona = c.get("iw_persona")?.value || "Not set yet"
  const profilePattern = c.get("iw_profile_pattern")?.value || "Not set yet"

  return (
    <div className="min-h-screen">
      <OsNavbar />
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight">Insights</h1>
        <p className="mt-3 text-muted-foreground">
          Your working style profile pattern helps the OS generate persona-aware views and suggestions.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Card className="card-hover">
            <CardContent className="p-6">
              <p className="text-sm font-semibold text-muted-foreground">Persona</p>
              <p className="mt-2 text-xl font-bold">{persona}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Generated during onboarding. Update anytime by re-running onboarding.
              </p>
            </CardContent>
          </Card>
          <Card className="card-hover">
            <CardContent className="p-6">
              <p className="text-sm font-semibold text-muted-foreground">Profile Pattern</p>
              <p className="mt-2 text-xl font-bold">{profilePattern}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Derived from language pattern analysis and profile matching (not a predictive practice).
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold tracking-tight">Evolving suggestions</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Communication", desc: "Use short summaries + clear owners to reduce ambiguity." },
              { title: "Planning", desc: "Batch decisions, then convert them into tasks immediately." },
              { title: "Execution", desc: "Prefer small milestones to keep momentum visible." },
              { title: "Team formation", desc: "Pair complementary archetypes for better collaboration." },
              { title: "System hygiene", desc: "Keep a single source for tasks; sync outward." },
            ].map((s) => (
              <Card key={s.title} className="card-hover">
                <CardContent className="p-6">
                  <p className="font-semibold">{s.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

