import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ScrollProgress } from '@/components/ScrollProgress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  ChevronDown, 
  ChevronRight, 
  Users, 
  Settings, 
  Target,
  Clock,
  TrendingUp,
  Shield,
  CheckCircle,
  Eye,
  EyeOff,
  Play,
  Pause,
  ArrowLeft,
  ArrowRight,
  Lightbulb,
  Zap,
  BarChart3
} from 'lucide-react';

const AnimatedCounter = ({ 
  target, 
  suffix = '', 
  prefix = '', 
  duration = 900,
  inView = false 
}: { 
  target: number; 
  suffix?: string; 
  prefix?: string; 
  duration?: number;
  inView?: boolean;
}) => {
  const [count, setCount] = useState(0);
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (!inView) return;
    
    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease-out function
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * easeOut));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [inView, target, duration, prefersReducedMotion]);

  return <span>{prefix}{count}{suffix}</span>;
};

const TableOfContents = () => {
  const [activeSection, setActiveSection] = useState('bluf');
  const [isOpen, setIsOpen] = useState(true);

  const sections = [
    { id: 'bluf', label: 'BLUF' },
    { id: 'context', label: 'Context' },
    { id: 'status-quo', label: 'Status Quo' },
    { id: 'key-moves', label: 'Key Moves' },
    { id: 'accessibility', label: 'Accessibility' },
    { id: 'process', label: 'Process' },
    { id: 'impact', label: 'Impact' },
    { id: 'learnings', label: 'Learnings' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]');
      let current = 'bluf';
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100) {
          current = section.getAttribute('data-section') || 'bluf';
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <Card className="w-48 border-border/20 bg-background/80 backdrop-blur-sm">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium">Contents</CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="h-6 w-6 p-0"
            >
              <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </Button>
          </div>
        </CardHeader>
        {isOpen && (
          <CardContent className="pt-0">
            <nav className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`block w-full text-left px-2 py-1 text-sm rounded transition-colors ${
                    activeSection === section.id 
                      ? 'bg-primary text-primary-foreground font-medium' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                  aria-current={activeSection === section.id ? 'true' : undefined}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

const QuickFactsPill = ({ inView }: { inView: boolean }) => {
  const facts = [
    { label: 'Role', value: 'Lead UX Designer' },
    { label: 'Team', value: '3 people' },
    { label: 'Timeline', value: '8 months' },
    { label: 'Platform', value: 'Power Apps' }
  ];

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {facts.map((fact, index) => (
        <Badge 
          key={fact.label}
          variant="secondary" 
          className={`transition-all duration-300 ${
            inView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-2'
          }`}
          style={{ 
            transitionDelay: inView ? `${index * 60}ms` : '0ms' 
          }}
        >
          <span className="text-muted-foreground">{fact.label}:</span>
          <span className="ml-1 font-medium">{fact.value}</span>
        </Badge>
      ))}
    </div>
  );
};

const PersonaTabs = () => {
  const [activeTab, setActiveTab] = useState('pms');
  
  const personas = {
    pms: {
      icon: <Users className="h-4 w-4" />,
      label: 'Project Managers',
      description: 'Need fast approvals and clear visibility into project status'
    },
    spms: {
      icon: <Settings className="h-4 w-4" />,
      label: 'Senior PMs',
      description: 'Require bulk processing and exception reporting capabilities'
    },
    staff: {
      icon: <Target className="h-4 w-4" />,
      label: 'Support Staff',
      description: 'Want simple data entry and automated notification flows'
    }
  };

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid grid-cols-3 w-full">
        {Object.entries(personas).map(([key, persona]) => (
          <TabsTrigger key={key} value={key} className="flex items-center gap-2">
            {persona.icon}
            <span className="hidden sm:inline">{persona.label}</span>
          </TabsTrigger>
        ))}
      </TabsList>
      
      {Object.entries(personas).map(([key, persona]) => (
        <TabsContent key={key} value={key} className="mt-4">
          <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
            <div className="flex-shrink-0 p-2 bg-background rounded-md">
              {persona.icon}
            </div>
            <p className="text-sm text-muted-foreground">{persona.description}</p>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

const BeforeAfterSlider = ({ title }: { title: string }) => {
  const [sliderValue, setSliderValue] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const handleMouseDown = (e: React.MouseEvent) => {
    if (prefersReducedMotion) return;
    setIsDragging(true);
    updateSliderValue(e);
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    updateSliderValue(e);
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const updateSliderValue = (e: MouseEvent | React.MouseEvent) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const percentage = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    setSliderValue(percentage);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft' || e.key === '[') {
      setSliderValue(Math.max(0, sliderValue - 10));
    } else if (e.key === 'ArrowRight' || e.key === ']') {
      setSliderValue(Math.min(100, sliderValue + 10));
    }
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  if (prefersReducedMotion) {
    return (
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Button variant="outline" size="sm">Show Before</Button>
          <Button variant="outline" size="sm">Show After</Button>
        </div>
        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
          <span className="text-muted-foreground">Before/After: {title}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div 
        ref={sliderRef}
        className="aspect-video bg-muted rounded-lg overflow-hidden cursor-col-resize relative focus:outline-none focus:ring-2 focus:ring-ring"
        onMouseDown={handleMouseDown}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="slider"
        aria-valuenow={sliderValue}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Before/After slider for ${title}`}
      >
        {/* Before image */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-red-100 to-red-200 flex items-center justify-center"
          style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
        >
          <span className="text-red-700 font-medium">Before: {title}</span>
        </div>
        
        {/* After image */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center"
          style={{ clipPath: `inset(0 0 0 ${sliderValue}%)` }}
        >
          <span className="text-green-700 font-medium">After: {title}</span>
        </div>
        
        {/* Slider handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-col-resize"
          style={{ left: `${sliderValue}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
            <ArrowLeft className="h-3 w-3 text-muted-foreground" />
            <ArrowRight className="h-3 w-3 text-muted-foreground" />
          </div>
        </div>
      </div>
      
      <div className="mt-2 text-center text-xs text-muted-foreground">
        Drag to compare • Use [/] or ←/→ keys
      </div>
    </div>
  );
};

export default function Oart() {
  const [metricsInView, setMetricsInView] = useState(false);
  const [quickFactsInView, setQuickFactsInView] = useState(false);
  const [processExpanded, setProcessExpanded] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [showTabOrder, setShowTabOrder] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [quotePaused, setQuotePaused] = useState(false);

  const quotes = [
    "Very useful and easy to use - the bulk approvals save me hours each week",
    "Finally, a system that actually works reliably for our daily workflows",
    "The new interface is so much clearer than the old tools we were using"
  ];

  useEffect(() => {
    const metricsObserver = new IntersectionObserver(
      ([entry]) => setMetricsInView(entry.isIntersecting),
      { threshold: 0.3 }
    );

    const quickFactsObserver = new IntersectionObserver(
      ([entry]) => setQuickFactsInView(entry.isIntersecting),
      { threshold: 0.3 }
    );

    const metricsElement = document.getElementById('metrics-section');
    const quickFactsElement = document.getElementById('quick-facts');
    
    if (metricsElement) metricsObserver.observe(metricsElement);
    if (quickFactsElement) quickFactsObserver.observe(quickFactsElement);

    return () => {
      metricsObserver.disconnect();
      quickFactsObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (quotePaused) return;
    
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [quotePaused, quotes.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 't') {
        setShowTabOrder(!showTabOrder);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showTabOrder]);

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <TableOfContents />
      
      {showTabOrder && (
        <div className="fixed inset-0 bg-black/20 z-50 pointer-events-none">
          <div className="absolute top-20 left-20 w-4 h-4 bg-blue-500 rounded-full animate-fade-in" style={{ animationDelay: '0ms' }} />
          <div className="absolute top-32 left-32 w-4 h-4 bg-blue-500 rounded-full animate-fade-in" style={{ animationDelay: '80ms' }} />
          <div className="absolute top-44 left-44 w-4 h-4 bg-blue-500 rounded-full animate-fade-in" style={{ animationDelay: '160ms' }} />
        </div>
      )}
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* BLUF Section */}
        <section data-section="bluf" className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                OART — Scalable UX for Enterprise Workflows
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Replaced legacy systems with a scalable application that cut approval time by 
                <Badge variant="secondary" className="mx-2">
                  <AnimatedCounter target={75} suffix="%" prefix="~" inView={metricsInView} />
                </Badge>
                reduced licensing costs by 
                <Badge variant="secondary" className="mx-2">
                  six-figure savings
                </Badge>
                and embedded accessibility by default.
              </p>

              <div id="quick-facts">
                <QuickFactsPill inView={quickFactsInView} />
              </div>
            </div>
            
            <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-primary/20 rounded-full mx-auto flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <span className="text-muted-foreground text-sm">Hero Visual</span>
                <div className="text-xs text-muted-foreground">Ultra-subtle alignment loop</div>
              </div>
            </div>
          </div>
        </section>

        {/* Context & Constraints */}
        <section data-section="context" className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Context & Constraints</h2>
          
          <div className="space-y-8">
            <Card className="bg-muted/30">
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed">
                  At <strong>a UK utility provider</strong>, two outdated tools made project workflows 
                  painfully slow and unreliable. Approvals could take two hours, tables were unreadable, 
                  and adoption had collapsed. I worked end-to-end on OART — from initial discovery through 
                  launch — to deliver a modern, scalable solution now used by ~200 staff across the business.
                </p>
              </CardContent>
            </Card>

            <PersonaTabs />

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Constraints
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Model-driven Power Apps</Badge>
                    <Badge variant="outline">250+ requirements</Badge>
                    <Badge variant="outline">MoSCoW prioritization</Badge>
                    <Badge variant="outline">Legacy integration</Badge>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Scope Distribution</span>
                    </div>
                    <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                      <div className="absolute inset-y-0 left-0 bg-red-500 rounded-full" style={{ width: '40%' }} />
                      <div className="absolute inset-y-0 left-[40%] bg-orange-500 rounded-full" style={{ width: '30%' }} />
                      <div className="absolute inset-y-0 left-[70%] bg-yellow-500 rounded-full" style={{ width: '20%' }} />
                      <div className="absolute inset-y-0 left-[90%] bg-gray-400 rounded-full" style={{ width: '10%' }} />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>Must</span>
                      <span>Should</span>
                      <span>Could</span>
                      <span>Won't</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Timeline Impact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Discovery & Research</span>
                      <Badge variant="secondary">2 months</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Design & Validation</span>
                      <Badge variant="secondary">3 months</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Development Support</span>
                      <Badge variant="secondary">2 months</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Testing & Launch</span>
                      <Badge variant="secondary">1 month</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Status Quo */}
        <section data-section="status-quo" className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Status Quo (Before)</h2>
          
          <Card className="bg-muted/30">
            <CardContent className="pt-6">
              <p className="text-lg mb-6 leading-relaxed">
                Legacy systems forced managers to approve items line-by-line, filters were overloaded 
                with irrelevant fields, and stability issues caused abandonment. These inefficiencies 
                delayed approvals, hurt visibility, and drove up licensing costs.
              </p>

              <div className="aspect-video bg-muted rounded-lg relative overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-muted-foreground">Legacy System Screenshot</span>
                </div>
                
                {/* Hotspot annotations */}
                <button className="absolute top-4 left-4 w-3 h-3 bg-red-500 rounded-full animate-pulse group-hover:bg-red-600 transition-colors">
                  <span className="sr-only">Line-by-line approvals issue</span>
                </button>
                
                <button className="absolute top-1/2 right-8 w-3 h-3 bg-red-500 rounded-full animate-pulse group-hover:bg-red-600 transition-colors">
                  <span className="sr-only">Overloaded filters issue</span>
                </button>
                
                <button className="absolute bottom-6 left-1/3 w-3 h-3 bg-red-500 rounded-full animate-pulse group-hover:bg-red-600 transition-colors">
                  <span className="sr-only">Stability issues</span>
                </button>

                <div className="absolute top-4 left-8 opacity-0 group-hover:opacity-100 transition-opacity bg-background border p-2 rounded shadow-lg text-sm max-w-xs">
                  Managers had to approve each item individually - taking up to 2 hours for large batches
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Average approval time: 2 hours</span>
                <div className="ml-auto">
                  <div className="animate-spin h-4 w-4 border-2 border-muted border-t-primary rounded-full" />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Key Moves */}
        <section data-section="key-moves" className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Key Moves</h2>
          
          <div className="space-y-12">
            {/* Move A: Approvals at Scale */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">A</span>
                    Approvals at Scale
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <Progress value={100} className="w-16 h-2" />
                    <span className="text-xs text-muted-foreground">4/4 steps</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Challenge</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Line-by-line approvals created bottlenecks for large batches
                    </p>
                    
                    <h4 className="font-semibold mb-2">Solution</h4>
                    <ul className="text-sm space-y-1">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Bulk actions (up to 1,000 items)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Smart selection filters
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Exception highlighting
                      </li>
                    </ul>
                  </div>
                  
                  <BeforeAfterSlider title="Bulk Approvals" />
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t">
                  <Button variant="outline" size="sm">
                    Evidence
                  </Button>
                  <Badge variant="secondary">~75% time reduction</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Move B: Readable Tables */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">B</span>
                    Readable Tables & Navigation
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <Progress value={100} className="w-16 h-2" />
                    <span className="text-xs text-muted-foreground">4/4 steps</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Challenge</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Dense, unreadable tables hindered decision-making
                    </p>
                    
                    <h4 className="font-semibold mb-2">Solution</h4>
                    <ul className="text-sm space-y-1">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Responsive, readable layouts
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Clear entry points
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Dataverse integration
                      </li>
                    </ul>
                  </div>
                  
                  <BeforeAfterSlider title="Table Design" />
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t">
                  <Button variant="outline" size="sm">
                    Evidence
                  </Button>
                  <Badge variant="secondary">Improved readability</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Move C: Streamlined Filtering */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">C</span>
                    Streamlined Filtering
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <Progress value={100} className="w-16 h-2" />
                    <span className="text-xs text-muted-foreground">4/4 steps</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Challenge</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Overloaded filters with irrelevant fields confused users
                    </p>
                    
                    <h4 className="font-semibold mb-2">Solution</h4>
                    <ul className="text-sm space-y-1">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Streamlined around real user needs
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Smart defaults and presets
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Progressive disclosure
                      </li>
                    </ul>
                  </div>
                  
                  <BeforeAfterSlider title="Filter Interface" />
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t">
                  <Button variant="outline" size="sm">
                    Evidence
                  </Button>
                  <Badge variant="secondary">Reduced complexity</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Accessibility by Default */}
        <section data-section="accessibility" className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Accessibility by Default</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className={highContrast ? 'bg-black text-white border-white' : ''}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  WCAG Compliance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  Accessibility embedded at system level: WCAG-compliant contrast, 
                  color-independent labels, and full keyboard navigation.
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">High Contrast Mode</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setHighContrast(!highContrast)}
                  >
                    {highContrast ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Keyboard Navigation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  Full keyboard navigation with visible focus indicators and 
                  logical tab order throughout the interface.
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Show Tab Order (Press T)</span>
                  <Badge variant={showTabOrder ? 'default' : 'secondary'}>
                    {showTabOrder ? 'Visible' : 'Hidden'}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Process Timeline */}
        <section data-section="process" className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Process Timeline</h2>
            <Button
              variant="outline"
              onClick={() => setProcessExpanded(!processExpanded)}
              className="flex items-center gap-2"
            >
              {processExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              {processExpanded ? 'Collapse' : 'Expand'}
            </Button>
          </div>

          {processExpanded && (
            <Card className="animate-accordion-down">
              <CardContent className="pt-6">
                <div className="space-y-8">
                  <div className="relative">
                    <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-border" />
                    
                    {[
                      {
                        title: 'Research & Requirements',
                        description: '25 user interviews, surveys, and 250+ requirements collection',
                        icon: <Users className="h-5 w-5" />
                      },
                      {
                        title: 'Requirement Validation',
                        description: 'Converted requirements into annotated wireframes for visual validation',
                        icon: <Target className="h-5 w-5" />
                      },
                      {
                        title: 'System Craft in Figma',
                        description: 'Built reusable design foundation with accessibility embedded',
                        icon: <Zap className="h-5 w-5" />
                      },
                      {
                        title: 'Testing & Readiness',
                        description: 'Coordinated 17 testers through usability and acceptance testing',
                        icon: <CheckCircle className="h-5 w-5" />
                      },
                      {
                        title: 'Driving Adoption',
                        description: 'Produced onboarding videos and hosted drop-in sessions',
                        icon: <TrendingUp className="h-5 w-5" />
                      }
                    ].map((step, index) => (
                      <div key={step.title} className="relative flex items-start gap-4 pb-8">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                          {step.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{step.title}</h4>
                          <p className="text-sm text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </section>

        {/* Impact */}
        <section data-section="impact" className="mb-20" id="metrics-section">
          <h2 className="text-3xl font-bold mb-8">Impact</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  <AnimatedCounter target={75} suffix="%" prefix="~" inView={metricsInView} />
                </div>
                <p className="text-sm text-muted-foreground">Faster approvals</p>
                <div className="text-xs text-muted-foreground mt-1">2 hours → &lt;30 minutes</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-primary mb-2">
                  Six-figure
                </div>
                <p className="text-sm text-muted-foreground">Cost savings</p>
                <div className="text-xs text-muted-foreground mt-1">to low five figures</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  <AnimatedCounter target={200} suffix="+" prefix="~" inView={metricsInView} />
                </div>
                <p className="text-sm text-muted-foreground">Staff impacted</p>
                <div className="text-xs text-muted-foreground mt-1">High engagement</div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-muted/30">
            <CardContent className="pt-6">
              <div className="text-center">
                <div 
                  className="text-lg italic mb-4 transition-opacity duration-300"
                  onMouseEnter={() => setQuotePaused(true)}
                  onMouseLeave={() => setQuotePaused(false)}
                >
                  "{quotes[quoteIndex]}"
                </div>
                
                <div className="flex justify-center gap-2">
                  {quotes.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setQuoteIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === quoteIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                      }`}
                      aria-label={`Quote ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Learnings & Next */}
        <section data-section="learnings" className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Learnings & Next</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="moscow">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5" />
                  MoSCoW prioritization kept 250+ requirements focused and achievable
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pt-4 space-y-4">
                  <p className="text-sm text-muted-foreground">
                    By applying strict prioritization early, we avoided scope creep and ensured 
                    the team focused on high-value outcomes that directly addressed user pain points.
                  </p>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">MoSCoW Framework Example</span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="wireframes">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Wireframe-first validation turned sign-off into a visual process
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pt-4 space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Converting spreadsheet requirements into visual wireframes eliminated ambiguity 
                    early and reduced rework during development.
                  </p>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Wireframe Validation Process</span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="accessibility">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Accessibility by default ensured inclusivity scaled with the system
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pt-4 space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Building accessibility into the design system from day one meant every new 
                    component automatically met WCAG standards without additional effort.
                  </p>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Accessibility Standards Implementation</span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="endtoend">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  End-to-end involvement proved that enterprise UX success comes from clarity, inclusivity, and reusability
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pt-4 space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Being involved from discovery through go-live ensured design decisions were 
                    grounded in real user needs and technical constraints, not flashy UI.
                  </p>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">End-to-End Process Flow</span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* CTA */}
        <section className="bg-muted/30 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Want the full walkthrough?</h2>
          <p className="text-muted-foreground mb-6">
            Full research findings, wireframes, and detailed process documentation 
            are available on request.
          </p>
          <Button size="lg" asChild>
            <a href="/contact">Request Full Case Study</a>
          </Button>
        </section>
      </div>
    </div>
  );
}