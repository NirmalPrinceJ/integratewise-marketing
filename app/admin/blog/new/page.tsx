"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { VisualEditor, type EditorBlock } from "@/lib/admin/editor"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Type, ImageIcon, Code, List, AlertCircle } from "lucide-react"

export default function NewBlogPostPage() {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [slug, setSlug] = useState("")
  const [blocks, setBlocks] = useState<EditorBlock[]>([])
  const [saving, setSaving] = useState(false)

  const editor = new VisualEditor(blocks, setBlocks)

  const handleAddBlock = (type: EditorBlock["type"]) => {
    editor.addBlock(type, type === "heading" ? "New Heading" : "")
  }

  const handleSave = async (status: "draft" | "published") => {
    setSaving(true)
    try {
      // Save to CMS
      console.log("[v0] Saving blog post:", { title, slug, blocks, status })

      // In production, call CMS API
      await new Promise((resolve) => setTimeout(resolve, 1000))

      router.push("/admin/blog")
    } catch (error) {
      console.error("[v0] Error saving blog post:", error)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">New Blog Post</h1>
        <p className="mt-2 text-muted-foreground">Create a new blog post with the visual editor</p>
      </div>

      {/* Metadata */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Post Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value)
                setSlug(e.target.value.toLowerCase().replace(/\s+/g, "-"))
              }}
              placeholder="Enter post title"
            />
          </div>
          <div>
            <Label htmlFor="slug">URL Slug</Label>
            <Input id="slug" value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="url-friendly-slug" />
          </div>
        </CardContent>
      </Card>

      {/* Block Toolbar */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Add Content Block</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Button size="sm" variant="outline" onClick={() => handleAddBlock("heading")}>
              <Type className="mr-2 h-4 w-4" />
              Heading
            </Button>
            <Button size="sm" variant="outline" onClick={() => handleAddBlock("paragraph")}>
              <Type className="mr-2 h-4 w-4" />
              Paragraph
            </Button>
            <Button size="sm" variant="outline" onClick={() => handleAddBlock("image")}>
              <ImageIcon className="mr-2 h-4 w-4" />
              Image
            </Button>
            <Button size="sm" variant="outline" onClick={() => handleAddBlock("code")}>
              <Code className="mr-2 h-4 w-4" />
              Code
            </Button>
            <Button size="sm" variant="outline" onClick={() => handleAddBlock("list")}>
              <List className="mr-2 h-4 w-4" />
              List
            </Button>
            <Button size="sm" variant="outline" onClick={() => handleAddBlock("callout")}>
              <AlertCircle className="mr-2 h-4 w-4" />
              Callout
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Content Blocks */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Content</CardTitle>
        </CardHeader>
        <CardContent>
          {blocks.length === 0 ? (
            <div className="py-12 text-center text-muted-foreground">
              <p>No content blocks yet. Add your first block above.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {blocks.map((block) => (
                <div key={block.id} className="rounded-lg border border-border p-4">
                  <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="font-medium uppercase">{block.type}</span>
                    <Button size="sm" variant="ghost" onClick={() => editor.deleteBlock(block.id)}>
                      Remove
                    </Button>
                  </div>
                  <Input
                    value={block.content}
                    onChange={(e) => editor.updateBlock(block.id, { content: e.target.value })}
                    placeholder={`Enter ${block.type} content`}
                  />
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex gap-3">
        <Button onClick={() => handleSave("draft")} disabled={saving || !title}>
          {saving ? "Saving..." : "Save Draft"}
        </Button>
        <Button onClick={() => handleSave("published")} disabled={saving || !title}>
          {saving ? "Publishing..." : "Publish"}
        </Button>
        <Button variant="outline" onClick={() => router.back()} disabled={saving}>
          Cancel
        </Button>
      </div>
    </div>
  )
}
