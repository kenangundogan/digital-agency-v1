import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const sizeClasses = {
  sm: "max-w-4xl",
  md: "max-w-6xl",
  lg: "max-w-7xl",
  xl: "max-w-screen-2xl",
  full: "max-w-full",
};

/**
 * Reusable container component with responsive padding
 */
const Container: React.FC<ContainerProps> = ({ children, className, size = "xl" }) => {
  return <div className={cn("container mx-auto px-4 sm:px-6 lg:px-8", sizeClasses[size], className)}>{children}</div>;
};

export default Container;
