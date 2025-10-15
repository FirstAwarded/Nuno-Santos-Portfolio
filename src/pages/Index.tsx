import { SimpleHero } from "@/components/SimpleHero";
import { SimpleWork } from "@/components/SimpleWork";
import { SimpleAbout } from "@/components/SimpleAbout";
import { SimpleProof } from "@/components/SimpleProof";
import { SimpleContact } from "@/components/SimpleContact";

const Index = () => {
  return (
    <main>
      <SimpleHero />
      <SimpleWork />
      <SimpleAbout />
      <SimpleProof />
      <SimpleContact />
    </main>
  );
};

export default Index;
