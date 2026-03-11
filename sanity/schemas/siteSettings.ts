/**
 * Sanity schema for marketing site settings.
 * Run `sanity init` in this repo to create a studio, or use Sanity's hosted studio.
 */
export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "heroHeadline",
      title: "Hero Headline",
      type: "string",
      description: "Main hero headline (e.g. 'A workspace where all your business tools finally work together.')",
    },
    {
      name: "heroSubheadline",
      title: "Hero Subheadline",
      type: "text",
      description: "Supporting text below the hero headline",
    },
    {
      name: "comparisonHeadline",
      title: "Comparison Section Headline",
      type: "string",
      description: "e.g. 'OTHERS MOVE DATA. INTEGRATEWISE CREATES UNDERSTANDING.'",
    },
    {
      name: "comparisonSubheadline",
      title: "Comparison Section Subheadline",
      type: "text",
    },
  ],
};
