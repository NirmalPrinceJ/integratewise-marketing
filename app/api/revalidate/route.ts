// ISR Revalidation webhook - SSOT v3.2
import { revalidatePath, revalidateTag } from "next/cache"
import { type NextRequest, NextResponse } from "next/server"
import { CACHE_TAGS, STATIC_ROUTES } from "@/lib/cms/data-loaders"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const secret = request.headers.get("x-revalidate-secret")

    // Validate webhook secret
    if (secret !== process.env.SANITY_PREVIEW_SECRET) {
      return NextResponse.json({ error: "Invalid secret" }, { status: 401 })
    }

    const { type, slug, paths, tags } = body

    // Revalidate by tags
    if (tags && Array.isArray(tags)) {
      for (const tag of tags) {
        if (Object.values(CACHE_TAGS).includes(tag)) {
          revalidateTag(tag)
        }
      }
    }

    // Revalidate specific paths
    if (paths && Array.isArray(paths)) {
      for (const path of paths) {
        revalidatePath(path)
      }
    }

    // Revalidate by content type
    if (type) {
      switch (type) {
        case "article":
          revalidateTag(CACHE_TAGS.articles)
          revalidatePath("/blog")
          if (slug) revalidatePath(`/blog/${slug}`)
          break
        case "case-study":
          revalidateTag(CACHE_TAGS.caseStudies)
          revalidatePath("/case-studies")
          if (slug) revalidatePath(`/case-studies/${slug}`)
          break
        case "changelog":
          revalidateTag(CACHE_TAGS.changelog)
          revalidatePath("/resources/changelog")
          break
        case "page":
          revalidateTag(CACHE_TAGS.pages)
          if (slug) revalidatePath(`/${slug}`)
          break
        case "media":
          revalidateTag(CACHE_TAGS.media)
          break
        default:
          // Revalidate all static routes
          for (const route of STATIC_ROUTES) {
            revalidatePath(route)
          }
      }
    }

    return NextResponse.json({
      revalidated: true,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("[Revalidate] Error:", error)
    return NextResponse.json({ error: "Revalidation failed" }, { status: 500 })
  }
}

// GET handler for manual revalidation (protected)
export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret")
  const path = request.nextUrl.searchParams.get("path")
  const tag = request.nextUrl.searchParams.get("tag")

  if (secret !== process.env.SANITY_PREVIEW_SECRET) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 })
  }

  if (tag && Object.values(CACHE_TAGS).includes(tag as any)) {
    revalidateTag(tag)
    return NextResponse.json({ revalidated: true, tag })
  }

  if (path) {
    revalidatePath(path)
    return NextResponse.json({ revalidated: true, path })
  }

  return NextResponse.json({ error: "Missing path or tag" }, { status: 400 })
}
