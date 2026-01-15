import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FooterProps, NavItem, SocialLink } from "@/types";
import { SocialLinks } from "@/components/ui";
import { cn } from "@/lib/utils";

// Default data
const defaultSocialLinks: SocialLink[] = [
  { platform: "facebook", href: "#" },
  { platform: "twitter", href: "#" },
  { platform: "instagram", href: "#" },
  { platform: "youtube", href: "#" },
];

const defaultNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Page", href: "#" },
];

const defaultServices: NavItem[] = [
  { label: "Content Writing", href: "/services/content-writing" },
  { label: "SEO Services", href: "/services/seo" },
  { label: "UX/UI Design", href: "/services/design" },
  { label: "Branding Design", href: "/services/branding" },
];

const defaultBottomLinks: NavItem[] = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

const Footer: React.FC<FooterProps> = ({
  aboutText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nesciunt, modi, ex consectetur aspernatur explicabo adipisci eveniet, non ducimus ea blanditiis consequatur. Nesciunt qui praesentium dolorum consectetur! Explicabo, nam atque.",
  socialLinks = defaultSocialLinks,
  sections = [
    { title: "Navigation", links: defaultNavItems },
    { title: "Services", links: defaultServices },
  ],
  bottomLinks = defaultBottomLinks,
  copyrightText = "© 1995-2024 All rights for",
  brandName = "Onnat",
}) => {
  return (
    <footer className="bg-[#0a0a0a] text-gray-300 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Section */}
          <div className="space-y-6">
            <h3 className="text-white text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 leading-relaxed text-sm">{aboutText}</p>
            <SocialLinks links={socialLinks} variant="light" />
          </div>

          {/* Dynamic Sections */}
          {sections.map((section, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-white text-xl font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Section */}
          <div className="space-y-6">
            <h3 className="text-white text-xl font-semibold mb-4">Newsletter</h3>
            <div className="space-y-4">
              <div className="relative">
                <input type="email" placeholder="Enter Your Email" className="w-full bg-transparent border-b border-gray-700 py-3 pr-12 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-white transition-colors duration-300" />
                <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-red-500 hover:bg-red-600 rounded flex items-center justify-center transition-colors duration-300" aria-label="Subscribe">
                  <ArrowRight size={18} className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-500 text-sm order-2 md:order-1">
              {copyrightText} <span className="text-white font-medium">{brandName}</span> exclusive
            </p>

            <div className="order-1 md:order-2">
              <h2 className="text-white text-4xl md:text-5xl font-bold">{brandName}</h2>
            </div>

            <div className="flex gap-6 text-sm order-3">
              {bottomLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
