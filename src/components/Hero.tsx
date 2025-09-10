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
      {/* Apple-style Mesh Background */}
      <MeshBackground className="w-full h-full" />
      
      {/* Refined overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-3 mb-12 text-sm font-medium">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-foreground">UX/UI Designer</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">3 Years Experience</span>
          </div>
          
          <h1 
            className="hero-text mb-8 noise-text font-display" 
            data-text="Designing clarity in a noisy world."
          >
            Designing clarity in a{' '}
            <span className="gradient-text">noisy world</span>.
          </h1>
          
          <p className="body-large mb-12 max-w-3xl mx-auto">
            I craft user experiences that turn complex problems into intuitive solutions, 
            with a focus on strategic thinking and delightful microinteractions.
          </p>

          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button 
              onClick={scrollToWork}
              className="btn-hero interactive-lift group"
              aria-label="Explore my work portfolio"
            >
              <span>Explore My Work</span>
              <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
            
            <Button 
              variant="outline"
              size="lg"
              className="interactive-lift glass border-border/50 hover:border-primary/30"
            >
              Download Resume
            </Button>
          </div>

          {/* Key metrics */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-light text-primary animate-count-up">15+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-light text-primary animate-count-up">3</div>
              <div className="text-sm text-muted-foreground">Years</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-light text-primary animate-count-up">98%</div>
              <div className="text-sm text-muted-foreground">User Satisfaction</div>
            </div>
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