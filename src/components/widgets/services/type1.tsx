import React from "react";
import Link from "next/link";
import { ArrowRight, BrainCircuit } from "lucide-react";
import { BestServicesProps, Service } from "@/types";
import { SectionTitle, Container } from "@/components/ui";

// Default services data
const defaultServices: Service[] = [
  {
    id: 1,
    category: "Visual Branding",
    title: "Web Design and Development",
    description: "Crafting visually appealing and user websites tailored to your brand's and objectives.",
    icon: <BrainCircuit className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 group-hover:animate-spin-slow" strokeWidth={0.5} />,
    href: "/services/web-design",
  },
  {
    id: 2,
    category: "Digital Marketing",
    title: "SEO & Content Marketing",
    description: "Strategic content and SEO solutions to boost your online presence and reach.",
    icon: <BrainCircuit className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 group-hover:animate-spin-slow" strokeWidth={0.5} />,
    href: "/services/marketing",
  },
  {
    id: 3,
    category: "Brand Identity",
    title: "Logo & Brand Design",
    description: "Creating memorable brand identities that resonate with your target audience.",
    icon: <BrainCircuit className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 group-hover:animate-spin-slow" strokeWidth={0.5} />,
    href: "/services/branding",
  },
];

/**
 * Best Services section component
 * Displays a grid of service cards with icons
 */
const BestServices: React.FC<BestServicesProps> = ({ category = "Best Services", title = "Our Best Services", services = defaultServices, ctaText = "All Services", ctaLink = "/services" }) => {
  return (
    <Container>
      {/* Header */}
      <div className="flex flex-col items-center justify-center mb-8 sm:mb-12">
        <SectionTitle category={category} title={title} align="center" size="xl" />
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
        {services.map((service, index) => (
          <div key={service.id || index} className="relative bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-12 pb-16 sm:pb-20 space-y-6 sm:space-y-8 lg:space-y-10 group hover:shadow-lg transition-shadow duration-300">
            {service.category && (
              <ul className="list-disc pl-4">
                <li className="text-base sm:text-lg lg:text-xl font-medium">{service.category}</li>
              </ul>
            )}

            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">{service.title}</div>

            {service.icon}

            <p className="text-sm sm:text-base lg:text-lg">{service.description}</p>

            <Link href={service.href || "#"} className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white border border-gray-200 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300 cursor-pointer shadow-sm" aria-label={`Learn more about ${service.title}`}>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rotate-45" />
            </Link>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex items-center justify-center">
        <Link href={ctaLink} className="bg-black text-white px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-center gap-2 text-sm sm:text-base hover:bg-gray-800 transition-colors">
          <span>{ctaText}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </Container>
  );
};

export default BestServices;
