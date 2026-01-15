"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function FooterApp() {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";

  const footerLinks = {
    product: [
      { href: "/challenges", label: "Challenges" },
      { href: "/#platform", label: "Platform" },
      { href: "/#pricing", label: "Pricing" },
    ],
    resources: [
      { href: "/docs", label: "Documentation" },
      { href: "/blog", label: "Blog" },
      { href: "/changelog", label: "Changelog" },
    ],
    company: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/careers", label: "Careers" },
    ],
  };

  const socialLinks = [
    { href: "https://github.com", icon: Github, label: "GitHub" },
    { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  ];

  return (
    <footer
      className={cn(
        "border-t",
        isLandingPage
          ? "bg-black border-white/5 text-zinc-400"
          : "bg-background border-border text-muted-foreground"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
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
            <p className="text-sm max-w-xs mb-6">
              Real challenges for real developers. Master any framework with
              production-ready coding challenges.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "p-2 rounded-lg transition-colors",
                    isLandingPage
                      ? "hover:bg-white/5 hover:text-white"
                      : "hover:bg-muted hover:text-foreground"
                  )}
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3
              className={cn(
                "font-medium text-sm mb-4",
                isLandingPage ? "text-white" : "text-foreground"
              )}
            >
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm transition-colors",
                      isLandingPage
                        ? "hover:text-white"
                        : "hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3
              className={cn(
                "font-medium text-sm mb-4",
                isLandingPage ? "text-white" : "text-foreground"
              )}
            >
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm transition-colors",
                      isLandingPage
                        ? "hover:text-white"
                        : "hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3
              className={cn(
                "font-medium text-sm mb-4",
                isLandingPage ? "text-white" : "text-foreground"
              )}
            >
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm transition-colors",
                      isLandingPage
                        ? "hover:text-white"
                        : "hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={cn(
            "pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4",
            isLandingPage ? "border-white/5" : "border-border"
          )}
        >
          <p className="text-sm">
            © {new Date().getFullYear()} Frameshift. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/privacy"
              className={cn(
                "transition-colors",
                isLandingPage ? "hover:text-white" : "hover:text-foreground"
              )}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className={cn(
                "transition-colors",
                isLandingPage ? "hover:text-white" : "hover:text-foreground"
              )}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
