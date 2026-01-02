"use client"

import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

type Plan = "starter" | "pro"

declare global {
  interface Window {
    Razorpay?: any
  }
}

function planLabel(plan: Plan) {
  return plan === "starter" ? "Starter" : "Pro"
}

function planAmountInr(plan: Plan) {
  return plan === "starter" ? 999 : 4999
}

export default function PaymentModal({
  open,
  onOpenChange,
  plan,
  ctaLocation,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  plan: Plan
  ctaLocation?: string
}) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const title = useMemo(() => `Upgrade to ${planLabel(plan)}`, [plan])

  useEffect(() => {
    if (!open) return
    setError(null)

    if (window.Razorpay) return
    const script = document.createElement("script")
    script.src = "https://checkout.razorpay.com/v1/checkout.js"
    script.async = true
    document.body.appendChild(script)
    return () => {
      // keep script for reuse
    }
  }, [open])

  async function startCheckout() {
    setIsLoading(true)
    setError(null)
    try {
      const createRes = await fetch("/api/payments/create-order", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ plan }),
      })
      const created = await createRes.json()
      if (!createRes.ok) throw new Error(created?.error || "Failed to create order")

      if (!window.Razorpay) throw new Error("Razorpay checkout script not loaded yet. Please try again.")

      const options = {
        key: created.keyId,
        amount: created.amount,
        currency: created.currency,
        name: "IntegrateWise",
        description: `${planLabel(plan)} subscription`,
        order_id: created.orderId,
        notes: { plan: created.plan, userId: created.userId, source: ctaLocation || "unknown" },
        handler: async (response: any) => {
          const verifyRes = await fetch("/api/payments/verify", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              plan,
            }),
          })
          const verified = await verifyRes.json()
          if (!verifyRes.ok) throw new Error(verified?.error || "Payment verification failed")

          onOpenChange(false)
          router.refresh()
        },
        modal: {
          ondismiss: () => {
            setIsLoading(false)
          },
        },
        theme: {
          color: "#3F51B5",
        },
      }

      const rzp = new window.Razorpay(options)
      rzp.open()
    } catch (e: any) {
      setError(e?.message || "Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-lg">
        <div className="flex h-full flex-col gap-6 py-6">
          <div>
            <p className="text-sm font-semibold text-muted-foreground">Upgrade</p>
            <h2 className="mt-2 text-2xl font-bold">{title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {planLabel(plan)} is ₹{planAmountInr(plan)}/month. Payments are processed securely by Razorpay.
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <p className="text-sm font-semibold">Includes</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {plan === "starter" ? (
                  <>
                    <li>• Unlock Loader, Templates, Pipeline, Meetings, Metrics</li>
                    <li>• Template Forge deployments (up to 5 templates)</li>
                    <li>• On‑demand usage cap settings</li>
                  </>
                ) : (
                  <>
                    <li>• Everything in Starter</li>
                    <li>• Unlimited template deployments</li>
                    <li>• Higher automation capacity</li>
                  </>
                )}
              </ul>
            </CardContent>
          </Card>

          {error ? <p className="text-sm text-destructive">{error}</p> : null}

          <div className="mt-auto flex flex-col gap-3">
            <Button
              onClick={startCheckout}
              disabled={isLoading}
              data-cta="razorpay_checkout"
              data-cta-location={ctaLocation || "pricing"}
            >
              {isLoading ? "Starting checkout..." : "Pay with Razorpay"}
            </Button>
            <Button variant="outline" className="bg-transparent" onClick={() => onOpenChange(false)}>
              Not now
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

