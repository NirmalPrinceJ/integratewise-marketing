import { sanity } from "./adapters/sanity"
import { notion } from "./adapters/notion"
import type { CMSProvider, BlogPost, ChangelogEntry, DocPage, CaseStudy } from "./types"

class CMSClient {
  private provider: CMSProvider

  constructor() {
    const notionToken = process.env.NOTION_TOKEN || process.env.NOTION_API_KEY
    const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

    if (notionToken) {
      this.provider = "notion"
      console.log("[v0] CMS: Using Notion as content provider")
    } else if (sanityProjectId) {
      this.provider = "sanity"
      console.log("[v0] CMS: Using Sanity as content provider")
    } else {
      this.provider = "sanity" // Default fallback
      console.warn("[v0] CMS: No provider configured, defaulting to Sanity")
    }
  }

  setProvider(provider: CMSProvider) {
    this.provider = provider
    console.log(`[v0] CMS: Switched to ${provider}`)
  }

  getProvider(): CMSProvider {
    return this.provider
  }

  private getAdapter() {
    return this.provider === "sanity" ? sanity : notion
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return this.getAdapter().getBlogPosts()
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
    return this.getAdapter().getBlogPostBySlug(slug)
  }

  async getChangelogEntries(): Promise<ChangelogEntry[]> {
    return this.getAdapter().getChangelogEntries()
  }

  async getDocPages(): Promise<DocPage[]> {
    return this.getAdapter().getDocPages()
  }

  async getCaseStudies(): Promise<CaseStudy[]> {
    return this.getAdapter().getCaseStudies()
  }
}

export const cms = new CMSClient()
export * from "./types"
