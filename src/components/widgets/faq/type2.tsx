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
const FaqType2: React.FC<FAQProps> = ({ category = "FAQ", title = "Frequently Asked Questions", items = defaultFaqItems, defaultOpenIndex = 0 }) => {
  const [openIndex, setOpenIndex] = useState<number>(defaultOpenIndex);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16">
        <div className="lg:col-span-5 xl:col-span-5">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-8 sm:mb-10 lg:mb-12">Frequently Asked Questions.</h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed mb-8 sm:mb-10 lg:mb-12">If you have any questions, please feel free to contact us. We will be happy to help you.</p>
          <a href="mailto:info@onnatgmail.com" className="text-sm sm:text-base lg:text-lg xl:text-xl text-red-500 hover:text-red-600 transition-colors leading-relaxed">
            Info@onnatgmail.com
          </a>
        </div>
        <div className="lg:col-span-7 xl:col-span-7">
          <div className="space-y-3 sm:space-y-4">
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
        </div>
      </div>
    </Container>
  );
};

export default FaqType2;
