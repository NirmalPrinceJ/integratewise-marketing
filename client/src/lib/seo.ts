export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

export function updateMetaTags(metadata: SEOMetadata) {
  document.title = `${metadata.title} | IntegrateWise`;

  let descriptionMeta = document.querySelector('meta[name="description"]');
  if (!descriptionMeta) {
    descriptionMeta = document.createElement('meta');
    descriptionMeta.setAttribute('name', 'description');
    document.head.appendChild(descriptionMeta);
  }
  descriptionMeta.setAttribute('content', metadata.description);

  if (metadata.keywords && metadata.keywords.length > 0) {
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', metadata.keywords.join(', '));
  }

  updateOrCreateMetaTag('property', 'og:title', `${metadata.title} | IntegrateWise`);
  updateOrCreateMetaTag('property', 'og:description', metadata.description);
  updateOrCreateMetaTag('property', 'og:type', metadata.ogType || 'website');
  if (metadata.ogImage) {
    updateOrCreateMetaTag('property', 'og:image', metadata.ogImage);
  }

  updateOrCreateMetaTag('name', 'twitter:card', metadata.twitterCard || 'summary_large_image');
  updateOrCreateMetaTag('name', 'twitter:title', `${metadata.title} | IntegrateWise`);
  updateOrCreateMetaTag('name', 'twitter:description', metadata.description);
  if (metadata.ogImage) {
    updateOrCreateMetaTag('name', 'twitter:image', metadata.ogImage);
  }
}

function updateOrCreateMetaTag(attrName: string, attrValue: string, content: string) {
  let meta = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attrName, attrValue);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
}

export const SITE_METADATA = {
  home: {
    title: 'One Connected Workspace, Powered by Continuity',
    description: 'IntegrateWise connects your tools, operational context, knowledge, and AI into one governed workspace where truth stays owned, actions stay approved, and work keeps moving.',
    keywords: ['continuity platform', 'connected workspace', 'operational continuity', 'governed AI', 'operational context', 'organisational memory']
  },
  activation: {
    title: 'Activate Your Connected Workspace',
    description: 'Start with one workspace and the systems required for your first continuity flow. Establish the trust boundary, hydrate real context, and form the initial Spine.',
    keywords: ['activate workspace', 'connected workspace', 'continuity platform', 'ecosystem connection', 'operational spine']
  },
  continuity: {
    title: 'Continuity, Not Just Connection',
    description: 'Understand how IntegrateWise preserves operational meaning, knowledge, handoffs, AI context, and verified state after systems are connected.',
    keywords: ['operational continuity', 'knowledge continuity', 'people continuity', 'AI continuity', 'connected work']
  },
  security: {
    title: 'Security and Governance',
    description: 'Learn how IntegrateWise separates tenant state, provider credentials, AI reasoning, approval, execution, retention, and canonical write paths.',
    keywords: ['tenant isolation', 'least privilege', 'AI governance', 'approval center', 'credential separation', 'audit trail']
  },
  solutions: {
    title: 'Role-Specific Workbenches on One Operational Spine',
    description: 'Explore Account Success, Sales, Founder Operations, Engineering, and AI Governance workbenches projected from one shared operational Spine.',
    keywords: ['account success workbench', 'sales continuity', 'founder operations', 'engineering continuity', 'AI governance']
  },
  accountSuccess: {
    title: 'Account Success Continuity',
    description: 'Connect customer health, commitments, conversations, cases, stakeholders, risks, and next actions into one governed account picture.',
    keywords: ['customer success', 'account continuity', 'renewal context', 'customer memory', 'account workbench']
  },
  salesContinuity: {
    title: 'Sales Continuity',
    description: 'Keep account and deal context continuous across prospecting, opportunity movement, proposals, handoff, onboarding, and expansion.',
    keywords: ['sales continuity', 'deal context', 'sales handoff', 'account history', 'sales workbench']
  },
  founderOps: {
    title: 'Founder Operations Workbench',
    description: 'See material signals, commitments, risks, dependencies, and pending decisions across the organisation without reconstructing another status report.',
    keywords: ['founder operations', 'executive workbench', 'operational visibility', 'decision continuity', 'business operations']
  },
  engineering: {
    title: 'Engineering and Product Continuity',
    description: 'Connect customer evidence, incidents, roadmap context, technical decisions, delivery state, and ownership without replacing engineering tools.',
    keywords: ['engineering continuity', 'product context', 'incident continuity', 'technical decisions', 'delivery context']
  },
  aiGovernance: {
    title: 'Governed AI for Connected Work',
    description: 'Give AI governed operational context and a controlled path to proposal, approval, execution, audit, and reconciliation.',
    keywords: ['AI governance', 'approval center', 'governed AI action', 'audit trail', 'risk based governance']
  },
  platform: {
    title: 'Continuity Platform Architecture',
    description: 'See how IntegrateWise connects systems, normalizes operational context into a Spine, projects role-specific workbenches, governs AI proposals, and reconciles execution.',
    keywords: ['continuity architecture', 'operational spine', 'entity 360', 'AI governance', 'integration manager', 'workbench']
  },
  pricing: {
    title: 'Workspace Activation and Pricing',
    description: 'Start with one operational continuity flow and expand through the same workspace, trust boundary, and tenant Spine.',
    keywords: ['workspace pricing', 'continuity platform pricing', 'workspace activation', 'connected systems', 'operational flow']
  },
  company: {
    title: 'About IntegrateWise',
    description: 'IntegrateWise is building the continuity layer that keeps organisational context durable, governed, and usable across systems, people, workflows, and AI.',
    keywords: ['IntegrateWise', 'continuity platform', 'connected work', 'operational memory', 'governed AI']
  },
  blog: {
    title: 'IntegrateWise Field Notes',
    description: 'Architecture, product thinking, and field lessons on continuity, connected work, governed AI, operational memory, and integration design.',
    keywords: ['continuity architecture', 'connected work', 'governed AI', 'operational memory', 'integration design']
  },
  documentation: {
    title: 'IntegrateWise Documentation',
    description: 'Guides for workspace activation, ecosystem connections, the Spine, Entity360, workbenches, Twin context, governance, capabilities, and reconciliation.',
    keywords: ['IntegrateWise documentation', 'workspace activation', 'Spine entities', 'Entity360', 'governance', 'reconciliation']
  }
};
