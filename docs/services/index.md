# Services Packages

> Tiered professional services with defined artifacts, timelines, SLAs, and acceptance criteria.

## Service Tiers

| Package | Duration | Effort | Starting Price |
|---------|----------|--------|----------------|
| **Assessment** | 2-4 weeks | 40-80 hours | $15,000 |
| **Implementation** | 4-12 weeks | 80-320 hours | $40,000 |
| **Managed Ops** | Ongoing | Monthly retainer | $5,000/month |
| **MuleSoft Enablement** | 6-12 weeks | 120-400 hours | $75,000 |
| **Training** | 1-5 days | Per session | $3,000/day |

---

## Assessment Package

### Overview

Comprehensive discovery and planning engagement to map your integration landscape, identify risks, and create a deployment roadmap.

### Deliverables

| Artifact | Description | Format |
|----------|-------------|--------|
| **Discovery Report** | Current state analysis, stakeholder interviews, pain points | PDF (20-40 pages) |
| **System Map** | Visual inventory of tools, data flows, dependencies | Lucidchart/Miro + PDF |
| **Risk Register** | Integration risks, security gaps, compliance concerns | Excel + PDF |
| **Deployment Roadmap** | Phased implementation plan with milestones | Gantt + PDF |

### Timeline

| Phase | Duration | Activities |
|-------|----------|------------|
| **Kickoff** | Week 1 | Stakeholder alignment, access provisioning |
| **Discovery** | Weeks 1-2 | Interviews, tool inventory, data flow mapping |
| **Analysis** | Weeks 2-3 | Gap analysis, risk assessment, opportunity sizing |
| **Planning** | Weeks 3-4 | Roadmap development, prioritization, resource planning |
| **Delivery** | Week 4 | Final presentation, artifact handoff |

### Milestones

| Milestone | Deliverable | Acceptance Criteria |
|-----------|-------------|---------------------|
| M1: Discovery Complete | Interview notes, tool inventory | All stakeholders interviewed, all tools documented |
| M2: Analysis Complete | Risk register, gap analysis | Risks prioritized, gaps quantified |
| M3: Roadmap Delivered | Deployment roadmap | Phases defined, effort estimated, dependencies mapped |

### Sample Artifacts

#### Discovery Report (Redacted Excerpt)

```markdown
# Integration Discovery Report
## Client: [Redacted]
## Date: January 2025

### Executive Summary
Current integration landscape consists of 14 SaaS tools with 
limited connectivity. Primary pain points include:
- Manual data entry across CRM and support tools (est. 20 hrs/week)
- No unified customer view for CS team
- Inconsistent data between Stripe and HubSpot

### Recommendations
1. Implement IntegrateWise Hub for unified data routing
2. Deploy CS Health Pulse template for customer visibility
3. Enable Stripe ↔ HubSpot bidirectional sync

### ROI Projection
- Time savings: 15-20 hrs/week
- Churn reduction: 5-10% (improved visibility)
- Implementation payback: 4-6 months
```

#### System Map Example

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   HubSpot    │────▶│  Spreadsheet │────▶│   Looker     │
│   (CRM)      │     │  (Manual)    │     │  (Reports)   │
└──────────────┘     └──────────────┘     └──────────────┘
       │                                         ▲
       │                                         │
       ▼                                         │
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   Stripe     │     │   Zendesk    │────▶│   Notion     │
│   (Billing)  │     │   (Support)  │     │   (Docs)     │
└──────────────┘     └──────────────┘     └──────────────┘

Legend: ──▶ Manual process  ═══▶ Automated
```

### Acceptance Criteria

- [ ] All stakeholder interviews completed and documented
- [ ] Complete tool inventory with data flows
- [ ] Risk register with severity ratings
- [ ] Roadmap with 3-6 month implementation phases
- [ ] Executive presentation delivered
- [ ] All artifacts in agreed formats

---

## Implementation Package

### Overview

End-to-end deployment of IntegrateWise with your tools, custom configurations, testing, and go-live support.

### Deliverables

| Artifact | Description | Format |
|----------|-------------|--------|
| **Integration List** | Configured connectors with settings | Config export + PDF |
| **Schema Mapping Sheet** | Field mappings per connector | Excel |
| **Test Plan** | Test cases, expected results, pass criteria | Excel + PDF |
| **Cutover Checklist** | Go-live steps, rollback procedures | Checklist + PDF |
| **Runbooks** | Operational procedures, troubleshooting | Markdown/Confluence |

### Timeline (Standard - 8 weeks)

| Phase | Weeks | Activities |
|-------|-------|------------|
| **Setup** | 1-2 | Environment provisioning, connector auth, team onboarding |
| **Configuration** | 2-4 | Schema mapping, sync rules, agent setup |
| **Testing** | 4-6 | Integration testing, UAT, performance testing |
| **Cutover** | 6-7 | Data migration, go-live, monitoring |
| **Stabilization** | 7-8 | Issue resolution, optimization, handoff |

### Integration List Template

| Connector | Mode | Auth | Entities | Sync Direction | Status |
|-----------|------|------|----------|----------------|--------|
| HubSpot | Full | OAuth2 | Contacts, Deals, Companies | Bidirectional | ✅ Live |
| Stripe | Full | API Key | Subscriptions, Invoices | Inbound | ✅ Live |
| Slack | Full | OAuth2 | Messages, Channels | Inbound + Notify | ✅ Live |
| Notion | Full | OAuth2 | Databases, Pages | Bidirectional | ✅ Live |
| Gmail | Render Only | OAuth2 | Threads | Inbound | 🟡 Testing |

### Schema Mapping Sheet Template

| Source | Source Field | Spine Entity | Spine Field | Transform | Notes |
|--------|--------------|--------------|-------------|-----------|-------|
| HubSpot | properties.dealname | Task | title | None | |
| HubSpot | properties.amount | Task | custom_fields.deal_value | To cents | |
| HubSpot | properties.dealstage | Task | status | mapDealStage | See mapping table |
| Stripe | customer.email | HealthMetric | custom_fields.email | None | PII - encrypted |

### Test Plan Template

| Test ID | Category | Description | Steps | Expected | Pass Criteria |
|---------|----------|-------------|-------|----------|---------------|
| INT-001 | Sync | HubSpot deal sync | 1. Create deal in HubSpot 2. Wait 60s 3. Check Spine | Task created | Task exists with correct fields |
| INT-002 | Webhook | Slack message ingestion | 1. Post message 2. Check Brain | Memory created | Memory indexed, searchable |
| INT-003 | Agent | Weekly planning execution | 1. Invoke agent 2. Check outputs | Plan created | Notion page with 7 days |
| SEC-001 | Security | Signature verification | 1. Send invalid signature | 401 response | Webhook rejected |

### Cutover Checklist

```markdown
## Pre-Cutover (T-24h)
- [ ] Final backup of source systems
- [ ] Notify stakeholders of maintenance window
- [ ] Verify rollback procedures documented
- [ ] Confirm support coverage

## Cutover (T-0)
- [ ] Enable production connectors
- [ ] Run initial full sync
- [ ] Verify data in Spine
- [ ] Enable agents and templates
- [ ] Send test notifications

## Post-Cutover (T+1h)
- [ ] Verify ongoing syncs
- [ ] Check error rates
- [ ] Confirm user access
- [ ] Monitor dashboards

## Rollback Triggers
- Error rate > 5%
- Sync delay > 30 minutes
- Critical data mismatch
- Security incident
```

### Acceptance Criteria

- [ ] All planned connectors live and syncing
- [ ] Schema mappings validated with sample data
- [ ] Test plan executed, >95% pass rate
- [ ] Runbooks reviewed by ops team
- [ ] Stakeholder sign-off obtained
- [ ] 48-hour stabilization period passed

---

## Managed Ops Package

### Overview

Ongoing operational support with defined SLOs, proactive monitoring, and regular health reporting.

### Service Level Objectives

| Metric | Target | Measurement |
|--------|--------|-------------|
| **Uptime** | 99.9% | Monthly, excluding maintenance |
| **Sync Latency** | <5 minutes p95 | Per connector |
| **API Latency** | <500ms p99 | All endpoints |
| **Incident Response** | <15 min (P1), <1h (P2) | Time to acknowledge |
| **Resolution Time** | <4h (P1), <24h (P2) | Time to resolve |

### Escalation Policy

| Priority | Definition | Response | Escalation |
|----------|------------|----------|------------|
| **P1 - Critical** | Service down, data loss risk | 15 min | Immediate to on-call |
| **P2 - High** | Degraded service, workaround exists | 1 hour | 2 hours to team lead |
| **P3 - Medium** | Minor issue, no business impact | 4 hours | Next business day |
| **P4 - Low** | Enhancement, question | 24 hours | Weekly review |

### Change Cadence

| Change Type | Frequency | Approval |
|-------------|-----------|----------|
| **Emergency** | As needed | Post-hoc review |
| **Standard** | Weekly (Tuesdays) | Change board |
| **Major** | Monthly | Stakeholder approval |
| **Maintenance** | Monthly (first Sunday) | 72h notice |

### Monthly Health Report

```markdown
# IntegrateWise Monthly Health Report
## Period: January 2025

### Availability
- Overall uptime: 99.95%
- Incidents: 2 (1 P2, 1 P3)
- Planned maintenance: 2 hours

### Performance
- Sync latency p95: 2.3 minutes
- API latency p99: 312ms
- Error rate: 0.02%

### Usage
- API calls: 1.2M
- Entities synced: 45,000
- Agent executions: 3,200
- Active users: 28

### Incidents
| Date | Priority | Duration | Root Cause | Status |
|------|----------|----------|------------|--------|
| Jan 12 | P2 | 45 min | HubSpot API timeout | Resolved |
| Jan 23 | P3 | 2 hr | Schema mismatch | Resolved |

### Recommendations
1. Increase HubSpot sync frequency (currently 15min → 5min)
2. Enable Gmail integration for CS team
3. Schedule Q2 capacity review

### Next Month
- Planned maintenance: Feb 2, 02:00-04:00 UTC
- Upcoming features: CS Health v2, Jira connector
```

### Acceptance Criteria

- [ ] SLOs met for billing period
- [ ] Monthly report delivered by 5th business day
- [ ] All P1/P2 incidents have RCA within 72h
- [ ] Change log maintained and accessible
- [ ] Quarterly business review scheduled

---

## MuleSoft Enablement Package

### Overview

API-led integration strategy with MuleSoft, including taxonomy design, DataWeave specifications, CI/CD pipeline, and governance model.

### Deliverables

| Artifact | Description | Format |
|----------|-------------|--------|
| **API-Led Taxonomy** | System, Process, Experience API design | Diagrams + Specs |
| **DataWeave Specs** | Transformation specifications | DWL files + docs |
| **CI/CD Pipeline** | Automated build/deploy | GitHub Actions/Jenkins |
| **Governance Model** | API lifecycle, versioning, deprecation | PDF + Confluence |

### API-Led Taxonomy Example

```
┌─────────────────────────────────────────────────────────┐
│                    Experience APIs                       │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │ Mobile App  │  │   Web App   │  │  Partner    │     │
│  │    API      │  │    API      │  │    API      │     │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘     │
└─────────┼────────────────┼────────────────┼─────────────┘
          │                │                │
┌─────────┼────────────────┼────────────────┼─────────────┐
│         ▼                ▼                ▼             │
│                    Process APIs                          │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │  Customer   │  │   Order     │  │  Analytics  │     │
│  │   360 API   │  │ Fulfillment │  │    API      │     │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘     │
└─────────┼────────────────┼────────────────┼─────────────┘
          │                │                │
┌─────────┼────────────────┼────────────────┼─────────────┐
│         ▼                ▼                ▼             │
│                    System APIs                           │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐│
│  │HubSpot │ │ Stripe │ │ SAP    │ │Snowflake│ │ SFTP  ││
│  │  API   │ │  API   │ │  API   │ │  API    │ │  API  ││
│  └────────┘ └────────┘ └────────┘ └────────┘ └────────┘│
└─────────────────────────────────────────────────────────┘
```

### DataWeave Specification Example

```dataweave
%dw 2.0
output application/json
/**
 * Transform HubSpot Contact to IntegrateWise Spine Entity
 * @version 1.0.0
 * @author IntegrateWise Services
 */
---
{
  _type: "note",
  id: "note_" ++ uuid(),
  title: payload.properties.firstname ++ " " ++ payload.properties.lastname,
  body_md: payload.properties.description default "",
  tags: (payload.properties.hs_lead_status splitBy ";") 
        map (trim($) replace " " with "_" lower),
  source_tool: "hubspot",
  external_ref: {
    source: "hubspot",
    external_id: payload.id,
    url: "https://app.hubspot.com/contacts/" ++ payload.portalId ++ "/contact/" ++ payload.id,
    synced_at: now(),
    sync_status: "synced"
  },
  workspace_id: vars.workspaceId,
  created_at: payload.createdAt as DateTime,
  updated_at: payload.updatedAt as DateTime
}
```

### CI/CD Pipeline

```yaml
# .github/workflows/mulesoft-deploy.yml
name: MuleSoft Deploy

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Java
        uses: actions/setup-java@v4
        with:
          java-version: '11'
          distribution: 'temurin'
      
      - name: Build with Maven
        run: mvn clean package -DskipTests
      
      - name: Run MUnit Tests
        run: mvn test
      
      - name: Security Scan
        run: mvn dependency-check:check
      
  deploy-sandbox:
    needs: build
    if: github.ref == 'refs/heads/develop'
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to Sandbox
        run: |
          mvn deploy -DmuleDeploy \
            -Danypoint.username=${{ secrets.ANYPOINT_USERNAME }} \
            -Danypoint.password=${{ secrets.ANYPOINT_PASSWORD }} \
            -Denv=sandbox
            
  deploy-production:
    needs: build
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: Deploy to Production
        run: |
          mvn deploy -DmuleDeploy \
            -Danypoint.username=${{ secrets.ANYPOINT_USERNAME }} \
            -Danypoint.password=${{ secrets.ANYPOINT_PASSWORD }} \
            -Denv=production
```

### Acceptance Criteria

- [ ] API taxonomy approved by architecture team
- [ ] All DataWeave specs pass unit tests
- [ ] CI/CD pipeline deploying to sandbox
- [ ] Governance model documented and socialized
- [ ] Team trained on MuleSoft development

---

## Training Package

### Overview

Role-based training with hands-on exercises, playbooks, and competency verification.

### Curricula

| Role | Duration | Topics |
|------|----------|--------|
| **Admin** | 2 days | Full platform, security, user management |
| **Operator** | 1 day | Integrations, agents, templates, monitoring |
| **Contributor** | 0.5 day | Daily usage, Spine, Render |
| **Developer** | 2 days | API, SDK, custom integrations |

### Admin Playbook (Sample)

```markdown
# Admin Playbook: User Onboarding

## Objective
Add new user with appropriate permissions

## Prerequisites
- Admin role
- User email address
- Intended role assignment

## Steps

### 1. Invite User
1. Navigate to Settings → Users
2. Click "Invite User"
3. Enter email address
4. Select role (Viewer/Contributor/Operator)
5. Click "Send Invite"

### 2. Verify Activation
1. User receives email within 5 minutes
2. User clicks activation link
3. User completes profile

### 3. Assign Additional Permissions (if needed)
1. Navigate to Settings → Users → [User]
2. Click "Permissions"
3. Add specific scopes as needed
4. Save changes

### 4. Verify Access
1. Ask user to log in
2. Confirm they can access intended resources
3. Document in onboarding tracker

## Troubleshooting
- **Invite not received**: Check spam, resend invite
- **Activation link expired**: Resend invite (24h expiry)
- **Permission denied errors**: Verify role assignment
```

### Competency Checks

| Role | Assessment | Pass Criteria |
|------|------------|---------------|
| Admin | Practical exam (90 min) | Score ≥80%, complete all tasks |
| Operator | Scenario exercises | Complete 5/6 scenarios correctly |
| Contributor | Hands-on tasks | Complete onboarding checklist |
| Developer | Code review + API exercise | Working integration + clean code |

### Acceptance Criteria

- [ ] All attendees complete training
- [ ] Materials delivered (slides, playbooks, recordings)
- [ ] Competency checks passed
- [ ] Feedback collected (NPS ≥40)
- [ ] Follow-up Q&A session scheduled

---

## Cross-References

- [Templates Documentation](/docs/templates/index.md)
- [API Reference](/docs/api/index.md)
- [Security & Governance](/docs/security/index.md)
