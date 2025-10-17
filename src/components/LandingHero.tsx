import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const projectData = [
  {
    id: 'oart',
    title: 'OART',
    descriptor: 'Enterprise approvals rebuilt',
    metric: '75% faster approvals',
    href: '/oart',
    image: '/src/assets/oart-mockup.jpg'
  },
  {
    id: 'safewalk',
    title: 'SafeWalk',
    descriptor: 'Safety-first navigation',
    metric: '40% less rework',
    href: '/safewalk',
    image: '/src/assets/safewalk-mockup.jpg'
  },
  {
    id: 'umai',
    title: 'Umai',
    descriptor: 'Personalized ordering',
    metric: '30% quicker checkout',
    href: '/umai',
    image: '/src/assets/Umai_CardBased_Decision.png'
  }
];

export const LandingHero = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-gradient-to-b from-[hsl(var(--background))] to-[hsl(var(--secondary))]">
      {/* Subtle mesh background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-[mesh-ripple_15s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-[mesh-ripple_20s_ease-in-out_infinite_2s]" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
        {/* Headline & Subline */}
        <div 
          className={`space-y-4 transition-all duration-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-foreground tracking-tight leading-tight">
            Product Designer turning<br />complexity into clarity.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            3+ years crafting systems that help enterprise teams move faster through design clarity.
          </p>
        </div>

        {/* CTAs */}
        <div 
          className={`flex flex-wrap gap-4 justify-center transition-all duration-300 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button
            onClick={() => scrollToSection('work-section')}
            className="btn-simple group"
          >
            View Work
            <ArrowRight className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => scrollToSection('about-section')}
            className="btn-simple-outline"
          >
            About Me
          </button>
        </div>

        {/* Project Preview Cards */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 transition-all duration-300 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {projectData.map((project, index) => (
            <div
              key={project.id}
              onClick={() => navigate(project.href)}
              className="card-simple cursor-pointer group p-4 bg-card/80 backdrop-blur-sm"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Thumbnail */}
              <div className="aspect-[4/3] mb-3 overflow-hidden rounded-lg bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-150 group-hover:scale-102"
                />
              </div>
              
              {/* Text content */}
              <div className="space-y-1">
                <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-150">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.descriptor}
                </p>
                <p className="text-xs font-medium text-accent pt-1">
                  {project.metric}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-300 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-[slide-reveal_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
};