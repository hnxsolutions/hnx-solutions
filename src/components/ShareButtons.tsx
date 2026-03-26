"use client";

import { motion } from "framer-motion";
import {
  HiOutlineShare,
  HiX as XIcon,
} from "react-icons/hi";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { useState, useEffect } from "react";

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
  const [shareLinks, setShareLinks] = useState({
    twitter: "",
    linkedin: "",
    facebook: "",
  });

  // Construct share URLs only on client side to avoid hydration mismatch
  useEffect(() => {
    const baseUrl = `${window.location.origin}/blog/${slug}`;
    const shareText = `${title} - ${description}`;
    const encodedUrl = encodeURIComponent(baseUrl);
    const encodedText = encodeURIComponent(shareText);

    setShareLinks({
      twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, title, description]);

  const handleCopyLink = async () => {
    try {
      const baseUrl = `${window.location.origin}/blog/${slug}`;
      await navigator.clipboard.writeText(baseUrl);
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
      <p className={`text-xs uppercase tracking-wider font-medium ${
        isDarkTheme ? "text-light-400" : "text-blog-text-light"
      }`}>
        Share
      </p>

      {/* Desktop layout - vertical */}
      <div className="hidden md:flex flex-col gap-2">
        {buttons.map((button) => {
          const Icon = button.icon;
          const borderColor = isDarkTheme ? "border-white/10" : "border-blog-divider";
          return (
            <motion.a
              key={button.name}
              href={button.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              className={`flex items-center gap-3 p-2.5 rounded-lg border transition-all ${borderColor} ${button.color}`}
              title={`Share on ${button.name}`}
            >
              <Icon className="text-lg flex-shrink-0" />
              <span className="text-sm font-medium hidden lg:inline">
                {button.name}
              </span>
            </motion.a>
          );
        })}

        {/* Copy Link button */}
        <motion.button
          onClick={handleCopyLink}
          whileHover={{ x: 4 }}
          className="flex items-center gap-3 p-2.5 rounded-lg border border-white/10 transition-all hover:text-white hover:bg-white/10"
          title="Copy link"
        >
          <HiOutlineShare className="text-lg flex-shrink-0" />
          <span className="text-sm font-medium hidden lg:inline">
            {copied ? "Copied!" : "Copy"}
          </span>
        </motion.button>
      </div>

      {/* Mobile layout - horizontal */}
      <div className="md:hidden flex gap-2">
        {buttons.map((button) => {
          const Icon = button.icon;
          return (
            <motion.a
              key={button.name}
              href={button.href}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.95 }}
              className={`flex items-center justify-center p-2.5 rounded-lg border border-white/10 transition-all ${button.color}`}
              title={`Share on ${button.name}`}
            >
              <Icon className="text-lg" />
            </motion.a>
          );
        })}

        {/* Copy Link button */}
        <motion.button
          onClick={handleCopyLink}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center p-2.5 rounded-lg border border-white/10 transition-all hover:text-white hover:bg-white/10"
          title="Copy link"
        >
          <HiOutlineShare className="text-lg" />
        </motion.button>
      </div>
    </div>
  );
}
