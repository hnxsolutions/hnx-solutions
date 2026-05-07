"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

const footerLinks = {
  Services: [
    { name: "Custom CRM Systems", href: "/crm-systems" },
    { name: "Workflow Automation", href: "/workflow-lab" },
    { name: "AI Automation", href: "/services/ai-automation" },
    { name: "SaaS Development", href: "/services/saas-development" },
    { name: "Web Development", href: "/services/web-development" },
    { name: "Mobile App Development", href: "/services/mobile-apps" },
  ],
  "Products/Solutions": [
    { name: "HNX CRM Systems", href: "/crm-systems" },
    { name: "HNX Workflow Lab", href: "/workflow-lab" },
    { name: "Industry CRM Systems", href: "/industries" },
    { name: "AI Automation", href: "/services/ai-automation" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ],
  Resources: [
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};

const socials = [
  { icon: FiGithub, href: "#", label: "GitHub" },
  { icon: FiLinkedin, href: "#", label: "LinkedIn" },
  { icon: FiInstagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-(--border) bg-(--bg) pb-2 pt-8 text-(--text)">
      <div className="mx-auto max-w-[min(95vw,1600px)] px-4 pb-0 pt-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-primary to-accent text-lg font-bold text-dark-900 shadow-[0_0_20px_rgba(77,208,225,0.2)]">
                H
              </div>
              <span className="text-xl font-bold text-(--text)">
                HNX<span className="text-primary"> Technologies</span>
              </span>
            </Link>

            <p className="mb-6 max-w-sm text-sm leading-relaxed text-(--text-soft)">
              Crafting next-generation web platforms, mobile apps, and
              AI-powered systems that drive real business results. Based in
              Mohali, Punjab, serving clients globally.
              <br />
              We blend creativity with technology to deliver scalable, secure,
              and innovative solutions.
              <br />
              Partner with us for digital transformation, automation, and growth
              in a rapidly evolving world.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-(--text)">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(77,208,225,0.5)]" />
                {title}
              </h4>

              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="inline-block text-sm text-(--text-soft) transition-all duration-200 hover:translate-x-1 hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-(--border) pt-8">
          <div className="mb-2 flex justify-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-(--border) bg-white/50 text-(--text) transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-primary dark:bg-white/5"
                style={{
                  boxShadow: "0 0 12px 1px rgba(255,255,255,0.12)",
                }}
              >
                <s.icon
                  size={20}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>
            ))}
          </div>

          <p className="text-center text-sm text-(--text-soft)">
            &copy; 2026 HNX Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
