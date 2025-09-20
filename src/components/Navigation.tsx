import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // detect current theme on mount
  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    document.documentElement.classList.toggle("dark", newMode);
  };

  const navItems = [
    { href: "/", label: "Home" },
    {
      href: "/work",
      label: "Work",
      submenu: [
        { href: "/work", label: "All Work" },
        { href: "/work/oart", label: "OART Case Study" },
        { href: "/work/safewalk", label: "SafeWalk" },
        { href: "/work/umai", label: "Umai" },
      ],
    },
    { href: "/about", label: "About" },
    { href: "/components", label: "Components" },
  ];

  // highlight current route
  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo / Site Name */}
        <div
          className="cursor-pointer font-semibold text-lg"
          onClick={() => navigate("/")}
        >
          Nuno
        </div>
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) =>
            item.submenu ? (
              <div key={item.label} className="relative group">
                <button
                  onClick={() => navigate(item.href)}
                  className="flex items-center font-medium transition-colors hover:text-primary"
                >
                  {item.label}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {/* Dropdown */}
                <div className="absolute top-full left-0 hidden min-w-[10rem] rounded-md border bg-background shadow-xl group-hover:block">
                  {item.submenu.map((subitem) => (
                    <button
                      key={subitem.href}
                      onClick={() => navigate(subitem.href)}
                      className="block w-full px-4 py-2 text-left text-sm transition-colors hover:bg-muted/30"
                    >
                      {subitem.label}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <button
                key={item.href}
                onClick={() => navigate(item.href)}
                className={`font-medium transition-colors hover:text-primary ${
                  isActive(item.href) ? "text-primary" : ""
                }`}
              >
                {item.label}
              </button>
            )
          )}
        </div>
        {/* Right controls */}
        <div className="flex items-center space-x-4">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-full p-2 border bg-card shadow hover:shadow-md transition-colors"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          {/* Mobile menu toggle */}
          <button
            className="md:hidden rounded-md p-2"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          {navItems.map((item) => (
            <div key={item.label}>
              <button
                onClick={() => {
                  navigate(item.href);
                  setIsMenuOpen(false);
                }}
                className={`block w-full px-4 py-3 text-left font-medium transition-colors hover:bg-muted/20 ${
                  isActive(item.href) ? "text-primary" : ""
                }`}
              >
                {item.label}
              </button>
              {item.submenu && (
                <div className="pl-4">
                  {item.submenu.map((subitem) => (
                    <button
                      key={subitem.href}
                      onClick={() => {
                        navigate(subitem.href);
                        setIsMenuOpen(false);
                      }}
                      className="block w-full px-4 py-2 text-left text-sm transition-colors hover:bg-muted/10"
                    >
                      {subitem.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};
