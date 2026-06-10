import { useEffect } from 'react';

export function OrganizationSchema() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'IntegrateWise',
      url: 'https://integratewise.ai',
      logo: 'https://integratewise.ai./images/logo-dark.png',
      description: 'One connected workspace for humans and their Digital Twin — with shared memory, governance, and continuity across every tool, AI, and operation.',
      sameAs: [
        'https://linkedin.com/company/integratewise',
      ],
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = 'schema-organization';
    
    const existing = document.getElementById('schema-organization');
    if (existing) existing.remove();
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('schema-organization');
      if (el) el.remove();
    };
  }, []);

  return null;
}

export function SoftwareApplicationSchema() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'IntegrateWise',
      applicationCategory: 'BusinessApplication',
      description: 'A continuity operating system that connects your CRM, support desk, billing, and AI agents into one unified workspace with shared memory and governance.',
      offers: {
        '@type': 'Offer',
        price: '49',
        priceCurrency: 'USD',
        priceValidUntil: '2026-12-31',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        ratingCount: '47',
      },
      operatingSystem: 'Web',
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = 'schema-software';
    
    const existing = document.getElementById('schema-software');
    if (existing) existing.remove();
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('schema-software');
      if (el) el.remove();
    };
  }, []);

  return null;
}

export function FAQPageSchema({ questions }: { questions: Array<{ q: string; a: string }> }) {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: questions.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: a,
        },
      })),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = 'schema-faq';
    
    const existing = document.getElementById('schema-faq');
    if (existing) existing.remove();
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('schema-faq');
      if (el) el.remove();
    };
  }, [questions]);

  return null;
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        item: item.url,
      })),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = 'schema-breadcrumb';
    
    const existing = document.getElementById('schema-breadcrumb');
    if (existing) existing.remove();
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('schema-breadcrumb');
      if (el) el.remove();
    };
  }, [items]);

  return null;
}
