"use client";

import { Heart, Clock, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ChallengeStatus } from "@/lib/utils/challenge-storage";

type ProgressIndicatorProps = {
  isFavorite?: boolean;
  status?: ChallengeStatus;
  className?: string;
};

export function ProgressIndicator({
  isFavorite,
  status,
  className,
}: ProgressIndicatorProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {isFavorite && (
        <Heart className="h-4 w-4 fill-red-500 text-red-500" />
      )}
      {status === "in-progress" && (
        <Clock className="h-4 w-4 text-blue-500" />
      )}
      {status === "completed" && (
        <CheckCircle2 className="h-4 w-4 text-green-500 fill-green-500" />
      )}
    </div>
  );
}
