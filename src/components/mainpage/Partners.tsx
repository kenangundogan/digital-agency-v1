import React from "react";
import Link from "next/link";
import { PartnersProps, Partner } from "@/types";
import { Container } from "@/components/ui";

// Default partners
const defaultPartners: Partner[] = [
  { id: 1, name: "Google", logo: "/google-logo.png", href: "#" },
  { id: 2, name: "Partner 2", logo: "/google-logo.png", href: "#" },
  { id: 3, name: "Partner 3", logo: "/google-logo.png", href: "#" },
  { id: 4, name: "Partner 4", logo: "/google-logo.png", href: "#" },
  { id: 5, name: "Partner 5", logo: "/google-logo.png", href: "#" },
  { id: 6, name: "Partner 6", logo: "/google-logo.png", href: "#" },
];

/**
 * Partners/Clients section component
 * Displays partner logos in a responsive grid
 */
const Partners: React.FC<PartnersProps> = ({ title = "More than 4k+ Trusted Partner", partners = defaultPartners }) => {
  return (
    <Container>
      {/* Title */}
      <div className="w-full flex items-center justify-center mb-6 sm:mb-8 lg:mb-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center">{title}</h2>
      </div>

      {/* Partners Grid */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-8">
        {partners.map((partner, index) => (
          <Link key={partner.id || index} href={partner.href || "#"} className="p-4 sm:p-6 lg:p-8 border border-gray-200 flex items-center justify-center group hover:bg-gray-100 transition-all duration-300">
            <img src={partner.logo} alt={partner.name} className="h-4 sm:h-5 lg:h-6 object-contain group-hover:scale-110 transition-all duration-300" />
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default Partners;
