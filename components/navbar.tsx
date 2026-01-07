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
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-80">
            <Image
              src={siteConfig.logo.mark}
              alt={siteConfig.logo.alt}
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="text-xl font-bold tracking-tight text-foreground">{siteConfig.name}</span>
          </Link>

          {/* MailerLite-style Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1.5 text-foreground/80 hover:text-foreground">
                  Products <ChevronDown className="h-4 w-4 opacity-60" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 rounded-xl border-border/50 shadow-xl">
                <DropdownMenuItem asChild className="rounded-lg cursor-pointer">
                  <Link href="/platform" className="flex flex-col items-start gap-0.5 py-2">
                    <span className="font-medium">Platform</span>
                    <span className="text-xs text-muted-foreground">Complete overview</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-lg cursor-pointer">
                  <Link href="/products/ai-loader" className="flex flex-col items-start gap-0.5 py-2">
                    <span className="font-medium">AI Loader</span>
                    <span className="text-xs text-muted-foreground">Structured data ingestion</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-lg cursor-pointer">
                  <Link href="/templates" className="flex flex-col items-start gap-0.5 py-2">
                    <span className="font-medium">Templates</span>
                    <span className="text-xs text-muted-foreground">Ready-to-use workflows</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-lg cursor-pointer">
                  <Link href="/products/agents" className="flex flex-col items-start gap-0.5 py-2">
                    <span className="font-medium">AI Agents</span>
                    <span className="text-xs text-muted-foreground">Automated workflows</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="sm" asChild className="text-foreground/80 hover:text-foreground">
              <Link href="/ai-insights">AI Insights</Link>
            </Button>

            <Button variant="ghost" size="sm" asChild className="text-foreground/80 hover:text-foreground">
              <Link href="/integrations">Integrations</Link>
            </Button>

            <Button variant="ghost" size="sm" asChild className="text-foreground/80 hover:text-foreground">
              <Link href="/pricing">Pricing</Link>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1.5 text-foreground/80 hover:text-foreground">
                  Resources <ChevronDown className="h-4 w-4 opacity-60" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 rounded-xl border-border/50 shadow-xl">
                <DropdownMenuItem asChild className="rounded-lg cursor-pointer">
                  <Link href="/resources/docs">Documentation</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-lg cursor-pointer">
                  <Link href="/resources/blog">Blog</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-lg cursor-pointer">
                  <Link href="/services">Services</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-lg cursor-pointer">
                  <Link href="/security">Security</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-lg cursor-pointer">
                  <Link href="/company/about">About</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild className="hidden text-foreground/80 hover:text-foreground sm:inline-flex">
            <Link href="/demo">Book Demo</Link>
          </Button>
          <Button size="sm" asChild className="hidden sm:inline-flex shadow-lg shadow-primary/20">
            <Link href="/ai-insights">Get Started Free</Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon-sm" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 border-l-border/50 lg:hidden">
              <div className="flex flex-col gap-2 py-8">
                <div className="px-4 pb-4 border-b border-border/50 mb-4">
                  <Link href="/" className="flex items-center gap-2.5" onClick={() => setIsOpen(false)}>
                    <Image
                      src={siteConfig.logo.mark}
                      alt={siteConfig.logo.alt}
                      width={28}
                      height={28}
                      className="h-7 w-7"
                    />
                    <span className="text-lg font-bold">{siteConfig.name}</span>
                  </Link>
                </div>

                <Link
                  href="/ai-insights"
                  className="px-4 py-3 text-base font-medium rounded-xl hover:bg-primary/5 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  AI Insights
                </Link>
                <Link
                  href="/platform"
                  className="px-4 py-3 text-base font-medium rounded-xl hover:bg-primary/5 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Platform
                </Link>
                <Link
                  href="/products/ai-loader"
                  className="px-4 py-3 text-base font-medium rounded-xl hover:bg-primary/5 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  AI Loader
                </Link>
                <Link
                  href="/templates"
                  className="px-4 py-3 text-base font-medium rounded-xl hover:bg-primary/5 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Templates
                </Link>
                <Link
                  href="/products/agents"
                  className="px-4 py-3 text-base font-medium rounded-xl hover:bg-primary/5 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Agents
                </Link>
                <Link
                  href="/integrations"
                  className="px-4 py-3 text-base font-medium rounded-xl hover:bg-primary/5 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Integrations
                </Link>
                <Link
                  href="/pricing"
                  className="px-4 py-3 text-base font-medium rounded-xl hover:bg-primary/5 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/services"
                  className="px-4 py-3 text-base font-medium rounded-xl hover:bg-primary/5 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/security"
                  className="px-4 py-3 text-base font-medium rounded-xl hover:bg-primary/5 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Security
                </Link>
                <Link
                  href="/company/about"
                  className="px-4 py-3 text-base font-medium rounded-xl hover:bg-primary/5 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>

                <div className="mt-6 flex flex-col gap-3 px-4 pt-4 border-t border-border/50">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/demo" onClick={() => setIsOpen(false)}>
                      Book Demo
                    </Link>
                  </Button>
                  <Button className="w-full shadow-lg shadow-primary/20" asChild>
                    <Link href="/ai-insights" onClick={() => setIsOpen(false)}>
                      Get Started Free
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
