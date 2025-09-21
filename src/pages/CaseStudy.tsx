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

          {/* Research Methodology */}
          <section className="animate-fade-in-up">
            <h2 className="text-3xl font-light mb-8">Research & Discovery</h2>
            
            {/* Research Methods */}
            <Card className="p-8 mb-8">
              <h3 className="font-medium mb-6">Research Methodology</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg">👥</span>
                  </div>
                  <h4 className="font-medium mb-2">User Interviews</h4>
                  <p className="text-sm text-muted-foreground">24 regular commuters across 3 cities</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg">📊</span>
                  </div>
                  <h4 className="font-medium mb-2">Competitive Analysis</h4>
                  <p className="text-sm text-muted-foreground">8 transport apps across Europe</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg">🎯</span>
                  </div>
                  <h4 className="font-medium mb-2">Journey Mapping</h4>
                  <p className="text-sm text-muted-foreground">End-to-end experience analysis</p>
                </div>
              </div>
            </Card>

            {/* User Persona */}
            <Card className="p-8 mb-8 bg-gradient-to-r from-primary/5 to-accent/5">
              <h3 className="font-medium mb-6">Primary Persona</h3>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">👩‍💼</span>
                  </div>
                  <h4 className="font-medium text-lg mb-2">Sarah Chen</h4>
                  <p className="text-sm text-muted-foreground mb-4">28, Product Manager</p>
                  <div className="space-y-2 text-sm">
                    <div><strong>Location:</strong> London</div>
                    <div><strong>Commute:</strong> 45min mixed transport</div>
                    <div><strong>Tech comfort:</strong> High</div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium mb-2 text-green-600">Goals</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Seamless journey planning</li>
                        <li>• Real-time travel updates</li>
                        <li>• Minimize app switching</li>
                        <li>• Reliable payment system</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2 text-red-600">Pain Points</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Context loss between apps</li>
                        <li>• Delayed platform updates</li>
                        <li>• Payment re-entry friction</li>
                        <li>• Missing connection alerts</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Key Insights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {insights.map((insight, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <span className="text-sm font-medium">{index + 1}</span>
                  </div>
                  <h3 className="font-medium mb-3">{insight.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {insight.description}
                  </p>
                </Card>
              ))}
            </div>

            {/* Research Quote */}
            <Card className="p-8 border-l-4 border-accent">
              <blockquote className="text-lg italic text-muted-foreground mb-4">
                "The biggest frustration isn't the train being late—it's not knowing about it until I'm already at the platform. I need that information where I naturally look: my lock screen."
              </blockquote>
              <p className="text-sm text-muted-foreground">— Research participant during contextual inquiry</p>
            </Card>
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

          {/* Design Process */}
          <section className="animate-fade-in-up">
            <h2 className="text-3xl font-light mb-8">Design Process & Exploration</h2>
            
            {/* User Flow */}
            <Card className="p-8 mb-8">
              <h3 className="font-medium mb-6">User Journey Mapping</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-blue-600 font-medium">1</span>
                    </div>
                    <h4 className="font-medium mb-2">Discovery</h4>
                    <p className="text-sm text-muted-foreground">User opens Uber for long-distance trip</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-purple-600 font-medium">2</span>
                    </div>
                    <h4 className="font-medium mb-2">Selection</h4>
                    <p className="text-sm text-muted-foreground">Train option appears contextually</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-green-600 font-medium">3</span>
                    </div>
                    <h4 className="font-medium mb-2">Booking</h4>
                    <p className="text-sm text-muted-foreground">Seamless payment with Uber wallet</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-orange-600 font-medium">4</span>
                    </div>
                    <h4 className="font-medium mb-2">Live Updates</h4>
                    <p className="text-sm text-muted-foreground">Real-time notifications on lock screen</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Wireframes */}
            <Card className="p-8 mb-8">
              <h3 className="font-medium mb-6">Early Wireframes & Concepts</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <div className="aspect-[9/16] bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <div className="text-2xl mb-2">📱</div>
                      <div className="text-sm">Initial Flow Sketches</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">Exploration of integration points within existing Uber flow</p>
                </div>
                <div className="space-y-3">
                  <div className="aspect-[9/16] bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <div className="text-2xl mb-2">🎨</div>
                      <div className="text-sm">Information Architecture</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">Mapping train booking data to Uber's existing patterns</p>
                </div>
                <div className="space-y-3">
                  <div className="aspect-[9/16] bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <div className="text-2xl mb-2">📲</div>
                      <div className="text-sm">Live Activity Concepts</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">iOS widget layouts for real-time travel updates</p>
                </div>
              </div>
            </Card>

            {/* Design Strategy */}
            <Card className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-4">Integration Strategy</h3>
                  <p className="text-muted-foreground mb-4">
                    Rather than creating a separate train booking section, I embedded train options 
                    directly into Uber's existing destination flow, appearing when longer distances 
                    are detected or when users specifically search for train-accessible locations.
                  </p>
                </div>
                
                <div className="h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="text-center z-10">
                    <div className="text-muted-foreground mb-2">🎬 Interactive Prototype</div>
                    <div className="text-sm text-muted-foreground">Train selection and Live Activity demo</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse"></div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-4">Live Activity Microinteractions</h3>
                  <p className="text-muted-foreground mb-4">
                    The Live Activity leverages iOS 16+ capabilities with carefully designed microinteractions:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong>Gentle pulse animation</strong> for urgent platform changes</li>
                    <li>• <strong>Smooth countdown timer</strong> showing time to departure</li>
                    <li>• <strong>Expandable barcode reveal</strong> with haptic feedback</li>
                    <li>• <strong>Color-coded status indicators</strong> (green=on-time, amber=delayed, red=cancelled)</li>
                  </ul>
                </div>
              </div>
            </Card>
          </section>

          {/* Final Solution */}
          <section className="animate-fade-in-up">
            <h2 className="text-3xl font-light mb-8">Final Solution</h2>
            
            {/* Solution Overview */}
            <Card className="p-8 mb-8 bg-gradient-to-r from-primary/5 to-accent/5">
              <h3 className="font-medium mb-6">Solution Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚂</span>
                  </div>
                  <h4 className="font-medium mb-2">Contextual Integration</h4>
                  <p className="text-sm text-muted-foreground">Train options appear naturally within Uber's existing flow</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💳</span>
                  </div>
                  <h4 className="font-medium mb-2">Unified Payment</h4>
                  <p className="text-sm text-muted-foreground">Single tap booking using existing Uber wallet</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📲</span>
                  </div>
                  <h4 className="font-medium mb-2">Live Activities</h4>
                  <p className="text-sm text-muted-foreground">Real-time updates on iOS lock screen</p>
                </div>
              </div>
            </Card>

            <div className="space-y-8">
              {/* Booking Flow */}
              <Card className="p-8">
                <h3 className="font-medium mb-6">Unified Booking Flow</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="aspect-[9/16] bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-blue-600 mb-2">📍</div>
                      <div className="text-xs font-medium">Destination Input</div>
                      <div className="text-xs text-blue-600 mt-1">Train option appears</div>
                    </div>
                  </div>
                  <div className="aspect-[9/16] bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-purple-600 mb-2">🚂</div>
                      <div className="text-xs font-medium">Route Selection</div>
                      <div className="text-xs text-purple-600 mt-1">Time & price comparison</div>
                    </div>
                  </div>
                  <div className="aspect-[9/16] bg-gradient-to-br from-green-50 to-green-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-green-600 mb-2">💳</div>
                      <div className="text-xs font-medium">One-Tap Payment</div>
                      <div className="text-xs text-green-600 mt-1">Uber wallet integration</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Key Features</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Train options appear contextually for distances &gt;50km</li>
                    <li>• Real-time pricing and availability from multiple operators</li>
                    <li>• Maintains Uber's signature one-tap booking experience</li>
                    <li>• Automatic seat selection based on user preferences</li>
                  </ul>
                </div>
              </Card>

              {/* Live Activity Details */}
              <Card className="p-8">
                <h3 className="font-medium mb-6">Live Activity Microinteractions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium mb-4">Lock Screen States</h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <div>
                          <div className="font-medium text-sm">Pre-Departure</div>
                          <div className="text-xs text-muted-foreground">Platform info, countdown timer, weather</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <div>
                          <div className="font-medium text-sm">In Transit</div>
                          <div className="text-xs text-muted-foreground">Next stop, arrival time, delay alerts</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                        <div>
                          <div className="font-medium text-sm">Approaching Destination</div>
                          <div className="text-xs text-muted-foreground">Connection info, exit directions</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-4">Interactive Elements</h4>
                    <div className="space-y-3">
                      <div className="p-4 border border-dashed border-gray-300 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">🎫 Ticket Reveal</span>
                          <span className="text-xs text-muted-foreground">Tap to expand</span>
                        </div>
                        <div className="text-xs text-muted-foreground">Haptic feedback + smooth barcode animation</div>
                      </div>
                      <div className="p-4 border border-dashed border-gray-300 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">⏰ Smart Alerts</span>
                          <span className="text-xs text-muted-foreground">Auto-triggered</span>
                        </div>
                        <div className="text-xs text-muted-foreground">Platform changes with gentle pulse animation</div>
                      </div>
                      <div className="p-4 border border-dashed border-gray-300 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">🔄 Live Updates</span>
                          <span className="text-xs text-muted-foreground">Real-time</span>
                        </div>
                        <div className="text-xs text-muted-foreground">Seamless data refresh every 30 seconds</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Impact & Reflection */}
          <section className="animate-fade-in-up">
            <h2 className="text-3xl font-light mb-8">Impact & Reflection</h2>
            
            {/* Measured Impact */}
            <Card className="p-8 mb-8 bg-gradient-to-r from-green-50 to-blue-50">
              <h3 className="font-medium mb-6">Projected Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-light text-green-600 mb-2">85%</div>
                  <div className="text-sm font-medium mb-1">Reduced App Switching</div>
                  <div className="text-xs text-muted-foreground">Users staying within Uber ecosystem</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-blue-600 mb-2">40%</div>
                  <div className="text-sm font-medium mb-1">Faster Booking</div>
                  <div className="text-xs text-muted-foreground">Time from search to confirmation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-purple-600 mb-2">95%</div>
                  <div className="text-sm font-medium mb-1">User Preference</div>
                  <div className="text-xs text-muted-foreground">For unified transport experience</div>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Personal Learnings */}
              <Card className="p-8">
                <h3 className="font-medium mb-4">What Surprised Me</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      <strong>Platform constraints as creative catalysts:</strong> iOS Live Activities' 
                      limitations actually pushed me toward more elegant, focused solutions than I 
                      initially envisioned.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      <strong>Microinteractions matter more in transit:</strong> When users are 
                      stressed about connections, even a 0.2-second delay in haptic feedback 
                      feels frustrating.
                    </p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      <strong>Emotional design in utilitarian contexts:</strong> Commuters want 
                      efficiency, but subtle delighters (like weather info on lock screen) 
                      create unexpected loyalty.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Design Decisions */}
              <Card className="p-8">
                <h3 className="font-medium mb-4">Key Tradeoffs</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm mb-2">Feature Depth vs. Simplicity</h4>
                    <p className="text-muted-foreground text-sm">
                      Chose to limit train operators to 3 major ones rather than comprehensive coverage. 
                      This maintains Uber's "just works" philosophy while covering 80% of use cases.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-2">Personalization vs. Privacy</h4>
                    <p className="text-muted-foreground text-sm">
                      Decided against seat preference learning to respect privacy. Instead, used 
                      contextual defaults (window seat for longer trips, aisle for short ones).
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-2">Real-time vs. Battery Life</h4>
                    <p className="text-muted-foreground text-sm">
                      Balanced update frequency: every 30s during active travel, every 2 minutes 
                      during waiting periods, complete sleep when train is on schedule.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Future Vision */}
            <Card className="p-8 mt-8">
              <h3 className="font-medium mb-4">How This Changed My Design Process</h3>
              <p className="text-muted-foreground mb-4">
                This project fundamentally shifted how I approach platform-specific design. Instead of 
                treating iOS capabilities as constraints, I now start with the platform's unique strengths 
                and design backwards to the core user need.
              </p>
              <p className="text-muted-foreground">
                The Live Activity component taught me that the most powerful design decisions happen at 
                the intersection of user psychology and platform capabilities—not in the app interface itself, 
                but in the moments between apps, when users are most vulnerable to abandonment.
              </p>
            </Card>
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