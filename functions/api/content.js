// Content API endpoint for IntegrateWise Marketing
// Fetches blog posts and resources from Sanity CMS

import { createSanityClient } from '../lib/sanity.js'

export async function onRequestGet(context) {
  const { request, env } = context
  const url = new URL(request.url)
  const type = url.searchParams.get('type') || 'blog'
  const slug = url.searchParams.get('slug')
  const phase = url.searchParams.get('phase')
  const tag = url.searchParams.get('tag')
  const limit = parseInt(url.searchParams.get('limit')) || 20
  const offset = parseInt(url.searchParams.get('offset')) || 0

  try {
    const sanity = createSanityClient(env)
    let data

    switch (type) {
      case 'blog':
        if (slug) {
          data = await sanity.getBlogPostBySlug(slug)
        } else {
          data = await sanity.getBlogPosts({ limit, offset, phase, tag })
        }
        break

      case 'resource':
        if (slug) {
          data = await sanity.getResourceBySlug(slug)
        } else {
          const resourceType = url.searchParams.get('resourceType')
          data = await sanity.getResources(resourceType)
        }
        break

      default:
        return new Response(
          JSON.stringify({ error: 'Invalid type. Use "blog" or "resource".' }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        )
    }

    return new Response(
      JSON.stringify({ success: true, data }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=60, stale-while-revalidate=300'
        }
      }
    )

  } catch (error) {
    console.error('Content API error:', error)
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || 'Failed to fetch content',
        details: env.SANITY_PROJECT_ID ? undefined : 'Sanity not configured'
      }),
      { 
        status: 500, 
        headers: { 'Content-Type': 'application/json' } 
      }
    )
  }
}
