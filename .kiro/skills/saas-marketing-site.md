# SaaS Marketing Site Builder Skill

## Overview

This skill provides comprehensive guidance for building high-converting SaaS marketing websites. Use this when building landing pages, product sites, or marketing sites for B2B/B2C SaaS products.

## Core Principles

### 1. Positioning First, Features Second

- Start with the **problem** the product solves
- Define the **category** (create new category or position within existing)
- Establish **differentiation** before listing features
- Use the **narrative hierarchy**: Problem → Impact → Solution → How It Works → Outcomes

### 2. Audience Clarity

- **Primary buyer**: Decision maker (CTO, VP Eng, Head of Ops, etc.)
- **Primary user**: Day-to-day user (Developer, Operations, Customer Success, etc.)
- **Economic buyer**: Budget holder (CFO, CEO for enterprise)
- Message to the buyer first, validate with user second

### 3. Value Proposition Framework

Use the formula:

```
[Product] helps [target audience] [achieve outcome] by [unique mechanism]

Example:
"Vercel helps frontend teams ship faster by deploying on the edge."
```

## Site Structure

### Homepage Sections (in order)

1. **Hero Section**
   - Headline: Problem-focused or outcome-focused (never feature-focused)
   - Subheadline: Expand on the value (1-2 sentences)
   - Social proof: "Trusted by X companies" or logos
   - Primary CTA: Action-oriented ("Start Free", "Book Demo", "See How")
   - Secondary CTA: Lower commitment ("Watch Demo", "Learn More")

2. **Problem/Context Section**
   - Establish the pain point
   - Show current state vs. desired state
   - Use equations or visuals to demonstrate complexity
   - Example: "N × M connections → N + M connections"

3. **Solution Overview**
   - Introduce the core mechanism
   - Avoid jargon, use clear language
   - Show the "aha moment" visually
   - Use diagrams, not just text

4. **How It Works**
   - 3-5 step process
   - Visual flow diagram
   - Each step should be self-explanatory
   - Use action verbs

5. **Core Capabilities** (not "Features")
   - 3-6 primary capabilities
   - Each with: Name, Description, Benefit
   - Use outcome language: "Ship 10x faster" not "Fast deploys"
   - Include mini-visuals or icons

6. **Social Proof**
   - Customer logos (if available)
   - Testimonials with real names, titles, companies
   - Metrics: "X teams use this daily", "Y deploys per month"
   - Case study teasers

7. **Comparison** (optional, use carefully)
   - "Before/After" comparison
   - "Old way vs. New way"
   - "Without [Product] vs. With [Product]"
   - Never bash competitors directly

8. **Pricing Preview** (if applicable)
   - Show starting price or "Free tier"
   - Link to full pricing page
   - Clear value at each tier

9. **Final CTA**
   - Restate value prop
   - Strong call to action
   - Reduce friction: "No credit card", "Free trial", "Cancel anytime"

### Other Essential Pages

#### Product/Platform Page

- Architecture deep-dive
- Technical benefits
- Integration capabilities
- Security/compliance
- Use cases

#### Pricing Page

- 3-4 tiers maximum
- Free tier if possible
- "Most Popular" highlight
- Feature comparison table
- FAQ section
- Annual/monthly toggle

#### About/Company Page

- Mission statement
- Founder story (if compelling)
- Team (optional)
- Values
- Contact information

#### Contact/Demo Page

- Form with minimal fields (Name, Email, Company, Message)
- Calendar booking (Calendly, Cal.com)
- Email/Slack/Discord for community
- Response time expectations

## Design System

### Typography

```css
/* Headlines */
--font-display: "Bebas Neue", sans-serif;
--font-serif: "DM Serif Display", serif;
--font-mono: "IBM Plex Mono", monospace;
--font-sans: "Inter", "Instrument Sans", sans-serif;

/* Scale */
--text-xs: 0.75rem; /* 12px - labels */
--text-sm: 0.875rem; /* 14px - body small */
--text-base: 1rem; /* 16px - body */
--text-lg: 1.125rem; /* 18px - lead */
--text-xl: 1.25rem; /* 20px - h4 */
--text-2xl: 1.5rem; /* 24px - h3 */
--text-3xl: 1.875rem; /* 30px - h2 */
--text-4xl: 2.25rem; /* 36px - h1 */
--text-5xl: 3rem; /* 48px - hero */
```

### Color System

```css
/* Neutral */
--ink: #0c0c0c; /* primary text */
--paper: #f4f0e8; /* background */
--paper-warm: #ebe5d8; /* secondary bg */
--rule: #c4baa8; /* borders */
--slate: #1a2e4a; /* secondary text */

/* Brand */
--primary: #1a3a2a; /* buttons, links */
--primary-hover: #2d5a3d;
--accent: #b8943f; /* highlights */
--accent-pale: #f0e0b0;

/* Semantic */
--success: #2d5a3d;
--error: #8b2020;
--warning: #b8943f;
```

### Spacing Scale

```css
--space-1: 0.25rem; /* 4px */
--space-2: 0.5rem; /* 8px */
--space-3: 0.75rem; /* 12px */
--space-4: 1rem; /* 16px */
--space-6: 1.5rem; /* 24px */
--space-8: 2rem; /* 32px */
--space-12: 3rem; /* 48px */
--space-16: 4rem; /* 64px */
--space-24: 6rem; /* 96px */
```

### Component Patterns

#### Buttons

```html
<!-- Primary -->
<button class="btn btn-primary">Start Free</button>

<!-- Secondary -->
<button class="btn btn-secondary">Learn More</button>

<!-- Outline -->
<button class="btn btn-outline">Book Demo →</button>
```

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  font-size: 0.875rem;
  border-radius: 9999px;
  transition: all 0.2s;
  cursor: pointer;
  border: none;
}

.btn-primary {
  background: var(--primary);
  color: white;
}

.btn-primary:hover {
  background: var(--primary-hover);
}
```

#### Cards

```html
<div class="card">
  <div class="card-header">
    <h3>Title</h3>
  </div>
  <div class="card-body">
    <p>Content</p>
  </div>
</div>
```

#### Sections

```html
<section class="section">
  <div class="container">
    <div class="section-header">
      <span class="label">Label</span>
      <h2 class="section-title">Section Title</h2>
      <p class="section-subtitle">Optional subtitle</p>
    </div>
    <div class="section-content">
      <!-- Content -->
    </div>
  </div>
</section>
```

## Copywriting Guidelines

### Headlines

**Good:**

- "Own Your AI Infrastructure" (ownership/outcome)
- "Deploy in Seconds, Not Hours" (speed/benefit)
- "One API. Every Model." (simplicity)

**Bad:**

- "The Best AI Platform" (generic, unproven)
- "Next-Generation Technology" (meaningless)
- "Revolutionary AI Solution" (hype)

### Feature Descriptions

Use format: **[Benefit]** + how it works

**Good:**

- "Ship 10x faster with instant edge deploys"
- "Never lose context with persistent memory across sessions"

**Bad:**

- "Fast deployment system"
- "Advanced memory architecture"

### Social Proof

**Good:**

- "Over 10,000 engineering teams deploy daily"
- "Processing 1M+ API calls/day"
- Specific customer quote with name, title, company

**Bad:**

- "Many companies use us"
- "Users love our product"
- Anonymous testimonials

## Technical Implementation

### Performance

- **Critical CSS**: Inline above-the-fold CSS
- **Lazy loading**: Images below fold
- **Preload**: Hero images, fonts
- **Minimize JS**: Keep homepage JS under 50KB
- **CDN**: Use Cloudflare or Vercel edge

### SEO

- **Title**: 50-60 characters, include primary keyword
- **Description**: 150-160 characters, compelling copy
- **H1**: One per page, matches value prop
- **Schema.org**: Organization, Product, FAQ markup
- **Open Graph**: og:title, og:description, og:image
- **Canonical**: Always set canonical URL

### Accessibility

- **Contrast**: Minimum 4.5:1 for text
- **Keyboard nav**: All interactive elements accessible
- **Alt text**: Descriptive alt text for images
- **ARIA labels**: Where semantic HTML isn't enough
- **Focus indicators**: Visible focus states

### Analytics

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>

<!-- Event tracking -->
<button
  onclick="gtag('event', 'click_cta', {
  'event_category': 'engagement',
  'event_label': 'hero_cta'
})"
>
  Start Free
</button>
```

## Common Mistakes to Avoid

### ❌ Don't Do This

1. **Leading with features**: "We have 50 integrations"
2. **Vague positioning**: "The best platform for teams"
3. **Too much text**: Walls of text on homepage
4. **Hidden pricing**: Making users contact sales to see pricing
5. **Weak CTAs**: "Learn more" as primary CTA
6. **Generic stock photos**: Unrelated hero images
7. **No social proof**: No logos, testimonials, or metrics
8. **Feature parity**: Listing same features as competitors

### ✅ Do This Instead

1. **Lead with outcome**: "Deploy 10x faster"
2. **Specific positioning**: "The edge deployment platform for frontend teams"
3. **Scannable content**: Headlines, bullets, visuals
4. **Transparent pricing**: Show tiers, even if "Contact Sales" for enterprise
5. **Action CTAs**: "Start Free", "Book Demo", "Try Now"
6. **Product screenshots**: Real interface, real data (anonymized)
7. **Proof everywhere**: Logos, metrics, testimonials throughout
8. **Unique mechanism**: Explain what makes you different

## Category-Specific Patterns

### Developer Tools

- **Technical depth**: Architecture diagrams, code samples
- **CLI/API docs**: Prominent link to docs
- **GitHub integration**: Star count, open source commitment
- **Playground**: Live demo or sandbox

### B2B SaaS

- **Security badges**: SOC 2, GDPR, ISO 27001
- **Enterprise features**: SSO, RBAC, audit logs
- **Case studies**: Named customers with metrics
- **ROI calculator**: Show business value

### PLG (Product-Led Growth)

- **Freemium tier**: Clear free tier benefits
- **Self-serve signup**: No sales call required
- **In-product activation**: First value in <5 minutes
- **Usage-based pricing**: Pay for what you use

### API/Infrastructure

- **Uptime**: 99.99% SLA prominently displayed
- **Performance**: Latency metrics, speed comparisons
- **Scale**: "Handles XM requests/day"
- **DX**: Beautiful docs, SDKs, Postman collections

## Example Site Map

```
/                       Homepage
/platform               Platform/Product deep-dive
/pricing                Pricing tiers
/about                  Company/Team
/contact                Contact/Demo booking
/blog                   Content marketing
/docs                   Documentation (link out)
/customers              Case studies
/security               Security/Compliance
/changelog              Product updates
/status                 Status page (link out)

/signup                 Self-serve signup
/login                  User login
```

## Conversion Optimization

### Above the Fold

- Value prop in <5 seconds of comprehension
- Primary CTA visible without scrolling
- Social proof (logos or "Trusted by X")

### CTA Strategy

- **Primary**: High-commitment (Signup, Book Demo)
- **Secondary**: Low-commitment (Watch Video, Learn More)
- Place CTAs every 2-3 sections

### Form Design

- **Minimal fields**: Name, Email, Company (max 3-4)
- **Progressive disclosure**: Ask more later, not upfront
- **Inline validation**: Show errors immediately
- **Privacy note**: "We'll never spam you"

### Micro-Conversions

- Newsletter signup
- Resource download
- Video play
- Scroll depth
- Time on page

## Launch Checklist

### Pre-Launch

- [ ] All links work (no 404s)
- [ ] Mobile responsive (test on real devices)
- [ ] Forms submit correctly
- [ ] Analytics installed
- [ ] SEO meta tags complete
- [ ] Favicon and social images
- [ ] SSL certificate active
- [ ] DNS configured
- [ ] Redirects from old site (if applicable)

### Post-Launch

- [ ] Submit sitemap to Google Search Console
- [ ] Monitor Core Web Vitals
- [ ] Set up uptime monitoring
- [ ] A/B test headline variations
- [ ] Collect user feedback
- [ ] Iterate on messaging

## Resources

### Inspiration

- Vercel.com - Developer tool positioning
- Stripe.com - API-first documentation
- Linear.app - Minimalist, fast
- Retool.com - B2B SaaS clarity
- Supabase.com - Open source community

### Tools

- **Design**: Figma, Sketch
- **Hosting**: Vercel, Netlify, Cloudflare Pages
- **Analytics**: PostHog, Plausible, Google Analytics
- **A/B Testing**: Optimizely, VWO
- **Forms**: Typeform, Tally, Formspark
- **Monitoring**: Sentry, LogRocket

### Testing

- **Lighthouse**: Performance, SEO, Accessibility
- **PageSpeed Insights**: Core Web Vitals
- **GTmetrix**: Load time analysis
- **WebPageTest**: Waterfall analysis
- **WAVE**: Accessibility checker

## Usage

When building a SaaS site:

1. **Start with positioning**: Define problem → solution → differentiation
2. **Structure the narrative**: Follow the homepage section order
3. **Write copy first**: Headlines and CTAs before design
4. **Design for scanning**: Use hierarchy, whitespace, visuals
5. **Optimize for conversion**: Clear CTAs, minimal friction
6. **Test everything**: Forms, links, mobile, performance
7. **Measure and iterate**: Analytics, user feedback, A/B tests

---

**Remember**: A great SaaS site makes visitors think "This solves my problem" not "This has cool features."
