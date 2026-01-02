import { NextResponse, type NextRequest } from "next/server"
import { dbQuery } from "@/lib/db"

export const runtime = "nodejs"

export async function POST(req: NextRequest) {
  const userId = req.cookies.get("iw_uid")?.value
  if (!userId) return NextResponse.json({ error: "Missing user context" }, { status: 401 })

  const body = (await req.json().catch(() => null)) as
    | {
        on_demand_enabled?: boolean
        on_demand_cap_usd?: number
        cloud_code_storage_allowed?: boolean
      }
    | null

  const on_demand_enabled = Boolean(body?.on_demand_enabled)
  const on_demand_cap_usd =
    typeof body?.on_demand_cap_usd === "number" && Number.isFinite(body.on_demand_cap_usd)
      ? Math.max(0, Math.min(50, Math.floor(body.on_demand_cap_usd)))
      : 50
  const cloud_code_storage_allowed = Boolean(body?.cloud_code_storage_allowed)

  try {
    await dbQuery(
      `insert into user_settings (user_id, on_demand_cap_usd, on_demand_enabled, cloud_code_storage_allowed, updated_at)
       values ($1, $2, $3, $4, now())
       on conflict (user_id) do update set
         on_demand_cap_usd = excluded.on_demand_cap_usd,
         on_demand_enabled = excluded.on_demand_enabled,
         cloud_code_storage_allowed = excluded.cloud_code_storage_allowed,
         updated_at = now()`,
      [userId, on_demand_cap_usd, on_demand_enabled, cloud_code_storage_allowed],
    )
  } catch {
    return NextResponse.json({ error: "DB not configured" }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}

