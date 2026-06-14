import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, FileText, Video, Wrench, Newspaper } from 'lucide-react';
import SectionLabel from '../components/SectionLabel';
import { useSeo } from '../hooks/useSeo';
import { blogPosts } from '../data/blog';

const categories = [
  { icon: BookOpen, title: 'Blog', desc: 'Thoughts on trust in AI, why people demoted it, and how to earn it back.', href: '/blog', count: '6 posts' },
  { icon: FileText, title: 'Case Studies', desc: 'See how teams use IntegrateWise to connect their tools and power their Digital Twin.', href: '/case-study', count: '3 studies' },
  { icon: Video, title: 'Video Guides', desc: 'Walkthroughs of the product, features, and best practices for getting started.', href: '/docs', count: 'Coming soon' },
  { icon: Wrench, title: 'Documentation', desc: 'Technical docs, API references, and integration guides for developers.', href: '/docs', count: 'Available' },
  { icon: Newspaper, title: 'Press & Media', desc: 'Company news, media mentions, and press kit.', href: '/about', count: 'Coming soon' },
];

export default function Resources() {
  useSeo("Resources | IntegrateWise", "Blog, case studies, documentation, and video guides. Everything you need to understand IntegrateWise and the AI you were promised the first time.");

  const latestPosts = blogPosts.slice(0, 3);

  return (
    <div>
      <section className="pt-32 pb-16 section-padding">
        <div className="max-w-4xl">
          <SectionLabel label="Resources" />
          <h1 className="editorial-heading text-4xl sm:text-5xl md:text-6xl text-iw-ink mt-6">EVERYTHING YOU NEED TO KNOW.</h1>
          <p className="font-iw-sans text-base sm:text-lg text-iw-slate mt-6 leading-relaxed max-w-2xl">Blog posts, case studies, documentation, and video guides. Learn how AI earns your trust back.</p>
        </div>
      </section>

      <section className="section-padding-y border-t border-iw-paper-deep">
        <div className="section-padding">
          <SectionLabel label="Categories" />
          <h2 className="editorial-heading text-2xl sm:text-3xl text-iw-ink mt-4 mb-10">BROWSE BY TOPIC.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-iw-rule max-w-5xl">
            {categories.map((cat, i) => (
              <Link key={i} to={cat.href} className="p-6 sm:p-8 border border-iw-rule hover:bg-iw-paper-warm transition-colors block">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-iw-forest/10 flex items-center justify-center"><cat.icon size={20} className="text-iw-forest" /></div>
                  <span className="font-iw-mono text-xs text-iw-gold uppercase tracking-widest">{cat.count}</span>
                </div>
                <h3 className="font-iw-display text-lg tracking-wide text-iw-ink mb-2">{cat.title}</h3>
                <p className="font-iw-sans text-sm text-iw-slate leading-relaxed mb-3">{cat.desc}</p>
                <span className="inline-flex items-center font-iw-mono text-xs text-iw-forest uppercase tracking-widest hover:text-iw-gold transition-colors">Explore <ArrowRight size={14} className="ml-1" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-y bg-iw-paper-warm">
        <div className="section-padding">
          <div className="flex items-center justify-between mb-10 max-w-5xl">
            <div>
              <SectionLabel label="Latest from the Blog" />
              <h2 className="editorial-heading text-2xl sm:text-3xl text-iw-ink mt-4">RECENT POSTS.</h2>
            </div>
            <Link to="/blog" className="hidden sm:inline-flex items-center font-iw-mono text-xs text-iw-forest uppercase tracking-widest hover:text-iw-gold transition-colors">View all <ArrowRight size={14} className="ml-1" /></Link>
          </div>
          <div className="space-y-0 border border-iw-rule max-w-5xl">
            {latestPosts.map((post, i) => (
              <Link key={i} to={`/blog/${post.slug}`} className={`block p-6 sm:p-8 hover:bg-iw-paper transition-colors ${i < latestPosts.length - 1 ? 'border-b border-iw-rule' : ''}`}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                  <span className="font-iw-mono text-xs text-iw-gold uppercase tracking-widest">{post.category}</span>
                  <span className="hidden sm:block text-iw-rule">|</span>
                  <span className="font-iw-mono text-xs text-iw-slate">{post.date}</span>
                </div>
                <h3 className="font-iw-display text-xl tracking-wide text-iw-ink mb-2">{post.title}</h3>
                <p className="font-iw-sans text-sm text-iw-slate leading-relaxed">{post.excerpt}</p>
              </Link>
            ))}
          </div>
          <div className="sm:hidden mt-6">
            <Link to="/blog" className="inline-flex items-center font-iw-mono text-xs text-iw-forest uppercase tracking-widest hover:text-iw-gold transition-colors">View all posts <ArrowRight size={14} className="ml-1" /></Link>
          </div>
        </div>
      </section>

      <section className="section-padding-y">
        <div className="section-padding text-center max-w-2xl mx-auto">
          <h2 className="editorial-heading text-2xl sm:text-3xl text-iw-ink mb-4">WANT TO LEARN MORE?</h2>
          <p className="font-iw-sans text-base text-iw-slate leading-relaxed mb-8">Book a demo and we will show you how IntegrateWise works with your tools.</p>
          <a href="https://calendar.app.google/EcRkSqxwtchuF4Qf6" className="btn-primary">Book a Demo <ArrowRight size={16} className="ml-2" /></a>
        </div>
      </section>
    </div>
  );
}
