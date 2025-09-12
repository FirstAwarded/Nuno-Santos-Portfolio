import { MeshBackground } from '@/components/MeshBackground';
import { CenterpieceAnimation } from '@/components/CenterpieceAnimation';
import { ScrollProgress } from '@/components/ScrollProgress';

export const Hero = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Apple keynote-style Mesh Background */}
      <MeshBackground className="w-full h-full" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="animate-fade-in-up">
          {/* Centerpiece Animation */}
          <div className="mb-12 flex justify-center">
            <CenterpieceAnimation />
          </div>
          
          <h1 
            className="hero-text mb-8 keynote-headline font-display" 
            data-text="Clarity, on enterprise scale."
          >
            Clarity, on{' '}
            <span className="gradient-text">enterprise scale</span>.
          </h1>
          
          <p className="body-large mb-16 max-w-3xl mx-auto">
            I design enterprise systems people actually want to use.
          </p>
        </div>
      </div>

      {/* Scroll Progress Component */}
      <ScrollProgress />
    </section>
  );
};