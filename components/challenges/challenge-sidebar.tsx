import type { Challenge } from "@/data/challenges/challenges-showcase";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

export default function SidebarChallenge(challenge: Challenge) {
  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle className="font-extrabold text-xl">Challenge Info</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <Label className="mb-2">Repo URL</Label>
          <Input readOnly value={challenge.repoURL}></Input>
        </div>
        {/* <div className="mt-4">
          <Label className="mb-2">Resources</Label>
          <Button variant="link"></Button>
        </div> */}
      </CardContent>
    </Card>
  );
}
