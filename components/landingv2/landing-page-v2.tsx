import {
  GridLines,
  VerticalLines,
  GradientBackground,
  HeroSection,
  StatsSection,
  FeaturesSection,
  SolutionsSection,
  PricingSection,
  CTASection,
} from "@/components/landingv2";

export default function LandingPageV2() {
  return (
    <div className="relative min-h-screen bg-black text-zinc-400 selection:bg-white/20 selection:text-white">
      {/* Background Effects */}
      <GradientBackground />
      <GridLines />
      <VerticalLines />

      {/* Main Content */}
      <main className="z-10 pt-32 relative">
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <SolutionsSection />
        <PricingSection />
        <CTASection />
      </main>
    </div>
  );
}
