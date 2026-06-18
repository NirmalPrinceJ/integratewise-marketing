import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const heroBottom = window.innerHeight;
      setVisible(window.scrollY > heroBottom * 0.5);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-iw-forest/95 backdrop-blur-md border-t border-iw-forest-mid animate-in slide-in-from-bottom-4 duration-300">
      <div className="flex items-center justify-between section-padding py-3">
        <div className="hidden sm:block">
          <span className="font-iw-mono text-xs text-iw-paper/70">You told it once. Now it remembers, follows through, and finishes the work.</span>
        </div>
        <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <Link
            to="https://calendar.app.google/EcRkSqxwtchuF4Qf6"
            className="flex-1 sm:flex-none inline-flex items-center justify-center px-5 py-2.5 bg-iw-gold text-iw-forest font-iw-sans font-semibold text-xs rounded-full transition-all duration-300 hover:bg-iw-gold-pale"
          >
            Book a Demo <ArrowRight size={14} className="ml-1.5" />
          </Link>
          <Link
            to="/case-study"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 border border-iw-paper/30 text-iw-paper font-iw-sans font-semibold text-xs rounded-full transition-all duration-300 hover:border-iw-paper/60"
          >
            Read Case Study
          </Link>
        </div>
      </div>
    </div>
  );
}
