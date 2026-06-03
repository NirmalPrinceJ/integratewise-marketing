# CMS & Error Tracking Setup Guide

This guide walks you through setting up Sanity CMS and Sentry error tracking for your IntegrateWise marketing site.

## Overview

Your site now has three new systems:
- **Sanity CMS**: Manage blog posts, resources, articles, and white papers
- **Frontend Error Tracking**: Sentry on client-side for user-facing errors
- **Backend Error Tracking**: Sentry on Cloudflare Workers for API errors

## Step 1: Set Up Sanity CMS

### Create a Sanity Project

1. Go to [sanity.io](https://sanity.io) and sign up
2. Create a new project
3. Choose "Blog" or custom template
4. Note your **Project ID** and **Dataset** name

### Configure Sanity in Your Project

1. Update `wrangler.toml` with your credentials:
```toml
[vars]
SANITY_PROJECT_ID = "your-project-id"
SANITY_DATASET = "production"
SANITY_API_VERSION = "2024-01-01"
```

2. Your schemas are pre-configured in `/sanity/schema.js`
3. Deploy your Sanity schema to your project

### Publish Content

1. Go to your Sanity Studio: `https://your-project-id.sanity.studio`
2. Create content for:
   - **Blog Posts** (`/blog`)
   - **Resources** (`/resources`)
   - **Articles** (`/articles`)
   - **White Papers** (`/white-papers`)

3. The content will automatically appear on your site via `/api/content` endpoint

## Step 2: Set Up Sentry Error Tracking

### Frontend Sentry (Browser Errors)

1. Go to [sentry.io](https://sentry.io) and create an account
2. Create a new project for "JavaScript"
3. Copy your **DSN** (looks like: `https://xxx@ooo.ingest.sentry.io/123`)
4. Update `wrangler.toml`:
```toml
SENTRY_DSN_FRONTEND = "your-frontend-dsn"
```

5. Update Sentry DSN in these files:
   - `/index.html` - Main page
   - `/public/js/sentry-init.js` - Global config
   - `/public/blog/index.html` - Blog listing
   - `/public/blog/[slug].html` - Individual blog post
   - `/public/resources/index.html` - Resources
   - `/public/articles/index.html` - Articles
   - `/public/white-papers/index.html` - White papers

Replace `'YOUR_SENTRY_DSN_FRONTEND'` with your actual DSN.

### Backend Sentry (API Errors)

1. Create another Sentry project for "Node.js"
2. Copy your backend **DSN**
3. Update `wrangler.toml`:
```toml
SENTRY_DSN_BACKEND = "your-backend-dsn"
```

The backend tracking is already integrated in:
- `/functions/api/contact.js` - Contact form
- `/functions/api/content.js` - Content API

Replace `'YOUR_SENTRY_DSN_BACKEND'` with your actual DSN.

## Step 3: File Structure

### Content Management
- `/sanity/schema.js` - Content type definitions
- `/sanity/client.js` - Sanity API client
- `/functions/api/content.js` - API endpoint to fetch content

### Content Pages
- `/public/blog/index.html` - Blog listing page
- `/public/blog/[slug].html` - Individual blog post
- `/public/resources/index.html` - Resources listing
- `/public/articles/index.html` - Articles listing
- `/public/white-papers/index.html` - White papers listing

### Error Tracking
- `/public/js/sentry-init.js` - Frontend Sentry initialization
- `/functions/api/contact.js` - Backend Sentry in contact API
- `/functions/api/content.js` - Backend Sentry in content API

## Step 4: URL Routes

Your content is now accessible at:
- `https://yourdomain.com/blog/` - All blog posts
- `https://yourdomain.com/blog/my-post-slug` - Individual post
- `https://yourdomain.com/resources/` - All resources
- `https://yourdomain.com/articles/` - All articles
- `https://yourdomain.com/white-papers/` - All white papers

All routes are independent from your main landing page and don't interfere with existing functionality.

## Step 5: Environment Variables

Add these to your Vercel project settings:

```
SANITY_PROJECT_ID=your-sanity-project-id
SANITY_DATASET=production
SANITY_API_VERSION=2024-01-01
SENTRY_DSN_FRONTEND=https://xxx@ooo.ingest.sentry.io/123
SENTRY_DSN_BACKEND=https://yyy@ppp.ingest.sentry.io/456
SENTRY_ENVIRONMENT=production
SENTRY_RELEASE=1.0.0
```

## Step 6: Monitoring & Analytics

### Sentry Dashboard
- Track all frontend and backend errors in real-time
- Get alerts for critical issues
- View replay of user sessions where errors occurred
- Performance monitoring for slow API calls

### Sanity Studio
- Manage all your content in one place
- Schedule content publication
- Collaborate with team members
- Preview content before publishing

## Content API Reference

Fetch content via `/api/content`:

```javascript
// Get all blog posts
fetch('/api/content?type=blog&limit=10')

// Get specific blog post
fetch('/api/content?type=blog&slug=my-post-slug')

// Get resources
fetch('/api/content?type=resource&limit=12')

// Get articles
fetch('/api/content?type=article&limit=20')

// Get white papers
fetch('/api/content?type=whitepaper&limit=10')
```

## Troubleshooting

### Content not showing up?
1. Check Sanity Studio - make sure content is published
2. Check browser console for errors
3. Check Sentry dashboard for API errors
4. Verify environment variables are set

### Errors not being tracked?
1. Check that Sentry DSN is correctly set
2. Open browser console and look for initialization message
3. Verify network requests to sentry.io are not blocked

### Styling looks off?
- Each content page uses inline CSS for independence
- The design matches your existing site theme
- Customize in each HTML file's `<style>` section

## Next Steps

1. Set up your Sanity account and configure it
2. Add your Sentry DSNs to the environment
3. Create your first blog post in Sanity Studio
4. Test on staging before deploying to production
5. Monitor errors in Sentry dashboard

For more help:
- Sanity docs: https://www.sanity.io/docs
- Sentry docs: https://docs.sentry.io/
- Cloudflare Pages: https://developers.cloudflare.com/pages/
