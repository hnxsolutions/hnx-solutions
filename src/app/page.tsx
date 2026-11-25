import HomePage from "@/components/home/HomePage";
import { createMetadata } from "@/lib/seo";

// The homepage had no metadata of its own, so it inherited the root layout's
// title and description - the right ones for it - but the layout sets no
// canonical, which left "/" the only indexable page on the site without one.
//
// createMetadata with no overrides reproduces those same defaults (title,
// description, keywords, Open Graph, Twitter, robots all come from the shared
// constants the layout uses) and adds the self-referencing canonical.
export const metadata = createMetadata({ path: "/" });

export default function Page() {
  return <HomePage />;
}
