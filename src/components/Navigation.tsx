import { useState, useEffect } from "react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.05);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-center gap-8">
          <button
            onClick={() => scrollToSection('work-section')}
            className="text-sm font-medium text-foreground hover:text-accent transition-colors duration-150 min-w-[24px] min-h-[24px] px-2 py-1 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection('about-section')}
            className="text-sm font-medium text-foreground hover:text-accent transition-colors duration-150 min-w-[24px] min-h-[24px] px-2 py-1 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact-section')}
            className="text-sm font-medium text-foreground hover:text-accent transition-colors duration-150 min-w-[24px] min-h-[24px] px-2 py-1 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};
