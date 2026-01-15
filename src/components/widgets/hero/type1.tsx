import React from "react";
import { HeroProps } from "@/types";

const ArrowLine = () => (
  <svg viewBox="0 0 200 40" className="w-full max-w-[150px] md:max-w-[200px] lg:max-w-[300px]" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="0" y1="20" x2="180" y2="20" stroke="#9ca3af" strokeWidth="1" />
    <polyline points="170,15 185,20 170,25" stroke="#9ca3af" strokeWidth="1" fill="none" />
  </svg>
);

/**
 * Hero component for the homepage
 * Displays main title, subtitle, description and optional graphic element
 */
const Hero: React.FC<HeroProps> = ({ title = "Digital", title2 = "Agency", description = "We create visually stunning, responsive websites that provide seamless user experiences and drive.", graphicElement = "/graphic-element-1.png" }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
        {/* Title ve Description */}
        <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[100px] xl:text-[130px] font-black tracking-tight leading-[0.9] text-[#1a1a1a]">{title}</h1>
          <div className="w-full mt-4 sm:mt-6 lg:mt-10 text-sm sm:text-base md:text-lg lg:text-2xl text-black font-light leading-relaxed max-w-xs sm:max-w-sm">{description}</div>
        </div>

        {/* Secondary Title with Arrow */}
        <div className="lg:col-span-4 flex flex-col pt-4 sm:pt-8 md:pt-16 lg:pt-32">
          <div className="flex items-end justify-center lg:justify-start relative">
            <div className="absolute -top-6 sm:-top-8 lg:-top-10 left-2 sm:left-4 lg:left-6 hidden lg:block">
              <ArrowLine />
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[100px] xl:text-[130px] font-black tracking-tight leading-[0.9] text-[#1a1a1a]">{title2}</h2>
          </div>
        </div>

        {/* Graphic Element */}
        {graphicElement && (
          <div className="hidden lg:flex lg:col-span-4 justify-center items-center mt-6 lg:mt-0">
            <img src={graphicElement} alt="" className="h-48 sm:h-56 md:h-64 lg:h-80 object-cover" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
