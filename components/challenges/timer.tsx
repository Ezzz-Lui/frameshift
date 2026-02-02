"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useChallengeProgress } from "@/lib/hooks/use-challenge-progress";
import { Play, Pause, Square, Clock } from "lucide-react";
import { useState, useEffect, useRef } from "react";

type TimerProps = {
  challengeId: string;
};

export function Timer({ challengeId }: TimerProps) {
  const { progress, updateTimeSpent } = useChallengeProgress(challengeId);
  const [isRunning, setIsRunning] = useState(false);
  const [elapsed, setElapsed] = useState(progress?.timeSpent || 0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setElapsed(progress?.timeSpent || 0);
  }, [progress?.timeSpent]);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setElapsed((prev) => {
          const newValue = prev + 1;
          // Update storage every 10 seconds
          if (newValue % 10 === 0) {
            updateTimeSpent(newValue);
          }
          return newValue;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      // Save when paused
      if (elapsed > 0) {
        updateTimeSpent(elapsed);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, elapsed, updateTimeSpent]);

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, "0")}:${secs
        .toString()
        .padStart(2, "0")}`;
    }
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setElapsed(0);
    updateTimeSpent(0);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Clock className="h-5 w-5 text-primary" />
          Time Tracker
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-center">
            <div className="text-4xl font-mono font-bold">
              {formatTime(elapsed)}
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Time spent on this challenge
            </p>
          </div>

          <div className="flex gap-2 justify-center">
            {!isRunning ? (
              <Button onClick={handleStart} size="sm">
                <Play className="h-4 w-4 mr-2" />
                Start
              </Button>
            ) : (
              <Button onClick={handlePause} variant="outline" size="sm">
                <Pause className="h-4 w-4 mr-2" />
                Pause
              </Button>
            )}
            <Button onClick={handleReset} variant="outline" size="sm">
              <Square className="h-4 w-4 mr-2" />
              Reset
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
