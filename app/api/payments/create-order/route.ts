import { NextResponse, type NextRequest } from "next/server"
import crypto from "crypto"
import { getRazorpayClient, getRazorpayPublicKeyId } from "@/lib/razorpay"
import { dbQuery } from "@/lib/db"

export const runtime = "nodejs"

type Plan = "starter" | "pro"

function getPlanAmountPaise(plan: Plan) {
  switch (plan) {
    case "starter":
      return 99900
    case "pro":
      return 499900
  }
}

function getOrCreateUserId(req: NextRequest) {
  const existing = req.cookies.get("iw_uid")?.value
  if (existing) return { userId: existing, isNew: false }
  return { userId: crypto.randomUUID(), isNew: true }
}

export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => null)) as { plan?: string } | null
  const plan = body?.plan
  if (plan !== "starter" && plan !== "pro") {
    return NextResponse.json({ error: "Invalid plan" }, { status: 400 })
  }

  const { userId, isNew } = getOrCreateUserId(req)
  const amount = getPlanAmountPaise(plan)

  const razorpay = getRazorpayClient()
  const receipt = `iw_${plan}_${userId}_${Date.now()}`
  const order = await razorpay.orders.create({
    amount,
    currency: "INR",
    receipt,
    notes: { plan, userId },
  })

  // Best-effort persistence (DB is required for real reconciliation, but don't fail checkout if unavailable).
  try {
    await dbQuery(
      `insert into payment_orders (user_id, plan, order_id, amount_paise, currency, status)
       values ($1, $2, $3, $4, $5, $6)
       on conflict (order_id) do nothing`,
      [userId, plan, order.id, amount, "INR", "created"],
    )
  } catch {
    // ignore
  }

  const res = NextResponse.json({
    keyId: getRazorpayPublicKeyId(),
    orderId: order.id,
    amount,
    currency: "INR",
    plan,
    userId,
  })

  if (isNew) {
    res.cookies.set("iw_uid", userId, { httpOnly: true, sameSite: "lax", path: "/", maxAge: 60 * 60 * 24 * 365 })
  }

  return res
}

