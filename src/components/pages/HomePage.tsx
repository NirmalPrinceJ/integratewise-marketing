import { MarketingHero } from "../MarketingHero";
import { ComparisonSection } from "../ComparisonSection";
import { TheSpineSection } from "../TheSpineSection";
import { DomainDepthSection } from "../DomainDepthSection";
import { SolutionReveal } from "../SolutionReveal";
import { HowItWorksSection } from "../HowItWorksSection";
import { SpeedToValueSection } from "../SpeedToValueSection";
import { NarrativeSection } from "../NarrativeSection";
import { ProductCapabilities } from "../ProductCapabilities";
import { SocialProofSection } from "../SocialProofSection";
import { MarketingArchitectureSection } from "../MarketingArchitectureSection";
import { PlatformRobustnessSection } from "../PlatformRobustnessSection";
import { IndustryBenefits } from "../IndustryBenefits";
import { ValueDeliveryCTA } from "../ValueDeliveryCTA";

export default function HomePage() {
  return (
    <>
      <MarketingHero />
      <SocialProofSection />
      <ComparisonSection />
      <TheSpineSection />
      <DomainDepthSection />
      <SolutionReveal />
      <HowItWorksSection />
      <SpeedToValueSection />
      <NarrativeSection />
      <ProductCapabilities />
      <MarketingArchitectureSection />
      <IndustryBenefits />
      <PlatformRobustnessSection />
      <ValueDeliveryCTA />
    </>
  );
}
