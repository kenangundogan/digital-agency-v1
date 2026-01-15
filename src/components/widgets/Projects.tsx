import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PortfolioItem } from "@/types";
import { SectionTitle, Container } from "@/components/ui";

interface ProjectsProps {
  category?: string;
  items?: PortfolioItem[];
  columns?: 2 | 3 | 4;
}

// Default project items
const defaultProjects: PortfolioItem[] = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  title: `Project ${index + 1}`,
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  image: `https://picsum.photos/800/800?random=${index + 1}`,
  href: `/projects/${index + 1}`,
}));

/**
 * Projects grid component
 * Displays portfolio/project items in a responsive grid with hover effects
 */
const Projects: React.FC<ProjectsProps> = ({ category = "Projects", items = defaultProjects, columns = 3 }) => {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <Container>
      {/* Header */}
      <div className="flex flex-col items-center justify-center mb-8 sm:mb-12">
        <SectionTitle category={category} title="" align="center" />
      </div>

      {/* Projects Grid */}
      <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6 sm:gap-8 mb-8 sm:mb-12`}>
        {items.map((project, index) => (
          <Link key={project.id || index} href={project.href || "#"} className="relative overflow-hidden group aspect-square">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300" />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
              <div className="relative">
                <div className="w-full h-full flex flex-col items-start justify-center p-4 space-y-4">
                  <h3 className="text-white text-2xl font-bold">{project.title}</h3>
                  {project.description && <p className="text-white text-sm sm:text-base font-bold">{project.description}</p>}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white border border-gray-200 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300 cursor-pointer shadow-sm">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rotate-45" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default Projects;
