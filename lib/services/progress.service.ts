"use client";

import { supabase } from "@/lib/supabase/client";
import type { ChallengeProgress } from "@/lib/utils/challenge-storage";
import * as localStorage from "@/lib/utils/challenge-storage";

export class ProgressService {
  async getProgress(
    challengeId: string,
    userId?: string
  ): Promise<ChallengeProgress | null> {
    if (!userId) {
      return localStorage.getProgress(challengeId);
    }

    try {
      const { data, error } = await supabase
        .from("challenge_progress")
        .select("*")
        .eq("user_id", userId)
        .eq("challenge_id", challengeId)
        .single();

      if (error) {
        if (error.code === "PGRST116") {
          // Not found, return null
          return null;
        }
        console.error("Error fetching progress:", error);
        // Fallback to localStorage
        return localStorage.getProgress(challengeId);
      }

      const progressData = data as {
        status: "pending" | "in-progress" | "completed";
        started_at: string | null;
        completed_at: string | null;
        time_spent: number;
        notes: string | null;
      };
      return {
        status: progressData.status,
        startedAt: progressData.started_at || undefined,
        completedAt: progressData.completed_at || undefined,
        timeSpent: progressData.time_spent || 0,
        notes: progressData.notes || undefined,
      };
    } catch (error) {
      console.error("Error in getProgress:", error);
      return localStorage.getProgress(challengeId);
    }
  }

  async updateProgress(
    challengeId: string,
    progress: Partial<ChallengeProgress>,
    userId?: string
  ): Promise<void> {
    // Always update localStorage as fallback
    localStorage.updateProgress(challengeId, progress);

    if (!userId) {
      return;
    }

    try {
      const updateData: any = {
        challenge_id: challengeId,
        updated_at: new Date().toISOString(),
      };

      if (progress.status) {
        updateData.status = progress.status;
      }
      if (progress.startedAt) {
        updateData.started_at = progress.startedAt;
      }
      if (progress.completedAt) {
        updateData.completed_at = progress.completedAt;
      }
      if (progress.timeSpent !== undefined) {
        updateData.time_spent = progress.timeSpent;
      }
      if (progress.notes !== undefined) {
        updateData.notes = progress.notes;
      }

      const { error } = await supabase
        .from("challenge_progress")
        .upsert(
          {
            user_id: userId,
            ...updateData,
          },
          {
            onConflict: "user_id,challenge_id",
          }
        );

      if (error) {
        console.error("Error updating progress:", error);
      }
    } catch (error) {
      console.error("Error in updateProgress:", error);
    }
  }

  async toggleFavorite(challengeId: string, userId?: string): Promise<boolean> {
    const localResult = localStorage.toggleFavorite(challengeId);

    if (!userId) {
      return localResult;
    }

    try {
      const isFavorite = localStorage.isFavorite(challengeId);

      if (isFavorite) {
        // Add to Supabase
        const { error } = await (supabase.from("favorites") as any).upsert(
          {
            user_id: userId,
            challenge_id: challengeId,
          },
          {
            onConflict: "user_id,challenge_id",
          }
        );

        if (error) {
          console.error("Error adding favorite:", error);
        }
      } else {
        // Remove from Supabase
        const { error } = await (supabase
          .from("favorites") as any)
          .delete()
          .eq("user_id", userId)
          .eq("challenge_id", challengeId);

        if (error) {
          console.error("Error removing favorite:", error);
        }
      }

      return isFavorite;
    } catch (error) {
      console.error("Error in toggleFavorite:", error);
      return localResult;
    }
  }

  async isFavorite(challengeId: string, userId?: string): Promise<boolean> {
    if (!userId) {
      return localStorage.isFavorite(challengeId);
    }

    try {
      const { data, error } = await supabase
        .from("favorites")
        .select("id")
        .eq("user_id", userId)
        .eq("challenge_id", challengeId)
        .single();

      if (error && error.code !== "PGRST116") {
        console.error("Error checking favorite:", error);
        return localStorage.isFavorite(challengeId);
      }

      return !!data;
    } catch (error) {
      console.error("Error in isFavorite:", error);
      return localStorage.isFavorite(challengeId);
    }
  }

  async setRating(
    challengeId: string,
    rating: number,
    userId?: string
  ): Promise<void> {
    localStorage.setRating(challengeId, rating);

    if (!userId) {
      return;
    }

    try {
      const { error } = await (supabase.from("ratings") as any).upsert(
          {
            user_id: userId,
            challenge_id: challengeId,
            rating,
            updated_at: new Date().toISOString(),
          },
          {
            onConflict: "user_id,challenge_id",
          }
        );

      if (error) {
        console.error("Error setting rating:", error);
      }
    } catch (error) {
      console.error("Error in setRating:", error);
    }
  }

  async getRating(challengeId: string, userId?: string): Promise<number | null> {
    if (!userId) {
      return localStorage.getRating(challengeId);
    }

    try {
      const { data, error } = await supabase
        .from("ratings")
        .select("rating")
        .eq("user_id", userId)
        .eq("challenge_id", challengeId)
        .single();

      if (error && error.code !== "PGRST116") {
        console.error("Error getting rating:", error);
        return localStorage.getRating(challengeId);
      }

      const ratingData = data as { rating: number } | null;
      return ratingData?.rating || null;
    } catch (error) {
      console.error("Error in getRating:", error);
      return localStorage.getRating(challengeId);
    }
  }

  async addToViewed(challengeId: string, userId?: string): Promise<void> {
    localStorage.addToViewed(challengeId);

    if (!userId) {
      return;
    }

    try {
      const { error } = await (supabase.from("recently_viewed") as any).upsert(
        {
          user_id: userId,
          challenge_id: challengeId,
          viewed_at: new Date().toISOString(),
        },
        {
          onConflict: "user_id,challenge_id",
        }
      );

      if (error) {
        console.error("Error adding to viewed:", error);
      }
    } catch (error) {
      console.error("Error in addToViewed:", error);
    }
  }
}

export const progressService = new ProgressService();
