import { ArrowRight, Plus, Sparkles } from "lucide-react";
import Link from "next/link";
import { RevealOnScroll } from "./reveal-on-scroll";
import { Button } from "../ui/button";

export function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20 md:pb-32 border-b relative border-border">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column - Content */}
        <div className="max-w-2xl">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[11px] font-mono tracking-tight mb-6 border-border bg-muted/50 text-muted-foreground">
              <Sparkles className="w-3 h-3 text-primary" />
              REAL-WORLD CODE CHALLENGES
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay="100">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter mb-6 leading-[1.05] text-foreground">
              Build production skills with{" "}
              <span className="bg-gradient-to-br from-foreground via-foreground/80 to-muted-foreground bg-clip-text text-transparent">
                real code challenges
              </span>
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay="200">
            <p className="text-base md:text-lg max-w-xl leading-relaxed font-light mb-8 text-muted-foreground">
              No algorithms. No theory. Just real-world projects: bug fixing,
              feature implementation, and architecture decisions. Practice with
              React, Vue, Django, Next.js, and more.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay="300">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
              <Button
                asChild
                variant="default"
                size="lg"
                className="h-11 px-8 rounded-md text-sm font-medium transition-colors flex items-center gap-2"
              >
                <Link href="/challenges">
                  Start Practicing <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-11 px-8 rounded-md text-sm font-medium transition-colors"
              >
                <Link href="#platform">Explore Features</Link>
              </Button>
            </div>
          </RevealOnScroll>

          {/* Quick Stats */}
          <RevealOnScroll delay="400">
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div>
                <span className="font-medium text-foreground">248+</span>{" "}
                Challenges
              </div>
              <div className="h-4 w-px bg-border" />
              <div>
                <span className="font-medium text-foreground">50+</span>{" "}
                Frameworks
              </div>
              <div className="h-4 w-px bg-border" />
              <div>
                <span className="font-medium text-foreground">Free</span> to
                start
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Right Column - Dashboard Mockup */}
        <RevealOnScroll delay="200">
          <div className="relative w-full aspect-video lg:aspect-square rounded-xl overflow-hidden border bg-card border-border shadow-lg lg:shadow-xl">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

            {/* UI Mockup */}
            <div className="absolute inset-4 md:inset-6 lg:inset-8 bg-card border rounded-lg shadow-2xl overflow-hidden flex flex-col border-border">
              {/* Browser Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/30 border border-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30 border border-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/30 border border-green-500/50" />
                </div>
                <div className="flex-1 mx-4 h-6 rounded border bg-background border-border" />
              </div>

              {/* Main Content */}
              <div className="flex-1 p-4 md:p-6 flex flex-col">
                {/* Header Stats */}
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <div className="text-[9px] md:text-[10px] text-muted-foreground uppercase tracking-widest mb-1">
                      Total Challenges
                    </div>
                    <div className="text-2xl md:text-3xl font-medium text-foreground">
                      248
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-7 md:h-8 w-16 md:w-24 border rounded border-border bg-muted" />
                    <div className="h-7 md:h-8 w-7 md:w-8 rounded flex items-center justify-center bg-primary text-primary-foreground">
                      <Plus className="w-3 md:w-4 h-3 md:h-4" />
                    </div>
                  </div>
                </div>

                {/* Challenge Grid */}
                <div className="grid grid-cols-3 gap-2 md:gap-3 flex-1">
                  <div className="rounded border bg-muted/30 border-border" />
                  <div className="rounded border bg-muted/40 border-border" />
                  <div className="rounded border bg-muted/30 border-border" />
                  <div className="rounded border bg-muted/20 border-border" />
                  <div className="rounded border bg-muted/30 border-border" />
                  <div className="rounded border bg-muted/25 border-border" />
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
