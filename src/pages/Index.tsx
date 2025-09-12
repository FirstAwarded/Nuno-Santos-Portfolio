import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { CaseStudyTeasers } from '@/components/CaseStudyTeasers';
import { WorkGrid } from '@/components/WorkGrid';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      {/* Selected Work section positioned to peek above fold */}
      <div id="work" className="relative -mt-20 pt-20">
        <WorkGrid />
      </div>
      <CaseStudyTeasers />
    </div>
  );
};

export default Index;
