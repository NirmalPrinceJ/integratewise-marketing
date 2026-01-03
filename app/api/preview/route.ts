// Preview mode for CMS drafts - SSOT v3.2
import { draftMode } from "next/headers"
import { redirect } from "next/navigation"
import type { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const secret = searchParams.get("secret")
  const slug = searchParams.get("slug")
  const type = searchParams.get("type") || "page"

  // Validate secret
  if (secret !== process.env.SANITY_PREVIEW_SECRET) {
    return new Response("Invalid token", { status: 401 })
  }

  if (!slug) {
    return new Response("Missing slug parameter", { status: 400 })
  }

  // Enable draft mode
  const draft = await draftMode()
  draft.enable()

  // Redirect to the preview path
  let redirectPath = "/"
  switch (type) {
    case "article":
    case "blog":
      redirectPath = `/blog/${slug}`
      break
    case "case-study":
      redirectPath = `/case-studies/${slug}`
      break
    case "page":
    default:
      redirectPath = `/${slug}`
  }

  redirect(redirectPath)
}
