import { getCurrentUser } from "@/lib/admin/auth"
import { cms } from "@/lib/cms"
import { FileText, BookOpen, ImageIcon, Plus, Eye, Edit, MoreHorizontal, Search, Filter, Briefcase } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const statusColors = {
  draft: "bg-gray-100 text-gray-700",
  review: "bg-yellow-100 text-yellow-700",
  approved: "bg-blue-100 text-blue-700",
  published: "bg-green-100 text-green-700",
}

export default async function ContentHubPage() {
  const user = await getCurrentUser()
  const articles = await cms.getArticles({ hub: "content" })
  const caseStudies = await cms.getCaseStudies()

  const stats = [
    { name: "Articles", value: articles.length.toString(), icon: FileText },
    { name: "Case Studies", value: caseStudies.length.toString(), icon: Briefcase },
    { name: "Published", value: articles.filter((a) => a.status === "published").length.toString(), icon: BookOpen },
    { name: "In Review", value: articles.filter((a) => a.status === "review").length.toString(), icon: Eye },
  ]

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-pink-50">
              <FileText className="h-6 w-6 text-pink-600" />
            </div>
            <h1 className="text-3xl font-bold text-[#1E2A4A]">Content Hub</h1>
          </div>
          <p className="text-[#6B7280]">Manage articles, case studies, and media assets</p>
        </div>
        <div className="flex items-center gap-3">
          <Button asChild className="bg-[#3F51B5] hover:bg-[#303F9F]">
            <Link href="/admin/hubs/content/articles/new">
              <Plus className="h-4 w-4 mr-2" />
              New Article
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat) => (
          <Card key={stat.name} className="border-[#E5E7EB]">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-[#1E2A4A]">{stat.value}</p>
                  <p className="text-sm text-[#6B7280]">{stat.name}</p>
                </div>
                <stat.icon className="h-8 w-8 text-[#9CA3AF]" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Links */}
      <div className="grid gap-4 sm:grid-cols-3 mb-8">
        <Link href="/admin/hubs/content/articles">
          <Card className="border-[#E5E7EB] hover:border-[#3F51B5] hover:shadow-md transition-all cursor-pointer h-full">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-pink-50">
                <FileText className="h-6 w-6 text-pink-600" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1E2A4A]">Articles</h3>
                <p className="text-sm text-[#6B7280]">Blog posts and updates</p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="/admin/hubs/content/case-studies">
          <Card className="border-[#E5E7EB] hover:border-[#3F51B5] hover:shadow-md transition-all cursor-pointer h-full">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-purple-50">
                <Briefcase className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1E2A4A]">Case Studies</h3>
                <p className="text-sm text-[#6B7280]">Customer success stories</p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="/admin/hubs/content/assets">
          <Card className="border-[#E5E7EB] hover:border-[#3F51B5] hover:shadow-md transition-all cursor-pointer h-full">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-teal-50">
                <ImageIcon className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1E2A4A]">Asset Manager</h3>
                <p className="text-sm text-[#6B7280]">Images and media files</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Recent Articles */}
      <Card className="border-[#E5E7EB] mb-8">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-[#1E2A4A]">Recent Articles</CardTitle>
              <CardDescription>Latest content updates</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#9CA3AF]" />
                <Input placeholder="Search..." className="pl-9 w-48 border-[#E5E7EB]" />
              </div>
              <Button variant="outline" size="sm" className="border-[#E5E7EB] bg-transparent">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {articles.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="h-12 w-12 text-[#9CA3AF] mx-auto mb-4" />
              <h3 className="text-lg font-medium text-[#1E2A4A] mb-2">No articles yet</h3>
              <p className="text-[#6B7280] mb-4">Create your first article to get started</p>
              <Button asChild className="bg-[#3F51B5] hover:bg-[#303F9F]">
                <Link href="/admin/hubs/content/articles/new">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Article
                </Link>
              </Button>
            </div>
          ) : (
            <div className="divide-y divide-[#E5E7EB]">
              {articles.slice(0, 5).map((article) => (
                <div key={article.id} className="py-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-[#F3F4F6] flex items-center justify-center">
                      <FileText className="h-5 w-5 text-[#6B7280]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#1E2A4A]">{article.title}</h4>
                      <p className="text-sm text-[#6B7280]">
                        {article.authors?.[0]?.name || "Unknown"} - {article.readTime || 5} min read
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge className={statusColors[article.status]}>{article.status}</Badge>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/admin/hubs/content/articles/${article.id}`}>
                          <Edit className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Recent Case Studies */}
      <Card className="border-[#E5E7EB]">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-[#1E2A4A]">Recent Case Studies</CardTitle>
              <CardDescription>Customer success stories</CardDescription>
            </div>
            <Button asChild variant="outline" size="sm" className="border-[#E5E7EB] bg-transparent">
              <Link href="/admin/hubs/content/case-studies/new">
                <Plus className="h-4 w-4 mr-2" />
                New Case Study
              </Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {caseStudies.length === 0 ? (
            <div className="text-center py-8">
              <Briefcase className="h-10 w-10 text-[#9CA3AF] mx-auto mb-3" />
              <p className="text-[#6B7280]">No case studies yet</p>
            </div>
          ) : (
            <div className="divide-y divide-[#E5E7EB]">
              {caseStudies.slice(0, 3).map((study) => (
                <div key={study.id} className="py-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-[#1E2A4A]">{study.title}</h4>
                    <p className="text-sm text-[#6B7280]">{study.company || study.clientName}</p>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/admin/hubs/content/case-studies/${study.id}`}>
                      <Edit className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
