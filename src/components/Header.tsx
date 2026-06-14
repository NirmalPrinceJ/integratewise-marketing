import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'How It Works', href: '/platform' },
  { label: 'Features', href: '/features' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-iw-paper/95 backdrop-blur-sm border-b border-iw-rule">
      <div className="section-padding flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src="./images/logo-dark.png" alt="IntegrateWise" className="h-8 w-auto" />
          <span className="font-iw-display text-xl tracking-wide">
            <span className="text-iw-ink">INTEGRATE</span>
            <span className="text-iw-gold">WISE</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`font-iw-mono text-xs uppercase tracking-widest transition-colors ${
                location.pathname === link.href ? 'text-iw-forest' : 'text-iw-slate hover:text-iw-forest'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://calendar.app.google/EcRkSqxwtchuF4Qf6"
            className="px-5 py-2 bg-iw-forest text-iw-paper font-iw-sans font-semibold text-xs rounded-full hover:bg-iw-forest-bright transition-colors"
          >
            Book a Demo
          </a>
        </nav>

        <button className="lg:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden section-padding pb-6 border-t border-iw-rule">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href} onClick={() => setMenuOpen(false)} className="font-iw-mono text-xs uppercase tracking-widest text-iw-slate hover:text-iw-forest transition-colors">
                {link.label}
              </Link>
            ))}
            <a href="https://calendar.app.google/EcRkSqxwtchuF4Qf6" className="inline-block px-5 py-2 bg-iw-forest text-iw-paper font-iw-sans font-semibold text-xs rounded-full text-center">
              Book a Demo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
