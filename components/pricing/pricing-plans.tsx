"use client"

import { useMemo, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import PaymentModal from "@/components/payment-modal"

type RequiredPlan = "starter" | "pro" | "enterprise" | null

function parseRequired(v: string | null): RequiredPlan {
  if (v === "starter" || v === "pro" || v === "enterprise") return v
  return null
}

export default function PricingPlans() {
  const params = useSearchParams()
  const required = useMemo(() => parseRequired(params?.get("required") ?? null), [params])

  const [openPlan, setOpenPlan] = useState<"starter" | "pro" | null>(null)

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {required ? (
        <div className="mb-8 rounded-xl border border-border bg-muted/30 p-4">
          <p className="text-sm">
            <span className="font-semibold">Upgrade required:</span> This route needs{" "}
            <span className="font-semibold">{required}</span> access.
          </p>
        </div>
      ) : null}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            plan: "Free" as const,
            price: "₹0",
            desc: "Start with AI Insights and a basic shell.",
            features: ["AI Insights", "1 connection", "5-page shell"],
            cta: (
              <Button asChild data-cta="start_free" data-cta-location="pricing_free">
                <a href="/ai-insights">Try AI Insights Free</a>
              </Button>
            ),
          },
          {
            plan: "Starter" as const,
            price: "₹999/mo",
            desc: "Unlock Loader + Templates for individuals and small teams.",
            features: ["Gated routes unlocked", "Template deploy limit: 5", "On-demand usage cap settings"],
            cta: (
              <Button onClick={() => setOpenPlan("starter")} data-cta="buy_starter" data-cta-location="pricing_starter">
                Upgrade Starter
              </Button>
            ),
            highlight: true,
          },
          {
            plan: "Pro" as const,
            price: "₹4,999/mo",
            desc: "Unlimited templates and deeper automation capacity.",
            features: ["Everything in Starter", "Unlimited template deploys", "Priority workflow support"],
            cta: (
              <Button onClick={() => setOpenPlan("pro")} data-cta="buy_pro" data-cta-location="pricing_pro">
                Upgrade Pro
              </Button>
            ),
          },
          {
            plan: "Enterprise" as const,
            price: "Custom",
            desc: "Agents + governance for larger organizations.",
            features: ["Agents access", "Governance + audit", "Custom policies"],
            cta: (
              <Button
                variant="outline"
                className="bg-transparent"
                asChild
                data-cta="contact_sales"
                data-cta-location="pricing_enterprise"
              >
                <a href="/company/contact">Contact Sales</a>
              </Button>
            ),
          },
        ].map((p) => (
          <Card key={p.plan} className={p.highlight ? "card-hover border-2 border-primary" : "card-hover"}>
            <CardContent className="p-6">
              <p className="text-sm font-semibold">{p.plan}</p>
              <p className="mt-2 text-3xl font-bold">{p.price}</p>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                {p.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <div className="mt-6">{p.cta}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <PaymentModal
        open={openPlan === "starter"}
        onOpenChange={(o) => setOpenPlan(o ? "starter" : null)}
        plan="starter"
        ctaLocation="pricing"
      />
      <PaymentModal
        open={openPlan === "pro"}
        onOpenChange={(o) => setOpenPlan(o ? "pro" : null)}
        plan="pro"
        ctaLocation="pricing"
      />
    </div>
  )
}

