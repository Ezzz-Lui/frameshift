"use client";

import GridChallenges from "@/components/challenges/grid-challenges";
import SearchSection from "@/components/challenges/search-section";

export default function ChallengesContent() {
  return (
    <div>
      <SearchSection />
      <GridChallenges />
    </div>
  );
}
