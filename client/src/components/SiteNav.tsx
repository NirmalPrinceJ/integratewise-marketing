import { Link } from "wouter";

export default function SiteNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/92 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between py-3 px-6 max-w-7xl mx-auto">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 hover:opacity-75 transition-opacity">
          <div className="w-8 h-8 rounded bg-forest flex items-center justify-center">
            <span className="text-paper font-bold text-sm">IW</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-semibold text-forest block leading-tight">IntegrateWise</span>
            <span className="text-[10px] text-muted-foreground tracking-wide">Operational Continuity. Governed Intelligence.</span>
          </div>
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link href="/platform" className="hover:text-foreground transition-colors">Platform</Link>
          <Link href="/solutions" className="hover:text-foreground transition-colors">Workbenches</Link>
          <Link href="/capabilities" className="hover:text-foreground transition-colors">Capabilities</Link>
          <Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link>
          <Link href="/company" className="hover:text-foreground transition-colors">Company</Link>
        </div>

        {/* CTA */}
        <a
          href="mailto:hello@integratewise.ai"
          className="px-4 py-2 rounded bg-forest text-paper font-medium text-sm hover:bg-forest-deep transition-colors"
        >
          Start Free
        </a>
      </div>
    </nav>
  );
}
