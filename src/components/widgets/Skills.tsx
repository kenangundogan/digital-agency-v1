import React from "react";
import { Skill, SkillsProps } from "@/types";
import { Container } from "@/components/ui";

interface CircularProgressProps {
  percentage: number;
  label: string;
}

/**
 * Circular progress indicator component
 * Used to display skill percentages
 */
const CircularProgress: React.FC<CircularProgressProps> = ({ percentage, label }) => {
  const strokeWidth = 2;
  const baseSize = 140;
  const radius = (baseSize - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4">
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36">
        <svg viewBox={`0 0 ${baseSize} ${baseSize}`} className="w-full h-full transform -rotate-90">
          {/* Background Circle */}
          <circle cx={baseSize / 2} cy={baseSize / 2} r={radius} stroke="#e5e7eb" strokeWidth={strokeWidth} fill="none" />
          {/* Progress Circle */}
          <circle cx={baseSize / 2} cy={baseSize / 2} r={radius} stroke="#000000" strokeWidth={strokeWidth} fill="none" strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" className="transition-all duration-1000 ease-out" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">{percentage}%</span>
        </div>
      </div>
      <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-center px-2">{label}</p>
    </div>
  );
};

// Default skills
const defaultSkills: Skill[] = [
  { percentage: 75, label: "Web Solution" },
  { percentage: 90, label: "Mobile Solution" },
  { percentage: 65, label: "Custom Reporting" },
];

/**
 * Skills section component
 * Displays circular progress indicators for different skill areas
 */
const Skills: React.FC<SkillsProps> = ({ title = "Digital", subtitle = "Services Skills", skills = defaultSkills }) => {
  return (
    <div className="w-full bg-gray-100">
      <Container className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Title Section */}
          <div className="flex flex-col items-start justify-center space-y-1 sm:space-y-2">
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[100px] font-bold text-gray-200">{title}</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[100px] font-bold text-black leading-tight">
              <span className="sm:pl-8 md:pl-12 lg:pl-16 xl:pl-20">{subtitle?.split(" ")[0]}</span>
              <br />
              {subtitle?.split(" ").slice(1).join(" ")}
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-6 xl:gap-8">
            {skills.length >= 1 && (
              <div className="flex flex-col items-center justify-between gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24">
                <CircularProgress percentage={skills[0].percentage} label={skills[0].label} />
                {skills.length >= 2 && <CircularProgress percentage={skills[1].percentage} label={skills[1].label} />}
              </div>
            )}

            {skills.length >= 3 && (
              <div className="flex flex-col items-center justify-center">
                <CircularProgress percentage={skills[2].percentage} label={skills[2].label} />
              </div>
            )}

            <div className="hidden sm:block" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
