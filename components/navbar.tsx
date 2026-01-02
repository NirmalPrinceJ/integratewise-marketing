"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { siteConfig } from "@/lib/siteConfig"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={siteConfig.logo.mark}
              alt={siteConfig.logo.alt}
              width={28}
              height={28}
              className="h-7 w-7"
            />
            <span className="text-lg font-semibold">{siteConfig.name}</span>
          </Link>

          {/* SSOT v2 Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1">
                  Products <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link href="/platform">Platform</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products/ai-loader">AI Loader</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/templates">Templates</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products/agents">Agents</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="sm" asChild>
              <Link href="/ai-insights">AI Insights</Link>
            </Button>

            <Button variant="ghost" size="sm" asChild>
              <Link href="/templates">Templates</Link>
            </Button>

            <Button variant="ghost" size="sm" asChild>
              <Link href="/integrations">Integrations</Link>
            </Button>

            <Button variant="ghost" size="sm" asChild>
              <Link href="/pricing">Pricing</Link>
            </Button>

            <Button variant="ghost" size="sm" asChild>
              <Link href="/services">Services</Link>
            </Button>

            <Button variant="ghost" size="sm" asChild>
              <Link href="/security">Security</Link>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1">
                  Company <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link href="/company/about">About</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/company/contact">Contact</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/company/careers">Careers</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button size="sm" asChild className="hidden sm:inline-flex">
            <Link href="/ai-insights">Try AI Insights Free</Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 lg:hidden">
              <div className="flex flex-col gap-4 py-8">
                <Link
                  href="/ai-insights"
                  className="px-4 py-2 text-base font-medium rounded-md focus:outline-none focus:ring-2"
                  onClick={() => setIsOpen(false)}
                >
                  AI Insights
                </Link>
                <Link
                  href="/platform"
                  className="px-4 py-2 text-base font-medium rounded-md focus:outline-none focus:ring-2"
                  onClick={() => setIsOpen(false)}
                >
                  Platform
                </Link>
                <Link
                  href="/products/ai-loader"
                  className="px-4 py-2 text-base font-medium rounded-md focus:outline-none focus:ring-2"
                  onClick={() => setIsOpen(false)}
                >
                  AI Loader
                </Link>
                <Link
                  href="/templates"
                  className="px-4 py-2 text-base font-medium rounded-md focus:outline-none focus:ring-2"
                  onClick={() => setIsOpen(false)}
                >
                  Templates
                </Link>
                <Link
                  href="/products/agents"
                  className="px-4 py-2 text-base font-medium rounded-md focus:outline-none focus:ring-2"
                  onClick={() => setIsOpen(false)}
                >
                  Agents
                </Link>
                <Link
                  href="/integrations"
                  className="px-4 py-2 text-base font-medium rounded-md focus:outline-none focus:ring-2"
                  onClick={() => setIsOpen(false)}
                >
                  Integrations
                </Link>
                <Link
                  href="/pricing"
                  className="px-4 py-2 text-base font-medium rounded-md focus:outline-none focus:ring-2"
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/services"
                  className="px-4 py-2 text-base font-medium rounded-md focus:outline-none focus:ring-2"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/security"
                  className="px-4 py-2 text-base font-medium rounded-md focus:outline-none focus:ring-2"
                  onClick={() => setIsOpen(false)}
                >
                  Security
                </Link>
                <Link
                  href="/company/about"
                  className="px-4 py-2 text-base font-medium rounded-md focus:outline-none focus:ring-2"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/company/contact"
                  className="px-4 py-2 text-base font-medium rounded-md focus:outline-none focus:ring-2"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <div className="mt-4 flex flex-col gap-2 px-4">
                  <Button className="w-full" asChild>
                    <Link href="/ai-insights" onClick={() => setIsOpen(false)}>
                      Try AI Insights Free
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
