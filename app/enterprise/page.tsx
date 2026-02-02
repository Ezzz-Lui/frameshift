import {
  EnterpriseHero,
  UseCasesSection,
  FeaturesDetail,
  PricingCTA,
} from "@/components/enterprise";

export default function EnterprisePage() {
  return (
    <div className="relative min-h-screen bg-black text-zinc-400 selection:bg-white/20 selection:text-white -mt-16">
      <div className="z-10 relative">
        <EnterpriseHero />
        <UseCasesSection />
        <FeaturesDetail />
        <PricingCTA />
      </div>
    </div>
  );
}
