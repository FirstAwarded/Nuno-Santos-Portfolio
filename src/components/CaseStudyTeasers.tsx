import { useState } from 'react';

interface TeaserCard {
  title: string;
  description: string;
  beforeState: string;
  afterState: string;
}

const teasers: TeaserCard[] = [
  {
    title: "From hours → minutes",
    description: "Enterprise approval workflows",
    beforeState: "Complex multi-step process",
    afterState: "Streamlined single-flow"
  },
  {
    title: "From clutter → clarity", 
    description: "Data dashboard redesign",
    beforeState: "Information overload",
    afterState: "Focused insights"
  },
  {
    title: "From friction → flow",
    description: "Mobile onboarding experience", 
    beforeState: "High drop-off rates",
    afterState: "Smooth user journey"
  }
];

export const CaseStudyTeasers = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="display-text mb-4">Recent transformations</h2>
          <p className="body-large max-w-2xl mx-auto">
            See how strategic design thinking converts complex enterprise challenges into elegant solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teasers.map((teaser, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-card border border-border/50 p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 hover:border-primary/30"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Abstract before/after animation */}
              <div className="relative h-32 mb-6 overflow-hidden rounded-2xl bg-muted/30">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Before state (scattered elements) */}
                  <div className={`absolute inset-0 transition-all duration-700 ${
                    hoveredIndex === index ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
                  }`}>
                    <div className="relative w-full h-full">
                      <div className="absolute top-2 left-4 w-3 h-3 bg-muted-foreground/40 rounded-full" />
                      <div className="absolute top-6 right-6 w-4 h-2 bg-muted-foreground/40 rounded" />
                      <div className="absolute bottom-4 left-8 w-2 h-4 bg-muted-foreground/40 rounded" />
                      <div className="absolute bottom-6 right-4 w-5 h-3 bg-muted-foreground/40 rounded" />
                      <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-muted-foreground/40 rounded-full -translate-x-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                  
                  {/* After state (organized grid) */}
                  <div className={`absolute inset-0 transition-all duration-700 ${
                    hoveredIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                  }`}>
                    <div className="grid grid-cols-3 gap-2 p-4 h-full">
                      <div className="bg-primary/60 rounded" />
                      <div className="bg-primary/40 rounded" />
                      <div className="bg-primary/60 rounded" />
                      <div className="bg-primary/40 rounded" />
                      <div className="bg-primary/80 rounded" />
                      <div className="bg-primary/40 rounded" />
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2 group-hover:letter-spacing-wide transition-all duration-300">
                {teaser.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{teaser.description}</p>
              
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className={`transition-all duration-500 ${
                  hoveredIndex === index ? 'opacity-50 line-through' : 'opacity-100'
                }`}>
                  {teaser.beforeState}
                </span>
                <span className="text-primary">→</span>
                <span className={`transition-all duration-500 ${
                  hoveredIndex === index ? 'opacity-100 text-primary' : 'opacity-70'
                }`}>
                  {teaser.afterState}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};