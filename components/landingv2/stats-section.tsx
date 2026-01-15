import { RevealOnScroll } from "./reveal-on-scroll";

interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { value: "50+", label: "Frameworks" },
  { value: "248", label: "Challenges" },
  { value: "10K+", label: "Developers" },
  { value: "Free", label: "To Start" },
];

export function StatsSection() {
  return (
    <section className="border-b relative z-10 border-white/5 bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
        {stats.map((stat, index) => (
          <RevealOnScroll
            key={stat.label}
            delay={
              index === 0
                ? undefined
                : index === 1
                ? "100"
                : index === 2
                ? "200"
                : "300"
            }
          >
            <div className="p-8 text-center">
              <div className="text-2xl font-semibold mb-1 text-white">
                {stat.value}
              </div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
