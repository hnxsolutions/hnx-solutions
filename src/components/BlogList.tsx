"use client";

import { motion } from "framer-motion";
import BlogItem from "./BlogItem";
import type { BlogPost } from "@/data/blogs/types";

interface BlogListProps {
  blogs: BlogPost[];
  isEmpty?: boolean;
  isDarkTheme?: boolean;
  activeCategory?: string | null;
  currentPage?: number;
}

export default function BlogList({
  blogs,
  isEmpty = false,
  isDarkTheme = false,
  activeCategory = null,
  currentPage = 1,
}: BlogListProps) {
  if (isEmpty || blogs.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`text-center py-20 ${isDarkTheme ? "text-light-300" : "text-blog-text-muted"}`}
      >
        <p className="text-lg">
          No blogs found in this category. Check back soon!
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {blogs.map((blog, index) => (
        <BlogItem
          key={blog.slug}
          blog={blog}
          index={index}
          isDarkTheme={isDarkTheme}
          activeCategory={activeCategory}
          currentPage={currentPage}
        />
      ))}
    </motion.div>
  );
}
