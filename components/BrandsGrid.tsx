"use client"

import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { BRANDS, HERO_BRANDS, type Brand } from "@/data/brands"

interface BrandsGridProps {
  /** Show only hero brands (sortOrder <= 70) */
  heroOnly?: boolean
  /** Filter by category */
  category?: Brand["category"]
  /** Custom list of brand slugs to display */
  slugs?: string[]
  /** Custom class for the grid container */
  className?: string
  /** Show as compact inline badges (for hero section) */
  compact?: boolean
  /** Add microcopy under the grid */
  showMicrocopy?: boolean
}

export default function BrandsGrid({
  heroOnly = false,
  category,
  slugs,
  className = "",
  compact = false,
  showMicrocopy = false,
}: BrandsGridProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted ? resolvedTheme === "dark" : false

  // Determine which brands to show
  let brands: Brand[]
  if (slugs) {
    brands = BRANDS.filter((b) => slugs.includes(b.slug)).sort((a, b) => a.sortOrder - b.sortOrder)
  } else if (heroOnly) {
    brands = HERO_BRANDS
  } else if (category) {
    brands = BRANDS.filter((b) => b.category === category).sort((a, b) => a.sortOrder - b.sortOrder)
  } else {
    brands = [...BRANDS].sort((a, b) => a.sortOrder - b.sortOrder)
  }

  if (compact) {
    return (
      <section aria-labelledby="works-with-compact" className={className}>
        <h3 id="works-with-compact" className="sr-only">
          Works with
        </h3>
        <ul className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
          {brands.map((b) => (
            <li key={b.slug}>
              <a
                href={b.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={b.name}
                className="flex h-8 items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 transition hover:border-primary/50 hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Image
                  src={isDark && b.logoDark ? b.logoDark : b.logoLight}
                  alt=""
                  width={20}
                  height={20}
                  className="h-5 w-5 object-contain"
                  priority
                />
                <span className="text-sm text-muted-foreground">{b.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    )
  }

  return (
    <section aria-labelledby="works-with" className={`mt-8 ${className}`}>
      <h3 id="works-with" className="sr-only">
        Works with
      </h3>
      <ul className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 items-center">
        {brands.map((b) => (
          <li key={b.slug} className="flex justify-center">
            <a
              href={b.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={b.name}
              className="group flex flex-col items-center gap-2 rounded-lg p-3 transition hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-background p-2 transition group-hover:border-primary/50 group-hover:shadow-sm">
                <Image
                  src={isDark && b.logoDark ? b.logoDark : b.logoLight}
                  alt={`${b.name} logo`}
                  width={40}
                  height={40}
                  className="h-8 w-8 object-contain opacity-90 transition group-hover:opacity-100"
                  priority
                />
              </div>
              <span className="text-xs text-muted-foreground transition group-hover:text-foreground">{b.name}</span>
            </a>
          </li>
        ))}
      </ul>
      {showMicrocopy && (
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Secure, read-only by default; enable full integration anytime.
        </p>
      )}
    </section>
  )
}

// Export a simple logo-only component for use in cards
export function BrandLogo({
  slug,
  size = "md",
  className = "",
}: {
  slug: string
  size?: "sm" | "md" | "lg"
  className?: string
}) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted ? resolvedTheme === "dark" : false
  const brand = BRANDS.find((b) => b.slug === slug)

  if (!brand) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <span className="text-sm font-medium text-muted-foreground">{slug}</span>
      </div>
    )
  }

  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  }

  return (
    <Image
      src={isDark && brand.logoDark ? brand.logoDark : brand.logoLight}
      alt={`${brand.name} logo`}
      width={48}
      height={48}
      className={`${sizeClasses[size]} object-contain ${className}`}
    />
  )
}
