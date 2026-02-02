"use client";

import {
  Code,
  Monitor,
  BarChart3,
  Shield,
  FileCode,
  Users,
  Check,
} from "lucide-react";
import { RevealOnScroll } from "@/components/landingv2/reveal-on-scroll";
import { SpotlightCard } from "@/components/landingv2/background-effects";

interface Feature {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  visual: React.ReactNode;
  reversed?: boolean;
}

function FeatureBlock({
  number,
  icon,
  title,
  description,
  features,
  visual,
  reversed = false,
}: Feature) {
  const contentSection = (
    <div
      className={`p-10 md:p-16 flex flex-col justify-between ${
        reversed ? "md:border-l" : "md:border-r"
      } border-b md:border-b-0 relative backdrop-blur-sm border-white/5 bg-black/50`}
    >
      <div>
        <span
          className={`text-6xl md:text-8xl font-medium font-mono select-none absolute top-6 ${
            reversed ? "right-6" : "left-6"
          } text-white/5`}
        >
          {number}
        </span>
        <div className="relative pt-12">
          <div className="w-10 h-10 rounded border flex items-center justify-center mb-6 border-white/10 bg-white/5 text-white">
            {icon}
          </div>
          <h3 className="text-2xl font-medium mb-4 text-white">{title}</h3>
          <p className="leading-relaxed text-sm max-w-sm text-zinc-400 mb-6">
            {description}
          </p>

          {features && (
            <ul className="space-y-3">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-sm text-zinc-300"
                >
                  <Check className="w-4 h-4 text-white" />
                  {feature}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );

  const visualSection = (
    <div className="p-10 flex items-center justify-center bg-[#050505] relative overflow-hidden group-hover:opacity-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 from-white/5" />
      {visual}
    </div>
  );

  return (
    <div className="group border-b grid md:grid-cols-2 min-h-[500px] border-white/5">
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

// Visual Components
function CustomChallengesVisual() {
  return (
    <SpotlightCard className="w-full max-w-md aspect-[4/3] rounded-xl border p-6 flex flex-col gap-4 border-white/10">
      <div className="flex items-center gap-3 border-b pb-4 border-white/5">
        <div className="w-8 h-8 rounded-full bg-white/10" />
        <div className="flex-1">
          <div className="h-2 rounded w-24 mb-2 bg-white/10" />
          <div className="h-2 rounded w-16 bg-white/5" />
        </div>
      </div>
      <div className="space-y-2 flex-1">
        <div className="p-3 rounded border bg-white/[0.02] border-white/5">
          <div className="h-2 rounded w-3/4 mb-2 bg-white/10" />
          <div className="h-2 rounded w-1/2 bg-white/10" />
        </div>
        <div className="p-3 rounded border bg-white/[0.02] border-white/5">
          <div className="h-2 rounded w-2/3 mb-2 bg-white/10" />
          <div className="h-2 rounded w-1/3 bg-white/10" />
        </div>
      </div>
      <div className="flex gap-2">
        <div className="px-3 py-1 rounded text-xs border bg-white/5 border-white/10 text-zinc-300">
          React
        </div>
        <div className="px-3 py-1 rounded text-xs border bg-white/5 border-white/10 text-zinc-300">
          TypeScript
        </div>
      </div>
    </SpotlightCard>
  );
}

function RealTimeEditorVisual() {
  return (
    <div className="w-full max-w-2xl">
      <SpotlightCard className="rounded-xl border p-4 flex flex-col gap-3 border-white/10">
        <div className="flex items-center justify-between border-b pb-3 border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-xs text-zinc-400">Live Session</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-white/10" />
            <div className="w-6 h-6 rounded-full bg-white/10" />
          </div>
        </div>
        <div className="bg-[#0a0a0a] rounded border border-white/5 p-4 font-mono text-xs">
          <div className="text-zinc-500 mb-2">// Interviewer and Candidate</div>
          <div className="text-white">
            <div className="mb-1">
              <span className="text-blue-400">function</span>{" "}
              <span className="text-yellow-400">solveChallenge</span>
              <span className="text-white">()</span> {"{"}
            </div>
            <div className="ml-4 text-green-400">// Real-time collaboration</div>
            <div className="ml-4 text-white">...</div>
            <div className="text-white">{"}"}</div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <Monitor className="w-3 h-3" />
          <span>2 participants • Live</span>
        </div>
      </SpotlightCard>
    </div>
  );
}

function AnalyticsVisual() {
  return (
    <div className="w-full max-w-md">
      <SpotlightCard className="rounded-xl border p-6 flex flex-col gap-4 border-white/10">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-medium text-white">Team Performance</h4>
          <BarChart3 className="w-4 h-4 text-white opacity-50" />
        </div>
        <div className="space-y-3">
          {[
            { label: "Frontend", value: 85 },
            { label: "Backend", value: 72 },
            { label: "Full Stack", value: 68 },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-zinc-300">{item.label}</span>
                <span className="text-white">{item.value}%</span>
              </div>
              <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full bg-white/20 rounded-full"
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </SpotlightCard>
    </div>
  );
}

function SecurityVisual() {
  return (
    <div className="grid grid-cols-2 gap-4 w-64">
      <SpotlightCard className="h-24 rounded border flex flex-col items-center justify-center gap-2 border-white/10">
        <Shield className="w-6 h-6 text-white opacity-50" />
        <span className="text-[10px] text-zinc-500">SSO</span>
      </SpotlightCard>
      <SpotlightCard className="h-24 rounded border flex flex-col items-center justify-center gap-2 border-white/10">
        <Users className="w-6 h-6 text-white opacity-50" />
        <span className="text-[10px] text-zinc-500">RBAC</span>
      </SpotlightCard>
      <SpotlightCard className="col-span-2 h-24 rounded border flex flex-col items-center justify-center gap-2 border-white/10">
        <FileCode className="w-6 h-6 text-white opacity-50" />
        <span className="text-[10px] text-zinc-500">Audit Logs</span>
      </SpotlightCard>
    </div>
  );
}

export function FeaturesDetail() {
  const features: Feature[] = [
    {
      number: "01",
      icon: <FileCode className="w-5 h-5" />,
      title: "Custom Challenges",
      description:
        "Create challenges tailored to your tech stack, coding standards, and business requirements. Build assessments that reflect real-world scenarios your team faces.",
      features: [
        "Custom challenge builder",
        "Template library",
        "Version control",
        "Multi-framework support",
      ],
      visual: <CustomChallengesVisual />,
    },
    {
      number: "02",
      icon: <Monitor className="w-5 h-5" />,
      title: "Real-time Collaborative Editor",
      description:
        "Conduct live coding sessions where interviewers and candidates can see code changes in real-time. Provide hints, ask questions, and evaluate problem-solving approach as it happens.",
      features: [
        "Live code sharing",
        "Cursor synchronization",
        "Voice/video integration",
        "Session recording",
      ],
      visual: <RealTimeEditorVisual />,
      reversed: true,
    },
    {
      number: "03",
      icon: <Code className="w-5 h-5" />,
      title: "Interview Mode",
      description:
        "Specialized mode for technical interviews with built-in evaluation tools, rubrics, and feedback systems. Streamline your hiring process.",
      features: [
        "Pre-configured interview templates",
        "Evaluation rubrics",
        "Candidate notes",
        "Automated scoring",
      ],
      visual: <RealTimeEditorVisual />,
    },
    {
      number: "04",
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Analytics & Reporting",
      description:
        "Get detailed insights into your team's performance, skill gaps, and progress. Make data-driven decisions about training and hiring.",
      features: [
        "Team dashboards",
        "Individual progress tracking",
        "Skill gap analysis",
        "Export reports",
      ],
      visual: <AnalyticsVisual />,
      reversed: true,
    },
    {
      number: "05",
      icon: <Shield className="w-5 h-5" />,
      title: "Enterprise Security",
      description:
        "Built with enterprise security in mind. SSO integration, role-based access control, and comprehensive audit logs.",
      features: [
        "SSO/SAML integration",
        "Role-based access control",
        "Audit logs",
        "Data encryption",
      ],
      visual: <SecurityVisual />,
    },
  ];

  return (
    <section id="features" className="max-w-7xl mx-auto border-x relative z-10 border-white/5">
      <div className="text-center max-w-2xl mx-auto py-16 px-6">
        <RevealOnScroll>
          <h2 className="text-3xl font-medium mb-4 text-white">
            Enterprise Features
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay="100">
          <p className="text-sm text-zinc-400">
            Everything you need to build, assess, and grow your tech team.
          </p>
        </RevealOnScroll>
      </div>
      {features.map((feature) => (
        <FeatureBlock key={feature.number} {...feature} />
      ))}
    </section>
  );
}
