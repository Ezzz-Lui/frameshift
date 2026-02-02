"use client";

import { supabase } from "@/lib/supabase/client";

// Generic email domains that should be rejected
const GENERIC_EMAIL_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "aol.com",
  "icloud.com",
  "mail.com",
  "protonmail.com",
  "yandex.com",
  "zoho.com",
  "gmx.com",
  "live.com",
  "msn.com",
];

export interface EnterpriseSignUpData {
  email: string;
  password: string;
  companyName: string;
  otpCode: string;
}

export interface SendOTPData {
  email: string;
  companyName: string;
}

export class EnterpriseService {
  /**
   * Validates if an email is from a corporate domain
   */
  isCorporateEmail(email: string): boolean {
    const domain = email.split("@")[1]?.toLowerCase();
    if (!domain) return false;
    
    // Check if it's a generic email domain
    if (GENERIC_EMAIL_DOMAINS.includes(domain)) {
      return false;
    }
    
    // Additional check: corporate emails usually don't have numbers in the domain
    // and are not too short (like "a.com")
    return domain.length > 3 && !/^\d+/.test(domain);
  }

  /**
   * Generates a 6-digit OTP code
   */
  generateOTP(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  /**
   * Sends OTP code to corporate email
   * In production, this would integrate with an email service
   */
  async sendOTP(data: SendOTPData): Promise<{ success: boolean; error?: string }> {
    // Validate corporate email
    if (!this.isCorporateEmail(data.email)) {
      return {
        success: false,
        error: "Please use a corporate email address (not Gmail, Yahoo, etc.)",
      };
    }

    const otpCode = this.generateOTP();
    const expiresAt = new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + 15); // OTP expires in 15 minutes

    // Store OTP in database
    const { error } = await (supabase.from("enterprise_otp") as any).insert({
      email: data.email.toLowerCase(),
      company_name: data.companyName,
      otp_code: otpCode,
      expires_at: expiresAt.toISOString(),
    });

    if (error) {
      return {
        success: false,
        error: "Failed to generate OTP. Please try again.",
      };
    }

    // TODO: In production, send email via Supabase Edge Function or email service
    // For now, we'll log it (in development, you can check the console)
    console.log("OTP Code for", data.email, ":", otpCode);
    console.log("⚠️ In production, this should be sent via email");

    return {
      success: true,
    };
  }

  /**
   * Verifies OTP code using secure database function
   */
  async verifyOTP(email: string, otpCode: string): Promise<{ valid: boolean; error?: string; companyName?: string }> {
    const { data, error } = await (supabase.rpc as any)("verify_enterprise_otp", {
      p_email: email.toLowerCase(),
      p_otp_code: otpCode,
    });

    if (error || !data || data.length === 0 || !data[0].valid) {
      return {
        valid: false,
        error: "Invalid or expired OTP code",
      };
    }

    return {
      valid: true,
      companyName: data[0].company_name,
    };
  }

  /**
   * Signs up an enterprise user
   */
  async signUp(data: EnterpriseSignUpData): Promise<{ user: any; error: any }> {
    // Verify OTP first
    const otpVerification = await this.verifyOTP(data.email, data.otpCode);
    if (!otpVerification.valid) {
      return {
        user: null,
        error: { message: otpVerification.error || "Invalid OTP" },
      };
    }

    // Create auth user
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          full_name: data.companyName,
          user_type: "enterprise",
        },
      },
    });

    if (authError) {
      return { user: null, error: authError };
    }

    // Update profile with user_type and company name
    if (authData.user) {
      await (supabase.from("profiles") as any)
        .update({
          user_type: "enterprise",
          full_name: data.companyName,
        })
        .eq("id", authData.user.id);
    }

    return { user: authData.user, error: null };
  }
}

export const enterpriseService = new EnterpriseService();
