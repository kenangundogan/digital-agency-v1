"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useState, useCallback } from "react";
import { NavItem } from "@/types";
import { cn } from "@/lib/utils";

interface MegaMenuNavigationProps {
  navItems: NavItem[];
  brandName: string;
  isActive: (href: string) => boolean;
  onLinkClick: () => void;
}

export const MegaMenuNavigation: React.FC<MegaMenuNavigationProps> = ({ navItems, brandName, isActive, onLinkClick }) => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const handleSubmenuToggle = useCallback((label: string) => {
    setOpenSubmenu((prev) => (prev === label ? null : label));
  }, []);

  return (
    <div>
      <h2 className="text-white text-4xl md:text-5xl font-bold mb-12">{brandName}</h2>

      {/* Navigation Links */}
      <nav className="mb-16">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.label}>
              <div>
                <div className="flex items-center justify-between">
                  <Link href={item.href} onClick={onLinkClick} className={cn("text-2xl md:text-3xl font-semibold transition-colors", isActive(item.href) ? "text-red-500" : "text-white hover:text-red-500")}>
                    {item.label}
                  </Link>
                  {item.children && (
                    <button onClick={() => handleSubmenuToggle(item.label)} className="text-white hover:text-red-500 transition-colors" aria-label={`Toggle ${item.label} submenu`}>
                      <ChevronRight className={cn("w-6 h-6 transition-transform duration-200", openSubmenu === item.label && "rotate-90")} />
                    </button>
                  )}
                </div>

                {/* Submenu */}
                {item.children && (
                  <div className={cn("overflow-hidden transition-all duration-300 ml-6 mt-2", openSubmenu === item.label ? "max-h-96 opacity-100" : "max-h-0 opacity-0")}>
                    <ul className="space-y-2">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link href={child.href} onClick={onLinkClick} className={cn("block text-lg font-medium transition-colors", isActive(child.href) ? "text-red-500" : "text-gray-400 hover:text-red-500")}>
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
