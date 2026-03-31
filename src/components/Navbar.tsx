"use client";

import { useState, useSyncExternalStore, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  HiMenuAlt3,
  HiX,
  HiChevronDown,
  HiMoon,
  HiSun,
} from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { services } from "@/data/services";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const isDark = theme === "dark";
  const isServicesActive =
    pathname === "/services" || pathname.startsWith("/services/");

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 sm:px-6">
      <div
        className={`mx-auto max-w-7xl rounded-full border border-[var(--border)] bg-white/70 shadow-black/10 backdrop-blur-xl dark:bg-dark-800/80 ${
          scrolled ? "shadow-xl" : "shadow-lg"
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex h-18 items-center justify-between sm:h-20">
            <Link href="/" className="group flex min-w-0 items-center gap-2 sm:gap-3">
              <div className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-xl border border-[var(--border)] bg-white/5 shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary/20 sm:h-12 sm:w-12 md:h-14 md:w-14">
                <Image
                  src="/hnxlogo.png"
                  alt="HNX Technologies Logo"
                  fill
                  priority
                  className="object-contain p-1"
                />
              </div>

              <div className="min-w-0 leading-tight">
                <span className="block truncate text-base font-bold tracking-tight text-[var(--text)] sm:text-lg md:text-xl">
                  HNX<span className="text-primary"> Technologies</span>
                </span>
                <span className="hidden text-xs text-[var(--text-soft)] sm:block">
                  IT Services & Digital Solutions
                </span>
              </div>
            </Link>

            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.slice(0, 1).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`rounded-lg px-4 py-2 text-sm transition-colors hover:bg-white/5 ${
                    pathname === link.href
                      ? "font-medium text-primary"
                      : "text-[var(--text-soft)] hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div
                className="relative"
                onMouseEnter={() => setDesktopServicesOpen(true)}
                onMouseLeave={() => setDesktopServicesOpen(false)}
              >
                <button
                  className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-colors hover:bg-white/5 ${
                    isServicesActive
                      ? "font-medium text-primary"
                      : "text-[var(--text-soft)] hover:text-primary"
                  }`}
                >
                  Services
                  <HiChevronDown
                    className={`transition-transform duration-300 ${
                      desktopServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {desktopServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{
                        duration: 0.25,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      className="absolute left-1/2 top-full mt-4 w-[320px] -translate-x-1/2 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-3 shadow-2xl shadow-black/15 backdrop-blur-2xl"
                    >
                      <div className="mb-2 px-3 pt-2">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--text-soft)]">
                          Our Services
                        </p>
                      </div>

                      <div className="max-h-[420px] overflow-y-auto pr-1">
                        <Link
                          href="/services"
                          className={`mb-1 block rounded-2xl px-4 py-3 transition-all duration-200 ${
                            pathname === "/services"
                              ? "bg-white/8 text-primary"
                              : "text-[var(--text-muted)] hover:bg-white/5 hover:text-primary"
                          }`}
                        >
                          <p className="text-sm font-semibold">All Services</p>
                          <p className="mt-1 text-xs leading-5 text-[var(--text-soft)]">
                            Explore all service categories and offerings.
                          </p>
                        </Link>

                        {services.map((service) => {
                          const active = pathname === `/services/${service.id}`;

                          return (
                            <Link
                              key={service.id}
                              href={`/services/${service.id}`}
                              className={`block rounded-2xl px-4 py-3 transition-all duration-200 ${
                                active
                                  ? "bg-white/8 text-primary"
                                  : "text-[var(--text-muted)] hover:bg-white/5 hover:text-primary"
                              }`}
                            >
                              <p className="text-sm font-semibold">{service.title}</p>
                              <p className="mt-1 text-xs leading-5 text-[var(--text-soft)]">
                                {service.shortDescription}
                              </p>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`rounded-lg px-4 py-2 text-sm transition-colors hover:bg-white/5 ${
                    pathname === link.href
                      ? "font-medium text-primary"
                      : "text-[var(--text-soft)] hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              {mounted && (
                <button
                  onClick={() => setTheme(isDark ? "light" : "dark")}
                  aria-label="Toggle theme"
                  className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-cyan-300/40 hover:bg-white/10"
                >
                  <span className="absolute inset-0 rounded-xl bg-[radial-gradient(circle,rgba(56,189,248,0.12),transparent_60%)] opacity-0 transition hover:opacity-100" />
                  {isDark ? (
                    <HiSun className="text-xl text-yellow-300" />
                  ) : (
                    <HiMoon className="text-xl text-cyan-300" />
                  )}
                </button>
              )}

              <Link
                href="/contact"
                className="btn-shine inline-flex rounded-lg bg-gradient-to-r from-primary to-accent px-6 py-2.5 text-sm font-semibold text-dark-900 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
              >
                Get a Quote
              </Link>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              {mounted && (
                <button
                  onClick={() => setTheme(isDark ? "light" : "dark")}
                  aria-label="Toggle theme"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-white/5 text-[var(--text-muted)] transition-all duration-300 hover:border-cyan-300/40 hover:bg-white/10"
                >
                  {isDark ? (
                    <HiSun className="text-xl text-yellow-300" />
                  ) : (
                    <HiMoon className="text-xl text-cyan-300" />
                  )}
                </button>
              )}

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 text-[var(--text-muted)] transition-colors hover:text-primary"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={{
              duration: 0.25,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] backdrop-blur-xl lg:hidden"
          >
            <div className="space-y-1 px-6 py-6">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className={`block rounded-lg px-4 py-3 transition-colors ${
                  pathname === "/"
                    ? "bg-white/5 text-primary"
                    : "text-[var(--text-muted)] hover:bg-white/5 hover:text-primary"
                }`}
              >
                Home
              </Link>

              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={`flex w-full items-center justify-between rounded-lg px-4 py-3 transition-colors ${
                  isServicesActive
                    ? "bg-white/5 text-primary"
                    : "text-[var(--text-muted)] hover:bg-white/5 hover:text-primary"
                }`}
              >
                <span>Services</span>
                <HiChevronDown
                  className={`transition-transform duration-300 ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="ml-2 mt-1 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-2)]"
                  >
                    <div className="p-2">
                      <Link
                        href="/services"
                        onClick={() => {
                          setMobileOpen(false);
                          setMobileServicesOpen(false);
                        }}
                        className={`block rounded-xl px-3 py-2.5 text-sm transition-colors ${
                          pathname === "/services"
                            ? "bg-white/5 text-primary"
                            : "text-[var(--text-muted)] hover:bg-white/5 hover:text-primary"
                        }`}
                      >
                        All Services
                      </Link>

                      {services.map((service) => (
                        <Link
                          key={service.id}
                          href={`/services/${service.id}`}
                          onClick={() => {
                            setMobileOpen(false);
                            setMobileServicesOpen(false);
                          }}
                          className={`block rounded-xl px-3 py-2.5 text-sm transition-colors ${
                            pathname === `/services/${service.id}`
                              ? "bg-white/5 text-primary"
                              : "text-[var(--text-muted)] hover:bg-white/5 hover:text-primary"
                          }`}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-lg px-4 py-3 transition-colors ${
                    pathname === link.href
                      ? "bg-white/5 text-primary"
                      : "text-[var(--text-muted)] hover:bg-white/5 hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-shine mt-4 block rounded-lg bg-gradient-to-r from-primary to-accent px-6 py-3 text-center font-semibold text-dark-900"
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