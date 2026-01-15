"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useCallback } from "react";
import { HeaderProps, NavItem, ContactInfo } from "@/types";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileMenu } from "./MobileMenu";
import { MegaMenu } from "./MegaMenu";

// Default navigation items
const defaultNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
  },
  { label: "Projects", href: "/projects" },
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// Default contact info
const defaultContactInfo: ContactInfo = {
  address: "United States 866 Wilshire,\n2nd Street Los Angeles 90024.",
  phones: ["(+123) 456 78 90", "(+456) 123 67 89"],
  emails: ["example@gmail.com"],
  socialLinks: [
    { platform: "facebook", href: "#" },
    { platform: "x", href: "#" },
    { platform: "instagram", href: "#" },
    { platform: "youtube", href: "#" },
  ],
};

const Header: React.FC<HeaderProps> = ({ brandName = "Onnat", navItems = defaultNavItems, contactInfo = defaultContactInfo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = useCallback(
    (href: string) => {
      if (href === "/") return pathname === "/";
      return pathname.startsWith(href);
    },
    [pathname]
  );

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const closeMegaMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <>
      <header className="bg-white border-b border-gray-200 relative z-50">
        <div className="min-h-16 md:min-h-28 container mx-auto py-4 flex items-center justify-between px-4 sm:px-6 lg:px-16">
          {/* Brand */}
          <div className="flex items-center justify-start text-center sm:text-left">
            <Link href="/">
              <span className="text-4xl font-bold">{brandName}</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <DesktopNavigation navItems={navItems} isActive={isActive} />

          {/* Menu Buttons */}
          <div className="flex items-center justify-end text-center sm:text-left gap-2">
            <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden bg-black rounded-full text-white p-2 hover:bg-gray-800 transition-colors" aria-label="Open mobile menu">
              <Menu className="w-6 h-6" />
            </button>
            <button onClick={() => setIsMenuOpen(true)} className="hidden md:flex bg-black rounded-full text-white p-3 hover:bg-gray-800 transition-colors" aria-label="Open menu">
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mega Menu */}
      <MegaMenu isOpen={isMenuOpen} onClose={closeMegaMenu} brandName={brandName} navItems={navItems} contactInfo={contactInfo} isActive={isActive} />

      {/* Mobile Slide-in Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} navItems={navItems} isActive={isActive} />
    </>
  );
};

export default Header;
