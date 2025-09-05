import { Navigation } from '@/components/Navigation';
import { WorkGrid } from '@/components/WorkGrid';

export default function Work() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        <WorkGrid />
      </main>
    </div>
  );
}