"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b bg-white" style={{ borderColor: "#E5E7EB" }}>
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
            <span className="text-lg font-semibold" style={{ color: "#232323" }}>
              IntegrateWise
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1 hover:bg-transparent" style={{ color: "#232323" }}>
                  Product <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 bg-white">
                <DropdownMenuItem asChild>
                  <Link href="/product" style={{ color: "#232323" }}>
                    Product Overview
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/hubs/sales" style={{ color: "#232323" }}>
                    Sales Hub
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/hubs/marketing" style={{ color: "#232323" }}>
                    Marketing Hub
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/hubs/operations" style={{ color: "#232323" }}>
                    Operations Hub
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/hubs/technology" style={{ color: "#232323" }}>
                    Technology Hub
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/hubs/customer-success" style={{ color: "#232323" }}>
                    Customer Success Hub
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/hubs/content" style={{ color: "#232323" }}>
                    Content Hub
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/hubs/website" style={{ color: "#232323" }}>
                    Website Hub
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/agents" style={{ color: "#232323" }}>
                    Agent Marketplace
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/integrations" style={{ color: "#232323" }}>
                    Integrations
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1 hover:bg-transparent" style={{ color: "#232323" }}>
                  Solutions <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-white">
                <DropdownMenuItem asChild>
                  <Link href="/solutions" style={{ color: "#232323" }}>
                    Overview
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/solutions/individuals" style={{ color: "#232323" }}>
                    For Individuals
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/solutions/teams" style={{ color: "#232323" }}>
                    For Teams
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/solutions/business-ops" style={{ color: "#232323" }}>
                    For Business Ops
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/solutions/customer-success" style={{ color: "#232323" }}>
                    For Customer Success
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1 hover:bg-transparent" style={{ color: "#232323" }}>
                  Resources <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-white">
                <DropdownMenuItem asChild>
                  <Link href="/docs" style={{ color: "#232323" }}>
                    Docs
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/docs/api" style={{ color: "#232323" }}>
                    API Reference
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/resources/blog" style={{ color: "#232323" }}>
                    Blog
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/resources/case-studies" style={{ color: "#232323" }}>
                    Case Studies
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/resources/changelog" style={{ color: "#232323" }}>
                    Changelog
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="sm" asChild className="hover:bg-transparent" style={{ color: "#232323" }}>
              <Link href="/pricing">Pricing</Link>
            </Button>

            <Button variant="ghost" size="sm" asChild className="hover:bg-transparent" style={{ color: "#232323" }}>
              <Link href="/company/contact">Contact</Link>
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            className="hidden hover:bg-transparent sm:inline-flex"
            style={{ color: "#232323" }}
          >
            Login
          </Button>
          <Button size="sm" className="hidden sm:inline-flex" style={{ backgroundColor: "#3F51B5", color: "#ffffff" }}>
            Start Free Trial
          </Button>

          {/* Mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm" style={{ color: "#232323" }}>
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 lg:hidden" style={{ backgroundColor: "#FAFAFA" }}>
              <div className="flex flex-col gap-4 py-8">
                <Link
                  href="/product"
                  className="px-4 py-2 text-base font-medium"
                  style={{ color: "#232323" }}
                  onClick={() => setIsOpen(false)}
                >
                  Product
                </Link>
                <Link
                  href="/solutions"
                  className="px-4 py-2 text-base font-medium"
                  style={{ color: "#232323" }}
                  onClick={() => setIsOpen(false)}
                >
                  Solutions
                </Link>
                <Link
                  href="/integrations"
                  className="px-4 py-2 text-base font-medium"
                  style={{ color: "#232323" }}
                  onClick={() => setIsOpen(false)}
                >
                  Integrations
                </Link>
                <Link
                  href="/agents"
                  className="px-4 py-2 text-base font-medium"
                  style={{ color: "#232323" }}
                  onClick={() => setIsOpen(false)}
                >
                  Agents
                </Link>
                <Link
                  href="/docs"
                  className="px-4 py-2 text-base font-medium"
                  style={{ color: "#232323" }}
                  onClick={() => setIsOpen(false)}
                >
                  Docs
                </Link>
                <Link
                  href="/pricing"
                  className="px-4 py-2 text-base font-medium"
                  style={{ color: "#232323" }}
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/company/contact"
                  className="px-4 py-2 text-base font-medium"
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
                  >
                    Login
                  </Button>
                  <Button className="w-full" style={{ backgroundColor: "#3F51B5", color: "#ffffff" }}>
                    Start Free Trial
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
