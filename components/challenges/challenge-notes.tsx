"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useChallengeProgress } from "@/lib/hooks/use-challenge-progress";
import { FileText } from "lucide-react";
import { useEffect, useState, useRef } from "react";

type ChallengeNotesProps = {
  challengeId: string;
};

export function ChallengeNotes({ challengeId }: ChallengeNotesProps) {
  const { progress, updateNotes } = useChallengeProgress(challengeId);
  const [notes, setNotes] = useState(progress?.notes || "");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setNotes(progress?.notes || "");
  }, [progress?.notes]);

  const handleNotesChange = (value: string) => {
    setNotes(value);
    
    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Debounce the update
    timeoutRef.current = setTimeout(() => {
      updateNotes(value);
    }, 500);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <FileText className="h-5 w-5 text-primary" />
          Your Notes
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          placeholder="Add your notes, ideas, or solutions here..."
          value={notes}
          onChange={(e) => handleNotesChange(e.target.value)}
          className="min-h-[150px]"
        />
        <p className="text-xs text-muted-foreground mt-2">
          Your notes are saved automatically
        </p>
      </CardContent>
    </Card>
  );
}
