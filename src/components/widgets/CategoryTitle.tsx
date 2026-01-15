import React from "react";
import { Container } from "@/components/ui";
import RoundedMarquee from "../marquee/RoundedMarquee";

interface CategoryTitleProps {
  title?: string;
  title2?: string;
  showDecoration?: boolean;
  showMarquee?: boolean;
}

/**
 * Large category title component with modern minimalist design
 * Used as page headers for category/section pages
 */
const CategoryTitle: React.FC<CategoryTitleProps> = ({ title = "Digital", title2 = "Agency", showDecoration = true }) => {
  return (
    <Container className="py-16 md:py-20 lg:py-28 relative overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 lg:gap-16">
          {/* First Title */}
          <div className="shrink-0">
            <h1 className="text-[clamp(3.5rem,10vw,8rem)] md:text-[clamp(5rem,8vw,9rem)] lg:text-[clamp(6rem,10vw,12rem)] font-black tracking-tight leading-[0.9] text-[#1a1a1a]">{title}</h1>
          </div>

          {/* Decorative Arrow */}
          <div className="hidden md:flex items-center grow max-w-[200px] lg:max-w-[300px]">
            <div className="w-full h-[2px] bg-[#1a1a1a] relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-[#1a1a1a] border-b-8 border-b-transparent"></div>
            </div>
          </div>

          {/* Second Title */}
          <div className="shrink-0 md:-mt-4 lg:-mt-8">
            <h2 className="text-[clamp(3.5rem,10vw,8rem)] md:text-[clamp(5rem,8vw,9rem)] lg:text-[clamp(6rem,10vw,12rem)] font-black tracking-tight leading-[0.9] text-[#1a1a1a]">{title2}</h2>
          </div>
        </div>

        {/* Bottom Border Line */}
        <div className="mt-12 md:mt-16 lg:mt-20 w-full h-px bg-[#e5e5e5]"></div>

        {/* Marquee Section */}
        {showDecoration && (
          <div className="flex items-center justify-center md:justify-end">
            <div className="w-64 md:w-72 lg:w-full">
              <RoundedMarquee title={title} title2={title2} />
            </div>
          </div>
        )}
      </div>

      {/* Decorative Circle Background */}
      {showDecoration && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none">
          <div className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] lg:w-[900px] lg:h-[900px] rounded-full border-2 border-[#f0f0f0] opacity-40"></div>
        </div>
      )}
    </Container>
  );
};

export default CategoryTitle;
