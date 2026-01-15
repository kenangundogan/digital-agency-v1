import React from "react";
import Link from "next/link";
import { TeamProps, TeamMember, SocialLink } from "@/types";
import { SectionTitle, SocialLinks, Container } from "@/components/ui";

// Default team members
const defaultMembers: TeamMember[] = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO",
    image: "https://picsum.photos/800/600?random=10",
    socialLinks: [
      { platform: "facebook", href: "#" },
      { platform: "instagram", href: "#" },
      { platform: "linkedin", href: "#" },
      { platform: "twitter", href: "#" },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Creative Director",
    image: "https://picsum.photos/800/600?random=11",
    socialLinks: [
      { platform: "facebook", href: "#" },
      { platform: "instagram", href: "#" },
      { platform: "linkedin", href: "#" },
      { platform: "twitter", href: "#" },
    ],
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Lead Developer",
    image: "https://picsum.photos/800/600?random=12",
    socialLinks: [
      { platform: "facebook", href: "#" },
      { platform: "instagram", href: "#" },
      { platform: "linkedin", href: "#" },
      { platform: "twitter", href: "#" },
    ],
  },
  {
    id: 4,
    name: "Sarah Wilson",
    role: "Marketing Manager",
    image: "https://picsum.photos/800/600?random=13",
    socialLinks: [
      { platform: "facebook", href: "#" },
      { platform: "instagram", href: "#" },
      { platform: "linkedin", href: "#" },
      { platform: "twitter", href: "#" },
    ],
  },
  {
    id: 5,
    name: "Sarah Wilson",
    role: "Marketing Manager",
    image: "https://picsum.photos/800/600?random=14",
    socialLinks: [
      { platform: "facebook", href: "#" },
      { platform: "instagram", href: "#" },
      { platform: "linkedin", href: "#" },
      { platform: "twitter", href: "#" },
    ],
  },
  {
    id: 6,
    name: "Sarah Wilson",
    role: "Marketing Manager",
    image: "https://picsum.photos/800/600?random=15",
    socialLinks: [
      { platform: "facebook", href: "#" },
      { platform: "instagram", href: "#" },
      { platform: "linkedin", href: "#" },
      { platform: "twitter", href: "#" },
    ],
  },
];

/**
 * Team member section component
 * Displays team members in a grid with hover effects
 */
const TeamMember2: React.FC<TeamProps> = ({ category = "Our Team", title = "Meet Our Team", members = defaultMembers }) => {
  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
        {members.map((member, index) => (
          <Link href={`/team/${member.id}`} key={member.id || index} className="relative bg-white group">
            <div className="relative aspect-square group-hover:scale-105 transition-all duration-300 overflow-hidden group">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 w-full h-full bg-black/50 p-4 flex flex-col items-start justify-end space-y-4">
                {member.socialLinks && member.socialLinks.length > 0 && (
                  <ul className="flex gap-2 sm:gap-3 lg:gap-4">
                    {member.socialLinks.map((social, socialIndex) => (
                      <li key={socialIndex} className="opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ transitionDelay: `${socialIndex * 50}ms` }}>
                        <SocialLinks links={[social]} size="sm" variant="light" />
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-col items-start justify-center pb-2 sm:pb-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{member.name}</h3>
                  <p className="text-sm sm:text-base text-white">{member.role}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default TeamMember2;
