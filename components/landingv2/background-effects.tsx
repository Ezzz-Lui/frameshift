"use client";

import { useEffect, useRef } from "react";

export function GridLines() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        backgroundSize: "60px 60px",
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
        `,
        maskImage:
          "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        WebkitMaskImage:
          "radial-gradient(ellipse at center, black 40%, transparent 80%)",
      }}
    />
  );
}

export function VerticalLines() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="relative h-full max-w-7xl mx-auto border-l border-r border-white/5">
        <div className="absolute left-1/3 top-0 bottom-0 w-px bg-white/5" />
        <div className="absolute right-1/3 top-0 bottom-0 w-px bg-white/5" />
      </div>
    </div>
  );
}

export function GradientBackground() {
  return (
    <>
      <div
        className="fixed top-0 w-full h-screen -z-10 saturate-50 opacity-30"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 0%, black 18%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 0%, black 18%, transparent)",
        }}
      >
        <div
          className="relative w-full h-[900px] -z-10 bg-gradient-to-b from-purple-900/20 via-blue-900/30 to-black/40 brightness-50 saturate-50"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, black 0%, black 62%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 0%, black 62%, transparent)",
          }}
        >
          <div className="absolute w-full h-full left-0 top-0 -z-10 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20" />
        </div>
      </div>
      <div className="fixed top-0 left-0 w-full h-screen bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_50%)] pointer-events-none z-0" />
    </>
  );
}

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

export function SpotlightCard({
  children,
  className = "",
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={cardRef}
      className={`spotlight-card ${className}`}
      style={
        {
          "--mouse-x": "50%",
          "--mouse-y": "50%",
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
