import { useState, useEffect } from "react";

interface QuoteCarouselProps {
  quotes: string[];
  interval?: number;
}

export function QuoteCarousel({ quotes, interval = 7000 }: QuoteCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % quotes.length),
      interval
    );
    return () => clearInterval(timer);
  }, [paused, quotes.length, interval]);

  return (
    <div className="text-center">
      <div
        className="text-lg italic mb-4 transition-opacity duration-300"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        "{quotes[index]}"
      </div>
      <div className="flex justify-center gap-2">
        {quotes.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === index ? "bg-primary" : "bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
