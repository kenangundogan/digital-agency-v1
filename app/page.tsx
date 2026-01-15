import {
  Hero,
  HeroType2,
  Video,
  About,
  BestServices,
  Portfolio,
  Member,
  Faq,
  Partners,
  ContactUs,
  Testimonials,
  Blog,
  Marquee,
} from "@/components";

export default function Home() {
  return (
    <main className="space-y-12 sm:space-y-16 lg:space-y-24">
      <HeroType2 />
      <Hero />
      <Video />
      <Marquee
        items={[
          "Web Design and Development",
          "Visual Branding",
          "Digital Marketing",
          "Search Engine Optimization",
          "Search Engine Marketing",
          "Content Creation",
          "Social Media Management",
          "Email Marketing",
        ]}
      />
      <About />
      <BestServices />
      <Portfolio />
      <Member />
      <Faq />
      <Partners />
      <ContactUs darkMode={true} />
      <Testimonials />
      <Blog />
      <Marquee
        items={[
          "Let's Connect",
          "Let's Talk",
          "Let's Create",
          "Let's Build",
          "Let's Grow",
          "Let's Succeed",
          "Let's Innovate",
          "Let's Excel",
        ]}
      />
    </main>
  );
}
