"use client";
import { useState } from "react";
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto max-w-7xl rounded-full border border-white/10 bg-dark-800/88 shadow-lg shadow-black/20 backdrop-blur-md">
        <div className="px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-dark-900 text-lg group-hover:shadow-lg group-hover:shadow-primary/30 transition-shadow">
              H
            </div>
            <span className="text-xl font-bold tracking-tight">
              HNX<span className="text-primary"> Technologies</span>
            </span>
          </Link>

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

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/contact"
              className="hidden lg:inline-flex px-6 py-2.5 bg-gradient-to-r from-primary to-accent text-dark-900 font-semibold rounded-lg text-sm hover:shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-0.5"
            >
              Get a Quote
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-light-200 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-dark-800/92 backdrop-blur-xl lg:hidden"
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
