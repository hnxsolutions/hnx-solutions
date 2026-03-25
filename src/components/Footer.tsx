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
  { icon: FiGithub, href: "#", label: "GitHub" },
  { icon: FiLinkedin, href: "#", label: "LinkedIn" },
  { icon: FiInstagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="relative pb-2 pt-8 w-full bg-dark-900 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 pb-0 pt-14">
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
              Mohali, Punjab, serving clients globally.<br />
              We blend creativity with technology to deliver scalable, secure, and innovative solutions.<br />
              Partner with us for digital transformation, automation, and growth in a rapidly evolving world.
            </p>
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
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col items-center gap-4">
          <div className="flex justify-center mb-2 gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="group relative w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                style={{ boxShadow: '0 0 12px 1px rgba(255,255,255,0.25)' }}
              >
                <s.icon size={20} className="transition-transform duration-300 group-hover:scale-110 text-white" />
              </a>
            ))}
          </div>
          <p className="text-sm text-light-300 text-center">
            © 2025 HNX Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
