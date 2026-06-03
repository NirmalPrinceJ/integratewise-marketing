// Sanity Client Configuration
// Used for fetching content from Sanity CMS in both frontend and backend

const projectId = globalThis.SANITY_PROJECT_ID || 'YOUR_SANITY_PROJECT_ID';
const dataset = globalThis.SANITY_DATASET || 'production';
const apiVersion = globalThis.SANITY_API_VERSION || '2024-01-01';

export const sanityClient = {
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Use CDN for better performance in production
  
  // Build the API URL
  getApiUrl() {
    return `https://${this.projectId}.api.sanity.io/v${parseInt(this.apiVersion)}/data/query/${this.dataset}`;
  },
  
  // Fetch content from Sanity
  async fetch(query, params = {}) {
    const url = new URL(this.getApiUrl());
    url.search = new URLSearchParams({
      query,
      ...Object.entries(params).reduce((acc, [key, value]) => {
        acc[`$${key}`] = JSON.stringify(value);
        return acc;
      }, {}),
    }).toString();

    try {
      const response = await fetch(url.toString());
      if (!response.ok) {
        throw new Error(`Sanity API error: ${response.statusText}`);
      }
      const data = await response.json();
      return data.result;
    } catch (error) {
      console.error('[Sanity Client] Fetch error:', error);
      throw error;
    }
  },
  
  // Fetch blog posts
  async getBlogPosts(limit = 10) {
    return this.fetch(`
      *[_type == "blogPost"] | order(publishedAt desc) [0...${limit}] {
        _id,
        title,
        slug,
        excerpt,
        author,
        publishedAt,
        category,
        image {
          asset->{
            _id,
            url
          },
          alt
        }
      }
    `);
  },
  
  // Fetch single blog post
  async getBlogPost(slug) {
    return this.fetch(`
      *[_type == "blogPost" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        excerpt,
        content,
        author,
        publishedAt,
        category,
        image {
          asset->{
            _id,
            url
          },
          alt
        }
      }
    `, { slug });
  },
  
  // Fetch resources
  async getResources(limit = 10) {
    return this.fetch(`
      *[_type == "resource"] | order(publishedAt desc) [0...${limit}] {
        _id,
        title,
        slug,
        description,
        resourceType,
        publishedAt,
        image {
          asset->{
            _id,
            url
          },
          alt
        }
      }
    `);
  },
  
  // Fetch single resource
  async getResource(slug) {
    return this.fetch(`
      *[_type == "resource" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        description,
        content,
        resourceType,
        publishedAt,
        image {
          asset->{
            _id,
            url
          },
          alt
        }
      }
    `, { slug });
  },
  
  // Fetch articles
  async getArticles(limit = 10) {
    return this.fetch(`
      *[_type == "article"] | order(publishedAt desc) [0...${limit}] {
        _id,
        title,
        slug,
        abstract,
        author,
        publishedAt,
        tags,
        image {
          asset->{
            _id,
            url
          },
          alt
        }
      }
    `);
  },
  
  // Fetch single article
  async getArticle(slug) {
    return this.fetch(`
      *[_type == "article" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        abstract,
        content,
        author,
        publishedAt,
        tags,
        image {
          asset->{
            _id,
            url
          },
          alt
        }
      }
    `, { slug });
  },
  
  // Fetch white papers
  async getWhitePapers(limit = 10) {
    return this.fetch(`
      *[_type == "whitePaper"] | order(publishedAt desc) [0...${limit}] {
        _id,
        title,
        slug,
        summary,
        author,
        publishedAt,
        topics,
        downloadUrl,
        image {
          asset->{
            _id,
            url
          },
          alt
        }
      }
    `);
  },
  
  // Fetch single white paper
  async getWhitePaper(slug) {
    return this.fetch(`
      *[_type == "whitePaper" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        summary,
        content,
        author,
        publishedAt,
        topics,
        downloadUrl,
        image {
          asset->{
            _id,
            url
          },
          alt
        }
      }
    `, { slug });
  },
};

export default sanityClient;
