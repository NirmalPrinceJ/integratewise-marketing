import type { Metadata } from "next"
import Link from "next/link"
import OsNavbar from "@/components/os/os-navbar"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Metrics",
  description: "Metrics (gated Starter+).",
}

export default function MetricsPage() {
  return (
    <div className="min-h-screen">
      <OsNavbar />
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight">Metrics</h1>
        <p className="mt-3 text-muted-foreground">
          A gated view for health metrics and system signals.
        </p>
        <div className="mt-8">
          <Button asChild data-cta="upgrade_metrics" data-cta-location="metrics">
            <Link href="/pricing?required=starter">Upgrade</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}

