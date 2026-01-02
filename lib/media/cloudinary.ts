import { v2 as cloudinaryLib } from "cloudinary"

// Configure Cloudinary
if (process.env.CLOUDINARY_CLOUD_NAME) {
  cloudinaryLib.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  })
}

export interface ImageTransformOptions {
  width?: number
  height?: number
  crop?: "fill" | "fit" | "scale" | "crop" | "thumb" | "limit" | "pad"
  quality?: number | "auto"
  format?: "auto" | "webp" | "avif" | "jpg" | "png"
  gravity?: "auto" | "face" | "center" | "north" | "south" | "east" | "west"
  blur?: number
  grayscale?: boolean
}

export class CloudinaryService {
  private isConfigured: boolean

  constructor() {
    this.isConfigured = !!(
      process.env.CLOUDINARY_CLOUD_NAME &&
      process.env.CLOUDINARY_API_KEY &&
      process.env.CLOUDINARY_API_SECRET
    )

    if (!this.isConfigured) {
      console.warn("[v0] Cloudinary: Not configured, using fallback URLs")
    }
  }

  /**
   * Generate optimized image URL from Cloudinary public ID
   */
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
    } = options

    const transformations: string[] = []

    if (width) transformations.push(`w_${width}`)
    if (height) transformations.push(`h_${height}`)
    if (crop) transformations.push(`c_${crop}`)
    if (gravity) transformations.push(`g_${gravity}`)
    if (quality) transformations.push(`q_${quality}`)
    if (format) transformations.push(`f_${format}`)
    if (blur) transformations.push(`e_blur:${blur}`)
    if (grayscale) transformations.push("e_grayscale")

    const transformation = transformations.join(",")
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME

    return `https://res.cloudinary.com/${cloudName}/image/upload/${transformation}/${publicId}`
  }

  /**
   * Get responsive image URLs for different screen sizes
   */
  getResponsiveImageUrls(publicId: string) {
    return {
      mobile: this.getImageUrl(publicId, { width: 640, quality: "auto", format: "auto" }),
      tablet: this.getImageUrl(publicId, { width: 1024, quality: "auto", format: "auto" }),
      desktop: this.getImageUrl(publicId, { width: 1920, quality: "auto", format: "auto" }),
      thumbnail: this.getImageUrl(publicId, { width: 300, height: 200, crop: "thumb", gravity: "auto" }),
    }
  }

  /**
   * Upload image to Cloudinary (server-side only)
   */
  async uploadImage(
    file: string | Buffer,
    options: {
      folder?: string
      publicId?: string
      tags?: string[]
      context?: Record<string, string>
    } = {},
  ) {
    if (!this.isConfigured) {
      throw new Error("Cloudinary is not configured")
    }

    try {
      const result = await cloudinaryLib.uploader.upload(file, {
        folder: options.folder || "integratewise",
        public_id: options.publicId,
        tags: options.tags,
        context: options.context,
        resource_type: "auto",
      })

      return {
        publicId: result.public_id,
        url: result.secure_url,
        width: result.width,
        height: result.height,
        format: result.format,
      }
    } catch (error) {
      console.error("[v0] Cloudinary upload error:", error)
      throw error
    }
  }

  /**
   * Delete image from Cloudinary
   */
  async deleteImage(publicId: string) {
    if (!this.isConfigured) {
      throw new Error("Cloudinary is not configured")
    }

    try {
      const result = await cloudinaryLib.uploader.destroy(publicId)
      return result.result === "ok"
    } catch (error) {
      console.error("[v0] Cloudinary delete error:", error)
      throw error
    }
  }

  /**
   * Get video URL with transformations
   */
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
