import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import About from "./pages/About";
import Work from "./pages/Work";
import CaseStudy from "./pages/CaseStudy";
import Components from "./pages/Components";
import NotFound from "./pages/NotFound";
import Oart from "./pages/Oart";
import SafeWalk from "./pages/SafeWalk";
import Umai from "./pages/Umai";

import { Navigation } from "@/components/Navigation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/oart" element={<Oart />} />
          <Route path="/work/safewalk" element={<SafeWalk />} />
          <Route path="/work/umai" element={<Umai />} />
          <Route path="/components" element={<Components />} />
          <Route path="/work/:caseStudyId" element={<CaseStudy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    <Toaster />
    <Sonner />
  </QueryClientProvider>
);

export default App;
