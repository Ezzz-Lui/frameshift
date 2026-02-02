/**
 * Get the base URL for the application
 * Works in both development and production (Vercel)
 */
export function getBaseUrl(): string {
  // In production (Vercel), use the environment variable
  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  }
  
  // In production with custom domain
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  
  // In development
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }
  
  // Fallback
  return "https://frameshift-sigma.vercel.app";
}

/**
 * Get the auth callback URL
 */
export function getAuthCallbackUrl(): string {
  return `${getBaseUrl()}/auth/callback`;
}
