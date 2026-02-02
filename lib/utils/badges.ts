import type { Challenge } from "@/data/challenges/challenges-showcase";
import { getStoredChallengeData } from "./challenge-storage";

export type Badge = {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: string;
};

export function calculateBadges(
  challenges: Challenge[],
  completedIds: string[]
): Badge[] {
  const badges: Badge[] = [];
  const data = getStoredChallengeData();
  const progress = data.progress;

  // First Challenge
  if (completedIds.length >= 1) {
    badges.push({
      id: "first-challenge",
      name: "First Steps",
      description: "Completed your first challenge",
      icon: "🎯",
      unlocked: true,
      unlockedAt: progress[completedIds[0]]?.completedAt,
    });
  }

  // Framework-specific badges
  const frameworks = challenges
    .filter((c) => completedIds.includes(c.id))
    .map((c) => c.framework);
  
  const frameworkCounts: Record<string, number> = {};
  frameworks.forEach((f) => {
    frameworkCounts[f] = (frameworkCounts[f] || 0) + 1;
  });

  Object.entries(frameworkCounts).forEach(([framework, count]) => {
    if (count >= 3) {
      badges.push({
        id: `master-${framework.toLowerCase().replace(/\s+/g, "-")}`,
        name: `${framework} Master`,
        description: `Completed ${count} ${framework} challenges`,
        icon: "🏆",
        unlocked: true,
      });
    }
  });

  // Difficulty badges
  const completedChallenges = challenges.filter((c) =>
    completedIds.includes(c.id)
  );
  
  const hasChallenger = completedChallenges.some(
    (c) => c.difficulty.toLowerCase() === "challenger"
  );
  if (hasChallenger) {
    badges.push({
      id: "challenger-complete",
      name: "Challenger",
      description: "Completed a Challenger difficulty challenge",
      icon: "💪",
      unlocked: true,
    });
  }

  // Completion milestones
  if (completedIds.length >= 5) {
    badges.push({
      id: "five-complete",
      name: "Getting Started",
      description: "Completed 5 challenges",
      icon: "⭐",
      unlocked: true,
    });
  }

  if (completedIds.length >= 10) {
    badges.push({
      id: "ten-complete",
      name: "Dedicated",
      description: "Completed 10 challenges",
      icon: "🔥",
      unlocked: true,
    });
  }

  if (completedIds.length >= 25) {
    badges.push({
      id: "twenty-five-complete",
      name: "Expert",
      description: "Completed 25 challenges",
      icon: "👑",
      unlocked: true,
    });
  }

  // Speed badges (would need time tracking)
  // Favorite badges
  if (data.favorites.length >= 5) {
    badges.push({
      id: "collector",
      name: "Collector",
      description: "Favorited 5 challenges",
      icon: "📚",
      unlocked: true,
    });
  }

  return badges;
}

export function getUnlockedBadges(challenges: Challenge[]): Badge[] {
  const data = getStoredChallengeData();
  const completedIds = Object.entries(data.progress)
    .filter(([_, progress]) => progress.status === "completed")
    .map(([id]) => id);

  return calculateBadges(challenges, completedIds);
}
