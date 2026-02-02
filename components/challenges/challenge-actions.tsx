"use client";

import { Button } from "@/components/ui/button";
import {
  Heart,
  BookOpen,
  CheckCircle2,
  Clock,
  Star,
  Share2,
} from "lucide-react";
import { useChallengeProgress } from "@/lib/hooks/use-challenge-progress";
import { useState } from "react";
import type { ChallengeStatus } from "@/lib/utils/challenge-storage";
import { cn } from "@/lib/utils";

type ChallengeActionsProps = {
  challengeId: string;
  challengeTitle: string;
};

export function ChallengeActions({
  challengeId,
  challengeTitle,
}: ChallengeActionsProps) {
  const {
    isFavorite,
    progress,
    rating,
    toggleFavorite,
    updateProgressStatus,
    rateChallenge,
  } = useChallengeProgress(challengeId);

  const handleShare = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      // Simple feedback - could be enhanced with a toast component later
      alert("Link copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleStatusChange = (status: ChallengeStatus) => {
    updateProgressStatus(status);
  };

  const currentStatus = progress?.status || "pending";

  return (
    <div className="space-y-3">
      {/* Favorite and Share */}
      <div className="flex gap-2">
        <Button
          variant={isFavorite ? "default" : "outline"}
          size="sm"
          onClick={() => toggleFavorite()}
          className="flex-1"
        >
          <Heart
            className={cn(
              "h-4 w-4 mr-2",
              isFavorite && "fill-current"
            )}
          />
          {isFavorite ? "Favorited" : "Favorite"}
        </Button>
        <Button variant="outline" size="sm" onClick={handleShare}>
          <Share2 className="h-4 w-4" />
        </Button>
      </div>

      {/* Status Selection */}
      <div className="space-y-2">
        <p className="text-sm font-medium">Status</p>
        <div className="grid grid-cols-3 gap-2">
          <Button
            variant={currentStatus === "pending" ? "default" : "outline"}
            size="sm"
            onClick={() => handleStatusChange("pending")}
          >
            Pending
          </Button>
          <Button
            variant={currentStatus === "in-progress" ? "default" : "outline"}
            size="sm"
            onClick={() => handleStatusChange("in-progress")}
          >
            <Clock className="h-4 w-4 mr-1" />
            In Progress
          </Button>
          <Button
            variant={currentStatus === "completed" ? "default" : "outline"}
            size="sm"
            onClick={() => handleStatusChange("completed")}
          >
            <CheckCircle2 className="h-4 w-4 mr-1" />
            Done
          </Button>
        </div>
      </div>

      {/* Rating */}
      <div className="space-y-2">
        <p className="text-sm font-medium">Your Rating</p>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              onClick={() => rateChallenge(value)}
              className={cn(
                "p-1 rounded hover:bg-muted transition-colors",
                rating && rating >= value && "text-yellow-500"
              )}
            >
              <Star
                className={cn(
                  "h-5 w-5",
                  rating && rating >= value && "fill-current"
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
