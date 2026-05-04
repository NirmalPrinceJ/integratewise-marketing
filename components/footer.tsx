import Link from "next/link"
import { navItems } from "@/lib/nav"

export function Footer() {
  // Mirror the header: one column per top-level nav section.
  // For sections without sub-items (e.g. Pricing) we render the section as a single link.
  return (
    <footer className="bg-bg-secondary/50 border-t border-white/5">
      {/* Closing Strip */}
      <div className="border-b border-white/5 py-12">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 bg-gold/8 border border-gold/15 rounded-full px-5 py-2 mb-6">
            <i className="fa-solid fa-brain text-gold text-xs"></i>
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">Our Belief</span>
          </div>
          <p className="text-2xl text-text-primary font-semibold mb-4 leading-snug">
            Stop being the human API between your tools.
          </p>
          <p className="text-text-secondary leading-relaxed text-balance">
            The Spine turns scattered data into Digital Memory. Your Twin reasons in the Workspace and waits for your Approval before anything ships.{" "}
            <span className="text-gold font-medium">Truth you own, AI you rent, approvals in between.</span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 lg:gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <img
                src="/images/logo.png"
                alt="IntegrateWise"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-text-dim text-sm leading-relaxed mb-6">
              Truth you own. AI you rent. Approval in between.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-text-dim hover:text-gold transition-colors">
                <i className="fab fa-twitter text-lg" aria-hidden="true"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-text-dim hover:text-gold transition-colors">
                <i className="fab fa-linkedin text-lg" aria-hidden="true"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-text-dim hover:text-gold transition-colors">
                <i className="fab fa-github text-lg" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          {/* Columns mirrored from header navItems */}
          {navItems.map((section) => (
            <div key={section.label}>
              <h4 className="text-text-primary font-semibold mb-6 text-sm uppercase tracking-wider">
                <Link href={section.href} className="hover:text-gold transition-colors">
                  {section.label}
                </Link>
              </h4>
              {section.items && section.items.length > 0 ? (
                <ul className="space-y-3">
                  {section.items.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group relative text-text-dim hover:text-text-primary text-sm transition-colors inline-block"
                      >
                        {link.label}
                        <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>

        {/* Legal & Bottom */}
        <div className="border-t border-white/5 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
            <div>
              <p className="text-text-dim text-sm mb-4 font-medium">Status & Support</p>
              <div className="flex flex-wrap gap-6 text-sm">
                <Link href="/status" className="text-text-dim hover:text-text-primary transition-colors">
                  System Status
                </Link>
                <a href="mailto:support@integratewise.com" className="text-text-dim hover:text-text-primary transition-colors">
                  Support
                </a>
                <Link href="/security" className="text-text-dim hover:text-text-primary transition-colors">
                  Security
                </Link>
              </div>
            </div>
            <div>
              <p className="text-text-dim text-sm mb-4 font-medium">Legal</p>
              <div className="flex flex-wrap gap-6 text-sm">
                <Link href="/privacy" className="text-text-dim hover:text-text-primary transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-text-dim hover:text-text-primary transition-colors">
                  Terms of Service
                </Link>
                <Link href="/dpa" className="text-text-dim hover:text-text-primary transition-colors">
                  Data Processing Agreement
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-dim text-xs">
              &copy; {new Date().getFullYear()} IntegrateWise, Inc. All rights reserved.
            </p>
            <p className="text-text-dim text-xs">
              Made with <span className="text-gold">❤️</span> in San Francisco
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
