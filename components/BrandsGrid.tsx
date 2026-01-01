"use client"

import Image from "next/image"
import { BRANDS } from "@/data/brands"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function BrandsGrid({ className = "" }: { className?: string }) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Avoid hydration mismatch by rendering nothing or a placeholder until mounted
  if (!mounted) {
    return (
      <section className={`mt-8 ${className}`}>
        <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-7 items-center opacity-0">
            {/* Placeholder to reserve space */}
            <div className="h-10 w-20"></div>
        </div>
      </section>
    )
  }

  const isDark = resolvedTheme === "dark"

  const brands = BRANDS.sort((a, b) => a.sortOrder - b.sortOrder)

  return (
    <section className={`mt-8 ${className}`}>
      <h3 className="sr-only">
        Works with
      </h3>
      <ul className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-7 items-center">
        {brands.map((b) => (
          <li key={b.slug} className="flex justify-center">
            <a href={b.siteUrl} aria-label={b.name} rel="noopener noreferrer" target="_blank">
              <Image
                src={isDark && b.logoDark ? b.logoDark : b.logoLight}
                alt={`${b.name} logo`}
                width={120}
                height={40}
                className="h-10 w-auto opacity-90 hover:opacity-100 transition duration-300"
                priority
              />
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-center text-xs text-muted-foreground">
        Secure, read-only by default; enable full integration anytime.
      </p>
    </section>
  )
}
