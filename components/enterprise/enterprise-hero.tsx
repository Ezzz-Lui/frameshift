"use client";

import { ArrowRight, Building2, Users, Code, Briefcase } from "lucide-react";
import { RevealOnScroll } from "@/components/landingv2/reveal-on-scroll";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function EnterpriseHero() {
  return (
    <section className="pt-24 pb-20 border-b relative z-10 border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 border-border bg-muted">
              <Building2 className="w-4 h-4 text-foreground" />
              <span className="text-xs text-foreground">Enterprise Solutions</span>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay="100">
            <h1 className="text-5xl md:text-6xl font-medium mb-6 text-foreground">
              Build Better Tech Teams
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay="200">
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Empower your technical interviews, onboard new developers, and
              train your team with custom challenges and real-time collaborative
              coding.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay="300">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#contact">
                  Schedule a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </RevealOnScroll>
        </div>

        {/* Stats or Quick Info */}
        <RevealOnScroll delay="300">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg border flex items-center justify-center mx-auto mb-4 border-border bg-muted">
                <Users className="w-6 h-6 text-foreground" />
              </div>
              <div className="text-2xl font-medium mb-1 text-foreground">
                Tech Teams
              </div>
              <p className="text-xs text-muted-foreground">For engineering departments</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg border flex items-center justify-center mx-auto mb-4 border-border bg-muted">
                <Briefcase className="w-6 h-6 text-foreground" />
              </div>
              <div className="text-2xl font-medium mb-1 text-foreground">
                Interviews
              </div>
              <p className="text-xs text-muted-foreground">Live coding assessments</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg border flex items-center justify-center mx-auto mb-4 border-border bg-muted">
                <Code className="w-6 h-6 text-foreground" />
              </div>
              <div className="text-2xl font-medium mb-1 text-foreground">
                Custom Challenges
              </div>
              <p className="text-xs text-muted-foreground">Tailored to your stack</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg border flex items-center justify-center mx-auto mb-4 border-border bg-muted">
                <Building2 className="w-6 h-6 text-foreground" />
              </div>
              <div className="text-2xl font-medium mb-1 text-foreground">
                Enterprise
              </div>
              <p className="text-xs text-muted-foreground">SSO & security</p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
