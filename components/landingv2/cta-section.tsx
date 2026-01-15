import { RevealOnScroll } from "./reveal-on-scroll";

export function CTASection() {
  return (
    <section className="py-32 relative z-10 bg-black">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <RevealOnScroll>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-8 text-white">
            Ready to level up?
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay="100">
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 rounded text-sm font-medium transition-colors bg-white text-black hover:bg-zinc-200">
              Get Started
            </button>
            <button className="px-8 py-3 rounded border text-sm font-medium transition-colors border-white/10 text-white hover:bg-white/5">
              View Challenges
            </button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
