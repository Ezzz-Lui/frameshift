"use client";

import { useAuth } from "@/lib/hooks/use-auth";
import { useUserProfile } from "@/lib/hooks/use-user-profile";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Users, Calendar, Code, Loader2 } from "lucide-react";
import Link from "next/link";

export default function EnterpriseDashboardPage() {
  const { user, loading } = useAuth();
  const { isEnterprise, loading: profileLoading } = useUserProfile();
  const router = useRouter();
  const [stats, setStats] = useState({
    interviews: 0,
    teamMembers: 0,
    challenges: 0,
  });

  useEffect(() => {
    if (!loading && !profileLoading) {
      if (!user) {
        router.push("/login/enterprise");
        return;
      }
      if (!isEnterprise) {
        // Redirect non-enterprise users to their appropriate dashboard
        router.push("/dashboard");
        return;
      }
    }
  }, [user, loading, profileLoading, isEnterprise, router]);

  if (loading || profileLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!user || !isEnterprise) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Enterprise Dashboard</h1>
        <p className="text-muted-foreground">
          Manage your team, interviews, and custom challenges
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Interviews</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.interviews}</div>
            <p className="text-xs text-muted-foreground">Scheduled this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Team Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.teamMembers}</div>
            <p className="text-xs text-muted-foreground">Active members</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Custom Challenges</CardTitle>
            <Code className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.challenges}</div>
            <p className="text-xs text-muted-foreground">Created challenges</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Interview Management</CardTitle>
            <CardDescription>
              Schedule and manage technical interviews
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button asChild className="w-full">
                <Link href="/dashboard/enterprise/interviews">
                  View Interviews
                </Link>
              </Button>
              <Button variant="outline" asChild className="w-full">
                <Link href="/dashboard/enterprise/interviews/new">
                  Schedule New Interview
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Team Management</CardTitle>
            <CardDescription>
              Manage team members and permissions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button asChild className="w-full">
                <Link href="/dashboard/enterprise/team">
                  View Team
                </Link>
              </Button>
              <Button variant="outline" asChild className="w-full">
                <Link href="/dashboard/enterprise/team/invite">
                  Invite Member
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Custom Challenges</CardTitle>
            <CardDescription>
              Create and manage custom challenges for your team
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button asChild className="w-full">
                <Link href="/dashboard/enterprise/challenges">
                  View Challenges
                </Link>
              </Button>
              <Button variant="outline" asChild className="w-full">
                <Link href="/dashboard/enterprise/challenges/new">
                  Create Challenge
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>
              View team performance and insights
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/dashboard/enterprise/analytics">
                View Analytics
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Notice */}
      <Card className="mt-8 border-yellow-500/20 bg-yellow-500/5">
        <CardHeader>
          <CardTitle className="text-lg">🚧 Under Development</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            This dashboard is currently under development. Full functionality will be available soon.
            For now, you can explore the structure and prepare for the upcoming features.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
