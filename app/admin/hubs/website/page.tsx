import { Suspense } from "react"
import { getCurrentUser } from "@/lib/admin/auth"
import { cms } from "@/lib/cms"
import { Globe, FileText, ImageIcon, Settings, Plus, Eye, Edit, MoreHorizontal, RefreshCw } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { SearchInput } from "@/components/admin/search-input"

const statusColors = {
  draft: "bg-gray-100 text-gray-700",
  review: "bg-yellow-100 text-yellow-700",
  approved: "bg-blue-100 text-blue-700",
  published: "bg-green-100 text-green-700",
}

export default async function WebsiteHubPage() {
  const user = await getCurrentUser()
  const pages = await cms.getPages()

  const stats = [
    { name: "Total Pages", value: pages.length.toString(), icon: FileText },
    { name: "Published", value: pages.filter((p) => p.status === "published").length.toString(), icon: Globe },
    { name: "In Review", value: pages.filter((p) => p.status === "review").length.toString(), icon: Eye },
    { name: "Drafts", value: pages.filter((p) => p.status === "draft").length.toString(), icon: Edit },
  ]

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-indigo-50">
              <Globe className="h-6 w-6 text-indigo-600" />
            </div>
            <h1 className="text-3xl font-bold text-[#1E2A4A]">Website Hub</h1>
          </div>
          <p className="text-[#6B7280]">Manage pages, SEO, and publishing workflows</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="border-[#E5E7EB] bg-transparent">
            <RefreshCw className="h-4 w-4 mr-2" />
            Revalidate
          </Button>
          <Button asChild className="bg-[#3F51B5] hover:bg-[#303F9F]">
            <Link href="/admin/hubs/website/pages/new">
              <Plus className="h-4 w-4 mr-2" />
              New Page
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
        <Link href="/admin/hubs/website/pages">
          <Card className="border-[#E5E7EB] hover:border-[#3F51B5] hover:shadow-md transition-all cursor-pointer h-full">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-indigo-50">
                <FileText className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1E2A4A]">Pages</h3>
                <p className="text-sm text-[#6B7280]">Manage all website pages</p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="/admin/hubs/website/media">
          <Card className="border-[#E5E7EB] hover:border-[#3F51B5] hover:shadow-md transition-all cursor-pointer h-full">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-pink-50">
                <ImageIcon className="h-6 w-6 text-pink-600" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1E2A4A]">Media</h3>
                <p className="text-sm text-[#6B7280]">Images, banners, and assets</p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="/admin/hubs/website/settings">
          <Card className="border-[#E5E7EB] hover:border-[#3F51B5] hover:shadow-md transition-all cursor-pointer h-full">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-gray-100">
                <Settings className="h-6 w-6 text-gray-600" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1E2A4A]">Settings</h3>
                <p className="text-sm text-[#6B7280]">SEO defaults and config</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Pages List */}
      <Card className="border-[#E5E7EB]">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-[#1E2A4A]">Recent Pages</CardTitle>
              <CardDescription>Latest page updates and drafts</CardDescription>
            </div>
            <Suspense fallback={<div className="w-64 h-10 bg-gray-100 rounded animate-pulse" />}>
              <SearchInput placeholder="Search pages..." />
            </Suspense>
          </div>
        </CardHeader>
        <CardContent>
          {pages.length === 0 ? (
            <div className="text-center py-12">
              <Globe className="h-12 w-12 text-[#9CA3AF] mx-auto mb-4" />
              <h3 className="text-lg font-medium text-[#1E2A4A] mb-2">No pages yet</h3>
              <p className="text-[#6B7280] mb-4">Create your first page to get started</p>
              <Button asChild className="bg-[#3F51B5] hover:bg-[#303F9F]">
                <Link href="/admin/hubs/website/pages/new">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Page
                </Link>
              </Button>
            </div>
          ) : (
            <div className="divide-y divide-[#E5E7EB]">
              {pages.slice(0, 10).map((page) => (
                <div key={page.id} className="py-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-[#F3F4F6] flex items-center justify-center">
                      <FileText className="h-5 w-5 text-[#6B7280]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#1E2A4A]">{page.title}</h4>
                      <p className="text-sm text-[#6B7280]">/{page.slug}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge className={statusColors[page.status]}>{page.status}</Badge>
                    <span className="text-sm text-[#9CA3AF]">
                      {page.publishedAt ? new Date(page.publishedAt).toLocaleDateString() : "Not published"}
                    </span>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/admin/hubs/website/pages/${page.id}/preview`}>
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/admin/hubs/website/pages/${page.id}`}>
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
    </div>
  )
}
