"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import HeroCarousel from "@/components/carousel/HeroCarousel";
import { HeroSlide } from "@/types";

interface HeroType2Props {
  slides?: HeroSlide[];
  autoplayDelay?: number;
}

// Default hero slides
const defaultSlides: HeroSlide[] = [
  {
    id: 1,
    tagline: "Creative Digital Agency",
    title: "We Build",
    subtitle: "Digital Dreams",
    description: "Transforming bold ideas into extraordinary digital experiences. We craft brands that captivate, websites that convert, and campaigns that resonate.",
    image: "https://picsum.photos/1920/1080?random=1",
    ctaText: "Start Your Project",
    ctaLink: "/contact",
  },
  {
    id: 2,
    tagline: "Award-Winning Design",
    title: "Crafting",
    subtitle: "Visual Stories",
    description: "Where creativity meets strategy. Our design philosophy blends aesthetics with purpose to create memorable brand identities.",
    image: "https://picsum.photos/1920/1080?random=2",
    ctaText: "View Our Work",
    ctaLink: "/projects",
  },
  {
    id: 3,
    tagline: "Innovation First",
    title: "Pushing",
    subtitle: "Boundaries",
    description: "We don't just follow trends—we create them. Our team of visionaries delivers cutting-edge solutions for forward-thinking brands.",
    image: "https://picsum.photos/1920/1080?random=3",
    ctaText: "Explore Services",
    ctaLink: "/services",
  },
  {
    id: 4,
    tagline: "Results Driven",
    title: "Elevate",
    subtitle: "Your Brand",
    description: "Strategic creativity that delivers measurable impact. We partner with ambitious brands to achieve extraordinary growth.",
    image: "https://picsum.photos/1920/1080?random=4",
    ctaText: "Let's Connect",
    ctaLink: "/contact",
  },
];

/**
 * Full-screen hero carousel component with animated content
 */
const HeroType2: React.FC<HeroType2Props> = ({ slides = defaultSlides, autoplayDelay = 6000 }) => {
  return (
    <div className="w-full h-[calc(100vh-112px)] md:h-[calc(100vh-112px)] bg-black text-white relative overflow-hidden">
      {/* Decorative Gradient Orbs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
        <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-red-500/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <HeroCarousel
        options={{
          loop: true,
          align: "start",
          containScroll: "trimSnaps",
          dragFree: false,
          slidesToScroll: 1,
        }}
        showNavigation={true}
        showDots={true}
        autoplayDelay={autoplayDelay}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="flex-[0_0_100%] min-w-0 h-full relative">
            {/* Background Image with Overlays */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover scale-105 transition-transform duration-300 ease-in-out" />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Content */}
            <div className="relative z-20 h-full flex items-center">
              <div className="container mx-auto px-4 md:px-12 lg:px-16">
                <div className="max-w-4xl">
                  {/* Tagline */}
                  {slide.tagline && (
                    <div className="flex items-center gap-3 mb-6 animate-fadeInUp">
                      <span className="w-12 h-[2px] bg-red-500" />
                      <span className="text-red-500 font-medium tracking-widest uppercase text-xs md:text-sm">{slide.tagline}</span>
                    </div>
                  )}

                  {/* Main Title */}
                  <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tight mb-2">
                    <span className="block text-white animate-fadeInUp animation-delay-100 mb-10">{slide.title}</span>
                    {slide.subtitle && (
                      <span
                        className="block animate-fadeInUp animation-delay-200"
                        style={{
                          WebkitTextStroke: "2px rgba(255,255,255,0.6)",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {slide.subtitle}
                      </span>
                    )}
                  </h1>

                  {/* Description */}
                  {slide.description && <p className="text-gray-300 text-base md:text-lg lg:text-xl max-w-xl mt-6 md:mt-8 leading-relaxed font-light animate-fadeInUp animation-delay-300">{slide.description}</p>}

                  {/* CTA Button */}
                  {slide.ctaText && slide.ctaLink && (
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8 md:mt-12 animate-fadeInUp animation-delay-400">
                      <Link href={slide.ctaLink} className="group relative inline-flex items-center gap-3 bg-red-500 text-white px-8 py-4 font-semibold overflow-hidden transition-all duration-300 hover:bg-red-600">
                        <span className="relative z-10">{slide.ctaText}</span>
                        <ArrowUpRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </HeroCarousel>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-6 md:left-16 z-30 hidden md:flex flex-col items-center gap-3">
        <span className="text-white/60 text-xs uppercase tracking-widest rotate-[-90deg] origin-center translate-x-[-50%] whitespace-nowrap">Scroll Down</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-red-500 to-transparent animate-pulse" />
      </div>
    </div>
  );
};

export default HeroType2;
