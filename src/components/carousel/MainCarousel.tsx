"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

interface CarouselProps {
  /** Embla carousel options */
  options?: EmblaOptionsType;
  /** Carousel slides content */
  children: React.ReactNode;
  /** Slide width (CSS value) */
  slideSize?: string;
  /** Gap between slides (CSS value) */
  slideSpacing?: string;
  /** Slide height (CSS value) */
  slideHeight?: string;
  /** Maximum width of carousel container */
  maxWidth?: string;
  /** Enable autoplay */
  autoplay?: boolean;
  /** Autoplay delay in milliseconds */
  autoplayDelay?: number;
  /** Stop autoplay on interaction */
  stopOnInteraction?: boolean;
}

/**
 * Generic carousel component using Embla Carousel
 * Flexible and reusable for various content types
 */
const EmblaCarousel: React.FC<CarouselProps> = ({ options, children, slideSize = "50%", slideSpacing = "1rem", slideHeight = "auto", maxWidth = "max-w-full", autoplay = true, autoplayDelay = 4000, stopOnInteraction = false }) => {
  const plugins = autoplay ? [Autoplay({ delay: autoplayDelay, stopOnInteraction })] : [];

  const [emblaRef] = useEmblaCarousel(options, plugins);

  return (
    <section
      className={`${maxWidth} mx-auto`}
      style={
        {
          "--slide-height": slideHeight,
          "--slide-spacing": slideSpacing,
          "--slide-size": slideSize,
        } as React.CSSProperties
      }
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y touch-pinch-zoom -ml-(--slide-spacing)">{children}</div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
