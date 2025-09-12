import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      
      setScrollProgress(progress);
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    if (!isScrolled) {
      // Scroll to work section
      const workSection = document.getElementById('work');
      workSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Indicator (transforms to progress bar) */}
      <div 
        className={`fixed transition-all duration-700 ease-out z-50 ${
          isScrolled 
            ? 'left-0 top-0 w-1 h-full' 
            : 'left-1/2 bottom-8 w-6 h-10 -translate-x-1/2'
        }`}
      >
        {!isScrolled ? (
          // Scroll cue (dot morphing into line/chevron)
          <button
            onClick={handleClick}
            className="group relative w-6 h-10 rounded-full border-2 border-muted-foreground/60 hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
            aria-label="Scroll to work section"
          >
            <div className="absolute top-2 left-1/2 w-1 h-3 bg-muted-foreground/60 rounded-full -translate-x-1/2 group-hover:bg-primary transition-colors duration-300" />
            <ChevronDown className="absolute -bottom-1 left-1/2 w-4 h-4 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary" />
          </button>
        ) : (
          // Progress bar
          <div className="w-full h-full bg-muted/20 backdrop-blur-sm">
            <div 
              className="w-full bg-gradient-to-b from-primary to-accent transition-all duration-150 ease-out"
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>
        )}
      </div>
    </>
  );
};