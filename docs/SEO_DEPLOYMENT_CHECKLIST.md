# IntegrateWise SEO Deployment Checklist

**Date**: June 9, 2026
**Status**: Ready to Deploy

---

## ✅ FILES CREATED/UPDATED

- [x] `/robots.txt` — AI crawler control + SEO crawler optimization
- [x] `/sitemap.xml` — Complete page index with priorities
- [x] `/_headers` — Cloudflare Pages headers (security + SEO + performance)
- [x] `SEO_CLOUDFLARE_SETUP.md` — Complete setup guide
- [x] `SEO_DEPLOYMENT_CHECKLIST.md` — This file

---

## 🚀 PRE-DEPLOYMENT CHECKLIST

### 1. File Verification

```bash
cd /Users/nirmal/Github/integratewise-marketing

# Check files exist
ls -la robots.txt
ls -la sitemap.xml
ls -la _headers

# Verify robots.txt format
cat robots.txt | head -20

# Verify sitemap.xml format
cat sitemap.xml | head -20
```

### 2. Local Testing

```bash
# Start local server
npx wrangler pages dev . --port 8788

# Test in browser:
# - http://localhost:8788/robots.txt
# - http://localhost:8788/sitemap.xml
# - http://localhost:8788/ (verify headers in DevTools)
```

### 3. Content Verification

- [ ] All pages have updated meta titles/descriptions
- [ ] All pages have canonical URLs
- [ ] Homepage has ownership layer positioning
- [ ] Contact emails correct (nirmal@, connect@)
- [ ] CDN logos loading correctly

---

## 📤 DEPLOYMENT STEPS

### Option 1: Git Push (Automatic Deploy)

```bash
cd /Users/nirmal/Github/integratewise-marketing

# Stage files
git add robots.txt sitemap.xml _headers
git add SEO_CLOUDFLARE_SETUP.md SEO_DEPLOYMENT_CHECKLIST.md
git add index.html features.html how-it-works.html pricing.html about.html contact.html

# Commit
git commit -m "feat: add SEO optimization (robots.txt, sitemap, crawler control, ownership layer positioning)"

# Push (triggers Cloudflare Pages auto-deploy)
git push origin main
```

### Option 2: Manual Deploy via Wrangler

```bash
cd /Users/nirmal/Github/integratewise-marketing

# Deploy to Cloudflare Pages
npx wrangler pages deploy . --project-name=integratewise-marketing

# Or deploy to specific branch
npx wrangler pages deploy . --project-name=integratewise-marketing --branch=production
```

---

## 🔍 POST-DEPLOYMENT VERIFICATION

### 1. Core Files Check

```bash
# Test robots.txt
curl https://integratewise.ai/robots.txt

# Expected: Should show AI crawler rules + sitemap

# Test sitemap.xml
curl https://integratewise.ai/sitemap.xml

# Expected: Should show all pages with priorities

# Test headers
curl -I https://integratewise.ai/

# Expected: Should show X-Frame-Options, X-Content-Type-Options, etc.
```

### 2. Browser Tests

- [ ] Visit https://integratewise.ai/robots.txt
- [ ] Visit https://integratewise.ai/sitemap.xml
- [ ] Open DevTools > Network > Check response headers
- [ ] Verify homepage loads with new positioning
- [ ] Verify all pages return 200 OK

### 3. SSL/TLS Check

```bash
# Test SSL configuration
curl -I https://integratewise.ai/ | grep -i "strict-transport"

# Or use online tool:
# https://www.ssllabs.com/ssltest/analyze.html?d=integratewise.ai
```

Expected: A or A+ rating

---

## ⚙️ CLOUDFLARE DASHBOARD CONFIGURATION

### 1. Speed Brain

Path: `Dashboard > Speed > Speed Brain`

```
✅ Enable Speed Brain
✅ Crawler Hints: Automatic
✅ Prefetch URLs: On hover
```

### 2. Bot Management

Path: `Dashboard > Security > Bots`

```
✅ Bot Fight Mode: ON
✅ Verified Bots: Allow (Google, Bing, etc.)
✅ AI Crawlers: Allow with rate limiting
```

### 3. SSL/TLS Settings

Path: `Dashboard > SSL/TLS`

```
Mode: Full (strict)
✅ Always Use HTTPS: Enabled
✅ Automatic HTTPS Rewrites: Enabled
✅ Minimum TLS Version: TLS 1.2
✅ HSTS: Enabled (6 months, preload)
```

### 4. Caching Configuration

Path: `Dashboard > Caching > Configuration`

```
Caching Level: Standard
Browser Cache TTL: Respect Existing Headers
✅ Always Online: Enabled
```

### 5. Speed Optimization

Path: `Dashboard > Speed > Optimization`

```
✅ Auto Minify: HTML, CSS, JS
✅ Brotli Compression: Enabled
✅ Early Hints: Enabled
✅ HTTP/3 (QUIC): Enabled
```

---

## 🔗 SEARCH ENGINE SUBMISSION

### Google Search Console

1. Go to: https://search.google.com/search-console
2. Add property: `https://integratewise.ai`
3. Verify via DNS TXT record or HTML file
4. Submit sitemap: `https://integratewise.ai/sitemap.xml`
5. Request indexing for key pages

### Bing Webmaster Tools

1. Go to: https://www.bing.com/webmasters
2. Add site: `https://integratewise.ai`
3. Verify via DNS or meta tag
4. Submit sitemap: `https://integratewise.ai/sitemap.xml`

### Additional Submissions

- [ ] Yandex Webmaster (if targeting Russia/Eastern Europe)
- [ ] DuckDuckGo (automatic via robots.txt)
- [ ] Cloudflare Web Analytics (privacy-friendly)

---

## 📊 MONITORING SETUP

### Cloudflare Analytics

Path: `Dashboard > Analytics > Traffic`

Monitor:

- Bot traffic (verified vs automated)
- AI crawler activity
- Cache hit ratio
- Bandwidth usage
- Performance metrics

### Set Up Alerts

Path: `Dashboard > Notifications`

Create alerts for:

- [ ] High bot traffic (>1000 req/hr)
- [ ] SSL certificate expiry
- [ ] DDoS attacks
- [ ] Origin server down

---

## ✅ 24-HOUR POST-DEPLOY CHECKS

### Day 1: Immediate Checks

- [ ] All pages return 200 OK
- [ ] robots.txt accessible
- [ ] sitemap.xml accessible
- [ ] Headers present (curl -I test)
- [ ] SSL A+ rating
- [ ] No 404 errors in logs

### Day 2-3: Crawler Activity

- [ ] Googlebot visits logged
- [ ] Bingbot visits logged
- [ ] AI crawlers respecting rate limits
- [ ] No aggressive bot traffic

### Week 1: Indexing

- [ ] Homepage indexed (Google Search Console)
- [ ] Core pages indexed
- [ ] Check "site:integratewise.ai" in Google
- [ ] Monitor crawl errors

---

## 🐛 TROUBLESHOOTING

### If Robots.txt Not Loading:

```bash
# Check file exists
ls -la robots.txt

# Redeploy
git add robots.txt
git commit -m "fix: ensure robots.txt deploys"
git push
```

### If Headers Not Applied:

```bash
# Check _headers file format (no BOM, LF line endings)
file _headers

# Verify in Cloudflare Pages logs
# Dashboard > Pages > integratewise-marketing > View logs
```

### If Pages Not Indexed:

1. Check robots.txt allows indexing
2. Verify sitemap submission
3. Check Google Search Console for errors
4. Request manual indexing for key pages

### If Bot Traffic Too High:

1. Increase crawl-delay in robots.txt
2. Enable stricter Bot Fight Mode
3. Add rate limiting rules
4. Check Cloudflare Firewall logs

---

## 📈 SUCCESS METRICS (30 Days)

### SEO Goals:

- [ ] Homepage indexed within 48 hours
- [ ] All core pages indexed within 7 days
- [ ] Organic search traffic starts within 14 days
- [ ] 90+ Lighthouse SEO score

### Performance Goals:

- [ ] <500ms TTFB
- [ ] <2s LCP
- [ ] 90+ Lighthouse Performance score
- [ ] 95%+ cache hit ratio

### Security Goals:

- [ ] A+ SSL Labs rating
- [ ] Zero security incidents
- [ ] Bot traffic <10% of total
- [ ] All headers properly set

---

## 🚨 EMERGENCY ROLLBACK

If something breaks:

### Revert via Git:

```bash
git revert HEAD
git push
```

### Or Rollback in Cloudflare:

1. Dashboard > Pages > integratewise-marketing
2. View deployments
3. Click "..." on previous deployment
4. Select "Rollback to this deployment"

---

## ✅ FINAL SIGN-OFF

- [ ] All files deployed successfully
- [ ] robots.txt and sitemap.xml accessible
- [ ] Headers applied correctly
- [ ] Cloudflare settings configured
- [ ] Search engines notified
- [ ] Monitoring enabled
- [ ] Team notified

**Deployment Complete!** 🚀

Monitor for 24-48 hours and verify crawler activity in Cloudflare Analytics.

---

**Next Steps**:

1. Monitor Cloudflare Analytics for bot activity
2. Check Google Search Console in 2-3 days
3. Review performance metrics
4. Optimize based on data

**Support**: If issues arise, check `SEO_CLOUDFLARE_SETUP.md` for detailed troubleshooting.
