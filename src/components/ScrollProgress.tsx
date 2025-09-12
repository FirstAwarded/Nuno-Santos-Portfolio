import { useEffect, useState, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';

export const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [sections, setSections] = useState<{ id: string; element: Element; name: string }[]>([]);

  // Auto-detect sections with headings or specific IDs
  useEffect(() => {
    const detectSections = () => {
      const sectionElements = Array.from(
        document.querySelectorAll('section[id], div[id="work"], div[id="about"], div[id="contact"]')
      );
      
      const sectionsData = sectionElements.map((el, index) => ({
        id: el.id || `section-${index}`,
        element: el,
        name: el.getAttribute('data-section-name') || 
               el.querySelector('h1, h2, h3')?.textContent ||
               el.id.charAt(0).toUpperCase() + el.id.slice(1) ||
               `Section ${index + 1}`
      }));
      
      setSections(sectionsData);
    };

    // Delay to ensure DOM is ready
    const timer = setTimeout(detectSections, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      
      setScrollProgress(progress);
      setIsScrolled(scrollTop > 100);

      // Determine current section
      const windowHeight = window.innerHeight;
      const currentSectionIndex = sections.findIndex((section, index) => {
        const rect = section.element.getBoundingClientRect();
        const nextSection = sections[index + 1];
        
        if (rect.top <= windowHeight * 0.5 && 
            (!nextSection || nextSection.element.getBoundingClientRect().top > windowHeight * 0.5)) {
          return true;
        }
        return false;
      });
      
      if (currentSectionIndex !== -1) {
        setCurrentSection(currentSectionIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target !== document.body) return; // Only when not focused on input
      
      if (e.key === 'j' || e.key === 'ArrowDown') {
        e.preventDefault();
        const nextIndex = Math.min(currentSection + 1, sections.length - 1);
        scrollToSection(nextIndex);
      } else if (e.key === 'k' || e.key === 'ArrowUp') {
        e.preventDefault();
        const prevIndex = Math.max(currentSection - 1, 0);
        scrollToSection(prevIndex);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentSection, sections]);

  const scrollToSection = useCallback((index: number) => {
    if (sections[index]) {
      sections[index].element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }, [sections]);

  const handleClick = () => {
    if (!isScrolled) {
      // Scroll to first section after hero
      scrollToSection(1);
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
          // Scroll cue (dot that elongates to chevron on hover)
          <button
            onClick={handleClick}
            className="group relative w-6 h-10 rounded-full border-2 border-muted-foreground/60 hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30"
            aria-label="Scroll to next section"
          >
            {/* Dot that elongates */}
            <div className="absolute top-2 left-1/2 w-1 h-3 bg-muted-foreground/60 rounded-full -translate-x-1/2 group-hover:bg-primary group-hover:h-4 transition-all duration-300" />
            {/* Chevron that appears */}
            <ChevronDown className="absolute -bottom-1 left-1/2 w-4 h-4 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary" />
          </button>
        ) : (
          // Progress bar with section ticks
          <div className="relative w-full h-full bg-muted/20 backdrop-blur-sm">
            <div 
              className="w-full bg-gradient-to-b from-primary to-accent transition-all duration-150 ease-out"
              style={{ height: `${scrollProgress * 100}%` }}
            />
            
            {/* Section ticks */}
            <div className="absolute inset-0 flex flex-col justify-between py-4">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 hover:scale-125 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
                    index === currentSection
                      ? 'bg-primary shadow-lg shadow-primary/30 scale-125'
                      : 'bg-muted-foreground/60 hover:bg-primary/70'
                  }`}
                  style={{ marginLeft: '-5px' }}
                  aria-label={`Go to ${section.name}`}
                  title={section.name}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Keyboard navigation hint (only visible when focused) */}
      {isScrolled && (
        <div className="fixed bottom-4 left-4 opacity-0 focus-within:opacity-100 hover:opacity-100 transition-opacity duration-300 z-40">
          <div className="text-xs text-muted-foreground bg-background/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-border/50">
            Use ↑↓ or J/K to navigate sections
          </div>
        </div>
      )}
    </>
  );
};