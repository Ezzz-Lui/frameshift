"use client";

import { useState, useEffect, useCallback } from "react";
import {
  type ChallengeProgress,
  type ChallengeStatus,
  getStoredChallengeData,
  toggleFavorite as toggleFavoriteStorage,
  isFavorite as isFavoriteStorage,
  updateProgress as updateProgressStorage,
  getProgress as getProgressStorage,
  addToViewed as addToViewedStorage,
  setRating as setRatingStorage,
  getRating as getRatingStorage,
} from "@/lib/utils/challenge-storage";

export function useChallengeProgress(challengeId: string) {
  const [isFav, setIsFav] = useState(false);
  const [progress, setProgress] = useState<ChallengeProgress | null>(null);
  const [rating, setRating] = useState<number | null>(null);

  useEffect(() => {
    setIsFav(isFavoriteStorage(challengeId));
    setProgress(getProgressStorage(challengeId));
    setRating(getRatingStorage(challengeId));
    addToViewedStorage(challengeId);
  }, [challengeId]);

  const toggleFavorite = useCallback(() => {
    const newState = toggleFavoriteStorage(challengeId);
    setIsFav(newState);
    return newState;
  }, [challengeId]);

  const updateProgressStatus = useCallback(
    (status: ChallengeStatus) => {
      updateProgressStorage(challengeId, { status });
      setProgress((prev) => ({ ...prev, status } as ChallengeProgress));
    },
    [challengeId]
  );

  const updateTimeSpent = useCallback(
    (seconds: number) => {
      updateProgressStorage(challengeId, { timeSpent: seconds });
      setProgress((prev) => ({
        ...prev,
        timeSpent: seconds,
      } as ChallengeProgress));
    },
    [challengeId]
  );

  const updateNotes = useCallback(
    (notes: string) => {
      updateProgressStorage(challengeId, { notes });
      setProgress((prev) => ({ ...prev, notes } as ChallengeProgress));
    },
    [challengeId]
  );

  const rateChallenge = useCallback(
    (newRating: number) => {
      setRatingStorage(challengeId, newRating);
      setRating(newRating);
    },
    [challengeId]
  );

  return {
    isFavorite: isFav,
    progress,
    rating,
    toggleFavorite,
    updateProgressStatus,
    updateTimeSpent,
    updateNotes,
    rateChallenge,
  };
}
