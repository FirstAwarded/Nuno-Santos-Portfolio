import { Navigation } from '@/components/Navigation';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Shield, Clock, Users, Navigation as NavIcon, Eye, Heart } from 'lucide-react';
import AnimatedFeatureTable from '@/components/AnimatedFeatureTable';
import BarChart from '@/components/BarChart';

// Animated counter hook
const useCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [shouldStart, setShouldStart] = useState(false);

  useEffect(() => {
    if (!shouldStart) return;
    
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentCount = Math.floor(progress * end);
      setCount(currentCount);
      
      if (progress === 1) clearInterval(timer);
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, shouldStart]);

  return { count, start: () => setShouldStart(true) };
};

// Metric card component
const MetricCard = ({ value, suffix, label, delay = 0 }: { 
  value: number; 
  suffix?: string; 
  label: string; 
  delay?: number; 
}) => {
  const { count, start } = useCounter(value);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          setTimeout(start, delay);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById(`metric-${label.replace(/\s+/g, '-')}`);
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, [start, delay, label]);

  return (
    <motion.div
      id={`metric-${label.replace(/\s+/g, '-')}`}
      className="metric-card"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay / 1000 }}
    >
      <div className="text-3xl font-bold text-primary mb-2">
        {count}{suffix}
      </div>
      <p className="text-sm text-muted-foreground">{label}</p>
    </motion.div>
  );
};

// Image placeholder component
const ImagePlaceholder = ({ text, className = "" }: { text: string; className?: string }) => (
  <div className={`bg-muted rounded-lg flex items-center justify-center p-8 ${className}`}>
    <div className="text-center">
      <div className="w-16 h-16 bg-muted-foreground/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
        <Eye className="w-8 h-8 text-muted-foreground/60" />
      </div>
      <p className="text-muted-foreground text-sm">{text}</p>
    </div>
  </div>
);

export default function SafeWalk() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="mb-4">Case Study</Badge>
            <h1 className="hero-text mb-6">
              SafeWalk — Safety-First Navigation
            </h1>
            <p className="body-large mb-8">
              Most navigation apps optimize for speed. SafeWalk optimizes for safety.
            </p>
            
            {/* Quick Facts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="text-center">
                <div className="text-sm text-muted-foreground">Duration</div>
                <div className="font-medium">5 weeks</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-muted-foreground">Role</div>
                <div className="font-medium">Sole UX/UI Designer</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-muted-foreground">Platform</div>
                <div className="font-medium">Mobile App</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-muted-foreground">Focus</div>
                <div className="font-medium">Safety & Navigation</div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Hero Preview */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Bottom Line Up Front</h2>
              <p className="body-large mb-8">
                Replaced speed-first routing with safety-first navigation that users actually trust at night.
              </p>
              
              {/* Animated Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <MetricCard value={88} suffix="%" label="Preferred SafeWalk over Google Maps" delay={0} />
                <MetricCard value={82} suffix="%" label="Rated safety-first routing highly valuable" delay={300} />
                <MetricCard value={92} suffix="%" label="Prioritize safety over speed" delay={600} />
              </div>
            </div>
            
            <ImagePlaceholder 
              text="SafeWalk app interface mockup - TODO: Add from extracted images" 
              className="h-96" 
            />
          </div>
        </section>

        {/* Challenge */}
        <section className="max-w-4xl mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-muted/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-destructive" />
                  The Challenge
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Navigation apps assume fastest = best. At night, that assumption breaks down:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Routes may go through poorly lit alleys</li>
                  <li>• Apps ignore safety signals like CCTV or foot traffic</li>
                  <li>• Users walking alone have no reassurance if something goes wrong</li>
                  <li>• Algorithms optimized for efficiency often deliver unsafe experiences</li>
                </ul>
                <p className="mt-4 font-medium text-foreground">
                  The challenge: design a navigation app that values peace of mind as much as time saved.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Status Quo (Research Insights) */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold mb-8 text-center">Status Quo — Research Insights</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      12 In-Depth Interviews
                    </h3>
                    <p className="text-muted-foreground">
                      Revealed universal anxiety about dark shortcuts and unsafe routing decisions.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Eye className="w-5 h-5 text-primary" />
                      Competitive Analysis
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Google Maps, Apple Maps, and Citymapper confirmed lack of safety-first features.
                    </p>
                  </div>
                  
                  <div className="bg-primary/10 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Heart className="w-5 h-5 text-primary" />
                      <span className="font-semibold">Key Insight</span>
                    </div>
                    <p className="text-muted-foreground">
                      Navigation isn't just technical — it's deeply emotional.
                    </p>
                  </div>
                </div>
              </div>
              
              <BarChart />
            </div>
          </motion.div>
        </section>

        {/* Competitive Analysis Table */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-8 text-center">Feature Comparison</h2>
            <AnimatedFeatureTable />
          </motion.div>
        </section>

        {/* Key Design Decisions (Process) */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <h2 className="text-3xl font-semibold mb-12 text-center">Key Design Decisions</h2>
          
          <div className="grid gap-8">
            {/* Decision 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-xl">Safety-Based Routing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="mb-4">
                        <Badge variant="destructive" className="mb-2">Challenge</Badge>
                        <p>Maps ignored safety factors like lighting and foot traffic.</p>
                      </div>
                      <div className="mb-4">
                        <Badge variant="default" className="mb-2">Solution</Badge>
                        <p>Introduced safety-based routing considering lighting, CCTV, and popularity.</p>
                      </div>
                      <div>
                        <Badge variant="secondary" className="mb-2">Impact</Badge>
                        <p className="font-medium">88% of testers consistently chose SafeWalk routes over Google Maps.</p>
                      </div>
                    </div>
                    <ImagePlaceholder text="Safety routing comparison - TODO: Add route comparison images" className="h-64" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Decision 2 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-xl">Visual Safety Ratings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <ImagePlaceholder text="Color-coded safety ratings interface - TODO: Add UI screenshots" className="h-64" />
                    <div>
                      <div className="mb-4">
                        <Badge variant="destructive" className="mb-2">Challenge</Badge>
                        <p>Risk wasn't visible on maps, making route choice difficult.</p>
                      </div>
                      <div className="mb-4">
                        <Badge variant="default" className="mb-2">Solution</Badge>
                        <p>Added color-coded safety ratings (green, amber, red) for immediate clarity.</p>
                      </div>
                      <div>
                        <Badge variant="secondary" className="mb-2">Impact</Badge>
                        <p className="font-medium">Users said ratings made route choice "effortless under pressure."</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Decision 3 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-xl">"Follow My Journey" Feature</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="mb-4">
                        <Badge variant="destructive" className="mb-2">Challenge</Badge>
                        <p>Walking alone remained stressful even with better routing.</p>
                      </div>
                      <div className="mb-4">
                        <Badge variant="default" className="mb-2">Solution</Badge>
                        <p>Built real-time sharing with trusted contacts for peace of mind.</p>
                      </div>
                      <div>
                        <Badge variant="secondary" className="mb-2">Impact</Badge>
                        <p className="font-medium">Especially praised by women and students as "peace of mind for me and my family."</p>
                      </div>
                    </div>
                    <ImagePlaceholder text="Live tracking interface - TODO: Add journey sharing screenshots" className="h-64" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Design Pivot */}
        <section className="max-w-4xl mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-accent/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <NavIcon className="w-5 h-5 text-accent" />
                  Design Pivot
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  My first prototypes offered granular customization. Testing revealed users didn't want complexity in stressful moments. 
                  I pivoted to simple defaults + clear signals, which increased usability and trust.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Solution */}
        <section className="max-w-4xl mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold mb-8">The Final Solution</h2>
            <Card>
              <CardHeader>
                <CardTitle>SafeWalk offers:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span><strong>Safer routes</strong> that prioritize personal security over speed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span><strong>Clarity under pressure</strong> with visual safety ratings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span><strong>Reassurance features</strong> like live journey tracking</span>
                  </li>
                </ul>
                
                <div className="bg-muted/50 rounded-lg p-4 mt-6">
                  <p className="italic text-center">
                    "For once, I didn't feel nervous walking alone. The app gave me confidence."
                  </p>
                  <p className="text-sm text-muted-foreground text-center mt-2">— User Testing Participant</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Impact */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold mb-12 text-center">Impact</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">88%</div>
                  <p className="text-sm text-muted-foreground">Preferred SafeWalk over Google Maps at night</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">82%</div>
                  <p className="text-sm text-muted-foreground">Rated safety-first routing "highly valuable"</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <p className="text-sm text-muted-foreground">Said app made them feel "calmer and more secure"</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">↑</div>
                  <p className="text-sm text-muted-foreground">Increased trust and confidence while navigating</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </section>

        {/* Learnings */}
        <section className="max-w-4xl mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold mb-8">Learnings</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Design is responsibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Directions can protect — or endanger. Every routing decision has real-world safety implications.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Simplicity builds trust</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Removing features made the app stronger. Users need clarity in stressful moments, not options.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Trust is measurable</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Confidence isn't abstract — it's an outcome you can design for and measure through user behavior.</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="bg-muted/30 py-16">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-semibold mb-4">Interested in the full process?</h2>
            <p className="text-muted-foreground mb-8">
              Detailed research findings, wireframes, and prototypes are available on request.
            </p>
            <Button size="lg" className="btn-hero">
              Get in Touch
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}