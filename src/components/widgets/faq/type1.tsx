"use client";

import React, { useState } from "react";
import { X, Plus } from "lucide-react";
import { FAQProps, FAQItem } from "@/types";
import { SectionTitle, Container } from "@/components/ui";
import { cn } from "@/lib/utils";

// Default FAQ items
const defaultFaqItems: FAQItem[] = [
  {
    id: 1,
    question: "What is the typical timeline for a project?",
    answer: "Meeting project deadlines is a top priority. We understand the importance of timely delivery and have established a comprehensive approach to ensure that all projects are completed on schedule without compromising quality.",
  },
  {
    id: 2,
    question: "How do you ensure project deadlines are met?",
    answer: "Meeting project deadlines is a top priority. We understand the importance of timely delivery and have established a comprehensive approach to ensure that all projects are completed on schedule without compromising quality.",
  },
  {
    id: 3,
    question: "How do you handle website maintenance and updates?",
    answer: "Meeting project deadlines is a top priority. We understand the importance of timely delivery and have established a comprehensive approach to ensure that all projects are completed on schedule without compromising quality.",
  },
  {
    id: 4,
    question: "What strategies do you use for digital marketing?",
    answer: "Meeting project deadlines is a top priority. We understand the importance of timely delivery and have established a comprehensive approach to ensure that all projects are completed on schedule without compromising quality.",
  },
  {
    id: 5,
    question: "What payment methods do you accept?",
    answer: "Meeting project deadlines is a top priority. We understand the importance of timely delivery and have established a comprehensive approach to ensure that all projects are completed on schedule without compromising quality.",
  },
];

/**
 * FAQ accordion section component
 * Displays expandable questions and answers
 */
const Faq: React.FC<FAQProps> = ({ category = "FAQ", title = "Frequently Asked Questions", items = defaultFaqItems, defaultOpenIndex = 0 }) => {
  const [openIndex, setOpenIndex] = useState<number>(defaultOpenIndex);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <Container>
      {/* Header */}
      <div className="flex flex-col items-center justify-center mb-8 sm:mb-12">
        <SectionTitle category={category} title={title} align="center" size="xl" />
      </div>

      {/* FAQ Items */}
      <div className="mx-auto space-y-3 sm:space-y-4">
        {items.map((item, index) => (
          <div key={item.id || index} className="rounded-lg overflow-hidden transition-all duration-300">
            <button onClick={() => toggleFaq(index)} className="w-full flex items-center justify-between p-4 sm:p-5 lg:p-6 text-left hover:bg-gray-100 transition-colors">
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold pr-4 sm:pr-6 lg:pr-8">{item.question}</h3>
              <div className="shrink-0">{openIndex === index ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Plus className="w-5 h-5 sm:w-6 sm:h-6" />}</div>
            </button>

            <div className={cn("transition-all duration-300 ease-in-out overflow-hidden", openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0")}>
              <hr className="mb-3 sm:mb-4 border-gray-200" />
              <div className="px-4 sm:px-5 lg:px-6 pb-4 sm:pb-5 lg:pb-6 pt-0">
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            </div>

            <hr className="mb-3 sm:mb-4 border-gray-200" />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Faq;
