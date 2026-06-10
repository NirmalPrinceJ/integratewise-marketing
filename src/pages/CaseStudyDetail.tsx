import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp } from 'lucide-react';
import { fetchCaseStudyBySlug } from '../lib/cms-data';
import type { CaseStudyItem } from '../lib/cms-data';
import PortableTextRenderer from '../components/PortableTextRenderer';
import { useSeo } from '../hooks/useSeo';

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [study, setStudy] = useState<CaseStudyItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    fetchCaseStudyBySlug(slug).then((data) => { setStudy(data); setLoading(false); });
  }, [slug]);

  if (loading) return <section className="pt-32 pb-16 section-padding min-h-[60vh] flex items-center justify-center"><div className="w-8 h-8 border-2 border-iw-forest border-t-transparent rounded-full animate-spin" /></section>;
  if (!study) return <section className="pt-32 pb-16 section-padding min-h-[60vh] flex items-center"><div className="text-center w-full"><h1 className="editorial-heading text-3xl text-iw-ink mb-4">Case Study Not Found</h1><Link to="/case-study" className="btn-primary">All Case Studies</Link></div></section>;

  useSeo(study.seoTitle || `${study.title} | IntegrateWise Case Study`, study.seoDescription || study.subtitle);

  return (
    <div>
      <section className="pt-32 pb-16 section-padding bg-iw-forest text-iw-paper">
        <div className="max-w-3xl">
          <Link to="/case-study" className="inline-flex items-center gap-2 font-iw-mono text-xs text-iw-paper/60 uppercase tracking-widest hover:text-iw-paper mb-6"><ArrowLeft size={14} /> All Case Studies</Link>
          <span className="font-iw-mono text-xs text-iw-gold uppercase tracking-widest block mb-3">{study.tag}</span>
          <h1 className="editorial-heading text-3xl sm:text-4xl text-iw-paper leading-[1.1]">{study.title}</h1>
          <p className="font-iw-sans text-base text-iw-paper/70 leading-relaxed mt-4">{study.subtitle}</p>
        </div>
      </section>
      <section className="section-padding-y">
        <div className="section-padding max-w-3xl">
          <div className="flex items-center gap-6 p-6 bg-iw-paper-warm border border-iw-rule mb-10">
            <div><span className="font-iw-display text-4xl tracking-wide text-iw-forest">{study.metric}</span><p className="font-iw-mono text-xs text-iw-slate uppercase tracking-widest mt-1">{study.metricLabel}</p></div>
            <TrendingUp size={28} className="text-iw-gold" />
          </div>
          <div className="mb-10"><h2 className="editorial-heading text-2xl text-iw-ink mb-4">THE CHALLENGE</h2><PortableTextRenderer value={study.challenge || []} /></div>
          <div className="mb-10"><h2 className="editorial-heading text-2xl text-iw-ink mb-4">THE APPROACH</h2><PortableTextRenderer value={study.approach || []} /></div>
          <div className="mb-10"><h2 className="editorial-heading text-2xl text-iw-ink mb-4">THE RESULT</h2><PortableTextRenderer value={study.results || []} /></div>
          {study.quote && <blockquote className="border-l-4 border-iw-gold pl-6 py-2 my-10"><p className="editorial-serif text-lg text-iw-ink italic">&ldquo;{study.quote}&rdquo;</p>{study.quoteAuthor && <cite className="font-iw-mono text-xs text-iw-slate uppercase tracking-widest not-italic mt-3 block">— {study.quoteAuthor}</cite>}</blockquote>}
        </div>
      </section>
    </div>
  );
}
