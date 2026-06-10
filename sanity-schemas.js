/**
 * Sanity Content Schemas
 *
 * Copy these into your Sanity Studio project to create the content types.
 *
 * SETUP INSTRUCTIONS:
 * 1. Create a Sanity project:
 *    npx create-sanity@latest integratewise-cms
 *
 * 2. Choose "Clean project with no predefined schemas"
 *
 * 3. Create these schema files in your Sanity studio:
 *    - schemas/blogPost.ts
 *    - schemas/caseStudy.ts
 *    - schemas/resource.ts
 *    - schemas/author.ts
 *    - schemas/index.ts (export all)
 *
 * 4. Copy the schema definitions below into each file
 *
 * 5. Run: npm run dev
 *    Your studio will be at http://localhost:3333
 *
 * 6. Deploy when ready:
 *    npx sanity deploy
 *
 * 7. Get your Project ID and create a read token:
 *    - Project ID: https://sanity.io/manage → your project
 *    - API Token: https://sanity.io/manage/p/YOUR_PROJECT_ID/api#tokens
 *
 * 8. Add to your .env file:
 *    VITE_SANITY_PROJECT_ID=your_project_id
 *    VITE_SANITY_DATASET=production
 *    VITE_SANITY_API_TOKEN=your_read_only_token
 */

// ═══════════════════════════════════════════════════════════════
// schemas/author.ts
// ═══════════════════════════════════════════════════════════════
const authorSchema = {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      description: 'e.g., "IntegrateWise Team" or "Founder"',
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      options: { hotspot: true },
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// schemas/blogPost.ts
// ═══════════════════════════════════════════════════════════════
const blogPostSchema = {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Short summary shown in blog listing. Max 200 characters.',
      validation: (Rule) => Rule.required().max(200),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', type: 'string', title: 'Alt Text' },
            { name: 'caption', type: 'string', title: 'Caption' },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Product', value: 'Product' },
          { title: 'Governance', value: 'Governance' },
          { title: 'Best Practice', value: 'Best Practice' },
          { title: 'Company', value: 'Company' },
          { title: 'Engineering', value: 'Engineering' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show this post in the Featured section on the blog page',
      initialValue: false,
    },
    {
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      description: 'e.g., "5 min read"',
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Alt Text' }],
    },
    {
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Overrides the default title for search engines',
    },
    {
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 2,
      description: 'Meta description for search engines',
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'coverImage',
      publishedAt: 'publishedAt',
    },
    prepare({ title, author, media, publishedAt }) {
      const date = publishedAt ? new Date(publishedAt).toLocaleDateString() : '';
      return { title, subtitle: `${author || 'No author'} — ${date}`, media };
    },
  },
  orderings: [
    {
      title: 'Published At, Newest',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// schemas/caseStudy.ts
// ═══════════════════════════════════════════════════════════════
const caseStudySchema = {
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'tag',
      title: 'Tag',
      type: 'string',
      description: 'e.g., "Account Success", "Team Handovers", "Business Operations"',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'metric',
      title: 'Key Metric',
      type: 'string',
      description: 'e.g., "$8M", "2 weeks", "23%"',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'metricLabel',
      title: 'Metric Label',
      type: 'string',
      description: 'e.g., "Account saved from churn"',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'challenge',
      title: 'The Challenge',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'approach',
      title: 'The Approach',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Numbered steps of what was done',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'results',
      title: 'The Results',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Bullet points of outcomes',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'quote',
      title: 'Customer Quote',
      type: 'text',
      rows: 3,
    },
    {
      name: 'quoteAuthor',
      title: 'Quote Author',
      type: 'string',
      description: 'e.g., "CSM Lead, TechCorp"',
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
    },
    {
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 2,
    },
  ],
  preview: {
    select: { title: 'title', tag: 'tag', metric: 'metric' },
    prepare({ title, tag, metric }) {
      return { title, subtitle: `${tag} — ${metric}` };
    },
  },
};

// ═══════════════════════════════════════════════════════════════
// schemas/resource.ts
// ═══════════════════════════════════════════════════════════════
const resourceSchema = {
  name: 'resource',
  title: 'Resource',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'resourceType',
      title: 'Resource Type',
      type: 'string',
      options: {
        list: [
          { title: 'Guide', value: 'guide' },
          { title: 'Video', value: 'video' },
          { title: 'Webinar', value: 'webinar' },
          { title: 'Template', value: 'template' },
          { title: 'Documentation', value: 'documentation' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Getting Started', value: 'Getting Started' },
          { title: 'Account Success', value: 'Account Success' },
          { title: 'Governance', value: 'Governance' },
          { title: 'Integrations', value: 'Integrations' },
          { title: 'Playbooks', value: 'Playbooks' },
          { title: 'Templates', value: 'Templates' },
          { title: 'Walkthroughs', value: 'Walkthroughs' },
          { title: 'Engineering', value: 'Engineering' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
      description: 'URL to the resource (optional — can be internal page or external)',
    },
    {
      name: 'externalLink',
      title: 'External Link',
      type: 'boolean',
      description: 'Opens in a new tab',
      initialValue: false,
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show on the Resources page featured section',
      initialValue: false,
    },
  ],
  preview: {
    select: { title: 'title', resourceType: 'resourceType', category: 'category' },
    prepare({ title, resourceType, category }) {
      return { title, subtitle: `${resourceType} — ${category}` };
    },
  },
};

// ═══════════════════════════════════════════════════════════════
// schemas/index.ts — export all schemas
// ═══════════════════════════════════════════════════════════════
const schemas = {
  types: [authorSchema, blogPostSchema, caseStudySchema, resourceSchema],
};

// Export for reference
export { authorSchema, blogPostSchema, caseStudySchema, resourceSchema, schemas };
export default schemas;
