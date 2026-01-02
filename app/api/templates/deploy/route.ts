import { NextResponse, type NextRequest } from "next/server"
import crypto from "crypto"
import { dbQuery } from "@/lib/db"
import { industryTemplates } from "@/lib/templates/industry-templates"

export const runtime = "nodejs"

type Plan = "free" | "starter" | "pro" | "enterprise"

function getPlan(req: NextRequest): Plan {
  const v = req.cookies.get("iw_plan")?.value
  if (v === "starter" || v === "pro" || v === "enterprise") return v
  return "free"
}

function getOrCreateUserId(req: NextRequest) {
  const existing = req.cookies.get("iw_uid")?.value
  if (existing) return { userId: existing, isNew: false }
  return { userId: crypto.randomUUID(), isNew: true }
}

export async function POST(req: NextRequest) {
  const plan = getPlan(req)
  if (plan === "free") {
    return NextResponse.json({ error: "Upgrade required", required: "starter" }, { status: 402 })
  }

  const body = (await req.json().catch(() => null)) as { templateId?: string } | null
  const templateId = body?.templateId
  if (!templateId) return NextResponse.json({ error: "Missing templateId" }, { status: 400 })

  const template = industryTemplates.find((t) => t.id === templateId)
  if (!template) return NextResponse.json({ error: "Unknown template" }, { status: 404 })

  const { userId, isNew } = getOrCreateUserId(req)

  try {
    const existing = await dbQuery<{ count: string }>(
      `select count(*)::text as count from deployed_templates where user_id = $1`,
      [userId],
    )
    const count = Number(existing.rows[0]?.count || 0)
    const limit = plan === "starter" ? 5 : null
    if (limit !== null && count >= limit) {
      return NextResponse.json({ error: "Starter template limit reached", limit }, { status: 402 })
    }

    // Idempotent deploy: insert once.
    await dbQuery(
      `insert into deployed_templates (user_id, template_id)
       values ($1, $2)
       on conflict (user_id, template_id) do nothing`,
      [userId, templateId],
    )

    const after = await dbQuery<{ count: string }>(
      `select count(*)::text as count from deployed_templates where user_id = $1`,
      [userId],
    )
    const deployedCount = Number(after.rows[0]?.count || 0)

    const res = NextResponse.json({ ok: true, templateId, deployedCount, limit })
    if (isNew) {
      res.cookies.set("iw_uid", userId, { httpOnly: true, sameSite: "lax", path: "/", maxAge: 60 * 60 * 24 * 365 })
    }
    return res
  } catch {
    return NextResponse.json({ error: "DB not configured" }, { status: 500 })
  }
}

