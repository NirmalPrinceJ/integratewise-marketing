"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, X } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { navItems } from "@/lib/nav"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-main/98 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_1px_32px_rgba(0,0,0,0.6)]"
          : "bg-bg-main/60 backdrop-blur-xl border-b border-white/[0.04]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center flex-shrink-0">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Image
              src="/images/logo.png"
              alt="IntegrateWise Logo"
              width={200}
              height={50}
              className="h-7 xs:h-8 sm:h-9 md:h-10 w-auto"
              priority
            />
            <span className="ml-2 text-xl font-bold tracking-tight text-white hidden sm:block">IntegrateWise</span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium flex-1 justify-center">
          {navItems.map((item) => (
            <div 
              key={item.label} 
              className="relative"
              onMouseEnter={() => item.items && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.items ? (
                <>
                  <button
                    aria-expanded={activeDropdown === item.label}
                    aria-haspopup="true"
                    className={`flex items-center gap-1 transition-colors py-2 px-3 rounded-lg hover:bg-white/5 ${
                      activeDropdown === item.label
                        ? "text-gold"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {item.label}
                    <motion.div
                      animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-3 h-3" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className={`absolute top-full left-0 mt-2 ${item.items && item.items.length > 4 ? 'min-w-[360px]' : 'min-w-[240px]'} bg-bg-elevated/95 backdrop-blur-xl border border-white/8 rounded-xl p-3 z-50 shadow-xl`}
                      >
                        {item.items && item.items.map((subItem: any, index: number) => (
                          <motion.div
                            key={subItem.label}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.03 }}
                          >
                            <Link
                              href={subItem.href}
                              className="block px-4 py-3 text-text-secondary hover:text-gold hover:bg-white/5 rounded-lg transition-all group"
                            >
                              <div className="font-medium text-text-primary group-hover:text-gold">{subItem.label}</div>
                              {subItem.description && (
                                <div className="text-xs text-text-dim mt-0.5">{subItem.description}</div>
                              )}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`transition-colors py-2 px-3 rounded-lg hover:bg-white/5 ${
                    isActive(item.href)
                      ? "text-gold"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <motion.div
            className="hidden lg:block"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              href="/demo"
              className="btn-cream px-7 py-2.5 rounded-lg text-sm inline-flex items-center gap-2"
            >
              <i className="fa-solid fa-calendar text-xs"></i>
              Book a Demo
            </Link>
          </motion.div>
          <button
            className="lg:hidden text-text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="lg:hidden bg-bg-main/95 backdrop-blur-xl border-t border-white/5 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <nav className="max-w-7xl mx-auto px-6 py-4 space-y-1">
              {navItems.map((item, index) => (
                <motion.div 
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={`block py-3 text-lg font-medium ${
                      isActive(item.href) ? "text-gold" : "text-text-primary"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.items && (
                    <div className="pl-4 space-y-1 mb-2">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block text-text-secondary hover:text-gold py-2 text-sm"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
