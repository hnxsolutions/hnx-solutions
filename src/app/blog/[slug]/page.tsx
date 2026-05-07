"use client";

import { use, useEffect, useState, useMemo, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { getBlogBySlug, getBlogsByCategory, getRelatedBlogs } from "@/data/blogContent";
import { calculateReadTime } from "@/lib/readTimeCalculator";
import TableOfContents from "@/components/TableOfContents";
import ShareButtons from "@/components/ShareButtons";
import BlogEngagement from "@/components/BlogEngagement";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const BLOGS_PER_PAGE = 10;

export default function BlogPage({ params }: PageProps) {
  const { slug } = use(params);
  const blog = getBlogBySlug(slug);
  const [scrollProgress, setScrollProgress] = useState(0);
  const searchParams = useSearchParams();
  const router = useRouter();
  const relatedReturnPath = searchParams.get("returnTo");
  const restoreSlug = searchParams.get("restoreSlug") || slug;
  const shouldInterceptBrowserBack = Boolean(
    relatedReturnPath && relatedReturnPath.startsWith("/blog")
  );

  const backHref = useMemo(() => {
    if (relatedReturnPath && relatedReturnPath.startsWith("/blog")) {
      return relatedReturnPath;
    }

    const backFromQuery = searchParams.get("back");
    if (backFromQuery && backFromQuery.startsWith("/blog")) {
      return backFromQuery;
    }

    if (typeof window !== "undefined") {
      const saved = sessionStorage.getItem("blog:return");
      if (saved) {
        try {
          const parsed = JSON.parse(saved) as { path?: string };
          if (parsed.path && parsed.path.startsWith("/blog")) {
            return parsed.path;
          }
        } catch {
          // ignore
        }
      }
    }

    return "/blog";
  }, [relatedReturnPath, searchParams]);

  // Calculate read time dynamically based on content length
  const calculatedReadTime = useMemo(() => {
    if (!blog) return 0;
    return calculateReadTime(blog.content);
  }, [blog]);

  const getListPathForBlog = (targetSlug: string, category: string) => {
    const categoryBlogs = getBlogsByCategory(category);
    const targetIndex = categoryBlogs.findIndex((item) => item.slug === targetSlug);

    const page = targetIndex >= 0 ? Math.floor(targetIndex / BLOGS_PER_PAGE) + 1 : 1;
    const params = new URLSearchParams();
    params.set("category", category);
    if (page > 1) {
      params.set("page", String(page));
    }

    const query = params.toString();
    return query ? `/blog?${query}` : "/blog";
  };

  const handleRelatedArticleOpen = (targetSlug: string, category: string) => {
    const listPath = getListPathForBlog(targetSlug, category);

    router.push(
      `/blog/${targetSlug}?returnTo=${encodeURIComponent(listPath)}&restoreSlug=${encodeURIComponent(targetSlug)}`
    );
  };

  const saveReturnToListState = useCallback(() => {
    if (!relatedReturnPath || !relatedReturnPath.startsWith("/blog")) {
      return;
    }

    sessionStorage.setItem(
      "blog:return",
      JSON.stringify({
        path: relatedReturnPath,
        targetSlug: restoreSlug,
      })
    );
  }, [relatedReturnPath, restoreSlug]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = windowHeight > 0 ? (window.scrollY / windowHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!shouldInterceptBrowserBack || !relatedReturnPath) {
      return;
    }

    window.history.pushState({ hnxRelatedReturn: true }, "", window.location.href);

    const handlePopState = () => {
      saveReturnToListState();
      router.replace(relatedReturnPath);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [relatedReturnPath, router, saveReturnToListState, shouldInterceptBrowserBack]);

  if (!blog) {
    return (
      <main className="bg-blog-cream-50 text-blog-text min-h-screen flex items-center justify-center pt-12 md:pt-16 w-full max-w-full overflow-x-hidden">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
          <p className="text-blog-text-muted mb-8">The article you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blog-tan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blog-tan-600/50 transition-all"
          >
            <HiArrowLeft /> Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-blog-cream-50 text-blog-text pt-12 md:pt-16 w-full max-w-full overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blog-tan-600 z-50"
        style={{ scaleX: scrollProgress / 100 }}
        initial={{ scaleX: 0 }}
        transition={{ type: "tween", duration: 0 }}
      />

      {/* Header Section - Light Theme */}
      <section className="relative py-12 md:py-16 border-b border-blog-divider">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back Button and Title */}
            <Link
              href={backHref}
              onClick={saveReturnToListState}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-blog-tan-400/10 hover:bg-blog-tan-400/20 text-blog-tan-600 transition-all font-medium text-sm mb-2"
              title="Back to Blog"
            >
              <HiArrowLeft className="text-base" />
              Back
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-blog-text mb-4">
              {blog.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-blog-text-light mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-blog-tan-400 to-blog-tan-600 flex items-center justify-center text-white font-semibold text-sm">
                  {blog.author.charAt(0)}
                </div>
                <span>{blog.author}</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-blog-divider" />
              <time dateTime={blog.createdAt}>
                {new Date(blog.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="w-1 h-1 rounded-full bg-blog-divider" />
              <span className="text-blog-text-light">{calculatedReadTime} min read</span>
            </div>

            {/* Description */}
            <p className="text-base text-blog-text-muted">{blog.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Content Section with Sidebar */}
      <section className="relative py-12 md:py-16">
        <div className="max-w-[min(90vw,1600px)] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="lg:col-span-8"
            >
              {/* Render markdown content */}
              <div className="space-y-6 text-blog-text-muted">
                {blog.content.split("\n\n").map((paragraph, idx) => {
                  if (paragraph.startsWith("##")) {
                    const level = paragraph.match(/^#+/)?.[0].length || 2;
                    const text = paragraph.replace(/^#+\s+/, "");
                    const id = text
                      .toLowerCase()
                      .replace(/[^\w\s-]/g, "")
                      .replace(/\s+/g, "-");

                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        data-toc-id={id}
                      >
                        {level === 2 ? (
                          <h2 className="text-2xl font-bold text-blog-text mt-6 mb-3">
                            {text}
                          </h2>
                        ) : (
                          <h3 className="text-lg font-semibold text-blog-text-light mt-4 mb-2">
                            {text}
                          </h3>
                        )}
                      </motion.div>
                    );
                  }

                  if (paragraph.startsWith("-")) {
                    return (
                      <motion.ul
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-2 list-disc list-inside"
                      >
                        {paragraph.split("\n").map((item, itemIdx) => (
                          <li key={itemIdx} className="text-base text-blog-text-muted">
                            {item.replace(/^-\s+/, "")}
                          </li>
                        ))}
                      </motion.ul>
                    );
                  }

                  return (
                    <motion.p
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-base leading-relaxed text-blog-text-muted"
                    >
                      {paragraph}
                    </motion.p>
                  );
                })}

                {/* Inline Engagement Section - At end of article */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between pt-8 mt-8 border-t border-blog-divider"
                >
                  <div>
                    <p className="text-lg font-semibold text-blog-text">Enjoying this article?</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <BlogEngagement slug={blog.slug} isDarkTheme={false} layout="horizontal" hideComment={true} />
                  </div>
                </motion.div>
              </div>
            </motion.article>

            {/* Sidebar: Table of Contents & Share */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="hidden lg:block lg:col-span-4"
            >
              {/* Sticky container for TOC and Share buttons */}
              <div className="sticky top-24 flex flex-col gap-8">
                {/* Table of Contents */}
                <TableOfContents content={blog.content} />

                {/* Share Buttons */}
                <div className="bg-blog-cream-100 rounded-lg p-5 border border-blog-divider">
                  <ShareButtons slug={blog.slug} title={blog.title} description={blog.description} isDarkTheme={false} />
                </div>
              </div>
            </motion.aside>
          </div>
        </div>

        {/* Mobile Share Buttons */}
        <div className="lg:hidden max-w-3xl mx-auto px-6 mt-8 pt-6 border-t border-blog-divider">
          <div className="bg-blog-cream-100 rounded-lg p-5 border border-blog-divider inline-block">
            <ShareButtons slug={blog.slug} title={blog.title} description={blog.description} isDarkTheme={false} />
          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      <section className="relative py-12 md:py-16 border-t border-blog-divider bg-blog-cream-100/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-8 text-blog-text">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {getRelatedBlogs(slug, blog.category, blog.tags ?? [], 3)
                .map((relatedBlog, idx) => (
                  <motion.div
                    key={relatedBlog.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <button
                      type="button"
                      onClick={() => handleRelatedArticleOpen(relatedBlog.slug, relatedBlog.category)}
                      className="w-full text-left"
                    >
                      <motion.div
                        whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(0,0,0,0.1)" }}
                        className="group p-5 rounded-lg border border-blog-divider bg-white hover:border-blog-tan-400 transition-all cursor-pointer h-full"
                      >
                        <div className="mb-3 inline-block px-3 py-1 rounded-full bg-blog-tan-400/10 text-xs font-medium text-blog-tan-600">
                          {relatedBlog.category.replace(/-/g, " ")}
                        </div>
                        <h3 className="text-lg font-bold mb-2 group-hover:text-blog-tan-600 transition-colors line-clamp-2 text-blog-text">
                          {relatedBlog.title}
                        </h3>
                        <p className="text-sm text-blog-text-muted mb-3 line-clamp-2">
                          {relatedBlog.description}
                        </p>
                        <div className="flex items-center justify-between text-xs text-blog-text-light">
                          <span>{calculateReadTime(relatedBlog.content)} min read</span>
                          <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                      </motion.div>
                    </button>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-12 md:py-16 border-t border-blog-divider bg-blog-cream-100/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between gap-4"
          >
            {/* Back to Blog Button */}
            <Link href={backHref} onClick={saveReturnToListState} className="flex-1">
              <motion.button
                whileHover={{ y: -2 }}
                className="w-full px-6 py-3 bg-white border border-blog-divider rounded-lg hover:border-blog-tan-400 hover:shadow-md transition-all font-semibold text-blog-text inline-flex items-center justify-center gap-2"
              >
                <HiArrowLeft className="text-lg" />
                Back to Blog
              </motion.button>
            </Link>

            {/* Get in Touch Button */}
            <Link href="/contact" className="flex-1">
              <motion.button
                whileHover={{ y: -2 }}
                className="w-full px-6 py-3 bg-blog-tan-600 text-white rounded-lg hover:shadow-lg hover:shadow-blog-tan-600/30 transition-all font-semibold inline-flex items-center justify-center gap-2"
              >
                Get in Touch
                <HiArrowRight className="text-lg" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
