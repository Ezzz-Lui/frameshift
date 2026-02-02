"use client";

import { ArrowUpRight, BarChart2, Users, Calendar } from "lucide-react";
import Link from "next/link";
import { RevealOnScroll } from "./reveal-on-scroll";
import { SpotlightCard } from "./background-effects";

export function SolutionsSection() {
  return (
    <section
      id="solutions"
      className="py-32 relative z-10 border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 md:flex justify-between items-end">
          <div className="max-w-xl">
            <RevealOnScroll>
              <h2 className="text-3xl font-medium mb-4 text-foreground">
                Learning Modules
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay="100">
              <p className="text-sm text-muted-foreground">
                Everything needed to master modern development, available as
                focused learning paths.
              </p>
            </RevealOnScroll>
          </div>
          <RevealOnScroll delay="200">
            <Link href="/challenges" className="mt-4 md:mt-0 text-sm flex items-center gap-2 border-b pb-1 transition-colors text-foreground border-border hover:border-primary">
              View All Paths <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </RevealOnScroll>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 h-auto md:h-[600px]">
          {/* Large Card - Analytics Engine */}
          <RevealOnScroll delay="100" className="md:col-span-2 md:row-span-2">
            <SpotlightCard className="h-full rounded-xl border p-8 flex flex-col border-border bg-card">
              <div className="mb-auto">
                <div className="w-10 h-10 rounded border flex items-center justify-center mb-4 bg-muted border-border text-foreground">
                  <BarChart2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-medium text-foreground">
                  Progress Tracking
                </h3>
                <p className="text-sm text-muted-foreground mt-2 max-w-sm">
                  Deep insights into your learning progress, skill development,
                  and performance analytics.
                </p>
              </div>
              <div className="mt-8 flex-1 border rounded-lg relative overflow-hidden bg-muted/30 border-border">
                {/* Graph mockup */}
                <div className="absolute bottom-0 left-0 right-0 h-32 flex items-end px-4 gap-2">
                  <div className="w-full h-[20%] rounded-t-sm bg-primary/20" />
                  <div className="w-full h-[40%] rounded-t-sm bg-primary/30" />
                  <div className="w-full h-[60%] rounded-t-sm bg-primary/40" />
                  <div className="w-full h-[30%] rounded-t-sm bg-primary/20" />
                  <div className="w-full h-[50%] rounded-t-sm bg-primary/30" />
                  <div className="w-full h-[80%] rounded-t-sm bg-primary/60" />
                  <div className="w-full h-[45%] rounded-t-sm bg-primary/25" />
                </div>
              </div>
            </SpotlightCard>
          </RevealOnScroll>

          {/* Small Card 1 - Community */}
          <RevealOnScroll delay="200">
            <SpotlightCard className="h-full rounded-xl border p-6 flex flex-col justify-between border-border bg-card">
              <div>
                <Users className="w-6 h-6 mb-4 text-foreground" />
                <h4 className="font-medium text-foreground">Community</h4>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Connect with other developers, share solutions, and learn
                together.
              </p>
            </SpotlightCard>
          </RevealOnScroll>

          {/* Small Card 2 - Weekly Challenges */}
          <RevealOnScroll delay="300">
            <SpotlightCard className="h-full rounded-xl border p-6 flex flex-col justify-between border-border bg-card">
              <div>
                <Calendar className="w-6 h-6 mb-4 text-foreground" />
                <h4 className="font-medium text-foreground">Weekly Challenges</h4>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                New challenges every week to keep your skills sharp and
                up-to-date.
              </p>
            </SpotlightCard>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
