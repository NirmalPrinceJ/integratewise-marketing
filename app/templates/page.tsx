import type { Metadata } from "next"
import Link from "next/link"
import OsNavbar from "@/components/os/os-navbar"
import { Button } from "@/components/ui/button"
import TemplateForge from "@/components/templates/template-forge"

export const metadata: Metadata = {
  title: "Templates",
  description: "Template Forge: browse, preview, and deploy industry templates (Starter limit 5, Pro unlimited).",
}

export default function TemplatesPage() {
  return (
    <div className="min-h-screen">
      <OsNavbar />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Template Forge</h1>
          <p className="text-muted-foreground">
            Browse templates, preview structure, then deploy. Starter: up to 5 templates. Pro: unlimited.
          </p>
          <div className="mt-2 flex flex-wrap gap-3">
            <Button asChild variant="outline" className="bg-transparent" data-cta="view_pricing" data-cta-location="template_forge_header">
              <Link href="/pricing?required=starter">Upgrade</Link>
            </Button>
          </div>
        </div>

        <div className="mt-8">
          <TemplateForge />
        </div>
      </main>
    </div>
  )
}
