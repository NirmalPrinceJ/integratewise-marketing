import { type NextRequest, NextResponse } from "next/server"
import { cloudinary } from "@/lib/media/cloudinary"
import { getCurrentUser } from "@/lib/admin/auth"
import type { HubType } from "@/lib/cms/types"

export async function POST(request: NextRequest) {
  // Verify authentication
  const user = await getCurrentUser()
  if (!user || !["admin", "editor"].includes(user.role)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const formData = await request.formData()
    const file = formData.get("file") as File | null
    const hub = formData.get("hub") as HubType
    const type = formData.get("type") as string
    const slug = formData.get("slug") as string
    const altText = formData.get("altText") as string
    const license = formData.get("license") as string
    const credit = formData.get("credit") as string | null

    // Validate required fields
    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }
    if (!hub || !type || !slug) {
      return NextResponse.json({ error: "Missing hub, type, or slug" }, { status: 400 })
    }
    if (!altText) {
      return NextResponse.json({ error: "Alt text is required for accessibility" }, { status: 400 })
    }
    if (!license) {
      return NextResponse.json({ error: "License is required for compliance" }, { status: 400 })
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Upload to Cloudinary
    const media = await cloudinary.uploadImage(buffer, {
      hub,
      type,
      slug,
      altText,
      license,
      credit: credit || undefined,
    })

    return NextResponse.json({ success: true, media })
  } catch (error) {
    console.error("[API] Media upload error:", error)
    return NextResponse.json({ error: "Upload failed" }, { status: 500 })
  }
}
