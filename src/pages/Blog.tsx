import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar } from 'lucide-react';
import SectionLabel from '../components/SectionLabel';
import { fetchBlogPosts } from '../lib/cms-data';
import type { BlogPostItem } from '../lib/cms-data';
import { useSeo } from '../hooks/useSeo';

export default function Blog() {
  useSeo("Blog | IntegrateWise", "Read the latest from IntegrateWise: product updates, best practices, and thinking on the future of connected work.");
  const [posts, setPosts] = useState<BlogPostItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogPosts().then((data) => { setPosts(data); setLoading(false); });
  }, []);

  const featured = posts.filter((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <div>
      <section className="pt-32 pb-16 section-padding">
        <div className="max-w-4xl">
          <SectionLabel label="Blog" />
          <h1 className="editorial-heading text-4xl sm:text-5xl text-iw-ink mt-6">THINKING OUT LOUD</h1>
          <p className="font-iw-sans text-base text-iw-slate mt-6 leading-relaxed max-w-2xl">Product updates, best practices, and our perspective on the future of connected work.</p>
        </div>
      </section>

      {loading ? (
        <section className="section-padding py-20 text-center">
          <div className="w-8 h-8 border-2 border-iw-forest border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="font-iw-mono text-xs text-iw-slate uppercase tracking-widest mt-4">Loading posts...</p>
        </section>
      ) : (
        <section className="section-padding-y border-t border-iw-paper-deep bg-iw-paper-warm">
          <div className="section-padding">
            <SectionLabel label="All Posts" />
            <div className="space-y-0 border border-iw-rule max-w-4xl">
              {[...featured, ...rest].map((post) => (
                <Link key={post._id} to={`/blog/${post.slug}`} className="group block p-6 transition-all hover:bg-iw-paper border-b border-iw-rule last:border-b-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-iw-mono text-xs text-iw-gold uppercase tracking-widest">{post.category}</span>
                    <span className="font-iw-mono text-xs text-iw-slate flex items-center gap-1"><Calendar size={12} />{new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <span className="font-iw-mono text-xs text-iw-slate flex items-center gap-1"><Clock size={12} />{post.readTime || '5 min read'}</span>
                  </div>
                  <h3 className="font-iw-display text-lg tracking-wide text-iw-ink group-hover:text-iw-forest transition-colors">{post.title}</h3>
                  <p className="font-iw-sans text-sm text-iw-slate leading-relaxed mt-1">{post.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
