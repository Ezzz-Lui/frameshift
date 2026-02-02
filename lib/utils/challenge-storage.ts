import type { Challenge } from "@/data/challenges/challenges-showcase";

export type ChallengeStatus = "pending" | "in-progress" | "completed";
export type ChallengeProgress = {
  status: ChallengeStatus;
  startedAt?: string;
  completedAt?: string;
  timeSpent?: number; // in seconds
  notes?: string;
};

export type UserChallengeData = {
  favorites: string[]; // challenge IDs
  progress: Record<string, ChallengeProgress>; // challenge ID -> progress
  viewed: string[]; // challenge IDs (recently viewed)
  ratings: Record<string, number>; // challenge ID -> rating (1-5)
};

const STORAGE_KEY = "frameshift_challenge_data";

export function getStoredChallengeData(): UserChallengeData {
  if (typeof window === "undefined") {
    return {
      favorites: [],
      progress: {},
      viewed: [],
      ratings: {},
    };
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error("Error reading challenge data from localStorage:", error);
  }

  return {
    favorites: [],
    progress: {},
    viewed: [],
    ratings: {},
  };
}

export function saveChallengeData(data: UserChallengeData): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error("Error saving challenge data to localStorage:", error);
  }
}

export function toggleFavorite(challengeId: string): boolean {
  const data = getStoredChallengeData();
  const index = data.favorites.indexOf(challengeId);
  
  if (index > -1) {
    data.favorites.splice(index, 1);
    saveChallengeData(data);
    return false; // removed
  } else {
    data.favorites.push(challengeId);
    saveChallengeData(data);
    return true; // added
  }
}

export function isFavorite(challengeId: string): boolean {
  const data = getStoredChallengeData();
  return data.favorites.includes(challengeId);
}

export function updateProgress(
  challengeId: string,
  progress: Partial<ChallengeProgress>
): void {
  const data = getStoredChallengeData();
  const current = data.progress[challengeId] || { status: "pending" };
  
  data.progress[challengeId] = {
    ...current,
    ...progress,
  };

  // Set timestamps
  if (progress.status === "in-progress" && !current.startedAt) {
    data.progress[challengeId].startedAt = new Date().toISOString();
  }
  
  if (progress.status === "completed" && !current.completedAt) {
    data.progress[challengeId].completedAt = new Date().toISOString();
  }

  saveChallengeData(data);
}

export function getProgress(challengeId: string): ChallengeProgress | null {
  const data = getStoredChallengeData();
  return data.progress[challengeId] || null;
}

export function addToViewed(challengeId: string): void {
  const data = getStoredChallengeData();
  const index = data.viewed.indexOf(challengeId);
  
  if (index > -1) {
    data.viewed.splice(index, 1);
  }
  
  data.viewed.unshift(challengeId);
  // Keep only last 20 viewed
  data.viewed = data.viewed.slice(0, 20);
  
  saveChallengeData(data);
}

export function setRating(challengeId: string, rating: number): void {
  const data = getStoredChallengeData();
  data.ratings[challengeId] = rating;
  saveChallengeData(data);
}

export function getRating(challengeId: string): number | null {
  const data = getStoredChallengeData();
  return data.ratings[challengeId] || null;
}

export function getStats() {
  const data = getStoredChallengeData();
  const progress = Object.values(data.progress);
  
  const completed = progress.filter((p) => p.status === "completed").length;
  const inProgress = progress.filter((p) => p.status === "in-progress").length;
  const totalTimeSpent = progress.reduce((acc, p) => acc + (p.timeSpent || 0), 0);
  
  const byDifficulty: Record<string, number> = {};
  progress.forEach((p) => {
    // This would need challenge data to get difficulty, so we'll calculate it differently
  });

  return {
    favorites: data.favorites.length,
    completed,
    inProgress,
    totalTimeSpent,
    viewed: data.viewed.length,
  };
}
