"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { NavItem } from "@/types";
import { cn } from "@/lib/utils";

interface DesktopNavigationProps {
  navItems: NavItem[];
  isActive: (href: string) => boolean;
}

export const DesktopNavigation: React.FC<DesktopNavigationProps> = ({ navItems, isActive }) => {
  return (
    <nav className="items-center justify-center text-center sm:text-left hidden md:flex">
      <div className="flex items-center gap-10">
        {navItems.map((item) => (
          <div key={item.label} className="relative group">
            <Link href={item.href}>
              <span className={cn("text-sm font-semibold transition-colors inline-flex items-center gap-1", isActive(item.href) ? "text-red-500" : "hover:text-red-500")}>
                {item.label}
                {item.children && <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:rotate-90" />}
              </span>
            </Link>

            {/* Dropdown Menu */}
            {item.children && (
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="w-56 bg-white shadow-lg border border-gray-100 overflow-hidden transform scale-95 group-hover:scale-100 transition-transform duration-200 origin-top">
                  {item.children.map((child) => (
                    <Link key={child.label} href={child.href} className={cn("block px-5 py-3 text-sm font-medium transition-colors border-b border-gray-50 last:border-b-0", isActive(child.href) ? "text-red-500 bg-red-50" : "text-gray-700 hover:text-red-500 hover:bg-gray-50")}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};
