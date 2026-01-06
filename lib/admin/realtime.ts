"use client"

import { useEffect, useState, useCallback } from "react"

export interface ContentUpdate {
  type: "blog" | "changelog" | "docs" | "case-study"
  action: "created" | "updated" | "deleted"
  id: string
  timestamp: number
}

// Real-time sync using polling or webhooks
export function useRealtimeContent<T>(
  fetchFn: () => Promise<T[]>,
  interval = 30000, // 30 seconds
) {
  const [data, setData] = useState<T[]>([])
  const [loading, setLoading] = useState(true)
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date())

  const refresh = useCallback(async () => {
    try {
      const newData = await fetchFn()
      setData(newData)
      setLastUpdate(new Date())
    } catch (error) {
      console.error("[v0] Realtime sync error:", error)
    } finally {
      setLoading(false)
    }
  }, [fetchFn])

  useEffect(() => {
    refresh()

    // Poll for updates
    const intervalId = setInterval(refresh, interval)

    return () => clearInterval(intervalId)
  }, [refresh, interval])

  return { data, loading, lastUpdate, refresh }
}

// Webhook receiver for CMS updates (Notion/Sanity)
export async function registerWebhook(provider: "notion" | "sanity", url: string) {
  // Register webhook with CMS provider to receive real-time updates
  console.log(`[v0] Registering webhook for ${provider} at ${url}`)

  // Implementation would connect to provider's webhook API
  return { success: true, webhookId: "webhook_123" }
}
