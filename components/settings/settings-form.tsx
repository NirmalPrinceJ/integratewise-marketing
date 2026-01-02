"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type Settings = {
  userId: string
  on_demand_cap_usd: number
  on_demand_enabled: boolean
  cloud_code_storage_allowed: boolean
}

export default function SettingsForm() {
  const [settings, setSettings] = useState<Settings | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const res = await fetch("/api/settings/get")
        const json = (await res.json()) as Settings
        if (!cancelled) setSettings(json)
      } catch {
        if (!cancelled) setError("Failed to load settings")
      }
    })()
    return () => {
      cancelled = true
    }
  }, [])

  async function save() {
    if (!settings) return
    setIsSaving(true)
    setError(null)
    setSaved(false)
    try {
      const res = await fetch("/api/settings/update", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          on_demand_enabled: settings.on_demand_enabled,
          on_demand_cap_usd: settings.on_demand_cap_usd,
          cloud_code_storage_allowed: settings.cloud_code_storage_allowed,
        }),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json?.error || "Save failed")
      setSaved(true)
    } catch (e: any) {
      setError(e?.message || "Save failed")
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <Card>
      <CardContent className="space-y-6 p-6">
        <div className="space-y-2">
          <p className="text-sm font-semibold">On‑demand usage</p>
          <p className="text-sm text-muted-foreground">
            Enable on‑demand usage with a hard cap of ₹ equivalent to <strong>$50</strong> (locked).
          </p>
        </div>

        <div className="flex items-start gap-3">
          <Checkbox
            checked={settings?.on_demand_enabled ?? false}
            onCheckedChange={(v) => setSettings((s) => (s ? { ...s, on_demand_enabled: Boolean(v) } : s))}
            id="on_demand_enabled"
          />
          <div className="space-y-1">
            <Label htmlFor="on_demand_enabled">Enable on‑demand usage</Label>
            <p className="text-xs text-muted-foreground">Applies a capped pay‑as‑you‑go mode.</p>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="cap">Monthly cap (USD)</Label>
          <Input
            id="cap"
            type="number"
            min={0}
            max={50}
            value={settings?.on_demand_cap_usd ?? 50}
            onChange={(e) => setSettings((s) => (s ? { ...s, on_demand_cap_usd: Number(e.target.value) } : s))}
          />
          <p className="text-xs text-muted-foreground">Max is $50 (locked).</p>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-semibold">Privacy mode</p>
          <p className="text-sm text-muted-foreground">Control whether cloud code storage is allowed.</p>
        </div>

        <div className="flex items-start gap-3">
          <Checkbox
            checked={settings?.cloud_code_storage_allowed ?? false}
            onCheckedChange={(v) => setSettings((s) => (s ? { ...s, cloud_code_storage_allowed: Boolean(v) } : s))}
            id="cloud_code_storage_allowed"
          />
          <div className="space-y-1">
            <Label htmlFor="cloud_code_storage_allowed">Allow cloud code storage</Label>
            <p className="text-xs text-muted-foreground">When disabled, store templates/config locally only.</p>
          </div>
        </div>

        {error ? <p className="text-sm text-destructive">{error}</p> : null}
        {saved ? <p className="text-sm text-secondary-foreground">Saved.</p> : null}

        <div className="flex gap-3">
          <Button onClick={save} disabled={!settings || isSaving} data-cta="save_settings" data-cta-location="settings">
            {isSaving ? "Saving..." : "Save"}
          </Button>
          <Button asChild variant="outline" className="bg-transparent">
            <a href="/pricing">Upgrade</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

