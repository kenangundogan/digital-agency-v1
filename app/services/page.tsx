import {
  Video,
  BestServices,
  About,
  Testimonials,
  Partners,
  CategoryTitle,
  Skills,
} from "@/components";

const ServicesPage = () => {
  return (
    <main className="space-y-12 sm:space-y-16 lg:space-y-24 pb-12 sm:pb-16 lg:pb-24">
      <CategoryTitle title="Services" title2="Page" />
      <Video />
      <BestServices />
      <Skills />
      <About />
      <Testimonials />
      <Partners />
    </main>
  );
};

export default ServicesPage;
