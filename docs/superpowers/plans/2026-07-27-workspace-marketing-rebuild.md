# IntegrateWise Marketing Go-Live Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:executing-plans` or `superpowers:subagent-driven-development` to execute this plan task-by-task. Every gate must be evidenced before the release proceeds.

**Goal:** Take `integratewise-marketing` from the current committed baseline to a verified production launch where the public site presents IntegrateWise as an Adaptive Operational Workspace and routes all conversion through Marketplace Activation.

**Architecture:** Marketing remains a standalone frontend. It owns public positioning, navigation, SEO, analytics, public content and marketplace activation handoff. It must not own Product, Platform, Spine, connector, MCP, capability, governance, execution, memory or tenant logic.

**Tech Stack:** React 19, Vite 7, TypeScript 5.6, Tailwind CSS 4, Wouter, Framer Motion, Vitest and Express production wrapper.

## Global Go-Live Constraints

- Primary category: **Adaptive Operational Workspace**.
- Primary promise: **The workspace that organizes itself around your work.**
- Primary CTA: **Activate IntegrateWise**.
- Conversion path: Marketing → marketplace selection → IW Spine Network installation → identity/OAuth → initial connectors → Base Spine activation → hydration → Adaptive Workbench.
- No demo, sales-calendar or sales-led funnel.
- No `Book a Demo`, `Request a Demo`, `Talk to Sales` or equivalent CTA.
- Documentation routes to the separate Docs property.
- Product onboarding routes to Marketplace Activation or Product.
- Marketing must not contain secrets, OAuth implementation, provider credentials, platform schemas, connector runtime, MCP routing, governance logic, execution logic or organizational memory.
- Twin is contextual intelligence inside the workspace, not a generic chatbot or collection of named agents.
- Different roles are projections over one operational Spine, not separate products.
- Adaptive behavior must be explained as visible, governed and reversible.
- Production release is blocked while required CI or deployment checks are failing.

---

## Release State Model

```text
NOT_READY
  → CONTENT_LOCKED
  → CODE_COMPLETE
  → BUILD_VERIFIED
  → PREVIEW_ACCEPTED
  → PRODUCTION_APPROVED
  → DEPLOYED
  → SMOKE_VERIFIED
  → STABLE
```

A failed mandatory gate returns the release to `NOT_READY` or `CODE_COMPLETE`, depending on the failure.

---

## Phase 0 — Establish the Release Baseline

**Deliverable:** One documented release candidate, one rollback commit and no unknown working-tree changes.

- [ ] Record the current `main` commit as the pre-release baseline.
- [ ] Inspect the actual local working tree with `git status --short`.
- [ ] Review every staged and unstaged diff.
- [ ] Commit all intended code and content changes in coherent commits.
- [ ] Remove or exclude generated files, secrets and local-only artifacts.
- [ ] Record the release-candidate commit SHA.
- [ ] Record the rollback commit SHA.
- [ ] Confirm branch protection and deployment source branch.

**Evidence file:** `docs/marketing/GO_LIVE_EVIDENCE.md`

**Required evidence:**

```text
baseline_commit:
release_candidate_commit:
rollback_commit:
working_tree_status:
deployment_source_branch:
```

**Gate:** No unknown or uncommitted release changes.

---

## Phase 1 — Lock the Production Scope

**Deliverable:** A precise list of routes and capabilities included in launch.

### Required public scope

- Homepage
- Product overview
- Adaptive Workbench
- Twin
- Continuity
- Memory
- Auto-Tuning
- Platform overview
- Spine
- Capability Fabric
- Discovery Engine
- Governance
- Spine Network
- Marketplace Activation
- Connector Marketplace
- MCP Marketplace
- Domain Apps
- Security
- Pricing, when retained
- Blog/resources, when production-ready
- Legal pages
- 404 route

### Explicitly excluded from launch

- Demo booking
- Sales calendar
- Unfinished placeholder pages
- Technical documentation duplicated from Docs
- Product application screens
- Admin screens
- Provider OAuth logic
- Unverified marketplace links

- [ ] Create the production route inventory.
- [ ] Classify every route as `launch`, `redirect`, `remove` or `defer`.
- [ ] Verify every launch route has final copy, metadata and CTA behavior.
- [ ] Verify deferred pages are inaccessible or clearly redirected.

**Evidence:** `docs/marketing/PRODUCTION_ROUTE_MATRIX.md`

**Gate:** No placeholder or ambiguous public route remains.

---

## Phase 2 — Lock Marketing Content and Conversion

**Deliverable:** Canonical content with one conversion model.

- [ ] Confirm homepage hero uses the Adaptive Operational Workspace concept.
- [ ] Confirm all primary CTA labels are `Activate IntegrateWise`.
- [ ] Confirm primary CTA routes to Marketplace Activation.
- [ ] Confirm secondary CTAs explain workspace formation, Spine Network or security.
- [ ] Remove demo, pilot, sales-call and scheduling language.
- [ ] Remove three-product framing.
- [ ] Remove 16-agent and named-agent core positioning.
- [ ] Remove chatbot-first Twin framing.
- [ ] Remove generic dashboard-builder positioning.
- [ ] Remove browser-local-memory architecture claims.
- [ ] Remove uncontrolled autonomous-execution claims.
- [ ] Verify roles and industries are explained as projections over one workspace.
- [ ] Verify adaptive behavior is described as governed and reversible.

**Required scan:**

```bash
rg -n -i "book a demo|request a demo|talk to sales|schedule a call|pilot|16 agents|specialized agents|three products|browser memory" src README.md docs
```

**Gate:** Zero prohibited production-copy matches outside explicit historical or policy documentation.

---

## Phase 3 — Marketplace Activation Readiness

**Deliverable:** Every conversion safely reaches a valid activation destination.

- [ ] Define the public activation destination registry.
- [ ] Set Marketplace Activation as the default destination.
- [ ] Verify IW Spine Network destination.
- [ ] Verify ChatGPT, Claude, MCP and connector-marketplace destinations only when actually available.
- [ ] Disable unavailable activation channels rather than exposing broken links.
- [ ] Add fallback to the marketplace selector.
- [ ] Confirm no secret or OAuth logic is present in Marketing.
- [ ] Confirm external links use appropriate target and rel attributes.
- [ ] Add automated checks preventing demo/calendar destinations.

**Gate:** Every CTA resolves successfully and no disabled marketplace appears active.

---

## Phase 4 — Code Quality and Build Verification

**Deliverable:** A reproducible release build from a clean checkout.

Run from a fresh checkout of the release candidate:

```bash
pnpm install --frozen-lockfile
pnpm vitest run
pnpm check
pnpm build
```

Where the repository includes a canonical-copy checker, also run:

```bash
pnpm check:canon
```

- [ ] Record Node and pnpm versions.
- [ ] Record command output and exit status.
- [ ] Fix all TypeScript errors.
- [ ] Fix all test failures.
- [ ] Fix all build failures.
- [ ] Verify the production server starts from `dist`.
- [ ] Verify no runtime environment variable is required unless documented.
- [ ] Verify source maps and public build artifacts do not expose secrets.

**Gate:** All mandatory commands exit `0` from a clean checkout.

---

## Phase 5 — Functional Acceptance

**Deliverable:** Verified behavior across all launch routes.

### Route checks

- [ ] Every production route returns the intended page.
- [ ] Unknown routes return the 404 experience.
- [ ] Redirected legacy routes resolve once and do not loop.
- [ ] Browser refresh works on nested routes.

### Navigation checks

- [ ] Desktop navigation works with mouse and keyboard.
- [ ] Mobile navigation opens, closes and routes correctly.
- [ ] Header and footer links are valid.
- [ ] Docs links point to the separate Docs property.
- [ ] Product and activation links point to their correct external owners.

### Content checks

- [ ] Headings follow one logical hierarchy per page.
- [ ] No placeholder or draft copy is visible.
- [ ] No demo CTA remains.
- [ ] Workspace, Spine, Twin and activation terms are used consistently.

### Interaction checks

- [ ] All buttons and links are actionable.
- [ ] Forms, if retained, have validation and success/error handling.
- [ ] Animations respect reduced-motion preferences.
- [ ] Focus states are visible.

**Gate:** Zero severity-1 or severity-2 functional defects.

---

## Phase 6 — SEO, Analytics, Legal and Trust Readiness

**Deliverable:** Public launch metadata and compliance basics are complete.

- [ ] Unique page title and description for every launch route.
- [ ] Canonical URL for every indexable route.
- [ ] Open Graph and social metadata.
- [ ] Sitemap contains launch routes only.
- [ ] Robots rules match production intent.
- [ ] Structured data is valid where used.
- [ ] Favicon, application icons and social image are present.
- [ ] Analytics runs only after consent where required.
- [ ] Activation CTA events are tracked without sensitive payloads.
- [ ] Privacy, Terms and Cookie pages are reachable.
- [ ] Security page accurately describes current controls without unsupported claims.
- [ ] No customer logo, metric or testimonial is published without approval.

**Gate:** SEO, analytics and legal checklist signed off.

---

## Phase 7 — Performance and Accessibility Readiness

**Deliverable:** Production experience is usable and stable on common devices.

- [ ] Test desktop and mobile breakpoints.
- [ ] Test latest Chrome, Safari, Firefox and Edge.
- [ ] Test keyboard-only navigation.
- [ ] Test screen-reader landmarks and accessible names.
- [ ] Verify contrast for text, links, buttons and focus states.
- [ ] Verify images include correct alt behavior.
- [ ] Verify layout does not shift materially after load.
- [ ] Optimize oversized images, fonts and JavaScript bundles.
- [ ] Verify reduced-motion mode.
- [ ] Verify slow-network loading states.

**Target:** No known critical accessibility defect and no obvious production-blocking performance regression.

**Gate:** Accessibility and responsive acceptance recorded.

---

## Phase 8 — Preview Deployment and Acceptance

**Deliverable:** A production-equivalent preview accepted by the release owner.

- [ ] Create preview deployment from the release candidate.
- [ ] Verify deployment build logs.
- [ ] Confirm preview uses production-equivalent configuration without production secrets being exposed.
- [ ] Run complete route and CTA smoke tests on preview.
- [ ] Test marketplace activation from preview.
- [ ] Test social metadata and public assets.
- [ ] Record screenshots of key routes.
- [ ] Record known non-blocking defects.
- [ ] Obtain explicit release approval.

**Current blocker:** The latest GitHub commit reports failed Vercel checks for both linked Vercel projects. Those failures must be resolved or the deployment ownership must be corrected before production release.

**Gate:** Preview deployment is green and explicitly accepted.

---

## Phase 9 — Production Deployment

**Deliverable:** Controlled production deployment with rollback prepared.

### Pre-deployment

- [ ] Confirm release-candidate SHA.
- [ ] Confirm rollback SHA.
- [ ] Confirm production domain and DNS ownership.
- [ ] Confirm environment variables and public activation URLs.
- [ ] Freeze unrelated merges during deployment.
- [ ] Announce deployment window internally.

### Deployment

- [ ] Deploy the exact release-candidate commit.
- [ ] Monitor build and deployment logs.
- [ ] Confirm production alias/domain assignment.
- [ ] Confirm TLS and redirects.
- [ ] Do not make unrelated code changes during release.

### Immediate rollback conditions

Rollback immediately when any of these occurs:

- Homepage unavailable.
- Critical navigation failure.
- Primary activation CTA broken.
- Wrong production domain or redirect loop.
- Sensitive information exposed.
- Widespread JavaScript runtime failure.
- Major mobile rendering failure.

**Rollback action:** Redeploy the recorded rollback commit and verify homepage, navigation and activation.

**Gate:** Deployment completes without rollback condition.

---

## Phase 10 — Production Smoke Test

**Deliverable:** Verified live site.

Run immediately after deployment:

- [ ] Homepage returns `200`.
- [ ] Product, Platform, Marketplace, Security and legal routes return expected responses.
- [ ] Primary `Activate IntegrateWise` CTA works.
- [ ] Marketplace selector works.
- [ ] Docs external link works.
- [ ] Product/onboarding external link works.
- [ ] Mobile navigation works.
- [ ] 404 route works.
- [ ] No console-blocking runtime errors.
- [ ] Analytics event reaches the expected destination without personal or secret data.
- [ ] Social metadata is present.
- [ ] Production domain and HTTPS are correct.

**Gate:** Production smoke test signed off.

---

## Phase 11 — Post-Go-Live Monitoring

**Deliverable:** Stable release with recorded outcomes.

### First hour

- [ ] Monitor deployment/runtime errors.
- [ ] Monitor 4xx and 5xx rates.
- [ ] Monitor activation-link failures.
- [ ] Review analytics ingestion.
- [ ] Check major routes from a second network/device.

### First 24 hours

- [ ] Review broken-link reports.
- [ ] Review client-side runtime errors.
- [ ] Review activation conversion events.
- [ ] Review search indexing and robots behavior.
- [ ] Record production issues and owners.

### First seven days

- [ ] Review route engagement and activation drop-off.
- [ ] Review recurring errors.
- [ ] Close or prioritize known defects.
- [ ] Record release retrospective.

**Evidence:** `docs/marketing/GO_LIVE_REPORT.md`

**Final state:** `STABLE` only after the 24-hour review has no unresolved critical defect.

---

## Go/No-Go Decision

### GO only when

- Working tree and release SHA are known.
- All intended code is committed.
- Production scope is locked.
- Canonical copy and Marketplace Activation are verified.
- Tests, typecheck and build pass.
- Preview deployment is green.
- Vercel ownership/deployment checks are resolved.
- Rollback commit is recorded.
- Production acceptance owner approves release.

### NO-GO when

- Any mandatory check fails.
- Any required marketplace link is broken.
- Demo conversion remains.
- Deployment project ownership is unresolved.
- Production environment or domain is ambiguous.
- Rollback is not prepared.
- Secrets or platform logic are present in Marketing.

---

## Required Release Records

Create and maintain:

```text
docs/marketing/CANONICAL_MARKETING_CONTRACT.md
docs/marketing/PRODUCTION_ROUTE_MATRIX.md
docs/marketing/GO_LIVE_EVIDENCE.md
docs/marketing/RELEASE_ACCEPTANCE.md
docs/marketing/GO_LIVE_REPORT.md
```

Each file must identify its author/owner, date, release-candidate SHA and approval state.
