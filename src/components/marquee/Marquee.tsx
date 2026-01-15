"use client";

import React from "react";
import { Target } from "lucide-react";
import { MarqueeProps } from "@/types";
import { cn } from "@/lib/utils";

interface MarqueeComponentProps extends MarqueeProps {
  /** Custom icon to use as separator */
  icon?: React.ReactNode;
  /** Text size variant */
  size?: "sm" | "md" | "lg";
  /** Animation duration in seconds */
  duration?: number;
  /** Pause animation on hover */
  pauseOnHover?: boolean;
  /** Additional className */
  className?: string;
}

const sizeClasses = {
  sm: "text-3xl md:text-4xl",
  md: "text-4xl md:text-5xl",
  lg: "text-5xl md:text-6xl",
};

/**
 * Horizontal infinite scrolling marquee component
 * Displays text items with icons in a continuous loop
 */
const Marquee: React.FC<MarqueeComponentProps> = ({ items, icon = <Target className="w-12 h-12 md:w-16 md:h-16 shrink-0 mr-6" />, size = "lg", duration = 40, pauseOnHover = true, className }) => {
  return (
    <section className={cn("w-full overflow-hidden py-8", className)}>
      <div className={cn("group flex overflow-hidden p-2", pauseOnHover && "group-hover:[animation-play-state:paused]")} style={{ "--duration": `${duration}s` } as React.CSSProperties}>
        <div className={cn("flex shrink-0 justify-around animate-marquee flex-row", pauseOnHover && "group-hover:[animation-play-state:paused]")}>
          {/* First copy of items */}
          {items.map((item, index) => (
            <div key={`first-${index}`} className="flex items-center gap-6 shrink-0">
              <span className={cn("font-bold", sizeClasses[size])}>{item}</span>
              {icon}
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {items.map((item, index) => (
            <div key={`second-${index}`} className="flex items-center gap-6 shrink-0">
              <span className={cn("font-bold", sizeClasses[size])}>{item}</span>
              {icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;
