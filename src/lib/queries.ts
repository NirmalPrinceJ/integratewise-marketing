/**
 * Sanity GROQ Queries
 *
 * These queries fetch content from Sanity's API.
 * GROQ is Sanity's query language — like GraphQL but simpler.
 * Learn more: https://www.sanity.io/docs/groq
 */

// ─── BLOG QUERIES ───────────────────────────────────────────

export const allBlogPostsQuery = `*[_type == "blogPost" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  "author": author->name,
  publishedAt,
  category,
  tags,
  featured,
  readTime,
  "coverImage": coverImage.asset->url,
  seoTitle,
  seoDescription
}`;

export const featuredBlogPostsQuery = `*[_type == "blogPost" && featured == true && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  "author": author->name,
  publishedAt,
  category,
  tags,
  featured,
  readTime,
  "coverImage": coverImage.asset->url,
  seoTitle,
  seoDescription
}`;

export const blogPostBySlugQuery = `*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  content,
  "author": author->{name, role},
  publishedAt,
  category,
  tags,
  featured,
  readTime,
  "coverImage": coverImage.asset->url,
  seoTitle,
  seoDescription
}`;

export const relatedBlogPostsQuery = `*[_type == "blogPost" && slug.current != $slug && category == $category && defined(slug.current)] | order(publishedAt desc)[0...3] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  category,
  publishedAt,
  readTime
}`;

// ─── CASE STUDY QUERIES ─────────────────────────────────────

export const allCaseStudiesQuery = `*[_type == "caseStudy" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  subtitle,
  tag,
  metric,
  metricLabel,
  publishedAt,
  "coverImage": coverImage.asset->url,
  seoTitle,
  seoDescription
}`;

export const caseStudyBySlugQuery = `*[_type == "caseStudy" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  subtitle,
  tag,
  metric,
  metricLabel,
  challenge,
  approach,
  results,
  quote,
  quoteAuthor,
  publishedAt,
  "coverImage": coverImage.asset->url,
  seoTitle,
  seoDescription
}`;

// ─── RESOURCE QUERIES ───────────────────────────────────────

export const allResourcesQuery = `*[_type == "resource" && defined(_id)] | order(publishedAt desc) {
  _id,
  title,
  description,
  resourceType,
  category,
  link,
  externalLink,
  publishedAt,
  featured,
  "coverImage": coverImage.asset->url
}`;

export const featuredResourcesQuery = `*[_type == "resource" && featured == true] | order(publishedAt desc)[0...6] {
  _id,
  title,
  description,
  resourceType,
  category,
  link,
  externalLink,
  publishedAt,
  "coverImage": coverImage.asset->url
}`;
