"use client";

import { Menu, X, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { HeaderProps, NavItem, ContactInfo } from "@/types";
import { SocialLinks, InputField } from "@/components/ui";
import { cn } from "@/lib/utils";

// Default navigation items
const defaultNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
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
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const handleSubmenuToggle = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <>
      <header className="bg-white border-b border-gray-200 relative z-50">
        <div className="min-h-16 md:min-h-28 container mx-auto py-4 grid grid-cols-2 md:grid-cols-3 px-4 sm:px-6 lg:px-16">
          {/* Brand */}
          <div className="flex items-center justify-start text-center sm:text-left">
            <Link href="/">
              <span className="text-4xl font-bold">{brandName}</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="items-center justify-center text-center sm:text-left hidden md:flex">
            <div className="flex items-center gap-10">
              {navItems.map((item) => (
                <Link key={item.label} href={item.href}>
                  <span className={cn("text-sm font-semibold transition-colors", isActive(item.href) ? "text-red-500" : "hover:text-red-500")}>{item.label}</span>
                </Link>
              ))}
            </div>
          </nav>

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
      <div className={cn("fixed inset-0 bg-[#1a1a1a] z-[100] transition-all duration-500", isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none")}>
        {/* Close Button */}
        <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8 md:top-12 md:right-12 text-white hover:text-gray-300 transition-colors z-10" aria-label="Close menu">
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
              {/* Left Section - Company Info */}
              <div className={cn("transition-all duration-700 delay-100", isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
                <h2 className="text-white text-4xl md:text-5xl font-bold mb-12">{brandName}</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
                  {/* Address */}
                  {contactInfo.address && (
                    <div>
                      <h4 className="text-gray-400 text-sm mb-3">Address</h4>
                      <p className="text-white text-sm leading-relaxed whitespace-pre-line">{contactInfo.address}</p>
                    </div>
                  )}

                  {/* Phone Numbers */}
                  {contactInfo.phones && contactInfo.phones.length > 0 && (
                    <div>
                      <h4 className="text-gray-400 text-sm mb-3">Contact Phone</h4>
                      {contactInfo.phones.map((phone, index) => (
                        <a key={index} href={`tel:${phone.replace(/[^0-9+]/g, "")}`} className="text-red-500 text-sm block hover:text-red-400 transition-colors">
                          {phone}
                        </a>
                      ))}
                    </div>
                  )}

                  {/* Emails */}
                  {contactInfo.emails && contactInfo.emails.length > 0 && (
                    <div>
                      <h4 className="text-gray-400 text-sm mb-3">Contact Mail</h4>
                      {contactInfo.emails.map((email, index) => (
                        <a key={index} href={`mailto:${email}`} className="text-white text-sm hover:text-gray-300 transition-colors block">
                          {email}
                        </a>
                      ))}
                    </div>
                  )}

                  {/* Social Links */}
                  {contactInfo.socialLinks && contactInfo.socialLinks.length > 0 && (
                    <div>
                      <h4 className="text-gray-400 text-sm mb-3">Follow Us</h4>
                      <SocialLinks links={contactInfo.socialLinks} variant="dark" />
                    </div>
                  )}
                </div>

                {/* Let's Go Section */}
                <div className="mt-16 md:mt-24">
                  <h3
                    className="text-5xl md:text-7xl font-bold mb-6"
                    style={{
                      WebkitTextStroke: "1px rgba(255,255,255,0.3)",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Let&apos;s Go
                  </h3>
                  <div className="relative w-32 h-32 md:w-40 md:h-40">
                    <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-12 h-12 md:w-16 md:h-16 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section - Contact Form */}
              <div className={cn("transition-all duration-700 delay-200", isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
                <h2 className="text-white text-3xl md:text-4xl font-bold mb-10">Contact Us</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <InputField label="First Name" name="firstName" value={formData.firstName} onChange={handleFormChange} placeholder="Enter Your First Name" required variant="dark" />
                    <InputField label="Last Name" name="lastName" value={formData.lastName} onChange={handleFormChange} placeholder="Enter Your Last Name" required variant="dark" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleFormChange} placeholder="Enter Your Email" required variant="dark" />
                    <InputField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleFormChange} placeholder="Enter Your Phone Number" required variant="dark" />
                  </div>

                  <InputField label="Message" name="message" type="textarea" value={formData.message} onChange={handleFormChange} placeholder="Enter Your Message" rows={4} variant="dark" />

                  <div className="pt-4">
                    <button type="submit" className="bg-red-500 text-white px-10 py-4 font-medium hover:bg-red-600 transition-colors">
                      Submit Button
                    </button>
                  </div>
                </form>

                <div className="mt-10">
                  <p className="text-gray-400 text-sm">Couldn&apos;t find what you were looking for? Write to us at.</p>
                  <Link href={`mailto:info@${brandName.toLowerCase()}gmail.com`} className="text-white text-sm font-medium hover:text-red-500 transition-colors">
                    info@{brandName.toLowerCase()}gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <div className={cn("fixed inset-0 z-[100] md:hidden transition-all duration-300", isMobileMenuOpen ? "visible" : "invisible")}>
        {/* Backdrop */}
        <div className={cn("absolute inset-0 bg-black/20 transition-opacity duration-300", isMobileMenuOpen ? "opacity-100" : "opacity-0")} onClick={closeMobileMenu} />

        {/* Menu Panel */}
        <div className={cn("absolute top-0 right-0 h-full w-[85%] max-w-[320px] bg-white shadow-xl transition-transform duration-300 ease-out", isMobileMenuOpen ? "translate-x-0" : "translate-x-full")}>
          {/* Close Button */}
          <button onClick={closeMobileMenu} className="absolute top-6 right-6 text-gray-800 hover:text-gray-600 transition-colors" aria-label="Close mobile menu">
            <X className="w-6 h-6" strokeWidth={1.5} />
          </button>

          {/* Navigation */}
          <nav className="pt-20 px-6">
            <ul className="space-y-1">
              {navItems.map((item, index) => (
                <li key={item.label} className={cn("transition-all duration-300", isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0")} style={{ transitionDelay: `${index * 50}ms` }}>
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
    </>
  );
};

export default Header;
