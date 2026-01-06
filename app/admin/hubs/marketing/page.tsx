import { getCurrentUser } from "@/lib/admin/auth"
import { cms } from "@/lib/cms"
import {
  Megaphone,
  Target,
  TrendingUp,
  Eye,
  MousePointerClick,
  Users,
  DollarSign,
  Plus,
  Edit,
  MoreHorizontal,
  Calendar,
  ImageIcon,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

const statusColors = {
  draft: "bg-gray-100 text-gray-700",
  review: "bg-yellow-100 text-yellow-700",
  approved: "bg-blue-100 text-blue-700",
  published: "bg-green-100 text-green-700",
}

export default async function MarketingHubPage() {
  const user = await getCurrentUser()
  const campaigns = await cms.getCampaigns()

  // Demo KPIs
  const kpis = {
    totalViews: 124500,
    totalClicks: 8420,
    totalLeads: 342,
    totalRevenue: 28500,
  }

  const stats = [
    { name: "Total Views", value: kpis.totalViews.toLocaleString(), icon: Eye, color: "text-blue-600" },
    {
      name: "Total Clicks",
      value: kpis.totalClicks.toLocaleString(),
      icon: MousePointerClick,
      color: "text-green-600",
    },
    { name: "Leads Generated", value: kpis.totalLeads.toString(), icon: Users, color: "text-purple-600" },
    {
      name: "Revenue Attributed",
      value: `$${(kpis.totalRevenue / 1000).toFixed(1)}K`,
      icon: DollarSign,
      color: "text-orange-600",
    },
  ]

  // Demo campaigns data
  const demoCampaigns = [
    {
      id: "1",
      title: "Q1 Product Launch",
      status: "published" as const,
      objective: "Drive awareness for IntegrateWise 2.0",
      startDate: "2024-01-15",
      endDate: "2024-03-31",
      channels: ["Email", "LinkedIn", "Google Ads"],
      kpis: { views: 45000, clicks: 3200, leads: 156, revenue: 12000 },
      progress: 75,
    },
    {
      id: "2",
      title: "Webinar Series - AI in CS",
      status: "published" as const,
      objective: "Generate qualified leads through educational content",
      startDate: "2024-02-01",
      endDate: "2024-04-30",
      channels: ["Email", "LinkedIn", "YouTube"],
      kpis: { views: 28000, clicks: 2100, leads: 98, revenue: 8500 },
      progress: 60,
    },
    {
      id: "3",
      title: "Partner Co-marketing - MuleSoft",
      status: "review" as const,
      objective: "Joint campaign with MuleSoft integration",
      startDate: "2024-03-01",
      endDate: "2024-05-31",
      channels: ["Email", "Events", "Content"],
      kpis: { views: 0, clicks: 0, leads: 0, revenue: 0 },
      progress: 25,
    },
  ]

  const displayCampaigns = campaigns.length > 0 ? campaigns : demoCampaigns

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-purple-50">
              <Megaphone className="h-6 w-6 text-purple-600" />
            </div>
            <h1 className="text-3xl font-bold text-[#1E2A4A]">Marketing Hub</h1>
          </div>
          <p className="text-[#6B7280]">Manage campaigns, track performance, and optimize conversions</p>
        </div>
        <Button asChild className="bg-[#3F51B5] hover:bg-[#303F9F]">
          <Link href="/admin/hubs/marketing/campaigns/new">
            <Plus className="h-4 w-4 mr-2" />
            New Campaign
          </Link>
        </Button>
      </div>

      {/* KPI Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat) => (
          <Card key={stat.name} className="border-[#E5E7EB]">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-[#1E2A4A]">{stat.value}</p>
                  <p className="text-sm text-[#6B7280]">{stat.name}</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Links */}
      <div className="grid gap-4 sm:grid-cols-3 mb-8">
        <Link href="/admin/hubs/marketing/campaigns">
          <Card className="border-[#E5E7EB] hover:border-[#3F51B5] hover:shadow-md transition-all cursor-pointer h-full">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-purple-50">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1E2A4A]">Campaigns</h3>
                <p className="text-sm text-[#6B7280]">Manage all marketing campaigns</p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="/admin/hubs/marketing/analytics">
          <Card className="border-[#E5E7EB] hover:border-[#3F51B5] hover:shadow-md transition-all cursor-pointer h-full">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-blue-50">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1E2A4A]">Analytics</h3>
                <p className="text-sm text-[#6B7280]">Performance and attribution</p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="/admin/hubs/marketing/assets">
          <Card className="border-[#E5E7EB] hover:border-[#3F51B5] hover:shadow-md transition-all cursor-pointer h-full">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-pink-50">
                <ImageIcon className="h-6 w-6 text-pink-600" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1E2A4A]">Creative Assets</h3>
                <p className="text-sm text-[#6B7280]">Images, videos, and ads</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Campaigns List */}
      <Card className="border-[#E5E7EB]">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-[#1E2A4A]">Active Campaigns</CardTitle>
              <CardDescription>Track progress and performance</CardDescription>
            </div>
            <Button asChild variant="outline" size="sm" className="border-[#E5E7EB] bg-transparent">
              <Link href="/admin/hubs/marketing/campaigns">View All</Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {displayCampaigns.map((campaign: any) => (
              <div key={campaign.id} className="border border-[#E5E7EB] rounded-lg p-4">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-[#1E2A4A]">{campaign.title}</h4>
                      <Badge className={statusColors[campaign.status as keyof typeof statusColors]}>
                        {campaign.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-[#6B7280]">{campaign.objective}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/admin/hubs/marketing/campaigns/${campaign.id}`}>
                        <Edit className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Campaign Details */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-[#9CA3AF]" />
                    <span className="text-[#6B7280]">
                      {new Date(campaign.startDate).toLocaleDateString()} -{" "}
                      {campaign.endDate ? new Date(campaign.endDate).toLocaleDateString() : "Ongoing"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {campaign.channels?.map((channel: string) => (
                      <Badge key={channel} variant="outline" className="text-xs">
                        {channel}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* KPIs */}
                <div className="grid gap-4 sm:grid-cols-4 mb-4">
                  <div className="bg-[#F9FAFB] rounded-lg p-3">
                    <p className="text-xs text-[#6B7280]">Views</p>
                    <p className="text-lg font-semibold text-[#1E2A4A]">
                      {campaign.kpis?.views?.toLocaleString() || 0}
                    </p>
                  </div>
                  <div className="bg-[#F9FAFB] rounded-lg p-3">
                    <p className="text-xs text-[#6B7280]">Clicks</p>
                    <p className="text-lg font-semibold text-[#1E2A4A]">
                      {campaign.kpis?.clicks?.toLocaleString() || 0}
                    </p>
                  </div>
                  <div className="bg-[#F9FAFB] rounded-lg p-3">
                    <p className="text-xs text-[#6B7280]">Leads</p>
                    <p className="text-lg font-semibold text-[#1E2A4A]">{campaign.kpis?.leads || 0}</p>
                  </div>
                  <div className="bg-[#F9FAFB] rounded-lg p-3">
                    <p className="text-xs text-[#6B7280]">Revenue</p>
                    <p className="text-lg font-semibold text-[#1E2A4A]">
                      ${campaign.kpis?.revenue?.toLocaleString() || 0}
                    </p>
                  </div>
                </div>

                {/* Progress */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-[#6B7280]">Campaign Progress</span>
                    <span className="text-xs font-medium text-[#1E2A4A]">{campaign.progress}%</span>
                  </div>
                  <Progress value={campaign.progress} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
