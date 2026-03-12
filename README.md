# IntegrateWise Marketing

**The complete app is restored from this repository.** This is the single source of truth for the IntegrateWise marketing site.

Pure marketing site — no signup/login. Only **Book Demo** and **Contact** forms. Deployed to **integratewise.ai** via Cloudflare Pages (`integratewise-landing`).

## Restore the app from this repo

To restore or run the complete app from scratch:

1. **Clone this repo**
   ```bash
   git clone <this-repo-url> integratewise-marketing && cd integratewise-marketing
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Configure environment** (optional)
   ```bash
   cp .env.example .env
   # Edit .env: set VITE_CALENDLY_URL, VITE_GOOGLE_FORM_SCRIPT_URL, and optionally VITE_SANITY_* if using CMS.
   ```

4. **Run locally**
   ```bash
   pnpm dev
   ```
   Opens at http://localhost:3001.

5. **Build for production**
   ```bash
   pnpm build
   ```
   Output is in `dist/`. Preview with `pnpm preview`.

6. **Deploy** — Connect this repo to Cloudflare Pages (see [Cloudflare Pages](#cloudflare-pages-native-workflow)) or run `pnpm deploy` with `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` set.

All assets (including `public/images` and `public/images/industries`) are part of this repo; no external asset repo is required to restore the app.

## Scope

- **Routes:** `/`, `/platform`, `/who-its-for`, `/pricing`, `/integrations`, `/security`, `/story`, `/book-demo`, `/contact`, `/problem`, `/architecture`, `/technical`, and generic `/:pageId`.
- **Core message:** Pain-led narrative — the Chennai divide, the CS paradox, tool sprawl. One Unified Intelligence Layer, one product for everyone. 4-column comparison (Automation Tools, CRMs, AI-Native Apps vs IntegrateWise).
- **Product category:** The Infrastructure for Modern Work.
- **Content:** Sanity CMS (optional). Set `VITE_SANITY_PROJECT_ID` and `VITE_SANITY_DATASET` for editable content.
- **Integrations:** Calendly (Book Demo), Google Apps Script (Contact + Demo fallback forms).
- **Deployment:** Cloudflare Pages (native workflow) → `integratewise-landing` → custom domain **integratewise.ai** at root.

## Scripts

- `pnpm dev` — Vite dev server (port 3001)
- `pnpm build` — Production build to `dist/`
- `pnpm preview` — Preview production build
- `pnpm deploy` — Manual deploy via wrangler (optional; `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`)

## Cloudflare Pages (native workflow)

1. **Dashboard** → Pages → Create project → Connect to Git (GitHub/GitLab)
2. **Build settings:**
   - Project name: `integratewise-landing`
   - Build command: `pnpm install && pnpm build`
   - Build output directory: `dist`
   - Root directory: `/` (or repo root)
3. **Environment variables** (optional overrides; defaults are preconfigured):
   - `VITE_CALENDLY_URL` — Calendly URL (default: connect-integratewise/new-meeting)
   - `VITE_GOOGLE_FORM_SCRIPT_URL` — Google Apps Script for Contact/Demo forms
   - `VITE_SANITY_PROJECT_ID`, `VITE_SANITY_DATASET` — optional CMS
4. **Custom domain:** Add `integratewise.ai` in Pages → Custom domains

## Architecture reference

- **[docs/INTEGRATEWISE_OS_SPINE.md](docs/INTEGRATEWISE_OS_SPINE.md)** — Spine as Foundation: single source of truth, 12 domains, Depth Matrix, value in 60s. (Full implementation details and linked docs live in the main application repo.)

## Source

Landing copy originated from `apps/web`:

- `apps/web/src/components/landing/` → `apps/landing/src/components/` (layout, sections, pages, ui)
- `apps/web/src/components/marketing-site/landing/` → `apps/landing/src/components/marketing-site/landing/`
- `apps/web/src/pages/landing/SignupPage.tsx` → `apps/landing/src/pages/landing/`
- Shared `components/ui` (button, badge, utils) and `lib/app-urls` included for imports.
