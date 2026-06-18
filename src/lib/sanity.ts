/**
 * Sanity Client Configuration
 *
 * To set up your own Sanity project:
 * 1. Go to https://sanity.io/manage and create a project
 * 2. Create a dataset (e.g., "production")
 * 3. Get your project ID from the dashboard
 * 4. Create a read-only API token at https://sanity.io/manage/p/YOUR_PROJECT_ID/api#tokens
 * 5. Set the environment variables below (or in a .env file)
 *
 * For local development, create a .env file in the project root:
 * VITE_SANITY_PROJECT_ID=your_project_id
 * VITE_SANITY_DATASET=production
 * VITE_SANITY_API_TOKEN=your_read_token
 *
 * When no Sanity config is provided, the site falls back to static data.
 */
import { createClient, type QueryParams } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || '';
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';
const apiVersion = '2024-06-01';
const token = import.meta.env.VITE_SANITY_API_TOKEN || '';

export const hasSanityConfig = Boolean(projectId && dataset);

// Lazy client — only created when Sanity is actually configured
// This prevents runtime errors on platforms where env vars are not set
function getClient() {
  if (!hasSanityConfig) {
    throw new Error('Sanity is not configured. Set VITE_SANITY_PROJECT_ID env var.');
  }
  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
    perspective: 'published',
    ...(token ? { token } : {}),
  });
}

// Wrap in a lazy object so createClient is not called at import time
const clientCache: { value: ReturnType<typeof createClient> | null } = { value: null };

export const sanityClient = {
  fetch: <T = unknown>(query: string, params?: QueryParams): Promise<T> => {
    if (!clientCache.value) {
      clientCache.value = getClient();
    }
    return params
      ? clientCache.value.fetch<T>(query, params)
      : clientCache.value.fetch<T>(query);
  },
};

// Image URL builder — safe to call even without config
export const urlFor = (source: { _ref?: string; _type?: string; asset?: { _ref?: string } }) => {
  if (!hasSanityConfig) {
    return { url: () => '' };
  }
  if (!clientCache.value) {
    clientCache.value = getClient();
  }
  const builder = imageUrlBuilder(clientCache.value);
  return builder.image(source);
};

// Preview client (for drafts — requires token)
const previewCache: { value: ReturnType<typeof createClient> | null } = { value: null };

export const previewClient = token && hasSanityConfig
  ? {
      fetch: <T = unknown>(query: string, params?: QueryParams): Promise<T> => {
        if (!previewCache.value) {
          previewCache.value = createClient({
            projectId,
            dataset,
            apiVersion,
            useCdn: false,
            token,
            perspective: 'previewDrafts',
          });
        }
        return params
          ? previewCache.value.fetch<T>(query, params)
          : previewCache.value.fetch<T>(query);
      },
    }
  : null;
