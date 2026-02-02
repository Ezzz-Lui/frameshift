"use client";

import { Check, Sparkles } from "lucide-react";
import { RevealOnScroll } from "./reveal-on-scroll";
import { SpotlightCard } from "./background-effects";

interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  buttonText: string;
  highlighted?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "Free",
    price: "$0",
    period: "",
    description: "Completely free, forever",
    features: [
      "All Challenges Available",
      "Personal Progress Tracking",
      "Favorites & Notes",
      "Community Access",
      "No Limits or Restrictions",
    ],
    buttonText: "Get Started",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For companies and teams",
    features: [
      "Custom Challenges",
      "Real-time Collaborative Editor",
      "Live Interview Mode",
      "Team Analytics & Reporting",
      "SSO Integration",
      "Dedicated Support",
      "Onboarding & Training",
    ],
    buttonText: "Contact Sales",
    highlighted: true,
  },
];

function PricingCard({ plan }: { plan: PricingPlan }) {
  if (plan.highlighted) {
    return (
      <RevealOnScroll delay="100">
        <div className="relative h-full">
          <div className="absolute inset-0 blur-xl rounded-xl bg-white/5" />
          <div className="relative border rounded-xl p-8 flex flex-col h-full bg-black border-white/20">
            <div className="absolute top-0 right-0 p-4">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-medium text-white">{plan.name}</h3>
              <div className="text-4xl font-medium mt-4 tracking-tight text-white">
                {plan.price}
                {plan.period && (
                  <span className="text-sm text-zinc-500 font-normal">
                    {plan.period}
                  </span>
                )}
              </div>
              <p className="text-xs text-zinc-500 mt-2">{plan.description}</p>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-xs text-white"
                >
                  <Check className="w-3.5 h-3.5 text-white" />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={plan.name === "Enterprise" ? "/enterprise" : "/challenges"}
              className="w-full py-3 rounded text-xs font-medium transition-colors bg-white text-black hover:bg-zinc-200 flex items-center justify-center"
            >
              {plan.buttonText}
            </a>
          </div>
        </div>
      </RevealOnScroll>
    );
  }

  return (
    <RevealOnScroll delay={plan.name === "Free" ? undefined : "200"}>
      <SpotlightCard className="h-full border rounded-xl p-8 flex flex-col border-white/10">
        <div className="mb-6">
          <h3 className="text-lg font-medium text-white">{plan.name}</h3>
          <div className="text-4xl font-medium mt-4 tracking-tight text-white">
            {plan.price}
            {plan.period && (
              <span className="text-sm text-zinc-500 font-normal">
                {plan.period}
              </span>
            )}
          </div>
          <p className="text-xs text-zinc-500 mt-2">{plan.description}</p>
        </div>
        <ul className="space-y-4 mb-8 flex-1">
          {plan.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-3 text-xs text-zinc-300"
            >
              <Check className="w-3.5 h-3.5 text-white" />
              {feature}
            </li>
          ))}
        </ul>
        <a
          href={plan.name === "Enterprise" ? "/enterprise" : "/challenges"}
          className="w-full py-3 rounded border text-xs font-medium transition-colors border-white/10 text-white hover:bg-white/5 flex items-center justify-center"
        >
          {plan.buttonText}
        </a>
      </SpotlightCard>
    </RevealOnScroll>
  );
}

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-32 border-b relative z-10 border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <RevealOnScroll>
            <h2 className="text-3xl font-medium mb-4 text-white">
              Simple Pricing
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay="100">
            <p className="text-sm text-zinc-400">
              Free for developers. Enterprise solutions for teams.
            </p>
          </RevealOnScroll>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
