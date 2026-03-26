/**
 * Blog Data Module
 * 
 * This module exports utilities for loading and accessing blog content from
 * category-based JSON files. Each category file (web-development.json, etc.)
 * contains multiple blogs organized by the BlogCategoryFile schema.
 */

export type { BlogPost, BlogCategory, BlogCategoryFile, PaginationMeta, BlogListResponse } from "./types";
export { calculateReadTime } from "./types";

export {
  loadBlogCategory,
  getPaginatedBlogs,
  getBlogBySlug,
  getAllBlogs,
  getFeaturedBlogs,
  clearBlogCache,
} from "./loader";
