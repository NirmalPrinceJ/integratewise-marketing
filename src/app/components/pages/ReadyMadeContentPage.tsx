import { useState } from 'react';
import { copyToClipboard } from '../../utils/clipboard';
import {
  Copy,
  Check,
  Linkedin,
  Twitter,
  Mail,
  MessageCircle,
  Globe,
  FileText,
  Megaphone,
  Search,
  Filter,
  Download,
  Sparkles,
  Send,
  Target,
  Users,
  Layers,
  Shield,
  Zap,
  ChevronDown,
  ChevronUp,
  Phone,
  BookOpen,
  Presentation,
  Hash,
  PenLine,
} from 'lucide-react';

/* ═══════════════════════════════════════
   TYPES
   ═══════════════════════════════════════ */
type ContentCategory = 'all' | 'linkedin' | 'twitter' | 'email' | 'whatsapp' | 'website' | 'ads' | 'cold-outreach' | 'elevator';

interface ContentItem {
  id: string;
  title: string;
  category: ContentCategory;
  subcategory: string;
  content: string;
  charCount?: number;
  tags: string[];
  icon: typeof Linkedin;
}

/* ═══════════════════════════════════════
   READY-MADE CONTENT LIBRARY
   ═══════════════════════════════════════ */
const CONTENT_LIBRARY: ContentItem[] = [
  // ───── LINKEDIN POSTS ─────
  {
    id: 'li-thought-1',
    title: 'Thought Leadership — The GenAI Divide',
    category: 'linkedin',
    subcategory: 'Thought Leadership',
    icon: Linkedin,
    tags: ['AI', 'GenAI', 'Enterprise'],
    content: `Most companies aren't struggling with "too little AI."

They're struggling with too much AI — and not enough context.

Here's what I see:
→ AI that summarizes without understanding relationships
→ AI that recommends without knowing your business state
→ AI that automates without governance
→ AI that generates without evidence

That's not intelligence — it's noise with a good interface.

At IntegrateWise, we believe in a different model:

✅ AI that thinks inside your operational context
✅ AI grounded in structured truth (not just prompts)
✅ AI that proposes — but waits for human approval
✅ AI that learns from corrections, not just completions

We call this the GenAI Divide:
The gap between AI capability and operational trust.

The companies that close this gap will define the next era of enterprise software.

AI Thinks in Context — and Waits for Approval.

#AI #EnterpriseAI #KnowledgeWorkspace #IntegrateWise #FutureOfWork`,
  },
  {
    id: 'li-thought-2',
    title: 'Thought Leadership — Tool Sprawl Problem',
    category: 'linkedin',
    subcategory: 'Thought Leadership',
    icon: Linkedin,
    tags: ['ToolSprawl', 'Productivity', 'SaaS'],
    content: `Your team uses 10+ tools every day.

CRM. Email. Chat. Docs. Spreadsheets. Support tickets. Project boards. AI chatbots. Finance tools. Internal wikis.

Each one captures PART of reality.
None of them gives you the WHOLE picture.

So what happens?

→ People become the integration layer
→ Context gets Lost between tools
→ Decisions get made with incomplete information
→ AI operates without understanding the business

This isn't a productivity problem.
It's an architecture problem.

IntegrateWise solves this with the Adaptive Spine — a unified intelligence layer that connects tools, context, knowledge, and decisions.

Instead of switching between 10 apps to understand one customer, one deal, or one decision — everything lives in one governed workspace.

One workspace. One Spine. Governed intelligence.

#ToolSprawl #SaaS #Enterprise #IntegrateWise #KnowledgeWorkspace`,
  },
  {
    id: 'li-thought-3',
    title: 'Thought Leadership — Approval-First AI',
    category: 'linkedin',
    subcategory: 'Thought Leadership',
    icon: Linkedin,
    tags: ['AIGovernance', 'Enterprise', 'Trust'],
    content: `Hot take: AI that acts without asking is not "smart."

It's reckless.

Speed without governance is risk disguised as efficiency.

Here's what enterprise AI actually needs:

1️⃣ Context — AI must understand your business state
2️⃣ Evidence — Recommendations should be traceable
3️⃣ Governance — Policy and permissions must shape actions
4️⃣ Approval — Meaningful actions wait for human consent
5️⃣ Learning — Rejections and corrections make it smarter

This is what we call Approval-First AI at IntegrateWise.

It's not slower. It's SAFER.
It's not less capable. It's MORE TRUSTED.

The companies winning with AI aren't the ones moving fastest.
They're the ones moving most responsibly.

AI Thinks in Context — and Waits for Approval.

#AIGovernance #EnterpriseAI #IntegrateWise #ResponsibleAI`,
  },
  {
    id: 'li-product-1',
    title: 'Product Announcement — The Adaptive Spine',
    category: 'linkedin',
    subcategory: 'Product',
    icon: Linkedin,
    tags: ['Product', 'Spine', 'Launch'],
    content: `Introducing the Adaptive Spine by IntegrateWise 🧠

The Spine is a unified intelligence layer that connects:

🔗 Your tools and systems
📊 Your business records and relationships
💬 Your conversations and documents
📈 Your signals and operational context
✅ Your decisions and approval history

It's not a database. It's not a data warehouse.

It's a living system that organizes your operational truth so that:

→ AI can reason with REAL business context
→ Teams work from ONE connected view
→ Every recommendation is evidence-linked
→ Every action passes through governed approvals

Think of it as the nervous system for your business.

The richer your Spine, the smarter your workspace becomes.

Ready to see it in action?

🔗 integratewise.ai/demo

#IntegrateWise #AdaptiveSpine #KnowledgeWorkspace #AI`,
  },
  {
    id: 'li-product-2',
    title: 'Product Feature — Entity 360',
    category: 'linkedin',
    subcategory: 'Product',
    icon: Linkedin,
    tags: ['Product', 'Entity360', 'CX'],
    content: `What if you could see EVERYTHING about a customer in one view?

Not just their CRM record.
Not just their support tickets.
Not just their contract.

But ALL of it — connected:

📊 Current state and structured data
🔗 Relationship context across teams
📜 Full interaction history
📈 Signals and risk indicators
📎 Linked evidence and documents
⚡ Workflow activity
🧠 AI-driven insights and recommendations
✅ Decision history and approvals

This is Entity 360 by IntegrateWise.

It's powered by the Adaptive Spine — so every insight is grounded in real operational truth, not hallucinated AI output.

No more "let me check 5 systems to understand this account."

One view. Full context. Governed intelligence.

#Entity360 #CustomerSuccess #IntegrateWise #KnowledgeWorkspace`,
  },
  {
    id: 'li-hiring-1',
    title: 'Hiring / Culture Post',
    category: 'linkedin',
    subcategory: 'Culture',
    icon: Linkedin,
    tags: ['Hiring', 'Culture', 'Startup'],
    content: `We're building IntegrateWise — and we're looking for people who believe in a different kind of AI.

Not louder AI. SMARTER AI.
Not faster automation. GOVERNED execution.
Not more features. DEEPER intelligence.

If you're excited about:

🧠 Building a Knowledge Workspace from scratch
🔗 Designing the Adaptive Spine architecture
✅ Creating approval-first AI systems
🚀 Working at a category-defining startup

We'd love to hear from you.

Current openings:
→ Full-Stack Engineer
→ AI/ML Engineer
→ Product Designer
→ Developer Relations

📩 careers@integratewise.co
🔗 integratewise.ai/careers

AI Thinks in Context — and Waits for Approval.

#Hiring #Startup #Engineering #AI #IntegrateWise`,
  },

  // ───── TWITTER / X POSTS ─────
  {
    id: 'tw-thread-1',
    title: 'Thread — Why Knowledge Workspaces Matter',
    category: 'twitter',
    subcategory: 'Thread',
    icon: Twitter,
    tags: ['Thread', 'KnowledgeWorkspace', 'AI'],
    content: `🧵 Why "Knowledge Workspace" is about to become the most important category in enterprise software:

1/ Modern teams use 10-15 SaaS tools. Each one captures a fragment of reality. NONE gives you the full picture.

2/ This creates the biggest hidden cost in business: CONTEXT RECONSTRUCTION. People manually stitching together what happened, what matters, and what to do next.

3/ AI was supposed to fix this. But most AI tools operate OUTSIDE your business context. They summarize without understanding. They recommend without evidence. They automate without governance.

4/ This is what we call the GenAI Divide — the gap between AI capability and operational trust.

5/ Knowledge Workspaces solve this by introducing a new layer:
→ Unified truth (the Spine)
→ Context-aware AI
→ Approval-first execution
→ Evidence-linked reasoning

6/ IntegrateWise is building the defining Knowledge Workspace. One where AI thinks in context and waits for approval.

7/ The future isn't more tools. It's ONE workspace that connects work, knowledge, and governed intelligence.

🔗 integratewise.ai`,
  },
  {
    id: 'tw-single-1',
    title: 'Single Tweet — Problem Statement',
    category: 'twitter',
    subcategory: 'Single Post',
    icon: Twitter,
    tags: ['Problem', 'ToolSprawl'],
    content: `Your team doesn't have a tool problem.

They have a CONTEXT problem.

10 tools. Zero shared truth. AI that doesn't understand the business.

That's not a stack — it's a maze.

IntegrateWise → One workspace. One Spine. Governed intelligence.`,
  },
  {
    id: 'tw-single-2',
    title: 'Single Tweet — Approval-First',
    category: 'twitter',
    subcategory: 'Single Post',
    icon: Twitter,
    tags: ['AI', 'Governance'],
    content: `AI that acts without asking isn't intelligent.

It's reckless.

Build approval-first. Build trust-first.

AI Thinks in Context — and Waits for Approval.

integratewise.ai`,
  },
  {
    id: 'tw-single-3',
    title: 'Single Tweet — Category Definition',
    category: 'twitter',
    subcategory: 'Single Post',
    icon: Twitter,
    tags: ['Category', 'KnowledgeWorkspace'],
    content: `Knowledge Workspace = 
Workspace + Unified Truth + Context-Aware AI + Governed Execution

Not a dashboard.
Not a chatbot.
Not a workflow tool.

A new operating model for work.

Building this at @IntegrateWise 🧠`,
  },
  {
    id: 'tw-single-4',
    title: 'Single Tweet — Spine Analogy',
    category: 'twitter',
    subcategory: 'Single Post',
    icon: Twitter,
    tags: ['Spine', 'Analogy'],
    content: `Your body's spine connects the brain to every part of the body.

The Adaptive Spine by IntegrateWise does the same for your business.

It connects tools, context, knowledge, and decisions — so AI can actually THINK and teams can actually ACT.

One Spine. Complete context. Governed intelligence.`,
  },

  // ───── EMAIL TEMPLATES ─────
  {
    id: 'email-welcome-1',
    title: 'Welcome Email — New Sign-up',
    category: 'email',
    subcategory: 'Onboarding',
    icon: Mail,
    tags: ['Welcome', 'Onboarding'],
    content: `Subject: Welcome to IntegrateWise — where AI thinks in context

Hi {{first_name}},

Welcome to IntegrateWise.

You've just taken the first step toward ending tool sprawl and giving AI the context it actually needs to be useful.

Here's what makes IntegrateWise different:

🔗 The Adaptive Spine — connects your tools, knowledge, and decisions into one unified intelligence layer
🧠 Context-Aware AI — reasons across your entire operational context, not just isolated prompts  
✅ Approval-First Execution — AI proposes, you approve. Nothing happens without consent.

Getting Started:
1. Connect your first integration (Slack, Notion, or your CRM)
2. Let the Spine start building your operational context
3. See AI recommendations grounded in YOUR business reality

📅 Want a guided walkthrough? Book a 15-min onboarding call:
→ integratewise.ai/onboarding

We built IntegrateWise because we believe AI should think in context — and wait for approval.

Welcome aboard.

Nirmal Prince J
Founder & CEO, IntegrateWise
connect@integratewise.co`,
  },
  {
    id: 'email-nurture-1',
    title: 'Nurture Email — The Problem',
    category: 'email',
    subcategory: 'Nurture Sequence',
    icon: Mail,
    tags: ['Nurture', 'Problem'],
    content: `Subject: The hidden cost your team pays every day

Hi {{first_name}},

Quick question: How many tools does your team use daily?

If the answer is more than 5, here's what's actually happening:

→ Your people spend 30%+ of their time FINDING context, not ACTING on it
→ Your AI tools generate responses without understanding your business
→ Your automations run without governance or approval controls
→ Your "single source of truth" is actually 10 partial sources of truth

We call this the GenAI Divide — the gap between AI capability and enterprise trust.

IntegrateWise closes that gap with the Adaptive Spine — a unified intelligence layer that gives AI real business context and keeps humans in control.

Want to see how? Book a 15-minute demo:
→ integratewise.ai/demo

Best,
The IntegrateWise Team`,
  },
  {
    id: 'email-nurture-2',
    title: 'Nurture Email — The Solution',
    category: 'email',
    subcategory: 'Nurture Sequence',
    icon: Mail,
    tags: ['Nurture', 'Solution'],
    content: `Subject: What if AI could actually understand your business?

Hi {{first_name}},

Most AI tools work like this:
Input → Generate → Output (no context, no governance)

IntegrateWise works like this:
Connect → Structure Truth → AI Thinks in Context → Govern → Approve → Execute → Learn

The difference? One model creates noise. The other creates intelligence.

Here's what makes it possible:

The Adaptive Spine connects everything — your CRM, documents, conversations, signals, and decisions — into one structured intelligence layer.

On top of that:
✅ AI reasons with evidence-linked context
✅ Recommendations are grounded, not hallucinated
✅ Actions wait for human approval
✅ The system learns from every correction

This is what a Knowledge Workspace looks like.

See it in action → integratewise.ai/demo

Best,
The IntegrateWise Team`,
  },
  {
    id: 'email-launch-1',
    title: 'Product Launch Email',
    category: 'email',
    subcategory: 'Launch',
    icon: Mail,
    tags: ['Launch', 'Product'],
    content: `Subject: IntegrateWise is live — the Knowledge Workspace for the AI era

Hi {{first_name}},

Today, we're officially launching IntegrateWise.

We built IntegrateWise because we saw the same problem everywhere: organizations drowning in tools, lacking unified context, and adopting AI without governance.

IntegrateWise is a Knowledge Workspace empowered by AI and the Spine. It helps organizations:

🔗 Connect fragmented tools and workflows
📊 Structure operational truth through the Adaptive Spine
🧠 Enable AI to reason with real business context  
✅ Ensure every action passes through human approval

This isn't another AI feature. It's a new operating model for work.

What you can do today:
→ Connect your first systems
→ Watch the Spine build your operational context
→ See AI recommendations grounded in YOUR data
→ Set up approval workflows for governed execution

Get started → integratewise.ai

AI Thinks in Context — and Waits for Approval.

Nirmal Prince J
Founder & CEO, IntegrateWise`,
  },

  // ───── WHATSAPP MESSAGES ─────
  {
    id: 'wa-intro-1',
    title: 'WhatsApp — Company Introduction',
    category: 'whatsapp',
    subcategory: 'Introduction',
    icon: MessageCircle,
    tags: ['Intro', 'WhatsApp'],
    content: `👋 Hi! Thanks for reaching out to IntegrateWise.

We're building the Knowledge Workspace for the AI era.

🔗 Connect all your tools in one workspace
🧠 AI that understands your business context
✅ Actions that wait for your approval

What would you like to know more about?

1️⃣ Platform overview
2️⃣ Book a demo
3️⃣ Pricing
4️⃣ Talk to our team

Just reply with a number!`,
  },
  {
    id: 'wa-followup-1',
    title: 'WhatsApp — Post-Demo Follow-up',
    category: 'whatsapp',
    subcategory: 'Follow-up',
    icon: MessageCircle,
    tags: ['FollowUp', 'Demo'],
    content: `Hi {{name}}! 👋

Thanks for attending the IntegrateWise demo today.

Here's a quick recap:

✅ The Spine connects all your tools into one intelligence layer
✅ AI reasons across your entire business context
✅ Every action waits for human approval
✅ The system learns and improves over time

📄 I'll send the detailed proposal by email shortly.

Would you like to:
→ Start a free pilot?
→ Schedule a technical deep-dive?
→ Connect with our solutions team?

Just let me know! 🚀`,
  },
  {
    id: 'wa-pricing-1',
    title: 'WhatsApp — Pricing Response',
    category: 'whatsapp',
    subcategory: 'Pricing',
    icon: MessageCircle,
    tags: ['Pricing', 'Sales'],
    content: `💰 IntegrateWise Pricing

🔹 Starter — $499/mo
   Up to 25 users, core integrations, basic AI features

🔹 Professional — $999/mo
   Up to 100 users, advanced AI, approval workflows, full Spine

🔹 Enterprise — Custom
   Unlimited users, dedicated Spine instance, priority support, custom connectors

All plans include:
✅ Adaptive Spine
✅ Context-Aware AI
✅ Approval Workflows
✅ Evidence-Linked Recommendations

👉 Want a detailed comparison? Visit integratewise.ai/pricing
📅 Or book a call: integratewise.ai/demo`,
  },

  // ───── WEBSITE COPY ─────
  {
    id: 'web-hero-1',
    title: 'Website Hero — Primary',
    category: 'website',
    subcategory: 'Hero Section',
    icon: Globe,
    tags: ['Hero', 'Headline'],
    content: `HEADLINE:
The Knowledge Workspace Built for the AI Era

SUBHEADLINE:
IntegrateWise connects your tools, structures operational truth through the Adaptive Spine, and lets AI reason with real business context — while humans stay in control.

TAGLINE:
AI Thinks in Context — and Waits for Approval.

PRIMARY CTA: See IntegrateWise in Action
SECONDARY CTA: Explore the Platform`,
  },
  {
    id: 'web-hero-2',
    title: 'Website Hero — Problem-First',
    category: 'website',
    subcategory: 'Hero Section',
    icon: Globe,
    tags: ['Hero', 'Problem'],
    content: `HEADLINE:
Your Team Uses 10+ Tools. None of Them Talk to Each Other.

SUBHEADLINE:
Context is scattered. Decisions are slow. AI operates without understanding your business. IntegrateWise fixes this with one workspace, one Spine, and governed intelligence.

TAGLINE:
Effortless Work Begins With Context.

PRIMARY CTA: Book a Demo
SECONDARY CTA: See How It Works`,
  },
  {
    id: 'web-problem-1',
    title: 'Website — Problem Section',
    category: 'website',
    subcategory: 'Problem Section',
    icon: Globe,
    tags: ['Problem', 'Copy'],
    content: `SECTION HEADLINE:
Modern Work Is Fragmented by Default

BODY:
Critical business context is spread across CRM records, documents, emails, chats, spreadsheets, support systems, and AI outputs. Each system captures part of reality, but none gives teams a complete view.

BULLET POINTS:
• Teams spend time reconstructing context instead of acting on it
• Decisions are made with incomplete or inconsistent information
• Workflows break across handoffs and disconnected systems
• AI produces output without grounded operational awareness
• Automation increases risk when it runs without governance

TRANSITION:
IntegrateWise exists to change that.`,
  },
  {
    id: 'web-solution-1',
    title: 'Website — Solution Section',
    category: 'website',
    subcategory: 'Solution Section',
    icon: Globe,
    tags: ['Solution', 'Features'],
    content: `SECTION HEADLINE:
One Governed Environment for Work, Intelligence, and Action

BODY:
IntegrateWise is a Knowledge Workspace empowered by AI and the Spine. It gives organizations a single connected environment where teams work with full operational context, AI reasons over structured truth, and actions move forward through governed, approval-first paths.

FEATURE PILLARS:

1. The Adaptive Spine
Connects truth across fragmented systems. Preserves context across workflows. Grounds recommendations in evidence.

2. Context-Aware AI
AI reasons across your business reality — relationships, signals, history, and evidence. Not just prompts.

3. Approval-First Execution
AI proposes. Humans approve. Nothing executes without consent, policy alignment, and audit trails.

4. One Connected Workspace
Work, knowledge, context, and action in one governed environment. No more tool switching.`,
  },
  {
    id: 'web-about-1',
    title: 'Website — About Page',
    category: 'website',
    subcategory: 'About',
    icon: Globe,
    tags: ['About', 'Company'],
    content: `HEADLINE:
Building the Operating Layer for AI-Enabled Work

BODY:
IntegrateWise is a category-defining enterprise software company building the Knowledge Workspace for the AI era.

We exist because work today is fragmented across a growing stack of tools, documents, dashboards, AI chats, and communication systems. At the same time, AI adoption is creating new challenges around context, governance, and trust.

IntegrateWise addresses this by introducing a new operating environment for work — one that structures truth through the Adaptive Spine, grounds AI in real business context, and ensures meaningful actions remain subject to human approval.

COMPANY DETAILS:
Company: IntegrateWise LLP
Founded: 2024
Headquarters: Bengaluru, India
Website: integratewise.ai
Contact: connect@integratewise.co

CLOSING:
We're not building another tool. We're building the workspace.`,
  },

  // ───── AD COPY ─────
  {
    id: 'ad-google-1',
    title: 'Google Search Ad — Primary',
    category: 'ads',
    subcategory: 'Google Ads',
    icon: Megaphone,
    tags: ['Google', 'SearchAd'],
    content: `HEADLINE 1 (30 chars): AI Knowledge Workspace
HEADLINE 2 (30 chars): Connect Tools & Context
HEADLINE 3 (30 chars): Governed AI Execution

DESCRIPTION 1 (90 chars): 
IntegrateWise unifies tools, context & AI in one governed workspace. Book a demo today.

DESCRIPTION 2 (90 chars):
End tool sprawl. Give AI real business context. Keep humans in control. Try IntegrateWise.

DISPLAY URL: integratewise.ai/demo
FINAL URL: https://integratewise.ai/demo`,
  },
  {
    id: 'ad-google-2',
    title: 'Google Search Ad — AI Focus',
    category: 'ads',
    subcategory: 'Google Ads',
    icon: Megaphone,
    tags: ['Google', 'AI'],
    content: `HEADLINE 1 (30 chars): AI That Thinks in Context
HEADLINE 2 (30 chars): Not Another AI Chatbot
HEADLINE 3 (30 chars): Approval-First AI Tool

DESCRIPTION 1 (90 chars):
AI grounded in your business truth. Evidence-linked. Human-approved. Try IntegrateWise free.

DESCRIPTION 2 (90 chars):
Your AI tools lack context. IntegrateWise's Spine gives AI real business awareness. See demo.

DISPLAY URL: integratewise.ai
FINAL URL: https://integratewise.ai`,
  },
  {
    id: 'ad-linkedin-1',
    title: 'LinkedIn Ad — Sponsored Post',
    category: 'ads',
    subcategory: 'LinkedIn Ads',
    icon: Linkedin,
    tags: ['LinkedIn', 'SponsoredAd'],
    content: `HEADLINE:
Stop Using AI Without Context

INTRO TEXT:
Your team uses 10+ tools. Your AI doesn't understand your business. Your automations run without governance.

IntegrateWise changes that.

BODY:
IntegrateWise is a Knowledge Workspace empowered by AI and the Spine — a unified intelligence layer that:

✅ Connects fragmented tools and data
✅ Gives AI real business context
✅ Ensures actions wait for human approval
✅ Learns and improves over time

AI Thinks in Context — and Waits for Approval.

CTA: Book a Demo
URL: integratewise.ai/demo`,
  },
  {
    id: 'ad-facebook-1',
    title: 'Facebook/Meta Ad — Awareness',
    category: 'ads',
    subcategory: 'Meta Ads',
    icon: Megaphone,
    tags: ['Facebook', 'Meta', 'Awareness'],
    content: `PRIMARY TEXT:
Modern work is broken. 10+ disconnected tools. Scattered knowledge. AI that doesn't understand your business.

IntegrateWise is the fix: One Knowledge Workspace where AI thinks in context and waits for approval.

🔗 Connect tools → 🧠 AI understands → ✅ You approve → ⚡ Work flows

HEADLINE: The Knowledge Workspace for the AI Era
LINK DESCRIPTION: AI Thinks in Context — and Waits for Approval.
CTA BUTTON: Learn More
URL: integratewise.ai`,
  },

  // ───── COLD OUTREACH ─────
  {
    id: 'cold-email-1',
    title: 'Cold Email — Operations Leader',
    category: 'cold-outreach',
    subcategory: 'Cold Email',
    icon: Send,
    tags: ['Cold', 'Operations', 'Email'],
    content: `Subject: Quick question about {{company}}'s tool stack

Hi {{first_name}},

I noticed {{company}} is growing fast — congrats.

Quick question: as you scale, is your team spending more time finding context across tools than actually acting on it?

We hear this from every ops leader we talk to. The average team uses 10-15 SaaS tools, and none of them share context. AI makes it worse — it generates answers without understanding the business.

We built IntegrateWise to solve this.

It's a Knowledge Workspace with a unified intelligence layer called the Spine that:
→ Connects your existing tools into one context
→ Gives AI real business awareness (not just prompts)
→ Keeps execution governed through approvals

Would 15 minutes next week make sense to show you how it works?

Best,
Nirmal Prince J
Founder, IntegrateWise
connect@integratewise.co`,
  },
  {
    id: 'cold-email-2',
    title: 'Cold Email — Revenue Leader',
    category: 'cold-outreach',
    subcategory: 'Cold Email',
    icon: Send,
    tags: ['Cold', 'Revenue', 'Sales'],
    content: `Subject: How {{company}}'s revenue team could save 30% of context-finding time

Hi {{first_name}},

Your revenue team is probably working across Salesforce, Slack, email, docs, and 5 other tools every day.

Here's the hidden cost: they spend ~30% of their time just FINDING and RECONSTRUCTING context. Who said what. What happened. What matters. What to do next.

IntegrateWise eliminates that cost.

We're a Knowledge Workspace that connects your tools through a unified intelligence layer called the Spine. Your team gets Entity 360 views — complete account context, signals, history, and AI recommendations — in one place.

And unlike generic AI tools, our AI:
✅ Reasons with YOUR business data
✅ Links recommendations to evidence
✅ Waits for approval before acting

15 minutes to show you? → integratewise.ai/demo

Best,
Nirmal Prince J
Founder, IntegrateWise`,
  },
  {
    id: 'cold-linkedin-1',
    title: 'LinkedIn DM — Connection Request',
    category: 'cold-outreach',
    subcategory: 'LinkedIn DM',
    icon: Linkedin,
    tags: ['InMail', 'Outreach'],
    content: `Hi {{first_name}},

I see you're leading {{role}} at {{company}} — love what you're building.

We're building IntegrateWise — a Knowledge Workspace that connects fragmented tools, gives AI real business context, and keeps actions governed through approvals.

Would love to connect and share ideas about how teams are solving the tool sprawl + AI context gap.

No pitch — just genuinely interested in how you're thinking about this space.

Best,
Nirmal`,
  },

  // ───── ELEVATOR PITCHES ─────
  {
    id: 'elevator-10s',
    title: 'Elevator Pitch — 10 Second',
    category: 'elevator',
    subcategory: '10-Second',
    icon: Zap,
    tags: ['Pitch', 'Short'],
    content: `IntegrateWise is a Knowledge Workspace where AI thinks in context and waits for approval. We connect your fragmented tools through the Spine — a unified intelligence layer — so teams work with complete context and governed AI.`,
  },
  {
    id: 'elevator-30s',
    title: 'Elevator Pitch — 30 Second',
    category: 'elevator',
    subcategory: '30-Second',
    icon: Zap,
    tags: ['Pitch', 'Medium'],
    content: `Modern teams use 10+ disconnected tools. Context is scattered. AI operates without understanding the business. Automation runs without governance.

IntegrateWise solves this. We're a Knowledge Workspace built around the Adaptive Spine — a unified intelligence layer that connects tools, structures truth, and gives AI real business context.

The key difference? AI proposes actions, but humans approve. Nothing executes without consent, evidence, and auditability.

One workspace. One Spine. Governed intelligence.`,
  },
  {
    id: 'elevator-60s',
    title: 'Elevator Pitch — 60 Second',
    category: 'elevator',
    subcategory: '60-Second',
    icon: Zap,
    tags: ['Pitch', 'Detailed'],
    content: `Here's the problem: organizations run across too many disconnected tools. CRM, email, chat, docs, spreadsheets, support systems, AI chatbots. Each captures part of reality. None gives the full picture. Teams become the integration layer, manually stitching context together.

At the same time, AI adoption is exploding. But most AI tools operate without real business context. They summarize without understanding relationships. They recommend without evidence. They automate without governance.

IntegrateWise changes this.

We're a Knowledge Workspace built around the Adaptive Spine — a unified intelligence layer that connects your tools, structures operational truth, and enables context-aware AI.

Three things make us different:
1. The Spine gives AI grounded business context — not just prompts
2. Every recommendation is evidence-linked and traceable
3. Every meaningful action waits for human approval

We're not building another AI feature. We're building the operating layer where knowledge, context, and governed action come together.

AI Thinks in Context — and Waits for Approval.

That's IntegrateWise.`,
  },
  {
    id: 'elevator-investor',
    title: 'Investor Pitch — One Paragraph',
    category: 'elevator',
    subcategory: 'Investor',
    icon: Presentation,
    tags: ['Investor', 'Fundraise'],
    content: `IntegrateWise is building a new category of enterprise software: a Knowledge Workspace empowered by AI and the Spine. It solves a structural problem — tool sprawl, fragmented context, and ungoverned AI — by introducing a unified intelligence layer that connects systems, structures truth, grounds AI in business reality, and ensures actions happen through approval-first execution. The market timing is favorable as SaaS fragmentation increases, enterprise AI adoption accelerates, and governance becomes decisive in implementation success. IntegrateWise is designed to become the operating layer where organizations coordinate knowledge, decisions, and action in the AI era.`,
  },
];

/* ═══════════════════════════════════════
   CATEGORY METADATA
   ═══════════════════════════════════════ */
const CATEGORIES: { value: ContentCategory; label: string; icon: typeof Linkedin; count: number }[] = [
  { value: 'all', label: 'All Content', icon: Layers, count: CONTENT_LIBRARY.length },
  { value: 'linkedin', label: 'LinkedIn', icon: Linkedin, count: CONTENT_LIBRARY.filter(c => c.category === 'linkedin').length },
  { value: 'twitter', label: 'Twitter / X', icon: Twitter, count: CONTENT_LIBRARY.filter(c => c.category === 'twitter').length },
  { value: 'email', label: 'Email', icon: Mail, count: CONTENT_LIBRARY.filter(c => c.category === 'email').length },
  { value: 'whatsapp', label: 'WhatsApp', icon: MessageCircle, count: CONTENT_LIBRARY.filter(c => c.category === 'whatsapp').length },
  { value: 'website', label: 'Website Copy', icon: Globe, count: CONTENT_LIBRARY.filter(c => c.category === 'website').length },
  { value: 'ads', label: 'Ad Copy', icon: Megaphone, count: CONTENT_LIBRARY.filter(c => c.category === 'ads').length },
  { value: 'cold-outreach', label: 'Cold Outreach', icon: Send, count: CONTENT_LIBRARY.filter(c => c.category === 'cold-outreach').length },
  { value: 'elevator', label: 'Elevator Pitches', icon: Zap, count: CONTENT_LIBRARY.filter(c => c.category === 'elevator').length },
];

const CATEGORY_COLORS: Record<string, string> = {
  linkedin: '#0A66C2',
  twitter: '#1DA1F2',
  email: '#4154A3',
  whatsapp: '#25D366',
  website: '#EB4379',
  ads: '#F59E0B',
  'cold-outreach': '#8B5CF6',
  elevator: '#10B981',
};

/* ═══════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════ */
export function ReadyMadeContentPage() {
  const [category, setCategory] = useState<ContentCategory>('all');
  const [search, setSearch] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    copyToClipboard(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleDownloadAll = () => {
    const filtered = getFiltered();
    const content = filtered.map(item => {
      return `${'═'.repeat(60)}\n${item.title}\nCategory: ${item.subcategory} | Tags: ${item.tags.join(', ')}\n${'═'.repeat(60)}\n\n${item.content}\n\n`;
    }).join('\n');

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `IntegrateWise-Marketing-Content-${category === 'all' ? 'Full-Library' : category}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getFiltered = () => {
    return CONTENT_LIBRARY.filter(item => {
      const matchCat = category === 'all' || item.category === category;
      const matchSearch = !search ||
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.content.toLowerCase().includes(search.toLowerCase()) ||
        item.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
      return matchCat && matchSearch;
    });
  };

  const filtered = getFiltered();

  // Group by subcategory
  const grouped = filtered.reduce<Record<string, ContentItem[]>>((acc, item) => {
    const key = `${item.category}:${item.subcategory}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});

  return (
    <div className="p-6 lg:p-10 max-w-5xl mx-auto space-y-8">
      {/* Page Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #4154A3, #EB4379)' }}>
            <PenLine className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold" style={{ color: '#1B2544' }}>Ready-Made Marketing Content</h2>
            <p className="text-sm" style={{ color: '#7B8AAD' }}>
              {CONTENT_LIBRARY.length} copy-ready pieces • Click any card to copy instantly
            </p>
          </div>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2">
        {CATEGORIES.filter(c => c.value !== 'all').map(cat => (
          <button
            key={cat.value}
            onClick={() => setCategory(cat.value)}
            className="flex flex-col items-center gap-1.5 p-3 rounded-xl transition-all"
            style={{
              background: category === cat.value ? `${CATEGORY_COLORS[cat.value]}10` : 'white',
              border: category === cat.value ? `1.5px solid ${CATEGORY_COLORS[cat.value]}` : '1.5px solid #E8ECF2',
            }}
          >
            <cat.icon className="w-4 h-4" style={{ color: CATEGORY_COLORS[cat.value] }} />
            <span className="text-[10px] font-semibold" style={{ color: category === cat.value ? CATEGORY_COLORS[cat.value] : '#7B8AAD' }}>
              {cat.count}
            </span>
          </button>
        ))}
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#9BA8C2' }} />
          <input
            type="text"
            placeholder="Search content by title, text, or tag..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#4154A3]/30"
            style={{ border: '1px solid #D5DAE5' }}
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setCategory('all')}
            className="px-4 py-2.5 rounded-lg text-xs font-medium transition-colors"
            style={category === 'all'
              ? { background: '#4154A3', color: 'white' }
              : { background: 'white', color: '#5F6E93', border: '1px solid #D5DAE5' }
            }
          >
            Show All
          </button>
          <button
            onClick={handleDownloadAll}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-medium transition-colors"
            style={{ background: 'white', color: '#4154A3', border: '1px solid #D5DAE5' }}
          >
            <Download className="w-3.5 h-3.5" />
            Download {category === 'all' ? 'All' : CATEGORIES.find(c => c.value === category)?.label}
          </button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 flex-wrap">
        <Filter className="w-4 h-4" style={{ color: '#9BA8C2' }} />
        {CATEGORIES.map(cat => (
          <button
            key={cat.value}
            onClick={() => setCategory(cat.value)}
            className="px-3 py-1.5 rounded-md text-xs font-medium transition-colors"
            style={
              category === cat.value
                ? { border: '1px solid #4154A3', background: 'rgba(65,84,163,0.08)', color: '#4154A3' }
                : { border: '1px solid #E8ECF2', background: 'white', color: '#5F6E93' }
            }
          >
            {cat.label} ({cat.count})
          </button>
        ))}
      </div>

      {/* Content Cards */}
      <div className="space-y-6">
        {Object.entries(grouped).map(([key, items]) => {
          const [cat, subcategory] = key.split(':');
          const color = CATEGORY_COLORS[cat] || '#4154A3';

          return (
            <div key={key}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
                <p className="text-xs font-semibold tracking-wide" style={{ color }}>{subcategory.toUpperCase()}</p>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full" style={{ background: `${color}10`, color }}>{items.length}</span>
              </div>

              <div className="space-y-3">
                {items.map(item => {
                  const isExpanded = expandedId === item.id;
                  const isCopied = copiedId === item.id;

                  return (
                    <div
                      key={item.id}
                      className="bg-white rounded-xl overflow-hidden transition-shadow hover:shadow-md"
                      style={{ border: '1px solid #E8ECF2' }}
                    >
                      {/* Card Header */}
                      <div className="flex items-center justify-between px-5 py-3.5">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${color}10` }}>
                            <item.icon className="w-4 h-4" style={{ color }} />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold truncate" style={{ color: '#1B2544' }}>{item.title}</p>
                            <div className="flex items-center gap-2 mt-0.5">
                              <span className="text-[10px] px-1.5 py-0.5 rounded-full" style={{ background: `${color}08`, color }}>
                                {item.subcategory}
                              </span>
                              {item.tags.slice(0, 3).map(tag => (
                                <span key={tag} className="text-[10px]" style={{ color: '#9BA8C2' }}>#{tag}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            onClick={() => handleCopy(item.id, item.content)}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                            style={{
                              background: isCopied ? '#10B981' : `${color}10`,
                              color: isCopied ? '#fff' : color,
                            }}
                          >
                            {isCopied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                            {isCopied ? 'Copied!' : 'Copy'}
                          </button>
                          <button
                            onClick={() => setExpandedId(isExpanded ? null : item.id)}
                            className="p-1.5 rounded-lg hover:bg-[#F0F2F7] transition-colors"
                          >
                            {isExpanded
                              ? <ChevronUp className="w-4 h-4" style={{ color: '#7B8AAD' }} />
                              : <ChevronDown className="w-4 h-4" style={{ color: '#7B8AAD' }} />
                            }
                          </button>
                        </div>
                      </div>

                      {/* Card Preview (always show first 2 lines) */}
                      {!isExpanded && (
                        <div className="px-5 pb-3.5">
                          <p className="text-xs line-clamp-2" style={{ color: '#7B8AAD', whiteSpace: 'pre-line' }}>
                            {item.content.split('\n').filter(l => l.trim()).slice(0, 2).join('\n')}
                          </p>
                        </div>
                      )}

                      {/* Expanded Content */}
                      {isExpanded && (
                        <div className="px-5 pb-5">
                          <div
                            className="rounded-lg p-4 font-mono text-xs leading-relaxed whitespace-pre-wrap"
                            style={{ background: '#F8F9FC', border: '1px solid #E8ECF2', color: '#2F3D5E' }}
                          >
                            {item.content}
                          </div>
                          <div className="flex items-center justify-between mt-3">
                            <span className="text-[10px]" style={{ color: '#9BA8C2' }}>
                              {item.content.length} characters • {item.content.split(/\s+/).length} words
                            </span>
                            <button
                              onClick={() => handleCopy(item.id, item.content)}
                              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white transition-all"
                              style={{ background: isCopied ? '#10B981' : color }}
                            >
                              {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                              {isCopied ? 'Copied to Clipboard!' : 'Copy Full Content'}
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <div className="text-center py-16">
          <Sparkles className="w-8 h-8 mx-auto mb-3" style={{ color: '#D5DAE5' }} />
          <p className="text-sm" style={{ color: '#7B8AAD' }}>No content found matching your criteria.</p>
          <button
            onClick={() => { setCategory('all'); setSearch(''); }}
            className="mt-3 text-xs font-medium px-4 py-2 rounded-lg"
            style={{ color: '#4154A3', background: 'rgba(65,84,163,0.08)' }}
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Footer CTA */}
      <div className="rounded-xl p-6 text-center" style={{ background: 'linear-gradient(135deg, rgba(65,84,163,0.06), rgba(235,67,121,0.06))', border: '1px solid rgba(65,84,163,0.1)' }}>
        <p className="text-sm font-semibold" style={{ color: '#1B2544' }}>Need custom content?</p>
        <p className="text-xs mt-1" style={{ color: '#7B8AAD' }}>
          All content follows the official IntegrateWise brand voice — use these as-is or customize for your audience.
        </p>
      </div>
    </div>
  );
}
