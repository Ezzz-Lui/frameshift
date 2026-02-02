import { ArrowRight, Plus } from "lucide-react";
import Link from "next/link";
import { RevealOnScroll } from "./reveal-on-scroll";
import { Button } from "../ui/button";

export function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-32 border-b relative border-border">
      <div className="max-w-4xl">
        <RevealOnScroll>
          <div className="inline-flex items-center gap-2 px-2 py-1 rounded border text-[11px] font-mono tracking-tight mb-8 border-border bg-muted text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            TECH CHALLENGES PLATFORM
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay="100">
          <h1 className="text-5xl md:text-7xl font-medium tracking-tighter mb-8 leading-[1.05] text-foreground">
            Master any framework with <br />
            <span className="bg-gradient-to-br from-foreground via-foreground/80 to-muted-foreground bg-clip-text text-transparent">
              real-world challenges.
            </span>
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay="200">
          <p className="text-lg max-w-xl leading-relaxed font-light mb-10 text-muted-foreground">
            Practice coding challenges designed for modern frameworks. From
            React to Vue, Django to Next.js — build skills that matter in
            production environments.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay="300">
          <div className="flex items-center gap-4 mb-20">
            <Button asChild variant="default" className="h-10 px-6 rounded text-sm font-medium transition-colors flex items-center gap-2">
              <Link href="/challenges">
                Start Practicing <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-10 px-6 rounded text-sm font-medium transition-colors">
              <Link href="/challenges">
                View Challenges
              </Link>
            </Button>
          </div>
        </RevealOnScroll>
      </div>

      {/* Hero Dashboard Representation */}
      <RevealOnScroll delay="300">
        <div className="relative w-full aspect-video md:aspect-21/9 rounded-t-xl overflow-hidden border-x border-t bg-card border-border shadow-lg">
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-size:24px_24px opacity-30" />

          {/* UI Mockup */}
          <div className="absolute top-10 left-10 right-10 bottom-0 bg-card border rounded-t-lg shadow-2xl overflow-hidden flex border-border">
            {/* Sidebar */}
            <div className="w-64 border-r hidden md:block p-4 border-border">
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
              </div>
              <div className="space-y-1">
                <div className="h-8 rounded w-full border bg-muted border-border" />
                <div className="h-8 rounded w-full bg-muted/50" />
                <div className="h-8 rounded w-full bg-muted/30" />
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">
                    Total Challenges
                  </div>
                  <div className="text-3xl font-medium text-foreground">248</div>
                </div>
                <div className="flex gap-2">
                  <div className="h-8 w-24 border rounded border-border bg-muted" />
                  <div className="h-8 w-8 rounded flex items-center justify-center bg-primary text-primary-foreground">
                    <Plus className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Grid items */}
              <div className="grid grid-cols-3 gap-4">
                <div className="h-32 rounded border bg-muted/30 border-border" />
                <div className="h-32 rounded border bg-muted/30 border-border" />
                <div className="h-32 rounded border bg-muted/30 border-border" />
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
