import { Navigation } from '@/components/Navigation';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Quote, TrendingUp, Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Components() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Back Button */}
        <div className="container mx-auto px-6 max-w-6xl mb-8">
          <Link to="/">
            <Button variant="ghost" className="group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="container mx-auto px-6 max-w-6xl mb-16">
          <div className="text-center mb-12 animate-fade-in-up">
            <Badge className="mb-4">Design System</Badge>
            <h1 className="text-5xl font-light mb-6 tracking-tight">
              Component Library
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Reusable design blocks and components for consistent case study layouts and portfolio scalability.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6 max-w-6xl space-y-16">
          {/* Hero Blocks */}
          <section className="animate-fade-in-up">
            <h2 className="text-3xl font-light mb-8">Hero Blocks</h2>
            <div className="space-y-6">
              {/* Standard Hero */}
              <Card className="p-8">
                <h3 className="font-medium mb-4">Standard Case Study Hero</h3>
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8 mb-4">
                  <Badge className="mb-4">Product Design</Badge>
                  <h4 className="text-2xl font-light mb-4">Project Title Here</h4>
                  <p className="text-muted-foreground mb-6">
                    Brief description of the project challenge and outcome in one compelling sentence.
                  </p>
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="text-xl font-light text-primary">6 weeks</div>
                      <div className="text-xs text-muted-foreground">Timeline</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-light text-primary">iOS App</div>
                      <div className="text-xs text-muted-foreground">Platform</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-light text-primary">Lead UX</div>
                      <div className="text-xs text-muted-foreground">My Role</div>
                    </div>
                  </div>
                </div>
                <code className="text-xs text-muted-foreground">
                  Badge + Title + Description + Metrics Grid
                </code>
              </Card>

              {/* Impact Hero */}
              <Card className="p-8">
                <h3 className="font-medium mb-4">Impact-Focused Hero</h3>
                <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-8 mb-4 border border-primary/20">
                  <h4 className="text-2xl font-light mb-6">Key Impact</h4>
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-light text-primary mb-1">85%</div>
                      <div className="text-sm text-muted-foreground">Improvement metric</div>
                    </div>
                    <div>
                      <div className="text-3xl font-light text-primary mb-1">40%</div>
                      <div className="text-sm text-muted-foreground">Efficiency gain</div>
                    </div>
                    <div>
                      <div className="text-3xl font-light text-primary mb-1">95%</div>
                      <div className="text-sm text-muted-foreground">User satisfaction</div>
                    </div>
                  </div>
                </div>
                <code className="text-xs text-muted-foreground">
                  Highlight background + 3-column metrics
                </code>
              </Card>
            </div>
          </section>

          {/* Quote Bubbles */}
          <section className="animate-fade-in-up">
            <h2 className="text-3xl font-light mb-8">Quote Bubbles</h2>
            <div className="space-y-6">
              <Card className="p-8">
                <h3 className="font-medium mb-4">User Quote Block</h3>
                <div className="mb-4">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <Quote className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <blockquote className="text-lg italic text-muted-foreground mb-3">
                          "This captures exactly how users express their pain points. Direct quotes 
                          add authenticity and emotional connection to case studies."
                        </blockquote>
                        <p className="text-sm text-muted-foreground">— User Name, 28, Job Title</p>
                      </div>
                    </div>
                  </Card>
                </div>
                <code className="text-xs text-muted-foreground">
                  Quote icon + Italic text + Attribution
                </code>
              </Card>

              <Card className="p-8">
                <h3 className="font-medium mb-4">Inline Quote Highlight</h3>
                <div className="mb-4">
                  <blockquote className="text-lg italic text-muted-foreground border-l-4 border-primary pl-6 py-2">
                    "Shorter quotes can use this simpler left-border treatment for better content flow."
                  </blockquote>
                </div>
                <code className="text-xs text-muted-foreground">
                  Left border + Italic + No card wrapper
                </code>
              </Card>
            </div>
          </section>

          {/* Outcome Metric Cards */}
          <section className="animate-fade-in-up">
            <h2 className="text-3xl font-light mb-8">Outcome Metric Cards</h2>
            <div className="space-y-6">
              <Card className="p-8">
                <h3 className="font-medium mb-4">Metric Grid Layout</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <Card className="p-4 text-center border-primary/20">
                    <TrendingUp className="w-5 h-5 mx-auto mb-2 text-primary" />
                    <div className="text-xl font-light text-primary mb-1">+127%</div>
                    <div className="text-sm text-muted-foreground">User engagement</div>
                    <div className="text-xs text-muted-foreground mt-1">vs. previous version</div>
                  </Card>
                  <Card className="p-4 text-center border-primary/20">
                    <Users className="w-5 h-5 mx-auto mb-2 text-primary" />
                    <div className="text-xl font-light text-primary mb-1">24</div>
                    <div className="text-sm text-muted-foreground">User interviews</div>
                    <div className="text-xs text-muted-foreground mt-1">across 3 user segments</div>
                  </Card>
                  <Card className="p-4 text-center border-primary/20">
                    <CheckCircle className="w-5 h-5 mx-auto mb-2 text-primary" />
                    <div className="text-xl font-light text-primary mb-1">8/10</div>
                    <div className="text-sm text-muted-foreground">Usability score</div>
                    <div className="text-xs text-muted-foreground mt-1">SUS benchmark</div>
                  </Card>
                </div>
                <code className="text-xs text-muted-foreground">
                  Icon + Large number + Description + Context
                </code>
              </Card>
            </div>
          </section>

          {/* Test Flow Panels */}
          <section className="animate-fade-in-up">
            <h2 className="text-3xl font-light mb-8">Process Flow Panels</h2>
            <div className="space-y-6">
              <Card className="p-8">
                <h3 className="font-medium mb-4">Research Method Showcase</h3>
                <div className="space-y-4 mb-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="p-4 border-l-4 border-blue-500">
                      <h4 className="font-medium text-sm mb-2">Discovery Phase</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• User interviews (n=24)</li>
                        <li>• Competitive analysis</li>
                        <li>• Journey mapping</li>
                      </ul>
                    </Card>
                    <Card className="p-4 border-l-4 border-green-500">
                      <h4 className="font-medium text-sm mb-2">Validation Phase</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Prototype testing</li>
                        <li>• A/B testing setup</li>
                        <li>• Accessibility audit</li>
                      </ul>
                    </Card>
                  </div>
                </div>
                <code className="text-xs text-muted-foreground">
                  Colored left borders + Process lists
                </code>
              </Card>
            </div>
          </section>

          {/* Tags and Pills */}
          <section className="animate-fade-in-up">
            <h2 className="text-3xl font-light mb-8">Tags, Pills & Badges</h2>
            <div className="space-y-6">
              <Card className="p-8">
                <h3 className="font-medium mb-4">Tag System</h3>
                <div className="space-y-4 mb-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Project Categories</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Research-Heavy</Badge>
                      <Badge variant="secondary">Product Design</Badge>
                      <Badge>Conceptual</Badge>
                      <Badge variant="outline">UI-Focused</Badge>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Skills & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">Figma</span>
                      <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">User Research</span>
                      <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">Prototyping</span>
                      <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">iOS Design</span>
                    </div>
                  </div>
                </div>
                <code className="text-xs text-muted-foreground">
                  Badge variants + Small pill tags
                </code>
              </Card>
            </div>
          </section>

          {/* Layout & Spacing Guide */}
          <section className="animate-fade-in-up">
            <h2 className="text-3xl font-light mb-8">Layout & Spacing</h2>
            <Card className="p-8">
              <h3 className="font-medium mb-4">Responsive Guidelines</h3>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Container Widths</h4>
                    <ul className="space-y-1">
                      <li>• Case study content: max-w-4xl</li>
                      <li>• Component library: max-w-6xl</li>
                      <li>• Text-heavy sections: max-w-3xl</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Section Spacing</h4>
                    <ul className="space-y-1">
                      <li>• Between major sections: space-y-16</li>
                      <li>• Within sections: space-y-8</li>
                      <li>• Component groups: space-y-6</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Usage Instructions */}
          <section className="animate-fade-in-up border-t border-border pt-8">
            <h2 className="text-3xl font-light mb-8">Usage Instructions</h2>
            <Card className="p-8 bg-muted/30">
              <p className="text-muted-foreground mb-4">
                This component library serves as a reference for creating consistent case studies 
                and portfolio pages. Each component is designed to be modular and reusable across 
                different project types while maintaining visual hierarchy and accessibility.
              </p>
              <p className="text-muted-foreground">
                Copy and adapt these patterns for new case studies, ensuring consistent spacing, 
                typography, and interaction patterns throughout the portfolio experience.
              </p>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
}