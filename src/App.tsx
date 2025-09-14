import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Work from "./pages/Work";
import CaseStudy from "./pages/CaseStudy";
import Components from "./pages/Components";
import NotFound from "./pages/NotFound";
import Oart from "./pages/Oart";
import SafeWalk from "./pages/SafeWalk";
import Umai from "./pages/Umai";

// Create a QueryClient instance (shared across the app)
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* Global toast systems */}
      <Toaster />
      <Sonner />

      {/* Router */}
      <BrowserRouter>
        <Routes>
          {/* Main pages */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/components" element={<Components />} />
          <Route path="/work" element={<Work />} />

          {/* Case studies */}
          <Route path="/work/uber-train-integration" element={<CaseStudy />} />
          <Route path="/work/oart" element={<Oart />} />
          <Route path="/work/safewalk" element={<SafeWalk />} />
          <Route path="/work/umai" element={<Umai />} />

          {/* Catch-all (404) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
