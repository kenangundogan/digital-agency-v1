import { Video, Faq, Testimonials, Partners, CategoryTitle, AboutType2, Skills, ServicesType2 } from "@/components";

const AboutPage = () => {
  return (
    <main className="space-y-12 sm:space-y-16 lg:space-y-24 pb-12 sm:pb-16 lg:pb-24">
      <CategoryTitle title="About" title2="Page" />
      <Video />
      <AboutType2 />
      <Skills />
      <ServicesType2 />
      <Faq />
      <Testimonials />
      <Partners />
    </main>
  );
};

export default AboutPage;
