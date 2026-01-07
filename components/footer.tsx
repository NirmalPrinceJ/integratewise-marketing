import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/lib/siteConfig"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Twitter, Github, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-gradient-to-b from-background to-muted/30">
      {/* CTA Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-px overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-emerald-500 p-10 sm:p-14 my-16 shadow-2xl shadow-primary/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_50%)]" />
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to simplify your workflows?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Join thousands of professionals who use IntegrateWise to connect their tools and discover their working style.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-xl" asChild>
                <Link href="/ai-insights">
                  Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 bg-transparent" asChild>
                <Link href="/demo">Book a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src={siteConfig.logo.mark}
                alt={siteConfig.logo.alt}
                width={36}
                height={36}
                className="h-9 w-9"
              />
              <div>
                <span className="text-xl font-bold tracking-tight">IntegrateWise</span>
                <p className="text-xs text-muted-foreground">AI Workspace</p>
              </div>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground leading-relaxed">
              The automation infrastructure that connects your tools through one Spine and powers AI-driven workflows.
            </p>
            
            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted/50 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary">
                <Twitter className="h-4 w-4" />
              </Link>
              <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted/50 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary">
                <Github className="h-4 w-4" />
              </Link>
              <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted/50 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary">
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted/50 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary">
                <Mail className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-foreground">Product</h3>
            <ul className="mt-4 space-y-3">
              {[
                { href: "/ai-insights", label: "AI Insights" },
                { href: "/products/ai-loader", label: "AI Loader" },
                { href: "/templates", label: "Templates" },
                { href: "/products/agents", label: "Agents" },
                { href: "/integrations", label: "Integrations" },
                { href: "/pricing", label: "Pricing" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-foreground">Solutions</h3>
            <ul className="mt-4 space-y-3">
              {[
                { href: "/solutions/individuals", label: "Individuals" },
                { href: "/solutions/teams", label: "Teams" },
                { href: "/solutions/business-ops", label: "Business Ops" },
                { href: "/solutions/customer-success", label: "Customer Success" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-foreground">Resources</h3>
            <ul className="mt-4 space-y-3">
              {[
                { href: "/resources/docs", label: "Documentation" },
                { href: "/resources/blog", label: "Blog" },
                { href: "/resources/changelog", label: "Changelog" },
                { href: "/resources/api", label: "API Reference" },
                { href: "/resources/case-studies", label: "Case Studies" },
                { href: "/resources/community", label: "Community" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-foreground">Company</h3>
            <ul className="mt-4 space-y-3">
              {[
                { href: "/company/about", label: "About" },
                { href: "/company/contact", label: "Contact" },
                { href: "/company/careers", label: "Careers" },
                { href: "/services", label: "Services" },
                { href: "/security", label: "Security" },
                { href: "/security/privacy", label: "Privacy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} IntegrateWise. All rights reserved.
          </p>
          <p className="text-sm font-medium text-primary">
            Normalize Once. Render Anywhere.
          </p>
        </div>
      </div>
    </footer>
  )
}
