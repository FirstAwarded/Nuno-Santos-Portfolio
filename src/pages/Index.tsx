import { LandingHero } from "@/components/LandingHero";
import { SimpleAbout } from "@/components/SimpleAbout";
import { SimpleProof } from "@/components/SimpleProof";
import { SimpleContact } from "@/components/SimpleContact";

const Index = () => {
  return (
    <main>
      <LandingHero />
      <div id="work-section" className="scroll-mt-20">
        {/* Work section anchor */}
      </div>
      <div id="about-section" className="scroll-mt-20">
        <SimpleAbout />
      </div>
      <SimpleProof />
      <SimpleContact />
    </main>
  );
};

export default Index;
