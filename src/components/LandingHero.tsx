import MeshBackground from './MeshBackground';
import CursorGlow from './CursorGlow';
import { Hero } from './Hero';

const LandingHero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <MeshBackground />
      <CursorGlow />

      {/* Foreground content: your existing Hero */}
      <div className="relative z-10 w-full">
        <Hero />
      </div>
    </section>
  );
};

export default LandingHero;
