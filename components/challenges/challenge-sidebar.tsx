import type { Challenge } from "@/data/challenges/challenges-showcase";
import { Card, CardHeader, CardTitle } from "../ui/card";

export default function SidebarChallenge(challenge: Challenge) {
  return (
    <Card className="p-4">
        <CardHeader>
            <CardTitle>Info</CardTitle>
        </CardHeader>
    </Card>
  );
}
