"use client";

import { ArrowRight, Mail, Calendar, Check } from "lucide-react";
import { RevealOnScroll } from "@/components/landingv2/reveal-on-scroll";
import { SpotlightCard } from "@/components/landingv2/background-effects";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function PricingCTA() {
  return (
    <section id="contact" className="py-32 border-b relative z-10 border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Pricing Info */}
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-medium mb-4 text-foreground">
                Custom Pricing for Your Team
              </h2>
              <p className="text-sm text-muted-foreground mb-8 max-w-2xl mx-auto">
                Enterprise pricing is tailored to your team size, needs, and
                requirements. Contact us to discuss your specific use case.
              </p>
            </div>
          </RevealOnScroll>

          {/* Pricing Card */}
          <RevealOnScroll delay="100">
            <SpotlightCard className="border rounded-xl p-8 md:p-12 border-border bg-card">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-medium mb-6 text-foreground">
                    What's Included
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Unlimited custom challenges",
                      "Real-time collaborative editor",
                      "Team analytics & reporting",
                      "SSO/SAML integration",
                      "Dedicated account manager",
                      "Priority support",
                      "Custom onboarding & training",
                      "API access",
                    ].map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-foreground"
                      >
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-6 text-foreground">
                    Get Started
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Schedule a demo to see FrameShift Enterprise in action and
                    discuss how it can fit your team's needs.
                  </p>
                  <div className="space-y-3">
                    <Button
                      size="lg"
                      className="w-full"
                      asChild
                    >
                      <a href="mailto:sales@frameshift.dev">
                        <Mail className="mr-2 h-4 w-4" />
                        Contact Sales
                      </a>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full"
                      asChild
                    >
                      <a href="https://cal.com/frameshift/demo" target="_blank" rel="noopener noreferrer">
                        <Calendar className="mr-2 h-4 w-4" />
                        Schedule Demo
                      </a>
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-6">
                    Or explore our{" "}
                    <Link
                      href="/challenges"
                      className="text-primary hover:underline"
                    >
                      free challenges
                    </Link>{" "}
                    to see what FrameShift offers.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
