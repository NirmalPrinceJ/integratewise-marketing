# IntegrateWise Complete Page Contents

## Overview
This document contains the structure and metadata for all pages in the IntegrateWise application.

---

## Main Pages (22 pages)

### 1. Home Page (/)
- **Path**: app/page.tsx
- **Components**: 
  - Header (initially hidden)
  - HeroSection
  - HomeSections
  - SpineSection
  - SolutionSection
  - HomeBottomSections
  - Footer
- **Background**: #05070A (dark)

### 2. About (/about)
- **Title**: About | IntegrateWise
- **Description**: Born from a real $8M account save. One Spine. One Workspace. You stay in control.
- **Components**:
  - AboutContent
  - AboutJourneyScroll (sticky)
  - StatsBar (with 4 metrics: 13+ years integration, $8M first account saved, 70+ systems connected, 5 industries served)
  - AboutPlatformGather
  - TestimonialsSection
  - FinalCTA
  - Footer

### 3. Product (/product)
- **Title**: Product | IntegrateWise
- **Description**: One workspace. AI surfaces what matters. You approve what happens.
- **Components**:
  - ProductContent
  - ProductStickySections
  - FeatureShowcase
  - BenefitsGrid
  - ComparisonSection
  - TestimonialsSection
  - FinalCTA
  - Footer

### 4. Pricing (/pricing)
- **Title**: Pricing | IntegrateWise
- **Description**: Simple pricing. Start at ₹999/$49/mo. Scale to enterprise governance.
- **Components**:
  - PricingHero
  - PricingSection
  - PricingValueScroll (sticky)
  - PricingComparison
  - PricingIncludedGather (sticky)
  - PricingTrustBar
  - TestimonialsSection
  - PricingFAQ
  - FinalCTA
  - Footer
- **FAQ Topics**:
  - Can I switch between plans?
  - Is there a free trial?
  - What counts as a 'connector'?
  - Do you offer annual billing?
  - What's included in Implementation packages?
  - What happens to my data if I cancel?

### 5. Platform (/platform)
- **Title**: Platform | IntegrateWise
- **Description**: The Adaptive Spine. Connects every app. Governs every AI action. Nothing happens without your approval.
- **Components**:
  - PlatformContent
  - StatsBar
  - PlatformStickyScroll (sticky)
  - BentoShowcase
  - ComparisonSection
  - TestimonialsSection
  - PlatformFAQ
  - FinalCTA
  - Footer

### 6. Solutions (/solutions)
- **Title**: Solutions | IntegrateWise
- **Description**: One Spine. Workspace for daily work, Cognitive Layer for AI. Built for every function, industry, and role.
- **Components**:
  - SolutionsContent
  - StatsBar (6 industries, 6 roles, 3 function workspaces, 1 unified Spine)
  - BenefitsGrid
  - TestimonialsSection
  - FinalCTA
  - Footer

### 7. Contact (/contact)
- **Title**: Contact | IntegrateWise
- **Description**: Book a demo or request a connector. We connect your tools live.
- **Components**:
  - ContactContent (with defaultIntent="contact")
  - ContactOnboardingGather (sticky)
  - Footer

### 8. Integrations (/integrations)
- **Title**: Integrations | IntegrateWise
- **Description**: 70+ apps connected into one Spine. Salesforce, HubSpot, Slack, Stripe, and more.
- **Components**:
  - IntegrationsContent
  - StatsBar (70+ app connectors, 3 connector types, <100ms sync latency, 0 code required)
  - TestimonialsSection
  - FinalCTA
  - Footer

### 9. Why IntegrateWise (/why)
- **Title**: Why IntegrateWise | One Spine. One Workspace. Governed AI.
- **Description**: Apps are fragmented. AI lacks context. IntegrateWise unifies everything under your control.
- **Components**:
  - WhyContent
  - WhyPainScroll (sticky)
  - ComparisonSection
  - WhyAnswerGather (sticky)
  - TestimonialsSection
  - FinalCTA
  - Footer

### 10. Services (/services)
- **Title**: Services | IntegrateWise
- **Description**: Implementation, onboarding, and managed operations. We get you to truth faster.
- **Components**:
  - ServicesContent
  - BenefitsGrid
  - TestimonialsSection
  - FinalCTA
  - Footer

### 11. Resources (/resources)
- **Title**: Resources | IntegrateWise
- **Description**: Guides, use cases, and tools to help you get the most from IntegrateWise.
- **Components**:
  - ResourcesContent
  - ResourcesScroll (sticky)
  - FinalCTA
  - Footer

### 12. The Twin - AI (/ai)
- **Title**: The Twin | IntegrateWise
- **Description**: The Twin reads Truth, Context, and Session Summaries through the Spine. Surfaces signals in the Cognitive Layer and waits for your approval.
- **Components**:
  - AIContent
  - BentoShowcase (watch the Twin work)
  - ComparisonSection (AI that earns trust)
  - TestimonialsSection
  - FinalCTA
  - Footer

### 13. Business Ops (/business-ops)
- **Title**: Business Ops — 12 Tabs → One Workspace | IntegrateWise
- **Description**: Stop toggling between 12 tabs to find context. Cross-system visibility with AI that handles the busywork.
- **Components**:
  - BusinessOpsContent
  - FinalCTA
  - Footer

### 14. Personal Ops (/personal-ops)
- **Title**: Personal Ops — Your Morning, Auto-Organized | IntegrateWise
- **Description**: Replace 45 minutes of app-hopping with a single morning brief. A calm workspace above all your apps.
- **Components**:
  - PersonalOpsContent
  - FinalCTA
  - Footer

### 15. Spine & Intelligence (/spine)
- **Title**: Spine & Intelligence | IntegrateWise
- **Description**: Vendor-neutral data backbone. Unifies every app. AI reasons with evidence. You approve.
- **Components**:
  - SpineContent
  - FinalCTA
  - Footer

### 16. Account Success (/account-success)
- **Title**: Account Success — One Customer, One Record | IntegrateWise
- **Description**: Detect churn signals across 4+ tools before it's too late. Cross-tool entity matching, confidence scoring, and human-approved merges.
- **Components**:
  - AccountSuccessContent
  - FinalCTA
  - Footer

### 17. Security (/security)
- **Title**: Security | IntegrateWise
- **Description**: Enterprise-grade security, governance, and compliance. SOC 2 aligned, encrypted at rest and in transit, with complete audit trails.
- **Components**:
  - SecurityContent
  - StatsBar (256-bit AES encryption, 100% audit coverage, 0 trust assumptions, 24/7 monitoring)
  - ComparisonSection (security you can verify)
  - TestimonialsSection
  - FinalCTA
  - Footer

### 18. Privacy Policy (/privacy)
- **Title**: Privacy Policy | IntegrateWise
- **Description**: How IntegrateWise collects, uses, and protects your data.
- **Sections**:
  1. Information we collect
  2. How we use your information
  3. Data from connected tools
  4. Data retention
  5. Security
  6. Your rights
  7. Cookies and analytics
  8. Contact: connect@integratewise.ai

### 19. Terms & Conditions (/terms)
- **Title**: Terms & Conditions | IntegrateWise
- **Description**: Terms of service for using IntegrateWise.
- **Sections**:
  1. Acceptance of terms
  2. Service description
  3. Your account
  4. Your data (you retain ownership)
  5. Acceptable use
  6. Payment and billing
  7. Limitation of liability
  8. Termination
  9. Contact: connect@integratewise.ai

### 20. Documentation (/docs)
- **Title**: Documentation | IntegrateWise
- **Description**: Set up connectors, configure your workspace, and use AI features.
- **Status**: Coming soon
- **Contact**: connect@integratewise.ai

### 21. Blog (/blog)
- **Title**: Blog | IntegrateWise
- **Description**: Insights on connected workspaces, AI governance, and operational intelligence.
- **Blog Posts**:
  1. "Stop being the human API between your tools" (4 min read)
     - Author: IntegrateWise Team
     - Date: 2026-04-12
     - Tags: Product, Workspace
  2. "Why AI needs your approval — every single time" (3 min read)
     - Author: IntegrateWise Team
     - Date: 2026-04-10
     - Tags: AI, Trust

### 22. Changelog (/changelog)
- **Title**: Changelog | IntegrateWise
- **Description**: What's new in IntegrateWise — product updates, new connectors, and improvements.
- **Format**: Timeline with dated entries and feature items

---

## Platform Sub-Pages (5 pages)

### 1. Platform How it Works (/platform/how-it-works)
- **Title**: How it Works | IntegrateWise Platform
- **Description**: Data flows, identity resolution, knowledge base, and the triage mechanism that powers the Adaptive Spine.
- **Components**:
  - PlatformHowItWorksContent
  - HowItWorksGather (sticky)
  - FinalCTA
  - Footer

### 2. Platform Integrations (/platform/integrations)
- **Title**: Integrations | IntegrateWise Platform
- **Description**: SaaS APIs, MCP, webhooks, and file drops — all through one normalization pipeline into the Spine.
- **Components**:
  - PlatformIntegrationsContent
  - StatsBar (60+ SaaS connectors, 4 protocol types, <5 min average setup, 99.9% uptime)
  - IntegrationsStickyScroll (sticky)
  - IntegrationShowcase
  - FinalCTA
  - Footer

### 3. Platform The Adaptive Spine (/platform/the-adaptive-spine)
- **Title**: The Adaptive Spine | IntegrateWise Platform
- **Description**: Vendor-neutral data layer converting fragmented SaaS into one versioned source of truth.
- **Components**:
  - TheAdaptiveSpineContent
  - SpineStickyScroll (sticky)
  - IntegrationShowcase
  - TestimonialsSection
  - FinalCTA
  - Footer

### 4. Platform Infrastructure (/platform/infrastructure)
- **Title**: Infrastructure — IntegrateWise
- **Description**: Multi-region infrastructure, encryption, and operational resilience powering the Adaptive Spine.
- **Components**:
  - InfrastructureContent

### 5. Platform Security (/platform/security)
- **Title**: Security — IntegrateWise Platform
- **Description**: Enterprise-grade security architecture for the Adaptive Spine — encryption, access control, and audit trails.
- **Components**:
  - PlatformSecurityContent

---

## Product Sub-Pages (4 pages)

### 1. Product How it Works (/product/how-it-works)
- **Title**: How it Works | IntegrateWise Product
- **Description**: The Cognitive Layer — proactive signals, morning briefs, pattern detection, and evidence-backed reasoning.
- **Components**:
  - ProductHowItWorksContent
  - IntelligenceStickyScroll (sticky)
  - FinalCTA
  - Footer

### 2. Product Security (/product/security)
- **Title**: Security — IntegrateWise Product
- **Description**: Security controls built into the product — approval gates, audit logs, and governance by design.
- **Components**:
  - ProductSecurityContent

### 3. Product The Adaptive Workspace (/product/the-adaptive-workspace)
- **Title**: The Adaptive Workspace | IntegrateWise Product
- **Description**: Role-based views built on Entity 360. Nine workspace views, one canonical truth.
- **Components**:
  - TheAdaptiveWorkspaceContent
  - WorkspaceGather (sticky)
  - FinalCTA
  - Footer

### 4. Product Approval Gate & Twin (/product/approval-gate-twin)
- **Title**: Approval Gate & Twin in Action | IntegrateWise Product
- **Description**: AI proposes, you approve. Governed approval queues, tiered routing, Twin scoring, and 24-hour rollback.
- **Components**:
  - ApprovalGateTwinContent
  - ApprovalStickyScroll (sticky)
  - ApprovalGather (sticky)
  - FinalCTA
  - Footer

---

## Solutions Pages (13 pages)

### 1. Finance (/solutions/finance)
- **Title**: Finance | IntegrateWise Solutions
- **Description**: Revenue, risk, collections, cash — the financial picture that finance leaders actually need.
- **Components**: FinanceIndustryContent, FinalCTA, Footer

### 2. Customer Success (/solutions/customer-success)
- **Title**: Customer Success & Account Managers | IntegrateWise
- **Description**: Save at-risk accounts. Accelerate renewals. Surface expansion signals.
- **Components**: CustomerSuccessRoleContent, FinalCTA, Footer

### 3. SaaS (/solutions/saas)
- **Title**: SaaS | IntegrateWise Solutions
- **Description**: Renewals, expansion, adoption — connected in one account view.
- **Components**: SaasContent, FinalCTA, Footer

### 4. RevOps (/solutions/revops)
- **Title**: RevOps & Business Operations | IntegrateWise
- **Description**: Pipelines, headcount, projects, exceptions — connected and actionable.
- **Components**: RevOpsContent, FinalCTA, Footer

### 5. Operations (/solutions/operations)
- **Title**: Operations & Delivery Leaders | IntegrateWise
- **Description**: Utilisation, delivery, exceptions, escalations — the live view that keeps projects on track.
- **Components**: OperationsContent, FinalCTA, Footer

### 6. Founders & CXOs (/solutions/founders)
- **Title**: Founders & CXOs | IntegrateWise
- **Description**: Monday brief. Revenue movement. Board pack — available in seconds.
- **Components**: FoundersContent, FinalCTA, Footer

### 7. Retail & Ecommerce (/solutions/retail)
- **Title**: Retail & Ecommerce | IntegrateWise Solutions
- **Description**: Stock, orders, returns, support — every signal connected so teams act before problems become complaints.
- **Components**: RetailContent, FinalCTA, Footer

### 8. Manufacturing & Trade (/solutions/manufacturing)
- **Title**: Manufacturing & Trade | IntegrateWise Solutions
- **Description**: Orders, shipments, payments — live across ERP, CRM, and logistics.
- **Components**: ManufacturingContent, FinalCTA, Footer

### 9. Individual Professionals (/solutions/individual)
- **Title**: Individual Professionals | IntegrateWise
- **Description**: Morning brief, session memory, task queue — your day, organized.
- **Components**: IndividualContent, FinalCTA, Footer

### 10. Finance Leaders (/solutions/finance-leaders)
- **Title**: Finance Leaders | IntegrateWise
- **Description**: Cash, collections, runway — accounting, billing, and CRM unified.
- **Components**: FinanceLeadersContent, FinalCTA, Footer

### 11. Professional Services (/solutions/professional-services)
- **Title**: Professional Services | IntegrateWise Solutions
- **Description**: Engagements, deliverables, billing, relationships — the full account view.
- **Components**: ProfessionalServicesContent, FinalCTA, Footer

### 12. Services & Agencies (/solutions/services)
- **Title**: Services & Agencies | IntegrateWise Solutions
- **Description**: Projects, utilisation, invoices, client health — the full engagement picture.
- **Components**: ServicesContent, FinalCTA, Footer

---

## Resources Sub-Pages (1 page)

### 1. Campaign Gallery (/resources/campaign)
- **Title**: Campaign Gallery — Architecture & Creatives | IntegrateWise
- **Description**: Architecture blueprints showing the Adaptive Spine + 36 campaign designs (LinkedIn & WhatsApp) for Account Success, Business Ops, Personal Ops
- **Components**: CampaignGalleryContent, Footer
- **Gallery Items**: 36 campaign designs
- **JSON-LD**: CollectionPage with ImageGallery

---

## Key Statistics Across All Pages

### Platform Stats
- **70+** app connectors
- **13+** years of integration experience
- **$8M** first account saved
- **70+** systems connected
- **5** industries served
- **6** industries in solutions
- **6** roles supported
- **3** function workspaces
- **1** unified Spine

### Security Stats
- **256-bit** AES encryption
- **100%** audit coverage
- **0** trust assumptions
- **24/7** monitoring
- **SOC 2** Type II aligned

### Integration Stats
- **60+** SaaS connectors
- **4** protocol types supported
- **<5 min** average connector setup
- **99.9%** ingestion uptime
- **<100ms** sync latency
- **0** code required

---

## Navigation Structure

### Main Categories
1. **Product**: Product, How it Works, Adaptive Workspace, Security, Approval Gate
2. **Platform**: Platform, How it Works, Integrations, Adaptive Spine, Infrastructure, Security
3. **Solutions**: Solutions Hub + 12 industry/role solutions
4. **Resources**: Resources, Campaign Gallery, Blog, Changelog, Docs
5. **Company**: About, Contact, Services, Why, Security (company-wide), Privacy, Terms
6. **Integrations**: Integrations page

---

## Meta Information

### Common Open Graph Tags
- All pages include OG image: /og.png (1200x630)
- All pages include canonical URLs
- JSON-LD structured data on most pages
- Breadcrumb navigation on all pages

### Contact Information
- **Email**: connect@integratewise.ai
- **Demo CTA**: Book a demo (button at /contact?intent=demo)

### Branding
- **Company Name**: IntegrateWise
- **Tagline**: "Stop being the human API between your apps"
- **Domain**: integratewise.ai
- **Dark Mode**: Most pages use #05070A background

---

## Dynamic Content

### Blog Posts (2 published)
1. "Stop being the human API between your tools" (April 12, 2026)
   - 4 minute read
   - Tags: Product, Workspace

2. "Why AI needs your approval — every single time" (April 10, 2026)
   - 3 minute read
   - Tags: AI, Trust

### Changelog
- Timeline format with dated entries
- Feature items for each release

---

## Summary Statistics
- **Total Pages**: 45 main pages
- **Main Pages**: 22
- **Platform Sub-pages**: 5
- **Product Sub-pages**: 4
- **Solution Pages**: 13
- **Resource Sub-pages**: 1

All pages are fully optimized with:
- TypeScript support
- Metadata/SEO
- Structured data (JSON-LD)
- Responsive design
- Dark mode support
- Accessibility features
