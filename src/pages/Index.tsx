import { ClarityHero } from "@/components/ClarityHero";
import { ClarityWork } from "@/components/ClarityWork";
import { ClarityAbout } from "@/components/ClarityAbout";
import { ClarityMetrics } from "@/components/ClarityMetrics";
import { ClarityContact } from "@/components/ClarityContact";

const Index = () => {
  return (
    <main>
      <ClarityHero />
      <ClarityWork />
      <ClarityAbout />
      <ClarityMetrics />
      <ClarityContact />
    </main>
  );
};

export default Index;
