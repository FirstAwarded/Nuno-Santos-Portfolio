import { ArrowDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MeshBackground } from '@/components/MeshBackground';
import heroImage from '@/assets/hero-image.jpg';

export const Hero = () => {
  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    workSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Animated Mesh Background */}
      <MeshBackground className="w-full h-full" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background/90" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-secondary/50 rounded-full px-4 py-2 mb-8 text-sm text-muted-foreground">
            <Sparkles className="w-4 h-4" />
            UX/UI Designer • 3 Years Experience
          </div>
          
          <h1 
            className="hero-text mb-6 noise-text" 
            data-text="Designing clarity in a noisy world."
          >
            Designing clarity in a{' '}
            <span className="gradient-text">noisy world</span>.
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            I craft user experiences that turn complex problems into intuitive solutions, 
            with a focus on strategic thinking and delightful microinteractions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToWork}
              size="lg"
              className="interactive bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Explore My Work
              <ArrowDown className="ml-2 w-4 h-4" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="interactive"
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};