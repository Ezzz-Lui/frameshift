"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Nav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Check if we're on the landing page (dark themed)
  const isLandingPage = pathname === "/";

  const links = [
    { href: "/", label: "Home" },
    { href: "/challenges", label: "Challenges" },
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
            <Link href="/challenges">Get Started</Link>
          </Button>
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
              href="/challenges"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "px-4 py-3 text-sm font-medium rounded-lg text-center transition-colors",
                isLandingPage
                  ? "bg-white text-black hover:bg-zinc-200"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              )}
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
