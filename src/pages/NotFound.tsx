import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useSeo } from '../hooks/useSeo';

export default function NotFound() {
  useSeo("Page Not Found | IntegrateWise", "The page you are looking for does not exist. See how it works, explore features, or book a demo.");

  return (
    <div className="section-padding-y flex items-center justify-center min-h-[70vh]">
      <div className="text-center max-w-lg">
        <span className="font-iw-mono text-xs text-iw-gold uppercase tracking-widest">404</span>
        <h1 className="editorial-heading text-4xl sm:text-5xl text-iw-ink mt-4 mb-4">PAGE NOT FOUND.</h1>
        <p className="font-iw-sans text-base text-iw-slate leading-relaxed mb-8">The page you are looking for does not exist or has been moved. Try one of these instead.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="btn-primary">Go Home <ArrowRight size={16} className="ml-2" /></Link>
          <Link to="/platform" className="btn-outline">See How It Works</Link>
        </div>
      </div>
    </div>
  );
}
