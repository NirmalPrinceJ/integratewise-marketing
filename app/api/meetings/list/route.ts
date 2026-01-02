import { NextResponse, type NextRequest } from "next/server"
import { dbQuery } from "@/lib/db"

export const runtime = "nodejs"

export async function GET(req: NextRequest) {
  const userId = req.cookies.get("iw_uid")?.value
  if (!userId) return NextResponse.json({ events: [] })

  try {
    const result = await dbQuery<{
      external_id: string | null
      title: string
      start_time: string
      end_time: string
    }>(
      `select external_id, title, start_time::text, end_time::text
       from calendar_events
       where user_id = $1
       order by start_time desc
       limit 50`,
      [userId],
    )
    return NextResponse.json({ events: result.rows })
  } catch {
    return NextResponse.json({ events: [], error: "DB not configured" }, { status: 200 })
  }
}

