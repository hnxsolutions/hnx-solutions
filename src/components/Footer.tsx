"use client";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

const footerLinks = {
  Services: [
    { name: "Web Development", href: "/services" },
    { name: "Mobile Apps", href: "/mobile-apps" },
    { name: "AI & Automation", href: "/ai-automation" },
    { name: "Cloud Solutions", href: "/services" },
    { name: "UI/UX Design", href: "/services" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ],
  Resources: [
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};

const socials = [
  { icon: FiGithub, href: "#", label: "GitHub", tooltip: "Star us on GitHub", bg: "bg-white/10 text-white shadow-[0_0_12px_rgba(255,255,255,0.15)]", hoverBg: "hover:bg-white/20 hover:shadow-[0_0_24px_rgba(255,255,255,0.25)]" },
  { icon: FiLinkedin, href: "#", label: "LinkedIn", tooltip: "Connect on LinkedIn", bg: "bg-[#0a66c2]/20 text-[#5b9bd5] shadow-[0_0_12px_rgba(10,102,194,0.2)]", hoverBg: "hover:bg-[#0a66c2]/30 hover:shadow-[0_0_24px_rgba(10,102,194,0.4)]" },
  { icon: FiInstagram, href: "#", label: "Instagram", tooltip: "Follow on Instagram", bg: "bg-[#e1306c]/15 text-[#e1306c] shadow-[0_0_12px_rgba(225,48,108,0.2)]", hoverBg: "hover:bg-[#e1306c]/25 hover:shadow-[0_0_24px_rgba(225,48,108,0.4)]" },
];

export default function Footer() {
  return (
    <footer className="relative pb-6 pt-8 w-full bg-dark-900 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-dark-900 text-lg shadow-[0_0_20px_rgba(77,208,225,0.2)]">
                H
              </div>
              <span className="text-xl font-bold">
                HNX<span className="text-primary"> Technologies</span>
              </span>
            </Link>
            <p className="text-sm text-light-300 leading-relaxed max-w-sm mb-6">
              Crafting next-generation web platforms, mobile apps, and
              AI-powered systems that drive real business results. Based in
              Mohali, Punjab, serving clients globally.
            </p>
            <div className="inline-flex items-center gap-4 px-4 py-2.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] shadow-[0_0_30px_rgba(77,208,225,0.06)]">
              <span className="text-xs text-primary font-bold tracking-widest uppercase">Follow us</span>
              <div className="w-px h-5 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className={`group relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110 ${s.bg} ${s.hoverBg}`}
                >
                  <s.icon size={16} className="transition-transform duration-300 group-hover:scale-110" />
                  <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-white text-dark-900 text-xs font-semibold whitespace-nowrap opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 shadow-lg">
                    {s.tooltip}
                    <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white" />
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-light-100 mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(77,208,225,0.5)]" />
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-light-300 hover:text-primary hover:translate-x-1 transition-all duration-200 inline-block"
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
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-light-300">
            © {new Date().getFullYear()} HNX Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
