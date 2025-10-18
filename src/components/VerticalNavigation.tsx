import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: "hero", label: "Hero" },
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export const VerticalNavigation = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[1px] h-full bg-border/40" />
        
        {/* Navigation dots */}
        <div className="relative flex flex-col gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group relative flex items-center justify-center"
                aria-label={`Navigate to ${item.label}`}
              >
                {/* Dot */}
                <motion.div
                  className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                    isActive 
                      ? "bg-primary border-primary scale-125" 
                      : "bg-background border-border/60 hover:border-primary/60"
                  }`}
                  whileHover={{ scale: 1.3 }}
                  transition={{ duration: 0.2 }}
                />
                
                {/* Label on hover */}
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute left-8 whitespace-nowrap text-sm font-medium text-foreground bg-background/90 backdrop-blur-sm px-3 py-1 rounded-md border border-border/40 pointer-events-none"
                >
                  {item.label}
                </motion.span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};