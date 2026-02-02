"use client";

import type { Challenge } from "@/data/challenges/challenges-showcase";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { FrameworkBadge, DifficultyBadge, TypeBadge } from "./badges-usage";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import {
  Clock,
  Target,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
} from "lucide-react";
import { ChallengeNotes } from "./challenge-notes";

export default function ChallengeDetailItem(challenge: Challenge) {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <Card className="border-none bg-gradient-to-br from-background to-muted/30">
        <CardHeader className="pb-4">
          <div className="flex flex-wrap gap-2 mb-4">
            <FrameworkBadge value={challenge.framework} />
            <DifficultyBadge value={challenge.difficulty} />
            <TypeBadge value={challenge.type} />
          </div>
          <CardTitle className="text-3xl font-bold tracking-tight">
            {challenge.title}
          </CardTitle>
          <CardDescription className="text-base mt-2 flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {challenge.time}
            </span>
            <span className="flex items-center gap-1.5">
              <Target className="h-4 w-4" />
              {challenge.type.replace("-", " ")}
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {challenge.description}
          </p>
          <Separator className="my-6" />
          <div className="flex flex-wrap gap-2">
            {challenge.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="px-3 py-1 text-sm"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Learning Objectives */}
      {challenge.objectives && challenge.objectives.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Learning Objectives
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {challenge.objectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{objective}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Requirements */}
      {challenge.requirements && challenge.requirements.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-orange-500" />
              Requirements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {challenge.requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-3">
                  <BookOpen className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{req}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Hints */}
      {challenge.hints && challenge.hints.length > 0 && (
        <Card className="border-yellow-500/20 bg-yellow-500/5">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-yellow-500" />
              Hints
            </CardTitle>
            <CardDescription>
              Stuck? Here are some hints to help you get started
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {challenge.hints.map((hint, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-500/20 text-xs font-medium text-yellow-600">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground">{hint}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Personal Notes */}
      <ChallengeNotes challengeId={challenge.id} />
    </div>
  );
}
