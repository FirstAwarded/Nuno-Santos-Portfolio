import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Utensils, Users, Eye, Sparkles, Target } from 'lucide-react';

// Images
import umaiMockup from '@/assets/UmaiBannerImage.png';
import decisionRecommendation from '@/assets/Umai_PersonalisedRecommendation_Decision.png';
import decisionCheckout from '@/assets/Umai_StreamlinedCheckout_Decision.png';
import decisionCardBased from '@/assets/Umai_CardBased_Decision.png';

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

export default function Umai() {
  return (
    <div className="min-h-screen bg-background">
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
              Umai - Personalizing the Ordering Experience
            </h1>
            <p className="body-large mb-8">
              A food-ordering platform designed to reduce choice overload and make checkout frictionless.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="text-center">
                <div className="text-sm text-muted-foreground">Duration</div>
                <div className="font-medium">8 weeks</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-muted-foreground">Role</div>
                <div className="font-medium">Sole UX/UI Designer</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-muted-foreground">Platform</div>
                <div className="font-medium">Mobile & Web</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-muted-foreground">Focus</div>
                <div className="font-medium">Personalization & Flow</div>
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
                Streamlined food ordering that feels personal, quick, and trustworthy through smart recommendations and frictionless checkout.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <MetricCard value={30} suffix="%" label="Reduction in order completion time" delay={0} />
                <MetricCard value={61} suffix="%" label="Abandoned orders due to too many steps" delay={300} />
                <MetricCard value={100} suffix="+" label="Survey responses collected" delay={600} />
              </div>
            </div>
            <img
              src={umaiMockup}
              alt="Umai app mockup"
              className="rounded-lg shadow-md h-96 w-full object-cover"
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
                  <Utensils className="w-5 h-5 text-destructive" />
                  The Challenge
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Food ordering apps are everywhere, but abundance has become the problem:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>- Endless scrolling through overwhelming menus</li>
                  <li>- Checkout flows packed with unnecessary steps</li>
                  <li>- Generic recommendations that don't actually help</li>
                  <li>- Users waste time and experience frustration</li>
                  <li>- Businesses lose revenue through abandoned carts</li>
                </ul>
                <p className="mt-4 font-medium text-foreground">
                  The challenge: design a food-ordering experience that feels personal, quick, and trustworthy.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Research Insights */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-semibold mb-8 text-center">Research Insights</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Users className="w-5 h-5 text-primary" />
                      Survey Results (20+ responses)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      61% abandoned orders due to complexity. Choice overload is real and costly.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Eye className="w-5 h-5 text-primary" />
                      User Interviews (10 participants)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      People wanted smarter recommendations and visual clarity. They want the right choice faster, not more choices.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Target className="w-5 h-5 text-primary" />
                      Competitive Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Uber Eats, Deliveroo, and DoorDash focus on variety but neglect personalization and flow efficiency.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="bg-primary/10 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-6 h-6 text-primary" />
                  <span className="font-semibold text-lg">Key Insight</span>
                </div>
                <p className="text-muted-foreground text-lg">
                  People don't want more food choices - they want the right choice, faster.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Key Design Decisions */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <h2 className="text-3xl font-semibold mb-12 text-center">Key Design Decisions</h2>
          <div className="grid gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <Card className="overflow-hidden">
                <CardHeader><CardTitle className="text-xl">Personalized Recommendations</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <Badge variant="destructive" className="mb-2">Challenge</Badge>
                      <p>Menus felt overwhelming with too many options.</p>
                      <Badge variant="default" className="mb-2 mt-4">Solution</Badge>
                      <p>Added personalized recommendations using preferences and order history.</p>
                      <Badge variant="secondary" className="mb-2 mt-4">Impact</Badge>
                      <p className="font-medium">Users said "the app knows me" - boosting confidence and reducing browsing time.</p>
                    </div>
                    <img src={decisionRecommendation} alt="Personalized recommendations" className="h-64 rounded-lg" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
              <Card className="overflow-hidden">
                <CardHeader><CardTitle className="text-xl">Streamlined Checkout Flow</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <img src={decisionCheckout} alt="Streamlined checkout" className="h-64 rounded-lg" />
                    <div>
                      <Badge variant="destructive" className="mb-2">Challenge</Badge>
                      <p>Checkout had too many unnecessary steps.</p>
                      <Badge variant="default" className="mb-2 mt-4">Solution</Badge>
                      <p>Redesigned into a three-step flow with progress indicators and smart defaults.</p>
                      <Badge variant="secondary" className="mb-2 mt-4">Impact</Badge>
                      <p className="font-medium">Order completion time dropped by ~30% in usability testing.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
              <Card className="overflow-hidden">
                <CardHeader><CardTitle className="text-xl">Card-Based Visual Design</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <Badge variant="destructive" className="mb-2">Challenge</Badge>
                      <p>Design was functional but uninspiring.</p>
                      <Badge variant="default" className="mb-2 mt-4">Solution</Badge>
                      <p>Introduced card-based layouts with food photography and simplified categories.</p>
                      <Badge variant="secondary" className="mb-2 mt-4">Impact</Badge>
                      <p className="font-medium">Browsing became enjoyable - testers described it as "delightful instead of stressful."</p>
                    </div>
                    <img src={decisionCardBased} alt="Card-based design" className="h-64 rounded-lg" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Design Pivot */}
        <section className="max-w-4xl mx-auto px-6 mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <Card className="bg-accent/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-accent" />
                  Design Pivot
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Early prototypes leaned on manual personalization settings. Feedback showed users preferred smart defaults.  
                  Pivot: move to a "just works" experience, reducing setup friction and aligning with expectations.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Final Solution */}
        <section className="max-w-4xl mx-auto px-6 mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-semibold mb-8">The Final Solution</h2>
            <Card>
              <CardHeader><CardTitle>Umai delivers:</CardTitle></CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2"><div className="w-2 h-2 bg-primary rounded-full mt-2"></div><span><strong>Feels personal</strong> with smart recommendations</span></li>
                  <li className="flex items-start gap-2"><div className="w-2 h-2 bg-primary rounded-full mt-2"></div><span><strong>Makes checkout frictionless</strong> with 3-step streamlined flow</span></li>
                  <li className="flex items-start gap-2"><div className="w-2 h-2 bg-primary rounded-full mt-2"></div><span><strong>Balances visuals with clarity</strong> for enjoyable browsing</span></li>
                </ul>
                <div className="bg-muted/50 rounded-lg p-4 mt-6">
                  <p className="italic text-center">
                    "I didn't feel lost. I got to what I wanted quickly - and it actually felt like the app understood me."
                  </p>
                  <p className="text-sm text-muted-foreground text-center mt-2">- User Testing Participant</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Impact */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-semibold mb-12 text-center">Impact</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="text-center"><CardContent className="pt-6"><div className="text-3xl font-bold text-primary mb-2">~30%</div><p className="text-sm text-muted-foreground">Reduction in order completion time</p></CardContent></Card>
              <Card className="text-center"><CardContent className="pt-6"><div className="text-3xl font-bold text-primary mb-2">↑</div><p className="text-sm text-muted-foreground">Increased user engagement through personalization</p></CardContent></Card>
              <Card className="text-center"><CardContent className="pt-6"><div className="text-3xl font-bold text-primary mb-2">↓</div><p className="text-sm text-muted-foreground">Reduced cart abandonment rates</p></CardContent></Card>
            </div>
          </motion.div>
        </section>

        {/* Learnings */}
        <section className="max-w-4xl mx-auto px-6 mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-semibold mb-8">Learnings</h2>
            <div className="space-y-6">
              <Card><CardHeader><CardTitle className="text-lg">Personalization should remove effort, not add it</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Users don't want to configure - they want smart defaults.</p></CardContent></Card>
              <Card><CardHeader><CardTitle className="text-lg">Flow design is business design</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Reducing checkout friction supports conversions directly.</p></CardContent></Card>
              <Card><CardHeader><CardTitle className="text-lg">Aesthetics create trust</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Good visuals increase perceived credibility and ease of use.</p></CardContent></Card>
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="bg-muted/30 py-16">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-semibold mb-4">Want to see the full process?</h2>
            <p className="text-muted-foreground mb-8">
              Full research, wireframes, and prototypes available on request.
            </p>
            <Button size="lg" className="btn-hero">Get in Touch</Button>
          </div>
        </section>
      </main>
    </div>
  );
}
