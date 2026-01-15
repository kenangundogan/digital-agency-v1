"use client";

import { X, ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useState, useCallback } from "react";
import { NavItem } from "@/types";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  isActive: (href: string) => boolean;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, navItems, isActive }) => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const handleSubmenuToggle = useCallback((label: string) => {
    setOpenSubmenu((prev) => (prev === label ? null : label));
  }, []);

  const closeMobileMenu = useCallback(() => {
    onClose();
    setOpenSubmenu(null);
  }, [onClose]);

  return (
    <div className={cn("fixed inset-0 z-100 md:hidden transition-all duration-300", isOpen ? "visible" : "invisible")}>
      {/* Backdrop */}
      <div className={cn("absolute inset-0 bg-black/20 transition-opacity duration-300", isOpen ? "opacity-100" : "opacity-0")} onClick={closeMobileMenu} />

      {/* Menu Panel */}
      <div className={cn("absolute top-0 right-0 h-full w-[85%] max-w-[320px] bg-white shadow-xl transition-transform duration-300 ease-out", isOpen ? "translate-x-0" : "translate-x-full")}>
        {/* Close Button */}
        <button onClick={closeMobileMenu} className="absolute top-6 right-6 text-gray-800 hover:text-gray-600 transition-colors" aria-label="Close mobile menu">
          <X className="w-6 h-6" strokeWidth={1.5} />
        </button>

        {/* Navigation */}
        <nav className="pt-20 px-6">
          <ul className="space-y-1">
            {navItems.map((item, index) => (
              <li key={item.label} className={cn("transition-all duration-300", isOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0")} style={{ transitionDelay: `${index * 50}ms` }}>
                {item.children ? (
                  <div>
                    <button onClick={() => handleSubmenuToggle(item.label)} className={cn("w-full flex items-center justify-between py-4 text-lg font-medium transition-colors", openSubmenu === item.label ? "text-red-500" : "text-gray-900 hover:text-red-500")}>
                      <span>{item.label}</span>
                      <ChevronRight className={cn("w-5 h-5 transition-transform duration-200", openSubmenu === item.label && "rotate-90")} />
                    </button>
                    <div className={cn("overflow-hidden transition-all duration-300", openSubmenu === item.label ? "max-h-48 opacity-100" : "max-h-0 opacity-0")}>
                      <ul className="pl-4 pb-2 space-y-1">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link href={child.href} onClick={closeMobileMenu} className={cn("block py-2 transition-colors", isActive(child.href) ? "text-red-500" : "text-gray-600 hover:text-red-500")}>
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link href={item.href} onClick={closeMobileMenu} className={cn("block py-4 text-lg font-medium transition-colors", isActive(item.href) ? "text-red-500" : "text-gray-900 hover:text-red-500")}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
