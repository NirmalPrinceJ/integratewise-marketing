import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-2">
          <Image
            src="/images/integrateway-logo-markonly-transparent-indigo-v1.svg"
            alt="IntegrateWise Logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="text-lg font-semibold">IntegrateWise</span>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div>
            <h3 className="text-sm font-semibold">Product</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/product" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Product Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/hubs/sales"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Sales Hub
                </Link>
              </li>
              <li>
                <Link
                  href="/hubs/marketing"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Marketing Hub
                </Link>
              </li>
              <li>
                <Link
                  href="/hubs/operations"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Operations Hub
                </Link>
              </li>
              <li>
                <Link
                  href="/hubs/technology"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Technology Hub
                </Link>
              </li>
              <li>
                <Link
                  href="/hubs/customer-success"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Customer Success Hub
                </Link>
              </li>
              <li>
                <Link href="/agents" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Agent Marketplace
                </Link>
              </li>
              <li>
                <Link
                  href="/integrations"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Solutions</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/solutions/individuals"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  For Individuals
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/teams"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  For Teams
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/business-ops"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  For Business Ops
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/customer-success"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  For Customer Success
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Resources</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/docs" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Docs
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/api"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  API Reference
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/developers"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Developer Docs
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/blog"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/case-studies"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/changelog"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Services</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/services/assessments"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Assessments
                </Link>
              </li>
              <li>
                <Link
                  href="/services/implementations"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Implementations
                </Link>
              </li>
              <li>
                <Link
                  href="/services/managed-ops"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Managed Ops
                </Link>
              </li>
              <li>
                <Link
                  href="/services/training"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Training
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/company/about"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/company/careers"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/company/contact"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  href="/security/compliance"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Compliance
                </Link>
              </li>
              <li>
                <Link
                  href="/security/privacy"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-sm font-medium">IntegrateWise AI Workspace — An AI Agents Production House</p>
          <p className="mt-1 text-sm text-muted-foreground">Normalize Once. Render Anywhere.</p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <p className="text-sm text-muted-foreground">
              Website:{" "}
              <a href="https://integratewise.ai" className="hover:text-foreground">
                integratewise.ai
              </a>
            </p>
            <p className="text-sm text-muted-foreground">
              Email:{" "}
              <a href="mailto:connect@integratewise.co" className="hover:text-foreground">
                connect@integratewise.co
              </a>
            </p>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">© 2026 IntegrateWise LLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
