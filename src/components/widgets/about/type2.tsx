import React from "react";
import { AboutFeature } from "@/types";
import { SectionTitle, Container } from "@/components/ui";
import RoundedMarquee from "../../marquee/RoundedMarquee";

interface AboutType2Props {
  title?: string;
  description?: string;
  image?: string;
  features?: AboutFeature[];
  marqueeTitle?: string;
  marqueeTitle2?: string;
}

// Default features
const defaultFeatures: AboutFeature[] = [
  {
    title: "Marketing Experts",
    description: "Our marketing experts don't just follow trends; we set them. Through data driven insights and creative solutions, we develop customized marketing plans that resonate with your target audience.",
  },
  {
    title: "Design Experts",
    description: "Our design experts don't just follow trends; we set them. Through data driven insights and creative solutions, we develop customized marketing plans that resonate with your target audience.",
  },
];

/**
 * About section component (Type 2)
 * Alternative layout with numbered features and rotating marquee
 */
const AboutType2: React.FC<AboutType2Props> = ({ title = "We Are A Creative Agency Dedicated.", description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. consectetur adipisicing elit. Quisquam, quos", image = "https://picsum.photos/800/600", features = defaultFeatures, marqueeTitle = "Digital", marqueeTitle2 = "Agency" }) => {
  return (
    <Container className="flex flex-col">
      {/* Header Section */}
      <div className="flex flex-col mb-8 sm:mb-10 md:mb-12 max-wß-4xl">
        <SectionTitle category={title} title={title} description={description} size="xl" />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 relative">
        {/* Image Section */}
        <div className="w-full aspect-video overflow-hidden rounded-none sm:rounded-lg">
          <img src={image} alt="About Us" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>

        {/* Content Section */}
        <div className="border-t lg:border-l lg:border-t border-gray-200 p-4 sm:p-6 md:p-8 lg:p-10 space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16 relative">
          {/* Features List */}
          <div className="space-y-6 sm:space-y-8 md:space-y-10">
            {features.map((item, index) => (
              <div key={index} className="flex flex-col space-y-2 sm:space-y-3">
                <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-black/50">{String(index + 1).padStart(2, "0")}.</span>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-black font-semibold tracking-tight leading-tight">{item.title}</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Marquee Section */}
          <div className="relative py-16 sm:py-20 md:py-24 lg:py-32">
            <RoundedMarquee title={marqueeTitle} title2={marqueeTitle2} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutType2;
