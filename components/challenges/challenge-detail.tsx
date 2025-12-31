import type { Challenge } from "@/data/challenges/challenges-showcase";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

export default function ChallengeDetailItem(challenge: Challenge) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-extrabold text-xl">
            {challenge.title}
        </CardTitle>
        <CardDescription>{challenge.description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
