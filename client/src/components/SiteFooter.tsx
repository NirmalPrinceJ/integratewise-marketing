import { Link } from "wouter";

export default function SiteFooter() {
  return (
    <footer className="bg-forest-deep text-paper border-t border-paper/10 py-14 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Footer columns */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h4 className="font-bold mb-4 text-paper">Workbenches</h4>
            <ul className="space-y-2 text-sm text-paper/60">
              <li><Link href="/solutions/account-success" className="hover:text-paper transition-colors">Account Success</Link></li>
              <li><Link href="/solutions/sales-continuity" className="hover:text-paper transition-colors">Sales Continuity</Link></li>
              <li><Link href="/solutions/founder-ops" className="hover:text-paper transition-colors">Founder Ops</Link></li>
              <li><Link href="/solutions/engineering-product" className="hover:text-paper transition-colors">Engineering & Product</Link></li>
              <li><Link href="/solutions/ai-governance" className="hover:text-paper transition-colors">AI Governance</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-paper">Company</h4>
            <ul className="space-y-2 text-sm text-paper/60">
              <li><Link href="/company" className="hover:text-paper transition-colors">About</Link></li>
              <li><a href="#" className="hover:text-paper transition-colors">Careers</a></li>
              <li><a href="mailto:invest@integratewise.ai" className="hover:text-paper transition-colors">Investors</a></li>
              <li><a href="mailto:hello@integratewise.ai" className="hover:text-paper transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-paper">Legal</h4>
            <ul className="space-y-2 text-sm text-paper/60">
              <li><a href="#" className="hover:text-paper transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-paper transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-paper transition-colors">Security</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-paper/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-paper/40">
            © 2026 IntegrateWise LLP. All rights reserved.
          </p>
          <p className="text-sm text-paper/40">
            integratewise.ai
          </p>
        </div>
      </div>
    </footer>
  );
}
