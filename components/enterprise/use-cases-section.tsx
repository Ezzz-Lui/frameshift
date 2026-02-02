"use client";

import {
  UserCheck,
  GraduationCap,
  Users,
  ClipboardCheck,
  ArrowUpRight,
} from "lucide-react";
import { RevealOnScroll } from "@/components/landingv2/reveal-on-scroll";
import { SpotlightCard } from "@/components/landingv2/background-effects";

interface UseCase {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const useCases: UseCase[] = [
  {
    icon: <UserCheck className="w-6 h-6" />,
    title: "Technical Interviews",
    description:
      "Conduct live coding interviews with real-time collaboration. Watch candidates code, provide hints, and evaluate their problem-solving approach in real-time.",
    features: [
      "Real-time code sharing",
      "Live hint system",
      "Session recording",
      "Evaluation rubrics",
    ],
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Developer Onboarding",
    description:
      "Get new team members up to speed quickly with custom challenges tailored to your tech stack and coding standards.",
    features: [
      "Custom onboarding tracks",
      "Progress monitoring",
      "Mentor assignments",
      "Completion certificates",
    ],
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Team Training",
    description:
      "Keep your team's skills sharp with regular challenges. Track progress, identify skill gaps, and plan training programs.",
    features: [
      "Team-wide challenges",
      "Skill gap analysis",
      "Progress dashboards",
      "Training recommendations",
    ],
  },
  {
    icon: <ClipboardCheck className="w-6 h-6" />,
    title: "Skills Assessment",
    description:
      "Evaluate your team's proficiency in specific technologies or frameworks with targeted assessments.",
    features: [
      "Custom assessments",
      "Detailed reports",
      "Benchmark comparisons",
      "Certification tracking",
    ],
  },
];

export function UseCasesSection() {
  return (
    <section className="py-32 border-b relative z-10 border-border">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <RevealOnScroll>
            <h2 className="text-3xl font-medium mb-4 text-foreground">
              Built for Every Team Need
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay="100">
            <p className="text-sm text-muted-foreground">
              From hiring to training, FrameShift Enterprise adapts to your
              workflow.
            </p>
          </RevealOnScroll>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => (
            <RevealOnScroll key={useCase.title} delay="300">
              <SpotlightCard className="h-full border rounded-xl p-8 flex flex-col border-border bg-card">
                <div className="w-12 h-12 rounded-lg border flex items-center justify-center mb-6 border-border bg-muted text-foreground">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-medium mb-3 text-foreground">
                  {useCase.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                <ul className="space-y-2 flex-1">
                  {useCase.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-xs text-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
