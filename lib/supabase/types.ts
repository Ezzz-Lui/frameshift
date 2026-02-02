// This will be generated from Supabase CLI later
// For now, we'll define basic types

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string | null
          full_name: string | null
          avatar_url: string | null
          github_username: string | null
          user_type: "user" | "enterprise" | "guest" | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email?: string | null
          full_name?: string | null
          avatar_url?: string | null
          github_username?: string | null
          user_type?: "user" | "enterprise" | "guest" | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string | null
          full_name?: string | null
          avatar_url?: string | null
          github_username?: string | null
          user_type?: "user" | "enterprise" | "guest" | null
          created_at?: string
          updated_at?: string
        }
      }
      challenge_progress: {
        Row: {
          id: string
          user_id: string
          challenge_id: string
          status: "pending" | "in-progress" | "completed"
          started_at: string | null
          completed_at: string | null
          time_spent: number
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          challenge_id: string
          status?: "pending" | "in-progress" | "completed"
          started_at?: string | null
          completed_at?: string | null
          time_spent?: number
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          challenge_id?: string
          status?: "pending" | "in-progress" | "completed"
          started_at?: string | null
          completed_at?: string | null
          time_spent?: number
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      favorites: {
        Row: {
          id: string
          user_id: string
          challenge_id: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          challenge_id: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          challenge_id?: string
          created_at?: string
        }
      }
      ratings: {
        Row: {
          id: string
          user_id: string
          challenge_id: string
          rating: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          challenge_id: string
          rating: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          challenge_id?: string
          rating?: number
          created_at?: string
          updated_at?: string
        }
      }
      recently_viewed: {
        Row: {
          id: string
          user_id: string
          challenge_id: string
          viewed_at: string
        }
        Insert: {
          id?: string
          user_id: string
          challenge_id: string
          viewed_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          challenge_id?: string
          viewed_at?: string
        }
      }
      organizations: {
        Row: {
          id: string
          name: string
          domain: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          domain?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          domain?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      organization_members: {
        Row: {
          id: string
          organization_id: string
          user_id: string
          role: "admin" | "member" | "interviewer"
          created_at: string
        }
        Insert: {
          id?: string
          organization_id: string
          user_id: string
          role?: "admin" | "member" | "interviewer"
          created_at?: string
        }
        Update: {
          id?: string
          organization_id?: string
          user_id?: string
          role?: "admin" | "member" | "interviewer"
          created_at?: string
        }
      }
      interview_sessions: {
        Row: {
          id: string
          interviewer_id: string
          candidate_id: string | null
          candidate_email: string | null
          challenge_id: string | null
          organization_id: string | null
          status: "scheduled" | "in-progress" | "completed" | "cancelled"
          started_at: string | null
          ended_at: string | null
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          interviewer_id: string
          candidate_id?: string | null
          candidate_email?: string | null
          challenge_id?: string | null
          organization_id?: string | null
          status?: "scheduled" | "in-progress" | "completed" | "cancelled"
          started_at?: string | null
          ended_at?: string | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          interviewer_id?: string
          candidate_id?: string | null
          candidate_email?: string | null
          challenge_id?: string | null
          organization_id?: string | null
          status?: "scheduled" | "in-progress" | "completed" | "cancelled"
          started_at?: string | null
          ended_at?: string | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      enterprise_otp: {
        Row: {
          id: string
          email: string
          company_name: string
          otp_code: string
          expires_at: string
          used: boolean
          created_at: string
        }
        Insert: {
          id?: string
          email: string
          company_name: string
          otp_code: string
          expires_at: string
          used?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          company_name?: string
          otp_code?: string
          expires_at?: string
          used?: boolean
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      verify_enterprise_otp: {
        Args: {
          p_email: string
          p_otp_code: string
        }
        Returns: {
          valid: boolean
          company_name: string | null
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
  }
}
