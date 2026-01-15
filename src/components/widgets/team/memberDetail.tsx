import { CircularLinkButton, Container, SectionTitle, SocialLinks } from "@/components/ui";
import { SocialLink } from "@/types";
import React from "react";

const MemberDetail: React.FC<{ id: string | number }> = ({ id }) => {
  const member = {
    id: 1,
    name: "John Doe",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    role: "CEO",
    image: "https://picsum.photos/800/600?random=10",
    personalInfo: [
      {
        label: "Expertise",
        value: "UX/UI Designer",
      },
      {
        label: "Experience",
        value: "10 Years",
      },
      {
        label: "Phone",
        value: "(+123) 456 78 90",
      },
      {
        label: "Email",
        value: "john.doe@example.com",
      },
      {
        label: "Location",
        value: "New York, USA",
      },
      {
        label: "Website",
        value: "https://www.example.com",
      },
    ],
    socialLinks: [
      { platform: "facebook", href: "#" },
      { platform: "instagram", href: "#" },
      { platform: "linkedin", href: "#" },
      { platform: "twitter", href: "#" },
    ],
  };

  return (
    <Container>
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 mb-8 sm:mb-12 lg:mb-16">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-2 mb-4 sm:mb-6">
            <div className="w-8 sm:w-12 h-0.5 bg-gray-400" />
            <span className="text-sm sm:text-base font-medium text-gray-600">Team</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">Meet {member.name}</h2>
          <p className="text-gray-500 text-lg">{member.description}</p>
        </div>

        {/* Desktop Link Button */}
        <CircularLinkButton href={`/contact`} text="Contact Us" variant="light" className="hidden lg:flex" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12 lg:mb-16 items-center">
        <div className="aspect-square">
          <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col items-start justify-start space-y-6">
          <p className="text-lg">{member.longDescription}</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12 lg:mb-16">
            {member.personalInfo.map((info) => (
              <div key={info.label}>
                <span className="font-bold text-2xl">{info.label} :</span>
                <p className="text-lg">{info.value}</p>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Me</h3>
            <SocialLinks links={member.socialLinks as unknown as SocialLink[]} size="lg" variant="light" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MemberDetail;
