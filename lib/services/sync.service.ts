"use client";

import { supabase } from "@/lib/supabase/client";
import * as localStorage from "@/lib/utils/challenge-storage";

export class SyncService {
  async syncLocalStorageToSupabase(userId: string): Promise<{
    success: boolean;
    error?: string;
  }> {
    try {
      const localData = localStorage.getStoredChallengeData();

      // Sync favorites
      if (localData.favorites.length > 0) {
        const { error: favoritesError } =         await (supabase
          .from("favorites") as any)
          .upsert(
            localData.favorites.map((challengeId) => ({
              user_id: userId,
              challenge_id: challengeId,
            })),
            {
              onConflict: "user_id,challenge_id",
            }
          );

        if (favoritesError) {
          console.error("Error syncing favorites:", favoritesError);
        }
      }

      // Sync progress
      const progressEntries = Object.entries(localData.progress).map(
        ([challengeId, progress]) => ({
          user_id: userId,
          challenge_id: challengeId,
          status: progress.status,
          started_at: progress.startedAt || null,
          completed_at: progress.completedAt || null,
          time_spent: progress.timeSpent || 0,
          notes: progress.notes || null,
        })
      );

      if (progressEntries.length > 0) {
        const { error: progressError } = await (supabase
          .from("challenge_progress") as any)
          .upsert(progressEntries, {
            onConflict: "user_id,challenge_id",
          });

        if (progressError) {
          console.error("Error syncing progress:", progressError);
        }
      }

      // Sync ratings
      const ratingEntries = Object.entries(localData.ratings).map(
        ([challengeId, rating]) => ({
          user_id: userId,
          challenge_id: challengeId,
          rating,
        })
      );

      if (ratingEntries.length > 0) {
        const { error: ratingsError } = await (supabase
          .from("ratings") as any)
          .upsert(ratingEntries, {
            onConflict: "user_id,challenge_id",
          });

        if (ratingsError) {
          console.error("Error syncing ratings:", ratingsError);
        }
      }

      // Sync recently viewed
      if (localData.viewed.length > 0) {
        const { error: viewedError } = await (supabase
          .from("recently_viewed") as any)
          .upsert(
            localData.viewed.map((challengeId) => ({
              user_id: userId,
              challenge_id: challengeId,
              viewed_at: new Date().toISOString(),
            })),
            {
              onConflict: "user_id,challenge_id",
            }
          );

        if (viewedError) {
          console.error("Error syncing recently viewed:", viewedError);
        }
      }

      // Clear localStorage after successful sync
      // Note: We'll keep a backup flag to know if sync was successful
      localStorage.clearAll?.();

      return { success: true };
    } catch (error) {
      console.error("Error syncing data:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }
}

export const syncService = new SyncService();
