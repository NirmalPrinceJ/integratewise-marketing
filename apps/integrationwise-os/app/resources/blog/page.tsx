import Link from "next/link"
import { ArrowRight, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function BlogPage() {
  const categories = [
    "All Posts",
    "Productivity OS",
    "Second Brain",
    "Integrations",
    "Architecture",
    "Automation & Agents",
    "Render",
    "Customer Success",
    "Security",
  ]

  const posts = [
    {
      title: "Effortless Work: Why Modern Tools Make Work Harder (and How to Fix It)",
      excerpt:
        "Modern work isn't hard because people aren't capable. It's hard because we're constantly fighting our tools. Here's how to break free from tool chaos.",
      author: "IntegrateWise Team",
      date: "Jan 15, 2025",
      category: "Productivity OS",
      slug: "effortless-work-why-tools-make-work-harder",
    },
    {
      title: 'The Productivity OS: What It Is and Why "Another Tool" Won\'t Help',
      excerpt:
        "You don't need another app. You need a layer that connects what you already use. Learn what a Productivity OS really means.",
      author: "Sarah Chen",
      date: "Jan 12, 2025",
      category: "Productivity OS",
      slug: "productivity-os-what-it-is",
    },
    {
      title: "Second Brain for AI Conversations: Stop Losing Your Best Thinking",
      excerpt:
        "Your best ideas happen in AI chats with ChatGPT, Claude, and Gemini. But they disappear when the conversation ends. Here's how to capture and compound your thinking.",
      author: "Michael Torres",
      date: "Jan 10, 2025",
      category: "Second Brain",
      slug: "second-brain-ai-conversations",
    },
    {
      title: "Render Only vs Full Integration: How to Choose the Safest AI Setup",
      excerpt:
        "Two modes. One platform. Learn which setup protects your data while giving you the insights and automation you need.",
      author: "Emily Rodriguez",
      date: "Jan 8, 2025",
      category: "Security",
      slug: "render-only-vs-full-integration",
    },
    {
      title: "AI Loader: Turning Messy Notes into Structured Workflows in One Click",
      excerpt:
        "Paste your meeting notes, project plans, or brainstorming dumps. AI Loader converts them into structured, actionable workflows instantly.",
      author: "David Kim",
      date: "Jan 5, 2025",
      category: "Automation & Agents",
      slug: "ai-loader-messy-notes-to-workflows",
    },
    {
      title: "Spine + Hub Explained: The Architecture Behind Calm, Connected Work",
      excerpt:
        "How IntegrateWise uses two foundational layers—Spine for structure and Hub for control—to connect your tools without chaos.",
      author: "Alex Johnson",
      date: "Jan 3, 2025",
      category: "Architecture",
      slug: "spine-hub-architecture-explained",
    },
    {
      title: "How Webhooks Turn Your Workflow into a Real-Time System (No More Manual Sync)",
      excerpt:
        "Stop copying and pasting between tools. Learn how webhooks stream events in real time to keep everything connected automatically.",
      author: "Jordan Lee",
      date: "Dec 30, 2024",
      category: "Integrations",
      slug: "webhooks-real-time-workflow",
    },
    {
      title: "Why Context Matters More Than Automation (and How Agents Actually Help)",
      excerpt:
        "Automation without context creates chaos. Learn how AI agents use your unified data to make intelligent decisions—not just execute blind scripts.",
      author: "Priya Patel",
      date: "Dec 27, 2024",
      category: "Automation & Agents",
      slug: "context-matters-more-than-automation",
    },
    {
      title: "Customer Success as a Lens: Health, ARR, Churn & Technical Health Without New Tools",
      excerpt:
        "CS teams don't need another platform. They need a lens that unifies what they already have. Explore the CS Intelligence Suite.",
      author: "Marcus Williams",
      date: "Dec 23, 2024",
      category: "Customer Success",
      slug: "customer-success-lens-explained",
    },
    {
      title: "BYOM (Bring Your Own Model): How to Use Your Preferred AI Without Losing Shared Intelligence",
      excerpt:
        "Want to use your own AI model? Learn how BYOM lets you connect commercial or self-hosted models while keeping your team's shared context intact.",
      author: "Nina Sharma",
      date: "Dec 20, 2024",
      category: "Architecture",
      slug: "byom-bring-your-own-model",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-background to-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">The Effortless Work Journal</h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Ideas, playbooks, and product updates—about productivity, tools, AI thinking, and workflow design.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="border-b border-border bg-muted/20 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category, idx) => (
              <Button key={category} variant={idx === 0 ? "outline" : "ghost"} size="sm">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.slug} className="flex flex-col border-border transition-colors hover:border-primary">
                <CardContent className="flex flex-1 flex-col p-6">
                  <div className="mb-4 inline-block w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {post.category}
                  </div>
                  <h3 className="text-balance text-xl font-bold leading-tight">
                    <Link href={`/resources/blog/${post.slug}`} className="hover:text-primary">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 flex items-center gap-4 border-t border-border pt-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <Link
                    href={`/resources/blog/${post.slug}`}
                    className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Read article <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="border-t border-border bg-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Stay Updated</h2>
            <p className="mt-4 text-muted-foreground">
              Subscribe to get the latest insights on effortless work, productivity patterns, and product updates
              delivered to your inbox.
            </p>
            <div className="mt-8 flex max-w-md flex-col gap-3 sm:mx-auto sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button>
                Subscribe <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">No spam. Unsubscribe anytime. We respect your privacy.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
