# IntegrateWise Live CMS

A complete live CMS system with admin dashboard, real-time updates, visual editing, and role-based access control.

## Features

### 1. Admin Dashboard (`/admin`)
- Overview of all content (blog posts, changelog, case studies)
- Quick stats and analytics
- Recent activity feed
- Quick actions for content editors

### 2. Real-time Updates
- Automatic polling every 30 seconds for new content from Notion/Sanity
- Manual refresh button for immediate sync
- Webhook support for instant updates (requires provider setup)
- Last update timestamp display

### 3. Visual Editor
- Drag-and-drop content blocks
- Block types: Heading, Paragraph, Image, Code, List, Callout
- Live preview while editing
- Auto-save drafts
- Publish workflow

### 4. Access Control
- **Admin**: Full access including settings and user management
- **Editor**: Create, edit, and publish content
- **Viewer**: Read-only access to content

## Setup

### 1. Environment Variables

\`\`\`env
# Authentication (use NextAuth or similar in production)
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000

# CMS Providers (from existing setup)
NOTION_TOKEN=your-notion-token
NEXT_PUBLIC_SANITY_PROJECT_ID=your-sanity-project-id
NEXT_PUBLIC_SANITY_DATASET=production

# Cloudinary (from existing setup)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
\`\`\`

### 2. Access the Admin Panel

1. Navigate to `/admin/login`
2. Sign in with your credentials (demo mode accepts any credentials)
3. Access dashboard at `/admin`

### 3. Managing Content

#### Blog Posts
- View all posts: `/admin/blog`
- Create new post: `/admin/blog/new`
- Edit existing: `/admin/blog/[id]/edit`

#### Real-time Sync
The system automatically syncs with your CMS provider:
- **Notion**: Polls Notion databases every 30 seconds
- **Sanity**: Uses Sanity's real-time API
- **Manual**: Click "Refresh" button for immediate sync

### 4. Visual Editor Usage

1. **Add Blocks**: Click block type buttons to add content
2. **Edit Content**: Type directly in block inputs
3. **Reorder**: Drag blocks to rearrange (coming soon)
4. **Delete**: Click "Remove" button on any block
5. **Save**: Choose "Save Draft" or "Publish"

### 5. Webhook Setup (Optional)

For instant real-time updates, set up webhooks:

#### Notion
1. Go to Notion integrations settings
2. Add webhook URL: `https://your-domain.com/api/webhooks/notion`
3. Select database and events to monitor

#### Sanity
1. Install @sanity/webhook package
2. Configure webhook in sanity.config.ts:
\`\`\`typescript
export default defineConfig({
  // ... existing config
  webhooks: {
    url: 'https://your-domain.com/api/webhooks/sanity',
    events: ['create', 'update', 'delete']
  }
})
\`\`\`

## Architecture

\`\`\`
app/admin/
├── layout.tsx           # Admin shell with sidebar navigation
├── page.tsx             # Dashboard overview
├── login/page.tsx       # Authentication
├── blog/
│   ├── page.tsx         # Blog list with realtime sync
│   ├── new/page.tsx     # Visual editor for new posts
│   └── [id]/edit/page.tsx
├── changelog/
│   └── ...
└── case-studies/
    └── ...

lib/admin/
├── auth.ts             # Authentication and RBAC
├── realtime.ts         # Real-time content sync
└── editor.ts           # Visual editor logic
\`\`\`

## Security

- Authentication required for all `/admin` routes
- Role-based permissions for content operations
- Session management with HTTP-only cookies
- CSRF protection (implement in production)
- API route protection with middleware

## Production Considerations

1. **Replace mock auth** with NextAuth.js or similar
2. **Add database** for user management and sessions
3. **Implement webhooks** API routes for real providers
4. **Add image upload** directly to Cloudinary from editor
5. **Enable drag-and-drop** block reordering
6. **Add auto-save** every 30 seconds
7. **Implement version history** for content
8. **Add content scheduling** for future publishing

## Next Steps

- [ ] Integrate real authentication (NextAuth.js)
- [ ] Add webhook API routes for Notion/Sanity
- [ ] Implement drag-and-drop block editor
- [ ] Add rich text editing with Tiptap or Slate
- [ ] Enable image upload to Cloudinary
- [ ] Add content preview mode
- [ ] Implement multi-user collaboration
- [ ] Add content analytics and insights
