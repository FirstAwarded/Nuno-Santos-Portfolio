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
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[1px] h-full" style={{ backgroundColor: '#3b3b3b' }} />
        
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
                  className={`w-3 h-3 rounded-full border-2 transition-all duration-300`}
                  style={{
                    backgroundColor: isActive ? '#d1d1d1' : 'transparent',
                    borderColor: isActive ? '#d1d1d1' : '#3b3b3b',
                    boxShadow: isActive ? '0 0 12px rgba(209, 209, 209, 0.4)' : 'none',
                  }}
                  whileHover={{ scale: 1.3 }}
                  transition={{ duration: 0.2 }}
                />
                
                {/* Label on hover */}
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute left-8 whitespace-nowrap text-sm font-medium px-3 py-1 rounded-md border pointer-events-none"
                  style={{
                    color: '#eaeaea',
                    backgroundColor: 'rgba(14, 14, 14, 0.9)',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(8px)',
                  }}
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