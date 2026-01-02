# CMS Setup Guide

IntegrateWise supports both **Sanity** and **Notion** as CMS providers.

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
```

### 3. Define Schemas
See `lib/cms/adapters/sanity.ts` for schema definitions.

## Switching Providers

The CMS client auto-detects the provider based on environment variables:
- If `NOTION_TOKEN` is set → Uses Notion
- If `NEXT_PUBLIC_SANITY_PROJECT_ID` is set → Uses Sanity
- Default → Sanity

You can also manually switch:
```typescript
import { cms } from '@/lib/cms'
cms.setProvider('notion')
