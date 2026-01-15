"use client";

import { X } from "lucide-react";
import React from "react";
import { NavItem, ContactInfo } from "@/types";
import { cn } from "@/lib/utils";
import { MegaMenuNavigation } from "./mega-menu/Navigation";
import { MegaMenuContactInfo } from "./mega-menu/ContactInfo";
import { LetsGoSection } from "./mega-menu/LetsGoSection";
import { MegaMenuContactForm } from "./mega-menu/ContactForm";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  brandName: string;
  navItems: NavItem[];
  contactInfo: ContactInfo;
  isActive: (href: string) => boolean;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose, brandName, navItems, contactInfo, isActive }) => {
  return (
    <div className={cn("fixed inset-0 bg-[#1a1a1a] z-100 transition-all duration-500", isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none")}>
      {/* Close Button */}
      <button onClick={onClose} className="absolute top-8 right-8 md:top-12 md:right-12 text-white hover:text-gray-300 transition-colors z-10" aria-label="Close menu">
        <X className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
      </button>

      {/* Red Dot Decoration */}
      <div className="absolute top-8 left-8 md:top-12 md:left-12">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
      </div>

      {/* Content Container */}
      <div className="h-full overflow-y-auto flex items-center justify-center">
        <div className="container mx-auto px-6 md:px-16 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Left Section - Navigation & Company Info */}
            <div className={cn("transition-all duration-700 delay-100", isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
              <MegaMenuNavigation navItems={navItems} brandName={brandName} isActive={isActive} onLinkClick={onClose} />

              <MegaMenuContactInfo contactInfo={contactInfo} />

              <LetsGoSection />
            </div>

            {/* Right Section - Contact Form */}
            <div className={cn("transition-all duration-700 delay-200", isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
              <MegaMenuContactForm brandName={brandName} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
