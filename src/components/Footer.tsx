import { Link } from 'react-router-dom';
import { Linkedin, Twitter } from 'lucide-react';

const productLinks = [
  { label: 'How It Works', href: '/platform' },
  { label: 'Features', href: '/features' },
  { label: 'Architecture', href: '/architecture' },
  { label: 'Governance', href: '/governance' },
  { label: 'Twin', href: '/twin' },
  { label: 'Workbench', href: '/workbench' },
  { label: 'Integrations', href: '/integrations' },
];

const useCaseLinks = [
  { label: 'Account Success', href: '/solutions' },
  { label: 'Business Operations', href: '/solutions' },
  { label: 'Team Handovers', href: '/solutions' },
  { label: 'Documentation', href: '/solutions' },
  { label: 'AI Workflows', href: '/solutions' },
];

const resourceLinks = [
  { label: 'Blog', href: '/blog' },
  { label: 'Case Studies', href: '/case-study' },
  { label: 'Docs', href: '/docs' },
  { label: 'FAQ', href: '/faq' },
];

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Security', href: '/security' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Pricing', href: '/pricing' },
];

export default function Footer() {
  return (
    <footer className="bg-iw-forest">
      <div className="section-padding py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-4">
              <img src="./images/logo-light.png" alt="IntegrateWise" className="h-10 w-auto" />
              <span className="font-iw-display text-2xl tracking-wide text-iw-paper">
                INTEGRATE<span className="text-iw-gold-light">WISE</span>
              </span>
            </Link>
            <p className="font-iw-sans text-sm text-iw-paper/60 leading-relaxed max-w-xs mb-6">
              AI that doesn't forget what you told it — and finishes what you started.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com/company/integratewise" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-iw-paper/20 flex items-center justify-center text-iw-paper/50 hover:text-iw-paper transition-colors" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href="https://twitter.com/integratewise" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-iw-paper/20 flex items-center justify-center text-iw-paper/50 hover:text-iw-paper transition-colors" aria-label="Twitter">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-iw-display text-sm tracking-wide text-iw-paper/40 uppercase mb-4">Product</h4>
            <ul className="space-y-2">
              {productLinks.map((l) => (
                <li key={l.label}><Link to={l.href} className="font-iw-sans text-sm text-iw-paper/70 hover:text-iw-paper transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <h4 className="font-iw-display text-sm tracking-wide text-iw-paper/40 uppercase mb-4">Use Cases</h4>
            <ul className="space-y-2">
              {useCaseLinks.map((l) => (
                <li key={l.label}><Link to={l.href} className="font-iw-sans text-sm text-iw-paper/70 hover:text-iw-paper transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-iw-display text-sm tracking-wide text-iw-paper/40 uppercase mb-4">Resources</h4>
            <ul className="space-y-2">
              {resourceLinks.map((l) => (
                <li key={l.label}><Link to={l.href} className="font-iw-sans text-sm text-iw-paper/70 hover:text-iw-paper transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-iw-display text-sm tracking-wide text-iw-paper/40 uppercase mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((l) => (
                <li key={l.label}><Link to={l.href} className="font-iw-sans text-sm text-iw-paper/70 hover:text-iw-paper transition-colors">{l.label}</Link></li>
              ))}
            </ul>
            <a href="https://calendar.app.google/EcRkSqxwtchuF4Qf6" className="mt-6 inline-flex items-center px-5 py-2 bg-iw-paper text-iw-forest font-iw-sans font-semibold text-xs rounded-full hover:bg-iw-gold-pale transition-colors">
              Book a Demo
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-iw-forest-mid flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-iw-mono text-xs text-iw-paper/40">&copy; {new Date().getFullYear()} IntegrateWise. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="font-iw-mono text-xs text-iw-paper/40 hover:text-iw-paper transition-colors">Privacy</Link>
            <Link to="/terms" className="font-iw-mono text-xs text-iw-paper/40 hover:text-iw-paper transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
