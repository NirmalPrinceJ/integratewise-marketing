// CMS Content Types for IntegrateWise

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: {
    name: string
    avatar?: string
  }
  publishedAt: string
  category: string
  tags: string[]
  coverImage?: string
  readTime?: number
}

export interface ChangelogEntry {
  id: string
  version: string
  date: string
  title: string
  description: string
  changes: {
    type: "feature" | "improvement" | "fix" | "breaking"
    description: string
  }[]
  highlights?: string[]
}

export interface DocPage {
  id: string
  title: string
  slug: string
  content: string
  category: string
  order: number
  lastUpdated: string
  tableOfContents?: {
    title: string
    level: number
    id: string
  }[]
}

export interface CaseStudy {
  id: string
  title: string
  slug: string
  company: string
  industry: string
  logo?: string
  excerpt: string
  content: string
  results: {
    metric: string
    value: string
  }[]
  publishedAt: string
}

export type CMSProvider = "sanity" | "notion"
