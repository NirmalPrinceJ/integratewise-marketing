# Workspace Marketing Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild `integratewise-marketing` around the canonical Adaptive Operational Workspace narrative and route every conversion through Marketplace Activation rather than demos or sales-led funnels.

**Architecture:** Keep the marketing repository autonomous from Product and Platform implementation. The site owns public positioning, routing, presentation, content, SEO, analytics and marketplace activation handoff links. It consumes only public, versioned activation/catalog contracts where dynamic data is required; it never owns Spine, connector, MCP, capability, governance, execution, memory or tenant logic.

**Tech Stack:** React 19, Vite 7, TypeScript 5.6, Tailwind CSS 4, Wouter, Framer Motion, Vitest, Express production wrapper.

## Global Constraints

- Primary category: **Adaptive Operational Workspace**.
- Primary promise: **The workspace that organizes itself around your work.**
- Primary CTA: **Activate IntegrateWise**.
- Activation path: marketing site → marketplace selection → IW Spine Network installation → identity/OAuth → initial connectors → Base Spine activation → hydration → Adaptive Workbench.
- No `Book a Demo`, `Request a Demo`, `Talk to Sales`, or sales-calendar funnel.
- Product documentation and developer documentation link to the separate `integratewise-docs` property.
- Product application and onboarding link to `integratewise-product` or the marketplace activation endpoint.
- Marketing code must not contain provider credentials, OAuth implementations, canonical schemas, connector runtimes, MCP routing, governance decisions, execution logic or organizational memory.
- Twin is contextual intelligence inside the workspace, not a generic chatbot or collection of named agents.
- Different roles receive different projections over one operational Spine; they are not separate products.
- Adaptive behavior must be explained as visible, governed and reversible.

---

## File Structure

The first implementation task must confirm actual paths before editing. Use the existing project conventions and keep each module focused.

Expected responsibilities:

- `src/pages/Home.tsx` — canonical homepage narrative and conversion path.
- `src/pages/Product*.tsx` — Adaptive Workbench, Twin, Continuity, Memory and Auto-Tuning pages.
- `src/pages/Platform*.tsx` — Spine, Capability Fabric, Discovery Engine, Governance and Spine Network pages.
- `src/pages/Marketplace*.tsx` — activation overview, marketplace selector, connector/MCP/domain-app explanations.
- `src/components/navigation/*` or current equivalent — canonical public navigation and activation CTA.
- `src/components/marketing/*` — reusable hero, transformation flow, role projections, trust and activation components.
- `src/lib/routes.ts` or current equivalent — canonical route registry.
- `src/lib/activation.ts` — marketplace activation destination registry with no secrets.
- `src/content/*` — typed marketing content where the current application supports content modules.
- `src/**/*.test.tsx` — route, CTA, content and accessibility regression tests.
- `README.md` — repository purpose, boundaries, local commands and deployment ownership.

---

### Task 1: Establish the Canonical Marketing Contract

**Files:**
- Create: `docs/marketing/CANONICAL_MARKETING_CONTRACT.md`
- Modify: `README.md`
- Test: repository text scan

**Interfaces:**
- Consumes: approved workspace narrative and repository boundaries.
- Produces: frozen vocabulary, conversion rules and prohibited claims for all later tasks.

- [ ] **Step 1: Record the canonical message hierarchy**

Document, in order:

```text
1. One adaptive workspace
2. Formed from tools and work already in use
3. Activated through the marketplace
4. Organized by the Spine
5. Rendered through the Adaptive Workbench
6. Assisted contextually by the Twin
7. Extended through connectors, MCP and Domain Apps
8. Governed before sensitive execution
9. Preserved through continuity and memory
10. Improved through controlled auto-tuning
```

- [ ] **Step 2: Record prohibited positioning**

Explicitly prohibit demo funnels, separate-product framing, 16-agent narratives, chatbot-first Twin positioning, manual dashboard-building claims, browser-local memory as architecture, and autonomous execution without governance.

- [ ] **Step 3: Update the repository README**

State that this repository owns public acquisition and marketplace activation handoff only. Link Product, Docs and Platform ownership boundaries.

- [ ] **Step 4: Run the wording scan**

Run:

```bash
rg -n -i "book a demo|request a demo|talk to sales|schedule a call|16 agents|specialized agents" src README.md docs
```

Expected: matches are either absent or documented only inside the prohibited-copy section.

- [ ] **Step 5: Commit**

```bash
git add README.md docs/marketing/CANONICAL_MARKETING_CONTRACT.md
git commit -m "docs: lock workspace marketing contract"
```

---

### Task 2: Inventory Current Routes, Components and Copy Drift

**Files:**
- Create: `docs/marketing/CURRENT_SITE_AUDIT.md`
- Create: `docs/marketing/ROUTE_MIGRATION_MATRIX.md`
- Test: route inventory command

**Interfaces:**
- Consumes: current router, pages, navigation and CTA components.
- Produces: keep/rewrite/redirect/remove decision for every public route.

- [ ] **Step 1: Enumerate source files**

Run:

```bash
find src -maxdepth 4 -type f | sort
```

Record the page, route, navigation, CTA, SEO, analytics and shared-section files.

- [ ] **Step 2: Inventory public routes**

Search the router and all route declarations. Record current path, component, current message, canonical destination and migration action.

- [ ] **Step 3: Audit message drift**

Search for:

```bash
rg -n -i "demo|pilot|agent|dashboard|operating system|three products|browser memory|sales call|calendar" src
```

Classify every result as retain, rewrite or remove.

- [ ] **Step 4: Audit conversion destinations**

Record every CTA and destination. No primary or secondary CTA may terminate at a demo form or scheduling service.

- [ ] **Step 5: Commit**

```bash
git add docs/marketing/CURRENT_SITE_AUDIT.md docs/marketing/ROUTE_MIGRATION_MATRIX.md
git commit -m "docs: audit marketing routes and content drift"
```

---

### Task 3: Implement the Marketplace Activation Contract

**Files:**
- Create: `src/lib/activation.ts`
- Create: `src/lib/activation.test.ts`
- Modify: current CTA/button components
- Modify: environment example file if present

**Interfaces:**
- Produces:

```ts
export type ActivationChannel =
  | "marketplace"
  | "chatgpt"
  | "claude"
  | "mcp"
  | "connectors";

export interface ActivationDestination {
  channel: ActivationChannel;
  label: string;
  href: string;
  external: boolean;
  enabled: boolean;
}

export function getActivationDestination(
  channel?: ActivationChannel,
): ActivationDestination;
```

- [ ] **Step 1: Write the failing activation test**

Test that the default destination is marketplace activation, that disabled channels fall back to marketplace selection, and that no destination points to a demo/calendar route.

- [ ] **Step 2: Run the test and verify failure**

```bash
pnpm vitest run src/lib/activation.test.ts
```

- [ ] **Step 3: Implement the typed destination registry**

Use public environment variables only for destination URLs. Never include provider secrets or OAuth implementation details.

- [ ] **Step 4: Replace global CTA destinations**

All primary CTA instances must use `getActivationDestination()` and display `Activate IntegrateWise`.

- [ ] **Step 5: Verify tests and typecheck**

```bash
pnpm vitest run src/lib/activation.test.ts
pnpm check
```

- [ ] **Step 6: Commit**

```bash
git add src/lib/activation.ts src/lib/activation.test.ts src
git commit -m "feat: route marketing conversion through marketplace activation"
```

---

### Task 4: Rebuild Global Navigation and Information Architecture

**Files:**
- Modify: current header/navigation component
- Modify: current footer component
- Modify: router configuration
- Test: navigation component tests

**Interfaces:**
- Consumes: activation destination registry.
- Produces: stable public navigation for Product, Platform, Solutions, Marketplace, Security and Resources.

- [ ] **Step 1: Write failing navigation tests**

Assert the presence of:

```text
Product
Platform
Solutions
Marketplace
Security
Resources
Activate IntegrateWise
```

Assert the absence of demo-oriented actions.

- [ ] **Step 2: Implement canonical navigation groups**

Product: Adaptive Workbench, Twin, Continuity, Memory, Auto-Tuning.

Platform: Spine, Capability Fabric, Discovery Engine, Governance, Spine Network.

Marketplace: Activate IntegrateWise, Connector Marketplace, MCP Marketplace, Domain Apps.

Resources: Blog, Documentation, Architecture, Release Notes.

- [ ] **Step 3: Route documentation externally**

Documentation and developer references must link to the separate Docs property rather than being implemented as technical documentation inside this repository.

- [ ] **Step 4: Run tests and build**

```bash
pnpm vitest run
pnpm check
pnpm build
```

- [ ] **Step 5: Commit**

```bash
git add src
 git commit -m "feat: align navigation with workspace and marketplace architecture"
```

---

### Task 5: Rebuild the Homepage Around Workspace Formation

**Files:**
- Modify: `src/pages/Home.tsx` or actual homepage path
- Create/modify: reusable marketing sections
- Test: homepage content and interaction tests

**Interfaces:**
- Consumes: global navigation and activation registry.
- Produces: canonical homepage with one coherent acquisition story.

- [ ] **Step 1: Write failing homepage assertions**

Assert the hero contains:

```text
Your work, organized into one adaptive workspace.
Activate IntegrateWise
See How the Workspace Forms
```

Assert that forbidden demo language is absent.

- [ ] **Step 2: Implement the homepage sequence**

Use this exact narrative order:

1. Hero: adaptive workspace.
2. Work is fragmented, not missing.
3. Marketplace activation.
4. Workspace forms automatically.
5. Stable shell, adaptive work surfaces.
6. One operational truth projected for different roles.
7. Contextual Twin and governed OODA cycle.
8. Continuity and memory.
9. Security and controlled adaptation.
10. Final marketplace activation CTA.

- [ ] **Step 3: Implement the transformation visual**

Represent:

```text
Connected tools → Workspace Activation → Operational context → Adaptive Workbench → Twin-assisted governed action
```

Do not use a generic analytics dashboard as the primary visual.

- [ ] **Step 4: Verify responsive and accessibility behavior**

Check keyboard navigation, heading hierarchy, contrast, reduced-motion behavior and narrow-screen layout.

- [ ] **Step 5: Run verification**

```bash
pnpm vitest run
pnpm check
pnpm build
```

- [ ] **Step 6: Commit**

```bash
git add src
 git commit -m "feat: rebuild homepage around adaptive workspace formation"
```

---

### Task 6: Build Canonical Product Narrative Pages

**Files:**
- Create/modify: Adaptive Workbench page
- Create/modify: Twin page
- Create/modify: Continuity page
- Create/modify: Memory page
- Create/modify: Auto-Tuning page
- Test: route and content tests

**Interfaces:**
- Produces: public explanations of the Product experience without leaking backend implementation.

- [ ] **Step 1: Implement Adaptive Workbench page**

Explain stable navigation, adaptive work surfaces, generated tables/views/pages/queues and role-aware projections.

- [ ] **Step 2: Implement Twin page**

Explain contextual Observe → Orient → Decide → Act → Verify → Continue behavior. Do not present the Twin as a general chatbot.

- [ ] **Step 3: Implement Continuity page**

Explain Signal → Context → Decision → Approval → Execution → Verification → Follow-up → Closure → Memory.

- [ ] **Step 4: Implement Memory page**

Explain operational, continuity, Twin, organizational, knowledge and audit memory. State that inference cannot silently become organizational truth.

- [ ] **Step 5: Implement Auto-Tuning page**

Explain visible, measurable and reversible optimization under explicit policy.

- [ ] **Step 6: Run verification and commit**

```bash
pnpm vitest run
pnpm check
pnpm build
git add src
git commit -m "feat: add canonical adaptive workspace product narratives"
```

---

### Task 7: Build Canonical Platform and Marketplace Pages

**Files:**
- Create/modify: Spine, Capability Fabric, Discovery Engine, Governance and Spine Network pages
- Create/modify: Marketplace Activation, Connector Marketplace, MCP Marketplace and Domain Apps pages
- Test: route, CTA and content tests

**Interfaces:**
- Consumes: marketplace activation registry and public terminology contract.
- Produces: progressive technical explanation beneath the workspace narrative.

- [ ] **Step 1: Implement Spine page**

Explain operational identity, relationships, provenance and continuity without opening with database terminology.

- [ ] **Step 2: Implement Capability Fabric and Discovery Engine pages**

Explain normalized business capabilities and discovery of schemas/tools/providers without claiming ungoverned execution.

- [ ] **Step 3: Implement Governance and Spine Network pages**

Explain identity-bound access, consent, evidence, approvals, scoped execution, audit and hosted marketplace federation.

- [ ] **Step 4: Implement Marketplace pages**

Clearly distinguish Connector Marketplace, MCP Marketplace and Domain Apps, while keeping IW Spine Network as the single activation entry point.

- [ ] **Step 5: Run verification and commit**

```bash
pnpm vitest run
pnpm check
pnpm build
git add src
git commit -m "feat: add platform and marketplace activation narratives"
```

---

### Task 8: Reframe Solutions, Roles and Industries

**Files:**
- Create/modify: solution pages
- Create/modify: role pages
- Create/modify: industry pages
- Test: route matrix and copy tests

**Interfaces:**
- Produces: domain-specific projections over one workspace, not independent products.

- [ ] **Step 1: Implement work-pattern solutions**

Create: Run the Company, Manage Customer Continuity, Coordinate Delivery, Connect Operational Systems, Preserve Organizational Knowledge.

- [ ] **Step 2: Implement role projection content**

Cover Founder/Operator, Sales, Customer Success, Support, Product/Engineering and Administration as different projections over one operational truth.

- [ ] **Step 3: Implement initial industry content**

Prioritize B2B SaaS, Professional Services, Enterprise Operations, Manufacturing, Aerospace/Space Systems and Technology/Engineering.

- [ ] **Step 4: Verify no separate-product framing**

```bash
rg -n -i "separate app|separate product|agent for each|dashboard for each" src
```

- [ ] **Step 5: Run verification and commit**

```bash
pnpm vitest run
pnpm check
pnpm build
git add src
git commit -m "feat: position roles and industries as workspace projections"
```

---

### Task 9: Align Security, Pricing, Blog and Resource Boundaries

**Files:**
- Modify: Security page
- Modify: Pricing page
- Modify: Blog/resource routes
- Modify: SEO metadata registry
- Test: metadata and external-link tests

**Interfaces:**
- Produces: trustworthy supporting content that respects repository boundaries.

- [ ] **Step 1: Rewrite Security around governed adaptation**

Cover identity, tenant isolation, consent, vault references, evidence, approvals, scoped execution, immutable audit and reversible tuning.

- [ ] **Step 2: Remove demo-dependent pricing conversion**

Pricing may explain plans or activation eligibility, but every action must terminate at Marketplace Activation or public documentation.

- [ ] **Step 3: Keep thought leadership; move technical instruction out**

The blog remains in Marketing. Product/API/SDK/MCP/ADK instructions route to Docs.

- [ ] **Step 4: Update SEO metadata**

Use Adaptive Operational Workspace, marketplace activation, continuity, contextual Twin, governed execution and Spine Network terminology.

- [ ] **Step 5: Run verification and commit**

```bash
pnpm vitest run
pnpm check
pnpm build
git add src
git commit -m "feat: align trust pricing and resources with marketplace activation"
```

---

### Task 10: Remove Superseded Content and Add Regression Gates

**Files:**
- Remove or redirect: superseded routes/components
- Create: `scripts/check-marketing-canon.mjs`
- Modify: `package.json`
- Create: `src/marketing-canon.test.ts`

**Interfaces:**
- Produces: automated protection against future narrative drift.

- [ ] **Step 1: Write the canon checker**

Fail when source files contain prohibited CTA or positioning phrases outside explicitly allowed fixtures.

- [ ] **Step 2: Add the script**

Add:

```json
{
  "scripts": {
    "check:canon": "node scripts/check-marketing-canon.mjs"
  }
}
```

Preserve all existing scripts.

- [ ] **Step 3: Redirect or remove obsolete routes**

Use permanent redirects only where the production host supports them. Otherwise retain a small route component that redirects to the canonical page.

- [ ] **Step 4: Run full verification**

```bash
pnpm check:canon
pnpm vitest run
pnpm check
pnpm build
```

- [ ] **Step 5: Commit**

```bash
git add .
git commit -m "chore: enforce canonical workspace marketing language"
```

---

### Task 11: Production Acceptance and Release

**Files:**
- Create: `docs/marketing/RELEASE_ACCEPTANCE.md`
- Modify: deployment configuration only where required

**Interfaces:**
- Produces: verified, deployable marketplace-led marketing release.

- [ ] **Step 1: Verify all routes**

Confirm every route renders, all internal links resolve and all documentation links leave the marketing property correctly.

- [ ] **Step 2: Verify conversion behavior**

Confirm every primary CTA enters Marketplace Activation and no demo/calendar destination remains.

- [ ] **Step 3: Verify technical quality**

```bash
pnpm install --frozen-lockfile
pnpm check:canon
pnpm vitest run
pnpm check
pnpm build
```

Expected: all commands exit `0`.

- [ ] **Step 4: Record acceptance evidence**

Record commit SHA, build output, tested routes, activation destinations, known limitations and rollback commit.

- [ ] **Step 5: Commit**

```bash
git add docs/marketing/RELEASE_ACCEPTANCE.md
git commit -m "docs: record marketing release acceptance"
```

- [ ] **Step 6: Release through the repository’s existing deployment workflow**

Do not introduce a second hosting path during this rebuild. Verify the deployment points only to the marketing domain and does not host Product or Docs content.
