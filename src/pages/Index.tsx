import { EngineeredHero } from "@/components/EngineeredHero";
import { EngineeredWork } from "@/components/EngineeredWork";
import { EngineeredAbout } from "@/components/EngineeredAbout";
import { EngineeredProof } from "@/components/EngineeredProof";
import { EngineeredContact } from "@/components/EngineeredContact";

const Index = () => {
  return (
    <>
      <EngineeredHero />
      <main>
        <EngineeredWork />
        <EngineeredAbout />
        <EngineeredProof />
        <EngineeredContact />
      </main>
    </>
  );
};

export default Index;
