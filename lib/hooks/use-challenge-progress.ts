"use client";

import { useState, useEffect, useCallback } from "react";
import {
  type ChallengeProgress,
  type ChallengeStatus,
} from "@/lib/utils/challenge-storage";
import { progressService } from "@/lib/services/progress.service";
import { useAuth } from "./use-auth";

export function useChallengeProgress(challengeId: string) {
  const { user } = useAuth();
  const [isFav, setIsFav] = useState(false);
  const [progress, setProgress] = useState<ChallengeProgress | null>(null);
  const [rating, setRating] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const userId = user?.id;

      const [favoriteResult, progressResult, ratingResult] = await Promise.all([
        progressService.isFavorite(challengeId, userId),
        progressService.getProgress(challengeId, userId),
        progressService.getRating(challengeId, userId),
      ]);

      setIsFav(favoriteResult);
      setProgress(progressResult);
      setRating(ratingResult);
      await progressService.addToViewed(challengeId, userId);
      setLoading(false);
    };

    loadData();
  }, [challengeId, user?.id]);

  const toggleFavorite = useCallback(async () => {
    const newState = await progressService.toggleFavorite(
      challengeId,
      user?.id
    );
    setIsFav(newState);
    return newState;
  }, [challengeId, user?.id]);

  const updateProgressStatus = useCallback(
    async (status: ChallengeStatus) => {
      await progressService.updateProgress(
        challengeId,
        { status },
        user?.id
      );
      setProgress((prev) => ({ ...prev, status } as ChallengeProgress));
    },
    [challengeId, user?.id]
  );

  const updateTimeSpent = useCallback(
    async (seconds: number) => {
      await progressService.updateProgress(
        challengeId,
        { timeSpent: seconds },
        user?.id
      );
      setProgress((prev) => ({
        ...prev,
        timeSpent: seconds,
      } as ChallengeProgress));
    },
    [challengeId, user?.id]
  );

  const updateNotes = useCallback(
    async (notes: string) => {
      await progressService.updateProgress(
        challengeId,
        { notes },
        user?.id
      );
      setProgress((prev) => ({ ...prev, notes } as ChallengeProgress));
    },
    [challengeId, user?.id]
  );

  const rateChallenge = useCallback(
    async (newRating: number) => {
      await progressService.setRating(challengeId, newRating, user?.id);
      setRating(newRating);
    },
    [challengeId, user?.id]
  );

  return {
    isFavorite: isFav,
    progress,
    rating,
    loading,
    toggleFavorite,
    updateProgressStatus,
    updateTimeSpent,
    updateNotes,
    rateChallenge,
  };
}
