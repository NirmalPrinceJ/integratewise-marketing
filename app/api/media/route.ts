import { type NextRequest, NextResponse } from "next/server"
import { cloudinary } from "@/lib/media/cloudinary"
import { getCurrentUser } from "@/lib/admin/auth"
import type { HubType } from "@/lib/cms/types"

export async function GET(request: NextRequest) {
  const user = await getCurrentUser()
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const hub = searchParams.get("hub") as HubType | null
  const type = searchParams.get("type")

  try {
    let folder = "integratewise"
    if (hub) folder += `/${hub}`
    if (type) folder += `/${type}`

    const assets = await cloudinary.listAssets(folder)
    return NextResponse.json({ assets })
  } catch (error) {
    console.error("[API] Media list error:", error)
    return NextResponse.json({ error: "Failed to list assets" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  const user = await getCurrentUser()
  if (!user || user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const { publicId } = await request.json()
    if (!publicId) {
      return NextResponse.json({ error: "Public ID required" }, { status: 400 })
    }

    const success = await cloudinary.deleteImage(publicId)
    return NextResponse.json({ success })
  } catch (error) {
    console.error("[API] Media delete error:", error)
    return NextResponse.json({ error: "Delete failed" }, { status: 500 })
  }
}
