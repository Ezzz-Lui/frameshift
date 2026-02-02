"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle2,
  Clock,
  Heart,
  TrendingUp,
  Trophy,
} from "lucide-react";
import { getStoredChallengeData, getStats } from "@/lib/utils/challenge-storage";
import { getUnlockedBadges } from "@/lib/utils/badges";
import { challenges } from "@/data/challenges/challenges-showcase";
import { useEffect, useState } from "react";

export function UserStats() {
  const [stats, setStats] = useState({
    favorites: 0,
    completed: 0,
    inProgress: 0,
    totalTimeSpent: 0,
    viewed: 0,
  });
  const [badgesCount, setBadgesCount] = useState(0);

  useEffect(() => {
    const currentStats = getStats();
    setStats(currentStats);
    const badges = getUnlockedBadges(challenges);
    setBadgesCount(badges.length);
  }, []);

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  };

  const statCards = [
    {
      label: "Completed",
      value: stats.completed,
      icon: CheckCircle2,
      color: "text-green-500",
    },
    {
      label: "In Progress",
      value: stats.inProgress,
      icon: Clock,
      color: "text-blue-500",
    },
    {
      label: "Favorites",
      value: stats.favorites,
      icon: Heart,
      color: "text-red-500",
    },
    {
      label: "Time Spent",
      value: formatTime(stats.totalTimeSpent),
      icon: TrendingUp,
      color: "text-purple-500",
    },
    {
      label: "Badges",
      value: badgesCount,
      icon: Trophy,
      color: "text-yellow-500",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {statCards.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center p-4 rounded-lg bg-muted/50"
              >
                <Icon className={`h-6 w-6 mb-2 ${stat.color}`} />
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
