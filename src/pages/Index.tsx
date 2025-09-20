import { AppleHero } from "@/components/AppleHero";
import { WorkGrid } from "@/components/WorkGrid";
import { PhilosophySection } from "@/components/PhilosophySection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <>
      <AppleHero />
      <main className="space-y-32">
        <WorkGrid />
        <PhilosophySection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Index;
