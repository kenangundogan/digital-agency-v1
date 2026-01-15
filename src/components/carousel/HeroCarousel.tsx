"use client";

import React, { useCallback, useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroCarouselProps {
  /** Embla carousel options */
  options?: EmblaOptionsType;
  /** Carousel slides content */
  children: React.ReactNode;
  /** Show previous/next navigation buttons */
  showNavigation?: boolean;
  /** Show dot indicators */
  showDots?: boolean;
  /** Show slide counter */
  showCounter?: boolean;
  /** Autoplay delay in milliseconds */
  autoplayDelay?: number;
}

/**
 * Hero carousel component with navigation, dots, and counter
 * Designed for full-width hero sections
 */
const HeroCarousel: React.FC<HeroCarouselProps> = ({ options, children, showNavigation = true, showDots = true, showCounter = true, autoplayDelay = 5000 }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ delay: autoplayDelay, stopOnInteraction: false })]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const isLoopEnabled = options?.loop ?? false;

  return (
    <div className="relative w-full h-full group">
      {/* Carousel Container */}
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex w-full h-full">{children}</div>
      </div>

      {/* Navigation Buttons */}
      {showNavigation && (
        <>
          <button onClick={scrollPrev} className={cn("absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20", "w-12 h-12 md:w-14 md:h-14 rounded-full", "bg-white/10 backdrop-blur-sm border border-white/20", "flex items-center justify-center text-white", "transition-all duration-300 hover:bg-white hover:text-black", !canScrollPrev && !isLoopEnabled ? "opacity-30 cursor-not-allowed" : "opacity-0 group-hover:opacity-100")} disabled={!canScrollPrev && !isLoopEnabled} aria-label="Previous slide">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={scrollNext} className={cn("absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20", "w-12 h-12 md:w-14 md:h-14 rounded-full", "bg-white/10 backdrop-blur-sm border border-white/20", "flex items-center justify-center text-white", "transition-all duration-300 hover:bg-white hover:text-black", !canScrollNext && !isLoopEnabled ? "opacity-30 cursor-not-allowed" : "opacity-0 group-hover:opacity-100")} disabled={!canScrollNext && !isLoopEnabled} aria-label="Next slide">
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Dot Indicators */}
      {showDots && scrollSnaps.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          {scrollSnaps.map((_, index) => (
            <button key={index} onClick={() => scrollTo(index)} className={cn("relative h-1 rounded-full transition-all duration-500", index === selectedIndex ? "w-12 bg-white" : "w-6 bg-white/40 hover:bg-white/60")} aria-label={`Go to slide ${index + 1}`}>
              {index === selectedIndex && <span className="absolute inset-0 bg-red-500 rounded-full animate-pulse" />}
            </button>
          ))}
        </div>
      )}

      {/* Slide Counter */}
      {showCounter && scrollSnaps.length > 1 && (
        <div className="absolute bottom-8 right-8 z-20 hidden md:flex items-center gap-2 text-white font-light">
          <span className="text-3xl font-bold">{String(selectedIndex + 1).padStart(2, "0")}</span>
          <span className="text-white/50">/</span>
          <span className="text-white/50">{String(scrollSnaps.length).padStart(2, "0")}</span>
        </div>
      )}
    </div>
  );
};

export default HeroCarousel;
