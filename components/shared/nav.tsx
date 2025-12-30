"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Nav() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/frameworks", label: "Frameworks" },
    { href: "/challenges", label: "Challenges" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background backdrop-blur-sm supports-backdrop-filter]:bg-background/60 w-full">
      <div className="flex w-full h-18 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <span className="font-bold text-xl ">Frameshift</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="hidden sm:inline-flex"
          >
            <Link href="/login">Log in</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/challenges">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
