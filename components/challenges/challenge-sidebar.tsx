"use client";

import type { Challenge } from "@/data/challenges/challenges-showcase";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import {
  ExternalLink,
  GitBranch,
  BookMarked,
  Users,
  Star,
} from "lucide-react";
import Link from "next/link";
import { ChallengeActions } from "./challenge-actions";
import { Timer } from "./timer";
import { ChallengeNotes } from "./challenge-notes";

export default function SidebarChallenge(challenge: Challenge) {
  return (
    <div className="space-y-4">
      {/* Action Card */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-lg">Start Challenge</CardTitle>
          <CardDescription>
            Clone the repository and begin coding
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-2">
            <Button className="w-full" size="lg" asChild>
              <Link
                href={challenge.repoURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitBranch className="mr-2 h-4 w-4" />
                Take Challenge
              </Link>
            </Button>
            <Button variant="outline" className="w-full" size="lg" asChild>
              <Link
                href={challenge.repoURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Repository
              </Link>
            </Button>
          </div>

          <Separator />

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 rounded-lg bg-muted/50">
              <Users className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
              <p className="text-2xl font-bold">{challenge.completions ?? 0}</p>
              <p className="text-xs text-muted-foreground">Completions</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-muted/50">
              <Star className="h-5 w-5 mx-auto mb-1 text-yellow-500" />
              <p className="text-2xl font-bold">{challenge.rating ?? "N/A"}</p>
              <p className="text-xs text-muted-foreground">Rating</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Challenge Actions */}
      <ChallengeActions
        challengeId={challenge.id}
        challengeTitle={challenge.title}
      />

      {/* Timer */}
      <Timer challengeId={challenge.id} />

      {/* Resources Card */}
      {challenge.resourcesURL && challenge.resourcesURL.length > 0 && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <BookMarked className="h-5 w-5 text-primary" />
              Resources
            </CardTitle>
            <CardDescription>Helpful documentation and guides</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {challenge.resourcesURL.map((resource) => (
                <Link
                  key={resource.link}
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors group"
                >
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {resource.name}
                  </span>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Author Card */}
      {challenge.author && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Challenge Author</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-primary-foreground font-semibold">
                {challenge.author.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="font-medium">{challenge.author.name}</p>
                {challenge.author.github && (
                  <Link
                    href={`https://github.com/${challenge.author.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    @{challenge.author.github}
                  </Link>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
