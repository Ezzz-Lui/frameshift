"use client";

import {
  Check,
  Database,
  MessageSquare,
  Lock,
  Send,
  Fingerprint,
  Key,
  ShieldCheck,
} from "lucide-react";
import { SpotlightCard } from "./background-effects";

interface FeatureItem {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features?: string[];
  stats?: { value: string; label: string }[];
  badges?: string[];
  visual: React.ReactNode;
  reversed?: boolean;
}

function FeatureBlock({
  number,
  icon,
  title,
  description,
  features,
  stats,
  badges,
  visual,
  reversed = false,
}: FeatureItem) {
  const contentSection = (
    <div
      className={`p-10 md:p-16 flex flex-col justify-between ${
        reversed ? "md:border-l" : "md:border-r"
      } border-b md:border-b-0 relative backdrop-blur-sm border-border bg-card/50`}
    >
      <div>
        <span
          className={`text-6xl md:text-8xl font-medium font-mono select-none absolute top-6 ${
            reversed ? "right-6" : "left-6"
          } text-muted-foreground/20`}
        >
          {number}
        </span>
        <div className="relative pt-12">
          <div className="w-10 h-10 rounded border flex items-center justify-center mb-6 border-border bg-muted text-foreground">
            {icon}
          </div>
          <h3 className="text-2xl font-medium mb-4 text-foreground">{title}</h3>
          <p className="leading-relaxed text-sm max-w-sm text-muted-foreground">
            {description}
          </p>

          {features && (
            <ul className="mt-8 space-y-3">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-sm text-foreground"
                >
                  <Check className="w-4 h-4 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          )}

          {stats && (
            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded border bg-muted/50 border-border"
                >
                  <div className="text-2xl font-medium mb-1 text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-muted-foreground uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {badges && (
            <div className="mt-8 flex gap-2 flex-wrap">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 rounded-full border text-xs border-border bg-muted text-foreground"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const visualSection = (
    <div className="p-10 flex items-center justify-center bg-muted/30 relative overflow-hidden group-hover:opacity-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 from-primary/5" />
      {visual}
    </div>
  );

  return (
    <div className="group border-b grid md:grid-cols-2 min-h-[500px] border-border">
      {reversed ? (
        <>
          <div className="order-2 md:order-1">{visualSection}</div>
          <div className="order-1 md:order-2">{contentSection}</div>
        </>
      ) : (
        <>
          {contentSection}
          {visualSection}
        </>
      )}
    </div>
  );
}

// Visual Components for each feature
function InfrastructureVisual() {
  return (
    <div className="relative w-full max-w-sm aspect-square border rounded-full flex items-center justify-center animate-[spin_60s_linear_infinite] border-border">
      <div className="absolute inset-4 border border-dashed rounded-full border-border" />
      <div className="absolute inset-16 border rounded-full flex items-center justify-center border-border">
        <div className="w-24 h-24 rounded-full backdrop-blur-md border bg-muted border-border" />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 px-2 text-[10px] text-muted-foreground font-mono bg-background">
        CORE
      </div>
    </div>
  );
}

function MessagingVisual() {
  return (
    <SpotlightCard className="w-full max-w-md aspect-[4/3] rounded-xl border p-6 flex flex-col gap-4 border-border bg-card">
      <div className="flex items-center gap-3 border-b pb-4 border-border">
        <div className="w-8 h-8 rounded-full bg-muted" />
        <div className="flex-1 h-2 rounded w-24 bg-muted" />
      </div>
      <div className="space-y-3">
        <div className="p-3 rounded border bg-muted/30 border-border">
          <div className="h-2 rounded w-3/4 mb-2 bg-muted" />
          <div className="h-2 rounded w-1/2 bg-muted" />
        </div>
        <div className="p-3 rounded border bg-muted/30 ml-8 border-border">
          <div className="h-2 rounded w-2/3 mb-2 bg-muted" />
          <div className="h-2 rounded w-1/3 bg-muted" />
        </div>
      </div>
      <div className="mt-auto pt-4 border-t flex items-center gap-2 border-border">
        <div className="h-8 flex-1 rounded border bg-muted border-border" />
        <div className="w-8 h-8 rounded flex items-center justify-center bg-primary text-primary-foreground">
          <Send className="w-3.5 h-3.5" />
        </div>
      </div>
    </SpotlightCard>
  );
}

function SecurityVisual() {
  return (
    <div className="relative z-10 grid grid-cols-2 gap-4 w-64">
      <SpotlightCard className="h-24 rounded border flex flex-col items-center justify-center gap-2 border-border bg-card">
        <Fingerprint className="w-6 h-6 text-foreground opacity-50" />
        <span className="text-[10px] text-muted-foreground">Biometric</span>
      </SpotlightCard>
      <SpotlightCard className="h-24 rounded border flex flex-col items-center justify-center gap-2 border-border bg-card">
        <Key className="w-6 h-6 text-foreground opacity-50" />
        <span className="text-[10px] text-muted-foreground">SSO</span>
      </SpotlightCard>
      <SpotlightCard className="col-span-2 h-24 rounded border flex flex-col items-center justify-center gap-2 border-border bg-card">
        <ShieldCheck className="w-6 h-6 text-foreground opacity-50" />
        <span className="text-[10px] text-muted-foreground">Audit Logs</span>
      </SpotlightCard>
    </div>
  );
}

export function FeaturesSection() {
  const features: FeatureItem[] = [
    {
      number: "01",
      icon: <Database className="w-5 h-5" />,
      title: "Multi-Framework Support",
      description:
        "Practice with React, Vue, Angular, Svelte, Next.js, Django, Flask, and more. Our platform supports all major frameworks with real-time code execution.",
      features: ["Real-time execution", "Instant feedback", "Code validation"],
      visual: <InfrastructureVisual />,
    },
    {
      number: "02",
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Progressive Difficulty",
      description:
        "Start from beginner-friendly challenges and progress to expert-level problems. Our AI-driven system adapts to your skill level.",
      stats: [
        { value: "98%", label: "Completion Rate" },
        { value: "0.2s", label: "Feedback Time" },
      ],
      visual: <MessagingVisual />,
      reversed: true,
    },
    {
      number: "03",
      icon: <Lock className="w-5 h-5" />,
      title: "Production-Ready Code",
      description:
        "Learn best practices and patterns used in real production environments. Every challenge is designed to teach industry-standard techniques.",
      badges: ["TypeScript Ready", "Best Practices", "Clean Code"],
      visual: <SecurityVisual />,
    },
  ];

  return (
    <section
      id="platform"
      className="max-w-7xl mx-auto border-x relative z-10 border-border"
    >
      {features.map((feature) => (
        <FeatureBlock key={feature.number} {...feature} />
      ))}
    </section>
  );
}
