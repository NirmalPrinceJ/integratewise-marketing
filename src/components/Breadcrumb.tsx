import { Link, useLocation, useParams } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { getPostBySlug } from '../data/blog';
import { getCaseStudyBySlug } from '../data/caseStudies';

const routeLabels: Record<string, string> = {
  '': 'Home',
  platform: 'Platform',
  features: 'Features',
  workbench: 'Workbench',
  solutions: 'Solutions',
  twin: 'Digital Twin',
  governance: 'Governance',
  architecture: 'Architecture',
  'use-cases': 'Use Cases',
  security: 'Security',
  resources: 'Resources',
  pricing: 'Pricing',
  about: 'About',
  'case-study': 'Case Studies',
  integrations: 'Integrations',
  faq: 'FAQ',
  terms: 'Terms',
  privacy: 'Privacy',
  'request-access': 'Book a Demo',
  blog: 'Blog',
  docs: 'Documentation',
};

export default function Breadcrumb() {
  const location = useLocation();
  const params = useParams();
  const segments = location.pathname.split('/').filter(Boolean);

  if (segments.length === 0) return null;

  const getSegmentLabel = (segment: string): string => {
    if (params.slug && segment === params.slug) {
      const blogPost = getPostBySlug(segment);
      if (blogPost) return blogPost.title;
      const caseStudy = getCaseStudyBySlug(segment);
      if (caseStudy) return caseStudy.title;
    }
    return routeLabels[segment] || segment;
  };

  return (
    <nav aria-label="Breadcrumb" className="section-padding py-4 bg-iw-paper border-b border-iw-rule">
      <div className="section-padding">
        <ol className="flex items-center gap-2 flex-wrap">
          <li>
            <Link to="/" className="inline-flex items-center gap-1 font-iw-mono text-xs uppercase tracking-widest text-iw-slate hover:text-iw-forest transition-colors">
              <Home size={12} />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          {segments.map((segment, i) => {
            const isLast = i === segments.length - 1;
            const path = '/' + segments.slice(0, i + 1).join('/');
            const label = getSegmentLabel(segment);

            return (
              <li key={segment + i} className="flex items-center gap-2">
                <ChevronRight size={12} className="text-iw-rule-light" />
                {isLast ? (
                  <span className="font-iw-mono text-xs uppercase tracking-widest text-iw-ink max-w-[300px] truncate" aria-current="page">
                    {label}
                  </span>
                ) : (
                  <Link to={path} className="font-iw-mono text-xs uppercase tracking-widest text-iw-slate hover:text-iw-forest transition-colors">
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
