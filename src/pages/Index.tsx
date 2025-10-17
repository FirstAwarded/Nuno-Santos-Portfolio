import { Navigation } from "@/components/Navigation";
import { LandingHero } from "@/components/LandingHero";
import { AboutSnapshot } from "@/components/AboutSnapshot";
import { SimpleAbout } from "@/components/SimpleAbout";
import { SimpleProof } from "@/components/SimpleProof";
import { SimpleContact } from "@/components/SimpleContact";

const Index = () => {
  return (
    <>
      <Navigation />
      <main>
        <LandingHero />
        <div id="work-section" className="scroll-mt-20">
          {/* Work section anchor - projects are in hero */}
        </div>
        
        {/* About Snapshot - compact version */}
        <AboutSnapshot />
        
        {/* Stacked cards that slide up on scroll */}
        <div id="about-section" className="scroll-mt-20">
          <SimpleAbout />
        </div>
        <SimpleProof />
        <SimpleContact />
      </main>
    </>
  );
};

export default Index;
