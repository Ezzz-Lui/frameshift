import { ArrowRight, Plus } from "lucide-react";
import { RevealOnScroll } from "./reveal-on-scroll";

export function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-32 border-b relative border-white/5">
      <div className="max-w-4xl">
        <RevealOnScroll>
          <div className="inline-flex items-center gap-2 px-2 py-1 rounded border text-[11px] font-mono tracking-tight mb-8 border-white/10 bg-white/5 text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            TECH CHALLENGES PLATFORM
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay="100">
          <h1 className="text-5xl md:text-7xl font-medium tracking-tighter mb-8 leading-[1.05] text-white">
            Master any framework with <br />
            <span className="bg-gradient-to-br from-white via-white/80 to-zinc-500 bg-clip-text text-transparent">
              real-world challenges.
            </span>
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay="200">
          <p className="text-lg max-w-xl leading-relaxed font-light mb-10 text-zinc-400">
            Practice coding challenges designed for modern frameworks. From
            React to Vue, Django to Next.js — build skills that matter in
            production environments.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay="300">
          <div className="flex items-center gap-4 mb-20">
            <button className="h-10 px-6 rounded text-sm font-medium transition-colors flex items-center gap-2 bg-white text-black hover:bg-zinc-200">
              Start Practicing <ArrowRight className="w-4 h-4" />
            </button>
            <button className="h-10 px-6 rounded border text-sm font-medium transition-colors border-white/10 text-white hover:bg-white/5">
              View Challenges
            </button>
          </div>
        </RevealOnScroll>
      </div>

      {/* Hero Dashboard Representation */}
      <RevealOnScroll delay="300">
        <div className="relative w-full aspect-video md:aspect-21/9 rounded-t-xl overflow-hidden border-x border-t bg-[#050505] border-white/10">
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

          {/* UI Mockup */}
          <div className="absolute top-10 left-10 right-10 bottom-0 bg-[#0A0A0A] border rounded-t-lg shadow-2xl overflow-hidden flex border-white/10">
            {/* Sidebar */}
            <div className="w-64 border-r hidden md:block p-4 border-white/5">
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
              </div>
              <div className="space-y-1">
                <div className="h-8 rounded w-full border bg-white/5 border-white/5" />
                <div className="h-8 rounded w-full" />
                <div className="h-8 rounded w-full" />
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">
                    Total Challenges
                  </div>
                  <div className="text-3xl font-medium text-white">248</div>
                </div>
                <div className="flex gap-2">
                  <div className="h-8 w-24 border rounded border-white/10 bg-black" />
                  <div className="h-8 w-8 rounded flex items-center justify-center bg-white text-black">
                    <Plus className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Grid items */}
              <div className="grid grid-cols-3 gap-4">
                <div className="h-32 rounded border bg-white/2 border-white/5" />
                <div className="h-32 rounded border bg-white/2 border-white/5" />
                <div className="h-32 rounded border bg-white/2 border-white/5" />
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
