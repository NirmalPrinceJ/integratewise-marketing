import { NextResponse, type NextRequest } from "next/server"
import crypto from "crypto"
import { getAiInsightsProfile } from "@/lib/aiInsights"
import { dbQuery } from "@/lib/db"

export const runtime = "nodejs"

function getOrCreateUserId(req: NextRequest) {
  const existing = req.cookies.get("iw_uid")?.value
  if (existing) return { userId: existing, isNew: false }
  return { userId: crypto.randomUUID(), isNew: true }
}

export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => null)) as
    | { role?: string; focus?: string; name?: string }
    | null

  const role = body?.role?.trim()
  const focus = body?.focus?.trim()
  if (!role || !focus) return NextResponse.json({ error: "Missing fields" }, { status: 400 })

  const { userId, isNew } = getOrCreateUserId(req)
  const persona = `${role} • ${focus}`
  const profile = getAiInsightsProfile(body?.name?.trim() ? body.name.trim() : `${role} ${focus}`)

  // Optional persistence: initialize default settings row.
  try {
    await dbQuery(
      `insert into user_settings (user_id, on_demand_cap_usd, on_demand_enabled, cloud_code_storage_allowed)
       values ($1, 50, false, false)
       on conflict (user_id) do nothing`,
      [userId],
    )
  } catch {
    // ignore
  }

  const res = NextResponse.json({ ok: true, userId, persona, profilePattern: profile.profilePattern })
  if (isNew) {
    res.cookies.set("iw_uid", userId, { httpOnly: true, sameSite: "lax", path: "/", maxAge: 60 * 60 * 24 * 365 })
  }

  res.cookies.set("iw_persona", persona, { httpOnly: false, sameSite: "lax", path: "/", maxAge: 60 * 60 * 24 * 365 })
  res.cookies.set("iw_profile_pattern", profile.profilePattern, {
    httpOnly: false,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  })

  return res
}

