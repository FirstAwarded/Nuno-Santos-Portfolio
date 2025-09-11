import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { WorkGrid } from '@/components/WorkGrid';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <WorkGrid />
    </div>
  );
};

export default Index;
