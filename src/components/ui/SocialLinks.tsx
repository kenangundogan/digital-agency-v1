import React from "react";
import { Facebook, Twitter, Instagram, Youtube, Linkedin, X } from "lucide-react";
import { SocialLink } from "@/types";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  links: SocialLink[];
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: {
    container: "w-7 h-7 sm:w-8 sm:h-8",
    icon: "w-3 h-3 sm:w-4 sm:h-4",
  },
  md: {
    container: "w-10 h-10",
    icon: "w-4 h-4",
  },
  lg: {
    container: "w-12 h-12",
    icon: "w-5 h-5",
  },
};

const variantClasses = {
  light: {
    container: "bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white",
  },
  dark: {
    container: "bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white",
  },
};

const iconMap = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  youtube: Youtube,
  linkedin: Linkedin,
  x: X,
};

/**
 * Reusable social links component
 * Displays social media icons with links
 */
const SocialLinks: React.FC<SocialLinksProps> = ({ links, variant = "dark", size = "md", className }) => {
  const sizeStyles = sizeClasses[size];
  const variantStyles = variantClasses[variant];

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {links.map((link, index) => {
        const IconComponent = iconMap[link.platform];
        return (
          <a key={index} href={link.href} className={cn("rounded-full flex items-center justify-center transition-colors duration-300", sizeStyles.container, variantStyles.container)} aria-label={link.ariaLabel || `Follow us on ${link.platform}`} target="_blank" rel="noopener noreferrer">
            <IconComponent className={sizeStyles.icon} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
