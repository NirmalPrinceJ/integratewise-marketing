# Evidence & Proof

> Case studies, render gallery, interactive demo, and changelog highlights.

## Overview

This section provides tangible proof of IntegrateWise capabilities through real customer outcomes, downloadable artifacts, and hands-on demonstrations.

---

## Case Studies

### Case Study 1: SaaS Revenue Operations

**Company**: Mid-market B2B SaaS (Series B, 150 employees)  
**Industry**: Developer Tools  
**Challenge**: Fragmented customer data across HubSpot, Stripe, Intercom, and Notion

#### Before IntegrateWise

| Metric | Value | Pain Point |
|--------|-------|------------|
| Time to compile customer 360 | 4+ hours | Manual spreadsheet merging |
| Data freshness | 1-2 days stale | Batch exports, no real-time |
| CS team visibility | Partial | Siloed tools, no health score |
| Renewal prep time | 2 weeks | Manual deck creation |

#### After IntegrateWise

| Metric | Value | Improvement |
|--------|-------|-------------|
| Time to compile customer 360 | Real-time | **>95% reduction** |
| Data freshness | <5 minutes | **Real-time sync** |
| CS team visibility | Full | **Unified health scoring** |
| Renewal prep time | 2 hours | **85% reduction** |

#### Implementation

- **Duration**: 6 weeks
- **Connectors**: HubSpot, Stripe, Intercom, Notion, Slack
- **Templates**: CS Health Pulse, Weekly Planning OS

#### Methodology

- Data sources: Product analytics (Amplitude), CRM (HubSpot), Billing (Stripe)
- Timeframe: 90-day comparison (pre vs post implementation)
- Metrics validated by customer finance and ops teams

> "IntegrateWise transformed how we understand our customers. What used to take our CS team hours now happens automatically." — VP Customer Success

---

### Case Study 2: Consulting Firm Delivery

**Company**: Management Consulting (50 consultants)  
**Industry**: Professional Services  
**Challenge**: Project context scattered across email, Slack, and multiple client Notion workspaces

#### Before IntegrateWise

| Metric | Value | Pain Point |
|--------|-------|------------|
| Context switching per day | 47 app switches | Productivity drain |
| Time finding information | 1.5 hrs/day | Searching across tools |
| Project handoff time | 3-5 days | Knowledge transfer gaps |
| Client update frequency | Weekly | Manual compilation |

#### After IntegrateWise

| Metric | Value | Improvement |
|--------|-------|-------------|
| Context switching per day | 12 app switches | **74% reduction** |
| Time finding information | 15 min/day | **83% reduction** |
| Project handoff time | 4 hours | **90% reduction** |
| Client update frequency | Real-time | **Automated dashboards** |

#### Implementation

- **Duration**: 4 weeks
- **Connectors**: Gmail, Slack, Notion, Calendar, HubSpot
- **Templates**: AI Brainstream → Action, Weekly Planning OS

#### Methodology

- Data sources: Time tracking (Toggl), productivity surveys, project management
- Timeframe: 60-day pilot with 10 consultants, then full rollout
- Validated through consultant surveys and client NPS

> "Our consultants now spend time on high-value work instead of hunting for information." — Managing Partner

---

### Case Study 3: E-commerce Customer Success

**Company**: D2C E-commerce (Series A, 80 employees)  
**Industry**: Consumer Goods  
**Challenge**: No visibility into customer health; reactive churn management

#### Before IntegrateWise

| Metric | Value | Pain Point |
|--------|-------|------------|
| Churn rate (monthly) | 8.5% | No early warning |
| Time to identify at-risk | 30+ days | After signals missed |
| Renewal conversations | Reactive | Last-minute scrambles |
| Upsell identification | Manual | Missed opportunities |

#### After IntegrateWise

| Metric | Value | Improvement |
|--------|-------|-------------|
| Churn rate (monthly) | 4.2% | **51% reduction** |
| Time to identify at-risk | <7 days | **Proactive alerts** |
| Renewal conversations | Proactive | **90-day advance notice** |
| Upsell identification | Automated | **32% increase in expansion** |

#### Implementation

- **Duration**: 8 weeks
- **Connectors**: Shopify, Stripe, Zendesk, Klaviyo, Slack
- **Templates**: CS Health Pulse (with custom e-commerce metrics)

#### Methodology

- Data sources: Shopify analytics, Stripe MRR, Zendesk tickets
- Timeframe: 6-month cohort analysis
- Control group: Accounts not on health scoring

> "We went from fighting fires to preventing them. The health scoring alone paid for IntegrateWise in the first quarter." — Head of Customer Success

---

## Render Gallery

Downloadable examples of IntegrateWise outputs.

### Documents

| Artifact | Description | Format | Download |
|----------|-------------|--------|----------|
| Weekly Plan | Auto-generated weekly planning doc | Notion export | [Preview](#) |
| CS Health Report | Customer health summary | PDF | [Preview](#) |
| Renewal Deck | Executive renewal presentation | Google Slides | [Preview](#) |
| Meeting Notes | AI-summarized meeting notes | Markdown | [Preview](#) |

### Dashboards

| Artifact | Description | Format | Download |
|----------|-------------|--------|----------|
| CS Health Dashboard | Account health grid | Notion embed | [Preview](#) |
| Pipeline Overview | Deal flow visualization | Dashboard | [Preview](#) |
| Team Velocity | Sprint progress tracker | Dashboard | [Preview](#) |

### Emails

| Artifact | Description | Format | Download |
|----------|-------------|--------|----------|
| Check-in Email | CSM outreach template | Gmail draft | [Preview](#) |
| Renewal Reminder | Automated renewal notice | HTML | [Preview](#) |
| Weekly Digest | Team activity summary | HTML | [Preview](#) |

### Sample Data

All gallery artifacts use synthetic sample data:
- Company names are fictional
- Metrics are representative but not from real customers
- PII has been replaced with placeholder values

---

## Interactive Demo

### Sandbox Environment

Try IntegrateWise with pre-populated sample data:

**Demo URL**: [demo.integratewise.co](https://demo.integratewise.co)

**Includes**:
- 5 connected sample tools (read-only)
- 50 sample tasks, notes, and conversations
- Pre-configured CS Health Pulse
- Sample agent executions

**Limitations**:
- No external API calls
- Data resets every 24 hours
- No email/notification sending

### Guided Tours

| Tour | Duration | Topics |
|------|----------|--------|
| Platform Overview | 5 min | Hub, Spine, Agents, Render |
| Integration Setup | 10 min | Connect tools, configure sync |
| CS Health Scoring | 8 min | Health metrics, playbooks |
| Template Installation | 5 min | Install and customize templates |

### Book a Live Demo

For personalized demonstrations with your use case:

**[Book Demo →](https://integratewise.co/demo)**

- 30-minute session with product specialist
- Custom scenario walkthrough
- Q&A and pricing discussion

---

## Changelog Highlights

Recent releases focused on reliability and security.

### v2.4.0 (January 2025)

**Security & Reliability**

- ✅ **HMAC-SHA256 webhook signatures** — All inbound webhooks now require cryptographic signatures
- ✅ **Idempotency key enforcement** — Duplicate event prevention with 7-day TTL
- ✅ **DLQ operator runbook** — Documented procedures for failed event management
- ✅ **Clock skew tolerance** — 5-minute window for distributed system timing

**Ops Improvements**

- ✅ **Retry backoff policy** — Exponential backoff with jitter (1s → 2h)
- ✅ **Rate limit headers** — X-RateLimit-* headers on all responses
- ✅ **Health check endpoints** — /health and /ready for orchestration

### v2.3.0 (December 2024)

**Platform Hardening**

- ✅ **Spine schema validation** — JSON Schema enforcement on all entities
- ✅ **Relationship constraints** — Max 100 relationships per entity
- ✅ **Audit log expansion** — 15 new event categories

**Security**

- ✅ **TLS 1.3 default** — Upgraded minimum TLS version
- ✅ **API key scoping** — Granular permission scopes
- ✅ **Session timeout** — Configurable idle timeout (default: 30 min)

### v2.2.0 (November 2024)

**CS Intelligence**

- ✅ **Health score formula** — Weighted multi-signal scoring
- ✅ **Playbook automation** — Auto-assign interventions based on score
- ✅ **Trend detection** — 30-day rolling health trends

**Integrations**

- ✅ **Stripe subscription sync** — Real-time subscription lifecycle events
- ✅ **HubSpot deal mapping** — Bidirectional deal/task sync
- ✅ **Slack thread ingestion** — Full thread context preservation

### v2.1.0 (October 2024)

**Templates**

- ✅ **Weekly Planning OS** — Calendar + task + note aggregation
- ✅ **AI Brainstream → Action** — Webhook-based AI chat ingestion
- ✅ **Template variables** — Configurable parameters per installation

**Reliability**

- ✅ **Multi-region failover** — Automatic failover to secondary region
- ✅ **99.9% SLA** — Uptime commitment for Business tier
- ✅ **Backup verification** — Automated daily backup testing

---

## Proof Artifacts

### Security Certifications

| Certification | Status | Verification |
|---------------|--------|--------------|
| SOC 2 Type II | ✅ Certified | Report available under NDA |
| ISO 27001 | ✅ Certified | [View Certificate](#) |
| GDPR Compliant | ✅ | [DPA Available](#) |

### Performance Benchmarks

| Metric | Target | Actual | Verified |
|--------|--------|--------|----------|
| API Latency (p50) | <200ms | 89ms | ✅ |
| API Latency (p99) | <500ms | 312ms | ✅ |
| Sync Delay | <5min | 2.3min | ✅ |
| Uptime (30d) | 99.9% | 99.97% | ✅ |

### Integration Test Results

| Connector | Tests | Passing | Coverage |
|-----------|-------|---------|----------|
| Notion | 47 | 47 | 94% |
| Slack | 38 | 38 | 91% |
| HubSpot | 52 | 51 | 89% |
| Stripe | 31 | 31 | 96% |
| Gmail | 29 | 29 | 87% |

---

## Cross-References

- [Integration Matrix](/docs/integrations/matrix.md)
- [Security Overview](/docs/security/index.md)
- [API Reference](/docs/api/index.md)
- [Templates](/docs/templates/index.md)
