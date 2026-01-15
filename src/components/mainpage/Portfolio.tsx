"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PortfolioProps, PortfolioItem } from "@/types";
import { SectionTitle, CircularLinkButton, Container } from "@/components/ui";
import { cn } from "@/lib/utils";

// Default portfolio items
const defaultItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Brand Identity Design",
    image: "https://picsum.photos/800/600?random=1",
  },
  {
    id: 2,
    title: "Web Development Project",
    image: "https://picsum.photos/800/600?random=2",
  },
  {
    id: 3,
    title: "Mobile App UI/UX",
    image: "https://picsum.photos/800/600?random=3",
  },
];

/**
 * Portfolio section component with interactive image gallery
 * Displays portfolio items with hover/click image switching
 */
const Portfolio: React.FC<PortfolioProps> = ({ category = "Portfolio", title = "Showcasing Creative Excellence.", description = "Crafting visually appealing and user websites tailored to your brand's and observe of objectives.", items = defaultItems, ctaText = "Portfolio", ctaLink = "/portfolio" }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full bg-black text-white">
      <Container className="py-8 sm:py-12 lg:py-20">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="flex flex-col items-center md:items-start justify-center space-y-4 sm:space-y-6 lg:space-y-10 text-center md:text-left">
            <SectionTitle category={category} title={title} description={description} size="xl" className="text-white [&_h2]:text-white [&_p]:text-gray-300 [&_span]:text-white" />
          </div>

          {/* Desktop Link Button */}
          <div className="hidden md:flex items-center justify-end">
            <CircularLinkButton href={ctaLink} text={ctaText} variant="dark" />
          </div>
        </div>

        {/* Portfolio Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* List */}
          <div className="flex items-center justify-center order-2 md:order-1">
            <ul className="flex flex-col gap-y-3 sm:gap-y-4 lg:gap-y-6 w-full">
              {items.map((item, index) => (
                <li key={item.id || index} onMouseEnter={() => setActiveIndex(index)} onClick={() => setActiveIndex(index)} className={cn("flex items-center gap-3 sm:gap-4 cursor-pointer py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-all duration-300", activeIndex === index ? "bg-white/10 border-l-4 border-white" : "border-l-4 border-transparent hover:bg-white/5")}>
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white/30">0{index + 1}</span>
                  <span className="text-base sm:text-lg lg:text-xl font-medium">{item.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="relative overflow-hidden rounded-lg aspect-4/3 md:aspect-auto order-1 md:order-2">
            {items.map((item, index) => (
              <img key={item.id || index} src={item.image} alt={item.title} className={cn("w-full h-full object-cover absolute inset-0 transition-all duration-500", activeIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-105")} />
            ))}
            {/* Placeholder for aspect ratio */}
            <img src={items[0]?.image} alt="placeholder" className="w-full h-full object-cover invisible" />
          </div>
        </div>

        {/* Mobile Link Button */}
        <div className="flex md:hidden items-center justify-center mt-8">
          <Link href={ctaLink} className="flex items-center gap-2 text-base font-medium hover:gap-4 transition-all duration-300">
            <span>View {ctaText}</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
