"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy } from "lucide-react";
import { getUnlockedBadges } from "@/lib/utils/badges";
import { challenges } from "@/data/challenges/challenges-showcase";
import { useEffect, useState } from "react";
import type { Badge as BadgeType } from "@/lib/utils/badges";

export function BadgesDisplay() {
  const [badges, setBadges] = useState<BadgeType[]>([]);

  useEffect(() => {
    setBadges(getUnlockedBadges(challenges));
  }, []);

  if (badges.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Trophy className="h-5 w-5 text-primary" />
          Your Badges
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {badges.map((badge) => (
            <Badge
              key={badge.id}
              variant="secondary"
              className="text-sm py-1 px-3"
              title={badge.description}
            >
              <span className="mr-1">{badge.icon}</span>
              {badge.name}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
