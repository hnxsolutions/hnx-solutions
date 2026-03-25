"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "AI & Automation", href: "/ai-automation" },
  { name: "Mobile Apps", href: "/mobile-apps" },
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-dark-900 border-b border-white/5 shadow-lg shadow-black/20"
      }
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-dark-900 text-lg group-hover:shadow-lg group-hover:shadow-primary/30 transition-shadow">
              H
            </div>
            <span className="text-xl font-bold tracking-tight">
              HNX<span className="text-primary"> Technologies</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 text-sm transition-colors rounded-lg hover:bg-white/5 ${
                  pathname === link.href
                    ? "text-primary font-medium"
                    : "text-light-300 hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex px-6 py-2.5 bg-gradient-to-r from-primary to-accent text-dark-900 font-semibold rounded-lg text-sm hover:shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-0.5"
          >
            Get a Quote
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-light-200 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark-800/95 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-6 py-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-colors ${
                    pathname === link.href
                      ? "text-primary bg-white/5"
                      : "text-light-200 hover:text-primary hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block mt-4 px-6 py-3 bg-gradient-to-r from-primary to-accent text-dark-900 font-semibold rounded-lg text-center"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
