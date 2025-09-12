import { useEffect } from "react";
import "../styles/oart.css"; // keep if you want custom styles alongside Tailwind

export default function Oart() {
  useEffect(() => {
    // simple metric counter logic
    const counters = document.querySelectorAll<HTMLElement>("[data-count]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = parseInt(el.dataset.count || "0", 10);
            let current = 0;
            const step = Math.ceil(target / 60); // animate ~1s
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
      { threshold: 0.5 }
    );
    counters.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <header className="py-20 text-center">
        <h1 className="text-4xl font-bold">
          OART — Scalable UX for Enterprise Workflows
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Replaced legacy systems with a scalable application that cut approval
          time by 75%, reduced licensing costs by six figures, and embedded
          accessibility by default.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-8 container mx-auto">
          <div>
            <span
              className="text-4xl font-bold text-primary block"
              data-count="75"
            >
              0
            </span>
            <p className="text-muted-foreground">Approval time reduced (%)</p>
          </div>
          <div>
            <span
              className="text-4xl font-bold text-primary block"
              data-count="200"
            >
              0
            </span>
            <p className="text-muted-foreground">Staff impacted</p>
          </div>
          <div>
            <span
              className="text-4xl font-bold text-primary block"
              data-count="134000"
            >
              0
            </span>
            <p className="text-muted-foreground">Annual cost savings (£)</p>
          </div>
        </div>
      </header>

      {/* Challenge */}
      <section className="container mx-auto py-16">
        <h2 className="text-2xl font-bold mb-4">Challenge</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Approvals could take up to 2 hours.</li>
          <li>Tables were unreadable, adoption collapsed.</li>
          <li>Licensing costs were six figures annually.</li>
        </ul>
      </section>

      {/* Solution */}
      <section className="container mx-auto py-16">
        <h2 className="text-2xl font-bold mb-4">Solution</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Bulk approvals (up to 1,000 items at once).</li>
          <li>Clear entry points for approvals & reporting.</li>
          <li>Responsive, readable Dataverse tables.</li>
          <li>Streamlined filters around real user needs.</li>
          <li>Automation via workflow notifications.</li>
        </ul>
      </section>

      {/* Impact */}
      <section className="bg-muted py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Impact</h2>
        <p className="max-w-xl mx-auto text-muted-foreground">
          Efficiency, cost, and adoption improvements confirmed by analytics and
          user feedback: “very useful” and “easy to use.”
        </p>
      </section>

      {/* Gated CTA */}
      <section className="py-16 container mx-auto text-center">
        <h2 className="text-xl font-bold">Want the full walkthrough?</h2>
        <p className="mt-2 text-muted-foreground">
          This case study includes sensitive enterprise workflows. Contact me
          for the full research, wireframes, and adoption strategy.
        </p>
        <a
          href="/contact"
          className="inline-block mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-accent"
        >
          Request full case study
        </a>
      </section>
    </div>
  );
}
