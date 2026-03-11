import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Logo } from "./Logo";

const navLinks = [
  { to: "/platform", label: "Platform" },
  { to: "/who-its-for", label: "Who It's For" },
  { to: "/integrations", label: "Integrations" },
  { to: "/pricing", label: "Pricing" },
  { to: "/security", label: "Security" },
  { to: "/story", label: "Our Story" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b bg-white/90 backdrop-blur-xl shadow-sm shadow-black/[0.03]"
          : "bg-white/70 backdrop-blur-md"
      }`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <motion.div
            className="flex items-center gap-2.5"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Logo className="h-8 w-auto text-foreground" />
            <span className="text-gray-400 text-sm font-medium hidden xl:inline ml-2 border-l border-gray-200 pl-3">
              The Infrastructure for Modern Work.
            </span>
          </motion.div>
        </Link>

        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className="relative px-3 py-2 rounded-md text-sm transition-colors text-muted-foreground hover:text-foreground"
              >
                {link.label}
                {isActive && (
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-foreground rounded-full"
                    layoutId="nav-indicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center space-x-3">
          <Link to="/contact">
            <Button variant="ghost" className="hidden md:inline-flex text-sm font-semibold text-[#111827]">
              Contact
            </Button>
          </Link>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <Link to="/book-demo">
              <Button size="sm" className="rounded-full px-5 bg-[#0EA775] hover:bg-[#0EA775]/90 text-white font-semibold">
                Book Demo
                <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </Link>
          </motion.div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden border-t bg-white overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-1">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.to;
                return (
                  <motion.div key={link.to} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05, duration: 0.3 }}>
                    <Link
                      to={link.to}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-sm transition-colors ${
                        isActive ? "text-foreground bg-muted" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div className="pt-2 border-t space-y-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <Link to="/contact" onClick={() => setMobileOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">Contact</Button>
                </Link>
                <Link to="/book-demo" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full justify-start bg-[#0EA775] hover:bg-[#0EA775]/90 text-white">Book Demo</Button>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
