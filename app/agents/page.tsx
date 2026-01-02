import type { Metadata } from "next"
import Link from "next/link"
import OsNavbar from "@/components/os/os-navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Agents",
  description: "Enterprise agents (gated Enterprise).",
}

export default function AgentsPage() {
  return (
    <div className="min-h-screen">
      <OsNavbar />
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight">Agents</h1>
        <p className="mt-3 text-muted-foreground">
          Enterprise-grade agents with logs and governance. This route is gated (Enterprise).
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {["TaskPilot", "ChurnShield", "DataSentinel", "InboxZero", "FollowUp"].map((a) => (
            <Card key={a} className="card-hover">
              <CardContent className="p-6">
                <p className="font-semibold">{a}</p>
                <p className="mt-2 text-sm text-muted-foreground">Governed execution with audit trails.</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10">
          <Button asChild data-cta="contact_enterprise" data-cta-location="agents">
            <Link href="/company/contact">Contact Sales</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}

