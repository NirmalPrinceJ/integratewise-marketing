// Cloudflare Pages Function: GET /api/content
// Fetches content from Sanity CMS

import { sanityClient } from '../../sanity/client.js';
import * as Sentry from '@sentry/serverless';

// Initialize Sentry for backend error tracking
Sentry.init({
  dsn: globalThis.SENTRY_DSN_BACKEND || 'YOUR_SENTRY_DSN_BACKEND',
  environment: globalThis.SENTRY_ENVIRONMENT || 'production',
  release: globalThis.SENTRY_RELEASE || '1.0.0',
  tracesSampleRate: 1.0,
});

export async function onRequestGet(context) {
  return Sentry.captureException(async () => {
    try {
      const { searchParams } = new URL(context.request.url);
      const type = searchParams.get('type'); // blog, resource, article, whitepaper
      const slug = searchParams.get('slug'); // specific content slug
      const limit = parseInt(searchParams.get('limit') || '10');

      let content;

      switch (type) {
        case 'blog':
          if (slug) {
            content = await sanityClient.getBlogPost(slug);
          } else {
            content = await sanityClient.getBlogPosts(limit);
          }
          break;

        case 'resource':
          if (slug) {
            content = await sanityClient.getResource(slug);
          } else {
            content = await sanityClient.getResources(limit);
          }
          break;

        case 'article':
          if (slug) {
            content = await sanityClient.getArticle(slug);
          } else {
            content = await sanityClient.getArticles(limit);
          }
          break;

        case 'whitepaper':
          if (slug) {
            content = await sanityClient.getWhitePaper(slug);
          } else {
            content = await sanityClient.getWhitePapers(limit);
          }
          break;

        default:
          return new Response(
            JSON.stringify({
              error: 'Invalid content type',
              available: ['blog', 'resource', 'article', 'whitepaper'],
            }),
            {
              status: 400,
              headers: { 'Content-Type': 'application/json' },
            }
          );
      }

      if (!content) {
        return new Response(
          JSON.stringify({ error: 'Content not found' }),
          {
            status: 404,
            headers: { 'Content-Type': 'application/json' },
          }
        );
      }

      return new Response(JSON.stringify({ success: true, data: content }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
        },
      });
    } catch (error) {
      console.error('[Content API] Error:', error);
      Sentry.captureException(error);

      return new Response(
        JSON.stringify({
          error: 'Failed to fetch content',
          message: error.message,
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
  });
}
