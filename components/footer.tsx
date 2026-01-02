import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/lib/siteConfig"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-2">
          <Image
            src={siteConfig.logo.mark}
            alt={siteConfig.logo.alt}
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="text-lg font-semibold">{siteConfig.name}</span>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div>
            <h3 className="text-sm font-semibold">Product</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/ai-insights" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  AI Insights
                </Link>
              </li>
              <li>
                <Link href="/products/ai-loader" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  AI Loader
                </Link>
              </li>
              <li>
                <Link
                  href="/templates"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Templates
                </Link>
              </li>
              <li>
                <Link
                  href="/products/agents"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Agents
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
                  Individuals
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/teams"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Teams
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/business-ops"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Business Ops
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/customer-success"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Customer Success
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Resources</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/resources/docs"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Docs
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
                  href="/resources/changelog"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Changelog
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/api"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  API Reference
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
                  href="/resources/community"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Community
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
                  href="/company/contact"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Contact
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
                  href="/security"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  href="/security/privacy"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Privacy
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
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">{siteConfig.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
