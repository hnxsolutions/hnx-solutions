"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { calculateReadTime } from "@/lib/readTimeCalculator";
import BlogEngagement from "./BlogEngagement";
import type { BlogPost } from "@/data/blogs/types";
import { HiArrowRight } from "react-icons/hi2";

interface BlogItemProps {
  blog: BlogPost;
  index?: number;
  isDarkTheme?: boolean;
  activeCategory?: string | null;
  currentPage?: number;
}

export default function BlogItem({
  blog,
  index = 0,
  isDarkTheme = false,
  activeCategory = null,
  currentPage = 1,
}: BlogItemProps) {
  const [imageError, setImageError] = useState(false);

  const calculatedReadTime = useMemo(
    () => calculateReadTime(blog.content),
    [blog.content]
  );

  const borderColor = isDarkTheme ? "border-white/10" : "border-blog-divider";
  const hoverBgColor = isDarkTheme
    ? "hover:bg-white/2"
    : "hover:bg-blog-cream-200/30";
  const titleColor = isDarkTheme ? "text-white" : "text-blog-text";
  const titleHoverColor = isDarkTheme
    ? "group-hover:text-cyan-300"
    : "group-hover:text-blog-tan-600";
  const descriptionColor = isDarkTheme ? "text-light-300" : "text-blog-text-muted";
  const metaColor = isDarkTheme ? "text-light-400" : "text-blog-text-light";
  const buttonBgColor = isDarkTheme
    ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-dark-900"
    : "bg-blog-tan-600 text-white";
  const buttonHoverColor = isDarkTheme
    ? "hover:shadow-lg hover:shadow-cyan-400/50"
    : "hover:shadow-lg hover:shadow-blog-tan-600/30";

  const getListPath = () => {
    const params = new URLSearchParams(window.location.search);

    if (activeCategory) {
      params.set("category", activeCategory);
    } else {
      params.delete("category");
    }

    if (currentPage > 1) {
      params.set("page", String(currentPage));
    } else {
      params.delete("page");
    }

    const query = params.toString();
    return query ? `${window.location.pathname}?${query}` : window.location.pathname;
  };

  const detailHref =
    typeof window === "undefined"
      ? `/blog/${blog.slug}`
      : `/blog/${blog.slug}?back=${encodeURIComponent(getListPath())}`;

  const saveReturnState = () => {
    const path = getListPath();

    sessionStorage.setItem(
      "blog:return",
      JSON.stringify({
        path,
        scrollY: window.scrollY,
      })
    );
  };

  const showImage = Boolean(blog.image) && !imageError;

  return (
    <motion.article
      data-blog-slug={blog.slug}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      viewport={{ once: true, margin: "120px 0px" }}
      className={`border-b ${borderColor} last:border-b-0 -mx-6 px-6 py-8 transition-colors md:mx-0 md:px-0 ${hoverBgColor}`}
    >
      <div className="flex flex-col gap-6 md:flex-row md:gap-10">
        <Link
          href={detailHref}
          onClick={saveReturnState}
          className="group h-40 w-full shrink-0 md:h-40 md:w-48"
        >
          <div className="relative h-full w-full overflow-hidden rounded-lg bg-linear-to-br from-blog-tan-400/20 to-blog-tan-600/20">
            {showImage ? (
              <>
                <Image
                  src={blog.image!}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 192px"
                  priority={index < 2}
                  loading={index < 2 ? "eager" : "lazy"}
                  onError={() => setImageError(true)}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/12 via-transparent to-transparent" />
              </>
            ) : null}

            {!showImage && (
              <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-blog-tan-300 to-blog-tan-500 text-white">
                <div className="px-4 text-center">
                  <div className="text-2xl font-bold">📰</div>
                  <div className="mt-1 text-xs font-medium">Blog Post</div>
                </div>
              </div>
            )}
          </div>
        </Link>

        <div className="flex min-w-0 flex-1 flex-col justify-between">
          <Link href={detailHref} onClick={saveReturnState} className="group">
            <div className="mb-4">
              <h2
                className={`mb-3 text-xl font-bold leading-tight transition-colors md:text-2xl ${titleColor} ${titleHoverColor}`}
              >
                {blog.title}
              </h2>

              <p
                className={`${descriptionColor} mb-4 line-clamp-2 text-base leading-relaxed`}
              >
                {blog.description}
              </p>

              <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm">
                <span className={`font-medium ${metaColor}`}>{blog.author}</span>

                <span
                  className={`h-1 w-1 rounded-full ${
                    isDarkTheme ? "bg-light-400" : "bg-blog-divider"
                  }`}
                />

                <time dateTime={blog.createdAt} className={metaColor}>
                  {new Date(blog.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>

                <span
                  className={`h-1 w-1 rounded-full ${
                    isDarkTheme ? "bg-light-400" : "bg-blog-divider"
                  }`}
                />

                <span className={metaColor}>{calculatedReadTime} min read</span>
              </div>
            </div>
          </Link>

          <div className="mt-4 flex items-center justify-between gap-4">
            <Link href={detailHref} onClick={saveReturnState}>
              <motion.button
                type="button"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={`inline-flex shrink-0 items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all ${buttonBgColor} ${buttonHoverColor}`}
              >
                Continue Reading
                <HiArrowRight className="text-base" />
              </motion.button>
            </Link>

            <div className="shrink-0">
              <BlogEngagement
                slug={blog.slug}
                isDarkTheme={isDarkTheme}
                layout="horizontal"
                lazy={true}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}