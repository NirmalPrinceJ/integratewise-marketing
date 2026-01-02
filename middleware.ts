import { NextResponse, type NextRequest } from "next/server"

type Plan = "free" | "starter" | "pro" | "enterprise"

function getPlan(req: NextRequest): Plan {
  const v = req.cookies.get("iw_plan")?.value
  if (v === "starter" || v === "pro" || v === "enterprise") return v
  return "free"
}

function needsStarter(pathname: string) {
  return ["/loader", "/templates", "/pipeline", "/meetings", "/metrics"].some((p) => pathname.startsWith(p))
}

function needsEnterprise(pathname: string) {
  return pathname.startsWith("/agents")
}

function isAllowedFree(pathname: string) {
  return ["/home", "/insights", "/tasks", "/settings", "/onboarding", "/pricing"].some((p) => pathname.startsWith(p))
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Never interfere with Next internals or API routes.
  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.startsWith("/favicon")) {
    return NextResponse.next()
  }

  // Paywall gates (SSOT v2 commercialization)
  const plan = getPlan(req)
  if (!isAllowedFree(pathname)) {
    if (needsEnterprise(pathname) && plan !== "enterprise") {
      const url = req.nextUrl.clone()
      url.pathname = "/pricing"
      url.searchParams.set("required", "enterprise")
      url.searchParams.set("from", pathname)
      return NextResponse.redirect(url)
    }

    if (needsStarter(pathname) && plan === "free") {
      const url = req.nextUrl.clone()
      url.pathname = "/pricing"
      url.searchParams.set("required", "starter")
      url.searchParams.set("from", pathname)
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}

