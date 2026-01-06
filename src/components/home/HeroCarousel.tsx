import { useState, useEffect, useCallback } from "react";
import heroLibrary from "@/assets/hero-library.jpg";

const slides = [
  {
    image: heroLibrary,
    title: "UNITEN ONLINE APPLICATION SYSTEM",
    subtitle: "Interested in UNITEN? Come and be our family.",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative w-full bg-muted overflow-hidden">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="relative rounded-xl overflow-hidden shadow-xl">
          {/* Slides */}
          <div className="relative h-[300px] md:h-[400px] lg:h-[480px]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-foreground/80" />
                
                {/* Content */}
                <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 text-right max-w-sm">
                  <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-card leading-tight mb-3 drop-shadow-lg">
                    {slide.title}
                  </h2>
                  <p className="text-sm md:text-base text-card/90 drop-shadow-md">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-primary w-6"
                    : "bg-card/50 hover:bg-card/80"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
