"use client";

import { useEffect, useState } from "react";
import { authService } from "@/lib/services/auth.service";
import type { User } from "@supabase/supabase-js";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    authService.getCurrentUser().then((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = authService.onAuthStateChange((newUser) => {
      setUser(newUser);
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    return await authService.signIn({ email, password });
  };

  const signUp = async (
    email: string,
    password: string,
    fullName?: string,
    userType?: "user" | "guest"
  ) => {
    return await authService.signUp({ email, password, fullName, userType });
  };

  const signOut = async () => {
    return await authService.signOut();
  };

  return {
    user,
    loading,
    signIn,
    signUp,
    signOut,
  };
}
