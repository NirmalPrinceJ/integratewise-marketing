// Sanity Schema for Content Management
// Schemas for Blog Posts, Resources, Articles, and White Papers

export const schemaTypes = [
  {
    name: 'blogPost',
    title: 'Blog Post',
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
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [
          { type: 'block' },
          { type: 'image' },
        ],
      },
      {
        name: 'author',
        title: 'Author',
        type: 'string',
      },
      {
        name: 'publishedAt',
        title: 'Published At',
        type: 'datetime',
      },
      {
        name: 'image',
        title: 'Featured Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
        options: {
          list: [
            { title: 'Integration', value: 'integration' },
            { title: 'Workflow', value: 'workflow' },
            { title: 'Tips', value: 'tips' },
            { title: 'News', value: 'news' },
          ],
        },
      },
    ],
    preview: {
      select: {
        title: 'title',
        author: 'author',
        date: 'publishedAt',
      },
      prepare(selection) {
        const { author, date } = selection;
        return Object.assign({}, selection, {
          subtitle: author && date ? `by ${author} on ${new Date(date).toLocaleDateString()}` : author || date,
        });
      },
    },
  },
  {
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
        name: 'description',
        title: 'Description',
        type: 'text',
        rows: 3,
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [
          { type: 'block' },
          { type: 'image' },
        ],
      },
      {
        name: 'resourceType',
        title: 'Resource Type',
        type: 'string',
        options: {
          list: [
            { title: 'Guide', value: 'guide' },
            { title: 'Tutorial', value: 'tutorial' },
            { title: 'Template', value: 'template' },
            { title: 'Documentation', value: 'documentation' },
          ],
        },
      },
      {
        name: 'image',
        title: 'Cover Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'publishedAt',
        title: 'Published At',
        type: 'datetime',
      },
    ],
    preview: {
      select: {
        title: 'title',
        type: 'resourceType',
        date: 'publishedAt',
      },
      prepare(selection) {
        const { type, date } = selection;
        return Object.assign({}, selection, {
          subtitle: type && date ? `${type} - ${new Date(date).toLocaleDateString()}` : type || date,
        });
      },
    },
  },
  {
    name: 'article',
    title: 'Article',
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
        options: {
          source: 'title',
          maxLength: 96,
        },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'abstract',
        title: 'Abstract',
        type: 'text',
        rows: 2,
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [
          { type: 'block' },
          { type: 'image' },
        ],
      },
      {
        name: 'author',
        title: 'Author',
        type: 'string',
      },
      {
        name: 'publishedAt',
        title: 'Published At',
        type: 'datetime',
      },
      {
        name: 'image',
        title: 'Article Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{ type: 'string' }],
      },
    ],
    preview: {
      select: {
        title: 'title',
        author: 'author',
        date: 'publishedAt',
      },
      prepare(selection) {
        const { author, date } = selection;
        return Object.assign({}, selection, {
          subtitle: author && date ? `by ${author} on ${new Date(date).toLocaleDateString()}` : author || date,
        });
      },
    },
  },
  {
    name: 'whitePaper',
    title: 'White Paper',
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
        options: {
          source: 'title',
          maxLength: 96,
        },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'summary',
        title: 'Summary',
        type: 'text',
        rows: 4,
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [
          { type: 'block' },
          { type: 'image' },
        ],
      },
      {
        name: 'author',
        title: 'Author',
        type: 'string',
      },
      {
        name: 'publishedAt',
        title: 'Published At',
        type: 'datetime',
      },
      {
        name: 'image',
        title: 'Cover Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'downloadUrl',
        title: 'PDF Download URL',
        type: 'url',
      },
      {
        name: 'topics',
        title: 'Topics',
        type: 'array',
        of: [{ type: 'string' }],
      },
    ],
    preview: {
      select: {
        title: 'title',
        author: 'author',
        date: 'publishedAt',
      },
      prepare(selection) {
        const { author, date } = selection;
        return Object.assign({}, selection, {
          subtitle: author && date ? `by ${author} on ${new Date(date).toLocaleDateString()}` : author || date,
        });
      },
    },
  },
];
