"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import OsNavbar from "@/components/os/os-navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const roles = ["Founder", "Operator", "Product", "Engineering", "Customer Success", "Sales", "Finance"] as const
const focuses = ["Personal", "Work", "Business", "Growth/Goals", "System/Health"] as const

export default function OnboardingPage() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [role, setRole] = useState<(typeof roles)[number] | "">("")
  const [focus, setFocus] = useState<(typeof focuses)[number] | "">("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function complete() {
    setIsLoading(true)
    setError(null)
    try {
      const res = await fetch("/api/onboarding/complete", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, role, focus }),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json?.error || "Failed to complete onboarding")
      router.push("/home")
    } catch (e: any) {
      setError(e?.message || "Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen">
      <OsNavbar />
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-balance text-4xl font-bold tracking-tight">Onboarding</h1>
        <p className="mt-3 text-muted-foreground">
          Answer two questions to generate a persona + profile pattern. This powers persona-aware views and suggestions.
        </p>

        <Card className="mt-8">
          <CardContent className="space-y-6 p-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name (optional)</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g., Ananya" />
            </div>

            <div className="space-y-2">
              <Label>1) What describes your role?</Label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value as any)}
                className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
              >
                <option value="" disabled>
                  Select a role
                </option>
                {roles.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label>2) What’s your primary focus right now?</Label>
              <select
                value={focus}
                onChange={(e) => setFocus(e.target.value as any)}
                className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
              >
                <option value="" disabled>
                  Select a focus
                </option>
                {focuses.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </div>

            {error ? <p className="text-sm text-destructive">{error}</p> : null}

            <div className="flex flex-wrap gap-3">
              <Button
                onClick={complete}
                disabled={!role || !focus || isLoading}
                data-cta="complete_onboarding"
                data-cta-location="onboarding"
              >
                {isLoading ? "Creating your persona..." : "Continue"}
              </Button>
              <Button variant="outline" className="bg-transparent" onClick={() => router.push("/ai-insights")}>
                Try AI Insights first
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

