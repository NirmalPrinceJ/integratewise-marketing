import { motion, useInView } from "motion/react";
import { Button } from "./ui/button";
import { Link } from "react-router";
import { Logo } from "./Logo";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

const productLinks = [
  { to: "/platform", label: "Platform" },
  { to: "/integrations", label: "Integrations" },
  { to: "/pricing", label: "Pricing" },
  { to: "/security", label: "Security & Governance" },
];
const companyLinks = [
  { to: "/story", label: "Our Story" },
  { to: "/who-its-for", label: "Who It's For" },
  { to: "#", label: "Careers" },
  { to: "/contact", label: "Contact" },
];
const resourceLinks = [
  { to: "#", label: "Documentation" },
  { to: "#", label: "Blog" },
  { to: "#", label: "Changelog" },
  { to: "#", label: "Support" },
];

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <footer ref={ref} className="bg-[#0a0a0a] text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white/[0.02] blur-3xl" animate={{ x: [0, 30, 0], y: [0, -20, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-white/[0.015] blur-3xl" animate={{ x: [0, -20, 0], y: [0, 15, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <motion.div className="lg:col-span-2" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <Logo className="h-8 w-auto text-white" />
            </Link>
            <p className="text-white/60 mb-6 max-w-md">
              The Infrastructure for Modern Work. Where your data thinks, connects, and works for you.
            </p>
            <Link to="/book-demo">
              <Button className="bg-white text-black hover:bg-white/90">
                Book Demo <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </Link>
          </motion.div>

          {[
            { title: "Product", links: productLinks, delay: 0.1 },
            { title: "Company", links: companyLinks, delay: 0.15 },
            { title: "Resources", links: resourceLinks, delay: 0.2 },
          ].map((section) => (
            <motion.div key={section.title} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: section.delay }}>
              <h4 className="text-white/90 mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, i) => (
                  <motion.li key={link.label} initial={{ opacity: 0, x: -10 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: section.delay + 0.1 + i * 0.05, duration: 0.4 }}>
                    <Link to={link.to} className="text-white/50 hover:text-white transition-colors duration-200 inline-block hover:translate-x-0.5 transform">
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div className="h-px bg-white/10 my-8" initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}} transition={{ delay: 0.4, duration: 0.8 }} style={{ transformOrigin: "left" }} />

        <motion.div className="flex flex-col md:flex-row justify-between items-center" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }}>
          <p className="text-sm text-white/40 mb-4 md:mb-0">&copy; 2026 IntegrateWise. All rights reserved.</p>
          <div className="flex space-x-6 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
