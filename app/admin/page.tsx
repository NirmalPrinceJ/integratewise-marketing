import { getCurrentUser, hasPermission } from "@/lib/admin/auth"
import {
  DollarSign,
  TrendingUp,
  Users,
  FolderKanban,
  Eye,
  MousePointerClick,
  Target,
  Sparkles,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PRIMARY_HUBS } from "@/lib/admin/hub-config"

export default async function AdminDashboard() {
  const user = await getCurrentUser()
  const canWrite = await hasPermission(user, "write")

  // Key metrics per SSOT v3.2
  const keyMetrics = [
    {
      name: "Pipeline",
      value: "$2.4M",
      change: "+12%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      name: "Revenue YTD",
      value: "$1.8M",
      change: "+8%",
      trend: "up",
      icon: TrendingUp,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      name: "MRR",
      value: "$156K",
      change: "+15%",
      trend: "up",
      icon: DollarSign,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      name: "Active Projects",
      value: "24",
      change: "-2",
      trend: "down",
      icon: FolderKanban,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      name: "Page Views",
      value: "48.2K",
      change: "+22%",
      trend: "up",
      icon: Eye,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
    {
      name: "Visitors",
      value: "12.4K",
      change: "+18%",
      trend: "up",
      icon: Users,
      color: "text-teal-600",
      bgColor: "bg-teal-50",
    },
    {
      name: "Conversions",
      value: "342",
      change: "+5%",
      trend: "up",
      icon: MousePointerClick,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
    },
  ]

  // AI Insights per SSOT v3.2
  const aiInsights = [
    {
      insight: "MuleSoft projects driving 60% of revenue",
      category: "Revenue",
      priority: "high",
    },
    {
      insight: "SaaS subscriptions up 15% MoM",
      category: "Growth",
      priority: "high",
    },
    {
      insight: "3 deals at risk of slipping this quarter",
      category: "Pipeline",
      priority: "medium",
    },
    {
      insight: "Blog post 'Effortless Work' has 2.4K views this week",
      category: "Content",
      priority: "low",
    },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1E2A4A]">Dashboard</h1>
        <p className="mt-2 text-[#6B7280]">Welcome back, {user?.name}. Here is your business overview.</p>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 mb-8">
        {keyMetrics.map((metric) => (
          <Card key={metric.name} className="border-[#E5E7EB]">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className={`p-2 rounded-lg ${metric.bgColor}`}>
                  <metric.icon className={`h-4 w-4 ${metric.color}`} />
                </div>
                <div
                  className={`flex items-center text-xs font-medium ${metric.trend === "up" ? "text-green-600" : "text-red-600"}`}
                >
                  {metric.change}
                  {metric.trend === "up" ? (
                    <ArrowUpRight className="h-3 w-3 ml-0.5" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3 ml-0.5" />
                  )}
                </div>
              </div>
              <p className="text-2xl font-bold text-[#1E2A4A]">{metric.value}</p>
              <p className="text-xs text-[#6B7280]">{metric.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3 mb-8">
        {/* AI Insights */}
        <Card className="lg:col-span-2 border-[#E5E7EB]">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-[#3F51B5]" />
              <CardTitle className="text-[#1E2A4A]">Today's AI Insights</CardTitle>
            </div>
            <CardDescription>Intelligent analysis from your data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {aiInsights.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB]">
                  <div
                    className={`h-2 w-2 mt-2 rounded-full ${
                      item.priority === "high"
                        ? "bg-red-500"
                        : item.priority === "medium"
                          ? "bg-yellow-500"
                          : "bg-green-500"
                    }`}
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#1E2A4A]">{item.insight}</p>
                    <p className="text-xs text-[#6B7280] mt-1">{item.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="border-[#E5E7EB]">
          <CardHeader className="pb-3">
            <CardTitle className="text-[#1E2A4A]">Quick Actions</CardTitle>
            <CardDescription>Create and manage content</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {canWrite && (
              <>
                <Button asChild className="w-full justify-start bg-[#3F51B5] hover:bg-[#303F9F]">
                  <Link href="/admin/hubs/content/articles/new">
                    <Target className="h-4 w-4 mr-2" />
                    New Article
                  </Link>
                </Button>
                <Button variant="outline" asChild className="w-full justify-start border-[#E5E7EB] bg-transparent">
                  <Link href="/admin/hubs/website/pages/new">New Page</Link>
                </Button>
                <Button variant="outline" asChild className="w-full justify-start border-[#E5E7EB] bg-transparent">
                  <Link href="/admin/hubs/marketing/campaigns/new">New Campaign</Link>
                </Button>
                <Button variant="outline" asChild className="w-full justify-start border-[#E5E7EB] bg-transparent">
                  <Link href="/admin/hubs/content/case-studies/new">New Case Study</Link>
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Hub Navigation Cards */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-[#1E2A4A] mb-4">Your Hubs</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PRIMARY_HUBS.map((hub) => (
            <Link key={hub.id} href={hub.href}>
              <Card className="border-[#E5E7EB] hover:border-[#3F51B5] hover:shadow-md transition-all cursor-pointer h-full">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg bg-[#F3F4F6]`}>
                      <hub.icon className={`h-5 w-5 ${hub.color}`} />
                    </div>
                    <h3 className="font-semibold text-[#1E2A4A]">{hub.name}</h3>
                  </div>
                  <p className="text-sm text-[#6B7280]">{hub.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <Card className="border-[#E5E7EB]">
        <CardHeader>
          <CardTitle className="text-[#1E2A4A]">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                action: "Published",
                item: "Article",
                title: "Introducing IntegrateWise 2.0",
                hub: "Content",
                time: "2 hours ago",
              },
              {
                action: "Updated",
                item: "Page",
                title: "Homepage hero section",
                hub: "Website",
                time: "5 hours ago",
              },
              {
                action: "Created",
                item: "Campaign",
                title: "Q1 Product Launch",
                hub: "Marketing",
                time: "1 day ago",
              },
              {
                action: "Approved",
                item: "Case Study",
                title: "How Acme Corp Increased Productivity",
                hub: "Content",
                time: "2 days ago",
              },
            ].map((activity, index) => (
              <div key={index} className="flex items-start gap-4 border-b border-[#E5E7EB] pb-4 last:border-0">
                <div className="h-2 w-2 mt-2 rounded-full bg-[#3F51B5]" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#1E2A4A]">
                    {activity.action} {activity.item}
                  </p>
                  <p className="text-sm text-[#6B7280]">{activity.title}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs bg-[#F3F4F6] px-2 py-0.5 rounded text-[#6B7280]">{activity.hub}</span>
                    <span className="text-xs text-[#9CA3AF]">{activity.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
