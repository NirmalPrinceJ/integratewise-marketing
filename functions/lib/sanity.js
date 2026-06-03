// Sanity client for Cloudflare Workers
// Lightweight fetch-based client for read-only operations

export class SanityClient {
  constructor({ projectId, dataset, apiVersion = '2024-01-01', token }) {
    this.projectId = projectId
    this.dataset = dataset
    this.apiVersion = apiVersion
    this.token = token
    this.baseUrl = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}`
  }

  async fetch(query, params = {}) {
    const encodedQuery = encodeURIComponent(query)
    const url = new URL(this.baseUrl)
    url.searchParams.set('query', query)
    
    if (Object.keys(params).length > 0) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(`$${key}`, JSON.stringify(value))
      }
    }

    const headers = {
      'Accept': 'application/json',
    }
    
    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`
    }

    try {
      const response = await fetch(url.toString(), { headers })
      
      if (!response.ok) {
        const error = await response.text()
        throw new Error(`Sanity API error: ${response.status} ${error}`)
      }

      const data = await response.json()
      return data.result
    } catch (error) {
      console.error('Sanity fetch error:', error)
      throw error
    }
  }

  // Fetch all published blog posts
  async getBlogPosts(options = {}) {
    const { limit = 20, offset = 0, phase, tag } = options
    
    let query = `*[_type == "blogPost" && !(_id in path("drafts.**"))]`
    const params = {}
    
    if (phase) {
      query += ` && phase == $phase`
      params.phase = phase
    }
    
    if (tag) {
      query += ` && $tag in tags`
      params.tag = tag
    }
    
    query += ` | order(publishDate desc) [$offset...$limit]`
    params.offset = offset
    params.limit = offset + limit
    
    return this.fetch(query, params)
  }

  // Fetch a single blog post by slug
  async getBlogPostBySlug(slug) {
    const query = `*[_type == "blogPost" && slug.current == $slug && !(_id in path("drafts.**"))][0]`
    return this.fetch(query, { slug })
  }

  // Fetch posts by phase (awareness, consideration, conversion)
  async getPostsByPhase(phase, limit = 10) {
    const query = `*[_type == "blogPost" && phase == $phase && !(_id in path("drafts.**"))] | order(week asc) [0...$limit]`
    return this.fetch(query, { phase, limit })
  }

  // Fetch all resources
  async getResources(type) {
    let query = `*[_type == "resource" && !(_id in path("drafts.**"))]`
    const params = {}
    
    if (type) {
      query += ` && type == $type`
      params.type = type
    }
    
    query += ` | order(_createdAt desc)`
    return this.fetch(query, params)
  }

  // Fetch resource by slug
  async getResourceBySlug(slug) {
    const query = `*[_type == "resource" && slug.current == $slug && !(_id in path("drafts.**"))][0]`
    return this.fetch(query, { slug })
  }
}

// Factory function for easy initialization
export function createSanityClient(env) {
  return new SanityClient({
    projectId: env.SANITY_PROJECT_ID,
    dataset: env.SANITY_DATASET,
    apiVersion: env.SANITY_API_VERSION || '2024-01-01',
    token: env.SANITY_READ_TOKEN || undefined
  })
}
