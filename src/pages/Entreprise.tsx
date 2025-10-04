import React, { useState, useEffect } from "react";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  Settings,
  Target,
  Clock,
  Shield,
  Zap,
  BarChart3,
} from "lucide-react";

// Reusable components
import { PersonaCard } from "@/components/PersonaCard";
import { MetricCard } from "@/components/MetricCard";
import { QuoteCarousel } from "@/components/QuoteCarousel";

export default function Oart() {
  const [metricsInView, setMetricsInView] = useState(false);

  const quotes = [
    "Very useful and easy to use - the bulk approvals save me hours each week",
    "Finally, a system that actually works reliably for our daily workflows",
    "The new interface is so much clearer than the old tools we were using",
  ];

  // Intersection Observer for metrics
  useEffect(() => {
    const metricsObserver = new IntersectionObserver(
      ([entry]) => setMetricsInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    const metricsElement = document.getElementById("metrics-section");
    if (metricsElement) metricsObserver.observe(metricsElement);
    return () => metricsObserver.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Hero */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Scalable UX for Enterprise Workflows
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Replaced legacy systems with a scalable application that cut
                approval time by{" "}
                <Badge variant="secondary" className="mx-2">
                  ~75%
                </Badge>
                , reduced licensing costs by{" "}
                <Badge variant="secondary" className="mx-2">
                  six-figure savings
                </Badge>
                , and embedded accessibility by default.
              </p>
            </div>

            {/* Placeholder Hero Visual */}
            <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-primary/20 rounded-full mx-auto flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <span className="text-muted-foreground text-sm">
                  Hero Visual
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Personas */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Role & Context</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <PersonaCard
              icon={<Users className="h-5 w-5 text-primary" />}
              label="Project Managers"
              description="Review and approve milestones, chase sign-offs, confirm evidence. Use desktop, Teams, and Excel."
            />
            <PersonaCard
              icon={<Settings className="h-5 w-5 text-primary" />}
              label="Senior PMs"
              description="Handle governance risks and exceptions. High-stakes oversight when approvals stall."
            />
            <PersonaCard
              icon={<Target className="h-5 w-5 text-primary" />}
              label="Support Staff"
              description="Maintain trackers, input license requests, reduce manual chasing. Daily PowerApps/SharePoint users."
            />
          </div>
        </section>

        {/* Status Quo */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Status Quo (Before)</h2>
          <Card className="bg-muted/30">
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed mb-4">
                Legacy systems forced managers to approve items line-by-line,
                filters were overloaded with irrelevant fields, and stability
                issues caused abandonment. These inefficiencies delayed
                approvals, hurt visibility, and drove up licensing costs.
              </p>
              <div className="aspect-video bg-muted flex items-center justify-center rounded-lg">
                <span className="text-muted-foreground">
                  Placeholder: Legacy system screenshot
                </span>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Average approval time: 2 hours</span>
              </div>
            </CardContent>
          </Card>
        </section>



        {/* Accessibility */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Accessibility by Default</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <Shield className="h-5 w-5 text-primary mb-2" />
                <p className="text-sm text-muted-foreground">
                  WCAG-compliant contrast, color-independent labels, and full
                  keyboard navigation built in from day one.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Zap className="h-5 w-5 text-primary mb-2" />
                <p className="text-sm text-muted-foreground">
                  Accessibility embedded into the design system meant every new
                  feature automatically scaled inclusively.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Impact */}
        <section id="metrics-section" className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Impact</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <MetricCard
              value="~75%"
              label="Faster approvals"
              sublabel="2h → under 30min"
            />
            <MetricCard
              value="Six-figure"
              label="Cost savings"
              sublabel="Licenses reduced"
            />
            <MetricCard
              value="~200+"
              label="Staff impacted"
              sublabel="Daily users"
            />
          </div>
          <Card className="bg-muted/30">
            <CardContent className="pt-6">
              <QuoteCarousel quotes={quotes} />
            </CardContent>
          </Card>
        </section>

        {/* Learnings */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Learnings & Next</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Ruthless Prioritization</h3>
                <p className="text-sm text-muted-foreground">
                  MoSCoW prioritization kept 250+ requirements focused and
                  achievable. Prevented scope creep and drove value delivery.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">
                  Wireframe-First Validation
                </h3>
                <p className="text-sm text-muted-foreground">
                  Visual validation replaced ambiguous spreadsheets, reducing
                  rework and speeding sign-off.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Accessibility by Default</h3>
                <p className="text-sm text-muted-foreground">
                  Embedding WCAG standards ensured inclusivity scaled naturally,
                  no retrofitting needed.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">End-to-End Involvement</h3>
                <p className="text-sm text-muted-foreground">
                  Being there from discovery to launch grounded every solution
                  in user needs and technical realities.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-muted/30 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Want the full walkthrough?
          </h2>
          <p className="text-muted-foreground mb-6">
            Full research findings, wireframes, and detailed documentation
            available on request.
          </p>
          <Button size="lg" asChild>
            <a href="/contact">Request Full Case Study</a>
          </Button>
        </section>
      </div>
    </div>
  );
}
