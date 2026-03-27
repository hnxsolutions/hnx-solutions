"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import CurvedCategoryTabs from "@/components/CurvedCategoryTabs";
import BlogList from "@/components/BlogList";
import Pagination from "@/components/Pagination";
import { getPaginatedBlogs, getAllBlogs } from "@/data/blogs/loader";
import type { BlogCategory, BlogPost } from "@/data/blogs/types";

const BLOGS_PER_PAGE = 10;
const BLOG_CATEGORIES: BlogCategory[] = [
  "web-development",
  "saas-development",
  "mobile-apps",
  "crm-salesforce",
  "devops",
  "ai-automation",
  "cloud-solutions",
  "ui-ux-design",
  "digital-growth",
];

function parseCategoryFromQuery(value: string | null): BlogCategory | null {
  if (!value) {
    return null;
  }

  return BLOG_CATEGORIES.includes(value as BlogCategory)
    ? (value as BlogCategory)
    : null;
}

function parsePageFromQuery(value: string | null): number {
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed < 1) {
    return 1;
  }

  return Math.floor(parsed);
}

function scrollToBlogTop(behavior: ScrollBehavior = "auto") {
  const topAnchor = document.getElementById("blog-page-top");
  if (topAnchor) {
    const absoluteTop = window.scrollY + topAnchor.getBoundingClientRect().top;
    window.scrollTo({ top: Math.max(0, absoluteTop), behavior });
    return;
  }

  window.scrollTo({ top: 0, behavior });
}

export default function BlogPage() {
  const [categoryFromQuery, setCategoryFromQuery] = useState<BlogCategory | null>(null);
  const [pageFromQuery, setPageFromQuery] = useState(1);
  const [activeCategory, setActiveCategory] = useState<BlogCategory | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const syncCategoryFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      setCategoryFromQuery(parseCategoryFromQuery(params.get("category")));
      setPageFromQuery(parsePageFromQuery(params.get("page")));
    };

    syncCategoryFromUrl();
    window.addEventListener("popstate", syncCategoryFromUrl);

    return () => {
      window.removeEventListener("popstate", syncCategoryFromUrl);
    };
  }, []);

  useEffect(() => {
    setActiveCategory((prev) => (prev === categoryFromQuery ? prev : categoryFromQuery));
    setCurrentPage((prev) => (prev === pageFromQuery ? prev : pageFromQuery));

    requestAnimationFrame(() => {
      scrollToBlogTop("auto");
      setTimeout(() => scrollToBlogTop("auto"), 80);
    });
  }, [categoryFromQuery, pageFromQuery]);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    const saved = sessionStorage.getItem("blog:return");
    if (!saved) {
      return;
    }

    try {
      const parsed = JSON.parse(saved) as {
        path?: string;
        scrollY?: number;
        targetSlug?: string;
      };

      const currentPath = `${window.location.pathname}${window.location.search}`;
      if (parsed.path !== currentPath) {
        return;
      }

      if (parsed.targetSlug) {
        const selector = `[data-blog-slug="${parsed.targetSlug}"]`;
        const restoreTargetCard = (attempt: number = 0) => {
          const targetCard = document.querySelector(selector);

          if (targetCard instanceof HTMLElement) {
            targetCard.scrollIntoView({ block: "center", behavior: "auto" });
            targetCard.classList.remove("blog-return-focus");
            targetCard.classList.add("blog-return-focus");
            setTimeout(() => {
              targetCard.scrollIntoView({ block: "center", behavior: "auto" });
            }, 80);
            setTimeout(() => {
              targetCard.classList.remove("blog-return-focus");
            }, 2100);
            return;
          }

          if (attempt < 6) {
            setTimeout(() => restoreTargetCard(attempt + 1), 120);
          }
        };

        requestAnimationFrame(() => {
          restoreTargetCard();
        });
        return;
      }

      if (Number.isFinite(parsed.scrollY)) {
        const targetY = Math.max(0, Number(parsed.scrollY));
        requestAnimationFrame(() => {
          window.scrollTo({ top: targetY, behavior: "auto" });
          setTimeout(() => window.scrollTo({ top: targetY, behavior: "auto" }), 80);
        });
      }
    } catch {
      // Ignore malformed session data
    } finally {
      sessionStorage.removeItem("blog:return");
    }
  }, [isLoading, activeCategory, currentPage]);

  // Load blogs when category or page changes
  useEffect(() => {
    const loadBlogs = async () => {
      try {
        setIsLoading(true);
        setError(null);

        if (activeCategory) {
          // Load paginated blogs for selected category
          const response = await getPaginatedBlogs(
            activeCategory,
            currentPage,
            BLOGS_PER_PAGE
          );
          setBlogs(response.blogs);
          setTotalPages(response.pagination.totalPages);
        } else {
          // Load all blogs when no category is selected
          const allBlogsData = await getAllBlogs();
          const flattenedBlogs = Object.values(allBlogsData)
            .flat()
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
          
          const totalPages = Math.ceil(flattenedBlogs.length / BLOGS_PER_PAGE);
          const startIdx = (currentPage - 1) * BLOGS_PER_PAGE;
          const paginatedBlogs = flattenedBlogs.slice(startIdx, startIdx + BLOGS_PER_PAGE);
          
          setBlogs(paginatedBlogs);
          setTotalPages(totalPages);
        }
      } catch (err) {
        console.error("Failed to load blogs:", err);
        setError("Failed to load blogs. Please try again.");
        setBlogs([]);
        setTotalPages(0);
      } finally {
        setIsLoading(false);
      }
    };

    loadBlogs();
  }, [activeCategory, currentPage]);

  // Reset to page 1 when category changes
  const handleCategoryChange = (category: BlogCategory | null) => {
    setActiveCategory(category);
    setCurrentPage(1);
    scrollToBlogTop("smooth");

    const params = new URLSearchParams(window.location.search);
    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }
    params.delete("page");

    const query = params.toString();
    const nextUrl = query
      ? `${window.location.pathname}?${query}`
      : window.location.pathname;

    window.history.replaceState({}, "", nextUrl);
    setCategoryFromQuery(category);
  };

  const handlePageChange = (page: number) => {
    if (page === currentPage) {
      return;
    }

    setCurrentPage(page);
    const params = new URLSearchParams(window.location.search);
    if (page > 1) {
      params.set("page", String(page));
    } else {
      params.delete("page");
    }

    const query = params.toString();
    const nextUrl = query
      ? `${window.location.pathname}?${query}`
      : window.location.pathname;

    window.history.replaceState({}, "", nextUrl);
    scrollToBlogTop("smooth");
  };

  return (
    <main id="blog-page-top" className="bg-blog-cream-50 text-blog-text pt-26 md:pt-24 lg:pt-6 xl:pt-8 w-full max-w-full overflow-x-hidden">
      {/* Hero Section - Lighter, centered, smaller */}
      <section className="relative py-6 max-[374px]:py-4 md:py-12 lg:py-18">
        <div className="absolute inset-0 bg-gradient-to-b from-blog-tan-400/5 to-blog-cream-50" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-blog-text">
              Blog
            </h1>
            <p className="text-blog-text-muted text-base md:text-lg max-w-2xl mx-auto">
              Insights, best practices, and real-world knowledge across web, mobile, AI, and cloud. Everything you need to stay informed and ahead in technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="relative pt-0 pb-2 max-[374px]:pb-1 md:pb-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <CurvedCategoryTabs
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
              isDarkTheme={false}
            />
          </motion.div>
        </div>
      </section>

      {/* Blog List */}
      <section className="relative py-4 max-[374px]:py-3 md:py-6 lg:py-8">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 border-4 border-blog-tan-600/30 border-t-blog-tan-600 rounded-full"
              />
            </div>
          ) : error ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20 text-blog-text-muted"
            >
              <p className="text-lg">{error}</p>
            </motion.div>
          ) : (
            <BlogList 
              blogs={blogs} 
              isEmpty={blogs.length === 0}
              activeCategory={activeCategory}
              currentPage={currentPage}
              isDarkTheme={false}
            />
          )}
        </div>
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <section className="relative py-8 md:py-12 border-t border-blog-divider">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </section>
      )}
    </main>
  );
}
