# IntegrateWise SEO & Cloudflare Configuration

**Date**: June 9, 2026
**Status**: Production Ready

---

## ✅ FILES CONFIGURED

### 1. `/robots.txt` — Crawler Control

- ✅ Allow all major SEO crawlers (Google, Bing, DuckDuckGo, Yandex)
- ✅ Control AI crawlers with crawl-delay (GPTBot, Claude, ChatGPT, Perplexity)
- ✅ Block aggressive scrapers (AhrefsBot, SemrushBot, MJ12bot)
- ✅ Block bad AI training bots (omgili, peer39)

### 2. `/sitemap.xml` — SEO Index

- ✅ All main pages with priorities and change frequencies
- ✅ Homepage (priority 1.0, daily)
- ✅ Core pages (priority 0.9, weekly)
- ✅ Blog (priority 0.7, weekly)
- ✅ Updated with latest dates

### 3. `/_headers` — Cloudflare Pages Headers

- ✅ Security headers (X-Frame-Options, CSP-lite, etc.)
- ✅ Performance headers (Cache-Control for assets)
- ✅ SEO headers (X-Robots-Tag with rich snippets)
- ✅ CORS for CDN assets

---

## 🤖 CLOUDFLARE BOT MANAGEMENT

### Automatic Bot Management

Cloudflare automatically provides:

- ✅ **Bot Score** (1-99) for every request
- ✅ **Verified Bot Detection** (Google, Bing, etc.)
- ✅ **AI Bot Detection** (GPTBot, Claude, etc.)
- ✅ **DDoS Protection** at L3/L4/L7

### Settings in Cloudflare Dashboard:

#### 1. **Speed Brain (Enabled)**

Path: `Cloudflare Dashboard > Speed > Speed Brain`

Settings:

```
✅ Enable Speed Brain
✅ Crawler Hints (Automatic)
✅ Prefetch URLs on hover
✅ Cache HTML at Edge
```

**What It Does**:

- Hints to search crawlers about important pages
- Prefetches links before user clicks
- Caches HTML at edge for speed

#### 2. **Bot Management (Free Plan)**

Path: `Cloudflare Dashboard > Security > Bots`

Settings:

```
✅ Bot Fight Mode: ON
✅ Verified Bots: Allow (Google, Bing, etc.)
✅ AI Crawlers: Allow with rate limiting
✅ Likely Automated: Challenge
✅ Definitely Automated: Block
```

**What It Does**:

- Allows verified SEO bots
- Challenges suspicious bots
- Blocks malicious automated traffic

#### 3. **Crawler Hints**

Path: `Cloudflare Dashboard > Speed > Crawler Hints`

Settings:

```
✅ Enable Crawler Hints
✅ Generate hints automatically
✅ Priority: High-traffic pages first
```

**What It Does**:

- Sends crawl priority hints to search engines
- Improves crawl efficiency
- Reduces wasted crawler budget

#### 4. **AI Crawl Control**

Path: `Cloudflare Dashboard > Security > AI Crawlers`

Settings:

```
✅ Allow AI Crawlers: Yes
✅ Rate Limit: 10 requests/minute per IP
✅ Log all AI crawler activity
✅ AI Scrapers (training): Block via robots.txt
```

**Blocked AI Scrapers** (in robots.txt):

- `omgili` / `omgilibot`
- `peer39_crawler`

**Allowed with Rate Limits**:

- `GPTBot` (OpenAI)
- `Claude-Web` (Anthropic)
- `Google-Extended` (Google AI)
- `Amazonbot` (Amazon)
- `Applebot-Extended` (Apple)
- `CCBot` (Common Crawl)
- `FacebookBot` (Meta)
- `PerplexityBot` (Perplexity)

---

## 🌐 DNS & SSL SETTINGS

### DNS Configuration (Cloudflare DNS)

#### A/AAAA Records:

```
Type: CNAME
Name: @
Target: integratewise-marketing.pages.dev
Proxied: ✅ Yes (Orange Cloud)
```

```
Type: CNAME
Name: www
Target: integratewise-marketing.pages.dev
Proxied: ✅ Yes (Orange Cloud)
```

#### Why Proxied?

- ✅ Cloudflare edge caching
- ✅ DDoS protection
- ✅ Bot management
- ✅ WAF protection
- ✅ SSL/TLS termination

### SSL/TLS Settings

Path: `Cloudflare Dashboard > SSL/TLS`

#### SSL/TLS Encryption Mode:

```
Mode: Full (strict)
```

#### Edge Certificates:

```
✅ Universal SSL: Enabled
✅ Always Use HTTPS: Enabled
✅ Automatic HTTPS Rewrites: Enabled
✅ Minimum TLS Version: TLS 1.2
✅ Opportunistic Encryption: Enabled
✅ TLS 1.3: Enabled
✅ HTTP Strict Transport Security (HSTS): Enabled

HSTS Settings:
- Max Age: 6 months
- Apply to subdomains: Yes
- Preload: Yes
- No-Sniff Header: Yes
```

---

## 📊 PERFORMANCE OPTIMIZATION

### 1. **Cloudflare Speed Settings**

Path: `Cloudflare Dashboard > Speed > Optimization`

```
✅ Auto Minify: HTML, CSS, JS
✅ Brotli Compression: Enabled
✅ Early Hints: Enabled
✅ HTTP/2: Enabled
✅ HTTP/3 (QUIC): Enabled
✅ 0-RTT Connection Resumption: Enabled
✅ WebSockets: Enabled
✅ Rocket Loader: Disabled (conflicts with CDN scripts)
```

### 2. **Caching Configuration**

Path: `Cloudflare Dashboard > Caching > Configuration`

```
Caching Level: Standard
Browser Cache TTL: Respect Existing Headers
Always Online: Enabled
Development Mode: Off (production)
```

**Cache Rules** (via `_headers` file):

- HTML: 1 hour (3600s)
- Images/Assets: 1 year (31536000s)
- Sitemap/Robots: 1 hour (3600s)

### 3. **Page Rules** (Optional Enhanced)

Path: `Cloudflare Dashboard > Rules > Page Rules`

```
Rule 1: Cache Everything (Static Pages)
URL: integratewise.ai/*
Settings:
  - Cache Level: Cache Everything
  - Edge Cache TTL: 2 hours
  - Browser Cache TTL: 1 hour

Rule 2: API No Cache
URL: integratewise.ai/api/*
Settings:
  - Cache Level: Bypass
  - Disable Security
```

---

## 🔍 SEARCH ENGINE VERIFICATION

### Google Search Console

1. Add property: `https://integratewise.ai`
2. Verify via DNS TXT record:
   ```
   Type: TXT
   Name: @
   Value: google-site-verification=<YOUR_CODE>
   ```
3. Submit sitemap: `https://integratewise.ai/sitemap.xml`

### Bing Webmaster Tools

1. Add site: `https://integratewise.ai`
2. Verify via DNS TXT or meta tag
3. Submit sitemap

### Additional Verifications:

- [ ] Google Search Console
- [ ] Bing Webmaster Tools
- [ ] Yandex Webmaster
- [ ] Cloudflare Web Analytics

---

## 📈 CRAWLER BUDGET OPTIMIZATION

### Priority Signals (in sitemap.xml):

```
Priority 1.0 (Highest):
  - Homepage (/)

Priority 0.9 (Very High):
  - Features, How It Works, Pricing

Priority 0.8 (High):
  - Contact

Priority 0.7 (Medium):
  - About, Blog Index

Priority 0.6 (Normal):
  - Blog Posts
```

### Change Frequency Signals:

```
Daily:
  - Homepage (frequent updates)

Weekly:
  - Core product pages
  - Blog index

Monthly:
  - About, Contact
  - Individual blog posts
```

---

## 🛡️ SECURITY HEADERS (via \_headers)

```
X-Frame-Options: SAMEORIGIN
  → Prevents clickjacking

X-Content-Type-Options: nosniff
  → Prevents MIME sniffing attacks

X-XSS-Protection: 1; mode=block
  → Blocks XSS attacks

Referrer-Policy: strict-origin-when-cross-origin
  → Privacy-preserving referrers

Permissions-Policy: ...
  → Disables unnecessary browser APIs
```

---

## 🤖 AI CRAWLER RATE LIMITING

### Crawl-Delay Settings (in robots.txt):

```
Googlebot: 0.5s (fastest, trusted)
Bingbot: 1s
DuckDuckBot: 1s
Yandex: 1s

GPTBot: 2s (AI training)
Claude-Web: 2s
Google-Extended: 1s
Perplexity: 2s
Amazonbot: 2s
```

### Why Rate Limit AI Crawlers?

- Prevents server overload
- Controls bandwidth costs
- Allows indexing but limits training scraping
- Prioritizes SEO crawlers over AI training

---

## 📊 MONITORING & ANALYTICS

### Cloudflare Analytics

Path: `Cloudflare Dashboard > Analytics > Traffic`

Monitor:

- ✅ Bot traffic (verified vs. automated)
- ✅ AI crawler activity
- ✅ Geographic distribution
- ✅ Cache hit ratio
- ✅ Bandwidth usage
- ✅ Performance metrics

### Google Analytics 4

Add to all pages (optional):

```html
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
></script>
```

### Cloudflare Web Analytics (Privacy-Friendly)

Add beacon script:

```html
<script
  defer
  src="https://static.cloudflareinsights.com/beacon.min.js"
  data-cf-beacon='{"token": "YOUR_TOKEN"}'
></script>
```

---

## ✅ DEPLOYMENT CHECKLIST

### Before Deploy:

- [x] `robots.txt` updated with AI crawler rules
- [x] `sitemap.xml` updated with all pages
- [x] `_headers` file created with security + SEO headers
- [x] All pages have proper meta tags
- [x] All pages have canonical URLs
- [x] Contact emails correct (nirmal@, connect@)

### After Deploy:

- [ ] Verify `https://integratewise.ai/robots.txt` loads
- [ ] Verify `https://integratewise.ai/sitemap.xml` loads
- [ ] Test headers with: `curl -I https://integratewise.ai/`
- [ ] Check SSL: `https://www.ssllabs.com/ssltest/`
- [ ] Verify Speed Brain in Cloudflare Dashboard
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Enable Cloudflare Web Analytics

### DNS Check:

```bash
dig integratewise.ai
nslookup integratewise.ai
```

Should show Cloudflare IPs (proxied).

---

## 🚀 EXPECTED OUTCOMES

### SEO Impact:

- ✅ Faster crawling (crawler hints + optimized priorities)
- ✅ Better indexing (proper sitemap + robots.txt)
- ✅ Rich snippets (X-Robots-Tag headers)
- ✅ Mobile-first (responsive design + performance)

### Performance Impact:

- ✅ <500ms TTFB (Cloudflare edge caching)
- ✅ <2s LCP (optimized images + CDN)
- ✅ 90+ Lighthouse score (headers + optimization)

### Security Impact:

- ✅ A+ SSL Labs rating
- ✅ Bot traffic controlled
- ✅ DDoS protected
- ✅ AI scraping rate-limited

---

## 📞 SUPPORT & TROUBLESHOOTING

### If Crawlers Are Blocked:

1. Check `robots.txt` — ensure user-agent is allowed
2. Check Cloudflare Bot Fight Mode — may be too aggressive
3. Check rate limiting — may be hitting limits

### If Pages Aren't Indexed:

1. Verify sitemap submission
2. Check Google Search Console for errors
3. Verify robots.txt allows indexing
4. Check X-Robots-Tag headers
5. Ensure pages return 200 OK

### If Performance Is Slow:

1. Check Cloudflare cache hit ratio
2. Verify HTTP/3 is enabled
3. Check asset compression (Brotli)
4. Review cache headers in `_headers`

---

## 🔗 USEFUL CLOUDFLARE LINKS

- Speed Brain: `dashboard.cloudflare.com/<account>/speed`
- Bot Management: `dashboard.cloudflare.com/<account>/security/bots`
- SSL/TLS: `dashboard.cloudflare.com/<account>/ssl-tls`
- DNS: `dashboard.cloudflare.com/<account>/dns`
- Analytics: `dashboard.cloudflare.com/<account>/analytics`

---

**All SEO and crawler configurations are production-ready. Deploy and monitor!**
