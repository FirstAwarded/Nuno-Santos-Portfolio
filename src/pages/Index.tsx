import { GlassMeshHero } from "@/components/GlassMeshHero";
import { FullScreenWork } from "@/components/FullScreenWork";
import { FullScreenAbout } from "@/components/FullScreenAbout";
import { FullScreenContact } from "@/components/FullScreenContact";
import { VerticalNavigation } from "@/components/VerticalNavigation";

const Index = () => {
  return (
    <main className="scroll-snap-container">
      <VerticalNavigation />
      <GlassMeshHero />
      <FullScreenWork />
      <FullScreenAbout />
      <FullScreenContact />
    </main>
  );
};

export default Index;
