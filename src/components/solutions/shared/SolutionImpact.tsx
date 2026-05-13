"use client";

import type { SolutionCard, SolutionCategoryId, SolutionStat } from "@/data/solutions/types";
import { SolutionModules } from "@/components/solutions/shared/SolutionModules";
import { SolutionStatsGrid } from "@/components/solutions/shared/SolutionStatsGrid";

type SolutionImpactProps = {
  category: SolutionCategoryId;
  stats: readonly SolutionStat[];
  outcomes: readonly SolutionCard[];
};

export function SolutionImpact({ category, stats, outcomes }: SolutionImpactProps) {
  return (
    <div className="space-y-6">
      <SolutionStatsGrid category={category} stats={stats} />
      <SolutionModules category={category} items={outcomes} eyebrow="Outcome" />
    </div>
  );
}
