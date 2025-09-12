import { MeshBackground } from '@/components/MeshBackground';
import { VectorSweep } from '@/components/VectorSweep';
import { ScrollProgress } from '@/components/ScrollProgress';

export const Hero = () => {
  return (
    <section 
      className="relative overflow-hidden flex items-center justify-center"
      style={{ 
        height: 'min(80vh, 900px)',
        minHeight: '60vh'
      }}
    >
      {/* Apple keynote-style Mesh Background */}
      <MeshBackground className="w-full h-full" />
      
      {/* Two-column layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left column: Copy */}
        <div className="animate-fade-in-up">
          <h1 
            className="hero-text mb-8 keynote-headline font-display"
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 6rem)',
              lineHeight: '0.9'
            }}
          >
            Clarity, on{' '}
            <span className="gradient-text">enterprise scale</span>.
          </h1>
          
          <p 
            className="body-large max-w-lg"
            style={{
              fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)',
              lineHeight: '1.6'
            }}
          >
            I design enterprise systems people actually want to use.
          </p>
        </div>

        {/* Right column: Vector Sweep Animation */}
        <div className="relative h-80 lg:h-96">
          <VectorSweep />
        </div>
      </div>

      {/* Scroll Progress Component */}
      <ScrollProgress />
    </section>
  );
};