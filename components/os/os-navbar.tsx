"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

const links = [
  { href: "/home", label: "Home" },
  { href: "/insights", label: "Insights" },
  { href: "/tasks", label: "Tasks" },
  { href: "/settings", label: "Settings" },
  { href: "/templates", label: "Templates" },
  { href: "/meetings", label: "Meetings" },
  { href: "/loader", label: "Loader" },
] as const

export default function OsNavbar() {
  const pathname = usePathname()
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/home" className="font-semibold">
          IntegrateWise OS
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = pathname === l.href
            return (
              <Button key={l.href} asChild size="sm" variant={active ? "secondary" : "ghost"}>
                <Link href={l.href}>{l.label}</Link>
              </Button>
            )
          })}
          <Button asChild size="sm" variant="outline" className="bg-transparent" data-cta="upgrade" data-cta-location="os_nav">
            <Link href="/pricing">Upgrade</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

