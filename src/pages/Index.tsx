import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { CaseStudyTeasers } from '@/components/CaseStudyTeasers';
import { WorkGrid } from '@/components/WorkGrid';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <CaseStudyTeasers />
      <div id="work">
        <WorkGrid />
      </div>
    </div>
  );
};

export default Index;
