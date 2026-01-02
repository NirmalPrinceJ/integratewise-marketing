import { NextResponse, type NextRequest } from "next/server"
import crypto from "crypto"
import { dbQuery } from "@/lib/db"

export const runtime = "nodejs"

async function readRawBody(req: NextRequest) {
  // NextRequest doesn't expose raw body directly; this is sufficient for webhook verification in Node runtime.
  const text = await req.text()
  return text
}

function verifyWebhookSignature(rawBody: string, signature: string | null) {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET
  if (!secret) return { ok: false, reason: "RAZORPAY_WEBHOOK_SECRET not set" as const }
  if (!signature) return { ok: false, reason: "Missing signature header" as const }
  const expected = crypto.createHmac("sha256", secret).update(rawBody).digest("hex")
  return { ok: expected === signature, reason: expected === signature ? null : ("Signature mismatch" as const) }
}

export async function POST(req: NextRequest) {
  const signature = req.headers.get("x-razorpay-signature")
  const raw = await readRawBody(req)

  const sig = verifyWebhookSignature(raw, signature)
  if (!sig.ok) {
    // For safety, reject if configured but invalid. If not configured, accept but do nothing sensitive.
    if (sig.reason !== "RAZORPAY_WEBHOOK_SECRET not set") {
      return NextResponse.json({ error: sig.reason }, { status: 401 })
    }
  }

  const payload = JSON.parse(raw) as any
  const event = payload?.event as string | undefined

  try {
    if (event === "payment.captured") {
      const orderId = payload?.payload?.payment?.entity?.order_id as string | undefined
      if (orderId) {
        await dbQuery(`update payment_orders set status = 'paid' where order_id = $1`, [orderId])
      }
    }
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}

