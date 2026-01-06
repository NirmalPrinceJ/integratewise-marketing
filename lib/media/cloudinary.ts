import { v2 as cloudinaryLib } from "cloudinary"
import type { Media, HubType } from "@/lib/cms/types"

// Configure Cloudinary
if (process.env.CLOUDINARY_CLOUD_NAME) {
  cloudinaryLib.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: process.env.CLOUDINARY_SECURE === "true",
  })
}

export const TRANSFORM_PRESETS = {
  thumb: { width: 320, height: 320, crop: "fill" as const, quality: "auto" as const, format: "auto" as const },
  card: { width: 640, height: 360, crop: "fill" as const, quality: "auto" as const, format: "auto" as const },
  hero: { width: 1600, height: 900, crop: "fill" as const, quality: "auto" as const, format: "auto" as const },
  banner: { width: 1200, height: 400, crop: "fill" as const, quality: "auto" as const, format: "auto" as const },
  avatar: {
    width: 128,
    height: 128,
    crop: "thumb" as const,
    gravity: "face" as const,
    quality: "auto" as const,
    format: "auto" as const,
  },
} as const

export type TransformPreset = keyof typeof TRANSFORM_PRESETS

export interface ImageTransformOptions {
  width?: number
  height?: number
  crop?: "fill" | "fit" | "scale" | "crop" | "thumb" | "limit" | "pad"
  quality?: number | "auto"
  format?: "auto" | "webp" | "avif" | "jpg" | "png"
  gravity?: "auto" | "face" | "center" | "north" | "south" | "east" | "west"
  blur?: number
  grayscale?: boolean
  focalPoint?: { x: number; y: number }
}

export function getCloudinaryFolder(hub: HubType, type: string): string {
  return `integratewise/${hub}/${type}`
}

export function generatePublicId(hub: HubType, type: string, slug: string): string {
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, "")
  const hash = Math.random().toString(36).substring(2, 10)
  return `${hub}/${type}/${slug}-${date}-${hash}`
}

export class CloudinaryService {
  private isConfigured: boolean

  constructor() {
    this.isConfigured = !!(
      process.env.CLOUDINARY_CLOUD_NAME &&
      process.env.CLOUDINARY_API_KEY &&
      process.env.CLOUDINARY_API_SECRET
    )
  }

  getPresetUrl(publicId: string, preset: TransformPreset): string {
    return this.getImageUrl(publicId, TRANSFORM_PRESETS[preset])
  }

  getImageUrl(publicId: string, options: ImageTransformOptions = {}): string {
    if (!this.isConfigured || !publicId) {
      return publicId || "/placeholder.svg?height=400&width=600"
    }

    const {
      width,
      height,
      crop = "fill",
      quality = "auto",
      format = "auto",
      gravity = "auto",
      blur,
      grayscale,
      focalPoint,
    } = options

    const transformations: string[] = []

    if (width) transformations.push(`w_${width}`)
    if (height) transformations.push(`h_${height}`)
    if (crop) transformations.push(`c_${crop}`)
    if (focalPoint) {
      transformations.push(`g_xy_center,x_${focalPoint.x},y_${focalPoint.y}`)
    } else if (gravity) {
      transformations.push(`g_${gravity}`)
    }
    if (quality) transformations.push(`q_${quality}`)
    if (format) transformations.push(`f_${format}`)
    if (blur) transformations.push(`e_blur:${blur}`)
    if (grayscale) transformations.push("e_grayscale")

    const transformation = transformations.join(",")
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME

    return `https://res.cloudinary.com/${cloudName}/image/upload/${transformation}/${publicId}`
  }

  getSrcSet(publicId: string, widths: number[] = [320, 640, 1024, 1600, 1920]): string {
    return widths.map((w) => `${this.getImageUrl(publicId, { width: w })} ${w}w`).join(", ")
  }

  getResponsiveImageUrls(publicId: string) {
    return {
      thumb: this.getPresetUrl(publicId, "thumb"),
      card: this.getPresetUrl(publicId, "card"),
      hero: this.getPresetUrl(publicId, "hero"),
      banner: this.getPresetUrl(publicId, "banner"),
      avatar: this.getPresetUrl(publicId, "avatar"),
    }
  }

  async uploadImage(
    file: string | Buffer,
    options: {
      hub: HubType
      type: string
      slug: string
      altText: string
      license: string
      credit?: string
      tags?: string[]
    },
  ): Promise<Media> {
    if (!this.isConfigured) {
      throw new Error("Cloudinary is not configured")
    }

    const folder = getCloudinaryFolder(options.hub, options.type)
    const publicId = generatePublicId(options.hub, options.type, options.slug)

    try {
      const result = await cloudinaryLib.uploader.upload(file as string, {
        folder,
        public_id: publicId.split("/").pop(), // Just the filename part
        tags: options.tags,
        context: {
          alt: options.altText,
          license: options.license,
          credit: options.credit || "",
        },
        resource_type: "auto",
      })

      return {
        id: result.asset_id,
        publicId: result.public_id,
        folder,
        type: result.resource_type === "video" ? "video" : "image",
        status: "draft",
        altText: options.altText,
        license: options.license,
        credit: options.credit,
        width: result.width,
        height: result.height,
        bytes: result.bytes,
        createdAt: new Date().toISOString(),
      }
    } catch (error) {
      console.error("[Cloudinary] Upload error:", error)
      throw error
    }
  }

  async listAssets(folder: string): Promise<Media[]> {
    if (!this.isConfigured) {
      return []
    }

    try {
      const result = await cloudinaryLib.api.resources({
        type: "upload",
        prefix: folder,
        max_results: 100,
        context: true,
      })

      return result.resources.map((r: any) => ({
        id: r.asset_id,
        publicId: r.public_id,
        folder: r.folder || folder,
        type: r.resource_type === "video" ? "video" : "image",
        status: "published" as const,
        altText: r.context?.custom?.alt || "",
        license: r.context?.custom?.license || "",
        credit: r.context?.custom?.credit,
        width: r.width,
        height: r.height,
        bytes: r.bytes,
        createdAt: r.created_at,
      }))
    } catch (error) {
      console.error("[Cloudinary] List error:", error)
      return []
    }
  }

  async deleteImage(publicId: string) {
    if (!this.isConfigured) {
      throw new Error("Cloudinary is not configured")
    }

    try {
      const result = await cloudinaryLib.uploader.destroy(publicId)
      return result.result === "ok"
    } catch (error) {
      console.error("[Cloudinary] Delete error:", error)
      throw error
    }
  }

  getVideoUrl(publicId: string, options: { width?: number; quality?: string } = {}): string {
    if (!this.isConfigured || !publicId) {
      return publicId || ""
    }

    const { width, quality = "auto" } = options
    const transformations: string[] = []

    if (width) transformations.push(`w_${width}`)
    if (quality) transformations.push(`q_${quality}`)

    const transformation = transformations.join(",")
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME

    return `https://res.cloudinary.com/${cloudName}/video/upload/${transformation}/${publicId}`
  }
}

export const cloudinary = new CloudinaryService()
export { cloudinaryLib }
