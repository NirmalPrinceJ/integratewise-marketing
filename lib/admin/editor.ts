"use client"

export interface EditorBlock {
  id: string
  type: "heading" | "paragraph" | "image" | "code" | "list" | "callout"
  content: any
  order: number
}

export interface DraftContent {
  id: string
  title: string
  slug: string
  blocks: EditorBlock[]
  metadata: {
    author: string
    category: string
    tags: string[]
    coverImage?: string
  }
  status: "draft" | "published"
  createdAt: Date
  updatedAt: Date
}

// Visual editor state management
export class VisualEditor {
  private blocks: EditorBlock[] = []
  private onChange: (blocks: EditorBlock[]) => void

  constructor(initialBlocks: EditorBlock[] = [], onChange: (blocks: EditorBlock[]) => void) {
    this.blocks = initialBlocks
    this.onChange = onChange
  }

  addBlock(type: EditorBlock["type"], content: any, position?: number) {
    const newBlock: EditorBlock = {
      id: `block_${Date.now()}`,
      type,
      content,
      order: position ?? this.blocks.length,
    }

    if (position !== undefined) {
      this.blocks.splice(position, 0, newBlock)
      this.reorderBlocks()
    } else {
      this.blocks.push(newBlock)
    }

    this.onChange(this.blocks)
  }

  updateBlock(id: string, updates: Partial<EditorBlock>) {
    const index = this.blocks.findIndex((b) => b.id === id)
    if (index !== -1) {
      this.blocks[index] = { ...this.blocks[index], ...updates }
      this.onChange(this.blocks)
    }
  }

  deleteBlock(id: string) {
    this.blocks = this.blocks.filter((b) => b.id !== id)
    this.reorderBlocks()
    this.onChange(this.blocks)
  }

  moveBlock(id: string, newPosition: number) {
    const index = this.blocks.findIndex((b) => b.id === id)
    if (index !== -1) {
      const [block] = this.blocks.splice(index, 1)
      this.blocks.splice(newPosition, 0, block)
      this.reorderBlocks()
      this.onChange(this.blocks)
    }
  }

  private reorderBlocks() {
    this.blocks.forEach((block, index) => {
      block.order = index
    })
  }

  getBlocks() {
    return this.blocks
  }
}
