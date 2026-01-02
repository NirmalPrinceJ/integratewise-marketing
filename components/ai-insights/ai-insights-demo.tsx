"use client"

import { useMemo, useState } from "react"
import posthog from "posthog-js"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { getAiInsightsProfile } from "@/lib/aiInsights"

type Props = {
  variant?: "light" | "dark"
  ctaLocation?: string
}

export default function AiInsightsDemo({ variant = "light", ctaLocation }: Props) {
  const [name, setName] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [revealedName, setRevealedName] = useState<string | null>(null)

  const profile = useMemo(() => {
    if (!revealedName) return null
    return getAiInsightsProfile(revealedName)
  }, [revealedName])

  const containerClass =
    variant === "dark"
      ? "border-border/60 bg-background/10 text-foreground backdrop-blur"
      : "border-border bg-card text-card-foreground"

  async function reveal() {
    const trimmed = name.trim()
    if (!trimmed) return

    posthog.capture("ai_insights_start", { source: ctaLocation || "unknown" })
    setIsLoading(true)
    setRevealedName(null)

    // Short, intentional delay to simulate analysis.
    await new Promise((r) => setTimeout(r, 900))

    setRevealedName(trimmed)
    setIsLoading(false)
    posthog.capture("ai_insights_complete", { source: ctaLocation || "unknown" })
  }

  return (
    <Card className={containerClass}>
      <CardContent className="p-6 sm:p-8">
        <p className="text-sm font-semibold">AI Insights Demo</p>
        <p className={variant === "dark" ? "mt-1 text-sm text-white/70" : "mt-1 text-sm text-muted-foreground"}>
          Enter a name and reveal a working style profile pattern.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className={variant === "dark" ? "bg-background/20" : undefined}
          />
          <Button
            onClick={reveal}
            disabled={!name.trim() || isLoading}
            data-cta="ai_insights_reveal"
            data-cta-location={ctaLocation || "unknown"}
          >
            {isLoading ? "Revealing..." : "Reveal My Profile"}
          </Button>
        </div>

        <div className="mt-6">
          {profile ? (
            <div className={variant === "dark" ? "rounded-lg border border-white/10 bg-black/20 p-5" : "rounded-lg border border-border bg-muted/30 p-5"}>
              <p className="text-sm font-semibold">Result</p>
              <p className="mt-2 text-lg font-bold">{profile.profilePattern}</p>
              <ul className={variant === "dark" ? "mt-4 space-y-2 text-sm text-white/80" : "mt-4 space-y-2 text-sm text-muted-foreground"}>
                {profile.highlights.map((h) => (
                  <li key={h}>• {h}</li>
                ))}
              </ul>
              <p className={variant === "dark" ? "mt-4 text-xs text-white/60" : "mt-4 text-xs text-muted-foreground"}>
                Note: AI Insights uses language pattern analysis and profile matching—this is not a predictive practice.
              </p>
            </div>
          ) : (
            <div className={variant === "dark" ? "rounded-lg border border-white/10 bg-black/10 p-5 text-sm text-white/60" : "rounded-lg border border-border bg-muted/20 p-5 text-sm text-muted-foreground"}>
              {isLoading ? "Analyzing language patterns..." : "Your result will appear here."}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

