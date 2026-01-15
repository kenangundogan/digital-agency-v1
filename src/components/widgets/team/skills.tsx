import React from "react";
import { Container } from "@/components/ui";
import { TeamSkillBar, TeamSkillCard, TeamSkillsProps } from "@/types";

// Default data
const defaultSkillBars: TeamSkillBar[] = [
  { name: "WordPress", percentage: 80 },
  { name: "Graphic Design", percentage: 50 },
  { name: "HTML / CSS", percentage: 70 },
];

const defaultSkillCards: TeamSkillCard[] = [
  {
    name: "Figma",
    percentage: 80,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Photoshop",
    percentage: 75,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
  },
  {
    name: "Bootstrap",
    percentage: 80,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
];

/**
 * Team member skills component
 * Displays both progress bars and skill cards
 */
const TeamSkills: React.FC<TeamSkillsProps> = ({ skillBars = defaultSkillBars, skillCards = defaultSkillCards }) => {
  return (
    <div className="w-full bg-gray-50">
      <Container className="py-12 sm:py-16 lg:py-20">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">Skills</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          <div className="space-y-8 sm:space-y-10">
            {skillBars.map((skill) => (
              <div key={skill.name} className="w-full space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{skill.name}</h3>
                  <span className="text-lg sm:text-xl font-bold text-gray-900">{skill.percentage} %</span>
                </div>
                <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-black transition-all duration-1000 ease-out rounded-full" style={{ width: `${skill.percentage}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {skillCards.map((skill) => (
              <div key={skill.name} className={`${skill.color} border border-gray-200 rounded-lg p-6 sm:p-8 flex flex-col items-center justify-center gap-4`}>
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                  <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                </div>
                <div className="text-center space-y-1">
                  <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">{skill.percentage}%</h3>
                  <p className="text-base sm:text-lg text-gray-600">{skill.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TeamSkills;
