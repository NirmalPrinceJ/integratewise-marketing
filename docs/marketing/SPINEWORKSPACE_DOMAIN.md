# spineworkspace.com — Domain and Deployment Contract

**Status:** Registered through Cloudflare

**Primary public domain:** `spineworkspace.com`

**Canonical host:** `https://spineworkspace.com`

**Redirect host:** `https://www.spineworkspace.com` → `https://spineworkspace.com`

**Vercel project:** `integratewise-marketing`

**Vercel project ID:** `prj_gYs3wEO3zOaMEIbj18l1m12g5FJ8`

**Company identity:** IntegrateWise LLP

**Product/category identity:** IntegrateWise Continuity Platform

## Domain hierarchy

- `spineworkspace.com` is the public marketing and workspace-activation domain.
- IntegrateWise remains the company and product identity presented on the site.
- The domain does not rename the product to “Spine Workspace.”
- `integratewise.ai` can continue to own company, email, documentation, API, and product-service subdomains as required.

## Required Vercel sequence

1. Re-enable the `integratewise-marketing` Vercel project. It currently responds with `DEPLOYMENT_DISABLED` / HTTP 402.
2. Produce a green preview deployment for PR #23.
3. Add `spineworkspace.com` and `www.spineworkspace.com` to the Vercel project.
4. Copy the exact DNS records shown by Vercel into the Cloudflare DNS zone.
5. Keep records DNS-only during certificate and ownership validation unless Vercel explicitly confirms proxy compatibility for the configured record.
6. Set `spineworkspace.com` as the production domain.
7. Redirect `www.spineworkspace.com` permanently to the apex domain.
8. Verify HTTPS, SPA deep-link routing, `/activate`, metadata, and canonical URLs.

## Release gate

Do not merge PR #23 or change Cloudflare production DNS until:

- TypeScript and production build pass.
- A Vercel preview is available.
- Homepage and `/activate` render correctly on desktop and mobile.
- The only primary CTA is `Activate Workspace`.
- No pilot, demo, start-free, or unsupported claim remains on the launch surface.
- The Vercel project is no longer disabled.
