// Sanity CMS Schema for IntegrateWise Marketing Content
// Import this into your Sanity Studio

export const blogPost = {
  name: 'blogPost',
  type: 'document',
  title: 'Blog Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'metaDescription',
      type: 'text',
      title: 'Meta Description',
      rows: 2,
      validation: Rule => Rule.max(160)
    },
    {
      name: 'phase',
      type: 'string',
      title: 'Marketing Phase',
      options: {
        list: [
          { title: 'Awareness (TOFU)', value: 'awareness' },
          { title: 'Consideration (MOFU)', value: 'consideration' },
          { title: 'Conversion (BOFU)', value: 'conversion' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'week',
      type: 'number',
      title: 'Week Number',
      validation: Rule => Rule.min(1).max(8)
    },
    {
      name: 'publishDate',
      type: 'datetime',
      title: 'Publish Date',
      validation: Rule => Rule.required()
    },
    {
      name: 'readTime',
      type: 'string',
      title: 'Read Time',
      description: 'e.g. "6 min read"'
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'featuredImage',
      type: 'image',
      title: 'Featured Image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt',
      rows: 3,
      description: 'Short summary for cards and listings'
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true }
        }
      ]
    },
    {
      name: 'cta',
      type: 'object',
      title: 'Call to Action',
      fields: [
        {
          name: 'text',
          type: 'string',
          title: 'CTA Text'
        },
        {
          name: 'link',
          type: 'string',
          title: 'CTA Link'
        },
        {
          name: 'style',
          type: 'string',
          title: 'Style',
          options: {
            list: [
              { title: 'Primary', value: 'primary' },
              { title: 'Secondary', value: 'secondary' }
            ]
          }
        }
      ]
    },
    {
      name: 'seoKeywords',
      type: 'array',
      title: 'SEO Keywords',
      of: [{ type: 'string' }]
    },
    {
      name: 'canonicalUrl',
      type: 'url',
      title: 'Canonical URL'
    }
  ],
  preview: {
    select: {
      title: 'title',
      phase: 'phase',
      week: 'week',
      media: 'featuredImage'
    },
    prepare({ title, phase, week, media }) {
      return {
        title,
        subtitle: `Week ${week || '?'} — ${phase || 'No phase'}`,
        media
      }
    }
  },
  orderings: [
    {
      title: 'Week Number',
      name: 'weekAsc',
      by: [
        { field: 'week', direction: 'asc' }
      ]
    },
    {
      title: 'Publish Date',
      name: 'publishDateDesc',
      by: [
        { field: 'publishDate', direction: 'desc' }
      ]
    }
  ]
}

export const resource = {
  name: 'resource',
  type: 'document',
  title: 'Resource',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required()
    },
    {
      name: 'type',
      type: 'string',
      title: 'Resource Type',
      options: {
        list: [
          { title: 'White Paper', value: 'whitepaper' },
          { title: 'Guide', value: 'guide' },
          { title: 'Template', value: 'template' },
          { title: 'Case Study', value: 'casestudy' }
        ]
      }
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      rows: 3
    },
    {
      name: 'file',
      type: 'file',
      title: 'Resource File'
    },
    {
      name: 'downloadUrl',
      type: 'url',
      title: 'External Download URL'
    },
    {
      name: 'gated',
      type: 'boolean',
      title: 'Gated (Requires Email)',
      initialValue: true
    }
  ]
}

export const schemas = [blogPost, resource]
