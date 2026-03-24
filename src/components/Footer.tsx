"use client";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";

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
  { icon: FiTwitter, href: "#", label: "Twitter" },
  { icon: FiInstagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-dark-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-dark-900 text-lg">
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
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-light-300 hover:text-primary hover:border-primary/30 transition-all"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-light-100 mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-light-300 hover:text-primary transition-colors"
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
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-light-300">
            © {new Date().getFullYear()} HNX Technologies. All rights reserved.
          </p>
          <p className="text-sm text-light-300">
            Built with <span className="text-primary">Next.js</span>,{" "}
            <span className="text-primary">React</span> &{" "}
            <span className="text-primary">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
