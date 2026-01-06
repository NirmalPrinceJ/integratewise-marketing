# Environment Variables Setup - SSOT v3.2

## Required Environment Variables

Add these to your Vercel project or `.env.local` file.

### Core (Required)

\`\`\`bash
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://your-domain.com
VERCEL_ENV=production  # Set automatically by Vercel
\`\`\`

### CMS - Sanity (Option A)

\`\`\`bash
SANITY_PROJECT_ID=your-project-id
SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token
SANITY_PREVIEW_SECRET=your-preview-secret  # Used for draft previews and webhooks
\`\`\`

### CMS - Notion (Option B)

\`\`\`bash
NOTION_TOKEN=your-integration-token
NOTION_BLOG_DATABASE_ID=database-id-for-blog
NOTION_CHANGELOG_DATABASE_ID=database-id-for-changelog
NOTION_DOCS_DATABASE_ID=database-id-for-docs
NOTION_CASE_STUDIES_DATABASE_ID=database-id-for-case-studies
\`\`\`

### Cloudinary (Required for media)

\`\`\`bash
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
CLOUDINARY_SECURE=true
\`\`\`

### Analytics

\`\`\`bash
GA_MEASUREMENT_ID=G-XXXXXXXXXX
\`\`\`

### AI (Optional - for assistant features)

\`\`\`bash
OPENAI_API_KEY=sk-...
# OR
ANTHROPIC_API_KEY=sk-ant-...
AI_GATEWAY_URL=https://gateway.ai.cloudflare.com/v1/...
\`\`\`

## Webhook Setup

### Sanity Webhook (for ISR revalidation)

1. Go to Sanity Studio > API > Webhooks
2. Create a new webhook:
   - Name: `Vercel Revalidation`
   - URL: `https://your-domain.com/api/revalidate`
   - Trigger on: Create, Update, Delete
   - Filter: `_type in ["article", "caseStudy", "page", "changelog"]`
   - HTTP Headers: `x-revalidate-secret: YOUR_SANITY_PREVIEW_SECRET`
   - HTTP Method: POST
   - Projection:
     \`\`\`json
     {
       "type": _type,
       "slug": slug.current
     }
     \`\`\`

### Preview Mode

Access draft content at:
\`\`\`
/api/preview?secret=YOUR_SANITY_PREVIEW_SECRET&slug=my-post&type=article
\`\`\`

Disable preview:
\`\`\`
/api/preview/disable
\`\`\`

## QA Gates

Target metrics:
- Lighthouse: ≥90 overall, ≥95 a11y, ≥90 SEO
- CMS latency p95: ≤300ms
- Cloudinary latency p95: ≤250ms
- TTFB: ≤500ms

Run Lighthouse CI on: `/`, `/product`, `/pricing`, `/agents`, `/blog/[slug]`
\`\`\`
