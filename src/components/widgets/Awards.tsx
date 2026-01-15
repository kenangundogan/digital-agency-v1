"use client";

import { ArrowRight, Plus, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { AwardCategory, AwardYear, AwardsProps } from "@/types";
import { Container } from "@/components/ui";
import { cn } from "@/lib/utils";

const defaultYears: AwardYear[] = [
  { year: "2023", isHighlighted: false },
  { year: "2024", isHighlighted: true },
  { year: "2025", isHighlighted: false },
];

const defaultCategories: AwardCategory[] = [
  {
    id: 1,
    title: "Digital Agency",
    description: "Define specific, measurable, achievable, relevant, and Develop wireframes and prototypes to visualize the user experience. time-bound (SMART) goals.",
  },
  {
    id: 2,
    title: "Creative Studio",
    description: "Define specific, measurable, achievable, relevant, and Develop wireframes and prototypes to visualize the user experience. time-bound (SMART) goals.",
  },
  {
    id: 3,
    title: "Web Design Agency",
    description: "Define specific, measurable, achievable, relevant, and Develop wireframes and prototypes to visualize the user experience. time-bound (SMART) goals.",
  },
];

const Awards: React.FC<AwardsProps> = ({ category = "Our Award", title = "Celebrating Award in Digital Solutions", description = "Our journey begins with understanding your unique business needs and goals. We dive deep into your vision to ensure our approach.", years = defaultYears, categories = defaultCategories, ctaText = "C", ctaLink = "/contact", defaultOpenIndex = 1 }) => {
  const [openIndex, setOpenIndex] = useState<number>(defaultOpenIndex);
  const [selectedYearIndex, setSelectedYearIndex] = useState<number>(2); // 2025 default (index 2)

  const toggleCategory = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const handleYearClick = (index: number) => {
    setSelectedYearIndex(index);
    setOpenIndex(index);
  };

  return (
    <Container className="py-12 sm:py-16 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16">
        <div className="lg:col-span-4 space-y-6 sm:space-y-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-px bg-gray-300" />
            <span className="text-sm sm:text-base text-gray-600">{category}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">{title}</h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{description}</p>

          <Link href={ctaLink} className="inline-flex items-center justify-center gap-3 px-8 py-6 rounded-full border-2 border-gray-200 hover:border-gray-900 transition-all duration-300 group w-fit">
            <span className="text-sm sm:text-base font-medium">{ctaText}</span>
            <div className="relative">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute -inset-1 border-2 border-gray-900 rounded-full" />
            </div>
          </Link>
        </div>

        <div className="lg:col-span-3 flex lg:flex-col items-center justify-center gap-6 sm:gap-8">
          {years.map((yearData, index) => (
            <button key={index} onClick={() => handleYearClick(index)} className={cn("transition-all duration-300 cursor-pointer hover:text-black/80", selectedYearIndex === index ? "text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-black" : "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-200 hover:text-gray-400")}>
              {yearData.year}
            </button>
          ))}
        </div>

        <div className="lg:col-span-5 space-y-4">
          {categories.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.id} className={cn("overflow-hidden transition-all duration-500 ease-in-out", isOpen ? "bg-black text-white" : "bg-white border-2 border-gray-100 hover:border-gray-300")}>
                <button onClick={() => toggleCategory(index)} className={cn("w-full flex items-center justify-between px-6 sm:px-8 py-5 sm:py-6 text-left transition-all", isOpen ? "hover:bg-gray-900" : "hover:bg-gray-50")}>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="text-base sm:text-lg font-medium">{String(index + 1).padStart(2, "0")}.</span>
                    <h3 className="text-base sm:text-lg font-semibold">{item.title}</h3>
                  </div>
                  <div className="shrink-0">{isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Plus className="w-5 h-5 sm:w-6 sm:h-6" />}</div>
                </button>

                <div className={cn("transition-all duration-500 ease-in-out overflow-hidden", isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0")}>
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2">
                    <div className="w-12 h-px bg-white/30 mb-4" />
                    <p className="text-sm sm:text-base leading-relaxed text-white/90">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Awards;
