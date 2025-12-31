"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, Play, Calendar } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

// Design System Colors
const colors = {
  primary: "#3F51B5",
  light: "#F3F4F6",
  dark: "#1E2A4A",
  accent: "#F54476",
  text: "#1E2A4A",
  muted: "#6B7280",
  border: "#E5E7EB",
  white: "#FFFFFF",
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav 
      className="sticky top-0 z-50 border-b bg-white" 
      style={{ borderColor: colors.border }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/integrateway-logo-markonly-transparent-indigo-v1.svg"
              alt="IntegrateWise"
              width={28}
              height={28}
              className="h-7 w-7"
            />
            <span className="text-lg font-semibold" style={{ color: colors.dark }}>
              IntegrateWise
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="gap-1 hover:bg-transparent focus:ring-2 focus:ring-offset-2" 
                  style={{ color: colors.dark }}
                >
                  Products <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-white">
                <DropdownMenuItem asChild>
                  <Link href="/platform" style={{ color: colors.dark }}>
                    Platform
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/templates" style={{ color: colors.dark }}>
                    Templates
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/integrations" style={{ color: colors.dark }}>
                    Integrations
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/solutions" style={{ color: colors.dark }}>
                    Solutions
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services" style={{ color: colors.dark }}>
                    Services
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/security" style={{ color: colors.dark }}>
                    Security
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button 
              variant="ghost" 
              size="sm" 
              asChild 
              className="hover:bg-transparent focus:ring-2 focus:ring-offset-2" 
              style={{ color: colors.dark }}
            >
              <Link href="/pricing">Pricing</Link>
            </Button>

            <Button 
              variant="ghost" 
              size="sm" 
              asChild 
              className="hover:bg-transparent focus:ring-2 focus:ring-offset-2" 
              style={{ color: colors.dark }}
            >
              <Link href="/company/contact">Contact</Link>
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Watch Demo Button */}
          <Button
            variant="ghost"
            size="sm"
            className="hidden sm:inline-flex gap-2 hover:bg-gray-100 focus:ring-2 focus:ring-offset-2"
            style={{ color: colors.dark }}
            asChild
          >
            <Link href="/demo">
              <Play className="h-4 w-4" />
              Watch Demo
            </Link>
          </Button>
          
          {/* Book Demo Button - Primary CTA */}
          <Button 
            size="sm" 
            className="hidden sm:inline-flex gap-2 focus:ring-2 focus:ring-offset-2" 
            style={{ backgroundColor: colors.primary, color: colors.white }} 
            asChild
          >
            <Link href="/demo#book">
              <Calendar className="h-4 w-4" />
              Book Demo
            </Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button 
                variant="ghost" 
                size="sm" 
                style={{ color: colors.dark }}
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-80 lg:hidden" 
              style={{ backgroundColor: colors.light }}
            >
              <div className="flex flex-col gap-4 py-8">
                <Link
                  href="/platform"
                  className="px-4 py-2 text-base font-medium rounded-md focus:outline-none focus:ring-2"
                  style={{ color: colors.dark }}
                  onClick={() => setIsOpen(false)}
                >
                  Platform
                </Link>
                <Link
                  href="/templates"
                  className="px-4 py-2 text-base font-medium rounded-md focus:outline-none focus:ring-2"
                  style={{ color: colors.dark }}
                  onClick={() => setIsOpen(false)}
                >
                  Templates
                </Link>
                <Link
                  href="/integrations"
                  className="px-4 py-2 text-base font-medium rounded-md focus:outline-none focus:ring-2"
                  style={{ color: colors.dark }}
                  onClick={() => setIsOpen(false)}
                >
                  Integrations
                </Link>
                <Link
                  href="/solutions"
                  className="px-4 py-2 text-base font-medium rounded-md focus:outline-none focus:ring-2"
                  style={{ color: colors.dark }}
                  onClick={() => setIsOpen(false)}
                >
                  Solutions
                </Link>
                <Link
                  href="/services"
                  className="px-4 py-2 text-base font-medium rounded-md focus:outline-none focus:ring-2"
                  style={{ color: colors.dark }}
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/security"
                  className="px-4 py-2 text-base font-medium rounded-md focus:outline-none focus:ring-2"
                  style={{ color: colors.dark }}
                  onClick={() => setIsOpen(false)}
                >
                  Security
                </Link>
                <Link
                  href="/pricing"
                  className="px-4 py-2 text-base font-medium rounded-md focus:outline-none focus:ring-2"
                  style={{ color: colors.dark }}
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/company/contact"
                  className="px-4 py-2 text-base font-medium rounded-md focus:outline-none focus:ring-2"
                  style={{ color: colors.dark }}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                
                {/* Mobile CTAs */}
                <div className="mt-4 flex flex-col gap-3 px-4">
                  <Button
                    variant="outline"
                    className="w-full gap-2"
                    style={{ color: colors.dark, borderColor: colors.border }}
                    asChild
                  >
                    <Link href="/demo" onClick={() => setIsOpen(false)}>
                      <Play className="h-4 w-4" />
                      Watch Demo
                    </Link>
                  </Button>
                  <Button 
                    className="w-full gap-2" 
                    style={{ backgroundColor: colors.primary, color: colors.white }} 
                    asChild
                  >
                    <Link href="/demo#book" onClick={() => setIsOpen(false)}>
                      <Calendar className="h-4 w-4" />
                      Book Demo
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
