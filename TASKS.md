# IntegrateWise Marketing Go-Live Task List

**Repository:** `NirmalPrinceJ/integratewise-marketing`  
**Release objective:** Production launch of the standalone Marketing site  
**Primary conversion:** Marketplace Activation through IW Spine Network  
**Go-live plan:** `docs/superpowers/plans/2026-07-27-workspace-marketing-rebuild.md`

## Status Legend

- `[ ]` Not started
- `[-]` In progress
- `[x]` Completed and verified
- `[!]` Blocked

## Release Blockers

- [!] Latest GitHub commit has failed Vercel checks for both linked Vercel projects.
- [ ] Identify the correct Vercel team/project that owns production Marketing.
- [ ] Resolve blocked/failed deployment checks before any production release.
- [ ] Confirm production domain and DNS owner.
- [ ] Confirm Marketplace Activation production destination.

---

## Gate 0 — Release Baseline

- [x] Confirm standalone repository.
- [x] Confirm repository push/admin access.
- [x] Record current technology stack.
- [x] Replace redesign-oriented plan with a go-live plan.
- [x] Replace task list with this release-gate tracker.
- [ ] Inspect local `git status --short` in the active working copy.
- [ ] Review all staged and unstaged diffs.
- [ ] Commit all intended code and content changes.
- [ ] Remove/exclude local artifacts, generated output and secrets.
- [ ] Record baseline commit SHA.
- [ ] Record release-candidate commit SHA.
- [ ] Record rollback commit SHA.
- [ ] Confirm deployment source branch.

**Exit condition:** No unknown or uncommitted release changes.

---

## Gate 1 — Production Scope Lock

- [ ] Create `docs/marketing/PRODUCTION_ROUTE_MATRIX.md`.
- [ ] Inventory every public route.
- [ ] Mark each route `launch`, `redirect`, `remove` or `defer`.
- [ ] Confirm homepage launch scope.
- [ ] Confirm Product pages launch scope.
- [ ] Confirm Platform pages launch scope.
- [ ] Confirm Marketplace pages launch scope.
- [ ] Confirm Security, pricing, legal and resources scope.
- [ ] Remove or redirect unfinished routes.
- [ ] Verify 404 behavior.

**Exit condition:** No placeholder or ambiguous public route.

---

## Gate 2 — Canonical Content Lock

- [ ] Create `docs/marketing/CANONICAL_MARKETING_CONTRACT.md`.
- [ ] Confirm category: `Adaptive Operational Workspace`.
- [ ] Confirm promise: `The workspace that organizes itself around your work.`
- [ ] Confirm primary CTA: `Activate IntegrateWise`.
- [ ] Confirm conversion routes through Marketplace Activation.
- [ ] Remove `Book a Demo`, `Request a Demo`, `Talk to Sales` and calendar CTAs.
- [ ] Remove three-product framing.
- [ ] Remove 16-agent/named-agent positioning.
- [ ] Remove chatbot-first Twin framing.
- [ ] Remove generic dashboard-builder positioning.
- [ ] Remove browser-local-memory architecture claims.
- [ ] Remove uncontrolled autonomous-execution claims.
- [ ] Confirm roles/industries are projections over one workspace.
- [ ] Confirm adaptation is explained as governed and reversible.
- [ ] Run prohibited-copy scan and record output.

**Exit condition:** Canonical content is final and prohibited copy is absent.

---

## Gate 3 — Marketplace Activation Readiness

- [ ] Define/verify activation destination registry.
- [ ] Set Marketplace Activation as default.
- [ ] Verify IW Spine Network link.
- [ ] Verify each enabled marketplace/channel link.
- [ ] Disable unavailable channels.
- [ ] Add selector fallback for unavailable channels.
- [ ] Verify primary CTA on every launch route.
- [ ] Verify no demo/calendar destination remains.
- [ ] Verify external link safety attributes.
- [ ] Verify no OAuth implementation, provider token or secret is present.
- [ ] Add regression tests for activation destinations.

**Exit condition:** Every public conversion link resolves correctly.

---

## Gate 4 — Clean Build and Automated Verification

- [ ] Verify clean checkout of release candidate.
- [ ] Record Node version.
- [ ] Record pnpm version.
- [ ] Run `pnpm install --frozen-lockfile`.
- [ ] Run canonical-copy checker when present.
- [ ] Run `pnpm vitest run`.
- [ ] Run `pnpm check`.
- [ ] Run `pnpm build`.
- [ ] Start the production build from `dist`.
- [ ] Verify no build artifact exposes secrets.
- [ ] Record command output in `docs/marketing/GO_LIVE_EVIDENCE.md`.

**Exit condition:** All mandatory commands exit `0` from a clean checkout.

---

## Gate 5 — Functional Acceptance

- [ ] Verify every launch route.
- [ ] Verify legacy redirects and no redirect loops.
- [ ] Verify refresh on nested routes.
- [ ] Verify desktop navigation.
- [ ] Verify mobile navigation.
- [ ] Verify keyboard navigation.
- [ ] Verify header links.
- [ ] Verify footer links.
- [ ] Verify Docs external destination.
- [ ] Verify Product/onboarding external destination.
- [ ] Verify all CTA labels and destinations.
- [ ] Verify forms and error states, when retained.
- [ ] Verify reduced-motion behavior.
- [ ] Verify focus states.
- [ ] Verify no placeholder copy.

**Exit condition:** Zero severity-1 or severity-2 functional defects.

---

## Gate 6 — SEO, Analytics, Legal and Trust

- [ ] Unique title and description for every launch route.
- [ ] Canonical URLs configured.
- [ ] Open Graph/social metadata configured.
- [ ] Sitemap contains only launch routes.
- [ ] Robots policy verified.
- [ ] Structured data validated where used.
- [ ] Favicon and social image verified.
- [ ] Analytics configured without sensitive payloads.
- [ ] Activation events tracked.
- [ ] Privacy page available.
- [ ] Terms page available.
- [ ] Cookie policy available when required.
- [ ] Security claims checked against actual implementation.
- [ ] Customer logos, claims and metrics approved.

**Exit condition:** Metadata, analytics and legal checks approved.

---

## Gate 7 — Accessibility, Responsive and Performance

- [ ] Test desktop breakpoints.
- [ ] Test mobile breakpoints.
- [ ] Test Chrome.
- [ ] Test Safari.
- [ ] Test Firefox.
- [ ] Test Edge.
- [ ] Test keyboard-only use.
- [ ] Test screen-reader landmarks/accessibility names.
- [ ] Verify contrast.
- [ ] Verify image alt behavior.
- [ ] Verify reduced motion.
- [ ] Verify slow-network behavior.
- [ ] Review bundle and oversized assets.
- [ ] Record accepted non-blocking issues.

**Exit condition:** No critical accessibility or production-blocking performance defect.

---

## Gate 8 — Preview Deployment

- [ ] Identify correct Vercel team and project.
- [ ] Fix current failed/blocked Vercel checks.
- [ ] Deploy release candidate to preview.
- [ ] Verify preview build logs.
- [ ] Verify production-equivalent public configuration.
- [ ] Run route smoke tests on preview.
- [ ] Run activation flow tests on preview.
- [ ] Verify metadata and public assets on preview.
- [ ] Capture key-route screenshots.
- [ ] Record known non-blocking defects.
- [ ] Obtain explicit release approval.

**Exit condition:** Preview is green and accepted.

---

## Gate 9 — Production Deployment Readiness

- [ ] Confirm exact release-candidate SHA.
- [ ] Confirm rollback SHA.
- [ ] Confirm production domain.
- [ ] Confirm DNS ownership.
- [ ] Confirm production public environment variables.
- [ ] Confirm Marketplace Activation URLs.
- [ ] Freeze unrelated merges.
- [ ] Confirm release owner.
- [ ] Confirm rollback operator.
- [ ] Record deployment window.

**Exit condition:** Go/no-go checklist approved.

---

## Gate 10 — Production Deployment

- [ ] Deploy exact release-candidate commit.
- [ ] Monitor build logs.
- [ ] Confirm production alias/domain assignment.
- [ ] Confirm HTTPS/TLS.
- [ ] Confirm expected redirects.
- [ ] Check rollback conditions continuously.
- [ ] Roll back immediately on critical failure.

**Immediate rollback conditions:**

- Homepage unavailable.
- Primary Marketplace Activation CTA broken.
- Critical navigation failure.
- Redirect loop or incorrect production domain.
- Sensitive information exposure.
- Widespread runtime failure.
- Major mobile rendering failure.

**Exit condition:** Deployment completes without rollback condition.

---

## Gate 11 — Production Smoke Test

- [ ] Homepage returns expected response.
- [ ] Product routes work.
- [ ] Platform routes work.
- [ ] Marketplace routes work.
- [ ] Security/legal routes work.
- [ ] `Activate IntegrateWise` works.
- [ ] Marketplace selector works.
- [ ] Docs link works.
- [ ] Product/onboarding link works.
- [ ] Mobile navigation works.
- [ ] 404 behavior works.
- [ ] No blocking browser-console errors.
- [ ] Analytics event is received.
- [ ] Social metadata is present.
- [ ] Production domain and HTTPS are correct.
- [ ] Record acceptance in `docs/marketing/RELEASE_ACCEPTANCE.md`.

**Exit condition:** Production smoke test signed off.

---

## Gate 12 — Post-Go-Live Monitoring

### First hour

- [ ] Monitor runtime errors.
- [ ] Monitor 4xx/5xx rates.
- [ ] Monitor activation-link failures.
- [ ] Verify analytics ingestion.
- [ ] Check core routes from a second network/device.

### First 24 hours

- [ ] Review broken-link reports.
- [ ] Review client runtime errors.
- [ ] Review activation conversion events.
- [ ] Review indexing and robots behavior.
- [ ] Record issues and owners.

### First seven days

- [ ] Review route engagement.
- [ ] Review activation drop-off.
- [ ] Review recurring failures.
- [ ] Prioritize remaining defects.
- [ ] Create `docs/marketing/GO_LIVE_REPORT.md`.
- [ ] Record release retrospective.

**Final exit condition:** Mark release `STABLE` after 24 hours with no unresolved critical defect.

---

## Required Release Evidence Files

- [ ] `docs/marketing/CANONICAL_MARKETING_CONTRACT.md`
- [ ] `docs/marketing/PRODUCTION_ROUTE_MATRIX.md`
- [ ] `docs/marketing/GO_LIVE_EVIDENCE.md`
- [ ] `docs/marketing/RELEASE_ACCEPTANCE.md`
- [ ] `docs/marketing/GO_LIVE_REPORT.md`

Each must include:

```text
owner:
date:
release_candidate_commit:
approval_state:
```

## Current Commit Evidence

- Existing code baseline before planning: `e0158945e442cd65e1e479f6ccb63dd758633897`
- Original plan commit: `c710820cdb4646b0d85a2b0d123bbcdece47baaa`
- Original task-list commit: `65453bc4ec63e80744d622528dd470c95c9b9d63`
- Go-live plan replacement commit: `1d0661b65ed4f9e9c86651a1ef0a2f8efb0ed982`
