import { CategoryTitle, Projects } from "@/components";

const ProjectsPage = () => {
  return (
    <main className="space-y-12 sm:space-y-16 lg:space-y-24 pb-12 sm:pb-16 lg:pb-24">
      <CategoryTitle title="Projects" title2="Page" />
      <Projects />
    </main>
  );
};

export default ProjectsPage;
