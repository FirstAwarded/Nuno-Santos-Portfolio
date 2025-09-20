import { AppleHero } from '@/components/AppleHero';
import { WorkGrid } from '@/components/WorkGrid';
import { PhilosophySection } from '@/components/PhilosophySection';
import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';
import { ThemeToggle } from '@/components/ThemeToggle';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <AppleHero />
      <WorkGrid />
      <PhilosophySection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
