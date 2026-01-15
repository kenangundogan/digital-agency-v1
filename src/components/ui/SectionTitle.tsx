import React from "react";
import { SectionTitleProps } from "@/types";
import { cn } from "@/lib/utils";

const sizeClasses = {
  sm: "text-xl sm:text-2xl md:text-3xl",
  md: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
  lg: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
  xl: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
};

const alignClasses = {
  left: "items-start text-left",
  center: "items-center text-center",
  right: "items-end text-right",
};

/**
 * Reusable section title component with category, title, and description
 */
const SectionTitle: React.FC<SectionTitleProps> = ({ category, title, description, align = "left", showIcon = true, iconPath = "/title-icon.png", size = "lg", className }) => {
  return (
    <div className={cn("flex flex-col", alignClasses[align], className)}>
      {category && (
        <div className={cn("flex items-center space-x-2 mb-3 sm:mb-4", align === "center" && "justify-center")}>
          {showIcon && <img src={iconPath} alt="" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />}
          <span className="text-sm sm:text-base font-bold">{category}</span>
        </div>
      )}
      <h2 className={cn("font-bold leading-tight", sizeClasses[size])}>{title}</h2>
      {description && <p className="text-sm sm:text-base text-gray-600 mt-4 max-w-2xl">{description}</p>}
    </div>
  );
};

export default SectionTitle;
