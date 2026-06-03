# Content API Documentation

## Overview

The Content API (`/api/content`) provides a RESTful interface to fetch content from Sanity CMS. All endpoints return JSON and support caching for optimal performance.

## Base URL

```
https://yourdomain.com/api/content
```

## Endpoints

### Get Blog Posts

**Request:**
```
GET /api/content?type=blog&limit=10
```

**Query Parameters:**
- `type` (required): `blog`
- `limit` (optional): Number of posts to return (default: 10, max: 100)
- `slug` (optional): Fetch specific post by slug

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "post-id",
      "title": "My Blog Post",
      "slug": { "current": "my-blog-post" },
      "excerpt": "Short description...",
      "author": "John Doe",
      "publishedAt": "2024-01-15T10:00:00Z",
      "category": "integration",
      "image": {
        "asset": {
          "_id": "image-id",
          "url": "https://cdn.sanity.io/images/..."
        },
        "alt": "Post featured image"
      }
    }
  ]
}
```

**Example:**
```javascript
// Fetch latest 5 blog posts
const response = await fetch('/api/content?type=blog&limit=5');
const { data: posts } = await response.json();
```

---

### Get Single Blog Post

**Request:**
```
GET /api/content?type=blog&slug=my-blog-post
```

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "post-id",
    "title": "My Blog Post",
    "slug": { "current": "my-blog-post" },
    "excerpt": "Short description...",
    "content": [
      {
        "_type": "block",
        "style": "h1",
        "children": [
          { "text": "Heading", "marks": [] }
        ]
      },
      {
        "_type": "block",
        "style": "normal",
        "children": [
          { "text": "Paragraph content", "marks": [] }
        ]
      }
    ],
    "author": "John Doe",
    "publishedAt": "2024-01-15T10:00:00Z",
    "category": "integration",
    "image": {
      "asset": { "url": "https://cdn.sanity.io/..." },
      "alt": "Featured image"
    }
  }
}
```

---

### Get Resources

**Request:**
```
GET /api/content?type=resource&limit=12
GET /api/content?type=resource&slug=my-guide
```

**Query Parameters:**
- `type` (required): `resource`
- `limit` (optional): Number of resources (default: 10)
- `slug` (optional): Fetch specific resource

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "resource-id",
      "title": "Integration Guide",
      "slug": { "current": "integration-guide" },
      "description": "How to integrate...",
      "resourceType": "guide",
      "publishedAt": "2024-01-15T10:00:00Z",
      "image": { "asset": { "url": "..." }, "alt": "..." }
    }
  ]
}
```

**Resource Types:**
- `guide`
- `tutorial`
- `template`
- `documentation`

---

### Get Articles

**Request:**
```
GET /api/content?type=article&limit=20
GET /api/content?type=article&slug=my-article
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "article-id",
      "title": "Article Title",
      "slug": { "current": "article-slug" },
      "abstract": "Brief summary...",
      "author": "Jane Smith",
      "publishedAt": "2024-01-15T10:00:00Z",
      "tags": ["integration", "automation"],
      "image": { "asset": { "url": "..." }, "alt": "..." }
    }
  ]
}
```

---

### Get White Papers

**Request:**
```
GET /api/content?type=whitepaper&limit=10
GET /api/content?type=whitepaper&slug=my-whitepaper
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "paper-id",
      "title": "White Paper Title",
      "slug": { "current": "whitepaper-slug" },
      "summary": "Executive summary...",
      "author": "Research Team",
      "publishedAt": "2024-01-15T10:00:00Z",
      "topics": ["integration", "automation"],
      "downloadUrl": "https://example.com/whitepaper.pdf",
      "image": { "asset": { "url": "..." }, "alt": "..." }
    }
  ]
}
```

---

## Error Responses

### Invalid Content Type

**Request:**
```
GET /api/content?type=invalid
```

**Response:**
```json
{
  "error": "Invalid content type",
  "available": ["blog", "resource", "article", "whitepaper"]
}
```

**HTTP Status:** `400 Bad Request`

---

### Content Not Found

**Request:**
```
GET /api/content?type=blog&slug=nonexistent
```

**Response:**
```json
{
  "error": "Content not found"
}
```

**HTTP Status:** `404 Not Found`

---

### Server Error

**Response:**
```json
{
  "error": "Failed to fetch content",
  "message": "Sanity API connection failed"
}
```

**HTTP Status:** `500 Internal Server Error`

---

## Caching

- All responses are cached for **1 hour** (3600 seconds)
- Add `Cache-Control: public, max-age=3600` header
- CDN will serve cached responses for better performance
- Cache busts automatically when content is republished in Sanity

**Cache Headers:**
```
Cache-Control: public, max-age=3600
Content-Type: application/json
```

---

## Rate Limiting

No explicit rate limiting is enforced, but:
- Sanity API has standard rate limits
- Cloudflare Pages may apply DDoS protection
- Large requests should use pagination (`limit` parameter)

---

## Authentication

The Content API is **public** and requires no authentication:
- All content is published (non-draft)
- No API keys needed
- CORS enabled for all origins

---

## Performance Tips

1. **Use pagination**: Limit results with `limit` parameter
   ```javascript
   // Good: Fetch 10 at a time
   const posts = await fetch('/api/content?type=blog&limit=10');
   ```

2. **Cache locally**: Store responses in your app's cache layer
   ```javascript
   const cachedPosts = localStorage.getItem('posts');
   if (!cachedPosts) {
     const posts = await fetch('/api/content?type=blog');
     localStorage.setItem('posts', JSON.stringify(posts));
   }
   ```

3. **Use CDN**: Responses are already cached by Cloudflare
   - No need for additional client-side caching in most cases

4. **Batch requests**: Combine multiple fetches if possible
   ```javascript
   // Less ideal: 4 separate requests
   const blog = await fetch('/api/content?type=blog');
   const resources = await fetch('/api/content?type=resource');
   const articles = await fetch('/api/content?type=article');
   const papers = await fetch('/api/content?type=whitepaper');
   ```

---

## Content Schema

### Blog Post Schema
```
- _id: string
- title: string
- slug: { current: string }
- excerpt: string
- content: array (portable text blocks)
- author: string
- publishedAt: ISO 8601 date
- category: "integration" | "workflow" | "tips" | "news"
- image: { asset: { url: string }, alt: string }
```

### Resource Schema
```
- _id: string
- title: string
- slug: { current: string }
- description: string
- content: array (portable text blocks)
- resourceType: "guide" | "tutorial" | "template" | "documentation"
- publishedAt: ISO 8601 date
- image: { asset: { url: string }, alt: string }
```

### Article Schema
```
- _id: string
- title: string
- slug: { current: string }
- abstract: string
- content: array (portable text blocks)
- author: string
- publishedAt: ISO 8601 date
- tags: string[]
- image: { asset: { url: string }, alt: string }
```

### White Paper Schema
```
- _id: string
- title: string
- slug: { current: string }
- summary: string
- content: array (portable text blocks)
- author: string
- publishedAt: ISO 8601 date
- topics: string[]
- downloadUrl: string (optional)
- image: { asset: { url: string }, alt: string }
```

---

## Error Tracking

All API errors are automatically tracked with Sentry:
- API failures
- Sanity connection issues
- Timeout errors
- Invalid requests

Check your Sentry dashboard for detailed error information.

---

## Support

- **API Issues**: Check Sentry dashboard for errors
- **Content Missing**: Verify content is published in Sanity Studio
- **Performance**: Monitor cache hit rate via Cloudflare Analytics
