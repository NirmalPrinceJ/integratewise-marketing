export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

export function updateMetaTags(metadata: SEOMetadata) {
  // Update title
  document.title = `${metadata.title} | IntegrateWise`;

  // Update or create meta description
  let descriptionMeta = document.querySelector('meta[name="description"]');
  if (!descriptionMeta) {
    descriptionMeta = document.createElement('meta');
    descriptionMeta.setAttribute('name', 'description');
    document.head.appendChild(descriptionMeta);
  }
  descriptionMeta.setAttribute('content', metadata.description);

  // Update or create keywords
  if (metadata.keywords && metadata.keywords.length > 0) {
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', metadata.keywords.join(', '));
  }

  // Update or create Open Graph tags
  updateOrCreateMetaTag('property', 'og:title', `${metadata.title} | IntegrateWise`);
  updateOrCreateMetaTag('property', 'og:description', metadata.description);
  updateOrCreateMetaTag('property', 'og:type', metadata.ogType || 'website');
  if (metadata.ogImage) {
    updateOrCreateMetaTag('property', 'og:image', metadata.ogImage);
  }

  // Update or create Twitter tags
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
    title: 'Your Last Auth to Complete Your Ecosystem',
    description: 'One authentication. Every capability. Everywhere you work. IntegrateWise connects your AI, business applications, and teams into a single operational capability fabric that securely executes work across your connected ecosystem.',
    keywords: ['operational capability platform', 'universal capability fabric', 'AI execution', 'last auth', 'operational reach', 'enterprise AI governance']
  },
  solutions: {
    title: 'Workbenches',
    description: 'Twelve operational workbenches. One unified capability fabric. Role-aware, contextual, and governed — every workbench is powered by the Adaptive Spine and connected to your complete ecosystem.',
    keywords: ['operational workbenches', 'account success', 'sales workbench', 'engineering workbench', 'governance workbench']
  },
  capabilities: {
    title: 'Capabilities',
    description: 'Built for operational continuity and governed intelligence. Universal Capability Fabric, Adaptive Spine, enterprise governance, connected ecosystem, and operational continuity — everything you need, unified.',
    keywords: ['capabilities', 'universal capability fabric', 'adaptive spine', 'enterprise governance', 'operational continuity']
  },
  accountSuccess: {
    title: 'Account Success Solution',
    description: 'Know everything about every customer without opening five tools. CSM continuity powered by unified context and decision memory.',
    keywords: ['customer success', 'account management', 'renewal risk', 'customer context', 'CSM platform']
  },
  salesContinuity: {
    title: 'Sales Continuity Solution',
    description: 'Never re-brief AI on a customer again. Sales proposals that know customer history, objections, and deal context.',
    keywords: ['sales enablement', 'proposal generation', 'deal continuity', 'sales AI', 'customer history']
  },
  founderOps: {
    title: 'Founder & Business Operations',
    description: 'One place to understand what is happening. Executive Twin synthesizes data from every department into one coherent picture.',
    keywords: ['business operations', 'executive dashboard', 'cross-functional visibility', 'business continuity', 'operations']
  },
  engineering: {
    title: 'Engineering & Product Continuity',
    description: 'Keep decisions, incidents, and roadmap context connected. Engineering Twin remembers what your team knows.',
    keywords: ['engineering continuity', 'incident management', 'sprint planning', 'technical decisions', 'engineering memory']
  },
  aiGovernance: {
    title: 'AI Governance Solution',
    description: 'AI proposes. Humans approve. Every decision auditable. Scale AI safely with complete governance and audit trails.',
    keywords: ['AI governance', 'approval center', 'audit trail', 'compliance', 'risk management']
  },
  platform: {
    title: 'The Operational Capability Platform',
    description: 'The operational capability platform for the AI era. IntegrateWise unifies your AI, applications, data, and teams into a single governed fabric — so work gets done seamlessly, securely, and at scale.',
    keywords: ['platform', 'architecture', 'universal capability fabric', 'adaptive spine', 'MCP', 'connectors', 'governance']
  },
  pricing: {
    title: 'Pricing',
    description: 'Not per-seat. Not per-message. Based on outcomes. IntegrateWise pricing reflects value created, not usage consumed.',
    keywords: ['pricing', 'plans', 'enterprise', 'pilot program', 'subscription']
  },
  company: {
    title: 'About IntegrateWise',
    description: 'Building the layer that remembers. Memory over models. Continuity over capability. We believe AI adoption is failing not because AI isn\'t smart, but because it\'s not continuous.',
    keywords: ['about', 'company', 'mission', 'values', 'team']
  },
  blog: {
    title: 'Blog',
    description: 'Thoughts on continuity, memory, and the future of AI. Read our latest articles on AI adoption, business continuity, and operational memory.',
    keywords: ['blog', 'articles', 'AI adoption', 'business continuity', 'thought leadership']
  },
  documentation: {
    title: 'Documentation',
    description: 'Complete guides, API reference, best practices, and troubleshooting to help you build your digital memory operating layer.',
    keywords: ['documentation', 'guides', 'API', 'integration', 'help', 'support']
  }
};
