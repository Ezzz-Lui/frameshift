"use client";

import { challenges } from "@/data/challenges/challenges-showcase";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  FrameworkBadge,
  DifficultyBadge,
  TypeBadge,
} from "@/components/challenges/badges-usage";
import { Button } from "../ui/button";
import { Share2 } from "lucide-react";
import Link from "next/link";
import { ProgressIndicator } from "./progress-indicator";
import { useChallengeFilters } from "@/lib/hooks/use-challenge-filters";
import { isFavorite, getProgress } from "@/lib/utils/challenge-storage";
import { useState, useEffect } from "react";

export default function GridChallenges() {
  const { filterChallenges, filters } = useChallengeFilters();
  const [filteredChallenges, setFilteredChallenges] = useState(challenges);

  useEffect(() => {
    const filtered = filterChallenges(challenges);
    setFilteredChallenges(filtered);
  }, [filterChallenges, filters]);

  const handleShare = async (challengeId: string) => {
    const url = `${window.location.origin}/challenges/${challengeId}`;
    try {
      await navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>All challenges</CardTitle>
          <CardDescription>
            {filteredChallenges.length > 0
              ? `Showing ${filteredChallenges.length} of ${challenges.length} challenges`
              : `No challenges found`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {filteredChallenges.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No challenges match your filters. Try adjusting your search.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {filteredChallenges.map((challenge) => {
                const favorite = isFavorite(challenge.id);
                const progress = getProgress(challenge.id);
                return (
                  <Card key={challenge.id} className="mb-4 relative">
                    <div className="absolute top-4 right-4">
                      <ProgressIndicator
                        isFavorite={favorite}
                        status={progress?.status}
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="font-bold pr-8">
                        {challenge.title}
                      </CardTitle>
                      <CardDescription className="capitalize space-x-2 pt-2">
                        <FrameworkBadge value={challenge.framework} />
                        <DifficultyBadge value={challenge.difficulty} />
                        <TypeBadge value={challenge.type} />
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {challenge.description}
                      </p>
                    </CardContent>
                    <CardFooter className="flex gap-2">
                      <Button variant="outline" asChild>
                        <Link href={`/challenges/${challenge.id}`}>
                          View challenge
                        </Link>
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={() => handleShare(challenge.id)}
                      >
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
