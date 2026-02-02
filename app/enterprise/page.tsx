import {
  EnterpriseHero,
  UseCasesSection,
  FeaturesDetail,
  PricingCTA,
} from "@/components/enterprise";

export default function EnterprisePage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-foreground -mt-16">
      <div className="z-10 relative">
        <EnterpriseHero />
        <UseCasesSection />
        <FeaturesDetail />
        <PricingCTA />
      </div>
    </div>
  );
}
