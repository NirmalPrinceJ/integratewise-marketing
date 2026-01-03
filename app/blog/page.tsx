// Blog index page - SSOT v3.2
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CloudinaryImage } from "@/components/media/CloudinaryImage"
import { getCollection } from "@/lib/cms/data-loaders"
import type { Article } from "@/lib/cms/types"
import Link from "next/link"
import { ArrowRight, Clock, User, FileText } from "lucide-react"

export const revalidate = 60

export const metadata = {
  title: "Blog | IntegrateWise",
  description:
    "Insights, tutorials, and updates from the IntegrateWise team on AI, productivity, and workflow automation.",
}

export default async function BlogPage() {
  const articles = await getCollection<Article>("articles", { status: "published" })

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 px-4 bg-[#F3F4F6]">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1E2A4A] mb-6">IntegrateWise Blog</h1>
            <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
              Insights on AI-powered productivity, workflow automation, and building the future of work.
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            {articles.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                  <Link
                    key={article.id}
                    href={`/blog/${article.slug}`}
                    className="group bg-white border border-[#E5E7EB] rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    {article.coverAssetId ? (
                      <CloudinaryImage
                        publicId={article.coverAssetId}
                        alt={article.title}
                        preset="card"
                        className="w-full h-48 object-cover"
                      />
                    ) : (
                      <div className="w-full h-48 bg-[#F3F4F6] flex items-center justify-center">
                        <FileText className="w-12 h-12 text-[#9CA3AF]" />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-[#64748B] mb-3">
                        {article.authors?.[0] && (
                          <span className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {article.authors[0].name}
                          </span>
                        )}
                        {article.readTime && (
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.readTime} min read
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-[#1E2A4A] mb-3 group-hover:text-[#3F51B5] transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-[#64748B] mb-4 line-clamp-2">{article.summary}</p>
                      {article.tags && article.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {article.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-[#F3F4F6] text-xs text-[#64748B] rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <span className="inline-flex items-center text-[#3F51B5] font-medium group-hover:gap-2 transition-all">
                        Read article <ArrowRight className="w-4 h-4 ml-1" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <FileText className="w-16 h-16 text-[#9CA3AF] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#1E2A4A] mb-2">Blog posts coming soon</h3>
                <p className="text-[#64748B]">We're working on great content. Check back soon!</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 px-4 bg-[#1E2A4A]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay updated</h2>
            <p className="text-[#C7CBD6] mb-8 max-w-2xl mx-auto">
              Get the latest insights on AI productivity and workflow automation delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-[#3F51B5]"
              />
              <button className="px-6 py-3 bg-[#3F51B5] text-white font-medium rounded-lg hover:bg-[#303F9F] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
