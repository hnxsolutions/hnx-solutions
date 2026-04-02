"use client";

import { useState, useSyncExternalStore, useEffect, useRef } from "react";
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
  const mobileServicesRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest("[data-services-dropdown]")) {
        setDesktopServicesOpen(false);
      }
    };

    if (desktopServicesOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [desktopServicesOpen]);

  useEffect(() => {
    const handleMobileOutsideClick = (event: MouseEvent) => {
      if (!mobileServicesOpen) return;
      const target = event.target as Node;
      if (
        mobileServicesRef.current &&
        !mobileServicesRef.current.contains(target)
      ) {
        setMobileServicesOpen(false);
      }
    };

    if (mobileServicesOpen) {
      document.addEventListener("mousedown", handleMobileOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleMobileOutsideClick);
    };
  }, [mobileServicesOpen]);

  useEffect(() => {
    const handleMobileMenuOutsideClick = (event: MouseEvent) => {
      if (!mobileOpen) return;
      const target = event.target as Node;

      if (mobileMenuRef.current && !mobileMenuRef.current.contains(target)) {
        setMobileOpen(false);
        setMobileServicesOpen(false);
      }
    };

    if (mobileOpen) {
      document.addEventListener("mousedown", handleMobileMenuOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleMobileMenuOutsideClick);
    };
  }, [mobileOpen]);

  const isDark = theme === "dark";
  const isServicesActive =
    pathname === "/services" || pathname.startsWith("/services/");

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 sm:px-6">
      <AnimatePresence>
        {desktopServicesOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="pointer-events-none fixed inset-x-0 top-22 bottom-0 z-30 bg-white/20 backdrop-blur-sm dark:bg-black/30 sm:top-24"
          />
        )}
      </AnimatePresence>

      <div
        className={`relative z-50 mx-auto max-w-7xl rounded-full border border-(--border) bg-white/70 shadow-black/10 backdrop-blur-xl dark:bg-dark-800/80 ${
          scrolled ? "shadow-xl" : "shadow-lg"
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex h-18 items-center justify-between sm:h-20">
            <Link
              href="/"
              className="group flex min-w-0 items-center gap-2 sm:gap-3"
            >
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-(--border) bg-white/5 shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary/20 sm:h-12 sm:w-12 md:h-14 md:w-14">
                <Image
                  src="/hnxlogo.png"
                  alt="HNX Technologies Logo"
                  fill
                  priority
                  sizes="(max-width: 640px) 44px, (max-width: 768px) 48px, 56px"
                  className="object-contain p-1"
                />
              </div>

              <div className="min-w-0 leading-tight">
                <span className="block truncate text-base font-bold tracking-tight text-(--text) sm:text-lg md:text-xl">
                  HNX<span className="text-primary"> Technologies</span>
                </span>
                <span className="hidden text-xs text-(--text-soft) sm:block">
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
                      : "text-(--text-soft) hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div
                data-services-dropdown
                className="relative"
                onMouseEnter={() => setDesktopServicesOpen(true)}
                onMouseLeave={() => setDesktopServicesOpen(false)}
              >
                <button
                  type="button"
                  aria-expanded={desktopServicesOpen}
                  className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-colors hover:bg-white/5 ${
                    isServicesActive
                      ? "font-medium text-primary"
                      : "text-(--text-soft) hover:text-primary"
                  }`}
                >
                  Services
                  <HiChevronDown
                    className={`text-base transition-transform duration-200 ${
                      desktopServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div className="absolute left-1/2 top-full h-4 w-40 -translate-x-1/2" />

                <AnimatePresence>
                  {desktopServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{
                        duration: 0.22,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute left-1/2 top-full z-60 mt-3 w-90 -translate-x-1/2 overflow-hidden rounded-[26px] border border-white/20 bg-white/88 p-3 shadow-[0_24px_70px_rgba(15,23,42,0.18)] backdrop-blur-2xl dark:border-white/10 dark:bg-[#0b1220]/90 dark:shadow-[0_24px_80px_rgba(0,0,0,0.58)]"
                    >
                      <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />
                      <div className="pointer-events-none absolute left-0 top-12 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
                      <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 rounded-full bg-accent/10 blur-2xl" />

                      <div className="relative mb-3 flex items-center justify-between px-1">
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-(--text-soft)">
                            Our Services
                          </p>
                          <p className="mt-1 text-[11px] text-(--text-soft)">
                            Premium digital solutions
                          </p>
                        </div>

                        <Link
                          href="/services"
                          onClick={() => setDesktopServicesOpen(false)}
                          className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold transition-all duration-200 ${
                            pathname === "/services"
                              ? "border-primary/30 bg-primary/12 text-primary shadow-[0_0_16px_rgba(59,130,246,0.18)]"
                              : "border-black/8 bg-black/3 text-(--text-soft) hover:border-primary/25 hover:bg-primary/8 hover:text-primary dark:border-white/10 dark:bg-white/3"
                          }`}
                        >
                          View All
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {services.map((service, index) => {
                          const active = pathname === `/services/${service.id}`;

                          return (
                            <motion.div
                              key={service.id}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 6 }}
                              transition={{
                                duration: 0.18,
                                delay: index * 0.015,
                              }}
                            >
                              <Link
                                href={`/services/${service.id}`}
                                onClick={() => setDesktopServicesOpen(false)}
                                className={`group relative flex min-h-13.5 items-center overflow-hidden rounded-2xl border px-3.5 py-3 transition-all duration-200 ${
                                  active
                                    ? "border-primary/30 bg-primary/12 text-primary shadow-[0_10px_24px_rgba(59,130,246,0.14)]"
                                    : "border-black/6 bg-black/3 text-(--text-muted) hover:-translate-y-0.5 hover:border-primary/20 hover:bg-primary/[0.07] hover:text-primary hover:shadow-[0_12px_26px_rgba(15,23,42,0.10)] dark:border-white/8 dark:bg-white/3 dark:hover:bg-white/6"
                                }`}
                              >
                                <span
                                  className={`absolute left-0 top-2 bottom-2 w-0.75 rounded-r-full transition-all duration-200 ${
                                    active
                                      ? "bg-primary shadow-[0_0_12px_rgba(59,130,246,0.45)]"
                                      : "bg-transparent group-hover:bg-primary/60 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.32)]"
                                  }`}
                                />
                                <span className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 bg-linear-to-r from-primary/[0.07] via-transparent to-transparent" />
                                <span className="relative text-[12.5px] font-semibold leading-5 tracking-[0.01em]">
                                  {service.title}
                                </span>
                              </Link>
                            </motion.div>
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
                      : "text-(--text-soft) hover:text-primary"
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
                  className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-(--border) bg-white/5 text-(--text-muted) backdrop-blur-sm transition-all duration-300 hover:border-cyan-300/40 hover:bg-white/10"
                >
                  <span className="absolute inset-0 rounded-xl bg-[radial-gradient(circle,rgba(56,189,248,0.12),transparent_60%)] opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  {isDark ? (
                    <HiSun className="relative z-10 text-[18px] text-yellow-300" />
                  ) : (
                    <HiMoon className="relative z-10 text-[18px] text-cyan-300" />
                  )}
                </button>
              )}

              <Link
                href="/contact"
                className="btn-shine inline-flex rounded-lg bg-linear-to-r from-primary to-accent px-6 py-2.5 text-sm font-semibold text-dark-900 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
              >
                Get a Quote
              </Link>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              {mounted && (
                <button
                  onClick={() => setTheme(isDark ? "light" : "dark")}
                  aria-label="Toggle theme"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-(--border) bg-white/5 text-(--text-muted) transition-all duration-300 hover:border-cyan-300/40 hover:bg-white/10"
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
                className="p-2 text-(--text-muted) transition-colors hover:text-primary"
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
          <>
            <motion.button
              type="button"
              aria-label="Close mobile menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => {
                setMobileOpen(false);
                setMobileServicesOpen(false);
              }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[1px] dark:bg-black/35 lg:hidden"
            />

            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{
                duration: 0.28,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative z-50 mx-auto mt-3 max-w-7xl overflow-hidden rounded-3xl border border-(--border) bg-(--surface) backdrop-blur-xl lg:hidden"
            >
              <div className="space-y-1 px-6 py-6">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-lg px-4 py-3 transition-colors ${
                    pathname === "/"
                      ? "bg-white/5 text-primary"
                      : "text-(--text-muted) hover:bg-white/5 hover:text-primary"
                  }`}
                >
                  Home
                </Link>

                <div ref={mobileServicesRef} className="relative">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className={`flex w-full items-center justify-between rounded-lg px-4 py-3 transition-colors ${
                      isServicesActive
                        ? "bg-white/5 text-primary"
                        : "text-(--text-muted) hover:bg-white/5 hover:text-primary"
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
                        initial={{ opacity: 0, y: -8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.98 }}
                        transition={{
                          duration: 0.22,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative z-20 mt-2 overflow-hidden"
                      >
                        <div className="mx-auto w-full max-w-[20rem] overflow-hidden rounded-2xl border border-(--border) bg-(--surface-2) shadow-[0_18px_40px_rgba(15,23,42,0.14)] backdrop-blur-xl">
                          <div className="p-2">
                            <Link
                              href="/services"
                              onClick={() => {
                                setMobileOpen(false);
                                setMobileServicesOpen(false);
                              }}
                              className={`block rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                                pathname === "/services"
                                  ? "bg-white/6 text-primary"
                                  : "text-(--text-muted) hover:bg-white/5 hover:text-primary"
                              }`}
                            >
                              All Services
                            </Link>
                          </div>

                          <div className="border-t border-(--border)">
                            <div className="max-h-[22vh] overflow-y-auto p-2">
                              {services.map((service) => (
                                <Link
                                  key={service.id}
                                  href={`/services/${service.id}`}
                                  onClick={() => {
                                    setMobileOpen(false);
                                    setMobileServicesOpen(false);
                                  }}
                                  className={`mt-1 block rounded-xl px-3 py-2.5 text-sm transition-all first:mt-0 ${
                                    pathname === `/services/${service.id}`
                                      ? "bg-white/6 text-primary"
                                      : "text-(--text-muted) hover:bg-white/5 hover:text-primary"
                                  }`}
                                >
                                  {service.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {navLinks.slice(1).map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded-lg px-4 py-3 transition-colors ${
                      pathname === link.href
                        ? "bg-white/5 text-primary"
                        : "text-(--text-muted) hover:bg-white/5 hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-shine mt-4 block rounded-lg bg-linear-to-r from-primary to-accent px-6 py-3 text-center font-semibold text-dark-900"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}