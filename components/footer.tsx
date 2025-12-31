import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Play } from "lucide-react"

// Design System Colors
const colors = {
  primary: "#3F51B5",
  dark: "#1E2A4A",
  border: "#E5E7EB",
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Top CTA Bar */}
        <div className="mb-12 rounded-xl p-8 text-center" style={{ backgroundColor: `${colors.primary}08` }}>
          <h3 className="text-xl font-semibold mb-2" style={{ color: colors.dark }}>
            Ready to streamline your workflows?
          </h3>
          <p className="text-muted-foreground mb-6">
            See IntegrateWise in action with a personalized demo.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button variant="outline" size="sm" className="gap-2" asChild>
              <Link href="/demo">
                <Play className="h-4 w-4" />
                Watch Demo
              </Link>
            </Button>
            <Button size="sm" className="gap-2" style={{ backgroundColor: colors.primary }} asChild>
              <Link href="/demo#book">
                <Calendar className="h-4 w-4" />
                Book Demo
              </Link>
            </Button>
          </div>
        </div>

        {/* Logo and Navigation */}
        <div className="mb-8 flex items-center gap-2">
          <Image
            src="/images/integrateway-logo-markonly-transparent-indigo-v1.svg"
            alt="IntegrateWise Logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="text-lg font-semibold" style={{ color: colors.dark }}>IntegrateWise</span>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div>
            <h3 className="text-sm font-semibold" style={{ color: colors.dark }}>Product</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/product" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Product Hub
                </Link>
              </li>
              <li>
                <Link href="/platform" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Platform
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="/templates" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Templates
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Demo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold" style={{ color: colors.dark }}>Solutions</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/solutions/individuals" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Individuals
                </Link>
              </li>
              <li>
                <Link href="/solutions/teams" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Teams
                </Link>
              </li>
              <li>
                <Link href="/solutions/business-ops" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Business Ops
                </Link>
              </li>
              <li>
                <Link href="/solutions/customer-success" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Customer Success
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold" style={{ color: colors.dark }}>Resources</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/resources/docs" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Docs
                </Link>
              </li>
              <li>
                <Link href="/resources/blog" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resources/changelog" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Changelog
                </Link>
              </li>
              <li>
                <Link href="/resources/api" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="/resources/case-studies" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/resources/community" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold" style={{ color: colors.dark }}>Services</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/services" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/services/assessments" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Assessments
                </Link>
              </li>
              <li>
                <Link href="/services/implementations" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Implementations
                </Link>
              </li>
              <li>
                <Link href="/services/managed-ops" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Managed Ops
                </Link>
              </li>
              <li>
                <Link href="/services/training" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Training
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold" style={{ color: colors.dark }}>Company</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/company/about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/company/contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/company/careers" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/security/privacy" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/security/compliance" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 IntegrateWise. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <Link href="/security/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/security/compliance" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="/security" className="hover:text-foreground transition-colors">
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
