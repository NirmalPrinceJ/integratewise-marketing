import Link from "next/link"
import { ArrowLeft, Check, Lock, RefreshCw, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function CompareModesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="border-b border-border py-12 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/docs/integrations">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <h1 className="text-3xl font-bold tracking-tight">Full Integration vs Render Only</h1>
          </div>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
            Choose the right mode for your security and compliance posture.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Feature</TableHead>
                  <TableHead className="w-[200px]">Full Integration</TableHead>
                  <TableHead className="w-[200px]">Render Only</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { feature: "Write Access", full: "Read & Write", render: "Read Only" },
                  { feature: "Approvals", full: "Optional", render: "N/A" },
                  { feature: "RBAC Scope", full: "Editor / Contributor", render: "Viewer Only" },
                  { feature: "Audit Trails", full: "Full (Read+Write)", render: "Access Log Only" },
                  { feature: "Failure Rollback", full: "Automated", render: "N/A" },
                  { feature: "Data Residency", full: "Hosted / Hybrid", render: "Ephemeral / Client-Side" },
                  { feature: "Caching", full: "Persistent (Spine)", render: "Short-lived (TTL 5m)" },
                  { feature: "SLA Coverage", full: "99.9%", render: "99.95%" },
                  { feature: "Connector Caps", full: "All Enabled", render: "Write APIs Blocked" },
                ].map((row) => (
                  <TableRow key={row.feature}>
                    <TableCell className="font-medium">{row.feature}</TableCell>
                    <TableCell className="flex items-center gap-2">
                        {row.full.includes("Read") || row.full.includes("All") || row.full.includes("99") ? <Check className="h-4 w-4 text-green-600" /> : null}
                        {row.full}
                    </TableCell>
                    <TableCell>
                        <div className="flex items-center gap-2">
                            {row.render.includes("Read Only") || row.render.includes("Viewer") ? <Lock className="h-4 w-4 text-blue-600" /> : null}
                            {row.render.includes("N/A") || row.render.includes("Blocked") ? <X className="h-4 w-4 text-muted-foreground" /> : null}
                            {row.render}
                        </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold">Enforcement Controls</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "API Deny List", desc: "All non-GET requests are blocked at the Hub proxy level." },
                { title: "Policy Engine", desc: "Requests are validated against No-Side-Effects policy." },
                { title: "Audit Validation", desc: "Background jobs verify no state changes occurred." },
                { title: "Ephemeral Storage", desc: "Data is cached in Redis, never persisted to Postgres." },
                { title: "Compliance Export", desc: "Monthly reports proving read-only adherence." },
              ].map((item) => (
                <div key={item.title} className="rounded-lg border p-6">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
