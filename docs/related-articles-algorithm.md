# Related Articles Algorithm

## Overview

The Related Articles section on each blog detail page surfaces the most topically relevant content to keep readers engaged. This document explains the algorithm, the scoring formula, and the reasoning behind design decisions.

---

## Current Implementation

**Function:** `getRelatedBlogs(currentSlug, category, tags, limit = 3)`
**Location:** `src/data/blogContent.ts`

### Step-by-Step

1. **Filter by same category** — Only blogs in the same category as the current article are considered. This maintains topical focus and prevents confusion.

2. **Exclude the current article** — The blog being read is removed from candidates.

3. **Score by tag overlap** — Each candidate blog is scored by counting how many of its tags match the current blog's tags (case-insensitive).

   ```
   score = count of shared tags between currentBlog.tags and candidate.tags
   ```

4. **Sort** — Candidates are sorted by:
   - **Primary:** score descending (most tag overlap first)
   - **Secondary:** `createdAt` descending (newest first, used as tiebreaker)

5. **Take top N** — The top `limit` results (default: 3) are returned.

---

## Scoring Formula

$$
\text{score}(candidate) = \left| \{ t \in candidate.tags \mid t.toLowerCase() \in currentBlog.tags.map(toLowerCase) \} \right|
$$

Example:

| Blog | Tags | Shared with Current | Score |
|------|------|---------------------|-------|
| TypeScript Guide | TypeScript, JavaScript, Web Development | Web Development | 1 |
| Security Practices | Security, Web Development, Authentication | Web Development | 1 |
| Testing Strategies | Testing, Jest, Web Development, Quality Assurance | Web Development | 1 |
| Performance Guide | Next.js, Web Development, Performance | Web Development | 1 |

If scores are tied, the most recently published article wins.

---

## Why 3 Related Articles?

| Count | Verdict | Reasoning |
|-------|---------|-----------|
| 1–2 | Too few | Sparse, low discovery value |
| **3** | **Optimal** | Matches `grid md:grid-cols-3`, proven UX sweet spot, not overwhelming |
| 4–5 | Acceptable | Requires different grid, looks like a list |
| 6+ | Too many | Competes with main content, causes decision fatigue |

The 3-column grid layout (`grid md:grid-cols-3`) and the limit of 3 are kept in sync intentionally.

---

## Algorithm Comparison

| Algorithm | Pros | Cons |
|-----------|------|------|
| **Newest in category** (old) | Simple, always shows fresh content | No relevance — arbitrary ordering |
| **Tag overlap** (current) | Topically relevant, self-improving as tags improve | Requires tags on each blog post |
| Tag overlap + cross-category | Broader discovery | Loses category focus, confusing UX |
| TF-IDF / full-text scoring | Highly precise relevance | Complex to implement, not needed at current scale |

---

## Graceful Fallback

If the current blog has **no tags** (empty `tags` array), all candidates score 0. The tiebreaker (recency) then applies to all, producing the same result as the old "newest first" algorithm. This makes the upgrade fully backward compatible.

---

## Future Improvements

When the blog catalog grows to 10+ articles per category, consider:

- **Weighted tags:** Give higher weight to more specific tags (e.g., "Cypress" > "Web Development")
- **Cross-category discovery:** Use tags to surface highly related articles from other categories with a smaller weight multiplier
- **User interaction signals:** Boost articles with higher engagement (read time, shares) as a secondary sort signal
- **Search-based similarity:** Use embeddings or TF-IDF on `title + description` for semantic matching beyond keyword tags
