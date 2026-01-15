import React from "react";
import { Service } from "@/types";
import { SectionTitle, Container } from "@/components/ui";
import { cn } from "@/lib/utils";

interface ServicesType2Props {
  title?: string;
  category?: string;
  services?: Service[];
}

// Default services
const defaultServices: Service[] = [
  {
    id: 1,
    title: "Web Design",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. consectetur adipisicing elit. Quisquam, quos",
  },
  {
    id: 2,
    title: "Development",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. consectetur adipisicing elit. Quisquam, quos",
  },
  {
    id: 3,
    title: "SEO Marketing",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. consectetur adipisicing elit. Quisquam, quos",
  },
  {
    id: 4,
    title: "Brand Identity",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. consectetur adipisicing elit. Quisquam, quos",
  },
  {
    id: 5,
    title: "Content Strategy",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. consectetur adipisicing elit. Quisquam, quos",
  },
  {
    id: 6,
    title: "Social Media",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. consectetur adipisicing elit. Quisquam, quos",
  },
];

/**
 * Services grid component (Type 2)
 * Displays services in a numbered grid layout with borders
 */
const ServicesType2: React.FC<ServicesType2Props> = ({ title = "Tailored Digital Solutions for Every Need.", category = "Services", services = defaultServices }) => {
  return (
    <Container className="flex flex-col">
      {/* Header Section */}
      <div className="flex flex-col mb-8 sm:mb-10 md:mb-12 max-w-4xl">
        <SectionTitle category={category} title={title} size="xl" />
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative">
        {services.map((item, index) => (
          <div key={item.id || index} className={cn("flex flex-col border-gray-200 p-4 sm:p-5 md:p-6 lg:p-8 space-y-3 sm:space-y-4 group", "border-b", index < 3 && "md:border-t", index % 3 === 0 && "lg:border-l", index % 3 === 1 && "lg:border-l lg:border-r", index % 3 === 2 && "lg:border-r", index % 2 === 0 ? "md:border-l md:border-r" : "md:border-r")}>
            <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-black/50">{String(index + 1).padStart(2, "0")}.</span>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-black font-semibold tracking-tight leading-tight">{item.title}</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ServicesType2;
