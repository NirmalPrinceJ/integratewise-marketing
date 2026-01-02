import type { Metadata } from "next"
import Link from "next/link"
import OsNavbar from "@/components/os/os-navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Home",
  description: "Persona-aware home with adaptive views for Personal, Work, Business, Growth, and System/Health.",
}

export default function HomeOsPage() {
  return (
    <div className="min-h-screen">
      <OsNavbar />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Home</h1>
          <p className="text-muted-foreground">
            Five persona-aware views. Insights can auto-create tasks (source: <code>insights</code>).
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { title: "Personal", desc: "Personal tasks, routines, and notes." },
            { title: "Work", desc: "Execution view for your day-to-day work." },
            { title: "Business", desc: "Pipeline, accounts, and operational systems." },
            { title: "Growth/Goals", desc: "Objectives, milestones, and progress." },
            { title: "System/Health", desc: "Health signals, habits, and system hygiene." },
          ].map((v) => (
            <Card key={v.title} className="card-hover">
              <CardContent className="p-6">
                <p className="font-semibold">{v.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild data-cta="go_insights" data-cta-location="os_home">
            <Link href="/insights">View Insights</Link>
          </Button>
          <Button asChild variant="outline" className="bg-transparent" data-cta="go_onboarding" data-cta-location="os_home">
            <Link href="/onboarding">Re-run Onboarding</Link>
          </Button>
          <Button asChild variant="outline" className="bg-transparent" data-cta="go_templates" data-cta-location="os_home">
            <Link href="/templates">Open Template Forge</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}

