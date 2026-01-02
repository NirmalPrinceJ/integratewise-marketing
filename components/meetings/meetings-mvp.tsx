"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type EventRow = {
  external_id: string | null
  title: string
  start_time: string
  end_time: string
}

export default function MeetingsMvp() {
  const [events, setEvents] = useState<EventRow[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  const [title, setTitle] = useState("")
  const [start, setStart] = useState("")
  const [end, setEnd] = useState("")
  const [creating, setCreating] = useState(false)

  async function load() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch("/api/meetings/list")
      const json = await res.json()
      setEvents(json.events || [])
      if (json.error) setError(json.error)
    } catch {
      setError("Failed to load meetings")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [])

  async function createEvent() {
    setCreating(true)
    setError(null)
    try {
      const res = await fetch("/api/meetings/create", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ title, start_time: start, end_time: end }),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json?.error || "Create failed")
      setTitle("")
      setStart("")
      setEnd("")
      await load()
    } catch (e: any) {
      setError(e?.message || "Create failed")
    } finally {
      setCreating(false)
    }
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardContent className="p-6">
          <p className="text-sm font-semibold">Import (n8n webhook)</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Send calendar events to <code>/api/webhooks/n8n/calendar-events</code>. Include header{" "}
            <code>x-integratewise-user-id</code> or a <code>userId</code> field in the JSON body.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-4 p-6">
          <p className="text-sm font-semibold">Create event</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Weekly sync" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="start">Start (ISO)</Label>
              <Input
                id="start"
                value={start}
                onChange={(e) => setStart(e.target.value)}
                placeholder="2026-01-02T10:00:00+05:30"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="end">End (ISO)</Label>
              <Input
                id="end"
                value={end}
                onChange={(e) => setEnd(e.target.value)}
                placeholder="2026-01-02T10:30:00+05:30"
              />
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              onClick={createEvent}
              disabled={creating || !title.trim() || !start.trim() || !end.trim()}
              data-cta="create_meeting"
              data-cta-location="meetings"
            >
              {creating ? "Creating..." : "Create"}
            </Button>
            <Button variant="outline" className="bg-transparent" onClick={load} disabled={loading}>
              Refresh
            </Button>
          </div>

          {error ? <p className="text-sm text-destructive">{error}</p> : null}
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-semibold">Meetings</p>
            <p className="text-xs text-muted-foreground">{loading ? "Loading..." : `${events.length} events`}</p>
          </div>
          <div className="mt-4 space-y-3">
            {events.length === 0 && !loading ? (
              <p className="text-sm text-muted-foreground">No events yet.</p>
            ) : (
              events.map((ev, idx) => (
                <div key={`${ev.external_id || "manual"}-${idx}`} className="rounded-lg border border-border bg-muted/10 p-4">
                  <p className="font-medium">{ev.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {ev.start_time} → {ev.end_time}
                  </p>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

