import type { BlogPost, BlogCategoryFile } from './blogs/types';

// Import consolidated category blog files
import webDevelopmentData from './blogs/content/web-development.json';
import saasDevelopmentData from './blogs/content/saas-development.json';
import mobileAppsData from './blogs/content/mobile-apps.json';
import crmSystemsData from './blogs/content/crm-salesforce.json';
import devopsData from './blogs/content/devops.json';
import aiAutomationData from './blogs/content/ai-automation.json';
import cloudSolutionsData from './blogs/content/cloud-solutions.json';
import uiUxDesignData from './blogs/content/ui-ux-design.json';
import digitalGrowthData from './blogs/content/digital-growth.json';

// Type-casted blog category file registry
const categoryFiles: Record<string, BlogCategoryFile> = {
  'web-development': webDevelopmentData as BlogCategoryFile,
  'saas-development': saasDevelopmentData as BlogCategoryFile,
  'mobile-apps': mobileAppsData as BlogCategoryFile,
  'crm-salesforce': crmSystemsData as BlogCategoryFile,
  'devops': devopsData as BlogCategoryFile,
  'ai-automation': aiAutomationData as BlogCategoryFile,
  'cloud-solutions': cloudSolutionsData as BlogCategoryFile,
  'ui-ux-design': uiUxDesignData as BlogCategoryFile,
  'digital-growth': digitalGrowthData as BlogCategoryFile,
};

// Build blog content registry by flattening all blogs from all categories
export const blogContent: Record<string, BlogPost> = {};

// Populate blogContent with all individual blogs indexed by slug
Object.values(categoryFiles).forEach(categoryFile => {
  categoryFile.blogs.forEach(blog => {
    blogContent[blog.slug] = blog;
  });
});

/**
 * Get all blogs across all categories
 */
export function getAllBlogs(): BlogPost[] {
  return Object.values(blogContent).sort((a, b) =>
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

/**
 * Get blog by slug
 */
export function getBlogBySlug(slug: string): BlogPost | null {
  return blogContent[slug] || null;
}

/**
 * Get blogs by category
 */
export function getBlogsByCategory(category: string): BlogPost[] {
  return Object.values(blogContent)
    .filter(blog => blog.category === category)
    .sort((a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
}

/**
 * Get unique categories
 */
export function getCategories(): string[] {
  const categories = new Set(Object.values(blogContent).map(blog => blog.category));
  return Array.from(categories);
}

/**
 * Get related blogs for a given blog post.
 * Scoring: number of shared tags (case-insensitive) — higher = more relevant.
 * Tiebreaker: most recent first.
 * Falls back to newest-first when the current blog has no tags.
 */
export function getRelatedBlogs(
  currentSlug: string,
  category: string,
  tags: string[],
  limit = 3
): BlogPost[] {
  const normalizedTags = tags.map((t) => t.toLowerCase());

  return Object.values(blogContent)
    .filter((blog) => blog.category === category && blog.slug !== currentSlug)
    .map((blog) => {
      const sharedTags = (blog.tags ?? []).filter((t) =>
        normalizedTags.includes(t.toLowerCase())
      ).length;
      return { blog, score: sharedTags };
    })
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return new Date(b.blog.createdAt).getTime() - new Date(a.blog.createdAt).getTime();
    })
    .slice(0, limit)
    .map(({ blog }) => blog);
}
