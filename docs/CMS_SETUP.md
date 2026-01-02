# CMS Setup Guide

IntegrateWise supports both **Sanity** and **Notion** as CMS providers, with **Cloudinary** for media management.

## Notion Setup

### 1. Create Notion Integration
1. Go to https://www.notion.so/my-integrations
2. Click "New integration"
3. Name it "IntegrateWise CMS"
4. Copy the "Internal Integration Token"

### 2. Create Databases
Create four databases in Notion with the following properties:

#### Blog Database
- **Title** (Title)
- **Slug** (Text)
- **Excerpt** (Text)
- **Author** (Text)
- **Published Date** (Date)
- **Category** (Select: Product, Engineering, Company, Customer Success)
- **Tags** (Multi-select)
- **Read Time** (Number)
- **Featured** (Checkbox)
- **Status** (Status: Draft, Published)
- **Cover Image Public ID** (Text) // New field for Cloudinary image

#### Changelog Database
- **Version** (Title)
- **Date** (Date)
- **Title** (Text)
- **Description** (Text)
- **Type** (Select: feature, improvement, fix, breaking)

#### Docs Database
- **Title** (Title)
- **Slug** (Text)
- **Category** (Select)
- **Order** (Number)
- **Published** (Checkbox)

#### Case Studies Database
- **Title** (Title)
- **Slug** (Text)
- **Company** (Text)
- **Industry** (Select)
- **Challenge** (Text)
- **Solution** (Text)
- **Logo** (Files)
- **Published Date** (Date)
- **Status** (Status: Draft, Published)
- **Cover Image Public ID** (Text) // New field for Cloudinary image

### 3. Share Databases with Integration
1. Open each database
2. Click "Share" in top right
3. Add your integration

### 4. Set Environment Variables
```bash
NOTION_TOKEN=your_integration_token
NOTION_BLOG_DATABASE_ID=database_id_here
NOTION_CHANGELOG_DATABASE_ID=database_id_here
NOTION_DOCS_DATABASE_ID=database_id_here
NOTION_CASE_STUDIES_DATABASE_ID=database_id_here
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## Sanity Setup

### 1. Create Sanity Project
```bash
npm create sanity@latest
```

### 2. Set Environment Variables
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 3. Define Schemas
See `lib/cms/adapters/sanity.ts` for schema definitions.

#### Example Schema Update for Blog
```javascript
{
  name: 'blog',
  type: 'document',
  fields: [
    // existing fields...
    {
      name: 'coverImagePublicId',
      type: 'string',
      title: 'Cloudinary Public ID'
    }
  ]
}
```

## Cloudinary Setup

### 1. Create Cloudinary Account
1. Sign up at https://cloudinary.com
2. Go to Dashboard → Settings → Access Keys
3. Copy your Cloud Name, API Key, and API Secret

### 2. Set Environment Variables
```bash
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 3. Upload Images
Images can be uploaded to Cloudinary via:
- Cloudinary Dashboard (Media Library)
- Cloudinary Upload API (server-side)
- Notion/Sanity CMS (store Cloudinary public IDs in content)

### 4. Using Images in CMS

#### In Notion:
Store the Cloudinary public ID in a text field:
```
integratewise/blog/effortless-work-hero
```

#### In Sanity:
Add Cloudinary public ID field to your schemas:
```javascript
{
  name: 'coverImagePublicId',
  type: 'string',
  title: 'Cloudinary Public ID'
}
```

### 5. Image Transformations
The CloudinaryImage component automatically handles:
- Responsive sizing
- Format optimization (WebP, AVIF)
- Quality optimization
- Lazy loading
- Error handling

Example usage:
```tsx
<CloudinaryImage
  publicId="integratewise/blog/my-image"
  alt="Blog post cover"
  width={1200}
  height={630}
  quality="auto"
  format="auto"
/>
```

## Image Organization

Recommended folder structure in Cloudinary:
```
integratewise/
  ├── blog/           # Blog post covers
  ├── case-studies/   # Customer logos and images
  ├── team/           # Team member photos
  ├── products/       # Product screenshots
  └── marketing/      # Marketing assets
```

## Switching Providers

The CMS client auto-detects the provider based on environment variables:
- If `NOTION_TOKEN` is set → Uses Notion
- If `NEXT_PUBLIC_SANITY_PROJECT_ID` is set → Uses Sanity
- Default → Sanity

You can also manually switch:
```typescript
import { cms } from '@/lib/cms'
cms.setProvider('notion')
