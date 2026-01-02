import { NextResponse, type NextRequest } from "next/server"
import { dbQuery } from "@/lib/db"

export const runtime = "nodejs"

export async function POST(req: NextRequest) {
  const userId = req.cookies.get("iw_uid")?.value
  if (!userId) return NextResponse.json({ error: "Missing user context" }, { status: 401 })

  const body = (await req.json().catch(() => null)) as
    | { title?: string; start_time?: string; end_time?: string }
    | null

  const title = body?.title?.trim()
  const start = body?.start_time
  const end = body?.end_time
  if (!title || !start || !end) return NextResponse.json({ error: "Missing fields" }, { status: 400 })

  try {
    await dbQuery(
      `insert into calendar_events (user_id, external_id, title, start_time, end_time, raw)
       values ($1, null, $2, $3::timestamptz, $4::timestamptz, null)`,
      [userId, title, start, end],
    )
  } catch {
    return NextResponse.json({ error: "DB not configured" }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}

