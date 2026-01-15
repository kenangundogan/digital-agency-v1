import React from "react";
import { Star } from "lucide-react";
import { EmblaOptionsType } from "embla-carousel";
import { TestimonialsProps, Testimonial } from "@/types";
import EmblaCarousel from "../carousel/MainCarousel";
import { Container } from "@/components/ui";

// Default testimonials
const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Manager",
    company: "TechCorp",
    image: "https://picsum.photos/600/600?random=20",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo sequi aliquid eveniet repellat vel qui sapiente, corrupti veritatis possimus placeat quos ullam impedit. Expedita illo harum necessitatibus nobis praesentium corporis?",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "StartupXYZ",
    image: "https://picsum.photos/600/600?random=21",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo sequi aliquid eveniet repellat vel qui sapiente, corrupti veritatis possimus placeat quos ullam impedit.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Creative Director",
    company: "DesignStudio",
    image: "https://picsum.photos/600/600?random=22",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo sequi aliquid eveniet repellat vel qui sapiente, corrupti veritatis possimus placeat.",
    rating: 5,
  },
];

/**
 * Testimonials carousel section component
 * Displays client testimonials in a slider format
 */
const Testimonials: React.FC<TestimonialsProps> = ({ testimonials = defaultTestimonials }) => {
  const options: EmblaOptionsType & { autoplay: boolean } = {
    loop: true,
    autoplay: false,
  };

  return (
    <div className="w-full flex items-center justify-center flex-col overflow-hidden">
      {/* Large Background Title */}
      <h2 className="text-4xl md:text-[200px] font-bold text-center mb-12 text-transparent [-webkit-text-stroke:2px_#1f2937] [text-stroke:2px_#1f2937] opacity-15">Testimonials</h2>

      <Container>
        <EmblaCarousel options={options} slideSize="100%" slideSpacing="1rem" maxWidth="max-w-full">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex-[0_0_var(--slide-size)] min-w-0 pl-(--slide-spacing) md:p-6 lg:p-10">
              <div className="flex flex-col lg:flex-row items-center h-full justify-between gap-6 sm:gap-8 lg:gap-12">
                {/* Image */}
                <div
                  className="w-full lg:w-auto lg:max-w-xl relative order-1 lg:order-2 aspect-square
                    md:before:content-[''] md:before:absolute md:before:top-0 md:before:left-4 sm:md:before:left-6 lg:md:before:left-10 
                    md:before:w-full md:before:h-full md:before:bg-gray-50 before:-z-10 
                    pl-0 md:p-6 lg:p-10 lg:pl-0!"
                >
                  <img src={testimonial.image} alt={testimonial.name} className="w-full" />
                </div>

                {/* Content */}
                <div className="w-full h-full lg:max-w-2xl flex flex-col justify-center items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
                  <div className="flex flex-col mb-4 sm:mb-6 lg:mb-10">
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">{testimonial.name}</span>
                    <span className="text-base sm:text-lg lg:text-xl text-gray-500">
                      {testimonial.role}
                      {testimonial.company && ` at ${testimonial.company}`}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base lg:text-lg text-gray-500 mb-4 sm:mb-6 lg:mb-10">{testimonial.content}</p>

                  {/* Rating Stars */}
                  {testimonial.rating && (
                    <div className="flex items-center justify-center lg:justify-start gap-1 sm:gap-2">
                      {Array.from({ length: testimonial.rating }).map((_, index) => (
                        <Star key={index} className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-black" fill="currentColor" />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </EmblaCarousel>
      </Container>
    </div>
  );
};

export default Testimonials;
