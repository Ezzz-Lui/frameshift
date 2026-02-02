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
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-foreground -mt-16">
      {/* Background Effects */}
      <GradientBackground />
      <GridLines />
      <VerticalLines />

      {/* Main Content - pt-24 accounts for fixed navbar */}
      <main className="z-10 pt-24 relative">
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
