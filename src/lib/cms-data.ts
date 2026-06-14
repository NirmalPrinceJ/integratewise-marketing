/**
 * CMS Data Fetcher
 *
 * Fetches content from Sanity when configured.
 * Falls back to local static data when Sanity is not connected.
 *
 * Usage:
 *   const posts = await fetchBlogPosts();
 *   const post = await fetchBlogPostBySlug('what-is-the-spine');
 *
 * To connect Sanity:
 *   Set VITE_SANITY_PROJECT_ID and VITE_SANITY_API_TOKEN in your .env
 */
import { sanityClient, hasSanityConfig, urlFor } from './sanity';
import {
  allBlogPostsQuery,
  blogPostBySlugQuery,
  relatedBlogPostsQuery,
  allCaseStudiesQuery,
  caseStudyBySlugQuery,
  allResourcesQuery,
} from './queries';
import { blogPosts as localBlogPosts } from '../data/blog';
import { caseStudies as localCaseStudies } from '../data/caseStudies';
import type { SanityBlogPost, SanityCaseStudy, SanityResource } from './sanity-types';

// ─── Blog Posts ─────────────────────────────────────────────

export interface BlogPostItem {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  category: string;
  tags?: string[];
  featured?: boolean;
  readTime?: string;
  coverImage?: string;
  content?: unknown[];
  seoTitle?: string;
  seoDescription?: string;
}

export interface CaseStudyItem {
  _id: string;
  title: string;
  slug: string;
  subtitle: string;
  tag: string;
  metric: string;
  metricLabel: string;
  challenge?: unknown[];
  approach?: unknown[];
  results?: unknown[];
  quote?: string;
  quoteAuthor?: string;
  publishedAt: string;
  seoTitle?: string;
  seoDescription?: string;
}

export interface ResourceItem {
  _id: string;
  title: string;
  description: string;
  resourceType: string;
  category: string;
  link?: string;
  externalLink?: boolean;
  publishedAt: string;
  featured?: boolean;
}

function mapLocalBlogPost(post: typeof localBlogPosts[0]): BlogPostItem {
  return {
    _id: post.slug,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    author: post.author,
    publishedAt: new Date(post.date).toISOString(),
    category: post.category,
    featured: post.featured,
    readTime: post.readTime,
    content: post.content.map((p) => ({ _type: 'block', children: [{ _type: 'span', text: p }] })),
  };
}

function mapLocalCaseStudy(study: typeof localCaseStudies[0]): CaseStudyItem {
  return {
    _id: study.slug,
    title: study.title,
    slug: study.slug,
    subtitle: study.subtitle,
    tag: study.tag,
    metric: study.metric,
    metricLabel: study.metricLabel,
    challenge: study.challenge.split('. ').map((s) => ({ _type: 'block', children: [{ _type: 'span', text: s }] })),
    approach: study.approach.map((s) => ({ _type: 'block', children: [{ _type: 'span', text: s }] })),
    results: study.result.map((s) => ({ _type: 'block', children: [{ _type: 'span', text: s }] })),
    quote: study.quote,
    quoteAuthor: study.quoteAuthor,
    publishedAt: new Date().toISOString(),
  };
}

// ─── Blog Post Fetchers ─────────────────────────────────────

export async function fetchBlogPosts(): Promise<BlogPostItem[]> {
  if (!hasSanityConfig) {
    return localBlogPosts.map(mapLocalBlogPost);
  }
  try {
    const posts = await sanityClient.fetch<SanityBlogPost[]>(allBlogPostsQuery);
    return posts.map((p) => ({
      _id: p._id,
      title: p.title,
      slug: p.slug.current,
      excerpt: p.excerpt,
      author: typeof p.author === 'string' ? p.author : (p.author as unknown as { name?: string })?.name || 'IntegrateWise Team',
      publishedAt: p.publishedAt,
      category: p.category,
      tags: p.tags,
      featured: p.featured,
      readTime: p.readTime,
      coverImage: p.coverImage ? urlFor(p.coverImage).url() : undefined,
      seoTitle: p.seoTitle,
      seoDescription: p.seoDescription,
    }));
  } catch {
    return localBlogPosts.map(mapLocalBlogPost);
  }
}

export async function fetchBlogPostBySlug(slug: string): Promise<BlogPostItem | null> {
  if (!hasSanityConfig) {
    const post = localBlogPosts.find((p) => p.slug === slug);
    return post ? mapLocalBlogPost(post) : null;
  }
  try {
    const post = await sanityClient.fetch<SanityBlogPost>(blogPostBySlugQuery, { slug });
    if (!post) return null;
    return {
      _id: post._id,
      title: post.title,
      slug: post.slug.current,
      excerpt: post.excerpt,
      content: post.content,
      author: typeof post.author === 'string' ? post.author : (post.author as unknown as { name?: string })?.name || 'IntegrateWise Team',
      publishedAt: post.publishedAt,
      category: post.category,
      tags: post.tags,
      featured: post.featured,
      readTime: post.readTime,
      coverImage: post.coverImage ? urlFor(post.coverImage).url() : undefined,
      seoTitle: post.seoTitle,
      seoDescription: post.seoDescription,
    };
  } catch {
    const post = localBlogPosts.find((p) => p.slug === slug);
    return post ? mapLocalBlogPost(post) : null;
  }
}

export async function fetchRelatedBlogPosts(slug: string, category: string): Promise<BlogPostItem[]> {
  if (!hasSanityConfig) {
    return localBlogPosts
      .filter((p) => p.slug !== slug && p.category === category)
      .slice(0, 3)
      .map(mapLocalBlogPost);
  }
  try {
    const posts = await sanityClient.fetch<SanityBlogPost[]>(relatedBlogPostsQuery, { slug, category });
    return posts.map((p) => ({
      _id: p._id,
      title: p.title,
      slug: p.slug.current,
      excerpt: p.excerpt,
      author: typeof p.author === 'string' ? p.author : (p.author as unknown as { name?: string })?.name || 'IntegrateWise Team',
      publishedAt: p.publishedAt,
      category: p.category,
      readTime: p.readTime,
    }));
  } catch {
    return localBlogPosts
      .filter((p) => p.slug !== slug && p.category === category)
      .slice(0, 3)
      .map(mapLocalBlogPost);
  }
}

// ─── Case Study Fetchers ────────────────────────────────────

export async function fetchCaseStudies(): Promise<CaseStudyItem[]> {
  if (!hasSanityConfig) {
    return localCaseStudies.map(mapLocalCaseStudy);
  }
  try {
    const studies = await sanityClient.fetch<SanityCaseStudy[]>(allCaseStudiesQuery);
    return studies.map((s) => ({
      _id: s._id,
      title: s.title,
      slug: s.slug.current,
      subtitle: s.subtitle,
      tag: s.tag,
      metric: s.metric,
      metricLabel: s.metricLabel,
      challenge: s.challenge,
      approach: s.approach,
      results: s.results,
      quote: s.quote,
      quoteAuthor: s.quoteAuthor,
      publishedAt: s.publishedAt,
      seoTitle: s.seoTitle,
      seoDescription: s.seoDescription,
    }));
  } catch {
    return localCaseStudies.map(mapLocalCaseStudy);
  }
}

export async function fetchCaseStudyBySlug(slug: string): Promise<CaseStudyItem | null> {
  if (!hasSanityConfig) {
    const study = localCaseStudies.find((s) => s.slug === slug);
    return study ? mapLocalCaseStudy(study) : null;
  }
  try {
    const study = await sanityClient.fetch<SanityCaseStudy>(caseStudyBySlugQuery, { slug });
    if (!study) return null;
    return {
      _id: study._id,
      title: study.title,
      slug: study.slug.current,
      subtitle: study.subtitle,
      tag: study.tag,
      metric: study.metric,
      metricLabel: study.metricLabel,
      challenge: study.challenge,
      approach: study.approach,
      results: study.results,
      quote: study.quote,
      quoteAuthor: study.quoteAuthor,
      publishedAt: study.publishedAt,
      seoTitle: study.seoTitle,
      seoDescription: study.seoDescription,
    };
  } catch {
    const study = localCaseStudies.find((s) => s.slug === slug);
    return study ? mapLocalCaseStudy(study) : null;
  }
}

// ─── Resource Fetchers ──────────────────────────────────────

const localResources: ResourceItem[] = [
  { _id: 'r1', title: 'Getting Started Guide', description: 'Connect your first tool and see your data in the Workbench', resourceType: 'guide', category: 'Getting Started', link: '/docs', publishedAt: '2026-06-01', featured: true },
  { _id: 'r2', title: 'Account Success Playbook', description: 'Step-by-step playbook for managing renewals and spotting churn risk', resourceType: 'guide', category: 'Playbooks', link: '/solutions', publishedAt: '2026-06-01', featured: true },
  { _id: 'r3', title: 'Governance Configuration Guide', description: 'How to set up approval workflows and audit trails for your team', resourceType: 'documentation', category: 'Governance', link: '/governance', publishedAt: '2026-06-01', featured: true },
  { _id: 'r4', title: 'Integration Setup: Salesforce', description: 'Connect Salesforce in under 5 minutes with our step-by-step guide', resourceType: 'guide', category: 'Integrations', link: '/integrations', publishedAt: '2026-06-01', featured: false },
  { _id: 'r5', title: 'Product Walkthrough Video', description: 'See IntegrateWise in action — 10-minute overview of the full product', resourceType: 'video', category: 'Walkthroughs', link: 'https://calendar.app.google/EcRkSqxwtchuF4Qf6', externalLink: true, publishedAt: '2026-06-01', featured: false },
  { _id: 'r6', title: 'Team Handover Template', description: 'Standard template for capturing context when team members transition', resourceType: 'template', category: 'Templates', publishedAt: '2026-06-01', featured: false },
];

export async function fetchResources(): Promise<ResourceItem[]> {
  if (!hasSanityConfig) return localResources;
  try {
    const resources = await sanityClient.fetch<SanityResource[]>(allResourcesQuery);
    return resources.map((r) => ({
      _id: r._id,
      title: r.title,
      description: r.description,
      resourceType: r.resourceType,
      category: r.category,
      link: r.link,
      externalLink: r.externalLink,
      publishedAt: r.publishedAt,
      featured: r.featured,
    }));
  } catch {
    return localResources;
  }
}
