// Individual blog post page - fetches single post from Sanity CMS
export async function onRequestGet(context) {
  const { request, env } = context
  const url = new URL(request.url)
  const pathParts = url.pathname.split('/')
  const slug = pathParts[pathParts.length - 1].replace('.html', '')
  
  let post = null
  let error = null
  
  try {
    const apiUrl = new URL(`/api/content?type=blog&slug=${slug}`, url.origin)
    const response = await fetch(apiUrl.toString(), {
      headers: { 'Accept': 'application/json' }
    })
    
    if (response.ok) {
      const data = await response.json()
      post = data.data
    }
  } catch (e) {
    console.error('Failed to fetch blog post:', e)
    error = 'Content temporarily unavailable'
  }

  if (!post && !error) {
    return new Response('Post not found', { status: 404 })
  }

  const html = generatePostHTML({ post, error, env, url })
  
  return new Response(html, {
    headers: {
      'Content-Type': 'text/html',
      'Cache-Control': 'public, max-age=60, stale-while-revalidate=300'
    }
  })
}

function generatePostHTML({ post, error, env, url }) {
  const siteUrl = env.SITE_URL || 'https://integratewise.ai'
  const canonicalUrl = `${siteUrl}${url.pathname}`
  
  if (error) {
    return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Content Unavailable — IntegrateWise Blog</title>
  <style>body{font-family:system-ui,sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;background:#f4f0e8;color:#1a3a2a;text-align:center}
  h1{font-size:2rem;margin-bottom:1rem}p{opacity:0.7}</style>
</head>
<body><div><h1>Content Unavailable</h1><p>${error}</p><a href="/blog/">← Back to blog</a></div></body></html>`
  }

  const publishDate = post.publishDate 
    ? new Date(post.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : ''
  
  const metaDesc = post.metaDescription || post.excerpt || ''
  const phaseColors = {
    awareness: '#3d7a50',
    consideration: '#1a2e4a',
    conversion: '#b8943f'
  }
  
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${post.title} — IntegrateWise Blog</title>
  <meta name="description" content="${metaDesc}" />
  <link rel="canonical" href="${canonicalUrl}" />
  
  <!-- Open Graph -->
  <meta property="og:type" content="article" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:title" content="${post.title}" />
  <meta property="og:description" content="${metaDesc}" />
  <meta property="og:site_name" content="IntegrateWise" />
  <meta property="article:published_time" content="${post.publishDate || ''}" />
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:title" content="${post.title}" />
  <meta property="twitter:description" content="${metaDesc}" />
  
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Serif+Display:ital@0;1&family=IBM+Plex+Mono:wght@400;500;600&family=Instrument+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <style>
    :root {
      --iw-green: #1a3a2a;
      --iw-green-light: #3d7a50;
      --iw-blue: #1a2e4a;
      --iw-gold: #b8943f;
      --iw-cream: #f4f0e8;
      --iw-cream-dark: #e5e0d5;
      --iw-text: #0c0c0c;
      --iw-text-secondary: #5a5a5a;
      --font-display: 'Bebas Neue', sans-serif;
      --font-serif: 'DM Serif Display', serif;
      --font-body: 'Instrument Sans', sans-serif;
      --font-mono: 'IBM Plex Mono', monospace;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: var(--font-body);
      background: var(--iw-cream);
      color: var(--iw-text);
      line-height: 1.6;
    }
    .container { max-width: 800px; margin: 0 auto; padding: 0 24px; }
    header {
      background: var(--iw-green);
      padding: 16px 0;
      position: sticky;
      top: 0;
      z-index: 100;
      border-bottom: 1px solid rgba(244,240,232,0.1);
    }
    header .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
    }
    .logo {
      font-family: var(--font-display);
      font-size: 28px;
      color: var(--iw-cream);
      text-decoration: none;
      letter-spacing: 1px;
    }
    .logo span { color: var(--iw-gold); }
    nav a {
      color: var(--iw-cream);
      text-decoration: none;
      margin-left: 32px;
      font-weight: 500;
      font-size: 14px;
    }
    nav a:hover { color: var(--iw-gold); }
    .article-hero {
      background: var(--iw-green);
      color: var(--iw-cream);
      padding: 80px 0 60px;
    }
    .article-hero .container { max-width: 800px; }
    .article-hero .meta {
      font-family: var(--font-mono);
      font-size: 13px;
      opacity: 0.8;
      margin-bottom: 20px;
    }
    .article-hero .meta span {
      background: rgba(244,240,232,0.15);
      padding: 4px 12px;
      border-radius: 4px;
      margin-right: 12px;
    }
    .article-hero h1 {
      font-family: var(--font-display);
      font-size: 52px;
      line-height: 1.1;
      letter-spacing: 1px;
      margin-bottom: 20px;
    }
    .article-hero .excerpt {
      font-family: var(--font-serif);
      font-style: italic;
      font-size: 20px;
      opacity: 0.9;
      line-height: 1.5;
    }
    .article-body {
      background: #fff;
      padding: 60px 0;
      min-height: 400px;
    }
    .article-body .container {
      font-size: 18px;
      line-height: 1.8;
      color: var(--iw-text);
    }
    .article-body h2 {
      font-family: var(--font-display);
      font-size: 32px;
      color: var(--iw-green);
      margin: 48px 0 24px;
      letter-spacing: 0.5px;
    }
    .article-body h3 {
      font-family: var(--font-display);
      font-size: 24px;
      color: var(--iw-green);
      margin: 36px 0 16px;
    }
    .article-body p {
      margin-bottom: 24px;
    }
    .article-body ul, .article-body ol {
      margin: 24px 0;
      padding-left: 28px;
    }
    .article-body li {
      margin-bottom: 12px;
    }
    .article-body blockquote {
      border-left: 4px solid var(--iw-gold);
      padding-left: 24px;
      margin: 32px 0;
      font-family: var(--font-serif);
      font-style: italic;
      font-size: 20px;
      color: var(--iw-text-secondary);
    }
    .article-body img {
      max-width: 100%;
      border-radius: 8px;
      margin: 32px 0;
    }
    .cta-box {
      background: var(--iw-green);
      color: var(--iw-cream);
      padding: 40px;
      border-radius: 8px;
      margin: 48px 0;
      text-align: center;
    }
    .cta-box h3 {
      font-family: var(--font-display);
      font-size: 28px;
      color: var(--iw-gold);
      margin-bottom: 16px;
    }
    .cta-box p {
      margin-bottom: 24px;
      opacity: 0.9;
    }
    .cta-box a {
      display: inline-block;
      background: var(--iw-gold);
      color: var(--iw-green);
      padding: 14px 32px;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 600;
      font-size: 16px;
    }
    .cta-box a:hover {
      background: var(--iw-cream);
    }
    .back-link {
      display: inline-block;
      margin-bottom: 40px;
      color: var(--iw-gold);
      text-decoration: none;
      font-weight: 600;
    }
    .back-link:hover { color: var(--iw-green); }
    footer {
      background: var(--iw-green);
      color: var(--iw-cream);
      padding: 48px 0;
      text-align: center;
    }
    footer .logo { margin-bottom: 16px; display: inline-block; }
    footer p { opacity: 0.7; font-size: 14px; }
    @media (max-width: 768px) {
      .article-hero h1 { font-size: 36px; }
      .article-hero { padding: 60px 0 40px; }
      nav a { margin-left: 16px; font-size: 13px; }
    }
  </style>
</head>
<body>
  <header>
    <div class="container">
      <a href="/" class="logo">Integrate<span>Wise</span></a>
      <nav>
        <a href="/">Home</a>
        <a href="/blog/">Blog</a>
        <a href="/#features">Features</a>
        <a href="/#contact">Contact</a>
      </nav>
    </div>
  </header>

  <article>
    <div class="article-hero">
      <div class="container">
        <div class="meta">
          <span>${post.phase ? post.phase.charAt(0).toUpperCase() + post.phase.slice(1) : 'Article'}</span>
          <span>${publishDate}</span>
          <span>${post.readTime || '5 min read'}</span>
        </div>
        <h1>${post.title}</h1>
        <p class="excerpt">${post.excerpt || ''}</p>
      </div>
    </div>

    <div class="article-body">
      <div class="container">
        <a href="/blog/" class="back-link">← Back to all articles</a>
        
        ${renderContent(post.content)}
        
        ${post.cta ? `
        <div class="cta-box">
          <h3>${post.cta.text || 'Ready to connect your tools?'}</h3>
          <p>See how IntegrateWise brings your CRM, support, billing, and AI agents into one unified workspace.</p>
          <a href="${post.cta.link || '/#contact'}">${post.cta.text || 'Get started'} →</a>
        </div>
        ` : ''}
      </div>
    </div>
  </article>

  <footer>
    <div class="container">
      <a href="/" class="logo">Integrate<span>Wise</span></a>
      <p>© 2026 IntegrateWise. One context layer. All your tools. Finally connected.</p>
    </div>
  </footer>
</body>
</html>`
}

function renderContent(content) {
  if (!content || !Array.isArray(content)) {
    return '<p>Content coming soon...</p>'
  }
  
  return content.map(block => {
    if (block._type === 'block') {
      const text = block.children?.map(child => child.text).join('') || ''
      
      switch (block.style) {
        case 'h2':
          return `<h2>${text}</h2>`
        case 'h3':
          return `<h3>${text}</h3>`
        case 'blockquote':
          return `<blockquote>${text}</blockquote>`
        default:
          return `<p>${text}</p>`
      }
    }
    
    if (block._type === 'image') {
      return `<img src="${block.asset?.url || ''}" alt="" />`
    }
    
    return ''
  }).join('')
}
