import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
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
        { href: "/work/oart", label: "OART" },
        { href: "/work/safewalk", label: "SafeWalk" },
        { href: "/work/umai", label: "Umai" },
      ],
    },
    { href: "/about", label: "About" },
    { href: "/components", label: "Components" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="flex items-center justify-between px-6 py-4">
        <div onClick={() => navigate("/")} className="cursor-pointer font-bold">
          Nuno
        </div>
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) =>
            item.submenu ? (
              <div key={item.label} className="relative group">
                <button
                  onClick={() => navigate(item.href)}
                  className="flex items-center font-medium hover:text-primary"
                >
                  {item.label}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 top-full hidden min-w-[10rem] rounded-md border bg-background shadow-lg group-hover:block">
                  {item.submenu.map((subitem) => (
                    <button
                      key={subitem.href}
                      onClick={() => navigate(subitem.href)}
                      className="block w-full px-4 py-2 text-left text-sm hover:bg-muted/30"
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
                className={`font-medium hover:text-primary ${isActive(item.href) ? "text-primary" : ""}`}
              >
                {item.label}
              </button>
            )
          )}
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={toggleTheme} aria-label="Toggle theme" className="rounded-full p-2 border bg-card">
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            className="md:hidden rounded-md p-2"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => {
                navigate(item.href);
                setIsMenuOpen(false);
              }}
              className="block w-full px-4 py-3 text-left font-medium hover:bg-muted/20"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};
