import type { Challenge } from "@/data/challenges/challenges-showcase";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { FrameworkBadge, DifficultyBadge, TypeBadge } from "./badges-usage";
import { Badge } from "../ui/badge";

export default function ChallengeDetailItem(challenge: Challenge) {
  return (
    <Card>
      <CardHeader>
        <CardDescription className="flex gap-2 capitalize mb-2">
          <FrameworkBadge value={challenge.framework} />
          <DifficultyBadge value={challenge.difficulty} />
          <TypeBadge value={challenge.type} />
        </CardDescription>
        <CardTitle className="font-extrabold text-xl">
          {challenge.title}
        </CardTitle>
        <CardDescription>Estimated Time: {challenge.time}</CardDescription>
      </CardHeader>
      <CardContent className="text-muted-foreground">
        {challenge.description}
      </CardContent>
      <CardFooter>
        <div className="flex gap-2">
          {challenge.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
