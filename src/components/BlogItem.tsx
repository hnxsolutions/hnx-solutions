"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import { calculateReadTime } from "@/lib/readTimeCalculator";
import BlogEngagement from "./BlogEngagement";
import type { BlogPost } from "@/data/blogs/types";
import { HiArrowRight } from "react-icons/hi2";

interface BlogItemProps {
  blog: BlogPost;
  index?: number;
  isDarkTheme?: boolean;
}

export default function BlogItem({
  blog,
  index = 0,
  isDarkTheme = false,
}: BlogItemProps) {
  const calculatedReadTime = useMemo(
    () => calculateReadTime(blog.content),
    [blog.content]
  );

  const borderColor = isDarkTheme ? "border-white/10" : "border-blog-divider";
  const hoverBgColor = isDarkTheme ? "hover:bg-white/2" : "hover:bg-blog-cream-200/30";
  const titleColor = isDarkTheme ? "text-white" : "text-blog-text";
  const titleHoverColor = isDarkTheme ? "group-hover:text-cyan-300" : "group-hover:text-blog-tan-600";
  const descriptionColor = isDarkTheme ? "text-light-300" : "text-blog-text-muted";
  const metaColor = isDarkTheme ? "text-light-400" : "text-blog-text-light";
  const buttonBgColor = isDarkTheme
    ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-dark-900"
    : "bg-blog-tan-600 text-white";
  const buttonHoverColor = isDarkTheme
    ? "hover:shadow-lg hover:shadow-cyan-400/50"
    : "hover:shadow-lg hover:shadow-blog-tan-600/30";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className={`border-b ${borderColor} py-8 last:border-b-0 ${hoverBgColor} transition-colors px-6 md:px-0 -mx-6 md:mx-0`}
    >
      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        {/* Left: Thumbnail Image */}
        <Link href={`/blog/${blog.slug}`} className="group flex-shrink-0 w-full md:w-48 h-40 md:h-40">
          <div className="relative h-full w-full rounded-lg overflow-hidden bg-gradient-to-br from-blog-tan-400/20 to-blog-tan-600/20 group-hover:scale-105 transition-transform duration-300">
            {blog.image ? (
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 192px"
                onError={() => {
                  // Image failed to load, display placeholder
                }}
              />
            ) : null}
            {/* Fallback gradient when image is missing */}
            <div className="absolute inset-0 bg-gradient-to-br from-blog-tan-300 to-blog-tan-500 flex items-center justify-center text-white opacity-60 group-hover:opacity-70 transition-opacity">
              <div className="text-center px-4">
                <div className="text-2xl font-bold">📰</div>
                <div className="text-xs mt-1 font-medium">Blog Post</div>
              </div>
            </div>
          </div>
        </Link>

        {/* Right: Content Section */}
        <div className="flex-1 min-w-0 flex flex-col justify-between">
          {/* Title and Description - Wrapped in Link */}
          <Link href={`/blog/${blog.slug}`} className="group">
            <div className="mb-4">
              {/* Title */}
              <h2
                className={`text-xl md:text-2xl font-bold ${titleColor} mb-3 ${titleHoverColor} transition-colors leading-tight`}
              >
                {blog.title}
              </h2>

              {/* Description */}
              <p
                className={`${descriptionColor} text-base leading-relaxed mb-4 line-clamp-2`}
              >
                {blog.description}
              </p>

              {/* Meta info: author, date, read time */}
              <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm">
                <span className={`font-medium ${metaColor}`}>{blog.author}</span>
                <span className={`w-1 h-1 rounded-full ${isDarkTheme ? "bg-light-400" : "bg-blog-divider"}`} />
                <time dateTime={blog.createdAt} className={metaColor}>
                  {new Date(blog.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
                <span className={`w-1 h-1 rounded-full ${isDarkTheme ? "bg-light-400" : "bg-blog-divider"}`} />
                <span className={metaColor}>{calculatedReadTime} min read</span>
              </div>
            </div>
          </Link>

          {/* Bottom Row: Continue Reading Button + Engagement Icons */}
          <div className="flex items-center justify-between gap-4 mt-4">
            {/* Continue Reading Button - Wrapped in Link */}
            <Link href={`/blog/${blog.slug}`}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm ${buttonBgColor} transition-all ${buttonHoverColor} flex-shrink-0`}
              >
                Continue Reading
                <HiArrowRight className="text-base" />
              </motion.button>
            </Link>

            {/* Engagement Icons (Like & Comment) - NOT in Link */}
            <div className="flex-shrink-0">
              <BlogEngagement
                slug={blog.slug}
                isDarkTheme={isDarkTheme}
                layout="horizontal"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
