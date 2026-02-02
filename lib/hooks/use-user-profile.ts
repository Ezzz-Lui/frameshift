"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { useAuth } from "./use-auth";

export type UserType = "user" | "enterprise" | "guest" | null;

export interface UserProfile {
  id: string;
  email: string | null;
  full_name: string | null;
  user_type: UserType;
}

export function useUserProfile() {
  const { user, loading: authLoading } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authLoading) {
      return;
    }

    if (!user) {
      setProfile(null);
      setLoading(false);
      return;
    }

    // Fetch user profile
    const fetchProfile = async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("id, email, full_name, user_type")
        .eq("id", user.id)
        .single();

      if (error || !data) {
        setProfile({
          id: user.id,
          email: user.email || null,
          full_name: null,
          user_type: null,
        });
      } else {
        const profileData = data as {
          id: string;
          email: string | null;
          full_name: string | null;
          user_type: string | null;
        };
        setProfile({
          id: profileData.id,
          email: profileData.email,
          full_name: profileData.full_name,
          user_type: (profileData.user_type as UserType) || "user",
        });
      }
      setLoading(false);
    };

    fetchProfile();

    // Listen for profile changes
    const channel = supabase
      .channel("profile-changes")
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "profiles",
          filter: `id=eq.${user.id}`,
        },
        (payload) => {
          const newData = payload.new as any;
          setProfile((prev) =>
            prev
              ? {
                  ...prev,
                  full_name: newData.full_name,
                  user_type: (newData.user_type as UserType) || "user",
                }
              : null
          );
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user, authLoading]);

  const isEnterprise = profile?.user_type === "enterprise";
  const isGuest = profile?.user_type === "guest";
  const isRegularUser = profile?.user_type === "user" || (profile && !profile.user_type);

  return {
    profile,
    loading: loading || authLoading,
    userType: profile?.user_type || null,
    isEnterprise,
    isGuest,
    isRegularUser,
  };
}
