import { NextResponse, type NextRequest } from "next/server"
import crypto from "crypto"
import { dbQuery } from "@/lib/db"

export const runtime = "nodejs"

function getOrCreateUserId(req: NextRequest) {
  const existing = req.cookies.get("iw_uid")?.value
  if (existing) return { userId: existing, isNew: false }
  return { userId: crypto.randomUUID(), isNew: true }
}

export async function GET(req: NextRequest) {
  const { userId, isNew } = getOrCreateUserId(req)

  let settings = {
    userId,
    on_demand_cap_usd: 50,
    on_demand_enabled: false,
    cloud_code_storage_allowed: false,
  }

  try {
    const result = await dbQuery<{
      on_demand_cap_usd: number
      on_demand_enabled: boolean
      cloud_code_storage_allowed: boolean
    }>(
      `select on_demand_cap_usd, on_demand_enabled, cloud_code_storage_allowed
       from user_settings where user_id = $1`,
      [userId],
    )
    if (result.rows[0]) settings = { userId, ...result.rows[0] }
    else {
      await dbQuery(
        `insert into user_settings (user_id, on_demand_cap_usd, on_demand_enabled, cloud_code_storage_allowed)
         values ($1, 50, false, false)
         on conflict (user_id) do nothing`,
        [userId],
      )
    }
  } catch {
    // DB not configured: return defaults.
  }

  const res = NextResponse.json(settings)
  if (isNew) {
    res.cookies.set("iw_uid", userId, { httpOnly: true, sameSite: "lax", path: "/", maxAge: 60 * 60 * 24 * 365 })
  }
  return res
}

