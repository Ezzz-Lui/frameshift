import Link from "next/link";
import { RevealOnScroll } from "./reveal-on-scroll";
import { Button } from "../ui/button";

export function CTASection() {
  return (
    <section className="py-32 relative z-10 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <RevealOnScroll>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-8 text-foreground">
            Ready to level up?
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay="100">
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="px-8 py-3">
              <Link href="/signup">
                Get Started
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-3">
              <Link href="/challenges">
                View Challenges
              </Link>
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
