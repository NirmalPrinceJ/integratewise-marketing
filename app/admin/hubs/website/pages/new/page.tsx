"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Globe, ArrowLeft, Save, Eye, ImageIcon, Sparkles } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import type { ContentStatus } from "@/lib/cms/types"

const templates = [
  { id: "blank", name: "Blank Page", description: "Start from scratch" },
  { id: "landing", name: "Landing Page", description: "Hero, features, CTA" },
  { id: "content", name: "Content Page", description: "Article-style layout" },
  { id: "product", name: "Product Page", description: "Showcase a product" },
]

export default function NewPagePage() {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    templateId: "blank",
    status: "draft" as ContentStatus,
    seoTitle: "",
    seoDescription: "",
    socialImageAssetId: "",
  })

  const handleTitleChange = (title: string) => {
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
    setFormData({ ...formData, title, slug })
  }

  const handleSave = async (status: ContentStatus) => {
    setSaving(true)
    // API call would go here
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setSaving(false)
    router.push("/admin/hubs/website/pages")
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild className="text-[#6B7280]">
            <Link href="/admin/hubs/website">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Link>
          </Button>
          <div>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-indigo-600" />
              <h1 className="text-2xl font-bold text-[#1E2A4A]">New Page</h1>
            </div>
            <p className="text-sm text-[#6B7280]">Create a new website page</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" onClick={() => handleSave("draft")} disabled={saving} className="border-[#E5E7EB]">
            <Save className="h-4 w-4 mr-2" />
            Save Draft
          </Button>
          <Button variant="outline" className="border-[#E5E7EB] bg-transparent">
            <Eye className="h-4 w-4 mr-2" />
            Preview
          </Button>
          <Button onClick={() => handleSave("review")} disabled={saving} className="bg-[#3F51B5] hover:bg-[#303F9F]">
            Submit for Review
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Info */}
          <Card className="border-[#E5E7EB]">
            <CardHeader>
              <CardTitle className="text-[#1E2A4A]">Page Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title" className="text-[#1E2A4A]">
                  Title
                </Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="Enter page title"
                  className="border-[#E5E7EB] mt-1"
                />
              </div>
              <div>
                <Label htmlFor="slug" className="text-[#1E2A4A]">
                  URL Slug
                </Label>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm text-[#6B7280]">integratewise.com/</span>
                  <Input
                    id="slug"
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    placeholder="page-slug"
                    className="border-[#E5E7EB] flex-1"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="template" className="text-[#1E2A4A]">
                  Template
                </Label>
                <Select value={formData.templateId} onValueChange={(v) => setFormData({ ...formData, templateId: v })}>
                  <SelectTrigger className="border-[#E5E7EB] mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {templates.map((t) => (
                      <SelectItem key={t.id} value={t.id}>
                        <div>
                          <p className="font-medium">{t.name}</p>
                          <p className="text-xs text-[#6B7280]">{t.description}</p>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Page Sections */}
          <Card className="border-[#E5E7EB]">
            <CardHeader>
              <CardTitle className="text-[#1E2A4A]">Page Sections</CardTitle>
              <CardDescription>Add and arrange content sections</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-[#E5E7EB] rounded-lg p-12 text-center">
                <p className="text-[#6B7280] mb-4">Drag and drop sections here or click to add</p>
                <Button variant="outline" className="border-[#E5E7EB] bg-transparent">
                  Add Section
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* SEO Panel */}
          <Card className="border-[#E5E7EB]">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-[#1E2A4A]">SEO</CardTitle>
                <Button variant="ghost" size="sm" className="text-[#3F51B5]">
                  <Sparkles className="h-4 w-4 mr-1" />
                  AI Suggest
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="seoTitle" className="text-[#1E2A4A]">
                  SEO Title
                </Label>
                <Input
                  id="seoTitle"
                  value={formData.seoTitle}
                  onChange={(e) => setFormData({ ...formData, seoTitle: e.target.value })}
                  placeholder="Page title for search engines"
                  className="border-[#E5E7EB] mt-1"
                />
                <p className="text-xs text-[#9CA3AF] mt-1">{formData.seoTitle.length}/60 characters</p>
              </div>
              <div>
                <Label htmlFor="seoDescription" className="text-[#1E2A4A]">
                  Meta Description
                </Label>
                <Textarea
                  id="seoDescription"
                  value={formData.seoDescription}
                  onChange={(e) => setFormData({ ...formData, seoDescription: e.target.value })}
                  placeholder="Brief description for search results"
                  className="border-[#E5E7EB] mt-1"
                  rows={3}
                />
                <p className="text-xs text-[#9CA3AF] mt-1">{formData.seoDescription.length}/160 characters</p>
              </div>
            </CardContent>
          </Card>

          {/* Social Image */}
          <Card className="border-[#E5E7EB]">
            <CardHeader>
              <CardTitle className="text-[#1E2A4A]">Social Image</CardTitle>
              <CardDescription>Image shown when shared on social media</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-[#E5E7EB] rounded-lg p-6 text-center">
                <ImageIcon className="h-8 w-8 text-[#9CA3AF] mx-auto mb-2" />
                <p className="text-sm text-[#6B7280] mb-2">1200 x 630px recommended</p>
                <Button variant="outline" size="sm" className="border-[#E5E7EB] bg-transparent">
                  Choose Image
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Publish Panel */}
          <Card className="border-[#E5E7EB]">
            <CardHeader>
              <CardTitle className="text-[#1E2A4A]">Publish</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-[#1E2A4A]">Status</Label>
                <Select
                  value={formData.status}
                  onValueChange={(v) => setFormData({ ...formData, status: v as ContentStatus })}
                >
                  <SelectTrigger className="border-[#E5E7EB] mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="review">In Review</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="pt-4 border-t border-[#E5E7EB]">
                <p className="text-xs text-[#6B7280] mb-2">
                  Publishing requires an approved render run for compliance.
                </p>
                <Button className="w-full bg-[#3F51B5] hover:bg-[#303F9F]" disabled>
                  Publish (Requires Approval)
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
