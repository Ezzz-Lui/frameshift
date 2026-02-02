"use client";

import { useAuth } from "@/lib/hooks/use-auth";
import { useUserProfile } from "@/lib/hooks/use-user-profile";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, Video, ArrowRight } from "lucide-react";

export default function GuestDashboardPage() {
  const { user, loading } = useAuth();
  const { isGuest, loading: profileLoading } = useUserProfile();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !profileLoading) {
      if (!user) {
        router.push("/login/guest");
        return;
      }
      if (!isGuest) {
        // Redirect non-guest users to their appropriate dashboard
        router.push("/dashboard");
        return;
      }
    }
  }, [user, loading, profileLoading, isGuest, router]);

  if (loading || profileLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!user || !isGuest) {
    return null;
  }

  const handleJoinSession = () => {
    // TODO: In the future, this will navigate to the actual interview session
    // For now, it's just a placeholder
    alert("Join session functionality will be implemented soon!");
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-4xl py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Guest Dashboard</h1>
          <p className="text-muted-foreground">
            You've been invited to participate in an interview session
          </p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-primary/10">
                <Video className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle>Interview Session</CardTitle>
                <CardDescription>
                  Ready to join your interview session?
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                When your interviewer starts the session, you'll be able to join and
                work on the challenge together in real-time.
              </p>
              <Button
                onClick={handleJoinSession}
                size="lg"
                className="w-full sm:w-auto"
              >
                Join to the Session
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 p-4 rounded-lg bg-muted/50 border border-dashed">
          <p className="text-sm text-muted-foreground text-center">
            Waiting for your interviewer to start the session...
          </p>
        </div>
      </div>
    </div>
  );
}
