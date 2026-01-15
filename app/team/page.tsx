import { Testimonials, CategoryTitle, TeamMember2 } from "@/components";
import React from "react";

const page = () => {
  return (
    <main className="space-y-12 sm:space-y-16 lg:space-y-24 pb-12 sm:pb-16 lg:pb-24">
      <CategoryTitle title="Team" title2="Page" />
      <TeamMember2 />
      <Testimonials />
    </main>
  );
};

export default page;
