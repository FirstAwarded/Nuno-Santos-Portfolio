import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useNavigate, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    document.documentElement.classList.toggle('dark', newMode);
  };

  const navItems = [
    { href: '/', label: 'Home' },
    { 
      href: '/work', 
      label: 'Work',
      submenu: [
        { href: '/work', label: 'All Work' },
        { href: '/work/oart', label: 'OART Case Study' },
        { href: '/work/safewalk', label: 'SafeWalk' },
        { href: '/work/umai', label: 'Umai' },
      ]
    },
    { href: '/about', label: 'About' },
    { href: '/components', label: 'Components' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-medium">
            Nuno
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                {item.submenu ? (
                  <div
                    className="flex items-center gap-1 cursor-pointer text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                    onClick={() => navigate(item.href)}
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                    
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 mt-2 w-48 bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {item.submenu.map((subitem) => (
                          <a
                            key={subitem.href}
                            href={subitem.href}
                            className={cn(
                              "block px-4 py-2 text-sm transition-colors duration-200 hover:bg-muted/50",
                              location.pathname === subitem.href 
                                ? "text-primary font-medium" 
                                : "text-muted-foreground hover:text-foreground"
                            )}
                          >
                            {subitem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className={cn(
                      "text-sm transition-colors duration-300 relative group",
                      location.pathname === item.href 
                        ? "text-foreground font-medium" 
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.label}
                    <span className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                      location.pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                    )} />
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="interactive"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden interactive"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden mt-4 pb-4 transition-all duration-300 overflow-hidden",
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <div key={item.href}>
                <a
                  href={item.href}
                  className={cn(
                    "text-sm transition-colors duration-300 py-2 block",
                    location.pathname === item.href 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
                {item.submenu && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.submenu.slice(1).map((subitem) => (
                      <a
                        key={subitem.href}
                        href={subitem.href}
                        className={cn(
                          "text-sm transition-colors duration-300 py-1 block",
                          location.pathname === subitem.href 
                            ? "text-primary font-medium" 
                            : "text-muted-foreground hover:text-foreground"
                        )}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subitem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};