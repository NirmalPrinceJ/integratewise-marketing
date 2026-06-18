import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { fetchBlogPostBySlug } from '../lib/cms-data';
import type { BlogPostItem } from '../lib/cms-data';
import PortableTextRenderer from '../components/PortableTextRenderer';
import { useSeo } from '../hooks/useSeo';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    fetchBlogPostBySlug(slug).then((data) => { setPost(data); setLoading(false); });
  }, [slug]);

  if (loading) return <section className="pt-32 pb-16 section-padding min-h-[60vh] flex items-center justify-center"><div className="w-8 h-8 border-2 border-iw-forest border-t-transparent rounded-full animate-spin" /></section>;
  if (!post) return <section className="pt-32 pb-16 section-padding min-h-[60vh] flex items-center"><div className="section-padding w-full text-center"><h1 className="editorial-heading text-3xl text-iw-ink mb-4">Post Not Found</h1><Link to="/blog" className="btn-primary">Back to Blog</Link></div></section>;

  return <BlogPostContent post={post} />;
}

function BlogPostContent({ post }: { post: BlogPostItem }) {
  useSeo(post.seoTitle || `${post.title} | IntegrateWise Blog`, post.seoDescription || post.excerpt);

  return (
    <div>
      <section className="pt-32 pb-16 section-padding bg-iw-forest text-iw-paper">
        <div className="max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 font-iw-mono text-xs text-iw-paper/60 uppercase tracking-widest hover:text-iw-paper transition-colors mb-6"><ArrowLeft size={14} /> All Posts</Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-iw-mono text-xs text-iw-gold uppercase tracking-widest">{post.category}</span>
            <span className="w-1 h-1 rounded-full bg-iw-paper/30" />
            <span className="font-iw-mono text-xs text-iw-paper/60 flex items-center gap-1"><Calendar size={12} />{new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span className="font-iw-mono text-xs text-iw-paper/60 flex items-center gap-1"><Clock size={12} />{post.readTime || '5 min read'}</span>
          </div>
          <h1 className="editorial-heading text-3xl sm:text-4xl text-iw-paper leading-[1.1]">{post.title}</h1>
          <p className="font-iw-sans text-base text-iw-paper/70 leading-relaxed mt-4">{post.excerpt}</p>
        </div>
      </section>
      <section className="section-padding-y">
        <div className="section-padding max-w-3xl">
          <article className="prose-iw"><PortableTextRenderer value={post.content || []} /></article>
          <div className="mt-12 pt-8 border-t border-iw-rule">
            <p className="font-iw-mono text-xs text-iw-slate uppercase tracking-widest">Written by</p>
            <p className="font-iw-sans text-sm text-iw-ink mt-1">{post.author}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
