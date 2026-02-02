"use client";

import { useAuth } from "@/lib/hooks/use-auth";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Code, Users, Clock } from "lucide-react";

export default function InterviewEditorPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const params = useParams();
  const interviewId = params.id as string;
  const [code, setCode] = useState(`// Welcome to the interview editor
// This is a provisional editor for live coding interviews

function solveChallenge() {
  // Your code here
  return "solution";
}`);
  const [sessionStatus, setSessionStatus] = useState<"scheduled" | "in-progress" | "completed">("scheduled");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login");
    }
  }, [user, authLoading, router]);

  const handleStartInterview = async () => {
    setLoading(true);
    // TODO: Implement actual interview start logic
    setTimeout(() => {
      setSessionStatus("in-progress");
      setLoading(false);
    }, 1000);
  };

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
    // TODO: Broadcast code changes via Supabase Realtime
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">Interview Session</h1>
            <p className="text-sm text-muted-foreground">Session ID: {interviewId}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>00:00</span>
            </div>
            {sessionStatus === "scheduled" && (
              <Button onClick={handleStartInterview}>
                Start Interview
              </Button>
            )}
            {sessionStatus === "in-progress" && (
              <Button variant="outline" onClick={() => setSessionStatus("completed")}>
                End Interview
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Editor */}
          <div className="lg:col-span-2 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Code Editor
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={code}
                  onChange={(e) => handleCodeChange(e.target.value)}
                  className="font-mono min-h-[500px] text-sm"
                  placeholder="Start coding..."
                />
                <p className="text-xs text-muted-foreground mt-2">
                  💡 This is a provisional editor. Real-time collaboration will be implemented soon.
                </p>
              </CardContent>
            </Card>

            {/* Output/Console */}
            <Card>
              <CardHeader>
                <CardTitle>Output</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded font-mono text-sm min-h-[200px]">
                  <p className="text-muted-foreground">Output will appear here...</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Participants */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Participants
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-2 rounded bg-muted">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium">
                      {user.email?.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-sm font-medium">You (Interviewer)</p>
                      <p className="text-xs text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded border border-dashed">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs">
                      ?
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Waiting for candidate...</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Interview Info */}
            <Card>
              <CardHeader>
                <CardTitle>Interview Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div>
                  <p className="text-muted-foreground">Status</p>
                  <p className="font-medium capitalize">{sessionStatus}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Challenge</p>
                  <p className="font-medium">Not assigned</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Candidate Email</p>
                  <p className="font-medium">Not provided</p>
                </div>
              </CardContent>
            </Card>

            {/* Notes */}
            <Card>
              <CardHeader>
                <CardTitle>Interview Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Add your notes about the candidate..."
                  className="min-h-[150px]"
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Notice */}
        <Card className="mt-6 border-yellow-500/20 bg-yellow-500/5">
          <CardHeader>
            <CardTitle className="text-lg">🚧 Provisional Editor</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This is a provisional editor interface. Real-time collaboration, code sharing,
              and interview management features are currently under development. The full
              implementation will include:
            </p>
            <ul className="text-sm text-muted-foreground mt-2 list-disc list-inside space-y-1">
              <li>Real-time code synchronization between interviewer and candidate</li>
              <li>Live cursor positions and selections</li>
              <li>Code execution and output display</li>
              <li>Video/voice integration</li>
              <li>Session recording and playback</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
