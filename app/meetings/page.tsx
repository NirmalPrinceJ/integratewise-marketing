import type { Metadata } from "next"
import Link from "next/link"
import OsNavbar from "@/components/os/os-navbar"
import { Button } from "@/components/ui/button"
import MeetingsMvp from "@/components/meetings/meetings-mvp"

export const metadata: Metadata = {
  title: "Meetings",
  description: "Meetings MVP: list calendar events and import via n8n webhook (Starter+).",
}

export default function MeetingsPage() {
  return (
    <div className="min-h-screen">
      <OsNavbar />
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Meetings</h1>
          <p className="text-muted-foreground">
            Import recent events via n8n webhook and keep meeting notes structured.
          </p>
          <div className="mt-2 flex flex-wrap gap-3">
            <Button asChild variant="outline" className="bg-transparent" data-cta="upgrade" data-cta-location="meetings_header">
              <Link href="/pricing?required=starter">Upgrade</Link>
            </Button>
          </div>
        </div>

        <div className="mt-8">
          <MeetingsMvp />
        </div>
      </main>
    </div>
  )
}

