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
import { Share } from "lucide-react";

export default function GridChallenges() {
  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>All challenges</CardTitle>
          <CardDescription>
            {challenges.length > 0
              ? `Showing ${challenges.length} challenges`
              : `Not founding challenges`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {challenges.map((challenge) => (
              <Card key={challenge.id} className="mb-4">
                <CardHeader>
                  <CardTitle className="font-bold">{challenge.title}</CardTitle>
                  <CardDescription className="capitalize space-x-2 pt-2">
                    <FrameworkBadge value={challenge.framework} />
                    <DifficultyBadge value={challenge.difficulty} />
                    <TypeBadge value={challenge.type} />
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{challenge.description}</p>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="outline">View challenge</Button>
                  <Button variant="secondary">
                    <Share />
                    Share
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
