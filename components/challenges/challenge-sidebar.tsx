import type { Challenge } from "@/data/challenges/challenges-showcase";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function SidebarChallenge(challenge: Challenge) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-extrabold text-xl">Challenge Info</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <Label className="mb-2">Repo URL</Label>
          <Input readOnly value={challenge.repoURL}></Input>
        </div>
        <div className="mt-4">
          <Label className="mb-2 text-xl">Resources</Label>
          {challenge.resourcesURL?.map((resource) => (
            <div key={resource.link}>
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-muted-foreground block mb-1"
              >
                {resource.name}
              </a>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
