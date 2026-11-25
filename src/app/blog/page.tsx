import { createMetadata } from "@/lib/seo";

import BlogClient from "./BlogClient";

// Taken from the page's own heading and intro paragraph rather than written
// fresh, so the search result matches what a visitor actually lands on.
export const metadata = createMetadata({
  title: "Blog | HNX Solutions",
  description:
    "Insights, best practices, and real-world knowledge across web, mobile, AI, and cloud. Everything you need to stay informed and ahead in technology.",
  path: "/blog",
});

export default function BlogPage() {
  return <BlogClient />;
}
