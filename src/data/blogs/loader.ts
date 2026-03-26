import type { BlogCategory, BlogCategoryFile, BlogListResponse, BlogPost } from "./types";

// In-memory cache for loaded blog categories
const blogCache: Record<BlogCategory, BlogCategoryFile | null> = {
  "web-development": null,
  "saas-development": null,
  "mobile-apps": null,
  "crm-salesforce": null,
  devops: null,
  "ai-automation": null,
  "cloud-solutions": null,
  "ui-ux-design": null,
  "digital-growth": null,
};

/**
 * Load a specific blog category from JSON file
 * Results are cached to avoid repeated file reads
 */
export async function loadBlogCategory(
  category: BlogCategory
): Promise<BlogCategoryFile> {
  // Return from cache if available
  if (blogCache[category] !== null) {
    return blogCache[category]!;
  }

  try {
    // Dynamically import the JSON file for the category
    const moduleMap: Record<
      BlogCategory,
      () => Promise<{ default: unknown }>
    > = {
      "web-development": () =>
        import("./content/web-development.json") as Promise<{ default: unknown }>,
      "saas-development": () =>
        import("./content/saas-development.json") as Promise<{ default: unknown }>,
      "mobile-apps": () =>
        import("./content/mobile-apps.json") as Promise<{ default: unknown }>,
      "crm-salesforce": () =>
        import("./content/crm-salesforce.json") as Promise<{ default: unknown }>,
      devops: () =>
        import("./content/devops.json") as Promise<{ default: unknown }>,
      "ai-automation": () =>
        import("./content/ai-automation.json") as Promise<{ default: unknown }>,
      "cloud-solutions": () =>
        import("./content/cloud-solutions.json") as Promise<{ default: unknown }>,
      "ui-ux-design": () =>
        import("./content/ui-ux-design.json") as Promise<{ default: unknown }>,
      "digital-growth": () =>
        import("./content/digital-growth.json") as Promise<{ default: unknown }>,
    };

    const loader = moduleMap[category];
    if (!loader) {
      throw new Error(`Unknown blog category: ${category}`);
    }

    const moduleResult = await loader();
    const categoryFileData = (moduleResult as { default: unknown }).default;
    const categoryFile = categoryFileData as BlogCategoryFile;
    validateBlogData(categoryFile);

    // Cache the result
    blogCache[category] = categoryFile;

    return categoryFile;
  } catch (error) {
    console.error(`Failed to load blog category "${category}":`, error);
    throw new Error(`Failed to load blog category: ${category}`);
  }
}

/**
 * Get paginated blogs for a specific category
 * @param category - Blog category
 * @param page - Page number (1-indexed)
 * @param pageSize - Number of blogs per page (default: 10)
 */
export async function getPaginatedBlogs(
  category: BlogCategory,
  page: number = 1,
  pageSize: number = 10
): Promise<BlogListResponse> {
  const categoryFile = await loadBlogCategory(category);

  const totalItems = categoryFile.blogs.length;
  const totalPages = Math.ceil(totalItems / pageSize);

  // Validate page number
  if (page < 1) page = 1;
  if (page > totalPages && totalPages > 0) page = totalPages;

  // Calculate slice indices
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedBlogs = categoryFile.blogs.slice(startIndex, endIndex);

  return {
    blogs: paginatedBlogs,
    category,
    pagination: {
      currentPage: page,
      pageSize,
      totalItems,
      totalPages,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1,
    },
  };
}

/**
 * Fetch a single blog by slug within a category
 * @param category - Blog category
 * @param slug - Blog slug
 */
export async function getBlogBySlug(
  category: BlogCategory,
  slug: string
): Promise<BlogPost | null> {
  const categoryFile = await loadBlogCategory(category);
  return categoryFile.blogs.find((blog) => blog.slug === slug) || null;
}

/**
 * Load all blogs from all categories
 * Useful for sitemaps, analytics, or global search
 */
export async function getAllBlogs(): Promise<Record<BlogCategory, BlogPost[]>> {
  const categories: BlogCategory[] = [
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

  const allBlogs: Record<BlogCategory, BlogPost[]> = {} as Record<
    BlogCategory,
    BlogPost[]
  >;

  await Promise.all(
    categories.map(async (category) => {
      const categoryFile = await loadBlogCategory(category);
      allBlogs[category] = categoryFile.blogs;
    })
  );

  return allBlogs;
}

/**
 * Get featured blogs (latest N blogs from each category)
 * @param count - Number of featured blogs per category (default: 3)
 */
export async function getFeaturedBlogs(
  count: number = 3
): Promise<Record<BlogCategory, BlogPost[]>> {
  const allBlogs = await getAllBlogs();

  const featured: Record<BlogCategory, BlogPost[]> = {} as Record<
    BlogCategory,
    BlogPost[]
  >;

  Object.entries(allBlogs).forEach(([category, blogs]) => {
    featured[category as BlogCategory] = blogs.slice(0, count);
  });

  return featured;
}

/**
 * Validate that loaded data matches the expected BlogCategoryFile schema
 * @param data - Data to validate
 * @throws Error if validation fails
 */
function validateBlogData(data: unknown): asserts data is BlogCategoryFile {
  if (!data || typeof data !== "object") {
    throw new Error("Invalid blog data: not an object");
  }

  const file = data as Record<string, unknown>;

  if (!file.category || typeof file.category !== "string") {
    throw new Error("Invalid blog data: missing or invalid category");
  }

  if (typeof file.totalCount !== "number" || file.totalCount < 0) {
    throw new Error("Invalid blog data: missing or invalid totalCount");
  }

  if (!file.lastUpdated || typeof file.lastUpdated !== "string") {
    throw new Error("Invalid blog data: missing or invalid lastUpdated");
  }

  if (!Array.isArray(file.blogs)) {
    throw new Error("Invalid blog data: blogs is not an array");
  }

  // Validate each blog post
  file.blogs.forEach((blog: unknown, index: number) => {
    if (!blog || typeof blog !== "object") {
      throw new Error(`Invalid blog data: blog at index ${index} is not an object`);
    }

    const blogObj = blog as Record<string, unknown>;

    if (!blogObj.id || typeof blogObj.id !== "string") {
      throw new Error(`Invalid blog data: blog at index ${index} missing id`);
    }

    if (!blogObj.slug || typeof blogObj.slug !== "string") {
      throw new Error(`Invalid blog data: blog at index ${index} missing slug`);
    }

    if (!blogObj.title || typeof blogObj.title !== "string") {
      throw new Error(`Invalid blog data: blog at index ${index} missing title`);
    }
  });
}

/**
 * Clear the blog cache (useful for testing or cache invalidation)
 */
export function clearBlogCache(): void {
  Object.keys(blogCache).forEach((key) => {
    blogCache[key as BlogCategory] = null;
  });
}
