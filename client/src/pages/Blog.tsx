import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "wouter";

export default function Blog() {
  const posts = [
    {
      id: "why-ai-adoption-failing",
      title: "Why AI Adoption Is Failing",
      excerpt: "80% of AI adopters quietly demoted AI to low-stakes tasks. It's not a capability problem. It's a continuity problem.",
      date: "Jun 15, 2026",
      category: "Thought Leadership"
    },
    {
      id: "the-memory-problem",
      title: "The Memory Problem: Why AI Forgets Your Context",
      excerpt: "Every conversation starts blank. Every session loses what you taught it. That's not AI. That's extra work.",
      date: "Jun 1, 2026",
      category: "Product"
    },
    {
      id: "continuity-over-capability",
      title: "Continuity Over Capability: A New AI Operating Model",
      excerpt: "Raw intelligence matters less than continuous context. Here's what changes when you build for memory instead of models.",
      date: "May 20, 2026",
      category: "Strategy"
    },
    {
      id: "building-your-adaptive-spine",
      title: "Building Your Adaptive Spine: Institutional Memory Architecture",
      excerpt: "How to structure your business knowledge so that AI can reason over it, teams can learn from it, and decisions can compound.",
      date: "May 5, 2026",
      category: "Guide"
    },
    {
      id: "governance-first",
      title: "Governance First: Why Your AI Needs Governance Gates",
      excerpt: "You cannot scale AI safely without human oversight. Here's how to build governance that enables instead of blocks.",
      date: "Apr 28, 2026",
      category: "Best Practices"
    },
    {
      id: "memory-as-moat",
      title: "Memory as Moat: Why Your Data Context Cannot Be Commoditized",
      excerpt: "While models are rented, your business context is owned. That's not just an advantage — it's your competitive defense.",
      date: "Apr 15, 2026",
      category: "Positioning"
    }
  ];

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* ─── NAVIGATION ─────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/92 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between py-4 px-6 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2 hover:opacity-75 transition-opacity">
            <div className="w-8 h-8 rounded bg-forest flex items-center justify-center">
              <span className="text-paper font-bold text-sm">IW</span>
            </div>
            <span className="font-semibold text-forest hidden sm:inline">IntegrateWise</span>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="/solutions" className="hover:text-foreground transition-colors">Solutions</Link>
            <Link href="/platform" className="hover:text-foreground transition-colors">Platform</Link>
            <Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link>
          </div>

          <a
            href="mailto:hello@integratewise.ai"
            className="px-4 py-2 rounded bg-forest text-paper font-medium text-sm hover:bg-forest-deep transition-colors"
          >
            Apply for Pilot
          </a>
        </div>
      </nav>

      {/* ─── HERO ──────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-4">Blog</p>
          <h1 className="text-5xl md:text-6xl font-bold text-forest mb-8 leading-tight">
            Thoughts on continuity, memory, and the future of AI.
          </h1>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
            We write about why AI adoption is failing, how to build for memory instead of capability, and why continuity matters more than intelligence.
          </p>
        </div>
      </section>

      {/* ─── BLOG POSTS ────────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-paper-warm">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {posts.map((post) => (
              <div key={post.id} className="bg-paper border border-border rounded-xl p-8 hover:border-gold transition-colors">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <p className="text-xs font-mono text-gold uppercase mb-2">{post.category}</p>
                    <h3 className="text-2xl font-bold text-forest">{post.title}</h3>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <a
                    href="#"
                    className="text-gold font-semibold text-sm hover:text-gold/80 transition-colors inline-flex items-center gap-1"
                  >
                    Read more <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ───────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-forest text-paper text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Stay updated on the future of work.
          </h2>
          <p className="text-lg text-paper/75 mb-10 leading-relaxed">
            Subscribe to our newsletter for the latest thoughts on AI, memory, and continuity.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 rounded bg-white/10 border border-white/20 text-paper placeholder:text-paper/50 focus:outline-none focus:border-gold"
            />
            <button className="px-6 py-3 rounded bg-gold text-forest font-semibold hover:bg-gold/90 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>

          <p className="text-sm text-paper/40 mt-6">
            We respect your inbox. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* ─── FOOTER ────────────────────────────────────────────────────── */}
      <footer className="bg-forest-deep text-paper border-t border-paper/10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded bg-gold/20 flex items-center justify-center">
                <span className="text-gold font-bold text-sm">IW</span>
              </div>
              <span className="font-bold text-paper text-lg">IntegrateWise</span>
            </div>
            <p className="text-sm text-paper/50 max-w-md leading-relaxed">
              Continuity + Silent Twin + Governance + Sync.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h4 className="font-bold mb-4 text-paper">Product</h4>
              <ul className="space-y-2 text-sm text-paper/60">
                <li><Link href="/solutions" className="hover:text-paper transition-colors">Solutions</Link></li>
                <li><Link href="/platform" className="hover:text-paper transition-colors">Platform</Link></li>
                <li><Link href="/pricing" className="hover:text-paper transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-paper">Company</h4>
              <ul className="space-y-2 text-sm text-paper/60">
                <li><Link href="/" className="hover:text-paper transition-colors">Home</Link></li>
                <li><Link href="/company" className="hover:text-paper transition-colors">About</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-paper">Legal</h4>
              <ul className="space-y-2 text-sm text-paper/60">
                <li><a href="#" className="hover:text-paper transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-paper transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-paper/10 pt-8">
            <p className="text-sm text-paper/40">© 2026 IntegrateWise LLP. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
