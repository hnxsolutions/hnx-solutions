import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { SolutionPageShell } from "@/components/solutions/shared/SolutionPageShell";
import { solutionCategoryMeta } from "@/components/solutions/shared/solutionCategoryMeta";
import type { SolutionCategoryId, SolutionPageData } from "@/data/solutions/types";
import { createBreadcrumbJsonLd, createMetadata, createServiceJsonLd } from "@/lib/seo";

type SolutionSeoInput = {
  category: SolutionCategoryId;
  activeSlug: string;
  solutions: readonly SolutionPageData[];
};

function getSolution({ activeSlug, solutions }: Pick<SolutionSeoInput, "activeSlug" | "solutions">) {
  return solutions.find((item) => item.slug === activeSlug) ?? solutions[0];
}

export function createSolutionMetadata({
  category,
  activeSlug,
  solutions,
}: SolutionSeoInput): Metadata {
  const solution = getSolution({ activeSlug, solutions });
  const meta = solutionCategoryMeta[category];

  return createMetadata({
    title: `${solution.label} Solution | ${meta.title} by HNX Solutions`,
    description: solution.description,
    path: solution.href,
    keywords: [
      solution.label,
      meta.title,
      `${solution.label} system`,
      `${solution.label} solution`,
      `${meta.title} solutions`,
      "business systems",
      "HNX Solutions",
    ],
  });
}

export function SolutionSeoPage({ category, activeSlug, solutions }: SolutionSeoInput) {
  const solution = getSolution({ activeSlug, solutions });
  const meta = solutionCategoryMeta[category];
  const schema = [
    createBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Solutions", path: "/solutions" },
      { name: meta.title, path: solutions[0]?.href ?? solution.href },
      { name: solution.label, path: solution.href },
    ]),
    createServiceJsonLd({
      name: `${solution.label} Solution`,
      description: solution.description,
      path: solution.href,
      serviceType: `${meta.title} Solution`,
    }),
  ];

  return (
    <>
      <JsonLd data={schema} />
      <SolutionPageShell category={category} activeSlug={activeSlug} solutions={solutions} />
    </>
  );
}
