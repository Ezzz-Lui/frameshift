import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";
import { getBaseUrl } from "@/lib/utils/urls";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const origin = requestUrl.origin;

  if (code) {
    const supabase = await createClient();
    await supabase.auth.exchangeCodeForSession(code);
  }

  // URL to redirect to after sign in process completes
  // Use the request origin to handle both localhost and Vercel previews correctly
  const redirectUrl = `${origin}/challenges`;
  return NextResponse.redirect(redirectUrl);
}
