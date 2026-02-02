"use client";

import { supabase } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";

export interface SignUpData {
  email: string;
  password: string;
  fullName?: string;
  userType?: "user" | "guest";
}

export interface SignInData {
  email: string;
  password: string;
}

export class AuthService {
  async signUp(data: SignUpData) {
    const { data: authData, error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          full_name: data.fullName || "",
          user_type: data.userType || "user",
        },
      },
    });

    if (error) {
      return { user: null, error };
    }

    // Update profile with user_type
    if (authData.user) {
      const userType = (data.userType || "user") as "user" | "enterprise" | "guest";
      // Type assertion needed due to Supabase type inference issue
      await (supabase
        .from("profiles") as any)
        .update({
          user_type: userType,
        })
        .eq("id", authData.user.id);
    }

    return { user: authData.user, error: null };
  }

  async signIn(data: SignInData) {
    const { data: authData, error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (error) {
      return { user: null, error };
    }

    return { user: authData.user, error: null };
  }

  async signOut() {
    const { error } = await supabase.auth.signOut();
    return { error };
  }

  async getCurrentUser(): Promise<User | null> {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return user;
  }

  async getSession() {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    return session;
  }

  onAuthStateChange(callback: (user: User | null) => void) {
    return supabase.auth.onAuthStateChange((_event, session) => {
      callback(session?.user ?? null);
    });
  }
}

export const authService = new AuthService();
