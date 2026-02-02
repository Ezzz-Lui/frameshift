"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, User, LogOut, BarChart3, Settings } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/lib/hooks/use-auth";
import { useUserProfile } from "@/lib/hooks/use-user-profile";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, loading: authLoading, signOut } = useAuth();
  const { isEnterprise, isGuest, loading: profileLoading } = useUserProfile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Check if we're on the landing page (dark themed)
  const isLandingPage = pathname === "/";
  
  // Check if we're on enterprise-related pages (public)
  const isEnterprisePage = pathname === "/enterprise" || pathname.startsWith("/login/enterprise") || pathname.startsWith("/signup/enterprise");
  
  // Show Enterprise link only if:
  // - User is not logged in (public access)
  // - User is enterprise
  // - We're on enterprise pages
  const showEnterpriseLink = !user || isEnterprise || isEnterprisePage;

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  const getUserInitials = () => {
    if (!user?.email) return "U";
    const email = user.email;
    const parts = email.split("@")[0].split(".");
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return email.charAt(0).toUpperCase();
  };

  const links = [
    { href: "/", label: "Home" },
    { href: "/challenges", label: "Challenges" },
    ...(showEnterpriseLink ? [{ href: "/enterprise", label: "Enterprise" }] : []),
    { href: "/#platform", label: "Platform" },
    { href: "/#pricing", label: "Pricing" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors",
        isLandingPage
          ? "bg-black/80 backdrop-blur-md border-b border-white/5"
          : "bg-background/80 backdrop-blur-md border-b border-border"
      )}
    >
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div
            className={cn(
              "h-8 w-8 rounded-lg flex items-center justify-center font-bold text-sm",
              isLandingPage
                ? "bg-white text-black"
                : "bg-primary text-primary-foreground"
            )}
          >
            F
          </div>
          <span
            className={cn(
              "font-semibold text-lg tracking-tight",
              isLandingPage ? "text-white" : "text-foreground"
            )}
          >
            Frameshift
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                isLandingPage
                  ? cn(
                      "text-zinc-400 hover:text-white hover:bg-white/5",
                      pathname === link.href && "text-white bg-white/5"
                    )
                  : cn(
                      "text-muted-foreground hover:text-foreground hover:bg-muted",
                      pathname === link.href && "text-foreground bg-muted"
                    )
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          {authLoading || profileLoading ? (
            <div className="w-8 h-8 rounded-full bg-muted animate-pulse" />
          ) : user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={cn(
                    "flex items-center gap-2 rounded-full transition-colors",
                    isLandingPage
                      ? "text-white hover:bg-white/10"
                      : "hover:bg-muted"
                  )}
                >
                  <Avatar size="sm">
                    <AvatarFallback className={cn(
                      isLandingPage
                        ? "bg-white/10 text-white"
                        : "bg-primary text-primary-foreground"
                    )}>
                      {getUserInitials()}
                    </AvatarFallback>
                  </Avatar>
                  <span className={cn(
                    "text-sm font-medium hidden lg:block",
                    isLandingPage ? "text-white" : "text-foreground"
                  )}>
                    {user.email?.split("@")[0]}
                  </span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">My Account</p>
                    <p className="text-xs text-muted-foreground truncate">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {isGuest ? (
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard/guest" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Guest Dashboard
                    </Link>
                  </DropdownMenuItem>
                ) : (
                  <>
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard" className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        My Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/challenges" className="flex items-center gap-2">
                        <BarChart3 className="h-4 w-4" />
                        My Progress
                      </Link>
                    </DropdownMenuItem>
                    {isEnterprise && (
                      <DropdownMenuItem asChild>
                        <Link href="/dashboard/enterprise" className="flex items-center gap-2">
                          <Settings className="h-4 w-4" />
                          Enterprise Dashboard
                        </Link>
                      </DropdownMenuItem>
                    )}
                  </>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={handleSignOut}
                  className="text-destructive focus:text-destructive"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className={cn(
                  isLandingPage && "text-zinc-400 hover:text-white hover:bg-white/5"
                )}
              >
                <Link href="/login">Log in</Link>
              </Button>
              <Button
                size="sm"
                asChild
                className={cn(
                  isLandingPage && "bg-white text-black hover:bg-zinc-200 border-0"
                )}
              >
                <Link href="/signup">Sign up</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            "md:hidden p-2 rounded-lg transition-colors",
            isLandingPage
              ? "text-white hover:bg-white/5"
              : "text-foreground hover:bg-muted"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={cn(
            "md:hidden border-t",
            isLandingPage
              ? "bg-black/95 backdrop-blur-md border-white/5"
              : "bg-background/95 backdrop-blur-md border-border"
          )}
        >
          <nav className="flex flex-col p-4 gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                  isLandingPage
                    ? cn(
                        "text-zinc-400 hover:text-white hover:bg-white/5",
                        pathname === link.href && "text-white bg-white/5"
                      )
                    : cn(
                        "text-muted-foreground hover:text-foreground hover:bg-muted",
                        pathname === link.href && "text-foreground bg-muted"
                      )
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t my-2 border-white/5" />
            {authLoading || profileLoading ? (
              <div className="px-4 py-3 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-muted animate-pulse" />
              </div>
            ) : user ? (
              <>
                <div className="px-4 py-2 flex items-center gap-3">
                  <Avatar size="sm">
                    <AvatarFallback className={cn(
                      isLandingPage
                        ? "bg-white/10 text-white"
                        : "bg-primary text-primary-foreground"
                    )}>
                      {getUserInitials()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className={cn(
                      "text-sm font-medium truncate",
                      isLandingPage ? "text-white" : "text-foreground"
                    )}>
                      {user.email?.split("@")[0]}
                    </p>
                    <p className={cn(
                      "text-xs truncate",
                      isLandingPage ? "text-zinc-400" : "text-muted-foreground"
                    )}>
                      {user.email}
                    </p>
                  </div>
                </div>
                {isGuest ? (
                  <Link
                    href="/dashboard/guest"
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                      isLandingPage
                        ? "text-zinc-400 hover:text-white hover:bg-white/5"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                  >
                    Guest Dashboard
                  </Link>
                ) : (
                  <>
                    <Link
                      href="/dashboard"
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                        isLandingPage
                          ? "text-zinc-400 hover:text-white hover:bg-white/5"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      )}
                    >
                      My Dashboard
                    </Link>
                    <Link
                      href="/challenges"
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                        isLandingPage
                          ? "text-zinc-400 hover:text-white hover:bg-white/5"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      )}
                    >
                      My Progress
                    </Link>
                    {isEnterprise && (
                      <Link
                        href="/dashboard/enterprise"
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                          isLandingPage
                            ? "text-zinc-400 hover:text-white hover:bg-white/5"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        )}
                      >
                        Enterprise Dashboard
                      </Link>
                    )}
                  </>
                )}
                <button
                  onClick={() => {
                    handleSignOut();
                    setMobileMenuOpen(false);
                  }}
                  className={cn(
                    "px-4 py-3 text-sm font-medium rounded-lg text-left w-full transition-colors text-destructive",
                    isLandingPage
                      ? "hover:bg-white/5"
                      : "hover:bg-muted"
                  )}
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                    isLandingPage
                      ? "text-zinc-400 hover:text-white hover:bg-white/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 text-sm font-medium rounded-lg text-center transition-colors",
                    isLandingPage
                      ? "bg-white text-black hover:bg-zinc-200"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  )}
                >
                  Sign up
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
