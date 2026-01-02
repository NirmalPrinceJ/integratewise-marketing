import type { Metadata } from "next"
import Link from "next/link"
import OsNavbar from "@/components/os/os-navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Loader",
  description: "AI Loader (gated Starter+).",
}

export default function LoaderPage() {
  return (
    <div className="min-h-screen">
      <OsNavbar />
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight">AI Loader</h1>
        <p className="mt-3 text-muted-foreground">
          BYOT templates → normalize into Spine → push to destinations. This route is gated (Starter+).
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Card className="card-hover">
            <CardContent className="p-6">
              <p className="font-semibold">History</p>
              <p className="mt-2 text-sm text-muted-foreground">Ingestion history will appear here.</p>
            </CardContent>
          </Card>
          <Card className="card-hover">
            <CardContent className="p-6">
              <p className="font-semibold">Templates registry</p>
              <p className="mt-2 text-sm text-muted-foreground">Browse BYOT templates and run normalize/push jobs.</p>
              <div className="mt-4">
                <Button asChild data-cta="upgrade_loader" data-cta-location="loader">
                  <Link href="/pricing?required=starter">Upgrade</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

