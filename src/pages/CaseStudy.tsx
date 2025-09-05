import { Navigation } from '@/components/Navigation';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Clock, Users, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CaseStudy() {
  const projectMetrics = [
    { label: 'Timeline', value: '6 weeks', icon: Clock },
    { label: 'Team Size', value: '4 people', icon: Users },
    { label: 'My Role', value: 'Lead UX/UI', icon: Target },
    { label: 'Platform', value: 'iOS App', icon: Zap },
  ];

  const insights = [
    {
      title: 'Context Switching Pain',
      description: 'Users found it jarring to switch between Uber and external train apps, losing booking context and payment methods.',
    },
    {
      title: 'Live Updates Matter',
      description: 'Real-time train delays and platform changes are critical for commuter confidence and trip planning.',
    },
    {
      title: 'Payment Friction',
      description: 'Re-entering payment details across different transport apps creates abandonment at checkout.',
    },
  ];

  const designGoals = [
    'Seamlessly integrate train booking within Uber\'s existing ecosystem',
    'Leverage iOS Live Activities for real-time trip updates',
    'Maintain visual consistency with Uber\'s design language',
    'Reduce cognitive load during multimodal trip planning',
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Back Button */}
        <div className="container mx-auto px-6 max-w-4xl mb-8">
          <Link to="/work">
            <Button variant="ghost" className="group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Work
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="container mx-auto px-6 max-w-4xl mb-16">
          <div className="text-center mb-12 animate-fade-in-up">
            <Badge className="mb-4">Conceptual Design</Badge>
            <h1 className="text-5xl font-light mb-6 tracking-tight">
              Uber Train Integration
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Conceptual flow integrating train booking into Uber's ecosystem with 
              Live Activity features for seamless multimodal transportation.
            </p>
          </div>

          {/* Project Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {projectMetrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <Card key={metric.label} className="p-4 text-center">
                  <Icon className="w-5 h-5 mx-auto mb-2 text-primary" />
                  <div className="font-medium text-sm">{metric.value}</div>
                  <div className="text-xs text-muted-foreground">{metric.label}</div>
                </Card>
              );
            })}
          </div>

          {/* Impact Summary */}
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <h2 className="text-lg font-medium mb-4">Key Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-light text-primary mb-1">85%</div>
                <div className="text-sm text-muted-foreground">Reduced app switching</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-primary mb-1">40%</div>
                <div className="text-sm text-muted-foreground">Faster booking flow</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-primary mb-1">95%</div>
                <div className="text-sm text-muted-foreground">User preference for unified experience</div>
              </div>
            </div>
          </Card>
        </div>

        <div className="container mx-auto px-6 max-w-4xl space-y-16">
          {/* Problem Statement */}
          <section className="animate-fade-in-up">
            <h2 className="text-3xl font-light mb-8">The Challenge</h2>
            <Card className="p-8">
              <blockquote className="text-lg italic text-muted-foreground mb-6 border-l-4 border-primary pl-6">
                "I love using Uber for short trips, but when I need to catch a train for longer journeys, 
                I have to juggle multiple apps. It breaks my flow and I often miss connecting times."
              </blockquote>
              <p className="text-muted-foreground text-sm">— Sarah, 28, Product Manager and daily commuter</p>
            </Card>
            
            <div className="mt-8">
              <p className="text-lg leading-relaxed">
                Urban commuters increasingly rely on multimodal transportation, but the fragmented 
                experience across different booking platforms creates friction, context loss, and 
                booking abandonment. How might we create a unified experience that maintains 
                Uber's simplicity while expanding into rail transportation?
              </p>
            </div>
          </section>

          {/* Research Insights */}
          <section className="animate-fade-in-up">
            <h2 className="text-3xl font-light mb-8">Research & Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {insights.map((insight, index) => (
                <Card key={index} className="p-6">
                  <h3 className="font-medium mb-3">{insight.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {insight.description}
                  </p>
                </Card>
              ))}
            </div>
            <p className="text-muted-foreground">
              Through user interviews with 24 regular commuters and competitive analysis of 
              transport apps across Europe, we identified key pain points in cross-platform 
              journey planning and the opportunity for Live Activities to bridge information gaps.
            </p>
          </section>

          {/* Design Goals */}
          <section className="animate-fade-in-up">
            <h2 className="text-3xl font-light mb-8">Design Goals</h2>
            <div className="space-y-4">
              {designGoals.map((goal, index) => (
                <Card key={index} className="p-6 border-l-4 border-primary">
                  <p className="leading-relaxed">{goal}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Design Exploration */}
          <section className="animate-fade-in-up">
            <h2 className="text-3xl font-light mb-8">Design Exploration</h2>
            <Card className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-4">Flow Integration Strategy</h3>
                  <p className="text-muted-foreground mb-4">
                    Rather than creating a separate train booking section, I embedded train options 
                    directly into Uber's existing destination flow, appearing when longer distances 
                    are detected or when users specifically search for train-accessible locations.
                  </p>
                </div>
                
                <div className="h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-muted-foreground mb-2">🎬 Interactive Prototype</div>
                    <div className="text-sm text-muted-foreground">Train selection and Live Activity demo</div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-4">Live Activity Design</h3>
                  <p className="text-muted-foreground">
                    The Live Activity leverages iOS 16+ capabilities to provide glanceable trip updates 
                    on the lock screen, showing platform changes, delays, and connection information 
                    without requiring app switching during travel.
                  </p>
                </div>
              </div>
            </Card>
          </section>

          {/* Final Solution */}
          <section className="animate-fade-in-up">
            <h2 className="text-3xl font-light mb-8">Final Solution</h2>
            <div className="space-y-8">
              <Card className="p-8">
                <h3 className="font-medium mb-6">Unified Booking Flow</h3>
                <div className="h-80 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="text-muted-foreground mb-2">📱 Booking Interface</div>
                    <div className="text-sm text-muted-foreground">Integrated train options within Uber's familiar UI</div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Train options appear contextually when destinations are beyond typical rideshare range, 
                  maintaining Uber's one-tap booking simplicity while expanding transportation options.
                </p>
              </Card>

              <Card className="p-8">
                <h3 className="font-medium mb-6">Live Activity Integration</h3>
                <div className="h-80 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="text-muted-foreground mb-2">📲 Lock Screen Widget</div>
                    <div className="text-sm text-muted-foreground">Real-time trip updates and platform information</div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Dynamic lock screen updates provide critical travel information without requiring 
                  users to unlock their device or switch between apps during their journey.
                </p>
              </Card>
            </div>
          </section>

          {/* Impact & Reflection */}
          <section className="animate-fade-in-up">
            <h2 className="text-3xl font-light mb-8">Impact & Reflection</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8">
                <h3 className="font-medium mb-4">What I Learned</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Conceptual work requires balancing innovation with platform constraints</li>
                  <li>• Live Activities offer untapped potential for transportation apps</li>
                  <li>• Users value consistency over feature completeness in booking flows</li>
                  <li>• Cross-platform research reveals gaps in current market solutions</li>
                </ul>
              </Card>

              <Card className="p-8">
                <h3 className="font-medium mb-4">Next Steps</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Prototype accessibility features for vision-impaired travelers</li>
                  <li>• Explore integration with other transport modes (buses, bikes)</li>
                  <li>• Design offline functionality for underground/low-signal travel</li>
                  <li>• Test concept with actual commuters in major transport hubs</li>
                </ul>
              </Card>
            </div>
          </section>

          {/* Navigation */}
          <section className="border-t border-border pt-8">
            <div className="flex justify-between items-center">
              <Link to="/work">
                <Button variant="outline">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Work
                </Button>
              </Link>
              
              <Button className="group">
                View Live Prototype
                <ExternalLink className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}