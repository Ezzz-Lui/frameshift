"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/hooks/use-auth";
import { enterpriseService } from "@/lib/services/enterprise.service";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, Building2, Mail, Key } from "lucide-react";

export default function EnterpriseSignUpPage() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const [step, setStep] = useState<"email" | "otp">("email");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [password, setPassword] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [sendingOTP, setSendingOTP] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Redirect if already logged in
  useEffect(() => {
    if (user && !authLoading) {
      router.push("/dashboard/enterprise");
    }
  }, [user, authLoading, router]);

  // Show loading state while checking auth
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  // Don't render form if user is logged in (will redirect)
  if (user) {
    return null;
  }

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setSendingOTP(true);
    setError(null);

    // Validate corporate email
    if (!enterpriseService.isCorporateEmail(email)) {
      setError("Please use a corporate email address (not Gmail, Yahoo, Hotmail, etc.)");
      setSendingOTP(false);
      return;
    }

    const result = await enterpriseService.sendOTP({
      email,
      companyName,
    });

    if (result.success) {
      setStep("otp");
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } else {
      setError(result.error || "Failed to send OTP");
    }

    setSendingOTP(false);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { user: signedUpUser, error: signUpError } = await enterpriseService.signUp({
      email,
      password,
      companyName,
      otpCode,
    });

    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
      return;
    }

    if (signedUpUser) {
      router.push("/dashboard/enterprise");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center gap-2 mb-2">
            <Building2 className="h-6 w-6 text-primary" />
            <CardTitle className="text-2xl font-bold">Enterprise Sign Up</CardTitle>
          </div>
          <CardDescription>
            Create an enterprise account with corporate email verification
          </CardDescription>
        </CardHeader>
        <CardContent>
          {step === "email" ? (
            <form onSubmit={handleSendOTP} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              {success && (
                <Alert>
                  <AlertDescription>OTP sent! Check your email.</AlertDescription>
                </Alert>
              )}
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  type="text"
                  placeholder="Acme Inc."
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                  disabled={sendingOTP}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Corporate Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={sendingOTP}
                />
                <p className="text-xs text-muted-foreground">
                  Must be a corporate email (not Gmail, Yahoo, etc.)
                </p>
              </div>
              <Button type="submit" className="w-full" disabled={sendingOTP}>
                {sendingOTP ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending OTP...
                  </>
                ) : (
                  <>
                    <Mail className="mr-2 h-4 w-4" />
                    Send Verification Code
                  </>
                )}
              </Button>
            </form>
          ) : (
            <form onSubmit={handleSignUp} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <div className="space-y-2">
                <Label>Email</Label>
                <div className="flex items-center gap-2 px-3 py-2 border rounded-md bg-muted">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{email}</span>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="otpCode">Verification Code</Label>
                <Input
                  id="otpCode"
                  type="text"
                  placeholder="123456"
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                  required
                  maxLength={6}
                  disabled={loading}
                />
                <p className="text-xs text-muted-foreground">
                  Enter the 6-digit code sent to your email
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  disabled={loading}
                />
                <p className="text-xs text-muted-foreground">
                  Must be at least 6 characters
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={() => {
                    setStep("email");
                    setOtpCode("");
                    setError(null);
                  }}
                  disabled={loading}
                >
                  Back
                </Button>
                <Button type="submit" className="flex-1" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating...
                    </>
                  ) : (
                    <>
                      <Key className="mr-2 h-4 w-4" />
                      Create Account
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}
          <div className="mt-4 text-center text-sm">
            <span className="text-muted-foreground">Already have an account? </span>
            <Link href="/login/enterprise" className="text-primary hover:underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
