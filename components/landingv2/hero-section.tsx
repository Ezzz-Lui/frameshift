import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { RevealOnScroll } from "./reveal-on-scroll";
import { Button } from "../ui/button";

export function HeroSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 pb-20 md:pb-32 border-b relative border-border">
      <div className="flex flex-col items-center text-center">
        {/* Hero Content */}
        <div className="max-w-3xl">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-mono tracking-tight mb-6 border-border bg-muted/50 text-muted-foreground">
              REAL-WORLD CODE CHALLENGES
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay="100">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tighter mb-8 leading-[1.05] text-foreground">
              Build production skills with{" "}
              <span className="bg-linear-to-br from-foreground via-foreground/80 to-muted-foreground bg-clip-text text-transparent">
                real code challenges
              </span>
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay="200">
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light mb-12 text-muted-foreground">
              No algorithms. No theory. Just real-world projects: bug fixing,
              feature implementation, and architecture decisions. Practice with
              React, Vue, Django, Next.js, and more.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay="300">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button
                asChild
                variant="default"
                size="lg"
                className="h-12 px-10 rounded-md text-base font-medium transition-colors flex items-center gap-2"
              >
                <Link href="/challenges">
                  Start Practicing <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 px-10 rounded-md text-base font-medium transition-colors"
              >
                <Link href="#platform">Explore Features</Link>
              </Button>
            </div>
          </RevealOnScroll>

          {/* Quick Stats */}
          <RevealOnScroll delay="300">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm md:text-base text-muted-foreground">
              <div>
                <span className="font-medium text-foreground">248+</span>{" "}
                Challenges
              </div>
              <div className="h-4 w-px bg-border hidden sm:block" />
              <div>
                <span className="font-medium text-foreground">50+</span>{" "}
                Frameworks
              </div>
              <div className="h-4 w-px bg-border hidden sm:block" />
              <div>
                <span className="font-medium text-foreground">Free</span> to
                start
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
