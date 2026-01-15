import React from "react";
import RoundedMarquee from "../marquee/RoundedMarquee";
import { Container } from "@/components/ui";

interface CategoryTitleProps {
  title?: string;
  title2?: string;
  showMarquee?: boolean;
  showDecoration?: boolean;
}

/**
 * Large category title component with optional rotating marquee
 * Used as page headers for category/section pages
 */
const CategoryTitle: React.FC<CategoryTitleProps> = ({ title = "Digital", title2 = "Agency", showMarquee = true, showDecoration = true }) => {
  return (
    <Container className="py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8 lg:gap-8">
        {/* First Title */}
        <div className="md:col-span-1 lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left py-2 sm:py-3 md:py-4 lg:py-5">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[100px] font-black tracking-tight leading-[0.9] text-[#1a1a1a]">{title}</h1>
        </div>

        {/* Second Title with offset */}
        <div className="md:col-span-1 lg:col-span-4 flex flex-col items-center md:items-start pt-2 sm:pt-4 md:pt-8 lg:pt-16 xl:pt-24 2xl:pt-32">
          <div className="flex items-end justify-center md:justify-start relative w-full">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[100px] font-black tracking-tight leading-[0.9] text-[#1a1a1a] lg:absolute lg:-top-6 xl:-top-8 2xl:-top-10 lg:left-4 xl:left-6">{title2}</h2>
          </div>
        </div>

        {/* Marquee Section */}
        {showMarquee && (
          <div className="md:col-span-2 lg:col-span-4 relative flex items-center justify-center md:justify-end mt-8 md:mt-0">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full">
              <RoundedMarquee title={title} title2={title2} />
            </div>
          </div>
        )}

        {/* Decorative Circle */}
        {showDecoration && (
          <img
            src="/bordered-circle.png"
            alt=""
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 
              object-cover absolute bottom-0 left-1/2 
              -translate-x-1/2 translate-y-1/2 
              -z-10 opacity-50 md:opacity-100"
          />
        )}
      </div>
    </Container>
  );
};

export default CategoryTitle;
