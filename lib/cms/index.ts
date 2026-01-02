// CMS Client - Unified interface for both Sanity and Notion

import { sanity } from "./adapters/sanity"
import { notion } from "./adapters/notion"
import type { CMSProvider, BlogPost, ChangelogEntry, DocPage, CaseStudy } from "./types"

class CMSClient {
  private provider: CMSProvider = "sanity" // Default to Sanity

  setProvider(provider: CMSProvider) {
    this.provider = provider
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
