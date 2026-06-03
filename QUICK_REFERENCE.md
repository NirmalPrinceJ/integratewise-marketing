#!/bin/bash
# Quick Reference: Environment Variables & Setup

# =============================================================================
# STEP 1: Sanity CMS Setup
# =============================================================================
# 1. Create project at https://sanity.io
# 2. Get your Project ID from Sanity settings
# 3. Add to wrangler.toml:

# SANITY_PROJECT_ID=oayFkBJnd
# SANITY_DATASET=production
# SANITY_API_VERSION=2024-01-01

# =============================================================================
# STEP 2: Sentry Frontend Setup
# =============================================================================
# 1. Create JavaScript project at https://sentry.io
# 2. Copy your DSN
# 3. Add to wrangler.toml:

# SENTRY_DSN_FRONTEND=https://key@org.ingest.sentry.io/project-id

# 4. Update DSN in these files:
#    - /index.html (search for YOUR_SENTRY_DSN_FRONTEND)
#    - /public/js/sentry-init.js
#    - /public/blog/index.html
#    - /public/blog/[slug].html
#    - /public/resources/index.html
#    - /public/articles/index.html
#    - /public/white-papers/index.html

# =============================================================================
# STEP 3: Sentry Backend Setup
# =============================================================================
# 1. Create Node.js project at https://sentry.io
# 2. Copy your DSN
# 3. Add to wrangler.toml:

# SENTRY_DSN_BACKEND=https://key@org.ingest.sentry.io/project-id
# SENTRY_ENVIRONMENT=production
# SENTRY_RELEASE=1.0.0

# 4. Backend errors are already tracked in:
#    - /functions/api/contact.js
#    - /functions/api/content.js

# =============================================================================
# Environment Variables Checklist
# =============================================================================
# [ ] SANITY_PROJECT_ID
# [ ] SANITY_DATASET
# [ ] SANITY_API_VERSION
# [ ] SENTRY_DSN_FRONTEND
# [ ] SENTRY_DSN_BACKEND
# [ ] SENTRY_ENVIRONMENT
# [ ] SENTRY_RELEASE
# [ ] WEB3FORMS_ACCESS_KEY (existing)

# =============================================================================
# Test Content API (after setup)
# =============================================================================
# Get all blog posts:
# curl "https://yourdomain.com/api/content?type=blog&limit=10"

# Get specific blog post:
# curl "https://yourdomain.com/api/content?type=blog&slug=my-post-slug"

# Get resources:
# curl "https://yourdomain.com/api/content?type=resource&limit=12"

# Get articles:
# curl "https://yourdomain.com/api/content?type=article&limit=20"

# Get white papers:
# curl "https://yourdomain.com/api/content?type=whitepaper&limit=10"

# =============================================================================
# New URLs (after publishing content to Sanity)
# =============================================================================
# Blog home:        https://yourdomain.com/blog/
# Blog post:        https://yourdomain.com/blog/my-post-slug
# Resources:        https://yourdomain.com/resources/
# Articles:         https://yourdomain.com/articles/
# White Papers:     https://yourdomain.com/white-papers/

# =============================================================================
# Monitoring Dashboards
# =============================================================================
# Sanity Studio:    https://your-project-id.sanity.studio
# Sentry Errors:    https://sentry.io/organizations/your-org/issues/
# Sentry Releases:  https://sentry.io/organizations/your-org/releases/

# =============================================================================
# Files Modified/Created
# =============================================================================
# MODIFIED:
#   - wrangler.toml (added Sanity & Sentry vars)
#   - index.html (added Sentry init)
#   - functions/api/contact.js (added Sentry tracking)

# CREATED:
#   - sanity/schema.js (content types)
#   - sanity/client.js (Sanity API client)
#   - functions/api/content.js (content endpoint)
#   - public/blog/index.html (blog listing)
#   - public/blog/[slug].html (blog post)
#   - public/resources/index.html (resources)
#   - public/articles/index.html (articles)
#   - public/white-papers/index.html (white papers)
#   - public/js/sentry-init.js (Sentry config)
#   - public/js/content-utils.js (rendering utils)
#   - CMS_SETUP_GUIDE.md (setup instructions)
#   - INTEGRATION_SUMMARY.md (feature overview)
#   - QUICK_REFERENCE.md (this file)

# =============================================================================
# Troubleshooting Quick Fixes
# =============================================================================

# Issue: "Content not showing on pages"
# Fix: Check that content is published in Sanity Studio

# Issue: "Errors not appearing in Sentry"
# Fix: Verify DSN is correct in env vars and HTML files

# Issue: "API returns 404"
# Fix: Check Sanity Project ID and Dataset name are correct

# Issue: "Styling looks different"
# Fix: Each content page has inline CSS - customize in the HTML file

# Issue: "Contact form not working"
# Fix: Ensure WEB3FORMS_ACCESS_KEY is set and email domain is verified

# =============================================================================
# Need Help?
# =============================================================================
# Sanity:     https://www.sanity.io/docs
# Sentry:     https://docs.sentry.io/
# Cloudflare: https://developers.cloudflare.com/pages/
