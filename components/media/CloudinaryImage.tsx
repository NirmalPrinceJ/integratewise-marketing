"use client"

import Image from "next/image"
import { cloudinary as cloudinaryService } from "@/lib/media/cloudinary"
import { useState } from "react"

interface CloudinaryImageProps {
  publicId: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  quality?: number | "auto"
  crop?: "fill" | "fit" | "scale" | "crop" | "thumb" | "limit" | "pad"
  gravity?: "auto" | "face" | "center"
}

export function CloudinaryImage({
  publicId,
  alt,
  width = 1200,
  height = 630,
  className = "",
  priority = false,
  quality = "auto",
  crop = "fill",
  gravity = "auto",
}: CloudinaryImageProps) {
  const [imageError, setImageError] = useState(false)

  if (imageError || !publicId) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-400 text-sm">Image unavailable</span>
      </div>
    )
  }

  const imageUrl = cloudinaryService.getImageUrl(publicId, {
    width,
    height,
    quality,
    format: "auto",
    crop,
    gravity,
  })

  return (
    <Image
      src={imageUrl || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      onError={() => setImageError(true)}
    />
  )
}

export function ResponsiveCloudinaryImage({
  publicId,
  alt,
  className = "",
  priority = false,
}: {
  publicId: string
  alt: string
  className?: string
  priority?: boolean
}) {
  const [imageError, setImageError] = useState(false)

  if (imageError || !publicId) {
    return (
      <div className={`bg-gray-200 aspect-video flex items-center justify-center ${className}`}>
        <span className="text-gray-400 text-sm">Image unavailable</span>
      </div>
    )
  }

  const urls = cloudinaryService.getResponsiveImageUrls(publicId)

  return (
    <picture>
      <source media="(max-width: 640px)" srcSet={urls.mobile} />
      <source media="(max-width: 1024px)" srcSet={urls.tablet} />
      <img
        src={urls.desktop || "/placeholder.svg"}
        alt={alt}
        className={className}
        loading={priority ? "eager" : "lazy"}
      />
    </picture>
  )
}
