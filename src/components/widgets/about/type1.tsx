import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { AboutProps, AboutFeature } from "@/types";
import { SectionTitle, CircularLinkButton, Container } from "@/components/ui";

// Default features list
const defaultFeatures: AboutFeature[] = [
  { title: "Creative Solutions", description: "Innovative approaches to digital challenges" },
  { title: "Expert Team", description: "Skilled professionals dedicated to your success" },
  { title: "Results Driven", description: "Focused on delivering measurable outcomes" },
];

/**
 * About section component with two layout variants
 * Can display company info, features list, and images
 */
const About: React.FC<AboutProps> = ({ category = "About Us", title = "We Are A Creative Agency Dedicated.", description, image = "https://picsum.photos/800/600?random=1", secondaryTitle = "To be the leading creative agency recognized for our ability to turn bold ideas into tangible results.", secondaryDescription = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. consectetur adipisicing elit. Quisquam, quos", secondaryImage = "https://picsum.photos/800/600?random=2", features = defaultFeatures, ctaText = "About Us", ctaLink = "/about" }) => {
  return (
    <Container className="flex flex-col space-y-12 sm:space-y-16 lg:space-y-24">
      {/* First Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
        <div className="flex flex-col space-y-4 sm:space-y-6 order-2 lg:order-1">
          <SectionTitle category={category} title={title} size="xl" />

          {/* Desktop Link Button */}
          <CircularLinkButton href={ctaLink} text={ctaText} variant="light" className="hidden lg:flex" />

          {/* Mobile Link Button */}
          <Link href={ctaLink} className="flex lg:hidden items-center gap-2 text-base font-medium hover:gap-4 transition-all duration-300">
            <span>{ctaText}</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="aspect-video order-1 lg:order-2">
          <img src={image} alt="About Us" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Second Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
        <div className="aspect-video">
          <img src={secondaryImage} alt="Our Vision" className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col space-y-4 sm:space-y-6">
          <p className="text-xl sm:text-2xl lg:text-3xl text-black font-semibold tracking-tight leading-tight lg:leading-normal max-w-2xl">{secondaryTitle}</p>

          {secondaryDescription && <p className="text-sm sm:text-base text-gray-600">{secondaryDescription}</p>}

          {features.length > 0 && (
            <ul className="flex flex-col gap-y-4 sm:gap-y-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span>
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                  </span>
                  <span className="text-base sm:text-lg lg:text-xl font-medium">{feature.title}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Container>
  );
};

export default About;
