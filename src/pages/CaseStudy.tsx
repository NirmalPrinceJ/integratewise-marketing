import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp } from 'lucide-react';
import SectionLabel from '../components/SectionLabel';
import { fetchCaseStudies } from '../lib/cms-data';
import type { CaseStudyItem } from '../lib/cms-data';
import { useSeo } from '../hooks/useSeo';

export default function CaseStudy() {
  useSeo("Case Studies | IntegrateWise", "See how teams saved accounts, eliminated onboarding delays, and aligned departments.");
  const [studies, setStudies] = useState<CaseStudyItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCaseStudies().then((data) => { setStudies(data); setLoading(false); });
  }, []);

  return (
    <div>
      <section className="pt-32 pb-16 section-padding">
        <div className="max-w-4xl">
          <SectionLabel label="Case Studies" />
          <h1 className="editorial-heading text-4xl sm:text-5xl text-iw-ink mt-6">REAL STORIES. REAL RESULTS.</h1>
          <p className="font-iw-sans text-base text-iw-slate mt-6 leading-relaxed max-w-2xl">See how teams use IntegrateWise to save accounts, eliminate knowledge gaps, and align departments.</p>
        </div>
      </section>

      {loading ? (
        <section className="section-padding py-20 text-center">
          <div className="w-8 h-8 border-2 border-iw-forest border-t-transparent rounded-full animate-spin mx-auto" />
        </section>
      ) : (
        <section className="section-padding-y border-t border-iw-paper-deep">
          <div className="section-padding">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl">
              {studies.map((study) => (
                <Link key={study._id} to={`/case-study/${study.slug}`} className="group block border border-iw-rule bg-iw-paper p-6 hover:border-iw-forest transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-iw-mono text-xs text-iw-gold uppercase tracking-widest">{study.tag}</span>
                    <span className="font-iw-display text-2xl tracking-wide text-iw-forest">{study.metric}</span>
                  </div>
                  <h3 className="font-iw-display text-lg tracking-wide text-iw-ink mb-2 group-hover:text-iw-forest transition-colors">{study.title}</h3>
                  <p className="font-iw-sans text-sm text-iw-slate leading-relaxed mb-4">{study.subtitle}</p>
                  <span className="inline-flex items-center font-iw-mono text-xs text-iw-forest uppercase tracking-widest">Read story <ArrowRight size={14} className="ml-1" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-padding-y bg-iw-forest text-iw-paper">
        <div className="section-padding text-center max-w-2xl mx-auto">
          <TrendingUp size={32} className="text-iw-gold mx-auto mb-4" />
          <h2 className="editorial-heading text-2xl text-iw-paper mb-4">WANT SIMILAR RESULTS?</h2>
          <a href="https://calendar.app.google/EcRkSqxwtchuF4Qf6" className="inline-flex items-center justify-center px-6 py-3 bg-iw-paper text-iw-forest font-iw-sans font-semibold text-sm rounded-full hover:bg-iw-gold-pale">Book a Demo</a>
        </div>
      </section>
    </div>
  );
}
