import { ImmersiveHero } from "@/components/ImmersiveHero";
import { PersonaTour } from "@/components/PersonaTour";
import { ImpactMetrics } from "@/components/ImpactMetrics";
import { InteractiveCaseStudies } from "@/components/InteractiveCaseStudies";
import { ProcessShowcase } from "@/components/ProcessShowcase";
import { PhilosophySection } from "@/components/PhilosophySection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <>
      <ImmersiveHero />
      <main>
        <PersonaTour />
        <ImpactMetrics />
        <InteractiveCaseStudies />
        <ProcessShowcase />
        <PhilosophySection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Index;
