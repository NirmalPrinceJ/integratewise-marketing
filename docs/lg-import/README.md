# integratewise-lg — Content Import

**Imported on:** 2026-06-19
**Source:** https://github.com/NirmalPrinceJ/integratewise-lg (Next.js v0.app build)
**Imported by:** Kiro agent (feat/lg-content-import branch)

## What's here

Reference content extracted from the v0.app-built `integratewise-lg` repo so this marketing site has the canonical written copy and visual assets in source control. Nothing in this folder is served live — these are source-of-truth references for future page authoring.

### Content references

| File | What it is | Size |
|------|-----------|------|
| `EXACT_PAGE_CONTENTS.md` | Full written copy for all 22 main pages + sub-pages. The canonical text source. | ~59 KB |
| `PAGE_CONTENTS_SUMMARY.md` | Page structure index (titles, descriptions, components, stats). | ~16 KB |
| `blog-posts.json` | Two blog posts authored in `-lg` (different from the existing `/blog/5-signs-workflow-killing-productivity.html`). | ~5 KB |
| `changelog.json` | Changelog timeline entries. | ~700 B |

### Visual assets (copied to site, but not yet referenced by any page)

| Path | What | Count |
|------|------|-------|
| `images/architecture/` | Architecture diagram PNGs (spine, cognitive OS, governed AI, adaptive spine intelligence) | 4 PNGs |
| `images/campaign/` | LinkedIn / WhatsApp ad creatives (Banner, Post, Carousel, WA-* series) | 30+ JPGs |

## What was NOT imported and why

| Skipped | Reason |
|---------|--------|
| `app/**/*.tsx` (Next.js pages) | Marketing site has no React build pipeline committed. The live `/` page is a pre-built SPA bundle (`/assets/index-*.js`) — its source isn't in this repo. |
| `components/**/*.tsx` (50+ components) | Same reason — would need a build pipeline. |
| `public/IW-Logo*.png`, `public/icon.svg` | Marketing already has `images/logo-*.png` and `favicon-*.png`. |
| `public/og.png` | Marketing has its own `og-image.png` deployed to integratewise.ai. |
| `public/professional-*.{jpg,png}` | Stock placeholder photos — not unique IP. |
| `public/logos/*.svg` | 22 of 23 already exist in `images/logos/`. |
| `next.config.mjs`, `tsconfig.json`, `package.json`, `pnpm-lock.yaml` | Next.js build chain — not applicable to this static-HTML + SPA-bundle deployment. |

## Route gap analysis (live site vs `-lg`)

What `-lg` has that the live marketing site does NOT:

| Route | Status on live site | Content available in this folder |
|-------|---------------------|----------------------------------|
| `/about` | Missing (falls through to SPA) | EXACT_PAGE_CONTENTS § 2 |
| `/pricing` | Missing | EXACT_PAGE_CONTENTS § 4 |
| `/contact` | Missing | EXACT_PAGE_CONTENTS § 7 |
| `/why` | Missing | EXACT_PAGE_CONTENTS § 9 |
| `/services` | Missing | EXACT_PAGE_CONTENTS § 10 |
| `/integrations` | Missing | EXACT_PAGE_CONTENTS § 8 |
| `/spine` | Missing | EXACT_PAGE_CONTENTS § 15 |
| `/security` | Has `/continuity/security.html` but not `/security` | EXACT_PAGE_CONTENTS § 17 |
| `/privacy` | Has `/continuity/privacy.html` but not `/privacy` | EXACT_PAGE_CONTENTS § 18 |
| `/terms` | Missing | EXACT_PAGE_CONTENTS § 19 |
| `/docs` | Missing | EXACT_PAGE_CONTENTS § 20 |
| `/business-ops` | Missing | EXACT_PAGE_CONTENTS § 13 |
| `/personal-ops` | Missing | EXACT_PAGE_CONTENTS § 14 |
| `/account-success` | Missing | EXACT_PAGE_CONTENTS § 16 |
| `/ai` (The Twin) | Missing | EXACT_PAGE_CONTENTS § 12 |
| `/changelog` | Has `/continuity/changelog.html` but not `/changelog` | EXACT_PAGE_CONTENTS § 22 |
| `/platform/*` | Missing | EXACT_PAGE_CONTENTS § "Platform Sub-Pages" |
| `/product/*` | Missing | EXACT_PAGE_CONTENTS § "Product Sub-Pages" |
| `/solutions/*` | Missing | EXACT_PAGE_CONTENTS § "Solutions Pages" |
| `/resources/campaign` | Missing | EXACT_PAGE_CONTENTS § "Resources Sub-Pages" |

## How to use this content

These references are written copy, not code. Two paths to get them onto the live site:

1. **Static HTML pages** — author each page as `/<slug>/index.html` using the existing pattern at `/continuity/index.html` (with `/continuity/styles.css`). Firebase Hosting (`cleanUrls: true`, `trailingSlash: false`) will serve them as `/about`, `/pricing`, etc., bypassing the SPA rewrite for those routes.
2. **SPA rebuild** — re-introduce the React/Vite source (currently lives only as a bundled `/assets/index-*.js`), add new routes, and rebuild.

Path 1 is what the existing standalone pages (`/continuity/*`, `/blog/*`, `/booking-confirmed`, `/request-access`) already do, and is the lower-risk option.

## Origin commit

The `-lg` repo at the time of import was a v0.app sync from Vercel deployment `v0-saa-s-landing-page`. See https://github.com/NirmalPrinceJ/integratewise-lg for the originating React/Next.js source.
