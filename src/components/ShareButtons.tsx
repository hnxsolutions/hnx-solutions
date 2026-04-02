"use client";

import { motion } from "framer-motion";
import { HiOutlineShare, HiX as XIcon } from "react-icons/hi";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { useMemo, useState } from "react";

interface ShareButtonsProps {
  slug: string;
  title: string;
  description?: string;
  isDarkTheme?: boolean;
}

export default function ShareButtons({
  slug,
  title,
  description = "",
  isDarkTheme = true,
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareLinks = useMemo(() => {
    if (typeof window === "undefined") {
      return {
        twitter: "",
        linkedin: "",
        facebook: "",
        baseUrl: "",
      };
    }

    const baseUrl = `${window.location.origin}/blog/${slug}`;
    const shareText = `${title} - ${description}`;
    const encodedUrl = encodeURIComponent(baseUrl);
    const encodedText = encodeURIComponent(shareText);

    return {
      twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      baseUrl,
    };
  }, [slug, title, description]);

  const handleCopyLink = async () => {
    try {
      if (!shareLinks.baseUrl) return;
      await navigator.clipboard.writeText(shareLinks.baseUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const buttons = [
    {
      name: "Twitter",
      icon: XIcon,
      href: shareLinks.twitter,
      color: "hover:text-white hover:bg-black/20",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: shareLinks.linkedin,
      color: "hover:text-[#0A66C2] hover:bg-[#0A66C2]/10",
    },
    {
      name: "Facebook",
      icon: FaFacebook,
      href: shareLinks.facebook,
      color: "hover:text-[#1877F2] hover:bg-[#1877F2]/10",
    },
  ];

  return (
    <div className="flex flex-col gap-3">
      <p
        className={`text-xs font-medium uppercase tracking-wider ${
          isDarkTheme ? "text-light-400" : "text-blog-text-light"
        }`}
      >
        Share
      </p>

      <div className="hidden flex-col gap-2 md:flex">
        {buttons.map((button) => {
          const Icon = button.icon;
          const borderColor = isDarkTheme
            ? "border-white/10"
            : "border-blog-divider";

          return (
            <motion.a
              key={button.name}
              href={button.href || "#"}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              className={`flex items-center gap-3 rounded-lg border p-2.5 transition-all ${borderColor} ${button.color} ${
                button.href ? "" : "pointer-events-none opacity-60"
              }`}
              title={`Share on ${button.name}`}
            >
              <Icon className="shrink-0 text-lg" />
              <span className="hidden text-sm font-medium lg:inline">
                {button.name}
              </span>
            </motion.a>
          );
        })}

        <motion.button
          onClick={handleCopyLink}
          whileHover={{ x: 4 }}
          className="flex items-center gap-3 rounded-lg border border-white/10 p-2.5 transition-all hover:bg-white/10 hover:text-white"
          title="Copy link"
          type="button"
        >
          <HiOutlineShare className="shrink-0 text-lg" />
          <span className="hidden text-sm font-medium lg:inline">
            {copied ? "Copied!" : "Copy"}
          </span>
        </motion.button>
      </div>

      <div className="flex gap-2 md:hidden">
        {buttons.map((button) => {
          const Icon = button.icon;
          return (
            <motion.a
              key={button.name}
              href={button.href || "#"}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.95 }}
              className={`flex items-center justify-center rounded-lg border border-white/10 p-2.5 transition-all ${button.color} ${
                button.href ? "" : "pointer-events-none opacity-60"
              }`}
              title={`Share on ${button.name}`}
            >
              <Icon className="text-lg" />
            </motion.a>
          );
        })}

        <motion.button
          onClick={handleCopyLink}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center rounded-lg border border-white/10 p-2.5 transition-all hover:bg-white/10 hover:text-white"
          title="Copy link"
          type="button"
        >
          <HiOutlineShare className="text-lg" />
        </motion.button>
      </div>
    </div>
  );
}