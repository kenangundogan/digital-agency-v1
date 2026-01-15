import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CircularLinkButtonProps } from "@/types";
import { cn } from "@/lib/utils";

const sizeClasses = {
  sm: "w-28 h-28 sm:w-32 sm:h-32",
  md: "w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40",
  lg: "w-32 h-32 sm:w-36 sm:h-36 lg:w-44 lg:h-44",
};

const beforeSizeClasses = {
  sm: "before:w-28 before:h-28 sm:before:w-32 sm:before:h-32",
  md: "before:w-32 before:h-32 sm:before:w-36 sm:before:h-36 lg:before:w-40 lg:before:h-40",
  lg: "before:w-32 before:h-32 sm:before:w-36 sm:before:h-36 lg:before:w-44 lg:before:h-44",
};

const variantClasses = {
  light: {
    border: "before:border-black before:opacity-10 group-hover:before:bg-black group-hover:before:opacity-100 group-hover:before:border-black",
    text: "text-black group-hover:text-white",
    arrow: "group-hover:text-white",
  },
  dark: {
    border: "before:border-white before:opacity-70 group-hover:before:bg-white group-hover:before:opacity-100 group-hover:before:border-white",
    text: "text-white group-hover:text-black",
    arrow: "group-hover:text-black",
  },
};

/**
 * Circular animated link button with arrow icon
 * Used across multiple sections (About, Blog, Portfolio)
 */
const CircularLinkButton: React.FC<CircularLinkButtonProps> = ({ href, text, variant = "light", size = "lg", className }) => {
  const variantStyles = variantClasses[variant];

  return (
    <Link href={href} className={cn("relative flex items-center justify-center group shrink-0", sizeClasses[size], className)}>
      <div className={cn("flex space-x-2", "before:content-[''] before:absolute before:top-0 before:left-0", beforeSizeClasses[size], "before:border before:-z-10 before:rounded-full", "before:transition-all before:duration-300", variantStyles.border)}>
        <div className={cn("text-sm sm:text-base font-semibold flex items-center justify-center z-10", variantStyles.text)}>{text}</div>
        <ArrowRight className={cn("w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 group-hover:translate-x-2", variantStyles.arrow)} />
      </div>
    </Link>
  );
};

export default CircularLinkButton;
