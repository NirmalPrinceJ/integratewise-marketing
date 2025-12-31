"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { appConfig } from "@/config/app"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { routes, pages } = appConfig

  return (
    <nav 
      className="sticky top-0 z-50 border-b bg-white" 
      style={{ borderColor: "#E5E7EB" }}
      aria-label="Main navigation"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2" aria-label="IntegrateWise home">
            <Image
              src="/images/integrateway-logo-markonly-transparent-indigo-v1.svg"
              alt=""
              width={28}
              height={28}
              className="h-7 w-7"
              aria-hidden="true"
            />
            <span className="text-lg font-semibold" style={{ color: "#232323" }}>
              IntegrateWise
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="gap-1 hover:bg-transparent" 
                  style={{ color: "#232323" }}
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  Products <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-white">
                <DropdownMenuItem asChild>
                  <Link href={pages.platform} style={{ color: "#232323" }}>
                    Platform
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/templates" style={{ color: "#232323" }}>
                    Templates
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={pages.integrations} style={{ color: "#232323" }}>
                    Integrations
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={pages.solutions} style={{ color: "#232323" }}>
                    Solutions
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services" style={{ color: "#232323" }}>
                    Services
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={pages.security} style={{ color: "#232323" }}>
                    Security
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="sm" asChild className="hover:bg-transparent" style={{ color: "#232323" }}>
              <Link href={pages.pricing}>Pricing</Link>
            </Button>

            <Button variant="ghost" size="sm" asChild className="hover:bg-transparent" style={{ color: "#232323" }}>
              <Link href={pages.contact}>Contact</Link>
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            className="hidden hover:bg-transparent sm:inline-flex"
            style={{ color: "#232323" }}
            asChild
          >
            <Link href={routes.login} aria-label="Log in to IntegrateWise">Login</Link>
          </Button>
          <Button 
            size="sm" 
            className="hidden sm:inline-flex" 
            style={{ backgroundColor: "#3F51B5", color: "#ffffff" }} 
            asChild
          >
            <Link href={routes.signup} aria-label="Start free trial">Start Free</Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button 
                variant="ghost" 
                size="sm" 
                style={{ color: "#232323" }}
                aria-label="Open navigation menu"
                aria-expanded={isOpen}
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 lg:hidden" style={{ backgroundColor: "#FAFAFA" }}>
              <nav className="flex flex-col gap-4 py-8" aria-label="Mobile navigation">
                <Link
                  href={pages.platform}
                  className="px-4 py-2 text-base font-medium rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  style={{ color: "#232323" }}
                  onClick={() => setIsOpen(false)}
                >
                  Platform
                </Link>
                <Link
                  href="/templates"
                  className="px-4 py-2 text-base font-medium rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  style={{ color: "#232323" }}
                  onClick={() => setIsOpen(false)}
                >
                  Templates
                </Link>
                <Link
                  href={pages.integrations}
                  className="px-4 py-2 text-base font-medium rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  style={{ color: "#232323" }}
                  onClick={() => setIsOpen(false)}
                >
                  Integrations
                </Link>
                <Link
                  href={pages.solutions}
                  className="px-4 py-2 text-base font-medium rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  style={{ color: "#232323" }}
                  onClick={() => setIsOpen(false)}
                >
                  Solutions
                </Link>
                <Link
                  href="/services"
                  className="px-4 py-2 text-base font-medium rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  style={{ color: "#232323" }}
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href={pages.security}
                  className="px-4 py-2 text-base font-medium rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  style={{ color: "#232323" }}
                  onClick={() => setIsOpen(false)}
                >
                  Security
                </Link>
                <Link
                  href={pages.pricing}
                  className="px-4 py-2 text-base font-medium rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  style={{ color: "#232323" }}
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href={pages.contact}
                  className="px-4 py-2 text-base font-medium rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  style={{ color: "#232323" }}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <div className="mt-4 flex flex-col gap-2 px-4">
                  <Button
                    variant="outline"
                    className="w-full bg-transparent"
                    style={{ color: "#232323", borderColor: "#E5E7EB" }}
                    asChild
                  >
                    <Link href={routes.login}>Login</Link>
                  </Button>
                  <Button className="w-full" style={{ backgroundColor: "#3F51B5", color: "#ffffff" }} asChild>
                    <Link href={routes.signup}>Start Free</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
