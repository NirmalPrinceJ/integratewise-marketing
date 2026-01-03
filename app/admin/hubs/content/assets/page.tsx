"use client"

import type React from "react"

import { useState, useEffect } from "react"
import {
  ImageIcon,
  Upload,
  Search,
  Grid3X3,
  List,
  Trash2,
  Copy,
  MoreHorizontal,
  AlertCircle,
  CheckCircle,
  FolderOpen,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import type { Media, HubType } from "@/lib/cms/types"

const folders = [
  { id: "content/hero", name: "Hero Images", hub: "content" as HubType },
  { id: "content/thumbnails", name: "Thumbnails", hub: "content" as HubType },
  { id: "website/banners", name: "Website Banners", hub: "website" as HubType },
  { id: "marketing/thumbnails", name: "Marketing", hub: "marketing" as HubType },
]

export default function AssetManagerPage() {
  const [view, setView] = useState<"grid" | "list">("grid")
  const [assets, setAssets] = useState<Media[]>([])
  const [selectedFolder, setSelectedFolder] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [uploadOpen, setUploadOpen] = useState(false)
  const [uploadData, setUploadData] = useState({
    hub: "content" as HubType,
    type: "hero",
    slug: "",
    altText: "",
    license: "",
    credit: "",
  })

  // Fetch assets
  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const params = new URLSearchParams()
        if (selectedFolder !== "all") {
          const folder = folders.find((f) => f.id === selectedFolder)
          if (folder) {
            params.set("hub", folder.hub)
            params.set("type", folder.id.split("/")[1])
          }
        }
        const res = await fetch(`/api/media?${params.toString()}`)
        const data = await res.json()
        setAssets(data.assets || [])
      } catch (error) {
        console.error("Failed to fetch assets:", error)
      }
    }
    fetchAssets()
  }, [selectedFolder])

  const filteredAssets = assets.filter((asset) => asset.altText?.toLowerCase().includes(searchQuery.toLowerCase()))

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const fileInput = form.querySelector('input[type="file"]') as HTMLInputElement
    const file = fileInput?.files?.[0]
    if (!file) return

    const formData = new FormData()
    formData.append("file", file)
    formData.append("hub", uploadData.hub)
    formData.append("type", uploadData.type)
    formData.append("slug", uploadData.slug)
    formData.append("altText", uploadData.altText)
    formData.append("license", uploadData.license)
    formData.append("credit", uploadData.credit)

    try {
      const res = await fetch("/api/media/upload", {
        method: "POST",
        body: formData,
      })
      if (res.ok) {
        setUploadOpen(false)
        // Refresh assets
        const updated = await fetch("/api/media")
        const data = await updated.json()
        setAssets(data.assets || [])
      }
    } catch (error) {
      console.error("Upload failed:", error)
    }
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-teal-50">
              <ImageIcon className="h-6 w-6 text-teal-600" />
            </div>
            <h1 className="text-3xl font-bold text-[#1E2A4A]">Asset Manager</h1>
          </div>
          <p className="text-[#6B7280]">Manage images and media files with Cloudinary</p>
        </div>
        <Dialog open={uploadOpen} onOpenChange={setUploadOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[#3F51B5] hover:bg-[#303F9F]">
              <Upload className="h-4 w-4 mr-2" />
              Upload Asset
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Upload New Asset</DialogTitle>
              <DialogDescription>All fields marked with * are required for compliance.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleUpload} className="space-y-4">
              <div>
                <Label>File *</Label>
                <Input type="file" accept="image/*,video/*" className="mt-1" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Hub *</Label>
                  <Select
                    value={uploadData.hub}
                    onValueChange={(v) => setUploadData({ ...uploadData, hub: v as HubType })}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="content">Content</SelectItem>
                      <SelectItem value="website">Website</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Type *</Label>
                  <Select value={uploadData.type} onValueChange={(v) => setUploadData({ ...uploadData, type: v })}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hero">Hero</SelectItem>
                      <SelectItem value="thumbnails">Thumbnails</SelectItem>
                      <SelectItem value="banners">Banners</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label>Slug / Identifier *</Label>
                <Input
                  value={uploadData.slug}
                  onChange={(e) => setUploadData({ ...uploadData, slug: e.target.value })}
                  placeholder="e.g., homepage-hero"
                  className="mt-1"
                  required
                />
              </div>
              <div>
                <Label>Alt Text * (Accessibility)</Label>
                <Input
                  value={uploadData.altText}
                  onChange={(e) => setUploadData({ ...uploadData, altText: e.target.value })}
                  placeholder="Describe the image for screen readers"
                  className="mt-1"
                  required
                />
              </div>
              <div>
                <Label>License * (Compliance)</Label>
                <Select value={uploadData.license} onValueChange={(v) => setUploadData({ ...uploadData, license: v })}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select license" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="owned">Company Owned</SelectItem>
                    <SelectItem value="stock">Stock License</SelectItem>
                    <SelectItem value="cc0">CC0 / Public Domain</SelectItem>
                    <SelectItem value="cc-by">CC BY Attribution</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Credit (Optional)</Label>
                <Input
                  value={uploadData.credit}
                  onChange={(e) => setUploadData({ ...uploadData, credit: e.target.value })}
                  placeholder="Photographer or source"
                  className="mt-1"
                />
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <Button type="button" variant="outline" onClick={() => setUploadOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" className="bg-[#3F51B5] hover:bg-[#303F9F]">
                  Upload
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <Card className="border-[#E5E7EB] mb-6">
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#9CA3AF]" />
              <Input
                placeholder="Search by alt text..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 border-[#E5E7EB]"
              />
            </div>
            <Select value={selectedFolder} onValueChange={setSelectedFolder}>
              <SelectTrigger className="w-48 border-[#E5E7EB]">
                <FolderOpen className="h-4 w-4 mr-2" />
                <SelectValue placeholder="All Folders" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Folders</SelectItem>
                {folders.map((folder) => (
                  <SelectItem key={folder.id} value={folder.id}>
                    {folder.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="flex items-center border rounded-lg border-[#E5E7EB]">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setView("grid")}
                className={view === "grid" ? "bg-[#F3F4F6]" : ""}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setView("list")}
                className={view === "list" ? "bg-[#F3F4F6]" : ""}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Compliance Warning */}
      <Card className="border-yellow-200 bg-yellow-50 mb-6">
        <CardContent className="p-4 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
          <div>
            <p className="font-medium text-yellow-800">Compliance Requirements</p>
            <p className="text-sm text-yellow-700">
              All assets must have alt text and license information. Assets missing these fields cannot be used in
              published content.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Assets Grid/List */}
      {filteredAssets.length === 0 ? (
        <Card className="border-[#E5E7EB]">
          <CardContent className="py-12 text-center">
            <ImageIcon className="h-12 w-12 text-[#9CA3AF] mx-auto mb-4" />
            <h3 className="text-lg font-medium text-[#1E2A4A] mb-2">No assets found</h3>
            <p className="text-[#6B7280] mb-4">Upload your first asset to get started</p>
            <Button onClick={() => setUploadOpen(true)} className="bg-[#3F51B5] hover:bg-[#303F9F]">
              <Upload className="h-4 w-4 mr-2" />
              Upload Asset
            </Button>
          </CardContent>
        </Card>
      ) : view === "grid" ? (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredAssets.map((asset) => (
            <Card key={asset.id} className="border-[#E5E7EB] overflow-hidden group">
              <div className="aspect-video bg-[#F3F4F6] relative">
                <img
                  src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_225,c_fill/${asset.publicId}`}
                  alt={asset.altText}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <Button size="sm" variant="secondary">
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-3">
                <p className="text-sm font-medium text-[#1E2A4A] truncate">{asset.altText || "No alt text"}</p>
                <div className="flex items-center gap-2 mt-2">
                  {asset.altText ? (
                    <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Alt
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="text-xs bg-red-50 text-red-700 border-red-200">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      No Alt
                    </Badge>
                  )}
                  {asset.license ? (
                    <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      License
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="text-xs bg-red-50 text-red-700 border-red-200">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      No License
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="border-[#E5E7EB]">
          <CardContent className="p-0">
            <div className="divide-y divide-[#E5E7EB]">
              {filteredAssets.map((asset) => (
                <div key={asset.id} className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-24 rounded-lg bg-[#F3F4F6] overflow-hidden">
                      <img
                        src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/w_96,h_64,c_fill/${asset.publicId}`}
                        alt={asset.altText}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-[#1E2A4A]">{asset.altText || "No alt text"}</p>
                      <p className="text-sm text-[#6B7280]">{asset.publicId}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      {asset.altText && asset.license ? (
                        <Badge className="bg-green-100 text-green-700">Compliant</Badge>
                      ) : (
                        <Badge className="bg-red-100 text-red-700">Non-compliant</Badge>
                      )}
                    </div>
                    <span className="text-sm text-[#6B7280]">
                      {asset.width}x{asset.height}
                    </span>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
