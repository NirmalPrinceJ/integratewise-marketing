import { NextResponse, type NextRequest } from "next/server"
import { dbQuery } from "@/lib/db"

export const runtime = "nodejs"

type IncomingEvent = {
  id?: string
  title: string
  start_time: string
  end_time: string
  raw?: unknown
}

export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => null)) as
    | { userId?: string; events?: IncomingEvent[] }
    | IncomingEvent[]
    | null

  const headerUserId = req.headers.get("x-integratewise-user-id") || undefined
  const userId = (Array.isArray(body) ? headerUserId : body?.userId) || headerUserId
  const events = Array.isArray(body) ? body : body?.events

  if (!userId) return NextResponse.json({ error: "Missing userId" }, { status: 400 })
  if (!events || !Array.isArray(events) || events.length === 0) {
    return NextResponse.json({ error: "Missing events" }, { status: 400 })
  }

  try {
    for (const ev of events) {
      const title = ev.title?.trim()
      if (!title || !ev.start_time || !ev.end_time) continue
      const externalId = ev.id || null
      await dbQuery(
        `insert into calendar_events (user_id, external_id, title, start_time, end_time, raw)
         values ($1, $2, $3, $4::timestamptz, $5::timestamptz, $6::jsonb)
         on conflict (user_id, external_id) do update set
           title = excluded.title,
           start_time = excluded.start_time,
           end_time = excluded.end_time,
           raw = excluded.raw`,
        [userId, externalId, title, ev.start_time, ev.end_time, JSON.stringify(ev.raw ?? ev)],
      )
    }
  } catch {
    return NextResponse.json({ error: "DB not configured" }, { status: 500 })
  }

  return NextResponse.json({ ok: true, count: events.length })
}

