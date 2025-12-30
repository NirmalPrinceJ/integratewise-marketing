"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b" style={{ backgroundColor: "#FFFFFF", borderColor: "#E5E7EB" }}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/integrateway-logo-markonly-transparent-indigo-v1.svg"
              alt="IntegrateWise"
              width={28}
              height={28}
              className="h-7 w-7"
            />
            <span className="text-lg font-bold tracking-tight" style={{ color: "#232323", letterSpacing: "-0.02em" }}>
              IntegrateWise
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-1 text-sm font-medium transition-colors hover:bg-transparent focus:outline-none focus:ring-2"
                  style={
                    {
                      color: "#232323",
                      "--tw-ring-color": "#9CA3AF",
                    } as React.CSSProperties
                  }
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#3F51B5")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#232323")}
                >
                  Products <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-white border" style={{ borderColor: "#E5E7EB" }}>
                <DropdownMenuItem asChild>
                  <Link
                    href="/platform"
                    className="text-sm font-medium transition-colors focus:outline-none focus:ring-2"
                    style={
                      {
                        color: "#232323",
                        "--tw-ring-color": "#9CA3AF",
                      } as React.CSSProperties
                    }
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#3F51B5")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#232323")}
                  >
                    Platform
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/templates"
                    className="text-sm font-medium transition-colors focus:outline-none focus:ring-2"
                    style={
                      {
                        color: "#232323",
                        "--tw-ring-color": "#9CA3AF",
                      } as React.CSSProperties
                    }
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#3F51B5")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#232323")}
                  >
                    Templates
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/integrations"
                    className="text-sm font-medium transition-colors focus:outline-none focus:ring-2"
                    style={
                      {
                        color: "#232323",
                        "--tw-ring-color": "#9CA3AF",
                      } as React.CSSProperties
                    }
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#3F51B5")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#232323")}
                  >
                    Integrations
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/solutions"
                    className="text-sm font-medium transition-colors focus:outline-none focus:ring-2"
                    style={
                      {
                        color: "#232323",
                        "--tw-ring-color": "#9CA3AF",
                      } as React.CSSProperties
                    }
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#3F51B5")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#232323")}
                  >
                    Solutions
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/services"
                    className="text-sm font-medium transition-colors focus:outline-none focus:ring-2"
                    style={
                      {
                        color: "#232323",
                        "--tw-ring-color": "#9CA3AF",
                      } as React.CSSProperties
                    }
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#3F51B5")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#232323")}
                  >
                    Services
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/security"
                    className="text-sm font-medium transition-colors focus:outline-none focus:ring-2"
                    style={
                      {
                        color: "#232323",
                        "--tw-ring-color": "#9CA3AF",
                      } as React.CSSProperties
                    }
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#3F51B5")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#232323")}
                  >
                    Security
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-sm font-medium transition-colors hover:bg-transparent focus:outline-none focus:ring-2"
              style={
                {
                  color: "#232323",
                  "--tw-ring-color": "#9CA3AF",
                } as React.CSSProperties
              }
            >
              <Link
                href="/pricing"
                onMouseEnter={(e) => (e.currentTarget.style.color = "#3F51B5")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#232323")}
              >
                Pricing
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-sm font-medium transition-colors hover:bg-transparent focus:outline-none focus:ring-2"
              style={
                {
                  color: "#232323",
                  "--tw-ring-color": "#9CA3AF",
                } as React.CSSProperties
              }
            >
              <Link
                href="/contact"
                onMouseEnter={(e) => (e.currentTarget.style.color = "#3F51B5")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#232323")}
              >
                Contact
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            className="hidden text-sm font-medium transition-colors hover:bg-transparent focus:outline-none focus:ring-2 sm:inline-flex"
            style={
              {
                color: "#232323",
                "--tw-ring-color": "#9CA3AF",
              } as React.CSSProperties
            }
            onMouseEnter={(e) => (e.currentTarget.style.color = "#3F51B5")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#232323")}
          >
            Login
          </Button>
          <Button
            size="sm"
            className="hidden text-sm font-semibold transition-colors focus:outline-none focus:ring-2 sm:inline-flex"
            style={
              {
                backgroundColor: "#3F51B5",
                color: "#FFFFFF",
                "--tw-ring-color": "#9CA3AF",
              } as React.CSSProperties
            }
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#4a5dc6")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#3F51B5")}
            onMouseDown={(e) => (e.currentTarget.style.backgroundColor = "#354396")}
            onMouseUp={(e) => (e.currentTarget.style.backgroundColor = "#4a5dc6")}
          >
            Start Free
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm" style={{ color: "#232323" }}>
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 lg:hidden" style={{ backgroundColor: "#FAFAFA" }}>
              <div className="flex flex-col gap-4 py-8">
                <Link
                  href="/platform"
                  className="rounded-md px-4 py-2 text-base font-medium transition-colors focus:outline-none focus:ring-2"
                  style={
                    {
                      color: "#232323",
                      "--tw-ring-color": "#9CA3AF",
                    } as React.CSSProperties
                  }
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#3F51B5")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#232323")}
                  onClick={() => setIsOpen(false)}
                >
                  Platform
                </Link>
                <Link
                  href="/templates"
                  className="rounded-md px-4 py-2 text-base font-medium transition-colors focus:outline-none focus:ring-2"
                  style={
                    {
                      color: "#232323",
                      "--tw-ring-color": "#9CA3AF",
                    } as React.CSSProperties
                  }
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#3F51B5")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#232323")}
                  onClick={() => setIsOpen(false)}
                >
                  Templates
                </Link>
                <Link
                  href="/integrations"
                  className="rounded-md px-4 py-2 text-base font-medium transition-colors focus:outline-none focus:ring-2"
                  style={
                    {
                      color: "#232323",
                      "--tw-ring-color": "#9CA3AF",
                    } as React.CSSProperties
                  }
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#3F51B5")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#232323")}
                  onClick={() => setIsOpen(false)}
                >
                  Integrations
                </Link>
                <Link
                  href="/solutions"
                  className="rounded-md px-4 py-2 text-base font-medium transition-colors focus:outline-none focus:ring-2"
                  style={
                    {
                      color: "#232323",
                      "--tw-ring-color": "#9CA3AF",
                    } as React.CSSProperties
                  }
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#3F51B5")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#232323")}
                  onClick={() => setIsOpen(false)}
                >
                  Solutions
                </Link>
                <Link
                  href="/services"
                  className="rounded-md px-4 py-2 text-base font-medium transition-colors focus:outline-none focus:ring-2"
                  style={
                    {
                      color: "#232323",
                      "--tw-ring-color": "#9CA3AF",
                    } as React.CSSProperties
                  }
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#3F51B5")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#232323")}
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/security"
                  className="rounded-md px-4 py-2 text-base font-medium transition-colors focus:outline-none focus:ring-2"
                  style={
                    {
                      color: "#232323",
                      "--tw-ring-color": "#9CA3AF",
                    } as React.CSSProperties
                  }
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#3F51B5")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#232323")}
                  onClick={() => setIsOpen(false)}
                >
                  Security
                </Link>
                <Link
                  href="/pricing"
                  className="rounded-md px-4 py-2 text-base font-medium transition-colors focus:outline-none focus:ring-2"
                  style={
                    {
                      color: "#232323",
                      "--tw-ring-color": "#9CA3AF",
                    } as React.CSSProperties
                  }
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#3F51B5")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#232323")}
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/contact"
                  className="rounded-md px-4 py-2 text-base font-medium transition-colors focus:outline-none focus:ring-2"
                  style={
                    {
                      color: "#232323",
                      "--tw-ring-color": "#9CA3AF",
                    } as React.CSSProperties
                  }
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#3F51B5")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#232323")}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <div className="mt-4 flex flex-col gap-2 px-4">
                  <Button
                    variant="outline"
                    className="w-full bg-transparent text-sm font-medium transition-colors"
                    style={{ color: "#232323", borderColor: "#E5E7EB" }}
                  >
                    Login
                  </Button>
                  <Button
                    className="w-full text-sm font-semibold transition-colors"
                    style={{ backgroundColor: "#3F51B5", color: "#FFFFFF" }}
                  >
                    Start Free
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
