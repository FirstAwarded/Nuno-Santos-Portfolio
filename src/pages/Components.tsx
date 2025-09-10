import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Sparkles, TrendingUp, Users, Clock, Palette, Type, Layout, Zap } from 'lucide-react';

const Components = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-16">
            <Button 
              variant="outline" 
              className="mb-8 interactive-lift"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
            
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 text-sm">
                <Palette className="w-4 h-4 text-primary" />
                Design System
              </div>
              <h1 className="display-text mb-4 font-display">Component Library</h1>
              <p className="body-large">
                A comprehensive design system showcasing reusable components, 
                patterns, and guidelines for creating consistent, accessible user interfaces.
              </p>
            </div>
          </div>

          {/* Brand Identity */}
          <section className="mb-20">
            <h2 className="text-2xl font-light mb-8 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-primary" />
              Brand & Identity
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Logo Variations */}
              <Card className="p-6">
                <h3 className="font-medium mb-4">Logo Variations</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-background rounded-lg border">
                    <span className="font-display text-xl">Nuno Santos</span>
                    <span className="text-sm text-muted-foreground">Light Mode</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-foreground rounded-lg">
                    <span className="font-display text-xl text-background">Nuno Santos</span>
                    <span className="text-sm text-background/70">Dark Mode</span>
                  </div>
                </div>
              </Card>

              {/* Color Palette */}
              <Card className="p-6">
                <h3 className="font-medium mb-4">Color Palette</h3>
                <div className="grid grid-cols-4 gap-2">
                  <div className="aspect-square bg-primary rounded-lg"></div>
                  <div className="aspect-square bg-accent rounded-lg"></div>
                  <div className="aspect-square bg-success rounded-lg"></div>
                  <div className="aspect-square bg-warning rounded-lg"></div>
                </div>
                <div className="mt-3 text-sm text-muted-foreground">
                  Primary • Accent • Success • Warning
                </div>
              </Card>
            </div>
          </section>

          {/* Typography */}
          <section className="mb-20">
            <h2 className="text-2xl font-light mb-8 flex items-center gap-3">
              <Type className="w-5 h-5 text-primary" />
              Typography
            </h2>
            
            <Card className="p-8">
              <div className="space-y-8">
                <div>
                  <h1 className="hero-text mb-2 font-display">Hero Text</h1>
                  <p className="text-sm text-muted-foreground">hero-text • font-display</p>
                </div>
                <div>
                  <h2 className="display-text mb-2 font-display">Display Text</h2>
                  <p className="text-sm text-muted-foreground">display-text • font-display</p>
                </div>
                <div>
                  <p className="body-large mb-2">Body Large Text</p>
                  <p className="text-sm text-muted-foreground">body-large • font-system</p>
                </div>
                <div>
                  <p className="mb-2">Regular Body Text</p>
                  <p className="text-sm text-muted-foreground">text-base • font-system</p>
                </div>
              </div>
            </Card>
          </section>

          {/* Hero Blocks */}
          <section className="mb-20">
            <h2 className="text-2xl font-light mb-8 flex items-center gap-3">
              <Layout className="w-5 h-5 text-primary" />
              Hero Blocks
            </h2>
            
            <div className="space-y-8">
              {/* Standard Hero */}
              <Card className="p-8 text-center">
                <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 text-sm">
                  <Sparkles className="w-4 h-4 text-primary" />
                  UX/UI Designer
                </div>
                <h1 className="hero-text mb-4 font-display">
                  Designing clarity in a <span className="gradient-text">noisy world</span>.
                </h1>
                <p className="body-large mb-8 max-w-2xl mx-auto">
                  Crafting user experiences that turn complex problems into intuitive solutions.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button className="btn-hero">Primary CTA</Button>
                  <Button variant="outline" className="interactive-lift">Secondary</Button>
                </div>
              </Card>

              {/* Impact Hero with Metrics */}
              <Card className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="display-text mb-4 font-display">Impact-Focused Hero</h2>
                    <p className="body-large mb-6">
                      Showcase key achievements and metrics alongside your main value proposition.
                    </p>
                    <Button className="btn-hero">View Results</Button>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="metric-card">
                      <div className="text-2xl font-light text-primary mb-1">15+</div>
                      <div className="text-sm text-muted-foreground">Projects</div>
                    </div>
                    <div className="metric-card">
                      <div className="text-2xl font-light text-primary mb-1">340%</div>
                      <div className="text-sm text-muted-foreground">Engagement</div>
                    </div>
                    <div className="metric-card">
                      <div className="text-2xl font-light text-primary mb-1">98%</div>
                      <div className="text-sm text-muted-foreground">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Quote Bubbles */}
          <section className="mb-20">
            <h2 className="text-2xl font-light mb-8 flex items-center gap-3">
              <Users className="w-5 h-5 text-primary" />
              Quote Bubbles & Feedback
            </h2>
            
            <div className="space-y-6">
              {/* User Quote Card */}
              <Card className="p-6">
                <blockquote className="text-lg italic text-foreground mb-4">
                  "The new booking flow is so much cleaner. I can actually find what I need without getting lost in menus."
                </blockquote>
                <footer className="text-sm text-muted-foreground">
                  — Sarah, Frequent Traveler
                </footer>
              </Card>

              {/* Inline Quote */}
              <Card className="p-6 bg-muted/30">
                <p className="text-muted-foreground">
                  Users consistently mentioned that{' '}
                  <span className="font-medium text-foreground bg-primary/10 px-2 py-1 rounded">
                    "the interface feels more intuitive now"
                  </span>{' '}
                  during post-launch interviews.
                </p>
              </Card>
            </div>
          </section>

          {/* Outcome Metrics */}
          <section className="mb-20">
            <h2 className="text-2xl font-light mb-8 flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-primary" />
              Outcome Metric Cards
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="metric-card">
                <Clock className="w-8 h-8 text-primary mb-3 mx-auto" />
                <div className="text-3xl font-light text-primary mb-2">2h → 30m</div>
                <div className="text-sm font-medium mb-1">Booking Time</div>
                <div className="text-xs text-muted-foreground">75% reduction in completion time</div>
              </Card>
              
              <Card className="metric-card">
                <Users className="w-8 h-8 text-success mb-3 mx-auto" />
                <div className="text-3xl font-light text-success mb-2">+340%</div>
                <div className="text-sm font-medium mb-1">User Engagement</div>
                <div className="text-xs text-muted-foreground">Daily active users increased</div>
              </Card>
              
              <Card className="metric-card">
                <Sparkles className="w-8 h-8 text-accent mb-3 mx-auto" />
                <div className="text-3xl font-light text-accent mb-2">98%</div>
                <div className="text-sm font-medium mb-1">Satisfaction</div>
                <div className="text-xs text-muted-foreground">User approval rating</div>
              </Card>
            </div>
          </section>

          {/* Process Flow Panels */}
          <section className="mb-20">
            <h2 className="text-2xl font-light mb-8 flex items-center gap-3">
              <Zap className="w-5 h-5 text-primary" />
              Process Flow Panels
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Research Phase */}
              <Card className="p-6 border-l-4 border-l-primary">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Research & Discovery
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• User interviews (12 participants)</li>
                  <li>• Competitive analysis</li>
                  <li>• Journey mapping</li>
                  <li>• Pain point identification</li>
                </ul>
              </Card>

              {/* Validation Phase */}
              <Card className="p-6 border-l-4 border-l-success">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  Testing & Validation
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Prototype testing (A/B)</li>
                  <li>• Usability sessions</li>
                  <li>• Accessibility audit</li>
                  <li>• Performance metrics</li>
                </ul>
              </Card>
            </div>
          </section>

          {/* Tags & Badges */}
          <section className="mb-20">
            <h2 className="text-2xl font-light mb-8">Tags, Pills & Badges</h2>
            
            <Card className="p-8">
              <div className="space-y-6">
                {/* Category Badges */}
                <div>
                  <h3 className="font-medium mb-3">Category Badges</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">Research</Badge>
                    <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400">UI Design</Badge>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">Product</Badge>
                    <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400">Concept</Badge>
                  </div>
                </div>

                {/* Skill Tags */}
                <div>
                  <h3 className="font-medium mb-3">Skill Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-secondary/70 text-secondary-foreground px-3 py-1.5 rounded-full font-medium">
                      User Research
                    </span>
                    <span className="text-xs bg-secondary/70 text-secondary-foreground px-3 py-1.5 rounded-full font-medium">
                      Prototyping
                    </span>
                    <span className="text-xs bg-secondary/70 text-secondary-foreground px-3 py-1.5 rounded-full font-medium">
                      Accessibility
                    </span>
                    <span className="text-xs bg-secondary/70 text-secondary-foreground px-3 py-1.5 rounded-full font-medium">
                      Data Visualization
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Layout & Spacing */}
          <section className="mb-20">
            <h2 className="text-2xl font-light mb-8">Layout & Spacing Guide</h2>
            
            <Card className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Container Widths</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>• max-w-4xl: Content sections, hero text</div>
                    <div>• max-w-6xl: Main containers</div>
                    <div>• max-w-7xl: Work grids, wide layouts</div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Section Spacing</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>• py-20: Standard section padding</div>
                    <div>• py-32: Hero sections, featured content</div>
                    <div>• mb-16: Section headers</div>
                    <div>• mb-8: Subsection spacing</div>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Usage Instructions */}
          <section className="mb-20">
            <Card className="p-8 bg-muted/30">
              <h2 className="text-xl font-medium mb-4">Usage Instructions</h2>
              <div className="space-y-4 text-sm text-muted-foreground">
                <p>
                  <strong className="text-foreground">Component Classes:</strong> Use predefined component classes like 
                  <code className="bg-background px-2 py-1 rounded mx-1">.work-card</code>, 
                  <code className="bg-background px-2 py-1 rounded mx-1">.metric-card</code>, and 
                  <code className="bg-background px-2 py-1 rounded mx-1">.interactive-lift</code> for consistent styling.
                </p>
                <p>
                  <strong className="text-foreground">Typography:</strong> Use semantic typography classes 
                  (<code className="bg-background px-2 py-1 rounded mx-1">.hero-text</code>, 
                  <code className="bg-background px-2 py-1 rounded mx-1">.display-text</code>, 
                  <code className="bg-background px-2 py-1 rounded mx-1">.body-large</code>) instead of direct Tailwind classes.
                </p>
                <p>
                  <strong className="text-foreground">Interactions:</strong> Apply 
                  <code className="bg-background px-2 py-1 rounded mx-1">.interactive-lift</code> for hover effects and 
                  <code className="bg-background px-2 py-1 rounded mx-1">.glass</code> for glassmorphism backgrounds.
                </p>
                <p>
                  <strong className="text-foreground">Accessibility:</strong> All components include proper ARIA labels, 
                  keyboard navigation support, and high contrast ratios for WCAG AA compliance.
                </p>
              </div>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Components;