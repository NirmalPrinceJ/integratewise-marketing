"use client"

import type { ReactNode } from "react"
import { useEffect } from "react"
import { usePathname } from "next/navigation"
import posthog from "posthog-js"

function initPosthog() {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST
  if (!key || !host) return

  if ((posthog as unknown as { __loaded?: boolean }).__loaded) return
  ;(posthog as unknown as { __loaded?: boolean }).__loaded = true

  posthog.init(key, {
    api_host: host,
    capture_pageview: false, // we send our own page_view on route change
    autocapture: false, // we use explicit event tagging (data attributes)
  })
}

function capturePageView(pathname: string, search: string) {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST
  if (!key || !host) return
  posthog.capture("page_view", { pathname, search })
}

function bindCtaClickCapture() {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST
  if (!key || !host) return

  const handler = (ev: MouseEvent) => {
    const target = ev.target as HTMLElement | null
    if (!target) return

    const el = target.closest("[data-cta]") as HTMLElement | null
    if (!el) return

    const cta = el.getAttribute("data-cta") || "unknown"
    const location = el.getAttribute("data-cta-location") || undefined
    const href = (el as HTMLAnchorElement).href || el.getAttribute("href") || undefined
    posthog.capture("cta_click", { cta, location, href })
  }

  document.addEventListener("click", handler, { capture: true })
  return () => document.removeEventListener("click", handler, { capture: true } as unknown as boolean)
}

export default function AnalyticsProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    initPosthog()
    const cleanup = bindCtaClickCapture()
    return cleanup
  }, [])

  useEffect(() => {
    const search = typeof window !== "undefined" ? window.location.search || "" : ""
    capturePageView(pathname || "/", search)
  }, [pathname])

  return children
}

