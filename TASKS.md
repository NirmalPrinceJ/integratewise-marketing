# IntegrateWise Marketing Rebuild Task List

**Repository:** `NirmalPrinceJ/integratewise-marketing`  
**Canonical direction:** Adaptive Operational Workspace  
**Primary conversion:** Marketplace Activation through IW Spine Network  
**Detailed plan:** `docs/superpowers/plans/2026-07-27-workspace-marketing-rebuild.md`

## Status Legend

- `[ ]` Not started
- `[-]` In progress
- `[x]` Completed and verified
- `[!]` Blocked; blocker must be recorded below the task

## Milestone 0 — Baseline and Canon Lock

- [x] Confirm standalone `integratewise-marketing` repository.
- [x] Confirm repository has push/admin access.
- [x] Confirm current stack from `package.json`: React 19, Vite 7, TypeScript, Tailwind 4, Wouter, Framer Motion, Vitest and Express.
- [x] Record the implementation action plan.
- [x] Create this tracked task list.
- [ ] Record current production URL, hosting owner and deployment workflow.
- [ ] Record the current `main` branch build status.
- [ ] Create `docs/marketing/CANONICAL_MARKETING_CONTRACT.md`.
- [ ] Update `README.md` with repository ownership boundaries.

## Milestone 1 — Current-Site Audit

- [ ] Inventory every public route.
- [ ] Inventory page, navigation, CTA, SEO and analytics components.
- [ ] Create `docs/marketing/CURRENT_SITE_AUDIT.md`.
- [ ] Create `docs/marketing/ROUTE_MIGRATION_MATRIX.md`.
- [ ] Classify each route as keep, rewrite, redirect or remove.
- [ ] Locate every demo, sales-call, pilot and calendar CTA.
- [ ] Locate outdated agent, dashboard, three-product, browser-memory and generic OS claims.
- [ ] Record every external destination and ownership boundary.

## Milestone 2 — Marketplace Activation Foundation

- [ ] Create typed `ActivationChannel` and `ActivationDestination` contracts.
- [ ] Create the public marketplace activation destination registry.
- [ ] Add fallback behavior for unavailable marketplace channels.
- [ ] Add tests preventing demo/calendar destinations.
- [ ] Route all global primary CTAs through the activation registry.
- [ ] Confirm no secret, token or OAuth implementation enters the marketing repository.

## Milestone 3 — Navigation and Route Architecture

- [ ] Implement Product navigation: Adaptive Workbench, Twin, Continuity, Memory, Auto-Tuning.
- [ ] Implement Platform navigation: Spine, Capability Fabric, Discovery Engine, Governance, Spine Network.
- [ ] Implement Marketplace navigation: Activate IntegrateWise, Connector Marketplace, MCP Marketplace, Domain Apps.
- [ ] Implement Solutions navigation by work pattern, role and industry.
- [ ] Implement Resources navigation: Blog, Documentation, Architecture, Release Notes.
- [ ] Route technical documentation to the separate Docs property.
- [ ] Add persistent `Activate IntegrateWise` CTA.
- [ ] Add navigation accessibility and route tests.

## Milestone 4 — Homepage Rebuild

- [ ] Implement hero: `Your work, organized into one adaptive workspace.`
- [ ] Implement primary CTA: `Activate IntegrateWise`.
- [ ] Implement secondary CTA: `See How the Workspace Forms`.
- [ ] Explain that work is fragmented rather than missing.
- [ ] Explain marketplace activation from existing tools.
- [ ] Show workspace formation rather than a generic dashboard.
- [ ] Explain stable shell and adaptive work surfaces.
- [ ] Explain one operational truth projected for different roles.
- [ ] Introduce the contextual Twin and governed OODA cycle.
- [ ] Explain continuity and memory.
- [ ] Explain governed, reversible adaptation.
- [ ] Add final marketplace activation CTA.
- [ ] Verify responsive behavior, reduced motion, heading order and keyboard access.

## Milestone 5 — Product Narrative Pages

- [ ] Build Adaptive Workbench page.
- [ ] Build Twin page.
- [ ] Build Continuity page.
- [ ] Build Memory page.
- [ ] Build Auto-Tuning page.
- [ ] Remove chatbot-first Twin framing.
- [ ] Remove named-agent collection framing.
- [ ] Explain personal versus shared/governed adaptation boundaries.
- [ ] Add product-page route and content tests.

## Milestone 6 — Platform Narrative Pages

- [ ] Build Spine page.
- [ ] Build Capability Fabric page.
- [ ] Build Discovery Engine page.
- [ ] Build Governance page.
- [ ] Build Spine Network page.
- [ ] Keep technical depth progressive; do not lead the homepage with schemas or infrastructure.
- [ ] Explain identity, provenance, evidence, policy and continuity accurately.
- [ ] Add platform-page route and content tests.

## Milestone 7 — Marketplace Pages

- [ ] Build Marketplace Activation overview.
- [ ] Build marketplace/channel selector.
- [ ] Build Connector Marketplace page.
- [ ] Build MCP Marketplace page.
- [ ] Build Domain Apps page.
- [ ] Explain IW Spine Network as the single activation entry point.
- [ ] Explain connector, MCP and domain-app boundaries.
- [ ] Add activation and external-destination tests.

## Milestone 8 — Solutions, Roles and Industries

- [ ] Build `Run the Company` solution.
- [ ] Build `Manage Customer Continuity` solution.
- [ ] Build `Coordinate Delivery` solution.
- [ ] Build `Connect Operational Systems` solution.
- [ ] Build `Preserve Organizational Knowledge` solution.
- [ ] Build Founder/Operator role projection.
- [ ] Build Sales role projection.
- [ ] Build Customer Success role projection.
- [ ] Build Support role projection.
- [ ] Build Product/Engineering role projection.
- [ ] Build Administration role projection.
- [ ] Build B2B SaaS industry page.
- [ ] Build Professional Services industry page.
- [ ] Build Enterprise Operations industry page.
- [ ] Build Manufacturing industry page.
- [ ] Build Aerospace and Space Systems industry page.
- [ ] Build Technology and Engineering industry page.
- [ ] Verify every role/industry is described as a projection over one workspace, not a separate product.

## Milestone 9 — Trust, Pricing and Resources

- [ ] Rewrite Security around identity-bound access, isolation, consent, evidence, approvals, scoped execution and audit.
- [ ] Explain reversible workspace tuning.
- [ ] Remove demo-dependent pricing conversion.
- [ ] Route pricing actions to Marketplace Activation.
- [ ] Keep public blog/thought leadership in Marketing.
- [ ] Move or redirect product, API, SDK, MCP, ADK and deployment instructions to Docs.
- [ ] Align SEO titles, descriptions, social metadata and structured data.
- [ ] Add metadata and external-link tests.

## Milestone 10 — Drift Removal and Automated Gates

- [ ] Remove or redirect superseded routes.
- [ ] Remove `Book a Demo`, `Request a Demo`, `Talk to Sales` and scheduling copy.
- [ ] Remove three-independent-products framing.
- [ ] Remove 16-agent and named-agent core narrative.
- [ ] Remove manual dashboard-builder positioning.
- [ ] Remove browser-local-memory architecture claims.
- [ ] Remove autonomous execution claims that omit Governance.
- [ ] Add `scripts/check-marketing-canon.mjs`.
- [ ] Add `pnpm check:canon`.
- [ ] Add regression tests for prohibited wording and CTA destinations.

## Milestone 11 — Verification and Release

- [ ] Run `pnpm install --frozen-lockfile`.
- [ ] Run `pnpm check:canon`.
- [ ] Run `pnpm vitest run`.
- [ ] Run `pnpm check`.
- [ ] Run `pnpm build`.
- [ ] Verify every public route.
- [ ] Verify every internal link.
- [ ] Verify every external docs/product/marketplace link.
- [ ] Verify no demo/calendar conversion remains.
- [ ] Verify primary CTA enters Marketplace Activation.
- [ ] Record build and acceptance evidence in `docs/marketing/RELEASE_ACCEPTANCE.md`.
- [ ] Record release commit and rollback commit.
- [ ] Deploy through the existing marketing deployment workflow.
- [ ] Perform production smoke test.

## Commit Discipline

Each milestone must be delivered through small, reviewable commits. At minimum:

```text
docs: lock workspace marketing contract
docs: audit marketing routes and content drift
feat: route marketing conversion through marketplace activation
feat: align navigation with workspace and marketplace architecture
feat: rebuild homepage around adaptive workspace formation
feat: add canonical adaptive workspace product narratives
feat: add platform and marketplace activation narratives
feat: position roles and industries as workspace projections
feat: align trust pricing and resources with marketplace activation
chore: enforce canonical workspace marketing language
docs: record marketing release acceptance
```

## Current Commit Evidence

- Baseline before planning: `e0158945e442cd65e1e479f6ccb63dd758633897`
- Action plan commit: `c710820cdb4646b0d85a2b0d123bbcdece47baaa`
- Task-list commit: recorded by the commit that creates this file.
