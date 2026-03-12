# IntegrateWise OS — Spine as Foundation Architecture
## "The Spine is the Single Source of Truth"

> **Note:** This document is the canonical Spine-as-foundation reference for the IntegrateWise product. Links to ARCHITECTURE.md, SPINE_DEPTH_MATRIX.md, and other implementation docs refer to the main application repository.

> **The Spine is the Adaptive Spine** — an **adaptive schema**. **Whatever happens in the workspace** — connectors, onboarding, data schema, every screen, every module, every domain, every use case — must be **based on the adaptive schema only**. **Only then** is value delivered for that particular domain or that particular use case. No component defines its own schema or exists independently of the Adaptive Spine. See [ARCHITECTURE.md](ARCHITECTURE.md) §0.

### Marketing clarity — product name: Unified Intelligence Layer

**Internal/technical name:** Spine / Spine V2 (architecture and code). **Product/marketing name:** **Unified Intelligence Layer**.

For the marketing site and external messaging, use the name **Unified Intelligence Layer** and this definition:

- The **Unified Intelligence Layer** is **intelligent plumbing** that connects all business systems — CRM, Tally, WhatsApp, machines, emails, bots, product usage, and historical data — into a **single living nervous system**.
- It is **adaptive**: it dynamically fits and caters to any user, whether **Student**, **Working Professional**, or **Business Person**.
- It is **industry-agnostic** and **department-agnostic**.
- The Unified Intelligence Layer **grows with the user** and becomes stronger over time.

---

## Core Principle

```
┌─────────────────────────────────────────────────────────────────────────────┐
│              THE SPINE IS THE FOUNDATION (ADAPTIVE SPINE = ADAPTIVE SCHEMA) │
│                                                                             │
│   Whatever happens in the workspace — all based on Adaptive Spine only   │
│   Only then is value delivered for that domain or that use case           │
│                                                                             │
│   Spine Schema Based Connector → Spine Schema Based Loader →                │
│   Spine Schema Based Normalizer (8 stages) → SPINE → Intelligence Layer    │
│                                                    ↓                        │
│                                              Spine UI                       │
│                                                    ↑                        │
│                                          Docs / Mails / Chats               │
│                                          Goals & Metrics                    │
│                                          Context & Relationships            │
└─────────────────────────────────────────────────────────────────────────────┘
```

**If the Spine is rich → Intelligence is rich → Workspace loads with value in 60s**  
**If the Spine is shallow → Intelligence is shallow → Empty dashboards**  
**If it's not in the Adaptive Spine, it's not in the system.**

**Spine connects with each and every thing:** Context (storing and linking of context), AI Chats, AI, all intelligence layers (THINK, GOVERN, ACT, ADJUST), backend services, Loader, 8-stage pipeline, Normalizer, connectors — and the repeat loop (LOAD → NORMALIZE → STORE → THINK → REVIEW & APPROVE → ACT → REPEAT). No component operates without the Spine.

---

## Spine flow: everything flows through it

The Spine is the foundation — **everything flows through it**:

```
Connectors → Loader (8 stages) → Normalizer → SPINE → Intelligence Layer → Workspace UI
                                                   ↑
                                         Docs / Mails / Chats
                                         Goals & Metrics
                                         Context & Relationships
```

The Spine is the single source of truth. **If the Spine has rich, domain-specific fields**, then:

1. **Intelligence Layer** can generate smart insights (not generic ones)
2. **Workspace** loads with value in 60s (real data, not empty dashboards)
3. **Goals & Metrics** have actual data to measure against
4. **Cross-domain connections** work (e.g. a deal links to a contract links to an invoice)
5. **AI/Cognitive layer** has context to reason over

**If the Spine is shallow, intelligence is shallow.** That is the point of the MuleSoft CSM example — it has 15 tables with 200+ fields because CSM intelligence needs that depth (account health, stakeholder outcomes, risk registers, platform health, etc.).

**Every domain needs the same depth:**

- **Finance** needs invoice line items, aging buckets, rev rec schedules — not just "amount"
- **Engineering** needs sprint velocity, incident RCA, deploy frequency — not just "status"
- **HR** needs comp bands, engagement scores, attrition risk — not just "employee name"

Migrations **033 (CSM), 045 (RevOps/SalesOps), 046 (Marketing/Support), and 047 (Finance/Legal/HR/Engineering/Personal/BizOps)** deliver ~120 tables across all 12 domains. The Loader's `CANONICAL_FIELDS` and the Normalizer's `EntityType` are expanded to match. The chain is: **Onboarding picks domain → Connectors pull raw data → Loader normalizes fields → Spine stores with full depth → Intelligence reads and reasons → Workspace renders value.**

---

## 12 domains and implementation phases

| Domain | Complexity | Revenue Impact | Implementation Phase |
|--------|------------|----------------|----------------------|
| **Sales/RevOps** | High | Critical | Phase 1 (Week 1–2) |
| **Finance** | High | Critical | Phase 1 (Week 3–4) |
| **CSM** (e.g. MuleSoft model) | Medium | High | Phase 1 (Week 1–4) |
| **Engineering** | Medium | Medium | Phase 2 (Week 5–6) |
| **Marketing** | Medium | High | Phase 2 (Week 5–6) |
| **Legal** | Low | Medium | Phase 2 (Week 7–8) |
| **HR/People** | High | Medium | Phase 3 (Week 9–10) |
| **Supply Chain** | High | Variable | Phase 3 (Week 9–12) |
| **Support** | Low | High | Phase 3 (Week 11–12) |
| **Freelancers** | Low | Entry Market | Phase 4 (Week 13–14) |
| **Healthcare** | Very High | Vertical | Phase 4 (Week 13–16) |
| **Education** | Medium | Vertical | Phase 4 (Week 15–16) |
| **Automotive** | High | Vertical | Phase 5 (Week 17–20) |

Depth Matrix and Spine schema per tenant define what is unlocked per domain; workspace value is delivered only when the adaptive schema has the depth for that domain.

---

## Spine-Only Execution: The Whole Stack

**Whatever happens in the workspace** must be based on the adaptive schema only — **only then** is value delivered for that particular domain or that particular use case.

It is **not only** Stage 1 (Spine Schema Based Connector → Loader → Normalizer → Spine) that runs on the Spine. **The entire system** runs on the Spine data structure only. Only then does it deliver real intelligence, cater to every user's needs, and deliver value.

| Part of the system | Spine-only rule | Why it matters |
|--------------------|-----------------|----------------|
| **Connectors** | **Based on Adaptive Spine only.** Which connectors are available and what they sync (entity types, canonical fields) are derived from the Spine schema and tenant Depth Matrix. No connector writes a field that does not exist in the Spine. | Connectors deliver value only when they feed the one graph. |
| **Onboarding** | **Based on Adaptive Spine only.** Onboarding creates or selects the tenant's Spine schema (`tenant_spine_config`). Domains, modules, and capabilities are driven by that config. No onboarding without Spine schema. | Every tenant gets a consistent, schema-driven experience. |
| **Data schema** | **Is the Adaptive Spine.** There is no separate data schema. Spine tables, entity types, canonical fields, and per-tenant config *are* the data schema. All services and UI consume only this. | One schema for the whole system. |
| **Stage 1: Spine Schema Based Connector → Loader → Normalizer → Spine** | Ingest writes only to Spine; canonical fields and entity types come from Spine. | Raw data becomes one coherent graph. |
| **Intelligence layer (L2)** | THINK, GOVERN, ACT, ADJUST read and write **only** Spine tables/views. No parallel "intelligence schema." | **Real intelligence** — insights and proposals are grounded in Spine entities and relationships. |
| **All backend services** | Gateway, pipeline, cognitive-brain, knowledge, stream-gateway, govern, act, think, etc. operate on **Spine-shaped data** only. Queries and responses align to Spine. | **Value is delivered** — services behave consistently and stay aligned with one source of truth. |
| **Context: docs, emails, AI chats** | Ingested context is **stored and linked** via Spine (e.g. `context_extractions`, entity links). Structure and entity resolution follow Spine. | **Context becomes intelligent** — "this email mentions Account X" is a Spine link; AI and L2 see one graph. |
| **AI (reasoning, chat, recommendations)** | AI reasons **over Spine only** — Entity 360, cross-links, goals, metrics. No ad-hoc or off-graph data for decisions. | **AI is intelligent** — recommendations and answers are traceable to Spine entities and stay consistent across users and domains. |
| **Spine UI** | Renders what Spine (and Depth Matrix) allow for the tenant's connector set and readiness. | **Every user's needs** — per department, per depth level, from one Spine. |

**Summary:** **Whatever happens in the workspace** — connectors, onboarding, data schema, ingestion, context, intelligence, every backend service, every screen, every domain, every use case — is **based on the Adaptive Spine only**. The Spine is the adaptive schema; there is no separate data schema. **Only then** is value delivered for that particular domain or that particular use case. That is what makes intelligence real, context useful, and value delivered for every user.

---

## Cognitive Loop: Spine as Base (Flow A + B + C)

The same flow with **Spine as base for the rest**. Three data flows feed Entity 360; the loop runs on Spine + Knowledge; approvals are hard-gated; evidence is recorded.

```
Flow A (Spine) + Flow B (Knowledge) + Flow C (AI Memory)
          │
          ▼
      ENTITY 360 (Spine + Knowledge + Signals)
          │
          ▼
        THINK Layer → action_proposals
          │
          ▼
        GOVERN → Hard Gate: no execution without approval
          │
          ▼
       HITL Queue (Supabase DO + actions table)
          │
     ┌────┴─────┐
     │ APPROVE   │ DENY
     ▼          ▼
   ACT Layer   ADJUST Layer
     │          │
     └─────┬────┘
           ▼
         PIPELINE → Spine / Knowledge updated
           │
           ▼
        ENTITY 360 picks up new signals
           │
           ▼
        Evidence recorded → Evidence Drawer
```

| Step | What runs on Spine (or Spine + Knowledge) |
|------|-------------------------------------------|
| **Flow A** | Structured data from connectors → Loader → Normalizer → **Spine**. |
| **Flow B** | Unstructured docs → extraction → **Knowledge** (linked to Spine entities). |
| **Flow C** | AI chat / MCP → **AI Memory** (decisions, context; linked to Spine where applicable). |
| **Entity 360** | Aggregated view from **Spine + Knowledge + Signals** — single place THINK reads from. |
| **THINK → proposals** | Input: Entity 360 only. Output: `action_proposals` (Spine-shaped). |
| **GOVERN** | Hard gate: no execution without approval; policy checks use Spine + proposal. |
| **HITL** | Pending actions in Supabase + DO; UI shows queue from Spine/actions table. |
| **ACT / ADJUST** | ACT executes; ADJUST learns from deny. Both feed back into pipeline. |
| **Pipeline** | Writes back to **Spine** and/or **Knowledge**; Entity 360 picks up new signals. |
| **Evidence Drawer** | Evidence recorded from the loop; queryable, Spine-linked. |

**Value rule:** All of the above add **value** only when they act **based on Spine only** — Entity 360 from Spine (+ Knowledge/Signals linked to Spine), THINK/GOVERN/ACT/ADJUST on Spine-shaped data, Pipeline and Evidence Spine-linked. If any step runs on data outside the Spine, it is **mere execution with no real value**; the loop must be Spine-based end-to-end for value delivery.

Spine remains the base: Flow A lands in Spine; Entity 360 is Spine-centric (Knowledge and AI Memory linked to Spine entities); pipeline updates Spine (and Knowledge); Evidence is recorded with Spine linkage.

---

## Spine-Only Wiring (Single Source of Truth)

**All system wiring is derived from the Spine.** No component defines its own schema or field set independently.

| Layer | Wiring source | Rule |
|-------|----------------|------|
| **Spine Schema Based Loader** | Spine tables + columns (migrations 033, 045, 046, 047, 050) | `iw_canonical_fields` maps connector paths → **Spine column names** only. `domain` + `entity_type` resolve to the **Spine table**. No field is written that does not exist in the Spine. |
| **Spine Schema Based Normalizer** | Spine entity types + domain tables | `EntityType` and domain routing must match Spine `entity_type` and domain table names. Sectorize writes only to Spine tables. |
| **Intelligence (L2)** | Spine tables + views | Entity 360, THINK, and proposals read **only** from Spine tables and views (e.g. `v_entity_360`, domain tables). No parallel "intelligence schema." |
| **Spine UI** | Spine domains + data presence | Which domains/modules to show is driven by **Spine domain tables** and what data exists there. No orphan UI for domains the Spine does not have. |
| **Goals & Metrics** | Spine goal tables + `goal_refs` | Progress and targets are stored in Spine; metrics are computed from Spine data. |
| **Backend services** | Spine data structure only | Gateway, pipeline, cognitive-brain, knowledge, stream-gateway, govern, act, think: operate on Spine-shaped data only. Value delivered only when services run per Spine. |
| **Context (docs, emails, AI chats)** | Spine storage + entity links | Stored and linked via Spine (`context_extractions`, entity links). Context is intelligent only when tied to Spine. |
| **AI** | Spine only | Reasons over Entity 360, cross-links, goals from Spine. AI is intelligent only when it uses Spine. |

**Derivation chain:**

```
Spine schema (migrations) + spine_schema_registry
         │
         ├──→ iw_canonical_fields: (domain, entity_type, canonical_field) = (Spine table, Spine column)
         │    source_object_map = "where the value comes from" (HubSpot/Salesforce path)
         │
         ├──→ Loader/Normalizer: resolve entity_type + canonical_field → Spine table.column
         │
         ├──→ Context (docs, emails, chats): store and link via Spine; entity resolution from Spine
         │
         ├──→ Intelligence (L2): read/write only Spine tables/views — real intelligence only then
         │
         ├──→ All backend services: operate on Spine-shaped data only — value delivered only then
         │
         ├──→ AI: reason over Spine only — intelligent only then
         │
         └──→ Spine UI: domain list and module content from Spine + Depth Matrix
```

**If it's not in the Spine, it's not wired.** Spine Schema Based Connector, Loader, Normalizer, Intelligence, and Spine UI all align to the same Spine schema — no duplicate field lists or parallel configs.

---

## Two-Layer Spine: Fixed Substrate + Adaptive Depth

The Spine stays **explicit somewhere** — but not hand-authored per department forever. Two layers:

### 1. Fixed Spine substrate (what must stay explicit)

| Element | Purpose |
|--------|---------|
| **Core entity types** | `account`, `deal`, `contact`, `invoice`, `ticket`, `employee`, `contract`, `project`, etc. |
| **Base grammar of cross-domain fields** | `account_id`, `deal_id`, `contract_id`, `employee_id`, `arr_value`, `status`, `created_at`, `updated_at`, etc. |
| **Goal / Metric / Outcome / Intervention rules** | `goal_refs[]`, HITL gate, "no metric without goal," dual-context (Personal vs Work). |

### 2. Adaptive depth on top

| Mechanism | Description |
|-----------|-------------|
| **Field activation and priority per domain** | P1/P2 and ENRICH/SIGNAL; connector coverage unlocks more canonical fields and metrics. |
| **Schema expansion driven by intelligence needs** | Intelligence Layer can **request** new canonical fields when it hits limits; registry grows over time. |
| **Connector-specific profiles of depth** | Same domain can have multiple Spine "shapes" via activation (e.g. CSM minimal vs CSM full). |

---

## Capability Model: Spine Depth Matrix

Per **department**: Connectors (expanded as needed) → canonical fields populated → metrics & intelligence unlocked.

**Depth levels (per department)**  
- **Level 1:** Minimal connector set → core canonical fields → basic metrics.  
- **Level 2:** Expanded connector set → more canonical fields → richer metrics and Entity 360.  
- **Level 3:** Full profile → full canonical depth → full intelligence features.

**Per tenant:** Each tenant has a **Spine schema + Depth Matrix** (onboarding); every screen, pipeline stage, and service call resolves `(tenant_id, user_id)` → that tenant's Spine schema + Depth Matrix. **Full matrix:** **[SPINE_DEPTH_MATRIX.md](SPINE_DEPTH_MATRIX.md)** (12 departments, depth levels, entity types).

---

## Initial Data Load and Delta Load Sync

- **No full sync / no full migration.** Initial load is two phases.
- **Phase 1 — Creamy (60s):** Only creamy-level data → pipeline → Spine → **first value in 60s**.
- **Phase 2 — Needed (~1 day):** Extract **only the needed information** in the background; no full dump.
- **Delta load:** Incremental sync with `since` → same pipeline → Spine.

---

## Summary

```
THE SPINE IS NOT JUST A DATABASE.

It is:
✓ The single source of truth for all domain data
✓ The **only** data structure the whole stack uses: ingestion, context, Intelligence layer, every backend service, and AI run on Spine only — real intelligence and value only then
✓ The connection layer between departments (deal → contract → invoice)
✓ The context store for AI reasoning (notes, emails, chats linked to Spine entities)
✓ The goal alignment layer (every record links to strategic goals)
✓ The intelligence substrate (rich fields enable rich insights; AI and L2 reason over Spine only)

Without the Spine: 12 departments disconnected, empty dashboards, shallow AI
With the Spine:    One substrate, 28 app connectors + Gateways + MCP + AI + Webhooks, expanded per department, Depth Matrix per domain, value in 60s, deep intelligence
```

---

*References to ARCHITECTURE.md, SPINE_DEPTH_MATRIX.md, ADAPTIVE_SPINE_CREATION_AND_NEXT_STEPS.md, and DOCS_TO_IMPLEMENTATION.md are in the main IntegrateWise application repository.*
