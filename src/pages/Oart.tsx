import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function Oart() {
  const [metricsInView, setMetricsInView] = useState(false);

  useEffect(() => {
    // Animated counter logic
    const counters = document.querySelectorAll<HTMLElement>("[data-count]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setMetricsInView(true);
            const el = entry.target as HTMLElement;
            const target = parseInt(el.dataset.count || "0", 10);
            let current = 0;
            const step = Math.ceil(target / 60);
            const interval = setInterval(() => {
              current += step;
              if (current >= target) {
                current = target;
                clearInterval(interval);
              }
              el.textContent = current.toString();
            }, 16);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );
    counters.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      
      {/* Hero */}
      <section className="container mx-auto px-4 py-16 lg:py-24 space-y-8">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <Badge variant="secondary" className="text-sm">Enterprise UX</Badge>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
            OART — Scalable UX for Enterprise Workflows
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Replaced legacy systems with a scalable application that cut approval time by 75%, 
            reduced licensing costs by six figures, and embedded accessibility by default.
          </p>
        </div>
      </section>

      {/* Metrics Bento Grid */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="pt-8 pb-6">
              <div className="space-y-2">
                <span
                  className="text-4xl lg:text-5xl font-bold text-primary block"
                  data-count="75"
                >
                  0
                </span>
                <p className="text-sm text-muted-foreground">
                  Approval time reduced
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="pt-8 pb-6">
              <div className="space-y-2">
                <span className="text-4xl lg:text-5xl font-bold text-primary block">
                  Six-figure
                </span>
                <p className="text-sm text-muted-foreground">
                  Annual cost savings
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="pt-8 pb-6">
              <div className="space-y-2">
                <span
                  className="text-4xl lg:text-5xl font-bold text-primary block"
                  data-count="200"
                >
                  0
                </span>
                <p className="text-sm text-muted-foreground">
                  Staff impacted
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Context */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold">Context</h2>
          <Card className="bg-muted/50">
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                At Anglian Water, two outdated tools made project workflows painfully slow and unreliable. 
                Approvals could take two hours, tables were unreadable, and adoption had collapsed. I worked 
                end-to-end on OART — from initial discovery through launch — to deliver a modern, scalable 
                solution now used by ~200 staff across the business.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Challenge */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold">Challenge</h2>
          <Card className="bg-muted/50">
            <CardContent className="pt-6 space-y-4">
              <p className="text-muted-foreground mb-4">
                Legacy systems forced managers to approve items line-by-line, filters were overloaded 
                with irrelevant fields, and stability issues caused abandonment. These inefficiencies 
                delayed approvals, hurt visibility, and drove up licensing costs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Approvals could take up to 2 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Tables were unreadable, adoption collapsed</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Licensing costs were six figures annually</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Solution */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold">Solution</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6 space-y-4">
                <h3 className="text-xl font-semibold">Key Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong>Bulk actions:</strong> Up to 1,000 items replaced line-by-line drudgery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong>Clear navigation:</strong> Entry points for approvals and reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong>Responsive tables:</strong> Readable and powered by Dataverse</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong>Smart filters:</strong> Streamlined around real user needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong>Automation:</strong> Notifications triggered post-approval</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-muted/30 border-dashed border-2">
              <CardContent className="pt-6 h-full flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-muted rounded-lg mx-auto flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <p className="text-sm text-muted-foreground">UI Wireframes</p>
                  <p className="text-xs text-muted-foreground">Upload image here</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process & Research */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold">Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-lg">Research & Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• 25 user interviews conducted</li>
                  <li>• 250+ requirements collected</li>
                  <li>• 5 alignment workshops facilitated</li>
                  <li>• MoSCoW prioritization applied</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-lg">Wireframes & Validation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Visual requirement validation</li>
                  <li>• Annotated wireframes created</li>
                  <li>• ~60% validation before development</li>
                  <li>• Reduced rework and ambiguity</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-lg">System Design & Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Figma design foundation built</li>
                  <li>• WCAG-compliant accessibility</li>
                  <li>• 17 testers coordinated</li>
                  <li>• Multiple testing phases supported</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold">Impact</h2>
          <Card className="bg-gradient-to-r from-muted/30 to-muted/10 border-0 shadow-lg">
            <CardContent className="pt-8 pb-8 space-y-6">
              <blockquote className="text-xl lg:text-2xl font-medium leading-relaxed">
                "Approval time cut by 75% — from two hours to under 30 minutes. 
                Users called it 'very useful' and 'easy to use.'"
              </blockquote>
              <div className="grid md:grid-cols-2 gap-6 pt-4">
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">Efficiency</h4>
                  <p className="text-lg">Approval time cut by 75%</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">Reliability</h4>
                  <p className="text-lg">Legacy systems decommissioned</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Learnings */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold">Learnings</h2>
          <Card className="bg-muted/50">
            <CardContent className="pt-6 space-y-4">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span><strong>MoSCoW prioritization</strong> kept 250+ requirements focused and achievable</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span><strong>Wireframe-first validation</strong> turned sign-off into a visual process, eliminating ambiguity early</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span><strong>Accessibility by default</strong> ensured inclusivity scaled with the system</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span><strong>End-to-end involvement</strong> proved that enterprise UX success comes from clarity, inclusivity, and reusability, not flashy UI</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-bold">Want the full walkthrough?</h2>
            <p className="text-muted-foreground">
              This case study includes sensitive enterprise workflows. Contact me 
              for the full research, wireframes, and adoption strategy.
            </p>
            <Button asChild size="lg" className="mt-4">
              <a href="/contact">Request full case study</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}