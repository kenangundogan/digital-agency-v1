import React, { ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { RoundedMarqueeProps } from "@/types";
import { cn } from "@/lib/utils";

const sizeClasses = {
  sm: {
    container: "w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32",
    inner: "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16",
    icon: "w-5 h-5 sm:w-6 sm:h-6",
    fontSize: "11px",
  },
  md: {
    container: "w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48",
    inner: "w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24",
    icon: "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10",
    fontSize: "12px",
  },
  lg: {
    container: "w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60",
    inner: "w-18 h-18 sm:w-22 sm:h-22 md:w-26 md:h-26 lg:w-32 lg:h-32",
    icon: "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12",
    fontSize: "14px",
  },
};

/**
 * Rotating circular text marquee with center icon
 * Used as decorative element in various sections
 */
const RoundedMarquee: React.FC<RoundedMarqueeProps> = ({ title = "Digital", title2 = "Agency", icon, size = "md" }) => {
  const sizeStyle = sizeClasses[size];
  const defaultIcon = <ChevronDown className={cn(sizeStyle.icon, "text-white")} />;

  return (
    <div className={cn("absolute right-0 bottom-10 md:-bottom-24 md:left-1/2 md:-translate-x-1/2 z-10", sizeStyle.container)}>
      {/* Circle Background */}
      <div className="absolute inset-0 bg-white border border-gray-200 rounded-full" />

      {/* Rotating Text SVG */}
      <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 200 200">
        <defs>
          <path id="roundedMarqueePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
        </defs>
        <text
          className="uppercase"
          style={{
            fontSize: sizeStyle.fontSize,
            letterSpacing: "0.4em",
            fill: "#1a1a1a",
            fontWeight: 800,
          }}
        >
          <textPath href="#roundedMarqueePath" startOffset="0%">
            {title} - {title2} - {title} - {title2} - {title} -
          </textPath>
        </text>
      </svg>

      {/* Center Icon Button */}
      <div className={cn("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", "bg-black rounded-full flex items-center justify-center", "group-hover:scale-110 transition-transform duration-300", sizeStyle.inner)}>{icon || defaultIcon}</div>
    </div>
  );
};

export default RoundedMarquee;
