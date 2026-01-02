"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { industryTemplates, type IndustryTemplate, type IndustryTemplateCategory } from "@/lib/templates/industry-templates"

const filters: { id: IndustryTemplateCategory; label: string }[] = [
  { id: "customer-success", label: "customer‑success" },
  { id: "freelance", label: "freelance" },
  { id: "startup", label: "startup" },
  { id: "operations", label: "operations" },
]

export default function TemplateForge() {
  const [activeFilter, setActiveFilter] = useState<IndustryTemplateCategory | "all">("all")
  const [selected, setSelected] = useState<IndustryTemplate | null>(null)
  const [isDeploying, setIsDeploying] = useState(false)
  const [deployMsg, setDeployMsg] = useState<string | null>(null)
  const [deployErr, setDeployErr] = useState<string | null>(null)

  const visible = useMemo(() => {
    if (activeFilter === "all") return industryTemplates
    return industryTemplates.filter((t) => t.category === activeFilter)
  }, [activeFilter])

  async function deploy(templateId: string) {
    setIsDeploying(true)
    setDeployErr(null)
    setDeployMsg(null)
    try {
      const res = await fetch("/api/templates/deploy", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ templateId }),
      })
      const json = await res.json()
      if (!res.ok) {
        const required = json?.required ? ` (required: ${json.required})` : ""
        throw new Error((json?.error || "Deploy failed") + required)
      }
      const limitInfo = json.limit ? ` (Starter limit: ${json.limit})` : ""
      setDeployMsg(`Deployed. Total deployed: ${json.deployedCount}${limitInfo}`)
    } catch (e: any) {
      setDeployErr(e?.message || "Deploy failed")
    } finally {
      setIsDeploying(false)
    }
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          <Button
            size="sm"
            variant={activeFilter === "all" ? "secondary" : "outline"}
            className={activeFilter === "all" ? "" : "bg-transparent"}
            onClick={() => setActiveFilter("all")}
          >
            All
          </Button>
          {filters.map((f) => (
            <Button
              key={f.id}
              size="sm"
              variant={activeFilter === f.id ? "secondary" : "outline"}
              className={activeFilter === f.id ? "" : "bg-transparent"}
              onClick={() => setActiveFilter(f.id)}
            >
              {f.label}
            </Button>
          ))}
        </div>

        <Button asChild variant="outline" className="bg-transparent" data-cta="template_request" data-cta-location="template_forge">
          <a href="/company/contact">Request a template</a>
        </Button>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((t) => (
          <Card key={t.id} className="card-hover">
            <CardContent className="p-6">
              <p className="text-xs font-semibold text-muted-foreground">{t.category}</p>
              <p className="mt-2 text-xl font-bold">{t.name}</p>
              <p className="mt-2 text-sm text-muted-foreground">{t.description}</p>
              <div className="mt-6 flex gap-3">
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-transparent"
                  onClick={() => setSelected(t)}
                  data-cta="template_preview"
                  data-cta-location="template_forge"
                >
                  Preview
                </Button>
                <Button
                  size="sm"
                  onClick={() => deploy(t.id)}
                  disabled={isDeploying}
                  data-cta="template_deploy"
                  data-cta-location="template_forge"
                >
                  {isDeploying ? "Deploying..." : "Deploy"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {deployMsg ? <p className="mt-6 text-sm text-muted-foreground">{deployMsg}</p> : null}
      {deployErr ? <p className="mt-6 text-sm text-destructive">{deployErr}</p> : null}

      <Sheet open={Boolean(selected)} onOpenChange={(o) => setSelected(o ? selected : null)}>
        <SheetContent side="right" className="w-full sm:max-w-xl">
          {selected ? (
            <div className="flex h-full flex-col gap-6 py-6">
              <div>
                <p className="text-xs font-semibold text-muted-foreground">{selected.category}</p>
                <h2 className="mt-2 text-2xl font-bold">{selected.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{selected.description}</p>
              </div>

              <Card>
                <CardContent className="space-y-6 p-6">
                  <div>
                    <p className="text-sm font-semibold">Pipeline stages</p>
                    <p className="mt-2 text-sm text-muted-foreground">{selected.pipelineStages.join(" → ")}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Products</p>
                    <p className="mt-2 text-sm text-muted-foreground">{selected.products.join(", ")}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Chart of accounts</p>
                    <p className="mt-2 text-sm text-muted-foreground">{selected.chartOfAccounts.join(", ")}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">KPIs</p>
                    <p className="mt-2 text-sm text-muted-foreground">{selected.kpis.join(", ")}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Automations</p>
                    <p className="mt-2 text-sm text-muted-foreground">{selected.automations.join(", ")}</p>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-auto flex flex-col gap-3">
                <Button onClick={() => deploy(selected.id)} disabled={isDeploying} data-cta="template_deploy" data-cta-location="template_preview">
                  {isDeploying ? "Deploying..." : "Deploy template"}
                </Button>
                <Button variant="outline" className="bg-transparent" onClick={() => setSelected(null)}>
                  Close
                </Button>
              </div>
            </div>
          ) : null}
        </SheetContent>
      </Sheet>
    </div>
  )
}

