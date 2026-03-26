export interface BlogPost {
  id: string;                    // Unique identifier (e.g., "web-development")
  slug: string;                  // URL-friendly slug (e.g., "web-development-guide")
  title: string;                 // Blog post title
  category: string;              // One of 9 categories
  description: string;           // 2-3 line preview for list view
  content: string;               // HTML or formatted text content
  author: string;                // Author name
  createdAt: string;             // ISO format: YYYY-MM-DD
  readTime: number;              // Estimated read time in minutes
  image?: string;                // Optional: relative path to public/images/blog/
  tags?: string[];               // Optional: tags for categorization
  seoTitle?: string;             // Optional: custom SEO title
  seoDescription?: string;       // Optional: custom SEO description
}

export type BlogCategory =
  | "web-development"
  | "saas-development"
  | "mobile-apps"
  | "crm-salesforce"
  | "devops"
  | "ai-automation"
  | "cloud-solutions"
  | "ui-ux-design"
  | "digital-growth";

// New types for consolidated category-based JSON files
export interface BlogCategoryFile {
  category: BlogCategory;       // The category this file contains
  totalCount: number;            // Total number of blogs in this category
  lastUpdated: string;           // ISO timestamp of last modification
  blogs: BlogPost[];             // Array of blog posts, sorted by createdAt DESC
}

export interface PaginationMeta {
  currentPage: number;           // Current page (1-indexed)
  pageSize: number;              // Number of items per page
  totalItems: number;            // Total count of items
  totalPages: number;            // Total number of pages
  hasNextPage: boolean;          // Whether there's a next page
  hasPreviousPage: boolean;      // Whether there's a previous page
}

export interface BlogListResponse {
  blogs: BlogPost[];             // Blogs for the current page
  pagination: PaginationMeta;    // Pagination metadata
  category: BlogCategory;        // Category of these blogs
}

// Utility to calculate read time from content
export function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}
