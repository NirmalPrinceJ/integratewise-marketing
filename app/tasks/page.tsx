import type { Metadata } from "next"
import OsNavbar from "@/components/os/os-navbar"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Tasks",
  description: "Tasks view (allowed on free plan).",
}

export default function TasksPage() {
  return (
    <div className="min-h-screen">
      <OsNavbar />
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight">Tasks</h1>
        <p className="mt-3 text-muted-foreground">
          This is a minimal shell. In SSOT v2, tasks can be created automatically from insights (source:{" "}
          <code>insights</code>).
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            { title: "Example task", desc: "Create a weekly planning routine from your profile pattern." },
            { title: "Example task", desc: "Set up on-demand usage cap and privacy mode in Settings." },
          ].map((t, i) => (
            <Card key={`${t.title}-${i}`} className="card-hover">
              <CardContent className="p-6">
                <p className="font-semibold">{t.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

