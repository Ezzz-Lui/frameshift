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
      className={`p-8 md:p-12 lg:p-16 flex flex-col justify-center ${
        reversed ? "md:border-l" : "md:border-r"
      } border-b md:border-b-0 relative border-border bg-card/50`}
    >
      <div className="relative max-w-xl">
        {/* <span
          className={`text-6xl md:text-7xl lg:text-8xl font-medium font-mono select-none absolute -top-4 -z-10 ${
            reversed ? "right-0" : "left-0"
          } text-muted-foreground/10`}
        >
          {number}
        </span> */}
        <div className="relative space-y-6">
          <div className="w-12 h-12 rounded-lg border flex items-center justify-center border-border bg-muted/50 text-foreground">
            {icon}
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-medium text-foreground">
              {title}
            </h3>
            <p className="leading-relaxed text-base md:text-lg text-muted-foreground">
              {description}
            </p>
          </div>

          {features && (
            <ul className="space-y-3 pt-2">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-sm md:text-base text-foreground"
                >
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}

          {stats && (
            <div className="grid grid-cols-2 gap-4 pt-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-5 rounded-lg border bg-muted/30 border-border"
                >
                  <div className="text-3xl font-medium mb-2 text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {badges && (
            <div className="flex gap-3 flex-wrap pt-2">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="px-4 py-1.5 rounded-full border text-sm border-border bg-muted/50 text-foreground"
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
    <div className="p-8 md:p-12 lg:p-16 flex items-center justify-center bg-muted/20 relative overflow-hidden min-h-[400px] md:min-h-[500px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 from-primary/5" />
      <div className="w-full flex items-center justify-center">{visual}</div>
    </div>
  );

  return (
    <div className="group border-b grid md:grid-cols-2 border-border">
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
    <div className="relative w-full max-w-xs aspect-square border rounded-full flex items-center justify-center animate-[spin_60s_linear_infinite] border-border/50">
      <div className="absolute inset-4 border border-dashed rounded-full border-border/30" />
      <div className="absolute inset-16 border rounded-full flex items-center justify-center border-border/30">
        <div className="w-20 h-20 rounded-full backdrop-blur-md border bg-muted/50 border-border/50" />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 px-2 text-[10px] text-muted-foreground font-mono bg-background">
        CORE
      </div>
    </div>
  );
}

function MessagingVisual() {
  return (
    <SpotlightCard className="w-full max-w-sm aspect-[4/3] rounded-xl border p-6 flex flex-col gap-4 border-border bg-card">
      <div className="flex items-center gap-3 border-b pb-3 border-border">
        <div className="w-8 h-8 rounded-full bg-muted" />
        <div className="flex-1 h-2 rounded w-24 bg-muted" />
      </div>
      <div className="space-y-3 flex-1">
        <div className="p-3 rounded-lg border bg-muted/30 border-border">
          <div className="h-2 rounded w-3/4 mb-2 bg-muted" />
          <div className="h-2 rounded w-1/2 bg-muted" />
        </div>
        <div className="p-3 rounded-lg border bg-muted/30 ml-8 border-border">
          <div className="h-2 rounded w-2/3 mb-2 bg-muted" />
          <div className="h-2 rounded w-1/3 bg-muted" />
        </div>
      </div>
      <div className="pt-3 border-t flex items-center gap-2 border-border">
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
    <div className="relative z-10 grid grid-cols-2 gap-4 w-full max-w-xs">
      <SpotlightCard className="h-28 rounded-lg border flex flex-col items-center justify-center gap-2 border-border bg-card">
        <Fingerprint className="w-6 h-6 text-foreground opacity-50" />
        <span className="text-xs text-muted-foreground">Biometric</span>
      </SpotlightCard>
      <SpotlightCard className="h-28 rounded-lg border flex flex-col items-center justify-center gap-2 border-border bg-card">
        <Key className="w-6 h-6 text-foreground opacity-50" />
        <span className="text-xs text-muted-foreground">SSO</span>
      </SpotlightCard>
      <SpotlightCard className="col-span-2 h-28 rounded-lg border flex flex-col items-center justify-center gap-2 border-border bg-card">
        <ShieldCheck className="w-6 h-6 text-foreground opacity-50" />
        <span className="text-xs text-muted-foreground">Audit Logs</span>
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
      {features.map((feature, index) => (
        <FeatureBlock key={feature.number} {...feature} />
      ))}
    </section>
  );
}
