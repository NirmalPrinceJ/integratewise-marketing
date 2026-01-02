import { NextResponse, type NextRequest } from "next/server"
import crypto from "crypto"
import { dbQuery } from "@/lib/db"

export const runtime = "nodejs"

type Plan = "starter" | "pro" | "enterprise"

function isPlan(v: unknown): v is Plan {
  return v === "starter" || v === "pro" || v === "enterprise"
}

function computePeriodEnd(plan: Plan) {
  if (plan === "enterprise") return null
  const days = 30
  const d = new Date()
  d.setDate(d.getDate() + days)
  return d
}

export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => null)) as
    | {
        razorpay_order_id?: string
        razorpay_payment_id?: string
        razorpay_signature?: string
        plan?: Plan
      }
    | null

  if (!body?.razorpay_order_id || !body?.razorpay_payment_id || !body?.razorpay_signature || !isPlan(body.plan)) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 })
  }

  const userId = req.cookies.get("iw_uid")?.value
  if (!userId) return NextResponse.json({ error: "Missing user context" }, { status: 401 })

  const expected = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET || "")
    .update(`${body.razorpay_order_id}|${body.razorpay_payment_id}`)
    .digest("hex")

  if (!process.env.RAZORPAY_KEY_SECRET) {
    return NextResponse.json({ error: "RAZORPAY_KEY_SECRET not configured" }, { status: 500 })
  }

  if (expected !== body.razorpay_signature) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
  }

  try {
    await dbQuery(`update payment_orders set status = 'paid' where order_id = $1`, [body.razorpay_order_id])
    await dbQuery(
      `insert into subscriptions (user_id, plan, status, current_period_end, updated_at)
       values ($1, $2, 'active', $3, now())
       on conflict (user_id) do update set
         plan = excluded.plan,
         status = excluded.status,
         current_period_end = excluded.current_period_end,
         updated_at = now()`,
      [userId, body.plan, computePeriodEnd(body.plan)],
    )
  } catch (e) {
    return NextResponse.json({ error: "Persistence failed" }, { status: 500 })
  }

  const res = NextResponse.json({ ok: true, plan: body.plan })
  res.cookies.set("iw_plan", body.plan, { httpOnly: true, sameSite: "lax", path: "/", maxAge: 60 * 60 * 24 * 365 })
  return res
}

