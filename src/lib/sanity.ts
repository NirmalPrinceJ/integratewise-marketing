/**
 * Sanity CMS client for integratewise-marketing.
 * Content at marketing.integratewise.ai — hero, comparison, CTAs.
 *
 * Set VITE_SANITY_PROJECT_ID and VITE_SANITY_DATASET in .env
 */
import { createClient } from "@sanity/client";

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID ?? "";
const dataset = import.meta.env.VITE_SANITY_DATASET ?? "production";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  useCdn: true,
});

/** Fetch site settings (hero headline, tagline, etc.) */
export async function getSiteSettings() {
  if (!projectId) return null;
  try {
    const data = await sanityClient.fetch<{
      heroHeadline?: string;
      heroSubheadline?: string;
      comparisonHeadline?: string;
      comparisonSubheadline?: string;
    }>(`*[_type == "siteSettings"][0]{
      heroHeadline,
      heroSubheadline,
      comparisonHeadline,
      comparisonSubheadline
    }`);
    return data;
  } catch {
    return null;
  }
}
