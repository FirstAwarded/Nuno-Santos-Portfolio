import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Glitch Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="animate-noise text-6xl font-mono text-muted-foreground/20 select-none pointer-events-none">
          404 404 404 404 404 404 404 404 404 404 404 404 404 404 404 404
        </div>
      </div>
      
      <div className="text-center relative z-10 px-6">
        <div className="animate-fade-in-up">
          <h1 className="text-8xl font-light mb-4 gradient-text">404</h1>
          <h2 className="text-2xl font-light mb-4">You wandered off-path.</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            But I design maps too. Let's get you back to somewhere meaningful.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="interactive">
              <a href="/">
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </a>
            </Button>
            
            <Button variant="outline" size="lg" className="interactive" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
