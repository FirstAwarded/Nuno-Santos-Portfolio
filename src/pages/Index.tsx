import { Navigation } from '@/components/Navigation';
import LandingHero from '@/components/LandingHero';
import { WorkGrid } from '@/components/WorkGrid';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <LandingHero />
      <WorkGrid />
    </div>
  );
};

export default Index;
