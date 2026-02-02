"use client";

import { useAuth } from "@/lib/hooks/use-auth";
import { useUserProfile } from "@/lib/hooks/use-user-profile";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { UserStats } from "@/components/challenges/user-stats";
import { BadgesDisplay } from "@/components/challenges/badges-display";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Loader2, User, Mail } from "lucide-react";

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const { isEnterprise, isGuest, loading: profileLoading } = useUserProfile();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !profileLoading) {
      if (!user) {
        router.push("/login");
        return;
      }
      // Redirect enterprise users to their dashboard
      if (isEnterprise) {
        router.push("/dashboard/enterprise");
        return;
      }
      // Redirect guest users to their dashboard
      if (isGuest) {
        router.push("/dashboard/guest");
        return;
      }
    }
  }, [user, loading, profileLoading, isEnterprise, isGuest, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const getUserInitials = () => {
    if (!user?.email) return "U";
    const email = user.email;
    const parts = email.split("@")[0].split(".");
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return email.charAt(0).toUpperCase();
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">My Dashboard</h1>
        <p className="text-muted-foreground">
          Track your progress and manage your account
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Profile Card */}
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>Your account information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Avatar size="lg">
                <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                  {getUserInitials()}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <p className="font-medium">{user.email?.split("@")[0]}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground truncate">
                    {user.email}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Account Type */}
        <Card>
          <CardHeader>
            <CardTitle>Account Type</CardTitle>
            <CardDescription>Your current plan</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">🆓</span>
              </div>
              <div>
                <p className="font-medium">Free</p>
                <p className="text-sm text-muted-foreground">
                  Full access to all challenges
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <a
              href="/challenges"
              className="block px-4 py-2 rounded-lg border hover:bg-muted transition-colors text-sm"
            >
              Browse Challenges
            </a>
          </CardContent>
        </Card>
      </div>

      {/* Stats and Badges */}
      <Tabs defaultValue="stats" className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-md">
          <TabsTrigger value="stats">Statistics</TabsTrigger>
          <TabsTrigger value="badges">Badges</TabsTrigger>
        </TabsList>
        <TabsContent value="stats" className="mt-6">
          <UserStats />
        </TabsContent>
        <TabsContent value="badges" className="mt-6">
          <BadgesDisplay />
        </TabsContent>
      </Tabs>
    </div>
  );
}
